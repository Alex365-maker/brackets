module.exports = function check(str, bracketsConfig) {
  str = str.split('')
  let h = 0;
  for(let i = 1; i < str.length; i++){
    h = 0;
    for(h = 0; h < bracketsConfig.length; h++){
    if(str[i-1] == bracketsConfig[h][0] && str[i] == bracketsConfig[h][1]){
    str.splice(i-1, 2);
    i = 0;
    }
  }
    }
    if(str[0]==null){
    return true;
    }
    else{return false}
}
