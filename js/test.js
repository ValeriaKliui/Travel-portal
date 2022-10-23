let more = document.querySelector(".more__link");

let textOnPage = document.querySelector(".stories__card-text");
const origText = textOnPage.textContent;



function sentencesToLeave () {
 let dot = '.';
 let dotsAmount = 0;
 let lastPosition = origText.indexOf(dot);
 while (dotsAmount < 3){
    dotsAmount++;
    lastPosition = origText.indexOf(dot, lastPosition+1);
 }
 let allSentences = origText;
 return allSentences.substr(0, lastPosition);
}

let leftSentences = sentencesToLeave() + '...';

function toCutText(textElement, leftSentences){
    textElement.innerHTML = leftSentences;
}

toCutText(textOnPage, leftSentences);

function toExtendText (){
    textOnPage.innerHTML = origText;
}

more.onclick = function() {
    if (textOnPage.textContent !== origText) {
        toExtendText();
        more.textContent = "Close Text";
    }
    else {
        more.textContent = "Read More"
        toCutText(textOnPage, leftSentences);
    }
    
}


