let getValueInput , changeColor ;

document.getElementById("buttonItem").onclick = function () {

    getValueInput = document.getElementById("inputText").value;
    if ( getValueInput === "" || getValueInput === " ") {
     document.getElementById("spanItem").style = "color:red;";
     document.querySelector(".printMessage").style = "box-shadow: 0 0 4px 0px red;";
     document.getElementById("spanItem").innerHTML = "Enter a value , please ";
    }
    else {
        document.querySelector(".printMessage").style = "box-shadow: 0;";
        document.getElementById("spanItem").style = "color:black;";
         document.getElementById("spanItem").innerHTML = getValueInput; }
    
    }

    document.getElementById("inputText").onfocus = function () {

            document.getElementById("spanItem").innerHTML = "";
            document.querySelector(".printMessage").style = "box-shadow: 0;";
            
  }
