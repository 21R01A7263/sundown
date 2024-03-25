const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var elemC = document.querySelector('#elem-container');
    var fixed = document.querySelector('#fixed-image');
    elemC.addEventListener('mouseenter', function () {
        fixed.style.display = 'block';
    });
    elemC.addEventListener('mouseleave', function () {
        fixed.style.display = 'none';
    });

    var elem1 = document.querySelector('#elem1');
    // elem1.addEventListener('mouseenter', function() {
    //     var image = elem1.getAttribute("data-image");
    //     console.log(image);
    //     fixed.style.backgroundVideo = `url(${image})`;
    // });

    elem1.addEventListener('mouseenter', function () {
        var image = elem1.getAttribute("data-image");
        fixed.innerHTML = `<div style="width: 100%; height: 100%; border-radius: 10px; overflow: hidden;"><video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"><source src="${image}" type="video/mp4"></video></div>`;
    });
    elem1.addEventListener('mouseleave', function () {
        fixed.innerHTML = '';
    });
    var elem2 = document.querySelector('#elem2');
    elem2.addEventListener('mouseenter', function () {
        var image = elem2.getAttribute("data-image");
        console.log(image);
        fixed.style.backgroundImage = `url(${image})`;
    });
    var elem3 = document.querySelector('#elem3');
    elem3.addEventListener('mouseenter', function () {
        var image = elem3.getAttribute("data-image");
        console.log(image);
        fixed.style.backgroundImage = `url(${image})`;
    });
    var elem4 = document.querySelector('#elem4');
    elem4.addEventListener('mouseenter', function () {
        var image = elem4.getAttribute("data-image");
        fixed.innerHTML = `<div style="width: 100%; height: 100%; border-radius: 10px; overflow: hidden;"><video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"><source src="${image}" type="video/mp4"></video></div>`;
    });
    elem4.addEventListener('mouseleave', function () {
        fixed.innerHTML = '';
    });
    var elem5 = document.querySelector('#elem5');
    elem5.addEventListener('mouseenter', function () {
        var image = elem5.getAttribute("data-image");
        fixed.innerHTML = `<div style="width: 100%; height: 100%; border-radius: 10px; overflow: hidden;"><video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"><source src="${image}" type="video/mp4"></video></div>`;
    });
    elem5.addEventListener('mouseleave', function () {
        fixed.innerHTML = '';
    });
    var elem6 = document.querySelector('#elem6');
    elem6.addEventListener('mouseenter', function () {
        var image = elem6.getAttribute("data-image");
        fixed.innerHTML = `<div style="width: 100%; height: 100%; border-radius: 10px; overflow: hidden;"><video autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"><source src="${image}" type="video/mp4"></video></div>`;
    });
    elem6.addEventListener('mouseleave', function () {
        fixed.innerHTML = '';
    });
    var elem7 = document.querySelector('#elem7');
    elem7.addEventListener('mouseenter', function () {
        var image = elem7.getAttribute("data-image");
        console.log(image);
        fixed.style.backgroundImage = `url(${image})`;
    });
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()