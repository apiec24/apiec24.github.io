let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                const whenActive = document.querySelector('header nav a[href*=' + id + ']');
                whenActive.classList.add("active");
            });
        };
    });
};

// Slide show with fade transition
// let imgArray = [
//     'tempimage1.jpg',
//     'tempimage2.jpg',
//     'tempimage3.jpg'
// ];
// let currentIndex = 0;
// let imgDuration = 3000;

// function slideShow(){
//     document.getElementById('awd-img').className += "fadeOut";
//     setTimeout(function(){
//         document.getElementById('awd-img').src = imgArray[curIndex];
//         document.getElementById('awd-img').className = "";
//     },1000);
//     currentIndex++;
//     if(curIndex==imgArray.length){
//         currentIndex=0}
//     setTimeout(slideShow, imgDuration);

// }

// Dark Mode & Light Mode
// function colorMode(){
//     let dark = 0
//     let light = 0
//     let sectionColor = document.querySelector("section");
//     if sectionColor.
// }