// create slide Image

let imagesSlideList = [
      {
            link: "images/slide-images-1.png",
            alt: "Images Slide 01"
      },
      {
            link: "images/slide-images-2.png",
            alt: "Images Slide 02"
      },
      {
            link: "images/slide-images-3.png",
            alt: "Images Slide 03"
      }
]
let intervalHandle = null;
let index = 0;


function showImages(index) {
      let getImages = document.getElementsByClassName("slide-images-content")[0].children[0].children[0];
      getImages.style.opacity = "40%"
      getImages.src = `${imagesSlideList[index].link}`;
      getImages.alt = `${imagesSlideList[index].alt}`;
}

function startSlideImages() {
      setInterval(changeSlideImages,3000);
      setInterval(increaseOpacity,20);
}

function changeSlideImages(){
      if (index === imagesSlideList.length - 1) {
            index = 0;
      } else {
            index++;
      }
      
      if (index < imagesSlideList.length)
      {
            showImages(index);
      }
}

function increaseOpacity() {
      let getImages = document.getElementsByClassName("slide-images-content")[0].children[0].children[0];
      if(+getImages.style.opacity < 1) {
            getImages.style.opacity = +getImages.style.opacity + 0.01;
      }
}

function nextImage() {
      changeSlideImages();
}

function prevImage() {
      if (index === 0) {
            index = imagesSlideList.length - 1;
      } else {
            index--;
      }
      showImages(index);
}

startSlideImages();

// Change Opacity to Fade In Nav Menu Mobile
function increaseOpacityNavMenuMobile() {
      let getImages = document.getElementsByClassName("nav-menu-mobile")[0];
      if(+getImages.style.opacity < 1) {
            getImages.style.opacity = +getImages.style.opacity + 0.01;
      }
}

function makeNavMenuMobileFadeIn(event) {
      if (event.checked) {
            intervalHandle = setInterval(increaseOpacityNavMenuMobile,7);
      } else {
            clearInterval(intervalHandle);
            document.getElementsByClassName("nav-menu-mobile")[0].style.opacity = "";
      }
      
}