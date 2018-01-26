/* Script for buy Modal window */

// var modal = document.getElementById('buy-modal');
//
// var btn = document.getElementById("buy-btn");
//
// var span = document.getElementsByClassName("close")[0];
//
// btn.onclick = function() {
//     modal.style.display = "block";
// };
//
// span.onclick = function() {
//     modal.style.display = "none";
// };
//
//
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };

/* Script for buy Modal window */

var buy_modal = document.getElementById('buy-modal');

var buy_btn = document.getElementById('buy-btn');

var span = document.getElementsByClassName("close")[0];
//
// buy_btn.onclick = function() {
//     buy_modal.style.display = "block";
// };
//
// span.onclick = function() {
//     buy_modal.style.display = "none";
// };
//
// window.onclick = function(event) {
//     if (event.target == buy_modal) {
//         buy_modal.style.display = "none";
//     }
// };

const content1 = {
    data:'Hello'
}
window.onclick = function (e) {
    if(e.target.nodeName="BUTTON" && e.target.classList.contains('buy-btn')){
        console.log(e.target);

        switch (e.target.id){
            case 'buy':
                buy_modal.style.display = "block";
                console.log(e.target);
                setConent(content1.data);
                break;


        }
    }
};

function setConent(content) {
    buy_modal.innerHTML = `<div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-title">
            <h3>Thank you!</h3>
        </div>
        <div>
            <p>${content}</p>
        </div>`
}