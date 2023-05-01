const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.btn-right');
const prevButton = document.querySelector('.btn-left');

let currentSlide = 0;

slides.forEach(function(slide,index){
slide.style.tranform = `translateX(${index * 160}%)`
});
nextButton.addEventListener('click',function(){
currentSlide = currentSlide + 1;
if(currentSlide== 4)
{
currentSlide = 0;
}
slides.forEach(function(slide,index){
console.log(slide);
slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`
});
});
prevButton.addEventListener('click',function(){
currentSlide = currentSlide - 1;
if(currentSlide== -1)
{
currentSlide = 3;
}
slides.forEach(function(slide,index){
console.log(slide);
slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`
});
})