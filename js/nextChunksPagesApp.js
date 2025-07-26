(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[636], {
    200: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => s
        });
        var r = i(7876)
          , n = i(4232)
          , o = i(3718);
        class s extends n.Component {
            componentDidMount() {
                if (this.doResize(),
                window.addEventListener("resize", this.doResize),
                this.$container) {
                    let e = []
                      , t = [];
                    for (let i = 0; i < 200; i++)
                        e[i] = Math.random() * (this.state.maxSpeed - this.state.minSpeed) + this.state.minSpeed,
                        t[i] = 0;
                    this.setState({
                        speeds: e,
                        points: t,
                        load: this.props.load,
                        forceLoad: this.props.forceLoad
                    })
                }
            }
            componentDidUpdate() {
                this.state.load !== this.props.load || this.state.forceLoad !== this.props.forceLoad ? this.setState({
                    load: this.props.load,
                    forceLoad: this.props.forceLoad
                }) : (!0 === this.state.load && !1 === this.state.loadStarted || !0 === this.state.force && !1 === this.state.LoadStarted) && this.startLoad()
            }
            componentWillUnmount() {
                null !== this.state.loadInterval && clearInterval(this.state.loadInterval)
            }
            startLoad() {
                let e = setInterval( () => {
                    this.loadAnimation()
                }
                , 40);
                this.setState({
                    loadStarted: !0,
                    loadInterval: e
                })
            }
            loadAnimation() {
                if (!0 === this.state.forceLoad)
                    clearInterval(this.state.loadInterval),
                    this.setState({
                        maskStyle: {
                            opacity: 1
                        },
                        loadEnded: !0,
                        loadInterval: null
                    });
                else if (!0 === this.context.siteLoaded && !1 === this.state.loadEnded) {
                    let e = !0
                      , t = Math.round(this.state.containerHeight / this.context.dimensions.monoLineHeight)
                      , i = "polygon(0% 100%, 0% 0%, "
                      , r = this.state.speeds
                      , n = this.state.points
                      , o = Number((100 / t).toFixed(3))
                      , s = 0;
                    for (let a = 0; a < t; a++)
                        n[a] = n[a] + Math.round(r[a] * this.context.dimensions.charWidth),
                        n[a] > this.state.containerWidth ? n[a] = this.state.containerWidth : e = !1,
                        0 !== a && (i += ", "),
                        i = i + "" + n[a] + "px " + s + "%",
                        s += o,
                        i = i + ", " + n[a] + "px " + s + "%";
                    if (i += ")",
                    e)
                        clearInterval(this.state.loadInterval),
                        this.setState({
                            points: n,
                            maskStyle: {
                                opacity: 1
                            },
                            loadEnded: !0,
                            loadInterval: null
                        });
                    else {
                        let e = {
                            opacity: 1,
                            clipPath: i
                        };
                        this.setState({
                            points: n,
                            maskStyle: e
                        })
                    }
                }
            }
            doResize() {
                if (this.$container) {
                    let e = this.$container.clientHeight
                      , t = this.$container.clientWidth;
                    this.state.containerHeight !== e && this.setState({
                        containerHeight: e,
                        containerWidth: t
                    })
                }
            }
            render() {
                let e = this.props.text
                  , t = this.props.lineStyle;
                return e ? (0,
                r.jsx)("span", {
                    id: this.props.elID,
                    className: "c-sans__inner",
                    style: this.state.maskStyle,
                    ref: e => {
                        this.$container = e
                    }
                    ,
                    children: e.map( (e, i) => (0,
                    r.jsx)("span", {
                        className: "c-sans__line c-sans__line--" + i,
                        style: t,
                        children: (0,
                        r.jsx)("span", {
                            className: "c-sans__line__content",
                            dangerouslySetInnerHTML: {
                                __html: e.text.replace("→", '<svg viewBox="0 0 40 24"><polygon points="40 12 28 0 28 9 0 9 0 15 28 15 28 24 40 12"/></svg>')
                            }
                        })
                    }, i))
                }) : null
            }
            constructor(e) {
                super(e),
                this.doResize = this.doResize.bind(this),
                this.loadAnimation = this.loadAnimation.bind(this),
                this.startLoad = this.startLoad.bind(this),
                this.state = {
                    forceLoad: !1,
                    load: !1,
                    loadStarted: !1,
                    loadEnded: !1,
                    containerHeight: 0,
                    containerWidth: 0,
                    speeds: [],
                    points: [],
                    minSpeed: 4,
                    maxSpeed: 6,
                    loadInterval: null,
                    maskStyle: {
                        opacity: 0
                    }
                }
            }
        }
        s.contextType = o.D
    }
    ,
    545: (e, t, i) => {
        "use strict";
        let r;
        i.r(t),
        i.d(t, {
            default: () => tE
        });
        var n, o, s, a = {};
        i.r(a),
        i.d(a, {
            hasBrowserEnv: () => eE,
            hasStandardBrowserEnv: () => eT,
            hasStandardBrowserWebWorkerEnv: () => eA,
            navigator: () => eC,
            origin: () => eO
        });
        var l = i(7876);
        i(8572);
        var h = i(4232)
          , c = i(9099)
          , u = i(3718);
        class d extends h.Component {
            componentDidMount() {
                this.checkFontLoad(),
                window.addEventListener("resize", this.doResize)
            }
            componentDidUpdate() {
                this.doResize()
            }
            componentWillUnmount() {
                window.removeEventListener("resize", this.doResize)
            }
            checkFontLoad() {
                document.fonts.check("12px code-saver") && document.fonts.check("12px neue-haas-grotesk-display") ? (this.setState({
                    fontLoaded: !0
                }),
                setTimeout( () => {
                    this.doResize()
                }
                , 100)) : setTimeout( () => {
                    this.checkFontLoad()
                }
                , 40)
            }
            doResize() {
                if (this.asciiLineRef[1] && this.state.fontLoaded) {
                    let e = window.innerHeight
                      , t = window.innerWidth
                      , i = !1
                      , r = !1;
                    t < 760 ? i = !0 : t < 1024 && (r = !0);
                    let n = t < e
                      , o = this.windowPanelRef.clientWidth
                      , s = e
                      , a = !1
                      , l = !1;
                    o < 760 ? a = !0 : o < 1024 && (l = !0);
                    let h = this.infoPanelRef.clientWidth
                      , c = parseFloat(window.getComputedStyle(this.monotypeRef, null).getPropertyValue("font-size").replace("px", ""))
                      , u = parseFloat(window.getComputedStyle(this.monotypeRef, null).getPropertyValue("line-height").replace("px", ""))
                      , d = parseFloat(this.contentRef.clientWidth)
                      , f = parseFloat(this.desktopColRef.clientWidth)
                      , p = 6;
                    (a || l) && (f = parseFloat(this.mobileColRef.clientWidth),
                    p = 5);
                    let m = Math.floor(f / (.5625 * c))
                      , g = m * p
                      , y = this.asciiLineRef[g].clientWidth
                      , b = y / p
                      , v = Math.floor((d - y) / (.5625 * c))
                      , w = b / m;
                    v < 0 && (v = 0);
                    let x = 0;
                    v > 0 && (x = this.asciiLineRef[v].clientWidth);
                    let _ = y + x
                      , S = Math.round(.45 * u)
                      , L = 3;
                    a && (L = 4);
                    let R = Math.round(L * b * .065)
                      , E = Math.ceil(1.25 * R / u) * u
                      , C = E - R
                      , T = Math.floor(R / u) * u + C
                      , A = Math.round(b / m * 3)
                      , O = Math.round(b / m * 3);
                    a && (A = Math.round(b / m * 2),
                    O = Math.round(b / m * 2));
                    let j = {
                        height: R + "px",
                        fontSize: R / 16 + "rem",
                        marginBottom: C + "px",
                        paddingLeft: A,
                        paddingRight: O
                    }
                      , P = {
                        height: R + "px",
                        fontSize: R / 16 + "rem",
                        marginBottom: T + "px",
                        paddingLeft: A + "px",
                        paddingRight: O + "px"
                    }
                      , M = p - 1;
                    (a || l) && (M = p);
                    let I = Math.floor(M * b * .2)
                      , W = Math.round(1.1 * I / u) * u
                      , k = I
                      , N = k;
                    k < 96 && (k = Math.round(96 / u) * u),
                    N > 80 && (N = Math.round(80 / u) * u);
                    let B = {
                        height: I + "px",
                        fontSize: I / 16 + "rem",
                        marginBottom: W - I + "px",
                        paddingLeft: A + "px"
                    }
                      , F = p - 1;
                    (a || l) && (F = p);
                    let H = Math.floor(F * b * .325)
                      , U = Math.round(1.1 * H / u) * u
                      , D = {
                        height: H + "px",
                        fontSize: H / 16 + "rem",
                        marginBottom: U - H + "px",
                        paddingLeft: A + "px"
                    }
                      , z = m * p - 3 - 1
                      , $ = this.asciiLineRef[3].clientWidth
                      , V = this.asciiLineRef[z].clientWidth - $
                      , q = [];
                    q[0] = 0;
                    let J = [];
                    J[0] = 0;
                    let X = [];
                    X[0] = 0;
                    let K = [];
                    K[0] = 0;
                    for (let e = 1; e < p + 1; e++) {
                        let t = m * e - 3 - 1;
                        q[e] = this.asciiLineRef[t].clientWidth - $,
                        X[e] = Math.ceil(q[e] / 1600 * 40),
                        K[e] = Math.ceil(q[e] / 1600 * 8);
                        let i = m * e;
                        J[e] = this.asciiLineRef[i].clientWidth
                    }
                    let G = 5 * m - 8;
                    !1 === a && !1 === l && (G = 3 * m - 8),
                    G > 96 && (G = 96);
                    let Z = this.uiHeaderRef.clientHeight
                      , Y = e
                      , Q = 5;
                    !0 === i ? Q = 7 : E > 3 * u && (Q = 4);
                    let ee = Math.round(Q * E + Z + 1 - u)
                      , et = (Q - 2) * E + +u
                      , ei = Math.round(et / 9 * 16)
                      , er = Math.ceil(ei / 1600 * 40)
                      , en = Math.ceil(ei / 1600 * 8)
                      , eo = Math.round(ei + (ee - (et += er))) + 1
                      , es = h
                      , ea = Y - ee
                      , el = (es + 8) / ei;
                    document.querySelector(":root").style.setProperty("--featured-hover-scale", el),
                    !0 === r ? (h = t,
                    Y = ee,
                    this.context.infoOpen && (s -= Y),
                    es = h - eo,
                    ea = Y) : eo = h;
                    let eh = s - Z
                      , ec = 9 * u
                      , eu = Math.round(ec / 9 * 16)
                      , ed = Math.ceil(eu / 1600 * 40)
                      , ef = Math.ceil(eu / 1600 * 8)
                      , ep = Math.round(1.5 * u - 4.5 * u)
                      , em = Math.ceil(3 * w);
                    ec += ed;
                    let eg = [];
                    for (let e = 1; e < m + 2; e++) {
                        eg[e] = "/";
                        for (let t = 1; t < e; t++)
                            eg[e] = eg[e] + "&nbsp;"
                    }
                    let ey = [];
                    for (let e = 0; e < m + 2; e++) {
                        ey[e] = "/";
                        for (let t = 1; t < e; t++)
                            ey[e] = ey[e] + "&nbsp;"
                    }
                    let eb = [];
                    for (let e = 0; e < m + 2; e++) {
                        eb[e] = "";
                        for (let t = 0; t < e; t++)
                            eb[e] = eb[e] + "&nbsp;"
                    }
                    let ev = [];
                    for (let e = 1; e < m + 2; e++) {
                        ev[e] = "/";
                        for (let t = 1; t < e; t++)
                            ev[e] = ev[e] + "-"
                    }
                    let ew = [];
                    for (let e = 1; e < m + 2; e++) {
                        ew[e] = "/";
                        for (let t = 1; t < e; t++)
                            ew[e] = ew[e] + "*"
                    }
                    let ex = [];
                    for (let e = 1; e < m + 2; e++) {
                        ex[e] = "/";
                        for (let t = 1; t < e; t++)
                            ex[e] = ex[e] + "/"
                    }
                    let e_ = [];
                    for (let e = 1; e < m + 2; e++) {
                        e_[e] = "/";
                        for (let t = 1; t < e; t++)
                            e_[e] = e_[e] + "+"
                    }
                    let eS = [];
                    for (let e = 1; e < m + 1; e++) {
                        eS[e] = "/";
                        for (let t = 1; t < e; t++)
                            eS[e] = eS[e] + "-"
                    }
                    let eL = [];
                    for (let e = 1; e < g + 10; e++) {
                        eL[e] = "-";
                        for (let t = 1; t < e; t++)
                            eL[e] = eL[e] + "-"
                    }
                    let eR = [];
                    for (let e = 1; e < m + 1; e++) {
                        eR[e] = "/";
                        for (let t = 1; t < e; t++)
                            eR[e] = eR[e] + "="
                    }
                    let eE = [];
                    for (let e = 1; e < g + 1; e++) {
                        eE[e] = "=";
                        for (let t = 1; t < e; t++)
                            eE[e] = eE[e] + "="
                    }
                    let eC = this.context.dimensions;
                    if (t !== eC.screenWidth || e !== eC.screenHeight || o !== eC.contentWidth || eh !== eC.contentHeight) {
                        let L = Math.ceil(m / 4);
                        n && (L = Math.ceil(m / 2.5)),
                        this.context.setDimensions({
                            screenHeight: e,
                            screenWidth: t,
                            screenMobile: i,
                            screenTablet: r,
                            portrait: n,
                            uiHeaderHeight: Z,
                            contentWidth: o,
                            mainWindowHeight: s,
                            infoPanelWidth: h,
                            infoPanelHeight: Y,
                            contentWidth: o,
                            contentHeight: eh,
                            contentMobile: a,
                            contentTablet: l,
                            profilePanelWidth: es,
                            profilePanelHeight: ea,
                            featuredPanelWidth: eo,
                            featuredPanelHeight: ee,
                            featuredWorkChromeHeight: er,
                            featuredWorkCornerRadius: en,
                            featuredWorkImageHeight: et,
                            featuredWorkImageWidth: ei,
                            fontW2H: .5625,
                            monoFontSize: c,
                            monoLineHeight: u,
                            contentColWidth: d,
                            colWidth: f,
                            numCols: p,
                            charsPerFrame: L,
                            charsPerCol: m,
                            charsPerLine: g,
                            asciiLayoutWidth: y,
                            asciiColWidth: b,
                            remainingChars: v,
                            remainingCharsWidth: x,
                            totalAsciiLayoutWidth: _,
                            charWidth: w,
                            sansOffset: S,
                            mediumFontSize: R,
                            mediumLineHeight: E,
                            mediumFontSpace: T,
                            mediumLineStyle: j,
                            mediumLineSpaceStyle: P,
                            largeFontSize: I,
                            largeLineHeight: W,
                            largeSpace: k,
                            largeLineStyle: B,
                            xlargeFontSize: H,
                            xlargeLineHeight: U,
                            xlargeSpace: I,
                            xlargeLineStyle: D,
                            mediaWidth: V,
                            mediaSpace: N,
                            mediaContainerStyle: {
                                right: $ + "px",
                                width: V + "px"
                            },
                            mediaWidths: q,
                            mediaRightOffsets: J,
                            wideTextBlockNumChars: G,
                            mediaWindowChromeHeights: X,
                            mediaWindowCornerRadius: K,
                            previewHeight: ec,
                            previewWidth: eu,
                            previewChromeHeight: ed,
                            previewCornerRadius: ef,
                            previewTopOffset: ep,
                            previewRightOffset: em,
                            space: eg,
                            empty: ey,
                            allEmpty: eb,
                            dash: ev,
                            star: ew,
                            slash: ex,
                            plus: e_,
                            singleBaseline: eS,
                            allSingleBaseline: eL,
                            doubleBaseline: eR,
                            allDoubleBaseline: eE,
                            dimensionsCalculated: !0
                        })
                    }
                }
            }
            render() {
                let e = [];
                for (let t = 1; t < 500; t++) {
                    let i = "-";
                    for (let e = 1; e < t; e++)
                        i += "-";
                    e.push((0,
                    l.jsx)("div", {
                        className: "c-guides__type c-guides__type--index-" + t,
                        ref: e => this.asciiLineRef[t] = e,
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    }, t))
                }
                return this.asciiLineRef = [],
                (0,
                l.jsxs)("div", {
                    className: "c-guides " + (this.context.infoOpen ? "state-info-open" : ""),
                    children: [(0,
                    l.jsx)("p", {
                        className: "c-guides__sans",
                        dangerouslySetInnerHTML: {
                            __html: "M"
                        }
                    }), (0,
                    l.jsx)("p", {
                        className: "c-guides__serif",
                        dangerouslySetInnerHTML: {
                            __html: "M"
                        }
                    }), (0,
                    l.jsx)("div", {
                        className: "c-guides__ui-header",
                        ref: e => this.uiHeaderRef = e
                    }), (0,
                    l.jsx)("div", {
                        className: "c-guides__info",
                        ref: e => this.infoPanelRef = e
                    }), (0,
                    l.jsx)("div", {
                        className: "c-guides__window",
                        ref: e => this.windowPanelRef = e,
                        children: (0,
                        l.jsxs)("div", {
                            className: "c-guides__window__inner",
                            ref: e => this.contentRef = e,
                            children: [e, (0,
                            l.jsx)("div", {
                                className: "c-guides__column c-guides__column--mobile",
                                ref: e => this.mobileColRef = e
                            }), (0,
                            l.jsx)("div", {
                                className: "c-guides__column c-guides__column--desktop",
                                ref: e => this.desktopColRef = e
                            }), (0,
                            l.jsx)("span", {
                                className: "c-mono-type c-guides__typesize",
                                dangerouslySetInnerHTML: {
                                    __html: "0"
                                },
                                ref: e => this.monotypeRef = e
                            })]
                        })
                    })]
                })
            }
            constructor() {
                super(),
                this.state = {
                    fontLoaded: !1
                },
                this.doResize = this.doResize.bind(this),
                this.checkFontLoad = this.checkFontLoad.bind(this)
            }
        }
        d.contextType = u.D;
        var f = i(8230)
          , p = i.n(f);
        class m extends h.Component {
            openProfileTab(e) {
                e.preventDefault(),
                this.context.setProfileOpen()
            }
            openContactTab(e) {
                e.preventDefault(),
                this.context.setContactOpen()
            }
            closeInfoPanel(e) {
                e.preventDefault(),
                document.documentElement.classList.remove("state-info-open"),
                this.context.setInfoClosed()
            }
            render() {
                return (0,
                l.jsxs)("div", {
                    className: "c-gui__panel__header",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "c-gui__panel__header__tabs",
                        children: [!0 === this.context.profileActive && (0,
                        l.jsx)("div", {
                            className: "c-gui__panel__header__tabs__tab state-active",
                            dangerouslySetInnerHTML: {
                                __html: "Profile"
                            }
                        }), !1 === this.context.profileActive && (0,
                        l.jsx)("div", {
                            className: "c-gui__panel__header__tabs__tab",
                            onClick: this.openProfileTab,
                            dangerouslySetInnerHTML: {
                                __html: "Profile"
                            }
                        }), !0 === this.context.contactActive && (0,
                        l.jsx)("div", {
                            className: "c-gui__panel__header__tabs__tab state-active",
                            dangerouslySetInnerHTML: {
                                __html: "Contact"
                            }
                        }), !1 === this.context.contactActive && (0,
                        l.jsx)("div", {
                            className: "c-gui__panel__header__tabs__tab",
                            onClick: this.openContactTab,
                            dangerouslySetInnerHTML: {
                                __html: "Contact"
                            }
                        })]
                    }), (0,
                    l.jsx)("button", {
                        className: "c-gui__panel__header__button c-gui__panel__header__button--close",
                        onClick: this.closeInfoPanel,
                        dangerouslySetInnerHTML: {
                            __html: '<svg viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>'
                        },
                        "aria-label": "Close sidebar"
                    })]
                })
            }
            constructor() {
                super(),
                this.state = {
                    layoutReady: !1
                },
                this.openProfileTab = this.openProfileTab.bind(this),
                this.openContactTab = this.openContactTab.bind(this),
                this.closeInfoPanel = this.closeInfoPanel.bind(this)
            }
        }
        m.contextType = u.D;
        class g extends h.Component {
            componentDidMount() {
                let e = [];
                for (let t = 0; t < 200; t++)
                    e[t] = Math.floor(-20 * Math.random());
                this.setState({
                    startAnimationOffset: e
                }),
                this.doReadyCheck()
            }
            componentWillUnmount() {
                this.timerID && clearTimeout(this.timerID)
            }
            componentDidUpdate() {
                this.doLayout()
            }
            doReadyCheck() {
                this.context.dimensions.dimensionsCalculated && !1 === this.state.layoutReady && !0 === this.context.infoOpen ? (setTimeout( () => {
                    this.doLayout(),
                    this.timerID = setInterval( () => {
                        if (!1 === this.state.animationDone) {
                            let e = this.state.maxChar + 3;
                            this.setState({
                                maxChar: e
                            }),
                            this.doLayout()
                        } else
                            clearInterval(this.timerID)
                    }
                    , 40)
                }
                , 250),
                this.setState({
                    layoutReady: !0
                })) : setTimeout( () => {
                    this.doReadyCheck()
                }
                , 40)
            }
            doLayout() {
                let e = this.context.dimensions
                  , t = this.props.notice;
                if (this.state.profilePanelWidth !== e.profilePanelWidth) {
                    let i = Math.floor((e.profilePanelWidth - 1) / (e.monoFontSize * e.fontW2H)) - 1 - 3
                      , r = []
                      , n = 0
                      , o = t.split(" ")
                      , s = !0
                      , a = 0;
                    for (let e = 0; e < o.length; e++)
                        a + o[e].length > i || !0 === s ? (s = !1,
                        r[++n] = o[e],
                        a = o[e].length) : (r[n] = r[n] + " " + o[e],
                        a = a + 1 + o[e].length);
                    this.setState({
                        profilePanelWidth: e.profilePanelWidth,
                        numChars: i,
                        lines: r
                    })
                } else {
                    let e = [];
                    this.state.startAnimationOffset;
                    let t = !0;
                    for (let i = 0; i < this.state.lines.length; i++) {
                        let r = this.state.startAnimationOffset[i] + this.state.maxChar;
                        if (r > 0) {
                            if (this.state.lines[i]) {
                                let n = this.state.lines[i].split("");
                                for (let i = 0; i < n.length; i++)
                                    i < r ? " " === n[i] ? e.push("&nbsp;") : e.push(n[i]) : t = !1
                            }
                        } else
                            t = !1,
                            e.push("&nbsp;")
                    }
                    e.join("").length !== this.state.asciiLayout.join("").length && this.setState({
                        asciiLayout: e,
                        animationDone: t
                    })
                }
            }
            render() {
                return this.context.dimensions,
                (0,
                l.jsx)(l.Fragment, {
                    children: (0,
                    l.jsx)("div", {
                        className: "c-editor__notice " + (this.props.transitionIn ? "state-transition-in" : ""),
                        children: (0,
                        l.jsx)("div", {
                            className: "c-editor__notice__ascii",
                            dangerouslySetInnerHTML: {
                                __html: '<svg viewBox="0 0 24 24"><path d="M23.77,20.48L13.67,1.72c-.72-1.33-2.62-1.33-3.34,0L.23,20.48c-.5.92-.15,2.07.77,2.57.28.15.58.23.9.23h20.21c1.05,0,1.9-.85,1.9-1.9,0-.31-.08-.62-.23-.9h0ZM12,20.37c-.65,0-1.19-.53-1.19-1.19s.53-1.19,1.19-1.19,1.19.53,1.19,1.19h0c0,.65-.53,1.19-1.19,1.19ZM13.29,8.45l-.34,7.23c0,.52-.42.95-.95.95s-.95-.42-.95-.95l-.34-7.23c-.03-.71.52-1.31,1.23-1.34.01,0,.03,0,.04,0h.01c.71,0,1.29.58,1.29,1.29,0,.02,0,.04,0,.06h0Z"/></svg>' + this.state.asciiLayout.join("")
                            }
                        })
                    })
                })
            }
            constructor() {
                super(),
                this.state = {
                    layoutReady: !1,
                    animationDone: !1,
                    maxChar: 0,
                    startAnimationOffset: [],
                    profilePanelWidth: 0,
                    numChars: 0,
                    lines: 0,
                    asciiLayout: []
                },
                this.doReadyCheck = this.doReadyCheck.bind(this),
                this.doLayout = this.doLayout.bind(this)
            }
        }
        g.contextType = u.D;
        var y = i(200);
        class b extends h.Component {
            componentDidMount() {
                let e = [];
                for (let t = 0; t < 200; t++)
                    e[t] = Math.floor(-40 * Math.random());
                this.setState({
                    startAnimationOffset: e
                }),
                this.doReadyCheck()
            }
            componentWillUnmount() {
                this.timerID && clearTimeout(this.timerID)
            }
            componentDidUpdate() {
                this.doLayout()
            }
            doReadyCheck() {
                this.context.dimensions.dimensionsCalculated && !1 === this.state.layoutReady && !0 === this.context.infoOpen ? (setTimeout( () => {
                    this.doLayout(),
                    this.timerID = setInterval( () => {
                        if (!1 === this.state.animationDone) {
                            let e = this.state.maxChar + 3;
                            this.setState({
                                maxChar: e,
                                showText: !0
                            }),
                            this.doLayout()
                        } else
                            clearInterval(this.timerID)
                    }
                    , 40)
                }
                , 250),
                this.setState({
                    layoutReady: !0,
                    transitionIn: !0
                })) : setTimeout( () => {
                    this.doReadyCheck()
                }
                , 40)
            }
            doLayout() {
                let e = this.context.dimensions
                  , t = this.props.comment
                  , i = this.props.heading
                  , r = this.props.text
                  , n = this.props.classAttr;
                if (this.state.profilePanelWidth !== e.profilePanelWidth) {
                    let o = ""
                      , s = Math.floor((e.profilePanelWidth - 1) / (e.monoFontSize * e.fontW2H)) - 1
                      , a = [];
                    a[0] = " \x3c!-- " + t + " --\x3e",
                    a[1] = ' <section class="' + n + '">',
                    a[2] = "   <h3>",
                    a[3] = "     " + i,
                    a[4] = "   </h3>";
                    let l = 5;
                    for (let t = 0; t < r.length; t++) {
                        r[t].href ? (o = o + '<a class="c-link" href="' + r[t].href + '" target="_blank" style="top:' + l * e.monoLineHeight + "px;height:" + 3 * e.monoLineHeight + 'px;"></a>',
                        a[l] = '   <a href="' + r[t].href + '">') : a[l] = "   <p>";
                        let i = r[t].text.split(" ")
                          , n = !0
                          , h = 0;
                        for (let e = 0; e < i.length; e++)
                            h + i[e].length + 4 > s || !0 === n ? (n = !1,
                            a[++l] = "     " + i[e],
                            h = 5 + i[e].length) : (a[l] = a[l] + " " + i[e],
                            h = h + 1 + i[e].length);
                        l++,
                        r.href ? a[l] = "   </a>" : a[l] = "   </p>",
                        l++
                    }
                    a[l] = " </section>",
                    this.setState({
                        profilePanelWidth: e.profilePanelWidth,
                        numChars: s,
                        lines: a,
                        linkHTML: o
                    })
                } else {
                    let e = [];
                    this.state.startAnimationOffset;
                    let t = !0
                      , i = 0;
                    for (let r = 0; r < this.state.lines.length; r++) {
                        let n = this.state.startAnimationOffset[r] + this.state.maxChar;
                        if (n > 0) {
                            if (this.state.lines[r]) {
                                let o = this.state.lines[r].split("");
                                for (let r = 0; r < o.length; r++)
                                    r < n ? " " === o[r] ? e.push("&nbsp;") : "c" === o[r] && "l" === o[r + 1] && "a" === o[r + 2] && "s" === o[r + 3] && "s" === o[r + 4] ? (e.push('<span class="attribute">c'),
                                    i += 1) : "h" === o[r] && "r" === o[r + 1] && "e" === o[r + 2] && "f" === o[r + 3] ? (e.push('<span class="attribute">h'),
                                    i += 1) : "s" === o[r] && "s" === o[r - 1] && "a" === o[r - 2] && "l" === o[r - 3] && "c" === o[r - 4] ? (e.push("s</span>"),
                                    i -= 1) : '"' === o[r] && "=" === o[r - 1] ? (e.push('"<span class="attribute-value">'),
                                    i += 1) : '"' === o[r] && "=" !== o[r - 1] ? (e.push('</span>"'),
                                    i -= 1) : "<" === o[r] && "!" === o[r + 1] ? (e.push('<span class="comment">&lt;'),
                                    i += 1) : "<" === o[r] ? (e.push('<span class="code">&lt;'),
                                    i += 1) : ">" === o[r] ? (e.push("&gt;</span>"),
                                    i -= 1) : e.push(o[r]) : t = !1;
                                if (i > 0) {
                                    for (let t = 0; t < i; t++)
                                        e.push("</span>");
                                    i = 0
                                }
                            }
                        } else
                            t = !1,
                            e.push("&nbsp;");
                        e.push("<br />")
                    }
                    e.join("").length !== this.state.asciiLayout.join("").length && this.setState({
                        asciiLayout: e,
                        animationDone: t
                    })
                }
            }
            render() {
                let e = this.context.dimensions
                  , t = this.props.display_heading
                  , i = this.props.notice;
                return (0,
                l.jsx)(l.Fragment, {
                    children: (0,
                    l.jsxs)("div", {
                        className: "c-editor",
                        children: [(0,
                        l.jsx)("h1", {
                            className: "c-sans c-sans--color-5 c-sans--large c-sans--info " + (this.state.transitionIn ? "state-transition-in" : ""),
                            children: (0,
                            l.jsx)(y.A, {
                                text: t,
                                lineStyle: e.largeLineStyle,
                                load: !0
                            })
                        }), i && (0,
                        l.jsx)(g, {
                            notice: i,
                            transitionIn: this.state.transitionIn
                        }), (0,
                        l.jsx)("div", {
                            className: "c-editor__ascii",
                            dangerouslySetInnerHTML: {
                                __html: this.state.asciiLayout.join("") + this.state.linkHTML
                            }
                        })]
                    })
                })
            }
            constructor() {
                super(),
                this.state = {
                    layoutReady: !1,
                    animationDone: !1,
                    maxChar: 0,
                    startAnimationOffset: [],
                    profilePanelWidth: 0,
                    numChars: 0,
                    lines: 0,
                    linkHTML: "",
                    asciiLayout: [],
                    transitionIn: !1
                },
                this.doReadyCheck = this.doReadyCheck.bind(this),
                this.doLayout = this.doLayout.bind(this)
            }
        }
        b.contextType = u.D;
        class v extends h.Component {
            componentDidMount() {
                let e = "/";
                e = window.location.pathname + "",
                this.setState({
                    path: e
                }),
                c.Router.events.on("routeChangeComplete", e => {
                    let t = "/";
                    t = window.location.pathname,
                    this.setState({
                        path: t
                    })
                }
                )
            }
            onSwapColorScheme() {}
            render() {
                let e = this.props.content;
                return (0,
                l.jsx)("div", {
                    className: "c-gui__panel__header",
                    children: (0,
                    l.jsx)("div", {
                        className: "c-gui__panel__header__tabs",
                        children: e.featured.map( (e, t) => this.context.featuredActive === t ? (0,
                        l.jsx)("div", {
                            className: "c-gui__panel__header__tabs__tab state-active",
                            dangerouslySetInnerHTML: {
                                __html: e.tab_title + ".js"
                            }
                        }, t) : (0,
                        l.jsx)("div", {
                            className: "c-gui__panel__header__tabs__tab",
                            dangerouslySetInnerHTML: {
                                __html: e.title
                            }
                        }, t))
                    })
                })
            }
            constructor(e) {
                super(e),
                this.onSwapColorScheme = this.onSwapColorScheme.bind(this),
                this.state = {
                    path: "/"
                }
            }
        }
        v.contextType = u.D;
        var w = i(5177);
        class x extends h.Component {
            componentDidMount() {
                let e = [];
                for (let t = 0; t < 100; t++)
                    e[t] = Math.floor(-40 * Math.random());
                this.setState({
                    startAnimationOffset: e
                }),
                this.doReadyCheck()
            }
            componentWillUnmount() {
                this.timerID && clearTimeout(this.timerID)
            }
            componentDidUpdate() {
                this.doLayout()
            }
            onMouseOver() {
                this.setState({
                    hover: !0,
                    hoverFrame: 0
                }),
                this.hoverTimerID = setInterval( () => {
                    let e = this.state.maxHoverFrame
                      , t = this.state.hoverFrame + 1
                      , i = "";
                    if (t > e)
                        t = e,
                        i = "VIEW",
                        this.setState({
                            hoverFrame: t,
                            hoverTextString: i
                        }),
                        clearInterval(this.hoverTimerID),
                        this.hoverTimerID = null;
                    else {
                        let i = "&nbsp;"
                          , r = "&nbsp;"
                          , n = "&nbsp;"
                          , o = "&nbsp;";
                        t < Math.round(.25 * e) ? (i = this.state.randomString[Math.floor(25 * Math.random())],
                        r = this.state.randomString[Math.floor(25 * Math.random())],
                        n = this.state.randomString[Math.floor(25 * Math.random())]) : t < Math.round(.5 * e) ? (i = "V",
                        r = this.state.randomString[Math.floor(25 * Math.random())],
                        n = this.state.randomString[Math.floor(25 * Math.random())]) : t < Math.round(.75 * e) ? (i = "V",
                        r = "I",
                        n = this.state.randomString[Math.floor(25 * Math.random())]) : (i = "V",
                        r = "I",
                        n = "E"),
                        o = this.state.randomString[Math.floor(25 * Math.random())],
                        this.setState({
                            hoverFrame: t,
                            hoverTextString: i + r + n + o
                        })
                    }
                }
                , 80),
                this.videoRef.currentTime = 0
            }
            onMouseOut() {
                this.setState({
                    hover: !1,
                    hoverTextString: "&nbsp;&nbsp;&nbsp;&nbsp;"
                }),
                clearInterval(this.hoverTimerID),
                this.hoverTimerID = null
            }
            doReadyCheck() {
                this.context.dimensions.dimensionsCalculated && !1 === this.state.layoutReady && !0 === this.context.infoOpen ? (setTimeout( () => {
                    this.doLayout(),
                    this.timerID = setInterval( () => {
                        let e = !1;
                        if (!1 === this.state.animationDone) {
                            let t = this.state.maxChar + 3;
                            t > 30 && (e = !0),
                            this.setState({
                                maxChar: t,
                                loadText: e
                            }),
                            this.doLayout()
                        } else
                            clearInterval(this.timerID)
                    }
                    , 40)
                }
                , 250),
                this.setState({
                    layoutReady: !0,
                    transitionIn: !0
                })) : setTimeout( () => {
                    this.doReadyCheck()
                }
                , 40)
            }
            getMediumBlockHeight(e, t) {
                let i = this.context.dimensions;
                return i.mediumFontSize * e + (i.mediumLineHeight - i.mediumFontSize) * (e - 1) + (i.mediumFontSpace - (i.mediumLineHeight - i.mediumFontSize)) * t
            }
            doLayout() {
                let e = this.context.dimensions
                  , t = this.props.content;
                if (this.state.featuredPanelWidth !== e.featuredPanelWidth || this.state.featuredPanelHeight !== e.featuredPanelHeight || this.context.featuredActive !== this.state.featuredActive) {
                    let i = Math.floor((e.featuredPanelWidth - 1) / (e.monoFontSize * e.fontW2H))
                      , r = Math.round(e.mediumLineHeight / e.monoLineHeight)
                      , n = Math.floor(e.featuredPanelHeight - e.uiHeaderHeight) / e.monoLineHeight
                      , o = r - 1
                      , s = o * e.monoLineHeight - e.mediumFontSize - e.sansOffset + e.monoLineHeight
                      , a = (o + t.featured[this.context.featuredActive].sans_title.length * r) * e.monoLineHeight - e.mediumFontSize - e.sansOffset + e.monoLineHeight;
                    this.setState({
                        featuredPanelWidth: e.featuredPanelWidth,
                        featuredPanelHeight: e.featuredPanelHeight,
                        numChars: i,
                        lines: n,
                        baselineStep: r,
                        titleStyle: {
                            top: s + "px"
                        },
                        subtitleStyle: {
                            top: a + "px"
                        },
                        featuredActive: this.context.featuredActive
                    })
                } else {
                    let e = '<span role="presentation">';
                    this.state.startAnimationOffset;
                    let t = !0;
                    for (let i = 0; i < this.state.lines; i++) {
                        let r = this.state.startAnimationOffset[i] + this.state.maxChar;
                        (i + 1) % this.state.baselineStep == 0 ? !0 === this.state.animationDone || this.state.numChars < r ? e = e + this.context.dimensions.allSingleBaseline[this.state.numChars] + "<br />" : (t = !1,
                        r > 0 ? e = e + this.context.dimensions.allSingleBaseline[r] + "<br />" : e += "<br />") : e += "<br />"
                    }
                    e !== this.state.asciiLayout && this.setState({
                        asciiLayout: e,
                        animationDone: t
                    })
                }
            }
            render() {
                let e = this.props.content
                  , t = this.context.dimensions;
                return (0,
                l.jsx)(l.Fragment, {
                    children: (0,
                    l.jsxs)("div", {
                        className: "c-featured-work",
                        style: {
                            height: Math.floor(this.state.lines * t.monoLineHeight) + "px"
                        },
                        children: [(0,
                        l.jsx)("h5", {
                            className: "c-sans c-sans--color-3 " + (this.state.maxChar > 0 ? "state-transition-in" : ""),
                            style: this.state.titleStyle,
                            children: (0,
                            l.jsx)(y.A, {
                                load: !0,
                                text: e.featured[this.context.featuredActive].sans_title,
                                lineStyle: t.mediumLineStyle
                            })
                        }), (0,
                        l.jsx)("h6", {
                            className: "c-sans c-sans--color-4 " + (this.state.maxChar > 0 ? "state-transition-in" : ""),
                            style: this.state.subtitleStyle,
                            children: (0,
                            l.jsx)(y.A, {
                                load: !0,
                                text: e.featured[this.context.featuredActive].sans_subtitle,
                                lineStyle: t.mediumLineStyle
                            })
                        }), (0,
                        l.jsx)("div", {
                            className: "c-featured-work__ascii",
                            dangerouslySetInnerHTML: {
                                __html: this.state.asciiLayout
                            }
                        }), (0,
                        l.jsx)("div", {
                            className: "c-featured-work__media " + (this.state.hover ? "state-hover" : "") + " " + (this.state.transitionIn ? "state-transition-in" : ""),
                            style: {
                                width: t.featuredWorkImageWidth + "px",
                                height: t.featuredWorkImageHeight + "px",
                                marginLeft: Math.round(0 - .5 * t.featuredWorkImageWidth) + "px",
                                marginTop: Math.round(0 - .5 * t.featuredWorkImageHeight) + "px"
                            },
                            children: e.featured.map( (e, i) => i === this.context.featuredActive && !0 === this.context.infoOpen ? (0,
                            l.jsx)(w.A, {
                                gallery: e.slides,
                                chromeHeight: t.featuredWorkChromeHeight,
                                chromeRadius: t.featuredWorkCornerRadius,
                                forceLoad: !0,
                                loadDelay: 250,
                                playDelay: 500,
                                autoChange: !0,
                                loop: "loop" === e.loop,
                                forceSlide: !1
                            }, i) : null)
                        }), this.context.touch && (0,
                        l.jsx)(p(), {
                            href: e.featured[this.context.featuredActive].url,
                            className: "c-featured-work__link"
                        }), !this.context.touch && (0,
                        l.jsxs)(l.Fragment, {
                            children: [(0,
                            l.jsx)("div", {
                                className: "c-featured-work__hover-media " + (this.state.hover ? "state-hover" : ""),
                                children: (0,
                                l.jsx)("video", {
                                    id: "hover-media",
                                    className: "c-featured-work__hover-media__video",
                                    src: e.featured[0].slides[0].preview_hover_video,
                                    playsInline: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    loop: !0,
                                    ref: e => this.videoRef = e
                                })
                            }), (0,
                            l.jsx)(p(), {
                                href: e.featured[this.context.featuredActive].url,
                                className: "c-featured-work__link " + (this.state.hover ? "state-hover" : ""),
                                onMouseOver: this.onMouseOver,
                                onMouseOut: this.onMouseOut
                            }), (0,
                            l.jsx)("p", {
                                className: "c-featured-work__link__text " + (this.state.hover ? "state-hover" : ""),
                                dangerouslySetInnerHTML: {
                                    __html: this.state.hoverTextString
                                }
                            })]
                        })]
                    })
                })
            }
            constructor() {
                super(),
                this.state = {
                    layoutReady: !1,
                    animationDone: !1,
                    maxChar: 0,
                    startAnimationOffset: [],
                    featuredPanelWidth: 0,
                    featuredPanelHeight: 0,
                    numChars: 0,
                    lines: 0,
                    baselineStep: 0,
                    dash: [],
                    titleStyle: {},
                    subtitleStyle: {},
                    featuredActive: 0,
                    opened: !1,
                    loadText: !1,
                    hoverTextString: "",
                    randomString: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    hoverFrame: 0,
                    maxHoverFrame: 16,
                    hover: !1,
                    transitionIn: !1
                },
                this.doReadyCheck = this.doReadyCheck.bind(this),
                this.doLayout = this.doLayout.bind(this),
                this.getMediumBlockHeight = this.getMediumBlockHeight.bind(this),
                this.onMouseOver = this.onMouseOver.bind(this),
                this.onMouseOut = this.onMouseOut.bind(this)
            }
        }
        function _(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        x.contextType = u.D;
        var S = i(5364);
        let {toString: L} = Object.prototype
          , {getPrototypeOf: R} = Object
          , {iterator: E, toStringTag: C} = Symbol
          , T = (e => t => {
            let i = L.call(t);
            return e[i] || (e[i] = i.slice(8, -1).toLowerCase())
        }
        )(Object.create(null))
          , A = e => (e = e.toLowerCase(),
        t => T(t) === e)
          , O = e => t => typeof t === e
          , {isArray: j} = Array
          , P = O("undefined")
          , M = A("ArrayBuffer")
          , I = O("string")
          , W = O("function")
          , k = O("number")
          , N = e => null !== e && "object" == typeof e
          , B = e => {
            if ("object" !== T(e))
                return !1;
            let t = R(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(C in e) && !(E in e)
        }
          , F = A("Date")
          , H = A("File")
          , U = A("Blob")
          , D = A("FileList")
          , z = A("URLSearchParams")
          , [$,V,q,J] = ["ReadableStream", "Request", "Response", "Headers"].map(A);
        function X(e, t, {allOwnKeys: i=!1}={}) {
            let r, n;
            if (null != e)
                if ("object" != typeof e && (e = [e]),
                j(e))
                    for (r = 0,
                    n = e.length; r < n; r++)
                        t.call(null, e[r], r, e);
                else {
                    let n, o = i ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
                    for (r = 0; r < s; r++)
                        n = o[r],
                        t.call(null, e[n], n, e)
                }
        }
        function K(e, t) {
            let i;
            t = t.toLowerCase();
            let r = Object.keys(e)
              , n = r.length;
            for (; n-- > 0; )
                if (t === (i = r[n]).toLowerCase())
                    return i;
            return null
        }
        let G = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global
          , Z = e => !P(e) && e !== G
          , Y = (e => t => e && t instanceof e)("undefined" != typeof Uint8Array && R(Uint8Array))
          , Q = A("HTMLFormElement")
          , ee = ( ({hasOwnProperty: e}) => (t, i) => e.call(t, i))(Object.prototype)
          , et = A("RegExp")
          , ei = (e, t) => {
            let i = Object.getOwnPropertyDescriptors(e)
              , r = {};
            X(i, (i, n) => {
                let o;
                !1 !== (o = t(i, n, e)) && (r[n] = o || i)
            }
            ),
            Object.defineProperties(e, r)
        }
          , er = A("AsyncFunction")
          , en = (n = "function" == typeof setImmediate,
        o = W(G.postMessage),
        n ? setImmediate : o ? ( (e, t) => (G.addEventListener("message", ({source: i, data: r}) => {
            i === G && r === e && t.length && t.shift()()
        }
        , !1),
        i => {
            t.push(i),
            G.postMessage(e, "*")
        }
        ))(`axios@${Math.random()}`, []) : e => setTimeout(e))
          , eo = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(G) : void 0 !== S && S.nextTick || en
          , es = {
            isArray: j,
            isArrayBuffer: M,
            isBuffer: function(e) {
                return null !== e && !P(e) && null !== e.constructor && !P(e.constructor) && W(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e => {
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || W(e.append) && ("formdata" === (t = T(e)) || "object" === t && W(e.toString) && "[object FormData]" === e.toString()))
            }
            ,
            isArrayBufferView: function(e) {
                let t;
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && M(e.buffer)
            },
            isString: I,
            isNumber: k,
            isBoolean: e => !0 === e || !1 === e,
            isObject: N,
            isPlainObject: B,
            isReadableStream: $,
            isRequest: V,
            isResponse: q,
            isHeaders: J,
            isUndefined: P,
            isDate: F,
            isFile: H,
            isBlob: U,
            isRegExp: et,
            isFunction: W,
            isStream: e => N(e) && W(e.pipe),
            isURLSearchParams: z,
            isTypedArray: Y,
            isFileList: D,
            forEach: X,
            merge: function e() {
                let {caseless: t} = Z(this) && this || {}
                  , i = {}
                  , r = (r, n) => {
                    let o = t && K(i, n) || n;
                    B(i[o]) && B(r) ? i[o] = e(i[o], r) : B(r) ? i[o] = e({}, r) : j(r) ? i[o] = r.slice() : i[o] = r
                }
                ;
                for (let e = 0, t = arguments.length; e < t; e++)
                    arguments[e] && X(arguments[e], r);
                return i
            },
            extend: (e, t, i, {allOwnKeys: r}={}) => (X(t, (t, r) => {
                i && W(t) ? e[r] = _(t, i) : e[r] = t
            }
            , {
                allOwnKeys: r
            }),
            e),
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)),
            e),
            inherits: (e, t, i, r) => {
                e.prototype = Object.create(t.prototype, r),
                e.prototype.constructor = e,
                Object.defineProperty(e, "super", {
                    value: t.prototype
                }),
                i && Object.assign(e.prototype, i)
            }
            ,
            toFlatObject: (e, t, i, r) => {
                let n, o, s, a = {};
                if (t = t || {},
                null == e)
                    return t;
                do {
                    for (o = (n = Object.getOwnPropertyNames(e)).length; o-- > 0; )
                        s = n[o],
                        (!r || r(s, e, t)) && !a[s] && (t[s] = e[s],
                        a[s] = !0);
                    e = !1 !== i && R(e)
                } while (e && (!i || i(e, t)) && e !== Object.prototype);
                return t
            }
            ,
            kindOf: T,
            kindOfTest: A,
            endsWith: (e, t, i) => {
                e = String(e),
                (void 0 === i || i > e.length) && (i = e.length),
                i -= t.length;
                let r = e.indexOf(t, i);
                return -1 !== r && r === i
            }
            ,
            toArray: e => {
                if (!e)
                    return null;
                if (j(e))
                    return e;
                let t = e.length;
                if (!k(t))
                    return null;
                let i = Array(t);
                for (; t-- > 0; )
                    i[t] = e[t];
                return i
            }
            ,
            forEachEntry: (e, t) => {
                let i, r = (e && e[E]).call(e);
                for (; (i = r.next()) && !i.done; ) {
                    let r = i.value;
                    t.call(e, r[0], r[1])
                }
            }
            ,
            matchAll: (e, t) => {
                let i, r = [];
                for (; null !== (i = e.exec(t)); )
                    r.push(i);
                return r
            }
            ,
            isHTMLForm: Q,
            hasOwnProperty: ee,
            hasOwnProp: ee,
            reduceDescriptors: ei,
            freezeMethods: e => {
                ei(e, (t, i) => {
                    if (W(e) && -1 !== ["arguments", "caller", "callee"].indexOf(i))
                        return !1;
                    if (W(e[i])) {
                        if (t.enumerable = !1,
                        "writable"in t) {
                            t.writable = !1;
                            return
                        }
                        t.set || (t.set = () => {
                            throw Error("Can not rewrite read-only method '" + i + "'")
                        }
                        )
                    }
                }
                )
            }
            ,
            toObjectSet: (e, t) => {
                let i = {};
                return (j(e) ? e : String(e).split(t)).forEach(e => {
                    i[e] = !0
                }
                ),
                i
            }
            ,
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, i) {
                return t.toUpperCase() + i
            }),
            noop: () => {}
            ,
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e *= 1) ? e : t,
            findKey: K,
            global: G,
            isContextDefined: Z,
            isSpecCompliantForm: function(e) {
                return !!(e && W(e.append) && "FormData" === e[C] && e[E])
            },
            toJSONObject: e => {
                let t = Array(10)
                  , i = (e, r) => {
                    if (N(e)) {
                        if (t.indexOf(e) >= 0)
                            return;
                        if (!("toJSON"in e)) {
                            t[r] = e;
                            let n = j(e) ? [] : {};
                            return X(e, (e, t) => {
                                let o = i(e, r + 1);
                                P(o) || (n[t] = o)
                            }
                            ),
                            t[r] = void 0,
                            n
                        }
                    }
                    return e
                }
                ;
                return i(e, 0)
            }
            ,
            isAsyncFn: er,
            isThenable: e => e && (N(e) || W(e)) && W(e.then) && W(e.catch),
            setImmediate: en,
            asap: eo,
            isIterable: e => null != e && W(e[E])
        };
        function ea(e, t, i, r, n) {
            Error.call(this),
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack,
            this.message = e,
            this.name = "AxiosError",
            t && (this.code = t),
            i && (this.config = i),
            r && (this.request = r),
            n && (this.response = n,
            this.status = n.status ? n.status : null)
        }
        es.inherits(ea, Error, {
            toJSON: function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: es.toJSONObject(this.config),
                    code: this.code,
                    status: this.status
                }
            }
        });
        let el = ea.prototype
          , eh = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
            eh[e] = {
                value: e
            }
        }
        ),
        Object.defineProperties(ea, eh),
        Object.defineProperty(el, "isAxiosError", {
            value: !0
        }),
        ea.from = (e, t, i, r, n, o) => {
            let s = Object.create(el);
            return es.toFlatObject(e, s, function(e) {
                return e !== Error.prototype
            }, e => "isAxiosError" !== e),
            ea.call(s, e.message, t, i, r, n),
            s.cause = e,
            s.name = e.name,
            o && Object.assign(s, o),
            s
        }
        ;
        var ec = i(8220).Buffer;
        function eu(e) {
            return es.isPlainObject(e) || es.isArray(e)
        }
        function ed(e) {
            return es.endsWith(e, "[]") ? e.slice(0, -2) : e
        }
        function ef(e, t, i) {
            return e ? e.concat(t).map(function(e, t) {
                return e = ed(e),
                !i && t ? "[" + e + "]" : e
            }).join(i ? "." : "") : t
        }
        let ep = es.toFlatObject(es, {}, null, function(e) {
            return /^is[A-Z]/.test(e)
        })
          , em = function(e, t, i) {
            if (!es.isObject(e))
                throw TypeError("target must be an object");
            t = t || new FormData;
            let r = (i = es.toFlatObject(i, {
                metaTokens: !0,
                dots: !1,
                indexes: !1
            }, !1, function(e, t) {
                return !es.isUndefined(t[e])
            })).metaTokens
              , n = i.visitor || h
              , o = i.dots
              , s = i.indexes
              , a = (i.Blob || "undefined" != typeof Blob && Blob) && es.isSpecCompliantForm(t);
            if (!es.isFunction(n))
                throw TypeError("visitor must be a function");
            function l(e) {
                if (null === e)
                    return "";
                if (es.isDate(e))
                    return e.toISOString();
                if (!a && es.isBlob(e))
                    throw new ea("Blob is not supported. Use a Buffer instead.");
                return es.isArrayBuffer(e) || es.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : ec.from(e) : e
            }
            function h(e, i, n) {
                let a = e;
                if (e && !n && "object" == typeof e)
                    if (es.endsWith(i, "{}"))
                        i = r ? i : i.slice(0, -2),
                        e = JSON.stringify(e);
                    else {
                        var h;
                        if (es.isArray(e) && (h = e,
                        es.isArray(h) && !h.some(eu)) || (es.isFileList(e) || es.endsWith(i, "[]")) && (a = es.toArray(e)))
                            return i = ed(i),
                            a.forEach(function(e, r) {
                                es.isUndefined(e) || null === e || t.append(!0 === s ? ef([i], r, o) : null === s ? i : i + "[]", l(e))
                            }),
                            !1
                    }
                return !!eu(e) || (t.append(ef(n, i, o), l(e)),
                !1)
            }
            let c = []
              , u = Object.assign(ep, {
                defaultVisitor: h,
                convertValue: l,
                isVisitable: eu
            });
            if (!es.isObject(e))
                throw TypeError("data must be an object");
            return !function e(i, r) {
                if (!es.isUndefined(i)) {
                    if (-1 !== c.indexOf(i))
                        throw Error("Circular reference detected in " + r.join("."));
                    c.push(i),
                    es.forEach(i, function(i, o) {
                        !0 === (!(es.isUndefined(i) || null === i) && n.call(t, i, es.isString(o) ? o.trim() : o, r, u)) && e(i, r ? r.concat(o) : [o])
                    }),
                    c.pop()
                }
            }(e),
            t
        };
        function eg(e) {
            let t = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            };
            return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
                return t[e]
            })
        }
        function ey(e, t) {
            this._pairs = [],
            e && em(e, this, t)
        }
        let eb = ey.prototype;
        function ev(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        function ew(e, t, i) {
            let r;
            if (!t)
                return e;
            let n = i && i.encode || ev;
            es.isFunction(i) && (i = {
                serialize: i
            });
            let o = i && i.serialize;
            if (r = o ? o(t, i) : es.isURLSearchParams(t) ? t.toString() : new ey(t,i).toString(n)) {
                let t = e.indexOf("#");
                -1 !== t && (e = e.slice(0, t)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + r
            }
            return e
        }
        eb.append = function(e, t) {
            this._pairs.push([e, t])
        }
        ,
        eb.toString = function(e) {
            let t = e ? function(t) {
                return e.call(this, t, eg)
            }
            : eg;
            return this._pairs.map(function(e) {
                return t(e[0]) + "=" + t(e[1])
            }, "").join("&")
        }
        ;
        class ex {
            constructor() {
                this.handlers = []
            }
            use(e, t, i) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!i && i.synchronous,
                    runWhen: i ? i.runWhen : null
                }),
                this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                es.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }
        }
        let e_ = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        }
          , eS = "undefined" != typeof URLSearchParams ? URLSearchParams : ey
          , eL = "undefined" != typeof FormData ? FormData : null
          , eR = "undefined" != typeof Blob ? Blob : null
          , eE = "undefined" != typeof window && "undefined" != typeof document
          , eC = "object" == typeof navigator && navigator || void 0
          , eT = eE && (!eC || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(eC.product))
          , eA = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts
          , eO = eE && window.location.href || "http://localhost"
          , ej = {
            ...a,
            isBrowser: !0,
            classes: {
                URLSearchParams: eS,
                FormData: eL,
                Blob: eR
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        }
          , eP = function(e) {
            if (es.isFormData(e) && es.isFunction(e.entries)) {
                let t = {};
                return es.forEachEntry(e, (e, i) => {
                    !function e(t, i, r, n) {
                        let o = t[n++];
                        if ("__proto__" === o)
                            return !0;
                        let s = Number.isFinite(+o)
                          , a = n >= t.length;
                        return (o = !o && es.isArray(r) ? r.length : o,
                        a) ? es.hasOwnProp(r, o) ? r[o] = [r[o], i] : r[o] = i : (r[o] && es.isObject(r[o]) || (r[o] = []),
                        e(t, i, r[o], n) && es.isArray(r[o]) && (r[o] = function(e) {
                            let t, i, r = {}, n = Object.keys(e), o = n.length;
                            for (t = 0; t < o; t++)
                                r[i = n[t]] = e[i];
                            return r
                        }(r[o]))),
                        !s
                    }(es.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), i, t, 0)
                }
                ),
                t
            }
            return null
        }
          , eM = {
            transitional: e_,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                let i, r = t.getContentType() || "", n = r.indexOf("application/json") > -1, o = es.isObject(e);
                if (o && es.isHTMLForm(e) && (e = new FormData(e)),
                es.isFormData(e))
                    return n ? JSON.stringify(eP(e)) : e;
                if (es.isArrayBuffer(e) || es.isBuffer(e) || es.isStream(e) || es.isFile(e) || es.isBlob(e) || es.isReadableStream(e))
                    return e;
                if (es.isArrayBufferView(e))
                    return e.buffer;
                if (es.isURLSearchParams(e))
                    return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
                    e.toString();
                if (o) {
                    if (r.indexOf("application/x-www-form-urlencoded") > -1) {
                        var s, a;
                        return (s = e,
                        a = this.formSerializer,
                        em(s, new ej.classes.URLSearchParams, Object.assign({
                            visitor: function(e, t, i, r) {
                                return ej.isNode && es.isBuffer(e) ? (this.append(t, e.toString("base64")),
                                !1) : r.defaultVisitor.apply(this, arguments)
                            }
                        }, a))).toString()
                    }
                    if ((i = es.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
                        let t = this.env && this.env.FormData;
                        return em(i ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                if (o || n) {
                    t.setContentType("application/json", !1);
                    var l = e;
                    if (es.isString(l))
                        try {
                            return (0,
                            JSON.parse)(l),
                            es.trim(l)
                        } catch (e) {
                            if ("SyntaxError" !== e.name)
                                throw e
                        }
                    return (0,
                    JSON.stringify)(l)
                }
                return e
            }
            ],
            transformResponse: [function(e) {
                let t = this.transitional || eM.transitional
                  , i = t && t.forcedJSONParsing
                  , r = "json" === this.responseType;
                if (es.isResponse(e) || es.isReadableStream(e))
                    return e;
                if (e && es.isString(e) && (i && !this.responseType || r)) {
                    let i = t && t.silentJSONParsing;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (!i && r) {
                            if ("SyntaxError" === e.name)
                                throw ea.from(e, ea.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e
                        }
                    }
                }
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: ej.classes.FormData,
                Blob: ej.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
        es.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
            eM.headers[e] = {}
        }
        );
        let eI = es.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
          , eW = e => {
            let t, i, r, n = {};
            return e && e.split("\n").forEach(function(e) {
                r = e.indexOf(":"),
                t = e.substring(0, r).trim().toLowerCase(),
                i = e.substring(r + 1).trim(),
                !t || n[t] && eI[t] || ("set-cookie" === t ? n[t] ? n[t].push(i) : n[t] = [i] : n[t] = n[t] ? n[t] + ", " + i : i)
            }),
            n
        }
          , ek = Symbol("internals");
        function eN(e) {
            return e && String(e).trim().toLowerCase()
        }
        function eB(e) {
            return !1 === e || null == e ? e : es.isArray(e) ? e.map(eB) : String(e)
        }
        let eF = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
        function eH(e, t, i, r, n) {
            if (es.isFunction(r))
                return r.call(this, t, i);
            if (n && (t = i),
            es.isString(t)) {
                if (es.isString(r))
                    return -1 !== t.indexOf(r);
                if (es.isRegExp(r))
                    return r.test(t)
            }
        }
        class eU {
            constructor(e) {
                e && this.set(e)
            }
            set(e, t, i) {
                let r = this;
                function n(e, t, i) {
                    let n = eN(t);
                    if (!n)
                        throw Error("header name must be a non-empty string");
                    let o = es.findKey(r, n);
                    o && void 0 !== r[o] && !0 !== i && (void 0 !== i || !1 === r[o]) || (r[o || t] = eB(e))
                }
                let o = (e, t) => es.forEach(e, (e, i) => n(e, i, t));
                if (es.isPlainObject(e) || e instanceof this.constructor)
                    o(e, t);
                else if (es.isString(e) && (e = e.trim()) && !eF(e))
                    o(eW(e), t);
                else if (es.isObject(e) && es.isIterable(e)) {
                    let i = {}, r, n;
                    for (let t of e) {
                        if (!es.isArray(t))
                            throw TypeError("Object iterator must return a key-value pair");
                        i[n = t[0]] = (r = i[n]) ? es.isArray(r) ? [...r, t[1]] : [r, t[1]] : t[1]
                    }
                    o(i, t)
                } else
                    null != e && n(t, e, i);
                return this
            }
            get(e, t) {
                if (e = eN(e)) {
                    let i = es.findKey(this, e);
                    if (i) {
                        let e = this[i];
                        if (!t)
                            return e;
                        if (!0 === t) {
                            let t, i = Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            for (; t = r.exec(e); )
                                i[t[1]] = t[2];
                            return i
                        }
                        if (es.isFunction(t))
                            return t.call(this, e, i);
                        if (es.isRegExp(t))
                            return t.exec(e);
                        throw TypeError("parser must be boolean|regexp|function")
                    }
                }
            }
            has(e, t) {
                if (e = eN(e)) {
                    let i = es.findKey(this, e);
                    return !!(i && void 0 !== this[i] && (!t || eH(this, this[i], i, t)))
                }
                return !1
            }
            delete(e, t) {
                let i = this
                  , r = !1;
                function n(e) {
                    if (e = eN(e)) {
                        let n = es.findKey(i, e);
                        n && (!t || eH(i, i[n], n, t)) && (delete i[n],
                        r = !0)
                    }
                }
                return es.isArray(e) ? e.forEach(n) : n(e),
                r
            }
            clear(e) {
                let t = Object.keys(this)
                  , i = t.length
                  , r = !1;
                for (; i--; ) {
                    let n = t[i];
                    (!e || eH(this, this[n], n, e, !0)) && (delete this[n],
                    r = !0)
                }
                return r
            }
            normalize(e) {
                let t = this
                  , i = {};
                return es.forEach(this, (r, n) => {
                    let o = es.findKey(i, n);
                    if (o) {
                        t[o] = eB(r),
                        delete t[n];
                        return
                    }
                    let s = e ? n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, i) => t.toUpperCase() + i) : String(n).trim();
                    s !== n && delete t[n],
                    t[s] = eB(r),
                    i[s] = !0
                }
                ),
                this
            }
            concat(...e) {
                return this.constructor.concat(this, ...e)
            }
            toJSON(e) {
                let t = Object.create(null);
                return es.forEach(this, (i, r) => {
                    null != i && !1 !== i && (t[r] = e && es.isArray(i) ? i.join(", ") : i)
                }
                ),
                t
            }
            [Symbol.iterator]() {
                return Object.entries(this.toJSON())[Symbol.iterator]()
            }
            toString() {
                return Object.entries(this.toJSON()).map( ([e,t]) => e + ": " + t).join("\n")
            }
            getSetCookie() {
                return this.get("set-cookie") || []
            }
            get[Symbol.toStringTag]() {
                return "AxiosHeaders"
            }
            static from(e) {
                return e instanceof this ? e : new this(e)
            }
            static concat(e, ...t) {
                let i = new this(e);
                return t.forEach(e => i.set(e)),
                i
            }
            static accessor(e) {
                let t = (this[ek] = this[ek] = {
                    accessors: {}
                }).accessors
                  , i = this.prototype;
                function r(e) {
                    let r = eN(e);
                    if (!t[r]) {
                        let n = es.toCamelCase(" " + e);
                        ["get", "set", "has"].forEach(t => {
                            Object.defineProperty(i, t + n, {
                                value: function(i, r, n) {
                                    return this[t].call(this, e, i, r, n)
                                },
                                configurable: !0
                            })
                        }
                        ),
                        t[r] = !0
                    }
                }
                return es.isArray(e) ? e.forEach(r) : r(e),
                this
            }
        }
        function eD(e, t) {
            let i = this || eM
              , r = t || i
              , n = eU.from(r.headers)
              , o = r.data;
            return es.forEach(e, function(e) {
                o = e.call(i, o, n.normalize(), t ? t.status : void 0)
            }),
            n.normalize(),
            o
        }
        function ez(e) {
            return !!(e && e.__CANCEL__)
        }
        function e$(e, t, i) {
            ea.call(this, null == e ? "canceled" : e, ea.ERR_CANCELED, t, i),
            this.name = "CanceledError"
        }
        function eV(e, t, i) {
            let r = i.config.validateStatus;
            !i.status || !r || r(i.status) ? e(i) : t(new ea("Request failed with status code " + i.status,[ea.ERR_BAD_REQUEST, ea.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],i.config,i.request,i))
        }
        eU.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
        es.reduceDescriptors(eU.prototype, ({value: e}, t) => {
            let i = t[0].toUpperCase() + t.slice(1);
            return {
                get: () => e,
                set(e) {
                    this[i] = e
                }
            }
        }
        ),
        es.freezeMethods(eU),
        es.inherits(e$, ea, {
            __CANCEL__: !0
        });
        let eq = function(e, t) {
            let i, r = Array(e = e || 10), n = Array(e), o = 0, s = 0;
            return t = void 0 !== t ? t : 1e3,
            function(a) {
                let l = Date.now()
                  , h = n[s];
                i || (i = l),
                r[o] = a,
                n[o] = l;
                let c = s
                  , u = 0;
                for (; c !== o; )
                    u += r[c++],
                    c %= e;
                if ((o = (o + 1) % e) === s && (s = (s + 1) % e),
                l - i < t)
                    return;
                let d = h && l - h;
                return d ? Math.round(1e3 * u / d) : void 0
            }
        }
          , eJ = function(e, t) {
            let i, r, n = 0, o = 1e3 / t, s = (t, o=Date.now()) => {
                n = o,
                i = null,
                r && (clearTimeout(r),
                r = null),
                e.apply(null, t)
            }
            ;
            return [ (...e) => {
                let t = Date.now()
                  , a = t - n;
                a >= o ? s(e, t) : (i = e,
                r || (r = setTimeout( () => {
                    r = null,
                    s(i)
                }
                , o - a)))
            }
            , () => i && s(i)]
        }
          , eX = (e, t, i=3) => {
            let r = 0
              , n = eq(50, 250);
            return eJ(i => {
                let o = i.loaded
                  , s = i.lengthComputable ? i.total : void 0
                  , a = o - r
                  , l = n(a);
                r = o,
                e({
                    loaded: o,
                    total: s,
                    progress: s ? o / s : void 0,
                    bytes: a,
                    rate: l || void 0,
                    estimated: l && s && o <= s ? (s - o) / l : void 0,
                    event: i,
                    lengthComputable: null != s,
                    [t ? "download" : "upload"]: !0
                })
            }
            , i)
        }
          , eK = (e, t) => {
            let i = null != e;
            return [r => t[0]({
                lengthComputable: i,
                total: e,
                loaded: r
            }), t[1]]
        }
          , eG = e => (...t) => es.asap( () => e(...t))
          , eZ = ej.hasStandardBrowserEnv ? ( (e, t) => i => (i = new URL(i,ej.origin),
        e.protocol === i.protocol && e.host === i.host && (t || e.port === i.port)))(new URL(ej.origin), ej.navigator && /(msie|trident)/i.test(ej.navigator.userAgent)) : () => !0
          , eY = ej.hasStandardBrowserEnv ? {
            write(e, t, i, r, n, o) {
                let s = [e + "=" + encodeURIComponent(t)];
                es.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()),
                es.isString(r) && s.push("path=" + r),
                es.isString(n) && s.push("domain=" + n),
                !0 === o && s.push("secure"),
                document.cookie = s.join("; ")
            },
            read(e) {
                let t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        };
        function eQ(e, t, i) {
            let r = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
            return e && (r || !1 == i) ? t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e : t
        }
        let e0 = e => e instanceof eU ? {
            ...e
        } : e;
        function e1(e, t) {
            t = t || {};
            let i = {};
            function r(e, t, i, r) {
                return es.isPlainObject(e) && es.isPlainObject(t) ? es.merge.call({
                    caseless: r
                }, e, t) : es.isPlainObject(t) ? es.merge({}, t) : es.isArray(t) ? t.slice() : t
            }
            function n(e, t, i, n) {
                return es.isUndefined(t) ? es.isUndefined(e) ? void 0 : r(void 0, e, i, n) : r(e, t, i, n)
            }
            function o(e, t) {
                if (!es.isUndefined(t))
                    return r(void 0, t)
            }
            function s(e, t) {
                return es.isUndefined(t) ? es.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
            }
            function a(i, n, o) {
                return o in t ? r(i, n) : o in e ? r(void 0, i) : void 0
            }
            let l = {
                url: o,
                method: o,
                data: o,
                baseURL: s,
                transformRequest: s,
                transformResponse: s,
                paramsSerializer: s,
                timeout: s,
                timeoutMessage: s,
                withCredentials: s,
                withXSRFToken: s,
                adapter: s,
                responseType: s,
                xsrfCookieName: s,
                xsrfHeaderName: s,
                onUploadProgress: s,
                onDownloadProgress: s,
                decompress: s,
                maxContentLength: s,
                maxBodyLength: s,
                beforeRedirect: s,
                transport: s,
                httpAgent: s,
                httpsAgent: s,
                cancelToken: s,
                socketPath: s,
                responseEncoding: s,
                validateStatus: a,
                headers: (e, t, i) => n(e0(e), e0(t), i, !0)
            };
            return es.forEach(Object.keys(Object.assign({}, e, t)), function(r) {
                let o = l[r] || n
                  , s = o(e[r], t[r], r);
                es.isUndefined(s) && o !== a || (i[r] = s)
            }),
            i
        }
        let e2 = e => {
            let t, i = e1({}, e), {data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: l} = i;
            if (i.headers = a = eU.from(a),
            i.url = ew(eQ(i.baseURL, i.url, i.allowAbsoluteUrls), e.params, e.paramsSerializer),
            l && a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))),
            es.isFormData(r)) {
                if (ej.hasStandardBrowserEnv || ej.hasStandardBrowserWebWorkerEnv)
                    a.setContentType(void 0);
                else if (!1 !== (t = a.getContentType())) {
                    let[e,...i] = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [];
                    a.setContentType([e || "multipart/form-data", ...i].join("; "))
                }
            }
            if (ej.hasStandardBrowserEnv && (n && es.isFunction(n) && (n = n(i)),
            n || !1 !== n && eZ(i.url))) {
                let e = o && s && eY.read(s);
                e && a.set(o, e)
            }
            return i
        }
          , e5 = "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, i) {
                let r, n, o, s, a, l = e2(e), h = l.data, c = eU.from(l.headers).normalize(), {responseType: u, onUploadProgress: d, onDownloadProgress: f} = l;
                function p() {
                    s && s(),
                    a && a(),
                    l.cancelToken && l.cancelToken.unsubscribe(r),
                    l.signal && l.signal.removeEventListener("abort", r)
                }
                let m = new XMLHttpRequest;
                function g() {
                    if (!m)
                        return;
                    let r = eU.from("getAllResponseHeaders"in m && m.getAllResponseHeaders());
                    eV(function(e) {
                        t(e),
                        p()
                    }, function(e) {
                        i(e),
                        p()
                    }, {
                        data: u && "text" !== u && "json" !== u ? m.response : m.responseText,
                        status: m.status,
                        statusText: m.statusText,
                        headers: r,
                        config: e,
                        request: m
                    }),
                    m = null
                }
                m.open(l.method.toUpperCase(), l.url, !0),
                m.timeout = l.timeout,
                "onloadend"in m ? m.onloadend = g : m.onreadystatechange = function() {
                    m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(g)
                }
                ,
                m.onabort = function() {
                    m && (i(new ea("Request aborted",ea.ECONNABORTED,e,m)),
                    m = null)
                }
                ,
                m.onerror = function() {
                    i(new ea("Network Error",ea.ERR_NETWORK,e,m)),
                    m = null
                }
                ,
                m.ontimeout = function() {
                    let t = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded"
                      , r = l.transitional || e_;
                    l.timeoutErrorMessage && (t = l.timeoutErrorMessage),
                    i(new ea(t,r.clarifyTimeoutError ? ea.ETIMEDOUT : ea.ECONNABORTED,e,m)),
                    m = null
                }
                ,
                void 0 === h && c.setContentType(null),
                "setRequestHeader"in m && es.forEach(c.toJSON(), function(e, t) {
                    m.setRequestHeader(t, e)
                }),
                es.isUndefined(l.withCredentials) || (m.withCredentials = !!l.withCredentials),
                u && "json" !== u && (m.responseType = l.responseType),
                f && ([o,a] = eX(f, !0),
                m.addEventListener("progress", o)),
                d && m.upload && ([n,s] = eX(d),
                m.upload.addEventListener("progress", n),
                m.upload.addEventListener("loadend", s)),
                (l.cancelToken || l.signal) && (r = t => {
                    m && (i(!t || t.type ? new e$(null,e,m) : t),
                    m.abort(),
                    m = null)
                }
                ,
                l.cancelToken && l.cancelToken.subscribe(r),
                l.signal && (l.signal.aborted ? r() : l.signal.addEventListener("abort", r)));
                let y = function(e) {
                    let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(l.url);
                if (y && -1 === ej.protocols.indexOf(y))
                    return void i(new ea("Unsupported protocol " + y + ":",ea.ERR_BAD_REQUEST,e));
                m.send(h || null)
            }
            )
        }
          , e6 = (e, t) => {
            let {length: i} = e = e ? e.filter(Boolean) : [];
            if (t || i) {
                let i, r = new AbortController, n = function(e) {
                    if (!i) {
                        i = !0,
                        s();
                        let t = e instanceof Error ? e : this.reason;
                        r.abort(t instanceof ea ? t : new e$(t instanceof Error ? t.message : t))
                    }
                }, o = t && setTimeout( () => {
                    o = null,
                    n(new ea(`timeout ${t} of ms exceeded`,ea.ETIMEDOUT))
                }
                , t), s = () => {
                    e && (o && clearTimeout(o),
                    o = null,
                    e.forEach(e => {
                        e.unsubscribe ? e.unsubscribe(n) : e.removeEventListener("abort", n)
                    }
                    ),
                    e = null)
                }
                ;
                e.forEach(e => e.addEventListener("abort", n));
                let {signal: a} = r;
                return a.unsubscribe = () => es.asap(s),
                a
            }
        }
          , e3 = function*(e, t) {
            let i, r = e.byteLength;
            if (!t || r < t)
                return void (yield e);
            let n = 0;
            for (; n < r; )
                i = n + t,
                yield e.slice(n, i),
                n = i
        }
          , e8 = async function*(e, t) {
            for await(let i of e4(e))
                yield*e3(i, t)
        }
          , e4 = async function*(e) {
            if (e[Symbol.asyncIterator])
                return void (yield*e);
            let t = e.getReader();
            try {
                for (; ; ) {
                    let {done: e, value: i} = await t.read();
                    if (e)
                        break;
                    yield i
                }
            } finally {
                await t.cancel()
            }
        }
          , e9 = (e, t, i, r) => {
            let n, o = e8(e, t), s = 0, a = e => {
                !n && (n = !0,
                r && r(e))
            }
            ;
            return new ReadableStream({
                async pull(e) {
                    try {
                        let {done: t, value: r} = await o.next();
                        if (t) {
                            a(),
                            e.close();
                            return
                        }
                        let n = r.byteLength;
                        if (i) {
                            let e = s += n;
                            i(e)
                        }
                        e.enqueue(new Uint8Array(r))
                    } catch (e) {
                        throw a(e),
                        e
                    }
                },
                cancel: e => (a(e),
                o.return())
            },{
                highWaterMark: 2
            })
        }
          , e7 = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response
          , te = e7 && "function" == typeof ReadableStream
          , tt = e7 && ("function" == typeof TextEncoder ? (r = new TextEncoder,
        e => r.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
          , ti = (e, ...t) => {
            try {
                return !!e(...t)
            } catch (e) {
                return !1
            }
        }
          , tr = te && ti( () => {
            let e = !1
              , t = new Request(ej.origin,{
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return e = !0,
                    "half"
                }
            }).headers.has("Content-Type");
            return e && !t
        }
        )
          , tn = te && ti( () => es.isReadableStream(new Response("").body))
          , to = {
            stream: tn && (e => e.body)
        };
        e7 && (s = new Response,
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
            to[e] || (to[e] = es.isFunction(s[e]) ? t => t[e]() : (t, i) => {
                throw new ea(`Response type '${e}' is not supported`,ea.ERR_NOT_SUPPORT,i)
            }
            )
        }
        ));
        let ts = async e => {
            if (null == e)
                return 0;
            if (es.isBlob(e))
                return e.size;
            if (es.isSpecCompliantForm(e)) {
                let t = new Request(ej.origin,{
                    method: "POST",
                    body: e
                });
                return (await t.arrayBuffer()).byteLength
            }
            return es.isArrayBufferView(e) || es.isArrayBuffer(e) ? e.byteLength : (es.isURLSearchParams(e) && (e += ""),
            es.isString(e)) ? (await tt(e)).byteLength : void 0
        }
          , ta = async (e, t) => {
            let i = es.toFiniteNumber(e.getContentLength());
            return null == i ? ts(t) : i
        }
          , tl = {
            http: null,
            xhr: e5,
            fetch: e7 && (async e => {
                let t, i, {url: r, method: n, data: o, signal: s, cancelToken: a, timeout: l, onDownloadProgress: h, onUploadProgress: c, responseType: u, headers: d, withCredentials: f="same-origin", fetchOptions: p} = e2(e);
                u = u ? (u + "").toLowerCase() : "text";
                let m = e6([s, a && a.toAbortSignal()], l)
                  , g = m && m.unsubscribe && ( () => {
                    m.unsubscribe()
                }
                );
                try {
                    if (c && tr && "get" !== n && "head" !== n && 0 !== (i = await ta(d, o))) {
                        let e, t = new Request(r,{
                            method: "POST",
                            body: o,
                            duplex: "half"
                        });
                        if (es.isFormData(o) && (e = t.headers.get("content-type")) && d.setContentType(e),
                        t.body) {
                            let[e,r] = eK(i, eX(eG(c)));
                            o = e9(t.body, 65536, e, r)
                        }
                    }
                    es.isString(f) || (f = f ? "include" : "omit");
                    let s = "credentials"in Request.prototype;
                    t = new Request(r,{
                        ...p,
                        signal: m,
                        method: n.toUpperCase(),
                        headers: d.normalize().toJSON(),
                        body: o,
                        duplex: "half",
                        credentials: s ? f : void 0
                    });
                    let a = await fetch(t)
                      , l = tn && ("stream" === u || "response" === u);
                    if (tn && (h || l && g)) {
                        let e = {};
                        ["status", "statusText", "headers"].forEach(t => {
                            e[t] = a[t]
                        }
                        );
                        let t = es.toFiniteNumber(a.headers.get("content-length"))
                          , [i,r] = h && eK(t, eX(eG(h), !0)) || [];
                        a = new Response(e9(a.body, 65536, i, () => {
                            r && r(),
                            g && g()
                        }
                        ),e)
                    }
                    u = u || "text";
                    let y = await to[es.findKey(to, u) || "text"](a, e);
                    return !l && g && g(),
                    await new Promise( (i, r) => {
                        eV(i, r, {
                            data: y,
                            headers: eU.from(a.headers),
                            status: a.status,
                            statusText: a.statusText,
                            config: e,
                            request: t
                        })
                    }
                    )
                } catch (i) {
                    if (g && g(),
                    i && "TypeError" === i.name && /Load failed|fetch/i.test(i.message))
                        throw Object.assign(new ea("Network Error",ea.ERR_NETWORK,e,t), {
                            cause: i.cause || i
                        });
                    throw ea.from(i, i && i.code, e, t)
                }
            }
            )
        };
        es.forEach(tl, (e, t) => {
            if (e) {
                try {
                    Object.defineProperty(e, "name", {
                        value: t
                    })
                } catch (e) {}
                Object.defineProperty(e, "adapterName", {
                    value: t
                })
            }
        }
        );
        let th = e => `- ${e}`
          , tc = e => es.isFunction(e) || null === e || !1 === e
          , tu = {
            getAdapter: e => {
                let t, i, {length: r} = e = es.isArray(e) ? e : [e], n = {};
                for (let o = 0; o < r; o++) {
                    let r;
                    if (i = t = e[o],
                    !tc(t) && void 0 === (i = tl[(r = String(t)).toLowerCase()]))
                        throw new ea(`Unknown adapter '${r}'`);
                    if (i)
                        break;
                    n[r || "#" + o] = i
                }
                if (!i) {
                    let e = Object.entries(n).map( ([e,t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
                    throw new ea("There is no suitable adapter to dispatch the request " + (r ? e.length > 1 ? "since :\n" + e.map(th).join("\n") : " " + th(e[0]) : "as no adapter specified"),"ERR_NOT_SUPPORT")
                }
                return i
            }
        };
        function td(e) {
            if (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
                throw new e$(null,e)
        }
        function tf(e) {
            return td(e),
            e.headers = eU.from(e.headers),
            e.data = eD.call(e, e.transformRequest),
            -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1),
            tu.getAdapter(e.adapter || eM.adapter)(e).then(function(t) {
                return td(e),
                t.data = eD.call(e, e.transformResponse, t),
                t.headers = eU.from(t.headers),
                t
            }, function(t) {
                return !ez(t) && (td(e),
                t && t.response && (t.response.data = eD.call(e, e.transformResponse, t.response),
                t.response.headers = eU.from(t.response.headers))),
                Promise.reject(t)
            })
        }
        let tp = "1.9.0"
          , tm = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
            tm[e] = function(i) {
                return typeof i === e || "a" + (t < 1 ? "n " : " ") + e
            }
        }
        );
        let tg = {};
        tm.transitional = function(e, t, i) {
            function r(e, t) {
                return "[Axios v" + tp + "] Transitional option '" + e + "'" + t + (i ? ". " + i : "")
            }
            return (i, n, o) => {
                if (!1 === e)
                    throw new ea(r(n, " has been removed" + (t ? " in " + t : "")),ea.ERR_DEPRECATED);
                return t && !tg[n] && (tg[n] = !0,
                console.warn(r(n, " has been deprecated since v" + t + " and will be removed in the near future"))),
                !e || e(i, n, o)
            }
        }
        ,
        tm.spelling = function(e) {
            return (t, i) => (console.warn(`${i} is likely a misspelling of ${e}`),
            !0)
        }
        ;
        let ty = {
            assertOptions: function(e, t, i) {
                if ("object" != typeof e)
                    throw new ea("options must be an object",ea.ERR_BAD_OPTION_VALUE);
                let r = Object.keys(e)
                  , n = r.length;
                for (; n-- > 0; ) {
                    let o = r[n]
                      , s = t[o];
                    if (s) {
                        let t = e[o]
                          , i = void 0 === t || s(t, o, e);
                        if (!0 !== i)
                            throw new ea("option " + o + " must be " + i,ea.ERR_BAD_OPTION_VALUE);
                        continue
                    }
                    if (!0 !== i)
                        throw new ea("Unknown option " + o,ea.ERR_BAD_OPTION)
                }
            },
            validators: tm
        }
          , tb = ty.validators;
        class tv {
            constructor(e) {
                this.defaults = e || {},
                this.interceptors = {
                    request: new ex,
                    response: new ex
                }
            }
            async request(e, t) {
                try {
                    return await this._request(e, t)
                } catch (e) {
                    if (e instanceof Error) {
                        let t = {};
                        Error.captureStackTrace ? Error.captureStackTrace(t) : t = Error();
                        let i = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                        try {
                            e.stack ? i && !String(e.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + i) : e.stack = i
                        } catch (e) {}
                    }
                    throw e
                }
            }
            _request(e, t) {
                let i, r;
                "string" == typeof e ? (t = t || {}).url = e : t = e || {};
                let {transitional: n, paramsSerializer: o, headers: s} = t = e1(this.defaults, t);
                void 0 !== n && ty.assertOptions(n, {
                    silentJSONParsing: tb.transitional(tb.boolean),
                    forcedJSONParsing: tb.transitional(tb.boolean),
                    clarifyTimeoutError: tb.transitional(tb.boolean)
                }, !1),
                null != o && (es.isFunction(o) ? t.paramsSerializer = {
                    serialize: o
                } : ty.assertOptions(o, {
                    encode: tb.function,
                    serialize: tb.function
                }, !0)),
                void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0),
                ty.assertOptions(t, {
                    baseUrl: tb.spelling("baseURL"),
                    withXsrfToken: tb.spelling("withXSRFToken")
                }, !0),
                t.method = (t.method || this.defaults.method || "get").toLowerCase();
                let a = s && es.merge(s.common, s[t.method]);
                s && es.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                    delete s[e]
                }
                ),
                t.headers = eU.concat(a, s);
                let l = []
                  , h = !0;
                this.interceptors.request.forEach(function(e) {
                    ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (h = h && e.synchronous,
                    l.unshift(e.fulfilled, e.rejected))
                });
                let c = [];
                this.interceptors.response.forEach(function(e) {
                    c.push(e.fulfilled, e.rejected)
                });
                let u = 0;
                if (!h) {
                    let e = [tf.bind(this), void 0];
                    for (e.unshift.apply(e, l),
                    e.push.apply(e, c),
                    r = e.length,
                    i = Promise.resolve(t); u < r; )
                        i = i.then(e[u++], e[u++]);
                    return i
                }
                r = l.length;
                let d = t;
                for (u = 0; u < r; ) {
                    let e = l[u++]
                      , t = l[u++];
                    try {
                        d = e(d)
                    } catch (e) {
                        t.call(this, e);
                        break
                    }
                }
                try {
                    i = tf.call(this, d)
                } catch (e) {
                    return Promise.reject(e)
                }
                for (u = 0,
                r = c.length; u < r; )
                    i = i.then(c[u++], c[u++]);
                return i
            }
            getUri(e) {
                return ew(eQ((e = e1(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
            }
        }
        es.forEach(["delete", "get", "head", "options"], function(e) {
            tv.prototype[e] = function(t, i) {
                return this.request(e1(i || {}, {
                    method: e,
                    url: t,
                    data: (i || {}).data
                }))
            }
        }),
        es.forEach(["post", "put", "patch"], function(e) {
            function t(t) {
                return function(i, r, n) {
                    return this.request(e1(n || {}, {
                        method: e,
                        headers: t ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url: i,
                        data: r
                    }))
                }
            }
            tv.prototype[e] = t(),
            tv.prototype[e + "Form"] = t(!0)
        });
        class tw {
            constructor(e) {
                let t;
                if ("function" != typeof e)
                    throw TypeError("executor must be a function.");
                this.promise = new Promise(function(e) {
                    t = e
                }
                );
                let i = this;
                this.promise.then(e => {
                    if (!i._listeners)
                        return;
                    let t = i._listeners.length;
                    for (; t-- > 0; )
                        i._listeners[t](e);
                    i._listeners = null
                }
                ),
                this.promise.then = e => {
                    let t, r = new Promise(e => {
                        i.subscribe(e),
                        t = e
                    }
                    ).then(e);
                    return r.cancel = function() {
                        i.unsubscribe(t)
                    }
                    ,
                    r
                }
                ,
                e(function(e, r, n) {
                    i.reason || (i.reason = new e$(e,r,n),
                    t(i.reason))
                })
            }
            throwIfRequested() {
                if (this.reason)
                    throw this.reason
            }
            subscribe(e) {
                if (this.reason)
                    return void e(this.reason);
                this._listeners ? this._listeners.push(e) : this._listeners = [e]
            }
            unsubscribe(e) {
                if (!this._listeners)
                    return;
                let t = this._listeners.indexOf(e);
                -1 !== t && this._listeners.splice(t, 1)
            }
            toAbortSignal() {
                let e = new AbortController
                  , t = t => {
                    e.abort(t)
                }
                ;
                return this.subscribe(t),
                e.signal.unsubscribe = () => this.unsubscribe(t),
                e.signal
            }
            static source() {
                let e;
                return {
                    token: new tw(function(t) {
                        e = t
                    }
                    ),
                    cancel: e
                }
            }
        }
        let tx = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
        };
        Object.entries(tx).forEach( ([e,t]) => {
            tx[t] = e
        }
        );
        let t_ = function e(t) {
            let i = new tv(t)
              , r = _(tv.prototype.request, i);
            return es.extend(r, tv.prototype, i, {
                allOwnKeys: !0
            }),
            es.extend(r, i, null, {
                allOwnKeys: !0
            }),
            r.create = function(i) {
                return e(e1(t, i))
            }
            ,
            r
        }(eM);
        t_.Axios = tv,
        t_.CanceledError = e$,
        t_.CancelToken = tw,
        t_.isCancel = ez,
        t_.VERSION = tp,
        t_.toFormData = em,
        t_.AxiosError = ea,
        t_.Cancel = t_.CanceledError,
        t_.all = function(e) {
            return Promise.all(e)
        }
        ,
        t_.spread = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
        ,
        t_.isAxiosError = function(e) {
            return es.isObject(e) && !0 === e.isAxiosError
        }
        ,
        t_.mergeConfig = e1,
        t_.AxiosHeaders = eU,
        t_.formToJSON = e => eP(es.isHTMLForm(e) ? new FormData(e) : e),
        t_.getAdapter = tu.getAdapter,
        t_.HttpStatusCode = tx,
        t_.default = t_;
        class tS extends h.Component {
            componentDidMount() {
                this.loadContent()
            }
            componentDidUpdate() {
                this.context.infoOpen ? document.documentElement.classList.add("state-info-open") : document.documentElement.classList.remove("state-info-open")
            }
            loadContent() {
                const min = 701;
const max = 708;
const randomPage = Math.floor(Math.random() * (max - min + 1)) + min;
const randomUrl = `/${randomPage}.html`;
  const localData = {
    featured: [
      {
        title: "Error 70_?",
        tab_title: "hidden-unknown-games",
        url: randomUrl,
        slides: [
          {
            desktop_cinemagraph: "https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/69cd460d956f9c9b0ee870a655585f9c2840e233.png",
            tablet_cinemagraph: "https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/69cd460d956f9c9b0ee870a655585f9c2840e233.png",
            mobile_cinemagraph: "https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/69cd460d956f9c9b0ee870a655585f9c2840e233.png",
            preview_hover_video: "https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/69cd460d956f9c9b0ee870a655585f9c2840e233.png",
            src: "https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/69cd460d956f9c9b0ee870a655585f9c2840e233.png",
            srcset: [
              "https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/69cd460d956f9c9b0ee870a655585f9c2840e233.png",
              "https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/69cd460d956f9c9b0ee870a655585f9c2840e233.png",
              "https://forum-files-playcanvas-com.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/69cd460d956f9c9b0ee870a655585f9c2840e233.png"
            ],
            img_width: 2560,
            img_height: 1440
          }
        ],
        loop: "once",
        sans_title: [{ text: "Error 70_?" }],
        sans_subtitle: [{ text: "Hidden " }, { text: "Games.js" }]
      }
    ],
    notice: "",
    profile_comment: "start .scope-profile",
profile_heading: "PROFILE",
profile_text: [
  {
    text: "Hi, I’m a Senior Frontend Developer specializing in modern web interfaces built with React. I create fast, scalable, and maintainable UI architectures that not only look great but also deliver exceptional performance and user experience."
  },
  {
    text: "Over the years, I’ve led development of complex frontend systems, collaborated with cross-functional teams, and delivered products used by thousands of users. I have deep experience in component design, state management, accessibility, and integrating with APIs and backend services."
  },
  {
    text: "I’m currently open to new collaborations — especially with teams and projects that value clean code, thoughtful design, and meaningful digital products."
  }
],
    "contact_comment": "start .scope-contact",
"contact_heading": "GET IN TOUCH",
"contact_text": [
  {
    "text": "I’m currently open to freelance projects and long-term collaborations. Whether you're building from scratch or scaling an existing product — I’d be happy to help bring your frontend to life."
  },
  {
    "text": "You can reach out directly via email — I’d love to learn more about what you're working on."
  },
  {
    "href": "mailto:bogdansadriev6@gmail.com",
    "text": "Email me"
  }
],
"profile_display_heading": [
  { "text": "Profile" }
],
"contact_display_heading": [
  { "text": "Contact" }
]
  };

  this.setState({
    data: localData
  });
}
            render() {
                let e = this.context.dimensions;
                return this.state.data ? (0,
                l.jsx)(l.Fragment, {
                    children: (0,
                    l.jsxs)("aside", {
                        className: "c-gui__panel c-gui__panel--info",
                        style: {
                            width: e.infoPanelWidth + "px",
                            height: e.infoPanelHeight + "px"
                        },
                        children: [(0,
                        l.jsxs)("div", {
                            className: "c-gui__panel__section",
                            style: {
                                width: e.profilePanelWidth + "px",
                                height: e.profilePanelHeight + "px"
                            },
                            children: [(0,
                            l.jsx)(m, {
                                content: this.state.data
                            }), (0,
                            l.jsxs)("div", {
                                className: "c-gui__panel__content c-gui__panel__content--scroll",
                                children: [this.context.profileActive && (0,
                                l.jsx)(b, {
                                    notice: this.state.data.notice,
                                    comment: this.state.data.profile_comment,
                                    heading: this.state.data.profile_heading,
                                    text: this.state.data.profile_text,
                                    display_heading: this.state.data.profile_display_heading,
                                    classAttr: "scope-profile"
                                }), this.context.contactActive && (0,
                                l.jsx)(b, {
                                    notice: this.state.data.notice,
                                    comment: this.state.data.contact_comment,
                                    heading: this.state.data.contact_heading,
                                    text: this.state.data.contact_text,
                                    display_heading: this.state.data.contact_display_heading,
                                    classAttr: "scope-contact"
                                })]
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "c-gui__panel__section",
                            style: {
                                width: e.featuredPanelWidth + "px",
                                height: e.featuredPanelHeight + "px"
                            },
                            children: [(0,
                            l.jsx)(v, {
                                content: this.state.data
                            }), (0,
                            l.jsx)("div", {
                                className: "c-gui__panel__content c-gui__panel__content--no-scroll",
                                children: (0,
                                l.jsx)(x, {
                                    content: this.state.data
                                })
                            })]
                        })]
                    })
                }) : null
            }
            constructor(e) {
                super(e),
                this.loadContent = this.loadContent.bind(this),
                this.state = {
                    data: !1
                }
            }
        }
        tS.contextType = u.D;
        var tL = i(5105)
          , tR = i.n(tL);
        function tE(e) {
            let {Component: t, pageProps: i} = e
              , [r,n] = (0,
            h.useState)(!1)
              , o = (0,
            c.useRouter)();
            return (0,
            h.useEffect)( () => {
                document.documentElement.setAttribute("lang", "en-AU")
            }
            , []),
            (0,
            h.useEffect)( () => {
                let e = e => {
                    "function" == typeof window.gtag && window.gtag("config", "G-XGRNX9DLDW", {
                        page_path: e
                    })
                }
                ;
                return o.events.on("routeChangeComplete", e),
                () => {
                    o.events.off("routeChangeComplete", e)
                }
            }
            , [o.events]),
            (0,
            l.jsxs)(l.Fragment, {
                children: [ (0,
                l.jsx)(tR(), {
                    id: "gtag-init",
                    strategy: "afterInteractive",
                    dangerouslySetInnerHTML: {
                        __html: "\n						window.dataLayer = window.dataLayer || [];\n						function gtag(){dataLayer.push(arguments);}\n						gtag('js', new Date());\n						gtag('config', 'G-XGRNX9DLDW', {\n						page_path: window.location.pathname,\n						});\n						"
                    }
                }), (0,
                l.jsxs)(u.w, {
                    children: [(0,
                    l.jsx)(d, {}), (0,
                    l.jsx)("div", {
                        className: "c-cover"
                    }), (0,
                    l.jsxs)("div", {
                        className: "c-gui",
                        children: [(0,
                        l.jsx)(tS, {
                            global: !1
                        }), (0,
                        l.jsx)(t, {
                            ...i
                        })]
                    })]
                })]
            })
        }
    }
    ,
    1026: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useMergedRef", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let r = i(4232);
        function n(e, t) {
            let i = (0,
            r.useRef)(null)
              , n = (0,
            r.useRef)(null);
            return (0,
            r.useCallback)(r => {
                if (null === r) {
                    let e = i.current;
                    e && (i.current = null,
                    e());
                    let t = n.current;
                    t && (n.current = null,
                    t())
                } else
                    e && (i.current = o(e, r)),
                    t && (n.current = o(t, r))
            }
            , [e, t])
        }
        function o(e, t) {
            if ("function" != typeof e)
                return e.current = t,
                () => {
                    e.current = null
                }
                ;
            {
                let i = e(t);
                return "function" == typeof i ? i : () => e(null)
            }
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    1639: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            default: function() {
                return _
            },
            useLinkStatus: function() {
                return x
            }
        });
        let r = i(8365)
          , n = i(7876)
          , o = r._(i(4232))
          , s = i(6658)
          , a = i(1851)
          , l = i(6225)
          , h = i(8407)
          , c = i(2696)
          , u = i(8265)
          , d = i(2343)
          , f = i(8940)
          , p = i(7469)
          , m = i(1026);
        i(3724);
        let g = new Set;
        function y(e, t, i, r) {
            if ((0,
            a.isLocalURL)(t)) {
                if (!r.bypassPrefetchedCheck) {
                    let n = t + "%" + i + "%" + (void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0);
                    if (g.has(n))
                        return;
                    g.add(n)
                }
                e.prefetch(t, i, r).catch(e => {}
                )
            }
        }
        function b(e) {
            return "string" == typeof e ? e : (0,
            l.formatUrl)(e)
        }
        let v = o.default.forwardRef(function(e, t) {
            let i, r, {href: l, as: g, children: v, prefetch: w=null, passHref: x, replace: _, shallow: S, scroll: L, locale: R, onClick: E, onNavigate: C, onMouseEnter: T, onTouchStart: A, legacyBehavior: O=!1, ...j} = e;
            i = v,
            O && ("string" == typeof i || "number" == typeof i) && (i = (0,
            n.jsx)("a", {
                children: i
            }));
            let P = o.default.useContext(u.RouterContext)
              , M = !1 !== w
              , {href: I, as: W} = o.default.useMemo( () => {
                if (!P) {
                    let e = b(l);
                    return {
                        href: e,
                        as: g ? b(g) : e
                    }
                }
                let[e,t] = (0,
                s.resolveHref)(P, l, !0);
                return {
                    href: e,
                    as: g ? (0,
                    s.resolveHref)(P, g) : t || e
                }
            }
            , [P, l, g])
              , k = o.default.useRef(I)
              , N = o.default.useRef(W);
            O && (r = o.default.Children.only(i));
            let B = O ? r && "object" == typeof r && r.ref : t
              , [F,H,U] = (0,
            d.useIntersection)({
                rootMargin: "200px"
            })
              , D = o.default.useCallback(e => {
                (N.current !== W || k.current !== I) && (U(),
                N.current = W,
                k.current = I),
                F(e)
            }
            , [W, I, U, F])
              , z = (0,
            m.useMergedRef)(D, B);
            o.default.useEffect( () => {
                P && H && M && y(P, I, W, {
                    locale: R
                })
            }
            , [W, I, H, R, M, null == P ? void 0 : P.locale, P]);
            let $ = {
                ref: z,
                onClick(e) {
                    O || "function" != typeof E || E(e),
                    O && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    P && (e.defaultPrevented || function(e, t, i, r, n, o, s, l, h) {
                        let {nodeName: c} = e.currentTarget;
                        if (!("A" === c.toUpperCase() && function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || e.currentTarget.hasAttribute("download"))) {
                            if (!(0,
                            a.isLocalURL)(i)) {
                                n && (e.preventDefault(),
                                location.replace(i));
                                return
                            }
                            e.preventDefault(),
                            ( () => {
                                if (h) {
                                    let e = !1;
                                    if (h({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }),
                                    e)
                                        return
                                }
                                let e = null == s || s;
                                "beforePopState"in t ? t[n ? "replace" : "push"](i, r, {
                                    shallow: o,
                                    locale: l,
                                    scroll: e
                                }) : t[n ? "replace" : "push"](r || i, {
                                    scroll: e
                                })
                            }
                            )()
                        }
                    }(e, P, I, W, _, S, L, R, C))
                },
                onMouseEnter(e) {
                    O || "function" != typeof T || T(e),
                    O && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    P && y(P, I, W, {
                        locale: R,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                },
                onTouchStart: function(e) {
                    O || "function" != typeof A || A(e),
                    O && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    P && y(P, I, W, {
                        locale: R,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                }
            };
            if ((0,
            h.isAbsoluteUrl)(W))
                $.href = W;
            else if (!O || x || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== R ? R : null == P ? void 0 : P.locale;
                $.href = (null == P ? void 0 : P.isLocaleDomain) && (0,
                f.getDomainLocale)(W, e, null == P ? void 0 : P.locales, null == P ? void 0 : P.domainLocales) || (0,
                p.addBasePath)((0,
                c.addLocale)(W, e, null == P ? void 0 : P.defaultLocale))
            }
            return O ? o.default.cloneElement(r, $) : (0,
            n.jsx)("a", {
                ...j,
                ...$,
                children: i
            })
        })
          , w = (0,
        o.createContext)({
            pending: !1
        })
          , x = () => (0,
        o.useContext)(w)
          , _ = v;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    2343: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let r = i(4232)
          , n = i(4754)
          , o = "function" == typeof IntersectionObserver
          , s = new Map
          , a = [];
        function l(e) {
            let {rootRef: t, rootMargin: i, disabled: l} = e
              , h = l || !o
              , [c,u] = (0,
            r.useState)(!1)
              , d = (0,
            r.useRef)(null)
              , f = (0,
            r.useCallback)(e => {
                d.current = e
            }
            , []);
            return (0,
            r.useEffect)( () => {
                if (o) {
                    if (h || c)
                        return;
                    let e = d.current;
                    if (e && e.tagName)
                        return function(e, t, i) {
                            let {id: r, observer: n, elements: o} = function(e) {
                                let t, i = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }, r = a.find(e => e.root === i.root && e.margin === i.margin);
                                if (r && (t = s.get(r)))
                                    return t;
                                let n = new Map;
                                return t = {
                                    id: i,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = n.get(e.target)
                                              , i = e.isIntersecting || e.intersectionRatio > 0;
                                            t && i && t(i)
                                        }
                                        )
                                    }
                                    ,e),
                                    elements: n
                                },
                                a.push(i),
                                s.set(i, t),
                                t
                            }(i);
                            return o.set(e, t),
                            n.observe(e),
                            function() {
                                if (o.delete(e),
                                n.unobserve(e),
                                0 === o.size) {
                                    n.disconnect(),
                                    s.delete(r);
                                    let e = a.findIndex(e => e.root === r.root && e.margin === r.margin);
                                    e > -1 && a.splice(e, 1)
                                }
                            }
                        }(e, e => e && u(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: i
                        })
                } else if (!c) {
                    let e = (0,
                    n.requestIdleCallback)( () => u(!0));
                    return () => (0,
                    n.cancelIdleCallback)(e)
                }
            }
            , [h, i, t, c, d.current]),
            [f, c, (0,
            r.useCallback)( () => {
                u(!1)
            }
            , [])]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    3718: (e, t, i) => {
        "use strict";
        i.d(t, {
            D: () => o,
            w: () => s
        });
        var r = i(7876)
          , n = i(4232);
        let o = n.createContext({
            dimensions: {
                screenHeight: 0,
                screenWidth: 0,
                screenMobile: !1,
                screenTablet: !1,
                portrait: !1,
                uiHeaderHeight: 0,
                mainWindowWidth: 0,
                mainWindowHeight: 0,
                infoPanelWidth: 0,
                infoPanelHeight: 0,
                fontW2H: .5625,
                contentWidth: 0,
                contentHeight: 0,
                contentMobile: !1,
                contentTablet: !1,
                profilePanelWidth: 0,
                profilePanelHeight: 0,
                featuredPanelWidth: 0,
                featuredPanelHeight: 0,
                featuredWorkChromeHeight: 0,
                featuredWorkImageHeight: 0,
                featuredWorkImageWidth: 0,
                monoFontSize: 0,
                monoLineHeight: 0,
                contentColWidth: 0,
                colWidth: 0,
                numCols: 0,
                charsPerFrame: 0,
                charsPerCol: 0,
                charsPerLine: 0,
                asciiLayoutWidth: 0,
                asciiColWidth: 0,
                remainingChars: 0,
                remainingCharsWidth: 0,
                totalAsciiLayoutWidth: 0,
                charWidth: 0,
                sansOffset: 0,
                mediumFontSize: 0,
                mediumLineHeight: 0,
                mediumFontSpace: 0,
                mediumLineStyle: {},
                mediumLineSpaceStyle: {},
                largeFontSize: 0,
                largeLineHeight: 0,
                largeSpace: 0,
                largeLineStyle: {},
                xlargeFontSize: 0,
                xlargeLineHeight: 0,
                xlargeSpace: 0,
                xlargeLineStyle: {},
                mediaWidth: 0,
                mediaSpace: 0,
                mediaContainerStyle: 0,
                mediaWidths: [],
                mediaRightOffsets: [],
                wideTextBlockNumChars: 0,
                mediaWindowChromeHeights: [],
                mediaWindowCornerRadius: [],
                previewHeight: 0,
                previewWidth: 0,
                previewChromeHeight: 0,
                previewCornerRadius: 0,
                previewTopOffset: 0,
                previewRightOffset: 0,
                space: [],
                empty: [],
                allEmpty: [],
                dash: [],
                star: [],
                slash: [],
                plus: [],
                singleBaseline: [],
                allSingleBaseline: [],
                doubleBaseline: [],
                allDoubleBaseline: [],
                dimensionsCalculated: !1
            },
            scroll: {
                pos: 0,
                maxPos: 0
            },
            openTabs: [{
                title: "fine-thought.js",
                slug: "/",
                scrollPos: !1,
                maxScrollPos: !1,
                maxChar: !1,
                randCells: []
            }],
            touch: !0,
            touchFired: !1,
            infoOpen: !1,
            profileActive: !0,
            contactActive: !1,
            featuredActive: 0,
            siteLoaded: !1,
            setDimensions: () => {}
            ,
            setScroll: () => {}
            ,
            setTabs: () => {}
            ,
            setTabsMobile: () => {}
            ,
            setTouch: () => {}
            ,
            setTouchFired: () => {}
            ,
            setProfileOpen: () => {}
            ,
            setContactOpen: () => {}
            ,
            setInfoOpen: () => {}
            ,
            setInfoClosed: () => {}
            ,
            setSiteLoaded: () => {}
        })
          , s = e => {
            let[t,i] = (0,
            n.useState)({
                dimensions: {
                    screenHeight: 0,
                    screenWidth: 0,
                    screenMobile: !1,
                    screenTablet: !1,
                    portrait: !1,
                    uiHeaderHeight: 0,
                    mainWindowWidth: 0,
                    mainWindowHeight: 0,
                    infoPanelWidth: 0,
                    infoPanelHeight: 0,
                    fontW2H: .5625,
                    contentWidth: 0,
                    contentHeight: 0,
                    contentMobile: !1,
                    contentTablet: !1,
                    profilePanelWidth: 0,
                    profilePanelHeight: 0,
                    featuredPanelWidth: 0,
                    featuredPanelHeight: 0,
                    featuredWorkChromeHeight: 0,
                    featuredWorkCornerRadius: 0,
                    featuredWorkImageHeight: 0,
                    featuredWorkImageWidth: 0,
                    monoFontSize: 0,
                    monoLineHeight: 0,
                    contentColWidth: 0,
                    colWidth: 0,
                    numCols: 0,
                    charsPerCol: 0,
                    charsPerLine: 0,
                    asciiLayoutWidth: 0,
                    asciiColWidth: 0,
                    remainingChars: 0,
                    remainingCharsWidth: 0,
                    totalAsciiLayoutWidth: 0,
                    charWidth: 0,
                    sansOffset: 0,
                    mediumFontSize: 0,
                    mediumLineHeight: 0,
                    mediumFontSpace: 0,
                    mediumLineStyle: {},
                    mediumLineSpaceStyle: {},
                    largeFontSize: 0,
                    largeLineHeight: 0,
                    largeSpace: 0,
                    largeLineStyle: {},
                    xlargeFontSize: 0,
                    xlargeLineHeight: 0,
                    xlargeSpace: 0,
                    xlargeLineStyle: {},
                    mediaWidth: 0,
                    mediaSpace: 0,
                    mediaContainerStyle: 0,
                    mediaWidths: [],
                    mediaRightOffsets: [],
                    wideTextBlockNumChars: 0,
                    mediaWindowChromeHeights: [],
                    mediaWindowCornerRadius: [],
                    previewHeight: 0,
                    previewWidth: 0,
                    previewChromeHeight: 0,
                    previewCornerRadius: 0,
                    previewTopOffset: 0,
                    previewRightOffset: 0,
                    dimensionsCalculated: !1
                },
                scroll: {
                    pos: 0,
                    maxPos: 0
                },
                touch: !0,
                touchFired: !1,
                siteLoaded: !1,
                openTabs: [{
                    title: "fine-thought.js",
                    slug: "/",
                    scrollPos: !1,
                    maxScrollPos: !1,
                    maxChar: !1,
                    randCells: []
                }],
                infoOpen: !1,
                profileActive: !0,
                contactActive: !1,
                featuredActive: 0,
                setDimensions: e => {
                    i( (t, i) => ({
                        ...t,
                        dimensions: e,
                        scroll: t.scroll,
                        touch: t.touch,
                        touchFired: t.touchFired,
                        openTabs: t.openTabs,
                        infoOpen: t.infoOpen,
                        profileActive: t.profileActive,
                        contactActive: t.contactActive,
                        siteLoaded: t.siteLoaded
                    }))
                }
                ,
                setScroll: e => {
                    i( (t, i) => ({
                        ...t,
                        dimensions: t.dimensions,
                        scroll: e,
                        touch: t.touch,
                        touchFired: t.touchFired,
                        openTabs: t.openTabs,
                        infoOpen: t.infoOpen,
                        profileActive: t.profileActive,
                        contactActive: t.contactActive,
                        siteLoaded: t.siteLoaded
                    }))
                }
                ,
                setTouch: e => {
                    i( (t, i) => ({
                        ...t,
                        dimensions: t.dimensions,
                        scroll: t.scroll,
                        touch: e,
                        touchFired: t.touchFired,
                        openTabs: t.openTabs,
                        infoOpen: t.infoOpen,
                        profileActive: t.profileActive,
                        contactActive: t.contactActive,
                        siteLoaded: t.siteLoaded
                    }))
                }
                ,
                setTouchFired: () => {
                    i( (e, t) => ({
                        ...e,
                        dimensions: e.dimensions,
                        scroll: e.scroll,
                        touch: !0,
                        touchFired: !0,
                        openTabs: e.openTabs,
                        infoOpen: e.infoOpen,
                        profileActive: e.profileActive,
                        contactActive: e.contactActive,
                        siteLoaded: e.siteLoaded
                    }))
                }
                ,
                setTabs: e => {
                    i( (t, i) => ({
                        ...t,
                        dimensions: t.dimensions,
                        scroll: t.scroll,
                        touch: t.touch,
                        touchFired: t.touchFired,
                        openTabs: e,
                        infoOpen: t.infoOpen,
                        profileActive: t.profileActive,
                        contactActive: t.contactActive,
                        siteLoaded: t.siteLoaded
                    }))
                }
                ,
                setTabsMobile: e => {
                    i( (t, i) => ({
                        ...t,
                        dimensions: t.dimensions,
                        scroll: t.scroll,
                        touch: t.touch,
                        touchFired: t.touchFired,
                        openTabs: e,
                        infoOpen: !1,
                        profileActive: t.profileActive,
                        contactActive: t.contactActive,
                        siteLoaded: t.siteLoaded
                    }))
                }
                ,
                setProfileOpen: () => {
                    i( (e, t) => ({
                        ...e,
                        dimensions: e.dimensions,
                        scroll: e.scroll,
                        touch: e.touch,
                        touchFired: e.touchFired,
                        openTabs: e.openTabs,
                        infoOpen: !0,
                        profileActive: !0,
                        contactActive: !1,
                        siteLoaded: e.siteLoaded
                    }))
                }
                ,
                setContactOpen: () => {
                    i( (e, t) => ({
                        ...e,
                        dimensions: e.dimensions,
                        scroll: e.scroll,
                        touch: e.touch,
                        touchFired: e.touchFired,
                        openTabs: e.openTabs,
                        infoOpen: !0,
                        profileActive: !1,
                        contactActive: !0,
                        siteLoaded: e.siteLoaded
                    }))
                }
                ,
                setInfoOpen: () => {
                    i( (e, t) => ({
                        ...e,
                        dimensions: e.dimensions,
                        scroll: e.scroll,
                        touch: e.touch,
                        touchFired: e.touchFired,
                        openTabs: e.openTabs,
                        infoOpen: !0,
                        profileActive: e.profileActive,
                        contactActive: e.contactActive,
                        siteLoaded: e.siteLoaded
                    }))
                }
                ,
                setInfoClosed: () => {
                    i( (e, t) => ({
                        ...e,
                        dimensions: e.dimensions,
                        scroll: e.scroll,
                        touch: e.touch,
                        touchFired: e.touchFired,
                        openTabs: e.openTabs,
                        infoOpen: !1,
                        profileActive: e.profileActive,
                        contactActive: e.contactActive,
                        siteLoaded: e.siteLoaded
                    }))
                }
                ,
                setSiteLoaded: () => {
                    i( (e, t) => ({
                        ...e,
                        dimensions: e.dimensions,
                        scroll: e.scroll,
                        touch: e.touch,
                        touchFired: e.touchFired,
                        openTabs: e.openTabs,
                        infoOpen: e.infoOpen,
                        profileActive: e.profileActive,
                        contactActive: e.contactActive,
                        siteLoaded: !0
                    }))
                }
            });
            return (0,
            r.jsx)(o.Provider, {
                value: t,
                children: e.children
            })
        }
    }
    ,
    3724: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "errorOnce", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let i = e => {}
    }
    ,
    5105: (e, t, i) => {
        e.exports = i(7195)
    }
    ,
    5177: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => s
        });
        var r = i(7876)
          , n = i(4232)
          , o = i(3718);
        class s extends n.Component {
            componentDidMount() {
                this.doResize(),
                window.addEventListener("resize", this.doResize),
                setTimeout( () => {
                    this.$container && (this.props.forceLoad ? (this.setState({
                        doLoad: !0
                    }),
                    setTimeout( () => {
                        this.setState({
                            play: !0,
                            resetDone: !1
                        }),
                        setTimeout( () => {
                            if (this.$curVideo && !0 === this.state.play) {
                                this.$curVideo.muted = !0;
                                try {
                                    this.$curVideo.play()
                                } catch (e) {}
                            }
                        }
                        , 50),
                        setTimeout( () => {
                            if (this.$curVideo && !0 === this.state.play) {
                                this.$curVideo.muted = !0;
                                try {
                                    this.$curVideo.play()
                                } catch (e) {}
                            }
                        }
                        , 250)
                    }
                    , 250)) : new IntersectionObserver(this.onLoadIntersection,{
                        root: null,
                        rootMargin: "0px 0px 25% 0px",
                        threshold: [0, .25, .5, .75, 1]
                    }).observe(this.$container),
                    new IntersectionObserver(this.onExitViewIntersection,{
                        root: null,
                        rootMargin: "0px 0px 0px 0px",
                        threshold: 0
                    }).observe(this.$container),
                    new IntersectionObserver(this.onPlayIntersection,{
                        root: null,
                        rootMargin: "-25% 0% -25% 0%",
                        threshold: [0, .25, .5, .75, 1]
                    }).observe(this.$container),
                    this.interval = setInterval(this.doProgress, this.state.step),
                    this.doResize())
                }
                , 10)
            }
            componentDidUpdate() {
                let e = this.props.forceSlide;
                !1 === e || e !== this.state.curIndex && this.setState({
                    curCount: 0,
                    progressRatio: 0,
                    curIndex: e
                })
            }
            componentWillUnmount() {
                clearInterval(this.interval)
            }
            doResize() {
                if (this.$container) {
                    let e = this.$container.clientWidth
                      , t = this.$container.clientHeight
                      , i = 1;
                    window.devicePixelRatio && (i = window.devicePixelRatio),
                    i > 1.5 && (i = 1.5),
                    (this.state.containerWidth !== e || this.state.windowWidth !== window.innerWidth || this.state.containerHeight !== t) && this.setState({
                        containerWidth: e,
                        trueContainerWidth: e * window.devicePixelRatio,
                        containerHeight: t,
                        windowWidth: window.innerWidth,
                        pixelRes: i
                    })
                }
            }
            doProgress() {
                let e = 0
                  , t = 0;
                if (!0 === this.state.play) {
                    if (!1 === this.state.mediaLoaded) {
                        if (e = this.state.curCount,
                        this.$curVideo)
                            if (0 === this.$curVideo.currentTime) {
                                this.$curVideo.muted = !0;
                                try {
                                    this.$curVideo.play()
                                } catch (e) {}
                            } else
                                e = this.state.curCount + this.state.step,
                                this.setState({
                                    mediaLoaded: !0,
                                    curCount: e
                                });
                        else
                            e = this.state.curCount + this.state.step,
                            this.$imageEl && this.$imageEl.complete && this.setState({
                                mediaLoaded: !0,
                                curCount: e
                            });
                        this.setState({
                            curCount: e
                        })
                    } else if (!1 === this.state.mediaBeginPlay) {
                        if (this.$curVideo) {
                            this.$curVideo.currentTime = 0;
                            try {
                                this.$curVideo.pause()
                            } catch (e) {}
                        }
                        (e = this.state.curCount + this.state.step) > this.props.playDelay ? this.setState({
                            mediaLoaded: !0,
                            mediaBeginPlay: !0,
                            curCount: 0
                        }) : this.setState({
                            mediaLoaded: !0,
                            curCount: e
                        })
                    } else if (this.props.gallery.length > 1 || 1 === this.props.gallery.length && this.props.gallery[0].desktop_cinemagraph) {
                        if (!0 === this.state.firstChange && this.$curVideo && (this.$curVideo.currentTime = 0),
                        this.props.delay,
                        this.$curVideo)
                            if (isNaN(this.$curVideo.duration) || isNaN(this.$curVideo.currentTime))
                                t = 0;
                            else {
                                if (0 === this.$curVideo.currentTime) {
                                    this.$curVideo.muted = !0;
                                    try {
                                        this.$curVideo.play()
                                    } catch (e) {}
                                }
                                t = this.$curVideo.currentTime / this.$curVideo.duration
                            }
                        else
                            t = (e = this.state.curCount + this.state.step) / this.props.delay;
                        if (t >= .95 && !0 !== this.props.forceLoad) {
                            let e = this.state.curIndex + 1;
                            if (!1 === this.props.loop && e === this.props.gallery.length || !1 === this.props.autoChange) {
                                if (this.$curVideo)
                                    try {
                                        this.$curVideo.pause()
                                    } catch (e) {}
                            } else
                                e === this.props.gallery.length && (e = 0),
                                this.setState({
                                    mediaLoaded: !0,
                                    curCount: 0,
                                    progressRatio: 0,
                                    curIndex: e
                                })
                        } else
                            this.setState({
                                mediaLoaded: !0,
                                curCount: e,
                                progressRatio: t,
                                firstChange: !1
                            })
                    } else if (this.$curVideo && 0 === this.$curVideo.currentTime) {
                        this.$curVideo.muted = !0;
                        try {
                            this.$curVideo.play()
                        } catch (e) {}
                    }
                }
            }
            onLoadIntersection(e, t) {
                e.map(e => {
                    0 !== e.intersectionRatio && !1 === this.state.doLoad && this.setState({
                        doLoad: !0
                    })
                }
                )
            }
            onPlayIntersection(e, t) {
                e.map(e => {
                    setTimeout( () => {
                        if (this.$container) {
                            if (0 !== e.intersectionRatio && !1 === this.state.play)
                                this.setState({
                                    play: !0,
                                    resetDone: !1
                                }),
                                setTimeout( () => {
                                    if (this.$curVideo && !0 === this.state.play) {
                                        this.$curVideo.muted = !0;
                                        try {
                                            this.$curVideo.play()
                                        } catch (e) {}
                                    }
                                }
                                , 50),
                                setTimeout( () => {
                                    if (this.$curVideo && !0 === this.state.play) {
                                        this.$curVideo.muted = !0;
                                        try {
                                            this.$curVideo.play()
                                        } catch (e) {}
                                    }
                                }
                                , 250);
                            else if (0 === e.intersectionRatio && !0 === this.state.play) {
                                if (this.$curVideo) {
                                    this.$curVideo.muted = !0;
                                    try {
                                        this.$curVideo.pause()
                                    } catch (e) {}
                                }
                                this.setState({
                                    play: !1
                                })
                            }
                        }
                    }
                    , 0)
                }
                )
            }
            onExitViewIntersection(e, t) {
                e.map(e => {
                    setTimeout( () => {
                        if (0 === e.intersectionRatio && !1 === this.state.resetDone) {
                            if (this.$curVideo) {
                                this.$curVideo.muted = !0;
                                try {
                                    this.$curVideo.pause()
                                } catch (e) {}
                                this.$curVideo.currentTime = 0
                            }
                            this.setState({
                                play: !1,
                                resetDone: !0,
                                curCount: 0,
                                progressRatio: 0,
                                firstChange: !1,
                                mediaBeginPlay: !1,
                                curIndex: 0
                            })
                        }
                    }
                    , 0)
                }
                )
            }
            getImgSrc(e) {
                let t = e[2];
                return this.state.containerWidth < 760 ? e[0] : this.state.containerWidth * this.state.pixelRes < 1920 && (t = e[1]),
                t
            }
            getVideoUrl(e) {
                let t = e.desktop_cinemagraph;
                return this.state.containerWidth < 760 ? t = e.mobile_cinemagraph : this.state.containerWidth * this.state.pixelRes < 1920 && (t = e.tablet_cinemagraph),
                t
            }
            render() {
                let e = this.props.gallery;
                this.props.autoChange,
                this.props.delay;
                let t = this.context.dimensions
                  , i = this.props.columnsWide
                  , n = this.props.chromeHeight
                  , o = this.props.chromeRadius
                  , s = this.props.alt
                  , a = [];
                for (let t = 0; t < e; t++)
                    !1 === s || "" === s ? a[t] = "" : 1 === e.length ? a[t] = s : a[t] = s + " - Slide " + parseInt(t + 1) + " of " + galley.length;
                let l = 0
                  , h = 0;
                return (i ? (l = t.mediaWindowChromeHeights[i],
                h = t.mediaWindowCornerRadius[i]) : n && (l = Math.round(n),
                h = Math.round(o)),
                e) ? (0,
                r.jsx)("div", {
                    className: "c-window",
                    ref: e => {
                        this.$container = e
                    }
                    ,
                    children: (0,
                    r.jsxs)("div", {
                        className: "c-window__inner " + (this.state.mediaLoaded ? "state-loaded" : "") + " " + (this.props.forceLoad ? "state-force-load" : ""),
                        "data-loaded": this.state.mediaLoaded,
                        style: {
                            borderRadius: h + "px"
                        },
                        children: [(0,
                        r.jsx)("div", {
                            className: "c-window__chrome",
                            style: {
                                height: l + "px",
                                borderTopLeftRadius: h + "px",
                                borderTopRightRadius: h + "px"
                            },
                            dangerouslySetInnerHTML: {
                                __html: '<svg viewBox="0 0 52 12"><path d="M6,0C2.69,0,0,2.69,0,6s2.69,6,6,6,6-2.69,6-6S9.31,0,6,0ZM26,0c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6S29.31,0,26,0ZM46,0c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Z" style="fill: #494949;"/></svg>'
                            }
                        }), (0,
                        r.jsx)("div", {
                            className: "c-window__content",
                            style: {
                                height: "calc(100% - " + l + "px)"
                            },
                            children: (0,
                            r.jsx)("div", {
                                className: "c-gallery",
                                children: e.map( (e, t) => {
                                    let i = !1;
                                    return (e.desktop_cinemagraph && e.tablet_cinemagraph && e.mobile_cinemagraph && (i = !0),
                                    this.state.doLoad) ? i ? (0,
                                    r.jsx)("div", {
                                        className: "c-gallery__slide " + (this.state.curIndex === t ? "state-active" : ""),
                                        children: (0,
                                        r.jsxs)("div", {
                                            className: "c-gallery__slide__video",
                                            children: [t === this.state.curIndex && (0,
                                            r.jsx)("video", {
                                                src: this.getVideoUrl(e),
                                                muted: !0,
                                                playsInline: !0,
                                                autoPlay: !0,
                                                loop: !0,
                                                poster: this.getImgSrc(e.srcset),
                                                preload: "metadata",
                                                ref: e => {
                                                    this.$curVideo = e
                                                }
                                                ,
                                                "aria-label": a[t]
                                            }), t !== this.state.curIndex && (0,
                                            r.jsx)("video", {
                                                src: this.getVideoUrl(e),
                                                muted: !0,
                                                playsInline: !0,
                                                poster: this.getImgSrc(e.srcset),
                                                preload: "metadata",
                                                "aria-label": a[t]
                                            })]
                                        })
                                    }, t) : (0,
                                    r.jsx)("div", {
                                        className: "c-gallery__slide " + (this.state.curIndex === t ? "state-active" : ""),
                                        children: (0,
                                        r.jsx)("img", {
                                            ref: e => {
                                                this.$imageEl = e
                                            }
                                            ,
                                            src: this.getImgSrc(e.srcset),
                                            alt: a[t]
                                        })
                                    }, t) : (0,
                                    r.jsx)("div", {
                                        className: "c-gallery__slide " + (this.state.curIndex === t ? "state-active" : "")
                                    }, t)
                                }
                                )
                            })
                        })]
                    })
                }) : null
            }
            constructor(e) {
                super(e),
                this.onLoadIntersection = this.onLoadIntersection.bind(this),
                this.onExitViewIntersection = this.onExitViewIntersection.bind(this),
                this.onPlayIntersection = this.onPlayIntersection.bind(this),
                this.doProgress = this.doProgress.bind(this),
                this.doResize = this.doResize.bind(this),
                this.getImgSrc = this.getImgSrc.bind(this),
                this.state = {
                    curIndex: 0,
                    doLoad: !1,
                    play: !1,
                    resetDone: !1,
                    step: 40,
                    curCount: 0,
                    progressRatio: 0,
                    slideTime: 0,
                    mutedParam: "muted",
                    firstChange: !1,
                    containerWidth: 0,
                    trueContainerWidth: 0,
                    containerHeight: 0,
                    windowWidth: 0,
                    mediaBeginPlay: !1,
                    mediaLoaded: !1,
                    pixelRes: 1
                }
            }
        }
        s.contextType = o.D
    }
    ,
    6556: (e, t, i) => {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return i(545)
        }
        ])
    }
    ,
    8220: e => {
        !function() {
            var t = {
                675: function(e, t) {
                    "use strict";
                    t.byteLength = function(e) {
                        var t = l(e)
                          , i = t[0]
                          , r = t[1];
                        return (i + r) * 3 / 4 - r
                    }
                    ,
                    t.toByteArray = function(e) {
                        var t, i, o = l(e), s = o[0], a = o[1], h = new n((s + a) * 3 / 4 - a), c = 0, u = a > 0 ? s - 4 : s;
                        for (i = 0; i < u; i += 4)
                            t = r[e.charCodeAt(i)] << 18 | r[e.charCodeAt(i + 1)] << 12 | r[e.charCodeAt(i + 2)] << 6 | r[e.charCodeAt(i + 3)],
                            h[c++] = t >> 16 & 255,
                            h[c++] = t >> 8 & 255,
                            h[c++] = 255 & t;
                        return 2 === a && (t = r[e.charCodeAt(i)] << 2 | r[e.charCodeAt(i + 1)] >> 4,
                        h[c++] = 255 & t),
                        1 === a && (t = r[e.charCodeAt(i)] << 10 | r[e.charCodeAt(i + 1)] << 4 | r[e.charCodeAt(i + 2)] >> 2,
                        h[c++] = t >> 8 & 255,
                        h[c++] = 255 & t),
                        h
                    }
                    ,
                    t.fromByteArray = function(e) {
                        for (var t, r = e.length, n = r % 3, o = [], s = 0, a = r - n; s < a; s += 16383)
                            o.push(function(e, t, r) {
                                for (var n, o = [], s = t; s < r; s += 3)
                                    n = (e[s] << 16 & 0xff0000) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]),
                                    o.push(i[n >> 18 & 63] + i[n >> 12 & 63] + i[n >> 6 & 63] + i[63 & n]);
                                return o.join("")
                            }(e, s, s + 16383 > a ? a : s + 16383));
                        return 1 === n ? o.push(i[(t = e[r - 1]) >> 2] + i[t << 4 & 63] + "==") : 2 === n && o.push(i[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "="),
                        o.join("")
                    }
                    ;
                    for (var i = [], r = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s)
                        i[s] = o[s],
                        r[o.charCodeAt(s)] = s;
                    function l(e) {
                        var t = e.length;
                        if (t % 4 > 0)
                            throw Error("Invalid string. Length must be a multiple of 4");
                        var i = e.indexOf("=");
                        -1 === i && (i = t);
                        var r = i === t ? 0 : 4 - i % 4;
                        return [i, r]
                    }
                    r[45] = 62,
                    r[95] = 63
                },
                72: function(e, t, i) {
                    "use strict";
                    var r = i(675)
                      , n = i(783)
                      , o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                    function s(e) {
                        if (e > 0x7fffffff)
                            throw RangeError('The value "' + e + '" is invalid for option "size"');
                        var t = new Uint8Array(e);
                        return Object.setPrototypeOf(t, a.prototype),
                        t
                    }
                    function a(e, t, i) {
                        if ("number" == typeof e) {
                            if ("string" == typeof t)
                                throw TypeError('The "string" argument must be of type string. Received type number');
                            return c(e)
                        }
                        return l(e, t, i)
                    }
                    function l(e, t, i) {
                        if ("string" == typeof e) {
                            var r = e
                              , n = t;
                            if (("string" != typeof n || "" === n) && (n = "utf8"),
                            !a.isEncoding(n))
                                throw TypeError("Unknown encoding: " + n);
                            var o = 0 | f(r, n)
                              , l = s(o)
                              , h = l.write(r, n);
                            return h !== o && (l = l.slice(0, h)),
                            l
                        }
                        if (ArrayBuffer.isView(e))
                            return u(e);
                        if (null == e)
                            throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                        if (A(e, ArrayBuffer) || e && A(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (A(e, SharedArrayBuffer) || e && A(e.buffer, SharedArrayBuffer)))
                            return function(e, t, i) {
                                var r;
                                if (t < 0 || e.byteLength < t)
                                    throw RangeError('"offset" is outside of buffer bounds');
                                if (e.byteLength < t + (i || 0))
                                    throw RangeError('"length" is outside of buffer bounds');
                                return Object.setPrototypeOf(r = void 0 === t && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e,t) : new Uint8Array(e,t,i), a.prototype),
                                r
                            }(e, t, i);
                        if ("number" == typeof e)
                            throw TypeError('The "value" argument must not be of type number. Received type number');
                        var c = e.valueOf && e.valueOf();
                        if (null != c && c !== e)
                            return a.from(c, t, i);
                        var p = function(e) {
                            if (a.isBuffer(e)) {
                                var t = 0 | d(e.length)
                                  , i = s(t);
                                return 0 === i.length || e.copy(i, 0, 0, t),
                                i
                            }
                            return void 0 !== e.length ? "number" != typeof e.length || function(e) {
                                return e != e
                            }(e.length) ? s(0) : u(e) : "Buffer" === e.type && Array.isArray(e.data) ? u(e.data) : void 0
                        }(e);
                        if (p)
                            return p;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive])
                            return a.from(e[Symbol.toPrimitive]("string"), t, i);
                        throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                    }
                    function h(e) {
                        if ("number" != typeof e)
                            throw TypeError('"size" argument must be of type number');
                        if (e < 0)
                            throw RangeError('The value "' + e + '" is invalid for option "size"')
                    }
                    function c(e) {
                        return h(e),
                        s(e < 0 ? 0 : 0 | d(e))
                    }
                    function u(e) {
                        for (var t = e.length < 0 ? 0 : 0 | d(e.length), i = s(t), r = 0; r < t; r += 1)
                            i[r] = 255 & e[r];
                        return i
                    }
                    t.Buffer = a,
                    t.SlowBuffer = function(e) {
                        return +e != e && (e = 0),
                        a.alloc(+e)
                    }
                    ,
                    t.INSPECT_MAX_BYTES = 50,
                    t.kMaxLength = 0x7fffffff,
                    a.TYPED_ARRAY_SUPPORT = function() {
                        try {
                            var e = new Uint8Array(1)
                              , t = {
                                foo: function() {
                                    return 42
                                }
                            };
                            return Object.setPrototypeOf(t, Uint8Array.prototype),
                            Object.setPrototypeOf(e, t),
                            42 === e.foo()
                        } catch (e) {
                            return !1
                        }
                    }(),
                    a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
                    Object.defineProperty(a.prototype, "parent", {
                        enumerable: !0,
                        get: function() {
                            if (a.isBuffer(this))
                                return this.buffer
                        }
                    }),
                    Object.defineProperty(a.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            if (a.isBuffer(this))
                                return this.byteOffset
                        }
                    }),
                    a.poolSize = 8192,
                    a.from = function(e, t, i) {
                        return l(e, t, i)
                    }
                    ,
                    Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
                    Object.setPrototypeOf(a, Uint8Array),
                    a.alloc = function(e, t, i) {
                        return (h(e),
                        e <= 0) ? s(e) : void 0 !== t ? "string" == typeof i ? s(e).fill(t, i) : s(e).fill(t) : s(e)
                    }
                    ,
                    a.allocUnsafe = function(e) {
                        return c(e)
                    }
                    ,
                    a.allocUnsafeSlow = function(e) {
                        return c(e)
                    }
                    ;
                    function d(e) {
                        if (e >= 0x7fffffff)
                            throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                        return 0 | e
                    }
                    function f(e, t) {
                        if (a.isBuffer(e))
                            return e.length;
                        if (ArrayBuffer.isView(e) || A(e, ArrayBuffer))
                            return e.byteLength;
                        if ("string" != typeof e)
                            throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                        var i = e.length
                          , r = arguments.length > 2 && !0 === arguments[2];
                        if (!r && 0 === i)
                            return 0;
                        for (var n = !1; ; )
                            switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return i;
                            case "utf8":
                            case "utf-8":
                                return R(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * i;
                            case "hex":
                                return i >>> 1;
                            case "base64":
                                return C(e).length;
                            default:
                                if (n)
                                    return r ? -1 : R(e).length;
                                t = ("" + t).toLowerCase(),
                                n = !0
                            }
                    }
                    function p(e, t, i) {
                        var n, o, s, a = !1;
                        if ((void 0 === t || t < 0) && (t = 0),
                        t > this.length || ((void 0 === i || i > this.length) && (i = this.length),
                        i <= 0 || (i >>>= 0) <= (t >>>= 0)))
                            return "";
                        for (e || (e = "utf8"); ; )
                            switch (e) {
                            case "hex":
                                return function(e, t, i) {
                                    var r = e.length;
                                    (!t || t < 0) && (t = 0),
                                    (!i || i < 0 || i > r) && (i = r);
                                    for (var n = "", o = t; o < i; ++o)
                                        n += O[e[o]];
                                    return n
                                }(this, t, i);
                            case "utf8":
                            case "utf-8":
                                return b(this, t, i);
                            case "ascii":
                                return function(e, t, i) {
                                    var r = "";
                                    i = Math.min(e.length, i);
                                    for (var n = t; n < i; ++n)
                                        r += String.fromCharCode(127 & e[n]);
                                    return r
                                }(this, t, i);
                            case "latin1":
                            case "binary":
                                return function(e, t, i) {
                                    var r = "";
                                    i = Math.min(e.length, i);
                                    for (var n = t; n < i; ++n)
                                        r += String.fromCharCode(e[n]);
                                    return r
                                }(this, t, i);
                            case "base64":
                                return n = this,
                                o = t,
                                s = i,
                                0 === o && s === n.length ? r.fromByteArray(n) : r.fromByteArray(n.slice(o, s));
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return function(e, t, i) {
                                    for (var r = e.slice(t, i), n = "", o = 0; o < r.length; o += 2)
                                        n += String.fromCharCode(r[o] + 256 * r[o + 1]);
                                    return n
                                }(this, t, i);
                            default:
                                if (a)
                                    throw TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(),
                                a = !0
                            }
                    }
                    function m(e, t, i) {
                        var r = e[t];
                        e[t] = e[i],
                        e[i] = r
                    }
                    function g(e, t, i, r, n) {
                        var o;
                        if (0 === e.length)
                            return -1;
                        if ("string" == typeof i ? (r = i,
                        i = 0) : i > 0x7fffffff ? i = 0x7fffffff : i < -0x80000000 && (i = -0x80000000),
                        (o = i *= 1) != o && (i = n ? 0 : e.length - 1),
                        i < 0 && (i = e.length + i),
                        i >= e.length)
                            if (n)
                                return -1;
                            else
                                i = e.length - 1;
                        else if (i < 0)
                            if (!n)
                                return -1;
                            else
                                i = 0;
                        if ("string" == typeof t && (t = a.from(t, r)),
                        a.isBuffer(t))
                            return 0 === t.length ? -1 : y(e, t, i, r, n);
                        if ("number" == typeof t) {
                            if (t &= 255,
                            "function" == typeof Uint8Array.prototype.indexOf)
                                if (n)
                                    return Uint8Array.prototype.indexOf.call(e, t, i);
                                else
                                    return Uint8Array.prototype.lastIndexOf.call(e, t, i);
                            return y(e, [t], i, r, n)
                        }
                        throw TypeError("val must be string, number or Buffer")
                    }
                    function y(e, t, i, r, n) {
                        var o, s = 1, a = e.length, l = t.length;
                        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                            if (e.length < 2 || t.length < 2)
                                return -1;
                            s = 2,
                            a /= 2,
                            l /= 2,
                            i /= 2
                        }
                        function h(e, t) {
                            return 1 === s ? e[t] : e.readUInt16BE(t * s)
                        }
                        if (n) {
                            var c = -1;
                            for (o = i; o < a; o++)
                                if (h(e, o) === h(t, -1 === c ? 0 : o - c)) {
                                    if (-1 === c && (c = o),
                                    o - c + 1 === l)
                                        return c * s
                                } else
                                    -1 !== c && (o -= o - c),
                                    c = -1
                        } else
                            for (i + l > a && (i = a - l),
                            o = i; o >= 0; o--) {
                                for (var u = !0, d = 0; d < l; d++)
                                    if (h(e, o + d) !== h(t, d)) {
                                        u = !1;
                                        break
                                    }
                                if (u)
                                    return o
                            }
                        return -1
                    }
                    a.isBuffer = function(e) {
                        return null != e && !0 === e._isBuffer && e !== a.prototype
                    }
                    ,
                    a.compare = function(e, t) {
                        if (A(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
                        A(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
                        !a.isBuffer(e) || !a.isBuffer(t))
                            throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (e === t)
                            return 0;
                        for (var i = e.length, r = t.length, n = 0, o = Math.min(i, r); n < o; ++n)
                            if (e[n] !== t[n]) {
                                i = e[n],
                                r = t[n];
                                break
                            }
                        return i < r ? -1 : +(r < i)
                    }
                    ,
                    a.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                        }
                    }
                    ,
                    a.concat = function(e, t) {
                        if (!Array.isArray(e))
                            throw TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length)
                            return a.alloc(0);
                        if (void 0 === t)
                            for (i = 0,
                            t = 0; i < e.length; ++i)
                                t += e[i].length;
                        var i, r = a.allocUnsafe(t), n = 0;
                        for (i = 0; i < e.length; ++i) {
                            var o = e[i];
                            if (A(o, Uint8Array) && (o = a.from(o)),
                            !a.isBuffer(o))
                                throw TypeError('"list" argument must be an Array of Buffers');
                            o.copy(r, n),
                            n += o.length
                        }
                        return r
                    }
                    ,
                    a.byteLength = f,
                    a.prototype._isBuffer = !0,
                    a.prototype.swap16 = function() {
                        var e = this.length;
                        if (e % 2 != 0)
                            throw RangeError("Buffer size must be a multiple of 16-bits");
                        for (var t = 0; t < e; t += 2)
                            m(this, t, t + 1);
                        return this
                    }
                    ,
                    a.prototype.swap32 = function() {
                        var e = this.length;
                        if (e % 4 != 0)
                            throw RangeError("Buffer size must be a multiple of 32-bits");
                        for (var t = 0; t < e; t += 4)
                            m(this, t, t + 3),
                            m(this, t + 1, t + 2);
                        return this
                    }
                    ,
                    a.prototype.swap64 = function() {
                        var e = this.length;
                        if (e % 8 != 0)
                            throw RangeError("Buffer size must be a multiple of 64-bits");
                        for (var t = 0; t < e; t += 8)
                            m(this, t, t + 7),
                            m(this, t + 1, t + 6),
                            m(this, t + 2, t + 5),
                            m(this, t + 3, t + 4);
                        return this
                    }
                    ,
                    a.prototype.toString = function() {
                        var e = this.length;
                        return 0 === e ? "" : 0 == arguments.length ? b(this, 0, e) : p.apply(this, arguments)
                    }
                    ,
                    a.prototype.toLocaleString = a.prototype.toString,
                    a.prototype.equals = function(e) {
                        if (!a.isBuffer(e))
                            throw TypeError("Argument must be a Buffer");
                        return this === e || 0 === a.compare(this, e)
                    }
                    ,
                    a.prototype.inspect = function() {
                        var e = ""
                          , i = t.INSPECT_MAX_BYTES;
                        return e = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(),
                        this.length > i && (e += " ... "),
                        "<Buffer " + e + ">"
                    }
                    ,
                    o && (a.prototype[o] = a.prototype.inspect),
                    a.prototype.compare = function(e, t, i, r, n) {
                        if (A(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
                        !a.isBuffer(e))
                            throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                        if (void 0 === t && (t = 0),
                        void 0 === i && (i = e ? e.length : 0),
                        void 0 === r && (r = 0),
                        void 0 === n && (n = this.length),
                        t < 0 || i > e.length || r < 0 || n > this.length)
                            throw RangeError("out of range index");
                        if (r >= n && t >= i)
                            return 0;
                        if (r >= n)
                            return -1;
                        if (t >= i)
                            return 1;
                        if (t >>>= 0,
                        i >>>= 0,
                        r >>>= 0,
                        n >>>= 0,
                        this === e)
                            return 0;
                        for (var o = n - r, s = i - t, l = Math.min(o, s), h = this.slice(r, n), c = e.slice(t, i), u = 0; u < l; ++u)
                            if (h[u] !== c[u]) {
                                o = h[u],
                                s = c[u];
                                break
                            }
                        return o < s ? -1 : +(s < o)
                    }
                    ,
                    a.prototype.includes = function(e, t, i) {
                        return -1 !== this.indexOf(e, t, i)
                    }
                    ,
                    a.prototype.indexOf = function(e, t, i) {
                        return g(this, e, t, i, !0)
                    }
                    ,
                    a.prototype.lastIndexOf = function(e, t, i) {
                        return g(this, e, t, i, !1)
                    }
                    ;
                    function b(e, t, i) {
                        i = Math.min(e.length, i);
                        for (var r = [], n = t; n < i; ) {
                            var o, s, a, l, h = e[n], c = null, u = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                            if (n + u <= i)
                                switch (u) {
                                case 1:
                                    h < 128 && (c = h);
                                    break;
                                case 2:
                                    (192 & (o = e[n + 1])) == 128 && (l = (31 & h) << 6 | 63 & o) > 127 && (c = l);
                                    break;
                                case 3:
                                    o = e[n + 1],
                                    s = e[n + 2],
                                    (192 & o) == 128 && (192 & s) == 128 && (l = (15 & h) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (c = l);
                                    break;
                                case 4:
                                    o = e[n + 1],
                                    s = e[n + 2],
                                    a = e[n + 3],
                                    (192 & o) == 128 && (192 & s) == 128 && (192 & a) == 128 && (l = (15 & h) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (c = l)
                                }
                            null === c ? (c = 65533,
                            u = 1) : c > 65535 && (c -= 65536,
                            r.push(c >>> 10 & 1023 | 55296),
                            c = 56320 | 1023 & c),
                            r.push(c),
                            n += u
                        }
                        var d = r
                          , f = d.length;
                        if (f <= 4096)
                            return String.fromCharCode.apply(String, d);
                        for (var p = "", m = 0; m < f; )
                            p += String.fromCharCode.apply(String, d.slice(m, m += 4096));
                        return p
                    }
                    function v(e, t, i) {
                        if (e % 1 != 0 || e < 0)
                            throw RangeError("offset is not uint");
                        if (e + t > i)
                            throw RangeError("Trying to access beyond buffer length")
                    }
                    function w(e, t, i, r, n, o) {
                        if (!a.isBuffer(e))
                            throw TypeError('"buffer" argument must be a Buffer instance');
                        if (t > n || t < o)
                            throw RangeError('"value" argument is out of bounds');
                        if (i + r > e.length)
                            throw RangeError("Index out of range")
                    }
                    function x(e, t, i, r, n, o) {
                        if (i + r > e.length || i < 0)
                            throw RangeError("Index out of range")
                    }
                    function _(e, t, i, r, o) {
                        return t *= 1,
                        i >>>= 0,
                        o || x(e, t, i, 4, 34028234663852886e22, -34028234663852886e22),
                        n.write(e, t, i, r, 23, 4),
                        i + 4
                    }
                    function S(e, t, i, r, o) {
                        return t *= 1,
                        i >>>= 0,
                        o || x(e, t, i, 8, 17976931348623157e292, -17976931348623157e292),
                        n.write(e, t, i, r, 52, 8),
                        i + 8
                    }
                    a.prototype.write = function(e, t, i, r) {
                        if (void 0 === t)
                            r = "utf8",
                            i = this.length,
                            t = 0;
                        else if (void 0 === i && "string" == typeof t)
                            r = t,
                            i = this.length,
                            t = 0;
                        else if (isFinite(t))
                            t >>>= 0,
                            isFinite(i) ? (i >>>= 0,
                            void 0 === r && (r = "utf8")) : (r = i,
                            i = void 0);
                        else
                            throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        var n, o, s, a, l, h, c, u, d = this.length - t;
                        if ((void 0 === i || i > d) && (i = d),
                        e.length > 0 && (i < 0 || t < 0) || t > this.length)
                            throw RangeError("Attempt to write outside buffer bounds");
                        r || (r = "utf8");
                        for (var f = !1; ; )
                            switch (r) {
                            case "hex":
                                return function(e, t, i, r) {
                                    i = Number(i) || 0;
                                    var n = e.length - i;
                                    r ? (r = Number(r)) > n && (r = n) : r = n;
                                    var o = t.length;
                                    r > o / 2 && (r = o / 2);
                                    for (var s = 0; s < r; ++s) {
                                        var a, l = parseInt(t.substr(2 * s, 2), 16);
                                        if ((a = l) != a)
                                            break;
                                        e[i + s] = l
                                    }
                                    return s
                                }(this, e, t, i);
                            case "utf8":
                            case "utf-8":
                                return n = t,
                                o = i,
                                T(R(e, this.length - n), this, n, o);
                            case "ascii":
                                return s = t,
                                a = i,
                                T(E(e), this, s, a);
                            case "latin1":
                            case "binary":
                                return function(e, t, i, r) {
                                    return T(E(t), e, i, r)
                                }(this, e, t, i);
                            case "base64":
                                return l = t,
                                h = i,
                                T(C(e), this, l, h);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return c = t,
                                u = i,
                                T(function(e, t) {
                                    for (var i, r, n = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)
                                        r = (i = e.charCodeAt(o)) >> 8,
                                        n.push(i % 256),
                                        n.push(r);
                                    return n
                                }(e, this.length - c), this, c, u);
                            default:
                                if (f)
                                    throw TypeError("Unknown encoding: " + r);
                                r = ("" + r).toLowerCase(),
                                f = !0
                            }
                    }
                    ,
                    a.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }
                    ,
                    a.prototype.slice = function(e, t) {
                        var i = this.length;
                        e = ~~e,
                        t = void 0 === t ? i : ~~t,
                        e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
                        t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
                        t < e && (t = e);
                        var r = this.subarray(e, t);
                        return Object.setPrototypeOf(r, a.prototype),
                        r
                    }
                    ,
                    a.prototype.readUIntLE = function(e, t, i) {
                        e >>>= 0,
                        t >>>= 0,
                        i || v(e, t, this.length);
                        for (var r = this[e], n = 1, o = 0; ++o < t && (n *= 256); )
                            r += this[e + o] * n;
                        return r
                    }
                    ,
                    a.prototype.readUIntBE = function(e, t, i) {
                        e >>>= 0,
                        t >>>= 0,
                        i || v(e, t, this.length);
                        for (var r = this[e + --t], n = 1; t > 0 && (n *= 256); )
                            r += this[e + --t] * n;
                        return r
                    }
                    ,
                    a.prototype.readUInt8 = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 1, this.length),
                        this[e]
                    }
                    ,
                    a.prototype.readUInt16LE = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 2, this.length),
                        this[e] | this[e + 1] << 8
                    }
                    ,
                    a.prototype.readUInt16BE = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 2, this.length),
                        this[e] << 8 | this[e + 1]
                    }
                    ,
                    a.prototype.readUInt32LE = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 4, this.length),
                        (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 0x1000000 * this[e + 3]
                    }
                    ,
                    a.prototype.readUInt32BE = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 4, this.length),
                        0x1000000 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }
                    ,
                    a.prototype.readIntLE = function(e, t, i) {
                        e >>>= 0,
                        t >>>= 0,
                        i || v(e, t, this.length);
                        for (var r = this[e], n = 1, o = 0; ++o < t && (n *= 256); )
                            r += this[e + o] * n;
                        return r >= (n *= 128) && (r -= Math.pow(2, 8 * t)),
                        r
                    }
                    ,
                    a.prototype.readIntBE = function(e, t, i) {
                        e >>>= 0,
                        t >>>= 0,
                        i || v(e, t, this.length);
                        for (var r = t, n = 1, o = this[e + --r]; r > 0 && (n *= 256); )
                            o += this[e + --r] * n;
                        return o >= (n *= 128) && (o -= Math.pow(2, 8 * t)),
                        o
                    }
                    ,
                    a.prototype.readInt8 = function(e, t) {
                        return (e >>>= 0,
                        t || v(e, 1, this.length),
                        128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
                    }
                    ,
                    a.prototype.readInt16LE = function(e, t) {
                        e >>>= 0,
                        t || v(e, 2, this.length);
                        var i = this[e] | this[e + 1] << 8;
                        return 32768 & i ? 0xffff0000 | i : i
                    }
                    ,
                    a.prototype.readInt16BE = function(e, t) {
                        e >>>= 0,
                        t || v(e, 2, this.length);
                        var i = this[e + 1] | this[e] << 8;
                        return 32768 & i ? 0xffff0000 | i : i
                    }
                    ,
                    a.prototype.readInt32LE = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 4, this.length),
                        this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }
                    ,
                    a.prototype.readInt32BE = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 4, this.length),
                        this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }
                    ,
                    a.prototype.readFloatLE = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 4, this.length),
                        n.read(this, e, !0, 23, 4)
                    }
                    ,
                    a.prototype.readFloatBE = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 4, this.length),
                        n.read(this, e, !1, 23, 4)
                    }
                    ,
                    a.prototype.readDoubleLE = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 8, this.length),
                        n.read(this, e, !0, 52, 8)
                    }
                    ,
                    a.prototype.readDoubleBE = function(e, t) {
                        return e >>>= 0,
                        t || v(e, 8, this.length),
                        n.read(this, e, !1, 52, 8)
                    }
                    ,
                    a.prototype.writeUIntLE = function(e, t, i, r) {
                        if (e *= 1,
                        t >>>= 0,
                        i >>>= 0,
                        !r) {
                            var n = Math.pow(2, 8 * i) - 1;
                            w(this, e, t, i, n, 0)
                        }
                        var o = 1
                          , s = 0;
                        for (this[t] = 255 & e; ++s < i && (o *= 256); )
                            this[t + s] = e / o & 255;
                        return t + i
                    }
                    ,
                    a.prototype.writeUIntBE = function(e, t, i, r) {
                        if (e *= 1,
                        t >>>= 0,
                        i >>>= 0,
                        !r) {
                            var n = Math.pow(2, 8 * i) - 1;
                            w(this, e, t, i, n, 0)
                        }
                        var o = i - 1
                          , s = 1;
                        for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
                            this[t + o] = e / s & 255;
                        return t + i
                    }
                    ,
                    a.prototype.writeUInt8 = function(e, t, i) {
                        return e *= 1,
                        t >>>= 0,
                        i || w(this, e, t, 1, 255, 0),
                        this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    a.prototype.writeUInt16LE = function(e, t, i) {
                        return e *= 1,
                        t >>>= 0,
                        i || w(this, e, t, 2, 65535, 0),
                        this[t] = 255 & e,
                        this[t + 1] = e >>> 8,
                        t + 2
                    }
                    ,
                    a.prototype.writeUInt16BE = function(e, t, i) {
                        return e *= 1,
                        t >>>= 0,
                        i || w(this, e, t, 2, 65535, 0),
                        this[t] = e >>> 8,
                        this[t + 1] = 255 & e,
                        t + 2
                    }
                    ,
                    a.prototype.writeUInt32LE = function(e, t, i) {
                        return e *= 1,
                        t >>>= 0,
                        i || w(this, e, t, 4, 0xffffffff, 0),
                        this[t + 3] = e >>> 24,
                        this[t + 2] = e >>> 16,
                        this[t + 1] = e >>> 8,
                        this[t] = 255 & e,
                        t + 4
                    }
                    ,
                    a.prototype.writeUInt32BE = function(e, t, i) {
                        return e *= 1,
                        t >>>= 0,
                        i || w(this, e, t, 4, 0xffffffff, 0),
                        this[t] = e >>> 24,
                        this[t + 1] = e >>> 16,
                        this[t + 2] = e >>> 8,
                        this[t + 3] = 255 & e,
                        t + 4
                    }
                    ,
                    a.prototype.writeIntLE = function(e, t, i, r) {
                        if (e *= 1,
                        t >>>= 0,
                        !r) {
                            var n = Math.pow(2, 8 * i - 1);
                            w(this, e, t, i, n - 1, -n)
                        }
                        var o = 0
                          , s = 1
                          , a = 0;
                        for (this[t] = 255 & e; ++o < i && (s *= 256); )
                            e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                            this[t + o] = (e / s | 0) - a & 255;
                        return t + i
                    }
                    ,
                    a.prototype.writeIntBE = function(e, t, i, r) {
                        if (e *= 1,
                        t >>>= 0,
                        !r) {
                            var n = Math.pow(2, 8 * i - 1);
                            w(this, e, t, i, n - 1, -n)
                        }
                        var o = i - 1
                          , s = 1
                          , a = 0;
                        for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
                            e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                            this[t + o] = (e / s | 0) - a & 255;
                        return t + i
                    }
                    ,
                    a.prototype.writeInt8 = function(e, t, i) {
                        return e *= 1,
                        t >>>= 0,
                        i || w(this, e, t, 1, 127, -128),
                        e < 0 && (e = 255 + e + 1),
                        this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    a.prototype.writeInt16LE = function(e, t, i) {
                        return e *= 1,
                        t >>>= 0,
                        i || w(this, e, t, 2, 32767, -32768),
                        this[t] = 255 & e,
                        this[t + 1] = e >>> 8,
                        t + 2
                    }
                    ,
                    a.prototype.writeInt16BE = function(e, t, i) {
                        return e *= 1,
                        t >>>= 0,
                        i || w(this, e, t, 2, 32767, -32768),
                        this[t] = e >>> 8,
                        this[t + 1] = 255 & e,
                        t + 2
                    }
                    ,
                    a.prototype.writeInt32LE = function(e, t, i) {
                        return e *= 1,
                        t >>>= 0,
                        i || w(this, e, t, 4, 0x7fffffff, -0x80000000),
                        this[t] = 255 & e,
                        this[t + 1] = e >>> 8,
                        this[t + 2] = e >>> 16,
                        this[t + 3] = e >>> 24,
                        t + 4
                    }
                    ,
                    a.prototype.writeInt32BE = function(e, t, i) {
                        return e *= 1,
                        t >>>= 0,
                        i || w(this, e, t, 4, 0x7fffffff, -0x80000000),
                        e < 0 && (e = 0xffffffff + e + 1),
                        this[t] = e >>> 24,
                        this[t + 1] = e >>> 16,
                        this[t + 2] = e >>> 8,
                        this[t + 3] = 255 & e,
                        t + 4
                    }
                    ,
                    a.prototype.writeFloatLE = function(e, t, i) {
                        return _(this, e, t, !0, i)
                    }
                    ,
                    a.prototype.writeFloatBE = function(e, t, i) {
                        return _(this, e, t, !1, i)
                    }
                    ,
                    a.prototype.writeDoubleLE = function(e, t, i) {
                        return S(this, e, t, !0, i)
                    }
                    ,
                    a.prototype.writeDoubleBE = function(e, t, i) {
                        return S(this, e, t, !1, i)
                    }
                    ,
                    a.prototype.copy = function(e, t, i, r) {
                        if (!a.isBuffer(e))
                            throw TypeError("argument should be a Buffer");
                        if (i || (i = 0),
                        r || 0 === r || (r = this.length),
                        t >= e.length && (t = e.length),
                        t || (t = 0),
                        r > 0 && r < i && (r = i),
                        r === i || 0 === e.length || 0 === this.length)
                            return 0;
                        if (t < 0)
                            throw RangeError("targetStart out of bounds");
                        if (i < 0 || i >= this.length)
                            throw RangeError("Index out of range");
                        if (r < 0)
                            throw RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length),
                        e.length - t < r - i && (r = e.length - t + i);
                        var n = r - i;
                        if (this === e && "function" == typeof Uint8Array.prototype.copyWithin)
                            this.copyWithin(t, i, r);
                        else if (this === e && i < t && t < r)
                            for (var o = n - 1; o >= 0; --o)
                                e[o + t] = this[o + i];
                        else
                            Uint8Array.prototype.set.call(e, this.subarray(i, r), t);
                        return n
                    }
                    ,
                    a.prototype.fill = function(e, t, i, r) {
                        if ("string" == typeof e) {
                            if ("string" == typeof t ? (r = t,
                            t = 0,
                            i = this.length) : "string" == typeof i && (r = i,
                            i = this.length),
                            void 0 !== r && "string" != typeof r)
                                throw TypeError("encoding must be a string");
                            if ("string" == typeof r && !a.isEncoding(r))
                                throw TypeError("Unknown encoding: " + r);
                            if (1 === e.length) {
                                var n, o = e.charCodeAt(0);
                                ("utf8" === r && o < 128 || "latin1" === r) && (e = o)
                            }
                        } else
                            "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                        if (t < 0 || this.length < t || this.length < i)
                            throw RangeError("Out of range index");
                        if (i <= t)
                            return this;
                        if (t >>>= 0,
                        i = void 0 === i ? this.length : i >>> 0,
                        e || (e = 0),
                        "number" == typeof e)
                            for (n = t; n < i; ++n)
                                this[n] = e;
                        else {
                            var s = a.isBuffer(e) ? e : a.from(e, r)
                              , l = s.length;
                            if (0 === l)
                                throw TypeError('The value "' + e + '" is invalid for argument "value"');
                            for (n = 0; n < i - t; ++n)
                                this[n + t] = s[n % l]
                        }
                        return this
                    }
                    ;
                    var L = /[^+/0-9A-Za-z-_]/g;
                    function R(e, t) {
                        t = t || 1 / 0;
                        for (var i, r = e.length, n = null, o = [], s = 0; s < r; ++s) {
                            if ((i = e.charCodeAt(s)) > 55295 && i < 57344) {
                                if (!n) {
                                    if (i > 56319 || s + 1 === r) {
                                        (t -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    n = i;
                                    continue
                                }
                                if (i < 56320) {
                                    (t -= 3) > -1 && o.push(239, 191, 189),
                                    n = i;
                                    continue
                                }
                                i = (n - 55296 << 10 | i - 56320) + 65536
                            } else
                                n && (t -= 3) > -1 && o.push(239, 191, 189);
                            if (n = null,
                            i < 128) {
                                if ((t -= 1) < 0)
                                    break;
                                o.push(i)
                            } else if (i < 2048) {
                                if ((t -= 2) < 0)
                                    break;
                                o.push(i >> 6 | 192, 63 & i | 128)
                            } else if (i < 65536) {
                                if ((t -= 3) < 0)
                                    break;
                                o.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                            } else if (i < 1114112) {
                                if ((t -= 4) < 0)
                                    break;
                                o.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                            } else
                                throw Error("Invalid code point")
                        }
                        return o
                    }
                    function E(e) {
                        for (var t = [], i = 0; i < e.length; ++i)
                            t.push(255 & e.charCodeAt(i));
                        return t
                    }
                    function C(e) {
                        return r.toByteArray(function(e) {
                            if ((e = (e = e.split("=")[0]).trim().replace(L, "")).length < 2)
                                return "";
                            for (; e.length % 4 != 0; )
                                e += "=";
                            return e
                        }(e))
                    }
                    function T(e, t, i, r) {
                        for (var n = 0; n < r && !(n + i >= t.length) && !(n >= e.length); ++n)
                            t[n + i] = e[n];
                        return n
                    }
                    function A(e, t) {
                        return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                    }
                    var O = function() {
                        for (var e = "0123456789abcdef", t = Array(256), i = 0; i < 16; ++i)
                            for (var r = 16 * i, n = 0; n < 16; ++n)
                                t[r + n] = e[i] + e[n];
                        return t
                    }()
                },
                783: function(e, t) {
                    t.read = function(e, t, i, r, n) {
                        var o, s, a = 8 * n - r - 1, l = (1 << a) - 1, h = l >> 1, c = -7, u = i ? n - 1 : 0, d = i ? -1 : 1, f = e[t + u];
                        for (u += d,
                        o = f & (1 << -c) - 1,
                        f >>= -c,
                        c += a; c > 0; o = 256 * o + e[t + u],
                        u += d,
                        c -= 8)
                            ;
                        for (s = o & (1 << -c) - 1,
                        o >>= -c,
                        c += r; c > 0; s = 256 * s + e[t + u],
                        u += d,
                        c -= 8)
                            ;
                        if (0 === o)
                            o = 1 - h;
                        else {
                            if (o === l)
                                return s ? NaN : 1 / 0 * (f ? -1 : 1);
                            s += Math.pow(2, r),
                            o -= h
                        }
                        return (f ? -1 : 1) * s * Math.pow(2, o - r)
                    }
                    ,
                    t.write = function(e, t, i, r, n, o) {
                        var s, a, l, h = 8 * o - n - 1, c = (1 << h) - 1, u = c >> 1, d = 5960464477539062e-23 * (23 === n), f = r ? 0 : o - 1, p = r ? 1 : -1, m = +(t < 0 || 0 === t && 1 / t < 0);
                        for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = +!!isNaN(t),
                        s = c) : (s = Math.floor(Math.log(t) / Math.LN2),
                        t * (l = Math.pow(2, -s)) < 1 && (s--,
                        l *= 2),
                        s + u >= 1 ? t += d / l : t += d * Math.pow(2, 1 - u),
                        t * l >= 2 && (s++,
                        l /= 2),
                        s + u >= c ? (a = 0,
                        s = c) : s + u >= 1 ? (a = (t * l - 1) * Math.pow(2, n),
                        s += u) : (a = t * Math.pow(2, u - 1) * Math.pow(2, n),
                        s = 0)); n >= 8; e[i + f] = 255 & a,
                        f += p,
                        a /= 256,
                        n -= 8)
                            ;
                        for (s = s << n | a,
                        h += n; h > 0; e[i + f] = 255 & s,
                        f += p,
                        s /= 256,
                        h -= 8)
                            ;
                        e[i + f - p] |= 128 * m
                    }
                }
            }
              , i = {};
            function r(e) {
                var n = i[e];
                if (void 0 !== n)
                    return n.exports;
                var o = i[e] = {
                    exports: {}
                }
                  , s = !0;
                try {
                    t[e](o, o.exports, r),
                    s = !1
                } finally {
                    s && delete i[e]
                }
                return o.exports
            }
            r.ab = "//",
            e.exports = r(72)
        }()
    }
    ,
    8230: (e, t, i) => {
        e.exports = i(1639)
    }
    ,
    8572: () => {}
    ,
    8940: (e, t, i) => {
        "use strict";
        function r(e, t, i, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        i(7810),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    9099: (e, t, i) => {
        e.exports = i(8253)
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [593, 792], () => (t(6556),
    t(8253))),
    _N_E = e.O()
}
]);
