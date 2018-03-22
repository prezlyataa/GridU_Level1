/*** Slider function  ***/

function SliderToggle() {
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
}

SliderToggle();




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
    span.classList.add('quote-span');
    const sheet = window.document.styleSheets[0];

    sheet.insertRule(`.quote-span { 
      font-size: 24px;
        margin: 0 auto;
        quotes: "\\201C""\\201D""\\2018""\\2019";
        padding: 10px 20px;
        line-height: 1.4;
     }`);

    sheet.insertRule(`.quote-span:before { 
      content: open-quote;
      display: inline;
      height: 0;
      line-height: 0;
      left: -5px;
      position: relative;
      top: 10px;
      color: #fecb2f;
      font-size: 2em;
     }`);

    sheet.insertRule(`.quote-span::after { 
      content: close-quote;
      display: inline;
      height: 0;
      line-height: 0;
      left: 5px;
      position: relative;
      top: 10px;
      color: #fecb2f;
      font-size: 2em;
     }`);

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

const zoomResult = document.getElementById('img-zoom-container');
const slider = document.getElementById('slider');

function imageZoom(imgID, resultID) {
    let img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
        let pos, x, y;
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        /*calculate the position of the lens:*/
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /*prevent the lens from being positioned outside the image:*/
        if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
        if (x < 0) {x = 0;}
        if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
        if (y < 0) {y = 0;}
        /*set the position of the lens:*/
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /*display what the lens "sees":*/
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        let a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}

slider.onmouseover = function () {
    zoomResult.style.visibility = 'visible';
};

slider.onmouseout = function () {
    zoomResult.style.visibility = 'hidden';
};


function mouseTarget() {

    document.onmouseover = function(e) {
        switch(e.target.id) {
            case 'slider-image-1':
                imageZoom(e.target.id, 'zoom-result');
                break;
            case 'slider-image-2':
                imageZoom(e.target.id, 'zoom-result');
                break;
            case 'slider-image-3':
                imageZoom(e.target.id, 'zoom-result');
                break;
        }
    };
}

mouseTarget();







// /*** Watermark function ***/


(function ($, window, document, undefined) {

    'use strict';

    var pluginName = 'watermark',
        defaults = {
            path: 'watermark.png',
            dataPath: false,

            text: '',
            textWidth: 130,
            textSize: 13,
            textColor: 'white',
            textBg: 'rgba(0, 0, 0, 0.4)',

            gravity: 'se', // nw | n | ne | w | e | sw | s | se
            opacity: 0.7,
            margin: 0,
            fullOverlay: false,

            outputWidth: 'auto',
            outputHeight: 'auto',
            outputType: 'jpeg', // jpeg | png | webp

            done: function (imgURL) {
                this.src = imgURL;
            },
            fail: function ( /*imgURL*/ ) {
                // console.error(imgURL, 'image error!');
            },
            always: function ( /*imgURL*/ ) {
                // console.log(imgURL, 'image URL!');
            }
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {

            var _this = this,
                ele = _this.element,
                set = _this.settings,
                actualPath = set.dataPath ? $(ele).data(set.dataPath) : set.path,

                wmData = {
                    imgurl: actualPath,
                    type: 'png',
                    cross: true
                },

                imageData = {
                    imgurl: ele.src,
                    cross: true,
                    type: set.outputType,
                    width: set.outputWidth,
                    height: set.outputHeight
                };

            // Watermark dạng base64
            if (actualPath.search(/data:image\/(png|jpg|jpeg|gif);base64,/) === 0) {
                wmData.cross = false;
            }

            // Ảnh đang duyệt dạng base64
            if (ele.src.search(/data:image\/(png|jpg|jpeg|gif);base64,/) === 0) {
                imageData.cross = false;
            }

            var defer = $.Deferred();

            $.when(defer).done(function (imgObj) {
                imageData.wmObj = imgObj;
                _this.imgurltodata(imageData, function (dataURL) {
                    set.done.call(ele, dataURL);
                    set.always.call(ele, dataURL);
                });
            });

            if (set.text !== '') {
                wmData.imgurl = _this.textwatermark();
                wmData.cross = false;
            }

            _this.imgurltodata(wmData, function (imgObj) {
                defer.resolve(imgObj);
            });
        },

        /**
         * Chuyển text sang ảnh để làm watermark
         * @returns {String} URL ảnh dạng base64
         */
        textwatermark: function () {
            var _this = this,
                set = _this.settings,

                canvas = document.createElement('CANVAS'),
                ctx = canvas.getContext('2d'),

                w = set.textWidth,
                h = set.textSize + 8;

            canvas.width = w;
            canvas.height = h;

            ctx.fillStyle = set.textBg;
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = set.textColor;
            ctx.textAlign = 'center';
            ctx.font = '500 ' + set.textSize + 'px Sans-serif';

            ctx.fillText(set.text, (w / 2), (set.textSize + 2));

            return canvas.toDataURL();
        },

        /**
         * Chuyển ảnh sang dạng base64
         * @param   {Object}  data     Các thông số thiết lập để phân biệt loại ảnh và với watermark
         * @param   {String}  callback URL ảnh dạng base64
         */
        imgurltodata: function (data, callback) {

            var _this = this,
                set = _this.settings,
                ele = _this.element;

            var img = new Image();

            if (data.cross) {
                img.crossOrigin = 'Anonymous';
            }

            img.onload = function () {
                var canvas = document.createElement('CANVAS');
                var ctx = canvas.getContext('2d');

                var w = this.width, // image height
                    h = this.height, // image width
                    ctxH;

                if (data.wmObj) {

                    if (data.width !== 'auto' && data.height === 'auto' && data.width < w) {
                        h = h / w * data.width;
                        w = data.width;
                    } else if (data.width === 'auto' && data.height !== 'auto' && data.height < h) {
                        w = w / h * data.height;
                        h = data.height;
                    } else if (data.width !== 'auto' && data.height !== 'auto' && data.width < w && data.height < h) {
                        w = data.width;
                        h = data.height;
                    }

                }

                // Xoay dọc watermark sử dụng text, khi ở vị trí giữa mép dọc
                if ((set.gravity === 'w' || set.gravity === 'e') && !data.wmObj) {
                    canvas.width = h;
                    canvas.height = w;
                    ctxH = -h;
                    ctx.rotate(90 * Math.PI / 180);
                } else {
                    canvas.width = w;
                    canvas.height = h;
                    ctxH = 0;
                }

                // Tô nền trắng cho ảnh xuất ra dạng jpeg
                if (data.type === 'jpeg') {
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, w, h);
                }

                ctx.drawImage(this, 0, ctxH, w, h);

                // Xử lý watermark được chèn vào
                if (data.wmObj) {

                    // Độ trong suốt
                    var op = set.opacity;
                    if (op > 0 && op < 1) {
                        ctx.globalAlpha = set.opacity;
                    }

                    // Vị trí chèn, gọi theo hướng trên bản đồ
                    var wmW = set.fullOverlay ? w : data.wmObj.width,
                        wmH = set.fullOverlay ? h : data.wmObj.height,
                        pos = set.margin,
                        gLeft, gTop;

                    switch (set.gravity) { // nw | n | ne | w | e | sw | s | se
                        case 'nw': // Tây bắc
                            gLeft = pos;
                            gTop = pos;
                            break;
                        case 'n': // Bắc
                            gLeft = w / 2 - wmW / 2;
                            gTop = pos;
                            break;
                        case 'ne': // Đông Bắc
                            gLeft = w - wmW - pos;
                            gTop = pos;
                            break;
                        case 'w': // Tây
                            gLeft = pos;
                            gTop = h / 2 - wmH / 2;
                            break;
                        case 'e': // Đông
                            gLeft = w - wmW - pos;
                            gTop = h / 2 - wmH / 2;
                            break;
                        case 'sw': // Tây Nam
                            gLeft = pos;
                            gTop = h - wmH - pos;
                            break;
                        case 's': // Nam
                            gLeft = w / 2 - wmW / 2;
                            gTop = h - wmH - pos;
                            break;
                        default: // Đông Nam
                            gLeft = w - wmW - pos;
                            gTop = h - wmH - pos;
                    }
                    ctx.drawImage(data.wmObj, gLeft, gTop, wmW, wmH);
                }

                // Xuất ra url ảnh dạng base64
                var dataURL = canvas.toDataURL('image/' + data.type);

                if (typeof callback === 'function') {

                    if (data.wmObj) { // Đã có watermark
                        callback(dataURL);

                    } else { // watermark
                        var wmNew = new Image();
                        wmNew.src = dataURL;
                        callback(wmNew);
                    }
                }

                canvas = null;
            };

            // Xử lý ảnh tải lỗi hoặc có thể do từ chối CORS headers
            img.onerror = function () {
                set.fail.call(this, this.src);
                set.always.call(ele, this.src);
                return false;
            };

            img.src = data.imgurl;
        }
    });

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

}(jQuery, window, document));


$(function(){
    $('#slider-image-1').watermark({
        path: '../img/watermark.png',
        outputWidth: 'auto',
        outputHeight: 'auto',
        gravity: 'n',
        margin: 50
    });
    $('#slider-image-2').watermark({
        path: '../img/watermark.png',
        outputWidth: 'auto',
        outputHeight: 'auto',
        gravity: 'n',
        margin: 50
    });
    $('#slider-image-3').watermark({
        path: '../img/watermark.png',
        outputWidth: 'auto',
        outputHeight: 'auto',
        gravity: 'n',
        margin: 50
    });
});