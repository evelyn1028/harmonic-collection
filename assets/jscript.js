var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 800,
    slideMargin = 40,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    console.log(nextBtn);
    console.log(prevBtn);
    slides.style.width = (slideWidth + slideMargin) * slideCount + "px";

    function moveSlide(num) {
        slides.style.left = -num * 840 + 'px';
        currentIdx = num;
    }

    nextBtn.addEventListener('click', function(){
        if (currentIdx < slideCount - 1) {
            moveSlide(currentIdx + 1);
        }
    });
    prevBtn.addEventListener('click', function(){
        if (currentIdx > 0) {
            moveSlide(currentIdx - 1);
        }
    });