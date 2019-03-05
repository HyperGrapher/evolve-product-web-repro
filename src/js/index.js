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
