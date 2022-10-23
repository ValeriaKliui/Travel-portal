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


function toCutText(textElements, leftLength){
    for (let textElem of textElements){
        textElem.innerHTML = textElem.textContent.substr(0, leftLength)+'...';
    }

}

toCutText(textOnPageElements, 600);

function toExtendText(){

    for (let elem in origTextOfElements){
        textOnPageElements[elem].innerHTML = origTextOfElements[elem];
    }

    // textOnPage.innerHTML = origText;
}

moreElements.forEach((elem)=>{
    elem.addEventListener('click',()=>{
 toExtendText();

        })
    }
)


// moreElements.forEach((elem)=>{
//     elem.addEventListener('click',()=>{
//         for (let element in origTextOfElements){
            
//             console.log(origTextOfElements)
//             if (textOnPageElements[element].textContent !==origTextOfElements[element]) {
//                 toExtendText();
//                 console.log('lol')
//             }
//             else {
//                 // toCutText(textOnPageElements, 600);
//             }
//         }
//     }
//     )
//   })



// moreElements.onclick = function() {
//     for (let elem in origTextOfElements){

//     if (textOnPageElements[elem].textContent ===origTextOfElements[elem]) {
//         toExtendText();
//         console.log('lol')
//     }
//     else {
//         toCutText(textOnPageElements, 600);
//     }
// }
// }


