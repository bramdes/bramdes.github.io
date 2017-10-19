

function readFile(file, callback){
     var reader = new FileReader();

     // Closure to capture the file information.
           reader.onload = (function(theFile) {
             return function(e) {
               //var span = document.createElement('span');
               //span.innerHTML = ['<textarea>', e.target.result, '"</textarea>'].join('');
               //document.getElementById('fileList').insertBefore(span, null);

               //
                var fileContentJson=JSON.parse(e.target.result);
               var data = [
                 {
                   x: getRequestTimesArray(fileContentJson),
                   type: 'histogram',
               	marker: {
                   //color: 'rgba(100,250,100,0.7)',
               	},
                 }
               ];
               var layout = {
                 //autosize: false,
                 //width: 500,
                // height: 500
                title:'Histogram access times (ms)',
                margin: { t: 28 },
                yaxis: {
                    mode: 'lines+markers',
                    //type: 'log',
                    autorange: true
                }
               };
               Plotly.newPlot('histogramDiv', data,layout);
               //metrics dataframe
               //TODO
               //document.getElementById('metricsTable').innerHTML= getDataFrameShow(fileContentJson);
               //error cases
               var problemCases= _.pick(fileContentJson.QUERY_BENCHMARK.benchmarkRunResults, function(value, key, object) {
                 var currentMetric=object[key];
                 return _.countBy(currentMetric, function(currentMetricsStat) {
                          return currentMetricsStat.errorCount>0 ? 'errors': 'ok';
                        })['errors']>1;
               });
               problemCases=_.mapObject(problemCases, function(val, key) {
                                   return _.reduce(val, function(memo,stats){ return memo + stats.errorCount; } ,0);;
                              });
               document.getElementById('problemCases').innerHTML= JSON.stringify(problemCases, null, 2);;
               //unknown cases
               var unknownCases= _.pick(fileContentJson.QUERY_BENCHMARK.benchmarkRunResults, function(value, key, object) {
                 var currentMetric=object[key];
                 return _.countBy(currentMetric, function(currentMetricsStat) {
                          return currentMetricsStat.unknownCount>0 ? 'unknown': 'ok';
                        })['unknown']>1;
               });
               unknownCases=_.mapObject(unknownCases, function(val, key) {
                    return _.reduce(val, function(memo,stats){ return memo + stats.unknownCount; } ,0);;
               });
               document.getElementById('unknownCases').innerHTML= JSON.stringify(unknownCases, null, 2);;


             };
           })(file);

     reader.readAsText(file);

}


function getRequestTimesArray(json){

    var x = [];
    for(var i in json.QUERY_BENCHMARK.benchmarkRunResults)
    {
         var metric = json.QUERY_BENCHMARK.benchmarkRunResults[i];
         for(var j in metric) {
            var benchmarkRunResult = metric[j]
            x.push(benchmarkRunResult.milliseconds);
         }
    }
    return x
}


function getDataFrameShow(json) {
        var x = [];
        for(var i in json.QUERY_BENCHMARK.benchmarkRunResults)
        {
             var metric = json.QUERY_BENCHMARK.benchmarkRunResults[i];
             for(var j in metric) {
                var benchmarkRunResult = metric[j]
                var row = [i, benchmarkRunResult.milliseconds];
                x.push(row);
             }
        }


    var DataFrame = dfjs.DataFrame;

    return (new DataFrame(x, ['metric', 'milliseconds'])).show(10, true);

}