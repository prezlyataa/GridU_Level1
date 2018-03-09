/*** Slider function  ***/


(function () {
    let sliderImages = document.querySelectorAll('.image'),
    arrowLeft = document.querySelector('#left-arrow'),
    arrowRight = document.querySelector('#right-arrow'),
    currentImg = 0;

    function initSlider() {
        resetSlider();

        sliderImages[0].style.display = 'block';
    }

    function resetSlider() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
        }
    }

    function toLeft() {
        resetSlider();
        sliderImages[currentImg - 1].style.display = 'block';
        currentImg--;
    }

    function toRight() {
        resetSlider();
        sliderImages[currentImg + 1].style.display = 'block';
        currentImg++;
    }

    arrowLeft.addEventListener('click', function () {
        if (currentImg === 0) {
            currentImg = sliderImages.length;
        }

        toLeft();
    });

    arrowRight.addEventListener('click', function () {
        if (currentImg === sliderImages.length - 1) {
            currentImg = -1;
        }

        toRight();
    });

    initSlider();
})();



/*** Function show review block ***/

const showBtn = document.getElementById('share-link');
const reviewBlock = document.getElementById('review');
const cancelBtn = document.getElementById('cancel-btn');

function showReview() {
    reviewBlock.style.display = 'block';
}

function hideReview() {
    reviewBlock.style.display = 'none';
}

showBtn.onclick = function() {
    showReview()
};

cancelBtn.onclick = function() {
    hideReview()
};



/*** Working with edit field ***/

const yourname = document.getElementById('your-name');
const namefield = document.getElementById('namefield');
const startTypeField = document.getElementById('startTypeField');
const areatext = document.getElementById('areatext');

function setContent(from, to) {
    from.innerHTML = to.innerHTML;
}

function setName() {
    yourname.innerHTML = namefield.value;
}

namefield.oninput = function() {
    setName();
};

areatext.oninput = function() {
    setContent(startTypeField, areatext);
    startTypeField.style.opacity = 1;
    startTypeField.style.fontStyle = 'normal';
};




/*** Function that set img from PC ***/

function onFileSelected(event) {
    let selectedFile = event.target.files[0];
    let reader = new FileReader();

    let imgtag = document.getElementById("avatar");
    imgtag.title = selectedFile.name;

    reader.onload = function(event) {
        imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('img').forEach(function(img){
        img.onerror = function(){this.style.display='none';};
    })
});




/*** Wrap selected text into tag ***/

const btnBold = document.getElementById('btn-bold');
const btnEmphasize = document.getElementById('btn-emphasize');
const btnQuote = document.getElementById('btn-quote');


function surroundSelectionBold() {
    const span = document.createElement("span");
    span.style.fontWeight = 'bold';

    if (window.getSelection) {
        let sel = window.getSelection();
        if (sel.rangeCount) {
            let range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}

function surroundSelectionEmphasize() {
    const span = document.createElement("span");
    span.style.color =  '#fecb2f';
    span.style.fontStyle =  'italic';

    if (window.getSelection) {
        let sel = window.getSelection();
        if (sel.rangeCount) {
            let range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}

function surroundSelectionQuote() {
    const span = document.createElement("span");
    span.style.quotes = '\'"\' \'"\' "\'" "\'"';
    span.style.fontSize = '24px';

    if (window.getSelection) {
        let sel = window.getSelection();
        if (sel.rangeCount) {
            let range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}

btnBold.onclick = function() {
    surroundSelectionBold();
    setContent(startTypeField, areatext);
};

btnQuote.onclick = function() {
    surroundSelectionQuote();
    setContent(startTypeField, areatext);
};

btnEmphasize.onclick = function() {
    surroundSelectionEmphasize();
    setContent(startTypeField, areatext);
};


/*** Zoom function ***/

// function imageZoom(imgID, resultID) {
//     var img, lens, result, cx, cy;
//     img = document.getElementById(imgID);
//     result = document.getElemenstById(resultID);
//     /*create lens:*/
//     lens = document.createElement("DIV");
//     lens.setAttribute("class", "img-zoom-lens");
//     /*insert lens:*/
//     img.parentElement.insertBefore(lens, img);
//     /*calculate the ratio between result DIV and lens:*/
//     cx = result.offsetWidth / lens.offsetWidth;
//     cy = result.offsetHeight / lens.offsetHeight;
//     /*set background properties for the result DIV:*/
//     result.style.backgroundImage = "url('" + img.src + "')";
//     result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
//     /*execute a function when someone moves the cursor over the image, or the lens:*/
//     lens.addEventListener("mousemove", moveLens);
//     img.addEventListener("mousemove", moveLens);
//     /*and also for touch screens:*/
//     lens.addEventListener("touchmove", moveLens);
//     img.addEventListener("touchmove", moveLens);
//     function moveLens(e) {
//         var pos, x, y;
//         /*prevent any other actions that may occur when moving over the image:*/
//         e.preventDefault();
//         /*get the cursor's x and y positions:*/
//         pos = getCursorPos(e);
//         /*calculate the position of the lens:*/
//         x = pos.x - (lens.offsetWidth / 2);
//         y = pos.y - (lens.offsetHeight / 2);
//         /*prevent the lens from being positioned outside the image:*/
//         if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
//         if (x < 0) {x = 0;}
//         if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
//         if (y < 0) {y = 0;}
//         /*set the position of the lens:*/
//         lens.style.left = x + "px";
//         lens.style.top = y + "px";
//         /*display what the lens "sees":*/
//         result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
//     }
//     function getCursorPos(e) {
//         var a, x = 0, y = 0;
//         e = e || window.event;
//         /*get the x and y positions of the image:*/
//         a = img.getBoundingClientRect();
//         /*calculate the cursor's x and y coordinates, relative to the image:*/
//         x = e.pageX - a.left;
//         y = e.pageY - a.top;
//         /*consider any page scrolling:*/
//         x = x - window.pageXOffset;
//         y = y - window.pageYOffset;
//         return {x : x, y : y};
//     }
// }
//
// imageZoom('myimage', 'myresult');
