var rootElement = document.documentElement;
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.40) {
        scrollToTopBtn.classList.add("showBtn");
    } else {
        scrollToTopBtn.classList.remove("showBtn");
    }
}
document.addEventListener("scroll", handleScroll);