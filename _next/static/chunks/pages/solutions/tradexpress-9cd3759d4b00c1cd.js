(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [207], {
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
                for (var t = {}, l = e.split(";"), i = (a || {}).decode || s, r = 0; r < l.length; r++) {
                    var n = l[r],
                        c = n.indexOf("=");
                    if (!(c < 0)) {
                        var d = n.substring(0, c).trim();
                        if (void 0 == t[d]) {
                            var o = n.substring(c + 1, n.length).trim();
                            '"' === o[0] && (o = o.slice(1, -1)), t[d] = function(e, a) {
                                try {
                                    return a(e)
                                } catch (s) {
                                    return e
                                }
                            }(o, i)
                        }
                    }
                }
                return t
            }, a.serialize = function(e, a, s) {
                var i = s || {},
                    r = i.encode || t;
                if ("function" != typeof r) throw TypeError("option encode is invalid");
                if (!l.test(e)) throw TypeError("argument name is invalid");
                var n = r(a);
                if (n && !l.test(n)) throw TypeError("argument val is invalid");
                var c = e + "=" + n;
                if (null != i.maxAge) {
                    var d = i.maxAge - 0;
                    if (isNaN(d) || !isFinite(d)) throw TypeError("option maxAge is invalid");
                    c += "; Max-Age=" + Math.floor(d)
                }
                if (i.domain) {
                    if (!l.test(i.domain)) throw TypeError("option domain is invalid");
                    c += "; Domain=" + i.domain
                }
                if (i.path) {
                    if (!l.test(i.path)) throw TypeError("option path is invalid");
                    c += "; Path=" + i.path
                }
                if (i.expires) {
                    if ("function" != typeof i.expires.toUTCString) throw TypeError("option expires is invalid");
                    c += "; Expires=" + i.expires.toUTCString()
                }
                if (i.httpOnly && (c += "; HttpOnly"), i.secure && (c += "; Secure"), i.sameSite) switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                    case !0:
                    case "strict":
                        c += "; SameSite=Strict";
                        break;
                    case "lax":
                        c += "; SameSite=Lax";
                        break;
                    case "none":
                        c += "; SameSite=None";
                        break;
                    default:
                        throw TypeError("option sameSite is invalid")
                }
                return c
            };
            var s = decodeURIComponent,
                t = encodeURIComponent,
                l = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        },
        7041: function(e, a, s) {
            "use strict";
            var t = this && this.__assign || function() {
                    return (t = Object.assign || function(e) {
                        for (var a, s = 1, t = arguments.length; s < t; s++)
                            for (var l in a = arguments[s]) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                        return e
                    }).apply(this, arguments)
                },
                l = this && this.__rest || function(e, a) {
                    var s = {};
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && 0 > a.indexOf(t) && (s[t] = e[t]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var l = 0, t = Object.getOwnPropertySymbols(e); l < t.length; l++) 0 > a.indexOf(t[l]) && Object.prototype.propertyIsEnumerable.call(e, t[l]) && (s[t[l]] = e[t[l]]);
                    return s
                };
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.checkCookies = a.hasCookie = a.removeCookies = a.deleteCookie = a.setCookies = a.setCookie = a.getCookie = a.getCookies = void 0;
            var i = s(6489),
                r = function() {
                    return "undefined" != typeof window
                },
                n = function(e) {
                    void 0 === e && (e = "");
                    try {
                        var a = JSON.stringify(e);
                        return /^[\{\[]/.test(a) ? a : e
                    } catch (s) {
                        return e
                    }
                };
            a.getCookies = function(e) {
                if (e && (a = e.req), !r()) return a && a.cookies ? a.cookies : a && a.headers && a.headers.cookie ? (0, i.parse)(a.headers.cookie) : {};
                for (var a, s = {}, t = document.cookie ? document.cookie.split("; ") : [], l = 0, n = t.length; l < n; l++) {
                    var c = t[l].split("="),
                        d = c.slice(1).join("=");
                    s[c[0]] = d
                }
                return s
            }, a.getCookie = function(e, s) {
                var t, l = (0, a.getCookies)(s)[e];
                if (void 0 !== l) return "true" === (t = l ? l.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : l) || "false" !== t && ("undefined" !== t ? "null" === t ? null : t : void 0)
            }, a.setCookie = function(e, a, s) {
                if (s) {
                    var c, d, o, x = s.req,
                        m = s.res,
                        h = l(s, ["req", "res"]);
                    d = x, o = m, c = h
                }
                var u = (0, i.serialize)(e, n(a), t({
                    path: "/"
                }, c));
                if (r()) document.cookie = u;
                else if (o && d) {
                    var p = o.getHeader("Set-Cookie");
                    if (Array.isArray(p) || (p = p ? [String(p)] : []), o.setHeader("Set-Cookie", p.concat(u)), d && d.cookies) {
                        var f = d.cookies;
                        "" === a ? delete f[e] : f[e] = n(a)
                    }
                    if (d && d.headers && d.headers.cookie) {
                        var f = (0, i.parse)(d.headers.cookie);
                        "" === a ? delete f[e] : f[e] = n(a), d.headers.cookie = Object.entries(f).reduce(function(e, a) {
                            return e.concat("".concat(a[0], "=").concat(a[1], ";"))
                        }, "")
                    }
                }
            }, a.setCookies = function(e, s, t) {
                return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."), (0, a.setCookie)(e, s, t)
            }, a.deleteCookie = function(e, s) {
                return (0, a.setCookie)(e, "", t(t({}, s), {
                    maxAge: -1
                }))
            }, a.removeCookies = function(e, s) {
                return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."), (0, a.deleteCookie)(e, s)
            }, a.hasCookie = function(e, s) {
                return !!e && (0, a.getCookies)(s).hasOwnProperty(e)
            }, a.checkCookies = function(e, s) {
                return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."), (0, a.hasCookie)(e, s)
            }
        },
        339: function(e, a, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/solutions/tradexpress", function() {
                return s(9616)
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
        2701: function(e, a) {
            "use strict";
            a.Z = {
                src: "/_next/static/media/generix-white.e5ab8b0c.webp",
                height: 49,
                width: 187,
                blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAQUg8RUUgERdoOi41KSEPEwBWUDggGAAAADABAJ0BKggAAgACQDglpAADcAD++yGAAA==",
                blurWidth: 8,
                blurHeight: 2
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
        8479: function(e, a) {
            "use strict";
            a.Z = {
                src: "/_next/static/media/ibm_logo.e72a02da.svg",
                height: 401,
                width: 1e3
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
        9616: function(e, a, s) {
            "use strict";
            s.r(a), s.d(a, {
                default: function() {
                    return T
                }
            });
            var t = s(5893),
                l = s(9008),
                i = s.n(l),
                r = s(5675),
                n = s.n(r),
                c = s(1664),
                d = s.n(c),
                o = s(8479),
                x = s(2781),
                m = s(7994);

            function h() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("section", {
                        className: "relative py-28 overflow-hidden",
                        children: (0, t.jsx)("div", {
                            className: "container mx-auto px-4",
                            children: (0, t.jsxs)("div", {
                                className: "flex flex-wrap items-center -m-6",
                                children: [(0, t.jsx)("div", {
                                    "data-aos": "fade-left",
                                    "data-aos-duration": "500",
                                    className: "w-full lg:w-1/2 p-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "lg:max-w-2xl",
                                        children: [(0, t.jsx)("h2", {
                                            className: "mb-9 font-heading font-semibold text-gray-900 text-5xl sm:text-6xl",
                                            children: "Mais pas seulement..."
                                        }), (0, t.jsx)("ul", {
                                            className: "mb-11",
                                            children: (0, t.jsx)("li", {
                                                className: "mb-3 flex items-center font-heading font-medium text-lg text-gray-800",
                                                children: (0, t.jsx)("span", {
                                                    children: "D\xe9couvrez \xe9galement les autres Solutions EDI sur lesquelles nous vous accompagnons avec succ\xe8s."
                                                })
                                            })
                                        }), (0, t.jsx)(d(), {
                                            href: "/contact?src=tradexpress&name=nous_contacter",
                                            children: (0, t.jsxs)("button", {
                                                className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                                children: [(0, t.jsx)("div", {
                                                    className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                                }), (0, t.jsx)("p", {
                                                    className: "relative z-10",
                                                    children: "Nous contacter"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, t.jsxs)("div", {
                                    "data-aos": "fade-right",
                                    "data-aos-duration": "500",
                                    className: "w-full lg:w-1/2 p-6",
                                    children: [(0, t.jsx)("div", {
                                        className: "flex flex-wrap justify-center -mx-3 mb-6",
                                        children: (0, t.jsx)("div", {
                                            className: "w-auto px-3",
                                            children: (0, t.jsx)("div", {
                                                className: "gap-4 w-72 h-32 px-3 bg-white rounded-2xl shadow-4xl transform hover:-translate-y-3 transition ease-out duration-1000 flex items-center justify-center",
                                                children: (0, t.jsxs)(d(), {
                                                    href: "/solutions/hubtimize",
                                                    className: "gap-4 flex flex-col items-center",
                                                    children: [(0, t.jsx)(n(), {
                                                        src: m.Z,
                                                        alt: "Logo Esalink Bleu Orange | Esalink",
                                                        className: "h-12"
                                                    }), (0, t.jsx)("label", {
                                                        className: "font-semibold text-gray-600 cursor-pointer",
                                                        children: "Hubtimize\xae"
                                                    })]
                                                })
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-wrap gap-6 xl:gap-0 justify-center -mx-3 mb-6",
                                        children: [(0, t.jsx)("div", {
                                            className: "w-auto px-3",
                                            children: (0, t.jsx)("div", {
                                                className: "gap-4 w-72 h-32 bg-white rounded-2xl shadow-4xl transform hover:-translate-y-3 transition ease-out duration-1000 flex items-center justify-center",
                                                children: (0, t.jsxs)(d(), {
                                                    href: "/solutions/cleo",
                                                    className: "gap-4 flex flex-col items-center",
                                                    children: [(0, t.jsx)(n(), {
                                                        src: x.Z,
                                                        alt: "Logo Cleo | Esalink",
                                                        className: "h-12 w-auto"
                                                    }), (0, t.jsx)("label", {
                                                        className: "font-semibold text-gray-600 cursor-pointer",
                                                        children: "Cleo"
                                                    })]
                                                })
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "w-auto px-3",
                                            children: (0, t.jsx)("div", {
                                                className: "w-72 h-32 bg-white rounded-2xl shadow-4xl transform hover:-translate-y-3 transition ease-out duration-1000 flex items-center justify-center",
                                                children: (0, t.jsxs)(d(), {
                                                    href: "/solutions/ibm-sterling",
                                                    className: "gap-4 flex flex-col items-center",
                                                    children: [(0, t.jsx)(n(), {
                                                        src: o.Z,
                                                        alt: "Logo IBM | Esalink",
                                                        className: "h-12"
                                                    }), (0, t.jsx)("label", {
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

            function u() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("section", {
                        id: "benefices-directs",
                        className: "pt-18 pb-20 bg-gradient-to-r from-[#ffefc6] to-[#fed5c1] relative",
                        children: [(0, t.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[134px] 2xl:top-[149px] -right-[184px] 2xl:-right-[80px] z-0 border-white opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-white",
                            children: "2"
                        }), (0, t.jsxs)("div", {
                            className: "container px-4 mx-auto max-w-6xl text-gray-800",
                            children: [(0, t.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "font-heading text-4xl opacity-80 md:text-5xl xl:text-6xl font-semibold text-center",
                                children: ["Les Avantages de ", (0, t.jsx)("label", {
                                    className: "text-esalink-tradexpress",
                                    children: "TradeXpress\xae Infinity"
                                })]
                            }), (0, t.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex flex-col md:flex-row items-start gap-14 mt-18 mb-12 opacity-80 mx-auto",
                                children: [(0, t.jsxs)("div", {
                                    className: "w-full md:w-1/3 flex flex-col items-center gap-4 cursor-pointer",
                                    children: [(0, t.jsx)("svg", {
                                        fill: "#ff914d",
                                        className: "h-20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 999.73 999.73",
                                        children: (0, t.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, t.jsx)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: (0, t.jsx)("path", {
                                                    d: "M498.8,342.78c-86.36.44-156.38,71.44-156.12,157.8S413.77,657.14,500,657,657,586.23,657,499.87a29.39,29.39,0,0,0-58.76-1.25v1.25a98.3,98.3,0,1,1-99-98.25,29.42,29.42,0,0,0-.27-58.84Zm1.06-177.34c-184.34,0-334.51,150.09-334.51,334.43S315.52,834.3,499.86,834.3s334.43-150,334.43-334.43a336.1,336.1,0,0,0-32.48-144.14,29.49,29.49,0,0,0-53.52,24.76,3.42,3.42,0,0,0,.35.62A275.23,275.23,0,1,1,616.4,250a29.4,29.4,0,1,0,27.42-52c-.88-.44-1.6-.79-2.48-1.15A334.11,334.11,0,0,0,499.86,165.44ZM847.34,94.88l2.39,28.23A29.42,29.42,0,0,0,876.45,150l28.4,2.4-53.52,53.87-53.07-4.79-4.53-53ZM870.59,0a29.57,29.57,0,0,0-20.15,8.7L742.25,116.63A29.6,29.6,0,0,0,733.82,140L740.57,216,485.13,471.47A29.38,29.38,0,1,0,523,516.38a26.46,26.46,0,0,0,3.55-3.46L780.68,259l79.08,6.92a29.29,29.29,0,0,0,23.34-8.43L991,149.38a29.41,29.41,0,0,0-18.2-50l-66.65-5.86L900.32,26.9A29.33,29.33,0,0,0,870.59,0ZM499.86,0C224.19,0,0,224.2,0,499.87S224.19,999.73,499.86,999.73s499.87-224.1,499.87-499.86A499.94,499.94,0,0,0,958,300.26a29.37,29.37,0,1,0-54.5,21.92,12.91,12.91,0,0,0,.71,1.69,441.74,441.74,0,0,1,36.66,176c0,243.89-197.13,441.11-441,441.11s-441-197.22-441-441.11,197.13-441,441-441a440,440,0,0,1,176,36.65,29.42,29.42,0,1,0,25.39-53.07,10.71,10.71,0,0,0-1.69-.71A500,500,0,0,0,499.86,0"
                                                })
                                            })
                                        })
                                    }), (0, t.jsx)("label", {
                                        className: "text-center font-medium mt-2",
                                        children: "Adapt\xe9e aux besoins m\xe9tiers"
                                    }), (0, t.jsx)("p", {
                                        className: "text-center",
                                        children: "Profitez d’une solution d’int\xe9gration consid\xe9rant les processus et la gouvernance m\xe9tier dans l'ensemble de vos activit\xe9s"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "w-full md:w-1/3 flex flex-col items-center gap-4 cursor-pointer",
                                    children: [(0, t.jsx)("svg", {
                                        fill: "#ff914d",
                                        className: "h-20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 926.02 926.02",
                                        children: (0, t.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, t.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, t.jsx)("path", {
                                                    d: "M373,128.26a18,18,0,0,0,25.35-2.56L445,68.56v123a18,18,0,0,0,36,0v-123l46.66,57.14a18,18,0,1,0,27.9-22.78L477,6.62l0,0c-.2-.25-.41-.49-.62-.72l-.15-.16c-.16-.18-.33-.35-.5-.52L475.42,5,475,4.55l-.27-.23c-.15-.13-.3-.26-.47-.39l-.25-.2-.55-.4-.2-.15c-.24-.16-.48-.32-.73-.47l0,0A18.08,18.08,0,0,0,468.91,1h0L468,.7l-.06,0-.86-.22-.12,0c-.27-.06-.54-.12-.83-.16l-.15,0-.79-.1-.2,0c-.26,0-.51,0-.77-.06L464,0c-.32,0-.64,0-1,0s-.66,0-1,0l-.21,0c-.26,0-.52,0-.77.06l-.21,0-.78.1-.16,0c-.27,0-.55.1-.82.16l-.12,0-.86.22L458,.7l-.9.29h0a18.08,18.08,0,0,0-3.55,1.69l-.05,0-.72.47-.21.15c-.18.13-.37.26-.54.4a2.65,2.65,0,0,0-.26.21l-.47.38-.27.23L450.6,5l-.25.24-.51.52a2,2,0,0,1-.14.16c-.22.23-.42.47-.63.72,0,0,0,0,0,0l-78.64,96.3A18,18,0,0,0,373,128.26"
                                                }), (0, t.jsx)("path", {
                                                    d: "M553,797.76a18,18,0,0,0-25.34,2.55L481,857.46v-123a18,18,0,0,0-36,0v123l-46.66-57.15a18,18,0,0,0-27.91,22.79l78.64,96.3v0c.21.24.41.49.63.72l.15.16.5.52c.08.08.17.15.25.24s.29.27.44.4l.27.24.47.38a2.65,2.65,0,0,0,.26.21c.17.14.36.27.54.4l.2.14c.25.16.49.33.74.48l0,0a18.66,18.66,0,0,0,3.55,1.69h0l.9.29h.07c.29.09.57.15.86.23l.12,0a7.91,7.91,0,0,0,.82.16l.16,0,.79.11.19,0q.39,0,.78.06l.21,0c.32,0,.65,0,1,0s.65,0,1,0l.22,0c.26,0,.51,0,.77-.06l.2,0,.79-.11.15,0a7.6,7.6,0,0,0,.83-.16l.11,0c.29-.08.59-.14.87-.23H468l.91-.29h0a18.66,18.66,0,0,0,3.55-1.69l0,0,.73-.49.2-.14.55-.4.25-.2c.17-.13.32-.26.48-.4l.26-.23a5.92,5.92,0,0,0,.45-.41c.08-.08.17-.15.24-.23s.36-.36.52-.53a1,1,0,0,1,.14-.15l.63-.72v0l78.63-96.3A18,18,0,0,0,553,797.76"
                                                }), (0, t.jsx)("path", {
                                                    d: "M921.06,475.41c.14-.14.27-.28.4-.43a3.22,3.22,0,0,0,.24-.28l.38-.46.21-.26.4-.54c0-.07.1-.14.14-.21l.48-.72,0-.05a18.66,18.66,0,0,0,1.69-3.55v0c.1-.3.19-.6.29-.91,0,0,0,0,0-.06.08-.28.15-.58.23-.87a.52.52,0,0,1,0-.11c.06-.27.11-.54.16-.83l0-.15c.05-.26.08-.52.12-.79a1.5,1.5,0,0,1,0-.2c0-.25.05-.51.06-.77a1.5,1.5,0,0,0,0-.22c0-.32,0-.64,0-1s0-.65,0-1a1.49,1.49,0,0,0,0-.21c0-.26,0-.52-.06-.77a1.5,1.5,0,0,1,0-.2c0-.27-.07-.53-.12-.79l0-.16c0-.27-.1-.55-.16-.82a.5.5,0,0,1,0-.12l-.23-.86s0,0,0-.07c-.1-.3-.19-.61-.29-.9v0a18.66,18.66,0,0,0-1.69-3.55l0,0c-.15-.25-.32-.49-.48-.74,0-.07-.1-.13-.14-.2s-.26-.37-.4-.54l-.21-.26c-.13-.16-.25-.32-.38-.47l-.24-.27c-.13-.15-.26-.3-.4-.44s-.16-.17-.24-.25l-.52-.5-.16-.15c-.23-.22-.48-.42-.72-.63h0l-96.3-78.64a18,18,0,0,0-22.79,27.91L857.46,445h-123a18,18,0,0,0,0,36h123l-57.15,46.66a18,18,0,0,0,22.79,27.9L919.4,477l0,0c.24-.2.49-.41.72-.62l.17-.16.5-.49.25-.26"
                                                }), (0, t.jsx)("path", {
                                                    d: "M125.7,527.69,68.56,481h123a18,18,0,0,0,0-36h-123l57.14-46.66a18,18,0,1,0-22.78-27.91L6.62,449.06h0c-.25.21-.49.41-.72.63a2,2,0,0,1-.16.14l-.52.51L5,450.6l-.4.44c-.09.09-.16.18-.24.27l-.39.47c-.07.08-.13.17-.2.26s-.27.36-.4.54a2.43,2.43,0,0,0-.14.2c-.17.25-.33.49-.48.74l0,0A18.08,18.08,0,0,0,1,457.11v0c-.1.29-.2.6-.29.9a.64.64,0,0,1,0,.07c-.08.29-.15.57-.22.86a.5.5,0,0,0,0,.12c-.06.27-.12.55-.17.82a.41.41,0,0,1,0,.16c0,.26-.07.52-.1.79a1.38,1.38,0,0,0,0,.2c0,.25,0,.51-.07.77,0,.07,0,.14,0,.21,0,.33,0,.65,0,1s0,.65,0,1v.22c0,.26,0,.52.07.77a1.2,1.2,0,0,0,0,.2c0,.27.06.53.1.79a.44.44,0,0,1,0,.15c0,.29.11.56.17.83a.5.5,0,0,0,0,.12c.07.28.14.57.22.86l0,.06c.09.31.19.61.29.91v0a18.08,18.08,0,0,0,1.69,3.55l0,.05c.15.25.31.48.47.72l.15.21.4.54a2.65,2.65,0,0,0,.21.26c.12.16.25.31.38.46a3.22,3.22,0,0,0,.24.28l.4.44.24.25.51.49.17.16c.23.21.47.42.72.62l0,0,96.3,78.63a18,18,0,1,0,22.78-27.9"
                                                }), (0, t.jsx)("path", {
                                                    d: "M772.33,657.09A18,18,0,0,0,747,659.65L700.31,716.8V671.05a224.44,224.44,0,0,0-42.73-132.3,226.59,226.59,0,0,0-109-81.23,18,18,0,1,0-11.85,34A190.21,190.21,0,0,1,664.29,671.05V716.8l-46.66-57.15a18,18,0,0,0-27.91,22.79l78.63,96.29v0l.63.72.14.15.52.53.24.23.44.41.27.24.47.39.26.2.55.4.2.14.73.49,0,0a18.12,18.12,0,0,0,3.56,1.68h0l.91.29h.06c.29.09.57.15.87.23l.11,0c.28.06.55.12.82.16l.16,0c.26,0,.53.08.79.11l.2,0c.25,0,.51,0,.77.06l.21,0c.33,0,.65,0,1,0s.66,0,1,0l.21,0c.27,0,.52,0,.78-.06l.19,0c.27,0,.53-.06.79-.11l.16,0c.28,0,.55-.1.82-.16l.12,0c.29-.08.58-.14.86-.23h.07l.9-.29h0a18.21,18.21,0,0,0,3.57-1.68l0,0c.25-.16.49-.31.73-.48l.2-.14c.19-.13.36-.26.54-.4l.26-.21c.16-.12.31-.25.46-.38l.28-.24.44-.4.25-.24.5-.52.15-.16c.21-.24.43-.47.63-.72v0l78.64-96.29a18,18,0,0,0-2.56-25.35"
                                                }), (0, t.jsx)("path", {
                                                    d: "M354.22,671.29A225.86,225.86,0,0,0,492.28,463c0-103,88.85-190,194-190H732l-57.15,46.67a18,18,0,0,0,22.79,27.9L794,268.92h0l.72-.63.16-.15.52-.5.24-.25.4-.44c.09-.09.16-.18.24-.27l.39-.47c.06-.09.13-.17.2-.26l.4-.54c.05-.07.09-.14.14-.2.17-.24.33-.49.48-.73l0,0a18.4,18.4,0,0,0,1.68-3.56v0c.1-.29.2-.59.29-.9a.25.25,0,0,1,0-.07c.07-.29.15-.57.22-.86l0-.12c.05-.27.11-.55.16-.82,0-.05,0-.11,0-.16,0-.26.08-.52.11-.78l0-.2c0-.26,0-.52.07-.77,0-.08,0-.15,0-.22,0-.32,0-.65,0-1s0-.65,0-1c0-.07,0-.14,0-.21,0-.26,0-.52-.07-.77l0-.2c0-.26-.06-.53-.11-.79,0-.05,0-.11,0-.16-.05-.28-.11-.55-.16-.82l0-.12c-.07-.28-.15-.57-.22-.86a.14.14,0,0,1,0-.07c-.09-.3-.19-.6-.29-.9h0a17.86,17.86,0,0,0-1.68-3.56l0-.05c-.15-.24-.31-.48-.48-.73l-.14-.2-.4-.54c-.07-.09-.14-.17-.2-.26l-.39-.46c-.08-.09-.15-.19-.24-.28s-.26-.29-.4-.43l-.24-.26-.52-.5-.16-.15c-.24-.21-.47-.42-.72-.62l0,0-96.3-78.63a18,18,0,1,0-22.79,27.9L732,237H686.29a229.16,229.16,0,0,0-88.53,17.73A232.64,232.64,0,0,0,524.62,303a227.37,227.37,0,0,0-49.89,71.81A218.58,218.58,0,0,0,456.25,463c0,104.78-85.24,190-190,190H220.47l57.15-46.66a18,18,0,0,0-22.79-27.91l-96.29,78.63,0,0c-.25.2-.49.41-.73.62l-.15.15-.53.51-.23.25c-.14.14-.28.29-.41.44l-.23.26c-.14.17-.27.32-.39.48s-.14.16-.2.25-.27.37-.41.56l-.14.19c-.17.24-.33.49-.48.74l0,0a17.87,17.87,0,0,0-1.69,3.56v0c-.11.29-.2.6-.29.9a.14.14,0,0,0,0,.07c-.08.28-.16.57-.22.86l0,.11c-.06.28-.12.55-.16.83l0,.15c0,.27-.08.53-.11.8a1.23,1.23,0,0,0,0,.19,6.68,6.68,0,0,0-.07.77c0,.07,0,.14,0,.21,0,.34,0,.66,0,1s0,.65,0,1c0,.06,0,.14,0,.21a6.68,6.68,0,0,0,.07.77,1.36,1.36,0,0,0,0,.2c0,.26.07.52.11.78l0,.16c0,.28.1.56.16.83l0,.11c.06.29.14.58.22.86a.14.14,0,0,0,0,.07c.09.31.18.61.29.91h0a17.69,17.69,0,0,0,1.69,3.57v0c.16.25.32.5.49.75l.14.18c.14.19.27.38.41.56l.19.25.4.48.22.26c.14.16.28.3.43.45l.22.24c.18.18.36.36.55.53a.74.74,0,0,0,.13.12c.24.22.48.43.73.63l0,0,96.29,78.64a18,18,0,0,0,22.79-27.92l-57.15-46.66h45.75a224.71,224.71,0,0,0,88-17.77"
                                                }), (0, t.jsx)("path", {
                                                    d: "M180.19,268.92a18,18,0,0,0,25.34-2.56l46.67-57.14V255a224.71,224.71,0,0,0,40.88,129.7,226.83,226.83,0,0,0,104.71,81.61,18,18,0,1,0,12.82-33.67C337.41,404.72,288.22,333.33,288.22,255V209.22l46.67,57.14a18,18,0,0,0,27.91-22.78l-78.63-96.3h0c-.2-.25-.41-.5-.63-.73a1,1,0,0,0-.14-.15l-.51-.53-.24-.23c-.15-.15-.3-.28-.45-.42l-.27-.23-.47-.39-.25-.19-.55-.41-.2-.15-.73-.47,0,0a19,19,0,0,0-3.56-1.69h0c-.29-.11-.6-.2-.9-.29l-.07,0c-.28-.07-.57-.15-.86-.21l-.11,0c-.28-.06-.55-.12-.83-.16a.4.4,0,0,0-.15,0c-.27,0-.53-.08-.79-.11l-.2,0-.77-.06-.22,0c-.32,0-.65,0-1,0l-1,0-.21,0c-.26,0-.51,0-.77.06l-.2,0c-.26,0-.53.06-.79.11l-.16,0c-.27,0-.55.1-.82.16a.2.2,0,0,0-.11,0c-.29.06-.58.14-.86.21l-.07,0c-.31.09-.61.18-.91.29h0a18.75,18.75,0,0,0-3.56,1.69l0,0c-.25.15-.49.31-.73.47l-.2.15c-.19.13-.37.27-.55.41l-.26.19-.46.39-.28.23-.44.42-.24.23c-.18.17-.35.35-.51.53a.67.67,0,0,0-.14.15c-.22.23-.43.48-.63.73h0l-78.63,96.3a18,18,0,0,0,2.56,25.34"
                                                }), (0, t.jsx)("path", {
                                                    d: "M463,638.51a18,18,0,0,0-18,18v8.91a18,18,0,0,0,36,0v-8.91a18,18,0,0,0-18-18"
                                                }), (0, t.jsx)("path", {
                                                    d: "M463,242.57a18,18,0,0,0-18,18v8.9a18,18,0,0,0,36,0v-8.9a18,18,0,0,0-18-18"
                                                }), (0, t.jsx)("path", {
                                                    d: "M260.59,445a18,18,0,1,0,0,36h8.9a18,18,0,0,0,0-36h-8.9"
                                                }), (0, t.jsx)("path", {
                                                    d: "M656.52,445a18,18,0,0,0,0,36h8.91a18,18,0,0,0,0-36h-8.91"
                                                })]
                                            })
                                        })
                                    }), (0, t.jsx)("label", {
                                        className: "text-center font-medium mt-2",
                                        children: "Agile et fonctionnelle"
                                    }), (0, t.jsx)("p", {
                                        className: "text-center",
                                        children: "B\xe9n\xe9ficiez d’une biblioth\xe8que de connecteurs, d’un studio de configuration et de g\xe9n\xe9ration de code s’adaptant \xe0 vos probl\xe9matiques d’int\xe9gration"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "w-full md:w-1/3 flex flex-col items-center gap-4 cursor-pointer",
                                    children: [(0, t.jsx)("svg", {
                                        fill: "#ff914d",
                                        className: "h-20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 847.53 1041.3",
                                        children: (0, t.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, t.jsx)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: (0, t.jsx)("path", {
                                                    d: "M351.39,610.41l235.42-235.6c.61-.58,1.24-1.13,1.9-1.66s1.35-1,2.06-1.47,1.44-.88,2.18-1.27,1.52-.74,2.3-1.06,1.58-.59,2.39-.83,1.63-.44,2.45-.6,1.67-.29,2.5-.37,1.69-.13,2.53-.13,1.68,0,2.52.12a23.67,23.67,0,0,1,2.51.35c.82.15,1.65.35,2.45.58a24.07,24.07,0,0,1,2.39.83,21.74,21.74,0,0,1,2.31,1c.75.38,1.48.8,2.19,1.25s1.4,1,2.07,1.46,1.3,1.08,1.91,1.65,1.17,1.23,1.71,1.88,1,1.34,1.52,2.05a25.16,25.16,0,0,1,1.31,2.18,24,24,0,0,1,1.09,2.29c.33.79.61,1.58.86,2.39s.46,1.64.63,2.47.29,1.67.38,2.51.12,1.7.13,2.55,0,1.69-.12,2.54a23.73,23.73,0,0,1-.37,2.51,25.41,25.41,0,0,1-.6,2.47c-.24.81-.53,1.61-.85,2.4a25.29,25.29,0,0,1-1.08,2.3,24.15,24.15,0,0,1-1.29,2.19c-.47.71-1,1.39-1.51,2.05s-1.1,1.29-1.7,1.89l-256.82,257a26.47,26.47,0,0,1-3.92,3.24,26.11,26.11,0,0,1-4.48,2.41,25.6,25.6,0,0,1-4.87,1.48,26,26,0,0,1-5.06.5h-.08a25.17,25.17,0,0,1-5-.48,26.45,26.45,0,0,1-4.84-1.46,26.05,26.05,0,0,1-8.38-5.58,25,25,0,0,1-2.85-3.4L221.47,539.44a23.23,23.23,0,0,1-1.41-2.14c-.43-.73-.83-1.49-1.19-2.26a25.53,25.53,0,0,1-1-2.37,23.71,23.71,0,0,1-.73-2.45q-.3-1.25-.48-2.52c-.12-.84-.19-1.69-.23-2.54a24.27,24.27,0,0,1,0-2.56,27.1,27.1,0,0,1,.8-5.05c.22-.83.47-1.64.77-2.44a25.49,25.49,0,0,1,1-2.35,23.13,23.13,0,0,1,1.23-2.24,26.24,26.24,0,0,1,3.1-4.07,23.63,23.63,0,0,1,1.83-1.78,25.47,25.47,0,0,1,2-1.6,25.1,25.1,0,0,1,4.42-2.56,22.26,22.26,0,0,1,2.38-.95c.8-.27,1.62-.51,2.45-.71s1.68-.34,2.52-.45a26.18,26.18,0,0,1,5.11-.17c.85.06,1.7.16,2.54.3s1.67.32,2.5.54a25.46,25.46,0,0,1,2.43.78c.8.31,1.58.65,2.35,1s1.51.8,2.23,1.25a24.8,24.8,0,0,1,4,3.13c.62.58,1.21,1.2,1.77,1.84a25.37,25.37,0,0,1,1.58,2ZM847.52,591c.63,77.21-44.24,168.31-126.37,256.49A784.43,784.43,0,0,1,604.87,949.7l-1.81,1.18a12.17,12.17,0,0,0-2.09,1.45l-1.71,1.38a643,643,0,0,1-162.87,85.14l-7.4,2.45-7.43-2.34a527.71,527.71,0,0,1-52.28-19.76,31.45,31.45,0,0,0-3.25-1.44l-1.46-.6q-32.35-15-63.19-33t-59.89-38.7q-29-20.75-56.06-44.05t-51.76-49A579.94,579.94,0,0,1,44,734l-.91-1.81a15.27,15.27,0,0,0-1.37-2.31l-1-1.68A282.8,282.8,0,0,1,6.46,632,280.83,280.83,0,0,1,3,598L0,226.6l1.81-1L420.33,0l1.6.84,422.5,218.89ZM796.7,249,420.82,54.37,48.31,255.17l2.83,342.46a235.49,235.49,0,0,0,31.47,107,59.13,59.13,0,0,1,3.82,6.87,534.71,534.71,0,0,0,81.85,107.59q23.08,24,48.26,45.75t52.26,41.13q27.07,19.35,55.81,36.16T383.5,973a62,62,0,0,1,6.31,2.75c12.83,5.5,26.27,10.73,38.75,14.93A604.19,604.19,0,0,0,570.63,915a58.46,58.46,0,0,1,7.08-5A737.69,737.69,0,0,0,685.93,814.7c73.72-79.16,114-158.49,113.49-223.37Z"
                                                })
                                            })
                                        })
                                    }), (0, t.jsx)("label", {
                                        className: "text-center font-medium mt-2",
                                        children: "D\xe9ploiement en toute s\xe9r\xe9nit\xe9"
                                    }), (0, t.jsx)("p", {
                                        className: "text-center",
                                        children: "Confiez vos flux \xe0 une gateway solide, robuste \xe0 tout moment et utilis\xe9e par les entreprises les plus exigeantes du march\xe9"
                                    })]
                                })]
                            }), (0, t.jsxs)("p", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                children: ["Une solution EDI r\xe9f\xe9rence dans l’int\xe9gration B2B - MFT et EAI.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Une plateforme appr\xe9ci\xe9e pour sa robustesse, ses performances de traitement remarquables, sa flexibilit\xe9 et un syst\xe8me de monitoring efficace.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Les co\xfbts de possession assurant ROI rapide, plusieurs milliers d’entreprises en font quotidiennement usage sur des millions de flux \xe0 travers le monde."]
                            })]
                        })]
                    })
                })
            }

            function p() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("section", {
                        id: "benefices-directs",
                        className: "py-16 pb-24 bg-white",
                        children: (0, t.jsxs)("div", {
                            className: "container px-4 mx-auto max-w-6xl",
                            children: [(0, t.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                style: {
                                    lineHeight: "55px"
                                },
                                className: "text-gray-900 mb-8 font-heading text-4xl md:text-5xl xl:text-6xl font-semibold text-center",
                                children: ["Caract\xe9ristiques et sp\xe9cifications de ", (0, t.jsx)("label", {
                                    className: "text-esalink-tradexpress",
                                    children: "TradeXpress\xae Infinity"
                                })]
                            }), (0, t.jsx)("p", {
                                className: "mb-16 text-lg max-w-2xl mx-auto text-center text-gray-600",
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                children: "Faites usage d'une plateforme unique avec de nombreuses fonctionnalit\xe9s :"
                            }), (0, t.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "900",
                                className: "max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-4",
                                children: [(0, t.jsxs)("ul", {
                                    className: "smallcheckulgreen",
                                    children: [(0, t.jsx)("li", {
                                        children: "Un outil de mod\xe9lisation des processus"
                                    }), (0, t.jsx)("li", {
                                        children: "Collaboration efficace avec vos partenaires"
                                    }), (0, t.jsx)("li", {
                                        children: "Conversion de format exhaustive"
                                    }), (0, t.jsx)("li", {
                                        children: "Transport des \xe9changes de donn\xe9es"
                                    }), (0, t.jsx)("li", {
                                        children: "Surveillance de processus"
                                    }), (0, t.jsx)("li", {
                                        children: "\xc9change s\xe9curis\xe9"
                                    }), (0, t.jsx)("li", {
                                        children: "D\xe9mat\xe9rialisation des factures"
                                    })]
                                }), (0, t.jsxs)("ul", {
                                    className: "smallcheckulgreen",
                                    children: [(0, t.jsx)("li", {
                                        children: "Des flux transactionnels fluides"
                                    }), (0, t.jsx)("li", {
                                        children: "Echange de flux au niveau international"
                                    }), (0, t.jsx)("li", {
                                        children: "Tra\xe7abilit\xe9 et fiabilit\xe9"
                                    }), (0, t.jsx)("li", {
                                        children: "Automatisation"
                                    }), (0, t.jsx)("li", {
                                        children: "Performance EDI"
                                    }), (0, t.jsx)("li", {
                                        children: "Agilit\xe9 avec une nouvelle interface"
                                    }), (0, t.jsx)("li", {
                                        children: "Gestion de projet simplifi\xe9e"
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
            var f = s(7294);

            function j() {
                let [e, a] = (0, f.useState)(""), s = e => {
                    a(e)
                };
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("section", {
                        id: "benefices-directs",
                        className: "py-18 bg-white relative",
                        children: (0, t.jsx)("div", {
                            className: "container px-4 mx-auto max-w-7xl",
                            children: (0, t.jsxs)("div", {
                                children: [(0, t.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "500",
                                    className: " text-gray-700 flex flex-col md:flex-row items-center justify-center gap-18 md:gap-14 mx-auto",
                                    children: [(0, t.jsxs)("div", {
                                        className: "w-full md:w-1/3 cursor-pointer text-center h-32 md:h-64 flex items-center justify-center",
                                        onMouseEnter: () => {
                                            s("Card1")
                                        },
                                        children: [(0, t.jsxs)("div", {
                                            className: "".concat("Card1" != e ? "" : "md:!hidden", " flex flex-col items-center justify-center gap-4 "),
                                            children: [(0, t.jsxs)("svg", {
                                                fill: "#ff914d",
                                                className: "h-20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 1014 1014",
                                                children: [(0, t.jsx)("title", {
                                                    children: "Fichier 1"
                                                }), (0, t.jsx)("g", {
                                                    id: "Calque_2",
                                                    "data-name": "Calque 2",
                                                    children: (0, t.jsx)("g", {
                                                        id: "Calque_1-2",
                                                        "data-name": "Calque 1",
                                                        children: (0, t.jsx)("path", {
                                                            d: "M16.9,0A16.9,16.9,0,1,0,33.8,16.9,16.93,16.93,0,0,0,16.9,0ZM84.5,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,84.5,0Zm67.6,0A16.9,16.9,0,1,0,169,16.9,16.93,16.93,0,0,0,152.1,0Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,219.7,0Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,287.3,0Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,354.9,0Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,422.5,0Zm67.6,0A16.9,16.9,0,1,0,507,16.9,16.93,16.93,0,0,0,490.1,0Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,557.7,0Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,625.3,0Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,692.9,0ZM67.6,50.7A16.9,16.9,0,1,0,84.5,67.6,16.93,16.93,0,0,0,67.6,50.7Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,743.6,50.7ZM16.9,67.6A16.9,16.9,0,1,0,33.8,84.5,16.93,16.93,0,0,0,16.9,67.6Zm101.4,33.8a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,118.3,101.4Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,794.3,101.4ZM16.9,135.2a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,16.9,135.2Zm152.1,0a16.93,16.93,0,0,0-16.9,16.9v426a16.93,16.93,0,0,0,5,11.95l148.6,148.6a16.88,16.88,0,0,0,12,5H523.9v84.5H456.3l84.5,101.4,84.5-101.4H557.7V743.6h169a16.93,16.93,0,0,0,16.9-16.9V540.8h84.5v67.6l101.4-84.5L828.1,439.4V507H743.6V300.7A17,17,0,0,0,738,288.09l-165.5-148.6a17,17,0,0,0-11.29-4.29Zm676,16.9A16.9,16.9,0,1,0,861.9,169,16.93,16.93,0,0,0,845,152.1ZM185.9,169H554.73L709.8,308.23V709.8H324.6L185.9,571.1Zm-169,33.8a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,16.9,202.8Zm202.8,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,219.7,202.8Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,895.7,202.8ZM270.4,253.5a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,270.4,253.5Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,946.4,253.5ZM16.9,270.4a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,16.9,270.4Zm304.2,33.8A16.9,16.9,0,1,0,338,321.1,16.93,16.93,0,0,0,321.1,304.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,388.7,304.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,456.3,304.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,523.9,304.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,591.5,304.2Zm67.6,0A16.9,16.9,0,1,0,676,321.1,16.93,16.93,0,0,0,659.1,304.2Zm135.2,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,794.3,304.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,861.9,304.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,929.5,304.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,304.2ZM16.9,338a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,16.9,338Zm304.2,33.8A16.9,16.9,0,1,0,338,388.7,16.93,16.93,0,0,0,321.1,371.8Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,371.8ZM16.9,405.6a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,16.9,405.6Zm304.2,33.8A16.9,16.9,0,1,0,338,456.3,16.93,16.93,0,0,0,321.1,439.4Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,439.4ZM16.9,473.2a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,16.9,473.2ZM321.1,507A16.9,16.9,0,1,0,338,523.9,16.93,16.93,0,0,0,321.1,507Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,507ZM16.9,540.8a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,16.9,540.8Zm304.2,33.8A16.9,16.9,0,1,0,338,591.5,16.93,16.93,0,0,0,321.1,574.6Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,574.6ZM16.9,608.4a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,16.9,608.4Zm304.2,33.8A16.9,16.9,0,1,0,338,659.1,16.93,16.93,0,0,0,321.1,642.2Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,642.2ZM16.9,676a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,16.9,676Zm980.2,33.8a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,709.8ZM67.6,743.6a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,67.6,743.6Zm253.5,33.8A16.9,16.9,0,1,0,338,794.3,16.93,16.93,0,0,0,321.1,777.4Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,777.4ZM118.3,794.3a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,118.3,794.3ZM169,845a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,169,845Zm152.1,0A16.9,16.9,0,1,0,338,861.9,16.93,16.93,0,0,0,321.1,845Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,845ZM219.7,895.7a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,219.7,895.7Zm101.4,16.9A16.9,16.9,0,1,0,338,929.5,16.93,16.93,0,0,0,321.1,912.6Zm676,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,912.6ZM270.4,946.4a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,270.4,946.4Zm50.7,33.8A16.9,16.9,0,1,0,338,997.1,16.93,16.93,0,0,0,321.1,980.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,388.7,980.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,456.3,980.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,523.9,980.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,591.5,980.2Zm67.6,0A16.9,16.9,0,1,0,676,997.1,16.93,16.93,0,0,0,659.1,980.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,726.7,980.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,794.3,980.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,861.9,980.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,929.5,980.2Zm67.6,0a16.9,16.9,0,1,0,16.9,16.9A16.93,16.93,0,0,0,997.1,980.2Z"
                                                        })
                                                    })
                                                })]
                                            }), "                                    ", (0, t.jsx)("label", {
                                                className: "text-center uppercase mt-4",
                                                children: "Mod\xe9lisation des processus m\xe9tier (TradeXpress Modeler)"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "".concat("Card1" == e ? "" : "md:!hidden", " hidden md:block"),
                                            children: "Configurez graphiquement les processus de traitement en mod\xe9lisant vos process m\xe9tier, en prenant en compte vos workflows applicatifs, vos r\xe8gles de gestion, \xe9v\xe9nements et notifications."
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "w-full md:w-1/3 cursor-pointer text-center h-32 md:h-64 flex items-center justify-center",
                                        onMouseEnter: () => {
                                            s("Card2")
                                        },
                                        children: [(0, t.jsxs)("div", {
                                            className: "".concat("Card2" != e ? "" : "md:!hidden", " flex flex-col items-center justify-center gap-4 "),
                                            children: [(0, t.jsxs)("svg", {
                                                fill: "#ff914d",
                                                className: "h-20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 884 971.99",
                                                children: [(0, t.jsx)("title", {
                                                    children: "Fichier 1"
                                                }), (0, t.jsx)("g", {
                                                    id: "Calque_2",
                                                    "data-name": "Calque 2",
                                                    children: (0, t.jsx)("g", {
                                                        id: "Calque_1-2",
                                                        "data-name": "Calque 1",
                                                        children: (0, t.jsx)("path", {
                                                            d: "M884,751.08V662.72H265.2V132.55h88.4L221,0,88.4,132.55h88.4v88.36H0v88.36H176.8V662.72a88.36,88.36,0,0,0,88.4,88.36H618.8v88.36H530.4L663,972,795.6,839.44H707.2V751.08ZM353.6,309.27H618.8V574.36h88.4V309.27a88.36,88.36,0,0,0-88.4-88.36H353.6Z"
                                                        })
                                                    })
                                                })]
                                            }), "                                    ", (0, t.jsx)("label", {
                                                className: "text-center uppercase mt-4",
                                                children: "Transformation de tous les formats de donn\xe9es"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "".concat("Card2" == e ? "" : "md:!hidden", " hidden md:block"),
                                            children: "Traduction de tous les formats \xe0 l’aide du studio de g\xe9n\xe9ration de code et des connecteurs existants avec une couverture exhaustive."
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "w-full md:w-1/3 cursor-pointer text-center h-32 md:h-64 flex items-center justify-center",
                                        onMouseEnter: () => {
                                            s("Card3")
                                        },
                                        children: [(0, t.jsxs)("div", {
                                            className: "".concat("Card3" != e ? "" : "md:!hidden", " flex flex-col items-center justify-center gap-4 "),
                                            children: [(0, t.jsxs)("svg", {
                                                fill: "#ff914d",
                                                className: "h-20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 903.81 968.77",
                                                children: [(0, t.jsx)("title", {
                                                    children: "Fichier 1"
                                                }), (0, t.jsx)("g", {
                                                    id: "Calque_2",
                                                    "data-name": "Calque 2",
                                                    children: (0, t.jsxs)("g", {
                                                        id: "Calque_1-2",
                                                        "data-name": "Calque 1",
                                                        children: [(0, t.jsx)("path", {
                                                            d: "M80.58,322.92h.23q4,0,7.9.39t7.82,1.16q3.89.78,7.67,1.93c2.52.76,5,1.65,7.45,2.66s4.82,2.14,7.15,3.38,4.59,2.6,6.78,4.07,4.31,3,6.35,4.71,4,3.45,5.86,5.32a77.52,77.52,0,0,1,5.31,5.86c1.68,2,3.24,4.16,4.71,6.35a79.14,79.14,0,0,1,4.07,6.79c1.24,2.32,2.37,4.71,3.38,7.15a81,81,0,0,1,4.58,15.12c.52,2.59.9,5.2,1.17,7.83s.38,5.26.38,7.9v.23c0,2.64-.12,5.27-.38,7.9s-.65,5.24-1.17,7.82a80.82,80.82,0,0,1-4.58,15.13q-1.51,3.66-3.38,7.15a79.14,79.14,0,0,1-4.07,6.79c-1.47,2.19-3,4.31-4.71,6.35a77.52,77.52,0,0,1-5.31,5.86q-2.81,2.81-5.86,5.32t-6.35,4.71a77.37,77.37,0,0,1-6.78,4.06c-2.33,1.25-4.72,2.38-7.15,3.39s-4.93,1.9-7.45,2.66-5.08,1.41-7.67,1.93-5.2.9-7.82,1.15a77.25,77.25,0,0,1-7.9.4h-.23a77.25,77.25,0,0,1-7.9-.4c-2.62-.25-5.23-.64-7.82-1.15s-5.15-1.16-7.67-1.93-5-1.65-7.45-2.66-4.82-2.14-7.15-3.39-4.58-2.59-6.78-4.06-4.31-3-6.35-4.71-4-3.45-5.86-5.32a77.52,77.52,0,0,1-5.31-5.86c-1.68-2-3.24-4.16-4.71-6.35A80.29,80.29,0,0,1,3.47,427.17a81,81,0,0,1-3.08-15.5Q0,407.73,0,403.77v-.23q0-4,.39-7.9c.26-2.63.64-5.24,1.16-7.83a79.87,79.87,0,0,1,8-22.27,79,79,0,0,1,4.06-6.79c1.47-2.19,3-4.31,4.71-6.35a77.52,77.52,0,0,1,5.31-5.86q2.8-2.81,5.86-5.32t6.35-4.71c2.2-1.47,4.46-2.82,6.78-4.07s4.72-2.37,7.15-3.38,4.93-1.9,7.45-2.66,5.08-1.41,7.67-1.93,5.2-.9,7.82-1.16S77.94,322.92,80.58,322.92Z"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M435.65,0h.23q4,0,7.9.39t7.82,1.16a78.16,78.16,0,0,1,7.67,1.92q3.8,1.15,7.44,2.67t7.15,3.38c2.33,1.25,4.59,2.6,6.79,4.07s4.31,3,6.35,4.71,4,3.44,5.86,5.31,3.63,3.82,5.31,5.86,3.25,4.17,4.71,6.36,2.82,4.46,4.07,6.78,2.37,4.72,3.38,7.16,1.89,4.92,2.66,7.44a78.35,78.35,0,0,1,1.92,7.68,76.79,76.79,0,0,1,1.16,7.82q.39,3.95.39,7.91v.22c0,2.64-.13,5.28-.39,7.9a76.16,76.16,0,0,1-1.16,7.83,77.45,77.45,0,0,1-1.92,7.67c-.77,2.53-1.65,5-2.66,7.45s-2.14,4.83-3.38,7.16-2.6,4.59-4.07,6.79-3,4.31-4.71,6.35-3.45,4-5.31,5.86-3.82,3.64-5.86,5.31-4.16,3.25-6.35,4.72-4.46,2.82-6.79,4.06a76.55,76.55,0,0,1-7.15,3.38q-3.65,1.52-7.44,2.67a78.16,78.16,0,0,1-7.67,1.92c-2.59.52-5.2.9-7.82,1.16s-5.26.39-7.9.39h-.23q-4,0-7.89-.39c-2.63-.26-5.24-.64-7.83-1.16a78.16,78.16,0,0,1-7.67-1.92q-3.79-1.16-7.45-2.67a78.85,78.85,0,0,1-7.14-3.38c-2.33-1.24-4.59-2.6-6.79-4.06s-4.31-3-6.35-4.72-4-3.44-5.86-5.31S375,134,373.36,132a78.36,78.36,0,0,1-4.71-6.35c-1.47-2.2-2.82-4.46-4.07-6.79s-2.37-4.71-3.38-7.16a77.57,77.57,0,0,1-2.66-7.45q-1.16-3.78-1.93-7.67c-.51-2.59-.9-5.19-1.16-7.83s-.38-5.26-.38-7.9v-.22q0-4,.38-7.91t1.16-7.82q.78-3.89,1.93-7.68t2.66-7.44q1.51-3.66,3.38-7.16c1.25-2.32,2.6-4.58,4.07-6.78s3-4.31,4.71-6.36,3.44-4,5.31-5.86,3.82-3.64,5.86-5.31,4.16-3.25,6.35-4.71,4.46-2.82,6.79-4.07,4.71-2.37,7.14-3.38,4.92-1.9,7.45-2.67a78.16,78.16,0,0,1,7.67-1.92q3.88-.76,7.83-1.16T435.65,0Z"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M823,306.78h.22q4,0,7.91.39a76.79,76.79,0,0,1,7.82,1.16,78.16,78.16,0,0,1,7.67,1.92c2.53.77,5,1.65,7.44,2.66a77.85,77.85,0,0,1,7.15,3.39c2.33,1.24,4.59,2.6,6.78,4.06s4.32,3,6.36,4.72,4,3.44,5.86,5.31,3.63,3.82,5.31,5.86,3.24,4.16,4.71,6.35,2.82,4.46,4.07,6.79,2.37,4.71,3.38,7.15,1.89,4.93,2.66,7.45,1.4,5.09,1.92,7.68.9,5.19,1.16,7.82.39,5.27.39,7.91v.22c0,2.64-.13,5.28-.39,7.9s-.64,5.24-1.16,7.83-1.16,5.14-1.92,7.67-1.65,5-2.66,7.45-2.14,4.83-3.38,7.16-2.61,4.58-4.07,6.78-3,4.31-4.71,6.36-3.45,4-5.31,5.86-3.82,3.64-5.86,5.31a79.14,79.14,0,0,1-6.36,4.71c-2.19,1.47-4.45,2.82-6.78,4.07s-4.71,2.37-7.15,3.38-4.91,1.9-7.44,2.67a78.16,78.16,0,0,1-7.67,1.92q-3.88.76-7.82,1.16t-7.91.39H823q-4,0-7.9-.39t-7.82-1.16a77.45,77.45,0,0,1-7.67-1.92q-3.79-1.15-7.45-2.67T785,458.72c-2.33-1.25-4.59-2.6-6.78-4.07s-4.31-3-6.35-4.71-4-3.45-5.86-5.31-3.64-3.82-5.31-5.86-3.25-4.17-4.72-6.36-2.82-4.46-4.06-6.78-2.37-4.72-3.38-7.16a78.56,78.56,0,0,1-2.66-7.45c-.77-2.53-1.41-5.08-1.93-7.67s-.9-5.2-1.16-7.83-.38-5.26-.38-7.9v-.22q0-4,.38-7.91c.26-2.63.65-5.23,1.16-7.82s1.16-5.15,1.93-7.68,1.65-5,2.66-7.45,2.14-4.82,3.38-7.15,2.6-4.59,4.06-6.79,3-4.31,4.72-6.35,3.44-4,5.31-5.86,3.82-3.64,5.86-5.31,4.16-3.25,6.35-4.72,4.45-2.82,6.78-4.06a79.11,79.11,0,0,1,7.15-3.39c2.44-1,4.92-1.89,7.45-2.66a77.45,77.45,0,0,1,7.67-1.92,76,76,0,0,1,7.82-1.16Q819,306.78,823,306.78Z"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M67.65,253.29q-7,12.14-13.33,24.73L83.2,292.43Q89,280.76,95.57,269.52A414.83,414.83,0,0,1,147.41,199a414.49,414.49,0,0,1,65.48-58.06l20.37,40.64,75.52-113H176.62l21.68,43.26A447,447,0,0,0,67.65,253.29Z"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M819.72,259.75,803.84,130.58l-42,27.81A444.49,444.49,0,0,0,579.77,50.86L570.5,81.8a412,412,0,0,1,163.81,94.8l-34.63,22.93Z"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M258.23,468.24q0,4.75.23,9.5t.7,9.49c.31,3.16.7,6.3,1.17,9.44s1,6.26,1.62,9.37,1.32,6.2,2.09,9.28,1.61,6.13,2.53,9.16,1.91,6,3,9,2.21,6,3.42,8.88,2.5,5.82,3.85,8.69,2.78,5.7,4.28,8.49,3.06,5.56,4.69,8.28,3.32,5.39,5.08,8,3.58,5.22,5.47,7.77,3.84,5,5.85,7.5,4.08,4.85,6.21,7.19,4.31,4.65,6.56,6.89,4.53,4.43,6.88,6.56,4.75,4.2,7.2,6.22,4.94,4,7.49,5.84,5.14,3.72,7.77,5.48,5.31,3.46,8,5.09,5.48,3.19,8.27,4.68,5.63,2.93,8.5,4.28,5.76,2.64,8.69,3.85,5.88,2.36,8.87,3.43,6,2.06,9,3,6.09,1.77,9.16,2.54,6.17,1.46,9.28,2.08,6.23,1.16,9.36,1.63,6.29.85,9.44,1.16,6.31.54,9.48.7,6.33.23,9.51.23,6.33-.07,9.5-.23,6.32-.39,9.48-.7,6.3-.7,9.43-1.16,6.26-1,9.37-1.63,6.2-1.31,9.27-2.08,6.13-1.62,9.17-2.54,6-1.92,9-3,5.94-2.21,8.87-3.43,5.82-2.5,8.69-3.85,5.7-2.78,8.49-4.28,5.56-3.05,8.27-4.68,5.4-3.33,8-5.09,5.22-3.58,7.77-5.48,5-3.83,7.49-5.84,4.85-4.09,7.2-6.22,4.64-4.32,6.88-6.56,4.43-4.53,6.56-6.89,4.19-4.75,6.2-7.19,4-5,5.85-7.5,3.72-5.14,5.48-7.77,3.46-5.32,5.09-8,3.18-5.48,4.68-8.28,2.92-5.62,4.27-8.49,2.64-5.76,3.85-8.69,2.36-5.89,3.43-8.88,2.06-6,3-9,1.77-6.08,2.54-9.16,1.46-6.17,2.07-9.28,1.17-6.23,1.63-9.37.85-6.28,1.17-9.44.54-6.32.69-9.49.24-6.33.24-9.5-.08-6.34-.24-9.51-.38-6.33-.69-9.48-.7-6.3-1.17-9.44-1-6.26-1.63-9.37-1.31-6.21-2.07-9.28-1.62-6.13-2.54-9.17-1.92-6-3-9-2.21-5.94-3.43-8.87-2.49-5.82-3.85-8.69-2.78-5.7-4.27-8.49-3.06-5.56-4.68-8.28-3.33-5.4-5.09-8-3.59-5.23-5.48-7.77-3.83-5-5.85-7.5-4.07-4.85-6.2-7.2-4.32-4.65-6.56-6.89-4.53-4.42-6.88-6.55-4.75-4.2-7.2-6.22-4.95-3.95-7.49-5.85-5.14-3.71-7.77-5.47-5.32-3.46-8-5.09-5.48-3.19-8.27-4.69-5.63-2.92-8.49-4.27-5.76-2.64-8.69-3.86-5.88-2.35-8.87-3.42-6-2.06-9-3-6.09-1.77-9.17-2.54-6.16-1.46-9.27-2.08-6.23-1.16-9.37-1.63-6.28-.85-9.43-1.16-6.32-.54-9.48-.7-6.34-.24-9.5-.24-6.34.08-9.51.24-6.33.39-9.48.7-6.3.69-9.44,1.16-6.25,1-9.36,1.63-6.2,1.31-9.28,2.08-6.12,1.62-9.16,2.54-6,1.91-9,3-5.94,2.21-8.87,3.42-5.83,2.5-8.69,3.86-5.7,2.78-8.5,4.27-5.55,3.06-8.27,4.69-5.39,3.33-8,5.09-5.22,3.58-7.77,5.47-5,3.84-7.49,5.85-4.85,4.09-7.2,6.22S317.2,329,315,331.23s-4.43,4.54-6.56,6.89-4.2,4.75-6.21,7.2-4,4.95-5.85,7.5-3.71,5.14-5.47,7.77-3.46,5.32-5.08,8-3.2,5.48-4.69,8.28-2.92,5.62-4.28,8.49-2.63,5.76-3.85,8.69-2.35,5.89-3.42,8.87-2.06,6-3,9-1.77,6.09-2.53,9.17-1.47,6.17-2.09,9.28-1.16,6.23-1.62,9.37-.86,6.28-1.17,9.44-.54,6.31-.7,9.48S258.23,465.07,258.23,468.24Zm106.38,19.28,56.94,41.77L550.18,374.86,575,395.54,436.63,561.61a15.67,15.67,0,0,1-2.16,2.15,15.46,15.46,0,0,1-2.52,1.7,16.41,16.41,0,0,1-2.79,1.2,16.74,16.74,0,0,1-3,.65,16.16,16.16,0,0,1-3,.08,16.3,16.3,0,0,1-5.86-1.53,16.37,16.37,0,0,1-2.61-1.56l-69.16-50.75Z"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M8.56,604.68H37.9a42.85,42.85,0,0,1,6.88.65,45.23,45.23,0,0,1,6.68,1.74,43.75,43.75,0,0,1,12.14,6.52,44.06,44.06,0,0,1,5.14,4.61,44.78,44.78,0,0,1,4.35,5.37,42.87,42.87,0,0,1,3.45,6A43.78,43.78,0,0,1,79,636a386.27,386.27,0,0,0,25.52,61.29,42.49,42.49,0,0,1,2.85,6.3,41.64,41.64,0,0,1,1.82,6.67,43.07,43.07,0,0,1,.37,13.78,43.55,43.55,0,0,1-1.46,6.76,43.46,43.46,0,0,1-10.41,17.73L76.81,769.37a453.86,453.86,0,0,0,123,122.76l20.87-20.82a43.29,43.29,0,0,1,5.35-4.4,44.65,44.65,0,0,1,6-3.49,43.45,43.45,0,0,1,13.23-4,45.6,45.6,0,0,1,6.91-.37,44,44,0,0,1,13.57,2.55,42.6,42.6,0,0,1,6.31,2.85A388.83,388.83,0,0,0,333.49,890a42.76,42.76,0,0,1,6.47,2.44,43.26,43.26,0,0,1,6,3.42,44.08,44.08,0,0,1,10,9.47,43.33,43.33,0,0,1,6.53,12.12,42.62,42.62,0,0,1,1.75,6.68,43.93,43.93,0,0,1,.68,6.87v29.28q21.48,4.26,43.28,6.4t43.71,2.14q21.92,0,43.71-2.14t43.29-6.4V931a43.47,43.47,0,0,1,2.42-13.55,43.52,43.52,0,0,1,11.16-17.25,42.77,42.77,0,0,1,11.37-7.76,42.64,42.64,0,0,1,6.46-2.44,388.44,388.44,0,0,0,61.43-25.46,44.27,44.27,0,0,1,6.32-2.85,43.62,43.62,0,0,1,6.68-1.81,44.26,44.26,0,0,1,6.89-.74,45.67,45.67,0,0,1,6.91.37,44.84,44.84,0,0,1,6.77,1.45,44.05,44.05,0,0,1,6.46,2.51,44.54,44.54,0,0,1,6,3.49,42.56,42.56,0,0,1,5.35,4.4L704,892.13A453.49,453.49,0,0,0,827,769.37l-20.86-20.82a43.35,43.35,0,0,1-10.42-17.73,43.52,43.52,0,0,1-1.45-6.76,43.59,43.59,0,0,1,2.18-20.45,42.49,42.49,0,0,1,2.85-6.3A386.27,386.27,0,0,0,824.81,636a43.93,43.93,0,0,1,5.9-12.45,44.78,44.78,0,0,1,4.35-5.37,44.15,44.15,0,0,1,5.15-4.61,43.21,43.21,0,0,1,5.81-3.74,42.86,42.86,0,0,1,13-4.51,41.63,41.63,0,0,1,6.87-.66h29.35a450.21,450.21,0,0,0,8.56-86.8H740.34q-.76,6.55-1.81,13.08t-2.41,13q-1.35,6.48-3,12.87t-3.58,12.72q-1.93,6.33-4.15,12.55t-4.72,12.34q-2.49,6.12-5.27,12.11c-1.85,4-3.8,8-5.82,11.87s-4.15,7.77-6.36,11.58-4.49,7.58-6.87,11.29-4.83,7.36-7.38,11-5.16,7.14-7.87,10.62-5.48,6.89-8.33,10.24S667,679.73,664,683s-6.08,6.36-9.24,9.44-6.37,6.08-9.65,9S638.44,707.19,635,710s-6.9,5.47-10.44,8.09-7.14,5.16-10.79,7.62-7.37,4.83-11.13,7.12-7.58,4.48-11.44,6.6-7.78,4.14-11.73,6.07-8,3.79-12,5.54-8.11,3.41-12.23,5-8.27,3-12.45,4.42-8.39,2.66-12.63,3.85-8.51,2.28-12.8,3.28-8.6,1.88-12.93,2.68-8.68,1.49-13,2.1-8.74,1.1-13.12,1.49-8.78.71-13.18.9-8.8.31-13.2.31-8.81-.1-13.21-.31-8.79-.5-13.18-.9-8.76-.89-13.12-1.49-8.71-1.3-13-2.1-8.64-1.69-12.93-2.68-8.56-2.09-12.8-3.28-8.45-2.47-12.64-3.85-8.33-2.85-12.44-4.42-8.2-3.23-12.24-5-8-3.6-12-5.54-7.87-4-11.73-6.07-7.68-4.32-11.44-6.6-7.47-4.66-11.13-7.12-7.25-5-10.8-7.62-7-5.32-10.43-8.09-6.77-5.64-10.06-8.57-6.51-5.93-9.66-9-6.23-6.22-9.24-9.44-5.94-6.51-8.79-9.86-5.64-6.76-8.35-10.24-5.33-7-7.87-10.62-5-7.25-7.38-11-4.66-7.47-6.87-11.29-4.32-7.67-6.35-11.58-4-7.87-5.82-11.87-3.6-8-5.27-12.11-3.24-8.2-4.72-12.34-2.86-8.33-4.15-12.55-2.48-8.45-3.58-12.72-2.09-8.55-3-12.87-1.71-8.64-2.41-13-1.31-8.71-1.81-13.08H0A450.21,450.21,0,0,0,8.56,604.68Z"
                                                        })]
                                                    })
                                                })]
                                            }), "                                    ", (0, t.jsx)("label", {
                                                className: "text-center uppercase mt-4",
                                                children: "Support de la majorit\xe9 des protocoles, m\xe9thodes d’\xe9changes et requ\xeates"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "".concat("Card3" == e ? "" : "md:!hidden", " hidden md:block"),
                                            children: "Assurez vos transferts de donn\xe9es, messages ou requ\xeates API \xe0 travers une solution unique : EDIINT AS1/2/3/4, OFTP 1/2, X400 P7/P1, SMTP-MIME, FTP SSL, FTP SSH, et des dizaines d'autres.                                "
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "500",
                                    className: "mt-18 md:mt-0 text-gray-700 flex flex-col md:flex-row items-center justify-center gap-18 md:gap-14 mx-auto",
                                    children: [(0, t.jsxs)("div", {
                                        className: "w-full md:w-1/3 cursor-pointer text-center h-32 md:h-64 flex items-center justify-center",
                                        onMouseEnter: () => {
                                            s("Card4")
                                        },
                                        children: [(0, t.jsxs)("div", {
                                            className: "".concat("Card4" != e ? "" : "md:!hidden", " flex flex-col items-center justify-center gap-4 "),
                                            children: [(0, t.jsxs)("svg", {
                                                fill: "#ff914d ",
                                                className: "h-20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 913 913",
                                                children: [(0, t.jsx)("title", {
                                                    children: "Fichier 1"
                                                }), (0, t.jsx)("g", {
                                                    id: "Calque_2",
                                                    "data-name": "Calque 2",
                                                    children: (0, t.jsxs)("g", {
                                                        id: "Calque_1-2",
                                                        "data-name": "Calque 1",
                                                        children: [(0, t.jsx)("path", {
                                                            d: "M456.5,882.57c-235,0-426.07-191.1-426.07-426.07S221.53,30.43,456.5,30.43,882.57,221.53,882.57,456.5,691.47,882.57,456.5,882.57ZM456.5,0C204.77,0,0,204.77,0,456.5S204.77,913,456.5,913,913,708.23,913,456.5,708.23,0,456.5,0"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M456.5,821.7c-196.27,0-356.82-155.61-364.84-350H230.81c22.35,0,41.54-17.12,44.75-40,12.25-90,90-157.87,180.94-157.87a183.45,183.45,0,0,1,94.15,26.33c-59.73,36.92-124.82,79.35-147.88,102.36a76.06,76.06,0,0,0,53.67,129.94h.12a75.64,75.64,0,0,0,53.85-22.3c23-23.06,65.44-88.15,102.36-147.94a183.72,183.72,0,0,1,24.67,69.54c3.21,22.77,22.4,39.89,44.75,39.89h139.1C813.32,666.09,652.77,821.7,456.5,821.7ZM654.08,294.11a25.9,25.9,0,0,0,3.33-17l67.7-67.7a363.73,363.73,0,0,1,96.18,231.87H682.19c-7.37,0-13.49-5.76-14.62-13.61a213.23,213.23,0,0,0-37.21-94.09C639,319.37,647.07,305.94,654.08,294.11Zm-35.85.66C556.72,397.42,509.88,467.68,488.9,488.66a45.51,45.51,0,0,1-32.4,13.43h-.06a45.65,45.65,0,0,1-32.1-78C445.33,403.13,515.58,356.29,618.23,294.77Zm-146.51-203a363.35,363.35,0,0,1,231.87,96.17l-67.76,67.7a25.8,25.8,0,0,0-16.94,3.33c-11.83,7.07-25.32,15.16-39.53,23.78a213.94,213.94,0,0,0-107.64-38.58ZM317.17,295.66,209.41,187.89A363.35,363.35,0,0,1,441.28,91.72V244.18A213,213,0,0,0,317.17,295.66Zm-21.39,21.63a211.66,211.66,0,0,0-50.35,110.32c-1.13,7.91-7.25,13.67-14.62,13.67H91.66a364,364,0,0,1,96.23-231.87ZM456.5,60.86C238.35,60.86,60.86,238.35,60.86,456.5S238.35,852.14,456.5,852.14,852.14,674.65,852.14,456.5,674.65,60.86,456.5,60.86"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M391.18,582.69a15.22,15.22,0,0,0-21.52,0l-34.89,34.89V593.45a15.22,15.22,0,1,0-30.44,0V715.18a15.22,15.22,0,1,0,30.44,0V691.05l34.89,34.89a15.21,15.21,0,0,0,21.52-21.51l-50.11-50.11,50.11-50.11a15.22,15.22,0,0,0,0-21.52"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M563,578.23a15.25,15.25,0,0,0-15.22,15.22V715.18a15.22,15.22,0,1,0,30.43,0V593.45A15.24,15.24,0,0,0,563,578.23"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M471.72,639.1H456.5V608.67h15.22a15.22,15.22,0,0,1,0,30.43Zm0-60.87H441.28a15.24,15.24,0,0,0-15.21,15.22V715.18a15.22,15.22,0,1,0,30.43,0V669.53h15.22a45.65,45.65,0,0,0,0-91.3"
                                                        })]
                                                    })
                                                })]
                                            }), "                                    ", (0, t.jsx)("label", {
                                                className: "text-center uppercase mt-4",
                                                children: "Monitoring et reporting des \xe9changes"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "".concat("Card4" == e ? "" : "md:!hidden", " hidden md:block"),
                                            children: "Pilotez vos \xe9changes et KPI en temps r\xe9el \xe0 partir de la console \xab Business Gouvernance \xbb et r\xe9agissez sans perdre de temps sur vos \xe9v\xe9nements."
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "w-full md:w-1/3 cursor-pointer text-center h-32 md:h-64 flex items-center justify-center",
                                        onMouseEnter: () => {
                                            s("Card5")
                                        },
                                        children: [(0, t.jsxs)("div", {
                                            className: "".concat("Card5" != e ? "" : "md:!hidden", " flex flex-col items-center justify-center gap-4 "),
                                            children: [(0, t.jsxs)("svg", {
                                                fill: "#ff914d ",
                                                className: "h-20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 739 739",
                                                children: [(0, t.jsx)("title", {
                                                    children: "Fichier 1"
                                                }), (0, t.jsx)("g", {
                                                    id: "Calque_2",
                                                    "data-name": "Calque 2",
                                                    children: (0, t.jsx)("g", {
                                                        id: "Calque_1-2",
                                                        "data-name": "Calque 1",
                                                        children: (0, t.jsx)("path", {
                                                            d: "M409.09,409.09H329.91V329.91h79.18ZM607,113.3,443.58,276.77a117.91,117.91,0,0,0-60.88-25.26V79.18h26.39V0H329.91V79.18H356.3V251.51a117.88,117.88,0,0,0-60.87,25.26L132,113.3V0H0V132H113.3L276.77,295.43a117.88,117.88,0,0,0-25.26,60.87H79.18V329.91H0v79.18H79.18V382.7H251.51a117.91,117.91,0,0,0,25.26,60.88L113.3,607H0V739H132V625.7L295.43,462.23a117.88,117.88,0,0,0,60.87,25.26V659.82H329.91V739h79.18V659.82H382.7V487.49a117.91,117.91,0,0,0,60.88-25.26L607,625.7V739H739V607H625.7L462.23,443.58a117.91,117.91,0,0,0,25.26-60.88H659.82v26.39H739V329.91H659.82V356.3H487.49a117.88,117.88,0,0,0-25.26-60.87L625.7,132H739V0H607V113.3"
                                                        })
                                                    })
                                                })]
                                            }), "                                ", (0, t.jsx)("label", {
                                                className: "text-center uppercase mt-4",
                                                children: "Biblioth\xe8que de connecteurs"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "".concat("Card5" == e ? "" : "md:!hidden", " hidden md:block"),
                                            children: "Utiliser une centaine de connecteur pour r\xe9duire votre temps d’int\xe9gration dans des domaines multiples comme les standards EDI/B2B, les bases de donn\xe9es, les ERP dont SAP, les progiciels, la s\xe9curit\xe9 et l’authentification unique, tout y est."
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "w-full md:w-1/3 cursor-pointer text-center h-32 md:h-64 flex items-center justify-center",
                                        onMouseEnter: () => {
                                            s("Card6")
                                        },
                                        children: [(0, t.jsxs)("div", {
                                            className: "".concat("Card6" != e ? "" : "md:!hidden", " flex flex-col items-center justify-center gap-4 "),
                                            children: [(0, t.jsxs)("svg", {
                                                fill: "#ff914d ",
                                                className: "h-20",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 962 818.89",
                                                children: [(0, t.jsx)("title", {
                                                    children: "Fichier 1"
                                                }), (0, t.jsx)("g", {
                                                    id: "Calque_2",
                                                    "data-name": "Calque 2",
                                                    children: (0, t.jsxs)("g", {
                                                        id: "Calque_1-2",
                                                        "data-name": "Calque 1",
                                                        children: [(0, t.jsx)("path", {
                                                            d: "M262.5,179c45.26,0,82.47-33.68,88.51-77.41H503.88l65.38,94.5a11.73,11.73,0,0,0,10,5H949.93a12.07,12.07,0,1,0,0-24.13H585.35L520,82.44a11.72,11.72,0,0,0-10.05-5H350.51C344.47,33.68,307.26,0,262,0a89.7,89.7,0,0,0-89.51,89.48C172.49,138.74,213.22,179,262.5,179Zm0-154.32a64.85,64.85,0,1,1-64.87,64.84A65,65,0,0,1,262.5,24.64Z"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M949.93,316.7H564.23c-6-43.74-43.25-77.42-88.51-77.42a89.48,89.48,0,1,0,0,179c45.26,0,82.47-33.68,88.51-77.41h385.7a12.07,12.07,0,1,0,0-24.13ZM475.72,394.11a65,65,0,0,1-64.87-64.84c0-35.7,29.17-65.35,64.87-65.35a65,65,0,0,1,64.87,64.84C540.59,365,511.43,394.11,475.72,394.11Z"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M949.93,471.53H613.51A13.12,13.12,0,0,0,603,477.05l-47.27,75.41H348.49L297.2,457a11.73,11.73,0,0,0-10.56-6.54H178C172,406.68,134.77,373,89.51,373a89.48,89.48,0,1,0,0,179c45.26,0,82.47-33.67,88.51-77.41H279.1l51.29,95.51A11.74,11.74,0,0,0,341,576.59H562.21a13.13,13.13,0,0,0,10.57-5.53l47.27-75.4H949.43a12.24,12.24,0,0,0,12.07-12.07C962,477.05,956.47,471.53,949.93,471.53ZM89.51,528.33a64.85,64.85,0,1,1,64.88-64.85C154.89,499.17,125.72,528.33,89.51,528.33Z"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M949.93,613.79H755.82a12.27,12.27,0,0,0-10.56,6l-57.33,97.52H395.26c-6-43.74-43.24-77.41-88.5-77.41a89.48,89.48,0,1,0,0,179c45.26,0,82.46-33.69,88.5-77.42H695a12.28,12.28,0,0,0,10.57-6l57.32-97.52H949.93a12.07,12.07,0,1,0,0-24.13Zm-643.17,181a64.85,64.85,0,1,1,64.87-64.85C372.13,765.6,343,794.76,306.76,794.76Z"
                                                        })]
                                                    })
                                                })]
                                            }), (0, t.jsx)("label", {
                                                className: "text-center uppercase mt-4",
                                                children: "D\xe9mat\xe9rialisation des flux r\xe9glement\xe9s"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "".concat("Card6" == e ? "" : "md:!hidden", " hidden md:block"),
                                            children: "Digitaliser vos flux critiques E-Invoicing, donn\xe9es de sant\xe9, flux financiers, t\xe9l\xe9d\xe9clarations et d’autres \xe0 l’aide de processus certifi\xe9s, des modules m\xe9tiers et s\xe9curit\xe9 solides."
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })
            }

            function g() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("section", {
                        id: "benefices-directs",
                        className: "py-16 pb-24 bg-white",
                        children: (0, t.jsxs)("div", {
                            className: "container px-4 mx-auto max-w-6xl",
                            children: [(0, t.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                style: {
                                    lineHeight: "55px"
                                },
                                className: "text-gray-900 mb-8 font-heading text-4xl md:text-5xl xl:text-6xl font-semibold text-center",
                                children: ["Esalink, ", (0, t.jsx)("label", {
                                    className: "text-esalink-tradexpress",
                                    children: "expert certifi\xe9"
                                }), " des solutions TradeXpress\xae"]
                            }), (0, t.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex flex-col gap-12 md:flex-row items-center justify-center",
                                children: [(0, t.jsx)("div", {
                                    className: "w-1/4",
                                    children: (0, t.jsxs)("svg", {
                                        fill: "#ffbd94",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 933 933",
                                        children: [(0, t.jsx)("defs", {
                                            children: (0, t.jsx)("clipPath", {
                                                id: "clipPath",
                                                children: (0, t.jsx)("rect", {
                                                    className: "cls-1",
                                                    width: "933",
                                                    height: "933"
                                                })
                                            })
                                        }), (0, t.jsx)("title", {
                                            children: "Fichier 1"
                                        }), (0, t.jsx)("g", {
                                            id: "Calque_2",
                                            "data-name": "Calque 2",
                                            children: (0, t.jsxs)("g", {
                                                id: "Calque_1-2",
                                                "data-name": "Calque 1",
                                                children: [(0, t.jsx)("path", {
                                                    d: "M431,343.91a18.85,18.85,0,0,1,0-37.69h279.3a18.85,18.85,0,1,1,0,37.69H431"
                                                }), (0, t.jsx)("path", {
                                                    d: "M329.67,251.22a18.89,18.89,0,0,1,29.49,23.61l-106,132.61L199.29,338.2A18.83,18.83,0,0,1,229,315.09l24.6,31.47,76-95.34"
                                                }), (0, t.jsx)("path", {
                                                    d: "M431,490.36a18.85,18.85,0,0,1,0-37.69h279.3a18.85,18.85,0,1,1,0,37.69H431"
                                                }), (0, t.jsx)("path", {
                                                    d: "M329.67,397.76a18.86,18.86,0,1,1,29.49,23.52l-106,132.61-53.92-69.17A18.86,18.86,0,0,1,229,461.53l24.6,31.56,76-95.33"
                                                }), (0, t.jsx)("path", {
                                                    d: "M431,636.89a18.85,18.85,0,0,1,0-37.69h279.3a18.85,18.85,0,1,1,0,37.69H431"
                                                }), (0, t.jsx)("path", {
                                                    d: "M329.67,544.28a18.86,18.86,0,0,1,29.49,23.52l-106,132.62-53.92-69.17A18.86,18.86,0,0,1,229,608.06l24.6,31.48,76-95.26"
                                                }), (0, t.jsx)("g", {
                                                    className: "cls-2",
                                                    children: (0, t.jsx)("path", {
                                                        d: "M466.5,895.31c236.81,0,428.81-192,428.81-428.81S703.31,37.69,466.5,37.69,37.69,229.69,37.69,466.5,229.69,895.31,466.5,895.31Zm0,37.69C208.9,933,0,724.1,0,466.5S208.9,0,466.5,0,933,208.82,933,466.5,724.19,933,466.5,933"
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "w-full md:w-3/4",
                                    children: ["Avec EsaLink assurez-vous d’une int\xe9gration et d’un accompagnement sur-mesure pour chaque \xe9tape de vos projets d'int\xe9gration B2B. Nous vous proposons une approche personnalis\xe9e autour de vos besoins sectoriels afin de vous garantir le succ\xe8s dans tous vos objectifs EDI tout en minimisant l'impact sur votre activit\xe9.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Tous vos projets EDI : Pilotage de projet / migration / int\xe9gration / d\xe9ploiement / d\xe9veloppement /  optimisation et toute demande sp\xe9cifique s'inscrivent dans le p\xe9rim\xe8tre de notre expertise.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), (0, t.jsx)(d(), {
                                        className: "inline-block group p-0.5 font-heading text-base text-gray-700 font-bold hover:bg-[#98d9eb] overflow-hidden rounded-md bg-[#98d9eb]",
                                        href: "/contact?src=tradexpress&name=parler_avec_un_expert_trade",
                                        children: (0, t.jsxs)("div", {
                                            className: "relative py-2 px-6 bg-white rounded",
                                            children: [(0, t.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-[#98d9eb]"
                                            }), (0, t.jsx)("span", {
                                                className: "relative z-10",
                                                children: "Parlez avec un expert TradeXpress\xae d’EsaLink."
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
            var v = {
                src: "/_next/static/media/generix.263ea3b5.webp",
                height: 300,
                width: 300,
                blurDataURL: "data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAABWS1taRFAAU3P/////cFJK82Yh9wtWQ0V+ypGb/p83XYsJXuvao1pPkmolSwuuRFd/kjaT+3hUAFpXZ2ZQWAABWUDggMgAAAPABAJ0BKggACAACQDgloAJ0ugH4AAJy6ACekZG2+C/+Uq8FjdHn/1aHy0Ploft2AAAA",
                blurWidth: 8,
                blurHeight: 8
            };

            function A() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("section", {
                        className: "relative xl:pt-18 overflow-hidden",
                        children: (0, t.jsx)("div", {
                            className: "container mx-auto px-4",
                            children: (0, t.jsxs)("div", {
                                className: "flex justify-center items-center",
                                children: [(0, t.jsx)("div", {
                                    className: "hidden xl:block w-[35rem] 2xl:w-96 z-10",
                                    children: (0, t.jsx)(n(), {
                                        src: v,
                                        alt: "Logo Generix | Esalink",
                                        className: " w-auto"
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "bg-gradient-to-r from-[#ffcca9] to-[#ffeeae] text-gray-700 -mx-4 xl:mx-0 px-4 md-px-0 py-8 xl:pl-32 xl:pr-12 xl:-ml-24 xl:rounded-full",
                                    children: ["Generix GROUP est un expert de la Supply Chain Collaborative pr\xe9sent dans plus de 60 pays, gr\xe2ce \xe0 ses filiales et son r\xe9seau de partenaires.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Ses solutions TradeXpress\xae sont appr\xe9ci\xe9es par les DSI, responsables flux et utilis\xe9es par plus de 6000 entreprises de diff\xe9rents secteurs \xe0 travers le monde.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Les 800 collaborateurs du groupe accompagnent au quotidien des clients comme Carrefour, Danone, FM Logistic, Fnac-Darty , Essilor, Ferrero ou encore Geodis, dans la transformation digitale de leur Supply Chain.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "EsaLink vous accompagne sur toutes les versions de TradeXpress\xae ainsi que la derni\xe8re : TradeXpress\xae Infinity."]
                                })]
                            })
                        })
                    })
                })
            }
            var w = s(2701),
                b = s(5753),
                N = s(6165),
                C = s(3280),
                y = s(7488);

            function Z() {
                return (0, t.jsxs)("header", {
                    className: "relative bg-gradient-tradexpress background-animate overflow-hidden",
                    children: [(0, t.jsx)(y.Z, {}), (0, t.jsxs)("div", {
                        className: "flex z-10 container mx-auto px-4 mt-12 mb-20",
                        children: [(0, t.jsxs)("div", {
                            className: "flex flex-col flex-wrap justify-center z-10",
                            children: [(0, t.jsxs)("div", {
                                className: "w-full",
                                children: [(0, t.jsx)("div", {
                                    className: "flex mb-8",
                                    children: (0, t.jsxs)("ol", {
                                        className: "inline-flex items-center space-x-1 md:space-x-3",
                                        children: [(0, t.jsx)("li", {
                                            className: "inline-flex items-center",
                                            children: (0, t.jsxs)(d(), {
                                                href: "/",
                                                className: "inline-flex items-center text-sm text-white hover:text-slate-100",
                                                children: [(0, t.jsx)("svg", {
                                                    "aria-hidden": "true",
                                                    className: "w-4 h-4 mr-2",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, t.jsx)("path", {
                                                        d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                                    })
                                                }), "Accueil"]
                                            })
                                        }), (0, t.jsx)("li", {
                                            className: "hidden md:block",
                                            children: (0, t.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [(0, t.jsx)("svg", {
                                                    "aria-hidden": "true",
                                                    className: "opacity-80 w-6 h-6 text-white",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, t.jsx)("path", {
                                                        fillRule: "evenodd",
                                                        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                        clipRule: "evenodd"
                                                    })
                                                }), (0, t.jsx)(d(), {
                                                    href: "/solutions",
                                                    className: "ml-1 text-sm text-white md:ml-2 hover:text-slate-100",
                                                    children: "Solutions"
                                                })]
                                            })
                                        }), (0, t.jsx)("li", {
                                            children: (0, t.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [(0, t.jsx)("svg", {
                                                    "aria-hidden": "true",
                                                    className: "opacity-80 w-6 h-6 text-white",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, t.jsx)("path", {
                                                        fillRule: "evenodd",
                                                        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                        clipRule: "evenodd"
                                                    })
                                                }), (0, t.jsx)("p", {
                                                    className: "ml-1 text-sm text-white md:ml-2 font-semibold",
                                                    children: "TradeXpress\xae Infinity"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, t.jsxs)("h1", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "500",
                                        className: "mb-4 font-heading text-white text-8xl md:text-10xl font-semibold",
                                        children: ["TradeXpress\xae ", (0, t.jsx)("label", {
                                            className: "text-3xl",
                                            children: "infinity"
                                        })]
                                    })
                                }), (0, t.jsx)("p", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "700",
                                    className: "mb-9 font-medium text-lg text-white",
                                    children: "Gateway d'Int\xe9gration B2B inter et intra-entreprises de derni\xe8re g\xe9n\xe9ration par Generix Group"
                                }), (0, t.jsxs)("div", {
                                    className: "flex gap-4 flex-col md:flex-row",
                                    children: [(0, t.jsx)(d(), {
                                        href: "/contact?src=tradexpress&name=obtenir_une_demonstration",
                                        children: (0, t.jsxs)("button", {
                                            "data-aos": "fade-up",
                                            "data-aos-duration": "1500",
                                            className: "group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                            children: [(0, t.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                            }), (0, t.jsx)("p", {
                                                className: "relative z-10",
                                                children: "Obtenir une demonstration"
                                            })]
                                        })
                                    }), (0, t.jsx)(d(), {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1500",
                                        href: "/contact?src=tradexpress&name=souscrire_service_sur_mesure",
                                        className: "h-[56px] flex items-center justify-center text-white border-2 border-white border-opacity-50 hover:bg-white hover:bg-opacity-10 py-2 px-6 rounded-lg cursor-pointer bg-opacity-30 transition ease-in font-heading text-xs uppercase",
                                        children: "Souscrire \xe0 un service sur-mesure"
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-wrap justify-center xl:justify-start items-center flex-row mt-12 gap-14 2xl:gap-20",
                                children: [(0, t.jsx)("div", {
                                    className: "w-auto",
                                    children: (0, t.jsx)(n(), {
                                        "data-aos": "slide-left",
                                        "data-aos-duration": "500",
                                        src: w.Z,
                                        alt: "Logo Generix Blanc | Esalink",
                                        className: "w-40"
                                    })
                                }), (0, t.jsxs)("div", {
                                    "data-aos": "slide-left",
                                    "data-aos-duration": "500",
                                    className: "w-auto flex gap-4 text-white items-center",
                                    children: [(0, t.jsx)(n(), {
                                        src: b.Z,
                                        alt: "Award Img | Esalink",
                                        className: "opacity-60 w-10"
                                    }), (0, t.jsxs)("p", {
                                        className: "text-sm",
                                        children: ["EsaLink partenaire certifi\xe9 de Generix Group", (0, t.jsx)("br", {}), "sur les solutions TradeXpress\xae  et TradeXpress Infinity"]
                                    })]
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            children: (0, t.jsx)(n(), {
                                src: N.Z,
                                alt: "Globe Image | Esalink",
                                className: "absolute w-[390px] lg:w-[565px] xl:w-[658px] top-72 lg:top-40 xl:top-24 opacity-30 -right-14"
                            })
                        }), (0, t.jsx)(n(), {
                            src: C.Z,
                            alt: "Line Image | Esalink",
                            className: "absolute top-16 left-0 w-full z-0",
                            style: {
                                transform: "scaleX(-1)"
                            }
                        })]
                    })]
                })
            }
            var M = {
                src: "/_next/static/media/rounded.a5e9f333.webp",
                height: 700,
                width: 700,
                blurDataURL: "data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDYAAAABV0AmDBmzZl5pRESkGBxqItlqfglCMIGB1OEAD3RUWMnhFEf0PyQZyaA62A11Qx0QG2gpTgBWUDggSAAAAPABAJ0BKggACAACQDglsAJ0APRmo/moAAD+Ax/AC4aNqt7N6ZL2xdAhID/5loQgBxhaj0al09vPd3OgfxCrP59dk72fRAAAAA==",
                blurWidth: 8,
                blurHeight: 8
            };

            function q() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("section", {
                        className: "py-18 bg-slate-50 relative",
                        children: [(0, t.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[96px] 2xl:top-[96px] -left-[160px] 2xl:-left-[80px] z-0 border-esalink-tradexpress opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-esalink-tradexpress",
                            children: "1"
                        }), (0, t.jsxs)("div", {
                            className: "container px-4 mx-auto max-w-6xl",
                            children: [(0, t.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-gray-700 font-heading text-4xl opacity-80 md:text-5xl xl:text-6xl font-semibold text-center",
                                children: ["TradeXpress\xae - plateforme EDI/EAI ", (0, t.jsx)("label", {
                                    className: "text-esalink-tradexpress",
                                    children: "On premise"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col md:flex-row justify-center items-center gap-8 mt-8",
                                children: [(0, t.jsx)("div", {
                                    children: (0, t.jsx)(n(), {
                                        src: M,
                                        alt: "rounded Image | Esalink",
                                        className: "w-full z-20 relative"
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "xl:pl-12",
                                    children: [(0, t.jsxs)("p", {
                                        children: ["Les solutions TradeXpress\xae et TradeXpress\xae Infinity de Generix Group reposent sur les derni\xe8res technologies utilis\xe9es pour l’int\xe9gration B2B.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Elles ont \xe9t\xe9 \xe9labor\xe9es pour r\xe9pondre \xe0 tous vos besoins d’int\xe9gration intra-entreprise et inter-entreprises.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "EsaLink, partenaire de confiance de Generix Group, vous accompagne \xe0 travers une expertise certifi\xe9e sur tous vos projets concernant les solutions TradeXpress :"]
                                    }), (0, t.jsx)(d(), {
                                        href: "/contact?src=tradexpress&name=initier_un_projet",
                                        children: (0, t.jsxs)("button", {
                                            className: "mt-8 group relative font-heading px-6 py-5 w-full md:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                            children: [(0, t.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                            }), (0, t.jsx)("p", {
                                                className: "relative z-10",
                                                children: "Initier un projet"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }

            function k() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("section", {
                        id: "benefices-directs",
                        className: "py-16 pb-24 bg-slate-50",
                        children: (0, t.jsx)("div", {
                            className: "container px-4 mx-auto",
                            children: (0, t.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex flex-col md:flex-row gap-12 md:gap-0",
                                children: [(0, t.jsxs)("div", {
                                    className: "w-full md:w-1/2 md:border-r-2 text-gray-700",
                                    children: [(0, t.jsx)("h3", {
                                        className: "text-esalink-tradexpress mb-12 font-heading text-4xl xl:text-5xl font-semibold text-center",
                                        children: "Protocole de Communication"
                                    }), (0, t.jsxs)("div", {
                                        className: "flex justify-around",
                                        children: [(0, t.jsxs)("ul", {
                                            className: "marker:text-esalink-orange list-outside list-disc leading-7",
                                            children: [(0, t.jsx)("li", {
                                                children: "AS1 / AS2"
                                            }), (0, t.jsx)("li", {
                                                children: "AS3 / AS4"
                                            }), (0, t.jsx)("li", {
                                                children: "X400"
                                            }), (0, t.jsx)("li", {
                                                children: "ALLEGRO"
                                            }), (0, t.jsx)("li", {
                                                children: "FTP, SFTP, FTPS"
                                            }), (0, t.jsx)("li", {
                                                children: "HTTP, HTTPS"
                                            }), (0, t.jsx)("li", {
                                                children: "SMTP-MIME"
                                            }), (0, t.jsx)("li", {
                                                children: "PESIT"
                                            }), (0, t.jsx)("li", {
                                                children: "EBICS T/TS"
                                            }), (0, t.jsx)("li", {
                                                children: "WebServices"
                                            })]
                                        }), (0, t.jsxs)("ul", {
                                            className: "marker:text-esalink-orange list-outside list-disc leading-7",
                                            children: [(0, t.jsx)("li", {
                                                children: "IBM MQ Series"
                                            }), (0, t.jsx)("li", {
                                                children: "HTTP, HTTPS"
                                            }), (0, t.jsx)("li", {
                                                children: "OFTP, OFTP2"
                                            }), (0, t.jsx)("li", {
                                                children: "REST"
                                            }), (0, t.jsx)("li", {
                                                children: "WEB SERVICES"
                                            }), (0, t.jsx)("li", {
                                                children: "SOAP"
                                            }), (0, t.jsx)("li", {
                                                children: "RNIF"
                                            }), (0, t.jsx)("li", {
                                                children: "ODBC"
                                            }), (0, t.jsx)("li", {
                                                children: "JDBC"
                                            }), (0, t.jsx)("li", {
                                                children: "JMS, …"
                                            })]
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "w-full md:w-1/2 md:border-l-2",
                                    children: [(0, t.jsx)("h3", {
                                        className: "text-esalink-tradexpress mb-12 font-heading text-4xl xl:text-5xl font-semibold text-center",
                                        children: "NORMES EDI"
                                    }), (0, t.jsxs)("div", {
                                        className: "flex justify-around",
                                        children: [(0, t.jsxs)("ul", {
                                            className: "marker:text-esalink-orange list-outside list-disc leading-7",
                                            children: [(0, t.jsx)("li", {
                                                children: "UN / EDIFACT"
                                            }), (0, t.jsx)("li", {
                                                children: "ANSI X12"
                                            }), (0, t.jsx)("li", {
                                                children: "ODETTE"
                                            }), (0, t.jsx)("li", {
                                                children: "VDA"
                                            }), (0, t.jsx)("li", {
                                                children: "TRADACOMS"
                                            }), (0, t.jsx)("li", {
                                                children: "GENCOD"
                                            }), (0, t.jsx)("li", {
                                                children: "IDOC"
                                            }), (0, t.jsx)("li", {
                                                children: "XML"
                                            }), (0, t.jsx)("li", {
                                                children: "EDIG@S"
                                            }), (0, t.jsx)("li", {
                                                children: "Gaz EASEE"
                                            })]
                                        }), (0, t.jsxs)("ul", {
                                            className: "marker:text-esalink-orange list-outside list-disc leading-7",
                                            children: [(0, t.jsx)("li", {
                                                children: "SPEC 2000"
                                            }), (0, t.jsx)("li", {
                                                children: "ROSETTANET"
                                            }), (0, t.jsx)("li", {
                                                children: "CXML"
                                            }), (0, t.jsx)("li", {
                                                children: "UBL"
                                            }), (0, t.jsx)("li", {
                                                children: "XCBL"
                                            }), (0, t.jsx)("li", {
                                                children: "FACTUR-X"
                                            }), (0, t.jsx)("li", {
                                                children: "JSON"
                                            }), (0, t.jsx)("li", {
                                                children: "FORMATS ERP et legacy"
                                            }), (0, t.jsx)("li", {
                                                children: "ETL - Bases de donn\xe9es"
                                            }), (0, t.jsx)("li", {
                                                children: "Autres"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })
            }

            function H() {
                let [e, a] = (0, f.useState)("Tirez"), s = e => {
                    a(e)
                };
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("section", {
                        id: "benefices-directs",
                        className: "py-18 bg-slate-100 relative",
                        children: [(0, t.jsx)("div", {
                            className: "hidden xl:flex h-[400px] w-[400px] top-[141px] 2xl:top-[131px] -left-[160px] 2xl:-left-[80px] z-0 border-esalink-tradexpress opacity-30 border-8 rounded-full absolute items-center justify-center text-15xl font-medium text-esalink-tradexpress",
                            children: "3"
                        }), (0, t.jsxs)("div", {
                            className: "container px-4 mx-auto max-w-5xl",
                            children: [(0, t.jsxs)("h2", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "text-gray-700 font-heading text-4xl opacity-80 md:text-5xl xl:text-6xl font-semibold text-center",
                                children: ["Vous cherchez un accompagnement ", (0, t.jsx)("label", {
                                    className: "text-esalink-tradexpress",
                                    children: "sur-mesure"
                                }), " pour votre plateforme ", (0, t.jsx)("label", {
                                    className: "text-esalink-tradexpress",
                                    children: "TradeXpress\xae"
                                }), " ?"]
                            }), (0, t.jsx)("p", {
                                className: "mt-8 text-lg mx-auto text-center text-gray-600",
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                children: "Peu importe votre solution EDI, EsaLink vous propose un large panel de services de pilotage / maintenance / supervision sur vos syst\xe8mes EDI."
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "500",
                                    className: "max-w-4xl text-gray-700 flex flex-col md:flex-row items-center justify-center gap-14 mt-18 mb-12 opacity-80 mx-auto",
                                    children: [(0, t.jsxs)(d(), {
                                        href: "/nos-services/tma",
                                        className: "".concat("Tirez" !== e ? "" : "activeTabsTradeSeach", " w-1/3 flex flex-col items-center gap-4 cursor-pointer"),
                                        onMouseEnter: () => {
                                            s("Tirez")
                                        },
                                        children: [(0, t.jsx)("svg", {
                                            fill: "#374151",
                                            className: "h-20",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 930.56 711.88",
                                            children: (0, t.jsx)("g", {
                                                id: "Calque_2",
                                                "data-name": "Calque 2",
                                                children: (0, t.jsxs)("g", {
                                                    id: "Calque_1-2",
                                                    "data-name": "Calque 1",
                                                    children: [(0, t.jsx)("path", {
                                                        d: "M509.22,434.51c32.32-32.3,58.87-88.2,71.36-147.13,8.62-40.72,10.39-82.51,2.53-118.49-7.39-33.78-23.38-62.18-50.41-78.73C515.42,79.57,493.2,73.5,465.3,73.5c-27.58,0-49.58,6-66.71,16.46-27,16.52-43.08,45-50.51,78.83-7.92,36.09-6.19,78,2.4,118.87,12.4,58.84,38.74,114.64,70.9,146.93l4.21,6.4,4.4,10.86,1.36,7.31c-.59,69.68-68.63,97.55-140.21,126.87-54.22,22.21-110.83,45.4-130.75,87.31H770.22c-19.92-41.91-76.53-65.1-130.75-87.31-71.59-29.32-139.63-57.19-140.21-126.87l1.35-7.31L505,441Zm109-139.16c-13.6,64.23-42.89,125.94-79,163.62l-1.38,3.43c3.29,41.83,58.37,64.4,116.26,88.11C727,580.39,803.72,611.8,814.94,689.89l3.16,22H112.5l3.16-22c11.22-78.09,87.92-109.51,160.86-139.38,57.89-23.71,113-46.28,116.27-88.11l-1.46-3.58c-36-37.73-65-99.28-78.49-163.34-9.65-45.84-11.5-93.37-2.4-134.82C320,117,341.57,79.74,378.57,57.15,401.66,43.05,430.32,35,465.3,35c35.32,0,64.22,8.18,87.43,22.4,37,22.64,58.48,59.82,68,103.42,9,41.4,7.15,88.82-2.54,134.58"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M770.71,396.09c18.78-19.85,32.6-60.14,32.6-96.44,0-11.1-1.31-21.51-4.18-30.42-2.61-8.06-6.44-14.92-11.69-19.87-6.48-6.14-15.91-9.82-28.91-9.82s-22.39,3.68-28.92,9.81c-5.29,5-9.12,11.79-11.7,19.75-2.88,8.89-4.19,19.28-4.19,30.35,0,36.32,13.91,76.7,32.7,96.64l4,6.33,2,5.21,1.2,7c-.31,39.79-34.18,54.45-69.81,69.88-15.55,6.73-31.58,13.67-42.57,22.78H875.83c-11-9.11-27-16.05-42.56-22.78-35.64-15.43-69.51-30.09-69.82-69.88l1.2-7,2-5.21Zm71.15-96.44c0,42.78-16.5,91.13-39.47,118.49,3.58,12.74,24.34,21.74,46.08,31.15,35.72,15.47,73.29,31.73,79.12,74.7l3,21.83H586.5l3-21.83c5.84-43,43.4-59.23,79.11-74.7,21.72-9.4,42.45-18.38,46.08-31.1-22.92-27.39-39.48-75.86-39.48-118.74a137.16,137.16,0,0,1,6.15-42.09c4.53-14,11.69-26.37,21.95-36C716.78,208.63,734.94,201,758.53,201s41.71,7.69,55.26,20.5c10.28,9.7,17.43,22.06,21.92,36a137.7,137.7,0,0,1,6.15,42.16"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M184.22,396.09C203,376.24,216.81,336,216.81,299.65c0-11.1-1.31-21.51-4.18-30.42-2.61-8.06-6.45-14.92-11.69-19.87-6.48-6.14-15.91-9.82-28.92-9.82s-22.39,3.68-28.91,9.81c-5.29,5-9.13,11.79-11.7,19.75-2.88,8.89-4.19,19.28-4.19,30.35,0,36.32,13.91,76.7,32.7,96.64l4,6.33,2,5.21,1.2,7c-.31,39.79-34.18,54.45-69.82,69.88-15.55,6.73-31.57,13.67-42.56,22.78H289.33c-11-9.11-27-16.05-42.56-22.78-35.63-15.43-69.5-30.09-69.83-69.88l1.21-7,2-5.21Zm71.13-96.44c0,42.77-16.49,91.12-39.46,118.49,3.59,12.74,24.34,21.74,46.08,31.15,35.72,15.47,73.28,31.73,79.11,74.7l3,21.83H0L3,524c5.84-43,43.4-59.23,79.12-74.7,21.71-9.4,42.44-18.38,46.07-31.1-22.93-27.39-39.47-75.86-39.47-118.74,0-14.69,1.91-29,6.14-42.09,4.53-14,11.7-26.37,21.94-36C130.28,208.63,148.44,201,172,201s41.72,7.69,55.27,20.5c10.27,9.71,17.43,22.06,21.92,36a137.7,137.7,0,0,1,6.14,42.16"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M268.54,202.31A204.69,204.69,0,0,1,326.09,59.36C361.72,22.7,410.93,0,465.3,0S568.89,22.7,604.5,59.36a204.64,204.64,0,0,1,57.55,143H642.79A185.33,185.33,0,0,0,590.72,72.77c-32.1-33.06-76.44-53.5-125.42-53.5S372,39.71,339.88,72.77a185.29,185.29,0,0,0-52.07,129.54H268.54"
                                                    }), (0, t.jsx)("path", {
                                                        className: "cls-1",
                                                        d: "M279.93,270.6c9.35,0,17-21.64,17-48.17s-7.62-48.17-17-48.17-17,21.64-17,48.17,7.63,48.17,17,48.17"
                                                    }), (0, t.jsx)("path", {
                                                        className: "cls-1",
                                                        d: "M650.63,270.6c9.34,0,17-21.64,17-48.17s-7.63-48.17-17-48.17-17,21.64-17,48.17,7.62,48.17,17,48.17"
                                                    })]
                                                })
                                            })
                                        }), "                                ", (0, t.jsx)("label", {
                                            className: "text-center uppercase",
                                            children: "TMA "
                                        })]
                                    }), (0, t.jsxs)(d(), {
                                        href: "/nos-services/tma",
                                        className: "".concat("Automatisez" !== e ? "" : "activeTabsTradeSeach", " w-1/3 flex flex-col items-center gap-4 cursor-pointer"),
                                        onMouseEnter: () => {
                                            s("Automatisez")
                                        },
                                        children: [(0, t.jsx)("svg", {
                                            fill: "#374151",
                                            className: "h-20",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 959 900.06",
                                            children: (0, t.jsx)("g", {
                                                id: "Calque_2",
                                                "data-name": "Calque 2",
                                                children: (0, t.jsxs)("g", {
                                                    id: "Calque_1-2",
                                                    "data-name": "Calque 1",
                                                    children: [(0, t.jsx)("path", {
                                                        d: "M903.86,900.06H55.13C24.66,900.06,0,875.38,0,846.34V255.5a55.13,55.13,0,0,1,55.13-55.17H391.72c8.71,0,14.51,5.81,14.51,14.52s-5.8,14.52-14.51,14.52H55.13A26,26,0,0,0,29,255.5V846.34C29,860.86,40.62,871,55.13,871H903.86c14.52,0,26.12-11.61,26.12-24.68V255.5a26,26,0,0,0-26.12-26.13h-338c-8.7,0-14.51-5.81-14.51-14.52s5.81-14.52,14.51-14.52h338A55.14,55.14,0,0,1,959,255.5V846.34C957.55,875.38,932.89,900.06,903.86,900.06Z"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M565.82,312.11H391.72c-8.7,0-14.51-5.8-14.51-14.51v-196a101.56,101.56,0,1,1,203.12,0v196C580.33,306.31,574.53,312.11,565.82,312.11Zm-159.59-29H551.31V101.62C551.31,61,519.4,29,478.77,29S406.23,61,406.23,101.62Z"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M478.77,161.14A55.17,55.17,0,1,1,533.91,106,55.13,55.13,0,0,1,478.77,161.14Zm0-81.3A26.13,26.13,0,1,0,504.89,106,26,26,0,0,0,478.77,79.84Z"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M242.29,548.74c-63.84,0-114.62-52.26-114.62-114.68S179.9,319.38,242.29,319.38c63.84,0,114.61,52.26,114.61,114.68S306.13,548.74,242.29,548.74Zm0-201.78c-47.88,0-85.6,39.19-85.6,85.65s39.17,85.65,85.6,85.65,85.6-39.2,85.6-85.65S290.17,347,242.29,347Z"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M413.48,736H72.54C63.83,736,58,730.21,58,721.49V696.82c0-78.39,63.84-142.27,142.18-142.27h85.6c78.35,0,142.18,63.88,142.18,142.27v24.67C428,730.21,422.19,736,413.48,736ZM87.05,707H399V696.82c0-62.42-50.78-113.24-113.17-113.24h-85.6c-62.38,0-113.16,50.82-113.16,113.24Z"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M413.48,810.05H72.54c-8.71,0-14.51-5.81-14.51-14.52S63.83,781,72.54,781H413.48c8.71,0,14.51,5.8,14.51,14.51S422.19,810.05,413.48,810.05Z"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M853.09,421H507.79c-8.71,0-14.51-5.8-14.51-14.51S499.08,392,507.79,392H854.54c8.7,0,14.51,5.81,14.51,14.52C867.59,415.19,861.79,421,853.09,421Z"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M853.09,550.19H507.79c-8.71,0-14.51-5.8-14.51-14.51s5.8-14.52,14.51-14.52H854.54c8.7,0,14.51,5.81,14.51,14.52S861.79,550.19,853.09,550.19Z"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M853.09,680.85H507.79c-8.71,0-14.51-5.81-14.51-14.52s5.8-14.52,14.51-14.52H854.54c8.7,0,14.51,5.81,14.51,14.52S861.79,680.85,853.09,680.85Z"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M853.09,810.05H507.79c-8.71,0-14.51-5.81-14.51-14.52S499.08,781,507.79,781H854.54c8.7,0,14.51,5.8,14.51,14.51C867.59,804.24,861.79,810.05,853.09,810.05Z"
                                                    })]
                                                })
                                            })
                                        }), "                                ", (0, t.jsx)("label", {
                                            className: "text-center uppercase",
                                            children: "R\xe9gie"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "".concat("Choisissez" !== e ? "" : "activeTabsTradeSeach", " w-1/3 flex flex-col items-center gap-6"),
                                        onMouseEnter: () => {
                                            s("Choisissez")
                                        },
                                        children: [(0, t.jsx)("svg", {
                                            fill: "#374151",
                                            className: "h-20",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 919.18 872.8",
                                            children: (0, t.jsx)("g", {
                                                id: "Calque_2",
                                                "data-name": "Calque 2",
                                                children: (0, t.jsxs)("g", {
                                                    id: "Calque_1-2",
                                                    "data-name": "Calque 1",
                                                    children: [(0, t.jsx)("path", {
                                                        d: "M867.52,522.09c-20.4,113.31-86.74,210.65-178.95,272.09l14.52,30.18C806.32,757.2,880.33,648.56,901.3,522.09H867.52"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M222.61,827.64l15.1-29.94C142.56,736.59,73.93,637.6,53.13,522.09H19.34c21.38,128.52,97.35,238.63,203.27,305.55"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M460.32,33.38A410.41,410.41,0,0,1,672.24,92l32.48-18.81A444.6,444.6,0,0,0,220,70.52l32.8,19A410.9,410.9,0,0,1,460.32,33.38"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M157.74,480.21A230.6,230.6,0,0,0,309,423.76a14.91,14.91,0,0,0,6.2-12.19,13.89,13.89,0,0,0-.65-4.17h.16c-15.75-54.32-66.18-92.28-122.48-92.28H180.75a95.83,95.83,0,0,0,72.71-92.93c0-52.85-42.92-95.88-95.64-95.88s-95.64,43-95.64,95.88a95.83,95.83,0,0,0,72.71,92.93H122.73c-56.14,0-106.41,37.8-122.24,91.95l.17.08A12.09,12.09,0,0,0,0,411.08a15.48,15.48,0,0,0,5.22,11.53,230.41,230.41,0,0,0,152.52,57.6"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M919.18,411.57a17,17,0,0,0-.66-4.17h.08c-15.75-54.32-66.09-92.28-122.48-92.28H784.69a95.85,95.85,0,0,0,72.63-92.93c0-52.85-42.84-95.88-95.55-95.88s-95.64,43-95.64,95.88a95.85,95.85,0,0,0,72.62,92.93H726.59c-54.43,0-103.14,35.58-120.52,87-.58,1.64-1.15,3.27-1.64,4.91l.17.08a12.48,12.48,0,0,0-.66,4,15.55,15.55,0,0,0,3,9.08,18.88,18.88,0,0,0,2.21,2.37h-.09A231,231,0,0,0,913,423.76a14.92,14.92,0,0,0,6.21-12.19"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M618,804.08a15.09,15.09,0,0,0-.65-4.17h.08c-15.75-54.32-66.1-92.28-122.4-92.28H483.5a95.85,95.85,0,0,0-22.93-188.81,94.68,94.68,0,0,0-29.79,4.83,95.8,95.8,0,0,0,6.86,184H425.48c-56.22,0-106.41,37.88-122.24,92l.16.08a13.25,13.25,0,0,0-.65,4A15.34,15.34,0,0,0,308,815.13a230.62,230.62,0,0,0,303.81,1.14,14.94,14.94,0,0,0,6.2-12.19"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M346.27,283a9.37,9.37,0,0,1-9.37-9.36V190.08a9.32,9.32,0,0,1,3.18-7L454.42,82.44a9.38,9.38,0,0,1,12.43,0L579.72,183.09a9.38,9.38,0,0,1,3.15,7v83.54a9.38,9.38,0,0,1-15.74,6.87l-74.59-69.06-32.71-27.69-33.06,27-74.09,69.66A9.32,9.32,0,0,1,346.27,283ZM459.93,162.21a9.35,9.35,0,0,1,6.05,2.21l38.82,32.86.33.28,59,54.61v-57.9L460.56,102,355.64,194.31V252l58.53-55,.49-.43L454,164.33A9.46,9.46,0,0,1,459.93,162.21Z"
                                                    }), (0, t.jsx)("path", {
                                                        d: "M346.27,434.59a9.34,9.34,0,0,1-9.37-9.36V341.68a9.34,9.34,0,0,1,3.18-7L454.42,234a9.4,9.4,0,0,1,12.43,0L579.72,334.69a9.38,9.38,0,0,1,3.15,7v83.55a9.37,9.37,0,0,1-15.74,6.87L492.54,363l-32.71-27.68-33.06,27-74.09,69.66A9.32,9.32,0,0,1,346.27,434.59ZM459.93,313.82A9.26,9.26,0,0,1,466,316l38.82,32.85.33.27,59,54.64V345.89L460.56,253.58,355.64,345.92v57.64l58.53-55,.49-.43L454,315.93A9.45,9.45,0,0,1,459.93,313.82Z"
                                                    })]
                                                })
                                            })
                                        }), "                                ", (0, t.jsx)("label", {
                                            className: "text-center uppercase",
                                            children: "Formations"
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "500",
                                    className: "max-w-5xl",
                                    children: [(0, t.jsx)("p", {
                                        className: "".concat("Tirez" !== e ? "hidden" : "", " text-center "),
                                        children: "Externaliser la maintenance et supervision de votre syst\xe8me EDI avec la TMA EsaLink pour TradeXpress\xae. Une \xe9quipe exp\xe9riment\xe9e disponible et d\xe9di\xe9e \xe0 votre plateforme."
                                    }), (0, t.jsx)("p", {
                                        className: "".concat("Automatisez" !== e ? "hidden" : "", " text-center"),
                                        children: "Soutenu par le p\xf4le Support EDI d’EsaLink, un de nos consultants TradeXpress\xae int\xe8gre directement votre \xe9quipe sur place pour vous assurer efficacit\xe9 dans votre syst\xe8me EDI."
                                    }), (0, t.jsx)("p", {
                                        className: "".concat("Choisissez" !== e ? "hidden" : "", " text-center"),
                                        children: "Formez vos \xe9quipes et vos partenaires sur l'EDI et permettez leur une mont\xe9e en comp\xe9tence effective encadr\xe9e par des formateurs certifi\xe9s."
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "text-center mt-8",
                                    children: (0, t.jsx)(d(), {
                                        className: "inline-block group p-0.5 font-heading text-base text-gray-700 font-bold hover:bg-[#98d9eb] overflow-hidden rounded-md bg-[#98d9eb]",
                                        href: "/contact?src=tradexpress&name=souscrire_service_plateforme_trade",
                                        children: (0, t.jsxs)("div", {
                                            className: "relative py-2 px-6 bg-white rounded",
                                            children: [(0, t.jsx)("div", {
                                                className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-[#98d9eb]"
                                            }), (0, t.jsx)("span", {
                                                className: "relative z-10",
                                                children: "Souscrire \xe0 un service pour votre plateforme TradeXpress\xae"
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
            var S = {
                src: "/_next/static/media/mockup.6e862346.webp",
                height: 280,
                width: 854,
                blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAqKOe6OGLimP//8n//83/1HFnQVleICQTAFZQOCAwAAAAsAEAnQEqCAADAAJAOCWcAnQBDv4C7AD+8o0iaT70SPaa2udfPS2hl+96Q0wU1CAA",
                blurWidth: 8,
                blurHeight: 3
            };

            function E() {
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("section", {
                        className: "pb-24 pt-18 bg-gradient-to-r from-[#ffefc6] to-[#fed5c1] relative",
                        id: "ibm1",
                        children: (0, t.jsx)("div", {
                            className: "container px-4 mx-auto h-full",
                            children: (0, t.jsxs)("div", {
                                "data-aos": "fade-up",
                                "data-aos-duration": "500",
                                className: "flex flex-col md:flex-row gap-18 items-center z-20",
                                children: [(0, t.jsxs)("div", {
                                    className: "w-full md:w-1/2",
                                    children: [(0, t.jsx)("h2", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "500",
                                        className: "mb-12 mx-auto font-heading font-semibold uppercase text-left text-5xl sm:text-7xl !leading-tight text-white",
                                        children: "TradeXpress INFINITY"
                                    }), (0, t.jsx)(n(), {
                                        src: S,
                                        alt: "Logo TradeExpress | Esalink",
                                        className: "w-full z-20 relative"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "w-full md:w-1/2 text-lg",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex gap-8 items-center justify-center",
                                        children: [(0, t.jsx)("div", {
                                            children: (0, t.jsxs)("svg", {
                                                fill: "#FFFFFF",
                                                className: "opacity-80 w-16",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 937 937",
                                                children: [(0, t.jsx)("title", {
                                                    children: "Fichier 1"
                                                }), (0, t.jsx)("g", {
                                                    id: "Calque_2",
                                                    "data-name": "Calque 2",
                                                    children: (0, t.jsx)("g", {
                                                        id: "Calque_1-2",
                                                        "data-name": "Calque 1",
                                                        children: (0, t.jsx)("path", {
                                                            d: "M468.5,0a36.06,36.06,0,0,0-36,36v6.19c0,17.23-12.13,32.6-29.14,35.34-8.25,1.33-16.42,2.88-24.49,4.71-16.73,3.82-33.64-5.64-40.19-21.46l-2.4-5.64a36,36,0,0,0-66.58,27.6l2.39,5.77c6.63,15.86,1.33,34.63-13.31,43.71q-10.59,6.6-20.69,13.8c-14,10-33.33,7.71-45.47-4.44l-4.36-4.36a36,36,0,0,0-51,51l4.36,4.36c12.15,12.14,14.42,31.45,4.44,45.47q-7.2,10.11-13.8,20.69c-9.08,14.64-27.89,20-43.78,13.38l-5.7-2.4a36.06,36.06,0,1,0-27.67,66.59l5.63,2.33c15.83,6.55,25.36,23.46,21.54,40.19-1.83,8.07-3.45,16.24-4.79,24.49-2.69,17-18,29.14-35.26,29.14H36a36,36,0,1,0,0,72.08h6.19c17.23,0,32.6,12.13,35.34,29.14,1.33,8.25,2.88,16.42,4.71,24.49,3.82,16.73-5.64,33.64-21.46,40.19l-5.64,2.4a36,36,0,0,0,27.6,66.58L88.55,665c15.89-6.59,34.66-1.29,43.78,13.31,4.39,7.06,9,14,13.8,20.76,10,14,7.7,33.32-4.44,45.47l-4.43,4.36a36,36,0,0,0,51,51l4.43-4.37c12.15-12.14,31.42-14.49,45.4-4.5,6.78,4.83,13.7,9.47,20.77,13.86,14.59,9.09,20,27.89,13.37,43.78l-2.39,5.71A36.05,36.05,0,1,0,336.39,882l2.32-5.63c6.56-15.82,23.47-25.36,40.19-21.54,8.07,1.84,16.24,3.45,24.49,4.78,16.9,2.63,29.07,18,29.07,35.2V901a36,36,0,0,0,72.08,0v-6.19c0-17.23,12.13-32.6,29.14-35.34,8.25-1.33,16.42-2.87,24.49-4.71,16.73-3.82,33.64,5.64,40.19,21.47l2.4,5.63a36,36,0,0,0,66.58-27.6L665,848.45c-6.59-15.89-1.29-34.66,13.31-43.78q10.59-6.58,20.76-13.79c14-10,33.32-7.71,45.47,4.43l4.36,4.43a36,36,0,0,0,51-51l-4.37-4.44C783.31,732.2,781,712.93,791,699c4.83-6.77,9.47-13.7,13.86-20.76,9.09-14.6,27.89-20,43.78-13.38l5.71,2.39A36,36,0,1,0,882,600.62l-5.63-2.32c-15.82-6.57-25.36-23.47-21.54-40.2,1.84-8.07,3.45-16.24,4.78-24.49,2.63-16.9,18-29.07,35.2-29.07H901a36,36,0,0,0,0-72.08h-6.19c-17.23,0-32.6-12.13-35.34-29.14-1.33-8.25-2.87-16.42-4.71-24.49-3.82-16.73,5.64-33.64,21.47-40.19l5.63-2.4a36,36,0,1,0-27.6-66.58l-5.77,2.39c-15.89,6.6-34.66,1.29-43.78-13.31q-6.58-10.59-13.79-20.76c-10-14-7.71-33.32,4.43-45.47l4.43-4.36a36,36,0,0,0-51-51l-4.37,4.43c-12.14,12.15-31.49,14.49-45.47,4.51q-10.16-7.24-20.76-13.87c-14.6-9.08-19.9-27.89-13.31-43.78l2.4-5.7a36.06,36.06,0,1,0-66.59-27.67l-2.39,5.63c-6.57,15.83-23.47,25.36-40.2,21.54-8.07-1.83-16.24-3.45-24.49-4.78-16.94-2.7-29.07-18-29.07-35.27V36A36.05,36.05,0,0,0,468.5,0Zm0,180.19c159.22,0,288.31,129.09,288.31,288.31S627.72,756.81,468.5,756.81,180.19,627.72,180.19,468.5,309.28,180.19,468.5,180.19ZM396.42,324.35c-1.18,0-2.35.06-3.53.17s-2.34.29-3.5.52-2.3.52-3.43.86-2.24.74-3.33,1.19-2.16,1-3.19,1.51-2.05,1.17-3,1.82-1.93,1.36-2.84,2.11-1.78,1.54-2.62,2.37a32.57,32.57,0,0,0-2.37,2.62c-.75.92-1.46,1.86-2.11,2.84a34.39,34.39,0,0,0-1.82,3c-.56,1-1.06,2.11-1.51,3.19s-.85,2.21-1.19,3.33a34.4,34.4,0,0,0-.86,3.43,35.6,35.6,0,0,0-.69,7V576.61a35.6,35.6,0,0,0,.69,7,34.4,34.4,0,0,0,.86,3.43c.34,1.13.74,2.24,1.19,3.33a35.84,35.84,0,0,0,5.44,9.07,32.57,32.57,0,0,0,2.37,2.62c.84.83,1.71,1.62,2.62,2.37a34.22,34.22,0,0,0,2.84,2.11c1,.65,2,1.26,3,1.82s2.1,1.06,3.19,1.51,2.2.85,3.33,1.19,2.27.63,3.43.86,2.33.4,3.5.52a34.77,34.77,0,0,0,3.53.18,36,36,0,0,0,19.5-5.71L627.36,501.37a36.43,36.43,0,0,0,4.57-2.44,35.77,35.77,0,0,0,4.16-3.08,36.27,36.27,0,0,0,6.8-7.76,36.94,36.94,0,0,0,2.5-4.53,38.26,38.26,0,0,0,1.82-4.85,36.08,36.08,0,0,0,1.11-5,35.47,35.47,0,0,0,0-10,35,35,0,0,0-1-4.76,33.78,33.78,0,0,0-1.62-4.59,35.91,35.91,0,0,0-5-8.31,36,36,0,0,0-11.18-9.23l-2.89-1.48-.28-.07L414.66,329.42a35.88,35.88,0,0,0-18.24-5.07Z"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, t.jsx)("p", {
                                            className: "text-sm",
                                            children: "TradeXpress\xae Infinity permet \xe0 votre organisation de r\xe9pondre efficacement aux projets d'automatisation et de collaborations avec vos partenaires commerciaux. Elle contribue \xe0 la transformation digitale de votre \xe9cosyst\xe8me BtoB."
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex gap-8 items-center justify-center mt-8",
                                        children: [(0, t.jsx)("div", {
                                            children: (0, t.jsxs)("svg", {
                                                fill: "#FFFFFF",
                                                className: "opacity-80 w-16",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 888.53 914",
                                                children: [(0, t.jsx)("title", {
                                                    children: "Fichier 1"
                                                }), (0, t.jsx)("g", {
                                                    id: "Calque_2",
                                                    "data-name": "Calque 2",
                                                    children: (0, t.jsxs)("g", {
                                                        id: "Calque_1-2",
                                                        "data-name": "Calque 1",
                                                        children: [(0, t.jsx)("path", {
                                                            d: "M777.34,507c0,27-3.82,53-9.58,78l66.42,38.47c11.53-36.52,17.29-76,17.29-116.45,0-191.41-133.81-353-312.84-395.41v76C676.25,229,777.34,356,777.34,507"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M120.8,585c-6.74-24-9.66-51-9.66-76.92,0-150.11,101.09-278.08,238.79-319.46v-76C170.82,153.93,37,315.57,37,507c0,40.42,5.84,79.93,17.37,116.45L120.8,585"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M444.28,839.92c-89.56,0-169.45-34.65-229.13-91.45L148.73,787c74.13,77.9,179,127,295.55,127S665.7,864.91,738.86,786l-65.45-38.46a328.3,328.3,0,0,1-229.13,92.34"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M304.62,277.11a37.85,37.85,0,0,0,0,52.9L418.3,443.53a37.76,37.76,0,0,0,52.94,0L584.83,330a36.3,36.3,0,0,0,10.55-26,37,37,0,0,0-10.55-26,37.76,37.76,0,0,0-52.94,0l-50.1,50V37.49a37.55,37.55,0,0,0-75.1,0v289.6l-50-50a36.67,36.67,0,0,0-52.05,0"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M288.31,697.51c-5.77,20.21,6.73,40.41,26,46.17,20.22,5.85,40.44-6.65,46.21-26l41.4-154.91c5.77-20.2-6.73-40.4-26-46.17l-155-41.38a35.33,35.33,0,0,0-27.93,3.9c-8.69,4.78-14.45,12.49-17.29,23-5.77,20.21,6.73,40.41,26,46.25L270,566.71,18.74,709.11c-18.27,10.55-24,32.62-13.48,51,9.66,18.26,32.72,24.1,51,14.45l251.3-145.33-19.24,68.32"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M869.74,709.11,619.5,564.76l68.36-18.25c20.22-5.77,31.75-26,26-46.18s-26-31.8-46.28-26l-154.93,41.3c-20.21,5.76-31.82,26.05-26.06,46.17l41.41,155c2.92,9.58,8.69,18.26,17.38,23s18.27,6.73,27.93,3.81c20.14-5.76,31.74-26,26-46.17l-18.35-68.32,251.3,145.33c18.27,10.55,40.43,3.81,51-13.47,10.64-18.26,4.87-41.39-13.48-51.94"
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, t.jsx)("p", {
                                            className: "text-sm",
                                            children: "Optez pour un pilotage fiable de vos processus d\xe9mat\xe9rialis\xe9s, une tra\xe7abilit\xe9 fonctionnelle de vos flux, et une agilit\xe9 accrue dans la gestion de vos projets."
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex gap-8 items-center justify-center mt-8",
                                        children: [(0, t.jsx)("div", {
                                            children: (0, t.jsxs)("svg", {
                                                fill: "#FFFFFF",
                                                className: "opacity-80 w-16",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 970.76 566.56",
                                                children: [(0, t.jsx)("title", {
                                                    children: "Fichier 1"
                                                }), (0, t.jsx)("g", {
                                                    id: "Calque_2",
                                                    "data-name": "Calque 2",
                                                    children: (0, t.jsx)("g", {
                                                        id: "Calque_1-2",
                                                        "data-name": "Calque 1",
                                                        children: (0, t.jsx)("path", {
                                                            d: "M301.73,55.61,234.88.21,0,283.28,234.88,566.56l66.85-55.39L112.88,283.28ZM268.31,326.73h86.83v-86.9H268.31Zm434.15-86.9H615.63v86.9h86.83ZM442,326.73H528.8v-86.9H442ZM735.89,0,669,55.4,857.89,283.28,669,511l66.86,55.4L970.76,283.28Z"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, t.jsx)("p", {
                                            className: "text-sm",
                                            children: "Cela inclut les interfaces entre applications sp\xe9cifiques, progiciels, ERP, les \xe9changes entre bases de donn\xe9es h\xe9t\xe9rog\xe8nes, la synchronisation des r\xe9f\xe9rentiels, la collecte et le transfert de donn\xe9es."
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex gap-8 items-center justify-center mt-8",
                                        children: [(0, t.jsx)("div", {
                                            children: (0, t.jsxs)("svg", {
                                                fill: "#FFFFFF",
                                                className: "opacity-80 w-16",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 770.59 888.47",
                                                children: [(0, t.jsx)("title", {
                                                    children: "Fichier 1"
                                                }), (0, t.jsx)("g", {
                                                    id: "Calque_2",
                                                    "data-name": "Calque 2",
                                                    children: (0, t.jsxs)("g", {
                                                        id: "Calque_1-2",
                                                        "data-name": "Calque 1",
                                                        children: [(0, t.jsx)("path", {
                                                            d: "M407.29,452.27c36.42-6.55,62.52-17.75,81.2-29.89A180.5,180.5,0,0,0,368,358.88C337.2,374.73,302.67,384,266.24,384s-71-8.36-101.86-25.16C72.85,369.14,0,447.61,0,543V653.16A16.71,16.71,0,0,0,16.79,670H335.31a192.07,192.07,0,0,1-.87-22.4V535.48a85.83,85.83,0,0,1,72.85-83.21"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M427.79,160.75A160.65,160.65,0,0,1,267.11,321.42c-88.69,0-160.6-71.94-160.6-160.67S178.42,0,267.11,0A160.67,160.67,0,0,1,427.79,160.75"
                                                        }), (0, t.jsx)("path", {
                                                            d: "M677.24,626.11l-95.32,95.28a30.14,30.14,0,0,1-21.44,9.39c-8.44,0-15.93-2.84-21.53-9.39l-49.51-49.46c-12.14-12.22-12.14-31.78,0-43,12.14-12.23,31.77-12.23,43,0l28.07,28,73.79-73.83c12.14-12.15,31.69-12.15,43,0C688.44,594.32,688.44,614,677.24,626.11Zm71-114.05c-81.29-13-126.07-49.54-147.59-74.7a24.18,24.18,0,0,0-35.48,0c-22.47,25.16-66.31,61.68-147.59,74.7A24.32,24.32,0,0,0,397,536.43V648.51C397,772.81,529.65,860.68,571.67,885A22.83,22.83,0,0,0,596,885C637,860.68,770.59,772.81,770.59,648.51V536.43a26.81,26.81,0,0,0-22.39-24.37"
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, t.jsx)("p", {
                                            className: "text-sm",
                                            children: "TradeXpress \xe9pouse et organise vos syst\xe8mes d’information \xe0 travers de nouvelles interfaces ergonomiques ayant fait leurs preuves dans de milliers d'entreprises \xe0 l'internationale.                                "
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
            var L = s(1163);

            function T() {
                let e = "Solution EDI - TradeXpress\xae : Logiciel Generix | ESALINK",
                    a = "TradeXpress\xae - La solution EDI de GENERIX est une r\xe9f\xe9rence dans l'int\xe9gration B2B. Int\xe9grateur certifi\xe9, EsaLink vous accompagne dans tous vos projets EDI.",
                    {
                        asPath: s
                    } = (0, L.useRouter)();
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(i(), {
                        children: [(0, t.jsx)("title", {
                            children: e
                        }), (0, t.jsx)("meta", {
                            name: "description",
                            content: a
                        }), (0, t.jsx)("meta", {
                            name: "author",
                            content: "EsaLink"
                        }), (0, t.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0, t.jsx)("meta", {
                            property: "og:site_name",
                            content: e
                        }), (0, t.jsx)("meta", {
                            property: "og:url",
                            content: "https://www.esalink.com".concat(s)
                        }), (0, t.jsx)("meta", {
                            name: "image",
                            property: "og:image",
                            content: "https://www.esalink.com/images/esalink_linkedin.jpg"
                        }), (0, t.jsx)("meta", {
                            name: "twitter:description",
                            content: a
                        }), (0, t.jsx)("meta", {
                            name: "twitter:title",
                            content: e
                        }), (0, t.jsx)("meta", {
                            name: "twitter:image",
                            content: ""
                        }), (0, t.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, t.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, t.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.esalink.com".concat(s)
                        }, "canonical")]
                    }), (0, t.jsx)(Z, {}), (0, t.jsxs)("main", {
                        id: "beginMain",
                        children: [(0, t.jsx)(q, {}), (0, t.jsx)(E, {}), (0, t.jsx)(p, {}), (0, t.jsx)(u, {}), (0, t.jsx)(j, {}), (0, t.jsx)(k, {}), (0, t.jsx)(g, {}), (0, t.jsx)(H, {}), (0, t.jsx)(A, {}), (0, t.jsx)(h, {})]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [488, 774, 888, 179], function() {
            return e(e.s = 339)
        }), _N_E = e.O()
    }
]);