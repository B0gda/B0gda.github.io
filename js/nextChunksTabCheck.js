(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[231], {
    897: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => c
        });
        var s = i(7876)
          , n = i(4232)
          , a = i(8477)
          , o = i(3718)
          , l = i(8230)
          , r = i.n(l)
          , h = i(9099);
        class c extends n.Component {
            componentDidMount() {
                let e = "/";
                e = window.location.pathname + "",
                this.setState({
                    path: e,
                    loaded: !0
                }),
                h.Router.events.on("routeChangeComplete", e => {
                    let t = "/";
                    t = window.location.pathname,
                    this.setState({
                        path: t
                    }),
                    this.doTabCheck()
                }
                ),
                this.doTabCheck(),
                window.addEventListener("resize", this.doCheckTabWidth())
            }
            componentDidUpdate() {
                this.doCheckTabWidth(),
                document.documentElement.classList.contains("state-light-mode") && !1 === this.state.lightMode ? this.setState({
                    lightMode: !0
                }) : document.documentElement.classList.contains("state-light-mode") || !0 !== this.state.lightMode || this.setState({
                    lightMode: !1
                })
            }
            componentWillUnmount() {
                window.removeEventListener("resize", this.doCheckTabWidth())
            }
            doCheckTabWidth() {
                if (this.tabsContainer) {
                    let e = this.tabsContainer.clientWidth
                      , t = 0
                      , i = 0
                      , s = -1;
                    for (let n = 0; n < this.tabsContainer.children.length; n++)
                        (t += this.tabsContainer.children[n].clientWidth) > e && -1 === s && (s = n,
                        i = t - this.tabsContainer.children[n].clientWidth);
                    -1 === s && (s = 999),
                    (s !== this.state.maxVisibleIndex || i !== this.state.moreLeftPosition) && this.setState({
                        showMoreMenu: !1,
                        maxVisibleIndex: s,
                        moreLeftPosition: i
                    })
                }
            }
            doTabCheck() {
                let e = this.props.post
                  , t = this.context.openTabs
                  , i = []
                  , s = 0;
                for (let e = 0; e < t.length; e++)
                    "_error.js" !== t[e].title && (i[s] = [],
                    i[s].title = t[e].title,
                    i[s].slug = t[e].slug,
                    i[s].scrollPos = t[e].scrollPos,
                    i[s].maxScrollPos = t[e].maxScrollPos,
                    i[s].maxChar = t[e].maxChar,
                    i[s].randCells = t[e].randCells,
                    s++);
                if (e) {
                    let t = !1;
                    for (let s = 0; s < i.length; s++)
                        (i[s].slug === e.tab_slug || e.tab_slug.length < 1 || -1 !== e.tab_slug.indexOf("My_CV")) && (t = !0);
                    if (!1 === t) {
                        let t = []
                          , s = parseInt(i.length + 1);
                        for (let n = 0; n < s; n++)
                            t[n] = [],
                            0 === n ? (t[n].title = i[n].title,
                            t[n].slug = i[n].slug,
                            t[n].scrollPos = i[n].scrollPos,
                            t[n].maxScrollPos = i[n].maxScrollPos,
                            t[n].maxChar = i[n].maxChar,
                            t[n].randCells = i[n].randCells) : 1 === n ? (t[n].title = e.tab_name + ".js",
                            t[n].slug = e.tab_slug,
                            t[n].scrollPos = !1,
                            t[n].maxScrollPos = !1,
                            t[n].maxChar = !1,
                            t[n].randCells = !1) : "_error.js" !== i[parseInt(n - 1)].title && (t[n].title = i[parseInt(n - 1)].title,
                            t[n].slug = i[parseInt(n - 1)].slug,
                            t[n].scrollPos = i[parseInt(n - 1)].scrollPos,
                            t[n].maxScrollPos = i[parseInt(n - 1)].maxScrollPos,
                            t[n].maxChar = i[parseInt(n - 1)].maxChar,
                            t[n].randCells = i[parseInt(n - 1)].randCells);
                        this.context.setTabs(t)
                    } else
                        this.context.openTabs !== i && this.context.setTabs(i);
                    this.setState({
                        showMoreMenu: !1
                    })
                } else if (!0 === this.props.error) {
                    let e = this.context.openTabs
                      , t = []
                      , i = parseInt(e.length + 1);
                    for (let s = 0; s < i; s++)
                        t[s] = [],
                        0 === s ? (t[s].title = e[s].title,
                        t[s].slug = e[s].slug,
                        t[s].scrollPos = e[s].scrollPos,
                        t[s].maxScrollPos = e[s].maxScrollPos,
                        t[s].maxChar = e[s].maxChar,
                        t[s].randCells = e[s].randCells) : 1 === s ? (t[s].title = "_error.js",
                        t[s].slug = window.location.pathname + "",
                        t[s].scrollPos = !1,
                        t[s].maxScrollPos = !1,
                        t[s].maxChar = !1,
                        t[s].randCells = !1) : (t[s].title = e[parseInt(s - 1)].title,
                        t[s].slug = e[parseInt(s - 1)].slug,
                        t[s].scrollPos = e[parseInt(s - 1)].scrollPos,
                        t[s].maxScrollPos = e[parseInt(s - 1)].maxScrollPos,
                        t[s].maxChar = e[parseInt(s - 1)].maxChar,
                        t[s].randCells = e[parseInt(s - 1)].randCells);
                    this.context.setTabs(t)
                } else
                    this.context.openTabs !== i && this.context.setTabs(i)
            }
            openMore(e) {
                e.preventDefault(),
                this.setState({
                    showMoreMenu: !0
                })
            }
            closeMore(e) {
                e.preventDefault(),
                this.setState({
                    showMoreMenu: !1
                })
            }
            toggleSideBar(e) {
                e.preventDefault(),
                this.context.infoOpen ? (document.documentElement.classList.remove("state-info-open"),
                this.context.setInfoClosed()) : (document.documentElement.classList.add("state-info-open"),
                this.context.setInfoOpen())
            }
            swapColorScheme(e) {
                e.preventDefault();
                const isLight = document.documentElement.classList.contains("state-light-mode");
                if (isLight) {
                    document.documentElement.classList.remove("state-light-mode");
                    this.setState({ lightMode: false });
                    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#0d0d0d"); // цвет для тёмной темы
                } else {
                    document.documentElement.classList.add("state-light-mode");
                    this.setState({ lightMode: true });
                    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#ffffff"); // цвет для светлой темы
                }
            }
            render() {
                return (0,
                s.jsxs)("nav", {
                    className: "c-gui__panel__header",
                    children: [(0,
                    s.jsx)("div", {
                        className: "c-gui__panel__header__tabs",
                        ref: e => this.tabsContainer = e,
                        children: this.context.openTabs.map( (e, t) => this.state.path === e.slug ? (0,
                        s.jsx)("div", {
                            className: "c-gui__panel__header__tabs__tab state-active " + (t >= this.state.maxVisibleIndex ? "state-hidden" : ""),
                            dangerouslySetInnerHTML: {
                                __html: e.title
                            }
                        }, t) : (0,
                        s.jsx)(r(), {
                            href: e.slug,
                            className: "c-gui__panel__header__tabs__tab " + (t >= this.state.maxVisibleIndex ? "state-hidden" : ""),
                            dangerouslySetInnerHTML: {
                                __html: e.title
                            }
                        }, t))
                    }), 0 !== this.state.moreLeftPosition && (0,
                    s.jsx)("div", {
                        className: "c-gui__panel__header__button c-gui__panel__header__button--more " + (this.state.showMoreMenu ? "state-open" : ""),
                        onClick: this.openMore,
                        style: {
                            left: this.state.moreLeftPosition + "px"
                        },
                        dangerouslySetInnerHTML: {
                            __html: '<svg viewBox="0 0 24 24"><path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path></svg>'
                        }
                    }), !0 === this.state.loaded && !0 === this.state.showMoreMenu && (0,
                    s.jsx)(s.Fragment, {
                        children: (0,
                        a.createPortal)((0,
                        s.jsxs)("div", {
                            className: "c-gui__context-menu",
                            children: [(0,
                            s.jsx)("div", {
                                className: "c-gui__context-menu__overlay",
                                onClick: this.closeMore
                            }), (0,
                            s.jsx)("div", {
                                className: "c-gui__context-menu__panel",
                                style: {
                                    left: this.state.moreLeftPosition + "px"
                                },
                                children: this.context.openTabs.map( (e, t) => this.state.path === e.slug ? null : (0,
                                s.jsx)(r(), {
                                    href: e.slug,
                                    className: "c-gui__context-menu__panel__link " + (t < this.state.maxVisibleIndex ? "state-hidden" : ""),
                                    dangerouslySetInnerHTML: {
                                        __html: e.title
                                    }
                                }, t))
                            })]
                        }), document.body)
                    }), (0, s.jsx)("button", {
                        className: "c-gui__panel__header__button c-gui__panel__header__button--portfolio",
                    onClick: () => window.open("https://b0gda.github.io/CV.html", "_blank"),
                    dangerouslySetInnerHTML: {
                       __html: `
                        <svg viewBox="0 0 24 24" fill="white" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                       <path d="M6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13a1 1 0 0 1-1-1V3.5zM8 13h8v1.5H8V13zm0 3h5v1.5H8V16z"/>
                     </svg>
                      `
                   },
                   "aria-label": "Open portfolio"
                    }), !1 === this.state.lightMode && (0,
                    s.jsx)("button", {
                        className: "c-gui__panel__header__button c-gui__panel__header__button--light-mode",
                        onClick: this.swapColorScheme,
                        dangerouslySetInnerHTML: {
                            __html: '<svg viewBox="0 0 24 24"></path><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>'
                        },
                        "aria-label": "Switch to light mode"
                    }), !0 === this.state.lightMode && (0,
                    s.jsx)("button", {
                        className: "c-gui__panel__header__button c-gui__panel__header__button--light-mode",
                        onClick: this.swapColorScheme,
                        dangerouslySetInnerHTML: {
                            __html: '<svg viewBox="0 0 24 24"></path><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>'
                        },
                        "aria-label": "Switch to dark mode"
                    }), (0,
                    s.jsx)("button", {
                        className: "c-gui__panel__header__button c-gui__panel__header__button--sidebar " + (this.context.infoOpen ? "state-info-open" : ""),
                        onClick: this.toggleSideBar,
                        dangerouslySetInnerHTML: {
                            __html: '<svg viewBox="0 0 200 200"><path d="M158.33,16.67H41.67c-13.79,0-25,11.21-25,25v116.67c0,13.79,11.21,25,25,25h116.67c13.79,0,25-11.21,25-25V41.67c0-13.79-11.21-25-25-25ZM33.33,158.33V41.67c0-4.59,3.74-8.33,8.33-8.33h25v133.33h-25c-4.59,0-8.33-3.74-8.33-8.33ZM166.67,158.33c0,4.59-3.74,8.33-8.33,8.33h-75V33.33h75c4.59,0,8.33,3.74,8.33,8.33v116.67Z"/></svg>'
                        },
                        "aria-label": "Open sidebar"
                    })]
                })
            }
            constructor(e) {
                super(e),
                this.doTabCheck = this.doTabCheck.bind(this),
                this.doCheckTabWidth = this.doCheckTabWidth.bind(this),
                this.openMore = this.openMore.bind(this),
                this.closeMore = this.closeMore.bind(this),
                this.toggleSideBar = this.toggleSideBar.bind(this),
                this.swapColorScheme = this.swapColorScheme.bind(this),
                this.state = {
                    path: "/",
                    maxVisibleIndex: 0,
                    moreLeftPosition: 0,
                    loaded: !1,
                    showMoreMenu: !1,
                    lightMode: !1
                }
            }
        }
        c.contextType = o.D
    }
    ,
    1922: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => h
        });
        var s = i(7876)
          , n = i(4232)
          , a = i(3718)
          , o = i(8230)
          , l = i.n(o)
          , r = i(5177);
        class h extends n.Component {
            componentDidMount() {
                this.layer && (this.layer.addEventListener("mousemove", this.onMouseMove),
                this.layer.addEventListener("mouseout", this.onMouseOut))
            }
            componentWillUnmount() {
                this.layer && (this.layer.removeEventListener("mousemove", this.onMouseMove),
                this.layer.removeEventListener("mouseout", this.onMouseOut))
            }
            onMouseOverLink(e) {
                let t = parseInt(e.currentTarget.getAttribute("data-index"))
                  , i = parseInt(e.currentTarget.getAttribute("data-preview"));
                this.setState({
                    activeIndex: t,
                    previewTop: this.props.linkElements[t].previewTop,
                    top: this.props.linkElements[t].top,
                    preview: i
                })
            }
            onMouseExitLink() {
                this.setState({
                    activeIndex: -1,
                    preview: 0
                })
            }
            onMouseOut() {
                -1 !== this.state.lineIndex && this.setState({
                    lineIndex: -1,
                    lineStyle: {
                        opacity: 0
                    },
                    lineIndexString: "",
                    top: 0
                })
            }
            onMouseMove(e) {
                if (!1 === this.context.touch) {
                    let t = this.context.dimensions
                      , i = Math.floor(e.offsetY / t.monoLineHeight);
                    if (i !== this.state.lineIndex) {
                        let e = {
                            height: t.monoLineHeight + "px",
                            top: i * t.monoLineHeight + "px",
                            opacity: 1
                        };
                        i < 0 && (e = {
                            opacity: 0
                        });
                        let s = i + 1;
                        s < 10 ? s = "&nbsp;&nbsp;" + s : s < 100 && (s = "&nbsp;" + s),
                        this.setState({
                            lineIndex: i,
                            lineStyle: e,
                            lineIndexString: s,
                            top: Math.round(i * t.monoLineHeight)
                        })
                    }
                }
            }
            openProfileTab() {
                this.context.setProfileOpen()
            }
            openContactTab() {
                this.context.setContactOpen()
            }
            render() {
                let e = this.context.dimensions
                  , t = this.props.linkElements
                  , i = this.props.gallery;
                if (!(t.length > 0) || !i)
                    return null;
                {
                    let n = [];
                    for (let i = 0; i < t.length; i++) {
                        let a = []
                          , o = Math.round(t[i].top / e.monoLineHeight);
                        for (let n = 0; n < Math.round(t[i].height / e.monoLineHeight); n++) {
                            let e = o + n + 1;
                            e < 10 ? e = "&nbsp;&nbsp;" + e : e < 100 && (e = "&nbsp;" + e),
                            a.push((0,
                            s.jsx)("div", {
                                className: "c-interactive__link__lines-column__number",
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            }, n))
                        }
                        n.push(a)
                    }
                    return !1 === this.context.touch ? (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("div", {
                            className: "c-interactive",
                            ref: e => this.layer = e,
                            role: "presentation",
                            children: (0,
                            s.jsx)("div", {
                                className: "c-interactive__line " + (-1 === this.state.activeIndex ? "state-active" : "state-inactive"),
                                style: this.state.lineStyle,
                                children: (0,
                                s.jsx)("div", {
                                    className: "c-interactive__line__lines-column",
                                    children: (0,
                                    s.jsx)("div", {
                                        className: "c-interactive__line__lines-column__number",
                                        dangerouslySetInnerHTML: {
                                            __html: this.state.lineIndexString
                                        }
                                    })
                                })
                            })
                        }), t.map( (e, t) => (0,
                        s.jsx)("div", {
                            className: "c-interactive__link c-interactive__link--background " + (this.state.activeIndex === t ? "state-active" : ""),
                            style: {
                                height: e.height + "px",
                                top: e.top + "px"
                            }
                        }, t)), t.map( (e, t) => {
                            if ("#profile" === e.url)
                                return (0,
                                s.jsx)("div", {
                                    className: "c-interactive__link c-interactive__link--foreground " + (this.state.activeIndex === t ? "state-active" : ""),
                                    "data-index": t,
                                    "data-preview": e.preview,
                                    style: {
                                        height: e.height + "px",
                                        top: e.top + "px"
                                    },
                                    onMouseOver: this.onMouseOverLink,
                                    onMouseOut: this.onMouseExitLink,
                                    onClick: this.openProfileTab,
                                    "aria-label": e.title,
                                    children: (0,
                                    s.jsx)("div", {
                                        className: "c-interactive__link__lines-column",
                                        children: n[t]
                                    })
                                }, t);
                            if ("#contact" === e.url)
                                return (0,
                                s.jsx)("div", {
                                    className: "c-interactive__link c-interactive__link--foreground " + (this.state.activeIndex === t ? "state-active" : ""),
                                    "data-index": t,
                                    "data-preview": e.preview,
                                    style: {
                                        height: e.height + "px",
                                        top: e.top + "px"
                                    },
                                    onMouseOver: this.onMouseOverLink,
                                    onMouseOut: this.onMouseExitLink,
                                    onClick: this.openContactTab,
                                    "aria-label": e.title,
                                    children: (0,
                                    s.jsx)("div", {
                                        className: "c-interactive__link__lines-column",
                                        children: n[t]
                                    })
                                }, t);
                            if (-1 !== e.url.indexOf("http"))
                                if (this.state.activeIndex === t)
                                    return (0,
                                    s.jsx)("a", {
                                        href: e.url,
                                        target: "_blank",
                                        className: "c-interactive__link c-interactive__link--foreground state-active",
                                        "data-index": t,
                                        "data-preview": e.preview,
                                        style: {
                                            height: e.height + "px",
                                            top: e.top + "px"
                                        },
                                        onMouseOver: this.onMouseOverLink,
                                        onMouseOut: this.onMouseExitLink,
                                        children: (0,
                                        s.jsx)("div", {
                                            className: "c-interactive__link__lines-column",
                                            children: n[t]
                                        })
                                    }, t);
                                else
                                    return (0,
                                    s.jsx)("a", {
                                        href: e.url,
                                        target: "_blank",
                                        className: "c-interactive__link c-interactive__link--foreground",
                                        "data-index": t,
                                        "data-preview": e.preview,
                                        style: {
                                            height: e.height + "px",
                                            top: e.top + "px"
                                        },
                                        onMouseOver: this.onMouseOverLink,
                                        onMouseOut: this.onMouseExitLink,
                                        title: e.title,
                                        children: (0,
                                        s.jsx)("div", {
                                            className: "c-interactive__link__lines-column",
                                            children: n[t]
                                        })
                                    }, t);
                            if (this.state.activeIndex === t)
                                return (0,
                                s.jsx)(l(), {
                                    href: e.url,
                                    className: "c-interactive__link c-interactive__link--foreground state-active",
                                    "data-index": t,
                                    "data-preview": e.preview,
                                    style: {
                                        height: e.height + "px",
                                        top: e.top + "px"
                                    },
                                    onMouseOver: this.onMouseOverLink,
                                    onMouseOut: this.onMouseExitLink,
                                    children: (0,
                                    s.jsx)("div", {
                                        className: "c-interactive__link__lines-column",
                                        children: n[t]
                                    })
                                }, t);
                            return (0,
                            s.jsx)(l(), {
                                href: e.url,
                                className: "c-interactive__link c-interactive__link--foreground",
                                "data-index": t,
                                "data-preview": e.preview,
                                style: {
                                    height: e.height + "px",
                                    top: e.top + "px"
                                },
                                onMouseOver: this.onMouseOverLink,
                                onMouseOut: this.onMouseExitLink,
                                title: e.title,
                                children: (0,
                                s.jsx)("div", {
                                    className: "c-interactive__link__lines-column",
                                    children: n[t]
                                })
                            }, t)
                        }
                        ), (0,
                        s.jsx)("div", {
                            className: "c-interactive__previews " + (0 !== this.state.preview ? "state-active" : ""),
                            style: {
                                height: e.previewHeight + "px",
                                width: e.previewWidth + "px",
                                top: this.state.previewTop,
                                right: e.previewRightOffset + "px"
                            },
                            role: "presentation",
                            children: (0,
                            s.jsx)(r.A, {
                                gallery: i,
                                chromeHeight: e.previewChromeHeight,
                                cornerRadius: e.previewCornerRadius,
                                autoChange: !1,
                                forceLoad: !0,
                                loadDelay: 250,
                                playDelay: 500,
                                forceSlide: this.state.preview,
                                alt: ""
                            })
                        })]
                    }) : (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("div", {
                            className: "c-interactive",
                            ref: e => this.layer = e,
                            role: "presentation"
                        }), t.map( (e, t) => "#profile" === e.url ? (0,
                        s.jsx)("div", {
                            className: "c-interactive__link c-interactive__link--foreground",
                            "data-index": t,
                            "data-preview": e.preview,
                            style: {
                                height: e.height + "px",
                                top: e.top + "px"
                            },
                            onClick: this.openProfileTab,
                            "aria-label": e.title,
                            children: (0,
                            s.jsx)("div", {
                                className: "c-interactive__link__lines-column",
                                children: n[t]
                            })
                        }, t) : "#contact" === e.url ? (0,
                        s.jsx)("div", {
                            className: "c-interactive__link c-interactive__link--foreground",
                            "data-index": t,
                            "data-preview": e.preview,
                            style: {
                                height: e.height + "px",
                                top: e.top + "px"
                            },
                            onClick: this.openContactTab,
                            "aria-label": e.title
                        }, t) : -1 !== e.url.indexOf("http") ? (0,
                        s.jsx)("a", {
                            href: e.url,
                            target: "_blank",
                            className: "c-interactive__link c-interactive__link--foreground",
                            "data-index": t,
                            "data-preview": e.preview,
                            style: {
                                height: e.height + "px",
                                top: e.top + "px"
                            },
                            title: e.title
                        }, t) : (0,
                        s.jsx)(l(), {
                            href: e.url,
                            className: "c-interactive__link c-interactive__link--foreground",
                            "data-index": t,
                            "data-preview": e.preview,
                            style: {
                                height: e.height + "px",
                                top: e.top + "px"
                            },
                            title: e.title
                        }, t))]
                    })
                }
            }
            constructor(e) {
                super(e),
                this.onMouseMove = this.onMouseMove.bind(this),
                this.onMouseOut = this.onMouseOut.bind(this),
                this.onMouseOverLink = this.onMouseOverLink.bind(this),
                this.onMouseExitLink = this.onMouseExitLink.bind(this),
                this.openProfileTab = this.openProfileTab.bind(this),
                this.openContactTab = this.openContactTab.bind(this),
                this.state = {
                    lineIndex: 0,
                    lineIndexString: "0",
                    lineStyle: {},
                    activeIndex: -1,
                    previewTop: 0,
                    top: 0,
                    preview: 0
                }
            }
        }
        h.contextType = a.D
    }
    ,
    7328: (e, t, i) => {
        e.exports = i(9836)
    }
}]);
