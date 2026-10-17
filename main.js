/* =========================================================
   ABC PUBLIC SCHOOL
   MAIN JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("show");

            const icon =
                menuToggle.querySelector("i");

            if (navMenu.classList.contains("show")) {

                icon.classList.remove("bi-list");

                icon.classList.add("bi-x");

            } else {

                icon.classList.remove("bi-x");

                icon.classList.add("bi-list");

            }

        });

    }


    /* =====================================================
       MOBILE DROPDOWN
    ===================================================== */

    const dropdown =
        document.querySelector(".dropdown");

    const dropdownButton =
        document.querySelector(".dropdown-btn");


    if (dropdown && dropdownButton) {

        dropdownButton.addEventListener("click", function (event) {

            if (window.innerWidth <= 1000) {

                event.preventDefault();

                dropdown.classList.toggle("open");

            }

        });

    }


    /* =====================================================
       HERO SLIDER
    ===================================================== */

    const slides =
        document.querySelectorAll(".hero-slide");

    const nextButton =
        document.getElementById("nextSlide");

    const prevButton =
        document.getElementById("prevSlide");

    const dotsContainer =
        document.getElementById("sliderDots");


    let currentSlide = 0;

    let sliderInterval;


    if (slides.length > 0) {


        /* Create dots */

        if (dotsContainer) {

            slides.forEach(function (_, index) {

                const dot =
                    document.createElement("button");

                dot.classList.add("slider-dot");

                if (index === 0) {

                    dot.classList.add("active");

                }

                dot.addEventListener("click", function () {

                    showSlide(index);

                    restartSlider();

                });

                dotsContainer.appendChild(dot);

            });

        }


        function showSlide(index) {

            slides.forEach(function (slide) {

                slide.classList.remove("active");

            });


            const dots =
                document.querySelectorAll(".slider-dot");

            dots.forEach(function (dot) {

                dot.classList.remove("active");

            });


            currentSlide = index;


            slides[currentSlide]
                .classList.add("active");


            if (dots[currentSlide]) {

                dots[currentSlide]
                    .classList.add("active");

            }

        }


        function nextSlide() {

            currentSlide++;

            if (currentSlide >= slides.length) {

                currentSlide = 0;

            }

            showSlide(currentSlide);

        }


        function previousSlide() {

            currentSlide--;

            if (currentSlide < 0) {

                currentSlide = slides.length - 1;

            }

            showSlide(currentSlide);

        }


        function startSlider() {

            sliderInterval =
                setInterval(nextSlide, 5000);

        }


        function restartSlider() {

            clearInterval(sliderInterval);

            startSlider();

        }


        if (nextButton) {

            nextButton.addEventListener("click", function () {

                nextSlide();

                restartSlider();

            });

        }


        if (prevButton) {

            prevButton.addEventListener("click", function () {

                previousSlide();

                restartSlider();

            });

        }


        startSlider();

    }


    /* =====================================================
       COPY UPI ID
    ===================================================== */

    const copyButton =
        document.getElementById("copyUpi");

    const upiId =
        document.getElementById("upiId");


    if (copyButton && upiId) {

        copyButton.addEventListener("click", async function () {

            try {

                await navigator.clipboard.writeText(
                    upiId.textContent.trim()
                );

                copyButton.innerHTML =
                    '<i class="bi bi-check-lg"></i>';

                setTimeout(function () {

                    copyButton.innerHTML =
                        '<i class="bi bi-copy"></i>';

                }, 1500);

            } catch (error) {

                alert(
                    "Unable to copy UPI ID. Please copy it manually."
                );

            }

        });

    }


    /* =====================================================
       RESULT FORM
    ===================================================== */

    const resultForm =
        document.getElementById("resultForm");


    if (resultForm) {

        resultForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Result service requires a secure school database/backend. This page is ready for backend integration."
            );

        });

    }


    /* =====================================================
       ADMIT CARD FORM
    ===================================================== */

    const admitCardForm =
        document.getElementById("admitCardForm");


    if (admitCardForm) {

        admitCardForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                alert(
                    "Admit Card service requires a secure school database/backend. This page is ready for backend integration."
                );

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    const navLinks =
        document.querySelectorAll(".nav-menu a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 1000) {

                navMenu.classList.remove("show");

            }

        });

    });

});