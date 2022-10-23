let moreElements = document.querySelectorAll(".more__link");

let textOnPageElements = document.querySelectorAll(".stories__card-text");

function toCreateTextArray(elements) {
    let array = [];
    for (let elem of elements){
        array.push(elem.textContent.trim());
    }
    return array;
}

const origTextOfElements = toCreateTextArray(textOnPageElements);

function sentencesToLeave () {
    let dot = '.';
    let dotsAmount = 0;



    // let lastPosition = origText.indexOf(dot);
    // while (dotsAmount < 3){
    //    dotsAmount++;
    //    lastPosition = origText.indexOf(dot, lastPosition+1);
    // }
    // let allSentences = origText;
    // return allSentences.substr(0, lastPosition);
   }
   
   let leftSentences = sentencesToLeave() + '...';

   console.log(leftSentences)

// for (let obj1 of origTextOfElements){
//     const origText = obj1.textContent;

// function sentencesToLeave () {
//     let dot = '.';
//     let dotsAmount = 0;
//     let lastPosition = origText.indexOf(dot);
//     while (dotsAmount < 3){
//        dotsAmount++;
//        lastPosition = origText.indexOf(dot, lastPosition+1);
//     }
//     let allSentences = origText;
//     return allSentences.substr(0, lastPosition);
//    }



// }













