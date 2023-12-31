(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [441], {
        2074: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var s = a(1689),
                l = {
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

            function i(e) {
                var t, a, n, r = s.Z.optionsHandler(),
                    o = r.merge(l, i.globalOptions),
                    c = 0,
                    d = !1;

                function x() {
                    a.off("pointerDown", n), t.stopOnInteraction || a.off("pointerUp", p), m(), c = 0
                }

                function u(e) {
                    m(), void 0 !== e && (d = e), c = window.setTimeout(h, t.delay)
                }

                function m() {
                    c && window.clearTimeout(c)
                }

                function p() {
                    c && (m(), u())
                }

                function h() {
                    var e = a.internalEngine().index;
                    if (t.stopOnLastSnap && e.get() === e.max) return x();
                    a.canScrollNext() ? a.scrollNext(d) : a.scrollTo(0, d), u()
                }
                var f = {
                    name: "autoplay",
                    options: r.merge(o, e),
                    init: function(e) {
                        a = e, d = (t = r.atMedia(f.options)).jump, n = t.stopOnInteraction ? x : m;
                        var s = a.internalEngine().eventStore,
                            l = a.rootNode(),
                            i = t.rootNode && t.rootNode(l) || l;
                        a.on("pointerDown", n), t.stopOnInteraction || a.on("pointerUp", p), t.stopOnMouseEnter && (s.add(i, "mouseenter", n), t.stopOnInteraction || s.add(i, "mouseleave", p)), s.add(document, "visibilitychange", function() {
                            if ("hidden" === document.visibilityState) return m();
                            p()
                        }), s.add(window, "pagehide", function(e) {
                            e.persisted && m()
                        }), t.playOnInit && u()
                    },
                    destroy: x,
                    play: u,
                    stop: m,
                    reset: p
                };
                return f
            }
            i.globalOptions = void 0
        },
        5916: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/solutions/cleo", function() {
                return a(8764)
            }])
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
        8479: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/ibm_logo.e72a02da.svg",
                height: 401,
                width: 1e3
            }
        },
        5753: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/award.891bb313.svg",
                height: 99,
                width: 76
            }
        },
        8764: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return q
                }
            });
            var s = a(5893),
                l = a(9008),
                i = a.n(l),
                n = a(5675),
                r = a.n(n),
                o = a(1664),
                c = a.n(o),
                d = a(8479),
                x = a(8885),
                u = a(7994);

            function m() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("section", {
                        className: "relative py-28 overflow-hidden",
                        children: (0, s.jsx)("div", {
                            className: "container mx-auto px-4",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-wrap items-center -m-6",
                                children: [(0, s.jsx)("div", {
                                    "data-aos": "fade-left",
                                    "data-aos-duration": "500",
                                    className: "w-full lg:w-1/2 p-6",
                                    children: (0, s.jsxs)("div", {
                                        className: "lg:max-w-2xl",
                                        children: [(0, s.jsx)("h2", {
                                            className: "mb-9 font-heading font-semibold text-gray-900 text-5xl sm:text-6xl",
                                            children: "Mais pas seulement..."
                                        }), (0, s.jsx)("ul", {
                                            className: "mb-11",
                                            children: (0, s.jsx)("li", {
                                                className: "mb-3 flex items-center font-heading font-medium text-lg text-gray-800",
                                                children: (0, s.jsx)("span", {
                                                    children: "D\xe9couvrez \xe9galement les autres Solutions EDI sur lesquelles nous vous accompagnons avec succ\xe8s."
                                                })
                                            })
                                        }), (0, s.jsx)(c(), {
                                            href: "/contact?src=cleo&name=nous_contacter",
                                            children: (0, s.jsxs)("button", {
                                                className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                                children: [(0, s.jsx)("div", {
                                                    className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                                }), (0, s.jsx)("p", {
                                                    className: "relative z-10",
                                                    children: "Nous contacter"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, s.jsxs)("div", {
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "500",
                                    className: "w-full lg:w-1/2 p-6",
                                    children: [(0, s.jsx)("div", {
                                        className: "flex flex-wrap justify-center -mx-3 mb-6",
                                        children: (0, s.jsx)("div", {
                                            className: "w-auto px-3",
                                            children: (0, s.jsx)("div", {
                                                className: "gap-4 w-72 h-32 px-3 bg-white rounded-2xl shadow-4xl transform hover:-translate-y-3 transition ease-out duration-1000 flex items-center justify-center",
                                                children: (0, s.jsxs)(c(), {
                                                    href: "/solutions/hubtimize",
                                                    className: "gap-4 flex flex-col items-center",
                                                    children: [(0, s.jsx)(r(), {
                                                        src: u.Z,
                                                        alt: "Logo EsaLink | Esalink",
                                                        className: "h-12"
                                                    }), (0, s.jsx)("label", {
                                                        className: "font-semibold text-gray-600 cursor-pointer",
                                                        children: "Hubtimize\xae"
                                                    })]
                                                })
                                            })
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-wrap gap-6 xl:gap-0 justify-center -mx-3 mb-6",
                                        children: [(0, s.jsx)("div", {
                                            className: "w-auto px-3",
                                            children: (0, s.jsx)("div", {
                                                className: "gap-4 w-72 h-32 bg-white rounded-2xl shadow-4xl transform hover:-translate-y-3 transition ease-out duration-1000 flex items-center justify-center",
                                                children: (0, s.jsxs)(c(), {
                                                    href: "/solutions/tradexpress",
                                                    className: "gap-4 flex flex-col items-center",
                                                    children: [(0, s.jsx)(r(), {
                                                        src: x.Z,
                                                        alt: "Generix Group | Esalink",
                                                        className: "h-12"
                                                    }), (0, s.jsx)("label", {
                                                        className: "font-semibold text-gray-600 cursor-pointer",
                                                        children: "TradeXpress"
                                                    })]
                                                })
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: "w-auto px-3",
                                            children: (0, s.jsx)("div", {
                                                className: "w-72 h-32 bg-white rounded-2xl shadow-4xl transform hover:-translate-y-3 transition ease-out duration-1000 flex items-center justify-center",
                                                children: (0, s.jsxs)(c(), {
                                                    href: "/solutions/ibm-sterling",
                                                    className: "gap-4 flex flex-col items-center",
                                                    children: [(0, s.jsx)(r(), {
                                                        src: d.Z,
                                                        alt: "Logo IBM Business Partner | Esalink",
                                                        className: "h-12"
                                                    }), (0, s.jsx)("label", {
                                                        className: "font-semibold text-gray-600 cursor-pointer",
                                                        children: "IBM Sterling"
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
            var p = a(7294);

            function h() {
                let [e, t] = (0, p.useState)("Tirez"), a = e => {
                    t(e)
                };
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("section", {
                        id: "benefices-directs",
                        className: "pt-18 pb-24 bg-gradient-solution relative",
                        children: [(0, s.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[74px] 2xl:top-[58px] -left-[146px] 2xl:-left-[80px] z-0 border-white opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-white",
                            children: "3"
                        }), "                ", (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto ",
                            children: [(0, s.jsx)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-white font-heading text-4xl opacity-80 md:text-5xl xl:text-6xl font-semibold text-center",
                                children: "Les avantages de Cleo Int\xe9gration Cloud\xae"
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex flex-col md:flex-row items-center justify-center gap-14 mt-18 mb-12 text-white opacity-80 max-w-4xl mx-auto",
                                children: [(0, s.jsxs)("div", {
                                    className: "".concat("Tirez" !== e ? "" : "activeTabsCleoAvantages", " w-1/3 flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Tirez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#FFFFFF",
                                        className: "w-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 849 849",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M42.45,693.35h84.9V820.7H42.45Zm169.8-70.75h84.9V820.7h-84.9Zm169.8,84.9H467V820.7h-84.9Zm169.8-113.2h84.9V820.7h-84.9Zm169.8-183.95h84.9V820.7h-84.9Zm113.2-14.15a14.15,14.15,0,0,0-14.15-14.15H707.5a14.16,14.16,0,0,0-14.15,14.15V820.7h-28.3V580.15A14.16,14.16,0,0,0,650.9,566H537.7a14.16,14.16,0,0,0-14.15,14.15V820.7h-28.3V693.35A14.15,14.15,0,0,0,481.1,679.2H367.9a14.16,14.16,0,0,0-14.15,14.15V820.7h-28.3V608.45A14.16,14.16,0,0,0,311.3,594.3H198.1A14.16,14.16,0,0,0,184,608.45V820.7h-28.3V679.2a14.15,14.15,0,0,0-14.15-14.15H28.3A14.15,14.15,0,0,0,14.15,679.2V820.7H0V849H849V820.7H834.85V396.2"
                                                }), (0, s.jsx)("path", {
                                                    d: "M594.3,452.8a14.15,14.15,0,1,1,14.15-14.15A14.17,14.17,0,0,1,594.3,452.8ZM424.5,622.6a14.15,14.15,0,1,1,14.15-14.15A14.17,14.17,0,0,1,424.5,622.6ZM254.7,551.85a14.15,14.15,0,1,1,14.15-14.15A14.17,14.17,0,0,1,254.7,551.85ZM834.85,184H750v28.3h50.74l-188.1,188.1A42.43,42.43,0,0,0,556,456.94L442.79,570.16A42.33,42.33,0,0,0,393,580l-95.93-40c0-.76.06-1.54.06-2.32a42.45,42.45,0,0,0-84.9,0,45.22,45.22,0,0,0,.33,5.24l-134,67,12.66,25.32,134-67a42.36,42.36,0,0,0,60.92-2.1l95.92,40c0,.77-.06,1.54-.06,2.32a42.45,42.45,0,1,0,80.75-18.29L576,477a42.44,42.44,0,0,0,56.59-56.6l188.1-188.1V283H849V198.1A14.15,14.15,0,0,0,834.85,184"
                                                }), (0, s.jsx)("path", {
                                                    d: "M142,250.74q-11.91-5.52-24.18-10.19,12.27-4.7,24.18-10.19a98.22,98.22,0,0,0,0,20.38Zm33.38-37.86c3-1.76,6-3.57,8.91-5.4a106.74,106.74,0,0,1,112.46,0c3,1.83,5.93,3.64,8.91,5.4a71.07,71.07,0,0,1,0,55.35c-3,1.75-6,3.56-8.91,5.4a106.78,106.78,0,0,1-112.46,0c-2.95-1.84-5.92-3.65-8.91-5.4a71.07,71.07,0,0,1,0-55.35Zm163.66,17.48q11.91,5.52,24.18,10.19-12.25,4.69-24.18,10.19a98.22,98.22,0,0,0,0-20.38ZM240.55,317.9a134.48,134.48,0,0,0,71.23-20.27,354.32,354.32,0,0,1,102-43.35,14.15,14.15,0,0,0,0-27.46,354,354,0,0,1-102-43.35,135.23,135.23,0,0,0-142.46,0,354,354,0,0,1-102,43.35,14.15,14.15,0,0,0,0,27.46,354.32,354.32,0,0,1,102,43.35,134.53,134.53,0,0,0,71.23,20.27"
                                                }), (0, s.jsx)("path", {
                                                    d: "M240.55,226.4a14.15,14.15,0,1,1-14.15,14.15A14.17,14.17,0,0,1,240.55,226.4Zm0,56.6a42.45,42.45,0,1,0-42.45-42.45A42.49,42.49,0,0,0,240.55,283"
                                                }), (0, s.jsx)("path", {
                                                    d: "M240.55,28.3c117,0,212.25,95.21,212.25,212.25a211.52,211.52,0,0,1-32.7,113.24v0a1.46,1.46,0,0,0-.09.13,213.85,213.85,0,0,1-25.33,32.53l20.55,19.46c4.72-5,9.24-10.19,13.51-15.57L455.9,455.9,366.77,419a14.11,14.11,0,0,0-13,1.12,211.52,211.52,0,0,1-113.24,32.7c-117,0-212.25-95.21-212.25-212.25S123.52,28.3,240.55,28.3Zm0,452.8a239.85,239.85,0,0,0,122-33.22l114,47.23a14.14,14.14,0,0,0,18.48-18.48l-47.23-114a239.85,239.85,0,0,0,33.22-122C481.1,107.92,373.19,0,240.55,0S0,107.92,0,240.55,107.92,481.1,240.55,481.1"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Une visibilit\xe9 parfaite de bout en bout"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Automatisez" !== e ? "" : "activeTabsCleoAvantages", " w-1/3 flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Automatisez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#FFFFFF",
                                        className: "w-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 856 856",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M528.31,428A100.31,100.31,0,1,0,428,528.31,100.43,100.43,0,0,0,528.31,428ZM428,501.56A73.56,73.56,0,1,1,501.56,428,73.64,73.64,0,0,1,428,501.56Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M383.71,248.59l33.41,46.75a13.38,13.38,0,0,0,21.77,0l33.41-46.75A13.38,13.38,0,0,0,450.53,233l-9.15,12.81V120.38a13.38,13.38,0,1,0-26.75,0V245.84L405.47,233a13.38,13.38,0,0,0-21.76,15.56Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M428,80.25a40.13,40.13,0,1,0-40.12-40.12A40.13,40.13,0,0,0,428,80.25Zm0-53.5a13.38,13.38,0,1,1-13.37,13.38A13.4,13.4,0,0,1,428,26.75Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M472.3,607.42l-33.41-46.76a13.38,13.38,0,0,0-21.77,0l-33.41,46.76A13.37,13.37,0,0,0,405.47,623l9.16-12.81V735.63a13.38,13.38,0,0,0,26.75,0V610.16L450.53,623a13.38,13.38,0,0,0,21.77-15.55Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M428,775.75a40.13,40.13,0,1,0,40.13,40.13A40.13,40.13,0,0,0,428,775.75Zm0,53.5a13.38,13.38,0,1,1,13.38-13.37A13.39,13.39,0,0,1,428,829.25Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M735.63,414.63H610.16L623,405.47a13.37,13.37,0,1,0-15.55-21.76l-46.76,33.41a13.37,13.37,0,0,0,0,21.76l46.76,33.41a13.25,13.25,0,0,0,7.76,2.5A13.38,13.38,0,0,0,623,450.53l-12.81-9.15H735.63a13.38,13.38,0,0,0,0-26.75Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M815.88,387.88A40.13,40.13,0,1,0,856,428,40.13,40.13,0,0,0,815.88,387.88Zm0,53.5A13.38,13.38,0,1,1,829.25,428,13.39,13.39,0,0,1,815.88,441.38Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M245.84,441.38,233,450.53a13.38,13.38,0,1,0,15.56,21.76l46.75-33.41a13.37,13.37,0,0,0,0-21.76l-46.75-33.41A13.38,13.38,0,0,0,233,405.47l12.81,9.16H120.38a13.38,13.38,0,1,0,0,26.75Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M40.13,387.88A40.13,40.13,0,1,0,80.25,428,40.13,40.13,0,0,0,40.13,387.88Zm0,53.5A13.38,13.38,0,1,1,53.5,428,13.39,13.39,0,0,1,40.13,441.38Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M597.18,538.93a13.36,13.36,0,0,0-11-15.38l-56.69-9.44a13.39,13.39,0,0,0-15.39,15.4l9.44,56.67a13.37,13.37,0,0,0,13.17,11.18,12.75,12.75,0,0,0,2.21-.18,13.36,13.36,0,0,0,11-15.38l-2.59-15.54L636.07,655A13.37,13.37,0,1,0,655,636.07l-88.72-88.73,15.54,2.59A13.38,13.38,0,0,0,597.18,538.93Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M702.27,662.15a40.13,40.13,0,1,0,28.38,11.75A40,40,0,0,0,702.27,662.15Zm9.46,49.57a13.39,13.39,0,1,1,3.91-9.45A13.28,13.28,0,0,1,711.73,711.72Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M258.82,317.07a13.37,13.37,0,0,0,11,15.39l56.69,9.43a13.37,13.37,0,0,0,15.38-15.39l-9.43-56.68a13.38,13.38,0,0,0-26.39,4.39l2.59,15.53L219.94,201A13.37,13.37,0,0,0,201,219.93l88.72,88.73-15.54-2.59A13.35,13.35,0,0,0,258.82,317.07Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M125.36,125.36a40.12,40.12,0,1,0,28.37-11.75A40.12,40.12,0,0,0,125.36,125.36Zm41.74,28.37a13.35,13.35,0,1,1-3.91-9.46A13.3,13.3,0,0,1,167.1,153.73Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M317.07,597.19a13.82,13.82,0,0,0,2.21.18,13.39,13.39,0,0,0,13.18-11.18l9.43-56.68a13.39,13.39,0,0,0-15.39-15.4l-56.68,9.44a13.37,13.37,0,1,0,4.39,26.38l15.53-2.58L201,636.07A13.37,13.37,0,1,0,219.93,655l88.73-88.72-2.59,15.54A13.37,13.37,0,0,0,317.07,597.19Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M182.1,673.9a40.12,40.12,0,1,0,0,56.75A40,40,0,0,0,182.1,673.9Zm-18.91,37.83a13.4,13.4,0,1,1,3.91-9.46A13.3,13.3,0,0,1,163.19,711.73Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M538.93,258.82a13.35,13.35,0,0,0-15.38,11l-9.44,56.69a13.38,13.38,0,0,0,15.39,15.39l56.68-9.43a13.38,13.38,0,0,0-4.38-26.39l-15.54,2.59L655,219.93A13.37,13.37,0,1,0,636.07,201l-88.72,88.72,2.58-15.54A13.36,13.36,0,0,0,538.93,258.82Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M730.65,182.1a40.14,40.14,0,1,0-28.38,11.75A40.14,40.14,0,0,0,730.65,182.1ZM688.9,153.73a13.35,13.35,0,1,1,3.91,9.46A13.36,13.36,0,0,1,688.9,153.73Z"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "L'int\xe9gration API et EDI dans une seule et m\xeame plateforme"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Choisissez" !== e ? "" : "activeTabsCleoAvantages", " w-1/3 flex flex-col items-center gap-6 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Choisissez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#FFFFFF",
                                        className: "w-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 942.43 874.04",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M359.1,201.58h72.46V380.09c13.88,10,26.77,20.83,39.65,31.79a421.37,421.37,0,0,1,39.66-31.79V201.58h72.46c11.88,0,22.75-7,28.78-17.82,4.94-11,3.93-23.84-4-32.79L496,11.1c-11.88-14.8-36.65-14.8-48.61,0L334.33,151c-7.94,9.95-8.95,22.83-4,32.7,6,11,16.9,17.91,28.78,17.91"
                                                }), (0, s.jsx)("path", {
                                                    d: "M221.22,393H202.39V320.61c0-11.88-6.94-22.84-17.9-28.77-10.88-4.94-23.77-3.94-32.72,3.93L11.88,406.86A33.1,33.1,0,0,0,0,431.7c0,9.87,3.93,18.82,11.88,24.76L151.77,568.55a30.4,30.4,0,0,0,19.83,7,34.8,34.8,0,0,0,13.89-3c11-4.94,17.91-15.82,17.91-28.7V471.35h18.82c115,0,209.34,94.19,209.34,210.3V834.32a39.66,39.66,0,1,0,79.31,0V681.65C510.87,522,380.94,393,221.22,393"
                                                }), (0, s.jsx)("path", {
                                                    d: "M930.55,406.86,790.66,295.77c-10-7.87-22.85-8.87-32.72-3.93-11,4.93-17.9,15.89-17.9,28.77V393H721.21c-77.39,0-146.83,29.78-198.46,78.38a391.79,391.79,0,0,1,39.74,72.36,208.27,208.27,0,0,1,158.72-73.36H740v72.44c0,11.88,6.94,22.75,17.9,28.69a32.47,32.47,0,0,0,33.72-3.93L930.55,456.46c6.94-5.94,11.88-14.89,11.88-24.76,0-8.95-3.94-18.91-11.88-24.84"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Flexibilit\xe9: service g\xe9r\xe9, self-service ou mixte"
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                children: [(0, s.jsx)("p", {
                                    className: "".concat("Tirez" !== e ? "hidden" : "", " text-center "),
                                    children: "Des tableaux de bord op\xe9rationnels avec des informations directement accessibles et exploitables."
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Automatisez" !== e ? "hidden" : "", " text-center"),
                                    children: "Profitez de l’innovation et pilotez en temps r\xe9el et par lots tous vos flux EDI. Le tout avec conformit\xe9."
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Choisissez" !== e ? "hidden" : "", " text-center"),
                                    children: "Collaborative, transparente pour un contr\xf4le et une agilit\xe9 in\xe9gal\xe9s."
                                })]
                            })]
                        })]
                    })
                })
            }
            var f = a(2074),
                g = a(5585);
            let v = [{
                    src: "/images/solutionsEDI/cleo/cleo1.webp",
                    title: "Visibilit\xe9 simplifi\xe9e et suivi de bout en bout de vos processus",
                    alt: "Dashboard 1 | Esalink",
                    content: "Le portail de Cleo Integration Cloud fournit un tableau de bord visuel indiquant tous les fichiers, leur statut, les SLA et KPI ainsi que l’int\xe9grit\xe9 du syst\xe8me. Toutes les informations r\xe9capitulatives \xe0 votre port\xe9e pour g\xe9n\xe9rer vos rapports modulables. Une interface user-friendly."
                }, {
                    src: "/images/solutionsEDI/cleo/cleo2.webp",
                    title: "Obtenez une vision en temps r\xe9el sur la sant\xe9 op\xe9rationnelle de votre entreprise.",
                    alt: "Dashboard 2 | Esalink",
                    content: "Avec des vues d'int\xe9gration unifi\xe9es entre vos partenaires commerciaux, vos fournisseurs, vos clients et vos applications."
                }, {
                    src: "/images/solutionsEDI/cleo/cleo3.webp",
                    title: "Une unique plateforme pour l’int\xe9gration EDI et API",
                    alt: "Dashboard 3 | Esalink",
                    content: "Capacit\xe9 d’int\xe9gration pour lier facilement et efficacement vos applications. Des \xe9changes fluides entre progiciels ERP / CRM / eCommerce / Marketplace et diverses entit\xe9s. Fiabilisez et acc\xe9l\xe9rer vos transferts de donn\xe9es."
                }, {
                    src: "/images/solutionsEDI/cleo/cleo4.webp",
                    title: "Acc\xe9der rapidement aux informations exploitables sur les processus m\xe9tier cl\xe9s.",
                    alt: "Dashboard 4 | Esalink",
                    content: "De l’Order to Cash au Procure to Pay, gardez le contr\xf4le et augmentez votre productivit\xe9."
                }, {
                    src: "/images/solutionsEDI/cleo/cleo5.webp",
                    title: "Une approche transparente des int\xe9grations et impl\xe9mentations.",
                    alt: "Dashboard 5 | Esalink",
                    content: "Un contr\xf4le puissant sur vos processus Acc\xe9l\xe8rez vos processus, optimisez votre gestion, perfectionnez vos r\xe9sultats et am\xe9liorer l’exp\xe9rience client."
                }, {
                    src: "/images/solutionsEDI/cleo/cleo6.webp",
                    title: "Une vraie flexibilit\xe9 : service g\xe9r\xe9, self-service ou mixte",
                    alt: "Dashboard 6 | Esalink",
                    content: "Personnalisez vos rapports r\xe9capitulatifs \xe0 travers des crit\xe8res puissants et pr\xe9cis. Obtenez une vue d’ensemble sur les performances en fonction de vos exigences. Acc\xe9dez \xe0 vos donn\xe9es peu importe o\xf9 vous \xeates.",
                    style: {
                        transform: "translateY(-10%)"
                    }
                }, {
                    src: "/images/solutionsEDI/cleo/cleo7.webp",
                    title: "Mettez rapidement \xe0 jour vos maps et la gestion de vos processus m\xe9tiers.",
                    alt: "Dashboard 7 | Esalink",
                    content: "Retraitez et renvoyez facilement vos transactions pour acc\xe9l\xe9rer les d\xe9lais de r\xe9solution."
                }, {
                    src: "/images/solutionsEDI/cleo/cleo8.webp",
                    title: "Cr\xe9ez des SLA mesurables en quelques clics. G\xe9rez, modifiez et supprimez facilement les SLA existants",
                    alt: "Dashboard 8 | Esalink",
                    content: "D\xe9passez les attentes de vos clients et partenaires commerciaux en optimisant et adaptant rapidement votre approche. D\xe9finissez et configurez des SLA et des avertissements SLA que ce soit pour les bons de commande, les accus\xe9s de r\xe9ception, les exp\xe9ditions, les factures et biens d’autres documents."
                }],
                j = e => {
                    let {
                        enabled: t,
                        onClick: a
                    } = e;
                    return (0, s.jsx)("button", {
                        className: "embla__button embla__button--prev",
                        onClick: a,
                        disabled: !t,
                        children: (0, s.jsx)("svg", {
                            className: "embla__button__svg",
                            viewBox: "137.718 -1.001 366.563 644",
                            children: (0, s.jsx)("path", {
                                d: "M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
                            })
                        })
                    })
                },
                b = e => {
                    let {
                        enabled: t,
                        onClick: a
                    } = e;
                    return (0, s.jsx)("button", {
                        className: "embla__button embla__button--next",
                        onClick: a,
                        disabled: !t,
                        children: (0, s.jsx)("svg", {
                            className: "embla__button__svg",
                            viewBox: "0 0 238.003 238.003",
                            children: (0, s.jsx)("path", {
                                d: "M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
                            })
                        })
                    })
                },
                A = e => {
                    let {
                        slides: t,
                        options: a
                    } = e, [l, i] = (0, g.Z)(a), [n, r] = (0, p.useState)(!1), [o, c] = (0, p.useState)(!1), [d, x] = (0, p.useState)(0), [u, m] = (0, p.useState)([]), h = (0, p.useCallback)(() => i && i.scrollPrev(), [i]), f = (0, p.useCallback)(() => i && i.scrollNext(), [i]);
                    (0, p.useCallback)(e => i && i.scrollTo(e), [i]);
                    let A = (0, p.useCallback)(() => {
                        i && (x(i.selectedScrollSnap()), r(i.canScrollPrev()), c(i.canScrollNext()))
                    }, [i, x]);
                    return (0, p.useEffect)(() => {
                        i && (A(), m(i.scrollSnapList()), i.on("select", A), i.on("reInit", A))
                    }, [i, m, A]), (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)("div", {
                            className: "embla",
                            children: [(0, s.jsx)("div", {
                                className: "embla__viewport",
                                ref: l,
                                children: (0, s.jsx)("div", {
                                    className: "embla__container",
                                    children: v.map((e, t) => (0, s.jsx)("div", {
                                        className: "embla__slide",
                                        children: (0, s.jsxs)("div", {
                                            className: "w-full h-full p-8 flex flex-col md:flex-row justify-center md:justify-between items-center",
                                            children: [(0, s.jsx)("img", {
                                                className: "embla__slide__img w-full md:w-[45%] p-4",
                                                style: e.style,
                                                src: e.src,
                                                alt: e.alt
                                            }), (0, s.jsxs)("div", {
                                                className: "embla__slide__number w-full md:w-[45%] p-4 text-center md:text-left",
                                                children: [(0, s.jsx)("h3", {
                                                    className: "pb-4 text-esalink-blue text-xl font-medium",
                                                    children: e.title
                                                }), (0, s.jsx)("span", {
                                                    children: e.content
                                                })]
                                            })]
                                        })
                                    }, t))
                                })
                            }), (0, s.jsx)(j, {
                                onClick: h,
                                enabled: n
                            }), (0, s.jsx)(b, {
                                onClick: f,
                                enabled: o
                            })]
                        })
                    })
                };

            function w() {
                let [e] = (0, g.Z)({
                    loop: !1
                }, [(0, f.Z)()]);
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("section", {
                        className: "py-24 bg-slate-50 relative",
                        children: [(0, s.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[155px] 2xl:top-[50px] -left-[80px] z-0 border-[#b3c9e7] opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-[#b3c9e7]",
                            children: "4"
                        }), (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto ",
                            children: [(0, s.jsx)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-esalink-blue mb-12 font-heading text-4xl md:text-5xl xl:text-6xl font-semibold text-center",
                                children: "Caract\xe9ristiques de Cleo Int\xe9gration Cloud\xae"
                            }), (0, s.jsx)("div", {
                                className: "mx-auto",
                                children: (0, s.jsx)(A, {
                                    slides: []
                                })
                            })]
                        })]
                    })
                })
            }

            function N() {
                let [e, t] = (0, p.useState)("Tirez"), a = e => {
                    t(e)
                };
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("section", {
                        id: "benefices-directs",
                        className: "py-24 bg-slate-50 relative",
                        children: [(0, s.jsx)("div", {
                            className: "hidden xl:flex h-[350px] w-[350px] top-[26px] 2xl:top-[29px] -right-[166px] 2xl:-right-[80px] z-0 border-[#b3c9e7] opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-[#b3c9e7]",
                            children: "2"
                        }), (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto ",
                            children: [(0, s.jsx)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-esalink-blue font-heading text-4xl md:text-5xl xl:text-6xl font-semibold text-center",
                                children: "Votre \xe9cosyst\xe8me EDI avec Cleo Int\xe9gration Cloud\xae"
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex items-center justify-center gap-14 flex-wrap mt-18 mb-12 text-gray-400",
                                children: [(0, s.jsx)("div", {
                                    className: "".concat("Tirez" !== e ? "" : "activeTabsCleo", " flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Tirez")
                                    },
                                    children: (0, s.jsx)("label", {
                                        children: "PRENEZ LE CONTR\xd4LE"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "".concat("Automatisez" !== e ? "" : "activeTabsCleo", " flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Automatisez")
                                    },
                                    children: (0, s.jsx)("label", {
                                        children: "AM\xc9LIORER L'EFFICACIT\xc9"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "".concat("Choisissez" !== e ? "" : "activeTabsCleo", " flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Choisissez")
                                    },
                                    children: (0, s.jsx)("label", {
                                        children: "GARDER LA FLEXIBILITE"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "".concat("Utilisez" !== e ? "" : "activeTabsCleo", " flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Utilisez")
                                    },
                                    children: (0, s.jsx)("label", {
                                        children: "ACC\xc9L\xc9REZ L'INT\xc9GRATION"
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                children: [(0, s.jsx)("p", {
                                    className: "".concat("Tirez" !== e ? "hidden" : "", " text-center"),
                                    children: "Tirez parti d'une plate-forme d'int\xe9gration libre-service pour d\xe9tecter rapidement les erreurs, r\xe9soudre les probl\xe8mes, modifier les SLA et personnaliser vos tableaux de bord"
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Automatisez" !== e ? "hidden" : "", " text-center"),
                                    children: "Automatisez l'int\xe9gration des API, EDI et autres entit\xe9s sur une plate-forme logicielle unique avec une facilit\xe9 d'utilisation remarquable"
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Choisissez" !== e ? "hidden" : "", " text-center"),
                                    children: "Choisissez entre l'int\xe9gration en libre-service, des services d'int\xe9gration g\xe9r\xe9s enti\xe8rement externalis\xe9s ou une approche mixte"
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Utilisez" !== e ? "hidden" : "", " text-center"),
                                    children: "Utilisez des mod\xe8les, des profils de partenaires pr\xe9d\xe9finis avec des connecteurs et un moteur de transformation complet pour g\xe9n\xe9rer des revenus plus rapidement"
                                })]
                            })]
                        })]
                    })
                })
            }

            function C() {
                let [e, t] = (0, p.useState)("Tirez"), a = e => {
                    t(e)
                };
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("section", {
                        id: "benefices-directs",
                        className: "pt-18 pb-24 bg-gradient-solution relative",
                        children: [(0, s.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[81px] 2xl:top-[64px] -left-[146px] 2xl:-left-[80px] z-0 border-white opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-white",
                            children: "5"
                        }), (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto",
                            children: [(0, s.jsx)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-white font-heading text-4xl opacity-80 md:text-5xl xl:text-6xl font-semibold text-center",
                                children: "Une solution efficace pour votre business et qui s’adapte \xe0 votre secteur"
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex flex-col md:flex-row items-center justify-center gap-12 md:gap-4 mt-18 mb-12 text-white opacity-80 max-w-6xl mx-auto",
                                children: [(0, s.jsxs)("div", {
                                    className: "".concat("Tirez" !== e ? "" : "activeTabsCleoAvantages", " w-1/4 flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Tirez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#FFFFFF",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 787.91 905.31",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsx)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: (0, s.jsx)("path", {
                                                    d: "M159.22,679a14.58,14.58,0,0,1-19.85,5.36l-75.7-43.7A14.54,14.54,0,0,1,78.16,615.4l75.7,43.71A14.53,14.53,0,0,1,159.22,679Zm628.69,41.39A184.94,184.94,0,0,1,479.52,858.08l-77.15,44.54a.5.5,0,0,0-.08.07,15.46,15.46,0,0,1-1.66,1,1.7,1.7,0,0,1-.36.16,11.94,11.94,0,0,1-1.67.68l-.21.07a14.43,14.43,0,0,1-1.94.47l-.44.07a15.76,15.76,0,0,1-2.07.16h-.07a14.81,14.81,0,0,1-2-.16l-.51-.07a12,12,0,0,1-1.88-.45c-.12,0-.23-.09-.32-.11a12.83,12.83,0,0,1-1.54-.64l-.45-.2a17.39,17.39,0,0,1-1.58-.95l-.14-.07L7.32,684.28A14.53,14.53,0,0,1,0,671.67V234.56A14.57,14.57,0,0,1,7.25,221L386.6,2a14.59,14.59,0,0,1,14.64,0L780.58,221c.2.11.38.27.59.41s.31.2.47.31.5.37.72.55.59.49.86.74l.41.39a14.24,14.24,0,0,1,1,1.17l.27.37a13.86,13.86,0,0,1,.81,1.24,1.11,1.11,0,0,0,.12.16s0,.07,0,.09c.19.32.34.66.5,1,.05.09.09.2.14.29.16.34.27.68.41,1,0,.12.08.21.11.32.11.32.18.66.27,1l.11.41c.07.29.12.59.16.88s.07.37.09.55.05.54.07.81,0,.41,0,.64v.22l0,438.08a14.46,14.46,0,0,1-4,10A182.26,182.26,0,0,1,787.91,720.35ZM381.12,428.46l12.79,7.38,19.76-11.42,85.05-49.1L148.49,173.09,43.66,233.61ZM177.62,156.27,527.85,358.5l89.87-51.9L267.47,104.37ZM544.89,443.6l87.31-50.43V331.86l-87.31,50.42ZM296.55,87.6,646.82,289.83l97.39-56.22L393.94,31.36ZM29.09,663.29,379.32,865.52V461l-10.14-5.86L29.11,258.8ZM408.53,865.5,459,836.39a184.22,184.22,0,0,1-40.07-97.61c-.06-.79-.1-1.59-.17-2.4-.18-2.24-.39-4.46-.5-6.73-.14-2.71-.18-5.45-.21-8.19,0-.38,0-.74,0-1.11a185,185,0,0,1,185-185c2.95,0,5.86.1,8.76.23.95,0,1.9.11,2.85.18,1.95.11,3.89.27,5.84.45l3.33.35c1.76.2,3.53.42,5.3.67,1.13.16,2.28.32,3.41.5,1.77.29,3.51.61,5.27,1,1.07.2,2.13.39,3.2.61,2.6.55,5.2,1.14,7.78,1.79,1.2.32,2.4.66,3.57,1,1.45.4,2.93.79,4.37,1.24s2.81.88,4.21,1.36c1.18.39,2.38.79,3.56,1.2q2.21.78,4.41,1.63c1,.38,2,.79,3,1.2,1.57.63,3.11,1.24,4.64,1.92.73.32,1.45.66,2.18,1a183.24,183.24,0,0,1,17,8.72l1.31.75c1.72,1,3.42,2.08,5.12,3.14.52.32,1,.66,1.54,1,1.7,1.11,3.35,2.22,5,3.37l1.18.84a182.69,182.69,0,0,1,49,51.35l0-362L661.42,315v86.54h-.07a14.54,14.54,0,0,1-7.29,12.61L538.73,480.74a14.43,14.43,0,0,1-8.44,2.69,14.6,14.6,0,0,1-14.6-14.6V399.12L408.53,461ZM758.71,720.35a155.27,155.27,0,0,0-40.44-104.72l0,0c-1.68-1.84-3.4-3.64-5.14-5.39a156.23,156.23,0,0,0-49.5-33.36,0,0,0,0,1,0,0q-3.3-1.4-6.7-2.65l-.72-.27c-2.13-.77-4.25-1.5-6.43-2.17l-.66-.21q-7.12-2.2-14.55-3.74a7.67,7.67,0,0,1-.81-.15c-2.06-.41-4.16-.79-6.25-1.11-.68-.12-1.36-.2-2-.29-1.75-.25-3.49-.48-5.23-.66-.79-.09-1.57-.18-2.36-.25-1.76-.16-3.53-.3-5.29-.4l-2.13-.15c-2.47-.1-5-.17-7.45-.17A155.64,155.64,0,0,0,447.21,720.4c0,.16,0,.34,0,.5,0,2.51.07,5,.19,7.47q0,.51.06,1c.14,2.34.29,4.64.52,6.95,0,.05,0,.07,0,.09a155.76,155.76,0,0,0,310.69-16Zm-82.22-77.11L556.93,766.84l-27.88-27a14.52,14.52,0,0,0-20.19,20.87l38.32,37.07a14.53,14.53,0,0,0,20.52-.33l129.66-134a14.52,14.52,0,1,0-20.87-20.19Z"
                                                })
                                            })
                                        })
                                    }), (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Logistique et transport"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Automatisez" !== e ? "" : "activeTabsCleoAvantages", " w-1/4 flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Automatisez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#FFFFFF",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 936.99 820",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M819.87,373.39H761.31V292.85A29.37,29.37,0,0,0,732,263.57H556.34a29.36,29.36,0,0,0-29.28,29.28v80.54H497.78V292.85a29.37,29.37,0,0,0-29.28-29.28H417.26v-63a29.24,29.24,0,0,0,14.64-24.89V131.79a29.38,29.38,0,0,0,29.28-29.29V29.29A29.37,29.37,0,0,0,431.9,0H314.77a29.26,29.26,0,0,0-19,7.32H73.2A29.37,29.37,0,0,0,43.92,36.6v235c-12.44,2.92-22,14.64-22,28.55v73.21H14.64a14.65,14.65,0,0,0,0,29.29H819.87c48.31,0,87.84,39.53,87.84,87.86s-39.53,87.85-87.84,87.85H14.64a14.65,14.65,0,0,0,0,29.29h36.6V805.35a14.65,14.65,0,1,0,29.29,0V746.79h732v58.56a14.64,14.64,0,1,0,29.28,0V605.48A117.08,117.08,0,0,0,937,490.54C937,426.1,884.29,373.39,819.87,373.39ZM314.77,29.29H431.9V102.5H314.77Zm29.28,146.42V131.79h58.56v43.92ZM388,205v58.57H358.69V205ZM73.2,36.6H285.49V95.18H131.77V270.89H73.2Zm80.53,336.79H51.24V300.18H153.73Zm109.8-80.54v80.54H183V300.18c0-13.91-9.52-24.89-22-28.55V124.46H295.74a29.27,29.27,0,0,0,19,7.33v43.92c0,11,5.86,20.5,14.64,24.89v63h-36.6A29.37,29.37,0,0,0,263.53,292.85Zm205,80.54H292.81V292.85H468.5Zm263.53,0H556.34V292.85H732ZM812.55,717.5h-732V607.68h732Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M878.43,490.54a58.56,58.56,0,1,0-58.56,58.56A58.74,58.74,0,0,0,878.43,490.54Zm-87.84,0a29.28,29.28,0,1,1,29.28,29.28A29.37,29.37,0,0,1,790.59,490.54Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M732,490.54a51.25,51.25,0,1,0-51.24,51.25A50.93,50.93,0,0,0,732,490.54Zm-73.21,0a22,22,0,1,1,22,22A21.58,21.58,0,0,1,658.82,490.54Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M600.26,490.54A51.24,51.24,0,1,0,549,541.79,50.92,50.92,0,0,0,600.26,490.54Zm-73.2,0a22,22,0,1,1,22,22A21.58,21.58,0,0,1,527.06,490.54Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M468.5,490.54a51.24,51.24,0,1,0-51.24,51.25A50.92,50.92,0,0,0,468.5,490.54Zm-73.2,0a22,22,0,1,1,22,22A21.57,21.57,0,0,1,395.3,490.54Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M336.73,490.54a51.24,51.24,0,1,0-51.24,51.25A50.92,50.92,0,0,0,336.73,490.54Zm-73.2,0a22,22,0,1,1,22,22A21.58,21.58,0,0,1,263.53,490.54Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M205,490.54a51.25,51.25,0,1,0-51.24,51.25A50.92,50.92,0,0,0,205,490.54Zm-73.2,0a22,22,0,1,1,22,22A21.57,21.57,0,0,1,131.77,490.54Z"
                                                })]
                                            })
                                        })
                                    }), "                            ", (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Fabrication"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Choisissez" !== e ? "" : "activeTabsCleoAvantages", " w-1/4 flex flex-col items-center gap-6 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Choisissez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#FFFFFF",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 996.94 795.9",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsx)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: (0, s.jsx)("path", {
                                                    d: "M989.09,172.24,697.42,2.44a14.15,14.15,0,0,0-8-2.44L508.63.05A14.26,14.26,0,0,0,501.49,2L209,172.24a14.19,14.19,0,0,0-7.8,12.69V340.54h-187A14.24,14.24,0,0,0,0,354.77V732.58a14.24,14.24,0,0,0,14.23,14.23H55.75A63.28,63.28,0,0,0,161.32,778.2l.92-.85a60.89,60.89,0,0,0,4.32-4.78,63.22,63.22,0,0,0,49.1,23.33H982.71a14.24,14.24,0,0,0,14.23-14.23V184.93A14.29,14.29,0,0,0,989.09,172.24ZM465.43,308.7h448v27h-448Zm448-28.47h-448v-27h448v27Zm-448,83.94h448V767.45H888.38V471.39a14.25,14.25,0,0,0-14.23-14.23H707.56a14.24,14.24,0,0,0-14.23,14.23V767.45H571.43a62.82,62.82,0,0,0,8.83-20.61h43.23a14.24,14.24,0,0,0,14.23-14.24V624.31a45.94,45.94,0,0,0-13.5-32.51h-.05a46,46,0,0,0-28.61-13.31L572.7,501.73l.35,0a14.2,14.2,0,0,0,12.11-16,72.62,72.62,0,0,0-71.72-62.5h-48v-59ZM409.56,767.45V746.84h47.27a63.27,63.27,0,0,0,8.83,20.61ZM277.34,746.84H381.09v20.61H268.52A63,63,0,0,0,277.34,746.84ZM493.9,757.26a34.86,34.86,0,1,1,59.49-24.73v.15a34.71,34.71,0,0,1-34.84,34.77A34.64,34.64,0,0,1,493.9,757.26ZM785,485.63h74.92v75H785ZM721.79,589.08h34.77v75H721.79ZM859.94,664H785V589.08h74.92ZM756.53,560.59H721.77v-75h34.76ZM721.79,692.52h34.77v75H721.79ZM785,767.45v-75h74.92v75ZM543,501.85l22.78,76.46h-72l1.09-76.43Zm-91.91-50.2h62.28a44.17,44.17,0,0,1,37.88,21.74h-70.4a14.24,14.24,0,0,0-14.23,14.23l-1.48,104.76a14.18,14.18,0,0,0,14,14.35c6.18,2,93.09.06,112.48.06a17.58,17.58,0,0,1,17.54,17.52v94.06h-29a63.32,63.32,0,0,0-123.41,0H409.51V451.65Zm-2.19-281,240.52-140L930,170.69ZM512.41,28.47H636.76L392.36,170.74l-124.29,0ZM229.64,199.16H382l-.75,141.38H229.64Zm-87.53,558.1-.63.65a37.41,37.41,0,1,1,.63-.65Zm28.76-69.43a62.8,62.8,0,0,0-4.31,4.78,60.89,60.89,0,0,0-4.32-4.78A63.33,63.33,0,0,0,55.75,718.37H28.48V369H381.09V718.37H277.36a63.33,63.33,0,0,0-106.49-30.54Zm9.92,44.77a34.87,34.87,0,1,1,59.52,24.66l-.63.65a34.73,34.73,0,0,1-24,9.54h-.07a34.79,34.79,0,0,1-34.82-34.85Zm787.66,34.85H942V239a14.24,14.24,0,0,0-14.23-14.23H451.2A14.24,14.24,0,0,0,437,239V423.18H409.58V354.8c0-.4,0-.77-.05-1.15l.82-154.46H968.48V767.45ZM194.72,606.31a.42.42,0,0,1-.12-.1,15.66,15.66,0,0,1-1.27-1.15L125,536.71a16.13,16.13,0,0,1,22.81-22.81l40.85,40.86V450.93a16.13,16.13,0,1,1,32.25,0V554.76l40.85-40.86a16.13,16.13,0,0,1,22.8,22.81l-68.34,68.35c-.4.4-.82.78-1.27,1.15-.05,0-.13.08-.17.12-.35.28-.73.56-1.1.81a2.33,2.33,0,0,0-.35.22c-.32.2-.67.42-1,.6l-.35.17c-.34.18-.72.35-1.09.5l-.27.1c-.41.15-.83.3-1.23.42a.18.18,0,0,1-.12,0,15.83,15.83,0,0,1-9,0l-.1,0a9.19,9.19,0,0,1-1.24-.45.73.73,0,0,1-.25-.1,10.26,10.26,0,0,1-1.12-.52l-.32-.15c-.35-.2-.7-.4-1.05-.62-.1-.08-.23-.13-.33-.2A7.12,7.12,0,0,1,194.72,606.31Z"
                                                })
                                            })
                                        })
                                    }), "                            ", (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Vente en gros et distribution"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Vente" !== e ? "" : "activeTabsCleoAvantages", " w-1/4 flex flex-col items-center gap-6 cursor-pointer"),
                                    onMouseEnter: () => {
                                        a("Vente")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#FFFFFF",
                                        className: "h-26 -ml-[24px]",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 906.42 861.34",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M836.08,535.78c21.79-117,47.07-233.28,69.1-350.16,6.59-35.25-13.34-80.32-51.87-85.93-17-4.71-36.9,13.4-29.91,30.71,2.18,14.53,18.77,16.16,29.91,19.9,3.42,9.42,9.68,19.16,5.69,29.64-2.45,12.54-5,25.07-7.48,37.62H284.14a20.31,20.31,0,1,0,0,40.61H843.43c-15.17,76.08-30.52,152.15-45.48,228.3-3.32,15.84-5.68,32.16-12.35,47.11-12,4.63-25.29,2.28-37.72,2.93-147.55-.41-295.1-.08-442.55-.17-37.48-159.68-74.47-319.44-112-479.13C188.51,27.07,162.74-.7,130.71.43,92.42.6,54.05-1.19,15.84,1.49c-21,7.22-21,38.33-.4,46.21,40.32,3.83,81.05-1,121.37,2.36,9.67,4.7,7.88,18.12,11.62,26.88q66.1,284.73,133.4,569.29c5.77,30.95,35.27,55.64,67.31,52.56,157.54-.24,315.09.57,472.55-.41,30.07,1,30.23-48.65.16-47.92-141.29-1-282.65-.24-423.93-.4-21.23-.5-42.76,1.94-63.73-2.28-9.35-19.74-11.87-41.83-17.48-62.7q227.79,0,455.57,0C801.78,587.59,831.69,565.25,836.08,535.78Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M366.54,716.74c-27.81,5.44-50.89,28.59-56.26,56.36-9.1,38.26,18.21,80,57.07,86.59,40.24,9.26,83.41-21.77,86.82-63C461.81,749.07,413.36,704.8,366.54,716.74Zm35.28,84.72c-7.8,12.83-27.65,15.34-37.49,3.41-13.49-11.94-6.1-35.82,10.73-40C395.07,757.19,416,784.64,401.82,801.46Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M725,716.58c-53.25,8.12-77.56,80.17-41,119.24,33,41.75,107.72,28.83,124-22.18C829.41,762.87,778.52,703.09,725,716.58Zm27.72,91.7c-25,19.4-54.06-24.86-26.59-40.29C751.05,748.49,780.32,792.84,752.68,808.28Z"
                                                })]
                                            })
                                        })
                                    }), "                            ", (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Vente au d\xe9tail"
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "max-w-7xl mx-auto",
                                children: [(0, s.jsx)("p", {
                                    className: "".concat("Tirez" !== e ? "hidden" : "", " text-center "),
                                    children: "Les solutions logistiques Cleo fournissent une automatisation en profondeur pour les int\xe9grations B2B / EDI, d’applications et de commerce \xe9lectronique. Plus de 500 fournisseurs de transport et de logistique leaders du secteur choisissent Cleo Integration Cloud\xae pour des solutions int\xe9gr\xe9es de cha\xeene d'approvisionnement."
                                }), (0, s.jsxs)("p", {
                                    className: "".concat("Automatisez" !== e ? "hidden" : "", " text-center"),
                                    children: ["Utilisez l’int\xe9gration pour permettre des processus m\xe9tier de fabrication enti\xe8rement automatis\xe9s.", (0, s.jsx)("br", {}), "Plus de 2500 fournisseurs leaders dans la fabrication choisissent Cleo Integration Cloud\xae pour la contextualisation des donn\xe9es dans la fabrication afin de rationaliser et d'automatiser les processus d'int\xe9gration de leur supply-chain g\xe9n\xe9rateur de revenus."]
                                }), (0, s.jsxs)("p", {
                                    className: "".concat("Choisissez" !== e ? "hidden" : "", " text-center"),
                                    children: ["B\xe9n\xe9ficiez d’une visibilit\xe9 sans pr\xe9c\xe9dent sur vos niveaux de stocks et d’un aper\xe7u complet de chaque int\xe9gration avec vos partenaires commerciaux.", (0, s.jsx)("br", {}), "Plus de 500 grossistes et distributeurs leaders du secteur choisissent Cleo Integration Cloud\xae pour l'EDI et l'int\xe9gration d'applications afin de rationaliser et d'automatiser les processus commerciaux g\xe9n\xe9rateurs de revenus."]
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Vente" !== e ? "hidden" : "", " text-center"),
                                    children: "Construisez votre marque, d\xe9veloppez votre entreprise et reprenez le march\xe9 dans la nouvelle r\xe9alit\xe9 du commerce de d\xe9tail."
                                })]
                            })]
                        })]
                    })
                })
            }
            var Z = a(6818),
                M = a(5753),
                y = a(6165),
                V = a(3280),
                z = a(7488);

            function E() {
                return (0, s.jsxs)("header", {
                    className: "relative bg-gradient-esalink-simple background-animate overflow-hidden",
                    children: [(0, s.jsx)(z.Z, {}), (0, s.jsxs)("div", {
                        className: "flex z-10 container mx-auto px-4 mt-12 mb-20",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col flex-wrap justify-center z-10",
                            children: [(0, s.jsxs)("div", {
                                className: "w-full",
                                children: [(0, s.jsx)("div", {
                                    className: "flex mb-8",
                                    children: (0, s.jsxs)("ol", {
                                        className: "inline-flex items-center space-x-1 md:space-x-3",
                                        children: [(0, s.jsx)("li", {
                                            className: "inline-flex items-center",
                                            children: (0, s.jsxs)(c(), {
                                                href: "/",
                                                className: "inline-flex items-center text-sm text-white hover:text-slate-100",
                                                children: [(0, s.jsx)("svg", {
                                                    "aria-hidden": "true",
                                                    className: "w-4 h-4 mr-2",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, s.jsx)("path", {
                                                        d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                                    })
                                                }), "Accueil"]
                                            })
                                        }), (0, s.jsx)("li", {
                                            className: "hidden md:block",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [(0, s.jsx)("svg", {
                                                    "aria-hidden": "true",
                                                    className: "opacity-80 w-6 h-6 text-white",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, s.jsx)("path", {
                                                        fillRule: "evenodd",
                                                        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                        clipRule: "evenodd"
                                                    })
                                                }), (0, s.jsx)(c(), {
                                                    href: "/solutions",
                                                    className: "ml-1 text-sm text-white md:ml-2 hover:text-slate-100",
                                                    children: "Solutions"
                                                })]
                                            })
                                        }), (0, s.jsx)("li", {
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [(0, s.jsx)("svg", {
                                                    "aria-hidden": "true",
                                                    className: "opacity-80 w-6 h-6 text-white",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, s.jsx)("path", {
                                                        fillRule: "evenodd",
                                                        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                        clipRule: "evenodd"
                                                    })
                                                }), (0, s.jsx)("p", {
                                                    className: "ml-1 text-sm text-white md:ml-2 font-semibold",
                                                    children: "Cleo Integration Cloud"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, s.jsx)("h1", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "500",
                                        className: "mb-4 font-heading text-white text-8xl md:text-10xl font-semibold",
                                        children: "Cleo Integration Cloud"
                                    })
                                }), (0, s.jsx)("p", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "700",
                                    className: "mb-9 font-medium text-lg text-white",
                                    children: "Solution d'int\xe9gration B2B de CLEO propos\xe9e par EsaLink"
                                }), (0, s.jsxs)("div", {
                                    className: "flex gap-4 flex-col md:flex-row",
                                    children: [(0, s.jsx)(c(), {
                                        href: "/contact?src=cleo&name=obtenir_une_demonstration",
                                        children: (0, s.jsxs)("button", {
                                            "data-aos": "fade-up",
                                            "data-aos-duration": "1500",
                                            className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                            children: [(0, s.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                            }), (0, s.jsx)("p", {
                                                className: "relative z-10",
                                                children: "Obtenir une demonstration"
                                            })]
                                        })
                                    }), (0, s.jsx)(c(), {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1500",
                                        href: "/contact?src=cleo&name=souscrire_a_un_service_sur_mesure",
                                        className: "h-[56px] flex items-center justify-center text-white border-2 border-white border-opacity-50 hover:bg-white hover:bg-opacity-10 py-2 px-6 rounded-lg cursor-pointer bg-opacity-30 transition ease-in font-heading text-xs uppercase",
                                        children: "Souscrire \xe0 un service sur-mesure"
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-wrap justify-center xl:justify-start items-center flex-row mt-12 gap-14 2xl:gap-20",
                                children: [(0, s.jsx)("div", {
                                    className: "w-auto",
                                    children: (0, s.jsx)(r(), {
                                        "data-aos": "slide-left",
                                        "data-aos-duration": "500",
                                        src: Z.Z,
                                        alt: "Cleo | Esalink",
                                        className: "w-24"
                                    })
                                }), (0, s.jsxs)("div", {
                                    "data-aos": "slide-left",
                                    "data-aos-duration": "500",
                                    className: "w-auto flex gap-4 text-white items-center",
                                    children: [(0, s.jsx)(r(), {
                                        src: M.Z,
                                        alt: "Award | Esalink",
                                        className: "opacity-60 w-10"
                                    }), (0, s.jsxs)("p", {
                                        className: "text-sm",
                                        children: ["EsaLink partenaire certifi\xe9", (0, s.jsx)("br", {}), "sur les solutions Cleo"]
                                    })]
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)(r(), {
                                src: y.Z,
                                alt: "Globe Image | Esalink",
                                className: "absolute w-[390px] lg:w-[565px] xl:w-[658px] top-72 lg:top-40 xl:top-24 opacity-30 -right-14"
                            })
                        }), (0, s.jsx)(r(), {
                            src: V.Z,
                            alt: "line Image | Esalink",
                            className: "absolute top-16 left-0 w-full z-0",
                            style: {
                                transform: "scaleX(-1)"
                            }
                        })]
                    })]
                })
            }

            function _() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("section", {
                        id: "benefices-directs",
                        className: "py-24 bg-white",
                        children: (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto",
                            children: [(0, s.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                style: {
                                    lineHeight: "55px"
                                },
                                className: "text-gray-900 mb-12 font-heading text-4xl md:text-5xl xl:text-6xl font-semibold text-center",
                                children: ["Cleo Integration Cloud\xae ", (0, s.jsx)("br", {}), " ", (0, s.jsx)("label", {
                                    className: "text-esalink-blue",
                                    children: "SOLUTION D’INTEGRATION B2B"
                                }), " On-Premise de Cleo propos\xe9e par EsaLink"]
                            }), (0, s.jsxs)("p", {
                                className: "max-w-6xl mx-auto",
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                children: ["Cleo, soci\xe9t\xe9 experte en syst\xe8me d'int\xe9gration B2B ne se contente pas seulement de l’EDI, l’iPaaS, l’int\xe9gration d’API ou les services d’int\xe9gration g\xe9r\xe9s. ", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Elle vous propose de combiner les meilleurs \xe9l\xe9ments de ces technologies d’int\xe9gration traditionnelles dans une seule plateforme, afin que les organisations puissent se connecter et effectuer des transactions sur l’ensemble de leur \xe9cosyst\xe8me en toute confiance.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "EsaLink, int\xe9grateur fran\xe7ais certifi\xe9 de Cleo vous accompagne sur la solution Cleo Integration Cloud\xae"]
                            }), (0, s.jsx)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "900",
                                className: "flex flex-wrap justify-center items-center mt-12 aos-init",
                                children: (0, s.jsx)("div", {
                                    className: "w-full md:w-auto p-1.5",
                                    children: (0, s.jsx)(c(), {
                                        href: "/contact?src=cleo&name=initier_un_projet",
                                        children: (0, s.jsxs)("button", {
                                            className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                            children: [(0, s.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                            }), (0, s.jsx)("p", {
                                                className: "relative z-10",
                                                children: "Initier un projet "
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            }
            var L = {
                src: "/_next/static/media/cleo.93f5fe27.webp",
                height: 278,
                width: 846,
                blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAraig7uaSj2///8n//8z/5HBmQVVhHyQTAFZQOCAqAAAAkAEAnQEqCAADAAJAOCWkAALnT+RgAP73XwCorHUYQNrHtaCcphreQigA",
                blurWidth: 8,
                blurHeight: 3
            };

            function H() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("section", {
                        className: "pb-24 pt-18 bg-gradient-solution relative",
                        children: [(0, s.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[58px] 2xl:top-[50px] -left-[80px] z-0 border-white opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-white",
                            children: "1"
                        }), (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto h-full",
                            children: [(0, s.jsx)("h2", {
                                "data-aos": "fade-up",
                                "data-duration": "500",
                                className: "mb-12 mx-auto font-heading font-semibold uppercase text-center text-5xl sm:text-6xl !leading-tight text-white",
                                children: "Solution CIC\xae"
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col md:flex-row gap-12 items-center z-20",
                                children: [(0, s.jsx)("div", {
                                    "data-aos": "fade-left",
                                    "data-duration": "500",
                                    className: "w-full md:w-1/2",
                                    children: (0, s.jsx)(r(), {
                                        src: L,
                                        alt: "Cleo bleu | Esalink",
                                        className: "w-full z-20 relative"
                                    })
                                }), (0, s.jsxs)("div", {
                                    "data-aos": "fade-right",
                                    "data-duration": "500",
                                    className: "w-full md:w-1/2 text-lg",
                                    children: ["La solution CIC de Cleo aide les entreprises \xe0 cr\xe9er des plates-formes num\xe9riques flexibles et agiles qui permettent une int\xe9gration sans friction et des processus fluides dans leurs \xe9cosyst\xe8mes.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Notre partenaire de confiance Cleo cr\xe9e de la valeur en permettant aux organisations de booster leur agilit\xe9, d’acc\xe9l\xe9rer la transformation num\xe9rique et d’acqu\xe9rir de nouvelles sources de valeur en optimisant les int\xe9grations B2B, les applications inter-entreprises et intra-entreprises."]
                                })]
                            })]
                        })]
                    })
                })
            }

            function I() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("section", {
                        id: "benefices-directs",
                        className: "py-24 bg-slate-100 relative",
                        children: (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto ",
                            children: [(0, s.jsx)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-esalink-blue font-heading text-4xl md:text-5xl xl:text-6xl font-semibold text-center",
                                children: "Cleo Integration Cloud Overview"
                            }), (0, s.jsx)("iframe", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "w-full h-[232px] sm:h-[360px] md:h-[432px] lg:w-[800px] lg:h-[450px] mx-auto mt-12",
                                src: "https://www.youtube-nocookie.com/embed/GlNeVUUQPo4?controls=0",
                                title: "YouTube video player",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            })]
                        })
                    })
                })
            }
            var k = a(1163);

            function q() {
                let e = "Solution EDI - Cleo Integration Cloud\xae - CIC | ESALINK",
                    t = "Int\xe9grateur certifi\xe9, EsaLink vous accompagne sur la Solution EDI Cleo Integration Cloud\xae qui allie flexibilit\xe9, modernit\xe9 et agilit\xe9 dans l'int\xe9gration B2B.",
                    {
                        asPath: a
                    } = (0, k.useRouter)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(i(), {
                        children: [(0, s.jsx)("title", {
                            children: e
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: t
                        }), (0, s.jsx)("meta", {
                            name: "author",
                            content: "EsaLink"
                        }), (0, s.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, s.jsx)("meta", {
                            property: "og:site_name",
                            content: e
                        }), (0, s.jsx)("meta", {
                            property: "og:url",
                            content: "https://www.esalink.com".concat(a)
                        }), (0, s.jsx)("meta", {
                            name: "image",
                            property: "og:image",
                            content: "https://www.esalink.com/images/esalink_linkedin.jpg"
                        }), (0, s.jsx)("meta", {
                            name: "twitter:description",
                            content: t
                        }), (0, s.jsx)("meta", {
                            name: "twitter:title",
                            content: e
                        }), (0, s.jsx)("meta", {
                            name: "twitter:image",
                            content: ""
                        }), (0, s.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, s.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, s.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.esalink.com".concat(a)
                        }, "canonical")]
                    }), (0, s.jsx)(E, {}), (0, s.jsxs)("main", {
                        id: "beginMain",
                        children: [(0, s.jsx)(_, {}), (0, s.jsx)(H, {}), (0, s.jsx)(N, {}), (0, s.jsx)(h, {}), (0, s.jsx)(I, {}), (0, s.jsx)(w, {}), (0, s.jsx)(C, {}), (0, s.jsx)(m, {})]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [850, 488, 774, 888, 179], function() {
            return e(e.s = 5916)
        }), _N_E = e.O()
    }
]);