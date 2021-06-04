const imagesToLoad= document.querySelectorAll("img[data-src]");

const imgOptions = {
    treshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload=()=>{image.removeAttribute("data-src");};
};

if("IntersectionObserver" in window){
    const imgObserver=new IntersectionObserver((items,observer)=>{
        items.forEach((item)=>{});
    })
}