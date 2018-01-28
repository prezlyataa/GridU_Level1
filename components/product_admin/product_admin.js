const modal = document.getElementById('modal');

const modal_data = {
    message: 'You successfully purchased this item'
};

Hide = () => {
    span.onclick = function() {
        modal.style.display = "none";
    };
};

Close = () => {
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };
};

Buy = (content) => {
    modal.innerHTML = `<div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-title">
            <h3>Thank you!</h3>
        </div>
        <div>
            <p>${content}</p>
        </div>`;
    Close();
};

Add = () => {
    modal.innerHTML = `<div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-title">
            <h3>Add more</h3>
        </div>
        <div>
            <p>Add more</p>
        </div>`;
    Close();
};

Edit = () => {
    modal.innerHTML = `<div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-title">
            <h3>Edit</h3>
        </div>
        <div>
            <p>Edit</p>
        </div>`;
    Close();
};

Delete = () => {
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
};

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
                break;
            case 'edit':
                Edit();
                break;
            case 'del':
                Delete();
                break;
            case 'buy':
                Buy(modal_data.message);
                break;
            default:
                break;
        }
        Hide();
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

