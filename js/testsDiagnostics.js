//test variableNameToSql
QUnit.test( "sumOfThings", function( assert ) {assert.equal( "SUM_OF_THINGS" , variableNameToSql("sumOfThings"), "Passed!" );});
QUnit.test( "SumOfThings", function( assert ) {assert.equal( "SUM_OF_THINGS" , variableNameToSql("SumOfThings"), "Passed!" );});
QUnit.test( "sum_of_things", function( assert ) {assert.equal( "SUM_OF_THINGS" , variableNameToSql("sum_of_things"), "Passed!" );});
QUnit.test( "SuMoFtHiNgS", function( assert ) {assert.equal( "SU_MO_FT_HI_NG_S" , variableNameToSql("SuMoFtHiNgS"), "Passed!" );});
QUnit.test( "a", function( assert ) {assert.equal( "A" , variableNameToSql("a"), "Passed!" );});
QUnit.test( "", function( assert ) {assert.equal( "" , variableNameToSql(""), "Passed!" );});
QUnit.test( "A", function( assert ) {assert.equal( "A" , variableNameToSql("A"), "Passed!" );});
QUnit.test( "_", function( assert ) {assert.equal( "_" , variableNameToSql("_"), "Passed!" );});
QUnit.test( "sumAmountOver5k", function( assert ) {assert.equal( "SUM_AMOUNT_OVER_5_K" , variableNameToSql("sumAmountOver5k"), "Passed!" );});
QUnit.test( "sumOfTHINGS", function( assert ) {assert.equal( "SUM_OF_THINGS" , variableNameToSql("sumOfTHINGS"), "Passed!" );});
QUnit.test( "FOO_5_BAR", function( assert ) {assert.equal( "FOO_5_BAR" , variableNameToSql("foo5Bar"), "Passed!" );});
QUnit.test( "FOO_55_BAR", function( assert ) {assert.equal( "FOO_55_BAR" , variableNameToSql("foo55Bar"), "Passed!" );});
QUnit.test( "FOO_55_BAR", function( assert ) {assert.equal( "FOO_55_BAR" , variableNameToSql("foo55bar"), "Passed!" );});
QUnit.test( "FOO_55_BAR", function( assert ) {assert.equal( "FOO_55_BAR" , variableNameToSql("FOO55BAR"), "Passed!" );});
QUnit.test( "FOObar", function( assert ) {assert.equal( "FOOBAR" , variableNameToSql("FOObar"), "Passed!" );});
QUnit.test( "foo_bar", function( assert ) {assert.equal( "FOO_BAR" , variableNameToSql("foo_bar"), "Passed!" );});
QUnit.test( "foo__bar", function( assert ) {assert.equal( "FOO__BAR" , variableNameToSql("foo__bar"), "Passed!" );});
QUnit.test( "f_o_o__", function( assert ) {assert.equal( "F_O_O__" , variableNameToSql("f_o_o__"), "Passed!" );});
QUnit.test( "PAPER_1_CONTRACTS", function( assert ) {assert.equal( "PAPER_1_CONTRACTS" , variableNameToSql("PAPER_1_CONTRACTS"), "Passed!" );});
QUnit.test( "55_FOO", function( assert ) {assert.equal( "55_FOO" , variableNameToSql("55foo"), "Passed!" );});
QUnit.test( "id", function( assert ) {assert.equal( "ID" , variableNameToSql("id"), "Passed!" );});

//Test helper methods
QUnit.test( "isDigit:4", function( assert ) {assert.ok(  isDigit("4"), "Passed!" );});
QUnit.test( "isDigit:D", function( assert ) {assert.ok( !isDigit("D"), "Passed!" );});

//
QUnit.test( "multiline", function( assert ) {assert.equal(  convertTextToSql("id\nfoo55Bar\nfoo_bar"), "ID\nFOO_55_BAR\nFOO_BAR\n", "Passed!" );});
