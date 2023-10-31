(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [335], {
        6489: function(e, t) {
            "use strict";
            /*!
             * cookie
             * Copyright(c) 2012-2014 Roman Shtylman
             * Copyright(c) 2015 Douglas Christopher Wilson
             * MIT Licensed
             */
            t.parse = function(e, t) {
                if ("string" != typeof e) throw TypeError("argument str must be a string");
                for (var s = {}, i = e.split(";"), r = (t || {}).decode || a, n = 0; n < i.length; n++) {
                    var l = i[n],
                        o = l.indexOf("=");
                    if (!(o < 0)) {
                        var c = l.substring(0, o).trim();
                        if (void 0 == s[c]) {
                            var d = l.substring(o + 1, l.length).trim();
                            '"' === d[0] && (d = d.slice(1, -1)), s[c] = function(e, t) {
                                try {
                                    return t(e)
                                } catch (a) {
                                    return e
                                }
                            }(d, r)
                        }
                    }
                }
                return s
            }, t.serialize = function(e, t, a) {
                var r = a || {},
                    n = r.encode || s;
                if ("function" != typeof n) throw TypeError("option encode is invalid");
                if (!i.test(e)) throw TypeError("argument name is invalid");
                var l = n(t);
                if (l && !i.test(l)) throw TypeError("argument val is invalid");
                var o = e + "=" + l;
                if (null != r.maxAge) {
                    var c = r.maxAge - 0;
                    if (isNaN(c) || !isFinite(c)) throw TypeError("option maxAge is invalid");
                    o += "; Max-Age=" + Math.floor(c)
                }
                if (r.domain) {
                    if (!i.test(r.domain)) throw TypeError("option domain is invalid");
                    o += "; Domain=" + r.domain
                }
                if (r.path) {
                    if (!i.test(r.path)) throw TypeError("option path is invalid");
                    o += "; Path=" + r.path
                }
                if (r.expires) {
                    if ("function" != typeof r.expires.toUTCString) throw TypeError("option expires is invalid");
                    o += "; Expires=" + r.expires.toUTCString()
                }
                if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite) switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
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
            var a = decodeURIComponent,
                s = encodeURIComponent,
                i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        },
        7041: function(e, t, a) {
            "use strict";
            var s = this && this.__assign || function() {
                    return (s = Object.assign || function(e) {
                        for (var t, a = 1, s = arguments.length; a < s; a++)
                            for (var i in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                i = this && this.__rest || function(e, t) {
                    var a = {};
                    for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && 0 > t.indexOf(s) && (a[s] = e[s]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, s = Object.getOwnPropertySymbols(e); i < s.length; i++) 0 > t.indexOf(s[i]) && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (a[s[i]] = e[s[i]]);
                    return a
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkCookies = t.hasCookie = t.removeCookies = t.deleteCookie = t.setCookies = t.setCookie = t.getCookie = t.getCookies = void 0;
            var r = a(6489),
                n = function() {
                    return "undefined" != typeof window
                },
                l = function(e) {
                    void 0 === e && (e = "");
                    try {
                        var t = JSON.stringify(e);
                        return /^[\{\[]/.test(t) ? t : e
                    } catch (a) {
                        return e
                    }
                };
            t.getCookies = function(e) {
                if (e && (t = e.req), !n()) return t && t.cookies ? t.cookies : t && t.headers && t.headers.cookie ? (0, r.parse)(t.headers.cookie) : {};
                for (var t, a = {}, s = document.cookie ? document.cookie.split("; ") : [], i = 0, l = s.length; i < l; i++) {
                    var o = s[i].split("="),
                        c = o.slice(1).join("=");
                    a[o[0]] = c
                }
                return a
            }, t.getCookie = function(e, a) {
                var s, i = (0, t.getCookies)(a)[e];
                if (void 0 !== i) return "true" === (s = i ? i.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : i) || "false" !== s && ("undefined" !== s ? "null" === s ? null : s : void 0)
            }, t.setCookie = function(e, t, a) {
                if (a) {
                    var o, c, d, u = a.req,
                        x = a.res,
                        m = i(a, ["req", "res"]);
                    c = u, d = x, o = m
                }
                var h = (0, r.serialize)(e, l(t), s({
                    path: "/"
                }, o));
                if (n()) document.cookie = h;
                else if (d && c) {
                    var f = d.getHeader("Set-Cookie");
                    if (Array.isArray(f) || (f = f ? [String(f)] : []), d.setHeader("Set-Cookie", f.concat(h)), c && c.cookies) {
                        var p = c.cookies;
                        "" === t ? delete p[e] : p[e] = l(t)
                    }
                    if (c && c.headers && c.headers.cookie) {
                        var p = (0, r.parse)(c.headers.cookie);
                        "" === t ? delete p[e] : p[e] = l(t), c.headers.cookie = Object.entries(p).reduce(function(e, t) {
                            return e.concat("".concat(t[0], "=").concat(t[1], ";"))
                        }, "")
                    }
                }
            }, t.setCookies = function(e, a, s) {
                return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."), (0, t.setCookie)(e, a, s)
            }, t.deleteCookie = function(e, a) {
                return (0, t.setCookie)(e, "", s(s({}, a), {
                    maxAge: -1
                }))
            }, t.removeCookies = function(e, a) {
                return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."), (0, t.deleteCookie)(e, a)
            }, t.hasCookie = function(e, a) {
                return !!e && (0, t.getCookies)(a).hasOwnProperty(e)
            }, t.checkCookies = function(e, a) {
                return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."), (0, t.hasCookie)(e, a)
            }
        },
        1382: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
                return a(2854)
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
        2854: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            });
            var s = a(5893),
                i = a(9008),
                r = a.n(i),
                n = a(1664),
                l = a.n(n),
                o = {
                    src: "/_next/static/media/uk.e38acaa1.svg",
                    height: 512,
                    width: 512
                },
                c = {
                    src: "/_next/static/media/fr.6a3e73fa.svg",
                    height: 512,
                    width: 512
                },
                d = a(5675),
                u = a.n(d),
                x = a(2920),
                m = a(1163),
                h = a(598),
                f = a(7294);

            function p() {
                let [e, t] = (0, f.useState)(void 0), [a, i] = (0, f.useState)(void 0), r = (0, m.useRouter)(), n = async e => {
                    let a;
                    if (e.preventDefault(), t(void 0), i(void 0), !e.target.firstName.value || !e.target.lastName.value || !e.target.email.value || !e.target.email.value || !e.target.tel.value || !e.target.company.value) {
                        x.Am.warn("Vous devez remplir tous les champs obligatoires !"), t("warn"), i("Vous devez remplir tous les champs obligatoires !");
                        return
                    }
                    r.query.name;
                    let s = h.J.find(e => "contact" === e.title);
                    if (r.query.src && h.J.find(e => e.title === r.query.src)) {
                        var n;
                        s = h.J.find(e => e.title === r.query.src), r.query.name && (null == s ? void 0 : null === (n = s.items) || void 0 === n ? void 0 : n.find(e => e.slug === r.query.name)) && (a = null == s ? void 0 : s.items.find(e => e.slug === r.query.name))
                    }
                    let l = {
                            firstName: e.target.firstName.value,
                            lastName: e.target.lastName.value,
                            email: e.target.email.value,
                            company: e.target.company.value,
                            message: e.target.message.value,
                            tel: e.target.tel.value,
                            pathname: null == s ? void 0 : s.title,
                            search: null == a ? void 0 : a.titre
                        },
                        o = JSON.stringify(l),
                        c = await fetch("/api/contact", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: o
                        }),
                        d = await c.json();
                    d && d.success ? (e.target.firstName.value = "", e.target.lastName.value = "", e.target.email.value = "", e.target.company.value = "", e.target.message.value = "", e.target.tel.value = "", x.Am.success("Message envoy\xe9 avec succ\xe8s. Nous vous contactons au plus vite! A tr\xe8s bient\xf4t !"), t("success"), i("Message envoy\xe9 avec succ\xe8s. Nous vous contactons au plus vite! A tr\xe8s bient\xf4t !")) : (x.Am.error(d.message), t("error"), i(d.message))
                };
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("section", {
                        className: "relative py-12 xl:py-24 overflow-hidden bg-white",
                        children: (0, s.jsx)("div", {
                            className: "relative z-10 container mx-auto px-4 max-w-7xl",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col xl:flex-row -m-6",
                                "data-aos": "fade-right",
                                "data-aos-duration": "500",
                                children: [(0, s.jsxs)("div", {
                                    className: "w-full xl:w-5/12 p-6",
                                    children: [(0, s.jsxs)("div", {
                                        className: "md:max-w-lg mb-7",
                                        children: [(0, s.jsxs)("h2", {
                                            className: "mb-7 font-heading font-semibold text-5xl",
                                            children: ["Restons en ", (0, s.jsx)("label", {
                                                className: "text-esalink-orange",
                                                children: "contact"
                                            })]
                                        }), (0, s.jsx)("p", {
                                            className: "text-gray-600 text-lg",
                                            children: "Notre \xe9quipe est disponible de 9h \xe0 18h et sera ravie d’\xe9changer avec vous concernant les besoins de votre structure.                "
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex items-center gap-4 text-esalink-blue hover:opacity-80 mb-12",
                                        children: [(0, s.jsx)("i", {
                                            className: "fa-regular fa-envelope text-2xl"
                                        }), (0, s.jsx)("p", {
                                            className: "text-lg",
                                            children: (0, s.jsx)(l(), {
                                                href: "mailto:contact@esalink.com",
                                                children: "contact@esalink.com"
                                            })
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col gap-10",
                                        children: [(0, s.jsxs)("div", {
                                            className: "w-full flex items-start",
                                            children: [(0, s.jsx)(u(), {
                                                src: c,
                                                alt: "FR flag | Esalink",
                                                className: "w-8 my-auto mr-5"
                                            }), (0, s.jsxs)("div", {
                                                className: "md:max-w-xs",
                                                children: [(0, s.jsx)("h3", {
                                                    className: "mb-1 font-heading font-medium text-xl ",
                                                    children: "France"
                                                }), (0, s.jsx)("p", {
                                                    className: "text-lg text-gray-600",
                                                    children: "2 rue Jules M\xe9line, 51430 Bezannes"
                                                }), (0, s.jsx)("p", {
                                                    className: "text-lg text-gray-600 hover:opacity-80",
                                                    children: (0, s.jsx)("a", {
                                                        href: "tel:+33326356287",
                                                        children: "+33 3 26 35 62 87"
                                                    })
                                                })]
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "w-full flex items-start",
                                            children: [(0, s.jsx)(u(), {
                                                src: o,
                                                alt: "UK flag | Esalink",
                                                className: "w-8 my-auto mr-5"
                                            }), (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("h3", {
                                                    className: "mb-1 font-heading font-medium text-xl",
                                                    children: "UK"
                                                }), (0, s.jsx)("p", {
                                                    className: "text-lg text-gray-600",
                                                    children: "235 Vauxhall Bridge Road, SW1V1EJ London"
                                                }), (0, s.jsx)("p", {
                                                    className: "text-lg text-gray-600 hover:opacity-80",
                                                    children: (0, s.jsx)("a", {
                                                        href: "tel:+14953893995",
                                                        children: "+1 (495) 389 3995"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "w-full xl:w-7/12 p-6 flex justify-center xl:justify-end",
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "500",
                                    children: (0, s.jsxs)("div", {
                                        className: "p-8 md:p-12 max-w-4xl rounded-10 bg-slate-100",
                                        children: [(0, s.jsx)("h2", {
                                            className: "mb-8 font-heading font-semibold text-4xl sm:text-6xl",
                                            children: "Nous contacter"
                                        }), (0, s.jsxs)("form", {
                                            onSubmit: n,
                                            className: "flex flex-wrap max-w-xl mx-auto",
                                            children: [(0, s.jsxs)("div", {
                                                className: "w-full mb-5 flex flex-col md:flex-row gap-4",
                                                children: [(0, s.jsx)("input", {
                                                    name: "firstName",
                                                    className: "bg-white w-full px-5 py-4 text-gray-600 text-base border border-slate-400 outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 rounded-xl",
                                                    type: "text",
                                                    placeholder: "Pr\xe9nom *"
                                                }), (0, s.jsx)("input", {
                                                    name: "lastName",
                                                    className: "bg-white w-full px-5 py-4 text-gray-600 text-base border border-slate-400 outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 rounded-xl",
                                                    type: "text",
                                                    placeholder: "Nom *"
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "w-full mb-5 flex flex-col md:flex-row gap-4",
                                                children: [(0, s.jsx)("input", {
                                                    name: "email",
                                                    className: "bg-white w-full px-5 py-4 text-gray-600 text-base border border-slate-400 outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 rounded-xl",
                                                    type: "text",
                                                    placeholder: "Email *"
                                                }), (0, s.jsx)("input", {
                                                    name: "tel",
                                                    className: "bg-white w-full px-5 py-4 text-gray-600 text-base border border-slate-400 outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 rounded-xl",
                                                    type: "text",
                                                    placeholder: "T\xe9l\xe9phone *"
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: "w-full mb-5",
                                                children: (0, s.jsx)("input", {
                                                    name: "company",
                                                    className: "bg-white w-full px-5 py-4 text-gray-600 text-base border border-slate-400 outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 rounded-xl",
                                                    type: "text",
                                                    placeholder: "Entreprise *"
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "w-full mb-5",
                                                children: (0, s.jsx)("textarea", {
                                                    name: "message",
                                                    className: "bg-white w-full h-40 px-5 py-4 text-gray-500 text-base border border-slate-400 outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 resize-none rounded-xl",
                                                    placeholder: "Message"
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "w-full mb-5",
                                                children: (0, s.jsxs)("div", {
                                                    className: "group relative",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "absolute top-0 left-0 w-full h-full bg-gradient-cyan2 opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"
                                                    }), (0, s.jsxs)("button", {
                                                        className: "group relative font-heading px-6 py-5 w-full uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-indigo"
                                                        }), (0, s.jsx)("p", {
                                                            className: "relative z-10",
                                                            children: "Envoyer"
                                                        })]
                                                    })]
                                                })
                                            }), e && (0, s.jsx)("div", {
                                                className: "w-full mb-5 ".concat("success" === e ? " text-green-600" : "warn" === e ? "text-esalink-orange" : "text-red-600"),
                                                children: (0, s.jsx)("p", {
                                                    className: "mx-auto text-sm text-center",
                                                    children: a
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "w-full",
                                                children: (0, s.jsxs)("p", {
                                                    className: "max-w-xs mx-auto text-sm text-gray-400 text-center",
                                                    children: ['En cliquant sur le bouton "Envoyer", vous acceptez nos ', (0, s.jsx)(l(), {
                                                        href: "/privacy-policy",
                                                        className: "underline",
                                                        children: "Termes & Conditions"
                                                    })]
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })
            }
            var g = a(7488),
                v = a(6165),
                w = a(3280);

            function y() {
                return (0, s.jsxs)("header", {
                    className: "relative bg-gradient-esalink-simple background-animate overflow-hidden",
                    children: [(0, s.jsx)(g.Z, {}), (0, s.jsxs)("div", {
                        className: "flex z-10 container mx-auto px-4 mt-12 mb-20",
                        children: [(0, s.jsx)("div", {
                            className: "flex flex-col flex-wrap justify-center z-10",
                            children: (0, s.jsxs)("div", {
                                className: "w-auto",
                                children: [(0, s.jsx)("div", {
                                    className: "flex mb-8",
                                    children: (0, s.jsxs)("ol", {
                                        className: "inline-flex items-center space-x-1 md:space-x-3",
                                        children: [(0, s.jsx)("li", {
                                            className: "inline-flex items-center",
                                            children: (0, s.jsxs)(l(), {
                                                href: "/",
                                                className: "inline-flex items-center text-sm text-white hover:text-slate-100 dark:hover:text-white",
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
                                                }), (0, s.jsx)("span", {
                                                    className: "font-semibold ml-1 text-sm text-white md:ml-2",
                                                    children: "Nous contacter"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, s.jsx)("h1", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "500",
                                    className: "mb-4 font-heading text-white text-8xl md:text-10xl font-semibold",
                                    children: "Nous contacter"
                                }), (0, s.jsx)("p", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "700",
                                    className: "mb-9 font-medium text-lg text-white",
                                    children: "Notre \xe9quipe est \xe0 votre disposition pour r\xe9pondre \xe0 l'ensemble de vos questions."
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsx)(u(), {
                                src: v.Z,
                                alt: "Globe Image | Esalink",
                                className: "absolute w-[390px] lg:w-[565px] xl:w-[658px] top-72 lg:top-40 xl:top-24 opacity-30 -right-14"
                            })
                        }), (0, s.jsx)(u(), {
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

            function j() {
                let e = "Nous contacter | ESALINK",
                    {
                        asPath: t
                    } = (0, m.useRouter)();
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(r(), {
                        children: [(0, s.jsx)("title", {
                            children: e
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: ""
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
                            content: ""
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
                    }), (0, s.jsxs)("main", {
                        children: [(0, s.jsx)(y, {}), (0, s.jsx)(p, {})]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [488, 774, 888, 179], function() {
            return e(e.s = 1382)
        }), _N_E = e.O()
    }
]);