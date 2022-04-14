let getValueInput  , takeInput = document.getElementById("inputText") , i = 0,takeWhole = document.querySelector("#printMessage") ;



document.getElementById("buttonItem").onclick = function () {
    let createSpan = document.createElement("span");
    let takeDiv = document.getElementById("Message");
    getValueInput = takeInput.value;

    if ( i > 0) {
        let getSpan = takeDiv.querySelectorAll("span");
        getSpan.forEach((span) => {
             span.removeAttribute("class");
        })
    }
    if ( getValueInput === "" || getValueInput.startsWith(" ") ) {
        takeWhole.style = "box-shadow: 0 0 4px 0px red;";
    }
    else {
        let takeValue = document.createTextNode(getValueInput);
        createSpan.appendChild(takeValue);
        takeDiv.appendChild(createSpan);
        createSpan.setAttribute("class","active");
        i++;
        takeWhole.style = "box-shadow: 0 ;";
        
         }
         takeInput.value = "";
    }

    takeInput.oninput = function () {
        takeWhole.style = "box-shadow: 0 ;";
    }