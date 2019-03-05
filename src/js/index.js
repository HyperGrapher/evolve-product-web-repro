import '../scss/style.scss'


(function() {

    // Call on page load
    fixDivHeight()

    // Equlize img height on resize.
    window.onresize = (event) => {

        fixDivHeight()
    
    }
})();

// Equlize img element height with the other side div height
function fixDivHeight(){
    var imgHeight = document.getElementById("topgrid").offsetHeight;
    document.getElementById("sign").style.marginTop = (imgHeight + 85) + 'px';
}


// get scroll position and use it to scale carousel imgs
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    var scrollClamp = scroll * 0.00050
    console.log(scrollClamp + 1)

    // document.getElementById("a").style.transform = (`translateY(${(scrollClamp * -1) * 100}px)`);
    // document.getElementById("b").style.transform = (`translateY(${(scrollClamp * -1) * 100}px)`);

    document.getElementById("a").style.transform = (`scale(${scrollClamp + 1})`);
    document.getElementById("b").style.transform = (`scale(${scrollClamp + 1})`);

});