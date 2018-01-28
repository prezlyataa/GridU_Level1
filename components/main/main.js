togglePopup = () => {
    const popup = document.getElementById('filter-popup');
    const showClass = 'show';

    if(!popup.classList.contains(showClass)) {
        popup.classList.add(showClass);
    } else {
        popup.classList.remove(showClass);
    }
};

