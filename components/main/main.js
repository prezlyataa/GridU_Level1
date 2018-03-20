togglePopup = () => {
    const popup = document.getElementById('filter-popup');
    const showClass = 'show';

    if(!popup.classList.contains(showClass)) {
        popup.classList.add(showClass);
    } else {
        popup.classList.remove(showClass);
    }
};

$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );


function selectOnlyThis(id) {
    for (let i = 1;i <= 3; i++) {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
}