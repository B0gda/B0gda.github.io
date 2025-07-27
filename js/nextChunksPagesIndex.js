(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[332], {
    2936: (e, t, s) => {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return s(6730)
        }
        ])
    }
    ,
    6730: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            __N_SSG: () => g,
            default: () => d
        });
        var i = s(7876)
          , l = s(4232)
          , n = s(9099)
          , o = s(7328)
          , a = s.n(o)
          , h = s(3718)
          , r = s(897);
        s(8230),
        s(5177);
        var c = s(200)
          , u = s(1922);
        class p extends l.Component {
            componentDidMount() {
                let e = [];
                for (let t = 0; t < 3e3; t++)
                    e[t] = -1;
                this.setState({
                    startAnimationOffset: e,
                    randCells: this.setRandCells()
                });
                let t = this.context.openTabs;
                !1 !== t[0].scrollPos && !1 !== t[0].maxScrollPos && !1 !== t[0].maxChar ? (this.setState({
                    scrollPos: t[0].scrollPos,
                    maxScrollPos: t[0].maxScrollPos,
                    prevMaxScrollPos: t[0].maxScrollPos,
                    maxChar: t[0].maxChar,
                    randCells: t[0].randCells,
                    coverTransition: !0
                }),
                setTimeout( () => {
                    this.doReadyCheck()
                }
                , 0),
                setTimeout( () => {
                    this.containerRef && (this.containerRef.scrollTo(0, t[0].scrollPos),
                    this.doScroll(!0),
                    this.containerRef.addEventListener("scroll", this.doScroll),
                    this.setState({
                        smoothScroll: !0
                    }))
                }
                , 40)) : (setTimeout( () => {
                    this.doReadyCheck()
                }
                , 0),
                setTimeout( () => {
                    this.containerRef && (this.containerRef.scrollTo(0, 0),
                    this.containerRef.addEventListener("scroll", this.doScroll),
                    this.setState({
                        smoothScroll: !0
                    }))
                }
                , 50))
            }
            componentWillUnmount() {
                this.timerID && clearTimeout(this.timerID),
                this.failSafeTimer && clearTimeout(this.failSafeTimer);
                let e = this.context.openTabs;
                e[0].scrollPos = this.state.scrollPos,
                e[0].maxScrollPos = this.state.maxScrollPos,
                e[0].maxChar = this.state.maxChar,
                e[0].randCells = this.state.randCells,
                this.context.dimensions.screenMobile ? this.context.setTabsMobile(e) : this.context.setTabs(e)
            }
            componentDidUpdate() {
                this.doLayout()
            }
            doReadyCheck() {
                this.context.dimensions.dimensionsCalculated && !1 === this.state.layoutReady ? (document.documentElement.classList.add("state-site-loaded"),
                setTimeout( () => {
                    this.context.setSiteLoaded(),
                    this.doScroll(),
                    this.doLayout(),
                    this.timerID = setInterval( () => {
                        !1 === this.state.pauseRender && (this.state.pauseCurLoop < this.state.pauseMaxCheckLoops ? this.setState({
                            maxChar: this.state.maxChar + this.context.dimensions.charsPerFrame,
                            pauseCurLoop: this.state.pauseCurLoop + 1
                        }) : this.setState({
                            pauseRender: !0
                        }))
                    }
                    , 40),
                    this.failSafeTimer = setInterval( () => {
                        this.containerRef && this.containerRef.addEventListener("scroll", this.doScroll)
                    }
                    , 2e3)
                }
                , 500),
                this.setState({
                    layoutReady: !0
                })) : setTimeout( () => {
                    this.doReadyCheck()
                }
                , 40)
            }
            doScroll(e) {
                if (this.containerRef) {
                    let t = this.context.dimensions
                      , s = Math.round(this.containerRef.scrollTop / t.monoLineHeight) * t.monoLineHeight;
                    s > this.state.containerHeight - 1.25 * t.contentHeight && 0 !== this.state.containerHeight && (s += 1.5 * t.screenHeight);
                    let i = Math.ceil((t.contentHeight + t.monoLineHeight + s) / t.monoLineHeight);
                    if (s > this.state.maxScrollPos || !0 === e || i > this.state.linesUsed) {
                        let t = this.state.startAnimationOffset;
                        for (let s = 0; s < i; s++)
                            -1 === t[s] && (!0 === e ? t[s] = 0 : t[s] = this.state.maxChar + Math.floor(100 * Math.random()));
                        let l = this.state.maxScrollPos;
                        l < s && (l = s),
                        this.setState({
                            maxChar: this.state.maxChar + 8,
                            scrollPos: s,
                            maxScrollPos: l,
                            startAnimationOffset: t,
                            pauseRender: !1,
                            pauseCurLoop: 0,
                            linesUsed: i
                        })
                    } else
                        s !== this.state.scrollPos && this.setState({
                            scrollPos: s
                        })
                }
            }
            setRandCells() {
                let e = [];
                for (let t = 0; t < 5e3; t++) {
                    let s = Math.floor(20 * Math.random());
                    1 === s ? e[t] = "dash" : 2 === s ? e[t] = "star" : 3 === s ? e[t] = "slash" : 4 === s ? e[t] = "plus" : s >= 20 - Math.floor(6) && 0 !== t && "space" != e[t - 1] ? e[t] = e[t - 1] : e[t] = "space"
                }
                return e
            }
            getMediumBlockHeight(e, t) {
                let s = this.context.dimensions;
                return s.mediumFontSize * e + (s.mediumLineHeight - s.mediumFontSize) * (e - 1) + (s.mediumFontSpace - (s.mediumLineHeight - s.mediumFontSize)) * t
            }
            clearRandCellsMediumBlock(e, t, s, i, l) {
                let n = this.context.dimensions
                  , o = t - (n.mediumLineHeight - n.mediumFontSize)
                  , a = t + l + (n.mediumLineHeight - n.mediumFontSize) * 1
                  , h = Math.round(s / n.asciiColWidth)
                  , r = h + Math.round(i / n.asciiColWidth)
                  , c = Math.floor(o / n.monoLineHeight)
                  , u = Math.floor(a / n.monoLineHeight);
                for (let t = c; t < u + 1; t++)
                    for (let s = h; s < r; s++)
                        t === c || t === u ? s === h ? e[t * n.numCols + s] = "single-baseline" : e[t * n.numCols + s] = "all-single-baseline" : s === h ? e[t * n.numCols + s] = "empty" : e[t * n.numCols + s] = "all-empty";
                return e
            }
            clearRandCellsLargeBlock(e, t, s, i, l) {
                let n = this.context.dimensions
                  , o = t - (n.largeLineHeight - n.largeFontSize)
                  , a = t + n.largeFontSize + .3 * n.largeFontSize
                  , h = Math.round(s / n.asciiColWidth)
                  , r = h + Math.round(i / n.asciiColWidth)
                  , c = Math.floor(o / n.monoLineHeight)
                  , u = Math.round(a / n.monoLineHeight);
                for (let t = c; t < u + 1; t++)
                    for (let s = 0; s < n.numCols; s++) {
                        let i = t * n.numCols + s;
                        s >= h && s < r && (s === h ? e[i] = "empty" : e[i] = "all-empty")
                    }
                return e
            }
            getBlankCell(e, t, s) {
                let i = this.state.randCellsLayout
                  , l = this.state.baselineIndex
                  , n = this.context.dimensions
                  , o = s * n.numCols
                  , a = [];
                if (a.push('<span role="presentation">'),
                -1 !== this.state.startAnimationOffset[s]) {
                    let h = this.state.maxChar - s - this.state.startAnimationOffset[s];
                    if (h > 0) {
                        let r = 0
                          , c = 1;
                        if (e && (c = e),
                        t && 0 !== n.remainingChars) {
                            let e = n.remainingChars;
                            e > h - r && (e = h - r),
                            e > 0 && (!0 === l[s] && "single-baseline" === i[o] ? a.push(n.singleBaseline[e]) : !0 === l[s] && "all-single-baseline" === i[o] ? a.push(n.allSingleBaseline[e]) : !0 === l[s] ? a.push(n.doubleBaseline[e]) : "single-baseline" === i[o] ? a.push(n.singleBaseline[e]) : "all-single-baseline" === i[o] ? a.push(n.allSingleBaseline[e]) : "star" === i[o] ? a.push(n.star[e]) : "dash" === i[o] ? a.push(n.dash[e]) : "slash" === i[o] ? a.push(n.slash[e]) : "plus" === i[o] ? a.push(n.plus[e]) : a.push(n.space[e]),
                            r += e)
                        }
                        if (0 !== c)
                            for (let e = 0; e < c; e++) {
                                let e = n.charsPerCol;
                                e > h - r && (e = h - r),
                                e > 0 && (!0 === l[s] && "single-baseline" === i[o] ? a.push(n.singleBaseline[e]) : !0 === l[s] && "all-single-baseline" === i[o] ? a.push(n.allSingleBaseline[e]) : !0 === l[s] && "empty" === i[o] ? a.push(n.singleBaseline[e]) : !0 === l[s] && "all-empty" === i[o] ? a.push(n.allSingleBaseline[e]) : !0 === l[s] ? a.push(n.doubleBaseline[e]) : "single-baseline" === i[o] ? a.push(n.singleBaseline[e]) : "all-single-baseline" === i[o] ? a.push(n.allSingleBaseline[e]) : "single-baseline" === i[o] ? a.push(n.singleBaseline[e]) : "all-single-baseline" === i[o] ? a.push(n.allSingleBaseline[e]) : "all-empty" === i[o] ? a.push(n.allEmpty[e]) : "empty" === i[o] ? a.push(n.empty[e]) : "star" === i[o] ? a.push(n.star[e]) : "dash" === i[o] ? a.push(n.dash[e]) : "slash" === i[o] ? a.push(n.slash[e]) : "plus" === i[o] ? a.push(n.plus[e]) : a.push(n.space[e]),
                                r += n.charsPerCol),
                                o++
                            }
                    }
                }
                return a.push("</span>"),
                a.join("")
            }
            getSingleLine(e, t, s, i, l, n) {
                return this.context.dimensions,
                this.getCell([[e, n, t, s]], !0, i, l, n, !1)
            }
            getCell(e, t, s, i, l, n) {
                let o = this.context.dimensions
                  , a = this.state.randCellsLayout
                  , h = this.state.baselineIndex
                  , r = s * o.numCols
                  , c = [];
                if (c.push('<span role="presentation">'),
                -1 !== this.state.startAnimationOffset[s]) {
                    let u = this.state.maxChar - s - this.state.startAnimationOffset[s];
                    if (u > 0) {
                        let p = 0
                          , m = 0;
                        if (e && e.length > 0 && (m = e.length),
                        t && 0 !== o.remainingChars) {
                            let e = o.remainingChars;
                            e > u - p && (e = u - p),
                            e > 0 && (!0 === h[s] && "single-baseline" === a[r] ? c.push(o.singleBaseline[e]) : !0 === h[s] && "all-single-baseline" === a[r] ? c.push(o.allSingleBaseline[e]) : !0 === h[s] ? c.push(o.doubleBaseline[e]) : "single-baseline" === a[r] ? c.push(o.singleBaseline[e]) : "all-single-baseline" === a[r] ? c.push(o.allSingleBaseline[e]) : "star" === a[r] ? c.push(o.star[e]) : "dash" === a[r] ? c.push(o.dash[e]) : "slash" === a[r] ? c.push(o.slash[e]) : "plus" === a[r] ? c.push(o.plus[e]) : c.push(o.space[e]),
                            p += e)
                        }
                        if (i)
                            for (let e = 0; e < i; e++) {
                                let t = o.charsPerCol;
                                e > 0 && t > u - p && (t = u - p),
                                t > 0 && (!0 === h[s] && "single-baseline" === a[r] ? c.push(o.singleBaseline[t]) : !0 === h[s] && "all-single-baseline" === a[r] ? c.push(o.allSingleBaseline[t]) : !0 === h[s] && "empty" === a[r] ? c.push(o.singleBaseline[t]) : !0 === h[s] && "all-empty" === a[r] ? c.push(o.allSingleBaseline[t]) : !0 === h[s] ? c.push(o.doubleBaseline[t]) : "empty" === a[r] ? c.push(o.empty[t]) : "single-baseline" === a[r] ? c.push(o.singleBaseline[t]) : "all-single-baseline" === a[r] ? c.push(o.allSingleBaseline[t]) : "star" === a[r] ? c.push(o.star[t]) : "dash" === a[r] ? c.push(o.dash[t]) : "slash" === a[r] ? c.push(o.slash[t]) : "plus" === a[r] ? c.push(o.plus[t]) : "all-empty" === a[r] ? c.push(o.allEmpty[t]) : c.push(o.space[t]),
                                p += o.charsPerCol),
                                r++
                            }
                        let g = !1;
                        if (0 !== m)
                            for (let t = 0; t < m; t++) {
                                let s = o.charsPerCol * parseInt(e[t][1]);
                                s > u - p && (s = u - p);
                                let i = e[t][0];
                                "all-empty" === a[r] || a[r],
                                i = "/ " + i;
                                for (let l = 0; l < s; l++)
                                    0 === l && c.push("</span>"),
                                    n && 0 === l && c.push('<span class="bg">'),
                                    !1 !== e[t][3] && 1 === l && c.push('<a href="' + e[t][3] + '" target="_blank">'),
                                    !0 === e[t][2] && 1 === l && c.push('<span style="font-weight:bold">'),
                                    !0 === e[t][2] && l === s - 1 && c.push("</span>"),
                                    !1 !== e[t][3] && l === s - 1 && c.push("</a>"),
                                    p < u && (i[l] ? "~" === i[l] && !1 === g ? (c.push('<span role="presentation">-'),
                                    g = !0) : "~" === i[l] ? c.push("-") : " " === i[l] ? c.push("&nbsp;") : c.push(i[l]) : c.push("&nbsp;")),
                                    p += 1;
                                !0 === g && (g = !1,
                                c.push("</span>")),
                                n && c.push("</span>"),
                                c.push('<span role="presentation">'),
                                r += parseInt(e[t][1])
                            }
                        if (l)
                            for (let e = 0; e < l; e++) {
                                let e = o.charsPerCol;
                                e > u - p && (e = u - p),
                                e > 0 && (!0 === h[s] && "single-baseline" === a[r] ? c.push(o.singleBaseline[e]) : !0 === h[s] && "all-single-baseline" === a[r] ? c.push(o.allSingleBaseline[e]) : !0 === h[s] && "empty" === a[r] ? c.push(o.singleBaseline[e]) : !0 === h[s] && "all-empty" === a[r] ? c.push(o.allSingleBaseline[e]) : !0 === h[s] ? c.push(o.doubleBaseline[e]) : "single-baseline" === a[r] ? c.push(o.singleBaseline[e]) : "all-single-baseline" === a[r] ? c.push(o.allSingleBaseline[e]) : "dash" === a[r] ? c.push(o.dash[e]) : "empty" === a[r] ? c.push(o.empty[e]) : "star" === a[r] ? c.push(o.star[e]) : "slash" === a[r] ? c.push(o.slash[e]) : "plus" === a[r] ? c.push(o.plus[e]) : "all-empty" === a[r] ? c.push(o.allEmpty[e]) : c.push(o.space[e]),
                                p += o.charsPerCol),
                                r++
                            }
                    }
                }
                return c.push("</span>"),
                c.join("")
            }
            doLayout() {
                let e = this.props.post
                  , t = this.context.dimensions;
                if (0 !== t.charsPerCol)
                    if (t.remainingChars !== this.state.remainingChars || t.numCols !== this.state.numCols || t.charsPerCol !== this.state.charsPerCol || t.charsPerLine !== this.state.charsPerLine) {
                        let s = []
                          , i = []
                          , l = Array.from(this.state.randCells)
                          , n = []
                          , o = 0
                          , a = Math.round((2 * t.monoLineHeight + t.mediumFontSize) / t.monoLineHeight)
                          , h = Math.round(t.mediumLineHeight / t.monoLineHeight);
                        for (let t = 0; t < e.title.length; t++)
                            n[a + h * t] = !0,
                            o += 1;
                        let r = this.getMediumBlockHeight(e.title.length, 0)
                          , c = t.asciiLayoutWidth
                          , u = a * t.monoLineHeight - t.mediumFontSize - t.sansOffset + t.monoLineHeight;
                        s[0] = u - t.contentHeight;
                        let p = Math.round((u + r + t.mediumLineHeight) / t.monoLineHeight);
                        l = !1 === t.contentMobile && !1 === t.contentTablet ? this.clearRandCellsMediumBlock(l, u, 0, t.asciiColWidth * e.title_desktop_columns, this.getMediumBlockHeight(e.title.length, 0)) : this.clearRandCellsMediumBlock(l, u, 0, t.asciiColWidth * e.title_mobile_columns, this.getMediumBlockHeight(e.title.length, 0));
                        let m = Math.floor((t.contentHeight - 2 * t.monoLineHeight) / t.monoLineHeight)
                          , g = m - Math.round(t.largeLineHeight * e.subtitle.length / t.monoLineHeight);
                        s[1] = g * t.monoLineHeight - t.contentHeight,
                        !0 === t.portrait && (g = g - Math.floor(t.largeSpace / t.monoLineHeight) + 1,
                        m = m - Math.floor(t.largeSpace / t.monoLineHeight) + 1),
                        g < p && (m = p + Math.round(t.largeLineHeight * e.subtitle.length / t.monoLineHeight));
                        let d = t.largeFontSize * e.subtitle.length + (t.largeLineHeight - t.largeFontSize) * (e.subtitle.length - 1)
                          , C = Math.round((m + 1) * t.monoLineHeight) - d - t.sansOffset
                          , L = Math.round(m - t.largeFontSize / t.monoLineHeight * (e.subtitle.length - 1));
                        for (let s = 0; s < e.subtitle.length; s++) {
                            let i = e.subtitle.length - 1 - s
                              , l = m - Math.round(t.largeLineHeight * i / t.monoLineHeight)
                              , o = l - Math.round(t.largeLineHeight * i / t.monoLineHeight);
                            n[l] = !0,
                            n[o] = !0,
                            0 === i && (n[l + Math.round(.3 * t.largeFontSize / t.monoLineHeight)] = !0)
                        }
                        let x = 0;
                        for (let s = 0; s < e.subtitle.length; s++) {
                            x = L + t.largeLineHeight / t.monoLineHeight * s;
                            let i = C + Math.round(t.largeLineHeight * s);
                            l = !1 === t.contentMobile && !1 === t.contentTablet ? this.clearRandCellsLargeBlock(l, i, t.asciiColWidth * (t.numCols - e.subtitle[s].desktop_columns), t.asciiColWidth * e.subtitle[s].desktop_columns) : this.clearRandCellsLargeBlock(l, i, t.asciiColWidth * (t.numCols - e.subtitle[s].mobile_columns), t.asciiColWidth * e.subtitle[s].mobile_columns),
                            o += 1
                        }
                        let S = x + Math.round((t.largeSpace + t.mediumFontSize) / t.monoLineHeight);
                        s[2] = S * t.monoLineHeight - Math.round(.9 * t.contentHeight),
                        n[S - Math.round(t.mediumLineHeight / t.monoLineHeight)] = !0,
                        n[S] = !0;
                        for (let t = 0; t < e.intro.length; t++)
                            n[S + h * t] = !0;
                        let f = S + h * e.intro.length + Math.round((t.mediumFontSpace - (t.mediumLineHeight - t.mediumFontSize)) / t.monoLineHeight);
                        n[f] = !0,
                        n[f - Math.round(t.mediumLineHeight / t.monoLineHeight)] = !0;
                        let H = S * t.monoLineHeight - t.mediumFontSize - t.sansOffset + t.monoLineHeight
                          , b = (t.numCols - 4) * t.asciiColWidth
                          , M = this.getMediumBlockHeight(e.intro.length, 0);
                        t.asciiColWidth,
                        t.numCols,
                        t.asciiColWidth,
                        t.numCols,
                        t.mediumFontSize;
                        let y = {
                            top: H + "px",
                            right: b + "px",
                            left: "0px",
                            height: M + "px"
                        }
                          , B = f * t.monoLineHeight - t.mediumFontSize - t.sansOffset + t.monoLineHeight
                          , k = this.getMediumBlockHeight(1, 0)
                          , j = Math.round((B - t.monoLineHeight) / t.monoLineHeight) * t.monoLineHeight
                          , P = Math.ceil((k + t.monoLineHeight + t.monoLineHeight) / t.monoLineHeight) * t.monoLineHeight
                          , _ = [];
                        _.url = "#profile",
                        _.height = P,
                        _.top = j,
                        _.previewTop = j,
                        _.preview = 0,
                        _.title = "View profile",
                        i.push(_),
                        n[Math.round((B + k) / t.monoLineHeight)] = !0,
                        M = this.getMediumBlockHeight(e.intro.length + 1, 1),
                        !0 == t.contentMobile ? l = this.clearRandCellsMediumBlock(l, H, 0, 4 * t.asciiColWidth, M) : (t.contentTablet,
                        l = this.clearRandCellsMediumBlock(l, H, +t.asciiColWidth, 3 * t.asciiColWidth, M));
                        let T = f * t.monoLineHeight + t.largeSpace
                          , v = Math.round(T / t.monoLineHeight)
                          , R = (2 * e.dev_skills.length + 5) * t.monoLineHeight - t.monoLineHeight;
                        !0 === t.contentMobile && (R = (2 * e.dev_skills.length + 9) * t.monoLineHeight);
                        let I = Math.round(Math.round((T + R) / t.monoLineHeight) * t.monoLineHeight / t.monoLineHeight)
                          , F = Math.round((T + 4 * t.monoLineHeight) / t.monoLineHeight);
                        t.contentMobile && (F = Math.round((T + 2 * t.monoLineHeight) / t.monoLineHeight)),
                        n[F] = !0,
                        n[F - Math.round(t.largeLineHeight / t.monoLineHeight)] = !0,
                        n[F + Math.round(.3 * t.largeFontSize / t.monoLineHeight)] = !0,
                        s[3] = F * t.monoLineHeight - Math.round(.9 * t.contentHeight);
                        let E = +t.largeFontSize
                          , z = Math.round(t.asciiColWidth * t.numCols)
                          , W = Math.round(F * t.monoLineHeight) - t.largeFontSize + t.sansOffset
                          , D = {
                            top: W + "px",
                            right: 0,
                            height: E + "px",
                            width: z + "px"
                        };
                        !0 == t.contentMobile || t.contentTablet,
                        l = this.clearRandCellsLargeBlock(l, W, 0, 4 * t.asciiColWidth);
                        let N = Math.round(I * t.monoLineHeight + t.largeSpace) - t.monoLineHeight
                          , w = Math.round(N / t.monoLineHeight)
                          , O = w + 2 * e.projects.length + 5;
                        !0 === t.contentMobile && (O = w + 5 * e.projects.length + 3);
                        for (let s = 0; s < e.projects.length; s++) {
                            let l = []
                              , n = w + 3 + 5 * s;
                            !0 === t.contentMobile ? (l.url = e.projects[s].url,
                            l.height = 6 * t.monoLineHeight,
                            l.top = n * t.monoLineHeight - t.monoLineHeight,
                            l.previewTop = l.top + 3 * t.monoLineHeight) : (n = w + 6 + 2 * s,
                            l.url = e.projects[s].url,
                            l.height = 3 * t.monoLineHeight,
                            l.top = n * t.monoLineHeight - t.monoLineHeight,
                            l.previewTop = l.top + Math.round(1.5 * t.monoLineHeight)),
                            l.preview =  1,
                            l.title = "View " + e.projects[s].title,
                            i.push(l)
                        }
                        let A = Math.round((N + 5 * t.monoLineHeight) / t.monoLineHeight);
                        t.contentMobile && (A = Math.round((N + 3 * t.monoLineHeight) / t.monoLineHeight)),
                        n[A] = !0,
                        n[A - Math.round(t.largeLineHeight / t.monoLineHeight)] = !0,
                        n[A + Math.round(.3 * t.largeFontSize / t.monoLineHeight)] = !0,
                        s[4] = A * t.monoLineHeight - Math.round(.9 * t.contentHeight);
                        let U = +t.largeFontSize
                          , G = Math.round(t.asciiColWidth * t.numCols)
                          , V = Math.round(A * t.monoLineHeight) - t.largeFontSize + t.sansOffset;
                        !1 === t.contentMobile && !1 === t.contentTablet && (G = Math.round(t.asciiColWidth * (t.numCols - 1)));
                        let J = {
                            top: V + "px",
                            right: 0,
                            height: U + "px",
                            width: G + "px"
                        };
                        n[A] = !0,
                        l = !0 == t.contentMobile || !0 == t.contentTablet ? this.clearRandCellsLargeBlock(l, V, 0, 5 * t.asciiColWidth) : this.clearRandCellsLargeBlock(l, V, +t.asciiColWidth, 5 * t.asciiColWidth);
                        let K = O + Math.round((t.largeSpace + t.mediumFontSize) / t.monoLineHeight);
                        s[5] = K * t.monoLineHeight - Math.round(.9 * t.contentHeight),
                        n[K - Math.round(t.mediumLineHeight / t.monoLineHeight)] = !0,
                        n[K] = !0;
                        for (let t = 0; t < e.contact_top.length; t++)
                            n[K + h * t] = !0;
                        let X = K + h * e.contact_top.length + Math.round((t.mediumFontSpace - (t.mediumLineHeight - t.mediumFontSize)) / t.monoLineHeight);
                        n[X - Math.round(t.mediumLineHeight / t.monoLineHeight)] = !0;
                        for (let t = 0; t < e.contact_bottom.length; t++)
                            n[X + h * t] = !0;
                        let q = X + h * e.contact_bottom.length + Math.round((t.mediumFontSpace - (t.mediumLineHeight - t.mediumFontSize)) / t.monoLineHeight);
                        n[q] = !0,
                        n[q - Math.round(t.mediumLineHeight / t.monoLineHeight)] = !0;
                        let Q = K * t.monoLineHeight - t.mediumFontSize - t.sansOffset + t.monoLineHeight
                          , Y = {
                            top: Q + "px",
                            right: "0px",
                            height: this.getMediumBlockHeight(e.contact_top.length, 0) + "px",
                            width: 4 * t.asciiColWidth + "px"
                        }
                          , Z = {
                            top: X * t.monoLineHeight - t.mediumFontSize - t.sansOffset + t.monoLineHeight + "px",
                            right: "0px",
                            height: this.getMediumBlockHeight(e.contact_bottom.length, 0) + "px",
                            width: 4 * t.asciiColWidth + "px"
                        }
                          , $ = q * t.monoLineHeight - t.mediumFontSize - t.sansOffset + t.monoLineHeight
                          , ee = this.getMediumBlockHeight(1, 0)
                          , et = {
                            top: $ + "px",
                            right: "0px",
                            height: ee + "px",
                            width: 4 * t.asciiColWidth + "px"
                        }
                          , es = Math.round(($ - t.monoLineHeight) / t.monoLineHeight) * t.monoLineHeight
                          , ei = Math.ceil((ee + t.monoLineHeight + t.monoLineHeight) / t.monoLineHeight) * t.monoLineHeight
                          , el = [];
                        el.url = "#contact",
                        el.height = ei,
                        el.top = es,
                        el.previewTop = es,
                        el.preview = 0,
                        el.title = "Contact me",
                        i.push(el),
                        n[Math.round(($ + ee) / t.monoLineHeight)] = !0,
                        this.getMediumBlockHeight(e.contact_top.length + e.contact_bottom.length + 1, 1),
                        l = !0 == t.contentMobile ? this.clearRandCellsMediumBlock(l, Q, .9 * t.asciiColWidth, 4 * t.asciiColWidth, this.getMediumBlockHeight(e.contact_top.length + e.contact_bottom.length + 1, 2)) : !0 == t.contentTablet ? this.clearRandCellsMediumBlock(l, Q, .9 * t.asciiColWidth, 3 * t.asciiColWidth, this.getMediumBlockHeight(e.contact_top.length + e.contact_bottom.length + 1, 2)) : this.clearRandCellsMediumBlock(l, Q, 1.9 * t.asciiColWidth, 3 * t.asciiColWidth, this.getMediumBlockHeight(e.contact_top.length + e.contact_bottom.length + 1, 2));
                        let en = Math.round(($ + ee + t.largeSpace) / t.monoLineHeight)
                          , eo = [];
                        for (let e = 1; e < en + 1; e++)
                            1 !== e ? eo.push("<br />" + e) : eo.push(e);
                        this.setState({
                            screenWidth: t.screenWidth,
                            screenHeight: t.screenHeight,
                            contentWidth: t.contentWidth,
                            contentHeight: t.contentHeight,
                            remainingChars: t.remainingChars,
                            numCols: t.numCols,
                            charsPerCol: t.charsPerCol,
                            charsPerLine: t.charsPerLine,
                            baselineIndex: n,
                            randCellsLayout: l,
                            lineNums: eo,
                            titleStyle: {
                                top: u + "px",
                                left: "100%",
                                height: r + "px",
                                marginLeft: 0 - c + "px"
                            },
                            subtitleStyle: {
                                top: C + "px",
                                right: 0,
                                height: d + "px"
                            },
                            introStyle: y,
                            introButtonStyle: {
                                top: B + "px",
                                right: b + "px",
                                left: "0px",
                                height: k + "px"
                            },
                            skillsStartIndex: v,
                            skillStyle: D,
                            skillsEndIndex: I,
                            skillStyle: D,
                            projectStartIndex: w,
                            projectEndIndex: O,
                            proStyle: J,
                            contactTopStyle: Y,
                            contactBottomStyle: Z,
                            contactButtonStyle: et,
                            pauseCurLoop: 0,
                            pauseRender: !1,
                            lastLineIndex: en,
                            linkElements: i,
                            sansTypeLoad: s
                        })
                    } else {
                        let s = []
                          , i = 0;
                        for (let e = 0; e < this.state.skillsStartIndex; e++)
                            s.push(this.getBlankCell(t.numCols, !0, i)),
                            s.push("<br />"),
                            i++;
                        if (!0 === t.contentMobile) {
                            s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, 1, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([["PROFESSIONAL SKILLS", 4, !0, !1]], !0, i, 1, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, 1, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([["DEVELOPMENT", 2, !1, !1], ["QA SKILLS", 2, !1, !1]], !0, i, 1, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([[t.allSingleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, 1, 0, !0)),
                            s.push("<br />"),
                            i++;
                            for (let l = 0; l < e.dev_skills.length; l++)
                                s.push(this.getCell([[e.dev_skills[l], 2, !1, !1], [e.qa_skills[l], 2, !1, !1]], !0, i, 1, 0, !0)),
                                l === e.dev_skills.length - 1 && (s.push("<br />"),
                                i++,
                                s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, 1, 0, !0))),
                                s.push("<br />"),
                                i++;
                            s.push(this.getCell([["DESIGN", 2, !1, !1], ["ADMIN", 2, !1, !1]], !0, i, 1, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([[t.allSingleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, 1, 0, !0)),
                            s.push("<br />"),
                            i++;
                            for (let l = 0; l < e.dev_skills.length; l++)
                                s.push(this.getCell([[e.des_skills[l], 2, !1, !1], [e.adm_skills[l], 2, !1, !1]], !0, i, 1, 0, !0)),
                                l === e.dev_skills.length - 1 && (s.push("<br />"),
                                i++,
                                s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, 1, 0, !0))),
                                s.push("<br />"),
                                i++
                        } else if (!1 === t.contentMobile) {
                            s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([["PROFESSIONAL SKILLS", 4, !0, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([["DEVELOPMENT", 1, !1, !1], ["QA SKILLS", 1, !1, !1], ["DESIGN", 1, !1, !1], ["ADMIN", 1, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([[t.allSingleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++;
                            for (let l = 0; l < e.dev_skills.length; l++)
                                s.push(this.getCell([[e.dev_skills[l], 1, !1, !1], [e.qa_skills[l], 1, !1, !1], [e.des_skills[l], 1, !1, !1], [e.adm_skills[l], 1, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                                s.push("<br />"),
                                i++,
                                l === e.dev_skills.length - 1 ? s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)) : s.push(this.getCell([[t.allSingleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                                s.push("<br />"),
                                i++
                        }
                        for (let e = 0; e < this.state.projectStartIndex - this.state.skillsEndIndex; e++)
                            s.push(this.getBlankCell(t.numCols, !0, i)),
                            s.push("<br />"),
                            i++;
                        if (!0 === t.contentMobile) {
                            s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([["SELECTED Game-PROJECTS", 4, !0, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++;
                            for (let l = 0; l < e.projects.length; l++)
                                s.push(this.getCell([["→ " + e.projects[l].title, 4, !1, e.projects[l].url]], !0, i, t.numCols - 4, 0, !0)),
                                s.push("<br />"),
                                i++,
                                s.push(this.getCell([["  Design by " + e.projects[l].agency, 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                                s.push("<br />"),
                                i++,
                                s.push(this.getCell([["  Built on " + e.projects[l].platform, 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                                s.push("<br />"),
                                i++,
                                s.push(this.getCell([["  Built with " + e.projects[l].tech, 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                                s.push("<br />"),
                                i++,
                                l === e.projects.length - 1 ? s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)) : s.push(this.getCell([[t.allSingleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                                s.push("<br />"),
                                i++
                        } else if (!1 === t.contentMobile) {
                            s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([["SELECTED Game-PROJECTS", 4, !0, !1]], !0, i, t.numCols - 4, !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([["WEBSITE", 1, !1, !1], ["DESCRIPTION", 1, !1, !1], ["TESTS", 1, !1, !1], ["TECH", 1, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++,
                            s.push(this.getCell([[t.allSingleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                            s.push("<br />"),
                            i++;
                            for (let l = 0; l < e.projects.length; l++)
                                s.push(this.getCell([["→ " + e.projects[l].title, 1, !0, "/project/the-gallery"], [e.projects[l].agency, 1, !1, !1], [e.projects[l].platform, 1, !1, !1], [e.projects[l].tech, 1, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                                s.push("<br />"),
                                i++,
                                l === e.projects.length - 1 ? s.push(this.getCell([[t.allDoubleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)) : s.push(this.getCell([[t.allSingleBaseline[4 * t.charsPerCol], 4, !1, !1]], !0, i, t.numCols - 4, 0, !0)),
                                s.push("<br />"),
                                i++
                        }
                        for (let e = 0; e < this.state.lastLineIndex - this.state.projectEndIndex; e++)
                            s.push(this.getBlankCell(t.numCols, !0, i)),
                            s.push("<br />"),
                            i++;
                        s.join("") !== this.state.asciiBgHTML.join("") && this.containerInnerRef && this.setState({
                            asciiBgHTML: s,
                            pauseCurLoop: 0,
                            pauseRender: !1,
                            containerHeight: this.containerInnerRef.clientHeight,
                            cover: !1
                        })
                    }
            }
            render() {
                let e = this.props.post
                  , t = this.context.dimensions;
                return (0,
                i.jsx)(i.Fragment, {
                    children: this.state.layoutReady && (0,
                    i.jsx)("div", {
                        className: "c-page " + (this.state.smoothScroll ? "state-smooth" : ""),
                        ref: e => this.containerRef = e,
                        children: (0,
                        i.jsx)("div", {
                            className: "c-page__inner",
                            ref: e => this.containerInnerRef = e,
                            children: 0 !== this.state.contentWidth && (0,
                            i.jsxs)(i.Fragment, {
                                children: [(0,
                                i.jsx)("div", {
                                    className: "c-page__lines-column",
                                    dangerouslySetInnerHTML: {
                                        __html: '<p class="c-mono-type c-mono-type--line-nums">' + this.state.lineNums.join("") + "</p>"
                                    }
                                }), (0,
                                i.jsx)("div", {
                                    className: "c-page__content-column",
                                    children: (0,
                                    i.jsxs)("div", {
                                        className: "c-page__background",
                                        style: {
                                            width: t.totalAsciiLayoutWidth + "px"
                                        },
                                        children: [(0,
                                        i.jsx)("h1", {
                                            className: "c-sans c-sans--color-2",
                                            style: this.state.titleStyle,
                                            children: (0,
                                            i.jsx)(c.A, {
                                                text: e.title,
                                                lineStyle: t.mediumLineStyle,
                                                load: this.state.maxScrollPos > this.state.sansTypeLoad[0],
                                                forceLoad: this.state.prevMaxScrollPos > this.state.sansTypeLoad[0],
                                                elID: "home-title"
                                            })
                                        }), (0,
                                        i.jsx)("h2", {
                                            className: "c-sans c-sans--large c-sans--right c-sans--color-2",
                                            style: this.state.subtitleStyle,
                                            children: (0,
                                            i.jsx)(c.A, {
                                                text: e.subtitle,
                                                lineStyle: t.largeLineStyle,
                                                load: this.state.maxScrollPos > this.state.sansTypeLoad[1],
                                                forceLoad: this.state.prevMaxScrollPos > this.state.sansTypeLoad[1],
                                                elID: "home-subtitle"
                                            })
                                        }), (0,
                                        i.jsx)("p", {
                                            className: "c-sans c-sans--right c-sans--color-2",
                                            style: this.state.introStyle,
                                            children: (0,
                                            i.jsx)(c.A, {
                                                text: e.intro,
                                                lineStyle: t.mediumLineStyle,
                                                load: this.state.maxScrollPos > this.state.sansTypeLoad[2],
                                                forceLoad: this.state.prevMaxScrollPos > this.state.sansTypeLoad[2],
                                                elID: "home-intro"
                                            })
                                        }), (0,
                                        i.jsx)("p", {
                                            className: "c-sans c-sans--right c-sans--color-2",
                                            style: this.state.introButtonStyle,
                                            children: (0,
                                            i.jsx)(c.A, {
                                                text: e.intro_button,
                                                lineStyle: t.mediumLineStyle,
                                                load: this.state.maxScrollPos > this.state.sansTypeLoad[2],
                                                forceLoad: this.state.prevMaxScrollPos > this.state.sansTypeLoad[2],
                                                elID: "home-intro-button"
                                            })
                                        }), (0,
                                        i.jsx)("div", {
                                            className: "c-ascii",
                                            dangerouslySetInnerHTML: {
                                                __html: this.state.asciiBgHTML.join("")
                                            }
                                        }), (0,
                                        i.jsx)("p", {
                                            className: "c-sans c-sans--color-2",
                                            style: this.state.contactTopStyle,
                                            children: (0,
                                            i.jsx)(c.A, {
                                                text: e.contact_top,
                                                lineStyle: t.mediumLineStyle,
                                                load: this.state.maxScrollPos > this.state.sansTypeLoad[5],
                                                forceLoad: this.state.prevMaxScrollPos > this.state.sansTypeLoad[5],
                                                elID: "home-contact-top"
                                            })
                                        }), (0,
                                        i.jsx)("p", {
                                            className: "c-sans c-sans--color-2",
                                            style: this.state.contactBottomStyle,
                                            children: (0,
                                            i.jsx)(c.A, {
                                                text: e.contact_bottom,
                                                lineStyle: t.mediumLineStyle,
                                                load: this.state.maxScrollPos > this.state.sansTypeLoad[5],
                                                forceLoad: this.state.prevMaxScrollPos > this.state.sansTypeLoad[5],
                                                elID: "home-contact-bottom"
                                            })
                                        }), (0,
                                        i.jsx)("a", {
                                            href: "/contact",
                                            className: "c-sans c-sans--color-2",
                                            style: this.state.contactButtonStyle,
                                            children: (0,
                                            i.jsx)(c.A, {
                                                text: e.contact_button,
                                                lineStyle: t.mediumLineStyle,
                                                load: this.state.maxScrollPos > this.state.sansTypeLoad[5],
                                                forceLoad: this.state.prevMaxScrollPos > this.state.sansTypeLoad[5],
                                                elID: "home-contact-button"
                                            })
                                        }), (0,
                                        i.jsx)("p", {
                                            className: "c-sans c-sans--color-2",
                                            style: this.state.skillStyle,
                                            role: "presentation",
                                            children: (0,
                                            i.jsx)(c.A, {
                                                text: e.skill_heading,
                                                lineStyle: t.largeLineStyle,
                                                load: this.state.maxScrollPos > this.state.sansTypeLoad[3],
                                                forceLoad: this.state.prevMaxScrollPos > this.state.sansTypeLoad[3],
                                                elID: "home-skills-heading"
                                            })
                                        }), (0,
                                        i.jsx)("p", {
                                            className: "c-sans c-sans--color-2",
                                            style: this.state.proStyle,
                                            role: "presentation",
                                            children: (0,
                                            i.jsx)(c.A, {
                                                text: e.projects_heading,
                                                lineStyle: t.largeLineStyle,
                                                load: this.state.maxScrollPos > this.state.sansTypeLoad[4],
                                                forceLoad: this.state.prevMaxScrollPos > this.state.sansTypeLoad[4],
                                                elID: "home-projects-heading"
                                            })
                                        })]
                                    })
                                }), (0,
                                i.jsx)(u.A, {
                                    linkElements: this.state.linkElements,
                                    gallery: e.previews
                                }), (0,
                                i.jsx)("div", {
                                    className: "c-page__cover " + (this.state.cover ? "state-show" : "state-hide") + " " + (this.state.coverTransition ? "state-transition" : "")
                                })]
                            })
                        })
                    })
                })
            }
            constructor() {
                super(),
                this.state = {
                    curFrame: 0,
                    randCells: [],
                    scrollPos: -1,
                    maxScrollPos: -1,
                    prevMaxScrollPos: -9999,
                    startAnimationOffset: [],
                    maxChar: 0,
                    screenWidth: 0,
                    screenHeight: 0,
                    contentWidth: 0,
                    contentHeight: 0,
                    containerHeight: 0,
                    remainingChars: 0,
                    numCols: 0,
                    charsPerCol: 0,
                    charsPerLine: 0,
                    baselineIndex: [],
                    randCellsLayout: [],
                    lineNums: [],
                    titleStyle: {},
                    subtitleStyle: {},
                    introStyle: {},
                    introButtonStyle: {},
                    skillsStartIndex: 0,
                    skillsEndIndex: 0,
                    skillStyle: {},
                    projectStartIndex: 0,
                    projectEndIndex: 0,
                    proStyle: {},
                    contactTopStyle: {},
                    contactBottomStyle: {},
                    contactButtonStyle: {},
                    asciiBgHTML: [],
                    layoutReady: !1,
                    pauseRender: !1,
                    pauseMaxCheckLoops: 10,
                    pauseCurLoop: 0,
                    lastLineIndex: 0,
                    linkElements: [],
                    tabMaxScrollPos: !1,
                    smoothScroll: !1,
                    sansTypeLoad: [],
                    linesUsed: 0,
                    cover: !0
                },
                this.getMediumBlockHeight = this.getMediumBlockHeight.bind(this),
                this.clearRandCellsMediumBlock = this.clearRandCellsMediumBlock.bind(this),
                this.clearRandCellsLargeBlock = this.clearRandCellsLargeBlock.bind(this),
                this.getBlankCell = this.getBlankCell.bind(this),
                this.getCell = this.getCell.bind(this),
                this.getSingleLine = this.getSingleLine.bind(this),
                this.setRandCells = this.setRandCells.bind(this),
                this.doScroll = this.doScroll.bind(this),
                this.doLayout = this.doLayout.bind(this),
                this.doReadyCheck = this.doReadyCheck.bind(this)
            }
        }
        p.contextType = h.D;
        class m extends l.Component {
            onMouseMove(e) {
                !0 === this.context.touch && !1 === this.context.touchFired && ("mouse" === e.pointerType || void 0 === e.pointerType) && (document.documentElement.classList.add("state-mouse-events"),
                this.context.setTouch(!1))
            }
            onTouchStart() {
                !1 === this.context.touchFired && (document.documentElement.classList.remove("state-mouse-events"),
                this.context.setTouchFired())
            }
            render() {
                let e = this.props.post;
                this.props.global;
                let t = this.context.dimensions;
                return (0,
                i.jsxs)("div", {
                    className: "c-gui__panel c-gui__panel--main",
                    onMouseMove: this.onMouseMove,
                    onTouchStart: this.onTouchStart,
                    style: {
                        width: t.contentWidth + "px",
                        height: t.mainWindowHeight + "px"
                    },
                    children: [(0,
                    i.jsx)(r.A, {
                        post: e,
                        error: !1
                    }), (0,
                    i.jsx)("main", {
                        className: "c-gui__panel__content",
                        children: (0,
                        i.jsx)(p, {
                            post: e
                        })
                    })]
                })
            }
            constructor(e) {
                super(e),
                this.onMouseMove = this.onMouseMove.bind(this),
                this.onTouchStart = this.onTouchStart.bind(this)
            }
        }
        m.contextType = h.D;
        var g = !0;
        let d = function(e) {
            let {data: t, globalData: s} = e;
            if (!t || !s)
                return null;
            {
                (0,
                n.useRouter)();
                let e = t[0]
                  , l = s[0];
                return (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsxs)(a(), {
                        children: [e.page_title && (0,
                        i.jsx)("title", {
                            children: e.page_title
                        }), !e.page_title && (0,
                        i.jsx)("title", {
                            children: "Bogdan Sadriev"
                        }), e.page_description && (0,
                        i.jsx)("meta", {
                            name: "description",
                            content: e.page_description
                        }), e.canonical_url && (0,
                        i.jsx)("link", {
                            href: e.canonical_url,
                            rel: "canonical"
                        }), (0,
                        i.jsx)("link", {
                            rel: "stylesheet",
                            href: "https://use.typekit.net/awl2qrt.css"
                        }), (0,
                        i.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
                        }), (0,
                        i.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 48 48' fill='%23FFFFFF' transform='matrix(1, 0, 0, 1, 0, 0)rotate(0)' stroke='%23FFFFFF' stroke-width='2.736'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'/%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none;stroke:%23FFFFFF;stroke-linecap:round;stroke-linejoin:round;}%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M40.5,5.5H7.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V7.5A2,2,0,0,0,40.5,5.5Z'/%3E%3Cline class='cls-1' x1='14.98' y1='37.5' x2='14.98' y2='10.5'/%3E%3Cpath class='cls-1' d='M15,10.5H26.29A6.74,6.74,0,0,1,33,17.25h0A6.74,6.74,0,0,1,26.29,24H15'/%3E%3Cpath class='cls-1' d='M15,24H26.29A6.74,6.74,0,0,1,33,30.75h0a6.74,6.74,0,0,1-6.73,6.75H15'/%3E%3Ctext x='50%' y='50%' font-size='24' text-anchor='middle' dominant-baseline='middle' fill='%23FFFFFF'%3EB%3C/text%3E%3C/g%3E%3C/svg%3E"
                        }),(0,
                        i.jsx)("meta", {
                            name: "theme-color",
                            content: "#3c3c3c"
                        })]
                    }), (0,
                    i.jsx)(m, {
                        post: e,
                        global: l
                    })]
                })
            }
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [231, 636, 593, 792], () => t(2936)),
    _N_E = e.O()
}
]);
