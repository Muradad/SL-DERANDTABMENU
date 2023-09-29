const tabBtns = document.querySelectorAll('.tab-btn');

tabBtns.forEach((tabBtn, index) => {
    tabBtn.addEventListener('click', () => {
        document.querySelector('.tab.active').classList.remove('active');
        document.querySelectorAll('.tab')[index].classList.add('active');
    });
});

//slider

let prevBtn=document.getElementById("prevBtn")
let nextBtn=document.getElementById("nextBtn")
let sliderImg=document.getElementById("sliderImg")
let sliderContainer=document.querySelector(".slider-container")

let images=[
    "src/img/todo1.jpg",
    "src/img/todo2.jpg",
    "src/img/todo3.jpg",
]
let currentIndex=0;

function Slider(){
    if(currentIndex<0){
        currentIndex=images.length-1
    }else if(currentIndex>=images.length){
        currentIndex=0
    }
    sliderImg.src=images[currentIndex]
}


prevBtn.addEventListener("click",function(){
    currentIndex--
    Slider()
})

nextBtn.addEventListener("click",function(){
    currentIndex++
    Slider()
})
//intervalla 
let autoSlider=setInterval(function(){
    currentIndex++
    Slider()
},2000)

//mousu userine qoyanda  interval durur

sliderContainer.addEventListener("mouseenter",function(){
    // clearInterval(autoPlay)
    clearInterval(autoSlider)
})
sliderContainer.addEventListener("mouseleave",function(){
    // autoSlider()
    autoSlider=setInterval(function(){
        currentIndex++
        Slider()
    },2000)
})
