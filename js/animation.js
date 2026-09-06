/* =========================================================
   ASTRONIS — CINEMATIC ENGINE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       GSAP CHECK
    ===================================================== */

    const hasGSAP =
        typeof gsap !== "undefined";

    const hasScrollTrigger =
        typeof ScrollTrigger !== "undefined";


    if (hasGSAP && hasScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* =====================================================
       LENIS — SMOOTH SCROLL
    ===================================================== */

    let lenis = null;

    if (typeof Lenis !== "undefined") {

        lenis = new Lenis({
            duration: 1.15,
            smoothWheel: true,
            touchMultiplier: 1.1,
            wheelMultiplier: 0.9
        });


        function raf(time) {

            lenis.raf(time);

            requestAnimationFrame(raf);

        }

        requestAnimationFrame(raf);


        if (hasGSAP && hasScrollTrigger) {

            lenis.on("scroll", ScrollTrigger.update);

            gsap.ticker.add((time) => {

                lenis.raf(time * 1000);

            });

            gsap.ticker.lagSmoothing(0);

        }

    }


    /* =====================================================
       PAGE LOADER
    ===================================================== */

    const loader =
        document.getElementById("pageLoader");

    const loaderLine =
        document.querySelector(".loader-line span");


    function startLoader() {

        if (!loader) return;


        if (hasGSAP) {

            const timeline =
                gsap.timeline();


            timeline
                .to(loaderLine, {
                    scaleX: 1,
                    duration: 1.4,
                    ease: "power3.inOut"
                })

                .to(loader, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.inOut",
                    onComplete: () => {

                        loader.style.visibility =
                            "hidden";

                        loader.style.pointerEvents =
                            "none";

                    }
                }, "+=0.15")

                .add(() => {

                    revealHero();

                });

        } else {

            setTimeout(() => {

                loader.style.opacity = "0";

                setTimeout(() => {

                    loader.style.visibility =
                        "hidden";

                    revealHero();

                }, 700);

            }, 1300);

        }

    }


    window.addEventListener(
        "load",
        startLoader
    );


    /* =====================================================
       HERO REVEAL
    ===================================================== */

    function revealHero() {

        const heroElements =
            document.querySelectorAll(
                ".hero .reveal"
            );


        if (!hasGSAP) {

            heroElements.forEach((element) => {

                element.style.opacity = "1";
                element.style.transform =
                    "translateY(0)";

            });

            return;

        }


        const timeline =
            gsap.timeline();


        timeline
            .to(".hero-eyebrow.reveal", {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out"
            })

            .to(".hero-title .title-line:nth-child(1)", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power4.out"
            }, "-=0.45")

            .to(".hero-title .title-line:nth-child(2)", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power4.out"
            }, "-=0.58")

            .to(".hero-title .title-line:nth-child(3)", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power4.out"
            }, "-=0.58")

            .to(".hero-description.reveal", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.35")

            .to(".hero-actions.reveal", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.45");

    }


    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    const header =
        document.getElementById("siteHeader");


    function updateHeader() {

        if (!header) return;


        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");


    function closeMenu() {

        if (!menuToggle || !mobileMenu) {
            return;
        }


        menuToggle.classList.remove("active");

        mobileMenu.classList.remove("open");

        mobileMenu.style.visibility =
            "hidden";

        mobileMenu.style.pointerEvents =
            "none";

        document.body.classList.remove(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    function openMenu() {

        if (!menuToggle || !mobileMenu) {
            return;
        }


        menuToggle.classList.add("active");

        mobileMenu.classList.add("open");

        mobileMenu.style.visibility =
            "visible";

        mobileMenu.style.pointerEvents =
            "auto";

        document.body.classList.add(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    menuToggle.classList.contains(
                        "active"
                    );


                if (isOpen) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );

    }


    document
        .querySelectorAll(".mobile-menu a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );


    /* =====================================================
       GSAP SCROLL ANIMATIONS
    ===================================================== */

    if (hasGSAP && hasScrollTrigger) {


        /* -------------------------------------------------
           GENERAL REVEALS
        ------------------------------------------------- */

        gsap.utils.toArray(
            ".section-label"
        ).forEach((element) => {

            gsap.fromTo(
                element,

                {
                    opacity: 0,
                    y: 25
                },

                {
                    opacity: 1,
                    y: 0,

                    duration: 0.8,

                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        once: true
                    }
                }
            );

        });


        /* -------------------------------------------------
           HEADINGS
        ------------------------------------------------- */

        gsap.utils.toArray(
            ".intro-heading h2, .section-heading-row h2, .process-heading h2, .clients-heading h2"
        ).forEach((element) => {

            gsap.fromTo(
                element,

                {
                    opacity: 0,
                    y: 70
                },

                {
                    opacity: 1,
                    y: 0,

                    duration: 1.1,

                    ease: "power4.out",

                    scrollTrigger: {
                        trigger: element,
                        start: "top 82%",
                        once: true
                    }
                }
            );

        });


        /* -------------------------------------------------
           INDUSTRIES
        ------------------------------------------------- */

        gsap.utils.toArray(
            ".industry-item"
        ).forEach((item, index) => {

            gsap.fromTo(
                item,

                {
                    opacity: 0,
                    x: -35
                },

                {
                    opacity: 1,
                    x: 0,

                    duration: 0.75,

                    delay: index * 0.04,

                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        once: true
                    }
                }
            );

        });


        /* -------------------------------------------------
           SERVICES
        ------------------------------------------------- */

        gsap.utils.toArray(
            ".service-card"
        ).forEach((card, index) => {

            gsap.fromTo(
                card,

                {
                    opacity: 0,
                    y: 60
                },

                {
                    opacity: 1,
                    y: 0,

                    duration: 0.9,

                    delay: (index % 2) * 0.12,

                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: card,
                        start: "top 88%",
                        once: true
                    }
                }
            );

        });


        /* -------------------------------------------------
           CLIENT POINTS
        ------------------------------------------------- */

        gsap.utils.toArray(
            ".client-point"
        ).forEach((point, index) => {

            gsap.fromTo(
                point,

                {
                    opacity: 0,
                    x: 40
                },

                {
                    opacity: 1,
                    x: 0,

                    duration: 0.8,

                    delay: index * 0.08,

                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: point,
                        start: "top 88%",
                        once: true
                    }
                }
            );

        });


        /* -------------------------------------------------
           PROCESS
        ------------------------------------------------- */

        gsap.fromTo(
            ".process-track::before",
            {
                scaleX: 0
            },
            {
                scaleX: 1,
                duration: 1.8,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".process-track",
                    start: "top 75%",
                    once: true
                }
            }
        );


        gsap.utils.toArray(
            ".process-item"
        ).forEach((item, index) => {

            gsap.fromTo(
                item,

                {
                    opacity: 0,
                    y: 35
                },

                {
                    opacity: 1,
                    y: 0,

                    duration: 0.7,

                    delay: index * 0.12,

                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: ".process-track",
                        start: "top 75%",
                        once: true
                    }
                }
            );

        });


        /* -------------------------------------------------
           INSIGHTS
        ------------------------------------------------- */

        gsap.utils.toArray(
            ".insight-card"
        ).forEach((card, index) => {

            gsap.fromTo(
                card,

                {
                    opacity: 0,
                    y: 60
                },

                {
                    opacity: 1,
                    y: 0,

                    duration: 0.9,

                    delay: index * 0.12,

                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: card,
                        start: "top 88%",
                        once: true
                    }
                }
            );

        });


        /* -------------------------------------------------
           TESTIMONIAL
        ------------------------------------------------- */

        gsap.fromTo(
            ".testimonial-content",

            {
                opacity: 0,
                y: 60
            },

            {
                opacity: 1,
                y: 0,

                duration: 1.2,

                ease: "power4.out",

                scrollTrigger: {
                    trigger: ".testimonial-content",
                    start: "top 80%",
                    once: true
                }
            }
        );


        /* -------------------------------------------------
           CTA
        ------------------------------------------------- */

        gsap.fromTo(
            ".cta-content",

            {
                opacity: 0,
                y: 80
            },

            {
                opacity: 1,
                y: 0,

                duration: 1.2,

                ease: "power4.out",

                scrollTrigger: {
                    trigger: ".cta-content",
                    start: "top 80%",
                    once: true
                }
            }
        );


        /* -------------------------------------------------
           STATEMENT PARALLAX
        ------------------------------------------------- */

        const statementBackground =
            document.querySelector(
                ".statement-background"
            );


        if (statementBackground) {

            gsap.to(
                statementBackground,

                {
                    yPercent: 12,

                    ease: "none",

                    scrollTrigger: {
                        trigger: ".statement-section",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

        }


        /* -------------------------------------------------
           CTA PARALLAX
        ------------------------------------------------- */

        const ctaBackground =
            document.querySelector(
                ".cta-background"
            );


        if (ctaBackground) {

            gsap.to(
                ctaBackground,

                {
                    yPercent: 10,

                    ease: "none",

                    scrollTrigger: {
                        trigger: ".cta-section",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

        }


        /* -------------------------------------------------
           HERO ATMOSPHERE PARALLAX
        ------------------------------------------------- */

        gsap.to(
            ".hero-orb-one",

            {
                yPercent: -12,

                ease: "none",

                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            }
        );


        gsap.to(
            ".hero-orb-two",

            {
                yPercent: 20,

                ease: "none",

                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            }
        );


        /* -------------------------------------------------
           GLOBAL SECTION
        ------------------------------------------------- */

        gsap.fromTo(
            ".global-content",

            {
                opacity: 0,
                x: -70
            },

            {
                opacity: 1,
                x: 0,

                duration: 1.1,

                ease: "power4.out",

                scrollTrigger: {
                    trigger: ".global-section",
                    start: "top 75%",
                    once: true
                }
            }
        );

    }


    /* =====================================================
       SMOOTH ANCHOR LINKS
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((anchor) => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) return;


                    event.preventDefault();


                    if (lenis) {

                        lenis.scrollTo(
                            target,
                            {
                                offset: -80,
                                duration: 1.3
                            }
                        );

                    } else {

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        });


    /* =====================================================
       IMAGE FALLBACK
       ===================================================== */

    document
        .querySelectorAll("img")
        .forEach((image) => {

            image.addEventListener(
                "error",
                () => {

                    image.style.opacity = "0";

                }
            );

        });


    /* =====================================================
       REFRESH SCROLLTRIGGER
    ===================================================== */

    window.addEventListener(
        "load",
        () => {

            if (hasScrollTrigger) {

                ScrollTrigger.refresh();

            }

        }
    );

});
