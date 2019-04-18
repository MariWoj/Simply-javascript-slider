const slideList = [{
    img: "images/img1.jpg",
    text: 'Fuji mountain, Japan'
},
{
    img: "images/img2.jpg",
    text: 'Hallstatt, Austria'
},
{
    img: "images/img3.jpg",
    text: 'Lofoten islands, Norway'
}
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
const time = 3000;
let active = 0;


const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active >= slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
};

let interval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        switch (e.keyCode) {
            case 37:
                active--;
                if (active < 0) {
                    active = 2;
                }
                image.src = slideList[active].img;
                h1.textContent = slideList[active].text;
                changeDot();
                clearInterval(interval);
                break;
            case 39:
                active++;
                if (active > 2) {
                    active = 0;
                }
                image.src = slideList[active].img;
                h1.textContent = slideList[active].text;
                changeDot();
                clearInterval(interval);
                break;
        }
        interval = setInterval(changeSlide, time);
    }
}

window.addEventListener('keydown', keyChangeSlide)