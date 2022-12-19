(function () {
    window.addEventListener("load", function () {
        setTimeout(function () {
            var logo = document.getElementsByClassName('link'); //For Changing The Link On The Logo Image
            logo[0].href = "https://www.actian.com/";
            logo[0].target = "_blank";

            logo[0].children[0].alt = "Actian Integration Platform";
            logo[0].children[0].src = "dist/Actian-Logo-2020-1.svg"; //For Changing The Logo Image
        });
    });
})();