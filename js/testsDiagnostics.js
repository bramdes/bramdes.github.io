//test variableNameToSql
QUnit.test( "getHistogramData", function( assert ) {
    assert.deepEqual( [32, 30, 27, 32, 10, 9] , getRequestTimesArray(JSON.parse('' +
   ' {' +
   '   "QUERY_BENCHMARK": {' +
   '     "referenceTime": "2017-02-23T03:48:52.341Z",' +
   '     "numRecordsQueried": 27,' +
   '     "benchmarkRunResults": {' +
   '       "totalUniqueVisitorsViewedPerPageEver": [' +
   '         {' +
   '           "errorCount": 0,' +
   '           "unknownCount": 16,' +
   '           "nonNullCount": 11,' +
   '           "meanGroupsPerValue": 1.7272727272727273,' +
   '           "milliseconds": 32' +
   '         },' +
   '         {' +
   '           "errorCount": 0,' +
   '           "unknownCount": 16,' +
   '           "nonNullCount": 11,' +
   '           "meanGroupsPerValue": 1.7272727272727273,' +
   '           "milliseconds": 30'+
   '         },'+
   '         {'+
   '           "errorCount": 0,'+
   '           "unknownCount": 16,'+
   '           "nonNullCount": 11,'+
   '           "meanGroupsPerValue": 1.7272727272727273,'+
   '           "milliseconds": 27'+
   '         }'+
   '       ],'+
   '       "endDate": ['+
   '         {'+
   '           "errorCount": 0,'+
   '           "unknownCount": 22,'+
   '           "nonNullCount": 5,'+
   '           "meanGroupsPerValue": 0.0,'+
   '           "milliseconds": 32'+
   '         },'+
   '         {'+
   '           "errorCount": 0,'+
   '           "unknownCount": 22,'+
   '           "nonNullCount": 5,'+
   '           "meanGroupsPerValue": 0.0,'+
   '           "milliseconds": 10'+
   '         },'+
   '         {'+
   '           "errorCount": 0,'+
   '           "unknownCount": 22,'+
   '           "nonNullCount": 5,'+
   '           "meanGroupsPerValue": 0.0,'+
   '           "milliseconds": 9'+
   '         }'+
   '       ]'+
   '   },'+
   '   "DNA_VAR_DEFINITIONS": ['+
   '     ]'+
   '   }'+
   ' }'


   )), "Passed!" );
});



QUnit.test( "getDataframe", function( assert ) {
    assert.deepEqual( [32, 30, 27, 32, 10, 9] , getRequestTimesArray(JSON.parse('' +
   ' {' +
   '   "QUERY_BENCHMARK": {' +
   '     "referenceTime": "2017-02-23T03:48:52.341Z",' +
   '     "numRecordsQueried": 27,' +
   '     "benchmarkRunResults": {' +
   '       "totalUniqueVisitorsViewedPerPageEver": [' +
   '         {' +
   '           "errorCount": 0,' +
   '           "unknownCount": 16,' +
   '           "nonNullCount": 11,' +
   '           "meanGroupsPerValue": 1.7272727272727273,' +
   '           "milliseconds": 32' +
   '         },' +
   '         {' +
   '           "errorCount": 0,' +
   '           "unknownCount": 16,' +
   '           "nonNullCount": 11,' +
   '           "meanGroupsPerValue": 1.7272727272727273,' +
   '           "milliseconds": 30'+
   '         },'+
   '         {'+
   '           "errorCount": 0,'+
   '           "unknownCount": 16,'+
   '           "nonNullCount": 11,'+
   '           "meanGroupsPerValue": 1.7272727272727273,'+
   '           "milliseconds": 27'+
   '         }'+
   '       ],'+
   '       "endDate": ['+
   '         {'+
   '           "errorCount": 0,'+
   '           "unknownCount": 22,'+
   '           "nonNullCount": 5,'+
   '           "meanGroupsPerValue": 0.0,'+
   '           "milliseconds": 32'+
   '         },'+
   '         {'+
   '           "errorCount": 0,'+
   '           "unknownCount": 22,'+
   '           "nonNullCount": 5,'+
   '           "meanGroupsPerValue": 0.0,'+
   '           "milliseconds": 10'+
   '         },'+
   '         {'+
   '           "errorCount": 0,'+
   '           "unknownCount": 22,'+
   '           "nonNullCount": 5,'+
   '           "meanGroupsPerValue": 0.0,'+
   '           "milliseconds": 9'+
   '         }'+
   '       ]'+
   '   },'+
   '   "DNA_VAR_DEFINITIONS": ['+
   '     ]'+
   '   }'+
   ' }'


   )), "Passed!" );
});
