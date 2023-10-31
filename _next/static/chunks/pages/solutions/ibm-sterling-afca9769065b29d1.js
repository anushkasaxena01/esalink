(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [388], {
        6489: function(e, a) {
            "use strict";
            /*!
             * cookie
             * Copyright(c) 2012-2014 Roman Shtylman
             * Copyright(c) 2015 Douglas Christopher Wilson
             * MIT Licensed
             */
            a.parse = function(e, a) {
                if ("string" != typeof e) throw TypeError("argument str must be a string");
                for (var s = {}, i = e.split(";"), l = (a || {}).decode || t, n = 0; n < i.length; n++) {
                    var r = i[n],
                        o = r.indexOf("=");
                    if (!(o < 0)) {
                        var c = r.substring(0, o).trim();
                        if (void 0 == s[c]) {
                            var d = r.substring(o + 1, r.length).trim();
                            '"' === d[0] && (d = d.slice(1, -1)), s[c] = function(e, a) {
                                try {
                                    return a(e)
                                } catch (t) {
                                    return e
                                }
                            }(d, l)
                        }
                    }
                }
                return s
            }, a.serialize = function(e, a, t) {
                var l = t || {},
                    n = l.encode || s;
                if ("function" != typeof n) throw TypeError("option encode is invalid");
                if (!i.test(e)) throw TypeError("argument name is invalid");
                var r = n(a);
                if (r && !i.test(r)) throw TypeError("argument val is invalid");
                var o = e + "=" + r;
                if (null != l.maxAge) {
                    var c = l.maxAge - 0;
                    if (isNaN(c) || !isFinite(c)) throw TypeError("option maxAge is invalid");
                    o += "; Max-Age=" + Math.floor(c)
                }
                if (l.domain) {
                    if (!i.test(l.domain)) throw TypeError("option domain is invalid");
                    o += "; Domain=" + l.domain
                }
                if (l.path) {
                    if (!i.test(l.path)) throw TypeError("option path is invalid");
                    o += "; Path=" + l.path
                }
                if (l.expires) {
                    if ("function" != typeof l.expires.toUTCString) throw TypeError("option expires is invalid");
                    o += "; Expires=" + l.expires.toUTCString()
                }
                if (l.httpOnly && (o += "; HttpOnly"), l.secure && (o += "; Secure"), l.sameSite) switch ("string" == typeof l.sameSite ? l.sameSite.toLowerCase() : l.sameSite) {
                    case !0:
                    case "strict":
                        o += "; SameSite=Strict";
                        break;
                    case "lax":
                        o += "; SameSite=Lax";
                        break;
                    case "none":
                        o += "; SameSite=None";
                        break;
                    default:
                        throw TypeError("option sameSite is invalid")
                }
                return o
            };
            var t = decodeURIComponent,
                s = encodeURIComponent,
                i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        },
        7041: function(e, a, t) {
            "use strict";
            var s = this && this.__assign || function() {
                    return (s = Object.assign || function(e) {
                        for (var a, t = 1, s = arguments.length; t < s; t++)
                            for (var i in a = arguments[t]) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
                        return e
                    }).apply(this, arguments)
                },
                i = this && this.__rest || function(e, a) {
                    var t = {};
                    for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && 0 > a.indexOf(s) && (t[s] = e[s]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, s = Object.getOwnPropertySymbols(e); i < s.length; i++) 0 > a.indexOf(s[i]) && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (t[s[i]] = e[s[i]]);
                    return t
                };
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.checkCookies = a.hasCookie = a.removeCookies = a.deleteCookie = a.setCookies = a.setCookie = a.getCookie = a.getCookies = void 0;
            var l = t(6489),
                n = function() {
                    return "undefined" != typeof window
                },
                r = function(e) {
                    void 0 === e && (e = "");
                    try {
                        var a = JSON.stringify(e);
                        return /^[\{\[]/.test(a) ? a : e
                    } catch (t) {
                        return e
                    }
                };
            a.getCookies = function(e) {
                if (e && (a = e.req), !n()) return a && a.cookies ? a.cookies : a && a.headers && a.headers.cookie ? (0, l.parse)(a.headers.cookie) : {};
                for (var a, t = {}, s = document.cookie ? document.cookie.split("; ") : [], i = 0, r = s.length; i < r; i++) {
                    var o = s[i].split("="),
                        c = o.slice(1).join("=");
                    t[o[0]] = c
                }
                return t
            }, a.getCookie = function(e, t) {
                var s, i = (0, a.getCookies)(t)[e];
                if (void 0 !== i) return "true" === (s = i ? i.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : i) || "false" !== s && ("undefined" !== s ? "null" === s ? null : s : void 0)
            }, a.setCookie = function(e, a, t) {
                if (t) {
                    var o, c, d, x = t.req,
                        u = t.res,
                        m = i(t, ["req", "res"]);
                    c = x, d = u, o = m
                }
                var h = (0, l.serialize)(e, r(a), s({
                    path: "/"
                }, o));
                if (n()) document.cookie = h;
                else if (d && c) {
                    var f = d.getHeader("Set-Cookie");
                    if (Array.isArray(f) || (f = f ? [String(f)] : []), d.setHeader("Set-Cookie", f.concat(h)), c && c.cookies) {
                        var p = c.cookies;
                        "" === a ? delete p[e] : p[e] = r(a)
                    }
                    if (c && c.headers && c.headers.cookie) {
                        var p = (0, l.parse)(c.headers.cookie);
                        "" === a ? delete p[e] : p[e] = r(a), c.headers.cookie = Object.entries(p).reduce(function(e, a) {
                            return e.concat("".concat(a[0], "=").concat(a[1], ";"))
                        }, "")
                    }
                }
            }, a.setCookies = function(e, t, s) {
                return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."), (0, a.setCookie)(e, t, s)
            }, a.deleteCookie = function(e, t) {
                return (0, a.setCookie)(e, "", s(s({}, t), {
                    maxAge: -1
                }))
            }, a.removeCookies = function(e, t) {
                return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."), (0, a.deleteCookie)(e, t)
            }, a.hasCookie = function(e, t) {
                return !!e && (0, a.getCookies)(t).hasOwnProperty(e)
            }, a.checkCookies = function(e, t) {
                return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."), (0, a.hasCookie)(e, t)
            }
        },
        2742: function(e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/solutions/ibm-sterling", function() {
                return t(5538)
            }])
        },
        6165: function(e, a) {
            "use strict";
            a.Z = {
                src: "/_next/static/media/globe_white_block.6699e2aa.svg",
                height: 602,
                width: 607
            }
        },
        3280: function(e, a) {
            "use strict";
            a.Z = {
                src: "/_next/static/media/line.39b9fde9.svg",
                height: 791,
                width: 1600
            }
        },
        697: function(e, a) {
            "use strict";
            a.Z = {
                src: "/_next/static/media/ibm-white.7d4e8780.webp",
                height: 46,
                width: 114,
                blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAXT1hU0FcN1ctCj9MEklGKVU7Wk07Oi9RAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77IYAA",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        2781: function(e, a) {
            "use strict";
            a.Z = {
                src: "/_next/static/media/cleo.d41c808c.webp",
                height: 84,
                width: 200,
                blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAWb2XgTILMhW9PJLW0cm2h7q1tqelj7k7AFZQOCAuAAAA8AEAnQEqCAADAAJAOCWwAnS6AfgABEwAAP7sf4f/kpc/lDz6//PzL5b96iAAAA==",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        8885: function(e, a) {
            "use strict";
            a.Z = {
                src: "/_next/static/media/generix.201787f9.webp",
                height: 50,
                width: 182,
                blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAVWVUYV8vGiKHUT5JNy0VGgBWUDggPAAAANABAJ0BKggAAgACQDglmAJ0ARSjYnogAP5NsT67pOEOboGpr3SoM3i6cnusOfJPa+7NNHOI9eaaLQAAAA==",
                blurWidth: 8,
                blurHeight: 2
            }
        },
        5753: function(e, a) {
            "use strict";
            a.Z = {
                src: "/_next/static/media/award.891bb313.svg",
                height: 99,
                width: 76
            }
        },
        5538: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return Z
                }
            });
            var s = t(5893),
                i = t(9008),
                l = t.n(i),
                n = t(5675),
                r = t.n(n),
                o = t(1664),
                c = t.n(o),
                d = t(2781),
                x = t(8885),
                u = t(7994);

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
                                    "data-duration": "500",
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
                                            href: "/contact?src=ibm&name=nous_contacter",
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
                                    "data-duration": "500",
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
                                                        alt: "Logo Generix | Esalink",
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
                                                    href: "/solutions/cleo",
                                                    className: "gap-4 flex flex-col items-center",
                                                    children: [(0, s.jsx)(r(), {
                                                        src: d.Z,
                                                        alt: "Logo Cleo Bleu | Esalink",
                                                        className: "h-12 w-auto"
                                                    }), (0, s.jsx)("label", {
                                                        className: "font-semibold text-gray-600 cursor-pointer",
                                                        children: "Cleo"
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
            var h = t(7294);

            function f() {
                let [e, a] = (0, h.useState)("Conteneurs"), t = e => {
                    a(e)
                };
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("section", {
                        className: "pb-8 pt-12 bg-gradient-solution relative",
                        children: [(0, s.jsxs)("div", {
                            className: "container px-4 max-w-6xl mx-auto h-full",
                            children: [(0, s.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "600",
                                className: "xl:mb-12 mx-auto font-heading font-semibold text-center text-5xl sm:text-6xl !leading-tight text-white",
                                children: ["Les Avantages de ", (0, s.jsx)("label", {
                                    children: "IBM Sterling B2B Integrator"
                                })]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "900",
                                className: "flex flex-col xl:flex-row justify-center ",
                                children: [(0, s.jsxs)("ul", {
                                    className: "smallmcheckulblue mb-8 xl:mb-0 xl:w-1/2 cursor-pointer mt-8",
                                    children: [(0, s.jsx)("li", {
                                        className: "".concat("Conteneurs" !== e ? "" : "font-bold text-blue-600", " "),
                                        onMouseEnter: () => {
                                            t("Conteneurs")
                                        },
                                        children: "Conteneurs certifi\xe9s"
                                    }), (0, s.jsx)("li", {
                                        className: "".concat("Communications" !== e ? "" : "font-bold text-blue-600", " "),
                                        onMouseEnter: () => {
                                            t("Communications")
                                        },
                                        children: "Communications haute disponibilit\xe9 et reprise apr\xe8s sinistre"
                                    }), (0, s.jsx)("li", {
                                        className: "".concat("Interop\xe9rabilit\xe9" !== e ? "" : "font-bold text-blue-600", " "),
                                        onMouseEnter: () => {
                                            t("Interop\xe9rabilit\xe9")
                                        },
                                        children: "Interop\xe9rabilit\xe9"
                                    }), (0, s.jsx)("li", {
                                        className: "".concat("Prise" !== e ? "" : "font-bold text-blue-600", " "),
                                        onMouseEnter: () => {
                                            t("Prise")
                                        },
                                        children: "Prise en charge du protocole de communication"
                                    }), (0, s.jsx)("li", {
                                        className: "".concat("Onboarding" !== e ? "" : "font-bold text-blue-600", " "),
                                        onMouseEnter: () => {
                                            t("Onboarding")
                                        },
                                        children: "Onboarding centralis\xe9"
                                    }), (0, s.jsx)("li", {
                                        className: "".concat("Monitoring" !== e ? "" : "font-bold text-blue-600", " "),
                                        onMouseEnter: () => {
                                            t("Monitoring")
                                        },
                                        children: "Monitoring exhaustif"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col xl:w-1/2 gap-4 items-center bg-[#ffffff1f] p-8 border-4 rounded-lg border-[#ffffff82] shadow-md",
                                    children: [(0, s.jsxs)("svg", {
                                        className: "".concat("Conteneurs" !== e ? "hidden" : "", " w-16"),
                                        xmlns: "http://www.w3.org/2000/svg",
                                        zoomAndPan: "magnify",
                                        viewBox: "0 0 75 74.999997",
                                        preserveAspectRatio: "xMidYMid meet",
                                        version: "1.0",
                                        children: [(0, s.jsx)("defs", {
                                            children: (0, s.jsx)("clipPath", {
                                                id: "4acc6ceef6",
                                                children: (0, s.jsx)("path", {
                                                    d: "M 0 0 L 74 0 L 74 73.5 L 0 73.5 Z M 0 0 ",
                                                    "clip-rule": "nonzero"
                                                })
                                            })
                                        }), (0, s.jsx)("g", {
                                            "clip-path": "url(#4acc6ceef6)",
                                            children: (0, s.jsx)("path", {
                                                fill: "#2578eb",
                                                d: "M 67.976562 25.652344 C 65.96875 26.117188 64.714844 28.121094 65.179688 30.132812 C 65.675781 32.289062 65.929688 34.515625 65.929688 36.75 C 65.929688 52.890625 52.8125 66.023438 36.695312 66.023438 C 20.574219 66.023438 7.460938 52.890625 7.460938 36.75 C 7.460938 20.609375 20.574219 7.476562 36.695312 7.476562 C 40.585938 7.476562 44.359375 8.230469 47.914062 9.710938 C 49.820312 10.503906 52.003906 9.601562 52.796875 7.695312 C 53.589844 5.789062 52.6875 3.601562 50.785156 2.808594 C 46.316406 0.945312 41.574219 0 36.695312 0 C 16.457031 0 -0.0078125 16.484375 -0.0078125 36.75 C -0.0078125 57.011719 16.457031 73.5 36.695312 73.5 C 56.929688 73.5 73.394531 57.011719 73.394531 36.75 C 73.394531 33.949219 73.078125 31.160156 72.457031 28.453125 C 71.992188 26.441406 69.988281 25.183594 67.976562 25.652344 ",
                                                "fill-opacity": "1",
                                                "fill-rule": "nonzero"
                                            })
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 73.480469 5.898438 C 72 4.460938 69.636719 4.496094 68.203125 5.980469 L 29.738281 45.726562 L 20.308594 36.402344 C 18.839844 34.953125 16.476562 34.96875 15.027344 36.4375 C 13.578125 37.90625 13.59375 40.273438 15.0625 41.722656 L 27.175781 53.699219 C 27.875 54.390625 28.816406 54.777344 29.800781 54.777344 C 29.8125 54.777344 29.828125 54.777344 29.839844 54.777344 C 30.835938 54.765625 31.785156 54.355469 32.480469 53.640625 L 73.566406 11.183594 C 75 9.703125 74.960938 7.335938 73.480469 5.898438 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        })]
                                    }), (0, s.jsx)("label", {
                                        className: "".concat("Conteneurs" !== e ? "hidden" : "", " justify"),
                                        children: "Les conteneurs IBM Certified sont des \xe9ditions de produit de cat\xe9gorie entreprise, ultra-s\xe9curis\xe9es, avec des services logiciels communs int\xe9gr\xe9s. Ils permettent une gestion coh\xe9rente du cycle de vie du d\xe9ploiement, avec des options d'installation et de configuration facilit\xe9s. La gestion des mises \xe0 jour et des reprises, l'\xe9volutivit\xe9 et la s\xe9curit\xe9, tout y est."
                                    }), (0, s.jsxs)("svg", {
                                        className: "".concat("Communications" !== e ? "hidden" : "", " w-16"),
                                        xmlns: "http://www.w3.org/2000/svg",
                                        zoomAndPan: "magnify",
                                        viewBox: "0 0 75 74.999997",
                                        preserveAspectRatio: "xMidYMid meet",
                                        version: "1.0",
                                        children: [(0, s.jsxs)("defs", {
                                            children: [(0, s.jsx)("clipPath", {
                                                id: "770ff5a933",
                                                children: (0, s.jsx)("path", {
                                                    d: "M 0 3 L 41 3 L 41 74.109375 L 0 74.109375 Z M 0 3 ",
                                                    "clip-rule": "nonzero"
                                                })
                                            }), (0, s.jsx)("clipPath", {
                                                id: "7563d695af",
                                                children: (0, s.jsx)("path", {
                                                    d: "M 29 0.609375 L 33 0.609375 L 33 7 L 29 7 Z M 29 0.609375 ",
                                                    "clip-rule": "nonzero"
                                                })
                                            })]
                                        }), (0, s.jsx)("g", {
                                            "clip-path": "url(#770ff5a933)",
                                            children: (0, s.jsx)("path", {
                                                fill: "#2578eb",
                                                d: "M 24.859375 5.296875 C 25.125 6.453125 24.5 7.613281 23.394531 8.042969 C 22.644531 8.339844 21.90625 8.664062 21.175781 9.019531 C 14.074219 12.484375 8.8125 18.550781 6.363281 26.097656 C 5.679688 28.191406 5.242188 30.363281 5.058594 32.550781 C 4.046875 44.71875 10.90625 56.21875 22.136719 61.175781 C 22.285156 61.242188 22.421875 61.296875 22.597656 61.363281 C 22.691406 61.398438 22.792969 61.4375 22.914062 61.480469 L 24.191406 61.980469 L 24.308594 60.613281 C 24.335938 60.277344 24.367188 59.945312 24.394531 59.625 C 24.429688 59.3125 24.457031 59.003906 24.484375 58.703125 C 24.515625 58.269531 24.539062 57.914062 24.550781 57.574219 C 24.582031 56.578125 25.074219 55.800781 25.878906 55.429688 C 26.707031 55.058594 27.695312 55.195312 28.511719 55.800781 C 30.957031 57.605469 33.492188 59.359375 35.941406 61.054688 C 37.121094 61.871094 38.339844 62.710938 39.53125 63.550781 C 40.417969 64.171875 40.886719 65.011719 40.816406 65.847656 C 40.75 66.6875 40.140625 67.445312 39.152344 67.917969 C 35.019531 69.898438 30.914062 71.859375 26.941406 73.742188 C 25.988281 74.191406 25.058594 74.191406 24.382812 73.738281 C 23.703125 73.28125 23.347656 72.402344 23.414062 71.335938 C 23.4375 70.933594 23.46875 70.507812 23.511719 69.992188 C 23.542969 69.609375 23.574219 69.230469 23.613281 68.863281 C 23.640625 68.511719 23.671875 68.171875 23.695312 67.847656 L 23.757812 67.15625 L 23.132812 66.847656 C 22.410156 66.492188 21.6875 66.15625 20.992188 65.835938 C 19.5 65.148438 18.089844 64.5 16.773438 63.703125 C 7.230469 57.914062 1.785156 49.632812 0.589844 39.082031 C 0.289062 36.414062 0.238281 33.808594 0.441406 31.347656 C 1.3125 20.925781 6.757812 12.457031 16.628906 6.179688 C 18.230469 5.160156 19.90625 4.304688 21.652344 3.613281 C 23.011719 3.074219 24.535156 3.875 24.859375 5.296875 ",
                                                "fill-opacity": "1",
                                                "fill-rule": "nonzero"
                                            })
                                        }), (0, s.jsx)("g", {
                                            "clip-path": "url(#7563d695af)",
                                            children: (0, s.jsx)("path", {
                                                fill: "#2578eb",
                                                d: "M 32.675781 4.390625 L 32.417969 2.519531 C 32.390625 2.324219 32.363281 2.136719 32.328125 1.941406 C 32.203125 1.136719 31.699219 0.640625 31.007812 0.640625 C 30.9375 0.640625 30.871094 0.644531 30.800781 0.652344 C 30.003906 0.761719 29.542969 1.421875 29.660156 2.292969 C 29.789062 3.289062 29.933594 4.3125 30.085938 5.34375 C 30.15625 5.792969 30.363281 6.160156 30.679688 6.394531 C 30.902344 6.558594 31.160156 6.640625 31.433594 6.640625 C 31.503906 6.640625 31.574219 6.636719 31.648438 6.625 C 32.402344 6.507812 32.863281 5.835938 32.761719 4.992188 C 32.730469 4.792969 32.707031 4.589844 32.675781 4.390625 ",
                                                "fill-opacity": "1",
                                                "fill-rule": "nonzero"
                                            })
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 42.355469 1.578125 C 42.253906 1.554688 42.148438 1.542969 42.046875 1.542969 C 41.390625 1.542969 40.890625 2 40.734375 2.738281 C 40.519531 3.726562 40.3125 4.742188 40.113281 5.757812 C 40.023438 6.203125 40.097656 6.621094 40.320312 6.945312 C 40.515625 7.230469 40.804688 7.421875 41.152344 7.484375 C 41.238281 7.5 41.324219 7.507812 41.40625 7.507812 C 42.058594 7.507812 42.582031 7.042969 42.746094 6.316406 C 42.792969 6.117188 42.832031 5.921875 42.875 5.722656 L 43.25 3.871094 C 43.292969 3.683594 43.328125 3.488281 43.367188 3.296875 C 43.539062 2.414062 43.140625 1.738281 42.355469 1.578125 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 52.945312 6.285156 C 52.710938 6.148438 52.476562 6.078125 52.234375 6.078125 C 51.757812 6.078125 51.328125 6.351562 51.019531 6.84375 C 50.492188 7.703125 49.953125 8.589844 49.425781 9.484375 C 49.195312 9.871094 49.121094 10.292969 49.222656 10.671875 C 49.3125 11.007812 49.519531 11.273438 49.824219 11.453125 C 50.035156 11.574219 50.257812 11.636719 50.484375 11.636719 C 50.96875 11.636719 51.417969 11.363281 51.71875 10.886719 C 51.828125 10.714844 51.933594 10.539062 52.039062 10.367188 L 53.019531 8.746094 C 53.113281 8.578125 53.21875 8.414062 53.3125 8.242188 C 53.773438 7.464844 53.625 6.699219 52.945312 6.285156 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 61.339844 14.246094 C 61.074219 13.925781 60.71875 13.746094 60.339844 13.746094 C 60 13.746094 59.65625 13.878906 59.34375 14.132812 C 58.558594 14.765625 57.753906 15.425781 56.957031 16.089844 C 56.609375 16.378906 56.394531 16.753906 56.363281 17.140625 C 56.335938 17.488281 56.441406 17.8125 56.667969 18.082031 C 56.925781 18.382812 57.277344 18.546875 57.65625 18.546875 C 58 18.546875 58.339844 18.414062 58.648438 18.175781 C 58.808594 18.050781 58.96875 17.921875 59.125 17.792969 L 60.589844 16.59375 C 60.738281 16.46875 60.890625 16.34375 61.039062 16.214844 C 61.722656 15.636719 61.84375 14.863281 61.339844 14.246094 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 62.738281 27.351562 C 62.929688 27.289062 63.117188 27.21875 63.3125 27.148438 L 65.09375 26.503906 C 65.277344 26.433594 65.464844 26.367188 65.644531 26.300781 C 66.488281 25.980469 66.859375 25.289062 66.589844 24.539062 C 66.390625 23.984375 65.941406 23.660156 65.355469 23.660156 C 65.15625 23.660156 64.953125 23.695312 64.746094 23.769531 C 63.789062 24.105469 62.8125 24.460938 61.839844 24.824219 C 61.414062 24.980469 61.089844 25.261719 60.933594 25.617188 C 60.789062 25.933594 60.777344 26.277344 60.902344 26.609375 C 61.109375 27.136719 61.574219 27.449219 62.164062 27.449219 C 62.351562 27.449219 62.542969 27.417969 62.738281 27.351562 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 66.609375 34.65625 L 66.539062 34.65625 C 65.546875 34.65625 64.53125 34.660156 63.515625 34.675781 C 63.0625 34.683594 62.664062 34.84375 62.390625 35.125 C 62.152344 35.375 62.03125 35.691406 62.039062 36.046875 C 62.058594 36.808594 62.664062 37.351562 63.515625 37.359375 C 63.609375 37.359375 63.703125 37.359375 63.796875 37.359375 C 63.90625 37.359375 64.011719 37.359375 64.128906 37.359375 L 66.023438 37.339844 C 66.21875 37.339844 66.414062 37.335938 66.613281 37.335938 C 67.511719 37.3125 68.09375 36.785156 68.089844 35.992188 C 68.085938 35.191406 67.492188 34.65625 66.609375 34.65625 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 36.300781 55.230469 L 36.28125 51.8125 C 36.277344 50.675781 36.578125 49.832031 37.183594 49.269531 C 37.796875 48.710938 38.691406 48.429688 39.871094 48.421875 L 44.113281 48.402344 C 44.5625 48.402344 44.921875 48.269531 45.1875 48.027344 C 45.457031 47.777344 45.589844 47.429688 45.585938 46.980469 C 45.585938 46.53125 45.453125 46.179688 45.1875 45.929688 C 44.921875 45.683594 44.5625 45.558594 44.097656 45.5625 L 36.347656 45.597656 L 36.335938 43.558594 L 44.089844 43.523438 C 44.667969 43.515625 45.183594 43.601562 45.628906 43.761719 C 46.070312 43.921875 46.453125 44.148438 46.757812 44.441406 C 47.066406 44.726562 47.300781 45.066406 47.457031 45.46875 C 47.613281 45.871094 47.695312 46.304688 47.699219 46.777344 C 47.699219 47.261719 47.621094 47.703125 47.453125 48.109375 C 47.289062 48.519531 47.054688 48.871094 46.75 49.167969 C 46.449219 49.460938 46.070312 49.691406 45.632812 49.863281 C 45.191406 50.03125 44.695312 50.113281 44.136719 50.117188 L 39.882812 50.140625 C 38.765625 50.144531 38.207031 50.648438 38.214844 51.65625 L 38.222656 53.183594 L 47.535156 53.136719 L 47.546875 55.171875 L 36.300781 55.230469 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 58.054688 55.121094 L 58.035156 52.003906 L 53.183594 52.035156 C 51.953125 52.039062 50.996094 51.742188 50.332031 51.148438 C 49.660156 50.550781 49.324219 49.605469 49.316406 48.3125 L 49.292969 43.492188 L 51.335938 43.484375 L 51.363281 48.285156 C 51.367188 48.960938 51.515625 49.425781 51.8125 49.6875 C 52.109375 49.945312 52.5625 50.078125 53.175781 50.070312 L 58.027344 50.046875 L 57.996094 43.453125 L 60.042969 43.441406 L 60.074219 50.039062 L 61.765625 50.03125 L 61.773438 51.988281 L 60.085938 51.996094 L 60.097656 55.113281 L 58.054688 55.121094 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 72.636719 55.097656 L 72.609375 50.027344 L 66.714844 50.054688 L 66.699219 48.238281 L 72.597656 48.210938 L 72.574219 43.378906 L 74.625 43.371094 L 74.679688 55.085938 Z M 63.207031 55.144531 L 63.152344 43.425781 L 65.195312 43.414062 L 65.253906 55.136719 L 63.207031 55.144531 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 45.925781 25.015625 C 45.894531 25.046875 45.855469 25.085938 45.828125 25.117188 L 32.996094 37.898438 C 31.824219 39.058594 31.089844 39.042969 29.917969 37.875 C 28.746094 36.707031 27.585938 35.53125 26.429688 34.34375 C 25.519531 33.402344 25.527344 32.527344 26.472656 31.589844 C 26.972656 31.085938 27.453125 30.835938 27.902344 30.835938 C 28.324219 30.835938 28.765625 31.066406 29.214844 31.515625 C 29.488281 31.789062 31.347656 33.824219 31.347656 33.824219 C 31.347656 33.824219 32.996094 32.277344 33.195312 32.078125 L 37.355469 27.933594 C 38.367188 26.921875 39.382812 25.917969 40.40625 24.894531 C 41.304688 24.011719 42.207031 23.109375 43.105469 22.210938 C 43.179688 22.140625 43.242188 22.082031 43.308594 22.019531 C 44.34375 21.082031 45.113281 21.09375 46.117188 22.105469 C 46.929688 22.921875 47.207031 23.738281 45.925781 25.015625 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        })]
                                    }), (0, s.jsxs)("label", {
                                        className: "".concat("Communications" !== e ? "hidden" : "", " justify"),
                                        children: ["Avec la Global Mailbox, IBM Sterling\xae B2B Integrator aide les entreprises \xe0 r\xe9pondre aux demandes de fonctionnement \xe0 haute disponibilit\xe9 gr\xe2ce \xe0 une solution de stockage de donn\xe9es fiable et performant. La solution prend en charge les communications actives-actives pour la r\xe9silience en cas de disruption et la reprise apr\xe8s incident se fait en temps quasi r\xe9el.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Disponible pour IBM Sterling\xae B2B Integrator et Sterling\xae File Gateway, la Global Mailbox est d\xe9velopp\xe9e pour fonctionner avec IBM Sterling\xae Control Center."]
                                    }), (0, s.jsxs)("svg", {
                                        className: "".concat("Prise" !== e ? "hidden" : "", " w-16"),
                                        xmlns: "http://www.w3.org/2000/svg",
                                        zoomAndPan: "magnify",
                                        viewBox: "0 0 75 74.999997",
                                        preserveAspectRatio: "xMidYMid meet",
                                        version: "1.0",
                                        children: [(0, s.jsx)("defs", {
                                            children: (0, s.jsx)("clipPath", {
                                                id: "7f40ff85ab",
                                                children: (0, s.jsx)("path", {
                                                    d: "M 0 15.886719 L 75 15.886719 L 75 59.386719 L 0 59.386719 Z M 0 15.886719 ",
                                                    "clip-rule": "nonzero"
                                                })
                                            })
                                        }), (0, s.jsx)("g", {
                                            "clip-path": "url(#7f40ff85ab)",
                                            children: (0, s.jsx)("path", {
                                                fill: "#2578eb",
                                                d: "M 23.574219 20.085938 L 18.472656 15.835938 L 0.558594 37.554688 L 18.472656 59.285156 L 23.574219 55.035156 L 9.167969 37.554688 Z M 21.023438 40.886719 L 27.648438 40.886719 L 27.648438 34.21875 L 21.023438 34.21875 Z M 54.140625 34.21875 L 47.519531 34.21875 L 47.519531 40.886719 L 54.140625 40.886719 Z M 34.269531 40.886719 L 40.894531 40.886719 L 40.894531 34.21875 L 34.269531 34.21875 Z M 56.691406 15.820312 L 51.589844 20.070312 L 65.996094 37.554688 L 51.589844 55.019531 L 56.691406 59.269531 L 74.609375 37.554688 Z M 56.691406 15.820312 ",
                                                "fill-opacity": "1",
                                                "fill-rule": "nonzero"
                                            })
                                        })]
                                    }), (0, s.jsx)("label", {
                                        className: "".concat("Prise" !== e ? "hidden" : "", " justify"),
                                        children: "Un large panel de protocoles de communication est pris en charge, notamment les services Web, les client et serveur S/FTP/S, HTTP/S, SMTP, l'Applicability Statement (AS1-AS4), RosettaNet, WebDAV et Zengin TCP/IP, plus SSL, SSH et bien d'autres pour un taux d’acception d’int\xe9gration total."
                                    }), (0, s.jsxs)("svg", {
                                        className: "".concat("Onboarding" !== e ? "hidden" : "", " w-16"),
                                        xmlns: "http://www.w3.org/2000/svg",
                                        zoomAndPan: "magnify",
                                        viewBox: "0 0 75 74.999997",
                                        preserveAspectRatio: "xMidYMid meet",
                                        version: "1.0",
                                        children: [(0, s.jsx)("defs", {
                                            children: (0, s.jsx)("clipPath", {
                                                id: "ab7c6976e3",
                                                children: (0, s.jsx)("path", {
                                                    d: "M 41 38 L 74.34375 38 L 74.34375 64 L 41 64 Z M 41 38 ",
                                                    "clip-rule": "nonzero"
                                                })
                                            })
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 65.273438 41.601562 C 65.273438 43.820312 64.960938 45.949219 64.488281 48 L 69.949219 51.15625 C 70.894531 48.160156 71.371094 44.917969 71.371094 41.601562 C 71.371094 25.894531 60.367188 12.632812 45.648438 9.15625 L 45.648438 15.394531 C 56.964844 18.789062 65.273438 29.210938 65.273438 41.601562 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 11.296875 48 C 10.742188 46.03125 10.503906 43.820312 10.503906 41.6875 C 10.503906 29.371094 18.816406 18.871094 30.136719 15.472656 L 30.136719 9.234375 C 15.410156 12.632812 4.410156 25.894531 4.410156 41.601562 C 4.410156 44.917969 4.890625 48.160156 5.835938 51.15625 L 11.296875 48 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 37.894531 68.921875 C 30.53125 68.921875 23.960938 66.078125 19.054688 61.417969 L 13.59375 64.578125 C 19.6875 70.972656 28.3125 75 37.894531 75 C 47.464844 75 56.097656 70.972656 62.109375 64.5 L 56.730469 61.34375 C 51.824219 66.078125 45.175781 68.921875 37.894531 68.921875 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 26.410156 22.738281 C 25.230469 23.921875 25.230469 25.894531 26.410156 27.078125 L 35.757812 36.394531 C 36.945312 37.578125 38.921875 37.578125 40.109375 36.394531 L 49.449219 27.078125 C 50.082031 26.445312 50.316406 25.65625 50.316406 24.949219 C 50.316406 24.15625 50.003906 23.371094 49.449219 22.816406 C 48.257812 21.632812 46.285156 21.632812 45.09375 22.816406 L 40.976562 26.917969 L 40.976562 3.074219 C 40.976562 1.417969 39.636719 0 37.894531 0 C 36.230469 0 34.800781 1.339844 34.800781 3.074219 L 34.800781 26.839844 L 30.691406 22.738281 C 29.5 21.554688 27.597656 21.554688 26.410156 22.738281 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 25.070312 57.234375 C 24.59375 58.894531 25.625 60.550781 27.207031 61.023438 C 28.867188 61.503906 30.53125 60.476562 31.003906 58.894531 L 34.410156 46.183594 C 34.882812 44.523438 33.855469 42.867188 32.273438 42.394531 L 19.527344 39 C 18.734375 38.765625 17.867188 38.925781 17.230469 39.316406 C 16.519531 39.710938 16.042969 40.34375 15.8125 41.207031 C 15.335938 42.867188 16.363281 44.523438 17.945312 45.003906 L 23.566406 46.503906 L 2.90625 58.1875 C 1.40625 59.054688 0.929688 60.863281 1.800781 62.367188 C 2.59375 63.867188 4.488281 64.347656 5.992188 63.554688 L 26.652344 51.628906 L 25.070312 57.234375 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        }), (0, s.jsx)("g", {
                                            "clip-path": "url(#ab7c6976e3)",
                                            children: (0, s.jsx)("path", {
                                                fill: "#2578eb",
                                                d: "M 72.871094 58.1875 L 52.296875 46.34375 L 57.917969 44.84375 C 59.582031 44.371094 60.527344 42.707031 60.054688 41.054688 C 59.582031 39.390625 57.917969 38.445312 56.25 38.925781 L 43.511719 42.3125 C 41.851562 42.785156 40.898438 44.453125 41.371094 46.101562 L 44.773438 58.820312 C 45.015625 59.605469 45.488281 60.316406 46.203125 60.710938 C 46.910156 61.105469 47.707031 61.265625 48.5 61.023438 C 50.15625 60.550781 51.109375 58.894531 50.636719 57.234375 L 49.128906 51.628906 L 69.789062 63.554688 C 71.289062 64.417969 73.113281 63.867188 73.980469 62.449219 C 74.855469 60.949219 74.378906 59.054688 72.871094 58.1875 ",
                                                "fill-opacity": "1",
                                                "fill-rule": "nonzero"
                                            })
                                        })]
                                    }), (0, s.jsxs)("label", {
                                        className: "".concat("Onboarding" !== e ? "hidden" : "", " justify"),
                                        children: ["Alors que B2B Integrator permet d'int\xe9grer des partenaires commerciaux, IBM Sterling Partner Engagement Manager est utilis\xe9 avec B2B Integrator pour aider \xe0 centraliser l'int\xe9gration dans des applications compatibles avec les API RESTful.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "L'int\xe9gration en libre-service pour les partenaires et le personnel des secteurs d'activit\xe9 met fin \xe0 la d\xe9pendance vis-\xe0-vis de l'informatique, tandis qu'une fonction \"locale\" permet le stockage des donn\xe9es sensibles des partenaires derri\xe8re votre pare-feu."]
                                    }), (0, s.jsx)("svg", {
                                        className: "".concat("Monitoring" !== e ? "hidden" : "", " w-16"),
                                        xmlns: "http://www.w3.org/2000/svg",
                                        zoomAndPan: "magnify",
                                        viewBox: "0 0 75 74.999997",
                                        preserveAspectRatio: "xMidYMid meet",
                                        version: "1.0",
                                        children: (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 47.402344 34.277344 C 45.175781 32.046875 42.710938 29.585938 40.484375 27.355469 C 35.761719 22.632812 27.167969 23.183594 21.335938 29.015625 C 16.675781 33.675781 10.957031 39.394531 6.292969 44.054688 C 0.460938 49.890625 -0.0859375 58.480469 4.636719 63.203125 C 6.863281 65.433594 9.328125 67.894531 11.558594 70.125 C 16.28125 74.847656 24.871094 74.300781 30.703125 68.464844 C 34.011719 65.160156 37.851562 61.316406 41.46875 57.699219 C 42.40625 56.765625 42.40625 55.246094 41.46875 54.3125 C 40.535156 53.375 39.015625 53.375 38.082031 54.3125 C 34.464844 57.925781 30.621094 61.769531 27.316406 65.078125 C 23.527344 68.867188 18.011719 69.800781 14.945312 66.734375 C 14.945312 66.734375 8.023438 59.816406 8.023438 59.816406 C 4.957031 56.75 5.894531 51.234375 9.683594 47.445312 C 14.34375 42.785156 20.0625 37.0625 24.722656 32.40625 C 28.511719 28.613281 34.027344 27.679688 37.09375 30.746094 C 37.09375 30.746094 44.015625 37.664062 44.015625 37.664062 C 44.949219 38.601562 46.46875 38.601562 47.402344 37.664062 C 48.335938 36.730469 48.335938 35.210938 47.402344 34.277344 Z M 27.355469 40.484375 C 29.585938 42.710938 32.046875 45.175781 34.277344 47.402344 C 39 52.125 47.59375 51.578125 53.425781 45.746094 C 58.085938 41.085938 63.804688 35.363281 68.464844 30.703125 C 74.300781 24.871094 74.847656 16.28125 70.125 11.558594 C 67.894531 9.328125 65.433594 6.863281 63.203125 4.636719 C 58.480469 -0.0859375 49.890625 0.460938 44.054688 6.292969 C 40.75 9.601562 36.90625 13.441406 33.289062 17.0625 C 32.355469 17.996094 32.355469 19.515625 33.289062 20.449219 C 34.222656 21.386719 35.742188 21.386719 36.679688 20.449219 C 40.296875 16.832031 44.136719 12.988281 47.445312 9.683594 C 51.234375 5.894531 56.75 4.957031 59.816406 8.023438 C 59.816406 8.023438 66.734375 14.945312 66.734375 14.945312 C 69.800781 18.011719 68.867188 23.527344 65.078125 27.316406 C 60.417969 31.972656 54.699219 37.695312 50.035156 42.355469 C 46.25 46.144531 40.734375 47.082031 37.664062 44.015625 C 37.664062 44.015625 30.746094 37.09375 30.746094 37.09375 C 29.8125 36.160156 28.292969 36.160156 27.355469 37.09375 C 26.421875 38.03125 26.421875 39.546875 27.355469 40.484375 Z M 27.355469 40.484375 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "evenodd"
                                        })
                                    }), (0, s.jsxs)("label", {
                                        className: "".concat("Monitoring" !== e ? "hidden" : "", " justify"),
                                        children: ["Un suivi en temps r\xe9el de vos \xe9changes de donn\xe9es. B\xe9n\xe9ficiez d'une visibilit\xe9 accrue de vos transactions avec des alertes, des diagnostics pr\xe9\xe9tablies.", (0, s.jsx)("br", {}), "Optimisez votre cha\xeene d'approvisionnement avec une interface fonctionnelle."]
                                    }), (0, s.jsxs)("svg", {
                                        className: "".concat("Interop\xe9rabilit\xe9" !== e ? "hidden" : "", " w-16"),
                                        xmlns: "http://www.w3.org/2000/svg",
                                        zoomAndPan: "magnify",
                                        viewBox: "0 0 75 74.999997",
                                        preserveAspectRatio: "xMidYMid meet",
                                        version: "1.0",
                                        children: [(0, s.jsx)("defs", {
                                            children: (0, s.jsx)("clipPath", {
                                                id: "685dda4784",
                                                children: (0, s.jsx)("path", {
                                                    d: "M 10 1.3125 L 73 1.3125 L 73 71 L 10 71 Z M 10 1.3125 ",
                                                    "clip-rule": "nonzero"
                                                })
                                            })
                                        }), (0, s.jsx)("g", {
                                            "clip-path": "url(#685dda4784)",
                                            children: (0, s.jsx)("path", {
                                                fill: "#2578eb",
                                                d: "M 37.308594 1.3125 C 35.132812 1.308594 32.976562 1.511719 30.839844 1.917969 C 28.699219 2.324219 26.621094 2.929688 24.597656 3.730469 C 22.574219 4.535156 20.644531 5.519531 18.804688 6.691406 C 16.96875 7.859375 15.257812 9.195312 13.671875 10.691406 C 12.351562 11.9375 11.132812 13.273438 10.011719 14.703125 L 12.039062 16.300781 C 12.699219 15.453125 13.394531 14.636719 14.132812 13.859375 C 14.871094 13.082031 15.648438 12.339844 16.460938 11.640625 C 17.273438 10.9375 18.117188 10.28125 18.996094 9.664062 C 19.875 9.046875 20.78125 8.476562 21.714844 7.953125 C 22.648438 7.429688 23.605469 6.953125 24.589844 6.523438 C 25.570312 6.097656 26.570312 5.71875 27.589844 5.390625 C 28.613281 5.0625 29.644531 4.789062 30.691406 4.5625 C 31.738281 4.339844 32.792969 4.171875 33.859375 4.054688 C 34.921875 3.933594 35.988281 3.871094 37.058594 3.863281 C 38.128906 3.851562 39.199219 3.894531 40.265625 3.992188 C 41.332031 4.089844 42.390625 4.242188 43.441406 4.445312 C 44.492188 4.648438 45.53125 4.90625 46.554688 5.214844 C 47.582031 5.523438 48.589844 5.882812 49.578125 6.292969 C 50.566406 6.703125 51.535156 7.160156 52.480469 7.667969 C 53.421875 8.175781 54.339844 8.726562 55.230469 9.328125 C 56.117188 9.925781 56.972656 10.570312 57.800781 11.253906 C 58.625 11.941406 59.414062 12.667969 60.167969 13.429688 C 60.917969 14.195312 61.632812 14.996094 62.304688 15.835938 C 62.976562 16.671875 63.609375 17.539062 64.195312 18.4375 C 64.78125 19.339844 65.320312 20.265625 65.816406 21.222656 C 66.308594 22.175781 66.753906 23.152344 67.152344 24.152344 C 67.546875 25.152344 67.894531 26.167969 68.191406 27.203125 C 68.484375 28.238281 68.730469 29.28125 68.921875 30.339844 C 69.113281 31.398438 69.25 32.464844 69.335938 33.539062 C 69.421875 34.609375 69.453125 35.683594 69.429688 36.761719 C 69.410156 37.835938 69.335938 38.910156 69.207031 39.976562 C 69.078125 41.046875 68.898438 42.105469 68.664062 43.152344 C 68.429688 44.203125 68.144531 45.238281 67.804688 46.261719 C 67.46875 47.28125 67.082031 48.285156 66.644531 49.265625 C 66.207031 50.25 65.722656 51.207031 65.191406 52.140625 C 64.660156 53.074219 64.082031 53.980469 63.460938 54.855469 C 62.839844 55.730469 62.175781 56.570312 61.46875 57.378906 C 60.761719 58.1875 60.015625 58.960938 59.234375 59.695312 C 58.449219 60.429688 57.632812 61.121094 56.78125 61.773438 C 55.929688 62.421875 55.046875 63.03125 54.136719 63.59375 C 53.222656 64.15625 52.285156 64.671875 51.320312 65.140625 C 50.359375 65.609375 49.371094 66.027344 48.367188 66.394531 C 47.363281 66.765625 46.339844 67.082031 45.304688 67.351562 C 44.265625 67.617188 43.21875 67.832031 42.160156 67.992188 C 41.101562 68.152344 40.039062 68.261719 38.96875 68.316406 C 37.898438 68.367188 36.832031 68.367188 35.761719 68.316406 C 34.691406 68.261719 33.628906 68.15625 32.570312 67.996094 C 31.511719 67.832031 30.464844 67.621094 29.425781 67.355469 C 28.390625 67.089844 27.367188 66.769531 26.363281 66.402344 C 25.355469 66.035156 24.371094 65.617188 23.410156 65.148438 C 22.445312 64.679688 21.507812 64.164062 20.59375 63.601562 C 19.679688 63.039062 18.796875 62.433594 17.945312 61.78125 C 17.09375 61.132812 16.277344 60.4375 15.492188 59.707031 L 13.746094 61.589844 C 14.261719 62.070312 14.789062 62.539062 15.332031 62.988281 C 15.875 63.4375 16.429688 63.871094 16.996094 64.289062 C 17.566406 64.703125 18.144531 65.101562 18.738281 65.484375 C 19.332031 65.863281 19.933594 66.226562 20.546875 66.570312 C 21.164062 66.914062 21.789062 67.238281 22.421875 67.542969 C 23.054688 67.851562 23.699219 68.136719 24.347656 68.402344 C 25 68.667969 25.660156 68.914062 26.328125 69.140625 C 26.992188 69.367188 27.664062 69.570312 28.34375 69.757812 C 29.023438 69.941406 29.707031 70.105469 30.394531 70.246094 C 31.082031 70.390625 31.777344 70.511719 32.472656 70.613281 C 33.167969 70.714844 33.867188 70.792969 34.566406 70.851562 C 35.269531 70.90625 35.96875 70.945312 36.671875 70.957031 C 37.375 70.972656 38.078125 70.96875 38.78125 70.9375 C 39.484375 70.910156 40.1875 70.859375 40.886719 70.789062 C 41.585938 70.71875 42.28125 70.625 42.976562 70.511719 C 43.671875 70.398438 44.359375 70.265625 45.046875 70.109375 C 45.730469 69.953125 46.414062 69.773438 47.085938 69.578125 C 47.761719 69.378906 48.429688 69.160156 49.09375 68.921875 C 49.753906 68.683594 50.410156 68.425781 51.054688 68.148438 C 51.703125 67.867188 52.339844 67.570312 52.96875 67.253906 C 53.59375 66.933594 54.214844 66.597656 54.820312 66.242188 C 55.429688 65.886719 56.027344 65.515625 56.609375 65.121094 C 57.195312 64.730469 57.769531 64.320312 58.328125 63.894531 C 58.890625 63.46875 59.4375 63.023438 59.96875 62.5625 C 60.503906 62.101562 61.023438 61.625 61.527344 61.132812 C 62.03125 60.640625 62.519531 60.132812 62.996094 59.613281 C 63.46875 59.089844 63.925781 58.554688 64.367188 58.003906 C 64.808594 57.453125 65.234375 56.890625 65.640625 56.3125 C 66.050781 55.738281 66.4375 55.148438 66.808594 54.550781 C 67.183594 53.949219 67.535156 53.339844 67.871094 52.71875 C 68.203125 52.097656 68.519531 51.464844 68.816406 50.824219 C 69.113281 50.183594 69.390625 49.53125 69.648438 48.875 C 69.90625 48.21875 70.140625 47.550781 70.359375 46.878906 C 70.574219 46.207031 70.769531 45.527344 70.945312 44.84375 C 71.121094 44.160156 71.277344 43.472656 71.410156 42.777344 C 71.546875 42.082031 71.660156 41.386719 71.75 40.683594 C 71.84375 39.984375 71.914062 39.28125 71.960938 38.574219 C 72.011719 37.871094 72.039062 37.164062 72.046875 36.457031 C 72.050781 35.75 72.035156 35.046875 72 34.339844 C 71.964844 33.632812 71.90625 32.929688 71.828125 32.226562 C 71.75 31.523438 71.648438 30.824219 71.527344 30.128906 C 71.40625 29.433594 71.261719 28.742188 71.101562 28.054688 C 70.9375 27.367188 70.753906 26.683594 70.546875 26.007812 C 70.34375 25.332031 70.117188 24.660156 69.875 24 C 69.628906 23.335938 69.363281 22.683594 69.078125 22.035156 C 68.792969 21.390625 68.488281 20.753906 68.167969 20.125 C 67.84375 19.496094 67.5 18.878906 67.140625 18.273438 C 66.78125 17.667969 66.402344 17.070312 66.003906 16.488281 C 65.609375 15.902344 65.195312 15.332031 64.761719 14.773438 C 64.332031 14.21875 63.882812 13.671875 63.417969 13.140625 C 62.953125 12.609375 62.472656 12.09375 61.976562 11.59375 C 61.484375 11.089844 60.972656 10.605469 60.449219 10.136719 C 59.921875 9.664062 59.382812 9.210938 58.832031 8.773438 C 58.277344 8.335938 57.714844 7.917969 57.136719 7.515625 C 56.558594 7.113281 55.96875 6.726562 55.367188 6.359375 C 54.765625 5.996094 54.152344 5.648438 53.53125 5.316406 C 52.910156 4.988281 52.277344 4.679688 51.636719 4.386719 C 50.996094 4.097656 50.34375 3.828125 49.6875 3.578125 C 49.03125 3.324219 48.367188 3.09375 47.695312 2.886719 C 47.023438 2.675781 46.347656 2.484375 45.664062 2.316406 C 44.980469 2.148438 44.292969 2 43.601562 1.875 C 42.910156 1.75 42.214844 1.644531 41.515625 1.558594 C 40.816406 1.476562 40.117188 1.414062 39.414062 1.371094 C 38.714844 1.332031 38.011719 1.3125 37.308594 1.3125 Z M 37.308594 1.3125 ",
                                                "fill-opacity": "1",
                                                "fill-rule": "nonzero"
                                            })
                                        }), (0, s.jsx)("path", {
                                            fill: "#2578eb",
                                            d: "M 18.75 34.476562 C 19.351562 34.722656 19.976562 34.847656 20.625 34.851562 C 21.324219 34.847656 21.992188 34.707031 22.636719 34.429688 C 23.277344 34.152344 23.839844 33.757812 24.320312 33.25 L 36.214844 40.007812 C 36.097656 40.429688 36.03125 40.859375 36.023438 41.300781 C 36.023438 41.636719 36.058594 41.972656 36.121094 42.304688 C 36.1875 42.636719 36.285156 42.960938 36.414062 43.273438 C 36.542969 43.585938 36.703125 43.882812 36.890625 44.164062 C 37.078125 44.449219 37.289062 44.707031 37.527344 44.949219 C 37.765625 45.1875 38.023438 45.402344 38.304688 45.589844 C 38.585938 45.777344 38.882812 45.9375 39.191406 46.066406 C 39.503906 46.195312 39.824219 46.292969 40.15625 46.359375 C 40.488281 46.425781 40.820312 46.457031 41.15625 46.457031 C 41.496094 46.457031 41.828125 46.425781 42.160156 46.359375 C 42.488281 46.292969 42.808594 46.195312 43.121094 46.066406 C 43.433594 45.9375 43.730469 45.777344 44.007812 45.589844 C 44.289062 45.402344 44.546875 45.1875 44.785156 44.949219 C 45.023438 44.707031 45.238281 44.449219 45.425781 44.164062 C 45.613281 43.882812 45.769531 43.585938 45.898438 43.273438 C 46.027344 42.960938 46.125 42.636719 46.191406 42.304688 C 46.257812 41.972656 46.289062 41.636719 46.289062 41.300781 C 46.289062 40.308594 46.023438 39.398438 45.496094 38.566406 L 54.476562 27.972656 C 54.863281 28.144531 55.261719 28.269531 55.679688 28.34375 C 56.09375 28.417969 56.511719 28.441406 56.933594 28.414062 C 57.355469 28.386719 57.765625 28.308594 58.167969 28.179688 C 58.570312 28.050781 58.953125 27.878906 59.3125 27.65625 C 59.671875 27.4375 60 27.175781 60.296875 26.875 C 60.597656 26.574219 60.851562 26.242188 61.070312 25.878906 C 61.289062 25.515625 61.457031 25.128906 61.582031 24.722656 C 61.707031 24.320312 61.78125 23.90625 61.808594 23.480469 C 61.832031 23.058594 61.804688 22.636719 61.730469 22.222656 C 61.652344 21.804688 61.527344 21.402344 61.351562 21.015625 C 61.179688 20.628906 60.960938 20.269531 60.703125 19.933594 C 60.441406 19.601562 60.144531 19.304688 59.8125 19.042969 C 59.480469 18.78125 59.125 18.5625 58.738281 18.386719 C 58.355469 18.214844 57.953125 18.089844 57.539062 18.011719 C 57.125 17.933594 56.707031 17.910156 56.285156 17.933594 C 55.863281 17.957031 55.453125 18.035156 55.046875 18.160156 C 54.644531 18.285156 54.261719 18.457031 53.902344 18.675781 C 53.539062 18.894531 53.210938 19.152344 52.910156 19.453125 C 52.609375 19.75 52.351562 20.082031 52.132812 20.441406 C 51.914062 20.804688 51.738281 21.1875 51.613281 21.59375 C 51.484375 21.996094 51.410156 22.410156 51.382812 22.835938 C 51.355469 23.257812 51.375 23.679688 51.449219 24.097656 C 51.523438 24.511719 51.648438 24.914062 51.820312 25.304688 C 51.988281 25.691406 52.203125 26.050781 52.460938 26.386719 L 43.558594 36.796875 C 42.8125 36.371094 42.015625 36.148438 41.15625 36.140625 C 40.457031 36.140625 39.789062 36.28125 39.148438 36.558594 C 38.503906 36.835938 37.945312 37.230469 37.460938 37.738281 L 25.566406 30.980469 C 25.6875 30.558594 25.75 30.128906 25.757812 29.691406 C 25.761719 29.273438 25.714844 28.863281 25.621094 28.460938 C 25.527344 28.054688 25.382812 27.667969 25.195312 27.300781 C 25.007812 26.929688 24.78125 26.585938 24.507812 26.273438 C 24.238281 25.957031 23.9375 25.679688 23.597656 25.441406 C 23.261719 25.199219 22.902344 25.003906 22.515625 24.851562 C 22.132812 24.695312 21.738281 24.59375 21.328125 24.535156 C 20.917969 24.476562 20.507812 24.472656 20.097656 24.515625 C 19.683594 24.558594 19.285156 24.648438 18.894531 24.789062 C 18.507812 24.929688 18.140625 25.113281 17.796875 25.34375 C 17.449219 25.570312 17.136719 25.839844 16.855469 26.144531 C 16.578125 26.449219 16.335938 26.78125 16.136719 27.144531 C 15.933594 27.507812 15.78125 27.890625 15.671875 28.292969 C 15.5625 28.691406 15.503906 29.101562 15.496094 29.515625 C 15.484375 29.929688 15.523438 30.339844 15.609375 30.746094 C 15.699219 31.152344 15.832031 31.542969 16.015625 31.914062 C 16.199219 32.289062 16.421875 32.632812 16.6875 32.953125 L 7.613281 45.789062 C 6.871094 45.378906 6.074219 45.171875 5.226562 45.167969 C 4.890625 45.167969 4.554688 45.203125 4.226562 45.269531 C 3.894531 45.335938 3.574219 45.433594 3.261719 45.5625 C 2.949219 45.691406 2.65625 45.851562 2.375 46.039062 C 2.09375 46.226562 1.835938 46.441406 1.597656 46.679688 C 1.359375 46.917969 1.144531 47.179688 0.957031 47.460938 C 0.769531 47.742188 0.613281 48.039062 0.484375 48.355469 C 0.355469 48.667969 0.257812 48.988281 0.191406 49.320312 C 0.125 49.652344 0.09375 49.988281 0.09375 50.328125 C 0.09375 50.667969 0.125 51.003906 0.191406 51.335938 C 0.257812 51.667969 0.355469 51.988281 0.484375 52.304688 C 0.613281 52.617188 0.769531 52.914062 0.957031 53.195312 C 1.144531 53.476562 1.359375 53.738281 1.597656 53.976562 C 1.835938 54.214844 2.09375 54.429688 2.375 54.617188 C 2.65625 54.808594 2.949219 54.964844 3.261719 55.09375 C 3.574219 55.226562 3.894531 55.324219 4.226562 55.390625 C 4.554688 55.453125 4.890625 55.488281 5.226562 55.488281 C 5.5625 55.488281 5.898438 55.453125 6.226562 55.390625 C 6.558594 55.324219 6.878906 55.226562 7.191406 55.09375 C 7.503906 54.964844 7.796875 54.808594 8.078125 54.617188 C 8.359375 54.429688 8.617188 54.214844 8.855469 53.976562 C 9.09375 53.738281 9.308594 53.476562 9.496094 53.195312 C 9.679688 52.914062 9.839844 52.617188 9.96875 52.304688 C 10.097656 51.988281 10.195312 51.667969 10.261719 51.335938 C 10.328125 51.003906 10.359375 50.667969 10.359375 50.328125 C 10.359375 49.3125 10.082031 48.378906 9.523438 47.53125 Z M 56.554688 20.660156 C 56.898438 20.660156 57.222656 20.726562 57.539062 20.855469 C 57.851562 20.988281 58.128906 21.175781 58.371094 21.417969 C 58.613281 21.660156 58.796875 21.9375 58.925781 22.253906 C 59.058594 22.570312 59.121094 22.898438 59.121094 23.242188 C 59.121094 23.582031 59.058594 23.910156 58.925781 24.226562 C 58.796875 24.542969 58.613281 24.824219 58.371094 25.066406 C 58.128906 25.308594 57.851562 25.492188 57.539062 25.625 C 57.222656 25.753906 56.898438 25.820312 56.554688 25.820312 C 56.214844 25.820312 55.886719 25.753906 55.574219 25.625 C 55.257812 25.492188 54.980469 25.308594 54.742188 25.066406 C 54.5 24.824219 54.316406 24.542969 54.183594 24.226562 C 54.054688 23.910156 53.988281 23.582031 53.988281 23.242188 C 53.988281 22.898438 54.054688 22.570312 54.183594 22.253906 C 54.316406 21.9375 54.5 21.660156 54.742188 21.417969 C 54.980469 21.175781 55.257812 20.988281 55.574219 20.855469 C 55.886719 20.726562 56.214844 20.660156 56.554688 20.660156 Z M 41.15625 38.71875 C 41.496094 38.71875 41.824219 38.785156 42.140625 38.914062 C 42.453125 39.046875 42.730469 39.234375 42.972656 39.476562 C 43.210938 39.71875 43.398438 39.996094 43.527344 40.3125 C 43.660156 40.628906 43.722656 40.957031 43.722656 41.300781 C 43.722656 41.640625 43.660156 41.96875 43.527344 42.285156 C 43.398438 42.601562 43.210938 42.882812 42.972656 43.125 C 42.730469 43.367188 42.453125 43.550781 42.140625 43.683594 C 41.824219 43.8125 41.496094 43.878906 41.15625 43.878906 C 40.816406 43.878906 40.488281 43.8125 40.175781 43.683594 C 39.859375 43.550781 39.582031 43.367188 39.34375 43.125 C 39.101562 42.882812 38.917969 42.601562 38.785156 42.285156 C 38.65625 41.96875 38.589844 41.640625 38.589844 41.300781 C 38.589844 40.957031 38.65625 40.628906 38.785156 40.3125 C 38.917969 39.996094 39.101562 39.71875 39.34375 39.476562 C 39.582031 39.234375 39.859375 39.046875 40.175781 38.914062 C 40.488281 38.785156 40.816406 38.71875 41.15625 38.71875 Z M 20.625 27.109375 C 20.964844 27.109375 21.292969 27.175781 21.609375 27.308594 C 21.921875 27.4375 22.199219 27.625 22.441406 27.867188 C 22.679688 28.109375 22.867188 28.386719 22.996094 28.703125 C 23.125 29.019531 23.191406 29.347656 23.191406 29.691406 C 23.191406 30.03125 23.125 30.363281 22.996094 30.675781 C 22.867188 30.992188 22.679688 31.273438 22.441406 31.515625 C 22.199219 31.757812 21.921875 31.941406 21.609375 32.074219 C 21.292969 32.203125 20.964844 32.269531 20.625 32.269531 C 20.285156 32.269531 19.957031 32.203125 19.644531 32.074219 C 19.328125 31.941406 19.050781 31.757812 18.8125 31.515625 C 18.570312 31.273438 18.382812 30.992188 18.253906 30.675781 C 18.125 30.363281 18.058594 30.03125 18.058594 29.691406 C 18.058594 29.347656 18.125 29.019531 18.253906 28.703125 C 18.382812 28.386719 18.570312 28.109375 18.8125 27.867188 C 19.050781 27.625 19.328125 27.4375 19.644531 27.308594 C 19.957031 27.175781 20.285156 27.109375 20.625 27.109375 Z M 5.226562 52.910156 C 4.886719 52.910156 4.558594 52.84375 4.246094 52.710938 C 3.929688 52.582031 3.652344 52.394531 3.410156 52.152344 C 3.171875 51.910156 2.984375 51.632812 2.855469 51.316406 C 2.726562 51 2.660156 50.671875 2.660156 50.328125 C 2.660156 49.988281 2.726562 49.65625 2.855469 49.339844 C 2.984375 49.023438 3.171875 48.746094 3.410156 48.503906 C 3.652344 48.261719 3.929688 48.074219 4.246094 47.945312 C 4.558594 47.8125 4.886719 47.75 5.226562 47.75 C 5.566406 47.75 5.894531 47.8125 6.207031 47.945312 C 6.523438 48.074219 6.800781 48.261719 7.042969 48.503906 C 7.28125 48.746094 7.46875 49.023438 7.597656 49.339844 C 7.726562 49.65625 7.792969 49.988281 7.792969 50.328125 C 7.792969 50.671875 7.726562 51 7.597656 51.316406 C 7.46875 51.632812 7.28125 51.910156 7.042969 52.152344 C 6.800781 52.394531 6.523438 52.582031 6.207031 52.710938 C 5.894531 52.84375 5.566406 52.910156 5.226562 52.910156 Z M 5.226562 52.910156 ",
                                            "fill-opacity": "1",
                                            "fill-rule": "nonzero"
                                        })]
                                    }), (0, s.jsxs)("label", {
                                        className: "".concat("Interop\xe9rabilit\xe9" !== e ? "hidden" : "", " justify"),
                                        children: ["Une communication sans faille entre vos divers syst\xe8mes informatiques. Gr\xe2ce \xe0 la prise en charge de multiples formats de donn\xe9es et protocoles, IBM Sterling b2b facilite l'\xe9change d'informations entre applications et environnements h\xe9t\xe9rog\xe8nes.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Optez pour notre solution EDI et b\xe9n\xe9ficiez d'une int\xe9gration transparente, d'\xe9conomies de co\xfbts significatives et d'une optimisation des processus m\xe9tier pour une collaboration r\xe9ussie avec vos partenaires.                            "]
                                    })]
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex flex-wrap justify-center items-center mt-8",
                            "data-aos": "fade-up",
                            "data-aos-duration": "900",
                            children: (0, s.jsx)("div", {
                                className: "w-full md:w-auto p-1.5",
                                children: (0, s.jsx)(c(), {
                                    href: "/contact",
                                    children: (0, s.jsxs)("button", {
                                        className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                        children: [(0, s.jsx)("div", {
                                            className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                        }), (0, s.jsx)("p", {
                                            className: "relative z-10",
                                            children: "Une question ? Contactez-nous !"
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function p() {
                let [e, a] = (0, h.useState)("Tirez"), t = e => {
                    a(e)
                };
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("section", {
                        id: "benefices-directs",
                        className: "pt-18 pb-24 bg-gradient-solution relative",
                        children: (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto ",
                            children: [(0, s.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-white font-heading text-4xl opacity-80 md:text-5xl xl:text-6xl font-semibold text-center",
                                children: ["Caract\xe9ristiques de IBM Sterling B2B", (0, s.jsx)("br", {}), "File Gateway"]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex flex-col md:flex-row items-center justify-center gap-14 mt-18 mb-12 text-white opacity-80 max-w-4xl mx-auto",
                                children: [(0, s.jsxs)("div", {
                                    className: "".concat("Tirez" !== e ? "" : "activeTabsCleoAvantages", " w-1/3 flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        t("Tirez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#FFFFFF",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 838.22 837.79",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsx)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: (0, s.jsx)("path", {
                                                    d: "M179.05,0a18.22,18.22,0,0,0-14.79,18.21V400.48H18.64A18.21,18.21,0,0,0,5.55,431.77L406,832.24a18.19,18.19,0,0,0,26.16,0L832.67,431.77a18.21,18.21,0,0,0-13.09-31.29H674V18.21A18.24,18.24,0,0,0,655.76,0H179.05Zm21.62,36.41H637.55V418.68a18.24,18.24,0,0,0,18.21,18.21H775.22L419.11,793,63,436.89H182.47a18.24,18.24,0,0,0,18.2-18.21ZM444.14,204.22c-34.35,0-62.36,11.67-84.19,35.27q-29.32,31-39.82,84.76H296.8L285.43,351h31.85a43.21,43.21,0,0,0-.56,6.25v11.95a25.26,25.26,0,0,0,.56,4.55h-19.9l-11.95,26.74H319c12.23,84.76,53.76,126.85,125.15,126.85,25.31,0,48.21-6.25,67.69-18.77V462.48c-12.22,11.38-22.25,19.28-30.15,23.33-10.8,5.54-23.53,8.53-37.54,8.53-45.72,0-72.88-31.21-82.48-93.86h95L468,373.74H359.38a25.28,25.28,0,0,1-.57-4.55V357.81a56,56,0,0,1,.57-6.82H474.29l11.38-26.74H362.23q7.45-36.27,24.45-58.59C401,247,418.9,237.79,440.73,237.79q31.89,0,62.57,30.14l19.91-36.4C497,213.18,470.66,204.22,444.14,204.22Z"
                                                })
                                            })
                                        })
                                    }), "                            ", (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "R\xe9duire les co\xfbts de fonctionnement"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Automatisez" !== e ? "" : "activeTabsCleoAvantages", " w-1/3 flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        t("Automatisez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#FFFFFF",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 939.58 809.55",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsx)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: (0, s.jsx)("path", {
                                                    d: "M422.33,180.17a22,22,0,0,1,0-44.09H647.94V22A22,22,0,0,1,686.94,8L933.54,266.3a22,22,0,0,1,0,30.29L685.88,556A22,22,0,0,1,648,540.89h0v-114H269.61a22.06,22.06,0,0,1-22-22v-81.2L52.33,528.15,247.57,732.69v-81.2a22.06,22.06,0,0,1,22-22H517.26a22,22,0,0,1,0,44.09H291.64v114h0a22,22,0,0,1-37.9,15.16L6.05,543.32a22,22,0,0,1,0-30.29L252.6,254.71a22,22,0,0,1,39,14.06v114H669.93a22,22,0,0,1,22,22v81.2L887.21,281.51,692,77v81.2a22,22,0,0,1-22,22H422.28Z"
                                                })
                                            })
                                        })
                                    }), (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Op\xe9rations B2B \xe0 haute disponibilit\xe9"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Choisissez" !== e ? "" : "activeTabsCleoAvantages", " w-1/3 flex flex-col items-center gap-6 cursor-pointer"),
                                    onMouseEnter: () => {
                                        t("Choisissez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#FFFFFF",
                                        className: "w-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 810.98 810.98",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M157.86,130.68A17.81,17.81,0,1,1,134,104.2,405.56,405.56,0,0,1,782,556.06,17.81,17.81,0,0,1,749,542.81,367.56,367.56,0,0,0,775.38,406,370.28,370.28,0,0,0,499.91,47.79,367,367,0,0,0,406,35.61a371.27,371.27,0,0,0-248.15,95.07Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M709.11,616.73a17.81,17.81,0,0,1,29.22,20.37A407.46,407.46,0,0,1,596.11,763.44,405.56,405.56,0,0,1,8.24,487.14a404.71,404.71,0,0,1,64.28-313,17.81,17.81,0,0,1,29.22,20.36A369.87,369.87,0,0,0,709.11,616.73Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M387.71,125.47a17.81,17.81,0,1,1,35.61,0V432L236.41,540.7a17.81,17.81,0,0,1-17.91-30.79l169.21-98.45Z"
                                                })]
                                            })
                                        })
                                    }), "                            ", (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "R\xe9duisez le temps d'installation et de patch"
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                children: [(0, s.jsx)("p", {
                                    className: "".concat("Tirez" !== e ? "hidden" : "", " text-center "),
                                    children: "R\xe9duisez le co\xfbt de possession pour exploiter une passerelle bas\xe9e sur la p\xe9riph\xe9rie, acc\xe9l\xe9rez le d\xe9lai de g\xe9n\xe9ration de revenus et am\xe9liorez la satisfaction de vos partenaires."
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Automatisez" !== e ? "hidden" : "", " text-center"),
                                    children: "Garantissez la haute disponibilit\xe9 et l’\xe9volutivit\xe9 des communications avec l'ensemble de vos partenaires commerciaux (clients/fournisseurs)"
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Choisissez" !== e ? "hidden" : "", " text-center"),
                                    children: "R\xe9duisez consid\xe9rablement le temps d’installation et de patch de quelques heures \xe0 quelques minutes en d\xe9ployant votre solution avec un conteneur certifi\xe9 contenant tous les composants requis"
                                })]
                            })]
                        })
                    })
                })
            }
            var C = {
                src: "/_next/static/media/echange.f93d13b0.svg",
                height: 1038,
                width: 1350
            };

            function g() {
                return (0, s.jsx)("section", {
                    id: "clearance",
                    className: "py-16 bg-slate-50",
                    children: (0, s.jsxs)("div", {
                        "data-aos": "fade-up",
                        "data-aos-duration": "800",
                        className: "container px-4 mx-auto",
                        children: [(0, s.jsx)("h2", {
                            "data-aos": "fade-down",
                            "data-aos-duration": "500",
                            className: "mb-8 mx-auto font-heading font-semibold text-center text-5xl sm:text-6xl !leading-tight text-gray-700",
                            children: "Des \xe9changes de donn\xe9es informatis\xe9s \xe0 travers une passerelle centralis\xe9e intelligente"
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col lg:flex-row mt-18 gap-12",
                            children: [(0, s.jsx)("div", {
                                className: "w-full lg:w-1/2",
                                children: (0, s.jsx)(r(), {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "800",
                                    src: C,
                                    alt: "echange ibm | Esalink"
                                })
                            }), (0, s.jsxs)("div", {
                                className: "w-full lg:w-1/2 my-auto md:px-24",
                                children: [(0, s.jsxs)("p", {
                                    className: "text-gray-600 text-lg mb-8 text-justify",
                                    children: ["D\xe9velopp\xe9 sur le noyau d’IBM Sterling\xae B2B Integrator, IBM Sterling\xae B2B File Gateway permet aux entreprises d’\xe9viter les risques et les probl\xe8mes op\xe9rationnels li\xe9s de l’utilisation de serveurs de transfert de fichier.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Contr\xf4le renforc\xe9 sur l’int\xe9gration des partenaires, en renfor\xe7ant la conformit\xe9, en acc\xe9l\xe9rant les processus gr\xe2ce \xe0 l’automatisation et en offrant une visibilit\xe9 et tra\xe7abilit\xe9 sur des centaines de processus."]
                                }), (0, s.jsx)("div", {
                                    className: "text-right mb-8",
                                    children: (0, s.jsx)(c(), {
                                        className: "inline-block group p-0.5 font-heading text-base text-gray-700 font-bold hover:bg-[#98d9eb] overflow-hidden rounded-md bg-[#98d9eb]",
                                        href: "/contact?src=ibm&name=une_question_contactez_nous",
                                        children: (0, s.jsxs)("div", {
                                            className: "relative py-2 px-6 bg-slate-50 rounded",
                                            children: [(0, s.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-[#98d9eb]"
                                            }), (0, s.jsx)("span", {
                                                className: "relative z-10",
                                                children: "Une question ? Contactez-nous!"
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
            var j = t(697),
                v = t(5753),
                b = t(6165),
                w = t(3280),
                A = t(7488);

            function N() {
                return (0, s.jsxs)("header", {
                    className: "relative bg-gradient-esalink-simple background-animate overflow-hidden",
                    children: [(0, s.jsx)(A.Z, {}), (0, s.jsxs)("div", {
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
                                                    children: "IBM Sterling\xae"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, s.jsxs)("h1", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "500",
                                        className: "mb-4 font-heading text-white text-8xl md:text-10xl font-semibold",
                                        children: ["IBM Sterling\xae ", (0, s.jsx)("label", {
                                            className: "text-3xl",
                                            children: "B2B Integrator - SBI"
                                        })]
                                    })
                                }), (0, s.jsx)("p", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "700",
                                    className: "mb-9 font-medium text-lg text-white",
                                    children: "Gateway d'Int\xe9gration B2B inter et intra-entreprises de derni\xe8re g\xe9n\xe9ration par IBM"
                                }), (0, s.jsxs)("div", {
                                    className: "flex gap-4 flex-col md:flex-row",
                                    children: [(0, s.jsx)(c(), {
                                        href: "/contact?src=ibm&name=obtenir_une_demonstration",
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
                                        href: "/contact?src=ibm&name=souscrire_service_sur_mesure",
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
                                        src: j.Z,
                                        alt: "Logo IBM Blanc Petit | Esalink",
                                        className: "w-20"
                                    })
                                }), (0, s.jsxs)("div", {
                                    "data-aos": "slide-left",
                                    "data-aos-duration": "500",
                                    className: "w-auto flex gap-4 text-white items-center",
                                    children: [(0, s.jsx)(r(), {
                                        src: v.Z,
                                        alt: "Award form | Esalink",
                                        className: "opacity-60 w-10"
                                    }), (0, s.jsxs)("p", {
                                        className: "text-sm",
                                        children: ["EsaLink partenaire certifi\xe9 de IBM", (0, s.jsx)("br", {}), "sur les solutions IBM Sterling BtoB Integrator"]
                                    })]
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)(r(), {
                                src: b.Z,
                                alt: "Globe Image | Esalink",
                                className: "absolute w-[390px] lg:w-[565px] xl:w-[658px] top-72 lg:top-40 xl:top-24 opacity-30 -right-14"
                            })
                        }), (0, s.jsx)(r(), {
                            src: w.Z,
                            alt: "Line Image | Esalink",
                            className: "absolute top-16 left-0 w-full z-0",
                            style: {
                                transform: "scaleX(-1)"
                            }
                        })]
                    })]
                })
            }

            function L() {
                let [e, a] = (0, h.useState)("Tirez"), t = e => {
                    a(e)
                };
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("section", {
                        id: "benefices-directs",
                        className: "pt-18 pb-24 bg-slate-50 relative",
                        children: (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto max-w-5xl",
                            children: [(0, s.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-esalink-blue font-heading text-4xl opacity-80 md:text-5xl xl:text-6xl font-semibold text-center",
                                children: ["Caract\xe9ristiques de IBM Sterling B2B", (0, s.jsx)("br", {}), "INTEGRATOR"]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex flex-col md:flex-row items-center justify-center gap-14 mt-18 mb-12 text-gray-400 opacity-80 max-w-4xl mx-auto",
                                children: [(0, s.jsxs)("div", {
                                    className: "".concat("Tirez" !== e ? "" : "activeTabsCleoAvantages", " w-1/3 flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        t("Tirez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#9ca3af",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 843 843",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M52,421.5C52,217.79,217.79,52,421.5,52S790.91,217.79,790.91,421.5,625.21,791,421.5,791v52C654,843,843,654,843,421.5S654,0,421.5,0,0,189.05,0,421.5H52"
                                                }), (0, s.jsx)("path", {
                                                    d: "M646.77,303.4,405.19,545,270.85,410.65l48.94-48.95,88.84,88.91L609.35,249.89q-85-83.29-189.57-83.37c-141.82,0-256.7,115-256.7,256.7S278,679.92,419.78,679.92s256.7-114.87,256.7-256.7A255.52,255.52,0,0,0,646.77,303.4"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Op\xe9rations B2B \xe0 haute disponibilit\xe9"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Automatisez" !== e ? "" : "activeTabsCleoAvantages", " w-1/3 flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        t("Automatisez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#9ca3af",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 686.92 801",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M340.14,732.27,354.21,445.6A10.1,10.1,0,0,0,344.13,435h-90.5L402.89,68.73,388.82,355.4A10.1,10.1,0,0,0,398.9,366h90.5Zm172.65-382a10.08,10.08,0,0,0-8.38-4.46h-94.9L426,10.59a10.09,10.09,0,0,0-19.43-4.3l-177.27,435a10.1,10.1,0,0,0,9.35,13.91h94.91l-16.46,335.2a10.1,10.1,0,0,0,7.9,10.35,10.34,10.34,0,0,0,2.19.24,10.09,10.09,0,0,0,9.35-6.29l177.27-435a10.1,10.1,0,0,0-1-9.44"
                                                }), (0, s.jsx)("path", {
                                                    d: "M635,227.12A316.65,316.65,0,0,0,500.84,112.79a10.1,10.1,0,1,0-8.29,18.42,295.24,295.24,0,0,1-50.83,556.05,10.1,10.1,0,0,0,2.38,19.91,10,10,0,0,0,2.41-.29A315.46,315.46,0,0,0,635,227.12"
                                                }), (0, s.jsx)("path", {
                                                    d: "M224.93,635.61H178.86L179,502.15A10.11,10.11,0,0,0,168.88,492h0a10.11,10.11,0,0,0-10.1,10.09l-.12,143.57h0c0,.08,0,.16,0,.24a2.53,2.53,0,0,0,0,.28c0,.07,0,.14,0,.22s0,.2,0,.29l0,.22c0,.1,0,.19,0,.28a1.43,1.43,0,0,0,0,.22,2.33,2.33,0,0,0,.05.28c0,.07,0,.13,0,.2a2.46,2.46,0,0,0,.07.29c0,.06,0,.12.05.19l.08.29a1.34,1.34,0,0,1,.07.18c0,.1.06.19.1.29l.06.17a2.49,2.49,0,0,1,.11.29.89.89,0,0,1,.08.17c0,.09.08.18.13.27s.06.12.08.18l.14.26.09.17c.06.09.1.17.15.25a1.4,1.4,0,0,1,.1.16l.17.25a.78.78,0,0,0,.1.15l.18.25.11.15.19.23.12.15.2.22.12.13.21.22.13.12c.07.08.15.14.22.21l.14.13.23.19.15.12.22.18.16.11.24.17.17.11.24.15.17.1.25.15.18.09.26.13a1.63,1.63,0,0,1,.19.09l.26.11a1.31,1.31,0,0,0,.21.08l.25.1.22.08.25.08.24.07.23.07.27.06.22.05.28,0,.22,0,.27,0,.23,0,.26,0,.26,0H204.9L117.51,773.92,30.13,655.81h87.43a10.1,10.1,0,1,0,0-20.2H76.46L76.3,400.5c0-133.61,90.07-250.9,219-285.24a10.1,10.1,0,0,0-5.2-19.52A315.06,315.06,0,0,0,56.1,400.5h0l.16,235.11H10.1A10.1,10.1,0,0,0,2,651.72L109.4,796.91a10.1,10.1,0,0,0,16.23,0L233.05,651.72a10.11,10.11,0,0,0-8.12-16.11"
                                                }), (0, s.jsx)("path", {
                                                    d: "M158.77,409.58v22.89a10.1,10.1,0,0,0,20.2,0V409.58a10.1,10.1,0,0,0-20.2,0"
                                                })]
                                            })
                                        })
                                    }), "                            ", (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "R\xe9duction des temps d'installation et de patch"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Choisissez" !== e ? "" : "activeTabsCleoAvantages", " w-1/3 flex flex-col items-center gap-6 cursor-pointer"),
                                    onMouseEnter: () => {
                                        t("Choisissez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#9ca3af",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 794.65 768",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M741.68,370.76h-16a61.24,61.24,0,0,0,4.61-4.05,55.41,55.41,0,0,0,4.16-4.51,58.11,58.11,0,0,0,3.69-4.9,60.92,60.92,0,0,0,3.15-5.26,57.31,57.31,0,0,0,2.6-5.56q1.15-2.85,2-5.79a58.29,58.29,0,0,0,1.4-6,59,59,0,0,0,.47-18.32A59.06,59.06,0,0,0,745,304.46a60.07,60.07,0,0,0-5.19-11.1q-1.59-2.62-3.43-5.08a59.73,59.73,0,0,0-8.32-9,60.92,60.92,0,0,0-4.81-3.81,59.55,59.55,0,0,0-5.18-3.29,58.5,58.5,0,0,0-5.49-2.74,58.9,58.9,0,0,0-11.67-3.73,59.14,59.14,0,0,0-6.06-.94,59.84,59.84,0,0,0-18.32.94,60.84,60.84,0,0,0-5.93,1.56q-2.93.95-5.75,2.17a59.57,59.57,0,0,0-5.48,2.74,58.08,58.08,0,0,0-5.18,3.29,60.92,60.92,0,0,0-4.81,3.81,57.32,57.32,0,0,0-4.4,4.28,59.63,59.63,0,0,0-7.35,9.79,59.93,59.93,0,0,0-2.89,5.42,59.26,59.26,0,0,0-2.31,5.68,60.9,60.9,0,0,0-1.71,5.89,58.35,58.35,0,0,0-1.11,6,60.16,60.16,0,0,0,.47,18.32,61.08,61.08,0,0,0,1.41,6,60.06,60.06,0,0,0,2,5.79c.78,1.9,1.64,3.75,2.6,5.56s2,3.56,3.16,5.26a60.22,60.22,0,0,0,3.68,4.9,57.39,57.39,0,0,0,4.17,4.51,61.09,61.09,0,0,0,4.6,4.05H625.6l-49.47-24.71-3.6-2.4a13,13,0,0,0,2.09-.65,13.73,13.73,0,0,0,2-1,13.3,13.3,0,0,0,1.75-1.31,11.94,11.94,0,0,0,1.52-1.58,13.1,13.1,0,0,0,1.23-1.81,11.89,11.89,0,0,0,.9-2,12.63,12.63,0,0,0,.57-2.11,12.19,12.19,0,0,0,.2-2.18V145.66a13.22,13.22,0,0,0-.25-2.59,12.69,12.69,0,0,0-.76-2.48,12.88,12.88,0,0,0-1.22-2.29,12.7,12.7,0,0,0-1.65-2,13.13,13.13,0,0,0-2-1.64,13,13,0,0,0-4.78-2,12.41,12.41,0,0,0-2.58-.26H225.15a12.41,12.41,0,0,0-2.58.26,13.48,13.48,0,0,0-2.49.75,13.66,13.66,0,0,0-2.29,1.23,13.13,13.13,0,0,0-2,1.64,12.7,12.7,0,0,0-1.65,2,12.92,12.92,0,0,0-1.23,2.29,13.38,13.38,0,0,0-.75,2.48,13.22,13.22,0,0,0-.25,2.59V331a12.19,12.19,0,0,0,.2,2.18,11.94,11.94,0,0,0,.56,2.11,12.64,12.64,0,0,0,.9,2,13.45,13.45,0,0,0,2.73,3.39A13.4,13.4,0,0,0,220,343a12.68,12.68,0,0,0,2.09.66l-3.59,2.4-49.44,24.71H143a61.09,61.09,0,0,0,4.6-4.05,57.39,57.39,0,0,0,4.17-4.51,60.22,60.22,0,0,0,3.68-4.9c1.14-1.7,2.19-3.46,3.16-5.26a59.41,59.41,0,0,0,4.61-11.35,61.08,61.08,0,0,0,1.41-6c.36-2,.63-4,.79-6.08s.2-4.08.15-6.13a59.39,59.39,0,0,0-.47-6.11,58.35,58.35,0,0,0-1.11-6,60.9,60.9,0,0,0-1.71-5.89,59.26,59.26,0,0,0-2.31-5.68,59,59,0,0,0-6.32-10.5,58.38,58.38,0,0,0-8.32-9,59.67,59.67,0,0,0-15.47-9.84,61.15,61.15,0,0,0-5.75-2.17,59.79,59.79,0,0,0-30.31-1.56,58.9,58.9,0,0,0-11.67,3.73,58.5,58.5,0,0,0-5.49,2.74,59.55,59.55,0,0,0-5.18,3.29c-1.66,1.19-3.27,2.46-4.81,3.81a57.18,57.18,0,0,0-4.39,4.28,59.05,59.05,0,0,0-3.93,4.71q-1.84,2.46-3.43,5.08a60.07,60.07,0,0,0-5.19,11.1,59.06,59.06,0,0,0-2.82,11.93,60.58,60.58,0,0,0-.32,12.24,59.11,59.11,0,0,0,.79,6.08,58.29,58.29,0,0,0,1.4,6q.87,2.94,2,5.79a59.77,59.77,0,0,0,2.6,5.56,60.92,60.92,0,0,0,3.15,5.26c1.15,1.69,2.37,3.33,3.68,4.9a59.37,59.37,0,0,0,4.17,4.51A61.24,61.24,0,0,0,69,370.76H53c-1.73,0-3.46.08-5.19.25s-3.44.43-5.14.77a51.55,51.55,0,0,0-5,1.26c-1.66.5-3.3,1.09-4.9,1.75A51.62,51.62,0,0,0,28,377q-2.3,1.23-4.46,2.67t-4.18,3.1c-1.33,1.1-2.62,2.26-3.84,3.49s-2.39,2.51-3.5,3.85a50.64,50.64,0,0,0-3.09,4.18,47.78,47.78,0,0,0-2.67,4.46A52.55,52.55,0,0,0,1,413.39a53.73,53.73,0,0,0-1,10.33V569.38A13.19,13.19,0,0,0,.25,572,12.69,12.69,0,0,0,1,574.44a13.15,13.15,0,0,0,2.87,4.3,12.8,12.8,0,0,0,2,1.65,13.14,13.14,0,0,0,2.28,1.22,13.71,13.71,0,0,0,2.49.75,12.48,12.48,0,0,0,2.58.26H39.73V754.76a13.93,13.93,0,0,0,.25,2.58,14.22,14.22,0,0,0,.76,2.48,13.15,13.15,0,0,0,2.87,4.3,14.37,14.37,0,0,0,2,1.65,13.41,13.41,0,0,0,4.78,2A13.13,13.13,0,0,0,53,768h106a13.13,13.13,0,0,0,2.58-.26,13.41,13.41,0,0,0,4.78-2,13.81,13.81,0,0,0,2-1.65,12.26,12.26,0,0,0,1.65-2,13.61,13.61,0,0,0,1.23-2.29,13.38,13.38,0,0,0,.75-2.48,13.12,13.12,0,0,0,.25-2.58V446.6L244.5,409a16.24,16.24,0,0,0,1.59-1l89.25-63.73h124L548.56,408a16.24,16.24,0,0,0,1.59,1l72.33,37.6V754.76a13.12,13.12,0,0,0,.25,2.58,13.38,13.38,0,0,0,.75,2.48,12.92,12.92,0,0,0,1.23,2.29,12.74,12.74,0,0,0,1.64,2,14.46,14.46,0,0,0,2,1.65,13.21,13.21,0,0,0,4.78,2,13.13,13.13,0,0,0,2.58.26h106a13.13,13.13,0,0,0,2.58-.26,13.38,13.38,0,0,0,2.48-.75,12.88,12.88,0,0,0,2.29-1.22,13.38,13.38,0,0,0,2-1.65,13.15,13.15,0,0,0,2.87-4.3,14.22,14.22,0,0,0,.76-2.48,13.93,13.93,0,0,0,.25-2.58V582.62h26.49a12.41,12.41,0,0,0,2.58-.26,13.41,13.41,0,0,0,4.78-2,13.19,13.19,0,0,0,2-1.65,12.26,12.26,0,0,0,1.65-2,13.61,13.61,0,0,0,1.23-2.29,13.38,13.38,0,0,0,.75-2.48,13.19,13.19,0,0,0,.25-2.58V423.72c0-1.73-.08-3.46-.25-5.19s-.43-3.44-.76-5.14a51.6,51.6,0,0,0-1.27-5c-.5-1.66-1.09-3.29-1.75-4.9s-1.41-3.16-2.22-4.69a54.48,54.48,0,0,0-5.77-8.64c-1.1-1.34-2.27-2.63-3.49-3.85a51.06,51.06,0,0,0-3.86-3.49q-2-1.65-4.17-3.1T766.65,377a51.62,51.62,0,0,0-4.7-2.22c-1.61-.66-3.24-1.25-4.9-1.75a50.85,50.85,0,0,0-5-1.26c-1.7-.34-3.42-.6-5.14-.77S743.41,370.76,741.68,370.76Zm-53-79.45a34,34,0,0,1,6.46.63c1.06.22,2.11.48,3.15.79s2.06.68,3.06,1.1,2,.88,2.94,1.39,1.88,1.07,2.78,1.67,1.77,1.25,2.61,1.93,1.64,1.42,2.41,2.19a31,31,0,0,1,2.18,2.4c.69.84,1.34,1.71,1.94,2.61s1.16,1.83,1.67,2.79,1,1.93,1.39,2.93.78,2,1.1,3.06.57,2.09.78,3.15a32.87,32.87,0,0,1,0,12.92q-.31,1.59-.78,3.15c-.32,1-.69,2.06-1.1,3.06s-.88,2-1.39,2.94-1.07,1.88-1.67,2.78-1.25,1.77-1.94,2.61-1.41,1.64-2.18,2.41-1.57,1.49-2.41,2.18-1.71,1.33-2.61,1.94-1.82,1.15-2.78,1.67-1.94,1-2.94,1.38a30.13,30.13,0,0,1-3.06,1.1,31.53,31.53,0,0,1-3.15.79,33.55,33.55,0,0,1-12.92,0,31.53,31.53,0,0,1-3.15-.79A30.13,30.13,0,0,1,676,355q-1.5-.62-2.94-1.38c-1-.52-1.89-1.07-2.79-1.67s-1.77-1.25-2.61-1.94a31,31,0,0,1-2.4-2.18c-.77-.77-1.5-1.57-2.19-2.41s-1.33-1.71-1.93-2.61S660,341,659.5,340a32.7,32.7,0,0,1-2.48-6c-.32-1-.58-2.09-.8-3.15s-.37-2.14-.48-3.21-.15-2.17-.15-3.25,0-2.17.15-3.24.27-2.15.48-3.22.48-2.11.8-3.15a31,31,0,0,1,1.09-3.06,30.11,30.11,0,0,1,1.39-2.93c.51-1,1.07-1.89,1.67-2.79s1.25-1.77,1.93-2.61a35.54,35.54,0,0,1,4.59-4.59c.84-.68,1.71-1.33,2.61-1.93s1.84-1.16,2.79-1.67,1.94-1,2.94-1.39,2-.78,3.06-1.1,2.09-.57,3.15-.79a33.79,33.79,0,0,1,6.46-.63Zm-582.75,0a32,32,0,0,1,3.25.16,31.42,31.42,0,0,1,3.21.47c1.06.22,2.12.48,3.15.79s2.06.68,3.07,1.1,2,.88,2.93,1.39,1.89,1.07,2.79,1.67,1.77,1.25,2.61,1.93a35.54,35.54,0,0,1,4.59,4.59c.68.84,1.33,1.71,1.93,2.61s1.16,1.83,1.67,2.79,1,1.93,1.39,2.93.78,2,1.1,3.06.57,2.09.79,3.15a33.55,33.55,0,0,1,0,12.92c-.22,1.06-.48,2.11-.79,3.15s-.68,2.06-1.1,3.06-.88,2-1.39,2.94-1.07,1.88-1.67,2.78-1.25,1.77-1.93,2.61-1.42,1.64-2.19,2.41A31,31,0,0,1,127,350c-.84.69-1.71,1.33-2.61,1.94s-1.83,1.15-2.79,1.67-1.93,1-2.93,1.38a31.21,31.21,0,0,1-3.07,1.1,30.86,30.86,0,0,1-3.15.79,31.42,31.42,0,0,1-3.21.47,33.65,33.65,0,0,1-9.71-.47,31.53,31.53,0,0,1-3.15-.79,30.13,30.13,0,0,1-3.06-1.1q-1.5-.62-2.94-1.38c-1-.52-1.88-1.07-2.78-1.67S85.79,350.69,85,350s-1.64-1.41-2.41-2.18-1.49-1.57-2.18-2.41S79,343.7,78.42,342.8,77.26,341,76.75,340s-1-1.94-1.39-2.94-.78-2-1.09-3.06a31.53,31.53,0,0,1-.79-3.15c-.21-1.06-.37-2.14-.48-3.21s-.16-2.17-.16-3.25.06-2.17.16-3.24.27-2.15.48-3.22a31.53,31.53,0,0,1,.79-3.15c.31-1,.68-2.06,1.09-3.06s.88-2,1.39-2.93,1.07-1.89,1.67-2.79,1.25-1.77,1.94-2.61a31,31,0,0,1,2.18-2.4c.77-.77,1.57-1.5,2.41-2.19s1.71-1.33,2.61-1.93,1.83-1.16,2.78-1.67,1.94-1,2.94-1.39,2-.78,3.06-1.1,2.09-.57,3.15-.79a34,34,0,0,1,6.46-.63Zm125.5,94.62L152.82,426.8a12.84,12.84,0,0,0-2.94,2.08,12.67,12.67,0,0,0-2.27,2.79,13.35,13.35,0,0,0-1.44,3.31,13.48,13.48,0,0,0-.49,3.57v303H119.2V556.14H92.71V741.52H66.22V437H39.73V556.14H26.48V423.72c0-.87.05-1.73.13-2.59s.22-1.72.38-2.57.39-1.7.64-2.52a23,23,0,0,1,.88-2.45,23.83,23.83,0,0,1,1.1-2.35c.41-.77.86-1.51,1.34-2.23s1-1.42,1.55-2.09,1.13-1.31,1.74-1.93,1.26-1.19,1.93-1.74,1.37-1.06,2.09-1.55,1.46-.92,2.23-1.34,1.55-.77,2.35-1.1a23,23,0,0,1,2.45-.88c.82-.25,1.67-.46,2.52-.63a26.87,26.87,0,0,1,5.16-.51h119.2a13.17,13.17,0,0,0,5.92-1.32l53-26.49a15.64,15.64,0,0,0,1.43-.83l36.35-24.32h20.93Zm152.63-121.1v53H238.4V158.9H384.08v53a13,13,0,0,0,1,5.07,13.61,13.61,0,0,0,1.22,2.29,13.19,13.19,0,0,0,1.65,2,12.26,12.26,0,0,0,2,1.65,12.88,12.88,0,0,0,2.29,1.22,12.69,12.69,0,0,0,2.48.76,13.12,13.12,0,0,0,2.58.25h26.49a12.79,12.79,0,0,1,5.14,1.06,13.17,13.17,0,0,1,8.11,12.18,13.31,13.31,0,0,1-.26,2.59,12.66,12.66,0,0,1-.75,2.48,13.23,13.23,0,0,1-1.22,2.29,14.46,14.46,0,0,1-1.65,2,13.21,13.21,0,0,1-2,1.64,12.92,12.92,0,0,1-2.29,1.23,13.38,13.38,0,0,1-2.48.75,13.22,13.22,0,0,1-2.59.25H397.32a13.13,13.13,0,0,0-2.58.26,13.38,13.38,0,0,0-2.48.75,12.92,12.92,0,0,0-2.29,1.23,12.74,12.74,0,0,0-2,1.64,13.27,13.27,0,0,0-1.65,2,12.88,12.88,0,0,0-1.22,2.29,14.22,14.22,0,0,0-.76,2.48A14,14,0,0,0,384.08,264.83Zm26.49,53V278.07h13.24c1.3,0,2.6-.06,3.9-.19a38,38,0,0,0,3.85-.58c1.28-.25,2.54-.57,3.79-.94s2.47-.82,3.67-1.32a37.67,37.67,0,0,0,3.52-1.66c1.15-.61,2.27-1.29,3.35-2s2.13-1.5,3.13-2.33,2-1.7,2.89-2.62,1.79-1.88,2.62-2.89,1.6-2.05,2.32-3.13a38.78,38.78,0,0,0,2-3.34,37.62,37.62,0,0,0,1.67-3.52,40.14,40.14,0,0,0,2.26-7.46,35.73,35.73,0,0,0,.57-3.85,36.13,36.13,0,0,0,0-7.78,35.79,35.79,0,0,0-.59-3.85,37.8,37.8,0,0,0-.95-3.77c-.38-1.25-.83-2.46-1.33-3.66s-1-2.37-1.67-3.52-1.28-2.25-2-3.33a38.93,38.93,0,0,0-2.32-3.13c-.82-1-1.7-2-2.62-2.88S450,208.53,449,207.7a37.8,37.8,0,0,0-3.13-2.32,37.15,37.15,0,0,0-3.33-2c-1.15-.62-2.32-1.18-3.52-1.68a38.89,38.89,0,0,0-3.66-1.32c-1.24-.38-2.5-.7-3.77-1a38.47,38.47,0,0,0-3.85-.59c-1.29-.13-2.59-.2-3.89-.21H410.57V158.9H556.26V317.79ZM768.16,556.14H754.92V437H728.43V741.52H701.94V556.14H675.45V741.52H649v-303a13.07,13.07,0,0,0-.48-3.57,13.35,13.35,0,0,0-1.44-3.31,13.27,13.27,0,0,0-5.21-4.87L563.2,385.93l-58.33-41.65H525.8l36.39,24.25a13.62,13.62,0,0,0,1.43.83l53,26.49a13.17,13.17,0,0,0,5.88,1.39h119.2a25,25,0,0,1,2.59.13,24.48,24.48,0,0,1,2.57.38c.85.17,1.7.38,2.52.63a23.84,23.84,0,0,1,2.45.88c.8.33,1.59.7,2.35,1.1s1.51.86,2.23,1.34,1.42,1,2.09,1.55,1.31,1.14,1.93,1.74,1.19,1.26,1.74,1.93,1.07,1.37,1.55,2.09.93,1.46,1.34,2.23.78,1.55,1.11,2.35A25.4,25.4,0,0,1,767,416a25.8,25.8,0,0,1,.64,2.52c.16.85.29,1.71.38,2.57s.12,1.72.12,2.59Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M384.08,0h26.49V53H384.08Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M453.52,70.75,491,33.3,509.71,52,472.24,89.47Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M284.94,52,303.67,33.3l37.47,37.44L322.41,89.47Z"
                                                })]
                                            })
                                        })
                                    }), "                            ", (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Connection simplifi\xe9e avec vos partenaires"
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: " text-gray-800",
                                children: [(0, s.jsx)("p", {
                                    className: "".concat("Tirez" !== e ? "hidden" : "", " text-center "),
                                    children: "Plate-forme de passerelle \xe0 haute disponibilit\xe9 con\xe7ue pour les environnements les plus exigeants avec des options de bo\xeete aux lettres globale pour la distribution g\xe9ographique et la r\xe9plication des donn\xe9es en temps r\xe9el."
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Automatisez" !== e ? "hidden" : "", " text-center"),
                                    children: "R\xe9duisez consid\xe9rablement le temps d’installation et de patch de quelques heures \xe0 quelques minutes en d\xe9ployant votre solution avec un conteneur certifi\xe9 contenant tous les composants requis pour les \xe9changes de donn\xe9es."
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Choisissez" !== e ? "hidden" : "", " text-center"),
                                    children: "Centralisez l’int\xe9gration et connectez-vous facilement \xe0 tous vos partenaires commerciaux, quelle que soit leur taille, leur g\xe9ographie ou les technologies choisies."
                                })]
                            })]
                        })
                    })
                })
            }

            function y() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("section", {
                        className: "py-12 bg-gradient-to-r from-[#d7f0ff] to-[#f1f5fa]",
                        children: (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto",
                            children: [(0, s.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-gray-700 mb-12 mx-auto font-heading font-semibold text-center text-4xl md:text-6xl !leading-tight ",
                                children: ["Les points forts d’", (0, s.jsx)("label", {
                                    className: "text-esalink-blue",
                                    children: "IBM Sterling\xae Transformation Extender"
                                })]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "600",
                                className: "text-gray-600 flex flex-col md:flex-row gap-8 mx-auto",
                                children: [(0, s.jsxs)("div", {
                                    className: "w-full md:w-1/2",
                                    children: [(0, s.jsx)("label", {
                                        className: "text-esalink-blue font-medium",
                                        children: "Transformez tout type de donn\xe9es"
                                    }), (0, s.jsx)("p", {
                                        className: "mt-2 mb-6",
                                        children: "ITX est une solution flexible et compl\xe8te bas\xe9e sur les normes de l’industrie. Dans toute votre entreprise, vous avez la possibilit\xe9 de transformer des donn\xe9es structur\xe9es ou non structur\xe9es sans \xeatre oblig\xe9 de r\xe9diger du code. "
                                    }), (0, s.jsx)("label", {
                                        className: "text-esalink-blue font-medium",
                                        children: "Am\xe9liorez le d\xe9lai de rentabilisation gr\xe2ce \xe0 une exp\xe9rience utilisateur moderne"
                                    }), (0, s.jsx)("p", {
                                        className: "mt-2 mb-6",
                                        children: "Mappage de donn\xe9es efficace depuis votre navigateur web \xe0 travers une interface utilisateur clair (UX). Mappez vos donn\xe9es plus facilement."
                                    }), (0, s.jsx)("label", {
                                        className: "text-esalink-blue font-medium",
                                        children: "Interagissez et transformez les donn\xe9es r\xe9sidant dans le cloud"
                                    }), (0, s.jsx)("p", {
                                        className: "mt-2",
                                        children: "Transformer et interagissez avec les donn\xe9es o\xf9 qu’elles se trouvent, sur site ou dans le cloud avec de nombreux adaptateurs qui prennent en charge AWS, MongoDB, HDFS et Kafka."
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "w-full md:w-1/2",
                                    children: [(0, s.jsx)("label", {
                                        className: "text-esalink-blue font-medium",
                                        children: "Des API aux normes cloud pour une vraie fluidit\xe9"
                                    }), (0, s.jsx)("p", {
                                        className: "mt-2 mb-6",
                                        children: "Une interaction efficace et structur\xe9e pour vos utilisateurs et vos syst\xe8mes avec les API REST. Connectez-vous facilement aux applications et aux syst\xe8mes de back-end. D\xe9ployez vos cartes directement depuis votre interface avec les API RESTful."
                                    }), (0, s.jsx)("label", {
                                        className: "text-esalink-blue font-medium",
                                        children: "R\xe9duisez le temps et les co\xfbts de gestion avec des conteneurs Docker"
                                    }), (0, s.jsx)("p", {
                                        className: "mt-2 mb-6",
                                        children: "D\xe9ployez ITX dans des conteneurs Docker pour r\xe9duire consid\xe9rablement le co\xfbt global de possession. Diminuez le temps d’installation et de maintenance."
                                    }), (0, s.jsx)("label", {
                                        className: "text-esalink-blue font-medium",
                                        children: "Conformit\xe9 avec les normes obligatoires avec les packs sectoriels ITX"
                                    }), (0, s.jsx)("p", {
                                        className: "mt-2",
                                        children: "Des packs prennent en charge les r\xe8glementation et normes sp\xe9cifiques aux secteurs d’activit\xe9s. Par exemple le pack Supply Chain prend en charge les normes cl\xe9s telles que l’EDIFACT et X.12."
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "900",
                                className: "flex flex-wrap justify-center items-center mt-12",
                                children: (0, s.jsx)("div", {
                                    className: "w-full md:w-auto p-1.5",
                                    children: (0, s.jsx)(c(), {
                                        href: "/contact?src=ibm&name=demander_un_devis",
                                        children: (0, s.jsxs)("button", {
                                            className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                            children: [(0, s.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                            }), (0, s.jsx)("p", {
                                                className: "relative z-10",
                                                children: "Demander un devis"
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            }

            function M() {
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
                                children: ["IBM STERLING\xae BtoB INTEGRATOR", (0, s.jsx)("br", {}), " ", (0, s.jsx)("label", {
                                    className: "text-esalink-blue",
                                    children: "SOLUTION D’INTEGRATION B2B"
                                }), " On-Premise d’IBM propos\xe9e par EsaLink"]
                            }), (0, s.jsxs)("p", {
                                className: "max-w-6xl mx-auto",
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                children: ["Depuis sa cr\xe9ation en 1995, IBM Software Group a d\xe9velopp\xe9 une gamme compl\xe8te de logiciels d’infrastructure ouverts, \xe9volutifs, interconnectables et sp\xe9cifiques \xe0 l’industrie et \xe0 la supply-chain.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "IBM est \xe9galement tr\xe8s actif dans le domaine des services informatiques et dispose d’un capital technologique et intellectuel \xe9lev\xe9 qui lui permet de g\xe9rer les besoins informatiques de toute entreprise et d’optimiser leur business.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "EsaLink vous accompagne sur une large gamme de solution IBM :"]
                            }), (0, s.jsxs)("div", {
                                className: "flex justify-center mt-12 gap-12",
                                children: [(0, s.jsxs)("div", {
                                    "data-aos": "fade-left",
                                    "data-aos-duration": "500",
                                    className: "flex flex-col items-center justify-center gap-4",
                                    children: [(0, s.jsx)("label", {
                                        className: "font-medium",
                                        children: "Sterling B2B Integrator - SBI"
                                    }), (0, s.jsx)("a", {
                                        href: "#ibm1",
                                        className: "border-4 border-esalink-blue hover:opacity-100 opacity-30 text-xl font-medium text-esalink-blue rounded-full w-20 h-20 p-10 flex items-center justify-center",
                                        children: "1"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    "data-aos": "fade-left",
                                    "data-aos-duration": "600",
                                    className: "flex flex-col items-center justify-center gap-4",
                                    children: [(0, s.jsx)("label", {
                                        className: "font-medium",
                                        children: "File Gateway"
                                    }), (0, s.jsx)("a", {
                                        href: "#ibm2",
                                        className: "border-4 border-esalink-blue hover:opacity-100 opacity-30 text-xl font-medium text-esalink-blue rounded-full w-20 h-20 p-10 flex items-center justify-center",
                                        children: "2"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    "data-aos": "fade-left",
                                    "data-aos-duration": "700",
                                    className: "flex flex-col items-center justify-center gap-4",
                                    children: [(0, s.jsx)("label", {
                                        className: "font-medium",
                                        children: "Transfert de fichier s\xe9curis\xe9"
                                    }), (0, s.jsx)("a", {
                                        href: "#ibm3",
                                        className: "border-4 border-esalink-blue hover:opacity-100 opacity-30 text-xl font-medium text-esalink-blue rounded-full w-20 h-20 p-10 flex items-center justify-center",
                                        children: "3"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    "data-aos": "fade-left",
                                    "data-aos-duration": "800",
                                    className: "flex flex-col items-center justify-center gap-4",
                                    children: [(0, s.jsx)("label", {
                                        className: "font-medium",
                                        children: "Transformation Extender"
                                    }), (0, s.jsx)("a", {
                                        href: "#ibm4",
                                        className: "border-4 border-esalink-blue hover:opacity-100 opacity-30 text-xl font-medium text-esalink-blue rounded-full w-20 h-20 p-10 flex items-center justify-center",
                                        children: "4"
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "900",
                                className: "flex flex-wrap justify-center items-center mt-12 aos-init",
                                children: (0, s.jsx)("div", {
                                    className: "w-full md:w-auto p-1.5",
                                    children: (0, s.jsx)(c(), {
                                        href: "/contact?src=ibm&name=initier_un_projet",
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

            function k() {
                let [e, a] = (0, h.useState)("Tirez"), t = e => {
                    a(e)
                };
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("section", {
                        id: "benefices-directs",
                        className: "pt-18 pb-24 bg-slate-50 relative",
                        children: (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto",
                            children: [(0, s.jsx)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-esalink-blue font-heading text-4xl xl:max-w-4xl mx-auto opacity-80 md:text-5xl xl:text-6xl font-semibold text-center",
                                children: "Caract\xe9ristiques du Transfert de fichiers S\xe9curis\xe9 IBM Sterling"
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex flex-col md:flex-row items-center justify-center gap-12 md:gap-4 mt-18 mb-12 text-gray-400 max-w-6xl mx-auto",
                                children: [(0, s.jsxs)("div", {
                                    className: "".concat("Tirez" !== e ? "" : "activeTabsIBMSecure", " w-1/4 flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        t("Tirez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#9ca3af",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 647.05 924.34",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M589.86,840.93a26.41,26.41,0,0,1-26.28,26.22H83.44a26.38,26.38,0,0,1-26.25-26.22V456.56a26.39,26.39,0,0,1,26.25-26.22H563.58a26.41,26.41,0,0,1,26.28,26.22Zm-410-733.22a171.84,171.84,0,0,1,122-50.52h43.4a172.47,172.47,0,0,1,172.49,172.5V373.15H129.34V229.69A171.88,171.88,0,0,1,179.86,107.71ZM574.91,374V229.69C574.89,102.82,472.09,0,345.23,0h-43.4C175,0,72.17,102.82,72.16,229.69V374A83.5,83.5,0,0,0,0,456.56V840.93a83.53,83.53,0,0,0,83.44,83.41H563.58a83.58,83.58,0,0,0,83.47-83.41V456.56A83.55,83.55,0,0,0,574.91,374"
                                                }), (0, s.jsx)("path", {
                                                    d: "M380.71,596.32a57.19,57.19,0,1,0-80.43,52.16l-40.8,109.87H387.57l-40.8-109.87a57.15,57.15,0,0,0,33.94-52.16"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Prot\xe9gez vos donn\xe9es"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Automatisez" !== e ? "" : "activeTabsIBMSecure", " w-1/4 flex flex-col items-center gap-4 cursor-pointer"),
                                    onMouseEnter: () => {
                                        t("Automatisez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#9ca3af",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 839.81 839.8",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M774.76,332.29h-18a23.13,23.13,0,0,1-21.88-15.83,315.23,315.23,0,0,0-19.14-45.9,23.19,23.19,0,0,1,4.3-27L733,230.71a65.57,65.57,0,0,0,0-92.4L701.3,107.05a65.57,65.57,0,0,0-92.4,0L596,119.94a23.21,23.21,0,0,1-26.77,4.3,339.05,339.05,0,0,0-45.9-19.14,22.87,22.87,0,0,1-15.82-21.88v-18A65.37,65.37,0,0,0,442.27,0H397.93a65.36,65.36,0,0,0-65.25,65.24v18a23.13,23.13,0,0,1-15.83,21.88A315.23,315.23,0,0,0,271,124.24a23.19,23.19,0,0,1-27-4.3L231.1,107.05a65.57,65.57,0,0,0-92.4,0L107.24,138.5a65.57,65.57,0,0,0,0,92.4l12.9,12.9a23.15,23.15,0,0,1,4.3,26.76,340.38,340.38,0,0,0-19.15,45.9,22.85,22.85,0,0,1-21.87,15.83h-18A65.44,65.44,0,0,0,0,397.73v44.34a65.36,65.36,0,0,0,65.24,65.25h18a23.13,23.13,0,0,1,21.88,15.82,317.11,317.11,0,0,0,19.14,45.91,23.19,23.19,0,0,1-4.3,27L107.05,608.9a65.57,65.57,0,0,0,0,92.4l31.65,31.26a65.57,65.57,0,0,0,92.4,0L244,719.67a23.21,23.21,0,0,1,26.77-4.31,339.1,339.1,0,0,0,45.9,19.15,22.87,22.87,0,0,1,15.82,21.88v18.17a65.37,65.37,0,0,0,65.25,65.24h44.34a65.36,65.36,0,0,0,65.25-65.24V756.39a23.13,23.13,0,0,1,15.83-21.88,316.38,316.38,0,0,0,45.9-19.15,23.2,23.2,0,0,1,27,4.31l12.89,12.89a65.57,65.57,0,0,0,92.4,0l31.46-31.46a65.55,65.55,0,0,0,0-92.39l-12.9-12.9a23.15,23.15,0,0,1-4.3-26.76,340,340,0,0,0,19.15-45.91,22.86,22.86,0,0,1,21.88-15.82h18a65.36,65.36,0,0,0,65.25-65.25V397.73A65.12,65.12,0,0,0,774.76,332.29ZM798,441.88a23.31,23.31,0,0,1-23.24,23.25h-18a64.86,64.86,0,0,0-61.73,44.73,297.42,297.42,0,0,1-16.6,40,65.33,65.33,0,0,0,11.91,75.6l12.9,12.89a23.23,23.23,0,0,1,0,33l-31.45,31.45a23.4,23.4,0,0,1-33,0L625.9,690a64.92,64.92,0,0,0-75.6-11.91,288.25,288.25,0,0,1-40,16.6,64.86,64.86,0,0,0-44.73,61.73v18.17a23.3,23.3,0,0,1-23.25,23.24H397.93a23.29,23.29,0,0,1-23.25-23.24V756.39a64.86,64.86,0,0,0-44.74-61.73,298.6,298.6,0,0,1-40-16.6,66,66,0,0,0-29.5-7,65,65,0,0,0-45.91,19.15L201.6,703.06a23.4,23.4,0,0,1-33,0l-31.45-31.45a23.22,23.22,0,0,1,0-33L150,625.7a64.92,64.92,0,0,0,11.91-75.6,288.12,288.12,0,0,1-16.6-40,64.86,64.86,0,0,0-61.73-44.74h-18a23.3,23.3,0,0,1-23.25-23.25V397.73a23.31,23.31,0,0,1,23.25-23.25h18a64.86,64.86,0,0,0,61.73-44.73,298.19,298.19,0,0,1,16.6-40.05A65.33,65.33,0,0,0,150,214.1l-12.89-12.89a23.22,23.22,0,0,1,0-33l31.45-31.45a23.23,23.23,0,0,1,33,0l12.89,12.9a65,65,0,0,0,75.6,11.91A287,287,0,0,1,330.14,145a64.87,64.87,0,0,0,44.74-61.73v-18A23.29,23.29,0,0,1,398.12,42h44.34a23.3,23.3,0,0,1,23.25,23.24v18A64.86,64.86,0,0,0,510.45,145a297.3,297.3,0,0,1,40,16.6,65.33,65.33,0,0,0,75.6-11.91L639,136.74a23.24,23.24,0,0,1,33,0l31.45,31.45a23.22,23.22,0,0,1,0,33L690.56,214.1a64.94,64.94,0,0,0-11.92,75.6,285.83,285.83,0,0,1,16.6,40.05A64.88,64.88,0,0,0,757,374.48h18a23.31,23.31,0,0,1,23.25,23.25v44.15Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M420,199.26c-121.51,0-220.55,98.84-220.55,220.54s99,220.55,220.55,220.55,220.55-99,220.55-220.55S541.51,199.26,420,199.26Zm0,399.09c-98.45,0-178.55-80.09-178.55-178.55S321.55,241.26,420,241.26,598.55,321.35,598.55,419.8,518.46,598.35,420,598.35Z"
                                                })]
                                            })
                                        })
                                    }), "                            ", (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Att\xe9nuer les risques de mani\xe8re proactive"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Choisissez" !== e ? "" : "activeTabsIBMSecure", " w-1/4 flex flex-col items-center gap-6 cursor-pointer"),
                                    onMouseEnter: () => {
                                        t("Choisissez")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#9ca3af",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 945.57 642.97",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M628.44,274.76V119.21a16.21,16.21,0,0,0-.3-3,15.63,15.63,0,0,0-.89-2.92,15.11,15.11,0,0,0-1.44-2.69,15.65,15.65,0,0,0-1.93-2.36,15.32,15.32,0,0,0-5-3.37,15.86,15.86,0,0,0-2.92-.89,15.51,15.51,0,0,0-3-.3h-358V15.46a15.35,15.35,0,0,0-.64-4.31,15.47,15.47,0,0,0-4.64-7.27A15.59,15.59,0,0,0,237.44.11a16.07,16.07,0,0,0-4.21,1.12,15.9,15.9,0,0,0-3.73,2.25L5.82,184.85c-.45.37-.88.75-1.29,1.16a14.18,14.18,0,0,0-1.15,1.31,13,13,0,0,0-1,1.42,15,15,0,0,0-.84,1.52,15.94,15.94,0,0,0-1.14,3.28,14.2,14.2,0,0,0-.29,1.71A14.5,14.5,0,0,0,0,197a14.22,14.22,0,0,0,.1,1.73,14.36,14.36,0,0,0,.29,1.72,16.67,16.67,0,0,0,.48,1.67,16,16,0,0,0,.66,1.61,15,15,0,0,0,.84,1.52,14.06,14.06,0,0,0,1,1.42A14.07,14.07,0,0,0,4.53,208a15.71,15.71,0,0,0,1.29,1.16L230,390.5a15.7,15.7,0,0,0,9.81,3.58,16.81,16.81,0,0,0,6.69-1.56,15.51,15.51,0,0,0,3.64-2.4,15.58,15.58,0,0,0,4.61-7.29,14.93,14.93,0,0,0,.62-4.31v-88.2H612.87a15.51,15.51,0,0,0,3-.3,15.83,15.83,0,0,0,2.92-.88,15.56,15.56,0,0,0,5-3.38,15.09,15.09,0,0,0,1.93-2.35,15.46,15.46,0,0,0,1.44-2.69,15.86,15.86,0,0,0,.89-2.92A16.23,16.23,0,0,0,628.44,274.76Zm-31.13-15.55h-358a15.41,15.41,0,0,0-3,.3,15.6,15.6,0,0,0-2.92.88,15.78,15.78,0,0,0-2.69,1.44,16.28,16.28,0,0,0-2.36,1.93,15.56,15.56,0,0,0-3.38,5.05,15.09,15.09,0,0,0-.88,2.92,15.41,15.41,0,0,0-.3,3v71.09L39.91,197,223.74,48.12v71.09a15.41,15.41,0,0,0,.3,3,15,15,0,0,0,.88,2.93,15.38,15.38,0,0,0,1.44,2.68,15.66,15.66,0,0,0,7,5.73,15.63,15.63,0,0,0,2.92.89,15.4,15.4,0,0,0,3,.29h358Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M939.74,433.74,716.07,252.36a15.65,15.65,0,0,0-7.94-3.36,15.92,15.92,0,0,0-4.36.09,15.57,15.57,0,0,0-4.16,1.29,16,16,0,0,0-3.64,2.39,15.74,15.74,0,0,0-2.83,3.31,15.44,15.44,0,0,0-1.81,4,15.64,15.64,0,0,0-.63,4.3v88.21h-358a15.4,15.4,0,0,0-3,.29,15.63,15.63,0,0,0-2.92.89,15.46,15.46,0,0,0-2.69,1.44,15.28,15.28,0,0,0-4.29,4.29,16.13,16.13,0,0,0-1.45,2.68,15.7,15.7,0,0,0-.88,2.93,15.41,15.41,0,0,0-.3,3V523.65a15.44,15.44,0,0,0,.3,3,15.6,15.6,0,0,0,.88,2.92,16.22,16.22,0,0,0,1.45,2.69,15.46,15.46,0,0,0,1.93,2.35,15.13,15.13,0,0,0,2.36,1.94,16.12,16.12,0,0,0,2.69,1.43,14.92,14.92,0,0,0,2.92.89,15.41,15.41,0,0,0,3,.3h358v88.2a15.38,15.38,0,0,0,.62,4.31,15.6,15.6,0,0,0,1.79,4,15.22,15.22,0,0,0,2.83,3.31,15,15,0,0,0,3.63,2.41,16.64,16.64,0,0,0,6.69,1.56,15.7,15.7,0,0,0,9.81-3.58L939.74,458c.45-.37.89-.75,1.3-1.16s.79-.85,1.15-1.3a16.78,16.78,0,0,0,1.85-2.94,16,16,0,0,0,.66-1.61,15.75,15.75,0,0,0,.87-5.12,16.91,16.91,0,0,0-.1-1.74,16.5,16.5,0,0,0-.29-1.71,16.85,16.85,0,0,0-.48-1.68,15.84,15.84,0,0,0-.66-1.6,15.25,15.25,0,0,0-.85-1.53,13.83,13.83,0,0,0-1-1.41c-.36-.46-.75-.89-1.15-1.31S940.19,434.11,939.74,433.74Zm-217.91,161V523.65a15.41,15.41,0,0,0-.3-3,15.63,15.63,0,0,0-.89-2.92A15.46,15.46,0,0,0,719.2,515a16,16,0,0,0-1.93-2.36,15.65,15.65,0,0,0-2.36-1.93,15.42,15.42,0,0,0-2.69-1.43,14.92,14.92,0,0,0-2.92-.89,15.51,15.51,0,0,0-3-.3h-358V383.65h358a15.5,15.5,0,0,0,3-.29,16.41,16.41,0,0,0,2.92-.89,16.12,16.12,0,0,0,2.69-1.43,15.72,15.72,0,0,0,2.36-1.94,15.58,15.58,0,0,0,4.56-11V297L905.65,445.88Z"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "\xc9liminez la complexit\xe9"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "".concat("Vente" !== e ? "" : "activeTabsIBMSecure", " w-1/4 flex flex-col items-center gap-6 cursor-pointer"),
                                    onMouseEnter: () => {
                                        t("Vente")
                                    },
                                    children: [(0, s.jsx)("svg", {
                                        fill: "#9ca3af",
                                        className: "h-26",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 855.81 684.49",
                                        children: (0, s.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, s.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, s.jsx)("path", {
                                                    d: "M188.54,526.13a1.78,1.78,0,0,0-.3-1,1.75,1.75,0,0,0-.81-.66,1.81,1.81,0,0,0-2,.39L77.76,632.62a1.75,1.75,0,0,0-.53,1.27v46.77a3.88,3.88,0,0,0,.29,1.46,3.86,3.86,0,0,0,3.54,2.37H184.72a4,4,0,0,0,2.72-1.12,3.86,3.86,0,0,0,1.12-2.72Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M496.11,535.59a1.78,1.78,0,0,0-.3-1,1.88,1.88,0,0,0-.81-.67,1.86,1.86,0,0,0-1-.1,1.76,1.76,0,0,0-.92.49L425.36,602a1.74,1.74,0,0,1-.58.39,1.79,1.79,0,0,1-2-.39l-35-35a1.69,1.69,0,0,0-.92-.49,1.73,1.73,0,0,0-1,.1,1.83,1.83,0,0,0-.82.66,1.89,1.89,0,0,0-.3,1l0,112.34a3.69,3.69,0,0,0,.29,1.46,3.74,3.74,0,0,0,.83,1.25,3.68,3.68,0,0,0,1.24.82,3.72,3.72,0,0,0,1.47.3H492.29a3.72,3.72,0,0,0,1.47-.3,3.68,3.68,0,0,0,1.24-.82,3.92,3.92,0,0,0,1.13-2.72Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M342.33,522.25a1.73,1.73,0,0,0-.53-1.27l-72.13-72.15a5.53,5.53,0,0,0-.88-.72,6.43,6.43,0,0,0-1-.54,6,6,0,0,0-1.09-.33,6.18,6.18,0,0,0-1.13-.11,6.29,6.29,0,0,0-1.14.11,6.2,6.2,0,0,0-1.09.33,6.43,6.43,0,0,0-1,.54,6,6,0,0,0-.88.72l-29.92,29.94a1.73,1.73,0,0,0-.53,1.28V680.66a3.88,3.88,0,0,0,.29,1.46,3.93,3.93,0,0,0,.84,1.25,3.92,3.92,0,0,0,2.7,1.12H338.51a3.63,3.63,0,0,0,1.46-.3,3.72,3.72,0,0,0,1.25-.82,3.86,3.86,0,0,0,1.12-2.72Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M649.89,381.75a1.78,1.78,0,0,0-.3-1,1.8,1.8,0,0,0-.81-.66,1.77,1.77,0,0,0-1-.1,1.69,1.69,0,0,0-.92.49L539.1,488.23a1.74,1.74,0,0,0-.52,1.28V680.66a3.88,3.88,0,0,0,.29,1.46,3.74,3.74,0,0,0,.83,1.25,3.68,3.68,0,0,0,1.24.82,3.72,3.72,0,0,0,1.47.3H646.07a3.86,3.86,0,0,0,3.84-3.84Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M803.67,356.59a1.8,1.8,0,0,0-.52-1.28l-61.48-61.5a6.82,6.82,0,0,0-.88-.73,6.06,6.06,0,0,0-1-.53,5.09,5.09,0,0,0-1.09-.33,5.86,5.86,0,0,0-2.26,0,5.26,5.26,0,0,0-1.09.33,6,6,0,0,0-1,.53,6.2,6.2,0,0,0-.88.73L692.88,334.4a1.73,1.73,0,0,0-.53,1.27l0,345a3.86,3.86,0,0,0,1.12,2.71,3.78,3.78,0,0,0,1.24.82,3.72,3.72,0,0,0,1.47.3H799.85a4,4,0,0,0,2.72-1.12,3.86,3.86,0,0,0,1.12-2.72Z"
                                                }), (0, s.jsx)("path", {
                                                    d: "M849.21.1,600.78,47.91a5.51,5.51,0,0,0-2.66,1.33,5.37,5.37,0,0,0-1.6,2.5,5.54,5.54,0,0,0,1.38,5.55l60.94,61L428.19,349a6.14,6.14,0,0,1-.88.72,5.64,5.64,0,0,1-1,.53,5.83,5.83,0,0,1-4.45,0,5.64,5.64,0,0,1-1-.53A6.14,6.14,0,0,1,420,349L270.86,199.85a7.3,7.3,0,0,0-1.14-.94,8,8,0,0,0-1.29-.69,7.35,7.35,0,0,0-2.87-.57,8,8,0,0,0-1.47.14,7.56,7.56,0,0,0-1.4.43,7.69,7.69,0,0,0-1.3.69,6.8,6.8,0,0,0-1.13.94L2.2,458a7.24,7.24,0,0,0-.93,1.14,7.33,7.33,0,0,0-.7,1.29,7.86,7.86,0,0,0-.42,1.41A7.16,7.16,0,0,0,0,463.3a7.26,7.26,0,0,0,.15,1.47,7.53,7.53,0,0,0,.42,1.4,7.08,7.08,0,0,0,.7,1.3,7.24,7.24,0,0,0,.93,1.14l68.12,68.12a7.17,7.17,0,0,0,1.13.93,7.08,7.08,0,0,0,1.3.7,7.4,7.4,0,0,0,1.41.42,7.14,7.14,0,0,0,1.45.15,7.26,7.26,0,0,0,1.47-.15,7.53,7.53,0,0,0,1.4-.42,7.08,7.08,0,0,0,1.3-.7,7.24,7.24,0,0,0,1.14-.93L261.46,356.12a6,6,0,0,1,.88-.72,6.43,6.43,0,0,1,1-.54,7.18,7.18,0,0,1,1.09-.33,5.91,5.91,0,0,1,2.27,0,7.18,7.18,0,0,1,1.09.33,6.43,6.43,0,0,1,1,.54,5.53,5.53,0,0,1,.88.72L418.79,505.27a7.17,7.17,0,0,0,1.13.93,7.08,7.08,0,0,0,1.3.7,6.75,6.75,0,0,0,1.41.42,7,7,0,0,0,1.46.15,7.16,7.16,0,0,0,1.46-.15,6.84,6.84,0,0,0,1.4-.42,7.08,7.08,0,0,0,1.3-.7,7.24,7.24,0,0,0,1.14-.93L737.56,197l61,61a5.54,5.54,0,0,0,5.55,1.38,5.4,5.4,0,0,0,2.51-1.6,5.53,5.53,0,0,0,1.32-2.66L855.71,6.61a5.59,5.59,0,0,0,.1-1.35,6.08,6.08,0,0,0-.24-1.34A5.64,5.64,0,0,0,855,2.69a5.32,5.32,0,0,0-.83-1.06,6,6,0,0,0-1.06-.84,5.9,5.9,0,0,0-1.24-.54A5.1,5.1,0,0,0,850.56,0,5.55,5.55,0,0,0,849.21.1Z"
                                                })]
                                            })
                                        })
                                    }), (0, s.jsx)("label", {
                                        className: "text-center",
                                        children: "Haute performance"
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "max-w-7xl mx-auto text-gray-800",
                                children: [(0, s.jsx)("p", {
                                    className: "".concat("Tirez" !== e ? "hidden" : "", " text-center "),
                                    children: "S\xe9curisez les fichiers au repos et en transit pour se conformer aux r\xe9glementations et assurer une livraison s\xfbre."
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Automatisez" !== e ? "hidden" : "", " text-center"),
                                    children: "Surveillez l’activit\xe9 des fichiers avec une visibilit\xe9 et une gouvernance de bout en bout pour d\xe9tecter les pannes et am\xe9liorer les performances de votre SLA."
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Choisissez" !== e ? "hidden" : "", " text-center"),
                                    children: "Favorisez l’engagement et la confiance des utilisateurs avec des interfaces utilisateur accessibles et des API RESTful flexibles."
                                }), (0, s.jsx)("p", {
                                    className: "".concat("Vente" !== e ? "hidden" : "", " text-center"),
                                    children: "G\xe9rez vos charges de travail de d\xe9placement de fichiers les plus exigeantes, des gros volumes aux \xe9normes fichiers multim\xe9dias."
                                })]
                            })]
                        })
                    })
                })
            }
            var B = {
                src: "/_next/static/media/ibm.477567ee.webp",
                height: 286,
                width: 900,
                blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAq6ah8OeNjGX//8b//8z/1nJlOVheGycYAFZQOCAoAAAAkAEAnQEqCAADAAJAOCWkAALnT91gAP77wb8Wf/0bdIPkfb3IOgAAAA==",
                blurWidth: 8,
                blurHeight: 3
            };

            function z() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("section", {
                        className: "pb-24 pt-18 bg-gradient-solution relative",
                        id: "ibm1",
                        children: [(0, s.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[86px] 2xl:top-[68px] -left-[80px] z-0 border-white opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-white",
                            children: "1"
                        }), (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto h-full",
                            children: [(0, s.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "mb-12 mx-auto font-heading font-semibold uppercase text-center text-5xl sm:text-6xl !leading-tight text-white",
                                children: ["solution IBM Sterling\xae", (0, s.jsx)("br", {}), "B2B Integrator (SBI)"]
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex flex-col md:flex-row gap-12 items-center z-20",
                                children: [(0, s.jsx)("div", {
                                    className: "w-full md:w-1/2",
                                    children: (0, s.jsx)(r(), {
                                        src: B,
                                        alt: "Logo IBM | Esalink",
                                        className: "w-full z-20 relative"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "w-full md:w-1/2 text-lg",
                                    children: ["IBM Sterling\xae B2B Integrator aide les entreprises \xe0 int\xe9grer tous leurs processus B2B et EDI complexes \xe0 travers les communaut\xe9s de partenaires dans une seule passerelle.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Il fournit une plate-forme ", (0, s.jsx)("label", {
                                        className: "text-esalink-blue",
                                        children: "flexible, disponible"
                                    }), " sur site ou via un cloud hybride, qui prend en charge la ", (0, s.jsx)("label", {
                                        className: "text-esalink-blue",
                                        children: "transformation des donn\xe9es"
                                    }), " avec les plus hauts standards et la plupart des protocoles de communication ; s\xe9curise votre r\xe9seau et vos donn\xe9es B2B et fournit un ", (0, s.jsx)("label", {
                                        className: "text-esalink-blue",
                                        children: "support de conteneur certifi\xe9"
                                    }), "."]
                                })]
                            })]
                        })]
                    })
                })
            }

            function S() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("section", {
                        className: "pb-24 pt-18 bg-white relative",
                        id: "ibm2",
                        children: [(0, s.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[78px] 2xl:top-[68px] -right-[80px] z-0 border-[#b3c9e7] opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-[#b3c9e7]",
                            children: "2"
                        }), (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto h-full",
                            children: [(0, s.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "mb-12 mx-auto font-heading font-semibold uppercase text-center text-5xl sm:text-6xl !leading-tight text-esalink-blue",
                                children: ["solution IBM Sterling\xae", (0, s.jsx)("br", {}), "File gateway"]
                            }), (0, s.jsx)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "max-w-5xl mx-auto",
                                children: (0, s.jsxs)("div", {
                                    className: "w-full text-lg",
                                    children: ["IBM Sterling File Gateway permet aux entreprises de consolider tous les transferts de fichiers informatiques bas\xe9s sur Internet sur une ", (0, s.jsx)("label", {
                                        className: "text-esalink-blue",
                                        children: "passerelle de p\xe9riph\xe9rie unique, \xe9volutive, s\xe9curis\xe9e et toujours active."
                                    }), (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "L’offre dispose des capacit\xe9s n\xe9cessaires pour surveiller, administrer, acheminer et transformer de mani\xe8re intelligente des ", (0, s.jsx)("label", {
                                        className: "text-esalink-blue",
                                        children: "volumes \xe9lev\xe9s"
                                    }), " de fichiers entrants et sortants.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Les entreprises qui d\xe9ploient File Gateway sont habilit\xe9es \xe0 r\xe9duire les co\xfbts de gestion des transferts de fichiers, \xe0 acc\xe9l\xe9rer la g\xe9n\xe9ration de revenus et \xe0 am\xe9liorer la satisfaction des partenaires commerciaux."]
                                })
                            })]
                        })]
                    })
                })
            }

            function q() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("section", {
                        className: "pb-24 pt-18 bg-slate-50 relative",
                        id: "ibm4",
                        children: [(0, s.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[78px] 2xl:top-[68px] -right-[80px] z-0 border-[#b3c9e7] opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-[#b3c9e7]",
                            children: "4"
                        }), (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto h-full",
                            children: [(0, s.jsxs)("h2", {
                                className: "mb-12 mx-auto font-heading font-semibold uppercase text-center text-5xl sm:text-6xl !leading-tight text-esalink-blue",
                                children: ["solution IBM Sterling\xae", (0, s.jsx)("br", {}), "Transformation Extender"]
                            }), (0, s.jsx)("div", {
                                className: "max-w-5xl mx-auto",
                                children: (0, s.jsxs)("div", {
                                    className: "w-full text-lg",
                                    children: ["IBM Sterling Transformation Extender permet \xe0 votre organisation d’int\xe9grer facilement les transactions m\xe9tier de vos clients, fournisseurs et partenaires commerciaux au sein de votre \xe9cosyst\xe8me.", (0, s.jsx)("br", {}), "Cette extension vous permet d’automatiser les transformations complexes et la validation des donn\xe9es entre les diff\xe9rentes gammes de formats et normes. Les donn\xe9es peuvent \xeatre transform\xe9es directement sur site ou dans le cloud.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "Un support de transformation avanc\xe9e suppl\xe9mentaire fournit des m\xe9tadonn\xe9es pour la cartographie, la v\xe9rification de la conformit\xe9 et les fonctions de traitement sp\xe9cifique \xe0 votre secteur finances, sant\xe9, supply chain et autres."]
                                })
                            })]
                        })]
                    })
                })
            }

            function I() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("section", {
                        className: "pb-24 pt-18 bg-gradient-solution relative",
                        id: "ibm3",
                        children: [(0, s.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[44px] 2xl:top-[46px] -left-[80px] z-0 border-white opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-white",
                            children: "3"
                        }), (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto h-full",
                            children: [(0, s.jsx)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "mb-12 mx-auto font-heading font-semibold uppercase text-center text-5xl sm:text-6xl !leading-tight text-white",
                                children: "Le transfert de fichiers s\xe9curis\xe9 avec IBM Sterling"
                            }), (0, s.jsx)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "max-w-5xl mx-auto text-white",
                                children: (0, s.jsxs)("div", {
                                    className: "w-full text-lg",
                                    children: ["Avec l’augmentation d’ann\xe9e en ann\xe9e du volume et de la taille des fichiers, les besoins des clients et des fournisseurs entra\xeenent plus que jamais des r\xe9seaux complexes sujets \xe0 des menaces de cybers\xe9curit\xe9.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "IBM Sterling\xae Secure File Transfer fournit une plate-forme de transfert de fichiers unifi\xe9e qui vous permet de partager et de suivre les mouvements d’informations critiques au sein de votre entreprise et \xe0 travers votre r\xe9seau de partenaires commerciaux en toute tranquillit\xe9.", (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), "B\xe9n\xe9ficiez d’une des solutions de transfert de fichiers g\xe9r\xe9 les plus fiables."]
                                })
                            })]
                        })]
                    })
                })
            }

            function E() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("section", {
                        className: "py-12 bg-gradient-to-r from-[#81D9E6] to-[#B49AF2]",
                        children: (0, s.jsxs)("div", {
                            className: "container px-4 mx-auto text-white max-w-6xl",
                            children: [(0, s.jsx)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "mb-12 mx-auto font-heading font-semibold text-center text-4xl md:text-6xl !leading-tight ",
                                children: "Les Avantages du Transfert de fichiers s\xe9curis\xe9 IBM Sterling"
                            }), (0, s.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "900",
                                className: "flex flex-col md:flex-row justify-between gap-4 ",
                                children: [(0, s.jsxs)("ul", {
                                    className: "checkul",
                                    children: [(0, s.jsx)("li", {
                                        children: "Plateforme de transfert de fichiers consolid\xe9e de niveau entreprise"
                                    }), (0, s.jsx)("li", {
                                        children: "Visibilit\xe9 et gouvernance de bout en bout"
                                    }), (0, s.jsx)("li", {
                                        children: "Transfert de fichiers \xe9volutif"
                                    })]
                                }), (0, s.jsxs)("ul", {
                                    className: "checkul",
                                    children: [(0, s.jsx)("li", {
                                        children: "Capacit\xe9s de s\xe9curit\xe9 avanc\xe9es"
                                    }), (0, s.jsx)("li", {
                                        children: "Architecture hautement disponible"
                                    }), (0, s.jsx)("li", {
                                        children: "Transferts de fichiers fiables et automatis\xe9s"
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "900",
                                className: "flex flex-wrap justify-center items-center mt-12",
                                children: (0, s.jsx)("div", {
                                    className: "w-full md:w-auto p-1.5",
                                    children: (0, s.jsx)(c(), {
                                        href: "/contact?src=ibm&name=une_question_contactez_nous_2",
                                        children: (0, s.jsxs)("button", {
                                            className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                            children: [(0, s.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                            }), (0, s.jsx)("p", {
                                                className: "relative z-10",
                                                children: "Une question ? Contactez-nous!"
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            }
            var T = t(1163);

            function Z() {
                let e = "Solution EDI - IBM Sterling\xae B2B Integrator - SBI | ESALINK",
                    a = "Partenaire certifi\xe9, EsaLink vous accompagne sur la Solution EDI IBM Sterling\xae, gage de performance dans l'int\xe9gration B2B. Faites le choix de la fiabilit\xe9 EDI.",
                    {
                        asPath: t
                    } = (0, T.useRouter)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(l(), {
                        children: [(0, s.jsx)("title", {
                            children: e
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: a
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
                            content: "https://www.esalink.com".concat(t)
                        }), (0, s.jsx)("meta", {
                            name: "image",
                            property: "og:image",
                            content: "https://www.esalink.com/images/esalink_linkedin.jpg"
                        }), (0, s.jsx)("meta", {
                            name: "twitter:description",
                            content: a
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
                            href: "https://www.esalink.com".concat(t)
                        }, "canonical")]
                    }), (0, s.jsx)(N, {}), (0, s.jsxs)("main", {
                        id: "beginMain",
                        children: [(0, s.jsx)(M, {}), (0, s.jsx)(z, {}), (0, s.jsx)(L, {}), (0, s.jsx)(f, {}), (0, s.jsx)(S, {}), (0, s.jsx)(p, {}), (0, s.jsx)(g, {}), (0, s.jsx)(I, {}), (0, s.jsx)(k, {}), (0, s.jsx)(E, {}), (0, s.jsx)(q, {}), (0, s.jsx)(y, {}), (0, s.jsx)(m, {})]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [488, 774, 888, 179], function() {
            return e(e.s = 2742)
        }), _N_E = e.O()
    }
]);