            document.addEventListener('DOMContentLoaded', () => {
    
                gsap.registerPlugin(ScrollTrigger);
                gsap.from(".ciclo1", {
                    duration: 2,
                    x: -400,
                    opacity: 0,
                    stagger: {
                        each: 0.2
                    },
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#ciclos",
                    }
                })

                gsap.from(".ciclo2", {
                    duration: 2,
                    x: 400,
                    opacity: 0,
                    stagger: {
                        each: 0.2
                    },
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#ciclos",
                    }
                })

                gsap.from(".sub-2", {
                    duration: 2,
                    x: 400,
                    opacity: 0,
                    stagger: {
                        each: 0.2
                    },
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".apresentacao",
                    }
                })

                gsap.from(".eixos h2, .eixos div", {
                    duration: 0.8,
                    y: 400,
                    opacity: 0,
                    stagger: {
                        each: 0.1
                    },
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".eixos",
                    }
                })

                gsap.from(".beneficios, .conteudo", {
                    duration: 0.8,
                    y: 100,
                    opacity: 0,
                    stagger: {
                        each: 0.1
                    },
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".beneficios-conteudo",
                    }
                })

                gsap.from(".facilitadora", {
                    duration: 0.8,
                    y: 100,
                    opacity: 0,
                    stagger: {
                        each: 0.1
                    },
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".facilitadora",
                    }
                })

                gsap.from(".formatos h2, #formatos-p, .tipos", {
                    duration: 0.8,
                    y: 200,
                    opacity: 0,
                    stagger: {
                        each: 0.1
                    },
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".formatos",
                    }
                })

                gsap.from(".faq h2, .faq p", {
                    duration: 0.8,
                    y: 400,
                    opacity: 0,
                    stagger: {
                        each: 0.1
                    },
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".faq",
                    }
                })
            })