/* =============================================
        HNAZMUL__NAVBAR__WSLWC Navbar script
================================================= */

const WSLWCNavbarContent = document.querySelector(".HNAZMUL__WSLWC_NAV-items-wrapper");
const WSLWCNavbarToggleIcon = document.querySelector(".HNAZMUL__WSLWC_NAV-toogle-icon .iconify");

//making cancler
const WSLWCNavbarCanceler = document.createElement("div");
WSLWCNavbarCanceler.setAttribute("title", "close Navbar");
WSLWCNavbarCanceler.classList.add("nav-items-hider");
document.querySelector(".HNAZMUL__WSLWC_NAV-container").appendChild(WSLWCNavbarCanceler);

const WSLWCTogglingNavbar = () => {
    WSLWCNavbarContent.classList.toggle("siteBar-show");
    WSLWCNavbarCanceler.classList.toggle("canceler-show");
};

WSLWCNavbarToggleIcon?.addEventListener("click", () => {
    WSLWCTogglingNavbar();
});

WSLWCNavbarCanceler?.addEventListener("click", () => {
    WSLWCTogglingNavbar();
});
