

//shameless plug of com.ngdata.lily.util.DnaHBaseSchema#variableNameToSql
    /**
     * Formats a variable name for use in SQL/JDBC. The formatting consists of translating
     * to upper case and translating camel case to underscores. For example,
     * "sumAmount" becomes "SUM_AMOUNT".
     *
     * <p>The logic is that an underscore is inserted:</p>
     *
     * <ul>
     * <li>when going from lowercase to uppercase</li>
     * <li>when going from non-numeric to numeric and when going from numeric to non-numeric.
     * This makes that "sumAmountOver5k" translates to "SUM_AMOUNT_OVER_5_K"
     * or that "field1" translates to "FIELD_1"</li>
     * <li>when there is already an underscore, no extra underscores are inserted</li>
     * </ul>
     */
function variableNameToSql(variableName){
    if("id" == variableName) return "ID"
    var builder=""
    var prev=CharType.OTHER
    for (var i = 0, len = variableName.length; i < len; i++) {
      var char=(variableName[i]);
      if(isLowercase(char) && !isDigit(char) && !isUnderscore(char)){
        if(prev == CharType.DIGIT){
            builder+="_"
        }
        prev = CharType.LC
      } else if (isDigit(char)){
        if(prev == CharType.LC || prev == CharType.UC){
            builder+="_"
        }
        prev = CharType.DIGIT
      } else if (isUppercase(char) && !isUnderscore(char)){
        if(prev == CharType.LC || prev == CharType.DIGIT){
            builder+="_"
        }
        prev = CharType.UC
      } else if (isUnderscore(char)){
        prev = CharType.US
      } else {
        prev = CharType.OTHER
      }
      builder+=char.toUpperCase()
    }
    return builder
}
function isLowercase(char){
    return char == char.toLowerCase()
}

function isUppercase(char){
    return char == char.toUpperCase()
}
function isDigit(char){
    return /^\d+$/.test(char)
}

function isUnderscore(char){
    return char == '_'
}

var CharType= {
    LC:1,
    UC:2,
    DIGIT:3,
    US:4,
    OTHER:5
}

function convertTextToSql (text){
    var str = text.split("\n");
    var result=""
    for (var i = 0, len = str.length; i < len; i++) {
          var line=(str[i]);
          result+=variableNameToSql(line)+"\n"
    }
    return result
}
