$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home__img path");
    var counterUp = $(".counter__up");
    var counterDown = $(".counter__down");
    var modal = $(".modal");
    var ModalCloseBtn = $(".modal__close-btn");
    var viewFlatsButton = $(".view-flats");

    floorPath.on("mouseover", function() {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor); 
    });

  
    floorPath.on("click", toggleModal);

    ModalCloseBtn.on("click", toggleModal);

    viewFlatsButton.on("click", toggleModal);
    

    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
            useGroupping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }; 
    });

    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
            useGroupping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }; 
    });
   
    function toggleModal() {
        modal.toggleClass("is-open");
    };
});