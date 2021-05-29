console.log('popup.js');
var imageFile = document.getElementById('image');
imageFile.addEventListener('change', handleImage);

function handleImage(){
    console.log(this.files);
}