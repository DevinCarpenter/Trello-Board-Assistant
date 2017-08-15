'use strict';
/**
 * @param {string} statusText - Text to display to the user
 */
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  var displayCardNumbers = `(function(){
    var o=document.querySelectorAll(".card-short-id");
    o.forEach(function(element){
      if(element.classList.contains("hide")){
        element.classList.remove("hide");
        element.style.backgroundColor = document.body.style.backgroundColor;
        element.style.fontWeight = "normal";
        element.style.fontSize = ".8em";
        element.style.marginRight = "5px";
        element.style.padding = "2.3px 6px";
        element.style.borderRadius = "10px";
        element.style.color = "#f6f6f6";
      }else o.addClass("hide");
    });
  }());`;

  chrome.tabs.executeScript(null,{code: displayCardNumbers},_=>{
    let e = chrome.runtime.lastError;
    if(e !== undefined){
      console.log("error: ", _, e);
      renderStatus("An error has occurred!");
    }else renderStatus("Card Numbers displayed Successfully!");
  });
});


