const images = document.querySelectorAll(".gallery img");

images.forEach(function (image) {

    image.addEventListener("click", function () {

        const overlay = document.createElement("div");

        overlay.classList.add("overlay");

        const bigImage = document.createElement("img");

        bigImage.src = image.src;
        bigImage.alt = image.alt;

        overlay.appendChild(bigImage);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", function () {
            overlay.remove();
        });

    });

});
