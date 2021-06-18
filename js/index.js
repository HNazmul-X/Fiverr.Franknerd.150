/**
 * code for navbar HNAZMUL__NAVBAR__NWLSBM;
 * it has used in every per page
 */
const HNAZMUL__NAVBAR__NWLSBM_sitebarContent = document.querySelector("nav#HNAZMUL_Navbar_NWLSBM .HNAZMUL_Navbar_NWLSBM-container .HNAZMUL_Navbar_NWLSBM-sitebar-content");
const HNAZMUL__NAVBAR__NWLSBM_toggler = document.querySelector("nav#HNAZMUL_Navbar_NWLSBM .HNAZMUL_Navbar_NWLSBM-container .HNAZMUL_Navbar_NWLSBM-content .navbar-items-wrapper .nav-item .nav-link.toggler-icon");

if (HNAZMUL__NAVBAR__NWLSBM_sitebarContent) {
    HNAZMUL__NAVBAR__NWLSBM_toggler.addEventListener("click", () => {
        HNAZMUL__NAVBAR__NWLSBM_sitebarContent.classList.add("show");

        HNAZMUL__NAVBAR__NWLSBM_sitebarContent.onclick = (event) => {
            event.target.classList.remove("show");
        };
    });
}

/** Faq pages script here */
const theButton = document.querySelectorAll("#FAQ-page-css .arrow-btn .button ");
const allDescripton = document.querySelectorAll("#FAQ-page-css .faqs-section .faq-boxes .faq-box .description");

if (theButton) {
    let toogled = null;
    theButton.forEach(function (x, index) {
        x.addEventListener("click", function () {
            if (toogled !== index) {
                allDescripton.forEach((desc) => {
                    desc.classList.add("d-nai");
                });
            }
            allDescripton[index].classList.toggle("d-nai");
            toogled = index;
        });
    });
}

// info button

const popoverTriggerList = []?.slice?.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
const popoverList = popoverTriggerList?.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});

/*  */
try {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
    });
} catch (err) {
    console.log(err);
}

/* =================================
            light Box js Code
=======================================*/
try {
    const productLightboxFullArea = document.getElementById("product-light-box");
    const lightBoxImgList = document.querySelectorAll(".facebook-ads #light-box-area img");
    const lightBoxImgHolder = document.getElementById("product-lighbox-img-holder");
    const productLightBoxUnderSlider = document.getElementById("product-lightbox-underslider");
    const lightboxCloser = document.getElementById("lightboxCloser");

    for (let i = 0; i < lightBoxImgList.length; i++) {
        const img = lightBoxImgList[i];
        img.addEventListener("click", () => {
            productLightboxFullArea.classList.add("show");
        });

        lightBoxImgHolder.innerHTML += `
          <div class="swiper-slide">
            <img src="${img.src}" />
         </div>
      
         `;
        productLightBoxUnderSlider.innerHTML += `
        <div class="swiper-slide">
            <img src="${img.src}" />
        </div>`;
    }

    var swiper = new Swiper(".mySwiper2", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 10,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper1", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    lightboxCloser.onclick = () => {
        productLightboxFullArea.classList.remove("show");
        console.log(this);
    };
} catch (error) {
    console.log(error);
}

/* navbar searchbar input */
try {
    const NavbarSearchBarInput = document.getElementById("navbar-searchbar-input");
    const searchbarInputArea = document.getElementById("navbar-search-input-area");

    NavbarSearchBarInput.onclick = (e) => {
        searchbarInputArea.classList.add("show");
        e.stopPropagation();
    };
    window.onclick = () => {
        if (searchbarInputArea.classList.contains("show")) {
            searchbarInputArea.classList.remove("show");
        }
    };
} catch (err) {
    console.log(err);
}

/* navbar swipper intialize */
try {
    var swiper = new Swiper(".HNAZMUL_Navbar_NWLSBM-under-bar .mySwiperunderNavbar", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
            clickable: true,
        },
    });
} catch (err) {}
