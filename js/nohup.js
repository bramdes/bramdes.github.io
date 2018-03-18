

function convertTextNoHup (text){
    var str = text.trim().split("\n");
    var result="nohup "
    for (var i = 0, len = str.length; i < len; i++) {
          var line=(str[i]);
          if(line.trim().length>0){
              result+= line
              if(str.length>i+1) result += ";"
          }
    }

    return result+ " > /hadoop/tmp &"
}
