//String.prototypecharCodeAt()
function charCodeAt(str, index) {
    if (index >= 0 && index < str.length) {
      return str[index].charCodeAt(0);
    } else {
      return NaN;
    }
  }

//String.prototype.concat()
function concat (fitstString , secondString){
    return fitstString + secondString;
}

//String.prototype.endsWith()
function endsWith(string, searchString, position) {
    position = position || string.length;
  
    for (let i = 0; i < searchString.length; i++) {
      if (string[position - i - 1] !== searchString[searchString.length - i - 1]) {
        return false;
      }
    }
  
    return true;
  }

  //String.prototype.repeat()
  function repeatString(inputString, count) {
    if (count < 0 || count !== (count | 0)) {
      return undefined;
      count = 0;
    }
  
    let repeatedString = "";
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < inputString.length; j++) {
        repeatedString += inputString[j];
      }
    }
  
    return repeatedString;
  }

  //String.prototype.replace()
  function replace(string, search, replaceValue) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        let includes = true;

        for (let k = 0; k < search.length; k++) {
            if (string[i + k] !== search[k]) {
                includes = false;
                break;
            }
        }
        if (includes) {
            result += replaceValue;
            i += search.length - 1; 
        } else {
            result += string[i];
        }
    }

    return result;
}

//String.prototype.slice()
function slice (str, start, end){
    if (start < 0) {
        start = start + str.length;
        if (start < 0) {
            start = 0;
        }
    }

    if(end === undefined || end > str.length){
        end = str.lenght;
    } else if (end <= 0){
        end = str.lenght;
        if (end = 0){
            end = 0
        }
    } 
    
let result = '';
    for (let i = start; i < end; i++) {
        result += str[i];
    }

    return result;
}

//String.prototype.startsWith()
function startsWith(str, search) {
    for (let i = 0; i < search.length; i++) {
        if (str[i] !== search[i]) {
            return false;
        }
    }
    return true;
}

//String.prototype.substring()
function customSubstring(str, start, end) {
    if (start === undefined) {
        start = 0;
    } else if (start < 0) {
        start = start + str.length;
        if (start < 0) {
            start = 0;
        }
    }

    if (end === undefined) {
        end = str.length;
    } else if (end < 0) {
        end = end + str.length;
        if (end < 0) {
            end = 0;
        }
    }

    if (start > end) {
        [start, end] = [end, start]; 
    }

    let result = '';
    for (let i = start; i < end; i++) {
        result += str[i];
    }

    return result;
}



