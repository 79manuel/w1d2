

function obfuscate(password){

  var string = "";
  for ( var i = 0; i < password.length; i++) {

    if(password[i] === "a"){
      string += "4";
    }
    if (password[i] === "e") {//removed else
      string += "3"
    }
    if (password[i] === "o") {//removed else
      string += "0"
    }
    if (password[i] === "l") {//removed else
      string += "1";
    }
    else
      string += password[i];
    }
  }

