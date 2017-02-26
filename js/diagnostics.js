

function readFile(file, callback){
     var reader = new FileReader();

     // Closure to capture the file information.
           reader.onload = (function(theFile) {
             return function(e) {
               //var span = document.createElement('span');
               //span.innerHTML = ['<textarea>', e.target.result, '"</textarea>'].join('');
               //document.getElementById('fileList').insertBefore(span, null);

               //

               var data = [
                 {
                   x: getRequestTimesArray(JSON.parse(e.target.result)),
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
                margin: { t: 28 }
               };
               Plotly.newPlot('histogramDiv', data,layout);
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