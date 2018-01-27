const modal = document.getElementById('modal');

const modal_data = {
    message: 'You successfully purchased this item'
};

function Hide() {
    span.onclick = function() {
        modal.style.display = "none";
    };
}

function Close() {
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };
}

function Buy(content) {
    modal.innerHTML = `<div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-title">
            <h3>Thank you!</h3>
        </div>
        <div>
            <p>${content}</p>
        </div>`;
    Close();
}

function Add() {
    modal.innerHTML = `<div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-title">
            <h3>Add more</h3>
        </div>
        <div>
            <p>Add more</p>
        </div>`;
    Close();
}

function Edit() {
    modal.innerHTML = `<div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-title">
            <h3>Edit</h3>
        </div>
        <div>
            <p>Edit</p>
        </div>`;
    Close();
}

function Delete() {
    modal.innerHTML = `<div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-title">
            <h3>Are you sure?</h3>
        </div>
        <div>
            <p>Are you sure that you want delete this item?</p>
        </div>
        <button class="btn" onclick="modal.style.display = 'none';">Yes</button>
        <button class="btn" onclick="modal.style.display = 'none'">No</button>`;
    Close();
}

window.onclick = function (e) {
    if(e.target.nodeName="BUTTON"
            && e.target.classList.contains('buy')
            || e.target.classList.contains('add')
            || e.target.classList.contains('edit')
            || e.target.classList.contains('del')
    ) {
        modal.style.display = "block";
        switch (e.target.id){
            case 'add':
                Add();
                Hide();
                break;
            case 'edit':
                Edit();
                Hide();
                break;
            case 'del':
                Delete();
                Hide();
                break;
            case 'buy':
                Buy(modal_data.message);
                Hide();
                break;
            default:
                break;
        }
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

