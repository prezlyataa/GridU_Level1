const modal = document.getElementById('modal');

const modal_data = {
    message: 'You successfully purchased this item'
};

Hide = () => {
    span.onclick = () => {
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
    modal.innerHTML = `<div class="modal-content modal-edit-content">
        <span class="close">&times;</span>
        <div class="modal-edit-title">
            <h3>Edit</h3>
        </div>
        <div class="modal-edit">
            <div class="edit-left-part">
                <div class="edit-part-content">
                    <p>Name</p>
                    <input class="modal-edit-input" type="text" placeholder="Name">
                    <p>Category</p>
                    <select class="modal-edit-input">
                        <option>Active wear</option>
                        <option>Sport wear</option>
                        <option>Casual wear</option>
                    </select>
                    <p>Gender</p>
                    <div class="radio-button">
                        <label>
                            <input type="radio" name="gender">
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender">
                            Female
                        </label>
                        <label>
                            <input type="radio" name="gender">
                            Unisex
                        </label>
                    </div>
                    <p>Description</p>
                    <textarea class="modal-edit-input" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="edit-right-part">
                <div class="edit-part-content">
                    <p>Link to image:</p>
                    <input class="modal-edit-input" type="text">
                    <img class="product-img" src="https://digitalcontent.api.tesco.com/v1/media/tescomobile/handsets/iphone_x_silver_pureangles_400.png" alt="img">
                    <p>Price:</p>
                    <input class="modal-edit-input" type="number">
                    <p>Rating:</p>
                    <input class="modal-edit-input" type="number">
                </div>
            </div>
        </div>
        <div class="modal-delete-btn">
            <button class="btn" onclick="modal.style.display = 'none';">Submit</button>
            <button class="btn" onclick="modal.style.display = 'none'">Cancel</button>
        </div>`;
    Close();
};

Delete = () => {
    modal.innerHTML = `<div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-title">
            <h3>Are you sure?</h3>
        </div>
        <div class="modal-text">
            <p>Are you sure that you want delete this item?</p>
        </div>
        <div class="modal-delete-btn">
            <button class="btn" onclick="modal.style.display = 'none';">Yes</button>
            <button class="btn" onclick="modal.style.display = 'none'">No</button>
        </div>`;
    Close();
};

window.onclick = function (e) {
    if(e.target.nodeName="SPAN"
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

