(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [601], {
        2074: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return l
                }
            });
            var a = s(1689),
                i = {
                    active: !0,
                    breakpoints: {},
                    delay: 4e3,
                    jump: !1,
                    playOnInit: !0,
                    stopOnInteraction: !0,
                    stopOnMouseEnter: !1,
                    stopOnLastSnap: !1,
                    rootNode: null
                };

            function l(e) {
                var t, s, n, r = a.Z.optionsHandler(),
                    o = r.merge(i, l.globalOptions),
                    c = 0,
                    d = !1;

                function x() {
                    s.off("pointerDown", n), t.stopOnInteraction || s.off("pointerUp", u), A(), c = 0
                }

                function m(e) {
                    A(), void 0 !== e && (d = e), c = window.setTimeout(h, t.delay)
                }

                function A() {
                    c && window.clearTimeout(c)
                }

                function u() {
                    c && (A(), m())
                }

                function h() {
                    var e = s.internalEngine().index;
                    if (t.stopOnLastSnap && e.get() === e.max) return x();
                    s.canScrollNext() ? s.scrollNext(d) : s.scrollTo(0, d), m()
                }
                var g = {
                    name: "autoplay",
                    options: r.merge(o, e),
                    init: function(e) {
                        s = e, d = (t = r.atMedia(g.options)).jump, n = t.stopOnInteraction ? x : A;
                        var a = s.internalEngine().eventStore,
                            i = s.rootNode(),
                            l = t.rootNode && t.rootNode(i) || i;
                        s.on("pointerDown", n), t.stopOnInteraction || s.on("pointerUp", u), t.stopOnMouseEnter && (a.add(l, "mouseenter", n), t.stopOnInteraction || a.add(l, "mouseleave", u)), a.add(document, "visibilitychange", function() {
                            if ("hidden" === document.visibilityState) return A();
                            u()
                        }), a.add(window, "pagehide", function(e) {
                            e.persisted && A()
                        }), t.playOnInit && m()
                    },
                    destroy: x,
                    play: m,
                    stop: A,
                    reset: u
                };
                return g
            }
            l.globalOptions = void 0
        },
        9039: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/solutions", function() {
                return s(6712)
            }])
        },
        3893: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/fact_bloc2.4c1411e3.webp",
                height: 788,
                width: 1400,
                blurDataURL: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoIAAUAAkA4JQBOgB5vWYwAAP7KPgCSp+GL8mkbIP6PZyvuyzWr8D0V6gUG12V2g54GfgciZvDFLyVMAAA=",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        8048: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/hubtimize_screens.d5e27231.webp",
                height: 415,
                width: 800,
                blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAE3LqLbLPwCt69PIz9LpsWH///////9pCkRFRkpFRAwAVlA4ICoAAACQAQCdASoIAAQAAkA4JZwAAudQDBAA/vf+MoT+GKrlDb2d2QJxnDOlIAA=",
                blurWidth: 8,
                blurHeight: 4
            }
        },
        6165: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/globe_white_block.6699e2aa.svg",
                height: 602,
                width: 607
            }
        },
        3280: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/line.39b9fde9.svg",
                height: 791,
                width: 1600
            }
        },
        6757: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/Carglass-Logo.1195b8fa.svg",
                height: 62,
                width: 232
            }
        },
        5607: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/Clairefontaine-Logo.48c3b571.webp",
                height: 684,
                width: 1200,
                blurDataURL: "data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAJGtcnRgAAAAE3ZAIggAAAAAG51AAAAAAAADdgMAAAB0V29qWXRZZwBWUDggPAAAALABAJ0BKggABQACQDglsAJ0ugAEMAAA/vAb3/8FlJnX2kzUWyP0Cext8oue7+6Bi/ZsNm6iQVeZyu1AAA==",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        5505: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/Colissimo-Logo.f5e5b063.webp",
                height: 847,
                width: 3314,
                blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAApXQZOioqLiSpiylLSEk4SwBWUDggNgAAADACAJ0BKggAAgACQDglAE6I4AyQAFm1C1YAAP75Z4wZ9YdXBUmplfHkFuV8eQUE8V7wz4AAAA==",
                blurWidth: 8,
                blurHeight: 2
            }
        },
        9708: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/HUBTIMIZE-white.19537ec6.webp",
                height: 69,
                width: 221,
                blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAJBcnGyQdHx4VGRsLFRgbFQBWUDggGAAAADABAJ0BKggAAgACQDglpAADcAD++yGAAA==",
                blurWidth: 8,
                blurHeight: 2
            }
        },
        5111: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/LOreal-Logo.02f23e73.webp",
                height: 2262,
                width: 4e3,
                blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAAAAAAAAAXIw8KHQYFAEQyVWM8T2sAGiQJESUMFCIAAAAAAAAAAABWUDggGAAAADABAJ0BKggABQACQDglpAADcAD++5zAAA==",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        1460: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/Nestle-Logo.daf2552b.webp",
                height: 1800,
                width: 1800,
                blurDataURL: "data:image/webp;base64,UklGRqgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAHC4sIRcIDgMoSUU/MiRQNRZoOj5HOzAIAGhtVGtfRRkfLEtCRBw2Lw0xLi0jHSgSPp+hlIeyijwjR1hJVWlOGwBWUDggQAAAAPABAJ0BKggACAACQDglkAJ0AQ8LxI61gAD+/R+n/+qyB+laPW+va1l6FNPHbrq5JMWvj1Kgrv4d8eg7dPrfuAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        6818: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/cleo-white.ad4618e5.webp",
                height: 44,
                width: 107,
                blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAU5F2ZS8OMBiSJGqWjo56ao6DgnZ3ZYYyAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        2701: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/generix-white.e5ab8b0c.webp",
                height: 49,
                width: 187,
                blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAQUg8RUUgERdoOi41KSEPEwBWUDggGAAAADABAJ0BKggAAgACQDglpAADcAD++yGAAA==",
                blurWidth: 8,
                blurHeight: 2
            }
        },
        8898: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/gs1-white.c6b5f462.webp",
                height: 79,
                width: 97,
                blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAANXyooV4iCgB+ipuxs3kAAIOBjYaZjzQnf3l9lI9/PTaCgpCDmIswMH6Km7GzdgAAMnilnVoEAAAAVlA4IBgAAAAwAQCdASoIAAcAAkA4JaQAA3AA/vshgAA=",
                blurWidth: 8,
                blurHeight: 7
            }
        },
        697: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/ibm-white.7d4e8780.webp",
                height: 46,
                width: 114,
                blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAXT1hU0FcN1ctCj9MEklGKVU7Wk07Oi9RAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        2448: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/rounded.9410e3c4.svg",
                height: 110,
                width: 1920
            }
        },
        2781: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/cleo.d41c808c.webp",
                height: 84,
                width: 200,
                blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAWb2XgTILMhW9PJLW0cm2h7q1tqelj7k7AFZQOCAuAAAA8AEAnQEqCAADAAJAOCWwAnS6AfgABEwAAP7sf4f/kpc/lDz6//PzL5b96iAAAA==",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        8885: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/generix.201787f9.webp",
                height: 50,
                width: 182,
                blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAVWVUYV8vGiKHUT5JNy0VGgBWUDggPAAAANABAJ0BKggAAgACQDglmAJ0ARSjYnogAP5NsT67pOEOboGpr3SoM3i6cnusOfJPa+7NNHOI9eaaLQAAAA==",
                blurWidth: 8,
                blurHeight: 2
            }
        },
        6712: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return eA
                }
            });
            var a = s(5893),
                i = s(9008),
                l = s.n(i),
                n = s(5675),
                r = s.n(n),
                o = s(7488),
                c = s(2701),
                d = s(6818),
                x = s(9708),
                m = s(697),
                A = s(8898),
                u = s(6165),
                h = s(3280),
                g = s(1664),
                p = s.n(g);

            function f() {
                return (0, a.jsxs)("header", {
                    className: "relative bg-gradient-esalink-simple background-animate overflow-hidden",
                    children: [(0, a.jsx)(o.Z, {}), (0, a.jsxs)("div", {
                        className: "flex z-10 container mx-auto px-4 mt-12 mb-20",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col flex-wrap justify-center z-10",
                            children: [(0, a.jsxs)("div", {
                                className: "w-full xl:w-2/3",
                                children: [(0, a.jsx)("div", {
                                    className: "flex mb-8",
                                    children: (0, a.jsxs)("ol", {
                                        className: "inline-flex items-center space-x-1 md:space-x-3",
                                        children: [(0, a.jsx)("li", {
                                            className: "inline-flex items-center",
                                            children: (0, a.jsxs)(p(), {
                                                href: "/",
                                                className: "inline-flex items-center text-sm text-white hover:text-slate-100",
                                                children: [(0, a.jsx)("svg", {
                                                    "aria-hidden": "true",
                                                    className: "w-4 h-4 mr-2",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, a.jsx)("path", {
                                                        d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                                    })
                                                }), "Accueil"]
                                            })
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [(0, a.jsx)("svg", {
                                                    "aria-hidden": "true",
                                                    className: "opacity-80 w-6 h-6 text-white",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, a.jsx)("path", {
                                                        fillRule: "evenodd",
                                                        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                        clipRule: "evenodd"
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "ml-1 text-sm text-white hover:text-slate-100 md:ml-2 font-semibold",
                                                    children: "Solutions"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, a.jsx)("h1", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "500",
                                        className: "mb-4 font-heading text-white text-8xl md:text-10xl font-semibold",
                                        children: "Solutions EDI"
                                    })
                                }), (0, a.jsx)("p", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "700",
                                    className: "mb-9 font-medium text-lg text-white",
                                    children: "Solutions SaaS ou On premise, EsaLink vous propose un large panel de plateformes d'int\xe9gration B2B sur-mesure."
                                }), (0, a.jsxs)("div", {
                                    className: "flex gap-4 flex-col md:flex-row",
                                    children: [(0, a.jsx)(p(), {
                                        href: "/contact?src=solutions&name=jai_un_projet",
                                        children: (0, a.jsxs)("button", {
                                            "data-aos": "fade-up",
                                            "data-aos-duration": "1500",
                                            className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md ",
                                            children: [(0, a.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                            }), (0, a.jsx)("p", {
                                                className: "relative z-10",
                                                children: "J'ai un projet"
                                            })]
                                        })
                                    }), (0, a.jsx)(p(), {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1500",
                                        href: "/contact",
                                        className: "h-[56px] flex items-center justify-center text-white border-2 border-white border-opacity-50 hover:bg-white hover:bg-opacity-10 py-2 px-6 rounded-lg cursor-pointer bg-opacity-30 transition ease-in font-heading text-xs uppercase",
                                        children: "Obtenir une d\xe9mo"
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-wrap justify-center xl:justify-start items-center flex-row mt-12 gap-14 2xl:gap-20",
                                children: [(0, a.jsx)("div", {
                                    className: "w-24",
                                    children: (0, a.jsx)(r(), {
                                        "data-aos": "slide-left",
                                        "data-aos-duration": "200",
                                        src: m.Z,
                                        alt: "Logo IBM Blanc | Esalink",
                                        className: "w-24"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-auto",
                                    children: (0, a.jsx)(r(), {
                                        "data-aos": "slide-left",
                                        "data-aos-duration": "800",
                                        src: x.Z,
                                        alt: "Logo hubtimize | Esalink",
                                        className: "w-36"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-auto",
                                    children: (0, a.jsx)(r(), {
                                        "data-aos": "slide-left",
                                        "data-aos-duration": "500",
                                        src: c.Z,
                                        alt: "Logo Generix Blanc | Esalink",
                                        className: "w-40"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-auto",
                                    children: (0, a.jsx)(r(), {
                                        "data-aos": "slide-left",
                                        "data-aos-duration": "500",
                                        src: d.Z,
                                        alt: "Logo Cleo Blanc | Esalink",
                                        className: "w-20"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-18",
                                    children: (0, a.jsx)(r(), {
                                        "data-aos": "slide-left",
                                        "data-aos-duration": "1400",
                                        src: A.Z,
                                        alt: "Logo GS1 Blanc | Esalink",
                                        className: "w-18"
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)(r(), {
                                src: u.Z,
                                alt: "Globe Image | Esalink",
                                className: "absolute w-[390px] lg:w-[565px] xl:w-[658px] top-72 lg:top-40 xl:top-24 opacity-30 -right-14"
                            })
                        }), (0, a.jsx)(r(), {
                            src: h.Z,
                            alt: "Line Image | Esalink",
                            className: "absolute top-16 left-0 w-full z-0",
                            style: {
                                transform: "scaleX(-1)"
                            }
                        })]
                    })]
                })
            }
            var b = {
                    src: "/_next/static/media/puzzle.592ba783.svg",
                    height: 814,
                    width: 812
                },
                w = {
                    src: "/_next/static/media/migration.3096ef4f.svg",
                    height: 830,
                    width: 830
                },
                j = {
                    src: "/_next/static/media/audit.04625fb8.svg",
                    height: 783,
                    width: 598
                },
                v = {
                    src: "/_next/static/media/deploiement.e45462d1.svg",
                    height: 863,
                    width: 606
                },
                N = {
                    src: "/_next/static/media/conception.f8fb99de.svg",
                    height: 812,
                    width: 812
                },
                k = {
                    src: "/_next/static/media/formation.1f90b558.svg",
                    height: 748,
                    width: 747
                };

            function E() {
                return (0, a.jsx)("section", {
                    className: "py-24 bg-slate-50",
                    children: (0, a.jsxs)("div", {
                        "data-aos": "fade-up",
                        "data-aos-duration": "800",
                        className: "container px-4 mx-auto",
                        children: [(0, a.jsxs)("h2", {
                            "data-aos": "fade-down",
                            "data-aos-duration": "500",
                            className: "mb-8 mx-auto font-heading font-semibold text-center text-5xl sm:text-6xl !leading-tight text-gray-700",
                            children: ["EsaLink, votre ", (0, a.jsx)("label", {
                                className: "text-esalink-orange",
                                children: "int\xe9grateur EDI"
                            })]
                        }), (0, a.jsx)("p", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            className: "text-lg max-w-5xl mx-auto text-center text-gray-600 mb-12",
                            children: "Les diff\xe9rents partenariats d\xe9velopp\xe9s au fil du temps, et les synergies tir\xe9es des diff\xe9rentes Solutions EDI existantes, nous permettent de vous proposer le meilleur des derni\xe8res technologies selon vos besoins et votre maturit\xe9 EDI :"
                        }), (0, a.jsxs)("div", {
                            className: "mt-18 flex flex-col md:flex-row gap-6 items-center max-w-4xl mx-auto text-center",
                            children: [(0, a.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "400",
                                className: "group cursor-pointer w-full md:w-1/3 flex flex-col items-center gap-4",
                                children: [(0, a.jsx)(r(), {
                                    className: "w-24 h-32",
                                    src: N,
                                    alt: "conception Image | Esalink"
                                }), (0, a.jsx)("h3", {
                                    className: "mb-4 font-semibold group-hover:text-esalink-orange text-slate-800",
                                    children: "Conception"
                                })]
                            }), (0, a.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "400",
                                className: "group cursor-pointer w-full md:w-1/3 flex flex-col items-center gap-4",
                                children: [(0, a.jsx)(r(), {
                                    className: "w-24 h-32",
                                    src: b,
                                    alt: "puzzle Image | Esalink"
                                }), (0, a.jsx)("h3", {
                                    className: "mb-4 font-semibold group-hover:text-esalink-orange text-slate-800",
                                    children: "Int\xe9gration"
                                })]
                            }), (0, a.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "400",
                                className: "group cursor-pointer w-full md:w-1/3 flex flex-col items-center gap-4",
                                children: [(0, a.jsx)(r(), {
                                    className: "w-24 h-32",
                                    src: w,
                                    alt: "migration Image | Esalink"
                                }), (0, a.jsx)("h3", {
                                    className: "mb-4 font-semibold group-hover:text-esalink-orange text-slate-800",
                                    children: "Migration"
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mt-12 flex flex-col md:flex-row gap-6 items-center max-w-4xl mx-auto text-center",
                            children: [(0, a.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "400",
                                className: "group cursor-pointer w-full md:w-1/3 flex flex-col items-center gap-4",
                                children: [(0, a.jsx)(r(), {
                                    className: "w-24 h-32",
                                    src: v,
                                    alt: "deploiement Image | Esalink"
                                }), (0, a.jsx)("h3", {
                                    className: "mb-4 font-semibold group-hover:text-esalink-orange text-slate-800",
                                    children: "D\xe9ploiement"
                                })]
                            }), (0, a.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "400",
                                className: "group cursor-pointer w-full md:w-1/3 flex flex-col items-center gap-4",
                                children: [(0, a.jsx)(r(), {
                                    className: "w-24 h-32",
                                    src: j,
                                    alt: "audit Image | Esalink"
                                }), (0, a.jsx)("h3", {
                                    className: "mb-4 font-semibold group-hover:text-esalink-orange text-slate-800",
                                    children: "Audit / Documentation"
                                })]
                            }), (0, a.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "400",
                                className: "group cursor-pointer w-full md:w-1/3 flex flex-col items-center gap-4",
                                children: [(0, a.jsx)(r(), {
                                    className: "w-24 h-32",
                                    src: k,
                                    alt: "formation Image | Esalink"
                                }), (0, a.jsx)("h3", {
                                    className: "mb-4 font-semibold group-hover:text-esalink-orange text-slate-800",
                                    children: "Formation"
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "1200",
                            className: "flex flex-wrap justify-center items-center mt-12",
                            children: (0, a.jsx)("div", {
                                className: "w-full md:w-auto p-1.5",
                                children: (0, a.jsx)(p(), {
                                    href: "/contact?src=solutions&name=construire_projet_specialiste",
                                    children: (0, a.jsxs)("button", {
                                        className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                        children: [(0, a.jsx)("div", {
                                            className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                        }), (0, a.jsx)("p", {
                                            className: "relative z-10",
                                            children: "Construire votre projet avec nos sp\xe9cialistes"
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function y() {
                return (0, a.jsx)("section", {
                    className: "relative",
                    children: (0, a.jsx)("div", {
                        className: "p-16 bg-gradient-cyan2 ",
                        children: (0, a.jsxs)("div", {
                            className: "container mx-auto flex flex-wrap items-center justify-between -m-6",
                            children: [(0, a.jsx)("div", {
                                className: "w-full p-6 lg:w-3/4",
                                children: (0, a.jsxs)("div", {
                                    className: "",
                                    children: [(0, a.jsx)("p", {
                                        className: "mb-5 font-heading font-medium text-xl text-gray-900 text-opacity-60",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "500",
                                        children: "E-book"
                                    }), (0, a.jsx)("h2", {
                                        className: "font-heading font-bold text-4xl sm:text-6xl text-gray-900",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "800",
                                        children: "Retrouvez l’essentiel de l’EDI dans notre e-book \xab R\xe9ussir son projet EDI en 8 \xe9tapes \xbb ainsi que le guide GS1."
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "w-full p-6 md:w-1/4",
                                "data-aos": "fade-right",
                                "data-aos-duration": "800",
                                children: (0, a.jsxs)("div", {
                                    className: "flex flex-wrap justify-end -m-2",
                                    children: [(0, a.jsx)("div", {
                                        className: "w-full xl:w-auto p-2",
                                        children: (0, a.jsx)(p(), {
                                            href: "/contact?src=solutions&name=telecharger_ebook",
                                            className: "font-heading py-5 px-10 block w-full uppercase text-xs tracking-px text-gray-900 font-bold bg-white hover:bg-gray-50 rounded-md",
                                            children: "T\xe9l\xe9charger"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "w-full xl:w-auto p-2"
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
            var B = {
                    src: "/_next/static/media/award.3e245783.svg",
                    height: 323,
                    width: 139
                },
                Q = {
                    src: "/_next/static/media/gs1.83d53352.webp",
                    height: 200,
                    width: 200,
                    blurDataURL: "data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDwAAAABYBTbdpOb0BVEDX0PS1yAB1ATB+CCYIZlqoiImADEtC8FNLe19lWcNtaYxL99qfZKaJrHWmsUiPlYCwBWUDggWAAAABACAJ0BKggACAACQDglmAJ0BpADZ3/OXAAAzjmuJtLFCIn0OitJurana79GMGlT5XEUFVj4YCGdVRQo/m/EkWQor7VTWw6txB7N9m4Ha6ebX6+M1sGAAAA=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                D = {
                    src: "/_next/static/media/ibm.62b57bea.webp",
                    height: 121,
                    width: 200,
                    blurDataURL: "data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAUT9RSTlAIk0yC0FCGldHLkEdTk0qRUU+NCo0LSEcEDJTRj8/N0BEOgBWUDggMgAAANABAJ0BKggABQACQDgllAJ0AQ71/5+AAP7BrbGWTUXOPRd2EmEUNRzP6xhJbcbOfVQA",
                    blurWidth: 8,
                    blurHeight: 5
                },
                I = s(8885),
                U = s(2781),
                R = {
                    src: "/_next/static/media/iso27001.98d4aefc.webp",
                    height: 96,
                    width: 200,
                    blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAIDhNQTIqLR5YfGxJQhQAK1d5b0k7PSM6IDhOQi0vLR8AVlA4IDYAAACwAQCdASoIAAQAAkA4JQBOgCHfTAwAAP6o6CGrSV1SQCrW1SnzBni5swXY+RX1G6csjGZ6AAA=",
                    blurWidth: 8,
                    blurHeight: 4
                };

            function L() {
                return (0, a.jsx)("section", {
                    className: "py-12 pb-24 sm:pb-12 xl:py-20 bg-slate-50",
                    children: (0, a.jsx)("div", {
                        className: "container px-4 mx-auto",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col xl:flex-row gap-4 w-full justify-center items-center",
                            children: [(0, a.jsx)(r(), {
                                src: B,
                                className: "w-40 hidden xl:block",
                                alt: "Award | Esalink"
                            }), (0, a.jsxs)("div", {
                                className: "xl:w-1/2 text-center",
                                children: [(0, a.jsx)("h4", {
                                    className: "font-medium text-xl mb-8",
                                    children: "Certifications"
                                }), (0, a.jsxs)("div", {
                                    className: "flex justify-center items-center gap-8 flex-wrap xl:flex-nowrap h-24",
                                    children: [(0, a.jsx)(r(), {
                                        src: Q,
                                        className: "w-24",
                                        alt: "GS1 Bleu | Esalink"
                                    }), (0, a.jsx)(r(), {
                                        src: R,
                                        className: "w-32",
                                        alt: "Iso 27001 Information Security | Esalink"
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "xl:w-1/2 text-center",
                                children: [(0, a.jsx)("h4", {
                                    className: "font-medium text-xl mt-6 xl:mt-0 mb-8",
                                    children: "Certifi\xe9 Partenaires officiels"
                                }), (0, a.jsxs)("div", {
                                    className: "flex justify-center items-center gap-8 flex-wrap xl:flex-nowrap h-24",
                                    children: [(0, a.jsx)(r(), {
                                        src: I.Z,
                                        className: "w-42",
                                        alt: "Logo Generix | Esalink"
                                    }), (0, a.jsx)(r(), {
                                        src: D,
                                        className: "w-24",
                                        alt: "Logo Ibm | Esalink"
                                    }), (0, a.jsx)(r(), {
                                        src: U.Z,
                                        className: "w-28",
                                        alt: "Logo Cleo | Esalink"
                                    })]
                                })]
                            }), (0, a.jsx)(r(), {
                                src: B,
                                className: "w-40 hidden xl:block mirror",
                                alt: "Award | Esalink"
                            })]
                        })
                    })
                })
            }
            var C = {
                src: "/_next/static/media/rounded.a8964750.webp",
                height: 200,
                width: 200,
                blurDataURL: "data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDMAAAABN6AmAAFGLgkV9q0aERG4cwpqIslt85UAnBz6zES9EwE5ov+x5heDm8EVikLJ4AZvzS8AVlA4IEwAAACwAQCdASoIAAgAAkA4JQBOgB5vWRwAAP7mhwb2xEE1NPxId8GSt4xp35sFC8yoivzC5SE7FP8mv5ChV8Emf6aB7zsdUhCWCm9VAAAA",
                blurWidth: 8,
                blurHeight: 8
            };

            function S() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("section", {
                        className: "py-24 bg-white",
                        children: (0, a.jsxs)("div", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            className: "container px-4 mx-auto aos-init aos-animate",
                            children: [(0, a.jsxs)("h2", {
                                "data-aos": "fade-down",
                                "data-aos-duration": "500",
                                className: "mb-5 mx-auto font-heading font-semibold text-center text-5xl sm:text-6xl !leading-tight text-gray-700",
                                children: ["Notre expertise en ", (0, a.jsx)("label", {
                                    className: "text-esalink-orange",
                                    children: "EDI"
                                }), " repose sur la compr\xe9hension de vos ", (0, a.jsx)("label", {
                                    className: "text-esalink-orange",
                                    children: "enjeux"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col xl:flex-row mt-18 mb-18 items-center justify-between gap-4",
                                children: [(0, a.jsx)("div", {
                                    className: "w-full xl:w-3/12",
                                    children: (0, a.jsx)("p", {
                                        children: "Automatisez toutes vos op\xe9rations commerciales, logistiques et fiscales \xe0 partir d'une seule plateforme EDI int\xe9gr\xe9e \xe0 vos syst\xe8mes d'information. Assurez votre conformit\xe9 sectorielle et r\xe9glementaire tout en catalysant votre \xe9cosyst\xe8me de partenaires."
                                    })
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsx)(r(), {
                                        src: C,
                                        className: "my-8 xl:my-0 w-56",
                                        alt: "Rond | Esalink"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "w-full xl:w-6/12",
                                    children: [(0, a.jsx)("p", {
                                        children: "L'int\xe9gration B2B est le cœur de notre m\xe9tier chez EsaLink. Riche d’exp\xe9rience et de partenariat avec les grands \xe9diteurs du march\xe9, nous vous accompagnons dans l’identification de vos besoins pour vous proposer les solutions les plus adapt\xe9es."
                                    }), (0, a.jsx)("br", {}), (0, a.jsx)("p", {
                                        children: "Notre savoir-faire s'explique par l'importance que nous accordons \xe0 la compr\xe9hension des sp\xe9cificit\xe9s de nos clients. Proximit\xe9, confiance et ma\xeetrise sont nos ma\xeetres mots pour vous offrir enti\xe8re satisfaction."
                                    })]
                                })]
                            }), (0, a.jsx)("h2", {
                                "data-aos": "fade-down",
                                "data-aos-duration": "500",
                                className: "mb-8 mx-auto font-heading font-semibold text-esalink-orange text-center text-5xl sm:text-6xl !leading-tight text-gray-700",
                                children: "Vous recherchez une solution EDI en licence, en SaaS ?"
                            }), (0, a.jsx)("p", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                className: "text-lg max-w-4xl mx-auto text-center text-gray-600",
                                children: "Notre p\xf4le int\xe9gration se charge de vous proposer selon vos exigences techniques et m\xe9tiers, l’une de nos quatre grandes solutions d'int\xe9gration B2B."
                            }), (0, a.jsx)("p", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                className: "text-lg max-w-4xl mt-6 mx-auto text-center text-gray-600",
                                children: "La particularit\xe9 d’EsaLink est de vous offrir une approche exhaustive qui vous accompagne dans toutes les \xe9tapes de vos projets EDI. De la formulation de vos besoins, \xe0 la migration, au d\xe9ploiement et l'int\xe9gration \xe0 vos syst\xe8mes d'information. Optez pour l'excellence EDI."
                            }), (0, a.jsx)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                className: "flex flex-wrap justify-center items-center mt-8",
                                children: (0, a.jsx)("div", {
                                    className: "w-full md:w-auto p-1.5",
                                    children: (0, a.jsx)(p(), {
                                        href: "/contact?src=solutions&name=expliquez_votre_projet_edi",
                                        children: (0, a.jsxs)("button", {
                                            className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                            children: [(0, a.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                            }), (0, a.jsx)("p", {
                                                className: "relative z-10",
                                                children: "Expliquez nous votre projet EDI "
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            }
            var z = {
                src: "/_next/static/media/360.abdf63a4.svg",
                height: 100,
                width: 100
            };

            function _() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("section", {
                        className: "py-16 bg-white",
                        children: (0, a.jsxs)("div", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            className: "container px-4 mx-auto aos-init aos-animate",
                            children: [(0, a.jsxs)("h2", {
                                "data-aos": "fade-down",
                                "data-aos-duration": "500",
                                className: "mb-5 mx-auto font-heading font-semibold text-center text-5xl sm:text-6xl !leading-tight text-gray-700",
                                children: ["Des ", (0, a.jsx)("label", {
                                    className: "text-esalink-orange",
                                    children: "services"
                                }), " sp\xe9cialis\xe9s ponctuels ou continus pour toutes les phases de vos ", (0, a.jsx)("label", {
                                    className: "text-esalink-orange",
                                    children: "projets de d\xe9mat\xe9rialisation"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-center md:justify-between gap-18 md:gap-4 max-w-2xl mx-auto my-12",
                                children: [(0, a.jsx)("div", {
                                    children: (0, a.jsxs)("ul", {
                                        className: "bullet-li-esa leading-7",
                                        children: [(0, a.jsx)("li", {
                                            children: "Conseil conformit\xe9"
                                        }), (0, a.jsx)("li", {
                                            children: "Evaluation"
                                        }), (0, a.jsx)("li", {
                                            children: "Etude"
                                        }), (0, a.jsx)("li", {
                                            children: "Gestion projet"
                                        }), (0, a.jsx)("li", {
                                            children: "Remplacement"
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "hidden md:block",
                                    children: (0, a.jsx)(r(), {
                                        src: z,
                                        className: "w-56",
                                        alt: "Rounded Image | Esalink"
                                    })
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsxs)("ul", {
                                        className: "bullet-li-esa leading-7",
                                        children: [(0, a.jsx)("li", {
                                            children: "Coordination"
                                        }), (0, a.jsx)("li", {
                                            children: "Supervision"
                                        }), (0, a.jsx)("li", {
                                            children: "Support"
                                        }), (0, a.jsx)("li", {
                                            children: "Maintenance"
                                        }), (0, a.jsx)("li", {
                                            children: "Run Services"
                                        })]
                                    })
                                })]
                            }), (0, a.jsx)("p", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                className: "text-lg max-w-4xl mx-auto text-center text-gray-600",
                                children: "Parce que la r\xe9ussite d'un projet EDI repose sur la connaissance fonctionnelle de votre activit\xe9 et la maitrise de votre configuration technique, nous articulons notre savoir sur l'assimilation de vos enjeux sectoriels."
                            }), (0, a.jsx)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "1200",
                                className: "flex justify-center mt-8",
                                children: (0, a.jsx)(p(), {
                                    href: "/nos-services",
                                    className: "inline-block group p-0.5 font-heading text-base text-gray-700 font-bold hover:bg-[#98d9eb] overflow-hidden rounded-md bg-[#98d9eb]",
                                    children: (0, a.jsxs)("div", {
                                        className: "relative py-2 px-6 bg-white rounded",
                                        children: [(0, a.jsx)("div", {
                                            className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-[#98d9eb]"
                                        }), (0, a.jsx)("span", {
                                            className: "relative z-10",
                                            children: "D\xe9couvrir nos services"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                })
            }
            var W = s(8048),
                Z = s(2448),
                G = {
                    src: "/_next/static/media/ibmhub.9057b067.webp",
                    height: 47,
                    width: 313,
                    blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAP0MyPkVDPUMAVlA4ICQAAABwAQCdASoIAAEAAkA4JYwAAhpYoAD+LiI60ze1OfbIdTSmAAA=",
                    blurWidth: 8,
                    blurHeight: 1
                },
                O = {
                    src: "/_next/static/media/edi.0d125c45.svg",
                    height: 100,
                    width: 100
                },
                J = {
                    src: "/_next/static/media/e-facture.5bf51116.svg",
                    height: 100,
                    width: 100
                },
                V = {
                    src: "/_next/static/media/maintenanceedi.b870cdfa.svg",
                    height: 100,
                    width: 100
                },
                P = {
                    src: "/_next/static/media/webedi.2d991f29.svg",
                    height: 100,
                    width: 100
                };

            function M() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("section", {
                        className: "pb-8 pt-24 md:pt-32",
                        children: (0, a.jsxs)("div", {
                            className: "container px-4 mx-auto",
                            children: [(0, a.jsx)(r(), {
                                className: "mx-auto mb-18 w-96",
                                src: G,
                                alt: "Hubtimize TradeOptimizer IBM | Esalink"
                            }), (0, a.jsx)(r(), {
                                "data-aos": "zoom-in-up",
                                "data-aos-duration": "800",
                                className: "absolute min-w-[350px] w-5/12 mx-auto z-20 left-0 right-0",
                                src: W.Z,
                                alt: "Plein d'\xe9cran Hubtimize | Esalink"
                            })]
                        })
                    }), (0, a.jsxs)("section", {
                        className: "mt-8 bg-gradient-to-r from-[#D7F5F7] to-[#EADEFB] overflow-hidden",
                        children: [(0, a.jsx)(r(), {
                            className: "w-full rotate-180 absolute -mt-1 z-10",
                            src: Z.Z,
                            alt: "Rounded Image | Esalink"
                        }), (0, a.jsxs)("div", {
                            className: "container pt-12 xl:pt-32 2xl:pt-52 pb-20 px-4 mx-auto text-gray-700 max-w-6xl",
                            children: [(0, a.jsx)("h2", {
                                className: "mt-36 mb-8 mx-auto font-heading font-semibold text-center text-6xl !leading-tight ",
                                children: "L’EDI dans sa forme la plus moderne"
                            }), (0, a.jsxs)("p", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                className: "text-lg mx-auto text-center mb-12",
                                children: ["La derni\xe8re solution d’int\xe9gration B2B en SaaS (service abonnement).", (0, a.jsx)("br", {}), "Retrouvez toutes les fonctionnalit\xe9s d'une plateforme EDI performante, modulable et intuitive."]
                            }), (0, a.jsxs)("div", {
                                className: "mt-18 flex flex-col md:flex-row gap-6 items-center max-w-6xl mx-auto text-center",
                                children: [(0, a.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "400",
                                    className: "w-full md:w-1/4 flex flex-col items-center gap-4",
                                    children: [(0, a.jsx)(r(), {
                                        className: "w-24",
                                        src: O,
                                        alt: "Plateforme EDI | Esalink"
                                    }), (0, a.jsx)("h3", {
                                        className: "mb-4 font-semibold",
                                        children: "Plateforme EDI int\xe9gr\xe9e"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "400",
                                    className: "w-full md:w-1/4 flex flex-col items-center gap-4",
                                    children: [(0, a.jsx)(r(), {
                                        className: "w-24",
                                        src: P,
                                        alt: "Web EDI Partner Portal | Esalink"
                                    }), (0, a.jsx)("h3", {
                                        className: "mb-4 font-semibold",
                                        children: "Web EDI Partner Portal"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "400",
                                    className: "w-full md:w-1/4 flex flex-col items-center gap-4",
                                    children: [(0, a.jsx)(r(), {
                                        className: "w-24",
                                        src: J,
                                        alt: "Facturation Electronique | Esalink"
                                    }), (0, a.jsx)("h3", {
                                        className: "mb-4 font-semibold",
                                        children: "Facturation Electronique l\xe9gale"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "400",
                                    className: "w-full md:w-1/4 flex flex-col items-center gap-4",
                                    children: [(0, a.jsx)(r(), {
                                        className: "w-24",
                                        src: V,
                                        alt: "Maintenance EDI externalis\xe9e | Esalink"
                                    }), (0, a.jsx)("h3", {
                                        className: "mb-4 font-semibold",
                                        children: "Maintenance EDI externalis\xe9e"
                                    })]
                                })]
                            }), (0, a.jsx)("p", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                className: "text-lg mx-auto text-center mt-12 mb-8",
                                children: "Quand la simplicit\xe9 et la flexibilit\xe9 rejoignent la performance."
                            }), (0, a.jsx)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "2100",
                                className: "flex flex-wrap justify-center items-center mt-16",
                                children: (0, a.jsxs)("div", {
                                    className: "flex flex-col md:flex-row gap-[22px] items-center",
                                    children: [(0, a.jsx)(p(), {
                                        href: "/solutions/hubtimize",
                                        className: "h-[56px] inline-block group p-0.5 font-heading text-base text-gray-700 font-bold hover:bg-[#98d9eb] overflow-hidden rounded-md bg-[#98d9eb]",
                                        children: (0, a.jsxs)("div", {
                                            className: "relative py-2 px-6 bg-slate-50 rounded h-[52px] flex items-center",
                                            children: [(0, a.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-[#98d9eb]"
                                            }), (0, a.jsx)("span", {
                                                className: "relative z-10",
                                                children: "En savoir plus sur Hubtimize\xae"
                                            })]
                                        })
                                    }), (0, a.jsxs)(p(), {
                                        href: "/contact?src=solutions&name=obtenir_une_demonstration",
                                        className: "group h-[55px] relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                        children: [(0, a.jsx)("div", {
                                            className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                        }), (0, a.jsx)("p", {
                                            className: "relative z-10",
                                            children: "Obtenir une d\xe9monstration"
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            }
            var H = {
                    src: "/_next/static/media/traitement.d5b5a637.svg",
                    height: 88,
                    width: 100
                },
                q = {
                    src: "/_next/static/media/check.da11659f.svg",
                    height: 98,
                    width: 98
                },
                F = {
                    src: "/_next/static/media/target.5c1f8aa6.svg",
                    height: 81,
                    width: 85
                };

            function X() {
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("section", {
                        className: "py-12 bg-img-newsolution text-white relative",
                        children: [(0, a.jsx)(r(), {
                            src: F,
                            className: "hidden xl:block xl:w-[380px] 2xl:w-[580px] -mb-[55px] -ml-[99px] opacity-30 absolute bottom-0",
                            alt: "Cible Image | Esalink"
                        }), (0, a.jsxs)("div", {
                            className: "container px-4 mx-auto xl:flex",
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            children: [(0, a.jsx)("div", {
                                className: "hidden xl:block w-[500px]"
                            }), (0, a.jsxs)("div", {
                                children: [(0, a.jsx)("h3", {
                                    className: "text-2xl mb-8 font-medium",
                                    children: "Vous voulez passer \xe0 une nouvelle solution EDI ?"
                                }), (0, a.jsxs)("p", {
                                    className: "text-base mx-auto",
                                    children: ["Les \xe9changes EDI jouent un r\xf4le important dans vos relations commerciales, avec vos clients et vos fournisseurs.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Vous envoyez et recevez une multitude de documents (factures, bon de commandes, avis d’exp\xe9dition, etc…).", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Le bon traitement de ces documents est vital pour votre entreprise et impact directement :"]
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center gap-12 my-8",
                                    children: [(0, a.jsx)(r(), {
                                        src: H,
                                        className: "w-24",
                                        alt: "traitement Image | Esalink"
                                    }), (0, a.jsxs)("ul", {
                                        className: "bullet-li-white",
                                        children: [(0, a.jsx)("li", {
                                            children: "votre gestion des approvisionnements"
                                        }), (0, a.jsx)("li", {
                                            children: "votre gestion des finances"
                                        }), (0, a.jsx)("li", {
                                            children: "et autres qui concourent pour votre productivit\xe9 !"
                                        })]
                                    })]
                                }), (0, a.jsx)("h4", {
                                    className: "text-lg mb-8 font-medium",
                                    children: "Vous voulez passer \xe0 une nouvelle solution EDI ?"
                                }), (0, a.jsx)("p", {
                                    children: "La mise en place ou la migration vers une nouvelle Solution EDI est toujours un projet d’envergure et n\xe9cessite pr\xe9paration, pr\xe9cision et expertise afin d'assurer une continuit\xe9 d'activit\xe9 sans perturbation. "
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center gap-10 mt-8",
                                    children: [(0, a.jsx)(r(), {
                                        src: q,
                                        className: "w-20",
                                        alt: "check Image | Esalink"
                                    }), (0, a.jsx)("p", {
                                        children: "Avec une ma\xeetrise des diff\xe9rentes Solutions EDI existantes, nos experts EsaLink vous accompagnent dans toutes les situations et \xe0 toutes les \xe9tapes."
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "mt-8",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-[22px] items-center",
                                        children: [(0, a.jsx)(p(), {
                                            href: "/solutions/hubtimize",
                                            className: "h-[56px] w-80 inline-block group p-0.5 font-heading text-base text-gray-700 font-bold hover:bg-[#98d9eb] overflow-hidden rounded-md bg-[#98d9eb]",
                                            children: (0, a.jsxs)("div", {
                                                className: "relative py-2 px-6 bg-slate-50 rounded h-[52px] flex items-center justify-center",
                                                children: [(0, a.jsx)("div", {
                                                    className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-[#98d9eb]"
                                                }), (0, a.jsx)("span", {
                                                    className: "relative z-10 ",
                                                    children: "En savoir plus sur la migration"
                                                })]
                                            })
                                        }), (0, a.jsx)(p(), {
                                            href: "/solutions/hubtimize",
                                            className: "h-[56px] w-64 inline-block group p-0.5 font-heading text-base text-gray-700 font-bold hover:bg-[#98d9eb] overflow-hidden rounded-md bg-[#98d9eb]",
                                            children: (0, a.jsxs)("div", {
                                                className: "relative py-2 px-6 bg-slate-50 rounded h-[52px] flex items-center justify-center",
                                                children: [(0, a.jsx)("div", {
                                                    className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-[#98d9eb]"
                                                }), (0, a.jsx)("span", {
                                                    className: "relative z-10",
                                                    children: "Initier un projet"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
            s(7294);
            var T = s(5585),
                Y = s(2074),
                K = s(6757),
                $ = s(1460),
                ee = s(5111),
                et = s(5505),
                es = s(5607);
            let ea = e => {
                let {
                    slides: t,
                    options: s
                } = e, i = (0, Y.Z)({
                    delay: 2500,
                    rootNode: e => e.parentElement
                }), [l] = (0, T.Z)(s, [i]), n = [{
                    id: 1,
                    src: K.Z,
                    alt: "Logo carglass | Esalink",
                    size: "w-40"
                }, {
                    id: 2,
                    src: $.Z,
                    alt: "Nestl\xe9 Petit | Esalink",
                    size: "w-20"
                }, {
                    id: 3,
                    src: ee.Z,
                    alt: "L Or\xe9al | Esalink",
                    size: "w-32"
                }, {
                    id: 4,
                    src: et.Z,
                    alt: "Logo colissimo | Esalink",
                    size: "w-36"
                }, {
                    id: 5,
                    src: es.Z,
                    alt: "Logo clairefontaine | Esalink",
                    size: "w-32"
                }, {
                    id: 6,
                    src: K.Z,
                    alt: "Logo carglass | Esalink",
                    size: "w-40"
                }, {
                    id: 7,
                    src: $.Z,
                    alt: "Nestl\xe9 Petit | Esalink",
                    size: "w-20"
                }, {
                    id: 8,
                    src: ee.Z,
                    alt: "L Or\xe9al | Esalink",
                    size: "w-32"
                }, {
                    id: 9,
                    src: et.Z,
                    alt: "Logo colissimo | Esalink",
                    size: "w-36"
                }, {
                    id: 10,
                    src: es.Z,
                    alt: "Logo clairefontaine | Esalink",
                    size: "w-32"
                }], o = n.slice(n.length / 2, n.length);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "pt-16 pb-16 overflow-hidden bg-img-client-solution",
                        children: [(0, a.jsx)("div", {
                            className: "hidden sm:block embla w-9/12 mx-auto",
                            "data-aos": "fade-left",
                            "data-aos-duration": "500",
                            children: (0, a.jsx)("div", {
                                className: "h-[15vh]",
                                ref: l,
                                children: (0, a.jsx)("div", {
                                    className: "embla__container",
                                    children: n.map(e => (0, a.jsx)("div", {
                                        className: "embla__slides",
                                        children: (0, a.jsx)("div", {
                                            className: "w-auto p-10",
                                            children: (0, a.jsx)(r(), {
                                                src: e.src,
                                                alt: e.alt,
                                                width: 100,
                                                height: 100,
                                                className: e.size + " transform-white opacity-80"
                                            })
                                        })
                                    }, e.id))
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "flex sm:hidden flex-col justify-center items-center",
                            children: o.map(e => (0, a.jsx)("div", {
                                className: "w-auto p-7",
                                children: (0, a.jsx)(r(), {
                                    src: e.src,
                                    alt: e.alt,
                                    width: 100,
                                    height: 100,
                                    className: e.size + " transform-white opacity-80"
                                })
                            }, e.id))
                        })]
                    })
                })
            };
            var ei = s(3893),
                el = {
                    src: "/_next/static/media/storage.03104edd.svg",
                    height: 100,
                    width: 100
                },
                en = {
                    src: "/_next/static/media/CIC.048c5ee9.svg",
                    height: 319,
                    width: 304
                },
                er = {
                    src: "/_next/static/media/Sterling.bc1c59ea.svg",
                    height: 96,
                    width: 93
                },
                eo = {
                    src: "/_next/static/media/Trade.5f02fca6.svg",
                    height: 324,
                    width: 319
                },
                ec = {
                    src: "/_next/static/media/cloud.26019e30.svg",
                    height: 100,
                    width: 25
                },
                ed = {
                    src: "/_next/static/media/hub.2f175d3a.svg",
                    height: 40,
                    width: 100
                };

            function ex() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("section", {
                        id: "partners",
                        className: "partners pt-10",
                        children: (0, a.jsx)("div", {
                            className: "partners-block",
                            children: (0, a.jsx)("div", {
                                className: "!w-full img-accordion-container bg-img-inteedi mx-auto h-[200vh] sm:h-[110vh] lg:h-[80vh] 2xl:h-[600px] overflow-hidden",
                                children: (0, a.jsxs)("div", {
                                    className: "img-accordion flex items-stretch justify-around h-full !flex-col lg:!flex-row",
                                    children: [(0, a.jsxs)("div", {
                                        className: "img-item group relative lg:border-r-3 border-white",
                                        children: [(0, a.jsx)("div", {
                                            className: "img-container flex flex-col justify-center items-center h-full",
                                            children: (0, a.jsxs)("div", {
                                                className: "border-2 w-2/3 py-16 text-center text-3xl rounded-sm text-white whitespace-nowrap",
                                                children: [(0, a.jsx)("label", {
                                                    className: "text-6xl",
                                                    children: "ON PREMISE"
                                                }), (0, a.jsx)("br", {}), (0, a.jsx)("label", {
                                                    className: "text-xl",
                                                    children: "Licence sur site"
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "text-container flex flex-row justify-between absolute bottom-0 text-white",
                                            children: (0, a.jsxs)("div", {
                                                className: "text flex flex-col px-10",
                                                children: [(0, a.jsxs)("h3", {
                                                    className: "text-5xl",
                                                    children: ["ON PREMISE", (0, a.jsx)("label", {
                                                        className: "text-2xl",
                                                        children: " - licence h\xe9berg\xe9e par vos soins -"
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "hidden mt-8 gap-18 md:inline-flex mb-[36px]",
                                                    children: [(0, a.jsx)(p(), {
                                                        className: "w-48 transition delay-150 hover:rotate-45",
                                                        href: "/solutions/cleo",
                                                        children: (0, a.jsx)(r(), {
                                                            src: en,
                                                            alt: "CIC | Esalink",
                                                            className: "w-auto"
                                                        })
                                                    }), (0, a.jsx)(p(), {
                                                        className: "w-48 transition delay-150 hover:rotate-45",
                                                        href: "/solutions/tradexpress",
                                                        children: (0, a.jsx)(r(), {
                                                            src: eo,
                                                            alt: "Tradexpress | Esalink",
                                                            className: "w-auto"
                                                        })
                                                    }), (0, a.jsx)(p(), {
                                                        className: "w-48 transition delay-150 hover:rotate-45",
                                                        href: "/solutions/ibm-sterling",
                                                        children: (0, a.jsx)(r(), {
                                                            src: er,
                                                            alt: "Sterling | Esalink",
                                                            className: "w-auto"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("span", {
                                                    className: "text-left text-lg my-4 text-white pb-4",
                                                    children: ["Les solutions ", (0, a.jsx)("label", {
                                                        className: "text-esalink-orange",
                                                        children: "en Licence"
                                                    }), " sont install\xe9es localement sur vos infrastructures et peuvent \xeatre maintenues par EsaLink. "]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex flex-col md:flex-row gap-8",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex gap-8 items-center justify-start",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "w-8",
                                                            children: (0, a.jsx)(r(), {
                                                                src: q,
                                                                alt: "check icon | Esalink"
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "text-xs w-[100%]",
                                                            children: ["Retrouvez un ensemble de solutions avec des fonctionnalit\xe9s exhaustives ayant fait leurs preuves dans des milliers d'entreprises \xe0 l'internationale.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Votre station EDI h\xe9bergera les fonctions d'administration, de param\xe9trage et d'exploitation directement sur vos serveurs."]
                                                        })]
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex gap-8 items-center justify-start",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "w-8",
                                                            children: (0, a.jsx)(r(), {
                                                                src: el,
                                                                alt: "storage icon | Esalink"
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "text-xs w-[100%]",
                                                            children: ["Moteur de traduction, de communication et d'automatisation puissante et fiable assurant le fonctionnement quotidien de votre plateforme.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Enregistrement de partenaire simplifi\xe9 avec les sp\xe9cifications inh\xe9rentes \xe0 leurs profils sp\xe9cifiques de message, les r\xe9seaux de communication allou\xe9s et la programmation personnalis\xe9e des flux.                            "]
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "img-item group relative lg:border-l-3 border-white",
                                        children: [(0, a.jsx)("div", {
                                            className: "bg-image absolute w-full h-full -z-10",
                                            children: (0, a.jsx)(r(), {
                                                className: "object-cover w-full h-full",
                                                src: ei.Z,
                                                alt: "Facturation electronique | Esalink"
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "img-container flex flex-col justify-center items-center h-full",
                                            children: (0, a.jsxs)("div", {
                                                className: "border-2 w-2/3 py-16 text-center text-3xl rounded-sm text-white whitespace-nowrap",
                                                children: [(0, a.jsx)("label", {
                                                    className: "text-6xl",
                                                    children: "CLOUD"
                                                }), (0, a.jsx)("br", {}), (0, a.jsx)("label", {
                                                    className: "text-xl",
                                                    children: "SaaS All-in-One"
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "text-container flex flex-row justify-between absolute bottom-0 text-white",
                                            children: (0, a.jsxs)("div", {
                                                className: "text flex flex-col px-10",
                                                children: [(0, a.jsxs)("h3", {
                                                    className: "text-5xl",
                                                    children: ["CLOUD", (0, a.jsx)("label", {
                                                        className: "text-2xl",
                                                        children: " - SaaS All In One h\xe9berg\xe9 par nos soins -"
                                                    })]
                                                }), (0, a.jsx)(p(), {
                                                    href: "/solutions/hubtimize/",
                                                    children: (0, a.jsx)(r(), {
                                                        className: "hover:scale-110 hover:-translate-y-1 transition duration-150 ease-in-out mt-6 w-[500px] mb-4 mx-auto",
                                                        src: ed,
                                                        alt: "Cloud Hubtimize | Esalink"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex items-center justify-center gap-14",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "w-1/4",
                                                        children: (0, a.jsxs)("span", {
                                                            className: "text-left text-lg xl:text-xl text-white",
                                                            children: ["D\xe9couvrez la puissance et la flexibilit\xe9 ", (0, a.jsx)("label", {
                                                                className: "text-esalink-orange",
                                                                children: "d'HUBTIMIZE\xae"
                                                            }), (0, a.jsx)("br", {}), "Plateforme ", (0, a.jsx)("label", {
                                                                className: "text-esalink-orange",
                                                                children: "All-in-One"
                                                            }), " d'Int\xe9gration B2B"]
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "w-3/4 flex items-center justify-center gap-4",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "m-8 hidden md:flex",
                                                            children: (0, a.jsx)(r(), {
                                                                src: ec,
                                                                alt: "Cloud | Esalink",
                                                                className: "w-[52px]"
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "text-xs",
                                                            children: ["B\xe9n\xe9ficiez de toutes les fonctionnalit\xe9s d'un syst\xe8me d'int\xe9gration B2B moderne et intuitif.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Acc\xe9dez 24h/24 par une simple connexion internet \xe0 un environnement de travail moderne, fluide et hautement scalable.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "D\xe9l\xe9guez l'exploitation, la maintenance, la supervision et la coordination des relations techniques avec vos partenaires (clients/fournisseurs).", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "Assurez-vous 7 jours/7 une s\xe9r\xe9nit\xe9 sans compromis avec nos services h\xe9berg\xe9s mutualis\xe9s respectant les plus hauts standards de s\xe9curit\xe9. Recevez des rapports et alertes personnalis\xe9es multicanal en fonction de vos exigences."]
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    }), (0, a.jsx)("section", {
                        className: "container mx-auto px-10 mt-24",
                        children: (0, a.jsxs)("h2", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "500",
                            className: "text-gray-900 mb-24 font-heading text-4xl md:text-5xl xl:text-6xl font-semibold text-center aos-init aos-animate",
                            children: ["Nos clients ", (0, a.jsx)("label", {
                                className: "text-esalink-orange",
                                children: "nous font confiance"
                            })]
                        })
                    })]
                })
            }
            var em = s(1163);

            function eA() {
                let e = "Solutions EDI : SaaS - On premise - WebEDI | ESALINK",
                    t = "Prestataire EDI certifi\xe9 - Esalink vous propose parmi une multitude de solutions, la plateforme d'Int\xe9gration B2B et les services les plus adapt\xe9s \xe0 vos besoins.",
                    {
                        asPath: s
                    } = (0, em.useRouter)(),
                    i = Array.from([, ].keys());
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(l(), {
                        children: [(0, a.jsx)("title", {
                            children: e
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: t
                        }), (0, a.jsx)("meta", {
                            name: "author",
                            content: "EsaLink"
                        }), (0, a.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, a.jsx)("meta", {
                            property: "og:site_name",
                            content: e
                        }), (0, a.jsx)("meta", {
                            property: "og:url",
                            content: "https://www.esalink.com".concat(s)
                        }), (0, a.jsx)("meta", {
                            name: "image",
                            property: "og:image",
                            content: "https://www.esalink.com/images/esalink_linkedin.jpg"
                        }), (0, a.jsx)("meta", {
                            name: "twitter:description",
                            content: t
                        }), (0, a.jsx)("meta", {
                            name: "twitter:title",
                            content: e
                        }), (0, a.jsx)("meta", {
                            name: "twitter:image",
                            content: ""
                        }), (0, a.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, a.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, a.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.esalink.com".concat(s)
                        }, "canonical")]
                    }), (0, a.jsx)(f, {}), (0, a.jsxs)("main", {
                        id: "beginMain",
                        children: [(0, a.jsx)(S, {}), (0, a.jsx)(ex, {}), (0, a.jsx)(ea, {
                            slides: i,
                            options: {
                                loop: !0
                            }
                        }), (0, a.jsx)(M, {}), (0, a.jsx)(E, {}), (0, a.jsx)(X, {}), (0, a.jsx)(_, {}), (0, a.jsx)(y, {}), (0, a.jsx)(L, {})]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [850, 488, 774, 888, 179], function() {
            return e(e.s = 9039)
        }), _N_E = e.O()
    }
]);