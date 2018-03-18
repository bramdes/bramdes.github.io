

function convertTextNoHup (text){
    var str = text.trim().split("\n");
    var result="nohup bash -c 'set -x; "
    for (var i = 0, len = str.length; i < len; i++) {
          var line=(str[i]);
          if(line.trim().length>0){
              result+= line
              if(str.length>i+1) result += ";"
          }
    }

    return result+ "' > /tmp/nohup_$(date +\"%Y_%m_%d_%H_%M_%S\").log 2>&1 &" + "\n\n#tail the file\n" + "less -f $(ls -1t /tmp/nohup* | sed q)"
}
