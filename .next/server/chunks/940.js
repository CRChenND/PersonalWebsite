exports.id = 940;
exports.ids = [940];
exports.modules = {

/***/ 4454:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3155))

/***/ }),

/***/ 8375:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1858));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5457, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7528));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3929))

/***/ }),

/***/ 1055:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9150, 23))

/***/ }),

/***/ 3155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7913);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Error() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__/* .Blob */ .t6, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mx-auto mt-16 text-6xl font-bold text-center md:mt-20 lg:mt-24 text-back-primary",
                        children: "404"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-24 text-2xl font-medium text-center lg:mt-36 text-fore-secondary",
                children: "Page not found. The page you’re looking for does not exist."
            })
        ]
    });
}


/***/ }),

/***/ 7528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ Analytics)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3944);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1153);
/* __next_internal_client_entry_do_not_use__ Analytics auto */ 


function Analytics() {
    (0,_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_2__/* .useAnalyticsInstance */ .r)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
        "data-goatcounter": `https://${process.env.NEXT_PUBLIC_GOAT_COUNTER_CODE}.goatcounter.com/count`,
        "data-goatcounter-settings": '{"allow_local": true}',
        async: true,
        src: "//gc.zgo.at/count.js"
    });
}


/***/ }),

/***/ 7913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OL: () => (/* binding */ NavLink),
/* harmony export */   t6: () => (/* binding */ Blob)
/* harmony export */ });
/* unused harmony exports ExtLink, Button, Input, TextArea */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1198);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const NavLink = ({ to, title = "Link", selected = false, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        href: to,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("font-semibold tracking-wide text-sm hover:text-accent transition duration-150 ", {
            "text-accent": selected,
            "text-fore-secondary": !selected
        }),
        children: title
    });
};
const ExtLink = ({ children, link })=>{
    return /*#__PURE__*/ _jsx("a", {
        href: link,
        className: "font-medium text-accent hover:underline  focus:text-accent",
        target: "_blank",
        rel: "noopener noreferrer",
        children: children
    });
};
const Button = ({ children, className, link, ...props })=>{
    return /*#__PURE__*/ _jsx("a", {
        ...props,
        className: classNames("px-20 py-2 rounded bg-gradient-to-r from-teal-500 to-blue-500 bg-[length:150%] bg-left hover:bg-right transition-all text-back-secondary duration-[0.5s] ease-out  focus:text-accent", className),
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        children: children
    });
};
const Blob = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "aria-hidden": "true",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative h-48 blob md:h-56 lg:h-64",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "h-full fill-teal-400 dark:fill-teal-500 animate-blob-spin",
                viewBox: "0 0 278 279",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M137.896 0.127761C167.59 -0.638578 198.383 1.62824 222.877 18.4301C247.738 35.4836 263.129 63.014 271.706 91.9151C280.118 120.258 280.513 150.661 270.364 178.43C260.457 205.538 239.342 225.92 216.353 243.372C192.903 261.174 167.336 278.631 137.896 278.994C108.28 279.358 81.0666 263.928 58.0226 245.322C35.8955 227.455 20.5343 203.415 11.0775 176.594C1.41508 149.191 -4.23875 119.749 3.91245 91.8587C12.2111 63.4638 31.6331 39.4483 56.0438 22.7357C79.9856 6.34414 108.89 0.876363 137.896 0.127761Z"
                })
            })
        })
    });
};
const Input = ({ labelText, name, ...props })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "group",
        children: [
            /*#__PURE__*/ _jsx("label", {
                className: "text-sm font-medium transition-colors duration-200 text-fore-secondary group-hover:text-accent",
                htmlFor: name,
                children: labelText
            }),
            /*#__PURE__*/ _jsx("input", {
                className: "block w-full p-3 mt-1 border rounded-md outline-none border-back-subtle bg-back-primary focus:border-accent text-primary disabled:opacity-50",
                name: name,
                ...props
            })
        ]
    });
};
const TextArea = ({ labelText, name, ...props })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "group",
        children: [
            /*#__PURE__*/ _jsx("label", {
                className: "text-sm font-medium transition-colors duration-200 text-fore-secondary group-hover:text-accent",
                htmlFor: name,
                children: labelText
            }),
            /*#__PURE__*/ _jsx("textarea", {
                className: "block w-full p-3 mt-1 border rounded-md outline-none border-back-subtle bg-back-primary focus:border-accent text-fore-primary disabled:opacity-50",
                style: {
                    minHeight: "80px"
                },
                name: name,
                ...props
            })
        ]
    });
};


/***/ }),

/***/ 1858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Header: () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./public/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.9f9cef0a.png","height":412,"width":412,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR42mOAAk1WYYGDDLxcv0RFRH9JSEgcAomBZTjlpDRZhPjfAZn/kbG0tPQ7FRUVsCKQ6v8mWQk/BeOC/xfl5f8vr6j4CVV4kEHCyuSX14yu//YNJf8Z1GX/9/b0/F+3bt3/9evX/3d3d//FIGqq/8tjUut/o9rC/77x0f8P7N//f/Omzf/3A2kXV5dfDCBjgPi/bEzwz/Dqkv9FuXn/O3p7fsYmJvwHW88uJabJIiqE6kgTnf9sOurv9BiYNeHeZOLnPcQuyP9LQEjoFxPQVD6oNwGnclZP71Ef3wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./components/atoms.tsx
var atoms = __webpack_require__(7913);
// EXTERNAL MODULE: ./components/themeToggle.tsx + 4 modules
var themeToggle = __webpack_require__(7671);
;// CONCATENATED MODULE: ./components/header.tsx
/* __next_internal_client_entry_do_not_use__ Header auto */ 






const routes = [
    {
        path: "/",
        label: "Home",
        exact: true
    },
    {
        path: "/publications",
        label: "Publications"
    },
    {
        path: "/cv",
        label: "CV"
    }
];
function Header() {
    const path = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "container h-32 max-w-screen-lg px-5 m-auto overflow-hidden sm:px-12 md:px-20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "flex items-center justify-start h-full mt-auto space-x-6 text-sm md:justify-start",
            "aria-label": "Main Navigation",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    "aria-label": "Website logo, go back to homepage.",
                    className: "flex items-center border-white group ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "overflow-hidden top-2 transition-transform ease-in-out border-2 rounded-full w-9 h-9 group-hover:-translate-y-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo,
                                alt: "LOGO",
                                width: 36,
                                height: 36,
                                priority: true
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "items-center flex-grow hidden space-x-6 sm:flex",
                    children: routes.map((route)=>/*#__PURE__*/ jsx_runtime_.jsx(atoms/* NavLink */.OL, {
                            to: route.path,
                            title: route.label,
                            selected: route.exact === true ? route.path === path : path.startsWith(route.path)
                        }, route.path))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(themeToggle/* ThemeToggle */.T, {
                    className: "hidden mt-1 transition-transform ease-in-out focus:outline-none sm:block hover:text-accent hover:-translate-y-1 "
                })
            ]
        })
    });
}


/***/ }),

/***/ 3929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileNav: () => (/* binding */ MobileNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1198);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _themeToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7671);
/* __next_internal_client_entry_do_not_use__ MobileNav auto */ 





const routes = [
    {
        path: "/",
        label: "Home",
        exact: true
    },
    {
        path: "/publications",
        label: "Publications"
    },
    {
        path: "/cv",
        label: "CV"
    },
    {
        path: "/contact",
        label: "Contact"
    }
];
function MobileNav() {
    const [navShow, setNavShow] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const body = document.body;
        if (typeof body !== "undefined") {
            if (navShow) {
                body.style.setProperty("overflow", "hidden");
            } else {
                body.style.removeProperty("overflow");
            }
        }
    }, [
        navShow
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-xl sm:hidden",
        "aria-hidden": !navShow,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "fixed right-0 z-50 px-5 py-12 md:hidden focus:outline-none",
                onClick: (_)=>{
                    setNavShow(!navShow);
                },
                children: navShow ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-6 h-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-6 h-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 8h16M4 16h16"
                    })
                })
            }),
            navShow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed w-full h-screen bg-back-primary"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "fixed w-full h-screen cursor-auto",
                        onClick: (e)=>{
                            setNavShow(!navShow);
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "fixed flex flex-col items-center w-full h-screen px-6 py-48 mt-auto text-base tracking-widest text-fore-primary",
                        children: [
                            routes.map((route)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNavLink, {
                                    to: route.path,
                                    title: route.label,
                                    selected: route.exact === true ? route.path === path : path.startsWith(route.path),
                                    hide: ()=>setNavShow(false)
                                }, route.path)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_themeToggle__WEBPACK_IMPORTED_MODULE_5__/* .ThemeToggle */ .T, {})
                        ]
                    })
                ]
            })
        ]
    });
}
function MobileNavLink({ to, title, selected, hide }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex-grow",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: to,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                "text-accent": !!selected
            }),
            onClick: (_)=>hide(),
            children: title
        })
    });
}


/***/ }),

/***/ 7671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ ThemeToggle)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./hooks/useAnalytics.ts
var useAnalytics = __webpack_require__(1153);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./hooks/usePrefersDarkMode.ts

function usePrefersDarkMode() {
    const [value, setValue] = (0,react_.useState)(true);
    (0,react_.useEffect)(()=>{
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setValue(mediaQuery.matches);
        const handler = ()=>setValue(mediaQuery.matches);
        mediaQuery.addEventListener("change", handler);
        return ()=>mediaQuery.removeEventListener("change", handler);
    }, []);
    return value;
}

;// CONCATENATED MODULE: ./hooks/useSafeLocalStorage.ts

function useSafeLocalStorage(key, initialValue) {
    const [valueProxy, setValueProxy] = (0,react_.useState)(()=>{
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue;
        } catch  {
            return initialValue;
        }
    });
    const setValue = (value)=>{
        try {
            window.localStorage.setItem(key, value);
            setValueProxy(value);
        } catch  {
            setValueProxy(value);
        }
    };
    return [
        valueProxy,
        setValue
    ];
}

;// CONCATENATED MODULE: ./hooks/useDarkMode.ts



function useDarkMode() {
    const [isEnabled, setIsEnabled] = useSafeLocalStorage("dark-mode", undefined);
    const prefersDarkMode = usePrefersDarkMode();
    const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled;
    (0,react_.useEffect)(()=>{
        if (window === undefined) return;
        const root = window.document.documentElement;
        root.classList.remove(enabled ? "light" : "dark");
        root.classList.add(enabled ? "dark" : "light");
    }, [
        enabled
    ]);
    return [
        enabled,
        setIsEnabled
    ];
}

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1198);
;// CONCATENATED MODULE: ./components/icons.tsx


const Sun20 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-5 h-5",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        role: "img",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        })
    });
};
const Moon20 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-5 h-5",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        role: "img",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        })
    });
};
const MailAt24 = ({ className })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classNames("w-6 h-6", className),
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Email Address"
            }),
            /*#__PURE__*/ _jsx("path", {
                stroke: "none",
                d: "M0 0h24v24H0z"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M16 12v1.5a2.5 2.5 0 005 0V12a9 9 0 10-5.5 8.28"
            })
        ]
    });
};
const Twitter24 = ({ className })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classNames("w-6 h-6", className),
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Twitter"
            }),
            /*#__PURE__*/ _jsx("path", {
                stroke: "none",
                d: "M0 0h24v24H0z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753C20.18 7.773 21.692 5.25 22 4.009z"
            })
        ]
    });
};
const GitHub24 = ({ className })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classNames("w-6 h-6", className),
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "GitHub"
            }),
            /*#__PURE__*/ _jsx("path", {
                stroke: "none",
                d: "M0 0h24v24H0z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
            })
        ]
    });
};
const Spotify16 = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        className: "w-4 h-4",
        viewBox: "0 0 16 16",
        fill: "#1ED760",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Spotify icon"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.7 11.5C11.6 11.7 11.2 11.8 11 11.7C8.9 10.5 6.3 10.2 4 10.9C3.7 10.9 3.5 10.8 3.4 10.5C3.4 10.3 3.5 10 3.8 9.9C6.4 9.1 9.2 9.5 11.6 10.8C11.7 11 11.8 11.3 11.7 11.5ZM12.7 9.4C12.6 9.4 12.6 9.4 12.7 9.4C12.5 9.7 12.1 9.8 11.8 9.6C9.4 8.2 6.5 7.9 3.8 8.7C3.5 8.8 3.1 8.6 3 8.3C2.9 7.9 3.1 7.6 3.4 7.4C6.4 6.5 9.7 6.9 12.4 8.5C12.7 8.7 12.8 9.1 12.7 9.4ZM12.7 7.1C10.1 5.6 5.9 5.4 3.4 6.2C3 6.3 2.6 6.1 2.5 5.7C2.4 5.3 2.6 4.9 3 4.7C5.8 3.9 10.5 4 13.5 5.8C13.9 6 14 6.5 13.8 6.8C13.5 7.2 13.1 7.3 12.7 7.1Z"
            })
        ]
    });
};
const Letterboxd16 = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        className: "w-4 h-4",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 500 500",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Letterboxd icon"
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        id: "path-1",
                        d: "M250 500C111.929 500 0 388.071 0 250S111.929 0 250 0s250 111.929 250 250-111.929 250-250 250z"
                    }),
                    /*#__PURE__*/ _jsxs("radialGradient", {
                        id: "radialGradient-3",
                        cx: "50%",
                        cy: "50%",
                        r: "50%",
                        fx: "50%",
                        fy: "50%",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0%",
                                stopColor: "#FF8000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "37.691%",
                                stopColor: "#FF8000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "100%",
                                stopColor: "#FF8000",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("filter", {
                        id: "filter-4",
                        width: "139.2%",
                        height: "139.2%",
                        x: "-19.6%",
                        y: "-19.6%",
                        filterUnits: "objectBoundingBox",
                        children: /*#__PURE__*/ _jsx("feGaussianBlur", {
                            in: "SourceGraphic",
                            stdDeviation: "50"
                        })
                    }),
                    /*#__PURE__*/ _jsxs("radialGradient", {
                        id: "radialGradient-5",
                        cx: "50%",
                        cy: "50%",
                        r: "50%",
                        fx: "50%",
                        fy: "50%",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0%",
                                stopColor: "#40BCF4"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "49.309%",
                                stopColor: "#40BCF4"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "100%",
                                stopColor: "#40BCF4",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("filter", {
                        id: "filter-6",
                        width: "139.2%",
                        height: "139.2%",
                        x: "-19.6%",
                        y: "-19.6%",
                        filterUnits: "objectBoundingBox",
                        children: /*#__PURE__*/ _jsx("feGaussianBlur", {
                            in: "SourceGraphic",
                            stdDeviation: "50"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("g", {
                fill: "none",
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: "1",
                children: /*#__PURE__*/ _jsxs("g", {
                    children: [
                        /*#__PURE__*/ _jsx("mask", {
                            id: "mask-2",
                            fill: "#fff",
                            children: /*#__PURE__*/ _jsx("use", {
                                xlinkHref: "#path-1"
                            })
                        }),
                        /*#__PURE__*/ _jsx("use", {
                            fill: "#0EDF52",
                            fillRule: "nonzero",
                            xlinkHref: "#path-1"
                        }),
                        /*#__PURE__*/ _jsx("path", {
                            fill: "url(#radialGradient-3)",
                            fillRule: "nonzero",
                            d: "M26.5 752C-184.749 752-356 580.749-356 369.5S-184.749-13 26.5-13 409 158.251 409 369.5 237.749 752 26.5 752z",
                            filter: "url(#filter-4)",
                            mask: "url(#mask-2)"
                        }),
                        /*#__PURE__*/ _jsx("path", {
                            fill: "url(#radialGradient-5)",
                            fillRule: "nonzero",
                            d: "M431.5 820C220.251 820 49 648.749 49 437.5S220.251 55 431.5 55 814 226.251 814 437.5 642.749 820 431.5 820z",
                            filter: "url(#filter-6)",
                            mask: "url(#mask-2)"
                        }),
                        /*#__PURE__*/ _jsx("path", {
                            fill: "#FFF",
                            fillRule: "nonzero",
                            d: "M165 103L165 383 354.15639 383 354.15639 313.100855 237.72411 313.100855 237.72411 103z",
                            mask: "url(#mask-2)"
                        })
                    ]
                })
            })
        ]
    });
};
const Steam16 = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-4 h-4 text-fore-subtle",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Steam icon"
            }),
            /*#__PURE__*/ _jsx("g", {
                clipPath: "url(#clip0)",
                children: /*#__PURE__*/ _jsx("path", {
                    d: "M7.987 0C3.787 0 .341 3.24.016 7.357L4.302 9.13a2.26 2.26 0 011.276-.393c.042 0 .083.003.125.003l1.906-2.76v-.04a3.017 3.017 0 013.016-3.015 3.022 3.022 0 013.018 3.018 3.02 3.02 0 01-3.018 3.016h-.068l-2.719 1.94c0 .036.003.07.003.107a2.26 2.26 0 01-2.26 2.262 2.277 2.277 0 01-2.222-1.817L.292 10.18A7.998 7.998 0 0015.985 8c0-4.419-3.581-8-7.998-8zM5.026 12.14l-.982-.406c.18.376.493.672.878.834a1.702 1.702 0 002.352-1.566 1.69 1.69 0 00-.128-.65 1.68 1.68 0 00-.92-.922 1.69 1.69 0 00-1.25-.021l1.013.419a1.254 1.254 0 01-.963 2.313zm7.61-6.203a2.012 2.012 0 00-2.008-2.01 2.01 2.01 0 101.42 3.431 2.01 2.01 0 00.588-1.42zm-3.513-.002c0-.836.674-1.51 1.508-1.51.833 0 1.512.674 1.512 1.51a1.51 1.51 0 11-3.021 0z"
                })
            })
        ]
    });
};
const Notion16 = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-4 h-4 text-primary",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Notion icon"
            }),
            /*#__PURE__*/ _jsx("g", {
                clipPath: "url(#clip0)",
                children: /*#__PURE__*/ _jsx("path", {
                    d: "M2.974 2.805c.495.403.683.375 1.617.312l8.81-.528c.188 0 .031-.188-.031-.22l-1.464-1.057c-.279-.219-.654-.466-1.37-.406l-8.528.625c-.313.028-.375.185-.25.31l1.216.964zm.529 2.055v9.268c0 .497.247.685.807.653l9.683-.56c.56-.031.624-.372.624-.778V4.237c0-.406-.156-.622-.5-.59l-10.116.59c-.375.032-.498.216-.498.62v.003zm9.557.494c.063.282 0 .56-.282.594l-.466.094v6.841c-.406.22-.778.344-1.088.344-.5 0-.625-.156-.998-.622L7.175 7.813v4.636l.966.219s0 .56-.779.56l-2.148.125c-.063-.125 0-.438.219-.498l.56-.156V6.57l-.779-.062c-.062-.282.094-.685.529-.716l2.304-.157 3.177 4.854V6.196l-.81-.094c-.063-.341.185-.591.498-.62l2.148-.128zM1.292.69l8.872-.653c1.088-.094 1.37-.032 2.055.466l2.833 1.992c.466.34.623.435.623.807v10.92c0 .685-.25 1.088-1.12 1.15l-10.308.623c-.651.032-.963-.062-1.307-.497L.854 12.789c-.373-.497-.529-.87-.529-1.304V1.779c0-.56.25-1.026.966-1.088z"
                })
            })
        ]
    });
};
const Project24 = ({ className })=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classNames("w-6 h-6 text-accent", className),
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        })
    });
};
const Blog24 = ({ className })=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classNames("w-6 h-6 text-accent", className),
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        })
    });
};
const About24 = ({ className })=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classNames("w-6 h-6 text-accent", className),
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        })
    });
};

;// CONCATENATED MODULE: ./components/themeToggle.tsx




function ThemeToggle({ className }) {
    const [isDark, setIsDark] = useDarkMode();
    const { trackCustomEvent } = (0,useAnalytics/* useAnalyticsEvent */.W)();
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": isDark ? "Activate Light Mode" : "Activate Dark Mode",
        title: isDark ? "Activate Light Mode" : "Activate Dark Mode",
        onClick: ()=>{
            setIsDark(!isDark);
            trackCustomEvent({
                eventName: "toggle-theme"
            });
        },
        className: className,
        children: isDark ? /*#__PURE__*/ jsx_runtime_.jsx(Moon20, {}) : /*#__PURE__*/ jsx_runtime_.jsx(Sun20, {})
    });
}


/***/ }),

/***/ 1153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ useAnalyticsEvent),
/* harmony export */   r: () => (/* binding */ useAnalyticsInstance)
/* harmony export */ });
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useAnalyticsInstance() {
    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window.goatcounter === undefined) return;
        window.goatcounter.count({
            path
        });
    }, [
        path
    ]);
}
function useAnalyticsEvent() {
    function trackCustomEvent({ eventName, eventTitle }) {
        if (window.goatcounter === undefined) return;
        window.goatcounter.count({
            path: eventName,
            title: eventTitle || eventName,
            event: true
        });
    }
    return {
        trackCustomEvent
    };
}



/***/ }),

/***/ 7380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/chaoranchen/Documents/GitHub/PersonalWebsite/app/error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-inter"}],"variableName":"FontInter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_FontInter_ = __webpack_require__(1073);
var layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_FontInter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_FontInter_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Fira_Code","arguments":[{"subsets":["latin"],"variable":"--font-fira-code"}],"variableName":"FontFiraCode"}
var layout_tsx_import_Fira_Code_arguments_subsets_latin_variable_font_fira_code_variableName_FontFiraCode_ = __webpack_require__(1570);
var layout_tsx_import_Fira_Code_arguments_subsets_latin_variable_font_fira_code_variableName_FontFiraCode_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Fira_Code_arguments_subsets_latin_variable_font_fira_code_variableName_FontFiraCode_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1913);
;// CONCATENATED MODULE: ./components/analytics.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/chaoranchen/Documents/GitHub/PersonalWebsite/components/analytics.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Analytics"];

// EXTERNAL MODULE: ./components/atoms.tsx
var atoms = __webpack_require__(9316);
// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(4542);
;// CONCATENATED MODULE: ./components/footer.tsx



const routes = [
    {
        path: "/",
        label: "Home",
        exact: true
    },
    {
        path: "/publications",
        label: "Publications"
    },
    {
        path: "/cv",
        label: "CV"
    }
];
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "relative w-full h-56 overflow-hidden bg-back-secondary text-secondary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container h-full px-5 pt-24 pb-12 m-auto md:max-w-screen-md lg:max-w-screen-lg md:px-20",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container flex-col justify-between md:space-y-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "flex-row items-center justify-center hidden space-x-6 text-sm lg:flex md:justify-end",
                        children: routes.map((route)=>/*#__PURE__*/ jsx_runtime_.jsx(atoms/* NavLink */.OL, {
                                to: route.path,
                                title: route.label,
                                children: route.label
                            }, route.path))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col-reverse space-y-8 space-y-reverse md:flex-row md:justify-between md:space-y-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "self-center text-xs tracking-wider md:self-end",
                                "aria-label": "Copyright",
                                children: "\xa9 2023. Chaoran Chen. All Rights Reserved."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row items-center justify-center space-x-6 md:justify-end",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "mailto:cchen25@nd.edu",
                                            "aria-label": "Email cchen25@nd.edu",
                                            title: "Email",
                                            className: "focus:text-accent",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* MailAt24 */.WR, {
                                                className: "transition-transform ease-in-out hover:-translate-y-1 hover:text-accent"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/CRChenND",
                                            "aria-label": "Visit GitHub profile",
                                            title: "Visit GitHub profile",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "focus:text-accent",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* GitHub24 */.v3, {
                                                className: "transition-transform ease-in-out hover:-translate-y-1 hover:text-accent"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://twitter.com/CharlieCRChen",
                                            "aria-label": "Visit Twitter profile",
                                            title: "Visit Twitter profile",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "focus:text-accent",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Twitter24 */.Eb, {
                                                className: "transition-transform ease-in-out hover:-translate-y-1 hover:text-accent"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/header.tsx

const header_proxy = (0,module_proxy.createProxy)(String.raw`/Users/chaoranchen/Documents/GitHub/PersonalWebsite/components/header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: header_esModule, $$typeof: header_$$typeof } = header_proxy;
const header_default_ = header_proxy.default;

const header_e0 = header_proxy["Header"];

;// CONCATENATED MODULE: ./components/mobileNav.tsx

const mobileNav_proxy = (0,module_proxy.createProxy)(String.raw`/Users/chaoranchen/Documents/GitHub/PersonalWebsite/components/mobileNav.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: mobileNav_esModule, $$typeof: mobileNav_$$typeof } = mobileNav_proxy;
const mobileNav_default_ = mobileNav_proxy.default;

const mobileNav_e0 = mobileNav_proxy["MobileNav"];

// EXTERNAL MODULE: ./app/styles/codeblock.css
var codeblock = __webpack_require__(1595);
// EXTERNAL MODULE: ./app/styles/globals.css
var globals = __webpack_require__(539);
;// CONCATENATED MODULE: ./app/layout.tsx









const metadata = {
    title: {
        default: "Jeff Jadulco | Game and Web Developer",
        template: "%s | Jeff Jadulco"
    },
    description: "Game and Web Developer",
    openGraph: {
        title: "Jeff Jadulco",
        description: "Game and Web Developer",
        url: "https://jeffjadulco.com",
        siteName: "Jeff Jadulco",
        images: [
            {
                url: "https://jeffjadulco.com/static/og/default.png",
                width: 1280,
                height: 675
            }
        ],
        locale: "en-US",
        type: "website"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true
        }
    },
    twitter: {
        creator: "@jeffjadulco",
        title: "Jeff Jadulco",
        card: "summary_large_image"
    },
    icons: {
        shortcut: "/static/favicon.ico"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: `${(layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_FontInter_default()).variable} ${(layout_tsx_import_Fira_Code_arguments_subsets_latin_variable_font_fira_code_variableName_FontFiraCode_default()).variable} font-sans flex flex-col min-h-screen relative`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(mobileNav_e0, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(header_e0, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "container flex-grow max-w-screen-lg px-5 m-auto mt-16 sm:px-12 md:px-20",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(BackgroundNoise, {})
            ]
        })
    });
}
function BackgroundNoise() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute inset-0 -z-20 opacity-80 h-full mix-blend-overlay noise-bg"
    });
}


/***/ }),

/***/ 9316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OL: () => (/* binding */ NavLink),
/* harmony export */   t6: () => (/* binding */ Blob)
/* harmony export */ });
/* unused harmony exports ExtLink, Button, Input, TextArea */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1072);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1518);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const NavLink = ({ to, title = "Link", selected = false, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        href: to,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("font-semibold tracking-wide text-sm hover:text-accent transition duration-150 ", {
            "text-accent": selected,
            "text-fore-secondary": !selected
        }),
        children: title
    });
};
const ExtLink = ({ children, link })=>{
    return /*#__PURE__*/ _jsx("a", {
        href: link,
        className: "font-medium text-accent hover:underline  focus:text-accent",
        target: "_blank",
        rel: "noopener noreferrer",
        children: children
    });
};
const Button = ({ children, className, link, ...props })=>{
    return /*#__PURE__*/ _jsx("a", {
        ...props,
        className: classNames("px-20 py-2 rounded bg-gradient-to-r from-teal-500 to-blue-500 bg-[length:150%] bg-left hover:bg-right transition-all text-back-secondary duration-[0.5s] ease-out  focus:text-accent", className),
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        children: children
    });
};
const Blob = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "aria-hidden": "true",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative h-48 blob md:h-56 lg:h-64",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "h-full fill-teal-400 dark:fill-teal-500 animate-blob-spin",
                viewBox: "0 0 278 279",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M137.896 0.127761C167.59 -0.638578 198.383 1.62824 222.877 18.4301C247.738 35.4836 263.129 63.014 271.706 91.9151C280.118 120.258 280.513 150.661 270.364 178.43C260.457 205.538 239.342 225.92 216.353 243.372C192.903 261.174 167.336 278.631 137.896 278.994C108.28 279.358 81.0666 263.928 58.0226 245.322C35.8955 227.455 20.5343 203.415 11.0775 176.594C1.41508 149.191 -4.23875 119.749 3.91245 91.8587C12.2111 63.4638 31.6331 39.4483 56.0438 22.7357C79.9856 6.34414 108.89 0.876363 137.896 0.127761Z"
                })
            })
        })
    });
};
const Input = ({ labelText, name, ...props })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "group",
        children: [
            /*#__PURE__*/ _jsx("label", {
                className: "text-sm font-medium transition-colors duration-200 text-fore-secondary group-hover:text-accent",
                htmlFor: name,
                children: labelText
            }),
            /*#__PURE__*/ _jsx("input", {
                className: "block w-full p-3 mt-1 border rounded-md outline-none border-back-subtle bg-back-primary focus:border-accent text-primary disabled:opacity-50",
                name: name,
                ...props
            })
        ]
    });
};
const TextArea = ({ labelText, name, ...props })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "group",
        children: [
            /*#__PURE__*/ _jsx("label", {
                className: "text-sm font-medium transition-colors duration-200 text-fore-secondary group-hover:text-accent",
                htmlFor: name,
                children: labelText
            }),
            /*#__PURE__*/ _jsx("textarea", {
                className: "block w-full p-3 mt-1 border rounded-md outline-none border-back-subtle bg-back-primary focus:border-accent text-fore-primary disabled:opacity-50",
                style: {
                    minHeight: "80px"
                },
                name: name,
                ...props
            })
        ]
    });
};


/***/ }),

/***/ 4542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Eb: () => (/* binding */ Twitter24),
/* harmony export */   WR: () => (/* binding */ MailAt24),
/* harmony export */   v3: () => (/* binding */ GitHub24)
/* harmony export */ });
/* unused harmony exports Sun20, Moon20, Spotify16, Letterboxd16, Steam16, Notion16, Project24, Blog24, About24 */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1072);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const Sun20 = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-5 h-5",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        role: "img",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        })
    });
};
const Moon20 = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-5 h-5",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        role: "img",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        })
    });
};
const MailAt24 = ({ className })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-6 h-6", className),
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        role: "img",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Email Address"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "none",
                d: "M0 0h24v24H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16 12v1.5a2.5 2.5 0 005 0V12a9 9 0 10-5.5 8.28"
            })
        ]
    });
};
const Twitter24 = ({ className })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-6 h-6", className),
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        role: "img",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Twitter"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "none",
                d: "M0 0h24v24H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753C20.18 7.773 21.692 5.25 22 4.009z"
            })
        ]
    });
};
const GitHub24 = ({ className })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-6 h-6", className),
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        role: "img",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "GitHub"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: "none",
                d: "M0 0h24v24H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
            })
        ]
    });
};
const Spotify16 = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        className: "w-4 h-4",
        viewBox: "0 0 16 16",
        fill: "#1ED760",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Spotify icon"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.7 11.5C11.6 11.7 11.2 11.8 11 11.7C8.9 10.5 6.3 10.2 4 10.9C3.7 10.9 3.5 10.8 3.4 10.5C3.4 10.3 3.5 10 3.8 9.9C6.4 9.1 9.2 9.5 11.6 10.8C11.7 11 11.8 11.3 11.7 11.5ZM12.7 9.4C12.6 9.4 12.6 9.4 12.7 9.4C12.5 9.7 12.1 9.8 11.8 9.6C9.4 8.2 6.5 7.9 3.8 8.7C3.5 8.8 3.1 8.6 3 8.3C2.9 7.9 3.1 7.6 3.4 7.4C6.4 6.5 9.7 6.9 12.4 8.5C12.7 8.7 12.8 9.1 12.7 9.4ZM12.7 7.1C10.1 5.6 5.9 5.4 3.4 6.2C3 6.3 2.6 6.1 2.5 5.7C2.4 5.3 2.6 4.9 3 4.7C5.8 3.9 10.5 4 13.5 5.8C13.9 6 14 6.5 13.8 6.8C13.5 7.2 13.1 7.3 12.7 7.1Z"
            })
        ]
    });
};
const Letterboxd16 = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        className: "w-4 h-4",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 500 500",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Letterboxd icon"
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        id: "path-1",
                        d: "M250 500C111.929 500 0 388.071 0 250S111.929 0 250 0s250 111.929 250 250-111.929 250-250 250z"
                    }),
                    /*#__PURE__*/ _jsxs("radialGradient", {
                        id: "radialGradient-3",
                        cx: "50%",
                        cy: "50%",
                        r: "50%",
                        fx: "50%",
                        fy: "50%",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0%",
                                stopColor: "#FF8000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "37.691%",
                                stopColor: "#FF8000"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "100%",
                                stopColor: "#FF8000",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("filter", {
                        id: "filter-4",
                        width: "139.2%",
                        height: "139.2%",
                        x: "-19.6%",
                        y: "-19.6%",
                        filterUnits: "objectBoundingBox",
                        children: /*#__PURE__*/ _jsx("feGaussianBlur", {
                            in: "SourceGraphic",
                            stdDeviation: "50"
                        })
                    }),
                    /*#__PURE__*/ _jsxs("radialGradient", {
                        id: "radialGradient-5",
                        cx: "50%",
                        cy: "50%",
                        r: "50%",
                        fx: "50%",
                        fy: "50%",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0%",
                                stopColor: "#40BCF4"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "49.309%",
                                stopColor: "#40BCF4"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "100%",
                                stopColor: "#40BCF4",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("filter", {
                        id: "filter-6",
                        width: "139.2%",
                        height: "139.2%",
                        x: "-19.6%",
                        y: "-19.6%",
                        filterUnits: "objectBoundingBox",
                        children: /*#__PURE__*/ _jsx("feGaussianBlur", {
                            in: "SourceGraphic",
                            stdDeviation: "50"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("g", {
                fill: "none",
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: "1",
                children: /*#__PURE__*/ _jsxs("g", {
                    children: [
                        /*#__PURE__*/ _jsx("mask", {
                            id: "mask-2",
                            fill: "#fff",
                            children: /*#__PURE__*/ _jsx("use", {
                                xlinkHref: "#path-1"
                            })
                        }),
                        /*#__PURE__*/ _jsx("use", {
                            fill: "#0EDF52",
                            fillRule: "nonzero",
                            xlinkHref: "#path-1"
                        }),
                        /*#__PURE__*/ _jsx("path", {
                            fill: "url(#radialGradient-3)",
                            fillRule: "nonzero",
                            d: "M26.5 752C-184.749 752-356 580.749-356 369.5S-184.749-13 26.5-13 409 158.251 409 369.5 237.749 752 26.5 752z",
                            filter: "url(#filter-4)",
                            mask: "url(#mask-2)"
                        }),
                        /*#__PURE__*/ _jsx("path", {
                            fill: "url(#radialGradient-5)",
                            fillRule: "nonzero",
                            d: "M431.5 820C220.251 820 49 648.749 49 437.5S220.251 55 431.5 55 814 226.251 814 437.5 642.749 820 431.5 820z",
                            filter: "url(#filter-6)",
                            mask: "url(#mask-2)"
                        }),
                        /*#__PURE__*/ _jsx("path", {
                            fill: "#FFF",
                            fillRule: "nonzero",
                            d: "M165 103L165 383 354.15639 383 354.15639 313.100855 237.72411 313.100855 237.72411 103z",
                            mask: "url(#mask-2)"
                        })
                    ]
                })
            })
        ]
    });
};
const Steam16 = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-4 h-4 text-fore-subtle",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Steam icon"
            }),
            /*#__PURE__*/ _jsx("g", {
                clipPath: "url(#clip0)",
                children: /*#__PURE__*/ _jsx("path", {
                    d: "M7.987 0C3.787 0 .341 3.24.016 7.357L4.302 9.13a2.26 2.26 0 011.276-.393c.042 0 .083.003.125.003l1.906-2.76v-.04a3.017 3.017 0 013.016-3.015 3.022 3.022 0 013.018 3.018 3.02 3.02 0 01-3.018 3.016h-.068l-2.719 1.94c0 .036.003.07.003.107a2.26 2.26 0 01-2.26 2.262 2.277 2.277 0 01-2.222-1.817L.292 10.18A7.998 7.998 0 0015.985 8c0-4.419-3.581-8-7.998-8zM5.026 12.14l-.982-.406c.18.376.493.672.878.834a1.702 1.702 0 002.352-1.566 1.69 1.69 0 00-.128-.65 1.68 1.68 0 00-.92-.922 1.69 1.69 0 00-1.25-.021l1.013.419a1.254 1.254 0 01-.963 2.313zm7.61-6.203a2.012 2.012 0 00-2.008-2.01 2.01 2.01 0 101.42 3.431 2.01 2.01 0 00.588-1.42zm-3.513-.002c0-.836.674-1.51 1.508-1.51.833 0 1.512.674 1.512 1.51a1.51 1.51 0 11-3.021 0z"
                })
            })
        ]
    });
};
const Notion16 = ()=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-4 h-4 text-primary",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        role: "img",
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: "Notion icon"
            }),
            /*#__PURE__*/ _jsx("g", {
                clipPath: "url(#clip0)",
                children: /*#__PURE__*/ _jsx("path", {
                    d: "M2.974 2.805c.495.403.683.375 1.617.312l8.81-.528c.188 0 .031-.188-.031-.22l-1.464-1.057c-.279-.219-.654-.466-1.37-.406l-8.528.625c-.313.028-.375.185-.25.31l1.216.964zm.529 2.055v9.268c0 .497.247.685.807.653l9.683-.56c.56-.031.624-.372.624-.778V4.237c0-.406-.156-.622-.5-.59l-10.116.59c-.375.032-.498.216-.498.62v.003zm9.557.494c.063.282 0 .56-.282.594l-.466.094v6.841c-.406.22-.778.344-1.088.344-.5 0-.625-.156-.998-.622L7.175 7.813v4.636l.966.219s0 .56-.779.56l-2.148.125c-.063-.125 0-.438.219-.498l.56-.156V6.57l-.779-.062c-.062-.282.094-.685.529-.716l2.304-.157 3.177 4.854V6.196l-.81-.094c-.063-.341.185-.591.498-.62l2.148-.128zM1.292.69l8.872-.653c1.088-.094 1.37-.032 2.055.466l2.833 1.992c.466.34.623.435.623.807v10.92c0 .685-.25 1.088-1.12 1.15l-10.308.623c-.651.032-.963-.062-1.307-.497L.854 12.789c-.373-.497-.529-.87-.529-1.304V1.779c0-.56.25-1.026.966-1.088z"
                })
            })
        ]
    });
};
const Project24 = ({ className })=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classNames("w-6 h-6 text-accent", className),
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        })
    });
};
const Blog24 = ({ className })=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classNames("w-6 h-6 text-accent", className),
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        })
    });
};
const About24 = ({ className })=>{
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: classNames("w-6 h-6 text-accent", className),
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        })
    });
};


/***/ }),

/***/ 1595:
/***/ (() => {



/***/ }),

/***/ 539:
/***/ (() => {



/***/ })

};
;