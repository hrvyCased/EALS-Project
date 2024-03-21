document.addEventListener('DOMContentLoaded', function() {

    var imageContent1 = document.querySelector('#img-content');
    var currentState = true;

    imageContent1.addEventListener('click', function() {
        if (currentState) {
            changePicture(imageContent1, 'images/steady-state.jpg');
        } else {
            changePicture(imageContent1, 'images/milky.jpg');
        }
        currentState = !currentState;
    });

    function changePicture(image, newImageSrc) {
        image.src = newImageSrc;
    }
});
