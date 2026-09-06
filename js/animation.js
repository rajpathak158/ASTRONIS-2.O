/* =========================================================
   ASTRONIS
   Cinematic Animation Engine
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       REGISTER GSAP
    ====================================================== */

    if (typeof gsap !== "undefined") {

        gsap.registerPlugin(ScrollTrigger);

    }


    /* =====================================================
       PAGE LOADER
    ====================================================== */

    const loader = document.getElementById("pageLoader");

    const startSite = () => {

        if (typeof gsap === "undefined") {

            if (loader) {
                loader.style.display = "none";
            }

            return;

        }


        const loaderTimeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });


        loaderTimeline
            .to(".loader-logo", {
                opacity: 1,
                y: 0,
                duration: 0.9
            })

            .to(".loader-line", {
                opacity: 1,
                duration: 0.3
            }, "-=0.4")

            .to(".loader-line span", {
                width: "100%",
                duration: 1.2,
                ease: "power2.inOut"
            })

            .to(".loader-inner p", {
                opacity: 1,
                y: 0,
                duration: 0.5
            }, "-=0.4")

            .to(loader, {
                clipPath: "inset(0 0 100% 0)",
                duration: 1.1,
                ease: "power4.inOut",
                onComplete: () => {

                    loader.style.display = "none";

                    heroIntro();

                }
            });

    };


    /* =====================================================
       HERO INTRO
    ====================================================== */

    const heroIntro = () => {

        if (typeof gsap === "undefined") {
            return;
        }


        const timeline = gsap.timeline({
            defaults: {
                ease: "power4.out"
            }
        });


        timeline

            .to(".hero-eyebrow", {
                opacity: 1,
                y: 0,
                duration: 0.8
            })

            .to(".hero-title .title-line", {
                opacity: 1,
                y: 0,
                duration: 1.1,
                stagger: 0.13
            }, "-=0.45")

            .to(".hero-description", {
                opacity: 1,
                y: 0,
                duration: 0.8
            }, "-=0.55")

            .to(".hero-actions", {
                opacity: 1,
                y: 0,
                duration: 0.8
            }, "-=0.5")

            .to(".scroll-indicator", {
                opacity: 1,
                y: 0,
                duration: 0.7
            }, "-=0.35")

            .to(".hero-image", {
                scale: 1,
                duration: 2.2,
                ease: "power3.out"
            }, 0);


        startScrollAnimations();

    };


    /* =====================================================
       SCROLL ANIMATIONS
    ====================================================== */

    const startScrollAnimations = () => {

        if (
            typeof gsap === "undefined" ||
            typeof ScrollTrigger === "undefined"
        ) {
            return;
        }


        /* -------------------------------------------------
           STATEMENT
        ------------------------------------------------- */

        gsap.from(".statement-content", {

            opacity: 0,
            y: 70,

            duration: 1.1,

            ease: "power3.out",

            scrollTrigger: {
                trigger: ".statement",
                start: "top 75%",
                once: true
            }

        });


        /* -------------------------------------------------
           SECTION HEADINGS
        ------------------------------------------------- */

        gsap.utils.toArray(".section-heading").forEach((heading) => {

            gsap.from(heading, {

                opacity: 0,
                y: 60,

                duration: 1,

                ease: "power3.out",

                scrollTrigger: {
                    trigger: heading,
                    start: "top 80%",
                    once: true
                }

            });

        });


        /* -------------------------------------------------
           ABOUT IMAGE
        ------------------------------------------------- */

        const aboutImage =
            document.querySelector(".reveal-image");

        if (aboutImage) {

            const imageFrame =
                aboutImage.querySelector(".image-frame");

            const image =
                aboutImage.querySelector("img");


            gsap.to(imageFrame, {

                clipPath: "inset(0 0% 0 0)",

                duration: 1.4,

                ease: "power4.inOut",

                scrollTrigger: {
                    trigger: aboutImage,
                    start: "top 75%",
                    once: true
                }

            });


            gsap.to(image, {

                scale: 1,

                duration: 1.8,

                ease: "power3.out",

                scrollTrigger: {
                    trigger: aboutImage,
                    start: "top 75%",
                    once: true
                }

            });

        }


        /* -------------------------------------------------
           ABOUT CONTENT
        ------------------------------------------------- */

        gsap.from(".about-content", {

            opacity: 0,
            x: 60,

            duration: 1.1,

            ease: "power3.out",

            scrollTrigger: {
                trigger: ".about-grid",
                start: "top 72%",
                once: true
            }

        });


        /* -------------------------------------------------
           PRACTICE ITEMS
        ------------------------------------------------- */

        gsap.to(".practice-item", {

            opacity: 1,
            y: 0,

            duration: 0.8,

            stagger: 0.1,

            ease: "power3.out",

            scrollTrigger: {
                trigger: ".practice-list",
                start: "top 75%",
                once: true
            }

        });


        /* -------------------------------------------------
           FEATURE SECTION
        ------------------------------------------------- */

        gsap.from(".feature-content", {

            opacity: 0,
            y: 70,

            duration: 1.2,

            ease: "power3.out",

            scrollTrigger: {
                trigger: ".feature-section",
                start: "top 75%",
                once: true
            }

        });


        /* -------------------------------------------------
           APPROACH CARDS
        ------------------------------------------------- */

        gsap.to(".approach-card", {

            opacity: 1,
            y: 0,

            duration: 0.9,

            stagger: 0.12,

            ease: "power3.out",

            scrollTrigger: {
                trigger: ".approach-grid",
                start: "top 75%",
                once: true
            }

        });


        /* -------------------------------------------------
           QUOTE
        ------------------------------------------------- */

        gsap.to(".quote-content", {

            opacity: 1,
            y: 0,

            duration: 1.2,

            ease: "power3.out",

            scrollTrigger: {
                trigger: ".quote-section",
                start: "top 70%",
                once: true
            }

        });


        /* -------------------------------------------------
           QUOTE BACKGROUND PARALLAX
        ------------------------------------------------- */

        gsap.to(".quote-background", {

            yPercent: 10,

            ease: "none",

            scrollTrigger: {

                trigger: ".quote-section",

                start: "top bottom",
                end: "bottom top",

                scrub: true

            }

        });


        /* -------------------------------------------------
           CONTACT
        ------------------------------------------------- */

        gsap.to(".contact-intro", {

            opacity: 1,
            y: 0,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {
                trigger: ".contact",
                start: "top 75%",
                once: true
            }

        });


        gsap.to(".contact-form", {

            opacity: 1,
            y: 0,

            duration: 1,

            delay: 0.15,

            ease: "power3.out",

            scrollTrigger: {
                trigger: ".contact",
                start: "top 75%",
                once: true
            }

        });


        /* -------------------------------------------------
           HERO PARALLAX
        ------------------------------------------------- */

        gsap.to(".hero-image", {

            yPercent: 12,

            ease: "none",

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",
                end: "bottom top",

                scrub: true

            }

        });


        /* -------------------------------------------------
           GOLD LIGHT
        ------------------------------------------------- */

        gsap.to(".gold-light", {

            x: -100,
            y: 80,

            ease: "none",

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",
                end: "bottom top",

                scrub: true

            }

        });


        /* -------------------------------------------------
           FEATURE ORBS
        ------------------------------------------------- */

        gsap.to(".orb-one", {

            x: -100,
            y: 80,

            ease: "none",

            scrollTrigger: {

                trigger: ".feature-section",

                start: "top bottom",
                end: "bottom top",

                scrub: true

            }

        });


        gsap.to(".orb-two", {

            x: 100,
            y: -80,

            ease: "none",

            scrollTrigger: {

                trigger: ".feature-section",

                start: "top bottom",
                end: "bottom top",

                scrub: true

            }

        });

    };


    /* =====================================================
       HEADER SCROLL
    ====================================================== */

    const header =
        document.getElementById("siteHeader");


    const updateHeader = () => {

        if (!header) return;


        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();


    /* =====================================================
       ACTIVE NAVIGATION
    ====================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    if (
        typeof IntersectionObserver !== "undefined"
    ) {

        const navObserver =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            navLinks.forEach((link) => {

                                link.classList.remove(
                                    "active"
                                );

                            });


                            const activeLink =
                                document.querySelector(
                                    `.nav-link[href="#${entry.target.id}"]`
                                );


                            if (activeLink) {

                                activeLink.classList.add(
                                    "active"
                                );

                            }

                        }

                    });

                },

                {
                    rootMargin:
                        "-35% 0px -55% 0px"
                }

            );


        sections.forEach((section) => {

            navObserver.observe(section);

        });

    }


    /* =====================================================
       SMOOTH SCROLL
    ====================================================== */

    let lenis = null;


    if (
        typeof Lenis !== "undefined" &&
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        lenis = new Lenis({

            duration: 1.15,

            smoothWheel: true,

            smoothTouch: false

        });


        const raf = (time) => {

            lenis.raf(time);

            requestAnimationFrame(raf);

        };


        requestAnimationFrame(raf);


        lenis.on("scroll", () => {

            if (
                typeof ScrollTrigger !== "undefined"
            ) {

                ScrollTrigger.update();

            }

        });

    }


    /* =====================================================
       ANCHOR LINKS
    ====================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(targetId);


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    if (lenis) {

                        lenis.scrollTo(target, {
                            offset: -70,
                            duration: 1.2
                        });

                    } else {

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        });


    /* =====================================================
       CUSTOM CURSOR
    ====================================================== */

    const cursor =
        document.querySelector(".cursor");

    const follower =
        document.querySelector(".cursor-follower");


    if (
        cursor &&
        follower &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let followerX = mouseX;
        let followerY = mouseY;


        window.addEventListener(
            "mousemove",
            (event) => {

                mouseX = event.clientX;
                mouseY = event.clientY;


                gsap.set(cursor, {
                    x: mouseX,
                    y: mouseY
                });

            }
        );


        const cursorLoop = () => {

            followerX +=
                (mouseX - followerX) * 0.12;

            followerY +=
                (mouseY - followerY) * 0.12;


            gsap.set(follower, {
                x: followerX,
                y: followerY
            });


            requestAnimationFrame(cursorLoop);

        };


        cursorLoop();


        const hoverTargets =
            document.querySelectorAll(
                "a, button, input, textarea"
            );


        hoverTargets.forEach((element) => {

            element.addEventListener(
                "mouseenter",
                () => {

                    follower.classList.add(
                        "cursor-hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    follower.classList.remove(
                        "cursor-hover"
                    );

                }
            );

        });

    }


    /* =====================================================
       MAGNETIC BUTTON EFFECT
    ====================================================== */

    if (
        typeof gsap !== "undefined" &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        document
            .querySelectorAll(
                ".btn-primary, .btn-gold, .nav-cta"
            )
            .forEach((button) => {

                button.addEventListener(
                    "mousemove",
                    (event) => {

                        const rect =
                            button.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left -
                            rect.width / 2;


                        const y =
                            event.clientY -
                            rect.top -
                            rect.height / 2;


                        gsap.to(button, {

                            x: x * 0.12,
                            y: y * 0.12,

                            duration: 0.35,

                            ease: "power2.out"

                        });

                    }
                );


                button.addEventListener(
                    "mouseleave",
                    () => {

                        gsap.to(button, {

                            x: 0,
                            y: 0,

                            duration: 0.6,

                            ease: "elastic.out(1, 0.5)"

                        });

                    }
                );

            });

    }


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.classList.contains(
                        "active"
                    );


                if (isOpen) {

                    mobileMenu.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                } else {

                    mobileMenu.classList.add(
                        "active"
                    );

                    menuToggle.classList.add(
                        "active"
                    );

                    document.body.classList.add(
                        "menu-open"
                    );

                }

            }
        );


        document
            .querySelectorAll(".mobile-link")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "active"
                        );

                        menuToggle.classList.remove(
                            "active"
                        );

                        document.body.classList.remove(
                            "menu-open"
                        );

                    }
                );

            });

    }


    /* =====================================================
       CONTACT FORM
    ====================================================== */

    const form =
        document.getElementById("contactForm");


    if (form) {

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const button =
                    form.querySelector(
                        ".form-submit"
                    );


                const buttonText =
                    button.querySelector("span");


                if (!buttonText) {
                    return;
                }


                const original =
                    buttonText.textContent;


                buttonText.textContent =
                    "Enquiry Received";


                button.disabled = true;


                setTimeout(() => {

                    buttonText.textContent =
                        original;

                    button.disabled = false;

                    form.reset();

                }, 2500);

            }
        );

    }


    /* =====================================================
       YEAR
    ====================================================== */

    const year =
        document.getElementById("currentYear");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       START
    ====================================================== */

    if (
        document.readyState === "complete"
    ) {

        startSite();

    } else {

        window.addEventListener(
            "load",
            startSite,
            { once: true }
        );

    }

});
