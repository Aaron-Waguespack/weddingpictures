// define the main variables

var pics = document.querySelectorAll('.image-box'),
    lightbox = document.getElementById('lightbox'),
    close = document.getElementById('close'),
    overlay = document.getElementById('overlay'),
    numPics = 10,
    picList = [],
    thumbList =[];
  

// function to add 000 for loop
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
// Create Image Gallery
for(var i = 1; i < numPics; i++){
  var gal = document.createElement('img');
  gal.className = 'image-box';
  gal.setAttribute('src', '.\\pics\\Waguespack-'+ pad(i,3) + '.jpg');
  gal.setAttribute('id', pad(i,3))
  document.getElementById('weddingPhotos').appendChild(gal);
  picList.push(document.getElementById('weddingPhotos').appendChild(gal));
}

// create the thumbnails images in lightbox
for(var i = 1; i < numPics; i++){
  var thumb = document.createElement('img');
  thumb.className = 'thumbnail';
  thumb.setAttribute('src', '.\\pics\\Waguespack-'+ pad(i,3) + '.jpg');
  thumbList.push(document.getElementById('thumb').appendChild(thumb));
}


// open lightbox function
picList.forEach(function(el){
  el.onclick = function(){
    lightbox.classList.add('show-it');
    lightbox.children[1].setAttribute('src', el.getAttribute('src').substring(0,17)+'Lg'+el.getAttribute('src').substring(17));
    console.log( el.getAttribute('src').substring(0,17)+'Lg'+el.getAttribute('src').substring(17))
  }
});

// close lightbox function
function closeLightbox (){
  lightbox.classList.remove('show-it');
}
close.onclick = closeLightbox;
overlay.onclick = closeLightbox;


// navigate inside the lightbox with thumbnails
var thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(function(el){
  el.onclick = function(){
    lightbox.children[1].setAttribute('src', el.getAttribute('src').substring(0,17)+'Lg'+el.getAttribute('src').substring(17));
  }
});