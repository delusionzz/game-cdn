var Qh = "function" == typeof Object.defineProperties ? Object.defineProperty : function(ha, ja, ta) {
    if (ha == Array.prototype || ha == Object.prototype)
        return ha;
    ha[ja] = ta.value;
    return ha
}
;
function vi(ha) {
    ha = ["object" == typeof globalThis && globalThis, ha, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var ja = 0; ja < ha.length; ++ja) {
        var ta = ha[ja];
        if (ta && ta.Math == Math)
            return ta
    }
    throw Error("Cannot find global object");
}
var wi = vi(this);
function xi(ha, ja) {
    if (ja)
        a: {
            var ta = wi;
            ha = ha.split(".");
            for (var va = 0; va < ha.length - 1; va++) {
                var ab = ha[va];
                if (!(ab in ta))
                    break a;
                ta = ta[ab]
            }
            ha = ha[ha.length - 1];
            va = ta[ha];
            ja = ja(va);
            ja != va && null != ja && Qh(ta, ha, {
                configurable: !0,
                writable: !0,
                value: ja
            })
        }
}
xi("Array.prototype.includes", function(ha) {
    return ha ? ha : function(ja, ta) {
        var va = this;
        va instanceof String && (va = String(va));
        var ab = va.length;
        ta = ta || 0;
        for (0 > ta && (ta = Math.max(ta + ab, 0)); ta < ab; ta++) {
            var Ma = va[ta];
            if (Ma === ja || Object.is(Ma, ja))
                return !0
        }
        return !1
    }
});
function yi(ha, ja) {
    ha instanceof String && (ha += "");
    var ta = 0
      , va = !1
      , ab = {
        next: function() {
            if (!va && ta < ha.length) {
                var Ma = ta++;
                return {
                    value: ja(Ma, ha[Ma]),
                    done: !1
                }
            }
            va = !0;
            return {
                done: !0,
                value: void 0
            }
        }
    };
    ab[Symbol.iterator] = function() {
        return ab
    }
    ;
    return ab
}
xi("Array.prototype.values", function(ha) {
    return ha ? ha : function() {
        return yi(this, function(ja, ta) {
            return ta
        })
    }
});
(function(ha, ja) {
    function ta() {
        return Ua.Sl(this, "")
    }
    function va() {
        return "level" + E.level
    }
    function ab(a, b) {
        return 0 < a ? a < b : -a < b
    }
    function Ma(a, b, c, d, e) {
        return d + (a - b) / (c - b) * (e - d)
    }
    function ie(a) {
        return a instanceof Array ? new Dc(a) : a.iterator()
    }
    function O(a, b) {
        if (null == b)
            return null;
        null == b.Je && (b.Je = ja.Er++);
        var c;
        null == a.xt ? a.xt = {} : c = a.xt[b.Je];
        null == c && (c = b.bind(a),
        a.xt[b.Je] = c);
        return c
    }
    ha.Ctrr = ha.Ctrr || {};
    var mg = mg || {}, ob;
    class ka {
        constructor(a, b) {
            this.r = new RegExp(a,b.split("u").join(""))
        }
        match(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.Wi = this.r.exec(a);
            this.r.iB = a;
            return null != this.r.Wi
        }
        Gc(a) {
            if (null != this.r.Wi && 0 <= a && a < this.r.Wi.length)
                return this.r.Wi[a];
            throw 0;
        }
        IL() {
            if (null == this.r.Wi)
                throw 1;
            let a = this.r.Wi.index + this.r.Wi[0].length;
            return ua.substr(this.r.iB, a, this.r.iB.length - a)
        }
    }
    ka.g = !0;
    Object.assign(ka.prototype, {
        j: ka
    });
    class k {
        static zA(a) {
            return Ec.CL(null == a ? "null" : "" + a)
        }
        static fi(a, b) {
            return a + k.zA(b)
        }
        static Oa(a, b, c, d) {
            return fb.create((null == a ? "" : a + ",") + b + "-" + c + "@" + d)
        }
    }
    k.g = !0;
    class za {
        constructor() {
            this.GO = null;
            this.qy = [];
            this.At = [];
            this.Au = [];
            this.images = new gb;
            this.pA = null;
            this.NJ = new ng;
            this.save = null;
            this.cn = new Fc;
            this.ea = null;
            this.Ga = new je;
            this.window = this.P = null;
            this.MO = new Fb;
            this.Ge = new og;
            za.instance = this
        }
        Sa(a, b) {
            this.Mc = a;
            this.pA = b;
            ja.console.info("%c" + a.title.toUpperCase() + " %c" + rd.OD, "font-weight:bold;", null);
            a.Xy && (window.addEventListener("error", O(this, this.ff)),
            window.addEventListener("unhandledrejection", O(this, this.ff)));
            this.Qi = this.JO();
            l.UN(a.mz);
            l.Ru(a.language);
            this.Ge.Tf = O(this, this.EL);
            this.window = new ke(a.Cs);
            a.Nm && this.window.JK(a.wu) && (this.P = new yb);
            null == this.P && (this.window.FK(a.wu),
            this.P = new le,
            a.Nm = !1);
            if (null != this.P) {
                this.P.Kn(this.window);
                this.window.Of(2, O(this, this.ZL));
                this.window.Of(1, O(this, this.vA));
                this.window.update();
                this.nz();
                this.cn.version = rd.VERSION.toString();
                this.cn.sn = a.sn;
                this.ea = new gc(this);
                this.gv();
                this.save = this.ot();
                var c = this;
                this.CO().then(function(d) {
                    d && l.HN()
                }).then(function() {
                    c.preload()
                })
            }
        }
        preload() {
            function a(f, g, h) {
                let m = b.TI();
                m.name = l.Hi(f);
                b.images.G.hasOwnProperty(f) && b.Au.push(b.images.G[f]);
                b.images.G[f] = m;
                m.load(g, function() {
                    if (l.ZJ().includes(f)) {
                        let n = new FileReader;
                        n.onload = function(q) {
                            l.KN(f, new sd(q.target.result));
                            h(m.data)
                        }
                        ;
                        n.onerror = function() {
                            throw 2;
                        }
                        ;
                        n.readAsArrayBuffer(g)
                    } else
                        h(m.data)
                })
            }
            let b = this;
            for (var c = 0; c < l.MAX; ) {
                var d = c++;
                l.TK(d) && l.ax(d, a)
            }
            0 < l.Qy().length ? this.load(l.Qy(), null, O(this, this.rA)) : this.rA();
            if (this.Mc.cC) {
                let f = window.document.querySelectorAll("meta[data-hash]").item(0).dataset.hash;
                c = window.document.querySelectorAll("script[src]");
                d = null;
                let g = 0
                  , h = c.length;
                for (; g < h && (d = c.item(g++),
                !(new ka(this.Mc.title,"i")).match(d.src)); )
                    ;
                if (null != d) {
                    var e = new XMLHttpRequest;
                    e.open("GET", d.src);
                    e.responseType = "arraybuffer";
                    e.onreadystatechange = function() {
                        if (4 == e.readyState && 200 == e.status)
                            try {
                                window.crypto.subtle.digest("SHA-256", e.response).then(function(m) {
                                    m = btoa(String.fromCharCode.apply(null, new Uint8Array(m)));
                                    b.GO = m != f
                                }).catch(function() {})
                            } catch (m) {}
                    }
                    ;
                    e.send()
                }
            }
        }
        rA() {
            let a = this;
            Gc.delay(function() {
                a.Ge.start();
                a.pA(a)
            }, 1)
        }
        Fk(a) {
            a = Object.create(a.prototype);
            a.X = this;
            a.caller = a;
            return this.load(a.sc(), null, void 0)
        }
        load(a, b, c) {
            let d = []
              , e = []
              , f = 0
              , g = 0;
            for (; g < a.length; ) {
                var h = a[g];
                ++g;
                if (!l.Ct(h) || null != l.mp() && null != l.vy())
                    f += 1,
                    l.WL(h, function(m) {
                        --f;
                        null != b && b(m);
                        null != c && 0 == f && c()
                    }),
                    h = l.Hi(h),
                    this.cn.load(h) && e.push(h)
            }
            for (; 0 < d.length; )
                this.cn.OM(d.pop());
            return new pg(this.cn,e)
        }
        Iy(a) {
            return this.images.G[a]
        }
        TI() {
            return new me(this.Mc.lz,this.Mc.Nm)
        }
        gJ(a) {
            this.Iy(a).Cv();
            this.images.remove(a);
            l.uq(a)
        }
        hJ() {
            let a = 0
              , b = this.Au;
            for (; a < b.length; )
                b[a++].Cv();
            this.Au = []
        }
        createTexture(a, b, c) {
            function d(n) {
                if (84 == n.b[0] && 80 == n.b[1] && 83 == n.b[2])
                    return n = (new td).SA(n),
                    new Wb(qg.lk(n),n.Mk.scale);
                if (66 == n.b[0] && 77 == n.b[1] && 70 == n.b[2])
                    return n = (new ne).gl(n),
                    new Wb(oe.lk(n),1,oe.zy(n));
                throw 3;
            }
            null == c && (c = !1);
            null == b && (b = 0);
            for (var e = l.Hi(a), f = 0, g = this.P.rK(); f < g.length; ) {
                var h = g[f];
                ++f;
                if (h.name == e)
                    return h
            }
            f = this.Iy(a);
            g = l.dK(a);
            let m = null;
            null == g && (h = l.mk(a, "dat"),
            -1 != h ? (g = new sd(l.data.G[h]),
            null == g.data && (g = null)) : (h = l.mk(a, "dat", !0),
            -1 != h && (g = new sd(l.data.G[h]))));
            if (null == g) {
                h = l.mk(a, "tps");
                if (-1 != h)
                    try {
                        m = d(l.Fm(h))
                    } catch (n) {}
                null == m && (h = l.mk(a, "json"),
                -1 != h && (h = l.Xb(h),
                h = (new td).WM(h),
                m = new Wb(qg.lk(h),h.Mk.scale)));
                null == m && (h = l.mk(a, "dat"),
                -1 != h && (h = l.Fm(h),
                h = (new td).SA(h),
                m = new Wb(qg.lk(h),h.Mk.scale)));
                null == m && (h = l.mk(a, "fnt"),
                -1 != h && (h = l.Fm(h),
                h = (new ne).gl(h),
                m = new Wb(oe.lk(h),1,oe.zy(h))))
            }
            h = null;
            if (null == g)
                h = this.P.createTexture(f, b, m, e);
            else if (g = g.Eo,
            1 == g.length || Ga.gk(g, function(n) {
                return null != n.name
            }))
                for (h = this.P.createTexture(f, b, d(g[0].data), e),
                b = 1,
                e = g.length; b < e; )
                    f = b++,
                    this.P.Wx(h, d(g[f].data), g[f].name);
            else
                for (h = this.P.createTexture(f, b, null, e),
                b = 0,
                e = g.length; b < e; )
                    this.P.Wx(h, d(g[b++].data), null);
            c && (h.Be = 1 / l.$J(a));
            return h
        }
        EL(a) {
            this.window.update();
            if (this.Mc.oy) {
                let b = this.MO
                  , c = O(this, this.update);
                b.elapsedTime += a;
                b.dh += a * b.tv;
                .25 < b.dh && (b.dh = .25);
                for (; b.dh >= Fb.Fj; )
                    c(Fb.Fj),
                    b.dh -= Fb.Fj;
                this.Ic(b.dh / Fb.Fj)
            } else
                this.update(a),
                this.Ic(1);
            for (this.NJ.update(a); 0 < this.qy.length; )
                this.qy.pop()()
        }
        update(a) {
            let b = 0
              , c = this.At;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                null != d && d.state.update(a)
            }
            this.P.Ih();
            this.P.hl();
            this.cL();
            this.ea.update(a);
            this.P.ph()
        }
        Ic(a) {
            this.P.Ih() && (this.P.hl(),
            this.P.clear(),
            this.ea.Ic(a),
            this.P.hl(),
            this.P.ph())
        }
        cL() {
            if (this.Mc.Jz) {
                var a = this.window;
                a = a.Cd.x / a.Cd.y;
                var b = this.window.Cd
                  , c = b.x;
                b = b.y;
                2.5 < a ? (a = b / c * 2.5,
                c = (1 - a) / 2,
                this.P.qj(c, 0, c + a, 1)) : .4 > a && (a = c / b / .4,
                c = (1 - a) / 2,
                this.P.qj(0, c, 1, c + a))
            }
        }
        nz() {
            if (this.Mc.audio && J.wz())
                if (null != this.Ga && this.Ga instanceof Hc) {
                    var a = this.Ga.lg
                      , b = this.Ga.names;
                    this.Ga.H();
                    J.Sa();
                    this.Ga = new Hc;
                    this.Ga.lg = a;
                    this.Ga.names = b
                } else {
                    a = this.Mc.px;
                    var c = null != a ? a : J.eJ();
                    Ga.gk(l.mp(), function(f) {
                        return f == c
                    }) && l.zN(c);
                    b = l.kK();
                    a = [];
                    for (var d = 0; d < b.length; ) {
                        let f = b[d];
                        ++d;
                        (new ka("audio","")).match(f) && a.push(f)
                    }
                    if (0 != a.length) {
                        J.Sa();
                        J.wz() && (this.Ga = new Hc);
                        var e = this;
                        b = function(f, g, h) {
                            pe.cz(g) ? (f = pe.RJ(g),
                            g = pe.bN(g),
                            e.Ga.rq(f, g, h)) : e.Ga.qq(f, g, l.Hf(f), h)
                        }
                        ;
                        for (d = 0; d < a.length; )
                            l.ax(l.Ff(a[d++]), b)
                    }
                }
        }
        ot() {
            return new qe
        }
        aK() {
            return this.At[3]
        }
        kI(a) {
            return this.At[3] = a
        }
        Ji() {
            let a = this.aK();
            return null != a ? a : this.kI(new re(this.window.canvas))
        }
        ve() {
            return this.Ji().state
        }
        VI(a) {
            return new se(a)
        }
        gv() {
            let a = rg.Kr;
            new sg("#" + a[0] + a[0] + a[0])
        }
        vA() {
            this.Ga.Yf(1, 0)
        }
        ZL() {
            this.Ga.Yf(0, 0)
        }
        JO() {
            try {
                return navigator.userAgentData.mobile
            } catch (a) {
                return (new ka("Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini","i")).match(ja.navigator.userAgent) || "undefined" !== typeof window.orientation || "onTouchstart"in window || 0 < navigator.sP ? !0 : window.matchMedia("(any-pointer:coarse)").matches
            }
        }
        CO() {
            return this.Mc.qx ? new Promise(function(a) {
                let b = new Image;
                b.onerror = function() {
                    b.onload = null;
                    b.onerror = null;
                    a(!1)
                }
                ;
                b.onload = function() {
                    b.onload = null;
                    b.onerror = null;
                    a(!0)
                }
                ;
                b.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
            }
            ) : Promise.resolve(!1)
        }
        ff(a) {
            "unhandledrejection" != a.type && null != (null != a ? a.error : null) && null != a.error.stack && Ha.ie(a.error.stack);
            null != this.Ge && this.Ge.stop();
            ja.console.log("" + this.Mc.title + " CRASHED \ud83d\udc80");
            window.removeEventListener("error", O(this, this.ff));
            window.removeEventListener("unhandledrejection", O(this, this.ff))
        }
    }
    za.g = !0;
    Object.assign(za.prototype, {
        j: za
    });
    class ud extends za {
        constructor(a) {
            super();
            this.Sa(new tg("Ctrr",!0,null != a ? a : "en",null,null,null,null,{
                alpha: !1,
                depth: !1,
                antialias: !0,
                stencil: !0
            },!0,null,!0,null,null,null,null,!1,null,null,null,null,!1,null), O(this, this.Tf))
        }
        ot() {
            return new C(this.VI(this.Mc.title))
        }
        lK() {
            return this.Qi && 2 < this.window.qk() ? 2 : 1
        }
        Tf() {
            window.document.body.addEventListener("touchcancel", function(b) {
                b.preventDefault()
            }, {
                passive: !1
            });
            window.document.body.addEventListener("touchend", function(b) {
                b.preventDefault()
            }, {
                passive: !1
            });
            window.document.body.addEventListener("touchstart", function(b) {
                b.preventDefault()
            }, {
                passive: !1
            });
            this.P.CN(new F(0,0,0,1));
            Fb.Fj = .016;
            this.P.fJ();
            this.window.ON(this.lK());
            this.Ji().wB(5);
            this.Mc.Nm ? (this.P.Rc(new Ic),
            this.P.Rc(new te),
            this.P.Rc(new ue),
            this.P.Rc(new ve),
            this.P.Rc(new we),
            this.P.Rc(new xe),
            this.P.Rc(new ye),
            this.P.Rc(new ze)) : (this.P.Rc(new Ae),
            this.P.Rc(new Be),
            this.P.Rc(new Ce),
            this.P.Rc(new De),
            this.P.Rc(new Ee),
            this.P.Rc(new Fe),
            this.P.Rc(new Ge),
            this.P.Rc(new He),
            this.P.Rc(new Ie));
            let a = this;
            this.save.load(function() {
                null == C.language && (C.language = a.Mc.language);
                l.Ru(C.language);
                a.SB()
            })
        }
        SB() {
            this.ea.Pb.sceneToLoad = sb;
            J.Of("EContextBroken", O(this, this.nz));
            this.Ms = -1;
            let a = this;
            J.Of("EContextResumed", function() {
                a.Ga.Nc(a.Ms) || a.Ga.play(a.Ms, !0, !0)
            });
            this.ea.wo(Jc)
        }
    }
    ud.g = !0;
    ud.u = za;
    Object.assign(ud.prototype, {
        j: ud
    });
    class Je extends ud {
        constructor(a) {
            super(a)
        }
        ot() {
            return new C(new Ke(za.instance.Mc.title))
        }
        Tf(a) {
            this.AC();
            K.dM(O(this, this.AC));
            let b = this;
            K.sq("enableAudio", function() {
                wh = !1;
                b.Ga.Yf(1)
            });
            K.sq("disableAudio", function() {
                wh = !0;
                b.Ga.Yf(0)
            });
            K.sq("pauseGameplay", function() {
                xh = !0;
                b.Ji().enabled = !1;
                b.Ge.stop()
            });
            K.sq("resumeGameplay", function() {
                xh = !1;
                b.Ji().enabled = !0;
                b.ve().reset();
                b.Ge.start()
            });
            K.eM(function() {
                K.Hp = !0;
                b.Ga.Yf(0);
                b.Ji().enabled = !1;
                b.Ge.stop()
            });
            K.hM(function() {
                K.Hp = !1;
                b.Ga.Yf(K.Fy());
                xh || (b.Ji().enabled = !0,
                b.ve().reset(),
                b.Ge.start())
            });
            super.Tf(a)
        }
        SB() {
            this.ea.Pb.sceneToLoad = Kc;
            this.ea.wo(Le)
        }
        vA() {
            K.Hp || wh || this.Ga.Yf(K.Fy())
        }
        gv() {
            K.hasFeature("version") && super.gv()
        }
        AC() {
            let a = K.iK()
              , b = this.window.canvas.style;
            b.top = "" + a.t + "px";
            b.left = "" + a.Cz + "px";
            b.width = "calc(100% - " + (a.r + a.Cz) + "px)";
            b.height = "calc(100% - " + (a.b + a.t) + "px)"
        }
    }
    Je.g = !0;
    Je.u = ud;
    Object.assign(Je.prototype, {
        j: Je
    });
    class ug {
    }
    ug.g = !0;
    ug.me = !0;
    class Lc {
    }
    Lc.g = !0;
    Lc.me = !0;
    Lc.sb = [ug];
    class vg {
    }
    vg.g = !0;
    vg.me = !0;
    vg.sb = [Lc];
    class tb {
        constructor(a, b, c) {
            null == a && (a = 2);
            this.$c = null;
            this.Z = 0;
            this.jl = !1;
            this.Ki = -2;
            this.Kk = 2 > a ? 2 : a;
            null != b && 0 < b.length ? (this.Z = b.length,
            this.K = b.slice(0, b.length),
            this.Na = this.Z) : (this.Na = this.Kk,
            this.K = Array(this.Na));
            c && (this.Ki = 0)
        }
        ru(a) {
            this.Z == this.Na && this.grow();
            this.K[this.Z++] = a
        }
        ya() {
            return this.K[0]
        }
        FO(a) {
            let b = this.K;
            b[a] = b[--this.Z]
        }
        trim(a) {
            this.Z = a;
            return this
        }
        indexOf(a) {
            if (0 == this.Z)
                return -1;
            let b = 0
              , c = -1
              , d = this.Z - 1
              , e = this.K;
            do
                if (e[b] == a) {
                    c = b;
                    break
                }
            while (b++ < d);
            return c
        }
        gf(a) {
            a > this.Na && (this.Na = a,
            this.Th(a))
        }
        Sa(a, b) {
            this.gf(a);
            this.Z = a;
            let c = this.K
              , d = 0;
            for (; d < a; )
                c[d++] = b
        }
        qM() {
            if (this.Na > this.Kk) {
                var a = this.Kk
                  , b = this.Z;
                this.Na = a > b ? a : b;
                this.Th(this.Na)
            } else {
                a = this.K;
                b = this.Z;
                let c = this.Na;
                for (; b < c; )
                    a[b++] = null
            }
        }
        grow() {
            this.Na = wg.nm(this.Ki, this.Na);
            this.Th(this.Na)
        }
        Th(a) {
            a = Array(a);
            Gb.dm(this.K, 0, a, this.Z);
            this.K = a
        }
        dt() {
            Gb.Vp(this.K);
            this.K = null;
            null != this.$c && (this.$c.dt(),
            this.$c = null)
        }
        clear(a) {
            null == a && (a = !1);
            a && Gb.Vp(this.K);
            this.Z = 0
        }
        iterator() {
            if (this.jl) {
                if (null == this.$c)
                    this.$c = new vd(this);
                else {
                    let a = this.$c;
                    a.K = a.ae.K;
                    a.Mf = a.ae.Z;
                    a.$d = 0
                }
                return this.$c
            }
            return new vd(this)
        }
    }
    tb.g = !0;
    tb.sb = [vg];
    Object.assign(tb.prototype, {
        j: tb
    });
    class ia {
        constructor() {
            this.X = za.instance;
            this.listener = null;
            this.Fv = !1;
            this.parent = this.oe = this.W = null;
            this.hA = this.gA = !1;
            this.name = null;
            this.time = 0;
            ia.iu.ru(this)
        }
        va() {
            if (null != this.X) {
                for (var a = this.oe; null != a; ) {
                    var b = a.W;
                    a.va();
                    a = b
                }
                null != this.parent && this.remove();
                for (a = this.listener; null != a; )
                    b = a.next,
                    a.lp = null,
                    a.next = null,
                    a = b;
                this.X = this.listener = null;
                ia.iu.FO(ia.iu.indexOf(this))
            }
        }
        remove() {
            null != this.parent && ia.removeChild(this)
        }
        iterator() {
            return new xg(this)
        }
        pa(a) {
            return this.appendChild(a)
        }
        add(a) {
            return this.appendChild(yh.Vx(a))
        }
        update(a) {
            if (null != this.X) {
                this.Fv = !0;
                for (var b = this.oe, c; null != b; )
                    c = b.W,
                    b.hA || null == b.X || (b.update(a),
                    b.time += a),
                    b = c;
                this.time += a
            }
        }
        Ic(a) {
            if (null != this.X && 0 != this.Fv)
                for (var b = this.oe, c; null != b; )
                    c = b.W,
                    b.gA || null == b.X || b.Ic(a),
                    b = c
        }
        Xp() {}
        wb(a) {
            return Math.min(1, this.time / a)
        }
        Vs(a, b) {
            for (var c = this.parent; null != c; ) {
                if (Ua.Yr(c, a))
                    return c;
                c = c.parent
            }
            c = 1;
            let d = [this];
            for (; 0 < c; ) {
                let e = d[--c]
                  , f = e.oe;
                for (; null != f; )
                    d[c++] = f,
                    f = f.W;
                if (e != b && Ua.Yr(e, a))
                    return e
            }
            return null
        }
        appendChild(a) {
            a.parent = this;
            var b = this.oe;
            if (null != b) {
                for (; null != b.W; )
                    b = b.W;
                b.W = a
            } else
                this.oe = a;
            a.Xp();
            return a
        }
        static removeChild(a) {
            if (null == a || null == a.parent)
                return !1;
            var b = a.parent;
            if (a == b.oe)
                b.oe = a.W;
            else
                for (b = b.oe; null != b; ) {
                    if (b.W == a) {
                        b.W = a.W;
                        break
                    }
                    b = b.W
                }
            a.parent = a.W = null;
            return !0
        }
    }
    ia.g = !0;
    Object.assign(ia.prototype, {
        j: ia
    });
    class hc extends ia {
        constructor() {
            super();
            this.name = this.Fa();
            this.Pb = {};
            this.caller = null;
            this.Ce = "New";
            this.hb("New");
            this.node = new pb;
            this.node.qe = 1;
            this.bd = null
        }
        uK() {
            return "Running" == this.Ce
        }
        da(a) {
            this.ea.wo(a, this, !1)
        }
        Fg(a) {
            this.ea.wo(a, this, !0)
        }
        Dg(a) {
            let b = this;
            if (null != a) {
                let c = this.iterator();
                for (; 0 < c.top; ) {
                    let d = c.stack[--c.top];
                    c.push(d);
                    Ua.Yr(d, a) && (b = d)
                }
            }
            this.ea.Dg(b)
        }
        Pi() {
            return !0
        }
        sc() {
            return []
        }
        Py() {
            let a = []
              , b = 0
              , c = this.sc();
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                l.Ct(d) && null == l.vy() || l.eb(d) || a.push(d)
            }
            return a
        }
        Ly(a) {
            return new Mc(this,a)
        }
        Ii() {
            return 0
        }
        Ob() {
            return 0
        }
        va() {
            super.va();
            this.hb("Destroyed");
            null != this.node && this.node.H();
            this.node = null
        }
        update(a) {
            super.update(a);
            this.node.Rg(a)
        }
        Ic(a) {
            super.Ic(a);
            this.node.md();
            this.node.vl();
            this.X.P.Yo(this.node)
        }
        za() {}
        Xk() {}
        gb() {}
        zd() {}
        Va() {}
        Nd(a) {
            this.Rq(Ba.Qf()(a))
        }
        Oc(a) {
            this.Rq(1 - a)
        }
        hb(a) {
            switch (a) {
            case "Created":
                this.node.qe = 0;
                this.Rq(0);
                break;
            case "Stopped":
                this.node.qe = 1
            }
            this.Ce = a
        }
        Rq(a) {
            this.wh().Ee(a)
        }
        wh() {
            let a = this.node.vh(5);
            null == a && (a = new Xb(0));
            this.node.Kg(a);
            return a
        }
        jK() {
            return this.bd.parent instanceof gc ? null : this.bd.parent.Uf
        }
        Fa() {
            return "Scene"
        }
    }
    hc.g = !0;
    hc.u = ia;
    Object.assign(hc.prototype, {
        j: hc
    });
    class ea extends hc {
        constructor() {
            super();
            this.buttons = [null];
            this.Dc = new yg;
            this.Pc = this.zi = this.Xc = this.sg = this.xa = null
        }
        createTexture(a) {
            if (null != r.Jk[a])
                return r.Jk[a];
            let b = this.X.createTexture(a, 8);
            return r.Jk[a] = b
        }
        ga(a) {
            let b = r.Jk[a];
            null != b && (za.instance.P.ga(b),
            za.instance.gJ(a),
            r.Jk[a] = null)
        }
        Xl() {
            let a = Ca.create(null, k.aH, k.bH);
            this.node.R(a.l.B);
            this.buttons[0] = a
        }
        wf(a, b) {
            this.Xc = new F(a,b,0,1);
            this.xa = new S("fix");
            this.node.R(this.xa.B)
        }
        Oj() {
            null == r.Pc && (r.Pc = this.createTexture(l.Wg));
            this.Pc = new A(null,r.Pc);
            this.node.R(this.Pc.B);
            this.Pc.ma(W.ym(0, 360))
        }
        mi() {
            this.Ca = new A(null,r.Ca);
            this.node.R(this.Ca.B)
        }
        Vd() {
            if (l.eb(l.Dd)) {
                r.th = this.createTexture(l.Dd);
                let a = r.lt(C.language, C.language);
                r.qc = r.th.children[a];
                r.Cm = r.th.children[a + 1]
            }
            l.eb(l.Jr) && (r.Gk = this.createTexture(l.Jr));
            l.eb(l.fg) && (r.Ca = this.createTexture(l.fg));
            l.eb(l.Ie) && (r.Hb = this.createTexture(l.Ie));
            l.eb(l.lo) && (r.ec = this.createTexture(l.lo))
        }
        Ly(a) {
            return new Me(this,a)
        }
        za() {
            this.Vd();
            null == ea.$r && (ea.$r = new ic(null,new F(0,0,0,1)),
            this.ea.ya.R(ea.$r.B));
            this.zi = ea.$r
        }
        Xk() {
            super.Xk();
            this.Va()
        }
        Va() {
            var a = this.ea.la()
              , b = this.ea.ua();
            let c = this.ea.qt();
            if (null != this.Xc) {
                this.sg = c.rh(this.Xc.x / this.Xc.y);
                this.xa.m(this.sg.o);
                this.xa.s(this.sg.C);
                var d = this.sg;
                this.xa.J((d.A - d.o) / this.Xc.x)
            }
            null != this.ef && (this.ef.m(this.ea.la() - this.ef.la()),
            this.ef.s(this.ea.ua() - this.ef.ua()));
            d = this.buttons[0];
            if (null != d) {
                var e = c.rh(this.Xc.x / this.Xc.y);
                d.l.J(.2 * (e.A - e.o) / d.cc.x);
                d.m(10);
                d.s(this.ea.ua() - d.l.ua() - 10)
            }
            null != this.Ca && (e = r.Ca.size,
            d = a / e.x,
            e = b / e.y,
            this.JJ = d > e,
            this.Ca.J(Math.max(d, e)),
            this.Ca.m(this.ea.la() / 2),
            d = this.Ca,
            d.m(d.cb() - this.Ca.la() / 2),
            this.Ca.s(0));
            null != this.Pc && (c.rh(1),
            this.Pc.F(),
            this.Pc.kO(new F((c.o + c.A) / 2,(c.C + c.D) / 2,0,1)),
            this.Pc.J((c.A - c.o) / 260),
            a = Math.max(a, b) / 2,
            a = 2 * Math.sqrt(2 * a * a) / r.Pc.size.x,
            this.Pc.ib < a && this.Pc.J(a),
            a = 1 / this.ea.ue(),
            1 > a && (b = this.Pc,
            b.J(b.ib * a)),
            a = this.Pc,
            a.J(2 * a.ib))
        }
        update(a) {
            super.update(a);
            if (this.uK()) {
                this.Dc.Ih();
                this.GN();
                this.Hd();
                this.Dc.ph();
                let b = 0
                  , c = this.buttons;
                for (; b < c.length; ) {
                    let d = c[b];
                    ++b;
                    null != d && d.update(a)
                }
            }
            null != this.Pc && (a = this.Pc,
            a.ma(a.Td + .1))
        }
        Ob() {
            return .5
        }
        Nd(a) {
            this.zi.aa(1 - a)
        }
        Oc(a) {
            this.zi.aa(a)
        }
        GN() {
            var a = this.X.ve();
            this.Dc.pressed = a.cg(0);
            this.Dc.released = a.ei(0);
            a = a.position[0];
            var b = a.x
              , c = a.y;
            a = this.X.P.jb;
            let d = this.X.window.Km();
            b = -1 + 2 * (b - d.x) / d.w;
            c = -1 + 2 * (d.y - c) / d.G;
            a = a.Bt;
            a = new F(a.m11 * b + a.m12 * c + a.m14,a.m21 * b + a.m22 * c + a.m24,0,1);
            null != a && (b = this.Dc.i,
            b.x = a.x,
            b.y = a.y)
        }
        uk() {
            let a = 0
              , b = this.buttons;
            for (; a < b.length; ) {
                let c = b[a];
                ++a;
                null != c && c.l.N(!1)
            }
        }
        nO() {
            let a = 0
              , b = this.buttons;
            for (; a < b.length; ) {
                let c = b[a];
                ++a;
                null != c && c.l.N(!0)
            }
        }
        Hd() {}
        bb(a) {
            let b = this.buttons[a];
            if (null == b || "Running" != this.Ce || b.selected || !b.l.bh)
                return !1;
            let c = !1;
            this.Dc.BI(a, b) && (b.select(),
            c = !0);
            b.Pu(this.Dc.yz(a));
            b.setActive(this.Dc.isActive(a));
            c && z.play(z.Xg);
            return c
        }
        Rq() {}
        Xb(a, ...b) {
            return Yb.get(a, 0 < b.length ? b.slice() : null)
        }
        rp(...a) {
            let b = []
              , c = 0;
            for (; c < a.length; )
                b.push(Yb.get(a[c++]));
            return b
        }
        xn() {
            this.X.Ga.stop(l.Al);
            this.CA(l.dg)
        }
        yM() {
            this.X.Ga.stop(l.dg);
            this.CA(l.Al)
        }
        CA(a) {
            let b = this.X.Ga;
            b.De(C.Hc ? 1 : 0);
            b.Nc(a) || (b.play(a, !0),
            this.X.Ms = a)
        }
        Us() {
            let a = this.X.Ga;
            a.Nc(l.dg) && a.zm(l.dg, .5, !0);
            a.Nc(l.Al) && a.zm(l.Al, .5, !0)
        }
        jB() {
            let a = this;
            J.Mm() && !ea.kB && l.eb(l.mo) && (this.ef = new A(null,this.createTexture(l.mo),"0000"),
            this.ef.J(this.X.window.wn),
            this.X.Qi || this.ef.J(this.X.window.qk()),
            this.ea.ya.R(this.ef.B),
            this.ef.ka().play(k.Oa(null, 0, 53, 30)).ce(function() {
                a.ef.H();
                a.ef = null;
                a.ga(l.mo)
            }),
            z.play(z.EG),
            ea.kB = !0,
            this.Va())
        }
        ZO() {
            let a = 0;
            for (; 17 > a; ) {
                let b = a++;
                this.ga([160, 155, 150, 145, 140, 135, 130, 124, 119, 114, 109, 104, 99, 94, 89, 84, 79][b]);
                this.ga([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][b]);
                this.ga([164, 159, 154, 149, 144, 139, 134, 129, 123, 118, 113, 108, 103, 98, 93, 88, 83][b])
            }
            r.Mo = null;
            r.si = null;
            r.us = null;
            this.ga(l.Dl);
            r.$ = null;
            this.ga(l.Kl);
            r.Fe = null;
            this.ga(l.Hl);
            r.dl = null;
            this.ga(l.Jl);
            r.mc = null;
            this.ga(l.El);
            r.Te = null;
            this.ga(l.Il);
            r.rj = null;
            this.ga(l.Cl);
            r.Kc = null;
            this.ga(l.gi);
            r.vb = null;
            this.ga(l.gi);
            r.Uj = null;
            this.ga(l.Nl);
            r.Ac = null;
            this.ga(l.Ll);
            r.yj = null;
            this.ga(l.Gl);
            r.Fh = null;
            this.ga(l.Fl);
            r.Ve = null;
            this.ga(l.hi);
            r.cf = null;
            this.ga(l.Ml);
            r.yc = null;
            this.ga(l.hi);
            r.cf = null;
            this.ga(l.Bl);
            r.Zj = null
        }
        ao(a) {
            function b(d) {
                return 0 == (Rh[a - 1] & d)
            }
            let c = a - 1;
            this.ga([160, 155, 150, 145, 140, 135, 130, 124, 119, 114, 109, 104, 99, 94, 89, 84, 79][c]);
            this.ga([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][c]);
            this.ga([164, 159, 154, 149, 144, 139, 134, 129, 123, 118, 113, 108, 103, 98, 93, 88, 83][c]);
            r.Mo = null;
            r.si = null;
            r.us = null;
            null != r.$ && b(1) && (this.ga(l.Dl),
            r.$ = null);
            null != r.Fe && b(2) && (this.ga(l.Kl),
            r.Fe = null);
            null != r.dl && b(4) && (this.ga(l.Hl),
            r.dl = null);
            null != r.mc && b(8) && (this.ga(l.Jl),
            r.mc = null);
            null != r.Te && b(64) && (this.ga(l.El),
            r.Te = null);
            null != r.rj && b(128) && (this.ga(l.Il),
            r.rj = null);
            null != r.Kc && b(512) && (this.ga(l.Cl),
            r.Kc = null);
            null != r.vb && b(2048) && (this.ga(l.gi),
            r.vb = null);
            null != r.Uj && b(4096) && (this.ga(l.gi),
            r.Uj = null);
            null != r.Ac && b(16384) && (this.ga(l.Nl),
            r.Ac = null);
            null != r.yj && b(65536) && (this.ga(l.Ll),
            r.yj = null);
            null != r.Fh && b(131072) && (this.ga(l.Gl),
            r.Fh = null);
            null != r.Ve && b(262144) && (this.ga(l.Fl),
            r.Ve = null);
            null != r.cf && b(524288) && (this.ga(l.hi),
            r.cf = null);
            null != r.yc && b(1048576) && (this.ga(l.Ml),
            r.yc = null);
            null != r.cf && b(524288) && (this.ga(l.hi),
            r.cf = null,
            this.ga(l.Bl),
            r.Zj = null)
        }
        Fa() {
            return "AbstractScene"
        }
    }
    ea.g = !0;
    ea.u = hc;
    Object.assign(ea.prototype, {
        j: ea
    });
    class Jc extends ea {
        constructor() {
            super()
        }
        za() {
            super.za();
            this.Ag = new A(null,this.createTexture(l.kw));
            this.node.R(this.Ag.B);
            this.wf(750, 750);
            var a = "logo";
            "ru" == l.Jy() && (a = "logo_ru");
            this.Kf = new A(this.xa,r.Gk.children[0],a);
            this.Kf.F();
            this.Kf.m(375);
            this.Kf.s(200);
            this.$ = new S;
            this.$.m(375);
            this.$.s(400);
            this.xa.appendChild(this.$);
            a = new A(this.$,r.Gk.children[0],"bubble");
            a.F();
            this.text = new wa(this.$,r.Gk.children[1]);
            this.text.Wa("100%");
            this.text.Gb(a.Y.x, a.Y.y);
            this.text.Rb(0, 0);
            this.text.Yh(!1);
            this.text.Wa("0%");
            this.text.m(-a.Y.x / 2);
            this.text.s(-a.Y.y / 2);
            this.text.wc(.7 * this.text.pp());
            this.Hk = this.X.Fk(this.ea.Pb.sceneToLoad);
            this.Vi = this.dd = 0;
            this.ni = Math.random() * jc * 2;
            this.oi = Math.random() * jc * 2;
            this.sj = .1 * Math.random() - .05;
            this.tj = .1 * Math.random() - .05
        }
        Va() {
            super.Va();
            1 < this.ea.ue() ? (this.Ag.ma(0),
            this.Ag.m(0),
            this.Ag.dv(this.ea.la()),
            this.Ag.cv(this.ea.ua())) : (this.Ag.ma(90),
            this.Ag.m(this.ea.la()),
            this.Ag.dv(this.ea.ua()),
            this.Ag.cv(this.ea.la()))
        }
        va() {
            this.ga(l.kw);
            super.va()
        }
        update(a) {
            super.update(a);
            this.Va();
            this.$.m(375);
            this.$.s(400);
            var b = 50 * Math.cos(this.ni);
            a = 50 * Math.sin(this.oi);
            this.ni += this.sj;
            this.oi += this.tj;
            let c = this.$;
            c.m(c.cb() + b);
            b = this.$;
            b.s(b.Ka + a);
            switch (this.Vi) {
            case 0:
                this.dd < this.Hk.sp() && (this.dd += 5,
                100 < this.dd && (this.dd = 100),
                this.zB(this.dd));
                this.text.Wa("" + this.dd + "%");
                this.Hk.rt() && 100 == this.dd && (this.Vi++,
                this.time = 0);
                break;
            case 1:
                .5 > this.time ? (this.sj *= .95,
                this.tj *= .95) : (this.Vi++,
                this.bj())
            }
        }
        zB() {}
        bj() {
            this.da(this.ea.Pb.sceneToLoad)
        }
        Ob(a) {
            return null == a ? 0 : .5
        }
        Fa() {
            return "LoadingScene"
        }
    }
    Jc.g = !0;
    Jc.u = ea;
    Object.assign(Jc.prototype, {
        j: Jc
    });
    class Le extends Jc {
        constructor() {
            super()
        }
        zB(a) {
            K.SN(a)
        }
        Fa() {
            return "FamobiLoadingScene"
        }
    }
    Le.g = !0;
    Le.u = Jc;
    Object.assign(Le.prototype, {
        j: Le
    });
    class sb extends ea {
        constructor() {
            super()
        }
        sc() {
            let a = [l.sf, l.Dd, l.fg, l.ko, l.Wg, l.Ie, l.gg, l.Zg, l.eg, l.dg, l.mo, l.JD];
            0 == E.yh() && a.push(1 < this.X.window.Dm() ? l.Wr : l.Xr);
            return a
        }
        Ob(a) {
            return a instanceof Nb ? 0 : super.Ob(a)
        }
        Nd(a, b) {
            null == b ? this.zi.aa(1 - a) : super.Nd(a, b)
        }
        mi() {
            super.mi();
            this.uc = new A(null,r.wx);
            this.node.R(this.uc.B)
        }
        Vd() {
            super.Vd();
            l.eb(l.ko) && (r.wx = this.createTexture(l.ko))
        }
        za() {
            super.za();
            this.mi();
            this.Oj();
            this.wf(600, 900);
            this.Vg = new A(null,r.Hb,k.SH);
            this.qg = new A(null,r.Hb,k.nH);
            this.node.R(this.Vg.B);
            this.node.R(this.qg.B);
            this.Kf = new A(this.xa,r.Hb,"ru" == l.Jy() ? k.xH : k.wH);
            this.Kf.m(300);
            this.Kf.s(220);
            this.Kf.F();
            this.Kf.J(.9);
            this.O = new A(this.xa,r.Hb);
            this.O.m(378);
            this.O.s(364);
            this.yC();
            this.O.F();
            this.Ko = 0;
            var a = Ob.pm(this.Xb("PLAY"));
            a.m(65);
            a.s(500);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            a = Ca.create(null, k.Pl, k.Ql, k.oH);
            a.m(219);
            a.s(617);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a)
        }
        gb() {
            super.gb();
            sb.Di = !1;
            this.xn();
            this.JA();
            1 == C.hint && W.fl() && 3 < E.yh() && 3 < this.time && this.pa(new wd);
            this.ga([63, 61, 59][C.lf]);
            r.O = null;
            this.jB();
            this.Va()
        }
        Va() {
            var a = 0;
            this.Xc.y = 900;
            var b = .9
              , c = this.ea.ue();
            1 < c && (2 < c && (c = 2),
            this.Xc.y = Ma(c, 1, 2, 900, 650),
            a = Ma(c, 1, 2, 0, -80),
            b = Ma(c, 1, 2, .9, .8));
            super.Va();
            this.buttons[1].s(500 + a);
            this.buttons[2].s(617 + a);
            this.Kf.J(b);
            c = this.ea.qt();
            a = this.Ca.la() / this.uc.Y.x;
            this.uc.J(a);
            this.uc.m((c.o + c.A) / 2);
            a = this.uc;
            a.m(a.cb() - this.uc.la() / 2);
            this.uc.s(this.Ca.ua() - this.uc.ua());
            this.JJ && (this.uc.s(c.D - c.C - this.uc.ua()),
            a = this.uc,
            a.s(a.Ka + this.ea.ue() * this.uc.ua() * .3));
            a = (c.A - c.o) / 2;
            b = .2;
            var d = this.ea.ue();
            1 < d && (b = .2 + (d - 1),
            .3 < b && (b = .3));
            b = new X(0,0,a,(c.D - c.C) * b);
            c = c.D;
            let e = b.D - b.C;
            b.D = c;
            b.C = c - e;
            this.Ot = b.rh(1);
            c = 1 < d ? .6 : .4;
            d = this.Ot;
            this.Vg.J((d.A - d.o) * c / this.Vg.Y.x);
            d = this.Ot;
            this.Vg.m((d.o + d.A) / 2 - this.Vg.la() / 2);
            this.Vg.s(this.Ot.D - 1.1 * this.Vg.ua());
            this.Vg.aa(.5);
            d = b.A - b.o;
            b.o = a;
            b.A = a + d;
            a = this.Pt = b.rh(1);
            this.qg.J((a.A - a.o) * c / this.qg.Y.x);
            a = this.Pt;
            this.qg.m((a.o + a.A) / 2 - this.qg.la() / 2);
            this.qg.s(this.Pt.D - 1.1 * this.qg.ua());
            this.qg.aa(.5)
        }
        update(a) {
            super.update(a);
            if (null == this.Vs(wd, this) && (this.Ko -= a,
            0 >= this.Ko && this.X.ve().cg(0) && this.O.Jb(this.Dc.i))) {
                a = C.lf + 1;
                let b = zi;
                a %= b;
                0 > a && (a += b);
                C.lf = a;
                C.hint = 0;
                this.yC();
                this.Pz();
                z.play(z.Xg);
                C.flush();
                this.Ko = .25
            }
        }
        Ic(a) {
            super.Ic(a)
        }
        Hd() {
            this.bb(1) && (0 == E.yh() ? this.da(Nb) : this.da(Zb));
            this.bb(2) && this.da(kc)
        }
        yC() {
            this.O.bc(k.fi(k.mH, C.lf))
        }
        Pz() {
            this.O.J(.8);
            this.O.Yb().AO();
            this.O.Yb().scale(1, 1, Ba.iy(.1))
        }
        JA() {
            0 == C.Jf[0][0] ? this.X.Fk(Nb) : this.X.Fk(Zb)
        }
        Fa() {
            return "MenuScene"
        }
    }
    sb.g = !0;
    sb.u = ea;
    Object.assign(sb.prototype, {
        j: sb
    });
    class Kc extends sb {
        constructor() {
            super()
        }
        za() {
            super.za();
            K.hasFeature("credits") || (this.Vg.N(!1),
            this.qg.N(!1))
        }
        gb() {
            super.gb();
            Sh || (Sh = !0,
            K.OJ())
        }
        Hd() {
            if (this.bb(1))
                if (0 == E.yh())
                    if (K.hasFeature("intro"))
                        this.da(Ne);
                    else {
                        let a = this
                          , b = Nc;
                        K.qr(va(), function() {
                            a.da(b)
                        })
                    }
                else
                    this.da(zb);
            this.bb(2) && this.da(xd)
        }
        JA() {
            0 == C.Jf[0][0] ? this.X.Fk(Nb) : this.X.Fk(zb)
        }
        Fa() {
            return "FamobiMenuScene"
        }
    }
    Kc.g = !0;
    Kc.u = sb;
    Object.assign(Kc.prototype, {
        j: Kc
    });
    class kc extends ea {
        constructor() {
            super()
        }
        sc() {
            return [l.sf, l.Dd, l.fg, l.Wg, l.Ie, l.gg, l.Zg, l.eg, l.dg]
        }
        za() {
            super.za();
            this.mi();
            this.Oj();
            this.wf(600, 900);
            this.Xl();
            var a = Ca.create(null, k.Sr, k.Tr, k.QH);
            a.m(65);
            a.s(303);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            a = Ca.create(null, k.Sr, k.Tr, k.DH);
            a.m(311.5);
            a.s(303);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            this.x = [];
            this.x[1] = new A(this.xa,r.Hb,k.Ow);
            this.x[1].m(65);
            this.x[1].s(303);
            this.x[1].N(!1);
            this.x[2] = new A(this.xa,r.Hb,k.Ow);
            this.x[2].m(311.5);
            this.x[2].s(303);
            this.x[2].N(!1);
            this.mr(1, C.Rd);
            this.mr(2, C.Hc);
            a = Ob.pm(this.Xb("LANGUAGE"));
            a.m(65);
            a.s(420);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            a = Ob.pm(this.Xb("RESET"));
            a.m(65);
            a.s(537);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a)
        }
        gb() {
            super.gb();
            this.xn();
            this.Ro = C.language;
            this.Lt = zg.indexOf(this.Ro)
        }
        Va() {
            let a = this.ea.ue()
              , b = 0;
            this.Xc.y = 900;
            1.25 < a && (this.Xc.y = 650,
            b = 1 / a * -350);
            super.Va();
            this.xa.s(this.sg.C + b)
        }
        zd() {
            super.zd();
            if (this.Ro != C.language) {
                this.X.P.ga(r.th);
                r.Jk[l.Dd] = null;
                r.th = this.createTexture(l.Dd);
                let a = r.lt(C.language, C.language);
                r.qc = r.th.children[a];
                r.Cm = r.th.children[a + 1];
                this.X.hJ()
            }
        }
        Hd() {
            this.bb(0) && (C.flush(),
            this.ac());
            this.bb(1) && this.Un();
            this.bb(2) && this.Tn();
            if (this.bb(3)) {
                var a = this.Lt + 1;
                let b = zg.length;
                a %= b;
                0 > a && (a += b);
                this.Lt = a;
                C.language = zg[this.Lt];
                l.Ru(C.language);
                a = r.lt(this.Ro, C.language);
                r.qc = r.th.children[a];
                r.Cm = r.th.children[a + 1];
                this.buttons[3].BC();
                this.buttons[4].BC();
                this.buttons[3].selected = !1;
                this.buttons[3].ee = 0;
                this.buttons[3].vB(this.Xb("LANGUAGE"));
                this.buttons[4].vB(this.Xb("RESET"))
            }
            this.bb(4) && this.RB()
        }
        da(a) {
            this.Ro != C.language && (l.uq(l.Dd),
            l.uq(l.sf));
            super.da(a)
        }
        RB() {
            this.da(Oc)
        }
        Un() {
            C.Rd = !C.Rd;
            this.mr(1, C.Rd);
            this.buttons[1].selected = !1;
            this.buttons[1].ee = 0
        }
        Tn() {
            C.Hc = !C.Hc;
            C.Hc ? this.X.Ga.De(1) : this.X.Ga.De(0);
            this.mr(2, C.Hc);
            this.buttons[2].selected = !1;
            this.buttons[2].ee = 0
        }
        ac() {
            this.da(sb)
        }
        mr(a, b) {
            let c = this.buttons[a]
              , d = c.icon;
            b ? d.Hn(null) : d.Hn((new $b).Mu(-.5));
            c.icon.aa(b ? 1 : .5);
            this.x[a].N(!b)
        }
        Fa() {
            return "OptionsScene"
        }
    }
    kc.g = !0;
    kc.u = ea;
    Object.assign(kc.prototype, {
        j: kc
    });
    class xd extends kc {
        constructor() {
            super()
        }
        za() {
            super.za();
            K.hasFeature("external_mute") && (this.buttons[1].l.N(!1),
            this.buttons[2].l.N(!1))
        }
        ac() {
            this.da(Kc)
        }
        RB() {
            this.da(Oe)
        }
        Fa() {
            return "FamobiOptionsScene"
        }
    }
    xd.g = !0;
    xd.u = kc;
    Object.assign(xd.prototype, {
        j: xd
    });
    class Oc extends ea {
        constructor() {
            super()
        }
        sc() {
            return [l.sf, l.Dd, l.fg, l.Wg, l.Ie, l.gg, l.Zg, l.eg]
        }
        za() {
            super.za();
            this.mi();
            this.Oj();
            this.wf(600, 900);
            this.Xl();
            var a = new wa(this.xa,r.qc);
            a.m(20);
            a.s(100);
            a.wc(50);
            a.Lg(!0);
            a.Rb(0);
            a.Gb(560, 200);
            a.Wa(this.Xb("RESET_TEXT"));
            a = new wa(this.xa,r.Cm);
            a.Wa(this.Xb("RESET_HOLD_TEXT"));
            a.wc(40);
            a.Lg(!0);
            a.Rb(0);
            a.Gb(560, 100);
            a.m(20);
            a.s(225);
            a = Ob.pm(this.Xb("YES"));
            a.m(65);
            a.s(383);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            a = Ob.pm(this.Xb("NO"));
            a.m(65);
            a.s(500);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            this.blink = this.state = 0
        }
        Va() {
            let a = this.ea.ue()
              , b = 0;
            this.Xc.y = 900;
            1.25 < a && (this.Xc.y = 650,
            b = 1 / a * -100);
            super.Va();
            this.xa.s(this.sg.C + b)
        }
        update(a) {
            super.update(a);
            if (2 == this.state)
                .1 > this.time || (this.buttons[1].Pu(0 == (this.blink & 1)),
                this.blink++,
                this.time = 0,
                10 == this.blink && (this.state = 3,
                this.sI()));
            else if (this.Dc.yz(1) && this.X.ve().Kp(0))
                switch (this.state) {
                case 0:
                    this.time = 0;
                    this.state = 1;
                    break;
                case 1:
                    3 < this.time && (a = C.language,
                    C.instance.reset(),
                    C.language = a,
                    C.flush(),
                    E.reset(),
                    this.state = 2,
                    this.blink = this.time = 0)
                }
        }
        Hd() {
            this.bb(0) && this.da(sb);
            2 != this.state && this.bb(1) && (this.time = this.state = 0,
            this.buttons[1].selected = !1,
            this.buttons[1].ee = 0);
            this.bb(2) && this.ac()
        }
        sI() {
            this.da(sb)
        }
        ac() {
            this.da(kc)
        }
        Fa() {
            return "ResetScene"
        }
    }
    Oc.g = !0;
    Oc.u = ea;
    Object.assign(Oc.prototype, {
        j: Oc
    });
    class Oe extends Oc {
        constructor() {
            super()
        }
        ac() {
            this.da(xd)
        }
        Fa() {
            return "FamobiResetScene"
        }
    }
    Oe.g = !0;
    Oe.u = Oc;
    Object.assign(Oe.prototype, {
        j: Oe
    });
    class lc extends ea {
        constructor() {
            super();
            this.Tm = (new ka("(iPad|iPhone)","g")).match(ja.navigator.platform);
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (this.Tm = !0)
        }
        Ob() {
            return 0
        }
        gb() {
            super.gb();
            this.X.window.canvas.style.visibility = "hidden";
            this.X.Ga.De(0);
            this.Fd = window.document.createElement("div");
            this.Fd.style.display = "flex";
            this.Fd.style.position = "fixed";
            this.Fd.style.left = "0px";
            this.Fd.style.top = "0px";
            this.Fd.style.width = "100%";
            this.Fd.style.height = "100%";
            this.Fd.style.justifyContent = "center";
            this.Fd.style.alignItems = "center";
            window.document.body.appendChild(this.Fd);
            try {
                this.video = window.document.createElement("video"),
                this.Fd.appendChild(this.video),
                this.video.muted = this.Tm,
                this.video.autoplay = !0,
                this.video.controls = !1,
                this.video.playsInline = !0,
                this.video.addEventListener("ended", O(this, this.ended)),
                this.video.addEventListener("mousedown", O(this, this.$z)),
                this.video.addEventListener("touchend", O(this, this.pC)),
                this.url = URL.createObjectURL(this.getData()),
                this.video.src = this.url,
                this.video.style.width = "100%",
                this.video.style.height = "100%",
                this.video.style.bottom = "0",
                this.video.style.left = "0",
                this.video.style.objectFit = "contain",
                this.video.style.background = "black"
            } catch (b) {
                this.ended()
            }
            let a = this;
            this.bP = this.X.window.Of(1, function() {
                try {
                    a.video.muted = !1
                } catch (b) {}
            });
            this.aP = this.X.window.Of(2, function() {
                try {
                    a.video.muted = !0
                } catch (b) {}
            })
        }
        zd() {
            super.zd();
            this.aP();
            this.bP()
        }
        $z() {
            this.video.muted = !1
        }
        pC() {
            this.video.muted = !1
        }
        ended() {
            this.Fd.removeChild(this.video);
            window.document.body.removeChild(this.Fd);
            this.X.window.canvas.style.visibility = "";
            this.video.removeEventListener("ended", O(this, this.ended));
            this.video.removeEventListener("mousedown", O(this, this.$z));
            this.video.removeEventListener("touchend", O(this, this.pC));
            URL.revokeObjectURL(this.url);
            this.X.Ga.De(C.Hc ? 1 : 0);
            this.qA()
        }
        Fa() {
            return "VideoScene"
        }
    }
    lc.g = !0;
    lc.u = ea;
    Object.assign(lc.prototype, {
        j: lc
    });
    class Nb extends lc {
        constructor() {
            super()
        }
        sc() {
            return [1 < za.instance.window.Dm() ? l.Wr : l.Xr]
        }
        getData() {
            let a = l.data.G[l.Xr];
            return null != a ? a : l.data.G[l.Wr]
        }
        qA() {
            E.Sq(1);
            E.mj(1);
            E.Uu(1);
            this.bj()
        }
        bj() {
            this.da(Za)
        }
        gb() {
            super.gb();
            this.X.Fk(Za)
        }
        Fa() {
            return "IntroVideoScene"
        }
    }
    Nb.g = !0;
    Nb.u = lc;
    Object.assign(Nb.prototype, {
        j: Nb
    });
    class Ne extends Nb {
        constructor() {
            super()
        }
        bj() {
            let a = this
              , b = Nc;
            K.qr(va(), function() {
                a.da(b)
            })
        }
        Fa() {
            return "FamobiIntroVideoScene"
        }
    }
    Ne.g = !0;
    Ne.u = Nb;
    Object.assign(Ne.prototype, {
        j: Ne
    });
    class Zb extends ea {
        constructor() {
            super()
        }
        sc() {
            return [l.sf, l.Dd, l.fg, l.Wg, l.Ie, l.gg, l.Zg, l.eg, l.Or, l.ND, l.dg]
        }
        za() {
            super.za();
            this.ga(l.Lr);
            this.ga(l.Mr);
            this.ga(l.Nr);
            this.ZO();
            this.mi();
            this.wf(600, 900);
            this.Oj();
            this.Xl();
            r.Vf = this.createTexture(l.Or);
            this.ux = 750 / r.Vf.Nb.Xe(k.Qr).cc.x;
            this.offsetY = 150;
            this.$B = .7 * r.Vf.Nb.Xe(k.Qr).cc.y;
            this.Vf = [];
            let a = 0;
            for (; 3 > a; ) {
                var b = a++;
                let c = new S(null,this.xa);
                new A(c,r.Vf,k.Qr);
                new A(c,r.Vf,[k.hG, k.iG, k.jG][b]);
                c.F();
                c.J(this.ux);
                c.m(300);
                c.s(this.offsetY + b * this.$B);
                this.Vf.push(c);
                let d = new wa(c,r.qc);
                d.m(312);
                d.s(140);
                d.wc(70);
                d.Rb(0);
                d.Gb(400, 100);
                d.Wa(this.Xb("SEASON_NO", Ha.ie(b + 1)));
                b = Ca.create(r.Vf, k.kG, k.lG);
                b.m(512);
                b.s(285);
                b.l.F();
                c.appendChild(b.l);
                this.buttons.push(b);
                this.pa(b)
            }
        }
        gb() {
            super.gb();
            this.xn();
            this.jB()
        }
        Va() {
            super.Va();
            let a = Math.min(Math.max(0, this.X.window.Dm() - 1), .2)
              , b = 0;
            for (; 3 > b; ) {
                let c = b++;
                this.Vf[c].J(this.ux + a);
                this.Vf[c].s(this.offsetY + c * (this.$B + 150 * a))
            }
        }
        zd() {
            super.zd();
            r.Vf = null;
            this.ga(l.Or)
        }
        Hd() {
            if (this.bb(0))
                C.flush(),
                this.ao(E.box),
                this.ac();
            else
                for (var a = 1; 4 > a; ) {
                    let b = a++;
                    this.bb(b) && this.zJ(b)
                }
        }
        zJ(a) {
            a != E.Za && (this.ga([14, 12, 10][E.Za - 1]),
            r.Cb = null);
            E.Sq(a);
            this.ao(E.box);
            switch (a) {
            case 1:
                E.mj(1);
                break;
            case 2:
                E.mj(6);
                break;
            case 3:
                E.mj(11)
            }
            this.da(this.Sy()[a - 1])
        }
        Sy() {
            return [Hb, Ab, Ib]
        }
        ac() {
            this.da(sb)
        }
        Fa() {
            return "SelectSeasonScene"
        }
    }
    Zb.g = !0;
    Zb.u = ea;
    Object.assign(Zb.prototype, {
        j: Zb
    });
    class zb extends Zb {
        constructor() {
            super()
        }
        Sy() {
            return [mc, nc, oc]
        }
        ac() {
            this.da(Kc)
        }
        Fa() {
            return "FamobiSelectSeasonScene"
        }
    }
    zb.g = !0;
    zb.u = Zb;
    Object.assign(zb.prototype, {
        j: zb
    });
    class ub extends ea {
        constructor() {
            super()
        }
        sc() {
            return [l.sf, l.Dd, l.fg, l.Wg, l.Ie, l.gg, l.eg, l.dg, l.Zg]
        }
        za() {
            super.za();
            this.ab = E.box;
            10 < this.ab ? this.ab -= 10 : 5 < this.ab && (this.ab -= 5);
            this.state = 0;
            this.mi();
            this.Oj();
            this.wf(650, 650);
            this.Cb = new S(null,this.xa);
            this.Cb.m(75);
            this.Cb.s(75);
            this.offsetX = this.Cb.cb();
            this.advance = 500;
            var a = this.ht()
              , b = this.gt();
            switch (E.Za) {
            case 2:
                var c = 5;
                break;
            case 3:
                c = 7;
                break;
            default:
                c = 5
            }
            this.Vj = c;
            this.xx = [];
            for (var d = c = 0, e = this.Vj; d < e; ) {
                ++d;
                var f = new A(this.Cb);
                f.setColor(new F(.17647058823529413,.17647058823529413,.20784313725490197,1), 300, 300);
                f.m(100 + c);
                f.s(150);
                this.xx.push(f);
                c += this.advance
            }
            this.Pa = new A(this.Cb,r.Cb,k.QF);
            this.clipPath = new X(0,0,177,182);
            this.fm = [];
            e = this.Vj;
            this.$k = e += 3 > E.Za ? 1 : 0;
            for (d = c = 0; d < e; ) {
                f = d++;
                var g = this.Qp(f);
                let q = new S(null,this.Cb);
                this.fm.push(q);
                let p = f == this.Vj;
                q.m(c);
                var h = null;
                if (p && 3 > E.Za)
                    h = new S(null,q),
                    new A(h,r.Cb,b[f]);
                else {
                    new A(q,r.Cb,b[f]);
                    var m = new A(q,r.Cb,b[f]);
                    m.fe(m.Y.x, 0);
                    m.sa(-1)
                }
                if (!p && E.Ip(g)) {
                    m = new S(null,q);
                    m.iO();
                    new A(m,r.Cb,k.Pr);
                    var n = new A(m,r.Cb,k.Pr);
                    n.fe(n.Y.x, 0);
                    n.sa(-1);
                    m.F();
                    n = r.Cb.Nb.Xe(k.Pr).cc;
                    m.m(m.cb() + n.x);
                    m.s(m.Ka + n.y / 2);
                    0 < E.mt(g) && (m = new A(q,r.Hb,k.Iw),
                    m.m(260),
                    m.s(320),
                    m.J(.7),
                    n = new wa(q,r.qc),
                    n.Gb(80, m.ua()),
                    n.Rb(1, 0),
                    n.$u(-3),
                    n.Wa(Ha.ie(Th[g - 1])),
                    n.wc(1.2 * (m.ua() | 0)),
                    n.m(m.cb() - 80),
                    n.s(m.Ka));
                    3 == E.Za && f == this.Vj - 1 && (new A(q,r.Cb,k.gG),
                    m = new wa(q,r.qc),
                    m.Wa(this.Xb("MECH_HARDEST")),
                    m.Gb(184, 60),
                    m.wc(36),
                    m.Rb(0),
                    m.m(253),
                    m.s(425),
                    m.ma(-16))
                }
                p || 75 != E.xy(g) || new A(q,r.Cb,k.UF);
                p && 3 > E.Za ? (g = new wa(h,r.qc),
                g.Gb(300, 100),
                g.m(100),
                g.s(206),
                g.Wa(a[f]),
                g.wc(60),
                g.Lg(!0),
                g.Pq(-40),
                g.Rb(0, 0),
                h.Xj(),
                h.ma(15)) : (h = new wa(q,r.qc),
                h.Gb(400, 200),
                h.m(56),
                h.Wa(a[f]),
                h.wc(70),
                h.Lg(!0),
                h.Rb(0),
                h.Pq(-30),
                h.shape(),
                h.s(1 == h.nt() ? 110 : 90));
                c += this.advance
            }
            this.vc = [];
            for (a = 0; 2 > a; )
                ++a,
                b = new A(null,r.Hb,k.Kw),
                b.F(),
                this.xa.appendChild(b),
                this.vc.push(b);
            this.Xl();
            this.Ec = this.add(pc);
            a = E.pt();
            this.Ec.Wa(null == a ? "null" : "" + a);
            this.wI = new Pe(this.xa.node,new X(145,145,505,505));
            this.wr();
            this.Ao = !0;
            this.ts = !1;
            this.my = !0
        }
        hp() {
            this.da(Jb)
        }
        wr() {
            1 < this.ab ? (this.vc[0].bc(k.Kw),
            this.vc[0].Wh(1)) : (this.vc[0].bc(k.GH),
            this.vc[0].Wh(2));
            this.ab == this.$k ? (this.vc[1].bc(k.EH),
            this.vc[1].Wh(2)) : (this.vc[1].bc(k.FH),
            this.vc[1].Wh(1));
            this.vc[0].J(1);
            this.vc[1].J(1)
        }
        fv() {
            this.Hq = -1;
            this.hs();
            this.ha(1);
            this.le = -(this.ab - 1) * this.advance;
            this.x1 = this.le - this.advance * this.Hq;
            this.le += this.offsetX;
            this.x1 += this.offsetX;
            this.Ao = this.ab != this.$k || 3 == E.Za;
            this.ab--;
            this.wr();
            this.vc[0].J(.9)
        }
        Xq() {
            this.Hq = 1;
            this.hs();
            this.ha(1);
            this.le = -(this.ab - 1) * this.advance;
            this.x1 = this.le - this.advance * this.Hq;
            this.le += this.offsetX;
            this.x1 += this.offsetX;
            this.Ao = this.ab != this.Vj;
            this.ab++;
            this.wr();
            this.vc[1].J(.9)
        }
        update(a) {
            super.update(a);
            if ("Running" == this.Ce) {
                var b = this.X.ve().cg(0);
                a = this.X.ve().ei(0);
                switch (this.state) {
                case 0:
                    this.time > (this.my ? 1 : 0) && !this.ts && (this.ts = !0,
                    this.my = !1,
                    this.yx());
                    if (this.Wo) {
                        var c = this.X.ve().position[0];
                        this.Xo = c.x - this.ey.x;
                        50 > Math.abs(c.y - this.ey.y) && (-100 > this.Xo && this.ab < this.$k && (this.Wo = !1,
                        this.Xq()),
                        100 < this.Xo && 1 < this.ab && (this.Wo = !1,
                        this.fv()))
                    }
                    c = this.wI.Jb(this.Dc.i);
                    var d = this.vc[0].Jb(this.Dc.i);
                    let e = this.vc[1].Jb(this.Dc.i);
                    b && (this.yn = 1 < this.ab && d,
                    this.pn = this.ab < this.$k && e,
                    this.xI = this.ab <= this.$k && c,
                    this.Wo = !0,
                    b = this.Dc.i,
                    this.ey = new F(b.x,b.y,0,1),
                    this.Xo = 0);
                    a && (this.yn && d && (this.fv(),
                    z.play(z.Xg)),
                    this.pn && e && (this.Xq(),
                    z.play(z.Xg)),
                    this.Wo = this.pn = this.yn = !1,
                    this.xI && c && 10 > Math.abs(this.Xo) && (z.play(z.Xg),
                    this.ab > this.Vj ? this.Wk() && this.ha(4) : (a = this.Qp(this.ab - 1),
                    E.Ip(a) ? (this.Pb.starCount = E.mt(a),
                    this.Fg(yd)) : (E.box != a && this.ao(E.box),
                    E.mj(a),
                    this.hp(),
                    this.ha(4)))));
                    break;
                case 1:
                    c = this.Qp(this.ab - 1);
                    17 >= c && E.Ip(c) && E.Mx(c) || (c = this.vc[0].Jb(this.Dc.i),
                    d = this.vc[1].Jb(this.Dc.i),
                    b && (this.yn = 1 < this.ab && c,
                    this.pn = this.ab < this.$k && d),
                    a && (this.yn && c && (this.Pa.m(-(this.x1 - this.offsetX)),
                    this.fv(),
                    z.play(z.Xg)),
                    this.pn && d && (this.Pa.m(-(this.x1 - this.offsetX)),
                    this.Xq(),
                    z.play(z.Xg)),
                    this.pn = this.yn = !1));
                    a = this.wb(.2);
                    b = this.le;
                    this.Cb.m(b + (this.x1 - b) * Ba.Qf()(a));
                    b = -(this.Cb.cb() - this.offsetX);
                    this.Ao ? (this.Pa.m(b),
                    b = b + this.le - this.offsetX,
                    0 < this.Hq ? b > this.advance / 2 ? (c = this.clipPath,
                    b = this.advance - b,
                    d = c.A - c.o,
                    c.o = b,
                    c.A = b + d) : (c = this.clipPath,
                    b = -b,
                    d = c.A - c.o,
                    c.o = b,
                    c.A = b + d) : (b = -b,
                    b > this.advance / 2 ? (c = this.clipPath,
                    b = -this.advance + b,
                    d = c.A - c.o,
                    c.o = b,
                    c.A = b + d) : (c = this.clipPath,
                    d = c.A - c.o,
                    c.o = b,
                    c.A = b + d)),
                    this.Pa.JB(this.clipPath)) : this.Pa.JB(null);
                    1 == a && (this.ts = !1,
                    this.ha(2),
                    this.wr());
                    break;
                case 2:
                    a = this.Qp(this.ab - 1);
                    E.Ip(a) && E.Mx(a) ? (this.yx(),
                    this.ha(3),
                    this.fm[this.ab - 1].np("lock").Jq(),
                    z.play(z.MG),
                    b = new Qe,
                    c = this.sg,
                    b.l.m((c.o + c.A) / 2),
                    d = c = this.sg,
                    b.l.s((c.C + c.D) / 2 + .15 * (d.D - d.C)),
                    this.pa(b),
                    this.node.R(b.l.B),
                    E.$O(a)) : this.ha(0);
                    break;
                case 3:
                    a = this.fm[this.ab - 1].np("lock"),
                    b = this.wb(1.5),
                    a.J(1 + .5 * b),
                    a.aa(1 - b),
                    a.Hn((new $b).Mu(.5 * -b)),
                    1 == b && this.ha(0)
                }
            }
        }
        ha(a) {
            this.state = a;
            this.time = 0
        }
        yx() {
            this.vs = this.pa(new Pc(this.fm[this.ab - 1]));
            this.nA = this.pa(new Pc(this.Pa))
        }
        hs() {
            null != this.vs && (this.vs.va(),
            this.nA.va(),
            this.nA = this.vs = null)
        }
        Qp(a) {
            a += 1;
            2 == E.Za && (a += 5);
            3 == E.Za && (a += 10);
            return a
        }
        Wk() {
            return !1
        }
        Ob(a) {
            return null != a && a instanceof yd ? 1.5 : super.Ob(a)
        }
        gb() {
            super.gb();
            this.xn();
            this.ga(l.ko);
            r.Kf = null;
            r.wx = null;
            null != this.caller && this.caller.Pb.boxComplete && this.Xq()
        }
        Va() {
            super.Va();
            this.hs();
            this.advance = 500;
            let a = this.ea.ue();
            .6 > a || (this.advance *= Math.min(1.5, Ma(a, .6, 2, 1, 1.2)));
            for (var b = 0, c = 0, d = this.xx; c < d.length; ) {
                let e = d[c];
                ++c;
                e.m(100 + b);
                e.aa(.5);
                b += this.advance
            }
            c = b = 0;
            for (d = this.fm; c < d.length; )
                d[c++].m(b),
                b += this.advance;
            this.Cb.m(-(this.ab - 1) * this.advance + this.offsetX);
            this.Ao && (this.Pa.m(-(this.Cb.cb() - this.offsetX)),
            this.ha(0));
            b = this.vc[0];
            c = this.vc[1];
            .7 < a ? (b.m(50),
            b.s(325),
            c.m(600),
            c.s(325)) : (b.m(250),
            b.s(650),
            c.m(400),
            c.s(650));
            this.Vs(pc, this).layout()
        }
        Hd() {
            this.bb(0) && this.ac()
        }
        ac() {
            this.da(Zb)
        }
        Fa() {
            return "SelectBoxScene"
        }
    }
    ub.g = !0;
    ub.u = ea;
    Object.assign(ub.prototype, {
        j: ub
    });
    class Hb extends ub {
        constructor() {
            super()
        }
        sc() {
            return super.sc().concat([l.Lr, l.KD])
        }
        Vd() {
            super.Vd();
            r.Cb = this.createTexture(l.Lr)
        }
        Wk() {
            this.da(Ab);
            return !0
        }
        ht() {
            let a = this.rp("BOX1_LABEL", "BOX2_LABEL", "BOX3_LABEL", "BOX4_LABEL", "BOX5_LABEL", "NEXT_SEASON")
              , b = 0;
            for (; 5 > b; ) {
                let c = b++;
                a[c] = c + 1 + ". " + a[c]
            }
            return a
        }
        gt() {
            return [k.LF, k.MF, k.NF, k.OF, k.PF, k.zw]
        }
        Fa() {
            return "Season1Scene"
        }
    }
    Hb.g = !0;
    Hb.u = ub;
    Object.assign(Hb.prototype, {
        j: Hb
    });
    class mc extends Hb {
        constructor() {
            super()
        }
        Wk() {
            this.da(zb);
            return !0
        }
        ac() {
            this.da(zb)
        }
        hp() {
            this.da(Pb)
        }
        Fa() {
            return "FamobiSeason1Scene"
        }
    }
    mc.g = !0;
    mc.u = Hb;
    Object.assign(mc.prototype, {
        j: mc
    });
    class Ab extends ub {
        constructor() {
            super()
        }
        sc() {
            return super.sc().concat([l.Mr, l.LD])
        }
        za() {
            null != this.caller && this.caller instanceof Hb && (E.Sq(2),
            this.ao(E.box),
            E.mj(6));
            super.za()
        }
        gb() {
            super.gb();
            this.ga(14)
        }
        Vd() {
            super.Vd();
            r.Cb = this.createTexture(l.Mr)
        }
        Wk() {
            this.da(Ib);
            return !0
        }
        ht() {
            let a = this.rp("BOX6_LABEL", "BOX7_LABEL", "BOX8_LABEL", "BOX9_LABEL", "BOX10_LABEL", "NEXT_SEASON")
              , b = 0;
            for (; 5 > b; ) {
                let c = b++;
                a[c] = c + 1 + 5 + ". " + a[c]
            }
            return a
        }
        gt() {
            return [k.WF, k.XF, k.YF, k.ZF, k.VF, k.zw]
        }
        Fa() {
            return "Season2Scene"
        }
    }
    Ab.g = !0;
    Ab.u = ub;
    Object.assign(Ab.prototype, {
        j: Ab
    });
    class nc extends Ab {
        constructor() {
            super()
        }
        Wk() {
            this.da(zb);
            return !0
        }
        ac() {
            this.da(zb)
        }
        hp() {
            this.da(Pb)
        }
        Fa() {
            return "FamobiSeason2Scene"
        }
    }
    nc.g = !0;
    nc.u = Ab;
    Object.assign(nc.prototype, {
        j: nc
    });
    class Ib extends ub {
        constructor() {
            super()
        }
        sc() {
            return super.sc().concat([l.Nr, l.MD])
        }
        za() {
            null != this.caller && this.caller instanceof Ab && (E.Sq(3),
            this.ao(E.box),
            E.mj(11));
            super.za()
        }
        gb() {
            super.gb();
            this.ga(12)
        }
        Vd() {
            super.Vd();
            r.Cb = this.createTexture(l.Nr)
        }
        ht() {
            let a = this.rp("BOX11_LABEL", "BOX12_LABEL", "BOX13_LABEL", "BOX14_LABEL", "BOX15_LABEL", "BOX16_LABEL", "BOX17_LABEL")
              , b = 0;
            for (; 7 > b; ) {
                let c = b++;
                a[c] = c + 1 + 10 + ". " + a[c]
            }
            return a.slice(0, 7)
        }
        gt() {
            return [k.$F, k.aG, k.bG, k.cG, k.dG, k.eG, k.fG].slice(0, 7)
        }
        Fa() {
            return "Season3Scene"
        }
    }
    Ib.g = !0;
    Ib.u = ub;
    Object.assign(Ib.prototype, {
        j: Ib
    });
    class oc extends Ib {
        constructor() {
            super()
        }
        Wk() {
            this.da(zb);
            return !0
        }
        ac() {
            this.da(zb)
        }
        hp() {
            this.da(Pb)
        }
        Fa() {
            return "FamobiSeason3Scene"
        }
    }
    oc.g = !0;
    oc.u = Ib;
    Object.assign(oc.prototype, {
        j: oc
    });
    class Jb extends ea {
        constructor() {
            super()
        }
        sc() {
            let a = [l.sf, l.Dd, l.Wg, l.Ie, l.gg, l.lo, l.mw, l.Wg, l.eg, l.dg, l.Zg]
              , b = E.box - 1;
            a.push([161, 156, 151, 146, 141, 136, 131, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80][b]);
            a.push([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][b]);
            a.push([163, 158, 153, 148, 143, 138, 133, 128, 122, 117, 112, 107, 102, 97, 92, 87, 82][b]);
            return a
        }
        gB(a) {
            this.uA(a)
        }
        uA(a) {
            E.Uu(a);
            z.play(z.Xg);
            this.state = 1;
            this.time = 0
        }
        za() {
            super.za();
            this.zi.N(!0);
            null != Ra.instance && Ra.instance.va();
            this.Ia = this.add(Ra);
            this.ea.back.R(this.Ia.node);
            this.state = 0;
            this.Oj();
            this.Xl();
            this.Um = new S;
            var a = r.Hb.Nb.Xe(k.Ur).cc;
            let b = a.x - 20
              , c = a.y
              , d = 1;
            this.yt = new zd(5,5);
            let e = this;
            this.yt.forEach(function(f, g, h) {
                d += 1;
                f = new Qc(d - 1);
                e.Um.appendChild(f.l);
                f.l.m(g * b);
                f.l.s(h * c);
                return f
            });
            this.Um.m(-5);
            this.size = new Sa(5 * b,5 * c);
            this.wf(this.size.x, this.size.y);
            this.xa.appendChild(this.Um);
            for (a = this.yt.iterator(); a.fb(); ) {
                let f = a.next();
                E.UK(f.level) && f.PN(E.Ky(f.level))
            }
            this.Ec = this.add(pc);
            a = E.xy();
            this.Ec.Wa(0 == a ? "0" : "" + a + "/75");
            this.xn()
        }
        gb() {
            super.gb();
            this.X.Ga.De(C.Hc ? 1 : 0)
        }
        va() {
            super.va();
            this.Ia = null
        }
        Vd() {
            super.Vd();
            r.si = this.createTexture([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][E.box - 1])
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 0:
                if (this.X.ve().cg(0))
                    for (a = this.yt.iterator(); a.fb(); ) {
                        let b = a.next();
                        if (b.Jb(this.Dc.i)) {
                            this.wt = b;
                            break
                        }
                    }
                this.X.ve().ei(0) && null != this.wt && this.wt.Jb(this.Dc.i) && this.gB(this.wt.level);
                break;
            case 1:
                a = this.wb(.3);
                this.wh().Ee(1 - a);
                1 == a && (this.Us(),
                this.Ia.YI(),
                this.state = 2);
                break;
            case 2:
                0 == this.Ia.state && (this.state = 3,
                this.Ia.remove(),
                this.bj())
            }
        }
        Oc(a, b) {
            b instanceof Za ? 0 == a && (this.ea.back.removeChild(this.Ia.node),
            this.ea.ya.R(this.Ia.node)) : (super.Oc(a, b),
            1 == a && b instanceof ub && this.Ia.va())
        }
        Va() {
            this.Xc.y = this.size.y;
            this.Um.s(0);
            let a = this.ea.ue();
            !this.X.Qi && .7 < a && (this.Xc.y += 400,
            this.Um.s(200));
            super.Va();
            this.Ia.layout();
            this.Vs(pc, this).layout()
        }
        Hd() {
            this.bb(0) && this.ac()
        }
        ac() {
            switch (E.Za) {
            case 1:
                this.da(Hb);
                break;
            case 2:
                this.da(Ab);
                break;
            case 3:
                this.da(Ib)
            }
        }
        bj() {
            this.da(Za)
        }
        Fa() {
            return "SelectLevelScene"
        }
    }
    Jb.g = !0;
    Jb.u = ea;
    Object.assign(Jb.prototype, {
        j: Jb
    });
    class Pb extends Jb {
        constructor() {
            super()
        }
        gB(a) {
            let b = this;
            K.qr(va(), function() {
                K.Pg("button:levelselection:level", function() {
                    b.uA(a)
                })
            })
        }
        bj() {
            this.da(Nc)
        }
        Hd() {
            if (this.bb(0))
                switch (E.Za) {
                case 1:
                    this.da(mc);
                    break;
                case 2:
                    this.da(nc);
                    break;
                case 3:
                    this.da(oc)
                }
        }
        Fa() {
            return "FamobiSelectLevelScene"
        }
    }
    Pb.g = !0;
    Pb.u = Jb;
    Object.assign(Pb.prototype, {
        j: Pb
    });
    class Za extends ea {
        constructor(a, b) {
            null == b && (b = !1);
            null == a && (a = !0);
            super();
            this.Yq = a;
            this.Ln = b
        }
        sc() {
            function a(d) {
                return 0 < (Rh[c] & d)
            }
            let b = [l.sf, l.Dd, l.Ie, l.gg, l.lo, l.mw, l.eg, l.Al, l.Zg, l.fw, l.kD, l.gw, l.lD, l.hw, l.vD, l.iw, l.CD, l.jw, l.GD];
            b.push([63, 61, 59][C.lf]);
            b.push([64, 62, 60][C.lf]);
            let c = E.box - 1;
            a(1) && (b.push(l.Dl),
            b.push(l.qD));
            a(2) && (b.push(l.Kl),
            b.push(l.BD));
            a(4) && (b.push(l.Hl),
            b.push(l.yD));
            a(8) && (b.push(l.Jl),
            b.push(l.AD));
            a(64) && (b.push(l.El),
            b.push(l.rD));
            a(128) && (b.push(l.Il),
            b.push(l.zD));
            a(512) && (b.push(l.Cl),
            b.push(l.pD));
            a(2048) && (b.push(l.gi),
            b.push(l.uD));
            a(4096) && (b.push(l.Gr),
            b.push(l.oD));
            a(8192) && (b.push(l.Fr),
            b.push(l.nD));
            a(16384) && (b.push(l.Nl),
            b.push(l.FD));
            a(32768) && (b.push(l.Hr),
            b.push(l.tD));
            a(65536) && (b.push(l.Ll),
            b.push(l.DD));
            a(131072) && (b.push(l.Gl),
            b.push(l.wD));
            a(262144) && (b.push(l.Fl),
            b.push(l.sD));
            a(524288) && (b.push(l.hi),
            b.push(l.xD),
            b.push(l.Bl),
            b.push(l.mD));
            a(1048576) && (b.push(l.Ml),
            b.push(l.ED));
            b.push([160, 155, 150, 145, 140, 135, 130, 124, 119, 114, 109, 104, 99, 94, 89, 84, 79][c]);
            b.push([161, 156, 151, 146, 141, 136, 131, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80][c]);
            b.push([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][c]);
            b.push([163, 158, 153, 148, 143, 138, 133, 128, 122, 117, 112, 107, 102, 97, 92, 87, 82][c]);
            b.push([164, 159, 154, 149, 144, 139, 134, 129, 123, 118, 113, 108, 103, 98, 93, 88, 83][c]);
            8 == E.box && b.push(l.Sv);
            return b
        }
        Ii() {
            return Za.Di ? 5 : 0
        }
        za() {
            super.za();
            this.Nz = 0;
            this.zi.N(!1);
            this.Fn = new ic(null,new F(1,1,1,1));
            this.U = new oa(this);
            var a = Ca.create(null, k.eH, k.fH);
            this.buttons.push(a);
            this.node.R(a.l.B);
            a = Ca.create(null, k.gH, k.hH);
            this.buttons.push(a);
            this.node.R(a.l.B);
            this.Ln && (a = Ca.create(null, k.dH, k.cH, k.Dw),
            a.icon.N(!C.Hc),
            this.buttons.push(a),
            this.node.R(a.l.B),
            a = Ca.create(null, k.jH, k.iH, k.Dw),
            a.icon.N(!C.Rd),
            this.buttons.push(a),
            this.node.R(a.l.B));
            this.Ec = new S;
            this.node.R(this.Ec.B);
            for (a = 0; 3 > a; ) {
                let b = new A(this.Ec,r.Hb,Uh);
                b.m(b.la() * a++)
            }
            this.Kd = new S;
            a = new wa(this.Kd,r.qc);
            a.Gb(200, 60);
            a.Wa(this.Xb("LEVEL"));
            a.Yh();
            a = new wa(this.Kd,r.qc);
            a.s(50);
            a.Gb(200, 60);
            this.zC();
            this.node.R(this.Kd.B);
            this.rn = this.state = this.Bh = this.Rm = 0
        }
        zd() {
            super.zd();
            null != this.Ia && this.Ia.remove()
        }
        Vd() {
            super.Vd();
            let a = E.box - 1;
            null == r.O && (r.O = this.createTexture([63, 61, 59][C.lf]),
            r.Fs = this.createTexture(l.fw),
            r.FI = this.createTexture(l.gw),
            r.WO = this.createTexture(l.jw),
            r.kd = this.createTexture(l.iw),
            r.xg = this.createTexture(l.hw));
            null == r.$ && l.eb(l.Dl) && (r.$ = this.createTexture(l.Dl));
            null == r.Fe && l.eb(l.Kl) && (r.Fe = this.createTexture(l.Kl));
            null == r.dl && l.eb(l.Hl) && (r.dl = this.createTexture(l.Hl));
            null == r.mc && l.eb(l.Jl) && (r.mc = this.createTexture(l.Jl));
            null == r.Te && l.eb(l.El) && (r.Te = this.createTexture(l.El));
            null == r.rj && l.eb(l.Il) && (r.rj = this.createTexture(l.Il));
            null == r.Kc && l.eb(l.Cl) && (r.Kc = this.createTexture(l.Cl));
            null == r.vb && l.eb(l.gi) && (r.vb = this.createTexture(l.gi),
            8 == E.box && (r.xm = this.createTexture(l.Sv)));
            null == r.Uj && l.eb(l.Gr) && (r.Uj = this.createTexture(l.Gr));
            null == r.rd && l.eb(l.Fr) && (r.rd = this.createTexture(l.Fr));
            null == r.Ac && l.eb(l.Nl) && (r.Ac = this.createTexture(l.Nl));
            null == r.Jd && l.eb(l.Hr) && (r.Jd = this.createTexture(l.Hr));
            null == r.yj && l.eb(l.Ll) && (r.yj = this.createTexture(l.Ll));
            null == r.Fh && l.eb(l.Gl) && (r.Fh = this.createTexture(l.Gl));
            null == r.Ve && l.eb(l.Fl) && (r.Ve = this.createTexture(l.Fl));
            null == r.cf && l.eb(l.hi) && (r.cf = this.createTexture(l.hi));
            null == r.yc && l.eb(l.Ml) && (r.yc = this.createTexture(l.Ml));
            null == r.Zj && l.eb(l.Bl) && (r.Zj = this.createTexture(l.Bl));
            null == r.Mo && (r.Mo = this.createTexture([160, 155, 150, 145, 140, 135, 130, 124, 119, 114, 109, 104, 99, 94, 89, 84, 79][a]),
            r.si = this.createTexture([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][a]),
            r.us = this.createTexture([164, 159, 154, 149, 144, 139, 134, 129, 123, 118, 113, 108, 103, 98, 93, 88, 83][a]))
        }
        gb() {
            super.gb();
            Za.Di = !1;
            switch (this.state) {
            case 0:
                this.yM();
                this.U.show();
                this.Ia = Ra.instance;
                if (null == this.Ia) {
                    this.ha(1);
                    break
                }
                this.pa(this.Ia);
                this.Ia.xC((ob = this.Ia,
                O(ob, ob.va)));
                this.Bu();
                this.ha(1);
                break;
            case 4:
                this.Nq(!0);
                this.ha(1);
                this.buttons[1].selected = !1;
                break;
            case 7:
                this.U.va(),
                this.U = new oa(this),
                this.U.show(),
                this.U.update(.016666666666666666),
                this.Ia.xC((ob = this.Ia,
                O(ob, ob.va))),
                this.ha(1),
                this.buttons[1].selected = !1,
                this.buttons[2].selected = !1,
                this.Bu(),
                this.zC(),
                this.PB()
            }
        }
        ku(a) {
            this.Ec.Yc(a - 1).ka().play(Ai);
            this.rn++
        }
        aM() {
            this.buttons[1].selected = !0;
            this.buttons[2].selected = !0;
            E.IN(Math.max(E.Ky(), this.rn));
            this.Ia = this.add(Ra);
            this.Ia.Zu();
            this.node.R(this.Ia.node);
            this.Ia.bt();
            z.zm(z.Yg);
            this.ha(5)
        }
        $L() {
            1 == this.state && (-1 != Za.Rt && 0 == ++this.Nz % Za.Rt ? (this.buttons[1].selected = !0,
            this.buttons[2].selected = !0,
            this.Ia = this.add(Ra),
            this.Ia.Zu(),
            this.node.R(this.Ia.node),
            this.Ia.bt(),
            this.ha(6)) : this.eB())
        }
        eB() {
            this.Ae()
        }
        Ae() {
            1 != this.state || this.U.il || (this.U.il = !0,
            this.Bu(),
            this.node.R(this.Fn.B),
            this.Fn.aa(0),
            z.stop(z.Yg),
            this.ha(2))
        }
        ev() {
            this.Fg(qc)
        }
        ha(a) {
            this.state = a;
            this.time = 0
        }
        Bu() {
            let a = this.rn = 0;
            for (; 3 > a; )
                this.Ec.Yc(a++).bc(Uh)
        }
        PB() {
            this.Bh = this.Rm = 0;
            this.Kd.N(!0)
        }
        zC() {
            let a = this.Kd.Yc(1);
            a.wc(100);
            a.Wa("" + E.box + " - " + E.level);
            a.Yh()
        }
        Nq(a) {
            this.Ec.N(a);
            this.buttons[1].l.N(a);
            this.buttons[2].l.N(a);
            a && !this.Yq && this.buttons[1].l.N(a);
            this.Ln && (this.buttons[3].l.N(a),
            this.buttons[4].l.N(a))
        }
        update(a) {
            super.update(a);
            this.Bh += a;
            switch (this.Rm) {
            case 0:
                var b = Math.min(this.Bh / .5, 1);
                1 == b && (this.Rm = 1,
                this.Bh = 0);
                this.Kd.aa(Ba.Qf()(b));
                break;
            case 1:
                1 < this.Bh && (this.Rm = 2,
                this.Bh = 0);
                break;
            case 2:
                b = Math.min(this.Bh / .5, 1),
                1 == b && (this.Rm = 3,
                this.Kd.N(!1)),
                this.Kd.aa(Ba.Qf()(1 - b))
            }
            switch (this.state) {
            case 1:
                this.xK();
                this.U.update(a);
                break;
            case 2:
                a = this.wb(.15);
                this.Fn.aa(a);
                1 == a && (this.U.va(),
                this.U = new oa(this),
                this.U.show(),
                this.ha(3));
                break;
            case 3:
                this.U.update(a);
                a = this.wb(.2);
                this.Fn.aa(1 - a);
                1 == a && (this.node.removeChild(this.Fn.B),
                this.ha(1),
                this.buttons[2].selected = !1,
                this.PB());
                break;
            case 4:
                this.U.update(0);
                break;
            case 5:
                this.U.update(a);
                0 == this.Ia.state && (this.state = 7,
                this.OB());
                break;
            case 6:
                this.U.update(a),
                0 == this.Ia.state && (this.state = 7,
                this.Pb.count = this.Nz,
                this.QB())
            }
        }
        Hd() {
            if (this.Yq && this.bb(1)) {
                if (1 != this.state) {
                    this.buttons[1].selected = !1;
                    return
                }
                z.Vh(z.Yg, 0);
                this.U.pz();
                this.Nq(!1);
                this.ha(4);
                this.bB()
            }
            this.bb(2) && this.dB();
            this.Ln && (this.bb(3) && this.Tn(this.buttons[3]),
            this.bb(4) && this.Un(this.buttons[4]))
        }
        Oc(a, b) {
            b instanceof ub && (this.zi.N(!0),
            1 == a && b instanceof ub && Ra.instance.va());
            super.Oc(a, b)
        }
        Ob(a) {
            return a instanceof qc ? 0 : super.Ob(a)
        }
        Ic(a) {
            switch (this.state) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                let b = this.U;
                null != b && b.Ic(a)
            }
            super.Ic(a)
        }
        Va() {
            var a = this.X.window.Km()
              , b = this.X.window.wn;
            let c = 1 < this.ea.ue()
              , d = .05 * Math.min(a.w, a.G) * b;
            var e = 80;
            this.X.Qi && (800 < Math.min(this.ea.la(), this.ea.ua()) && (e = 100),
            c && (e = 110));
            d < e && (d = e);
            this.X.Qi || 50 < d && (d = 50);
            d > .15 * a.G && (d = .15 * a.G);
            e = window.devicePixelRatio;
            b = 30 * b / e;
            if (400 > this.ea.la()) {
                var f = Ma(this.ea.la(), 300, 400, 0, 1);
                f = 0 > f ? 0 : 1 < f ? 1 : f;
                .1 > f && (f = .1);
                b *= f
            }
            this.X.Qi || (3 < e && (e = 3),
            d *= e,
            b *= e);
            this.Ec.J(d / 100);
            e = this.ea.la() / 4 / this.Ec.la();
            f = 0 > e ? 0 : 1 < e ? 1 : e;
            e = 15 * (1 > f ? 0 : 1);
            if (.1 < f) {
                var g = this.Ec;
                g.J(g.ib * f)
            }
            this.Ec.m(b);
            this.Ln && this.Ec.m((a.w - this.Ec.la()) / 2);
            this.Ec.s(b);
            f = (d - this.Ec.ua()) / 2;
            g = this.Ec;
            g.s(g.Ka + f);
            f = this.buttons[1];
            this.Yq && (f.l.J(d / f.cc.y),
            f.KB(a.w - b),
            f.Vq(b));
            this.Yq || (f.m(a.w),
            f.l.N(!1));
            f = this.buttons[2];
            f.l.J(d / f.cc.y);
            f.KB(this.buttons[1].cb() - e);
            f.Vq(b);
            this.Ln && (f = this.buttons[3],
            f.l.J(d / f.cc.y),
            f.m(b),
            f.Vq(b),
            f = this.buttons[4],
            f.l.J(d / f.cc.y),
            f.m(this.buttons[3].cb() + this.buttons[3].l.la() + e),
            f.Vq(b));
            this.Kd.J(d / 65);
            this.Kd.m(b);
            this.Kd.s(a.G - 1.1 * this.Kd.ua() - b);
            this.X.Qi && c && (a = this.Kd,
            a.m(a.cb() + 20),
            a = this.Kd,
            a.s(a.Ka - 20))
        }
        bB() {
            this.ev()
        }
        Tn(a) {
            C.Hc = !C.Hc;
            C.flush();
            a.icon.N(!C.Hc);
            a.selected = !1;
            a.ee = 0;
            this.X.Ga.De(C.Hc ? 1 : 0)
        }
        Un(a) {
            C.Rd = !C.Rd;
            C.flush();
            a.icon.N(!C.Rd);
            a.selected = !1;
            a.ee = 0
        }
        dB() {
            this.Ae()
        }
        xK() {
            let a = this.X.ve()
              , b = this.X.Ji()
              , c = 0
              , d = Bi;
            for (; c < d.length; ) {
                let f = d[c];
                ++c;
                var e = a.position[f];
                e = new Sa(e.x,e.y);
                let g = b.tK(f);
                a.cg(f) && this.U.NO(e, g);
                a.lP(f) && this.U.OO(e, g);
                a.ei(f) && this.U.PO(e, g)
            }
        }
        OB() {
            this.Pb.stars = this.rn;
            this.Fg(Rc)
        }
        QB() {
            this.Fg(Sc)
        }
        Fa() {
            return "LevelScene"
        }
    }
    Za.g = !0;
    Za.u = ea;
    Object.assign(Za.prototype, {
        j: Za
    });
    class Nc extends Za {
        constructor() {
            super(!K.hasFeature("external_pause"), !K.hasFeature("external_mute"));
            Za.Rt = 1
        }
        Un(a) {
            super.Un(a);
            K.rC(C.Hc ? 1 : 0, C.Rd ? 1 : 0)
        }
        Tn(a) {
            super.Tn(a);
            K.rC(C.Hc ? 1 : 0, C.Rd ? 1 : 0)
        }
        bB() {
            let a = this;
            K.SO(function() {
                K.Pg("button:level:pause", O(a, a.ev))
            })
        }
        ev() {
            this.Fg(Re)
        }
        dB() {
            let a = this;
            K.qC(va(), function() {
                a.Nq(!1);
                K.Pg("button:level:restart", function() {
                    a.Nq(!0);
                    a.Ae()
                })
            })
        }
        eB() {
            let a = this;
            K.Av(E.yh(), "fail", function() {
                K.Bv("dead", va(), O(a, a.Ae))
            }, function() {
                a.Ae()
            })
        }
        ku(a) {
            super.ku(a);
            K.RO(a)
        }
        OB() {
            let a = this;
            K.Av(E.yh(), "success", function() {
                a.Pb.stars = a.rn;
                a.Fg(Se)
            }, function() {})
        }
        QB() {
            this.Fg(Te)
        }
        Fa() {
            return "FamobiLevelScene"
        }
    }
    Nc.g = !0;
    Nc.u = Za;
    Object.assign(Nc.prototype, {
        j: Nc
    });
    class Rc extends ea {
        constructor() {
            super()
        }
        sc() {
            return [l.sf, l.Dd, l.fg, l.Ie, l.gg, l.eg]
        }
        Pi() {
            return !1
        }
        za() {
            super.za();
            this.HO = [.9, 1, .9];
            this.wf(600, 900);
            var a = this.caller.Pb.stars
              , b = this.rp("LEVEL_CLEARED1", "LEVEL_CLEARED2", "LEVEL_CLEARED3", "LEVEL_CLEARED4")[a]
              , c = new wa(this.xa,r.qc);
            c.Gb(600, 60);
            c.Wa(b);
            c.Rb(0);
            c.Yh();
            c.s(140);
            b = [];
            for (c = 0; 3 > c; )
                ++c,
                b.push(new A(this.xa,r.Hb,k.RH));
            this.Sb = b;
            b = 0;
            for (c = this.Sb; b < c.length; )
                c[b++].F();
            this.Sb[0].m(180);
            this.Sb[0].s(291);
            this.Sb[1].m(300);
            this.Sb[1].s(273);
            this.Sb[2].m(420);
            this.Sb[2].s(291);
            for (b = 0; 3 > b; )
                c = b++,
                this.Sb[c].aa(0),
                this.Sb[c].J(0);
            for (b = 0; b < a; )
                this.Sb[b++].bc(k.Nw);
            a = new A(this.xa,r.Hb,k.zH);
            a.m(190);
            a.s(400);
            a = Ca.create(null, k.Pl, k.Ql, k.Jw);
            a.m(139);
            a.s(640);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            a = Ca.create(null, k.Pl, k.Ql, k.Mw);
            a.m(299);
            a.s(640);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            a = Ca.create(null, k.Sr, k.Tr, k.HH);
            a.m(188.5);
            a.s(750);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            this.state = 0;
            this.time = 1
        }
        gb() {
            super.gb();
            this.caller instanceof Za && z.play(z.WG);
            this.caller instanceof Tc && (C.uh = !0,
            C.flush(),
            this.ha(5),
            this.time = 0)
        }
        Va() {
            super.Va();
            let a = Ra.instance;
            null != a && a.layout()
        }
        update(a) {
            super.update(a);
            a = this.state;
            if (3 > a)
                .25 < this.time && (this.Sb[this.state].Yb().alpha(1, .3),
                this.Sb[this.state].Yb().scale(this.HO[this.state], .3, Ba.rI()),
                this.time = 0,
                this.ha(this.state + 1));
            else
                switch (a) {
                case 3:
                    if (1 > this.time)
                        break;
                    this.pa(new Pc(this.buttons[3].l,2));
                    this.ha(4);
                    break;
                case 5:
                    a = this.wb(.3);
                    this.wh().Ee(1 - a);
                    1 == a && (this.Us(),
                    Ra.instance.ps(),
                    this.ha(6));
                    break;
                case 6:
                    0 == Ra.instance.state && (this.ha(7),
                    this.ac())
                }
        }
        Nd(a) {
            this.wh().Ee(a)
        }
        Oc(a) {
            this.wh().Ee(1 - a)
        }
        Hd() {
            if (!(4 < this.state)) {
                if (this.bb(1)) {
                    if (!C.uh && E.kx()) {
                        this.Fg(Tc);
                        return
                    }
                    this.Cn()
                }
                this.bb(2) && this.Dn();
                this.bb(3) && (!C.uh && E.kx() ? this.Fg(Tc) : E.em() ? (this.ha(5),
                this.time = 0) : (E.cO(),
                this.eA()))
            }
        }
        eA() {
            this.Dg()
        }
        Dn() {
            this.Ae()
        }
        Cn() {
            this.zn()
        }
        zn() {
            this.ha(5);
            this.time = 0
        }
        Ae() {
            this.Pb.restart = !0;
            this.Dg()
        }
        ha(a) {
            this.state = a
        }
        ac() {
            E.em() ? (this.Pb.boxComplete = !0,
            1 == E.Za ? this.da(Hb) : 2 == E.Za ? this.da(Ab) : 3 == E.Za && this.da(Ib)) : this.da(Jb)
        }
        Fa() {
            return "LevelClearedOverlay"
        }
    }
    Rc.g = !0;
    Rc.u = ea;
    Object.assign(Rc.prototype, {
        j: Rc
    });
    class Se extends Rc {
        constructor() {
            super()
        }
        za() {
            super.za();
            this.uk()
        }
        ha(a) {
            super.ha(a);
            let b = this;
            if (4 == a) {
                let c = this.caller.Pb.stars;
                Gc.delay(function() {
                    K.QO(c, E.yh(), va(), function() {
                        K.Pg("break:result", O(b, b.nO))
                    })
                }, 1E3)
            }
        }
        Dn() {
            this.uk();
            let a = this;
            K.qC(va(), function() {
                K.Pg("button:results:restart", O(a, a.Ae))
            })
        }
        eA() {
            this.uk();
            let a = this;
            K.qr(va(), function() {
                K.Pg("button:results:next", function() {
                    a.Dg(null)
                })
            })
        }
        Cn() {
            this.uk();
            K.Pg("button:results:quit", O(this, this.zn))
        }
        ac() {
            E.em() ? (this.Pb.boxComplete = !0,
            1 == E.Za ? this.da(mc) : 2 == E.Za ? this.da(nc) : 3 == E.Za && this.da(oc)) : this.da(Pb)
        }
        Fa() {
            return "FamobiLevelClearedOverlay"
        }
    }
    Se.g = !0;
    Se.u = Rc;
    Object.assign(Se.prototype, {
        j: Se
    });
    class Sc extends ea {
        constructor() {
            super()
        }
        sc() {
            return [l.sf, l.Dd, l.fg, l.Ie, l.gg, l.eg]
        }
        Pi() {
            return !1
        }
        za() {
            super.za();
            this.wf(600, 900);
            var a = this.Xb("LEVEL_FAILED")
              , b = new wa(this.xa,r.qc);
            b.Gb(600, 160);
            b.Lg(!0);
            b.wc(60);
            b.Wa(a);
            b.Rb(0);
            b.s(140);
            a = this.caller.Pb.count;
            b = 0;
            3 < a && (b = 1);
            5 < a && (b = 2);
            a = new A(this.xa,r.Hb,[k.AH, k.BH, k.CH][b]);
            a.m(190);
            a.s(320);
            a = Ca.create(null, k.Pl, k.Ql, k.Jw);
            a.m(139);
            a.s(560);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            a = Ca.create(null, k.Pl, k.Ql, k.Mw);
            a.m(299);
            a.s(560);
            this.xa.appendChild(a.l);
            this.buttons.push(a);
            this.pa(a);
            this.state = 0
        }
        Va() {
            super.Va();
            let a = Ra.instance;
            null != a && a.layout()
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 1:
                a = this.wb(.3);
                this.wh().Ee(1 - a);
                1 == a && (this.Us(),
                Ra.instance.ps(),
                this.ha(2));
                break;
            case 2:
                0 == Ra.instance.state && (this.ha(3),
                this.ac())
            }
        }
        Nd(a) {
            this.wh().Ee(a)
        }
        Oc(a) {
            this.wh().Ee(1 - a)
        }
        Hd() {
            0 < this.state || (this.bb(1) && this.Cn(),
            this.bb(2) && this.Dn())
        }
        Dn() {
            this.Ae()
        }
        Cn() {
            this.zn()
        }
        zn() {
            this.ha(1);
            this.time = 0
        }
        Ae() {
            this.Pb.restart = !0;
            this.Dg()
        }
        ha(a) {
            this.state = a
        }
        ac() {
            E.em() ? (this.Pb.boxComplete = !0,
            1 == E.Za ? this.da(Hb) : 2 == E.Za ? this.da(Ab) : 3 == E.Za && this.da(Ib)) : this.da(Jb)
        }
        Fa() {
            return "LevelLostOverlay"
        }
    }
    Sc.g = !0;
    Sc.u = ea;
    Object.assign(Sc.prototype, {
        j: Sc
    });
    class Te extends Sc {
        constructor() {
            super()
        }
        Dn() {
            this.uk();
            let a = this;
            K.Av(E.yh(), "fail", function() {
                K.Bv("dead", va(), O(a, a.Ae))
            }, function() {
                a.Ae()
            })
        }
        Cn() {
            this.uk();
            K.Pg("button:failed:quit", O(this, this.zn))
        }
        ac() {
            E.em() ? (this.Pb.boxComplete = !0,
            1 == E.Za ? this.da(mc) : 2 == E.Za ? this.da(nc) : 3 == E.Za && this.da(oc)) : this.da(Pb)
        }
        Fa() {
            return "FamobiLevelLostOverlay"
        }
    }
    Te.g = !0;
    Te.u = Sc;
    Object.assign(Te.prototype, {
        j: Te
    });
    class qc extends ea {
        constructor() {
            super()
        }
        za() {
            super.za();
            this.uc = new ic(null,new F(0,0,0,1));
            this.uc.aa(.5);
            this.node.R(this.uc.B);
            this.wf(550, 550);
            var a = Ca.create(null, k.Ew, k.Fw, k.yH);
            this.buttons.push(a);
            a.m(133.5);
            a.s(200);
            this.xa.appendChild(a.l);
            this.pa(a);
            a = Ca.create(null, k.Ew, k.Fw, k.IH);
            this.buttons.push(a);
            a.m(293.5);
            a.s(200);
            this.xa.appendChild(a.l);
            this.pa(a);
            this.state = 0;
            this.X.Ga.De(0);
            z.stop(z.Hj);
            z.stop(z.Yg)
        }
        Oc() {}
        Ob(a) {
            return a instanceof Jb ? super.Ob(a) : 0
        }
        Hd() {
            0 == this.state && (this.bb(1) && this.cB(),
            this.bb(2) && this.fB())
        }
        cB() {
            this.PA()
        }
        fB() {
            this.hB()
        }
        hB() {
            this.X.Ga.De(C.Hc ? 1 : 0);
            z.Vh(z.Yg, 1);
            this.Dg()
        }
        PA() {
            z.stop(z.Yg);
            this.Ia = this.add(Ra);
            this.node.R(this.Ia.node);
            this.Ia.Zu();
            this.Ia.bt();
            this.state = 1
        }
        TB() {
            this.da(Jb)
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 1:
                0 == this.Ia.state && (this.Ia.ps(),
                this.state = 2);
                break;
            case 2:
                0 == this.Ia.state && (this.state = 3,
                this.TB())
            }
        }
        Pi() {
            return !1
        }
        Fa() {
            return "PauseOverlay"
        }
    }
    qc.g = !0;
    qc.u = ea;
    Object.assign(qc.prototype, {
        j: qc
    });
    class Re extends qc {
        constructor() {
            super()
        }
        fB() {
            K.TO(O(this, this.hB))
        }
        cB() {
            let a = this;
            K.Bv("quit", va(), function() {
                K.Pg("button:pause:quit", O(a, a.PA))
            })
        }
        TB() {
            this.da(Pb)
        }
        Fa() {
            return "FamobiPauseOverlay"
        }
    }
    Re.g = !0;
    Re.u = qc;
    Object.assign(Re.prototype, {
        j: Re
    });
    class yg {
        constructor() {
            this.nv = -1;
            this.i = new F(0,0,0,1);
            this.Qm = this.li = -1;
            this.pressed = this.released = !1
        }
        Ih() {
            this.Qm = -1
        }
        ph() {}
        BI(a, b) {
            b = b.Jb(this.i);
            0 > this.li && (this.pressed && (this.nv = b ? a : -1),
            b && (this.Qm = a,
            this.pressed && (this.li = a)));
            if (this.li == a && (b && (this.Qm = a),
            this.released)) {
                b = this.nv != a;
                this.nv = -1;
                if (b)
                    return this.li = -1,
                    this.pressed = this.released = !1;
                if (a == this.Qm)
                    return this.li = -1,
                    this.pressed = this.released = !1,
                    !0;
                this.li = -1
            }
            return !1
        }
        yz(a) {
            return a == this.Qm
        }
        isActive(a) {
            return a == this.li
        }
    }
    yg.g = !0;
    Object.assign(yg.prototype, {
        j: yg
    });
    class ua {
        static Es(a, b) {
            a = a.charCodeAt(b);
            if (a == a)
                return a
        }
        static substr(a, b, c) {
            if (null == c)
                c = a.length;
            else if (0 > c)
                if (0 == b)
                    c = a.length + c;
                else
                    return "";
            return a.substr(b, c)
        }
        static remove(a, b) {
            b = a.indexOf(b);
            if (-1 == b)
                return !1;
            a.splice(b, 1);
            return !0
        }
        static now() {
            return Date.now()
        }
    }
    ua.g = !0;
    class zh {
        constructor(a, b) {
            this.min = a;
            this.max = b
        }
        fb() {
            return this.min < this.max
        }
        next() {
            return this.min++
        }
    }
    zh.g = !0;
    Object.assign(zh.prototype, {
        j: zh
    });
    class Ga {
        static gk(a, b) {
            for (a = ie(a); a.fb(); )
                if (b(a.next()))
                    return !0;
            return !1
        }
        static Eh(a, b) {
            for (a = ie(a); a.fb(); )
                b(a.next())
        }
        static count(a, b) {
            let c = 0;
            if (null == b)
                for (b = ie(a); b.fb(); )
                    b.next(),
                    ++c;
            else
                for (a = ie(a); a.fb(); )
                    b(a.next()) && ++c;
            return c
        }
        static find(a, b) {
            for (a = ie(a); a.fb(); ) {
                let c = a.next();
                if (b(c))
                    return c
            }
            return null
        }
    }
    Ga.g = !0;
    class Vh {
        static DL(a) {
            new Je(a)
        }
    }
    ha.Ctrr.main = Vh.DL;
    Vh.g = !0;
    Math.g = !0;
    class E {
        static reset() {
            E.Za = 1;
            E.box = 1;
            E.level = 1
        }
        static Sq(a) {
            E.Za = a
        }
        static mj(a) {
            E.box = a
        }
        static Uu(a) {
            E.level = a
        }
        static IN(a) {
            let b = E.box - 1
              , c = E.level - 1;
            C.Jf[b][c] = a;
            25 > c && (C.zg[b][c + 1] = !0);
            C.flush()
        }
        static UK(a) {
            return C.zg[E.box - 1][a - 1]
        }
        static Ip(a) {
            return C.locked[a - 1]
        }
        static Mx(a) {
            return 0 >= E.mt(a)
        }
        static $O(a) {
            C.locked[a - 1] = !1;
            C.zg[a - 1][0] = !0;
            C.flush()
        }
        static mt(a) {
            --a;
            return Th[a] - E.pt()
        }
        static em() {
            return 25 == E.level
        }
        static cO() {
            E.Uu(E.level + 1)
        }
        static yh() {
            let a = 0
              , b = E.Za
              , c = 0;
            for (; 3 > c; )
                E.Za = c++ + 1,
                a += E.pt();
            E.Za = b;
            return a
        }
        static pt() {
            var a = 0
              , b = 0;
            let c = 0;
            switch (E.Za) {
            case 1:
                a = 0;
                b = 5;
                break;
            case 2:
                a = 5;
                b = 10;
                break;
            case 3:
                a = 10,
                b = 17
            }
            for (; a < b; ) {
                let d = a++
                  , e = 0;
                for (; 25 > e; )
                    c += C.Jf[d][e++]
            }
            return c
        }
        static kx() {
            let a = 0;
            for (; 17 > a; ) {
                let b = a++
                  , c = 0;
                for (; 25 > c; )
                    if (!C.zg[b][c++])
                        return !1
            }
            return !0
        }
        static xy(a) {
            null == a && (a = E.box);
            let b = 0
              , c = 0;
            for (; 25 > c; )
                b += C.Jf[a - 1][c++];
            return b
        }
        static Ky(a) {
            null == a && (a = E.level);
            return C.Jf[E.box - 1][a - 1]
        }
    }
    E.g = !0;
    class Bb {
        static Cf(a, b) {
            try {
                return a[b]
            } catch (c) {
                return null
            }
        }
        static EJ(a) {
            let b = [];
            if (null != a) {
                let d = Object.prototype.hasOwnProperty;
                for (var c in a)
                    "__id__" != c && "hx__closures__" != c && d.call(a, c) && b.push(c)
            }
            return b
        }
    }
    Bb.g = !0;
    class Ad {
    }
    Ad.g = !0;
    class Uc {
        constructor(a) {
            this.storage = a;
            this.rN = this.Az = !1;
            this.version = this.Gm();
            this.reset()
        }
        load(a) {
            let b = this;
            this.storage.load(function(c) {
                let d = !1;
                try {
                    if (null != c) {
                        b.parse(c);
                        if (b.version > b.Gm())
                            throw 4;
                        for (c = !1; b.version < b.Gm(); )
                            b.fq(b.version + 1),
                            b.version++,
                            c = !0;
                        if (c) {
                            b.save(a);
                            return
                        }
                    } else
                        d = !0
                } catch (e) {
                    d = !0
                }
                d ? (b.reset(),
                b.save(a)) : a()
            })
        }
        save(a) {
            this.Az = !0;
            let b = this;
            this.storage.save(this.stringify(), function(c) {
                b.Az = !1;
                b.rN = 0 == c;
                a()
            })
        }
    }
    Uc.g = !0;
    Object.assign(Uc.prototype, {
        j: Uc
    });
    class C extends Uc {
        constructor(a) {
            super(a);
            C.instance = this;
            this.reset()
        }
        reset() {
            this.version = this.Gm();
            C.Hc = !0;
            C.Rd = !0;
            C.language = null;
            C.lf = 0;
            C.hint = 1;
            C.uh = !1;
            C.Jf = [];
            C.zg = [];
            C.locked = [];
            let a = 1;
            for (; 17 >= a; )
                this.oz(a, 1 != a && 6 != a && 11 != a),
                ++a
        }
        parse(a) {
            a = JSON.parse(a);
            this.version = a.v;
            C.Hc = a.music;
            C.Rd = a.sound;
            C.language = a.language;
            C.Jf = a.levelStars;
            C.zg = a.levelCleared;
            C.locked = a.locked;
            2 <= this.version && (C.hint = a.hint,
            C.lf = a.skin,
            C.uh = a.gameWon)
        }
        stringify() {
            let a = {};
            a.v = this.version;
            a.music = C.Hc;
            a.sound = C.Rd;
            a.language = C.language;
            a.levelStars = C.Jf;
            a.levelCleared = C.zg;
            a.locked = C.locked;
            a.hint = C.hint;
            a.skin = C.lf;
            a.gameWon = C.uh;
            return JSON.stringify(a)
        }
        fq(a) {
            switch (a) {
            case 2:
                for (C.hint = 1,
                C.lf = 0,
                C.uh = !1,
                a = 3; 17 >= a; )
                    this.oz(a, 6 != a && 11 != a),
                    ++a
            }
        }
        Gm() {
            return 2
        }
        oz(a, b) {
            null == b && (b = !0);
            --a;
            C.locked[a] = b;
            C.Jf[a] = [];
            C.zg[a] = [];
            let c = 0;
            for (; 25 > c; ) {
                let d = c++;
                C.Jf[a][d] = 0;
                C.zg[a][d] = !1
            }
            b || (C.zg[a][0] = !0)
        }
        static flush() {
            C.instance.save(function() {})
        }
    }
    C.g = !0;
    C.u = Uc;
    Object.assign(C.prototype, {
        j: C
    });
    class z {
        static play(a, b) {
            null == b && (b = !1);
            C.Rd && za.instance.Ga.play(a, b)
        }
        static stop(a) {
            za.instance.Ga.stop(a)
        }
        static Vh(a, b) {
            za.instance.Ga.$N(a, b)
        }
        static zm(a) {
            C.Rd && za.instance.Ga.zm(a, 1, !0)
        }
    }
    z.g = !0;
    class Ha {
        static ie(a) {
            return Ua.Sl(a, "")
        }
        static parseInt(a) {
            a = parseInt(a);
            return isNaN(a) ? null : a
        }
    }
    Ha.g = !0;
    class Ec {
        static Mp(a, b) {
            a = ua.Es(a, b);
            return 8 < a && 14 > a ? !0 : 32 == a
        }
        static CL(a) {
            var b;
            let c = "";
            for (b = 4 - a.length; c.length < b; )
                c += "0";
            return c + (null == a ? "null" : "" + a)
        }
        static BK(a) {
            let b = "";
            do
                b = "0123456789ABCDEF".charAt(a & 15) + b,
                a >>>= 4;
            while (0 < a);
            for (; 2 > b.length; )
                b = "0" + b;
            return b
        }
    }
    Ec.g = !0;
    class Yb {
        static get(a, b) {
            null == Yb.bd && (Yb.bd = JSON.parse(l.Xb(l.Zg)));
            var c = Bb.Cf(Yb.bd, a);
            if (null == c || null == C.language)
                return a;
            if (Object.prototype.hasOwnProperty.call(c, C.language)) {
                a = Bb.Cf(c, C.language);
                if (null != b) {
                    c = 0;
                    let d = b.length;
                    for (; c < d; )
                        a = a.replace(RegExp("::\\w+::", ""), b[c++])
                }
                return a
            }
            return Bb.Cf(c, "en")
        }
    }
    class r {
        static lt(a, b) {
            let c = zg.slice();
            c.sort(Wh.II);
            c.splice(c.indexOf(a), 0, a);
            return c.indexOf(b)
        }
    }
    r.g = !0;
    class yh {
        static Vx(a) {
            return new (Function.prototype.bind.apply(a, [null].concat([])))
        }
    }
    yh.g = !0;
    class Ag {
        constructor(a) {
            let b = new ka("^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$","");
            if (b.match(a))
                this.FL = Ha.parseInt(b.Gc(1)),
                this.NL = Ha.parseInt(b.Gc(2)),
                this.fq = Ha.parseInt(b.Gc(3)),
                this.KA = b.Gc(4),
                this.Ex = b.Gc(5);
            else
                throw 23;
        }
        toString() {
            let a = this.FL + "." + this.NL + "." + this.fq;
            null != this.KA && (a += "-" + this.KA);
            null != this.Ex && (a += "+" + this.Ex);
            return a
        }
    }
    Ag.g = !0;
    Object.assign(Ag.prototype, {
        j: Ag
    });
    class rd {
    }
    rd.g = !0;
    class tg {
        constructor(a, b, c, d, e, f, g, h, m, n, q, p, v, u, y, B, x, H, D, Z, Y, T) {
            this.Xy = !1;
            this.Jz = !0;
            this.rv = !1;
            this.oy = this.qx = this.audio = this.GC = this.transition = this.lz = !0;
            this.cC = !1;
            this.px = this.wu = null;
            this.sn = 4;
            this.Cs = null;
            this.mz = 1;
            this.language = "en";
            this.title = a;
            this.Nm = b;
            null != c && (this.language = c);
            null != d && (this.mz = d);
            null != e && (this.Cs = e);
            null != f && (this.sn = f);
            null != g && (this.px = g);
            null != h && (this.wu = h);
            null != m && (this.cC = m);
            null != n && (this.oy = n);
            null != q && (this.qx = q);
            null != p && (this.audio = p);
            null != v && (this.GC = v);
            null != u && (this.transition = u);
            null != y && (this.lz = y);
            null != D && (this.rv = D);
            null != Y && (this.Jz = Y);
            null != T && (this.Xy = T)
        }
    }
    tg.g = !0;
    Object.assign(tg.prototype, {
        j: tg
    });
    class ng {
        constructor() {
            this.current = 60;
            let a = []
              , b = 0;
            for (; 60 > b; )
                ++b,
                a.push(0);
            this.values = a;
            this.time = this.eu = 0
        }
        update(a) {
            this.time += a;
            1 < this.time && (this.current = Math.min(this.eu, 60),
            this.values[this.current - 1]++,
            this.eu = 0,
            --this.time);
            this.eu++
        }
    }
    ng.g = !0;
    Object.assign(ng.prototype, {
        j: ng
    });
    class pg {
        constructor(a, b) {
            this.fd = a;
            this.de = b
        }
        sp() {
            if (0 == this.de.length)
                return 100;
            let a = Math.round(100 * this.fd.Im(this.de));
            this.Ni() && --a;
            0 > a && (a = 0);
            return a
        }
        rt() {
            return 0 != this.de.length ? 1 == this.fd.Im() ? !this.Ni() : !1 : !0
        }
        Ni() {
            let a = 0
              , b = this.de;
            for (; a < b.length; )
                if (!l.eb(l.Ff(b[a++])))
                    return !0;
            return !1
        }
    }
    pg.g = !0;
    Object.assign(pg.prototype, {
        j: pg
    });
    class Bd {
    }
    Bd.g = !0;
    Bd.me = !0;
    Object.assign(Bd.prototype, {
        j: Bd
    });
    class se {
        constructor(a) {
            this.key = a
        }
        load(a) {
            try {
                let b = Ah.My().getItem(this.key);
                null != a && a(b);
                return b
            } catch (b) {
                return null != a && a(null),
                null
            }
        }
        save(a, b) {
            try {
                Ah.My().setItem(this.key, a),
                null != b && b(!0)
            } catch (c) {
                null != b && b(!1)
            }
        }
    }
    se.g = !0;
    se.sb = [Bd];
    Object.assign(se.prototype, {
        j: se
    });
    class Bh {
        constructor(a, b, c) {
            this.type = a;
            this.lp = b;
            this.once = c;
            this.next = null
        }
    }
    Bh.g = !0;
    Object.assign(Bh.prototype, {
        j: Bh
    });
    class xg {
        constructor(a) {
            this.top = 0;
            this.stack = [];
            this.push(a)
        }
        fb() {
            return 0 < this.top
        }
        next() {
            let a = this.stack[--this.top];
            this.push(a);
            return a
        }
        push(a) {
            for (a = a.oe; null != a; )
                this.stack[this.top++] = a,
                a = a.W
        }
    }
    xg.g = !0;
    Object.assign(xg.prototype, {
        j: xg
    });
    class bb {
        constructor(a, b, c, d) {
            this.r = a;
            this.Xd = b;
            this.b = c;
            this.a = d
        }
        ub() {
            return new bb(this.r,this.Xd,this.b,this.a)
        }
    }
    bb.g = !0;
    Object.assign(bb.prototype, {
        j: bb
    });
    class Q {
        constructor(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.w = c;
            this.G = d
        }
        static ub(a) {
            return new Q(a.x,a.y,a.w,a.G)
        }
        static ml(a) {
            return new Q(.4 * a.x,.4 * a.y,.4 * a.w,.4 * a.G)
        }
        static tu(a, b, c, d, e, f, g, h) {
            return !(a > g || c < e || b > h || d < f)
        }
        static gj(a, b, c, d, e, f) {
            return a >= c && a < c + e && b >= d ? b < d + f : !1
        }
        static Ar(a, b, c, d, e) {
            return (e.x < a ? Q.Zv : 0) + (e.x > c ? Q.$v : 0) + (e.y < b ? Q.Yv : 0) + (e.y > d ? Q.aw : 0)
        }
        static Ui(a, b, c, d, e, f, g, h) {
            let m = new t(a,b), n = new t(c,d), q;
            g = e + g;
            let p = f + h
              , v = Q.Ar(e, f, g, p, m)
              , u = Q.Ar(e, f, g, p, n);
            for (; 0 != v || 0 != u; ) {
                if (0 != (v & u))
                    return !1;
                0 != v ? (h = v,
                q = m) : (h = u,
                q = n);
                0 < (h & Q.Zv) ? (q.y += (b - d) * (e - q.x) / (a - c),
                q.x = e) : 0 != (h & Q.$v) && (q.y += (b - d) * (g - q.x) / (a - c),
                q.x = g);
                0 < (h & Q.Yv) ? (q.x += (a - c) * (f - q.y) / (b - d),
                q.y = f) : 0 != (h & Q.aw) && (q.x += (a - c) * (p - q.y) / (b - d),
                q.y = p);
                h == v ? v = Q.Ar(e, f, g, p, m) : u = Q.Ar(e, f, g, p, n)
            }
            return !0
        }
    }
    Q.g = !0;
    Object.assign(Q.prototype, {
        j: Q
    });
    class qe extends Uc {
        constructor() {
            super(null)
        }
        stringify() {
            return ""
        }
        parse() {}
        reset() {}
        Gm() {
            return 1
        }
        fq() {}
    }
    qe.g = !0;
    qe.u = Uc;
    Object.assign(qe.prototype, {
        j: qe
    });
    class gc extends ia {
        constructor(a) {
            super();
            this.X = a;
            this.Pb = {};
            this.back = new pb;
            this.ya = new pb;
            this.jb = new Cd
        }
        la() {
            return this.X.window.zh().x
        }
        ua() {
            return this.X.window.zh().y
        }
        Wy() {
            return this.X.window.zh()
        }
        qt() {
            let a = this.X.window.zh();
            return new X(0,0,a.x,a.y)
        }
        ue() {
            return this.X.window.Dm()
        }
        update(a) {
            this.jb.ob(new F(this.la(),this.ua(),0,1));
            this.X.P.nj(this.jb);
            this.back.Rg(a);
            super.update(a);
            this.ya.Rg(a)
        }
        Ic(a) {
            let b = this.X.P;
            this.jb.ob(new F(this.la(),this.ua(),0,1));
            b.nj(this.jb);
            this.back.md();
            this.back.vl();
            b.Yo(this.back);
            super.Ic(a);
            this.ya.md();
            this.ya.vl();
            b.Yo(this.ya)
        }
        wo(a, b, c) {
            function d() {
                if (c)
                    return b.bd.pa(new rc(e)),
                    g.pa(new Dd(b,e));
                let h = new rc(e);
                g.pa(h);
                return null == f ? g.pa(new Ed(e)) : g.pa(new Ue(b,e))
            }
            let e = yh.Vx(a);
            e.ea = this;
            e.X = this.X;
            e.caller = b;
            null == b && (e.Pb = this.Pb);
            let f = this.HJ()
              , g = this;
            if (0 < e.Py().length) {
                a = e.Ly(d);
                a.ea = this;
                a.X = this.X;
                let h = new rc(a);
                null == f ? (this.pa(h),
                this.pa(new Ed(a))) : (b.bd.pa(h),
                this.pa(new Dd(b,a)))
            } else
                d()
        }
        Dg(a) {
            null == (a.bd.parent instanceof gc ? null : a.bd.parent) ? this.pa(new Ve(a)) : (a.bd.parent.Uf.caller = a,
            this.pa(new Fd(a)))
        }
        HJ() {
            let a = this.oe;
            for (; null != a; ) {
                if (a instanceof rc)
                    return a;
                a = a.W
            }
            return null
        }
    }
    gc.g = !0;
    gc.u = ia;
    Object.assign(gc.prototype, {
        j: gc
    });
    class Fb {
        constructor() {
            this.dh = Fb.Fj;
            this.elapsedTime = 0;
            this.tv = 1
        }
    }
    Fb.g = !0;
    Object.assign(Fb.prototype, {
        j: Fb
    });
    class og {
        constructor() {
            this.elapsedTime = 0;
            this.Eq = !1;
            this.handle = -1;
            this.now = 0;
            this.Ys = !0;
            this.startTime = 0
        }
        Tf() {}
        start() {
            if (!this.Eq) {
                this.stop();
                this.Eq = !0;
                var a = null
                  , b = (ob = window,
                O(ob, ob.requestAnimationFrame))
                  , c = this;
                a = function(d) {
                    c.handle = b(a);
                    if (c.Ys)
                        c.startTime = d,
                        c.now = d,
                        c.Ys = !1;
                    else {
                        let e = d - c.now;
                        c.now = d;
                        c.elapsedTime = (d - c.startTime) / 1E3;
                        c.Tf(e / 1E3)
                    }
                }
                ;
                this.handle = b(a)
            }
        }
        stop() {
            this.Eq && (this.Ys = !0,
            0 > this.handle || (window.cancelAnimationFrame(this.handle),
            this.handle = -1,
            this.Eq = !1))
        }
    }
    og.g = !0;
    Object.assign(og.prototype, {
        j: og
    });
    class t {
        constructor(a, b) {
            this.x = a;
            this.y = b
        }
        add(a) {
            this.x += a.x;
            this.y += a.y
        }
        mv(a) {
            this.x -= a.x;
            this.y -= a.y
        }
        multiply(a) {
            this.x *= a;
            this.y *= a
        }
        by(a) {
            this.x /= a;
            this.y /= a
        }
        Se(a) {
            let b = this.x - a.x;
            a = this.y - a.y;
            return Math.sqrt(b * b + a * a)
        }
        rc() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        Hm() {
            return this.x * this.x + this.y * this.y
        }
        YK() {
            return 0 == this.x ? 0 == this.y : !1
        }
        AJ(a) {
            return this.x == a.x ? this.y == a.y : !1
        }
        normalize() {
            this.multiply(1 / this.rc())
        }
        angle() {
            return Math.atan(this.y / this.x)
        }
        Tk() {
            return Math.atan2(this.y, this.x)
        }
        ub() {
            return new t(this.x,this.y)
        }
        zb(a) {
            this.x = a.x;
            this.y = a.y
        }
        rotate(a) {
            let b = Math.cos(a);
            a = Math.sin(a);
            let c = this.x * a + this.y * b;
            this.x = this.x * b - this.y * a;
            this.y = c;
            return this
        }
        Ua(a, b, c) {
            this.x -= b;
            this.y -= c;
            this.rotate(a);
            this.x += b;
            this.y += c
        }
        static $b() {
            return new t(0,0)
        }
        static QL() {
            return new t(2147483647,2147483647)
        }
        static Bb(a, b) {
            return new t(a.x + b.x,a.y + b.y)
        }
        static Xa(a, b) {
            return new t(a.x - b.x,a.y - b.y)
        }
        static pd(a, b) {
            return new t(a.x * b,a.y * b)
        }
        static so(a, b) {
            return new t(a.x / b,a.y / b)
        }
        static od(a, b, c, d) {
            a -= c;
            b -= d;
            return Math.sqrt(a * a + b * b)
        }
        static Ww(a, b) {
            return a.x * b.x + a.y * b.y
        }
        static Zw(a) {
            return new t(-a.y,a.x)
        }
        static aI(a) {
            return new t(a.y,-a.x)
        }
        static to(a) {
            return t.pd(a, 1 / a.rc())
        }
        static CI(a, b) {
            let c = new t(0,0);
            t.nB(a, b, c);
            return c
        }
        static nB(a, b, c) {
            var d = a.length;
            if (1 >= d)
                c.x = c.y = 0;
            else {
                for (var e = t.bI, f = t.cI, g = 1 - b, h = 0; h < d; ) {
                    let m = h++
                      , n = a[m];
                    e[m] = n.x;
                    f[m] = n.y
                }
                for (a = d - 1; 0 < a; ) {
                    d = 0;
                    for (h = 1; d < a; )
                        e[d] = e[d] * g + e[h] * b,
                        f[d] = f[d] * g + f[h] * b,
                        ++d,
                        ++h;
                    --a
                }
                c.x = e[0];
                c.y = f[0]
            }
        }
        static LJ(a) {
            return new t(Math.cos(a),Math.sin(a))
        }
    }
    t.g = !0;
    Object.assign(t.prototype, {
        j: t
    });
    class sg {
        constructor(a) {
            let b = window.document.createElement("div");
            window.document.body.appendChild(b);
            b.innerText = rd.VERSION.toString();
            let c = b.style;
            c.fontFamily = "sans-serif";
            c.fontSize = "10px";
            c.color = a;
            c.position = "absolute";
            c.bottom = "0";
            c.padding = "1px";
            c.userSelect = "none";
            c.setProperty("-webkit-user-select", "none");
            setTimeout(function() {
                window.document.body.removeChild(b)
            }, 1E4)
        }
    }
    sg.g = !0;
    Object.assign(sg.prototype, {
        j: sg
    });
    class Mc extends hc {
        constructor(a, b) {
            super();
            this.Vk = b;
            this.OL = a.Py();
            this.Hk = this.X.load(this.OL)
        }
        sp() {
            return this.Hk.sp()
        }
        update(a) {
            super.update(a);
            this.Hk.rt() && "Running" == this.Ce && this.Vu()
        }
        Pi() {
            return !1
        }
        Vu() {
            this.ea.pa(new Fd(this,!1,this.Vk))
        }
        Fa() {
            return "LoadingOverlay"
        }
    }
    Mc.g = !0;
    Mc.u = hc;
    Object.assign(Mc.prototype, {
        j: Mc
    });
    class rc extends ia {
        constructor(a) {
            super();
            this.Uf = a;
            a.bd = this;
            a.hA = !0;
            a.gA = !0;
            this.pa(a)
        }
        update(a) {
            switch (this.Uf.Ce) {
            case "Paused":
            case "Running":
            case "Started":
                break;
            default:
                return
            }
            this.X.window.Du && this.Uf.Va();
            this.Uf.update(a);
            super.update(a)
        }
        Ic(a) {
            if (this.Uf.Fv)
                switch (this.Uf.Ce) {
                case "Paused":
                case "Running":
                case "Started":
                    this.Uf.Ic(a)
                }
            super.Ic(a)
        }
    }
    rc.g = !0;
    rc.u = ia;
    Object.assign(rc.prototype, {
        j: rc
    });
    class hb extends ia {
        constructor(a, b) {
            super();
            this.a = a;
            this.b = b;
            this.state = 0
        }
        MJ(a, b) {
            for (a = a.bd.parent; null != a && !(a instanceof gc); )
                b(a.Uf),
                a = a.parent
        }
        pk(a) {
            if (a.bd.parent == a.ea)
                return a;
            let b = a.bd.parent;
            for (; null != b; ) {
                if (b.parent == a.ea)
                    return b.Uf;
                b = b.parent
            }
            return null
        }
        Ii(a) {
            return a.X.Mc.GC ? a.Ii() : 0
        }
        Ob(a, b) {
            return a.X.Mc.transition ? a.Ob(b) : 0
        }
        ha(a) {
            this.state = a;
            this.time = 0
        }
    }
    hb.g = !0;
    hb.u = ia;
    Object.assign(hb.prototype, {
        j: hb
    });
    class Ue extends hb {
        constructor(a, b) {
            super(a, b);
            "Running" == a.Ce && a.hb("Paused");
            this.pk(a).Oc(0, b)
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 0:
                a = this.wb(this.Ob(this.a, this.b) / 2);
                this.pk(this.a).Oc(a, this.b);
                1 == a && this.ha(1);
                break;
            case 1:
                this.a.hb("Stopped");
                this.a.zd();
                this.MJ(this.a, function(b) {
                    "Stopped" != b.Ce && (b.hb("Stopped"),
                    b.zd())
                });
                this.b.hb("Created");
                this.b.za();
                this.b.Va();
                this.ha(2);
                break;
            case 2:
                if (this.time < this.Ii(this.b))
                    break;
                this.b.hb("Started");
                this.b.Xk();
                this.b.Nd(0, this.a);
                this.ha(3);
                break;
            case 3:
                a = this.wb(this.Ob(this.a, this.b) / 2),
                this.b.Nd(a, this.a),
                1 > a || (this.b.hb("Running"),
                this.b.gb(),
                this.pk(this.a).bd.va(),
                this.va())
            }
        }
    }
    Ue.g = !0;
    Ue.u = hb;
    Object.assign(Ue.prototype, {
        j: Ue
    });
    class Bg extends hb {
        constructor(a, b) {
            super(a, b);
            b.hb("Created");
            b.za();
            b.Va()
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 0:
                if (this.time < this.Ii(this.b))
                    break;
                this.a.hb("Paused");
                for (a = this.a; null != a.parent && a.parent != this.a.ea; )
                    a = a.parent;
                this.pk(this.a).Oc(1, this.b);
                this.b.hb("Started");
                this.b.Xk();
                this.b.Nd(0, this.a);
                this.time = 0;
                this.state = 1;
                break;
            case 1:
                if (a = this.wb(this.Ob(this.a, this.b)),
                this.pk(this.a).Oc(a, this.b),
                this.b.Nd(a, this.a),
                1 == a) {
                    this.a.hb("Stopped");
                    this.a.zd();
                    for (a = this.a; null != a.parent && a.parent != this.a.ea; )
                        "Stopped" != a.Ce && (a.hb("Stopped"),
                        a.zd()),
                        a = a.parent;
                    this.pk(this.a).va();
                    this.b.hb("Running");
                    this.b.gb();
                    this.va()
                }
            }
        }
    }
    Bg.g = !0;
    Bg.u = hb;
    Object.assign(Bg.prototype, {
        j: Bg
    });
    class Ve extends hb {
        constructor(a) {
            super(a, null);
            a.hb("Paused");
            a.Oc(1, null)
        }
        update() {
            let a = this.wb(this.Ob(this.a, this.b));
            this.a.Oc(a, this.b);
            1 > a || (this.a.hb("Stopped"),
            this.a.zd(),
            this.a.va(),
            this.va())
        }
    }
    Ve.g = !0;
    Ve.u = hb;
    Object.assign(Ve.prototype, {
        j: Ve
    });
    class Fd extends hb {
        constructor(a, b, c) {
            null == b && (b = !0);
            let d = a.jK();
            super(a, d);
            this.lN = b;
            this.Jh = c;
            a.hb("Paused");
            a.Oc(0, d)
        }
        update(a) {
            super.update(a);
            a = this.wb(this.Ob(this.a, this.b));
            this.a.Oc(a, this.b);
            1 == a && (this.a.hb("Stopped"),
            this.a.zd(),
            this.a.bd.va(),
            this.lN && ("Stopped" == this.b.Ce && this.b.hb("Restarted"),
            this.b.hb("Running"),
            this.b.gb()),
            this.va(),
            null != this.Jh && (this.Jh(),
            this.Jh = null))
        }
    }
    Fd.g = !0;
    Fd.u = hb;
    Object.assign(Fd.prototype, {
        j: Fd
    });
    class Dd extends hb {
        constructor(a, b) {
            super(a, b);
            b.hb("Created");
            b.za();
            b.Va()
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 0:
                if (this.time < this.Ii(this.b))
                    break;
                "Running" == this.a.Ce && this.a.hb("Paused");
                this.b.hb("Started");
                this.b.Xk();
                this.b.Nd(0, this.a);
                this.ha(1);
                break;
            case 1:
                a = this.wb(this.Ob(this.a, this.b)),
                this.b.Nd(a, this.a),
                1 > a || (this.b.Pi() && (this.a.hb("Stopped"),
                this.a.zd()),
                this.b.hb("Running"),
                this.b.gb(),
                this.va())
            }
        }
    }
    Dd.g = !0;
    Dd.u = hb;
    Object.assign(Dd.prototype, {
        j: Dd
    });
    class Ed extends hb {
        constructor(a) {
            super(null, a);
            a.hb("Created");
            a.za();
            a.Va()
        }
        update() {
            switch (this.state) {
            case 0:
                if (this.time < this.Ii(this.b))
                    break;
                this.b.hb("Started");
                this.b.Xk();
                this.b.Nd(0, this.a);
                this.ha(1);
                break;
            case 1:
                let a = this.wb(this.Ob(this.b, this.a));
                this.b.Nd(a, this.a);
                1 > a || (this.b.hb("Running"),
                this.b.gb(),
                this.va())
            }
        }
    }
    Ed.g = !0;
    Ed.u = hb;
    Object.assign(Ed.prototype, {
        j: Ed
    });
    class zd {
        constructor(a, b, c) {
            this.$c = null;
            this.jl = !1;
            if (null != c) {
                this.jc = a;
                this.Fc = b;
                a = this.K = Array(this.jc * this.Fc);
                b = 0;
                let d = this.jc * this.Fc;
                for (; b < d; ) {
                    let e = b++;
                    a[e] = c[e]
                }
            } else
                this.jc = a,
                this.Fc = b,
                this.K = Array(this.jc * this.Fc)
        }
        forEach(a) {
            let b = this.K
              , c = this.jc
              , d = 0
              , e = this.jc * this.Fc;
            for (; d < e; ) {
                let f = d++;
                b[f] = a(b[f], f % c, f / c | 0)
            }
            return this
        }
        Eh(a) {
            let b = this.K
              , c = 0
              , d = this.jc * this.Fc;
            for (; c < d; )
                a(b[c++]);
            return this
        }
        resize(a, b) {
            if (a == this.jc && b == this.Fc)
                return this;
            let c = this.K;
            this.K = Array(a * b);
            if (a == this.jc)
                return Gb.dm(c, 0, this.K, this.jc * (b < this.Fc ? b : this.Fc)),
                this.jc = a,
                this.Fc = b,
                this;
            let d = a < this.jc ? a : this.jc, e;
            let f = this.K
              , g = 0
              , h = b < this.Fc ? b : this.Fc;
            for (; g < h; ) {
                var m = g++;
                e = m * a;
                m *= this.jc;
                let n = 0
                  , q = d;
                for (; n < q; ) {
                    let p = n++;
                    f[e + p] = c[m + p]
                }
            }
            this.jc = a;
            this.Fc = b;
            return this
        }
        iterator() {
            if (this.jl) {
                if (null == this.$c)
                    this.$c = new Gd(this);
                else {
                    let a = this.$c;
                    a.K = a.ae.K;
                    let b = a.ae;
                    a.Mf = b.jc * b.Fc;
                    a.$d = 0
                }
                return this.$c
            }
            return new Gd(this)
        }
    }
    zd.g = !0;
    zd.sb = [Lc];
    Object.assign(zd.prototype, {
        j: zd
    });
    class Vc {
    }
    Vc.g = !0;
    Vc.me = !0;
    Object.assign(Vc.prototype, {
        j: Vc
    });
    class Gd {
        constructor(a) {
            this.ae = a;
            this.K = this.ae.K;
            a = this.ae;
            this.Mf = a.jc * a.Fc;
            this.$d = 0
        }
        fb() {
            return this.$d < this.Mf
        }
        next() {
            return this.K[this.$d++]
        }
    }
    Gd.g = !0;
    Gd.sb = [Vc];
    Object.assign(Gd.prototype, {
        j: Gd
    });
    class vd {
        constructor(a) {
            this.ae = a;
            this.K = this.ae.K;
            this.Mf = this.ae.Z;
            this.$d = 0
        }
        dt() {
            this.K = this.ae = null
        }
        fb() {
            return this.$d < this.Mf
        }
        next() {
            return this.K[this.$d++]
        }
    }
    vd.g = !0;
    vd.sb = [Vc];
    Object.assign(vd.prototype, {
        j: vd
    });
    class Cg {
    }
    Cg.g = !0;
    Cg.me = !0;
    Cg.sb = [Lc];
    class Dg {
    }
    Dg.g = !0;
    Dg.me = !0;
    Dg.sb = [Lc];
    class ac {
        constructor(a, b, c) {
            null == a && (a = 16);
            this.Ba = 0;
            this.Ki = -2;
            this.Na = this.Kk = 1 > a ? 1 : a;
            if (null != b) {
                a = this.Ba = b.length;
                var d = this.Na;
                this.Na = a > d ? a : d
            }
            this.K = Array(this.Na);
            if (null != b) {
                a = this.K;
                d = 0;
                let e = this.Ba;
                for (; d < e; ) {
                    let f = d++;
                    a[f] = b[f]
                }
            }
            c && (this.Ki = 0)
        }
        gf(a) {
            a > this.Na && (this.Na = a,
            this.Th(a))
        }
        top() {
            return this.K[this.Ba - 1]
        }
        clear(a) {
            null == a && (a = !1);
            a && Gb.Vp(this.K);
            this.Ba = 0
        }
        grow() {
            this.Na = wg.nm(this.Ki, this.Na);
            this.Th(this.Na)
        }
        Th(a) {
            a = Array(a);
            Gb.dm(this.K, 0, a, this.Ba);
            this.K = a
        }
    }
    ac.g = !0;
    ac.sb = [Dg];
    Object.assign(ac.prototype, {
        j: ac
    });
    class We {
        static next() {
            null == We.Vw && (We.Vw = 0);
            return We.Vw++
        }
    }
    We.g = !0;
    class Xe {
    }
    Xe.g = !0;
    Xe.me = !0;
    Object.assign(Xe.prototype, {
        j: Xe
    });
    class Ye {
        constructor(a, b, c) {
            null == b && (b = !1);
            null == a && (a = 1);
            this.$c = null;
            this.Z = 0;
            this.jl = !1;
            this.Ki = -2;
            this.Kk = 1 > a ? 1 : a;
            this.Na = a;
            this.Lf = b;
            null != c && (a = this.Z = c.length,
            b = this.Na,
            this.Na = a > b ? a : b);
            this.K = Array(this.Na + 1);
            this.K[0] = null;
            if (null != c) {
                a = this.K;
                b = 1;
                let d = this.Z + 1;
                for (; b < d; ) {
                    let e = b++;
                    a[e] = c[e - 1]
                }
                this.eN()
            }
        }
        enqueue(a) {
            this.Z == this.Na && this.grow();
            this.K[++this.Z] = a;
            a = a.i = this.Z;
            let b = this.K
              , c = a >> 1
              , d = b[a]
              , e = d.priority;
            if (this.Lf)
                for (; 0 < c; ) {
                    var f = b[c];
                    if (0 > e - f.priority)
                        b[a] = f,
                        f.i = a,
                        a = c,
                        c >>= 1;
                    else
                        break
                }
            else
                for (; 0 < c; )
                    if (f = b[c],
                    0 < e - f.priority)
                        b[a] = f,
                        f.i = a,
                        a = c,
                        c >>= 1;
                    else
                        break;
            b[a] = d;
            d.i = a
        }
        dJ() {
            var a = this.K;
            let b = a[1];
            b.i = -1;
            a[1] = a[this.Z];
            a = 1;
            let c = this.K, d = 2, e, f = c[1], g = f.priority;
            if (this.Lf)
                for (; d < this.Z; )
                    if (d < this.Z - 1 && 0 < c[d].priority - c[d + 1].priority && ++d,
                    e = c[d],
                    0 < g - e.priority)
                        c[a] = e,
                        e.i = a,
                        a = f.i = d,
                        d <<= 1;
                    else
                        break;
            else
                for (; d < this.Z; )
                    if (d < this.Z - 1 && 0 > c[d].priority - c[d + 1].priority && ++d,
                    e = c[d],
                    0 > g - e.priority)
                        c[a] = e,
                        e.i = a,
                        a = f.i = d,
                        d <<= 1;
                    else
                        break;
            c[a] = f;
            f.i = a;
            this.Z--;
            return b
        }
        gN(a, b) {
            var c = a.priority;
            if (c != b)
                if (a.priority = b,
                a = a.i,
                this.Lf)
                    if (b < c) {
                        b = a;
                        c = this.K;
                        var d = a >> 1;
                        a = c[a];
                        var e = a.priority;
                        if (this.Lf)
                            for (; 0 < d; ) {
                                var f = c[d];
                                if (0 > e - f.priority)
                                    c[b] = f,
                                    f.i = b,
                                    b = d,
                                    d >>= 1;
                                else
                                    break
                            }
                        else
                            for (; 0 < d; )
                                if (f = c[d],
                                0 < e - f.priority)
                                    c[b] = f,
                                    f.i = b,
                                    b = d,
                                    d >>= 1;
                                else
                                    break;
                        c[b] = a;
                        a.i = b
                    } else {
                        b = a;
                        c = this.K;
                        d = a << 1;
                        e = c[a];
                        f = e.priority;
                        if (this.Lf)
                            for (; d < this.Z; )
                                if (d < this.Z - 1 && 0 < c[d].priority - c[d + 1].priority && ++d,
                                a = c[d],
                                0 < f - a.priority)
                                    c[b] = a,
                                    a.i = b,
                                    b = e.i = d,
                                    d <<= 1;
                                else
                                    break;
                        else
                            for (; d < this.Z; )
                                if (d < this.Z - 1 && 0 > c[d].priority - c[d + 1].priority && ++d,
                                a = c[d],
                                0 > f - a.priority)
                                    c[b] = a,
                                    a.i = b,
                                    b = e.i = d,
                                    d <<= 1;
                                else
                                    break;
                        c[b] = e;
                        e.i = b;
                        a = this.Z;
                        b = this.K;
                        c = a >> 1;
                        d = b[a];
                        e = d.priority;
                        if (this.Lf)
                            for (; 0 < c; )
                                if (f = b[c],
                                0 > e - f.priority)
                                    b[a] = f,
                                    f.i = a,
                                    a = c,
                                    c >>= 1;
                                else
                                    break;
                        else
                            for (; 0 < c; )
                                if (f = b[c],
                                0 < e - f.priority)
                                    b[a] = f,
                                    f.i = a,
                                    a = c,
                                    c >>= 1;
                                else
                                    break;
                        b[a] = d;
                        d.i = a
                    }
                else if (b > c) {
                    b = a;
                    c = this.K;
                    d = a >> 1;
                    a = c[a];
                    e = a.priority;
                    if (this.Lf)
                        for (; 0 < d; )
                            if (f = c[d],
                            0 > e - f.priority)
                                c[b] = f,
                                f.i = b,
                                b = d,
                                d >>= 1;
                            else
                                break;
                    else
                        for (; 0 < d; )
                            if (f = c[d],
                            0 < e - f.priority)
                                c[b] = f,
                                f.i = b,
                                b = d,
                                d >>= 1;
                            else
                                break;
                    c[b] = a;
                    a.i = b
                } else {
                    b = a;
                    c = this.K;
                    d = a << 1;
                    e = c[a];
                    f = e.priority;
                    if (this.Lf)
                        for (; d < this.Z; )
                            if (d < this.Z - 1 && 0 < c[d].priority - c[d + 1].priority && ++d,
                            a = c[d],
                            0 < f - a.priority)
                                c[b] = a,
                                a.i = b,
                                b = e.i = d,
                                d <<= 1;
                            else
                                break;
                    else
                        for (; d < this.Z; )
                            if (d < this.Z - 1 && 0 > c[d].priority - c[d + 1].priority && ++d,
                            a = c[d],
                            0 > f - a.priority)
                                c[b] = a,
                                a.i = b,
                                b = e.i = d,
                                d <<= 1;
                            else
                                break;
                    c[b] = e;
                    e.i = b;
                    a = this.Z;
                    b = this.K;
                    c = a >> 1;
                    d = b[a];
                    e = d.priority;
                    if (this.Lf)
                        for (; 0 < c; )
                            if (f = b[c],
                            0 > e - f.priority)
                                b[a] = f,
                                f.i = a,
                                a = c,
                                c >>= 1;
                            else
                                break;
                    else
                        for (; 0 < c; )
                            if (f = b[c],
                            0 < e - f.priority)
                                b[a] = f,
                                f.i = a,
                                a = c,
                                c >>= 1;
                            else
                                break;
                    b[a] = d;
                    d.i = a
                }
        }
        clear(a) {
            null == a && (a = !1);
            a && Gb.Vp(this.K);
            this.Z = 0
        }
        iterator() {
            if (this.jl) {
                if (null == this.$c)
                    return new Hd(this);
                this.$c.reset();
                return this.$c
            }
            return new Hd(this)
        }
        eN() {
            let a = this.Z >> 1;
            for (; 1 <= a; )
                this.ez(a, this.Z),
                --a
        }
        ez(a, b) {
            let c = this.K;
            var d = a << 1
              , e = d + 1;
            let f = a;
            this.Lf ? (d <= b && 0 > c[d].priority - c[a].priority && (f = d),
            d + 1 <= b && 0 > c[d + 1].priority - c[f].priority && (f = e)) : (d <= b && 0 < c[d].priority - c[a].priority && (f = d),
            d + 1 <= b && 0 < c[d + 1].priority - c[f].priority && (f = e));
            f != a && (d = c[f],
            e = c[a],
            c[f] = e,
            c[a] = d,
            a = d.i,
            d.i = e.i,
            e.i = a,
            this.ez(f, b))
        }
        grow() {
            this.Na = wg.nm(this.Ki, this.Na);
            this.Th(this.Na)
        }
        Th(a) {
            a = Array(a + 1);
            Gb.dm(this.K, 0, a, this.Z + 1);
            this.K = a
        }
    }
    Ye.g = !0;
    Ye.sb = [Cg];
    Object.assign(Ye.prototype, {
        j: Ye
    });
    class Hd {
        constructor(a) {
            this.ae = a;
            this.reset()
        }
        reset() {
            this.$d = 0;
            this.Mf = this.ae.Z;
            this.K = Array(this.Mf);
            Gb.dm(this.ae.K, 1, this.K, this.Mf);
            return this
        }
        fb() {
            return this.$d < this.Mf
        }
        next() {
            return this.K[this.$d++]
        }
    }
    Hd.g = !0;
    Hd.sb = [Vc];
    Object.assign(Hd.prototype, {
        j: Hd
    });
    class Wh {
        static II(a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            return a < b ? -1 : a > b ? 1 : 0
        }
    }
    Wh.g = !0;
    class wg {
        static nm(a, b) {
            if (0 < a)
                b += a;
            else
                switch (a) {
                case -3:
                    b <<= 1;
                    break;
                case -2:
                    b = (3 * b >> 1) + 1;
                    break;
                case -1:
                    a = b + 1;
                    b = (a >> 3) + (9 > a ? 3 : 6);
                    b += a;
                    break;
                case 0:
                    throw 5;
                }
            return b
        }
    }
    wg.g = !0;
    class Gb {
        static dm(a, b, c, d) {
            if (0 < d)
                if (a == c)
                    if (0 > b) {
                        c = b + d;
                        b = 0 + d;
                        for (var e = 0; e < d; )
                            ++e,
                            --c,
                            --b,
                            a[b] = a[c]
                    } else {
                        if (0 < b)
                            for (c = b,
                            e = b = 0; e < d; )
                                ++e,
                                a[b] = a[c],
                                ++c,
                                ++b
                    }
                else if (0 == b)
                    for (b = 0; b < d; )
                        e = b++,
                        c[e] = a[e];
                else if (0 == b)
                    for (b = 0; b < d; )
                        e = b++,
                        c[0 + e] = a[e];
                else
                    for (e = 0; e < d; ) {
                        let f = e++;
                        c[f] = a[b + f]
                    }
        }
        static Vp(a) {
            var b, c;
            null == c && (c = 0);
            null == b && (b = 0);
            let d = b;
            for (b = 0 >= c ? a.length : b + c; d < b; )
                a[d++] = null
        }
        static tI(a, b, c) {
            let d = 0, e, f = c + 1;
            for (; d < f; )
                e = d + (f - d >> 1),
                a[e] < b ? d = e + 1 : f = e;
            return d <= c && a[d] == b ? d : ~d
        }
    }
    Gb.g = !0;
    class K {
        static iK() {
            let a = window.famobi.getOffsets();
            return new Eg(Bb.Cf(a, "left"),Bb.Cf(a, "right"),Bb.Cf(a, "top"),Bb.Cf(a, "bottom"))
        }
        static dM(a) {
            window.famobi.onOffsetChange(a)
        }
        static eM(a) {
            window.famobi_onPauseRequested = a
        }
        static hM(a) {
            window.famobi_onResumeRequested = a
        }
        static sq(a, b) {
            window.famobi.onRequest(a, b)
        }
        static Pg(a, b) {
            K.Hp = !0;
            window.famobi.showInterstitialAd(a, function() {
                K.Hp = !1;
                b()
            })
        }
        static Fy() {
            let a = window.famobi.getVolume();
            K.EI && (a = 1);
            return a
        }
        static SN(a) {
            if (K.Dz != a) {
                K.Dz = a;
                try {
                    window.famobi.setPreloadProgress(a)
                } catch (b) {}
            }
        }
        static OJ() {
            try {
                window.famobi.gameReady()
            } catch (a) {}
        }
        static hasFeature(a) {
            try {
                return window.famobi.hasFeature(a)
            } catch (b) {
                return !1
            }
        }
        static qr(a, b) {
            K.nf("EVENT_LEVELSTART", {
                levelName: null != a ? a : ""
            }).then(function() {
                b()
            }, function() {
                b()
            })
        }
        static qC(a, b) {
            K.nf("EVENT_LEVELRESTART", {
                levelName: a
            }).then(function() {
                b()
            }, function() {
                b()
            })
        }
        static QO(a, b, c, d) {
            Promise.all([K.nf("EVENT_LEVELSUCCESS", {
                levelName: null != c ? c : ""
            }), K.nf("EVENT_LEVELSCORE", {
                levelName: null != c ? c : "",
                levelScore: a
            }), K.nf("EVENT_TOTALSCORE", {
                totalScore: b
            })]).then(function() {
                d()
            }, function() {
                d()
            })
        }
        static Bv(a, b, c) {
            K.nf("EVENT_LEVELFAIL", {
                reason: a,
                levelName: null != b ? b : ""
            }).then(function() {
                c()
            }, function() {
                c()
            })
        }
        static Av(a, b, c, d) {
            K.nf("EVENT_CUSTOM", {
                eventName: "LEVELEND",
                result: b,
                score: a
            }).then(function() {
                c()
            }, function() {
                d()
            })
        }
        static RO(a) {
            K.nf("EVENT_LIVESCORE", {
                liveScore: a
            })
        }
        static SO(a) {
            K.nf("EVENT_PAUSE").then(function() {
                a()
            }, function() {
                a()
            })
        }
        static TO(a) {
            K.nf("EVENT_RESUME").then(function() {
                a()
            }, function() {
                a()
            })
        }
        static rC(a, b) {
            K.nf("EVENT_VOLUMECHANGE", {
                bgmVolume: a,
                sfxVolume: b
            })
        }
        static nf(a, b) {
            try {
                return null != b ? window.famobi_analytics.trackEvent(a, b) : window.famobi_analytics.trackEvent(a)
            } catch (c) {
                return new Promise(function(d) {
                    d(null)
                }
                )
            }
        }
    }
    K.g = !0;
    class Eg {
        constructor(a, b, c, d) {
            this.Cz = a;
            this.r = b;
            this.t = c;
            this.b = d
        }
    }
    Eg.g = !0;
    Object.assign(Eg.prototype, {
        j: Eg
    });
    class Ke {
        constructor(a) {
            this.storage = null;
            this.key = a;
            this.storage = window.famobi.localStorage
        }
        load(a) {
            let b = this.storage.getItem(this.key);
            null != a && a(b);
            return b
        }
        save(a, b) {
            this.storage.setItem(this.key, a);
            null != b && b(!0)
        }
    }
    Ke.g = !0;
    Ke.sb = [Bd];
    Object.assign(Ke.prototype, {
        j: Ke
    });
    class Fg {
        constructor(a) {
            this.U = a;
            this.l = new S;
            this.Ca = new A(this.l);
            a.oa(0).R(this.l.B);
            this.Zs = !1
        }
        oO() {
            this.Bf = new S;
            this.l.appendChild(this.Bf);
            this.xm = new A(this.Bf,r.xm);
            this.xm.F()
        }
        KJ() {
            this.Zs = !this.Zs;
            this.xm.Yb().rotation(this.Zs ? 180 : 0, .3, Ba.Bm(100))
        }
        update() {
            let a = za.instance.window.zh()
              , b = this.U.Yi
              , c = this.U.Xi;
            var d = (new X(0,0,a.x,a.y)).rh(this.U.Yi / this.U.Xi)
              , e = this.U.kb.jb.zoom;
            let f = (a.x - (d.A - d.o)) / e;
            d = (a.y - (d.D - d.C)) / e;
            this.Ca.kf(r.us);
            this.Ca.F();
            e = !1;
            1.2 > a.x / a.y ? (this.Ca.ma(0),
            this.Ca.sa((b + f) / this.Ca.Y.x),
            this.Ca.xb((c + d) / this.Ca.Y.y)) : (this.Ca.ma(90),
            e = !0,
            this.Ca.sa((c + d) / this.Ca.Y.x),
            this.Ca.xb((b + f) / this.Ca.Y.y));
            this.Ca.m(b / 2);
            this.Ca.s(c / 2);
            null != this.xm && (e ? (this.Bf.sa(this.Ca.Sc),
            this.Bf.xb(this.Ca.ib),
            this.Bf.m(this.Ca.cb() + 55 * this.Ca.Sc),
            this.Bf.s(this.Ca.Ka + 10 * this.Ca.ib)) : (this.Bf.sa(this.Ca.ib),
            this.Bf.xb(this.Ca.Sc),
            this.Bf.m(this.Ca.cb() + 10 * this.Ca.ib),
            this.Bf.s(this.Ca.Ka - 40 * this.Ca.Sc)))
        }
    }
    Fg.g = !0;
    Object.assign(Fg.prototype, {
        j: Fg
    });
    class xa {
        constructor() {
            this.Ai = 1;
            this.x = this.y = this.rotation = 0;
            this.visible = !0;
            this.ia = new X(qa,qa,ra,ra)
        }
        Sd() {
            this.ia.o = this.x + this.ca.o;
            this.ia.C = this.y + this.ca.C;
            this.ia.A = this.x + this.ca.A;
            this.ia.D = this.y + this.ca.D
        }
        M() {}
        xB(a) {
            this.nb = a
        }
        update(a) {
            null != this.nb && (this.nb.update(a),
            this.x = this.nb.i.x,
            this.y = this.nb.i.y,
            this.rotation = this.nb.angle)
        }
        HM(a, b) {
            let c = this.ia
              , d = this.ia;
            return Q.gj(a, b, this.ia.o, this.ia.C, c.A - c.o, d.D - d.C)
        }
        XM(a, b, c, d) {
            let e = this.ia.o
              , f = this.ia.C
              , g = this.ca
              , h = this.ca;
            return Q.tu(a, b, c, d, e, f, e + (g.A - g.o), f + (h.D - h.C))
        }
        static Xm(a, b) {
            return Xh.test(a.ia, b.ia)
        }
    }
    xa.g = !0;
    Object.assign(xa.prototype, {
        j: xa
    });
    class Qb extends xa {
        constructor() {
            super();
            this.Ra = null;
            this.If = 0;
            this.xz = !1;
            this.xc = null;
            this.Hu = 0;
            this.gm = this.$ = null
        }
    }
    Qb.g = !0;
    Qb.u = xa;
    Object.assign(Qb.prototype, {
        j: Qb
    });
    class Da extends xa {
        constructor() {
            super();
            this.tC = -1
        }
        av(a) {
            this.tC = a
        }
        Ak() {
            return -1 != this.tC
        }
        Fi() {
            return new t(this.x,this.y)
        }
        Wf(a) {
            this.x = a.x;
            this.y = a.y
        }
        tg() {
            return null
        }
        it() {
            let a = this.tg();
            return (a.x + a.y) / 4
        }
        DN(a) {
            this.Ai = a.x
        }
        sA() {}
        Lh(a) {
            this.rotation = null != a.angle ? a.angle : 0;
            let b = a.path;
            if (null != b) {
                let c = Na.lw;
                "R" == b.charAt(0) && (c = Math.round(3 * Ha.parseInt(ua.substr(b, 2, null)) / 2 + 1));
                a = new Id(c,a.moveSpeed * oa.Ol,a.rotateSpeed);
                a.angle = this.rotation;
                a.yB(b, this.x, this.y);
                this.xB(a);
                a.start()
            }
        }
    }
    Da.g = !0;
    Da.u = xa;
    Object.assign(Da.prototype, {
        j: Da
    });
    class Wc extends Da {
        constructor(a, b, c, d, e) {
            super();
            this.angle = 0;
            this.Lb = t.$b();
            this.Mb = t.$b();
            this.Vc = t.$b();
            this.Wc = t.$b();
            this.kr = -1;
            this.Wm = new t(0,0);
            this.Zq = !1;
            this.l = new S;
            a.oa(4).R(this.l.B);
            this.S = new A(this.l);
            this.S.kf(r.Kc, 1 == d ? k.aE : k.cE);
            this.S.J(.4);
            this.S.F();
            this.rotation = e;
            this.x = b;
            this.y = c;
            this.w = d;
            this.kq = new t(b,c);
            a = .4 * (1 == d ? 194 : 302) / 2;
            d = .4 * (1 == d ? 127 : 123) / 2;
            d = this.ca = new X(0 - a,0 - d,a,d);
            this.ia = new X(d.o,d.C,d.A,d.D);
            this.nd()
        }
        Tx() {
            this.kq.x = this.x;
            this.kq.y = this.y
        }
        uM() {
            let a = 1 == this.w ? Ci : Di;
            this.S.ka().play(a)
        }
        nd() {
            var a = this.ca;
            a = a.A - a.o;
            this.Lb.x = this.x - a / 2;
            this.Mb.x = this.x + a / 2;
            this.Lb.y = this.Mb.y = this.y - Yh / 2;
            this.Vc.x = this.Lb.x;
            this.Wc.x = this.Mb.x;
            this.Vc.y = this.Wc.y = this.y + Yh / 2;
            this.angle = this.rotation * Fa;
            this.Lb.Ua(this.angle, this.x, this.y);
            this.Mb.Ua(this.angle, this.x, this.y);
            this.Vc.Ua(this.angle, this.x, this.y);
            this.Wc.Ua(this.angle, this.x, this.y)
        }
        update(a) {
            super.update(a);
            null != this.nb && this.nd()
        }
        M() {
            super.M();
            this.l.m(this.x);
            this.l.s(this.y);
            this.S.J(.4 * this.Ai);
            this.l.ma(this.rotation)
        }
        tg() {
            let a = this.ca
              , b = this.ca;
            return new t(a.A - a.o,b.D - b.C)
        }
        Wf(a) {
            let b = new t(this.x,this.y);
            1E-6 > t.Xa(a, b).Hm() || (.001 <= this.kr && .1 >= this.kr ? (this.Wm = t.so(t.Xa(a, b), this.kr),
            4E4 < this.Wm.Hm() && (this.Wm = t.pd(t.to(this.Wm), 200))) : this.Wm = new t(0,0),
            this.kr = 0,
            this.kq = b.ub(),
            this.x = a.x,
            this.y = a.y,
            this.nd())
        }
        sA() {
            this.Tx()
        }
    }
    Wc.g = !0;
    Wc.u = Da;
    Object.assign(Wc.prototype, {
        j: Wc
    });
    class fb {
        constructor(a) {
            this.T = a;
            this.controller = this.kt()
        }
        Vy() {
            return this.controller.Zr ? this.controller.Nf - this.controller.Md : -1
        }
        Nc(a) {
            return this.controller.La == a
        }
        play(a, b) {
            this.controller.Hg = 0;
            this.controller.xu = null != b ? b - 1 : 0;
            this.controller.play(a);
            return this
        }
        AA(a) {
            let b = this;
            this.play(a).ce(function() {
                b.T.H()
            })
        }
        loop(a, b) {
            null == b && (b = !1);
            this.controller.Hg = b ? 2 : 1;
            this.controller.play(a);
            return this
        }
        stop() {
            this.controller.stop();
            return this
        }
        ce(a) {
            this.controller.NN(a)
        }
        RA() {
            this.controller.cd = W.ym(0, this.Vy())
        }
        setTime(a) {
            let b = this.Vy();
            this.controller.cd = 0 > a ? 0 : a > b ? b : a;
            return this
        }
        kt() {
            let a = this.T.B.GJ()
              , b = this;
            null != a && a.jx || (a = new Jd,
            a.MN(function(c, d) {
                b.T.In(d)
            }),
            this.T.B.Bo(a));
            return a
        }
        static create(a) {
            function b(v) {
                null != g.Gc(v) && (v = ua.substr(g.Gc(v), 1, null),
                e = -1 != v.indexOf(".") ? parseFloat(v) : 1 / Ha.parseInt(v))
            }
            function c(v) {
                return f + (10 > v ? "000" : 100 > v ? "00" : "0") + v
            }
            let d = []
              , e = .03333333333333333
              , f = ""
              , g = null
              , h = 0;
            for (a = a.split(","); h < a.length; ) {
                var m = a[h];
                ++h;
                g = new ka("^([a-z][\\w\\/]*)(@[\\d\\.]+)*","i");
                if (g.match(m))
                    f = g.Gc(1),
                    b(2);
                else if (g = new ka("^(\\d+)-(\\d+)(@[\\d\\.]+)*",""),
                g.match(m)) {
                    var n = Ha.parseInt(g.Gc(1))
                      , q = Ha.parseInt(g.Gc(2));
                    b(3);
                    m = [];
                    var p = n;
                    if (n > q)
                        for (; p >= q; )
                            m.push(p--);
                    else
                        for (; p <= q; )
                            m.push(p++);
                    n = [];
                    q = 0;
                    for (p = m.length; q < p; )
                        ++q,
                        n.push(e);
                    for (p = q = 0; p < m.length; )
                        d.push(new sc(c(m[p++]),n[q++]))
                } else if (g = new ka("^(\\d+)x(\\d+)(@[\\d\\.]+)*",""),
                g.match(m))
                    for (m = Ha.parseInt(g.Gc(1)),
                    n = Ha.parseInt(g.Gc(2)),
                    b(3),
                    q = 0; q < n; )
                        ++q,
                        d.push(new sc(c(m),e));
                else
                    g = new ka("^\\d+(@[\\d\\.]+)*(@[\\d\\.]+)*",""),
                    g.match(m) && (b(1),
                    d.push(new sc(c(Ha.parseInt(g.Gc(0))),e)))
            }
            return new Xc(d,0)
        }
    }
    fb.g = !0;
    Object.assign(fb.prototype, {
        j: fb
    });
    class sc {
        constructor(a, b) {
            this.data = a;
            this.time = b
        }
    }
    sc.g = !0;
    Object.assign(sc.prototype, {
        j: sc
    });
    class Xc {
        constructor(a, b) {
            this.He = a.length;
            this.data = Array(this.He);
            let c = 0;
            for (; c < this.He; )
                this.data[c] = a[c].data,
                ++c;
            switch (b) {
            case 0:
                this.rb = Array(this.He + 1);
                this.ai = 0;
                this.Po = a[0].time;
                c = 2;
                for (b = a[1].time; c < this.He; )
                    if (a[c++].time != b) {
                        this.Po = 0;
                        break
                    }
                for (c = 0; c < this.He; )
                    this.rb[c] = this.ai,
                    this.ai += a[c].time,
                    ++c;
                this.rb[c] = this.ai;
                break;
            case 1:
                for (this.rb = Array(this.He),
                this.ai = a[this.He - 1].time,
                this.Po = null,
                c = 0; c < this.He; )
                    this.rb[c] = a[c].time,
                    ++c
            }
        }
    }
    Xc.g = !0;
    Object.assign(Xc.prototype, {
        j: Xc
    });
    class Ze extends xa {
        constructor(a, b) {
            super();
            this.U = a;
            this.Fd = b;
            this.ye = [];
            this.Pk = []
        }
        MK(a, b, c, d) {
            function e(g, h) {
                return new sc(new t(g.x,g.y),h)
            }
            this.l = new S;
            this.U.oa(4).R(this.l.B);
            this.Pm = new A(null,r.Ve,k.rE);
            this.Pm.J(.4);
            this.Pm.F();
            this.U.oa(0).R(this.Pm.B);
            this.x = a.x;
            this.y = a.y;
            this.Zz = b;
            this.V = c;
            this.gI = d;
            this.elapsedTime = 0;
            this.isActive = !1;
            b = new t(0,0);
            a = this.Zz * Fa;
            c = new t(0,-27.200000000000003);
            d = new t(0,-33.6);
            let f = new t(0,-28);
            this.ye[0] = t.Bb(b, (new t(0,-4.4)).rotate(a));
            this.ye[1] = t.Bb(b, c.rotate(a));
            this.ye[2] = t.Bb(b, d.rotate(a));
            this.ye[3] = t.Bb(b, f.rotate(a));
            c = new t(0,-43.2);
            d = new t(0,-9.200000000000001);
            this.Pk[0] = t.Bb(b, (new t(0,-36.4)).rotate(a));
            this.Pk[1] = t.Bb(b, c.rotate(a));
            this.Pk[2] = t.Bb(b, d.rotate(a));
            b = new t(0,0);
            d = new t(0,5.400000000000001);
            c = new t(0,-4.799999999999997);
            d.rotate(a);
            c.rotate(a);
            a = t.Bb(b, d);
            b = t.Bb(b, c);
            null == Ch && (c = new Ia,
            c.setScale(.4, .4, 0, 100),
            c.Mg(0, 0, 0, 100),
            c.setScale(.45999999999999996, .34, .05),
            c.Mg(a.x, a.y, .05),
            c.setScale(.34, .45999999999999996, .1),
            c.Mg(b.x, b.y, .1),
            c.setScale(.4, .4, .15),
            c.Mg(0, 0, .15),
            Ch = c);
            this.lx = new Xc([e(this.ye[0], 0, 100), e(this.ye[1], .05, 100), e(this.ye[2], .1, 100), e(this.ye[3], .15)],1);
            this.nI = new Xc([e(this.Pk[0], 0, 100), e(this.Pk[1], .05, 100), e(this.Pk[2], .1, 100)],1)
        }
        Oz(a, b) {
            this.l.appendChild(a);
            this.We = a;
            this.ba = b;
            this.op().N(!1);
            null != this.ba ? (this.ba.i.x = this.x + this.ye[3].x,
            this.ba.i.y = this.y + this.ye[3].y,
            this.ba.qa.x = this.ba.i.x,
            this.ba.qa.y = this.ba.i.y,
            this.ss(this.lx),
            this.Gi().ka().play(Zh).ce(O(this, this.$p))) : this.Gi().ka().play($h).ce(O(this, this.$p));
            a.F();
            z.play(z.BG)
        }
        Qz() {
            this.elapsedTime = 0;
            this.isActive = !1;
            this.op().N(!1);
            null != this.ba ? (this.Gi().ka().play(ai).ce(O(this, this.$p)),
            this.ss(this.nI)) : this.Gi().ka().play(bi).ce(O(this, this.$p))
        }
        Gi() {
            return this.We.Yc(0)
        }
        op() {
            return this.We.Yc(1)
        }
        ss(a) {
            this.Jo = new $e(this,this.ba);
            this.Jo.play(a)
        }
        ys(a) {
            return t.od(this.x, this.y, a.i.x, a.i.y) < this.V
        }
        Ds(a) {
            this.ba = a;
            a.um = !0;
            a.i.x = this.x + this.ye[3].x;
            a.i.y = this.y + this.ye[3].y;
            a.qa.x = a.i.x;
            a.qa.y = a.i.y;
            a.ed = new t(0,0);
            a.$a = new t(0,0);
            this.Gi().bc(k.wE);
            this.mn = new Va(this.Gi());
            this.mn.play(Ch);
            this.ss(this.lx)
        }
        ZM() {
            this.ba.um = !1;
            this.ba = null;
            this.Qz();
            z.play(z.CG)
        }
        Dh() {
            return null != this.ba
        }
        update(a) {
            super.update(a);
            null != this.Jo && this.Jo.Rg(a);
            this.isActive && (this.elapsedTime += a,
            this.elapsedTime >= this.gI && (null == this.mn || !this.mn.Nc()) && this.Qz())
        }
        M() {
            super.M();
            this.l.m(this.x);
            this.l.s(this.y);
            this.Pm.m(this.x);
            this.Pm.s(this.y);
            null != this.We && this.We.ma(this.Zz)
        }
        ej(a, b) {
            a = t.od(this.x, this.y, a, b);
            b = null != this.mn && this.mn.Nc();
            return a < this.V ? !b : !1
        }
        $p(a) {
            switch (a) {
            case $h:
                this.elapsedTime = 0;
                this.isActive = !0;
                W.fl() && (this.Gi().bc(k.uE),
                this.op().N(!0),
                this.op().ka().play(Ei));
                break;
            case Zh:
                this.elapsedTime = 0;
                this.isActive = !0;
                break;
            case bi:
            case ai:
                this.We.remove(),
                this.We = null,
                this.Fd.PJ()
            }
        }
    }
    Ze.g = !0;
    Ze.u = xa;
    Object.assign(Ze.prototype, {
        j: Ze
    });
    class Yc {
        constructor() {
            this.controllers = null;
            this.SI = !0
        }
        H() {
            let a = this.controllers, b;
            for (; null != a; )
                b = a.next,
                a.H(),
                a = b
        }
        Bo(a) {
            null != this.controllers && (a.next = this.controllers);
            this.controllers = a;
            a.object = this
        }
        detach(a) {
            if (this.controllers == a)
                this.controllers = this.controllers.next;
            else {
                let b = this.controllers;
                for (; b.next != a; )
                    b = b.next;
                b.next = a.next
            }
            a.next = null;
            a.object = null
        }
        GJ() {
            let a = this.controllers;
            for (; null != a; ) {
                if (303 == a.type)
                    return a;
                a = a.next
            }
            return null
        }
        Rg(a) {
            if (null == this.controllers || !this.SI)
                return !1;
            let b = !1, c = this.controllers, d;
            for (; null != c; )
                d = c.next,
                c.update(a) && (b = !0),
                c = d;
            return b
        }
    }
    Yc.g = !0;
    Object.assign(Yc.prototype, {
        j: Yc
    });
    class $e extends Yc {
        constructor(a, b) {
            super();
            this.c = new Zc;
            this.Ve = a;
            this.O = b
        }
        play(a) {
            let b = a.data[0];
            this.set(b.x, b.y);
            this.c.play(a);
            this.c.un = O(this, this.VL);
            this.c.dj = O(this, this.dj);
            this.Bo(this.c)
        }
        dj() {
            this.H();
            this.Ve.Jo = null
        }
        VL(a, b, c) {
            let d = a.x;
            a = a.y;
            this.set(d + (b.x - d) * c, a + (b.y - a) * c)
        }
        set(a, b) {
            this.O.i.x = this.Ve.x + a;
            this.O.i.y = this.Ve.y + b;
            this.O.qa.x = this.O.i.x;
            this.O.qa.y = this.O.i.y
        }
    }
    $e.g = !0;
    $e.u = Yc;
    Object.assign($e.prototype, {
        j: $e
    });
    class Gg {
        constructor(a) {
            this.U = a;
            this.Gd = null;
            this.Qo = -1;
            this.Yz = !1;
            this.jk = []
        }
        update(a) {
            let b = 0
              , c = this.jk;
            for (; b < c.length; )
                c[b++].update(a)
        }
        M() {
            let a = 0
              , b = this.jk;
            for (; a < b.length; )
                b[a++].M()
        }
        ys(a) {
            return null == this.Gd ? !1 : this.Gd.isActive ? this.Gd.ys(a) : !1
        }
        Ds(a) {
            null != this.Gd && this.Gd.Ds(a)
        }
        Dh() {
            return null == this.Gd ? !1 : this.Gd.Dh()
        }
        pa(a, b) {
            this.jk.push(a);
            if (1 == b) {
                this.We = new S;
                var c = new A(this.We,r.Ve,k.vE);
                c.J(.4);
                c.F();
                c = new A(this.We,r.Ve,k.sE);
                c.J(.4);
                c.F();
                a.Oz(this.We, a.ba);
                this.Gd = a;
                this.Qo = b
            }
        }
        ej(a, b, c) {
            return null == this.Gd ? !1 : this.Gd.isActive && this.Gd.Dh() && this.Gd.ej(a, b, c) ? (this.Gd.ZM(),
            !0) : !1
        }
        PJ() {
            if (!this.Yz) {
                var a = this
                  , b = Ga.find(this.jk, function(e) {
                    return e.index == a.Qo
                })
                  , c = this.Qo + 1;
                c == this.jk.length + 1 && (c = 1);
                var d = Ga.find(this.jk, function(e) {
                    return e.index == c
                });
                d.Oz(this.We, b.ba);
                b.ba = null;
                this.Qo = c;
                this.Gd = d
            }
        }
        bL() {
            this.Yz = !0
        }
    }
    Gg.g = !0;
    Object.assign(Gg.prototype, {
        j: Gg
    });
    class ib extends Da {
        constructor(a) {
            super();
            this.hq = !1;
            this.l = new S;
            this.sl = new A(null,r.$,W.fl() ? k.iE : k.jE);
            this.sl.F();
            this.sl.J(.4);
            this.l.appendChild(this.sl);
            this.$ = new A(null,r.$,k.ow);
            this.$.J(.4);
            this.$.F();
            this.l.appendChild(this.$);
            a.oa(4).R(this.l.B);
            a = ib.Tv.w / 2;
            let b = ib.Tv.G / 2;
            a = this.ca = new X(0 - a,0 - b,a,b);
            this.ia = new X(a.o,a.C,a.A,a.D)
        }
        pop() {
            this.$.N(!1);
            this.hq = !0
        }
        update(a) {
            super.update(a);
            this.Sd()
        }
        M() {
            this.sl.m(this.x);
            this.sl.s(this.y);
            this.$.m(this.x);
            this.$.s(this.y);
            this.$.J(.4 * this.Ai);
            (this.HC || this.Ak()) && this.sl.N(!1)
        }
        tg() {
            let a = r.$.Nb.Xe(k.ow).sd;
            return new t(.4 * a.w,.4 * a.G)
        }
    }
    ib.g = !0;
    ib.u = Da;
    Object.assign(ib.prototype, {
        j: ib
    });
    class af {
        constructor() {
            this.XA = 1;
            this.wa = []
        }
        ex(a, b) {
            this.wa.splice(b, 0, a)
        }
        bx(a) {
            this.wa.push(a)
        }
        dN(a) {
            this.wa.splice(a, 1)
        }
    }
    af.g = !0;
    Object.assign(af.prototype, {
        j: af
    });
    class Kd extends af {
        constructor(a, b, c, d, e, f, g, h) {
            super();
            this.lJ = new F(0,0,0,1);
            this.mJ = new F(0,0,0,1);
            this.pJ = new F(0,0,0,1);
            this.nJ = new F(0,0,0,1);
            this.qJ = new F(0,0,0,1);
            this.effect = new Ld;
            this.effect.V = 2;
            this.na = new Ta;
            this.na.jf(this.effect);
            a.R(this.na);
            this.uu = 0;
            this.XA = 30;
            this.ec = -1;
            this.og = 0;
            this.fz = !1;
            this.oc = 42;
            this.nc = null != b ? b : new Cb;
            null != e ? this.yb = e : (this.yb = new Cb,
            this.yb.$f(1));
            this.nc.$f(.02);
            this.nc.i.x = c;
            this.nc.i.y = d;
            this.yb.i.x = f;
            this.yb.i.y = g;
            this.bx(this.nc);
            this.bx(this.yb);
            this.yb.Mj(this.nc, this.oc, 0);
            a = t.Xa(this.yb.i, this.nc.i);
            a.by(Math.round(h / this.oc + 2));
            this.Kb(h, a);
            this.hk = !1;
            this.yg = -1;
            this.iJ = this.vt = this.mm = !1;
            this.Rs = [];
            this.Fx = 3
        }
        H() {
            this.na.H();
            this.Rs = this.yb = this.nc = this.na = null
        }
        rc() {
            let a = 0
              , b = this.wa.length;
            if (0 < b) {
                let c = this.wa[0].i
                  , d = 1;
                for (; d < b; ) {
                    let e = this.wa[d++];
                    a += c.Se(e.i);
                    c = e.i
                }
            }
            return a
        }
        Kb(a, b) {
            null == b && (b = t.$b());
            let c = this.wa[this.wa.length - 2]
              , d = this.yb.Ig(c);
            for (var e; 0 < a; )
                a >= this.oc ? (c = this.wa[this.wa.length - 2],
                e = new Cb,
                e.$f(.02),
                e.i = t.Bb(c.i, b),
                this.ex(e, this.wa.length - 1),
                this.yb.Qx(c, e, d),
                e.Mj(c, this.oc, 0),
                a -= this.oc) : (e = a + d,
                e > this.oc ? (a = this.oc,
                d = e - this.oc) : (c = this.wa[this.wa.length - 2],
                this.yb.Lo(c, e),
                a = 0))
        }
        M() {
            this.effect.EN();
            let a = this.wa.length;
            var b;
            if (-1 == this.ec) {
                var c = Array(a);
                for (b = 0; b < a; ) {
                    var d = b++;
                    c[d] = this.wa[d].i
                }
                this.Qs(c)
            } else {
                d = [];
                let e = []
                  , f = !1
                  , g = 0;
                for (; g < a; ) {
                    let h = g++;
                    c = this.wa[h];
                    let m = !0;
                    0 < h && (b = this.wa[h - 1],
                    c.AK(b) || (m = !1));
                    -1 != c.Cg.x || m || (f = !0);
                    f ? e.push(c.i) : d[h] = c.i
                }
                0 < d.length && this.Qs(d);
                0 < e.length && !this.vt && this.Qs(e)
            }
        }
        Qs(a) {
            var b = a.length;
            let c = this.Rs;
            if (!(2 > b)) {
                var d = -1 == this.ec || this.hk ? 1 : this.og / 1.95;
                if (!(0 >= d)) {
                    1 < d && (d = 1);
                    var e = a[0]
                      , f = a[1]
                      , g = e.x - f.x;
                    f = e.y - f.y;
                    var h = Math.sqrt(g * g + f * f);
                    this.uu = h <= this.oc + .3 ? 0 : h <= this.oc + 1 ? 1 : h < this.oc + 4 ? 2 : 3;
                    if (!(3 > b)) {
                        var m = this.lJ
                          , n = this.mJ;
                        g = this.pJ;
                        var q = this.nJ;
                        f = this.qJ;
                        m.x = 0;
                        m.y = 0;
                        m.z = 0;
                        m.w = d;
                        n.x = .475;
                        n.y = .305;
                        n.z = .185;
                        n.w = d;
                        g.x = .19;
                        g.y = .122;
                        g.z = .074;
                        g.w = d;
                        q.x = .6755555555555556;
                        q.y = .44;
                        q.z = .27555555555555555;
                        q.w = d;
                        f.x = .304;
                        f.y = .198;
                        f.z = .124;
                        f.w = d;
                        this.fz && (n.x *= 3,
                        n.y *= 3,
                        n.z *= 3,
                        q.x *= 3,
                        q.y *= 3,
                        q.z *= 3,
                        g.x *= 3,
                        g.y *= 3,
                        g.z *= 3,
                        f.x *= 3,
                        f.y *= 3,
                        f.z *= 3,
                        1 < n.x && (n.x = 1),
                        1 < n.y && (n.y = 1),
                        1 < n.z && (n.z = 1),
                        1 < q.x && (q.x = 1),
                        1 < q.y && (q.y = 1),
                        1 < q.z && (q.z = 1),
                        1 < g.x && (g.x = 1),
                        1 < g.y && (g.y = 1),
                        1 < g.z && (g.z = 1),
                        1 < f.x && (f.x = 1),
                        1 < f.y && (f.y = 1),
                        1 < f.z && (f.z = 1));
                        h > this.oc + 7 && !this.iJ && (h = h / this.oc * 2,
                        g.x *= h,
                        f.x *= h,
                        1 < g.x && (g.x = 1),
                        1 < f.x && (f.x = 1));
                        h = !1;
                        b = (b - 1) * this.Fx;
                        var p = b - 1;
                        m = (n.x - g.x) / p;
                        var v = (n.y - g.y) / p;
                        n = (n.z - g.z) / p;
                        var u = (q.x - f.x) / p
                          , y = (q.y - f.y) / p;
                        q = (q.z - f.z) / p;
                        p = this.Fx - 1;
                        var B = p - 1
                          , x = c[0];
                        null == x ? c[0] = e.ub() : (x.x = e.x,
                        x.y = e.y);
                        for (e = 1; e <= b; ) {
                            x = e / b;
                            var H = c[e];
                            null == H && (H = c[e] = new t(0,0));
                            t.nB(a, x, H);
                            x = (e - 1) % p;
                            if (x == B || e == b) {
                                var D = this.hk ? 16777215 : h ? ((255 * g.z | 0) & 255) << 16 | ((255 * g.y | 0) & 255) << 8 | (255 * g.x | 0) & 255 : ((255 * f.z | 0) & 255) << 16 | ((255 * f.y | 0) & 255) << 8 | (255 * f.x | 0) & 255;
                                H = [];
                                let Z = [];
                                this.effect.points.push(H);
                                this.effect.jh.push(Z);
                                this.effect.$l.push(d);
                                let Y = e - x - 1
                                  , T = c[Y++];
                                H.push(new F(T.x,T.y,0,1));
                                D = new F((D & 255) / 255,(D >> 8 & 255) / 255,(D >> 16 & 255) / 255,1);
                                for (Z.push(D); Y <= e; )
                                    T = c[Y],
                                    H.push(new F(T.x,T.y,0,1)),
                                    Z.push(D),
                                    ++Y;
                                h = !h;
                                x += 1;
                                g.x += m * x;
                                g.y += v * x;
                                g.z += n * x;
                                f.x += u * x;
                                f.y += y * x;
                                f.z += q * x
                            }
                            ++e
                        }
                    }
                }
            }
        }
        mN(a) {
            for (var b = this.wa.length, c = this.yb.Ig(this.wa[b - 2]), d; 0 < a; )
                if (a >= this.oc) {
                    var e = b - 2;
                    d = this.wa[e];
                    this.yb.Qx(d, this.wa[b - 3], c);
                    this.dN(e);
                    --b;
                    a -= this.oc
                } else
                    e = c - a,
                    1 > e ? (a = this.oc,
                    c = this.oc + e + 1) : (d = this.wa[b - 2],
                    this.yb.Lo(d, e),
                    a = 0);
            a = (b - 1) * (this.oc + 3);
            b = this.yb.yf;
            c = b.length;
            for (d = 0; d < c; )
                e = b[d++],
                1 == e.type && (e.Ig = a)
        }
        update(a) {
            0 < this.og && (this.og = Na.Qk(this.og, 0, 1, a),
            1.95 > this.og && this.hk && this.vu(this.ec));
            let b = this.wa.length;
            for (var c, d = 0; d < b; )
                c = this.wa[d++],
                c != this.yb && c.update(a);
            a = 0;
            for (c = this.XA; a < c; )
                for (++a,
                d = 0; d < b; )
                    this.wa[d++].Fq()
        }
        vu(a) {
            this.hk = !1;
            var b = this.wa[a]
              , c = this.wa[a + 1];
            if (null == c)
                b.$A();
            else {
                var d = c.yf;
                let e = d.length
                  , f = 0;
                for (; f < e; ) {
                    let g = f++;
                    if (d[g].xi == b) {
                        c.aN(g);
                        d = new Cb;
                        d.$f(1E-5);
                        d.i.zb(c.i);
                        d.qa.zb(c.qa);
                        this.ex(d, a + 1);
                        d.Mj(b, this.oc, 0);
                        break
                    }
                }
            }
            a = 0;
            for (b = this.wa.length; a < b; )
                c = this.wa[a],
                c != this.yb && c.$f(1E-5),
                ++a
        }
        Lq(a) {
            this.ec = a;
            this.og = 2;
            this.hk = !0;
            this.fz = !1
        }
    }
    Kd.g = !0;
    Kd.u = af;
    Object.assign(Kd.prototype, {
        j: Kd
    });
    class Hg {
        constructor() {
            this.vb = new F(.5,.5,0,1);
            this.i = new F(0,0,0,1);
            this.Cj = new X(qa,qa,ra,ra);
            this.jb = new Cd
        }
        WK(a, b) {
            var c = za.instance.window
              , d = c.P.viewport
              , e = c.Cd.x
              , f = c.Cd.y;
            c = d.x * e | 0;
            let g = d.y * f | 0;
            e = d.w * e | 0;
            d = d.G * f | 0;
            let h = this.jb.ij
              , m = 1 / (h.m41 * a + h.m42 * b + 0 * h.m43 + h.m44)
              , n = e / 2;
            f = d / 2;
            let q = (h.m11 * a + h.m12 * b + 0 * h.m13 + h.m14) * m;
            a = (h.m21 * a + h.m22 * b + 0 * h.m23 + h.m24) * m;
            b = n * q + 0 * a + (n + c);
            a = 0 * q + -f * a + (f + g);
            return 0 > b + 400 || 0 > a + 400 || b - 200 > c + e || a - 200 > g + d ? !1 : !0
        }
        eK(a, b) {
            let c = za.instance.window.Km();
            a = this.jb.IC(new F(a,b,0,1), c);
            return Math.min(a.y, c.y + c.G - a.y)
        }
        fK(a, b) {
            let c = za.instance.window.Km();
            a = this.jb.IC(new F(a,b,0,1), c);
            return Math.min(a.x, c.x + c.w - a.x)
        }
        update() {
            var a = za.instance.window.zh()
              , b = this.Cj
              , c = this.Cj;
            c = Math.min(a.x / (b.A - b.o), a.y / (c.D - c.C));
            this.jb.ob(new F(a.x,a.y,0,1));
            this.jb.fO(c);
            this.jb.km();
            var d = b = this.Cj;
            d = (new X(0,0,a.x,a.y)).rh((b.A - b.o) / (d.D - d.C));
            b = (a.x - (d.A - d.o)) / c / 2;
            a = (a.y - (d.D - d.C)) / c / 2;
            c = this.jb;
            d = c.position;
            d.x = this.i.x + (b + (-b - b) * this.vb.x);
            d.y = this.i.y + (a + (-a - a) * this.vb.y);
            c.Zp()
        }
    }
    Hg.g = !0;
    Object.assign(Hg.prototype, {
        j: Hg
    });
    class vb extends Qb {
        constructor(a) {
            super();
            this.U = a;
            var b = vb.jo.w
              , c = b / 2;
            let d = vb.jo.G / 2;
            c = this.ca = new X(0 - c,0 - d,c,d);
            this.ia = new X(c.o,c.C,c.A,c.D);
            this.l = new S;
            a.oa(8).R(this.l.B);
            a = new A(null,r.O,k.kE);
            a.F();
            this.l.appendChild(a);
            b /= a.Y.x;
            b *= a.Y.x / vb.Rv.w;
            a.J(b);
            a = new A(null,r.O,k.lE);
            a.F();
            a.J(b);
            this.l.appendChild(a);
            a = new A(null,r.O,k.mE);
            a.F();
            a.J(b);
            this.l.appendChild(a);
            a = new A(null,r.O,ci.data[0]);
            a.F();
            a.J(b);
            this.l.appendChild(a);
            this.l.J(.71);
            this.bg = !0
        }
        vM() {
            if (null != this.l) {
                var a = this.l.Yc(3);
                a.N(!0);
                a.ka().play(ci).ce(function() {
                    a.N(!1)
                })
            }
        }
        wM() {
            if (null != this.l) {
                var a = this.l.Yc(3);
                a.N(!0);
                a.aa(1);
                a.ka().play(Fi);
                a.Yb().alpha(0, .2, null, null, function() {
                    a.N(!1)
                })
            }
        }
        H() {
            this.l.H();
            this.l = null
        }
        update(a) {
            super.update(a);
            this.ia.o = this.x + this.ca.o;
            this.ia.C = this.y + this.ca.C;
            this.ia.A = this.x + this.ca.A;
            this.ia.D = this.y + this.ca.D
        }
        M() {
            super.M();
            null != this.l && (this.bg && (this.l.m(this.x),
            this.l.s(this.y)),
            this.l.ma(this.rotation),
            this.l.N(this.visible))
        }
    }
    vb.g = !0;
    vb.u = Qb;
    Object.assign(vb.prototype, {
        j: vb
    });
    class $c {
        constructor() {
            this.rotation = 0;
            this.nl = this.ol = 1;
            this.x = this.y = 0
        }
        update() {}
    }
    $c.g = !0;
    Object.assign($c.prototype, {
        j: $c
    });
    class Rb extends $c {
        constructor(a) {
            super();
            this.y = this.x = 0;
            this.ol = this.nl = 1;
            this.rotation = 0;
            this.di = [];
            this.jh = [];
            this.wv = a;
            this.kc = [];
            this.active = !1;
            this.$o = this.duration = 0;
            this.vb = new t(0,0);
            this.GA = new t(0,0);
            this.Hz = this.Zc = this.hv = this.size = this.QA = this.lq = this.eC = this.ir = this.br = this.speed = this.xo = this.angle = 0;
            this.Zh = new bb(0,0,0,0);
            this.fr = new bb(0,0,0,0);
            this.oh = new bb(0,0,0,0);
            this.ep = new bb(0,0,0,0);
            this.Cq = this.ll = this.fk = this.bp = 0;
            this.di = [];
            this.jh = [];
            this.Mh = 0;
            this.oA = null
        }
        gx() {
            if (this.kc.length != this.wv) {
                var a = new Ig;
                this.Mi(a);
                this.kc.push(a)
            }
        }
        Mi(a) {
            a.i.x = this.x + this.GA.x * W.fc();
            a.i.y = this.y + this.GA.y * W.fc();
            a.$h.zb(a.i);
            var b = (this.angle + this.xo * W.fc()) * Fa;
            b = new t(Math.cos(b),Math.sin(b));
            b.multiply(this.speed + this.br * W.fc());
            a.dir = b;
            a.lq = this.lq + this.QA * W.fc();
            a.ir = this.ir + this.eC * W.fc();
            a.Mt = a.Zc = this.Zc + this.Hz * W.fc();
            b = new bb(this.Zh.r + this.fr.r * W.fc(),this.Zh.Xd + this.fr.Xd * W.fc(),this.Zh.b + this.fr.b * W.fc(),this.Zh.a + this.fr.a * W.fc());
            let c = new bb(this.oh.r + this.ep.r * W.fc(),this.oh.Xd + this.ep.Xd * W.fc(),this.oh.b + this.ep.b * W.fc(),this.oh.a + this.ep.a * W.fc());
            a.color = b;
            a.mh.r = (c.r - b.r) / a.Zc;
            a.mh.Xd = (c.Xd - b.Xd) / a.Zc;
            a.mh.b = (c.b - b.b) / a.Zc;
            a.mh.a = (c.a - b.a) / a.Zc;
            a.size = this.size + this.hv * W.fc()
        }
        update(a) {
            super.update(a);
            if (null == this.oA || 0 != this.kc.length || this.active) {
                if (this.active && 0 != this.bp) {
                    var b = 1 / this.bp;
                    for (this.fk += a; this.kc.length < this.wv && this.fk > b; )
                        this.gx(),
                        this.fk -= b;
                    this.$o += a;
                    -1 != this.duration && this.duration < this.$o && this.BO()
                }
                for (this.Mh = 0; this.Mh < this.kc.length; )
                    b = this.kc[this.Mh],
                    0 < b.Zc ? (this.eP(b, a),
                    b.color.r += b.mh.r * a,
                    b.color.Xd += b.mh.Xd * a,
                    b.color.b += b.mh.b * a,
                    b.color.a += b.mh.a * a,
                    b.Zc -= a,
                    this.Aj(b, this.Mh, a),
                    this.Mh++) : this.Rh(this.Mh)
            } else
                this.oA(this)
        }
        eP(a, b) {
            if (0 != a.i.x || 0 != a.i.y) {
                var c = a.i.ub();
                c.normalize()
            } else
                c = new t(0,0);
            let d = c.ub();
            c.multiply(a.lq);
            let e = d.x;
            d.x = -d.y;
            d.y = e;
            d.multiply(a.ir);
            c = t.Bb(c, d);
            c.add(this.vb);
            c.multiply(b);
            a.dir.add(c);
            c.zb(a.dir);
            c.multiply(b);
            a.i.add(c)
        }
        Aj(a) {
            this.di[this.Mh] = new Jg(a.i.x,a.i.y,a.size);
            this.jh[this.Mh] = a.color
        }
        Rh(a) {
            this.kc.splice(a, 1)
        }
        Pn(a) {
            if (0 < this.kc.length)
                for (; 0 < this.kc.length; )
                    this.Rh(0);
            this.kc = [];
            let b = 0;
            for (; b < a; )
                ++b,
                this.gx();
            this.active = !0
        }
        BO() {
            this.active = !1;
            this.$o = this.duration;
            this.fk = 0
        }
        M() {}
    }
    Rb.g = !0;
    Rb.u = $c;
    Object.assign(Rb.prototype, {
        j: Rb
    });
    class bf extends Rb {
        constructor(a, b) {
            super(b);
            this.U = a;
            this.duration = 2;
            this.vb.x = 0;
            this.vb.y = 500;
            this.angle = -90;
            this.xo = 50;
            this.speed = 150;
            this.br = 70;
            this.eC = this.QA = 1;
            this.Zc = 2;
            this.size = 1;
            this.bp = 100;
            this.ll = 0;
            this.Cq = 600;
            this.Qc = []
        }
        Mi(a) {
            super.Mi(a);
            a.To = Fa * (this.ll + this.Cq * W.fc());
            a = new A(null,r.O,k.fi("", W.Gg(3, 7)));
            a.F();
            a.J(.4 * this.size);
            this.U.oa(4).R(a.B);
            this.Qc.push(a)
        }
        Aj(a, b, c) {
            a.angle += a.To * c;
            super.Aj(a, b, c)
        }
        Rh(a) {
            super.Rh(a);
            this.Qc.splice(a, 1)
        }
        M() {
            super.M();
            let a = 0
              , b = this.kc.length;
            for (; a < b; ) {
                var c = a++;
                let d = this.kc[c];
                c = this.Qc[c];
                c.ma(d.angle * ad);
                c.m(d.i.x);
                c.s(d.i.y)
            }
        }
    }
    bf.g = !0;
    bf.u = Rb;
    Object.assign(bf.prototype, {
        j: bf
    });
    class bc {
        constructor(a) {
            this.U = a;
            this.S = new A;
            this.S.N(!1)
        }
        m(a) {
            this.S.m(a);
            null != this.lb && this.lb.l.m(a);
            return a
        }
        s(a) {
            this.S.s(a);
            null != this.lb && this.lb.l.s(a)
        }
        wg() {
            this.S.remove();
            null != this.lb && this.lb.l.remove()
        }
        show() {
            this.S.kf(r.$, k.eE);
            this.S.F();
            this.S.J(.4);
            null == this.S.B.parent && this.U.oa(8).R(this.S.B);
            this.S.ka().loop(bc.LC);
            this.S.N(!0)
        }
        pO() {
            null != this.lb && null == this.lb.l.node.parent && this.U.oa(8).R(this.lb.l.B)
        }
    }
    bc.g = !0;
    Object.assign(bc.prototype, {
        j: bc
    });
    class cc extends Qb {
        constructor(a, b) {
            super();
            this.U = a;
            this.S = new A(null,r.O,b);
            this.S.F();
            this.S.J(.284);
            a.oa(8).R(this.S.B);
            a = cc.Vv.w / 2;
            b = cc.Vv.G / 2;
            a = this.ca = new X(0 - a,0 - b,a,b);
            this.ia = new X(a.o,a.C,a.A,a.D)
        }
        update(a) {
            super.update(a);
            this.ia.o = this.x + this.ca.o;
            this.ia.C = this.y + this.ca.C;
            this.ia.A = this.x + this.ca.A;
            this.ia.D = this.y + this.ca.D
        }
        M() {
            super.M();
            null != this.S && (this.S.m(this.x),
            this.S.s(this.y),
            this.S.ma(this.rotation))
        }
    }
    cc.g = !0;
    cc.u = Qb;
    Object.assign(cc.prototype, {
        j: cc
    });
    class Na {
        constructor(a, b, c) {
            null == c && (c = 0);
            null == b && (b = 0);
            this.ll = c;
            this.path = [];
            if (0 < a)
                for (this.aA = [],
                c = 0; c < a; )
                    this.aA[c++] = b;
            this.i = new t(0,0);
            this.angle = 0;
            this.reverse = this.paused = !1;
            this.mf = this.Zk = 0
        }
        ls(a) {
            this.path.push(a)
        }
        start() {
            0 < this.path.length && (this.i.zb(this.path[0]),
            this.mf = 1,
            this.Jx())
        }
        Jx() {
            this.offset = t.Xa(this.path[this.mf], this.i);
            this.offset.normalize();
            this.offset.multiply(this.aA[this.mf])
        }
        update(a) {
            if (!this.paused) {
                if (0 < this.path.length) {
                    let b = this.path[this.mf]
                      , c = !1;
                    if (this.i.AJ(b))
                        c = !0;
                    else {
                        let d = a;
                        0 != this.Zk && (d = a + this.Zk,
                        this.Zk = 0);
                        this.i.add(t.pd(this.offset, d));
                        Db.lB(this.offset.x, b.x - this.i.x) && Db.lB(this.offset.y, b.y - this.i.y) || (this.Zk = t.Xa(this.i, b).rc(),
                        this.Zk /= this.offset.rc(),
                        this.i.zb(b),
                        c = !0)
                    }
                    c && (this.reverse ? (this.mf--,
                    0 > this.mf && (this.mf = this.path.length - 1)) : (this.mf++,
                    this.mf >= this.path.length && (this.mf = 0)),
                    this.Jx())
                }
                0 != this.ll && (this.angle += this.ll * a)
            }
        }
        static Qk(a, b, c, d) {
            b != a && (b > a ? (a += c * d,
            a > b && (a = b)) : (a -= c * d,
            a < b && (a = b)));
            return a
        }
        static $i(a, b, c, d) {
            let e = !1;
            b != a && (b > a ? (a += c * d,
            a > b && (a = b)) : (a -= c * d,
            a < b && (a = b)),
            b == a && (e = !0));
            return new Kg(a,e)
        }
    }
    Na.g = !0;
    Object.assign(Na.prototype, {
        j: Na
    });
    class Id extends Na {
        constructor(a, b, c) {
            super(a, b, c)
        }
        yB(a, b, c) {
            if ("R" == a.charAt(0)) {
                var d = Ha.parseInt(ua.substr(a, 2, null))
                  , e = Math.round(3 * d / 2)
                  , f = 2 * Math.PI / e;
                let g = 0;
                d *= oa.Ol;
                "C" != a.charAt(1) && (f = -f);
                for (a = 0; a < e; )
                    ++a,
                    this.ls(new t(b + d * Math.cos(g),c + d * Math.sin(g))),
                    g += f
            } else
                for (this.ls(new t(b,c)),
                "," == a.charAt(a.length - 1) && (a = ua.substr(a, 0, a.length - 1)),
                d = a.split(","),
                e = d.length,
                f = 0; f < e; )
                    this.ls(new t(b + parseFloat(d[f]) * oa.Ol,c + parseFloat(d[f + 1]) * oa.Ol)),
                    f += 2
        }
    }
    Id.g = !0;
    Id.u = Na;
    Object.assign(Id.prototype, {
        j: Id
    });
    class cf extends ia {
        constructor(a, b) {
            super();
            this.f = a;
            this.t = b
        }
        update(a) {
            this.t -= a;
            0 < this.t || (this.f(),
            this.f = null,
            this.va())
        }
    }
    cf.g = !0;
    cf.u = ia;
    Object.assign(cf.prototype, {
        j: cf
    });
    class Lg {
        constructor(a, b, c, d, e) {
            this.start = a;
            this.end = b;
            this.color = e
        }
    }
    Lg.g = !0;
    Object.assign(Lg.prototype, {
        j: Lg
    });
    class tc extends xa {
        constructor() {
            super();
            new Q(-1,-1,-1,-1);
            this.AI = this.state = 0
        }
        pj(a) {
            this.state = a
        }
        lu(a, b) {
            return 0 == this.state && this.zk(a, b) ? (this.pj(1),
            !0) : !1
        }
        lM(a, b) {
            return 1 == this.state && (this.pj(0),
            this.zk(a, b)) ? (null != this.ju && this.ju(this.AI),
            !0) : !1
        }
        zk(a, b) {
            return Mg.ov(a, b, this.x, this.y, 20)
        }
    }
    tc.g = !0;
    tc.u = xa;
    Object.assign(tc.prototype, {
        j: tc
    });
    class df extends xa {
        constructor(a) {
            super();
            this.U = a;
            this.Gt = this.Jp = !1;
            this.yo = this.Vo = 0
        }
        NK(a, b, c, d, e, f, g) {
            this.vI = d;
            this.wK = c;
            this.HA = b | 1;
            this.up = 1;
            this.Zy = e;
            this.$y = f;
            this.Yy = g;
            this.x = a.x;
            this.y = a.y;
            this.time = W.qh();
            this.Ye = new S;
            this.Ye.m(this.x);
            this.Ye.s(this.y);
            this.U.oa(4).R(this.Ye.B);
            this.ln = new ef(this.U,7);
            this.ln.x = this.x;
            this.ln.y = this.y;
            this.st = new A(this.Ye,r.Jd,k.xE);
            this.st.J(.4);
            this.st.F();
            this.tt = new A(this.Ye,r.Jd,k.yE);
            this.tt.F();
            this.tt.J(.4);
            this.Kc = this.Ib = this.$ = null;
            this.Af = !0
        }
        update(a) {
            super.update(a);
            if (this.Jp) {
                this.Vo += a;
                var b = Math.min(1, this.Vo / .16);
                this.Ye.aa(1 - b);
                1 == b && (this.Ye.N(!1),
                this.Jp = !1)
            }
            this.Gt && (this.yo += a,
            b = Math.min(1, this.yo / .36),
            this.Ye.aa(b),
            1 == b && (this.Gt = !1));
            this.time += a;
            this.st.s(Ma(Math.sin(5 * this.time), -1, 1, 0, -5));
            this.tt.s(Ma(Math.sin(5 * this.time + .05), -1, 1, 0, -3));
            null == this.Ib || null == this.Ib.Ta || -1 == this.Ib.Ta.ec || this.Ib.yk() || (this.Af = !0,
            this.Sh(1));
            this.ln.update(a)
        }
        M() {
            super.M();
            this.ln.M();
            this.Ye.m(this.x);
            this.Ye.m(this.x)
        }
        Sh(a) {
            if (0 != (a & this.HA)) {
                1 == this.up && (this.Jp = !0,
                this.Vo = 0);
                this.up = a;
                null != this.$ && (this.$.yk() ? this.ZA() : (this.$.en(),
                this.$.hq = !0));
                null != this.Ib && (a = this.Ib.Ta,
                null != a && (a.og = .36),
                this.Ib.yk() ? this.aB() : this.Ib.en());
                null != this.Kc && (this.Kc.yk() ? this.YA() : this.Kc.en());
                switch (this.up) {
                case 1:
                    this.Gt = !0;
                    this.Jp = !1;
                    this.Ye.N(!0);
                    this.yo = 0;
                    break;
                case 2:
                    this.$ = new ff(this);
                    this.$.x = this.x;
                    this.$.y = this.y;
                    this.$.dn();
                    this.Zy.push(this.$);
                    break;
                case 4:
                    this.Ib = new rb(this);
                    this.Ib.x = this.x;
                    this.Ib.y = this.y;
                    this.Ib.Ug = !1;
                    this.Ib.mc = null;
                    this.Ib.setRadius(this.wK);
                    this.Ib.dn();
                    this.Ib.os();
                    this.$y.push(this.Ib);
                    break;
                case 8:
                    this.Kc = new cb(this,this.x,this.y,1,this.vI),
                    this.Kc.os(),
                    this.Kc.dn(),
                    this.Yy.push(this.Kc)
                }
                this.ln.Pn(7);
                z.play(z.tG)
            }
        }
        kN() {
            let a = this.up;
            do
                a <<= 1,
                32 == a && (a = 2);
            while (0 == (a & this.HA));
            this.Sh(a)
        }
        lu(a, b) {
            a -= this.x;
            b -= this.y;
            return this.Af && 40 > Math.sqrt(a * a + b * b) ? (this.kN(),
            !0) : !1
        }
        ZA() {
            null != this.$ && (ua.remove(this.Zy, this.$),
            this.$.H(),
            this.$ = null)
        }
        aB() {
            null != this.Ib && (this.Ib.H(),
            ua.remove(this.$y, this.Ib),
            this.Ib = null)
        }
        YA() {
            null != this.Kc && (ua.remove(this.Yy, this.Kc),
            this.Kc.H(),
            this.Kc = null)
        }
    }
    df.g = !0;
    df.u = xa;
    Object.assign(df.prototype, {
        j: df
    });
    class cb extends Wc {
        constructor(a, b, c, d, e) {
            super(a.U, b, c, d, e);
            this.Jd = a;
            this.alpha = 1;
            this.state = 0
        }
        dn() {
            1 != this.state && (this.state = 1,
            this.time = 0)
        }
        en() {
            -1 != this.state && (this.state = -1,
            this.time = 0)
        }
        yk() {
            return 0 > this.state
        }
        os() {
            function a(c, d) {
                c = new A(d,r.Jd,k.fi(k.oo, c));
                c.F();
                return c
            }
            this.Hs = new S(null,this.l);
            this.Hs.xN();
            this.Ux = new S(null,this.l);
            this.Vb = [];
            null == cb.cm && (cb.cm = Ia.parse("0,s.27<x-34.<y7.33<,.35,s.22>x-35.>y6.33>,.7,s.16<x-36.<y5.33<,1.04,s.22>x-35.>y6.33>,1.4,s.27x-34.y7.33"));
            var b = new Va(a(2, this.Hs));
            b.loop(cb.cm);
            this.Vb.push(b);
            null == cb.bm && (cb.bm = Ia.parse("0,s.36<x32.9<y6.61<,.39,s.32>x31.9>y5.61>,.78,s.27<x30.9<y4.61<,1.17,s.32>x31.9>y5.61>,1.56,s.36x32.9y6.61"));
            b = new Va(a(2, this.Hs));
            b.loop(cb.bm);
            this.Vb.push(b);
            null == cb.hh && (cb.hh = Ia.parse("0,s.44<x23<y26<,.45,s.4>x22>y25>,.9,s.36<x21<y24<,1.35,s.4>x22>y25>,1.8,s.44x23y26"));
            b = new Va(a(3, this.Ux));
            b.loop(cb.hh);
            this.Vb.push(b);
            null == cb.gh && (cb.gh = Ia.parse("0,s.44<x-23<y28<,.5,s.4>x-22>y27>,1,s.36<x-21<y26<,1.5,s.4>x-22>y27>,2,s.44x-23y28"));
            b = new Va(a(4, this.Ux));
            b.loop(cb.gh);
            this.Vb.push(b)
        }
        H() {
            this.l.H();
            this.S = this.l = null
        }
        update(a) {
            super.update(a);
            if (0 < this.state) {
                this.time += a;
                let b = Math.min(1, this.time / .36);
                this.alpha = b;
                1 == b && (this.state = 0)
            }
            0 > this.state && (this.time += a,
            a = Math.min(1, this.time / .16),
            this.alpha = 1 - a,
            1 == a && (this.state = 0,
            this.Jd.YA()))
        }
        M() {
            super.M();
            this.l.aa(this.alpha)
        }
    }
    cb.g = !0;
    cb.u = Wc;
    Object.assign(cb.prototype, {
        j: cb
    });
    class ff extends ib {
        constructor(a) {
            super(a.U);
            this.Jd = a;
            this.alpha = 1;
            this.state = 0;
            this.lb = new Ja;
            this.l.appendChild(this.lb.l)
        }
        H() {
            this.l.H();
            this.l = null;
            this.lb.H();
            this.lb = null
        }
        yk() {
            return 0 > this.state
        }
        dn() {
            1 != this.state && (this.state = 1,
            this.time = 0)
        }
        en() {
            -1 != this.state && (this.state = -1,
            this.time = 0)
        }
        pop() {
            super.pop();
            this.lb.l.N(!1)
        }
        update(a) {
            super.update(a);
            if (0 < this.state) {
                this.time += a;
                let b = Math.min(1, this.time / .36);
                this.alpha = b;
                1 == b && (this.state = 0)
            }
            0 > this.state && (this.time += a,
            a = Math.min(1, this.time / .16),
            this.alpha = 1 - a,
            1 == a && (this.state = 0,
            this.Jd.ZA()))
        }
        M() {
            super.M();
            null != this.lb && (this.lb.l.m(this.x),
            this.lb.l.s(this.y));
            this.l.aa(this.alpha)
        }
    }
    ff.g = !0;
    ff.u = ib;
    Object.assign(ff.prototype, {
        j: ff
    });
    class Ja {
        constructor() {
            function a(d) {
                d = new A(b.l,r.Jd,k.fi(k.oo, d));
                d.F();
                return d
            }
            this.l = new S;
            this.Vb = [];
            let b = this;
            null == Ja.bm && (Ja.bm = Ia.parse("0,s.32<x34<y9<,.48,s.31>x33>y8>,.96,s.30<x34<y7<,1.44,s.31>x34>y9>,1.92,s.32x33y8,2.4,x34y9"));
            var c = new Va(a(0));
            c.loop(Ja.bm);
            this.Vb.push(c);
            null == Ja.cm && (Ja.cm = Ia.parse("-100,s.38>,-99.,s.4<,-99.,s.38>,-98.,s.37,0,sx.37sy.4x26<y23<,.4,x25>y22>,.8,x24<y21<,1.20,x25>y22>,1.6,x26y23"));
            c = new Va(a(1));
            c.loop(Ja.cm);
            this.Vb.push(c);
            null == Ja.tx && (Ja.tx = Ia.parse("0,s.13<x-34<y4<,.43,s.14>x-35>y3>,.86,s.16<x-36<y2<,1.29,s.14>x-35>y3>,1.72,s.13x-34y4"));
            c = new Va(a(1));
            c.loop(Ja.tx);
            this.Vb.push(c);
            null == Ja.hh && (Ja.hh = Ia.parse("0,s.24<x-30<y17<,.42,s.22>x-29>y16>,.84,s.21<x-28<y15<,1.26,s.22>x-29>y16>,1.68,s.24x-30y17"));
            c = new Va(a(0));
            c.loop(Ja.hh);
            this.Vb.push(c);
            null == Ja.gh && (Ja.gh = Ia.parse("0,s.37<x-2<y31<,.47,s.38>x-3>y32>,.94,s.4<x-4<y33<,1.41,s.38>x-3>y32>,1.88,s.37x-2y31"));
            c = a(4);
            c.ma(350);
            c = new Va(c);
            c.loop(Ja.gh);
            this.Vb.push(c)
        }
        H() {
            this.l.H();
            this.l = null
        }
    }
    Ja.g = !0;
    Object.assign(Ja.prototype, {
        j: Ja
    });
    class bd extends Da {
        constructor(a) {
            super();
            this.U = a;
            this.Ta = null;
            this.Ug = !1;
            this.yl = -1;
            this.Np = t.$b();
            this.df = 0;
            this.bu = !1;
            this.on = 0;
            this.vg = this.vd = null;
            this.Lk = this.Ok = this.Rk = 0;
            this.uj = this.af = !1;
            this.mc = null;
            this.vj = 0;
            this.Om = this.Mv = this.Wq = !1;
            this.mq = .8;
            this.V = 0
        }
        oK(a, b, c) {
            a = t.Xa(a, c);
            return (t.Xa(b, c).Tk() - a.Tk()) * ad
        }
        zK(a, b) {
            this.Np.x = a;
            this.Np.y = b
        }
        yK(a) {
            z.play(z.VG);
            let b = this.oK(this.Np, a, new t(this.x,this.y));
            180 < b ? b -= 360 : -180 > b && (b += 360);
            var c = this.Dr;
            c.ma(c.Td + b);
            c = this.Ov;
            c.ma(c.Td + b);
            c = this.Nv;
            c.ma(c.Td + b);
            b = 0 < b ? Math.min(Math.max(1, b), 2.25) : Math.max(Math.min(-1, b), -2.25);
            null != this.Ta && (0 < b ? 660 > this.Ta.rc() && this.Ta.Kb(b) : 0 != b && 3 < this.Ta.wa.length && this.Ta.mN(-b),
            this.Mv = !0);
            this.Np.zb(a)
        }
        update(a) {
            super.update(a);
            this.Om && (this.mq -= 1.5 * a,
            0 >= this.mq && (this.V = -1,
            this.Om = !1));
            if (null != this.rd) {
                let b = t.Xa(this.nb.path[this.nb.mf], this.nb.i)
                  , c = 0;
                15 < Math.abs(b.x) && (c = 0 < b.x ? 10 : -10);
                this.rd.ma(Na.Qk(this.rd.Td, c, 60, a))
            }
            this.Ug && this.Mv && null != this.Ta && (a = .7 * this.Ta.rc(),
            0 == a ? this.Dr.J(.001) : this.Dr.J(.4 * Math.max(0, Math.min(1.2, 1 - a / 784))))
        }
        gP(a) {
            this.af && this.Wq && (this.Wq = !1,
            this.uj = !0,
            z.play(z.HG),
            this.mc.start());
            if (this.af && this.uj) {
                0 != this.mc.state && (this.vj += 46.800000000000004 * a);
                a = 0;
                let c = !1;
                if (null != this.Ta) {
                    var b = this.Ta.Rs;
                    let d = b.length
                      , e = 0;
                    for (; e < d; ) {
                        let f = e++
                          , g = b[f]
                          , h = b[f + 1]
                          , m = Math.max(28, g.Se(h));
                        if (this.vj >= a && (this.vj < a + m || f > d - 3)) {
                            b = t.Xa(h, g);
                            b.multiply((this.vj - a) / m);
                            this.mc.T.m(g.x + b.x);
                            this.mc.T.s(g.y + b.y);
                            f > d - 3 && (c = !0);
                            0 != this.mc.state && this.mc.T.ma(b.Tk() * ad + 270);
                            break
                        } else
                            a += m
                    }
                }
                c && (this.vj = -1)
            }
        }
        kJ() {
            0 < this.df ? (this.back.N(!1),
            this.vd.N(!0)) : (this.back.m(this.x),
            this.back.s(this.y),
            this.back.N(!0),
            null != this.vd && this.vd.N(!1));
            (-1 != this.V || this.Om) && this.rJ(this.x, this.y, -1 != this.V ? this.V : this.LA)
        }
        rJ(a, b, c) {
            this.ih.color.x = .2;
            this.ih.color.y = .5;
            this.ih.color.z = .9;
            this.ih.color.w = this.mq;
            let d = this.ih.F;
            d.x = a;
            d.y = b;
            this.ih.V = c
        }
        M() {
            this.Ug && (this.Nv.N(-1 != this.yl),
            this.Ov.N(-1 == this.yl));
            null != this.rd && (this.rd.m(this.x),
            this.rd.s(this.y));
            null != this.Ta && this.Ta.M();
            0 >= this.df ? (this.ya.m(this.x),
            this.ya.s(this.y),
            this.ya.N(!0)) : (this.ya.N(!1),
            -1 != this.Rk ? this.vg.bc(k.JE) : this.vg.bc(k.qw),
            this.vg.m(this.x),
            this.vg.s(this.y))
        }
        DB(a) {
            this.Ta = a;
            this.LA = this.V;
            this.V = -1;
            this.af && (this.Wq = !0)
        }
        setRadius(a) {
            this.LA = this.V;
            this.V = a;
            var b = this.U.oa(2)
              , c = this.U.oa(7);
            -1 == a || -2 == a ? (a = W.fl() ? [k.CE, k.DE] : [k.HE, k.IE],
            this.back = new A(null,r.xg,a[0]),
            this.back.J(.4),
            this.back.F(),
            this.ya = new A(null,r.xg,a[1]),
            this.ya.F(),
            this.ya.J(.4),
            b.R(this.back.B),
            c.R(this.ya.B)) : (this.back = new A(null,r.xg,k.AE),
            this.back.F(),
            this.back.J(.4),
            this.ya = new A(null,r.xg,k.BE),
            this.ya.F(),
            this.ya.J(.5),
            b.R(this.back.B),
            c.R(this.ya.B),
            this.Om = !1,
            this.ih = new Md,
            this.No = new Ta,
            this.No.jf(this.ih),
            c.R(this.No));
            let d = this;
            this.Ug && (b = function(e) {
                e = new A(null,r.xg,e);
                e.F();
                e.m(d.x);
                e.s(d.y);
                e.J(.4);
                return e
            }
            ,
            c = b(k.LE),
            this.U.oa(2).R(c.B),
            this.Dr = b(k.ME),
            this.U.oa(7).R(this.Dr.B),
            this.Nv = b(k.KE),
            this.U.oa(7).R(this.Nv.B),
            this.Ov = b(k.NE),
            this.U.oa(7).R(this.Ov.B),
            this.Mv = !0)
        }
        LN(a, b, c) {
            this.df = a;
            this.bu = b;
            this.on = c;
            0 < this.df && (this.vd = new S,
            a = new A(this.vd,r.xg,k.EE),
            a.m(-63),
            (new A(this.vd,r.xg,k.GE)).m(this.df / .4 - 13),
            b = new A(this.vd,r.xg,k.FE),
            b.m(-63 + a.la()),
            b.dv(this.df / .4 - 13),
            this.vd.J(.4),
            this.vd.F(),
            this.U.oa(4).R(this.vd.B),
            this.vg = new A(null,r.xg,k.qw),
            this.vg.F(),
            this.vg.J(.4),
            this.U.oa(7).R(this.vg.B),
            this.bu ? (this.Ok = this.y - this.on,
            this.Lk = this.y + (this.df - this.on),
            a = (this.Ok + this.Lk) / 2,
            this.vd.m(this.x),
            this.vd.s(a),
            this.vd.ma(90),
            this.vg.ma(90)) : (this.Ok = this.x - this.on,
            this.Lk = this.x + (this.df - this.on),
            this.vd.m((this.Ok + this.Lk) / 2),
            this.vd.s(this.y)));
            this.Rk = -1
        }
        AN() {
            this.rd = new S;
            this.rd.J(.3076923076923077);
            var a = new A(this.rd,r.rd,k.PD);
            a.F();
            a.m(a.cb() - 6);
            a.s(a.Ka - 54);
            this.U.oa(7).R(this.rd.B);
            a = new A(this.rd,r.rd,k.QD);
            a.F();
            a.m(-6);
            a.s(-54);
            a.ka().loop(Gi);
            a.ka().RA()
        }
        aO(a) {
            this.af = a;
            this.uj = this.Wq = !1;
            a && (this.mc = new gf,
            this.mc.T.m(this.x),
            this.mc.T.s(this.y),
            this.U.pa(this.mc),
            this.U.oa(9).R(this.mc.T.B))
        }
        Ps() {
            this.Ta = null
        }
    }
    bd.g = !0;
    bd.u = Da;
    Object.assign(bd.prototype, {
        j: bd
    });
    class rb extends bd {
        constructor(a) {
            super(a.U);
            this.Jd = a;
            this.Vb = []
        }
        yk() {
            return 0 > this.state
        }
        dn() {
            1 != this.state && (this.state = 1,
            this.time = 0)
        }
        en() {
            -1 != this.state && (this.state = -1,
            this.time = 0)
        }
        os() {
            function a(d) {
                d = new A(b.lb,r.Jd,k.fi(k.oo, d));
                d.F();
                return d
            }
            this.lb = new S;
            this.U.oa(4).R(this.lb.B);
            let b = this;
            null == rb.Cx && (rb.Cx = Ia.parse("0,s.17<x-26<y3<,.65,s.18>x-25>y2>,1.3,s.2<x-24<y1<,1.95,s.18>x-25>y2>,2.6,s.17x-26y3"));
            var c = new Va(a(1));
            c.loop(rb.Cx);
            this.Vb.push(c);
            null == rb.hh && (rb.hh = Ia.parse("0,s.36<x23<y14<,.45,s.32>x22>y13>,.9,s.27<x21<y12<,1.35,s.32>x22>y13>,1.8,s.36x23y14"));
            c = new Va(a(2));
            c.loop(rb.hh);
            this.Vb.push(c);
            null == rb.gh && (rb.gh = Ia.parse("0,s.44<x-3<y25<,.5,s.4>x-2>y24>,1,s.36<x-1<y23<,1.5,s.4>x-2>y24>,2,s.44x-3y25"));
            c = new Va(a(4));
            c.loop(rb.gh);
            this.Vb.push(c)
        }
        H() {
            null != this.Ta && (this.Ta.vu(0),
            this.Ta.H());
            this.Ps();
            this.lb.H();
            this.lb = null;
            this.back.H();
            this.ya.H();
            this.No.H();
            this.ya = this.back = this.U = this.No = null
        }
        update(a) {
            super.update(a);
            if (0 < this.state) {
                this.time += a;
                let b = Math.min(1, this.time / .36);
                this.alpha = b;
                1 == b && (this.state = 0)
            }
            0 > this.state && -2 != this.state && (this.time += a,
            a = Math.min(1, this.time / .16),
            this.alpha = 1 - a,
            1 == a && (this.state = -2,
            this.Jd.aB()))
        }
        M() {
            super.M();
            this.lb.m(this.x);
            this.lb.s(this.y);
            this.lb.aa(this.alpha);
            this.back.aa(this.alpha);
            this.ya.aa(this.alpha);
            this.ih.color.w = this.alpha
        }
    }
    rb.g = !0;
    rb.u = bd;
    Object.assign(rb.prototype, {
        j: rb
    });
    class ef extends Rb {
        constructor(a, b) {
            super(b);
            this.U = a;
            this.Qc = [];
            this.size = .6;
            this.hv = .2;
            this.angle = 360 * W.qh();
            this.xo = 15;
            this.Cq = 30;
            this.Zc = .8;
            this.Hz = .3;
            this.duration = 1.5;
            this.speed = 140;
            this.br = 35
        }
        Pn(a) {
            super.Pn(a)
        }
        Mi(a) {
            super.Mi(a);
            this.angle += 360 / this.wv;
            let b = this.size + W.fc() * this.hv
              , c = k.fi(k.oo, W.Gg(0, 2))
              , d = r.Jd.Nb.Xe(c).cc;
            a.width = d.x * b;
            a.height = d.y * b;
            a.To = this.ll + this.Cq * W.fc();
            a = new A(null,r.Jd,c);
            a.F();
            this.U.oa(4).R(a.B);
            this.Qc.push(a)
        }
        Aj(a, b, c) {
            a.angle += a.To * c;
            super.Aj(a, b, c)
        }
        Rh(a) {
            super.Rh(a);
            let b = this.Qc[a];
            this.Qc.splice(a, 1);
            b.H()
        }
        M() {
            super.M();
            let a = 0
              , b = this.kc.length;
            for (; a < b; ) {
                var c = a++;
                let d = this.kc[c];
                c = this.Qc[c];
                c.ma(d.angle);
                c.J(d.width / c.Y.x * .4);
                c.m(d.i.x);
                c.s(d.i.y);
                c.aa(d.alpha)
            }
        }
        update(a) {
            super.update(a);
            a = 0;
            let b = this.kc.length;
            for (; a < b; ) {
                let c = this.kc[a++];
                0 < c.Zc && (c.Zc < .7 * c.Mt && (c.alpha = c.Zc / (.7 * c.Mt)),
                c.dir.x *= .9,
                c.dir.y *= .9,
                c.width *= 1.015,
                c.height *= 1.015)
            }
        }
    }
    ef.g = !0;
    ef.u = Rb;
    Object.assign(ef.prototype, {
        j: ef
    });
    class hf extends tc {
        constructor(a, b, c) {
            super();
            this.x = b;
            this.y = c;
            this.T = new A(null,r.vb,k.pw);
            this.T.J(.4);
            this.T.F();
            this.T.m(b);
            this.T.s(c);
            this.V = 40;
            a.oa(4).R(this.T.B);
            this.It = !1
        }
        zk(a, b) {
            return Mg.ov(a, b, this.x, this.y, this.V)
        }
        toggle() {
            this.It = !this.It;
            this.T.bc(this.It ? k.zE : k.pw)
        }
        M() {
            super.M();
            this.T.m(this.x);
            this.T.s(this.y)
        }
    }
    hf.g = !0;
    hf.u = tc;
    Object.assign(hf.prototype, {
        j: hf
    });
    class qb extends Da {
        constructor(a) {
            super();
            this.U = a;
            this.active = !1;
            this.En = this.jm = this.Bn = this.Am = 0;
            this.Xs = null
        }
        KK(a, b) {
            qb.Og = null;
            this.x = a;
            this.y = b;
            this.Ri = 0;
            null == Dh && (a = Dh = new Ia,
            a.setScale(.5599999999999999, .4, 0, 100),
            a.hd(.7, 0),
            a.setScale(.42000000000000004, .52, .5),
            a.hd(1, .5));
            this.l = new S;
            this.U.oa(4).R(this.l.B);
            this.Ci = new A(this.l,r.Fh,k.OE);
            this.Ci.F();
            this.Ci.aa(0);
            this.Xs = new Va(this.Ci);
            this.Dp = new A(this.l,r.Fh,k.QE);
            this.Dp.F();
            this.Dp.J(.4);
            this.Lj = new A(this.l,r.Fh,k.PE);
            this.Lj.F();
            this.Lj.J(.4);
            this.Lj.aa(0);
            this.Lj.s(1);
            this.O = new A(this.l,r.Fh,[k.RE, k.SE, k.TE][C.lf]);
            this.O.F();
            this.O.J(.4);
            this.O.aa(0);
            null == Eh && (a = Eh = new Ia,
            a.hd(0, 0),
            a.hd(1, .2),
            a.vo(.4, .4, 0),
            a.vo(.4, .32000000000000006, .07),
            a.vo(.34, .42000000000000004, .05),
            a.vo(.4, .4, .05),
            a.ns(-4, 0),
            a.ns(0, .1),
            a.ns(-1, .05),
            a = di = new Ia,
            a.Yl(.4, .35, -100),
            a.Yl(.37200000000000005, .35, 100),
            a.Yl(.34800000000000003, .35, -100),
            a.Yl(.37200000000000005, .35, 100),
            a.Yl(.4, 0),
            a = ei = new Ia,
            a.hd(1, 0),
            a.hd(.6, .06),
            a.hd(0, .1),
            a.setScale(.4, .4, 0),
            a.setScale(.45999999999999996, .32000000000000006, .06),
            a.setScale(.4, .4, .1),
            a.Mg(0, 0, 0, 100),
            a.Mg(0, -4, .06, -100),
            a.Mg(0, 4, .1));
            this.As = new Va(this.O)
        }
        update(a) {
            this.qa = new t(this.x,this.y);
            super.update(a);
            null != qb.Og && (qb.Og.i = new t(this.x,this.y),
            qb.Og.qa = new t(this.x,this.y),
            1 != this.Ri && (this.Ri = 1));
            0 < this.Bn && (this.Bn -= a,
            0 > this.Bn && (qb.Og.um = !1,
            qb.Og.i = new t(this.x,this.y),
            qb.Og.qa = this.qa.ub(),
            qb.Og = null));
            0 < this.Am && (this.Am -= a,
            0 >= this.Am && this.Xs.loop(Dh, !0));
            0 < this.jm && (this.jm -= a,
            0 >= this.jm && this.As.loop(di));
            0 < this.En && (this.En -= a,
            0 >= this.En && (this.Ri = 0))
        }
        M() {
            super.M();
            this.l.m(this.x);
            this.l.s(this.y)
        }
        ej(a, b) {
            return 1 == this.Ri && 35 > t.od(a, b, this.x, this.y) && null != qb.Og ? (this.OK(),
            !0) : !1
        }
        Ox(a) {
            z.play(z.wG);
            qb.Og = a;
            a.um = !0;
            a.i = a.qa = new t(this.x,this.y);
            a = this.U.Ck;
            let b = 0;
            for (; b < a.length; ) {
                let c = a[b];
                ++b;
                c.Ri = 1;
                c.Dp.Yb().alpha(0, .3);
                c.Lj.Yb().alpha(1, .3);
                c.As.play(Eh);
                c.Ci.sa(.5599999999999999);
                c.Ci.xb(.4);
                c.Ci.aa(.7);
                c.Am = .4 * Math.random();
                c.jm = .2
            }
        }
        OK() {
            z.play(z.xG);
            let a = this.U.Ck
              , b = 0;
            for (; b < a.length; ) {
                let c = a[b];
                ++b;
                c.Dp.Yb().alpha(1, .3);
                c.Lj.Yb().alpha(0, .3);
                c.As.play(ei);
                c.Xs.stop();
                c.Ci.aa(0);
                c.En = .5;
                c.Ri = 0
            }
            this.Bn = .01
        }
    }
    qb.g = !0;
    qb.u = Da;
    Object.assign(qb.prototype, {
        j: qb
    });
    class jf extends Qb {
        constructor(a, b) {
            super();
            this.Lz = b;
            this.If = 0;
            var c = vb.jo.w / 2;
            let d = vb.jo.G / 2;
            c = this.ca = new X(0 - c,0 - d,c,d);
            this.ia = new X(c.o,c.C,c.A,c.D);
            this.l = new S;
            this.l.J(.4);
            a.oa(8).R(this.l.B);
            this.Zb = new A(this.l,r.cf,k.WE);
            this.Zb.aa(.4);
            this.Zb.F();
            this.Zb.J(2 * b / this.Zb.Y.x * 1.5 / .4);
            this.Zb.Wh(3);
            (new A(this.l,r.cf,k.UE)).F();
            (new A(this.l,r.cf,k.XE)).F();
            this.La = new A(this.l,r.cf);
            this.La.ka().loop(Hi);
            this.La.F();
            this.$ = null;
            this.gm = new bc(a);
            this.xc = null
        }
        update(a) {
            super.update(a);
            this.ia.o = this.x + this.ca.o;
            this.ia.C = this.y + this.ca.C;
            this.ia.A = this.x + this.ca.A;
            this.ia.D = this.y + this.ca.D
        }
        M() {
            super.M();
            this.x = this.Ra.i.x;
            this.y = this.Ra.i.y;
            this.l.N(null == this.xc);
            this.l.m(this.x);
            this.l.s(this.y);
            this.l.ma(this.rotation);
            this.gm.m(this.x);
            this.gm.s(this.y)
        }
    }
    jf.g = !0;
    jf.u = Qb;
    Object.assign(jf.prototype, {
        j: jf
    });
    class Nd {
        static get() {
            let a = E.box
              , b = E.level;
            if (null == Nd.Tt[a]) {
                let c = l.Xb([161, 156, 151, 146, 141, 136, 131, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80][a - 1]);
                Nd.Tt[a] = JSON.parse(c)
            }
            return Nd.Tt[a][b - 1]
        }
    }
    Nd.g = !0;
    class Db {
        static lB(a, b) {
            return 0 > a == 0 > b
        }
        static ny(a, b, c) {
            return Math.max(Math.min(a, c), b)
        }
        static An(a, b) {
            return Math.floor(Math.random() * (b - a + 1) + a)
        }
        static TM() {
            return .5 < Math.random()
        }
        static dL(a, b, c, d, e, f, g, h) {
            let m = e - a + g - c
              , n = f - b + h - d;
            a = c - a;
            b = d - b;
            e = g - e;
            f = h - f;
            h = Math.abs(b * e - f * a);
            return Math.abs(e * n - f * m) <= h ? Math.abs(a * n - b * m) <= h : !1
        }
    }
    Db.g = !0;
    class Kg {
        constructor(a, b) {
            this.value = a;
            this.jj = b
        }
    }
    Kg.g = !0;
    Object.assign(Kg.prototype, {
        j: Kg
    });
    class Sb extends xa {
        constructor(a, b) {
            super();
            this.U = a;
            this.La = 0;
            this.bf = !1;
            this.x = b.x * Ad.po;
            this.y = b.y * Ad.po;
            this.kz = W.Gg(5, 20);
            this.rs = 3;
            this.Bx = !1;
            this.time = 0;
            b = a.oa(0);
            this.Qn = new A(null,r.Mo);
            this.Qn.F();
            this.Qn.J(.4);
            b.R(this.Qn.B);
            this.lm = new S;
            this.lm.J(.4);
            this.char = new A(this.lm,r.Fs,k.VC);
            this.char.F();
            b.R(this.lm.B);
            this.blink = new A(null,r.Fs,k.RC);
            this.blink.F();
            this.blink.J(.4);
            this.blink.N(!1);
            b.R(this.blink.B);
            var c = Q.ub(Sb.YG);
            c.x -= 128;
            c.y -= 128;
            let d = c.x
              , e = c.y;
            c = this.ca = new X(d,e,d + c.w,e + c.G);
            this.ia = new X(c.o,c.C,c.A,c.D);
            this.Sd();
            this.Qn.m(this.x + Math.round(.4 * Ii));
            this.Qn.s(this.y + Math.round(.4 * Ji));
            a.ad && (this.qf = new A(null,r.Zj),
            this.qf.J(.4),
            this.qf.ka().loop(fi),
            this.qf.F(),
            this.qf.m(this.x),
            this.qf.s(this.y),
            b.R(this.qf.B),
            this.rf = new A(null,r.Zj),
            this.rf.J(.4),
            this.rf.ka().loop(gi),
            this.rf.F(),
            this.rf.m(this.x),
            this.rf.s(this.y),
            b.R(this.rf.B));
            this.Zd = null;
            this.rl = 0;
            this.$q = -1;
            this.Ad(0)
        }
        zM() {
            this.bf || this.Ad(10)
        }
        AM() {
            !this.bf && this.im() && this.Ad(1)
        }
        BM() {
            !this.bf && this.im() && this.Ad(2)
        }
        DM() {
            !this.bf && this.im() && this.Ad(7)
        }
        CM() {
            !this.bf && this.im() && this.Ad(8)
        }
        xM() {
            this.bf || (this.Ad(5),
            this.aC())
        }
        FM() {
            this.bf || (this.Ad(6),
            this.aC(),
            this.bf = !0)
        }
        BA() {
            !this.bf && this.im() && this.Ad(3)
        }
        DA() {
            this.bf || this.Ad(11)
        }
        SK() {
            switch (this.La) {
            case 0:
            case 1:
            case 2:
                return !0;
            default:
                return !1
            }
        }
        Oq(a) {
            if (this.Zd != a) {
                let b = null == this.Zd;
                this.Zd = a;
                b ? this.DA() : a ? (this.BA(),
                this.qf.ka().stop(),
                this.qf.N(!1),
                this.rf.ka().stop(),
                this.rf.N(!1),
                z.stop(this.$q),
                this.char.xb(1)) : this.bf || (this.rl = 0,
                this.DA(),
                this.qf.ka().play(fi),
                this.qf.N(!0),
                this.rf.ka().play(gi),
                this.rf.N(!0))
            }
        }
        im() {
            return this.U.ad ? this.Zd : !0
        }
        aC() {
            this.U.ad && (z.stop(this.$q),
            this.qf.N(!1),
            this.rf.N(!1),
            this.rl = 0)
        }
        Ad(a) {
            let b;
            switch (a) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 8:
            case 10:
                b = r.FI;
                break;
            case 11:
                b = r.Zj;
                break;
            default:
                b = r.Fs
            }
            this.char.kf(b);
            this.La = a;
            9 == a ? this.char.ka().loop(hi[a]) : this.char.ka().play(hi[a], 2 == a ? 2 : 1).ce(O(this, this.UL))
        }
        UL() {
            let a = this;
            switch (this.La) {
            case 0:
                this.rs--;
                0 == this.rs && (this.blink.N(!0),
                this.blink.ka().play(Ki).ce(function() {
                    a.blink.N(!1)
                }),
                this.rs = 3);
                0 == --this.kz ? (W.fl() ? this.AM() : this.BM(),
                this.kz = W.Gg(5, 20)) : this.Ad(0);
                break;
            case 1:
            case 2:
            case 3:
            case 4:
                this.Ad(0);
                break;
            case 6:
                this.Ad(9);
                break;
            case 8:
                this.Ad(4);
                break;
            case 10:
                this.Ad(0);
                break;
            case 11:
                this.Bx = !0
            }
        }
        update(a) {
            super.update(a);
            this.Sd();
            if (this.U.ad) {
                if (this.Bx) {
                    let b = Ma(Math.sin(2 * this.time), -1, 1, .95, 1.05);
                    this.char.fe(0, 433);
                    this.char.xb(b);
                    this.time += a
                }
                this.Zd || (this.rl += a,
                4 < this.rl && (this.rl = 0,
                this.$q = [1036, 1035, 1034][W.Gg(0, 2)],
                z.play(this.$q)))
            }
        }
        M() {
            super.M();
            this.ia.o = this.x + this.ca.o;
            this.ia.C = this.y + this.ca.C;
            this.ia.A = this.x + this.ca.A;
            this.ia.D = this.y + this.ca.D;
            this.lm.m(this.x);
            this.lm.s(this.y);
            this.blink.m(this.x);
            this.blink.s(this.y)
        }
    }
    Sb.g = !0;
    Sb.u = xa;
    Object.assign(Sb.prototype, {
        j: Sb
    });
    class kf extends $c {
        constructor(a) {
            super();
            this.pu = [];
            this.FA = new S;
            a.oa(0).R(this.FA.B)
        }
        lI(a, b) {
            var c = [.3, .3, .5, .5, .6];
            var d = c = c[Db.An(0, c.length - 1)];
            Db.TM() ? c *= 1 + Db.An(0, 1) / 10 : d *= 1 + Db.An(0, 1) / 10;
            let e = Math.min(1 - c, 1 - d)
              , f = Math.random()
              , g = new Ng;
            this.FA.appendChild(g.T);
            g.rM = b;
            g.x = a.x;
            g.y = a.y;
            g.gr = e + c;
            g.hr = e + d;
            g.nl = g.gr * f;
            g.ol = g.hr * f;
            g.fp = c;
            g.gp = d;
            g.cp = .3;
            g.lv = 1;
            g.alpha = .7 * f + .3;
            this.pu.push(g)
        }
        ly(a, b, c) {
            let d = c.nb.path[a];
            b = t.Xa(c.nb.path[b], d);
            c = b.rc();
            if (!(c < Li)) {
                c = Math.floor(c / 17.6);
                b.normalize();
                for (var e = 0; e <= c; ) {
                    var f = t.Bb(d, t.pd(b, 17.6 * e));
                    f.x += Db.An(-1.6, 1.6);
                    f.y += Db.An(-1.6, 1.6);
                    this.lI(f, a);
                    ++e
                }
            }
        }
        update(a) {
            super.update(a);
            let b = 0
              , c = this.pu;
            for (; b < c.length; ) {
                let e = c[b];
                ++b;
                var d = Na.$i(e.nl, e.fp, 1, a);
                e.nl = d.value;
                d.jj && (d = e.gr,
                e.gr = e.fp,
                e.fp = d);
                d = Na.$i(e.ol, e.gp, 1, a);
                e.ol = d.value;
                d.jj && (d = e.hr,
                e.hr = e.gp,
                e.gp = d);
                d = Na.$i(e.alpha, e.cp, 1, a);
                e.alpha = d.value;
                d.jj && (d = e.lv,
                e.lv = e.cp,
                e.cp = d)
            }
        }
        M() {
            let a = 0
              , b = this.pu;
            for (; a < b.length; ) {
                let c = b[a];
                ++a;
                c.T.WN(c.x, c.y, .4 * c.nl, .4 * c.ol);
                c.T.aa(c.alpha)
            }
        }
    }
    kf.g = !0;
    kf.u = $c;
    Object.assign(kf.prototype, {
        j: kf
    });
    class Ng {
        constructor() {
            this.nl = this.gr = this.fp = this.ol = this.hr = this.gp = this.alpha = this.lv = this.cp = 1;
            this.rM = this.x = this.y = 0;
            this.T = new A(null,r.rd,k.SD);
            this.T.F()
        }
    }
    Ng.g = !0;
    Object.assign(Ng.prototype, {
        j: Ng
    });
    class Tb extends Da {
        constructor(a) {
            super();
            this.T = new A(null,r.dl,k.YE);
            this.T.F();
            this.T.J(.4);
            a.oa(4).R(this.T.B);
            a = Tb.xw.w / 2;
            let b = Tb.xw.G / 2;
            this.ca = new X(0 - a,0 - b,a,b);
            this.angle = 0;
            this.Lb = t.$b();
            this.Mb = t.$b();
            this.oC = this.Vn = 0;
            this.Uo = []
        }
        xJ(a) {
            a = new lf(a,this.angle * ad - 90);
            let b = new t(this.x + 40,this.y);
            b.Ua(this.angle - Math.PI / 2, this.x, this.y);
            a.x = b.x;
            a.y = b.y;
            a.Pn(5);
            this.Uo.push(a)
        }
        nd() {
            var a = this.ca;
            a = (a.A - a.o) / 2;
            this.Lb.x = this.x - a;
            this.Mb.x = this.x + a;
            this.Lb.y = this.Mb.y = this.y;
            this.angle = this.rotation * Fa;
            this.Lb.Ua(this.angle, this.x, this.y);
            this.Mb.Ua(this.angle, this.x, this.y)
        }
        update(a) {
            super.update(a);
            this.Sd();
            let b = 0
              , c = this.Uo;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                if (0 == d.kc.length) {
                    ua.remove(this.Uo, d);
                    break
                }
                d.update(a)
            }
        }
        M() {
            super.M();
            this.T.m(this.x);
            this.T.s(this.y);
            this.T.ma(this.rotation);
            this.T.J(.4 * this.Ai);
            let a = 0
              , b = this.Uo;
            for (; a < b.length; )
                b[a++].M()
        }
        tg() {
            let a = this.ca
              , b = this.ca;
            return new t(1.2 * (a.A - a.o),1.2 * (b.D - b.C))
        }
        Fi() {
            let a = new t(.8,-1.2000000000000002);
            a.rotate(this.rotation * Fa);
            return t.Bb(new t(this.x,this.y), a)
        }
        Wf(a) {
            super.Wf(a);
            let b = new t(.8,-1.2000000000000002);
            b.rotate(this.rotation * Fa);
            super.Wf(t.Xa(a, b))
        }
    }
    Tb.g = !0;
    Tb.u = Da;
    Object.assign(Tb.prototype, {
        j: Tb
    });
    class lf extends Rb {
        constructor(a, b) {
            super(5);
            this.U = a;
            this.angle = b;
            this.xo = 10;
            this.speed = 500;
            this.br = 100;
            this.Zc = .6;
            this.size = 12;
            this.bp = 100;
            this.Zh.r = 1;
            this.Zh.Xd = 1;
            this.Zh.b = 1;
            this.Zh.a = .6;
            this.oh.r = 1;
            this.oh.Xd = 1;
            this.oh.b = 1;
            this.oh.a = 0;
            this.Qc = []
        }
        Mi(a) {
            super.Mi(a);
            a = new A(null,r.dl,k.zA(6 + W.Gg(0, 2)));
            a.J(.4);
            a.F();
            a.Wh(3);
            this.U.oa(4).R(a.B);
            this.Qc.push(a)
        }
        Aj(a, b, c) {
            super.Aj(a, b, c);
            a.dir.multiply(.9);
            b = t.pd(a.dir, c);
            b.add(this.vb);
            a.i.add(b)
        }
        Rh(a) {
            super.Rh(a);
            let b = this.Qc[a];
            this.Qc.splice(a, 1);
            b.H()
        }
        M() {
            super.M();
            let a = 0
              , b = this.kc.length;
            for (; a < b; ) {
                var c = a++;
                let d = this.kc[c];
                c = this.Qc[c];
                c.m(d.i.x);
                c.s(d.i.y);
                c.aa(d.color.a)
            }
        }
    }
    lf.g = !0;
    lf.u = Rb;
    Object.assign(lf.prototype, {
        j: lf
    });
    class Od extends xa {
        constructor(a) {
            super();
            this.U = a;
            this.l = new S;
            a.oa(0).R(this.l.B);
            this.pe = [];
            this.Oe = [];
            this.jv = -1;
            this.bn = t.QL();
            this.Ac = new A(this.l,r.Ac,k.IF);
            this.Ac.F();
            this.ar = new Ta;
            this.ar.jf(new cd);
            this.l.node.R(this.ar);
            this.Mn = new Ta;
            this.Mn.jf(new cd);
            a.oa(11).R(this.Mn);
            this.FC = new A(this.l,r.Ac,k.vw);
            this.FC.F();
            this.Iv = new A(this.l,r.Ac,k.vw);
            this.Iv.sa(-1);
            this.Iv.F();
            this.Hv = new A(this.l,r.Ac,k.uw);
            this.Hv.F();
            this.ho = new A(this.l,r.Ac,k.uw);
            this.ho.sa(-1);
            this.ho.F();
            this.Tg = new A(this.l,r.Ac,k.sw);
            this.Tg.F();
            this.Tg.ma(90);
            this.fo = new A(this.l,r.Ac,k.sw);
            this.fo.F();
            this.fo.ma(-90);
            this.Dj = new A(this.l,r.Ac,k.tw);
            this.Dj.F();
            this.Dj.ma(90);
            this.Dj.N(!1);
            this.Ej = new A(this.l,r.Ac,k.tw);
            this.Ej.F();
            this.Ej.ma(-90);
            this.Ej.N(!1);
            this.EC = new A(this.l,r.Ac,k.HF);
            this.EC.F()
        }
        H() {
            this.pe = this.Oe = null;
            this.l.H();
            this.U = this.l = null
        }
        DJ() {
            this.l.aa(0);
            this.l.Yb().alpha(1, .2);
            let a = this.U.oa(0);
            a.Kq(this.l.node, a.nk() - 1)
        }
        ob(a) {
            this.size = a;
            var b = this.size / 216;
            this.l.J(.4);
            this.Ac.J(b);
            this.Hv.J(b);
            this.ho.sa(-b);
            this.ho.xb(b);
            a = .4 <= b ? b : .4;
            this.FC.J(a);
            this.Iv.J(-a);
            b = .75 <= b ? b : .75;
            this.Tg.J(b);
            this.fo.J(b);
            this.Dj.J(b);
            this.Ej.J(b);
            this.EC.J(1 - .5 * (1 - a));
            this.ge = this.size;
            a = this.ar.effect;
            a.V = this.Ac.la() / 2;
            a.lineWidth = 10 * b;
            a = this.size / this.l.ib - this.Tg.la() / 2 * .76;
            this.Tg.m(this.Dj.m(-a));
            this.fo.m(this.Ej.m(a))
        }
        dz() {
            return !this.Tg.bh
        }
        qB(a) {
            this.Tg.N(!a)
        }
        tB(a) {
            this.Dj.N(a)
        }
        uB(a) {
            this.Ej.N(a)
        }
        QI() {
            let a = this.Oe.length, b, c = 0;
            for (; c < a; )
                if (b = this.Oe[c++],
                b != this && this.RI(b))
                    return !0;
            return !1
        }
        M() {
            super.M();
            this.l.m(this.x);
            this.l.s(this.y);
            this.l.ma(this.rotation);
            this.Hv.ma(-this.rotation);
            this.ho.ma(-this.rotation);
            this.ar.qe = this.Ej.bh || this.Dj.bh ? 2 : 1;
            let a = this.Oe.length;
            var b;
            let c = this.Oe.indexOf(this);
            for (b = 0; b < a; )
                this.Oe[b++].Mn.qe = 1;
            let d = 0;
            for (; d < a; )
                b = this.Oe[d++],
                b != this && b.QI() && this.Oe.indexOf(b) < c && b.oJ(this.x, this.y, this.ge, b.x, b.y, b.ge)
        }
        oJ(a, b, c, d, e, f) {
            this.Mn.qe = 1;
            let g = t.od(a, b, d, e);
            g >= c + f || c >= g + f || ((new t(a - d,b - e)).angle(),
            a = this.Mn,
            a.qe = 2,
            b = a.mb,
            b.translate.x = this.x,
            b.translate.y = this.y,
            b.I = b.I & -2 | 496,
            b = a.mb,
            b.scale.x = b.scale.y = this.l.ib,
            b.I = b.I & -2 | 500,
            a = a.effect,
            a.V = this.Ac.la() / 2,
            a.Op = .2,
            a.lineWidth = 6 * this.Tg.ib)
        }
        RI(a) {
            if (this.x == a.x && this.y == a.y && this.size == a.size)
                return !1;
            let b = this.pe.length
              , c = 0;
            for (; c < b; )
                if (0 <= a.pe.indexOf(this.pe[c++]))
                    return !0;
            return !1
        }
        ub() {
            let a = new Od(this.U);
            a.Zm = this.Zm;
            a.x = this.x;
            a.y = this.y;
            a.rotation = this.rotation;
            a.Oe = this.Oe;
            a.pe = this.pe;
            a.vn = -1;
            let b = this.Zm
              , c = a.rotation * Fa;
            a.sk = new t(a.x - b,a.y);
            a.tk = new t(a.x + b,a.y);
            a.sk.Ua(c, a.x, a.y);
            a.tk.Ua(c, a.x, a.y);
            a.ob(this.size);
            a.qB(this.dz());
            a.Tg.N(!1);
            a.fo.N(!1);
            return a
        }
    }
    Od.g = !0;
    Od.u = xa;
    Object.assign(Od.prototype, {
        j: Od
    });
    class Wa extends Da {
        constructor(a, b) {
            super();
            this.U = a;
            this.group = b;
            this.angle = 0;
            this.Lb = new t(0,0);
            this.Mb = new t(0,0);
            this.Vc = new t(0,0);
            this.Wc = new t(0,0);
            this.state = this.Ep = 0;
            this.l = new S;
            a.oa(4).R(this.l.B);
            this.Cp = new A(this.l,r.rj,0 == b ? k.rw : k.ZE);
            this.Cp.J(.4);
            this.Cp.F();
            this.Cp.s(30);
            this.Cp.ma(this.angle);
            this.Zb = new A(this.l,r.rj,k.$E);
            this.Zb.J(.4);
            this.Zb.F();
            this.Zb.jO(new F(this.Zb.hg,this.Zb.ig + 15,0,1));
            this.Zb.N(!1)
        }
        nd() {
            this.Lb.x = this.x - Wa.Aw / 2;
            this.Mb.x = this.x + Wa.Aw / 2;
            this.Lb.y = this.Mb.y = this.y;
            this.Vc.x = this.Lb.x;
            this.Wc.x = this.Mb.x;
            this.Vc.y = this.Wc.y = this.y + Wa.mG;
            this.angle = this.rotation * Fa;
            this.Lb.Ua(this.angle, this.x, this.y);
            this.Mb.Ua(this.angle, this.x, this.y);
            this.Vc.Ua(this.angle, this.x, this.y);
            this.Wc.Ua(this.angle, this.x, this.y)
        }
        update(a) {
            super.update(a);
            null != this.nb && this.nd()
        }
        M() {
            this.Zb.bh && (this.Zb.ka().Nc(Og) || this.Zb.N(!1));
            super.M();
            this.l.m(this.x);
            this.l.s(this.y);
            this.l.J(this.Ai);
            this.l.ma(this.rotation)
        }
        tg() {
            let a = r.rj.Nb.Xe(k.rw).sd;
            return new t(.27999999999999997 * a.w,.27999999999999997 * a.G)
        }
        Fi() {
            let a = new t(-1.2000000000000002,10);
            a.rotate(this.rotation * Fa);
            return t.Bb(new t(this.x,this.y), a)
        }
        Wf(a) {
            let b = new t(-1.2000000000000002,10);
            b.rotate(this.rotation * Fa);
            super.Wf(t.Xa(a, b))
        }
    }
    Wa.g = !0;
    Wa.u = Da;
    Object.assign(Wa.prototype, {
        j: Wa
    });
    class gf extends ia {
        constructor() {
            super();
            this.T = new A(null,r.mc,k.aF);
            this.T.J(.4);
            this.T.F();
            this.Qj = this.zl = this.Pv = this.xs = this.state = 0
        }
        start() {
            let a = this;
            this.T.ka().play(Mi).ce(function() {
                a.T.ka().play(Ni);
                a.state = 1
            })
        }
        zI() {
            this.xs = 1;
            this.y = this.T.Ka;
            this.T.ka().stop();
            this.T.bc(k.bF);
            this.Qj = W.jy(3);
            this.time = 0
        }
        Ib() {
            this.Pv = 1;
            this.y = this.T.Ka;
            this.T.ka().stop();
            this.T.bc(k.cF);
            this.T.ma(0);
            this.time = 0
        }
        update(a) {
            super.update(a);
            a = this.parent;
            switch (this.xs) {
            case 1:
                var b = this.wb(.5);
                this.T.s(this.y - 50 * Ba.Bm(100)(b));
                let c = this.T;
                c.ma(c.Td + this.Qj);
                1 == b && (this.xs++,
                this.time = 0);
                break;
            case 2:
                b = this.T,
                b.s(b.Ka + this.zl),
                b = this.T,
                b.ma(b.Td + this.Qj),
                this.zl += .4,
                1.5 < this.time && (b = this.T,
                b.aa(.9 * b.Bc)),
                2 < this.time && this.va()
            }
            switch (this.Pv) {
            case 1:
                b = this.wb(.5);
                this.T.s(this.y - 50 * Ba.Bm(100)(b));
                a.O.x = this.T.cb();
                a.O.y = this.T.Ka - 15;
                a.O.M();
                1 == b && (this.Pv++,
                this.time = 0);
                break;
            case 2:
                a = this.T,
                a.s(a.Ka + this.zl),
                this.zl += .4,
                a = this.parent,
                a.O.x = this.T.cb(),
                a.O.y = this.T.Ka - 15,
                a.O.M(),
                1.5 < this.time && (a = this.T,
                a.aa(.9 * a.Bc)),
                2 < this.time && this.va()
            }
        }
    }
    gf.g = !0;
    gf.u = ia;
    Object.assign(gf.prototype, {
        j: gf
    });
    class mf extends Da {
        constructor(a, b, c, d, e, f) {
            super();
            this.width = d;
            this.S = -1 != f ? new A(null,r.Uj,[k.XD, k.YD, k.ZD, k.$D][d - 1]) : new A(null,r.Fe,[k.dF, k.eF, k.fF, k.gF][d - 1]);
            this.x = b;
            this.y = c;
            a.oa(4).R(this.S.B);
            this.S.J(.4);
            this.S.F();
            this.S.m(b);
            this.S.s(c);
            this.S.ma(e);
            this.Lb = t.$b();
            this.Mb = t.$b();
            this.Vc = t.$b();
            this.Wc = t.$b();
            this.Te = !1;
            this.mA = this.xA = this.rz = 0;
            this.ap = !1;
            this.Ue = 0;
            0 < f && (this.Sf = new nf(a,b,c,f),
            this.Sf.ju = O(this, this.Yp));
            this.dr = !1;
            this.pM = this.rotation = e;
            this.dO(f);
            this.nd();
            this.pr = -1;
            this.Bq = null
        }
        nd() {
            let a = this.Te ? this.width - 160 : .4 * this.S.Y.x;
            a /= 2;
            this.Lb.x = this.x - a;
            this.Mb.x = this.x + a;
            this.Lb.y = this.Mb.y = this.y - 5;
            this.Vc.x = this.Lb.x;
            this.Wc.x = this.Mb.x;
            this.Vc.y = this.Wc.y = this.y + 5;
            this.angle = this.rotation * Fa;
            this.Lb.Ua(this.angle, this.x, this.y);
            this.Mb.Ua(this.angle, this.x, this.y);
            this.Vc.Ua(this.angle, this.x, this.y);
            this.Wc.Ua(this.angle, this.x, this.y)
        }
        VO() {
            this.ap = !0;
            this.S.ka().loop(Oi);
            this.Ue = this.xA;
            z.play(z.Hj, !0);
            this.S.Jq()
        }
        vC() {
            this.ap = !1;
            this.Ue = this.mA;
            this.S.ka().stop();
            this.S.kf(r.Te, k.qE);
            this.S.F();
            z.stop(z.Hj)
        }
        update(a) {
            super.update(a);
            null != this.nb && this.nd();
            this.Te && (this.ap ? (this.Ue = Na.Qk(this.Ue, 0, 1, a),
            0 == this.Ue && this.vC()) : (this.Ue = Na.Qk(this.Ue, 0, 1, a),
            0 == this.Ue && this.VO()));
            var b = this.Sf;
            null != b && b.update(a);
            if (null != this.Bq) {
                this.Fu += a;
                a = Math.min(1, this.Fu / this.Bq);
                b = Ba.Bm(100)(a);
                let c = this.nN;
                this.rotation = c + (this.oN - c) * b;
                this.nd();
                1 == a && (this.Bq = null)
            }
        }
        dO(a) {
            this.mC = a
        }
        qN() {
            this.dr = !this.dr;
            let a = this.pM + (this.dr ? 90 : 0);
            this.Fu = 0;
            this.Bq = Math.abs(a - this.rotation) / 90 * .3;
            this.nN = this.rotation;
            this.oN = a;
            this.Sf.T.sa(-this.Sf.T.ib)
        }
        Yp(a) {
            0 == a && null != this.tA && this.tA(this.mC);
            this.dr ? z.play(z.KG) : z.play(z.LG)
        }
        M() {
            super.M();
            this.S.m(this.x);
            this.S.s(this.y);
            this.S.ma(this.rotation);
            null != this.Sf && this.Sf.T.ma(this.rotation)
        }
    }
    mf.g = !0;
    mf.u = Da;
    Object.assign(mf.prototype, {
        j: mf
    });
    class nf extends tc {
        constructor(a, b, c, d) {
            super();
            this.x = b;
            this.y = c;
            this.jC = d;
            this.T = new A(null,r.Uj,this.Gy());
            this.T.J(.4);
            this.T.F();
            this.T.m(b);
            this.T.s(c);
            this.V = 20;
            a.oa(4).R(this.T.B)
        }
        pj(a) {
            super.pj(a);
            this.T.bc(this.Gy())
        }
        Gy() {
            return 0 == this.state ? 1 == this.jC ? k.TD : k.VD : 1 == this.jC ? k.UD : k.WD
        }
        zk(a, b) {
            return Mg.ov(a, b, this.x, this.y, this.V)
        }
    }
    nf.g = !0;
    nf.u = tc;
    Object.assign(nf.prototype, {
        j: nf
    });
    class Kb extends Da {
        constructor(a) {
            super();
            this.U = a;
            this.Zd = null;
            var b = Q.ub(Kb.XG)
              , c = b.w / 2;
            b = b.G / 2;
            c = this.ca = new X(0 - c,0 - b,c,b);
            this.ia = new X(c.o,c.C,c.A,c.D);
            this.timeout = 0;
            this.time = 2 * W.qh();
            this.$s = 0;
            this.l = new S;
            this.Yd = new A(this.l,r.kd,k.jF);
            this.Yd.F();
            this.Yd.J(.4);
            a.ad && (this.wj = new A(this.l,r.kd,k.mF),
            this.wj.F(),
            this.wj.J(.4));
            this.kd = new A(this.l,r.kd,k.kF);
            this.kd.F();
            this.kd.J(.4);
            this.kd.J(.4);
            this.kd.ka().loop(Pi);
            this.kd.ka().RA();
            a.ad && (this.wj.ka().loop(Qi),
            this.wj.ka().setTime(0),
            this.wj.aa(0),
            this.Hh = new A(this.l,r.kd,k.qF),
            this.Hh.F(),
            this.Hh.J(.4),
            this.Hh.N(!1),
            this.Hh.Wh(3),
            this.Ti = new A(this.l,r.kd,k.oF),
            this.Ti.F(),
            this.Ti.J(.4),
            this.Ti.N(!1));
            a.oa(10).R(this.l.B)
        }
        Oq(a) {
            let b = null == this.Zd;
            this.Zd != a && (a ? b || (this.Hh.N(!0),
            this.Hh.ka().play(Ri),
            this.Hh.ka().ce(O(this, this.cM)),
            z.play(W.fl() ? z.NG : z.OG)) : b ? (this.Yd.aa(0),
            this.kd.aa(0)) : (this.Ti.N(!0),
            this.Ti.ka().play(Si),
            this.Ti.ka().ce(O(this, this.bM))),
            this.Zd = a)
        }
        H() {
            this.l.H()
        }
        setTimeout() {
            this.time = this.timeout;
            this.Sn = new A(null,r.kd,k.sF);
            this.Sn.J(.4);
            this.Sn.F();
            this.l.appendChild(this.Sn);
            this.l.Kq(this.Sn, 0)
        }
        bM() {
            this.Ti.N(!1)
        }
        cM() {
            this.Hh.N(!1)
        }
        update(a) {
            super.update(a);
            this.$s += a;
            if (this.U.ad)
                if (this.Zd) {
                    var b = this.Yd;
                    b.aa(b.Bc + .1);
                    b = this.wj;
                    b.aa(b.Bc - .1);
                    b = this.kd;
                    b.aa(b.Bc + .1)
                } else
                    b = this.Yd,
                    b.aa(b.Bc - .1),
                    b = this.wj,
                    b.aa(b.Bc + .1),
                    b = this.kd,
                    b.aa(b.Bc - .1);
            b = 3 * Math.sin(3 * this.$s);
            this.Ak() && (b = 0);
            let c = 0
              , d = this.l.nk();
            for (; c < d; )
                this.l.Yc(c++).s(b);
            this.ia.o = this.x + this.ca.o;
            this.ia.C = this.y + this.ca.C;
            this.ia.A = this.x + this.ca.A;
            this.ia.D = this.y + this.ca.D;
            0 < this.timeout && 0 >= this.U.nh && (this.Sn.bc(k.fi(k.tF, 35 * (1 - this.time / this.timeout) | 0)),
            0 < this.time && (this.time = Na.Qk(this.time, 0, 1, a)))
        }
        tg() {
            let a = this.ca
              , b = this.ca;
            return new t(.9 * (a.A - a.o),.9 * (b.D - b.C))
        }
        it() {
            return 8
        }
        M() {
            super.M();
            this.l.m(this.x);
            this.l.s(this.y);
            this.l.J(this.Ai)
        }
    }
    Kb.g = !0;
    Kb.u = Da;
    Object.assign(Kb.prototype, {
        j: Kb
    });
    class of extends Da {
        constructor(a) {
            super();
            this.U = a;
            this.Eg = []
        }
        LK(a, b, c) {
            this.x = a;
            this.y = b;
            this.rotation = c;
            this.al = 0;
            this.Ld = new gb;
            this.he = 0;
            this.l = new S;
            this.U.oa(4).R(this.l.B);
            this.Yn = new A(this.l,r.yj,k.xF);
            this.Yn.F();
            this.Yn.s(27);
            this.Yn.J(.4);
            this.co = new A(this.l,r.yj,k.yF);
            this.co.J(.4);
            this.co.F();
            this.co.s(27);
            this.zr = this.yr = 0;
            this.YB = new S(null,this.l);
            this.ZB = new S(null,this.l);
            this.ix()
        }
        Cy() {
            let a = 0;
            switch (this.he) {
            case 0:
                a = 32.9;
                break;
            case 1:
                a = 94;
                break;
            case 2:
                a = 141
            }
            return 1.2 * a
        }
        VJ() {
            let a = this.Cy();
            return a += Math.sin(6 * this.al)
        }
        M() {
            super.M();
            this.l.m(this.x);
            this.l.s(this.y);
            this.l.ma(this.rotation);
            this.co.ma(this.yr);
            this.l.J(this.Ai)
        }
        update(a) {
            super.update(a);
            for (var b = 0, c = this.Eg.length; b < c; )
                null == this.Eg[b].S ? (--c,
                0 < c && (this.Eg[b] = this.Eg[this.Eg.length - 1]),
                this.Eg.pop()) : ++b;
            b = 0;
            for (c = this.Eg; b < c.length; )
                c[b++].update(a);
            this.al += a;
            this.yr += .05 * (this.zr - this.yr);
            if (this.Ak())
                for (b = this.Ld.keys(); b.fb(); ) {
                    c = b.next();
                    let d = this.Ld.G[c];
                    d.jr += a;
                    .5 <= d.jr && (1 > t.od(d.Fp.x, d.Fp.y, d.sm.x, d.sm.y) && this.mu(),
                    this.Ld.remove(c))
                }
        }
        sK() {
            let a = new t(this.x,this.y);
            if (this.Ak())
                return a;
            let b = new t(0,27);
            b.rotate(this.rotation * Fa);
            return t.Bb(a, b)
        }
        ej(a, b, c) {
            let d = this.sK();
            if (30 > t.Xa(new t(a,b), d).rc())
                if (this.Ak())
                    this.Ld.G[c] = new Pg(new t(a,b),new t(a,b),0);
                else
                    return this.mu(),
                    !0;
            return !1
        }
        kM(a, b, c) {
            this.Ld.G.hasOwnProperty(c) && (this.Ld.G[c].sm = new t(a,b));
            return !1
        }
        mM(a) {
            if (this.Ld.G.hasOwnProperty(a)) {
                let b = this.Ld.G[a];
                .5 >= b.jr && 1 >= t.od(b.Fp.x, b.Fp.y, b.sm.x, b.sm.y) && this.mu();
                this.Ld.remove(a)
            }
            return !1
        }
        mu() {
            let a = 0;
            switch (this.he) {
            case 0:
                this.he++;
                a = 0;
                z.play(z.SG);
                break;
            case 1:
                this.he++;
                a = 0;
                z.play(z.QG);
                break;
            case 2:
                this.he = 0,
                a = 1,
                z.play(z.PG)
            }
            this.ix();
            switch (a) {
            case 0:
                this.zr += 180;
                break;
            case 1:
                this.zr = 0
            }
        }
        ix() {
            for (var a = this.al = 0, b = this.Eg; a < b.length; )
                b[a++].CJ();
            if (3 != this.he) {
                a = 7;
                1 == this.he && (a = 14);
                2 == this.he && (a = 20);
                b = 0;
                for (var c = a; b < c; ) {
                    let e = b++;
                    var d = null;
                    switch (e % 3) {
                    case 0:
                        d = Ti;
                        break;
                    case 1:
                        d = Ui;
                        break;
                    case 2:
                        d = Vi
                    }
                    let f = -this.Cy();
                    f *= 1 + .1 * W.fc();
                    1 != this.he || 1 != e % 3 && 2 != e % 3 || (f *= .95);
                    2 != this.he || 1 != e % 3 && 2 != e % 3 || (f *= .94);
                    let g = 1;
                    0 == e % 3 ? g = 0 : 1 == e % 3 ? g = this.he : 2 == e % 3 && (g = -this.he);
                    let h = new Ia;
                    h.Mg(5, 0, 0, 100);
                    h.Mg(5 + g, f, .6);
                    h.GB(.4, 0);
                    h.GB(.6000000000000001, .6);
                    d = new Qg(.6 * e / a,d,h);
                    this.Eg.push(d);
                    (0 == e % 3 ? this.YB : this.ZB).appendChild(d.S)
                }
            }
        }
        Wf(a) {
            this.Yn.s(3);
            this.co.s(3);
            this.YB.s(-27);
            this.ZB.s(-27);
            super.Wf(a)
        }
        it() {
            return .3 * this.Yn.la()
        }
        tg() {
            return new t(40,56)
        }
    }
    of.g = !0;
    of.u = Da;
    Object.assign(of.prototype, {
        j: of
    });
    class Pg {
        constructor(a, b, c) {
            this.Fp = a;
            this.sm = b;
            this.jr = c
        }
    }
    Pg.g = !0;
    Object.assign(Pg.prototype, {
        j: Pg
    });
    class Qg {
        constructor(a, b, c) {
            this.state = 0;
            this.time = a;
            this.La = b;
            this.track = c;
            this.S = new A(null,r.yj);
            this.S.N(!1);
            this.Kt = new Va(this.S)
        }
        CJ() {
            2 != this.state && (this.state = 2)
        }
        update(a) {
            switch (this.state) {
            case 0:
                this.time -= a;
                if (0 < this.time)
                    break;
                this.S.bc(this.La.data[0]);
                this.S.ka().play(this.La);
                this.S.N(!0);
                this.S.F();
                this.Kt.loop(this.track);
                this.state = 1;
                this.time = 0;
                break;
            case 1:
                this.time += a;
                .6 <= this.time && (this.S.ka().stop(),
                this.Kt.stop(),
                this.time = this.state = 0);
                break;
            case 2:
                a = this.S,
                a.aa(.95 * a.Bc),
                .05 > this.S.Bc && (this.S.H(),
                this.Kt.va(),
                this.S = this.track = this.La = null,
                this.state = 3)
            }
        }
    }
    Qg.g = !0;
    Object.assign(Qg.prototype, {
        j: Qg
    });
    class Pd {
        constructor(a) {
            this.Ei = !1;
            this.Px = !0;
            this.cA = this.offset = a;
            this.index = Pd.$H++
        }
    }
    Pd.g = !0;
    Object.assign(Pd.prototype, {
        j: Pd
    });
    class Qd extends xa {
        constructor(a) {
            super();
            this.U = a;
            this.DC = 10;
            this.offset = 0;
            this.id = -1;
            this.be = !1;
            this.Wp = this.Dq = this.re = 0;
            this.dir = new t(0,0);
            this.active = !1;
            this.Sk = -1;
            this.qa = new t(0,0);
            this.Wn = null;
            this.Ed = new pf;
            this.Fo = [];
            this.node = new S;
            a.oa(3).R(this.node.B);
            this.l = new S;
            this.node.appendChild(this.l)
        }
        update(a) {
            super.update(a);
            this.be || (this.re = a * this.DC * 10,
            this.offset += this.re,
            this.offset = this.Qt(this.offset, this.width));
            this.active = .001 < Math.abs(this.re);
            this.be && this.active && (this.Wp += Math.abs(this.re),
            15 <= this.Wp && (this.EM(),
            this.Wp = 0));
            this.BJ();
            let b = null
              , c = null;
            for (var d = this.Ed, e = d.keys(); e.fb(); ) {
                var f = e.next()
                  , g = d.get(f);
                if (g.Ei)
                    continue;
                let y = g.offset + this.re
                  , B = !0;
                y >= this.width ? y -= this.width : 0 >= y ? y += this.width : B = !1;
                var h = f.tg()
                  , m = f.Fi()
                  , n = (new t(h.x * this.dir.x,h.y * this.dir.y)).rc() / 2
                  , q = 1
                  , p = y;
                y < n ? (q = .5 + .5 * y / n,
                b = f,
                p = n * q) : this.width - y < n && (q = .5 + .5 * (this.width - y) / n,
                c = f,
                p = this.width - n * q);
                n = this.Ed;
                let x = n.keys();
                for (; x.fb(); ) {
                    var v = x.next()
                      , u = n.get(v);
                    v == f || u.Ei || 1 != q || (u = u.offset - g.offset,
                    .25 * t.Bb(h, v.tg()).Hm() > u * u && (.001 > Math.abs(u) ? (v = this.Fo.indexOf(v) - this.Fo.indexOf(v),
                    u = 600 * (0 < v ? 1 : 0 > v ? -1 : 0)) : 600 > Math.abs(u) && (u = 600 * (0 < u ? 1 : 0 > u ? -1 : 0)),
                    y -= u * a))
                }
                f.DN(new t(q,q));
                h = new t(this.x + this.dir.x * p - m.x,this.y + this.dir.y * p - m.y);
                g.Px ? (p = new t(this.dir.y,-this.dir.x),
                m = t.Ww(h, p) / this.dir.rc(),
                p = new t(p.x * m,p.y * m),
                m = 800 * a,
                p.Hm() >= m * m ? (q = p.rc(),
                p.multiply((q - m) / q)) : g.Px = !1,
                h.mv(p),
                f.Wf(t.Bb(f.Fi(), h))) : f.Wf(t.Bb(new t(this.x,this.y), t.pd(this.dir, p)));
                g.cA = y;
                B && (f.sA(),
                z.play(z.TG))
            }
            this.Wn.move(this.re);
            for (d = this.Ed.iterator(); d.fb(); )
                e = d.next(),
                e.offset = this.Qt(e.cA, this.width);
            this.be && (this.re = 0);
            if (-1 == this.Sk)
                if (null != b && null != c)
                    for (d = this.Ed,
                    e = d.keys(); e.fb(); )
                        f = e.next(),
                        g = d.get(f),
                        g.Ei || (f == b && (g.offset += 1500 * a),
                        f == c && (g.offset -= 1500 * a));
                else
                    null != b ? this.re = 1500 * a : null != c && (this.re = -1500 * a)
        }
        M() {
            this.l.m(this.x);
            this.l.s(this.y);
            this.l.Zf(0, this.height / 2);
            this.l.fe(0, this.height / 2);
            this.l.ma(this.rotation);
            this.Wn.M()
        }
        xv(a, b, c) {
            this.be && (a = this.Br(new t(a,b)),
            0 <= a.x && a.x <= this.width && .5 * -this.height <= a.y && a.y <= .5 * this.height && (this.Sk = c,
            this.qa.zb(a)))
        }
        zv(a, b, c) {
            a = !1;
            if (!this.be)
                return !1;
            if (this.Sk == c) {
                this.Sk = -1;
                this.re = 0;
                for (c = this.Ed.keys(); c.fb(); )
                    a = c.next(),
                    this.Ed.G[a.Je].Ei && this.Ed.remove(a);
                a = !0
            }
            return a
        }
        yv(a, b, c) {
            let d = !1;
            if (-1 != this.U.wp || !za.instance.ve().Kp(0) || !this.be)
                return !1;
            this.Sk == c && (a = this.Br(new t(a,b)),
            this.re = a.x - this.qa.x,
            this.offset += this.re,
            this.offset = this.Qt(this.offset, this.width),
            this.qa.zb(a),
            d = !0);
            return d
        }
        contains(a) {
            a = this.Br(a);
            return 0 <= a.x && a.x <= this.width && .5 * -this.height <= a.y ? a.y <= .5 * this.height : !1
        }
        Br(a) {
            var b = this.Dq - .5 * Math.PI;
            let c = new t(this.dir.x,this.dir.y);
            b = new t(Math.cos(b),Math.sin(b));
            return new t(c.x * (a.x - this.x) + c.y * (a.y - this.y),b.x * (a.x - this.x) + b.y * (a.y - this.y))
        }
        KI(a, b) {
            a = this.Br(a);
            return !(a.x < -b || a.x > this.width + b || a.y < .5 * -this.height - b || a.y > .5 * this.height + b)
        }
        bind(a) {
            this.uI(a)
        }
        YO(a) {
            let b = this.Ed
              , c = b.keys();
            for (; c.fb(); ) {
                let d = c.next()
                  , e = b.get(d);
                if (d == a) {
                    e.Ei = !0;
                    d.av(-1);
                    break
                }
            }
            a.av(-1)
        }
        Dt(a) {
            return null != this.Ed.G.Ij[a.Je]
        }
        remove(a) {
            this.Ed.remove(a)
        }
        QK(a) {
            a = this.Ed.G[a.Je];
            return null != a ? a.Ei : !1
        }
        isActive() {
            return this.active
        }
        Qt(a, b) {
            let c = b - 0;
            a > b && (a -= c);
            0 > a && (a += c);
            return a
        }
        uI(a) {
            var b = a.Fi();
            b = new t(b.x - this.x,b.y - this.y);
            this.Ed.set(a, new Pd(Math.max(Math.min(b.x * this.dir.x + b.y * this.dir.y, this.width), 0)));
            this.Fo.push(a);
            a.av(this.id)
        }
        IK(a, b, c, d, e, f, g, h) {
            this.Sk = -1;
            this.id = a;
            this.x = b;
            this.y = c;
            this.width = d;
            this.height = e;
            this.rotation = f;
            this.be = g;
            this.Dq = f * Fa;
            this.dir = new t(Math.cos(this.Dq),Math.sin(this.Dq));
            this.DC = h;
            this.node = new S;
            a = new A(this.l,r.yc,Wi);
            a.sa(d / a.Y.x);
            a.xb((e - 10) / a.ua());
            a = new A(this.l,r.yc,ii);
            a.sa(.4);
            a.xb((e - 10) / a.ua());
            a.m(-6);
            a.s(5);
            a = new A(this.l,r.yc,ii);
            a.sa(.4);
            a.xb((e - 10) / a.ua());
            a.m(d - a.la() + 6);
            a.s(5);
            a = new A(this.l,r.yc,ji);
            a.sa(d / a.la());
            a.xb(-.4);
            a.s(a.ua());
            a = new A(this.l,r.yc,ji);
            a.sa(d / a.la());
            a.xb(.4);
            a.s(e - a.ua());
            a = new A(this.l,r.yc,Rg);
            a.J(.4);
            a.m(-6);
            a.s(e - a.ua());
            a = new A(this.l,r.yc,Rg);
            a.sa(.4);
            a.xb(-.4);
            a.m(-6);
            a.s(a.ua());
            a = new A(this.l,r.yc,Rg);
            a.J(-.4);
            a.m(d + 6);
            a.s(a.ua());
            a = new A(this.l,r.yc,Rg);
            a.sa(-.4);
            a.xb(.4);
            a.m(d + 6);
            a.s(e - a.ua());
            a = 0;
            g || (a = 0 < h ? 1 : -1);
            this.Wn = new qf(d - 2,e - 10,a);
            this.Wn.l.s(5);
            this.l.appendChild(this.Wn.l);
            g = new A(this.l,r.yc,ki);
            g.sa(.4);
            g.xb((e - 10) / g.Y.y);
            g.s(5);
            g = new A(this.l,r.yc,ki);
            g.sa(-.4);
            g.xb((e - 10) / g.Y.y);
            g.m(d);
            g.s(5)
        }
        BJ() {
            let a = [];
            for (var b = this.Ed, c = b.keys(); c.fb(); ) {
                let d = c.next();
                b.get(d).Ei && !this.contains(d.Fi()) && a.push(d)
            }
            for (b = 0; b < a.length; )
                c = a[b],
                ++b,
                this.Ed.remove(c),
                ua.remove(this.Fo, c)
        }
        EM() {
            z.play([1050, 1049, 1048, 1047][W.Gg(0, 3)])
        }
        static create(a, b, c, d, e, f, g, h, m) {
            a = new Qd(a);
            a.IK(b, c, d, e, f, g, h, m);
            return a
        }
    }
    Qd.g = !0;
    Qd.u = xa;
    Object.assign(Qd.prototype, {
        j: Qd
    });
    class Sg {
        constructor(a) {
            this.Ld = new gb;
            this.su = !1;
            this.list = [];
            this.U = a
        }
        count() {
            return this.list.length
        }
        bind(a) {
            let b = 0
              , c = this.list;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                d.contains(new t(a.x,a.y)) && d.bind(a)
            }
        }
        push(a) {
            this.list.push(a)
        }
        iterator() {
            return new Dc(this.list)
        }
        Tj(a) {
            let b = 0;
            for (; b < a.length; )
                this.bind(a[b++])
        }
        JI(a) {
            var b = null;
            let c = [];
            for (var d = this.iterator(); d.fb(); ) {
                var e = d.next();
                e.KI(a.Fi(), a.it()) && c.push(e);
                e.Dt(a) && (b = e)
            }
            if (null != b && b.be) {
                for (d = 0; d < c.length; )
                    if (e = c[d],
                    ++d,
                    e.be && e.isActive()) {
                        this.WA(e, a);
                        return
                    }
                if (b.be)
                    for (b = 0; b < c.length; )
                        d = c[b],
                        ++b,
                        d.be || this.WA(d, a)
            }
        }
        $j(a) {
            let b = 0;
            for (; b < a.length; )
                this.JI(a[b++])
        }
        remove(a) {
            let b = 0
              , c = this.list;
            for (; b < c.length; )
                c[b++].remove(a)
        }
        VA() {
            var a = this.count() - 1;
            let b = a;
            for (; 0 <= a; ) {
                if (this.list[a].be && this.list[a].isActive()) {
                    let c = a;
                    for (; c < b; )
                        this.bC(c, c + 1),
                        ++c;
                    --b
                }
                --a
            }
            this.PL()
        }
        update(a) {
            let b = 0
              , c = this.list;
            for (; b < c.length; )
                c[b++].update(a);
            this.su && (this.VA(),
            this.su = !1)
        }
        hN() {
            this.su = !0
        }
        xv(a, b, c) {
            this.Ld.G[c] = new t(a,b)
        }
        zv(a, b, c) {
            let d = this.count() - 1;
            for (; 0 <= d; ) {
                let e = this.list[d];
                if (null != e && e.zv(a, b, c))
                    return this.Ld.remove(c),
                    !0;
                --d
            }
            return !1
        }
        yv(a, b, c) {
            var d = this.Ld.G[c];
            if (null != d) {
                var e = t.Xa(new t(a,b), d);
                if (4 > e.Hm())
                    return !1;
                e = t.to(e);
                let f = -1
                  , g = null
                  , h = 0
                  , m = this.list;
                for (; h < m.length; ) {
                    let n = m[h];
                    ++h;
                    if (n.contains(d)) {
                        let q = Math.abs(t.Ww(e, n.dir));
                        q >= f && (f = q,
                        g = n)
                    }
                }
                null != g && g.xv(d.x, d.y, c);
                this.Ld.remove(c)
            }
            for (d = this.count() - 1; 0 <= d; ) {
                if (this.list[d].yv(a, b, c))
                    return this.hN(),
                    !0;
                --d
            }
            return !1
        }
        WA(a, b) {
            if (!a.Dt(b) || a.QK(b)) {
                for (var c = 0, d = this.list; c < d.length; ) {
                    let e = d[c];
                    ++c;
                    e.Dt(b) && e.YO(b)
                }
                a.bind(b);
                z.play(z.UG)
            }
        }
        PL() {
            var a = this.count() - 1;
            let b = a;
            for (; 0 <= a; ) {
                if (!this.list[a].be) {
                    let c = a;
                    for (; c < b; )
                        this.bC(c, c + 1),
                        ++c;
                    --b
                }
                --a
            }
        }
        bC(a, b) {
            let c = this.list[a];
            this.list[a] = this.list[b];
            this.list[b] = c;
            this.U.oa(3).EO(a, b)
        }
    }
    Sg.g = !0;
    Object.assign(Sg.prototype, {
        j: Sg
    });
    class qf extends xa {
        constructor(a, b, c) {
            super();
            this.width = a;
            this.height = b;
            this.l = new S;
            this.Pd = [];
            this.offset = 0;
            this.gq = r.yc.Nb.Xe(li).cc.x;
            switch (c) {
            case -1:
                a = Xi;
                break;
            case 1:
                a = Yi;
                break;
            default:
                a = li
            }
            this.nu = a
        }
        M() {
            super.M();
            var a = .4 * this.gq;
            null == this.Pd[0] && (this.Pd[0] = new A(this.l,r.yc,this.nu));
            this.Pd[0].N(!0);
            var b = 1;
            var c = this.Pd[0]
              , d = Math.max(this.offset - (this.offset / a | 0) * a, 0);
            c.m(0);
            c.sa(d / this.gq);
            for (c.xb(this.height / c.Y.y); d + a <= this.width; )
                null == this.Pd[b] && (this.Pd[b] = new A(this.l,r.yc,this.nu)),
                this.Pd[b].N(!0),
                c = this.Pd[b++],
                c.sa(.4),
                c.xb(this.height / c.Y.y),
                c.m(d),
                d += c.la();
            a = this.width - d;
            null == this.Pd[b] && (this.Pd[b] = new A(this.l,r.yc,this.nu));
            this.Pd[b].N(!0);
            c = this.Pd[b++];
            c.m(this.width - a);
            c.sa(a / this.gq);
            c.xb(this.height / c.Y.y);
            for (c = this.Pd.length; b < c; )
                this.Pd[b++].N(!1)
        }
        move(a) {
            this.offset += a;
            for (a = .4 * this.gq; this.offset > this.width; )
                this.offset -= a;
            for (; 0 > this.offset; )
                this.offset += a
        }
    }
    qf.g = !0;
    qf.u = xa;
    Object.assign(qf.prototype, {
        j: qf
    });
    class uc extends Da {
        constructor(a) {
            super();
            this.S = a;
            a.aa(0);
            this.time = this.state = 0
        }
        show() {
            this.ha(1)
        }
        wg() {
            this.time = 0;
            this.ha(3)
        }
        update(a) {
            this.time += a;
            switch (this.state) {
            case 1:
                a = Math.min(this.time / 1, 1);
                this.S.aa(a);
                1 == a && this.ha(2);
                break;
            case 2:
                1 == Math.min(this.time / (1 == E.box && 1 == E.level ? 10 : 5), 1) && this.ha(3);
                break;
            case 3:
                a = Math.min(this.time / .5, 1),
                this.S.aa(1 - a),
                1 == a && (this.ha(0),
                this.S.N(!1))
            }
        }
        M() {
            this.S.m(this.x);
            this.S.s(this.y);
            this.S.ma(this.rotation)
        }
        ha(a) {
            this.time = 0;
            this.state = a
        }
    }
    uc.g = !0;
    uc.u = Da;
    Object.assign(uc.prototype, {
        j: uc
    });
    class rf extends uc {
        constructor(a) {
            a = new A(null,r.WO,k.fi(k.$G, a));
            a.J(.4);
            super(a);
            this.Eh = 0
        }
        Lh(a) {
            this.rotation = null != a.angle ? a.angle : 0;
            let b = a.path
              , c = oa.Ol;
            if (null != b) {
                let d = Na.lw;
                "R" == b.charAt(0) && (d = Math.round(3 * Ha.parseInt(ua.substr(b, 2, null)) / 2 + 1));
                a = new Id(d,a.moveSpeed * c,a.rotateSpeed);
                a.angle = this.rotation;
                a.yB(b, this.x, this.y);
                this.xB(a);
                a.start()
            }
        }
        update(a) {
            if (2 == this.jd)
                switch (this.time += a,
                this.state) {
                case 1:
                    a = Math.min(this.time / 1, 1);
                    this.S.aa(a);
                    1 == a && (this.le = this.x,
                    this.ha(2));
                    break;
                case 2:
                    a = Math.min(this.time / 1, 1);
                    this.x = this.le + (this.le + (oa.ZG + 40) * Ad.po) * a;
                    1 == a && this.ha(3);
                    break;
                case 3:
                    a = Math.min(this.time / .5, 1),
                    this.S.aa(1 - a),
                    1 == a && (2 == ++this.Eh ? (this.S.N(!1),
                    this.ha(0)) : (this.x = this.le,
                    this.ha(1)))
                }
            else
                null != this.nb && (this.nb.update(a),
                this.x = this.nb.i.x,
                this.y = this.nb.i.y,
                this.rotation = this.nb.angle),
                super.update(a)
        }
    }
    rf.g = !0;
    rf.u = uc;
    Object.assign(rf.prototype, {
        j: rf
    });
    class sf extends uc {
        constructor(a, b) {
            let c = new wa(null,r.Cm);
            c.Wa(a);
            c.Gb(b, 512);
            c.wc(26);
            c.Rb(0);
            c.Lg(!0);
            c.Wh(2);
            c.aa(.7);
            super(c)
        }
    }
    sf.g = !0;
    sf.u = uc;
    Object.assign(sf.prototype, {
        j: sf
    });
    class oa extends ia {
        constructor(a) {
            super();
            this.St = a;
            this.$x = this.pa(new ia);
            this.Xh = new pb;
            this.Fz = [];
            for (a = 0; 12 > a; ) {
                let b = new pb;
                this.Fz[a++] = b;
                this.Xh.R(b)
            }
            this.kb = new Hg;
            this.fa = Ad.po;
            this.Nn = 0;
            this.rO = t.$b();
            this.Bi = [];
            for (a = 0; 5 > a; )
                this.Bi[a++] = [];
            this.Zx = new Ta;
            this.Zx.jf(new vc(this.Bi));
            this.oa(11).R(this.Zx);
            this.Bk = this.Rj = this.an = this.$m = 0;
            this.Bs = [];
            this.pz()
        }
        pz() {
            for (var a = 0; 5 > a; )
                this.Bi[a++] = [];
            this.vm = Array(5);
            this.$h = Array(5);
            this.qu = Array(5);
            for (a = 0; 5 > a; ) {
                let b = a++;
                this.vm[b] = !1;
                this.$h[b] = t.$b();
                this.qu[b] = t.$b()
            }
        }
        oa(a) {
            return this.Fz[a]
        }
        zs() {
            let a = this.$x.oe;
            for (; null != a; ) {
                let b = a.W;
                a.va();
                a = b
            }
        }
        delay(a, b) {
            a = new cf(a,b);
            this.$x.pa(a)
        }
        va() {
            this.Xh.H();
            super.va()
        }
        show() {
            this.Bk = this.Rj = 0;
            this.zs();
            this.ud = null;
            this.wp = -1;
            this.Ea = 2;
            this.Nh = 0;
            z.stop(z.Hj);
            this.Cc = [];
            this.Fe = [];
            this.Sb = [];
            this.bubbles = [];
            this.Qh = [];
            this.Qg = [];
            this.Zn = [];
            this.$n = [];
            this.ri = [];
            this.lc = [];
            this.Ze = [];
            this.bi = [];
            this.Ck = [];
            this.Tb = new Sg(this);
            this.Ud = new Gg(this);
            this.ic = [];
            this.bl = null;
            this.xk = !1;
            this.ba = new Cb;
            this.ba.$f(1);
            this.ra = new Cb;
            this.ra.$f(1);
            this.Da = new Cb;
            this.Da.$f(1);
            this.ti = new bc(this);
            var a = Nd.get();
            this.qs = new Fg(this);
            this.O = new vb(this);
            this.O.Ra = this.ba;
            this.rL(a);
            a = this.lc.length;
            let b, c = 0;
            for (; c < a; )
                b = this.lc[c++],
                b.vn = -1,
                b.Oe = this.lc;
            this.Nn = 0;
            this.Wb = this.dc = this.Lc = null;
            this.au = !1;
            this.tc = 2 != this.Ea;
            this.UB = this.Up = this.yd = this.xd = !1;
            this.time = this.uN = this.Gn = 0;
            this.Ah = !0;
            Xa.reset();
            this.nh = 0 < this.Rj ? 0 : .3;
            this.Tb.Tj(this.Sb);
            this.Tb.Tj(this.Qg);
            this.Tb.Tj(this.bubbles);
            this.Tb.Tj(this.bi);
            this.Tb.Tj(this.Qh);
            this.Tb.Tj(this.ri);
            this.Tb.VA();
            this.zO()
        }
        rL(a) {
            function b(g, h) {
                let m = 0
                  , n = g.length;
                for (; m < n; ) {
                    let q = g[m++]
                      , p = 0
                      , v = q.length;
                    for (; p < v; )
                        h(q[p++])
                }
            }
            let c = []
              , d = 0
              , e = Bb.EJ(a);
            for (; d < e.length; )
                c.push(Bb.Cf(a, e[d++]));
            let f = this;
            b(c, function(g) {
                switch (g.name) {
                case 0:
                    f.sL(g);
                    break;
                case 1:
                    f.kL(g);
                    break;
                case 50:
                    f.iL(g);
                    break;
                case 51:
                    f.jL(g);
                    break;
                case 52:
                    f.hL(g);
                    break;
                case 134:
                    f.qL(g)
                }
            });
            b(c, function(g) {
                switch (g.name) {
                case 2:
                    f.Pa = new Sb(f,g);
                    f.Nx = !1;
                    f.xp = oa.Di ? 2 : -1;
                    f.Io = 1;
                    oa.Di = !1;
                    break;
                case 3:
                    f.xL(g);
                    break;
                case 4:
                    f.BL(g);
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                    f.AL(g);
                    break;
                case 53:
                    f.oL(g);
                    break;
                case 54:
                    f.gL(g);
                    break;
                case 55:
                    f.tL(g);
                    break;
                case 56:
                    f.vL(g);
                    break;
                case 57:
                case 58:
                case 59:
                case 60:
                case 80:
                    f.wL(g);
                    break;
                case 81:
                case 82:
                    f.fL(g);
                    break;
                case 100:
                    f.nL(g);
                    break;
                case 120:
                    f.uL(g);
                    break;
                case 130:
                    f.mL(g);
                    break;
                case 131:
                    f.yL(g);
                    break;
                case 132:
                    f.pL(g);
                    break;
                case 133:
                    f.lL(g);
                    break;
                case 135:
                    f.zL(g)
                }
            })
        }
        sL(a) {
            this.Yi = a.width * this.fa | 0;
            this.Xi = a.height * this.fa | 0;
            var b = a.view;
            if (null != b) {
                var c = b.x;
                let d = b.y;
                b = new X(c,d,c + b.width,d + b.height);
                b.scale(this.fa, !1);
                c = this.kb.Cj;
                c.o = b.o;
                c.C = b.C;
                c.A = b.A;
                c.D = b.D;
                c = this.kb.i;
                c.x = (b.o + b.A) / 2;
                c.y = (b.C + b.D) / 2
            } else
                b = this.kb.Cj,
                b.o = 0,
                b.C = 0,
                b.A = this.Yi,
                b.D = this.Xi,
                b = this.kb.i,
                b.x = this.Yi / 2,
                b.y = this.Xi / 2;
            this.Od = new F(0,0,0,1);
            null != a.scrollX && (this.Od.x = a.scrollX);
            null != a.scrollY && (this.Od.y = a.scrollY);
            8 == E.box && this.qs.oO()
        }
        kL(a) {
            this.jd = a.special;
            this.kl = a.ropePhysicsSpeed;
            this.ad = a.nightLevel;
            this.Ea = a.twoParts ? 0 : 2;
            this.kl *= oa.ww;
            2 != this.Ea && (this.ui = new bc(this),
            this.vi = new bc(this))
        }
        nL(a) {
            var b = a.x * this.fa;
            let c = a.y * this.fa
              , d = a.length * this.fa;
            var e = a.radius
              , f = a.wheel
              , g = null != a.moveLength ? a.moveLength * this.fa : -1;
            let h = a.moveVertical
              , m = null != a.moveOffset ? a.moveOffset * this.fa : 0;
            var n = a.spider
              , q = "L" == a.part;
            let p = a.hidePath;
            var v = a.bindBulb;
            let u = new bd(this);
            u.x = b;
            u.y = c;
            u.Ug = f;
            u.aO(n);
            u.Lh(a);
            -1 != e && (e *= this.fa);
            if (-1 == e) {
                f = this.ba;
                if (v)
                    for (q = 0,
                    v = this.ic; q < v.length; )
                        n = v[q],
                        ++q,
                        null != n && (f = n.Ra);
                else
                    2 != this.Ea && (f = q ? this.ra : this.Da);
                b = new Kd(this.oa(5),null,b,c,f,f.i.x,f.i.y,d);
                b.nc.Cg.zb(b.nc.i);
                u.DB(b);
                this.am()
            }
            u.setRadius(e);
            u.LN(g, h, m);
            if (null != u.nb && (u.AN(),
            !p)) {
                a = "R" == a.path[0];
                null == this.bl && (this.bl = new kf(this));
                e = 0;
                for (g = u.nb.path.length - 1; e < g; )
                    a && 0 != e % 3 || this.bl.ly(e, e + 1, u),
                    ++e;
                2 < u.nb.path.length && this.bl.ly(0, u.nb.path.length - 1, u)
            }
            this.Cc.push(u)
        }
        iL(a) {
            this.ra.i.x = a.x * this.fa;
            this.ra.i.y = a.y * this.fa;
            this.Db = new cc(this,k.nE);
            this.Db.x = this.ra.i.x;
            this.Db.y = this.ra.i.y;
            this.Db.Ra = this.ra
        }
        jL(a) {
            this.Da.i.x = a.x * this.fa;
            this.Da.i.y = a.y * this.fa;
            this.Eb = new cc(this,k.oE);
            this.Eb.x = this.Da.i.x;
            this.Eb.y = this.Da.i.y;
            this.Eb.Ra = this.Da
        }
        hL(a) {
            this.ba.i.x = a.x * this.fa;
            this.ba.i.y = a.y * this.fa
        }
        qL(a) {
            let b = new Cb;
            b.$f(1);
            b.i.x = a.x * this.fa;
            b.i.y = a.y * this.fa;
            a = new jf(this,a.litRadius * this.fa);
            a.x = b.i.x;
            a.y = b.i.y;
            a.Ra = b;
            this.ic.push(a)
        }
        oL(a) {
            this.ud = new hf(this,a.x * this.fa,a.y * this.fa);
            this.ud.ju = O(this, this.Yp)
        }
        xL(a) {
            let b = new Kb(this);
            b.x = a.x * this.fa;
            b.y = a.y * this.fa;
            b.timeout = a.timeout;
            -1 != a.timeout && b.setTimeout();
            b.Lh(a);
            b.update(0);
            this.Sb.push(b)
        }
        BL(a) {
            if (!this.NB(a) && null != a.text && "" != a.text) {
                var b = Math.ceil(a.width * this.fa);
                b = new sf(Yb.get(a.text),b);
                b.x = a.x * this.fa;
                b.y = a.y * this.fa;
                this.oa(1).R(b.S.B);
                a = a.special;
                b.jd = null != a ? a : 0;
                0 == b.jd && b.show();
                this.$n.push(b)
            }
        }
        AL(a) {
            if (!this.NB(a)) {
                var b = new rf(a.name - 5);
                b.S.F();
                b.x = a.x * this.fa;
                b.y = a.y * this.fa;
                var c = a.angle;
                b.rotation = null != c ? c : 0;
                c = a.special;
                b.jd = null != c ? c : 0;
                b.Lh(a);
                a = 1;
                if (2 == b.jd || 5 == this.jd)
                    a = 11;
                this.oa(a).R(b.S.B);
                0 != b.jd && 2 != b.jd || b.show();
                this.Zn.push(b)
            }
        }
        gL(a) {
            let b = new ib(this);
            b.x = a.x * this.fa;
            b.y = a.y * this.fa;
            this.bubbles.push(b)
        }
        tL(a) {
            let b = new Tb(this);
            b.angle = a.angle;
            b.x = a.x * this.fa;
            b.y = a.y * this.fa;
            b.rotation = a.angle + 90;
            b.nd();
            this.Qh.push(b)
        }
        vL(a) {
            let b = new Wa(this,a.group);
            b.x = a.x * this.fa;
            b.y = a.y * this.fa;
            b.Lh(a);
            b.rotation += 90;
            null != b.nb && (b.nb.angle += 90);
            b.nd();
            this.Qg.push(b)
        }
        wL(a) {
            var b = a.x * this.fa;
            let c = a.y * this.fa
              , d = a.size
              , e = parseFloat(a.angle);
            if (0 == a.toggled)
                var f = -1;
            else
                f = a.toggled,
                f = null != f ? f : -1;
            b = new mf(this,b,c,d,null != e ? e : 0,f);
            b.Lh(a);
            -1 != f && (b.tA = O(this, this.pN));
            80 == a.name ? (b.Te = !0,
            b.rz = a.initialDelay,
            b.xA = a.onTime,
            b.mA = a.offTime,
            b.Ue = 0,
            b.vC(),
            b.Ue += b.rz,
            b.nd()) : b.Te = !1;
            this.Fe.push(b)
        }
        uL(a) {
            let b = a.x * this.fa
              , c = a.y * this.fa
              , d = a.size * this.fa;
            var e = Ha.parseInt(a.handleAngle);
            e = null != e ? e : 0;
            let f = e * Fa
              , g = a.oneHandle
              , h = new Od(this);
            h.Zm = a.size;
            h.x = b;
            h.y = c;
            h.rotation = e;
            h.sk = new t(h.x - h.Zm * this.fa,h.y);
            h.sk.Ua(f, h.x, h.y);
            h.tk = new t(h.x + h.Zm * this.fa,h.y);
            h.tk.Ua(f, h.x, h.y);
            h.ob(d);
            h.qB(g);
            this.lc.push(h)
        }
        fL(a) {
            let b = new Wc(this,a.x * this.fa,a.y * this.fa,a.size,a.angle);
            b.Lh(a);
            this.ri.push(b)
        }
        mL(a) {
            let b = a.x * this.fa
              , c = a.y * this.fa
              , d = a.radius
              , e = a.angle
              , f = a.grab
              , g = a.bubble;
            a = a.bouncer;
            let h = new df(this);
            h.NK(new t(b,c), (a ? 8 : 0) | (g ? 2 : 0) | (f ? 4 : 0), d, e, this.bubbles, this.Cc, this.ri);
            this.Ze.push(h);
            this.ti.lb = new Ja;
            2 != this.Ea && (this.ui.lb = new Ja,
            this.vi.lb = new Ja)
        }
        yL(a) {
            let b = a.x * this.fa
              , c = a.y * this.fa;
            a = a.angle;
            let d = new of(this);
            d.LK(b, c, a);
            this.bi.push(d)
        }
        pL(a) {
            let b = a.x * this.fa
              , c = a.y * this.fa
              , d = a.candyCaptured
              , e = new qb(this);
            e.KK(b, c);
            this.Ck.push(e);
            e.Lh(a);
            d && (this.xk = !0,
            this.O.l.aa(0),
            e.Ox(this.ba))
        }
        lL(a) {
            let b = a.x * this.fa
              , c = a.y * this.fa
              , d = a.angle
              , e = a.radius
              , f = a.activeTime;
            a = a.index;
            let g = new Ze(this,this.Ud);
            g.index = a;
            g.MK(new t(b,c), d, e, f);
            this.Ud.pa(g, a)
        }
        zL(a) {
            var b = a.x * this.fa;
            let c = a.y * this.fa
              , d = a.angle
              , e = a.width * this.fa
              , f = a.length * this.fa
              , g = a.velocity * this.fa
              , h = "forward" == a.direction ? 1 : -1;
            a = "manual" == a.type;
            b = Qd.create(this, this.Tb.count(), b, c, f, e, -d, a, g * h);
            this.Tb.push(b)
        }
        am() {
            this.Rj += 1
        }
        Et(a, b, c, d) {
            if (Q.gj(b.x, b.y, a.x - 34, a.y - 34, 68, 68)) {
                if (null != c) {
                    this.cl(a.x, a.y);
                    this.tm();
                    b = 0;
                    for (var e = this.Ze; b < e.length; ) {
                        var f = e[b];
                        ++b;
                        null != f && f.$ == c && (f.Af = !0,
                        f.Sh(1))
                    }
                }
                d.show();
                c = !1;
                b = 0;
                for (e = this.Ze; b < e.length; )
                    f = e[b],
                    ++b,
                    null != f && f.$ == a && (f.Af = !1,
                    c = !0);
                c && d.pO();
                z.play(z.Bw);
                a.pop();
                this.am();
                return !0
            }
            return !1
        }
        tl(a, b) {
            this.UB || (b.x = a.i.x,
            b.y = a.i.y,
            b.Sd())
        }
        vJ(a, b, c, d) {
            this.tl(this.ba, a);
            return xa.Xm(a, c) ? (c.FM(),
            z.play(z.Yg, !0),
            null != b && this.hj(b, !1),
            this.kj(null != d),
            a.bg = !1,
            a.l.Yb().KC(c.x, c.y + 10),
            a.l.Yb().alpha(0, .1),
            a.l.Yb().scale(0, .1, null, null, function() {
                a.H()
            }),
            !0) : !1
        }
        gC(a) {
            if (null != a && null != a.xc) {
                var b = a.Ra;
                a.xc.Zb.N(!0);
                a.xc.Zb.ka().play(Og);
                var c = new t(0,Wa.nG);
                c.rotate(a.xc.rotation * Fa);
                b.i.x = a.xc.x;
                b.i.y = a.xc.y;
                b.i.add(c);
                b.qa.zb(b.i);
                b.$a.x = 0;
                b.$a.y = -1;
                b.$a.rotate(a.xc.rotation * Fa);
                b.$a.multiply(a.Hu);
                b.ed.zb(b.$a);
                b.ed.by(60);
                b.qa.zb(b.i);
                b.qa.mv(b.ed);
                a.xc = null
            }
        }
        kj(a) {
            let b = 0
              , c = this.Cc.length;
            for (; b < c; ) {
                let d = this.Cc[b++]
                  , e = d.Ta;
                null != e && (e.yb == this.ba || e.yb == this.ra && a || e.yb == this.Da && !a) && (-1 == e.ec ? (e.Lq(e.wa.length - 2),
                this.tm()) : e.vt = !0,
                d.af && d.uj && this.cr(d))
            }
        }
        YM(a) {
            if (null != a)
                for (var b = 0, c = this.Cc; b < c.length; ) {
                    let d = c[b];
                    ++b;
                    if (null == d)
                        continue;
                    let e = d.Ta;
                    null != e && e.yb == a.Ra && (-1 == e.ec ? e.Lq(e.wa.length - 2) : e.vt = !0,
                    d.af && d.uj && this.cr(d))
                }
        }
        tm() {
            --this.Rj;
            this.Bk = 0
        }
        DI() {
            this.sv = 100 * Math.max(0, 30 - this.Gn);
            this.sv = this.sv / 10 * 10;
            this.xO = 1E3 * this.Nn;
            this.uN = Math.ceil(this.sv + this.xO)
        }
        uh() {
            null != this.Lc && this.hj(this.Lc, !1);
            this.DI();
            this.kj(!1);
            this.zs();
            let a = z.Hj;
            this.delay(function() {
                z.stop(a)
            }, 1.5);
            this.delay((ob = this.St,
            O(ob, ob.aM)), 1.8);
            this.Ud.bL()
        }
        et() {
            this.il || (this.Pa.xM(),
            z.play(z.AG),
            this.zs(),
            this.delay((ob = this.St,
            O(ob, ob.$L)), 1))
        }
        Bp(a, b, c, d) {
            if (c.XM(a.x - 249.60000000000002, a.y - 249.60000000000002, a.x + 249.60000000000002, a.y + 249.60000000000002)) {
                var e = new t(0,0);
                let h = new t(0,0);
                c = new t(c.x,c.y);
                var f = a.ca;
                f = f.A - f.o;
                var g = a.ca;
                g = g.D - g.C;
                e.x = a.x - f / 2;
                h.x = a.x + f / 2;
                e.y = h.y = a.y;
                0 != a.angle && c.Ua(-a.angle, a.x, a.y);
                c.y < e.y && Q.tu(c.x - f / 2, c.y - g / 2, c.x + f / 2, c.y + g / 2, e.x, e.y - 249.60000000000002, h.x, h.y) && (e = new t(0,-(499.20000000000005 * (249.60000000000002 - (e.y - c.y)) / 249.60000000000002)),
                e.rotate(a.angle),
                b.zo(e, d))
            }
        }
        zp(a, b, c) {
            if (!a.Zq && null != a.l) {
                var d = t.Xa(b.qa, b.i)
                  , e = b.qa.ub();
                e.Ua(-a.angle, a.x, a.y);
                d = Math.max(40 * d.rc(), 336) * (e.y < a.y ? -1 : 1);
                e = t.Zw(t.LJ(a.angle));
                e.multiply(d);
                b.i.Ua(-a.angle, a.x, a.y);
                b.qa.Ua(-a.angle, a.x, a.y);
                b.qa.y = b.i.y;
                b.i.Ua(a.angle, a.x, a.y);
                b.qa.Ua(a.angle, a.x, a.y);
                b.zo(e, c);
                a.uM();
                z.play(z.oG)
            }
        }
        nM(a, b) {
            a.T.ka().play(Tb.MC);
            z.play([1030, 1029, 1028, 1027][W.Gg(0, 3)]);
            a.xJ(this);
            this.tc || this.Bp(a, this.ba, this.O, b);
            2 != this.Ea && (this.xd || this.Bp(a, this.ra, this.Db, b),
            this.yd || this.Bp(a, this.Da, this.Eb, b));
            let c = 0
              , d = this.ic;
            for (; c < d.length; ) {
                let e = d[c];
                ++c;
                this.Bp(a, e.Ra, e, b)
            }
        }
        oM(a, b) {
            function c(u, y, B) {
                var x = 0;
                if (0 == a.rotation && (null == q.ud || null != q.ud && q.Ah) || 180 == a.rotation && null != q.ud && !q.Ah)
                    x = a.x - y.x,
                    x = 2.5 < Math.abs(x) ? -B.x / f + .25 * x : 1 > Math.abs(B.x) ? -B.x : -B.x / f;
                let H = -34 / u.weight;
                if (0 != a.rotation && (null == q.ud || null != q.ud && q.Ah) || 180 != a.rotation && null != q.ud && !q.Ah)
                    f *= 15,
                    H = 90 == a.rotation || 270 == a.rotation ? H / 4 : H / 2;
                B = new t(x,-B.y / f + H);
                y = a.y - y.y;
                y > h + 17.5 && B.multiply(Math.exp(-2 * (y - (h + 17.5))));
                B.rotate(g);
                u.zo(B, b)
            }
            function d() {
                let u = 0
                  , y = q.ri;
                for (; u < y.length; ) {
                    let B = y[u];
                    ++u;
                    null != B && (B.Zq = !1)
                }
            }
            function e(u, y, B) {
                y.Ua(-g, a.x, a.y);
                B.rotate(-g);
                return Q.tu(y.x - 17.5, y.y - 8.75, y.x + 17.5, y.y + 17.5, m.x, m.y, n.x, n.y)
            }
            let f = 5
              , g = a.rotation * Fa
              , h = a.VJ()
              , m = new t(a.x - 5,a.y - h - 1)
              , n = new t(a.x + 5,a.y - 17.5)
              , q = this;
            if (2 == this.Ea) {
                var p = this.ba.i.ub()
                  , v = this.ba.$a.ub();
                e(this.ba, p, v) && (d(),
                c(this.ba, p, v))
            } else
                p = this.ra.i.ub(),
                v = this.ra.$a.ub(),
                e(this.ra, p, v) && (d(),
                c(this.ra, p, v)),
                p = this.Da.i.ub(),
                v = this.Da.$a.ub(),
                e(this.Da, p, v) && (d(),
                c(this.Da, p, v));
            p = 0;
            for (v = this.ic; p < v.length; ) {
                let u = v[p];
                ++p;
                let y = u.Ra.i.ub()
                  , B = u.Ra.$a.ub();
                e(u.Ra, y, B) && (d(),
                c(u.Ra, y, B))
            }
        }
        ec(a, b, c) {
            let d = 0
              , e = this.Cc.length;
            for (; d < e; ) {
                let f = this.Cc[d++]
                  , g = f.Ta;
                if (null == g || -1 != g.ec)
                    continue;
                let h = g.wa.length - 1
                  , m = 0;
                for (; m < h; ) {
                    let n = m++
                      , q = g.wa[n]
                      , p = g.wa[n + 1];
                    if (f.Ug && Q.Ui(a.x, a.y, b.x, b.y, f.x - 44, f.y - 44, 88, 88) ? 0 : Db.dL(a.x, a.y, b.x, b.y, q.i.x, q.i.y, p.i.x, p.i.y))
                        return f.af && f.uj && this.cr(f),
                        z.play([1026, 1025, 1024, 1023][g.uu]),
                        g.Lq(n),
                        this.tm(),
                        c && (g.og = 0,
                        g.vu(n)),
                        1
                }
            }
            return 0
        }
        cr(a) {
            z.play(z.IG);
            a.af = !1;
            a.mc.zI()
        }
        vO(a) {
            z.play(z.JG);
            let b = 0
              , c = this.Cc;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                let e = d.Ta;
                null != e && e.yb == this.ba && (-1 != e.ec ? d.Ps() : (e.Lq(e.wa.length - 2),
                this.tm(),
                e.hk = !1),
                d.af && d.uj && a != d && this.cr(d))
            }
            a.af = !1;
            this.tc = this.UB = !0;
            a.mc.Ib();
            this.il || this.delay(O(this, this.et), 2)
        }
        hj(a, b) {
            for (var c = 0, d = this.Ze; c < d.length; ) {
                var e = d[c];
                ++c;
                null != e && (e.$ == a && (e.Af = !0,
                e.Sh(1)),
                this.Lc == a && this.MB && e.$ == this.Wb && (e.Af = !0,
                e.Sh(1),
                this.Wb = null,
                this.MB = !1))
            }
            c = 0;
            for (d = this.ic; c < d.length; )
                if (e = d[c],
                ++c,
                null != e.$ && e.$ == a) {
                    e.$ = null;
                    e.gm.wg();
                    this.cl(e.x, e.y);
                    return
                }
            2 != this.Ea ? b ? (this.dc = null,
            this.ui.wg(),
            this.cl(this.Db.x, this.Db.y)) : (this.Wb = null,
            this.vi.wg(),
            this.cl(this.Eb.x, this.Eb.y)) : (this.Lc = null,
            this.ti.wg(),
            this.cl(this.O.x, this.O.y));
            this.tm()
        }
        cl(a, b) {
            z.play(z.pG);
            let c = new A(null,r.$,k.gE);
            c.m(a);
            c.s(b);
            c.F();
            c.J(.4);
            this.Xh.R(c.B);
            c.ka().play(ib.KF).ce(function() {
                c.H()
            })
        }
        Ap(a, b, c, d) {
            return Q.gj(c, d, b.i.x - 24, b.i.y - 24, 60, 60) ? (this.hj(a, b == this.ra),
            !0) : !1
        }
        Ju(a) {
            var b = this.X.window
              , c = b.P.viewport
              , d = b.Cd.x;
            b = b.Cd.y;
            d = -1 + 2 * (a.x - (c.x * d | 0)) / (c.w * d | 0);
            a = -1 + 2 * ((c.y * b | 0) - a.y) / (c.G * b | 0);
            c = this.kb.jb.Bt;
            return new F(c.m11 * d + c.m12 * a + c.m14,c.m21 * d + c.m22 * a + c.m24,0,1)
        }
        NO(a, b) {
            var c = this.Ju(a);
            a = c.x;
            c = c.y;
            if (this.vk)
                this.ky = !0;
            else if (!(5 <= b))
                if (null != this.ud && this.ud.zk(a, c))
                    this.wp = b;
                else if (!(this.Ud.Dh() && this.Ud.ej(a, c, b) || null != this.Lc && this.Ap(this.Lc, this.ba, a, c) || 2 != this.Ea && (null != this.dc && this.Ap(this.dc, this.ra, a, c) || null != this.Wb && this.Ap(this.Wb, this.Da, a, c)))) {
                    for (var d = 0, e = this.ic; d < e.length; ) {
                        var f = e[d];
                        ++d;
                        if (null != f.$ && this.Ap(f.$, f.Ra, a, c))
                            return
                    }
                    d = new t(a,c);
                    this.vm[b] || (this.vm[b] = !0,
                    this.$h[b].zb(d),
                    this.qu[b].zb(d));
                    d = 0;
                    for (e = this.Fe; d < e.length; )
                        if (f = e[d],
                        ++d,
                        null != f.Sf && -1 == f.pr && f.Sf.lu(a, c)) {
                            f.pr = b;
                            return
                        }
                    d = !1;
                    e = 0;
                    for (f = this.Qh; e < f.length; ) {
                        var g = f[e];
                        ++e;
                        if (g.HM(a, c)) {
                            g.Vn = .05;
                            g.oC = b;
                            g.Ak() || (d = !0);
                            break
                        }
                    }
                    if (!d) {
                        d = 0;
                        for (e = this.bi; d < e.length; )
                            if (e[d++].ej(a, c, b))
                                return;
                        var h = this;
                        d = 0;
                        for (e = this.Ck; d < e.length; )
                            if (f = e[d],
                            ++d,
                            null != f && f.ej(a, c, b)) {
                                this.delay(function() {
                                    h.xk = !1;
                                    h.O.bg = !0;
                                    h.O.l.aa(1);
                                    h.O.l.J(.71)
                                }, .1);
                                return
                            }
                        var m = null;
                        e = d = !1;
                        var n = 0;
                        for (f = this.lc.length; n < f; ) {
                            g = this.lc[n];
                            let q = t.od(a, c, g.sk.x, g.sk.y)
                              , p = t.od(a, c, g.tk.x, g.tk.y);
                            if (q < oa.qo && !g.dz() || p < oa.qo) {
                                for (m = n + 1; m < f; ) {
                                    n = this.lc[m];
                                    let v = t.od(n.x, n.y, g.x, g.y);
                                    v + n.ge <= g.ge && (d = !0);
                                    v <= g.ge + n.ge && (e = !0);
                                    ++m
                                }
                                g.bn.x = a;
                                g.bn.y = c;
                                g.vn = b;
                                q < oa.qo && g.tB(!0);
                                p < oa.qo && g.uB(!0);
                                m = g;
                                break
                            }
                            ++n
                        }
                        f = this.lc.indexOf(m);
                        if (f != this.lc.length - 1 && e && !d) {
                            let q = m.ub();
                            q.l.Yb().alpha(0, .2, null, null, function() {
                                q.cN = !0
                            });
                            m.DJ();
                            this.lc[f] = q;
                            this.lc.push(m)
                        }
                        d = 0;
                        for (e = this.Cc; d < e.length; )
                            if (f = e[d],
                            ++d,
                            f.Ug && Q.gj(a, c, f.x - 44, f.y - 44, 88, 88) && (f.zK(a, c),
                            f.yl = b),
                            0 < f.df && Q.gj(a, c, f.x - 26, f.y - 26, 52, 52)) {
                                f.Rk = b;
                                return
                            }
                        d = 0;
                        for (e = this.Ze; d < e.length; )
                            if (f = e[d],
                            ++d,
                            null != f && f.lu(a, c))
                                return;
                        this.Tb.xv(a, c, b)
                    }
                }
        }
        PO(a, b) {
            var c = this.Ju(a);
            a = c.x;
            c = c.y;
            if (!this.vk) {
                this.vm[b] = !1;
                null != this.ud && this.wp == b && (this.ud.zk(a, c) && (this.ud.toggle(),
                8 == E.box && this.qs.KJ(),
                this.Yp(0)),
                this.wp = -1);
                for (var d = 0, e = this.Fe; d < e.length; ) {
                    var f = e[d];
                    ++d;
                    if (null != f.Sf && f.pr == b && (f.pr = -1,
                    f.Sf.lM(a, c)))
                        return
                }
                d = 0;
                for (e = this.lc; d < e.length; )
                    f = e[d],
                    ++d,
                    f.vn == b && (f.vn = -1,
                    f.jv = -1,
                    f.tB(!1),
                    f.uB(!1));
                d = 0;
                for (e = this.bi; d < e.length; )
                    if (e[d++].mM(b))
                        return;
                d = 0;
                for (e = this.Cc; d < e.length; )
                    f = e[d],
                    ++d,
                    f.Ug && f.yl == b && (f.yl = -1),
                    0 < f.df && f.Rk == b && (f.Rk = -1);
                this.Tb.zv(a, c, b)
            }
        }
        OO(a, b) {
            a = this.Ju(a);
            var c = a.x
              , d = a.y;
            if (!(this.vk || 5 <= b)) {
                a = new t(c,d);
                if (10 < this.$h[b].Se(a))
                    for (var e = 0, f = this.Qh; e < f.length; ) {
                        var g = f[e];
                        ++e;
                        g.oC == b && 0 != g.Vn && (g.Vn = 0)
                    }
                this.rO.zb(a);
                f = 0;
                for (g = this.lc; f < g.length; )
                    if (e = g[f],
                    ++f,
                    e.vn == b) {
                        b = new t(e.x,e.y);
                        b.Se(a) < e.ge / 10 && e.bn.zb(a);
                        c = t.Xa(e.bn, b);
                        c = t.Xa(a, b).Tk() - c.Tk();
                        c > Math.PI ? c -= 2 * Math.PI : c < -Math.PI && (c += 2 * Math.PI);
                        e.sk.Ua(c, e.x, e.y);
                        e.tk.Ua(c, e.x, e.y);
                        e.rotation += c * ad;
                        d = 0 < c ? z.FG : z.GG;
                        .07 > Math.abs(c) && (d = -1);
                        e.jv != d && -1 != d && (z.play(d),
                        e.jv = d);
                        d = 0;
                        for (f = this.Cc; d < f.length; ) {
                            g = f[d];
                            ++d;
                            var h = new t(g.x,g.y);
                            h.Se(b) <= e.ge + 5 * this.fa && (h.Ua(c, e.x, e.y),
                            g.x = h.x,
                            g.y = h.y,
                            null != g.Ta && (g.Ta.nc.i.zb(h),
                            g.Ta.nc.Cg.zb(h)))
                        }
                        d = 0;
                        for (f = this.Qh; d < f.length; )
                            g = f[d],
                            ++d,
                            h = new t(g.x,g.y),
                            h.Se(b) <= e.ge + 5 * this.fa && (h.Ua(c, e.x, e.y),
                            g.x = h.x,
                            g.y = h.y,
                            g.rotation += c * ad,
                            g.nd());
                        d = 0;
                        for (f = this.bubbles; d < f.length; )
                            g = f[d],
                            ++d,
                            h = new t(g.x,g.y),
                            h.Se(b) <= e.ge + 10 * this.fa && g != this.Lc && g != this.Wb && g != this.dc && (h.Ua(c, e.x, e.y),
                            g.x = h.x,
                            g.y = h.y);
                        Q.gj(this.Pa.x, this.Pa.y, e.x - e.size, e.y - e.size, 2 * e.size, 2 * e.size) && (b = new t(this.Pa.x,this.Pa.y),
                        b.Ua(c, e.x, e.y),
                        this.Pa.x = b.x,
                        this.Pa.y = b.y);
                        e.bn.zb(a);
                        return
                    }
                e = 0;
                for (f = this.bi; e < f.length; )
                    if (f[e++].kM(c, d, b))
                        return;
                f = 0;
                for (g = this.Cc; f < g.length; )
                    if (e = g[f],
                    ++f,
                    null != e) {
                        if (e.Ug && e.yl == b) {
                            e.yK(a);
                            return
                        }
                        if (0 < e.df && e.Rk == b) {
                            e.bu ? e.y = Db.ny(a.y, e.Ok, e.Lk) : e.x = Db.ny(a.x, e.Ok, e.Lk);
                            null != e.Ta && (a = e.Ta.nc,
                            a.i.x = a.Cg.x = e.x,
                            a.i.y = a.Cg.y = e.y);
                            return
                        }
                    }
                e = !1;
                this.Tb.yv(c, d, b) && (e = !0);
                if (this.vm[b]) {
                    c = new t(0,0);
                    f = new Lg(t.Bb(this.$h[b], c),t.Bb(a, c),5,5,bb.mP.ub());
                    c = this.Bi[b];
                    d = 0;
                    if (!e)
                        for (c.push(f),
                        e = 0; e < c.length; )
                            f = c[e],
                            ++e,
                            d += this.ec(f.start, f.end, !1);
                    this.qu[b].zb(this.$h[b]);
                    this.$h[b].zb(a)
                }
            }
        }
        zO() {
            this.Jg = new F(0,0,0,1);
            this.hf = new F(0,0,0,1);
            this.pc = new F(0,0,0,1);
            this.Wj = 0;
            var a = this.kb.Cj
              , b = this.Jg;
            b.x = (a.o + a.A) / 2;
            b.y = (a.C + a.D) / 2;
            if (0 != this.Od.x || 0 != this.Od.y)
                this.Wj = 1;
            0 < this.Od.x ? (b = this.hf,
            b.x = (a.o + a.A) / 2 + (a.A - a.o),
            b.y = (a.C + a.D) / 2) : 0 > this.Od.x && (b = this.hf,
            b.x = (a.o + a.A) / 2 - (a.A - a.o),
            b.y = (a.C + a.D) / 2);
            if (0 < this.Od.y) {
                b = this.hf;
                var c = this.Jg;
                b.x = c.x + 0;
                b.y = c.y + (a.D - a.C)
            } else
                0 > this.Od.y && (b = this.hf,
                c = this.Jg,
                b.x = c.x - 0,
                b.y = c.y - (a.D - a.C));
            1 == this.Wj && (this.Iq = -.5,
            this.vk = !0,
            a = this.kb.i,
            b = this.Jg,
            a.x = b.x,
            a.y = b.y);
            this.kb.update();
            this.bq = 2 != this.Ea ? this.Oh(this.ra) || this.Oh(this.Da) : this.Oh(this.ba);
            if (this.ad)
                for (a = 0,
                b = this.ic; a < b.length; )
                    if (this.Oh(b[a++].Ra)) {
                        this.bq = !0;
                        break
                    }
        }
        Oh(a) {
            return !this.kb.WK(a.i.x, a.i.y)
        }
        NB(a) {
            return C.language != a.locale
        }
        Yp() {
            Xa.toggle();
            this.Ah = Xa.VK();
            z.play(this.Ah ? z.uG : z.vG)
        }
        pN(a) {
            let b = 0
              , c = this.Fe;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                d.mC == a && d.qN()
            }
        }
        bz(a, b, c) {
            let d = t.Xa(a.i, b.i).rc();
            if (d < c)
                if (c - d < 1E3 / (a.$a.rc() + b.$a.rc()) * 2) {
                    var e = Math.acos(t.to(a.i.x > b.i.x ? t.Xa(a.i, b.i) : t.Xa(b.i, a.i)).x)
                      , f = Math.abs((c - d) / 2 * Math.cos(e));
                    c = Math.abs((c - d) / 2 * Math.sin(e));
                    a.i.x <= b.i.x ? (a.i.x -= f,
                    b.i.x += f) : (b.i.x -= f,
                    a.i.x += f);
                    a.i.y <= b.i.y ? (a.i.y -= c,
                    b.i.y += c) : (b.i.y -= c,
                    a.i.y += c)
                } else {
                    var g = t.Xa(b.i, a.i)
                      , h = -g.y
                      , m = g.x;
                    f = (a.$a.x * g.x + a.$a.y * g.y) / c;
                    e = (a.$a.x * h + a.$a.y * m) / c;
                    h = (b.$a.x * h + a.$a.x * m) / c;
                    m = f;
                    f = (b.$a.x * g.x + a.$a.x * g.y) / c;
                    let n = g.x / c;
                    g = g.y / c;
                    a.$a = new t(f * n - e * g,f * g + e * n);
                    b.$a = new t(m * n - h * g,m * g + h * n);
                    e = Math.acos(t.to(a.i.x > b.i.x ? t.Xa(a.i, b.i) : t.Xa(b.i, a.i)).x);
                    f = Math.abs((c - d) / 2 * Math.cos(e));
                    c = Math.abs((c - d) / 2 * Math.sin(e));
                    a.i.x <= b.i.x ? (a.i.x -= f,
                    b.i.x += f) : (b.i.x -= f,
                    a.i.x += f);
                    a.i.y <= b.i.y ? (a.i.y -= c,
                    b.i.y += c) : (b.i.y -= c,
                    a.i.y += c);
                    a.ed = t.so(a.$a, 60);
                    a.qa = t.Xa(a.i, a.ed);
                    b.ed = t.so(b.$a, 60);
                    b.qa = t.Xa(b.i, b.ed)
                }
        }
        uC(a) {
            if (this.jd == a) {
                for (var b = this.jd = 0, c = this.$n; b < c.length; ) {
                    var d = c[b];
                    ++b;
                    null != d && (d.jd == a ? d.show() : d.wg())
                }
                b = 0;
                for (c = this.Zn; b < c.length; )
                    d = c[b],
                    ++b,
                    null != d && (d.jd == a ? d.show() : d.wg())
            }
        }
        update(a) {
            function b(w) {
                w.zo(new t(-w.$a.x / mi,-w.$a.y / mi + Zi), a)
            }
            function c(w, I, L) {
                let M = I.x;
                I = I.y;
                let P = w.Lb
                  , V = w.Mb
                  , N = w.Vc;
                w = w.Wc;
                return Q.Ui(P.x + M, P.y + I, V.x + M, V.y + I, L.i.x - 16, L.i.y - 16, 32, 32) ? !0 : Q.Ui(N.x + M, N.y + I, w.x + M, w.y + I, L.i.x - 16, L.i.y - 16, 32, 32)
            }
            function d(w, I) {
                return Q.Ui(w.Lb.x, w.Lb.y, w.Mb.x, w.Mb.y, I.i.x - 6, I.i.y - 6, 12, 12) ? !0 : Q.Ui(w.Vc.x, w.Vc.y, w.Wc.x, w.Wc.y, I.i.x - 6, I.i.y - 6, 12, 12)
            }
            super.update(a);
            let e = 0
              , f = this.Bs;
            for (; e < f.length; )
                f[e++].update(a);
            let g = this.bl;
            null != g && g.update(a);
            let h = 0;
            for (; 5 > h; ) {
                let w = this.Bi[h++]
                  , I = w.length
                  , L = 0;
                for (; L < I; ) {
                    let M = w[L]
                      , P = Na.$i(M.color.a, 0, 10, a);
                    M.color.a = P.value;
                    P.jj ? (w.splice(L, 1),
                    --I) : ++L
                }
            }
            0 == this.Rj && (this.Bk += a,
            30 < this.Bk && (this.Bk = 0));
            let m = this.Yi / this.Xi
              , n = this.X.window.Km()
              , q = n.w / n.G
              , p = 1 < m && 1 < q && q > m;
            switch (this.Wj) {
            case 0:
                this.Gn += a;
                break;
            case 1:
                this.Iq += a * (this.ky ? 3 : 1);
                let w = 0;
                0 <= this.Iq && (w = Math.min(1, this.Iq / 2));
                let I = Ba.MM()(w)
                  , L = this.Jg
                  , M = this.hf
                  , P = new F(L.x + (M.x - L.x) * I,L.y + (M.y - L.y) * I,0,1);
                p ? (P = new F(this.Yi / 2,this.Xi / 2,0,1),
                w = 1,
                this.kb.vb.x = .5,
                this.kb.vb.y = .5) : (0 < this.Od.x && (this.kb.vb.x = I),
                0 > this.Od.x && (this.kb.vb.x = 1 - I),
                0 < this.Od.y && (this.kb.vb.y = I),
                0 > this.Od.y && (this.kb.vb.y = 1 - I));
                let V = this.kb.i;
                V.x = P.x;
                V.y = P.y;
                if (1 == w) {
                    this.ky = this.vk = !1;
                    this.Wj = 2;
                    this.sh = 0;
                    let G = this.pc;
                    G.x = this.hf.x;
                    G.y = this.hf.y
                }
                break;
            case 2:
                this.Gn += a;
                let N = 2 != this.Ea ? this.ra : this.ba;
                this.sh += .05;
                1 < this.sh && (this.sh = 1);
                if (p) {
                    let G = this.kb.vb;
                    G.x = .5;
                    G.y = .5;
                    let R = this.kb.i;
                    R.x = this.Yi / 2;
                    R.y = this.Xi / 2
                } else {
                    if (0 != this.Od.x) {
                        let G = this.kb.fK(N.i.x, N.i.y);
                        100 > G ? G = 100 : 300 < G && (G = 300);
                        100 >= G && (this.sh = 1);
                        this.pc.x += (N.i.x - this.pc.x) * Ma(G, 100, 300, .5, .1) * this.sh;
                        let R = Math.min(this.Jg.x, this.hf.x)
                          , la = Math.max(this.Jg.x, this.hf.x);
                        this.pc.x < R && (this.pc.x = R);
                        this.pc.x > la && (this.pc.x = la);
                        this.kb.i.x = this.pc.x;
                        this.kb.vb.x = Ma(this.pc.x, R, la, 0, 1)
                    }
                    if (0 != this.Od.y) {
                        let G = this.kb.eK(N.i.x, N.i.y);
                        100 >= G && (this.sh = 1);
                        100 > G ? G = 100 : 300 < G && (G = 300);
                        this.pc.y += (N.i.y - this.pc.y) * Ma(G, 100, 300, .5, .1) * this.sh;
                        let R = Math.min(this.Jg.y, this.hf.y)
                          , la = Math.max(this.Jg.y, this.hf.y);
                        this.pc.y < R && (this.pc.y = R);
                        this.pc.y > la && (this.pc.y = la);
                        this.kb.i.y = this.pc.y;
                        this.kb.vb.y = Ma(this.pc.y, R, la, 0, 1)
                    }
                }
            }
            this.kb.update();
            let v = this.Cc.length
              , u = this;
            if (0 < v) {
                let w = !1
                  , I = !1
                  , L = !1
                  , M = 0
                  , P = this.ic;
                for (; M < P.length; )
                    P[M++].xz = !0;
                let V = 0;
                for (; V < v; ) {
                    let N = this.Cc[V++];
                    if (null == N)
                        continue;
                    N.update(a);
                    let G = N.Ta;
                    if (this.Ud.Dh() && null != G && -1 == G.ec)
                        this.kj(!0);
                    else {
                        null != N.nb && null != G && (G.nc.i.x = N.x,
                        G.nc.i.y = N.y,
                        G.nc.Cg.zb(G.nc.i));
                        if (null != G) {
                            if (-1 != G.ec && 0 == G.og) {
                                N.Ps();
                                continue
                            }
                            G.update(a * this.kl);
                            N.af && (1 == this.Wj || this.vk || N.gP(a),
                            -1 == N.vj && this.vO(N))
                        }
                        if (-1 != N.V && null == N.Ta) {
                            let R = function(U, aa) {
                                return (new t(aa.x,aa.y)).Se(U.i) <= aa.V + Kb.Rr ? (U = new Kd(u.oa(5),null,aa.x,aa.y,U,U.i.x,U.i.y,aa.V + Kb.Rr),
                                U.nc.Cg.zb(U.nc.i),
                                aa.Om = !0,
                                aa.DB(U),
                                z.play(z.DG),
                                null != aa.nb && z.play(z.qG),
                                !0) : !1
                            };
                            2 != this.Ea ? (this.xd || R(this.ra, N) && this.am(),
                            this.yd || null != N.Ta || R(this.Da, N) && this.am()) : R(this.ba, N) && this.am();
                            let la = 0
                              , Aa = this.ic;
                            for (; la < Aa.length; )
                                R(Aa[la++].Ra, N)
                        }
                        if (null != G) {
                            let R = G.wa[G.wa.length - 1]
                              , la = !1;
                            w || (2 != this.Ea ? R != this.ra || this.xd || I ? R != this.Da || this.yd || L || (la = !0) : la = !0 : this.tc || w || (la = !0));
                            if (0 != G.uu && -1 == G.ec && la) {
                                let Aa = t.Xa(G.nc.i, R.i).Tk() * ad;
                                if (2 != this.Ea) {
                                    let U = R == this.ra ? this.Db : this.Eb;
                                    G.mm || (G.yg = U.rotation - Aa);
                                    R == this.ra ? (this.$m = Aa + G.yg - U.rotation,
                                    I = !0) : (this.an = Aa + G.yg - U.rotation,
                                    L = !0);
                                    this.O.rotation = Aa + G.yg;
                                    U.rotation = Aa + G.yg
                                } else
                                    G.mm || (G.yg = this.O.rotation - Aa),
                                    this.O.If = Aa + G.yg - this.O.rotation,
                                    this.O.rotation = Aa + G.yg,
                                    w = !0;
                                G.mm = !0
                            } else
                                G.mm = !1
                        }
                    }
                }
                2 != this.Ea ? (I || this.xd || (this.Db.rotation += Math.min(5, this.$m),
                this.$m *= .98),
                L || this.yd || (this.Eb.rotation += Math.min(5, this.an),
                this.an *= .98)) : w || this.tc || (this.O.rotation += Math.min(5, this.O.If),
                this.O.If *= .98)
            }
            let y = 0
              , B = this.ic;
            for (; y < B.length; ) {
                let w = B[y];
                ++y;
                w.xz || (w.rotation += Math.min(5, w.If),
                w.If *= .98)
            }
            if (this.ad) {
                let w = 0
                  , I = this.ic;
                for (; w < I.length; ) {
                    let P = I[w];
                    ++w;
                    let V = P.Ra;
                    t.od(V.i.x, V.i.y, this.Pa.x, this.Pa.y) < P.Lz ? this.Pa.Oq(!0) : this.Pa.Oq(!1);
                    let N = 0
                      , G = this.Sb;
                    for (; N < G.length; ) {
                        let R = G[N];
                        ++N;
                        R.Oq(t.od(V.i.x, V.i.y, R.x, R.y) < P.Lz)
                    }
                }
                let L = 0
                  , M = this.ic;
                for (; L < M.length; ) {
                    let P = M[L];
                    ++L;
                    if (null != P.xc)
                        continue;
                    let V = 2 * Kb.Rr;
                    2 == this.Ea && (this.tc || null != this.O.xc || this.bz(P.Ra, this.ba, V));
                    let N = 0
                      , G = this.ic;
                    for (; N < G.length; ) {
                        let R = G[N];
                        ++N;
                        P != R && null == R.xc && this.bz(P.Ra, R.Ra, V)
                    }
                }
            }
            if (0 < a) {
                let w = a;
                for (; 0 <= w; )
                    w -= .01,
                    this.Tb.update(Math.min(.01, w)),
                    this.Tb.$j(this.bubbles),
                    this.Tb.$j(this.Sb),
                    this.Tb.$j(this.ri),
                    this.Tb.$j(this.Qg),
                    this.Tb.$j(this.bi),
                    this.Tb.$j(this.Qh)
            }
            this.tc || (this.O.update(a),
            this.nh -= a,
            0 >= this.nh && (this.Ud.Dh() || this.ba.update(a * this.kl)));
            if (2 != this.Ea) {
                let w = a * this.kl;
                this.nh -= a;
                this.Db.update(a);
                0 >= this.nh && this.ra.update(w);
                this.Eb.update(a);
                0 >= this.nh && this.Da.update(w);
                if (1 == this.Ea) {
                    let I = 0;
                    for (; 30 > I; )
                        ++I,
                        this.ra.Fq(),
                        this.Da.Fq()
                }
                if (0 < this.Nh) {
                    let I = Na.$i(this.Nh, 0, 200, a);
                    this.Nh = I.value;
                    if (I.jj) {
                        z.play(z.sG);
                        this.Ea = 2;
                        this.tc = !1;
                        this.yd = this.xd = !0;
                        let L = !1
                          , M = !1
                          , P = 0
                          , V = this.Ze;
                        for (; P < V.length; ) {
                            let aa = V[P];
                            ++P;
                            null != aa && (null != this.dc && aa.$ == this.dc && (L = !0),
                            null != this.Wb && aa.$ == this.Wb && (M = !0))
                        }
                        if (null != this.dc && null != this.Wb && L && M)
                            this.MB = !0;
                        else if (null == this.dc || !L)
                            if (null == this.Wb || !M)
                                if (null != this.dc || null != this.Wb) {
                                    let aa = 0
                                      , $a = this.Ze;
                                    for (; aa < $a.length; ) {
                                        let wb = $a[aa];
                                        ++aa;
                                        null != wb && (null != this.dc && wb.$ == this.dc && (wb.Af = !0,
                                        wb.Sh(1)),
                                        null != this.Wb && wb.$ == this.Wb && (wb.Af = !0,
                                        wb.Sh(1)))
                                    }
                                }
                        if (null != this.dc || null != this.Wb)
                            this.Lc = null != this.dc ? this.dc : this.Wb,
                            this.ti.show(),
                            this.ui.wg(),
                            this.vi.wg();
                        this.an = this.$m = this.O.If = 0;
                        this.ba.i.x = this.ra.i.x;
                        this.ba.i.y = this.ra.i.y;
                        this.O.x = this.ba.i.x;
                        this.O.y = this.ba.i.y;
                        let N = t.Xa(this.ra.i, this.ra.qa)
                          , G = t.Xa(this.Da.i, this.Da.qa)
                          , R = new t((N.x + G.x) / 2,(N.y + G.y) / 2);
                        this.ba.qa.zb(this.ba.i);
                        this.ba.qa.mv(R);
                        let la = 0
                          , Aa = this.Cc;
                        for (; la < Aa.length; ) {
                            let aa = Aa[la++].Ta;
                            if (null != aa && aa.ec != aa.wa.length - 3 && (aa.yb == this.ra || aa.yb == this.Da)) {
                                let $a = aa.wa[aa.wa.length - 2]
                                  , wb = aa.yb.Ig($a);
                                this.ba.Mj($a, wb, 0);
                                aa.yb = this.ba;
                                aa.wa[aa.wa.length - 1] = this.ba;
                                aa.yg = 0;
                                aa.mm = !1
                            }
                        }
                        this.Db.S.H();
                        this.Eb.S.H();
                        let U = new A(null,r.O,k.pE);
                        this.oa(10).R(U.B);
                        U.m(this.O.x);
                        U.s(this.O.y);
                        U.F();
                        U.ka().AA($i)
                    } else
                        this.ra.Lo(this.Da, this.Nh),
                        this.Da.Lo(this.ra, this.Nh)
                }
                this.xd || this.yd || 0 != this.Ea || (this.tl(this.ra, this.Db),
                this.tl(this.Da, this.Eb),
                xa.Xm(this.Db, this.Eb) && (this.Ea = 1,
                this.Nh = this.ra.i.Se(this.Da.i),
                this.ra.Mj(this.Da, this.Nh, 1),
                this.Da.Mj(this.ra, this.Nh, 1)))
            }
            let x = 0
              , H = this.ic;
            for (; x < H.length; ) {
                let w = H[x];
                ++x;
                w.update(a);
                w.Ra.update(a * this.kl);
                let I = 0;
                for (; 30 > I; )
                    ++I,
                    w.Ra.Fq()
            }
            this.Pa.update(a);
            0 <= this.xp && (this.xp -= a,
            0 > this.xp && !this.ad && this.Pa.zM());
            0 <= this.Io && (this.Io -= a,
            0 > this.Io && this.O.vM());
            if (!this.vk) {
                let w = 0
                  , I = this.Sb;
                for (; w < I.length; ) {
                    let L = I[w];
                    ++w;
                    L.update(a);
                    if (0 < L.timeout && 0 == L.time) {
                        this.Tb.remove(L);
                        ua.remove(this.Sb, L);
                        let M = L.l;
                        M.Yc(0).Yb().alpha(0, .25);
                        M.Yc(1).Yb().scale(0, .25);
                        M.Yc(2).Yb().scale(0, .25, null, null, O(L, L.H));
                        break
                    } else {
                        let M = !1;
                        2 != this.Ea ? (this.tl(this.ra, this.Db),
                        this.tl(this.Da, this.Eb),
                        M = xa.Xm(this.Db, L) && !this.xd || xa.Xm(this.Eb, L) && !this.yd) : (this.tl(this.ba, this.O),
                        M = xa.Xm(this.O, L) && !this.tc);
                        this.ad && L.Zd || !this.ad || (M = !1);
                        if (M) {
                            this.O.wM();
                            this.Nn++;
                            this.St.ku(this.Nn);
                            let P = new A(null,r.kd,k.hF);
                            P.m(L.x);
                            P.s(L.y);
                            P.J(.4);
                            P.ka().AA(aj);
                            P.F();
                            this.Xh.R(P.B);
                            L.H();
                            this.Tb.remove(L);
                            ua.remove(this.Sb, L);
                            z.play([1013, 1012, 1011][this.Nn - 1]);
                            this.Pa.SK() && this.Pa.BA();
                            break
                        }
                    }
                }
            }
            let D = 0
              , Z = this.bubbles;
            for (; D < Z.length; ) {
                let w = Z[D];
                ++D;
                w.update(a);
                if (!w.hq)
                    if (2 != this.Ea) {
                        if (!this.xd && this.Et(w, this.Db, this.dc, this.ui)) {
                            this.dc = w;
                            break
                        }
                        if (!this.yd && this.Et(w, this.Eb, this.Wb, this.vi)) {
                            this.Wb = w;
                            break
                        }
                    } else if (!this.tc && this.Et(w, this.O, this.Lc, this.ti)) {
                        this.Lc = w;
                        break
                    }
                let I = 0
                  , L = this.ic;
                for (; I < L.length; ) {
                    let M = L[I];
                    ++I;
                    if (!w.hq && Q.gj(M.x, M.y, w.x - 34, w.y - 34, 68, 68)) {
                        let P = !1
                          , V = 0
                          , N = this.Ze;
                        for (; V < N.length; ) {
                            let G = N[V];
                            ++V;
                            G.$ == w && (G.Af = !1,
                            P = !0)
                        }
                        if (null == M.$ || !P) {
                            if (null != M.$) {
                                this.cl(w.x, w.y);
                                let G = 0
                                  , R = this.Ze;
                                for (; G < R.length; ) {
                                    let la = R[G];
                                    ++G;
                                    la.$ == M.$ && (la.Af = !0,
                                    la.Sh(1))
                                }
                                M.$ = null
                            }
                            M.$ = w;
                            M.gm.show();
                            z.play(z.Bw);
                            w.pop()
                        }
                    }
                }
                if (!w.HC) {
                    let M = this.lc.length
                      , P = 0;
                    for (; P < M; ) {
                        let V = this.lc[P++];
                        t.od(w.x, w.y, V.x, V.y) < V.ge && (w.HC = !0)
                    }
                }
            }
            let Y = 0
              , T = this.$n;
            for (; Y < T.length; )
                T[Y++].update(a);
            let ba = 0
              , sa = this.Zn;
            for (; ba < sa.length; )
                sa[ba++].update(a);
            let ma = -1
              , ca = 0
              , pa = this.lc.length;
            for (; ca < pa; ) {
                let w = this.lc[ca]
                  , I = 0;
                for (; I < v; ) {
                    let P = this.Cc[I++]
                      , V = w.pe.indexOf(P);
                    t.od(P.x, P.y, w.x, w.y) <= w.ge + 5 * this.fa ? 0 > V && w.pe.push(P) : 0 <= V && ua.remove(w.pe, P)
                }
                let L = this.bubbles.length
                  , M = 0;
                for (; M < L; ) {
                    let P = this.bubbles[M++]
                      , V = w.pe.indexOf(P);
                    t.od(P.x, P.y, w.x, w.y) <= w.ge + 10 * this.fa ? 0 > V && w.pe.push(P) : 0 <= V && ua.remove(w.pe, P)
                }
                w.cN && (ma = ca);
                w.update(a);
                ++ca
            }
            0 <= ma && (this.lc[ma].H(),
            this.lc.splice(ma, 1));
            let ya = 0
              , na = this.Qg;
            for (; ya < na.length; ) {
                let w = na[ya];
                ++ya;
                w.update(a);
                let I = Na.$i(w.Ep, 0, 1, a);
                w.Ep = I.value;
                I.jj && (w.state = 0);
                let L = w.rotation;
                w.rotation = 0;
                w.nd();
                w.rotation = L;
                w.nd();
                let M = function(G) {
                    let R = 2 * Wa.Gj;
                    return Q.Ui(w.Lb.x, w.Lb.y, w.Mb.x, w.Mb.y, G.i.x - Wa.Gj, G.i.y - Wa.Gj, R, R)
                }
                  , P = function(G) {
                    let R = 2 * Wa.Gj;
                    return Q.Ui(w.Vc.x, w.Vc.y, w.Wc.x, w.Wc.y, G.i.x - Wa.Gj, G.i.y - Wa.Gj, R, R)
                };
                if (0 != w.state)
                    continue;
                if (2 == this.Ea && null == this.O.xc) {
                    let G = this.ba.ed.ub();
                    G.rotate(-L * Fa);
                    if (0 <= G.y && (M(this.ba) || P(this.ba))) {
                        let R = 0
                          , la = this.Qg.length;
                        for (; R < la; ) {
                            let Aa = this.Qg[R++];
                            if (Aa != w && Aa.group == w.group) {
                                Aa.state = 1;
                                Aa.Ep = .8;
                                this.kj(!1);
                                this.O.Hu = .9 * this.ba.$a.rc() * oa.ww;
                                this.O.xc = Aa;
                                w.Zb.N(!0);
                                w.Zb.ka().play(Og);
                                z.play(z.Cw);
                                let U = this
                                  , aa = this.O;
                                this.delay(function() {
                                    U.gC(aa)
                                }, .1);
                                break
                            }
                        }
                    }
                }
                let V = 0
                  , N = this.ic;
                for (; V < N.length; ) {
                    let G = N[V];
                    ++V;
                    if (null != G.xc)
                        continue;
                    let R = G.Ra.ed.ub();
                    R.rotate(-L * Fa);
                    if (0 <= R.y && M(G.Ra) || P(G.Ra)) {
                        let la = 0
                          , Aa = this.Qg.length;
                        for (; la < Aa; ) {
                            let U = this.Qg[la++];
                            if (U != w && U.group == w.group) {
                                U.state = 1;
                                U.Ep = .8;
                                this.YM(G);
                                G.Hu = .9 * G.Ra.$a.rc();
                                G.xc = U;
                                w.Zb.N(!0);
                                w.Zb.ka().play(Og);
                                z.play(z.Cw);
                                let aa = this
                                  , $a = G;
                                this.delay(function() {
                                    aa.gC($a)
                                }, .1);
                                break
                            }
                        }
                    }
                }
            }
            let fa = 0
              , Ya = this.Ze;
            for (; fa < Ya.length; )
                Ya[fa++].update(a);
            let jb = 0
              , Oa = this.Qh;
            for (; jb < Oa.length; ) {
                let w = Oa[jb];
                ++jb;
                w.update(a);
                let I = Na.$i(w.Vn, 0, 1, a);
                w.Vn = I.value;
                I.jj && this.nM(w, a)
            }
            let kb = 0
              , Rd = this.bi;
            for (; kb < Rd.length; ) {
                let w = Rd[kb];
                ++kb;
                null != w && (w.update(a),
                3 != w.he && this.oM(w, a))
            }
            let dd = 0
              , Sd = this.Ck;
            for (; dd < Sd.length; ) {
                let w = Sd[dd];
                ++dd;
                if (null != w && (w.update(a),
                !this.xk && 0 == w.Ri && 32 > t.od(this.ba.i.x, this.ba.i.y, w.x, w.y))) {
                    this.xk = !0;
                    this.O.bg = !1;
                    this.O.l.Yb().scale(.3, .1);
                    this.O.l.Yb().alpha(0, .1);
                    this.O.l.Yb().KC(w.x, w.y);
                    this.kj(!1);
                    null != this.Lc && this.hj(this.Lc, !1);
                    let I = this.ba
                      , L = w;
                    this.delay(function() {
                        L.Ox(I)
                    }, .05);
                    this.uC(3)
                }
            }
            let ed = 0
              , ni = this.Fe;
            for (; ed < ni.length; ) {
                let w = ni[ed];
                ++ed;
                w.update(a);
                if ((!w.Te || w.ap) && !this.xk) {
                    let I = !1
                      , L = !1;
                    2 != this.Ea ? (I = !this.xd && d(w, this.ra)) ? L = !0 : I = !this.yd && d(w, this.Da) : I = !this.tc && d(w, this.ba);
                    if (I) {
                        2 != this.Ea ? L ? null != this.dc && this.hj(this.dc, !0) : null != this.Wb && this.hj(this.Wb, !1) : null != this.Lc && this.hj(this.Lc, !1);
                        let M = new bf(this,5);
                        this.Bs.push(M);
                        null == this.ud || this.Ah || (M.vb.y = -500,
                        M.angle = 90);
                        2 != this.Ea ? L ? (M.x = this.Db.x,
                        M.y = this.Db.y,
                        this.xd = !0) : (M.x = this.Eb.x,
                        M.y = this.Eb.y,
                        this.yd = !0) : (M.x = this.O.x,
                        M.y = this.O.y,
                        this.tc = !0,
                        this.O.H());
                        M.Pn(5);
                        z.play(z.rG);
                        this.kj(L);
                        if (this.il)
                            return;
                        this.delay(O(this, this.et), .3);
                        return
                    }
                }
            }
            let Fh = 0
              , oi = this.ri;
            for (; Fh < oi.length; ) {
                let w = oi[Fh];
                ++Fh;
                w.update(a);
                let I = t.Xa(new t(w.x,w.y), w.kq)
                  , L = I.rc()
                  , M = 1
                  , P = new t(0,0);
                1 <= L && (M = L | 0,
                P = t.so(I, M));
                let V = new t(0,0)
                  , N = !1
                  , G = !1;
                if (2 != this.Ea) {
                    N = !1;
                    let U = 0
                      , aa = M;
                    for (; U < aa; ) {
                        let $a = t.pd(P, U++);
                        if (N = N || c(w, $a, this.ra)) {
                            V = $a.ub();
                            break
                        }
                    }
                    if (N = N && !this.xd)
                        G = !0;
                    else {
                        N = !1;
                        let $a = 0
                          , wb = M;
                        for (; $a < wb; ) {
                            let pi = t.pd(P, $a++);
                            if (N = N || c(w, pi, this.Da)) {
                                V = pi.ub();
                                break
                            }
                        }
                        N = N && !this.yd
                    }
                } else {
                    N = !1;
                    let U = 0
                      , aa = M;
                    for (; U < aa; ) {
                        let $a = t.pd(P, U++);
                        (N = N || c(w, $a, this.ba)) && (V = $a.ub())
                    }
                    N = N && !this.tc
                }
                let R = function(U) {
                    U.i.x += I.x - V.x;
                    U.i.y += I.y - V.y;
                    U.qa.x += I.x - V.x;
                    U.qa.y += I.y - V.y
                };
                N ? 2 != this.Ea ? G ? (R(this.ra),
                this.zp(w, this.ra, a)) : (R(this.Da),
                this.zp(w, this.Da, a)) : (R(this.ba),
                this.zp(w, this.ba, a)) : w.Zq = !1;
                N = !1;
                let la = 0
                  , Aa = this.ic;
                for (; la < Aa.length; ) {
                    let U = Aa[la];
                    ++la;
                    N = !1;
                    let aa = 0
                      , $a = M;
                    for (; aa < $a; ) {
                        let wb = aa++;
                        N = N || c(w, t.pd(P, wb), U.Ra)
                    }
                    N ? (R(U.Ra),
                    this.zp(w, U.Ra, a)) : w.Zq = !1
                }
                w.Tx()
            }
            this.Ud.update(a);
            !this.Ud.Dh() && this.Ud.ys(this.ba) && (this.Ud.Ds(this.ba),
            this.kj(!0),
            this.O.If = 0,
            this.uC(4));
            let Zi = ib.OC * (null == this.ud || this.Ah ? 1 : -1)
              , mi = ib.NC;
            0 == this.Ea && (null != this.dc && b(this.ra),
            null != this.Wb && b(this.Da));
            if (1 == this.Ea) {
                if (null != this.dc || null != this.Wb)
                    b(this.ra),
                    b(this.Da)
            } else
                null == this.Lc || this.Ud.Dh() || b(this.ba);
            let Gh = 0
              , qi = this.ic;
            for (; Gh < qi.length; ) {
                let w = qi[Gh];
                ++Gh;
                null != w.$ && b(w.Ra)
            }
            let Tg;
            if (!this.tc && !this.Up) {
                if (this.au)
                    0 < this.nn && (this.nn = Na.Qk(this.nn, 0, 1, a),
                    0 >= this.nn && (Tg = new t(this.Pa.x,this.Pa.y),
                    this.ba.i.Se(Tg) > Sb.nw ? (this.au = !1,
                    this.Pa.CM(),
                    z.play(z.yG)) : this.nn = 1));
                else {
                    let w = !0;
                    this.xk ? w = !1 : this.ad && !this.Pa.Zd && (w = !1);
                    w && (Tg = new t(this.Pa.x,this.Pa.y),
                    this.ba.i.Se(Tg) < Sb.nw && (this.au = !0,
                    this.Pa.DM(),
                    z.play(z.zG),
                    this.nn = 1))
                }
                if (!this.il && !this.Nx && (!this.ad || this.ad && this.Pa.Zd) && this.vJ(this.O, this.Lc, this.Pa, this.ba)) {
                    this.tc = this.Nx = !0;
                    this.uh();
                    return
                }
            }
            let Hh = 2 == this.Ea && this.Oh(this.ba) && !this.tc
              , Ih = 2 != this.Ea && !this.xd && this.Oh(this.ra)
              , Jh = 2 != this.Ea && !this.yd && this.Oh(this.Da)
              , Ug = this.ad;
            if (!this.Up) {
                let w = 0
                  , I = this.ic;
                for (; w < I.length; )
                    if (!this.Oh(I[w++].Ra)) {
                        Ug = !1;
                        break
                    }
            }
            !this.bq || Hh || Ih || Jh || Ug || (this.bq = !1);
            if (1 != this.Wj && !this.bq && (Hh || Ih || Jh || Ug)) {
                let w = !1;
                if (2 == this.Ea && this.tc || 2 != this.Ea && (this.xd || this.yd) || this.Up)
                    w = !0;
                Hh && (this.tc = !0);
                Ih && (this.xd = !0);
                Jh && (this.yd = !0);
                Ug && (this.Up = !0);
                this.il || w || this.et()
            }
            if (1 == this.jd && !this.tc && null != this.Lc && this.O.y < oa.QC && this.O.x > oa.PC) {
                let w = this.jd = 0
                  , I = this.$n;
                for (; w < I.length; ) {
                    let P = I[w];
                    ++w;
                    1 == P.jd && P.show()
                }
                let L = 0
                  , M = this.Zn;
                for (; L < M.length; ) {
                    let P = M[L];
                    ++L;
                    1 == P.jd && P.show()
                }
            }
            this.qs.update();
            this.Xh.Rg(a)
        }
        Ic() {
            for (var a = 0, b = this.Bs; a < b.length; )
                b[a++].M();
            a = this.bl;
            null != a && a.M();
            this.Pa.M();
            a = 0;
            for (b = this.lc; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.bubbles; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Qh; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Fe; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.ri; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Qg; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Cc; a < b.length; )
                b[a++].kJ();
            a = 0;
            for (b = this.Cc; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Sb; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Ze; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.bi; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Ck; a < b.length; )
                b[a++].M();
            for (a = this.Tb.iterator(); a.fb(); )
                a.next().M();
            this.Ud.M();
            this.tc || (null == this.O.xc ? (this.O.x = this.ba.i.x,
            this.O.y = this.ba.i.y,
            this.O.visible = !0) : this.O.visible = !1);
            null != this.ti && (this.ti.m(this.O.x),
            this.ti.s(this.O.y));
            2 != this.Ea ? (this.xd ? this.Db.S.N(!1) : (this.Db.x = this.ra.i.x,
            this.Db.y = this.ra.i.y,
            this.Db.M()),
            null != this.ui && (this.ui.m(this.Db.x),
            this.ui.s(this.Db.y)),
            this.yd ? this.Eb.S.N(!1) : (this.Eb.x = this.Da.i.x,
            this.Eb.y = this.Da.i.y,
            this.Eb.M()),
            null != this.vi && (this.vi.m(this.Eb.x),
            this.vi.s(this.Eb.y)),
            this.O.visible = !1) : null == this.O.xc && (this.O.visible = !0);
            this.O.M();
            a = 0;
            for (b = this.ic; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.$n; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Zn; a < b.length; )
                b[a++].M();
            this.Xh.md();
            this.Xh.vl();
            this.X.P.RM(this.kb.jb);
            this.X.P.Yo(this.Xh);
            this.X.P.LM()
        }
    }
    oa.g = !0;
    oa.u = ia;
    Object.assign(oa.prototype, {
        j: oa
    });
    class tf {
        constructor() {
            this.loaded = !1;
            this.size = new Sa(0,0);
            this.name = this.data = null
        }
    }
    tf.g = !0;
    Object.assign(tf.prototype, {
        j: tf
    });
    class uf {
        constructor() {
            this.size = new Sa(0,0);
            this.P = null
        }
        CB(a) {
            this.P = a
        }
        BN(a, b) {
            let c = this.size;
            c.x = a;
            c.y = b
        }
    }
    uf.g = !0;
    Object.assign(uf.prototype, {
        j: uf
    });
    class Td extends uf {
        constructor() {
            super();
            this.Cd = new Sa(0,0);
            this.Id = new Ud;
            this.visible = !0;
            this.Du = this.kp = !1
        }
        Of(a, b) {
            return this.Id.Of(a, b)
        }
        Km() {
            let a = this.P.viewport
              , b = this.Cd.x
              , c = this.Cd.y;
            return new Eb(a.x * b | 0,a.y * c | 0,a.w * b | 0,a.G * c | 0)
        }
        zh() {
            let a = this.P.viewport;
            return new Sa(this.Cd.x * a.w | 0,this.Cd.y * a.G | 0)
        }
    }
    Td.g = !0;
    Td.u = uf;
    Object.assign(Td.prototype, {
        j: Td
    });
    class fd {
        constructor(a) {
            this.name = a;
            this.info = new Vg(this);
            this.Qe = null;
            this.JL = 256;
            this.aL = .001;
            this.jb = this.Ab = null;
            this.Lx = [];
            this.clearColor = new F(0,0,0,1);
            this.Xx = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.XI = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.viewport = new Eb(0,0,1,1);
            this.Zo = Array(1056);
            this.ek = Array(1056);
            this.kP = !0;
            this.wq = Array(7);
            this.pg = Array(7);
            this.Zl = Kh.ID[7];
            this.Tc = 0;
            this.qv = [];
            this.Jv = new tb;
            this.pg[0] = new Vd(1,!0);
            this.pg[1] = new wc;
            this.pg[2] = new dc;
            this.pg[3] = new vf(!0,!0);
            this.pg[4] = new wf(!1,1);
            this.pg[5] = new Xb(1);
            this.pg[6] = new xf
        }
        Kn(a) {
            null != this.Ab && this.Ab.CB(null);
            this.Ab = a;
            this.Ab.CB(this)
        }
        CN(a) {
            let b = this.clearColor;
            b.x = a.x;
            b.y = a.y;
            b.z = a.z;
            b.w = a.w
        }
        nj(a) {
            this.jb = a
        }
        RM(a) {
            this.Lx.push(this.jb);
            this.nj(a)
        }
        LM() {
            this.nj(this.Lx.pop())
        }
        hl() {
            this.qj(0, 0, 1, 1)
        }
        qj(a, b, c, d) {
            let e = this.viewport;
            e.x = a;
            e.y = b;
            e.w = c - a;
            e.G = d - b
        }
        Ih() {
            if (null == this.Ab || null == this.Ab.getContext() || 0 == this.Ab.size.x * this.Ab.size.y)
                return !1;
            this.jN();
            return !0
        }
        ph() {}
        Yo(a) {
            let b = this.Jv;
            b.clear();
            b.gf(Ka.count);
            Ea.WJ(a, b);
            0 < b.Z && this.Ss(b)
        }
        clear() {}
        jN() {
            this.Tc = 0;
            let a = this.Zl
              , b = 0;
            for (; 7 > b; ) {
                let c = b++;
                this.wq[c] = this.pg[c];
                0 != (a & 1 << c) && this.wq[c].set(this)
            }
        }
        Ss(a) {
            let b = a.K
              , c = 0;
            for (a = a.Z; c < a; )
                this.dk(b[c++])
        }
        dk(a) {
            let b = a.effect;
            null != b && b.enabled && 1 != a.qe && (this.Qe = a,
            this.Kg(a),
            this.wm(b))
        }
        rK() {
            return this.qv.slice()
        }
        createTexture(a, b, c, d) {
            null == b && (b = 0);
            b = this.zt(b);
            this.qv.push(b);
            b.name = d;
            b.Qu(a);
            null != c && b.yN(c);
            return b
        }
        Wx(a, b, c) {
            let d = this.zt(a.flags);
            d.name = null == c ? "-" : c;
            a.pa(d, b.clone());
            null != c && (a = a.Nb.Xe(c),
            d.Nb.offset(a.sd.x, a.sd.y))
        }
        ga(a) {
            a.H();
            ua.remove(this.qv, a)
        }
        Dy(a, b) {
            a = 32 * (b / 100 | 0) + (a / 100 | 0);
            b = this.Zo[a];
            null == b || this.ek[a] || (this.ek[a] = !0,
            b.Sa(this));
            return b
        }
        Ey(a, b) {
            a = 512 + 32 * (b / 100 | 0) + (a / 100 | 0);
            b = this.Zo[a];
            null == b || this.ek[a] || (this.ek[a] = !0,
            b.Sa(this));
            return b
        }
        Rc(a) {
            var b;
            null == b && (b = !1);
            let c = a.hy / 100 | 0;
            var d = a.Kv / 100 | 0;
            d = 512 * (b ? 1 : 0) + 32 * d + c;
            this.Zo[d] = a;
            let e = 201 == a.Kv;
            if (e) {
                let f = 0;
                for (; 16 > f; )
                    d = f++ + 1,
                    d = 512 * (b ? 1 : 0) + 32 * d + c,
                    this.Zo[d] = a
            }
            if (this.kP && (a.Sa(this),
            this.ek[d] = !0,
            e))
                for (a = 0; 16 > a; )
                    d = a++ + 1,
                    d = 512 * (b ? 1 : 0) + 32 * d + c,
                    this.ek[d] = !0
        }
        fJ() {
            this.Zl &= -9
        }
        Jm(a) {
            let b = this.Xx
              , c = this.jb.ij;
            0 < (a.I & 240) && a.ur();
            var d = a.xe;
            a = d.m11;
            var e = d.m12
              , f = d.m13
              , g = d.m14;
            let h = d.m21
              , m = d.m22
              , n = d.m23
              , q = d.m24
              , p = d.m31
              , v = d.m32
              , u = d.m33
              , y = d.m34
              , B = d.m41
              , x = d.m42
              , H = d.m43
              , D = d.m44;
            d = c.m11 * e + c.m12 * m + c.m13 * v + c.m14 * x;
            let Z = c.m11 * f + c.m12 * n + c.m13 * u + c.m14 * H
              , Y = c.m11 * g + c.m12 * q + c.m13 * y + c.m14 * D
              , T = c.m21 * e + c.m22 * m + c.m23 * v + c.m24 * x
              , ba = c.m21 * f + c.m22 * n + c.m23 * u + c.m24 * H
              , sa = c.m21 * g + c.m22 * q + c.m23 * y + c.m24 * D
              , ma = c.m31 * e + c.m32 * m + c.m33 * v + c.m34 * x
              , ca = c.m31 * f + c.m32 * n + c.m33 * u + c.m34 * H
              , pa = c.m31 * g + c.m32 * q + c.m33 * y + c.m34 * D;
            e = c.m41 * e + c.m42 * m + c.m43 * v + c.m44 * x;
            f = c.m41 * f + c.m42 * n + c.m43 * u + c.m44 * H;
            g = c.m41 * g + c.m42 * q + c.m43 * y + c.m44 * D;
            b.m11 = c.m11 * a + c.m12 * h + c.m13 * p + c.m14 * B;
            b.m12 = d;
            b.m13 = Z;
            b.m14 = Y;
            b.m21 = c.m21 * a + c.m22 * h + c.m23 * p + c.m24 * B;
            b.m22 = T;
            b.m23 = ba;
            b.m24 = sa;
            b.m31 = c.m31 * a + c.m32 * h + c.m33 * p + c.m34 * B;
            b.m32 = ma;
            b.m33 = ca;
            b.m34 = pa;
            b.m41 = c.m41 * a + c.m42 * h + c.m43 * p + c.m44 * B;
            b.m42 = e;
            b.m43 = f;
            b.m44 = g;
            return b
        }
        xh(a) {
            0 < (a.I & 64) && a.ul();
            var b = a.xe;
            a = b.m11;
            var c = b.m12
              , d = b.m14;
            let e = b.m21
              , f = b.m22
              , g = b.m24;
            b = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            let h = this.jb.ij
              , m = h.m11 * c + h.m12 * f
              , n = h.m11 * d + h.m12 * g + h.m14;
            c = h.m21 * c + h.m22 * f;
            d = h.m21 * d + h.m22 * g + h.m24;
            b.m11 = h.m11 * a + h.m12 * e;
            b.m12 = m;
            b.m14 = n;
            b.m21 = h.m21 * a + h.m22 * e;
            b.m22 = c;
            b.m24 = d;
            return b
        }
        wm(a) {
            a.update(this);
            let b = this.Dy(a.type, this.Qe.type);
            null != b && (this.info.effect = a,
            this.info.na = this.Qe,
            b.M(this.info))
        }
        vh(a) {
            return this.wq[a]
        }
        Kg(a) {
            if (0 != this.Zl) {
                for (var b = this.wq, c = 0, d = this.Zl, e = this.Tc; 7 > c; ) {
                    if (0 == (d & 1 << c)) {
                        ++c;
                        continue
                    }
                    let f = a.xj[c];
                    null != f ? f.Ma != b[c].Ma && (b[c] = f,
                    e |= 1 << c,
                    f.set(this)) : 0 < (e & 1 << c) && (f = this.pg[c],
                    b[c] = f,
                    f.set(this),
                    e &= ~(1 << c));
                    ++c
                }
                this.Tc = e
            }
        }
        Yu() {}
        pB() {}
        oB() {}
        Lu() {}
        Nu() {}
        Wu() {}
        Uy(a) {
            return -.001 * a.mb.translate.z
        }
    }
    fd.g = !0;
    Object.assign(fd.prototype, {
        j: fd
    });
    class Vg {
        constructor(a) {
            this.P = a;
            this.vx = this.na = this.effect = null
        }
    }
    Vg.g = !0;
    Object.assign(Vg.prototype, {
        j: Vg
    });
    class gd {
        constructor(a, b) {
            this.wd = 0;
            this.Be = 1;
            this.children = [];
            this.parent = null;
            this.name = "?";
            this.size = new Sa(0,0);
            this.image = this.Nb = null;
            this.id = gd.RL++;
            this.P = a;
            this.flags = b
        }
        tp() {
            return null != this.image ? this.image.loaded : !1
        }
        H() {
            if (null != this.P) {
                var a = this.Nb;
                null != a && a.H();
                a = 0;
                for (var b = this.children; a < b.length; )
                    b[a++].H();
                this.P = this.parent = this.Nb = this.image = this.children = null
            }
        }
        Qu(a) {
            null != this.image && (this.image.Cv(),
            this.wd++);
            this.image = a;
            var b = this.size;
            a = a.size;
            b.x = a.x;
            b.y = a.y;
            b = 0;
            for (a = this.children; b < a.length; ) {
                let c = a[b];
                ++b;
                c.image = this.image;
                let d = c.size
                  , e = this.size;
                d.x = e.x;
                d.y = e.y;
                c.wd = this.wd
            }
        }
        yN(a) {
            this.Nb = a;
            this.Be = 1 / a.scale
        }
        pa(a, b) {
            a.parent = this;
            this.children.push(a);
            a.Nb = b;
            a.image = this.image;
            b = a.size;
            let c = this.size;
            b.x = c.x;
            b.y = c.y;
            a.wd = this.wd;
            a.Be = this.Be
        }
    }
    gd.g = !0;
    Object.assign(gd.prototype, {
        j: gd
    });
    class Wb {
        constructor(a, b, c) {
            null == b && (b = 1);
            this.ct = new hd;
            this.frames = a.slice();
            this.scale = b;
            this.bo = c;
            b = [];
            for (c = 0; c < a.length; )
                b.push(a[c++].id);
            b.sort(function(d, e) {
                return d - e
            });
            b = b[b.length - 1];
            this.ik = Array(b);
            for (c = 0; c < b; )
                this.ik[c++] = null;
            for (b = 0; b < a.length; )
                c = a[b],
                ++b,
                this.ik[c.id] = c,
                this.ct.G[c.name] = c
        }
        H() {
            this.bo = this.frames = this.ct = this.ik = null
        }
        XJ(a) {
            return this.ik[a]
        }
        Xe(a) {
            return this.ct.G[a]
        }
        offset(a, b) {
            let c = 0
              , d = this.frames;
            for (; c < d.length; ) {
                let e = d[c];
                ++c;
                e.sd.x += a;
                e.sd.y += b
            }
        }
        clone() {
            let a = []
              , b = 0
              , c = this.frames;
            for (; b < c.length; )
                a.push(c[b++].clone());
            return new Wb(a,this.scale,this.bo)
        }
    }
    Wb.g = !0;
    Object.assign(Wb.prototype, {
        j: Wb
    });
    class Wd {
        constructor(a, b, c, d, e, f) {
            this.id = a;
            this.name = b;
            this.cc = c;
            this.sd = d;
            this.Xn = e;
            this.tr = f
        }
        clone() {
            let a = this.cc
              , b = this.sd;
            if (null != this.tr) {
                var c = this.tr;
                c = new Sa(c.x,c.y)
            } else
                c = null;
            return new Wd(this.id,this.name,new Sa(a.x,a.y),new Eb(b.x,b.y,b.w,b.G),this.Xn,c)
        }
    }
    Wd.g = !0;
    Object.assign(Wd.prototype, {
        j: Wd
    });
    class id {
    }
    id.g = !0;
    id.me = !0;
    class lb {
        constructor() {
            this.Zr = !1;
            this.object = null;
            this.Bz = !1;
            this.jx = !0;
            this.ck = !1;
            this.cd = 0;
            this.tv = 1;
            this.Md = this.Nf = this.al = 0;
            this.Hg = 1;
            this.next = null;
            this.type = this.ta();
            lb.bw++
        }
        ql(a) {
            this.Zr = a
        }
        H() {
            null != this.object && (this.object.detach(this),
            this.object = null);
            this.jx = !1;
            lb.bw--
        }
        On() {
            this.Bz || (this.ql(!1),
            this.ck = !0,
            this.cd = 0)
        }
        update(a) {
            return this.Zr ? (this.cd += a * this.tv,
            null == this.object ? !1 : this.Yk(this.cd)) : this.ck ? (this.cd += a,
            this.cd > lb.jD && this.H(),
            !0) : !1
        }
        jt() {
            var a = this.cd + this.al;
            if (0 == this.Hg) {
                var b = this.Md
                  , c = this.Nf;
                return a < b ? b : a > c ? c : a
            }
            b = this.Nf - this.Md;
            return 0 < b ? (c = (a - this.Md) / b,
            a = Math.floor(c),
            c -= a,
            1 == this.Hg ? this.Md + c * b : 0 == (a & 1) ? this.Md + c * b : this.Nf - c * b) : this.Md
        }
        ta() {
            return 103
        }
    }
    lb.g = !0;
    lb.sb = [id];
    Object.assign(lb.prototype, {
        j: lb
    });
    class Jd extends lb {
        constructor() {
            super();
            this.La = null;
            this.frame = -1;
            this.kn = this.Nk = this.xu = 0;
            this.Gh = -1;
            this.jp = this.ip = null
        }
        H() {
            this.jp = this.ip = this.La = null;
            super.H()
        }
        play(a, b, c) {
            null == b && (b = 0);
            this.La = a;
            null == c && (c = a.He - 1);
            this.Nk = b;
            this.kn = c;
            this.Md = a.rb[this.Nk];
            this.Nf = a.rb[this.kn + 1];
            this.cd = this.Md;
            this.ql(!0);
            this.ck = !1;
            this.frame = -1;
            this.Gh = this.Nk;
            this.Yk(this.cd);
            return this
        }
        MN(a) {
            this.ip = a
        }
        NN(a) {
            this.jp = a
        }
        stop() {
            this.La = null;
            this.ql(!1);
            this.xu = 0;
            this.On();
            return this
        }
        Yk() {
            var a = this.jt();
            let b, c = this.La.He;
            if (1 == c)
                b = this.Gh = 0;
            else if (a >= this.La.ai)
                b = this.Gh = c - 1;
            else {
                if (0 < this.La.Po)
                    b = a / this.La.Po | 0;
                else {
                    b = 0;
                    let d = this.La.rb;
                    if (a >= d[this.Gh] && a <= d[this.Gh + 1])
                        b = this.Gh;
                    else if (16 > c) {
                        let e = 0;
                        for (; e <= c; ) {
                            if (d[e] >= a) {
                                b = e - 1;
                                break
                            }
                            ++e
                        }
                    } else
                        b = Gb.tI(d, a, c - 1),
                        0 > b && (b = ~b,
                        --b)
                }
                this.Gh = b
            }
            b < this.Nk ? b = this.Nk : b > this.kn && (b = this.kn);
            b != this.frame && (this.frame = b,
            this.XL(this.La.data[b]),
            b >= this.kn && 0 == this.Hg && (0 < --this.xu ? (this.cd = this.Md,
            this.frame = -1,
            this.Gh = this.Nk,
            this.Yk(this.cd)) : (this.On(),
            a = this.La,
            this.La = null,
            this.YL(a))));
            return !0
        }
        XL(a) {
            null != this.ip && this.ip(this.La, a, this.frame)
        }
        YL(a) {
            null != this.jp && this.jp(a)
        }
        ta() {
            return 303
        }
    }
    Jd.g = !0;
    Jd.u = lb;
    Object.assign(Jd.prototype, {
        j: Jd
    });
    class Zc extends lb {
        constructor() {
            super();
            this.un = this.dj = null;
            this.lastIndex = 0;
            this.La = null
        }
        H() {
            this.un = this.dj = null;
            super.H()
        }
        play(a, b) {
            null == b && (b = 0);
            this.La = a;
            this.Hg = b;
            this.Md = this.cd = this.lastIndex = 0;
            this.Nf = a.ai;
            this.ql(!0);
            this.ck = !1;
            this.Yk(0)
        }
        stop() {
            this.dj = null;
            this.ql(!1);
            this.La = null;
            this.On()
        }
        Yk(a) {
            var b = this.jt();
            let c = this.La.rb, d;
            var e;
            if (b <= c[0])
                d = e = this.lastIndex = b = 0;
            else if (b >= c[this.La.He - 1])
                b = 0,
                d = e = this.lastIndex = this.La.He - 1;
            else if (b > c[this.lastIndex]) {
                for (e = this.lastIndex + 1; b >= c[e]; )
                    this.lastIndex = e,
                    ++e;
                d = this.lastIndex;
                b = (b - c[d]) / (c[e] - c[d])
            } else if (b < c[this.lastIndex]) {
                for (e = this.lastIndex - 1; b <= c[e]; )
                    this.lastIndex = e,
                    --e;
                d = e;
                e = this.lastIndex;
                b = (b - c[d]) / (c[e] - c[d])
            } else
                b = 0,
                d = e = this.lastIndex;
            null != this.un && this.un(this.La.data[d], this.La.data[e], b);
            a > this.Nf && 0 == this.Hg && (a = this.dj,
            this.stop(),
            null != a && a());
            return !0
        }
        ta() {
            return 403
        }
    }
    Zc.g = !0;
    Zc.u = lb;
    Object.assign(Zc.prototype, {
        j: Zc
    });
    class Xd extends lb {
        constructor() {
            super()
        }
        H() {
            this.Bg = this.Pf = this.easing = null;
            super.H()
        }
        zj(a, b, c, d, e) {
            this.key = a;
            this.wO = b;
            this.gy = c;
            this.easing = e;
            this.Md = this.cd = 0;
            this.Nf = d;
            this.ql(!0);
            this.ck = !1
        }
        stop() {
            this.Pf = this.Bg = null;
            this.On()
        }
        Yk(a) {
            if (a >= this.Nf && 0 == this.Hg)
                return this.On(),
                this.Pf(this.key, this.gy),
                this.Bg(this.key),
                !1;
            a = this.wO;
            a += (this.gy - a) * this.easing((this.jt() - this.Md) / (this.Nf - this.Md));
            this.Pf(this.key, a);
            return !0
        }
        ta() {
            return 203
        }
    }
    Xd.g = !0;
    Xd.u = lb;
    Object.assign(Xd.prototype, {
        j: Xd
    });
    class yf {
        constructor(a, b, c) {
            this.iP = c;
            this.jA = a;
            this.wJ = b;
            this.Uk = a * b;
            this.yi = !0
        }
        resize(a) {
            return a > this.jA ? (this.jA = a,
            this.yi = !0,
            this.Uk = a * this.wJ,
            !0) : !1
        }
    }
    yf.g = !0;
    Object.assign(yf.prototype, {
        j: yf
    });
    class Lh {
        constructor() {
            this.hu = 0;
            this.di = Array(6);
            let a = 0;
            for (; 6 > a; )
                this.di[a++] = []
        }
        getData(a) {
            return this.di[a]
        }
    }
    Lh.g = !0;
    Object.assign(Lh.prototype, {
        j: Lh
    });
    class Eb {
        constructor(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.w = c;
            this.G = d
        }
    }
    Eb.g = !0;
    Object.assign(Eb.prototype, {
        j: Eb
    });
    class da {
        constructor() {
            this.type = this.ta();
            this.enabled = !0;
            this.na = null;
            this.Ma = 0
        }
        H() {
            this.na = null
        }
        update() {}
        Ng(a) {
            this.na = a
        }
        ta() {
            return 105
        }
    }
    da.g = !0;
    da.sb = [id];
    Object.assign(da.prototype, {
        j: da
    });
    class jd extends da {
        constructor(a) {
            super();
            this.qb = a;
            this.iC = a.Be;
            this.charset = a.Nb.bo;
            this.text = null;
            this.clip = !1;
            this.fontSize = this.charset.xq;
            this.Wz = 4;
            this.KL = 512;
            this.size = new F(100,100,0,1);
            this.Jt = !0;
            this.Iz = !1;
            this.fN = 32;
            this.sC = this.Gz = 0;
            this.Li = 2;
            this.Pj = this.kg = null;
            this.Rx = 0;
            this.ze = !0;
            this.overflow = !1;
            this.ag = new Wg;
            this.multiline = !1;
            this.wd = 0
        }
        Ng(a) {
            super.Ng(a);
            a.ob(this.size.x, this.size.y)
        }
        Wa(a) {
            this.text != a && (this.text = a,
            this.multiline && this.Ax(),
            this.ze = !0)
        }
        pp() {
            return this.fontSize
        }
        zq() {
            this.fontSize = this.charset.xq
        }
        wc(a) {
            var b;
            null != b && (4 > b && (b = 4),
            this.Wz = b);
            b = this.Wz;
            let c = this.KL;
            a = a < b ? b : a > c ? c : a;
            a != this.fontSize && (this.fontSize = a,
            this.ze = !0)
        }
        qK() {
            let a = this.size;
            return new F(a.x,a.y,0,1)
        }
        Gb(a, b) {
            if (this.size.x != a || this.size.y != b)
                this.size.x = a,
                this.size.y = b,
                this.na.ob(this.size.x, this.size.y),
                this.ze = !0
        }
        nt() {
            return this.ag.fu
        }
        Pq(a) {
            this.Gz = a;
            this.ze = !0
        }
        $u(a) {
            this.sC = a;
            this.ze = !0
        }
        Rb(a, b) {
            this.kg = a;
            this.Pj = b;
            this.ze = !0
        }
        IJ(a) {
            null == a && (a = !0);
            if (null != this.text) {
                var b = 2 * this.Li
                  , c = this.size.x - b
                  , d = this.size.y - b;
                this.zq();
                b = d / this.charset.pi;
                this.ag.shape(this, !0);
                var e = this.ag.Qa;
                c = Math.min(c / (e.A - e.o), d / (e.D - e.C));
                a && (c = Math.min(b, c));
                this.fontSize *= c;
                this.shape()
            }
        }
        Lg(a) {
            (this.multiline = a) && null == this.Go && this.JN(new zf)
        }
        JN(a) {
            this.Go = a;
            null != this.text && this.Ax();
            this.ze = !0
        }
        shape() {
            this.ag.shape(this, !1);
            let a = this.ag.Qa;
            this.overflow = a.A - a.o > this.size.x - 2 * this.Li;
            this.ze = !1
        }
        update() {
            if (this.qb.wd > this.wd) {
                this.wd = this.qb.wd;
                this.charset = this.qb.Nb.bo;
                let a = this.qb.Be;
                this.fontSize *= this.iC / a;
                this.iC = a;
                null != this.na.tn && this.na.tn();
                this.ze = !0
            }
            this.ze && (this.ze = !1,
            this.shape())
        }
        H() {
            super.H();
            this.qb = null;
            this.ag.H();
            this.ag = null
        }
        Ax() {
            this.Go.bO(this.text);
            this.pv = [];
            let a = 0
              , b = this.Go.dA();
            for (; null != b; )
                this.pv.push(new Xg(this.text.substring(a, b.position),b.required)),
                a = b.position,
                b = this.Go.dA()
        }
        ta() {
            return 705
        }
    }
    jd.g = !0;
    jd.u = da;
    Object.assign(jd.prototype, {
        j: jd
    });
    class Xg {
        constructor(a, b) {
            this.text = a;
            this.zx = b
        }
    }
    Xg.g = !0;
    Object.assign(Xg.prototype, {
        j: Xg
    });
    class Wg {
        constructor() {
            this.cursor = new F(0,0,0,1);
            this.ng = new tb(32);
            this.fu = 1;
            this.Qa = new X(0,0,0,0);
            this.we = new tb(256)
        }
        H() {
            this.ng.dt();
            this.ng = null
        }
        shape(a, b) {
            null == b && (b = !1);
            let c = this.Qa;
            c.o = c.C = qa;
            c.A = c.D = ra;
            var d = a.text;
            if (null != d) {
                var e = d.length;
                if (null != e) {
                    d = this.we;
                    b || (d.gf(5 * e),
                    d.clear());
                    var f = a.charset;
                    e = a.fontSize / f.xq * a.qb.Be;
                    f = f.lineHeight * e + a.Gz * e;
                    var g = a.Li
                      , h = a.size.x
                      , m = a.Li
                      , n = this.cursor;
                    n.x = g;
                    n.y = g;
                    n = !b && null != a.kg;
                    var q = !b && null != a.Pj;
                    this.fu = 1;
                    if (a.multiline) {
                        b = new X(qa,qa,ra,ra);
                        let v = 0
                          , u = a.pv.length
                          , y = new X(qa,qa,ra,ra)
                          , B = 0
                          , x = 0;
                        for (; v < u; ) {
                            let H = a.pv[v++];
                            var p = this.yy(H.text, a);
                            this.cursor.x -= p.K[0].Qv * e;
                            let D = d.Z;
                            this.print(p, a, b);
                            p = d.Z;
                            let Z = b.A > h - m;
                            Z && b.A - b.o < h - 2 * m ? (n && (this.kg(a, y, B, x),
                            c.add(y)),
                            d.trim(D),
                            B = x = D,
                            y.o = y.C = qa,
                            y.A = y.D = ra,
                            --v) : (y.add(b),
                            x = p,
                            H.zx && n && (this.kg(a, y, B, p),
                            c.add(y),
                            y.o = y.C = qa,
                            y.A = y.D = ra,
                            B = p));
                            if (Z || H.zx)
                                this.cursor.x = g,
                                this.cursor.y += f,
                                this.fu++
                        }
                        n && (this.kg(a, y, B, x),
                        c.add(y))
                    } else {
                        f = this.yy(a.text, a);
                        if (0 == f.Z)
                            return;
                        this.cursor.x -= f.K[0].Qv * e;
                        this.print(f, a, c, b);
                        n && this.kg(a, c, 0, d.Z)
                    }
                    q && this.Pj(a, c, 0, d.Z)
                }
            }
        }
        kg(a, b, c, d) {
            let e = a.Li
              , f = a.size.x - 2 * e;
            for (a = 0 > a.kg ? -b.o + e : 0 == a.kg ? f / 2 - (b.o + b.A) / 2 + e : f - b.A + e; c < d; )
                this.we.K[c + 1] += a,
                c += 5;
            d = b.o + a;
            c = b.A - b.o;
            b.o = d;
            b.A = d + c
        }
        Pj(a, b) {
            var c = a.Li
              , d = a.size.y - 2 * c;
            a = 0 > a.Pj ? -b.C + c : 0 == a.Pj ? d / 2 - (b.C + b.D) / 2 + c : d - b.D + c;
            c = 0;
            for (d = this.we.Z / 5 | 0; c < d; )
                this.we.K[5 * c++ + 2] += a;
            a = b.C + a;
            c = b.D - b.C;
            b.C = a;
            b.D = a + c
        }
        print(a, b, c, d) {
            null == d && (d = !1);
            c.o = c.C = qa;
            c.A = c.D = ra;
            let e = b.charset
              , f = b.fontSize / e.xq * b.qb.Be
              , g = b.sC * f
              , h = 0
              , m = a.Z;
            for (var n = 0; h < m; ) {
                var q = a.K[h++]
                  , p = this.cursor.x + q.Qv * f
                  , v = this.cursor.y + q.oP * f;
                let y = q.width * f
                  , B = q.height * f
                  , x = 0;
                b.Jt && (n = e.Jt.G[q.id << 16 | n],
                null != n && (x = n),
                x *= f,
                n = q.id,
                p += x);
                if (!d) {
                    var u = this.we;
                    u.K[u.Z++] = q.id;
                    u = this.we;
                    u.K[u.Z++] = p;
                    u = this.we;
                    u.K[u.Z++] = v;
                    u = this.we;
                    u.K[u.Z++] = y;
                    u = this.we;
                    u.K[u.Z++] = B
                }
                32 < q.id && (u = p,
                u < c.o && (c.o = u),
                u > c.A && (c.A = u),
                v < c.C && (c.C = v),
                v > c.D && (c.D = v),
                p += y,
                v += B,
                p < c.o && (c.o = p),
                p > c.A && (c.A = p),
                v < c.C && (c.C = v),
                v > c.D && (c.D = v));
                q = q.JC;
                0 < b.Rx && (q = b.Rx);
                this.cursor.x += q * f + x + g
            }
        }
        yy(a, b) {
            let c = a.length
              , d = this.ng;
            d.clear();
            d.gf(c);
            var e = b.charset;
            let f = e.Sx;
            e = e.Iz;
            b = b.fN;
            let g;
            g = 1;
            var h = a.charCodeAt(0);
            if (32 <= h) {
                null == f[h] && (h = b);
                var m = f[h];
                d.K[d.Z++] = m
            }
            for (; g < c; )
                m = a.charCodeAt(g++),
                32 > m ? h = m : (null == f[m] && (m = b),
                null != e && (h = e.G[h << 16 | m],
                null != h && (--d.Z,
                m = h)),
                h = f[m],
                d.K[d.Z++] = h,
                h = m);
            return d
        }
    }
    Wg.g = !0;
    Object.assign(Wg.prototype, {
        j: Wg
    });
    class Af {
        constructor() {}
    }
    Af.g = !0;
    Object.assign(Af.prototype, {
        j: Af
    });
    class zf extends Af {
        constructor() {
            super()
        }
        bO(a) {
            this.ie = a;
            this.state = Ec.Mp(this.ie, 0) ? 1 : 0;
            this.Dk = this.i = 0;
            this.Ts = 0 == this.ie.length
        }
        dA() {
            if (this.Ts)
                return null;
            let a = this.ie.length, b;
            for (; this.i < a; ) {
                if (b = "\n" == this.ie.charAt(this.i))
                    return this.i++,
                    this.Dk = this.i,
                    this.state = Ec.Mp(this.ie, 0) ? 1 : 0,
                    {
                        position: this.Dk,
                        required: this.i != a
                    };
                switch (this.state) {
                case 0:
                    Ec.Mp(this.ie, this.i) && (this.state = 1);
                    this.i++;
                    break;
                case 1:
                    if (Ec.Mp(this.ie, this.i))
                        this.i++;
                    else
                        return this.Dk = this.i,
                        this.state = 0,
                        {
                            position: this.Dk,
                            required: !1
                        }
                }
                if (this.i == a)
                    return this.Ts = !0,
                    this.Dk = this.i,
                    {
                        position: this.Dk,
                        required: !1
                    }
            }
            this.Ts = !0;
            return null
        }
    }
    zf.g = !0;
    zf.u = Af;
    Object.assign(zf.prototype, {
        j: zf
    });
    class Ld extends da {
        constructor() {
            super();
            this.points = [];
            this.jh = [];
            this.$l = [];
            this.V = 10
        }
        H() {
            super.H();
            this.$l = this.jh = this.points = null
        }
        EN() {
            this.points = [];
            this.jh = [];
            this.$l = []
        }
        ta() {
            return 605
        }
    }
    Ld.g = !0;
    Ld.u = da;
    Object.assign(Ld.prototype, {
        j: Ld
    });
    class Bf extends da {
        constructor(a, b, c) {
            super();
            this.qb = a;
            this.charset = a.Nb.bo;
            a = [9633, 65533, 63];
            let d = 0;
            for (; 3 > d; ) {
                let e = d++;
                if (null != this.charset.Sx[a[e]])
                    break
            }
            this.grid = null;
            this.fillColor = -1;
            this.Zt = this.Yt = 0;
            this.ob(b, c, !1)
        }
        ob(a, b, c) {
            if (c)
                a = a / this.charset.py | 0,
                b = b / this.charset.lineHeight | 0,
                this.ob(a, b, !1);
            else if (0 < this.Yt && a > this.Yt && (a = this.Yt),
            0 < this.Zt && b > this.Zt && (b = this.Zt),
            null == this.grid || a != this.grid.jc || b != this.grid.Fc)
                null == this.grid ? this.grid = new zd(a,b) : this.grid.resize(a, b),
                this.grid.forEach(function(d, e, f) {
                    return null == d ? new Yg(e,f) : d
                }),
                null != this.na && this.zc()
        }
        Ng(a) {
            super.Ng(a);
            this.zc()
        }
        zc() {
            this.na.ob(this.charset.py * this.grid.jc, this.charset.lineHeight * this.grid.Fc);
            this.na.zc()
        }
        ta() {
            return 1805
        }
    }
    Bf.g = !0;
    Bf.u = da;
    Object.assign(Bf.prototype, {
        j: Bf
    });
    class Yg {
        constructor(a, b) {
            this.x = a;
            this.y = b;
            this.code = 0
        }
    }
    Yg.g = !0;
    Object.assign(Yg.prototype, {
        j: Yg
    });
    class Yd extends da {
        constructor(a) {
            super();
            this.color = bj.clone(a)
        }
        ta() {
            return 1205
        }
    }
    Yd.g = !0;
    Yd.u = da;
    Object.assign(Yd.prototype, {
        j: Yd
    });
    class Zd extends da {
        constructor(a) {
            super();
            this.color = a;
            this.oq = null
        }
        ta() {
            return 305
        }
    }
    Zd.g = !0;
    Zd.u = da;
    Object.assign(Zd.prototype, {
        j: Zd
    });
    class vc extends da {
        constructor(a) {
            super();
            this.Bi = a;
            this.sr = []
        }
        update(a) {
            super.update(a);
            this.sr = [];
            for (a = 0; 5 > a; ) {
                var b = this.Bi[a++]
                  , c = b.length;
                if (0 == c)
                    continue;
                let q = 1;
                for (var d = void 0, e = [], f = 0, g = 0; g < c; ) {
                    var h = g++;
                    d = b[h];
                    0 == h && (e[f++] = d.start);
                    e[f++] = d.end
                }
                b = 2 * c;
                c = [];
                f = 1 / b;
                for (g = 0; ; ) {
                    1 < g && (g = 1);
                    d = t.CI(e, g);
                    c.push(d);
                    if (1 == g)
                        break;
                    g += f
                }
                e = vc.fD / b;
                d = [];
                f = 0;
                for (g = b - 1; f < g; ) {
                    var m = q;
                    h = f == b - 1 ? 1 : q + e;
                    let p = c[f]
                      , v = c[f + 1];
                    var n = t.Xa(v, p);
                    n.normalize();
                    let u = t.aI(n);
                    n = t.Zw(n);
                    let y = t.Bb(p, t.pd(n, m));
                    d.push(t.Bb(p, t.pd(u, m)));
                    d.push(y);
                    m = t.Bb(v, t.pd(n, h));
                    d.push(t.Bb(v, t.pd(u, h)));
                    d.push(m);
                    q += e;
                    ++f
                }
                this.sr.push(d)
            }
        }
        ta() {
            return 1105
        }
    }
    vc.g = !0;
    vc.u = da;
    Object.assign(vc.prototype, {
        j: vc
    });
    class Md extends da {
        constructor() {
            super();
            this.F = new F(0,0,0,1);
            this.V = 0;
            this.color = new F(0,0,0,0);
            this.qn = 0;
            this.lineWidth = 1.5;
            this.update(null)
        }
        update() {
            this.qn = Math.max(16, Math.round(this.V / .8));
            0 != this.qn % 2 && this.qn++
        }
        ta() {
            return 505
        }
    }
    Md.g = !0;
    Md.u = da;
    Object.assign(Md.prototype, {
        j: Md
    });
    class Cf extends da {
        constructor(a, b) {
            super();
            this.qb = a;
            this.shape = b;
            this.kc = []
        }
        ta() {
            return 1705
        }
    }
    Cf.g = !0;
    Cf.u = da;
    Object.assign(Cf.prototype, {
        j: Cf
    });
    class ec extends da {
        constructor() {
            super();
            this.precision = .2;
            this.tM = !1;
            new X(0,0,1024,1024);
            this.NI = !1;
            this.Js = 0;
            this.LI = 256;
            this.Is = Array(this.LI);
            this.ZI = 1024;
            this.data = Array(this.ZI);
            this.lineWidth = this.Op = 1;
            this.fillColor = 0;
            this.cursor = new F(0,0,0,1);
            this.ld = [];
            this.Sm = new X(qa,qa,ra,ra);
            this.clear()
        }
        H() {
            this.ld = this.Is = this.data = null;
            super.H()
        }
        Ng(a) {
            super.Ng(a);
            this.NI && this.OI()
        }
        clear() {
            this.Js = 0;
            let a = this.Sm;
            a.o = a.C = qa;
            a.A = a.D = ra
        }
        OI() {
            let a = qa
              , b = ra
              , c = qa
              , d = ra
              , e = this.Sm
              , f = this.data
              , g = this.Is
              , h = 0
              , m = 0
              , n = this.Js;
            for (; h < n; ) {
                var q = g[h++];
                switch (q) {
                case 1:
                case 2:
                case 3:
                    q = f[m];
                    let p = f[m + 1];
                    q < a && (a = q);
                    q > b && (b = q);
                    p < c && (c = p);
                    p > d && (d = p);
                    m += 2;
                    break;
                case 4:
                    m += 3;
                    break;
                case 5:
                    m += 2;
                    break;
                case 6:
                case 7:
                case 8:
                    break;
                default:
                    e.o = a,
                    e.C = c,
                    e.A = b,
                    e.D = d,
                    m = this.hx(q, m, f),
                    a = e.o,
                    c = e.C,
                    b = e.A,
                    d = e.D
                }
            }
            e.o = a;
            e.C = c;
            e.A = b;
            e.D = d;
            null != this.na && this.zc()
        }
        hx() {
            return 0
        }
        zc() {
            let a = this.Sm;
            var b = this.na.ca;
            b.F.x = (a.o + a.A) / 2;
            b.F.y = (a.C + a.D) / 2;
            let c = (a.A - a.o) / 2
              , d = (a.D - a.C) / 2;
            b.V = Math.sqrt(c * c + d * d);
            302 == b.type && (b = b.Qa,
            b.o = a.o,
            b.C = a.C,
            b.A = a.A,
            b.D = a.D);
            this.na.zc()
        }
        ta() {
            return 1005
        }
    }
    ec.g = !0;
    ec.u = da;
    Object.assign(ec.prototype, {
        j: ec
    });
    class cd extends da {
        constructor() {
            super();
            this.V = 0;
            this.color = new F(1,1,1,1);
            this.lineWidth = 6;
            this.Op = 1
        }
        ta() {
            return 905
        }
    }
    cd.g = !0;
    cd.u = da;
    Object.assign(cd.prototype, {
        j: cd
    });
    class $d extends da {
        constructor(a, b) {
            super();
            this.qb = null;
            this.Rn = new Eb(0,0,0,0);
            this.frame = null;
            this.lO();
            this.zu = this.yu = 1;
            this.wd = this.I = this.offsetY = this.offsetX = 0;
            this.kf(a, b)
        }
        lO() {
            this.Iu = null;
            this.I |= 4
        }
        kf(a, b) {
            this.qb = a;
            if (null != b)
                this.Ou(b);
            else {
                b = this.Rn;
                let c = a.size.x
                  , d = a.size.y;
                b.x = 0;
                b.y = 0;
                b.w = c;
                b.G = d;
                this.frame = null
            }
            this.Ma = a.id
        }
        Ou(a) {
            a = this.qb.Nb.Xe(a);
            if (null == this.frame || a.id != this.frame.id) {
                this.frame = a;
                a = this.Rn;
                let b = this.frame.sd;
                a.x = b.x;
                a.y = b.y;
                a.w = b.w;
                a.G = b.G
            }
            return this.frame
        }
        In(a) {
            if (null == this.frame || this.frame.id != a) {
                this.frame = this.qb.Nb.XJ(a);
                a = this.Rn;
                let b = this.frame.sd;
                a.x = b.x;
                a.y = b.y;
                a.w = b.w;
                a.G = b.G
            }
        }
        update() {
            if (this.qb.wd > this.wd) {
                this.wd = this.qb.wd;
                if (null == this.frame)
                    this.kf(this.qb);
                else {
                    let a = this.frame;
                    this.frame = null;
                    this.In(a.id)
                }
                null != this.na.tn && this.na.tn()
            }
        }
        H() {
            super.H();
            this.qb = null
        }
        ta() {
            return 205
        }
    }
    $d.g = !0;
    $d.u = da;
    Object.assign($d.prototype, {
        j: $d
    });
    class ae extends da {
        constructor(a) {
            super();
            this.qb = a;
            this.oq = null
        }
        H() {
            super.H();
            this.qb = null
        }
        ta() {
            return 405
        }
    }
    ae.g = !0;
    ae.u = da;
    Object.assign(ae.prototype, {
        j: ae
    });
    class Df extends da {
        constructor(a, b) {
            super();
            this.eq = new F(1,1,0,1);
            this.wN = new F(0,0,0,1);
            a.Eh(function() {});
            this.Rp = new Sa(a.jc * b,a.Fc * b)
        }
        H() {
            super.H()
        }
        Ng(a) {
            super.Ng(a);
            a.ob(this.Rp.x, this.Rp.y);
            a.zc()
        }
        update(a) {
            var b = a.jb
              , c = b.position.y;
            b = b.position.x - a.Qe.Aa.translate.x;
            var d = c - a.Qe.Aa.translate.y;
            c = this.wN;
            c.x = b * (1 - this.eq.x);
            c.y = d * (1 - this.eq.y);
            b = a.Qe;
            b.ob(this.Rp.x, this.Rp.y);
            d = (1 - this.eq.x) * c.x * 2;
            a = (1 - this.eq.y) * c.y * 2;
            b.ca.F.x = d;
            b.ca.F.y = a;
            c = b.ca.Qa;
            let e = c.A - c.o;
            c.o = d;
            c.A = d + e;
            c = b.ca.Qa;
            b = c.D - c.C;
            c.C = a;
            c.D = a + b
        }
        ta() {
            return 1605
        }
    }
    Df.g = !0;
    Df.u = da;
    Object.assign(Df.prototype, {
        j: Df
    });
    class Ef extends da {
        constructor(a) {
            null == a && (a = 1);
            super();
            this.flags = a;
            this.color = new F(0,0,0,1)
        }
        ta() {
            return 1405
        }
    }
    Ef.g = !0;
    Ef.u = da;
    Object.assign(Ef.prototype, {
        j: Ef
    });
    class Ff extends ec {
        constructor() {
            super();
            let a = []
              , b = 0;
            for (; 4 > b; )
                ++b,
                a.push(new F(0,0,0,1));
            this.mB = []
        }
        ta() {
            return 1505
        }
    }
    Ff.g = !0;
    Ff.u = ec;
    Object.assign(Ff.prototype, {
        j: Ff
    });
    class Zg {
        constructor() {
            this.ZK = [];
            this.ng = []
        }
    }
    Zg.g = !0;
    Object.assign(Zg.prototype, {
        j: Zg
    });
    class $g {
        constructor(a, b, c, d, e, f, g, h) {
            this.id = a;
            this.x = b;
            this.y = c;
            this.width = d;
            this.height = e;
            this.Qv = f;
            this.oP = g;
            this.JC = h
        }
    }
    $g.g = !0;
    Object.assign($g.prototype, {
        j: $g
    });
    class ah {
        constructor(a, b, c) {
            this.first = a;
            this.second = b;
            this.amount = c
        }
    }
    ah.g = !0;
    Object.assign(ah.prototype, {
        j: ah
    });
    class bh {
        constructor(a, b, c, d) {
            this.cP = a;
            this.right = b;
            this.jJ = c;
            this.left = d
        }
    }
    bh.g = !0;
    Object.assign(bh.prototype, {
        j: bh
    });
    class ch {
        constructor(a, b) {
            this.size = a;
            this.padding = b
        }
    }
    ch.g = !0;
    Object.assign(ch.prototype, {
        j: ch
    });
    class dh {
        constructor(a, b, c, d) {
            this.lineHeight = a;
            this.pi = b;
            this.tN = c;
            this.sN = d
        }
    }
    dh.g = !0;
    Object.assign(dh.prototype, {
        j: dh
    });
    class ne {
        constructor() {}
        gl(a) {
            let b = new Zg;
            a = new fc(a);
            var c = a.ja()
              , d = a.ja()
              , e = a.ja();
            if (66 != c || 77 != d || 70 != e)
                throw 6;
            if (3 != a.ja())
                throw 7;
            a.ja();
            c = a.Rf();
            d = a.Qb();
            a.ja();
            a.ja();
            a.gd();
            a.ja();
            e = a.ja();
            var f = a.ja()
              , g = a.ja()
              , h = a.ja();
            a.ja();
            a.ja();
            a.ja();
            a.nq(c - 14);
            b.info = new ch(Math.abs(d),new bh(e,f,g,h));
            a.ja();
            a.Rf();
            c = Math.max(a.gd(), b.info.size) | 0;
            d = a.gd();
            e = a.gd();
            f = a.gd();
            a.gd();
            a.ja();
            a.ja();
            a.ja();
            a.ja();
            a.ja();
            b.Oo = new dh(c,d,e,f);
            a.ja();
            c = a.Rf();
            d = a.i;
            a.UA();
            d = a.i - d;
            for (c -= d; 0 < c; )
                a.UA(),
                c -= d;
            a.ja();
            c = a.Rf() / 20 | 0;
            for (d = 0; d < c; ) {
                ++d;
                e = a.Rf();
                f = a.gd();
                g = a.gd();
                h = a.gd();
                let m = a.gd()
                  , n = a.Qb()
                  , q = a.Qb()
                  , p = a.Qb();
                a.ja();
                a.ja();
                b.ng.push(new $g(e,f,g,h,m,n,q,p))
            }
            if (a.i == a.nC)
                return b;
            a.ja();
            for (a.Rf(); a.i < a.nC; )
                c = a.Rf(),
                d = a.Rf(),
                e = a.Qb(),
                b.ZK.push(new ah(c,d,e));
            return b
        }
    }
    ne.g = !0;
    Object.assign(ne.prototype, {
        j: ne
    });
    class oe {
        static zy(a) {
            for (var b = 0, c = 0, d = a.ng; c < d.length; )
                b = Math.max(b, d[c++].id + 1);
            c = Array(b);
            for (d = 0; d < b; )
                c[d++] = null;
            b = 0;
            for (d = a.ng; b < d.length; ) {
                let e = d[b];
                ++b;
                c[e.id] = e
            }
            return new eh(c,a.info.size,a.Oo.lineHeight,a.Oo.pi,a.ng[0].JC,a.Oo.tN,a.Oo.sN,[a.info.padding.cP, a.info.padding.right, a.info.padding.jJ, a.info.padding.left])
        }
        static lk(a) {
            let b = []
              , c = 0;
            for (a = a.ng; c < a.length; ) {
                let d = a[c];
                ++c;
                let e = d.id;
                b.push(new Wd(e,String.fromCodePoint(e),new Sa(d.width,d.height),new Eb(d.x,d.y,d.width,d.height),!1,null))
            }
            return b
        }
    }
    oe.g = !0;
    class eh {
        constructor(a, b, c, d, e, f, g, h) {
            this.Sx = a;
            this.xq = b;
            this.lineHeight = c;
            this.pi = d;
            this.py = e;
            this.padding = h;
            this.Jt = new gb;
            this.Iz = new gb
        }
    }
    eh.g = !0;
    Object.assign(eh.prototype, {
        j: eh
    });
    class Gf {
        constructor(a, b) {
            this.frames = a;
            this.Mk = b
        }
    }
    Gf.g = !0;
    Object.assign(Gf.prototype, {
        j: Gf
    });
    class Hf {
        constructor(a, b, c, d, e) {
            this.filename = a;
            this.frame = b;
            this.VB = c;
            this.cc = d;
            this.Xn = e
        }
    }
    Hf.g = !0;
    Object.assign(Hf.prototype, {
        j: Hf
    });
    class If {
        constructor(a, b, c) {
            this.width = a;
            this.height = b;
            this.scale = c
        }
    }
    If.g = !0;
    Object.assign(If.prototype, {
        j: If
    });
    class td {
        constructor() {}
        WM(a) {
            var b = JSON.parse(a);
            a = [];
            let c = 0
              , d = b.frames;
            for (; c < d.length; ) {
                let e = d[c];
                ++c;
                let f = e.frame
                  , g = e.spriteSourceSize
                  , h = e.sourceSize;
                a.push(new Hf(e.filename,new Eb(f.x,f.y,f.w,f.h),new Eb(g.x,g.y,g.w,g.h),new Sa(h.w,h.h),e.trimmed))
            }
            b = b.meta;
            return new Gf(a,new If(b.size.w,b.size.h,parseFloat(b.scale)))
        }
        SA(a) {
            function b(h) {
                return new Hf(h,new Eb(c.Qb(),c.Qb(),c.Qb(),c.Qb()),new Eb(c.Qb(),c.Qb(),c.Qb(),c.Qb()),new Sa(c.Qb(),c.Qb()),1 == c.ja())
            }
            let c = new fc(a);
            c.ja();
            c.ja();
            c.ja();
            a = new If(c.Qb(),c.Qb(),c.UM());
            let d = []
              , e = c.Qb()
              , f = 0;
            for (; f < e; ) {
                var g = c.nq(c.Qb());
                d.push(b(g));
                ++f
            }
            e = c.Qb();
            for (f = 0; f < e; ) {
                g = c.Qb();
                let h = c.nq(c.Qb())
                  , m = 0;
                for (; m < g; ) {
                    let n = "" + (m + 1);
                    for (; 4 > n.length; )
                        n = "0" + n;
                    d.push(b(h + n));
                    ++m
                }
                ++f
            }
            return new Gf(d,a)
        }
    }
    td.g = !0;
    Object.assign(td.prototype, {
        j: td
    });
    class qg {
        static lk(a) {
            let b = 0
              , c = []
              , d = 0;
            for (a = a.frames; d < a.length; ) {
                let e = a[d];
                ++d;
                c.push(new Wd(b++,e.filename,e.cc,e.frame,e.Xn,new Sa(e.VB.x,e.VB.y)))
            }
            return c
        }
    }
    qg.g = !0;
    class ke extends Td {
        constructor(a) {
            super();
            this.Cs = a;
            this.context = null;
            this.kp = !1;
            this.eL = [];
            this.Tm = (new ka("(iPad|iPhone)","g")).match(ja.navigator.platform);
            this.rm = new Sa(-1,-1);
            this.Cu = this.Ns = null;
            this.mO();
            this.wn = 1;
            this.ks();
            null != a ? (this.canvas = window.document.getElementById(a),
            null == this.canvas && (this.canvas = window.document.createElement("canvas"),
            this.canvas.id = a,
            window.document.body.appendChild(this.canvas))) : (this.canvas = window.document.createElement("canvas"),
            this.canvas.id = "gfx",
            this.canvas.style.position = "absolute",
            this.canvas.style.width = "100%",
            this.canvas.style.height = "100%",
            this.canvas.style.touchAction = "none",
            this.canvas.style.userSelect = "none",
            this.canvas.style.outline = "none",
            this.canvas.style.setProperty("-webkit-user-select", "none"),
            this.canvas.style.zIndex = "0",
            window.document.body.appendChild(this.canvas),
            this.canvas.tabIndex = 1,
            this.canvas.focus())
        }
        qk() {
            return window.devicePixelRatio
        }
        mO() {
            null != this.Cu && (this.Cu.disconnect(),
            this.Cu = null);
            this.sO = !1
        }
        FK(a) {
            null == a && (a = {
                willReadFrequently: !1
            });
            this.context = this.canvas.getContext("2d", a);
            this.canvas.addEventListener("contextlost", function() {});
            this.canvas.addEventListener("contextrestored", function() {})
        }
        JK(a) {
            function b() {
                try {
                    e.Id.se(6)
                } catch (f) {}
            }
            function c(f) {
                f.preventDefault()
            }
            function d(f) {
                console.log(f.statusMessage || "Unknown error")
            }
            let e = this;
            this.addListener(this.canvas, "webglcontextcreationerror", d);
            this.addListener(this.canvas, "webglcontextlost", c);
            this.addListener(this.canvas, "webglcontextrestored", b);
            try {
                if (null == a && (a = {
                    stencil: !0
                }),
                (this.context = this.canvas.getContext("webgl", a)) && this.context instanceof WebGLRenderingContext)
                    return !0
            } catch (f) {
                this.context = null
            }
            this.canvas.removeEventListener("webglcontextcreationerror", d);
            this.canvas.removeEventListener("webglcontextlost", c);
            this.canvas.removeEventListener("webglcontextrestored", b);
            return !1
        }
        Dm() {
            let a = this.zh();
            return a.x / a.y
        }
        getContext() {
            return this.context
        }
        ON(a) {
            this.rm = new Sa(-1,-1);
            this.wn = a;
            this.update()
        }
        update() {
            this.Du = !1;
            var a = this.canvas.clientWidth;
            var b = this.canvas.clientHeight;
            if (0 != a && 0 != b && (null != this.Ns && (a = this.Ns.x,
            b = this.Ns.y),
            this.rm.x != a || this.rm.y != b)) {
                var c = this.rm;
                c.x = a;
                c.y = b;
                this.Cd.x = a * this.qk() | 0;
                this.Cd.y = b * this.qk() | 0;
                b = 0 == this.wn ? this.qk() : this.wn;
                a = this.Cd.x / b | 0;
                b = this.Cd.y / b | 0;
                this.canvas.width = a;
                this.canvas.height = b;
                this.BN(a, b);
                this.Du = !0;
                this.Id.se(0)
            }
        }
        RK() {
            try {
                return this.Tm ? !1 : document.fullscreenEnabled
            } catch (a) {
                return !1
            }
        }
        ks() {
            this.addListener(window, "contextmenu", function(b) {
                b.preventDefault()
            });
            window.oncontextmenu = function() {
                return !1
            }
            ;
            let a = this;
            this.addListener(window.document, "visibilitychange", function() {
                a.visible = "visible" == window.document.visibilityState;
                a.Id.se(a.visible ? 1 : 2)
            });
            this.RK() && this.addListener(window.document, "fullscreenchange", function() {
                a.kp = document.kp;
                a.Id.se(a.kp ? 3 : 4)
            });
            if (this.Tm)
                this.addListener(window, "orientationchange", function() {
                    a.Id.se(5);
                    setInterval(function() {
                        window.scrollTo(0, 1)
                    }, 1)
                });
            else
                try {
                    window.screen.orientation.onchange = function() {
                        a.Id.se(5);
                        setTimeout(function() {
                            let b = a.rm;
                            b.x = 0;
                            b.y = 0
                        }, 1E3)
                    }
                } catch (b) {}
        }
        addListener(a, b, c) {
            let d = {};
            d.target = a;
            d.type = b;
            d.listener = c;
            this.eL.push(d);
            a.addEventListener(b, c)
        }
    }
    ke.g = !0;
    ke.u = Td;
    Object.assign(ke.prototype, {
        j: ke
    });
    class rg {
    }
    class me extends tf {
        constructor(a, b) {
            null == b && (b = !1);
            null == a && (a = !0);
            super();
            this.jP = a;
            this.flipY = b
        }
        load(a, b, c) {
            let d = this;
            this.decode(a, c).then(function(e) {
                d.data = e;
                let f = d.size;
                f.x = e.width;
                f.y = e.height;
                d.loaded = !0;
                b()
            }).catch(function() {})
        }
        Cv() {
            if (this.loaded) {
                try {
                    this.data instanceof HTMLImageElement ? this.data.src = "data:image/gif;base64,vmwareR0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" : this.data instanceof HTMLCanvasElement ? (this.data.width = 1,
                    this.data.height = 1) : this.data instanceof ImageBitmap && this.data.close()
                } catch (a) {}
                this.loaded = !1;
                this.data = null
            }
        }
        decode(a, b) {
            let c = this;
            return "string" == typeof a ? (null == b && (b = "image/png"),
            a = a.replace(RegExp("\\s+", "g"), ""),
            this.decode(new Blob([new Uint8Array(xc.decode(a).b.yI)],{
                type: b
            }))) : a instanceof HTMLImageElement ? Promise.resolve(a) : a instanceof HTMLCanvasElement ? Promise.resolve(a) : this.jP ? null == window.createImageBitmap ? this.lr(a) : "string" == typeof a ? this.lr(a).then(function(d) {
                return c.lC(d)
            }) : this.lC(a).then(null, function() {
                return c.lr(a)
            }) : this.lr(a)
        }
        lr(a) {
            return new Promise(function(b, c) {
                let d = window.document.createElement("img");
                d.addEventListener("load", function() {
                    b(d)
                });
                d.addEventListener("error", function(e) {
                    c(e)
                });
                if ("string" == typeof a) {
                    debugger ;d.src = a
                } else
                    d.src = URL.createObjectURL(a)
            }
            )
        }
        lC(a) {
            return window.createImageBitmap(a, {
                imageOrientation: this.flipY ? "flipY" : "none",
                premultiplyAlpha: "default"
            })
        }
    }
    me.g = !0;
    me.u = tf;
    Object.assign(me.prototype, {
        j: me
    });
    class be {
    }
    be.g = !0;
    be.me = !0;
    Object.assign(be.prototype, {
        j: be
    });
    class La {
        constructor() {
            this.Kv = this.ug();
            this.hy = this.hc()
        }
        Sa() {}
        ug() {
            return 201
        }
        hc() {
            throw 8;
        }
    }
    La.g = !0;
    La.sb = [be];
    Object.assign(La.prototype, {
        j: La
    });
    class le extends fd {
        constructor() {
            function a() {
                let c = window.document.createElement("canvas").getContext("2d", {
                    alpha: !0,
                    willReadFrequently: !0
                });
                c.canvas.width = 1024;
                c.canvas.height = 1024;
                return c
            }
            super("2d");
            this.oI = 0;
            this.Ja = this.context = null;
            this.lh = new $b;
            this.globalAlpha = 1;
            this.Sp = this.mg = null;
            this.vz = !1;
            this.wi = 0;
            this.Gv = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.globalCompositeOperation = null;
            var b = this.MI = Array(5);
            b[0] = "source-over";
            b[1] = "source-over";
            b[2] = "multiply";
            b[3] = "lighter";
            b[4] = "screen";
            this.Ks = [null];
            for (b = 0; 3 > b; ) {
                ++b;
                let c = a();
                this.Ks.push(c)
            }
            this.HL = a();
            new X(qa,qa,ra,ra)
        }
        Kn(a) {
            super.Kn(a);
            this.context = a.getContext();
            this.Ks[0] = this.context
        }
        clear(a) {
            super.clear();
            null == a && (a = this.clearColor);
            var b = this.Ab;
            let c = this.viewport
              , d = b.size.x * c.x | 0
              , e = b.size.y * c.y | 0
              , f = b.size.x * c.w | 0;
            b = b.size.y * c.G | 0;
            this.clearRect(d, e, f, b);
            0 != a.w && (this.Uh("rgba(" + ((255 * a.x | 0) & 255) + "," + ((255 * a.y | 0) & 255) + "," + ((255 * a.z | 0) & 255) + "," + a.w.toFixed(2) + ")"),
            this.fillRect(d, e, f, b))
        }
        Ih() {
            if (!super.Ih())
                return !1;
            this.Ja = this.context;
            try {
                this.context.reset()
            } catch (a) {}
            this.Ja.fillStyle = "#000000";
            this.globalAlpha = 1;
            this.hl();
            this.context.save();
            this.Dv();
            return !0
        }
        ph() {
            for (super.ph(); 0 < this.wi; )
                this.Ja.restore(),
                this.wi--;
            this.context.restore()
        }
        qj(a, b, c, d) {
            super.qj(a, b, c, d);
            for (this.Dv(); 0 < this.wi; )
                this.Ja.restore(),
                this.wi--;
            this.resetTransform();
            if (0 != a || 0 != b || 1 != c || 1 != d)
                a = new Path2D,
                b = this.Ab,
                c = this.viewport,
                a.rect(b.size.x * c.x | 0, b.size.y * c.y | 0, b.size.x * c.w | 0, b.size.y * c.G | 0),
                this.Ja.save(),
                this.Ja.clip(a),
                this.wi++
        }
        nj(a) {
            super.nj(a);
            this.Dv()
        }
        dk(a) {
            var b = a.effect;
            if (null != b && b.enabled && 1 != a.qe)
                if (0 < (a.flags & 4))
                    this.Qe = a,
                    a = this.globalAlpha,
                    this.globalAlpha = .75,
                    this.wm(b),
                    this.globalAlpha = a;
                else if (this.Qe = a,
                this.Kg(a),
                null == this.Sp)
                    this.wm(b);
                else {
                    this.Dy(a.effect.type, a.type);
                    a = this.Ab.size.x;
                    var c = this.Ab.size.y;
                    this.Ja = this.HL;
                    this.Tu(a, c);
                    this.wm(b);
                    this.pl(this.vz ? "destination-out" : "destination-in");
                    b = this.Tc;
                    this.Tc = 0;
                    var d = this.Qe;
                    this.Qe = this.Sp;
                    this.wm(this.Sp.effect);
                    this.Tc = b;
                    this.Qe = d;
                    b = this.Ja.canvas;
                    this.Ja = this.context;
                    this.pl("source-over");
                    this.resetTransform();
                    this.Ja.drawImage(b, 0, 0, a, c, 0, 0, a, c)
                }
        }
        Jm(a) {
            0 < (a.I & 240) && a.ur();
            var b = a.xe;
            a = b.m11;
            let c = b.m12
              , d = b.m13
              , e = b.m14
              , f = b.m21
              , g = b.m22
              , h = b.m23
              , m = b.m24
              , n = b.m31
              , q = b.m32
              , p = b.m33
              , v = b.m34
              , u = b.m41
              , y = b.m42
              , B = b.m43;
            b = b.m44;
            var x = this.jb.ij;
            let H = this.Xx
              , D = this.Gv
              , Z = D.m11 * x.m11 + D.m12 * x.m21 + D.m13 * x.m31 + D.m14 * x.m41
              , Y = D.m11 * x.m12 + D.m12 * x.m22 + D.m13 * x.m32 + D.m14 * x.m42
              , T = D.m11 * x.m13 + D.m12 * x.m23 + D.m13 * x.m33 + D.m14 * x.m43
              , ba = D.m11 * x.m14 + D.m12 * x.m24 + D.m13 * x.m34 + D.m14 * x.m44
              , sa = D.m21 * x.m11 + D.m22 * x.m21 + D.m23 * x.m31 + D.m24 * x.m41
              , ma = D.m21 * x.m12 + D.m22 * x.m22 + D.m23 * x.m32 + D.m24 * x.m42
              , ca = D.m21 * x.m13 + D.m22 * x.m23 + D.m23 * x.m33 + D.m24 * x.m43
              , pa = D.m21 * x.m14 + D.m22 * x.m24 + D.m23 * x.m34 + D.m24 * x.m44
              , ya = D.m31 * x.m11 + D.m32 * x.m21 + D.m33 * x.m31 + D.m34 * x.m41
              , na = D.m31 * x.m12 + D.m32 * x.m22 + D.m33 * x.m32 + D.m34 * x.m42
              , fa = D.m31 * x.m13 + D.m32 * x.m23 + D.m33 * x.m33 + D.m34 * x.m43
              , Ya = D.m31 * x.m14 + D.m32 * x.m24 + D.m33 * x.m34 + D.m34 * x.m44
              , jb = D.m41 * x.m11 + D.m42 * x.m21 + D.m43 * x.m31 + D.m44 * x.m41
              , Oa = D.m41 * x.m12 + D.m42 * x.m22 + D.m43 * x.m32 + D.m44 * x.m42
              , kb = D.m41 * x.m13 + D.m42 * x.m23 + D.m43 * x.m33 + D.m44 * x.m43;
            x = D.m41 * x.m14 + D.m42 * x.m24 + D.m43 * x.m34 + D.m44 * x.m44;
            H.m11 = Z * a + Y * f + T * n + ba * u;
            H.m12 = Z * c + Y * g + T * q + ba * y;
            H.m13 = Z * d + Y * h + T * p + ba * B;
            H.m14 = Z * e + Y * m + T * v + ba * b;
            H.m21 = sa * a + ma * f + ca * n + pa * u;
            H.m22 = sa * c + ma * g + ca * q + pa * y;
            H.m23 = sa * d + ma * h + ca * p + pa * B;
            H.m24 = sa * e + ma * m + ca * v + pa * b;
            H.m31 = ya * a + na * f + fa * n + Ya * u;
            H.m32 = ya * c + na * g + fa * q + Ya * y;
            H.m33 = ya * d + na * h + fa * p + Ya * B;
            H.m34 = ya * e + na * m + fa * v + Ya * b;
            H.m41 = jb * a + Oa * f + kb * n + x * u;
            H.m42 = jb * c + Oa * g + kb * q + x * y;
            H.m43 = jb * d + Oa * h + kb * p + x * B;
            H.m44 = jb * e + Oa * m + kb * v + x * b;
            return H
        }
        xh(a) {
            0 < (a.I & 64) && a.ul();
            var b = a.xe;
            a = b.m11;
            let c = b.m12;
            var d = b.m14;
            let e = b.m21
              , f = b.m22
              , g = b.m24;
            b = this.XI;
            let h = this.Gv
              , m = this.jb.ij
              , n = h.m11 * m.m11 + h.m12 * m.m21
              , q = h.m11 * m.m12 + h.m12 * m.m22
              , p = h.m21 * m.m11 + h.m22 * m.m21
              , v = h.m21 * m.m12 + h.m22 * m.m22
              , u = n * d + q * g + (h.m11 * m.m14 + h.m12 * m.m24 + h.m14);
            d = p * d + v * g + (h.m21 * m.m14 + h.m22 * m.m24 + h.m24);
            b.m11 = n * a + q * e;
            b.m12 = n * c + q * f;
            b.m14 = u;
            b.m21 = p * a + v * e;
            b.m22 = p * c + v * f;
            b.m24 = d;
            return b
        }
        Yu(a) {
            this.hd(a.Jj)
        }
        Lu(a) {
            this.mg = a.mg;
            this.context.globalCompositeOperation = this.MI[this.mg]
        }
        Nu(a) {
            this.lh = a.transform
        }
        Wu(a) {
            this.Sp = a.na;
            this.vz = a.PK;
            let b = a.Gs;
            if (null != b) {
                this.Ja.save();
                this.resetTransform();
                this.wi++;
                a = this.xh(a.cq.Aa);
                let e = new Path2D;
                var c = b[0]
                  , d = new F(a.m11 * c.x + a.m12 * c.y + a.m14,a.m21 * c.x + a.m22 * c.y + a.m24,0,1);
                e.moveTo(d.x, d.y);
                for (c = 1; c < b.length; ) {
                    d = b[c++];
                    let f = a;
                    d = new F(f.m11 * d.x + f.m12 * d.y + f.m14,f.m21 * d.x + f.m22 * d.y + f.m24,0,1);
                    e.lineTo(d.x, d.y)
                }
                e.closePath();
                this.Ja.clip(e)
            } else
                0 < this.wi && this.Ja.restore()
        }
        Dv() {
            let a = this.Ab
              , b = this.viewport
              , c = (a.size.x * b.w | 0) / 2
              , d = (a.size.y * b.G | 0) / 2;
            this.Ab.sO && (c |= 0,
            d |= 0);
            let e = this.Gv;
            e.m11 = c;
            e.m12 = 0;
            e.m13 = 0;
            e.m14 = c + (a.size.x * b.x | 0);
            e.m21 = 0;
            e.m22 = -d;
            e.m23 = 0;
            e.m24 = d + (a.size.y * b.y | 0)
        }
        zt(a) {
            return new kd(this,a)
        }
        hd(a) {
            this.globalAlpha = a;
            this.context.globalAlpha = a
        }
        Jn(a) {
            this.Ja = this.Ks[a]
        }
        Tu(a, b) {
            let c = this.Ja.canvas
              , d = c.width
              , e = c.height
              , f = !1
              , g = this.Ab.size;
            if (d > g.x || e > g.y)
                c.width = g.x,
                c.height = g.y;
            if (d < a || e < b)
                f = !0;
            else
                try {
                    this.Ja.reset()
                } catch (h) {
                    f = !0
                }
            f && (c.width = a,
            c.height = b)
        }
        drawImage(a, b, c, d, e, f, g, h, m) {
            this.Ja.drawImage(a, b, c, d, e, f, g, h, m)
        }
        Uh(a) {
            this.Ja.fillStyle = a
        }
        EB(a) {
            this.Ja.strokeStyle = a
        }
        pl(a) {
            let b = this.Ja;
            b.globalCompositeOperation != a && (b.globalCompositeOperation = a)
        }
        resetTransform() {
            this.Ja.setTransform(1, 0, 0, 1, 0, 0)
        }
        oj(a) {
            a = this.xh(a);
            this.Ja.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24)
        }
        clearRect(a, b, c, d) {
            this.Ja.clearRect(a, b, c, d)
        }
        fillRect(a, b, c, d) {
            this.Ja.fillRect(a, b, c, d)
        }
        nx(a, b, c, d, e) {
            this.Ja.globalAlpha = 1;
            var f = this.vh(2);
            this.Jn(1);
            this.Tu(d, e);
            this.pl("copy");
            var g = f.transform;
            var h = g.Fb;
            f = g.offset;
            switch (g.hint) {
            case 0:
                this.drawImage(a, b, c, d, e, 0, 0, d, e);
                this.mI(this.Ja, g, d, e);
                break;
            case 1:
                this.Ja.globalAlpha = g.Fb.w;
                this.drawImage(a, b, c, d, e, 0, 0, d, e);
                break;
            case 2:
                var m = 1 - h.x;
                f = 0 == f.x ? h = g = 0 : h = g = 1;
                this.Uh("rgba(" + ((255 * g | 0) & 255) + "," + ((255 * h | 0) & 255) + "," + ((255 * f | 0) & 255) + "," + m.toFixed(2) + ")");
                this.fillRect(0, 0, d, e);
                this.pl("destination-atop");
                this.drawImage(a, b, c, d, e, 0, 0, d, e);
                break;
            case 3:
                m = 1 - h.x,
                g = f.x / m,
                h = f.y / m,
                f = f.z / m,
                this.Uh("rgba(" + ((255 * g | 0) & 255) + "," + ((255 * h | 0) & 255) + "," + ((255 * f | 0) & 255) + "," + m.toFixed(2) + ")"),
                this.fillRect(0, 0, d, e),
                this.pl("destination-atop"),
                this.drawImage(a, b, c, d, e, 0, 0, d, e)
            }
            a = this.Ja.canvas;
            this.Jn(0);
            return a
        }
        mx(a, b, c, d, e) {
            this.Jn(2);
            this.Tu(d, e);
            this.Uh(Mh);
            this.fillRect(0, 0, d, e);
            this.Ja.globalAlpha = this.globalAlpha;
            this.pl("screen");
            this.drawImage(a, b, c, d, e, 0, 0, d, e);
            this.fillRect(0, 0, d, e);
            a = this.Ja.canvas;
            this.Jn(0);
            return a
        }
        mI(a, b, c, d) {
            c = a.getImageData(0, 0, c, d);
            d = c.data;
            let e = 0
              , f = d.length;
            var g = b.Fb
              , h = b.offset;
            b = g.x;
            let m = g.y
              , n = g.z;
            g = g.w;
            let q = h.x
              , p = h.y
              , v = h.z;
            h = h.w;
            let u;
            for (; e < f; )
                u = d[e + 3],
                d[e] = 255 * (d[e] / u * b + q),
                ++e,
                d[e] = 255 * (d[e] / u * m + p),
                ++e,
                d[e] = 255 * (d[e] / u * n + v),
                ++e,
                d[e] = 255 * (u / 255 * g + h),
                ++e;
            a.putImageData(c, 0, 0)
        }
        sB(a) {
            this.Ja.imageSmoothingEnabled = a
        }
    }
    le.g = !0;
    le.u = fd;
    Object.assign(le.prototype, {
        j: le
    });
    class kd extends gd {
        constructor(a, b) {
            super(a, b)
        }
    }
    kd.g = !0;
    kd.u = gd;
    Object.assign(kd.prototype, {
        j: kd
    });
    class Jf extends ec {
        constructor() {
            super()
        }
        hx(a, b, c) {
            var d = this.Sm;
            let e = d.o
              , f = d.C
              , g = d.A;
            d = d.D;
            switch (a) {
            case 10:
                var h = c[b];
                a = c[b + 1];
                var m = c[b + 2];
                c = c[b + 3];
                h < e && (e = h);
                h > g && (g = h);
                a < f && (f = a);
                a > d && (d = a);
                h += m;
                c = a + c;
                h < e && (e = h);
                h > g && (g = h);
                c < f && (f = c);
                c > d && (d = c);
                b += 4;
                break;
            case 11:
                h = c[b];
                a = c[b + 1];
                m = c[b + 2];
                c = c[b + 3];
                h < e && (e = h);
                h > g && (g = h);
                a < f && (f = a);
                a > d && (d = a);
                h += m;
                c = a + c;
                h < e && (e = h);
                h > g && (g = h);
                c < f && (f = c);
                c > d && (d = c);
                b += 5;
                break;
            case 12:
                a = c[b];
                h = c[b + 1];
                a < e && (e = a);
                a > g && (g = a);
                h < f && (f = h);
                h > d && (d = h);
                a = c[b + 2];
                c = c[b + 3];
                a < e && (e = a);
                a > g && (g = a);
                c < f && (f = c);
                c > d && (d = c);
                b += 4;
                break;
            case 13:
                a = c[b];
                h = c[b + 1];
                a < e && (e = a);
                a > g && (g = a);
                h < f && (f = h);
                h > d && (d = h);
                a = c[b + 2];
                h = c[b + 3];
                a < e && (e = a);
                a > g && (g = a);
                h < f && (f = h);
                h > d && (d = h);
                a = c[b + 4];
                c = c[b + 5];
                a < e && (e = a);
                a > g && (g = a);
                c < f && (f = c);
                c > d && (d = c);
                b += 6;
                break;
            case 14:
                h = c[b];
                a = c[b + 1];
                c = c[b + 2];
                m = h - c;
                var n = a - c;
                m < e && (e = m);
                m > g && (g = m);
                n < f && (f = n);
                n > d && (d = n);
                h += c;
                c = a + c;
                h < e && (e = h);
                h > g && (g = h);
                c < f && (f = c);
                c > d && (d = c);
                b += 5;
                break;
            case 15:
                h = c[b];
                a = c[b + 1];
                c = Math.max(c[b + 2], c[b + 3]);
                m = h - c;
                n = a - c;
                m < e && (e = m);
                m > g && (g = m);
                n < f && (f = n);
                n > d && (d = n);
                h += c;
                c = a + c;
                h < e && (e = h);
                h > g && (g = h);
                c < f && (f = c);
                c > d && (d = c);
                b += 8;
                break;
            case 16:
                ++b;
                break;
            case 17:
                b += 1 + (c[b] | 0)
            }
            c = this.Sm;
            c.o = e;
            c.C = f;
            c.A = g;
            c.D = d;
            return b
        }
        ta() {
            return 1305
        }
    }
    Jf.g = !0;
    Jf.u = ec;
    Object.assign(Jf.prototype, {
        j: Jf
    });
    class Be extends La {
        constructor() {
            super()
        }
        M(a) {
            let b = a.P
              , c = a.effect;
            var d = c.qb;
            if (d.tp()) {
                var e = d.image.data
                  , f = d.size.x
                  , g = d.size.y
                  , h = b.globalAlpha;
                b.sB(0 < (d.flags & 8));
                0 < (b.Tc & 4) && (e = b.nx(e, 0, 0, f, g));
                0 < (b.Tc & 1) && 0 == b.mg && (e = b.mx(e, 0, 0, f, g),
                h = 1);
                b.hd(h);
                b.Jn(0);
                b.oj(a.na.Aa);
                g = c.ag.we;
                a = c.qb.Nb.ik;
                d = g.K;
                f = 0;
                g = 5 * (g.Z / 5 | 0);
                h = c.size;
                var m = h.x
                  , n = h.y;
                h = c.Li;
                var q = m - h
                  , p = n - h
                  , v = null;
                c.clip && (v = b.Ja,
                v.save(),
                v.rect(h, h, m - 2 * h, n - 2 * h),
                v.clip());
                for (m = c.multiline; f < g; ) {
                    var u = d[f++];
                    n = d[f++];
                    let y = d[f++]
                      , B = d[f++]
                      , x = f++;
                    u = a[u].sd;
                    if (m) {
                        if (y > p)
                            break
                    } else if (n > q)
                        break;
                    n + B > h && b.drawImage(e, u.x, u.y, u.w, u.G, n, y, B, d[x])
                }
                c.clip && v.restore()
            }
        }
        hc() {
            return 705
        }
        ug() {
            return 401
        }
    }
    Be.g = !0;
    Be.u = La;
    Object.assign(Be.prototype, {
        j: Be
    });
    class Ge extends La {
        constructor() {
            super()
        }
        M(a) {
            var b = a.P;
            let c = a.effect;
            this.kh = a.P.Ab.getContext();
            this.kh.lineWidth = 1;
            b.oj(a.na.Aa);
            a = 0;
            for (b = c.points.length; a < b; ) {
                var d = a++;
                this.kh.globalAlpha = c.$l[d];
                this.kh.lineWidth = 2 * c.V;
                let f = new Path2D
                  , g = c.points[d];
                d = c.jh[d];
                let h = 0
                  , m = g.length;
                for (; h < m; ) {
                    let n = h++;
                    var e = d[n];
                    this.kh.strokeStyle = "rgba(" + ((255 * e.x | 0) & 255) + "," + ((255 * e.y | 0) & 255) + "," + ((255 * e.z | 0) & 255) + "," + e.w.toFixed(2) + ")";
                    e = g[n].x;
                    let q = g[n].y;
                    0 == n ? f.moveTo(e, q) : f.lineTo(e, q)
                }
                this.kh.stroke(f)
            }
        }
        hc() {
            return 605
        }
    }
    Ge.g = !0;
    Ge.u = La;
    Object.assign(Ge.prototype, {
        j: Ge
    });
    class Ce extends La {
        constructor() {
            super()
        }
        M(a) {
            let b = a.P;
            var c = a.effect
              , d = a.na;
            b.oj(a.na.Aa);
            a = c.color;
            if (0 < (b.Tc & 4)) {
                var e = b.lh;
                c = c.color;
                a = e.Fb;
                let f = e.offset;
                e = c.x * a.x + f.x;
                let g = c.y * a.y + f.y
                  , h = c.z * a.z + f.z;
                c = c.w * a.w + f.w;
                a = new F(0 > e ? 0 : 1 < e ? 1 : e,0 > g ? 0 : 1 < g ? 1 : g,0 > h ? 0 : 1 < h ? 1 : h,0 > c ? 0 : 1 < c ? 1 : c)
            }
            b.hd(b.globalAlpha);
            b.Uh("rgba(" + ((255 * a.x | 0) & 255) + "," + ((255 * a.y | 0) & 255) + "," + ((255 * a.z | 0) & 255) + "," + a.w.toFixed(2) + ")");
            d = d.size;
            b.fillRect(0, 0, d.x, d.y)
        }
        hc() {
            return 1205
        }
        ug() {
            return 401
        }
    }
    Ce.g = !0;
    Ce.u = La;
    Object.assign(Ce.prototype, {
        j: Ce
    });
    class De extends La {
        constructor() {
            super()
        }
        M(a) {
            let b = a.P;
            var c = a.effect
              , d = b.Ab.size;
            a = d.x;
            d = d.y;
            b.resetTransform();
            b.hd(b.globalAlpha);
            let e = 0
              , f = 0
              , g = c.oq;
            null != g && (e = g.o,
            f = g.C,
            a = g.A - g.o,
            d = g.D - g.C);
            c = c.color;
            b.Uh("rgba(" + ((255 * c.x | 0) & 255) + "," + ((255 * c.y | 0) & 255) + "," + ((255 * c.z | 0) & 255) + "," + c.w.toFixed(2) + ")");
            b.fillRect(e, f, a, d)
        }
        hc() {
            return 305
        }
    }
    De.g = !0;
    De.u = La;
    Object.assign(De.prototype, {
        j: De
    });
    class Fe extends La {
        constructor() {
            super()
        }
        Sa(a) {
            super.Sa(a)
        }
        M(a) {
            let b = a.P;
            var c = a.effect;
            this.kh = a.P.Ab.getContext();
            b.oj(a.na.Aa);
            a = 0;
            for (c = c.sr; a < c.length; )
                this.FJ(c[a++])
        }
        FJ(a) {
            let b = a[0];
            if (0 != a.length) {
                var c = new Path2D;
                c.moveTo(b.x, b.y);
                for (var d = 1, e = a.length; d < e; )
                    b = a[d],
                    c.lineTo(b.x, b.y),
                    d += 2;
                for (d = a.length - 2; 0 <= d; )
                    b = a[d],
                    c.lineTo(b.x, b.y),
                    d -= 2;
                c.closePath();
                this.kh.fillStyle = "#ffffffff";
                this.kh.fill(c)
            }
        }
        hc() {
            return 1105
        }
    }
    Fe.g = !0;
    Fe.u = La;
    Object.assign(Fe.prototype, {
        j: Fe
    });
    class He extends La {
        constructor() {
            super()
        }
        M(a) {
            var b = a.effect;
            a.P.oj(a.na.Aa);
            a = a.P.Ab.getContext();
            a.lineWidth = b.lineWidth;
            a.globalAlpha = 1;
            var c = b.color;
            a.strokeStyle = "rgba(" + ((255 * c.x | 0) & 255) + "," + ((255 * c.y | 0) & 255) + "," + ((255 * c.z | 0) & 255) + "," + c.w.toFixed(2) + ")";
            c = b.qn;
            let d = 2 * Math.PI
              , e = d / c
              , f = b.F.x
              , g = b.F.y;
            b = b.V;
            let h = 0;
            for (; h < c; ) {
                var m = h++;
                1 != (m & 1) && (m = m / c * d,
                a.beginPath(),
                a.arc(f, g, b, m, m + e, !1),
                a.stroke(),
                a.closePath())
            }
        }
        hc() {
            return 505
        }
    }
    He.g = !0;
    He.u = La;
    Object.assign(He.prototype, {
        j: He
    });
    class Ee extends La {
        constructor() {
            super();
            this.vN = new F(0,0,0,0);
            this.qO = !1
        }
        M(a) {
            var b = a.effect;
            let c = a.P
              , d = 0 < (c.Tc & 1) && 0 == c.mg ? 1 : 0
              , e = 0 < (c.Tc & 4) ? c.lh : null
              , f = b.tM
              , g = !1
              , h = !1
              , m = !1
              , n = 0
              , q = b.Is
              , p = b.data
              , v = 0
              , u = 0;
            let y;
            b = b.Js;
            if (0 != b) {
                var B = c.Ja;
                this.qO ? c.resetTransform() : (a = c.xh(a.na.Aa),
                B.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24));
                a = !1;
                for (var x = new Path2D; v < b; )
                    switch (q[v++]) {
                    case 1:
                        var H = p[u++];
                        y = p[u++];
                        x.moveTo(H, y);
                        break;
                    case 2:
                        H = p[u++];
                        y = p[u++];
                        x.lineTo(H, y);
                        break;
                    case 3:
                        u++;
                        u++;
                        x.closePath();
                        break;
                    case 4:
                        c.EB(this.Ay(p[u++], Math.min(p[u++] + d, 1), e));
                        n = p[u++] | 0;
                        B.lineWidth = n;
                        m = 0 == h;
                        g = !0;
                        break;
                    case 5:
                        c.Uh(this.Ay(p[u++], Math.min(p[u++] + d, 1), e));
                        m = g;
                        h = !0;
                        break;
                    case 6:
                        g = !1;
                        c.EB(Mh);
                        B.lineWidth = 1;
                        break;
                    case 7:
                        h = !1;
                        c.Uh(Mh);
                        break;
                    case 8:
                        H = g && f && 1 == (n & 1);
                        a ? H || (B.translate(-.5, -.5),
                        a = !1) : H && (B.translate(.5, .5),
                        a = !0);
                        g && h ? m ? (B.stroke(x),
                        B.fill(x)) : (B.fill(x),
                        B.stroke(x)) : g ? B.stroke(x) : h && B.fill(x);
                        v < b - 1 && (x = new Path2D);
                        break;
                    default:
                        u = 0
                    }
            }
        }
        hc() {
            return 1005
        }
        Ay(a, b, c) {
            if (null != c) {
                var d = this.vN;
                d.x = (a >> 16 & 255) / 255;
                d.y = (a >> 8 & 255) / 255;
                d.z = (a & 255) / 255;
                d.w = b;
                a = c.Fb;
                c = c.offset;
                let e = d;
                d = e.x * a.x + c.x;
                b = e.y * a.y + c.y;
                let f = e.z * a.z + c.z;
                a = e.w * a.w + c.w;
                d = new F(0 > d ? 0 : 1 < d ? 1 : d,0 > b ? 0 : 1 < b ? 1 : b,0 > f ? 0 : 1 < f ? 1 : f,0 > a ? 0 : 1 < a ? 1 : a);
                return "rgba(" + ((255 * d.x | 0) & 255) + "," + ((255 * d.y | 0) & 255) + "," + ((255 * d.z | 0) & 255) + "," + d.w.toFixed(2) + ")"
            }
            a |= (255 * b | 0) << 24;
            c = rg.Kr;
            return "#" + c[a >> 16 & 255] + c[a >> 8 & 255] + c[a & 255] + c[a >>> 24]
        }
    }
    Ee.g = !0;
    Ee.u = La;
    Object.assign(Ee.prototype, {
        j: Ee
    });
    class F {
        constructor(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.z = c;
            this.w = d
        }
    }
    F.g = !0;
    Object.assign(F.prototype, {
        j: F
    });
    class Ie extends La {
        constructor() {
            super()
        }
        M(a) {
            let b = a.effect;
            a.P.oj(a.na.Aa);
            a = a.P.Ab.getContext();
            a.lineWidth = b.lineWidth;
            a.globalAlpha = b.Op;
            a.strokeStyle = "#ffffff";
            a.beginPath();
            a.arc(0, 0, b.V + b.lineWidth / 2, 0, 2 * Math.PI, !1);
            a.stroke();
            a.closePath()
        }
        hc() {
            return 905
        }
    }
    Ie.g = !0;
    Ie.u = La;
    Object.assign(Ie.prototype, {
        j: Ie
    });
    class Ae extends La {
        constructor() {
            super()
        }
        M(a) {
            var b = a.effect;
            let c = a.P;
            var d = a.na
              , e = b.qb;
            if (e.tp()) {
                c.sB(0 < (e.flags & 8));
                a = e.image.data;
                var f = d.size
                  , g = f.x;
                f = f.y;
                c.oj(d.Aa);
                d = b.Rn;
                var h = d.x;
                var m = d.y;
                var n = d.w
                  , q = d.G
                  , p = c.globalAlpha;
                0 < (c.Tc & 4) && (a = c.nx(a, h, m, n, q),
                h = m = 0);
                0 < (c.Tc & 1) && 0 == c.mg && (a = c.mx(a, h, m, n, q),
                h = m = 0,
                p = 1);
                d = 1 / c.jb.xl.m11 * c.oI;
                if (1 == b.yu && 1 == b.zu && 0 == b.offsetX && 0 == b.offsetY)
                    if (c.hd(p),
                    null != b.Iu) {
                        var v = b.Iu;
                        0 == v.C && v.D == q && (e = v.o,
                        b = v.A,
                        p = n - b,
                        g < e + p ? (v = g / (e + p),
                        g = e * v,
                        p *= v,
                        c.drawImage(a, h, m, e, q, 0, 0, g + d, f),
                        c.drawImage(a, h + b, m, n - b, q, g - d, 0, p, f)) : (c.drawImage(a, h, m, e, q, 0, 0, e, f),
                        c.drawImage(a, h + b, m, n - b, q, g - p, 0, p, f),
                        c.drawImage(a, h + e, m, v.A - v.o, q, e - d, 0, g - (e + p) + 2 * d, f)))
                    } else
                        c.drawImage(a, h, m, n, q, 0 - d, 0 - d, g + 2 * d, f + 2 * d);
                else {
                    c.hd(p);
                    h = e.size.x;
                    m = e.size.y;
                    f = b.yu;
                    var u = b.zu;
                    g = c.Ja;
                    g.save();
                    n = new Path2D;
                    n.rect(0, 0, h, m);
                    g.clip(n);
                    h = e.size.x;
                    m = e.size.y;
                    n = h / f;
                    q = m / u;
                    p = 1 / f;
                    v = 1 / u;
                    var y = b.offsetX
                      , B = b.offsetY;
                    b = y % 1;
                    0 > b && ++b;
                    b = -b;
                    var x = B % 1;
                    0 > x && ++x;
                    x = -x;
                    var H, D = n + 2 * d, Z = q + 2 * d;
                    if (0 < (e.flags & 4))
                        for (e = 1 == ((B | 0) & 1) ? 1 : -1,
                        0 <= B && (e *= -1),
                        B = x * q,
                        u = x / u; 1 > u; ) {
                            x = u + v;
                            let Y = 1 == ((y | 0) & 1) ? -1 : 1;
                            0 <= y && (Y *= -1);
                            u = b * n;
                            for (H = b / f; 1 > H; )
                                H += p,
                                g.save(),
                                g.scale(Y, e),
                                0 < Y ? 0 < e ? c.drawImage(a, 0, 0, h, m, u - d, B - d, D, Z) : c.drawImage(a, 0, 0, h, m, u - d, -B - q - d, D, Z) : 0 < e ? c.drawImage(a, 0, 0, h, m, -u - n - d, B - d, D, Z) : c.drawImage(a, 0, 0, h, m, -u - n - d, -B - q - d, D, Z),
                                g.restore(),
                                Y = -Y,
                                u += n;
                            e = -e;
                            B += q;
                            u = x
                        }
                    else
                        for (B = x * q,
                        u = x / u; 1 > u; ) {
                            x = u + v;
                            u = b * n;
                            for (H = b / f; 1 > H; )
                                H += p,
                                c.drawImage(a, 0, 0, h, m, u - d, B - d, n + 2 * d, q + 2 * d),
                                u += n;
                            B += q;
                            u = x
                        }
                    g.restore()
                }
            }
        }
        hc() {
            return 205
        }
        ug() {
            return 401
        }
    }
    Ae.g = !0;
    Ae.u = La;
    Object.assign(Ae.prototype, {
        j: Ae
    });
    class db {
        constructor(a, b, c, d, e, f, g, h, m, n, q, p, v, u, y, B) {
            this.m11 = a;
            this.m12 = b;
            this.m13 = c;
            this.m14 = d;
            this.m21 = e;
            this.m22 = f;
            this.m23 = g;
            this.m24 = h;
            this.m31 = m;
            this.m32 = n;
            this.m33 = q;
            this.m34 = p;
            this.m41 = v;
            this.m42 = u;
            this.m43 = y;
            this.m44 = B
        }
    }
    db.g = !0;
    Object.assign(db.prototype, {
        j: db
    });
    class ri {
    }
    class Kf {
        static By(a) {
            return Kf.Ix[a >> 2]
        }
    }
    class Ub {
        constructor() {
            this.Ph = this.L = this.P = null;
            this.Dx = [];
            this.Uc = []
        }
        Sa(a) {
            this.P = a;
            this.L = this.P.L;
            this.createProgram() && this.Xf()
        }
        use() {
            this.P.Yx != this && (this.P.Yx = this,
            this.L.useProgram(this.Ph))
        }
        drawArrays(a, b, c) {
            null == c && (c = 0);
            if (0 != a) {
                for (var d = 0, e = this.Dx; d < e.length; )
                    e[d++].bind();
                this.L.drawArrays(b, c, a)
            }
        }
        Wd(a, b) {
            var c, d;
            null == d && (d = !1);
            null == c && (c = -1);
            if (-1 == a)
                this.Uc.push(new mb(a,null,!1,b,c));
            else {
                var e = Ga.find(this.Uc, function(f) {
                    return f.location == a
                });
                e.type = b;
                e.usage = c;
                e.normalize = d
            }
        }
        zf(a, b) {
            for (var c = 0, d = 0, e = this.Uc; d < e.length; ) {
                var f = e[d];
                ++d;
                f.location > c && (c = f.location)
            }
            c = new fh(c + 1);
            d = 0;
            for (e = this.Uc; d < e.length; )
                f = e[d],
                ++d,
                c.hI(f.location, f.type, f.usage, f.normalize);
            c.seal();
            a = new ld(this.L,a,c,b);
            this.Dx.push(a);
            return a
        }
        createProgram() {
            let a = this.L
              , b = this.Mz(35633, this.Gf())
              , c = this.Mz(35632, this.Ef());
            this.Ph = a.createProgram();
            a.attachShader(this.Ph, b);
            a.attachShader(this.Ph, c);
            a.linkProgram(this.Ph);
            return !0
        }
        Mz(a, b) {
            let c = this.L;
            a = this.L.createShader(a);
            c.shaderSource(a, b);
            c.compileShader(a);
            return a
        }
        Gf() {
            return null
        }
        Ef() {
            return null
        }
        te(a) {
            return this.L.getAttribLocation(this.Ph, a)
        }
        getUniformLocation(a) {
            return this.L.getUniformLocation(this.Ph, a)
        }
        ci(a, b) {
            let c = Ub.kC;
            c[0] = b.m11;
            c[4] = b.m12;
            c[8] = b.m13;
            c[12] = b.m14;
            c[1] = b.m21;
            c[5] = b.m22;
            c[9] = b.m23;
            c[13] = b.m24;
            c[2] = b.m31;
            c[6] = b.m32;
            c[10] = b.m33;
            c[14] = b.m34;
            c[3] = b.m41;
            c[7] = b.m42;
            c[11] = b.m43;
            c[15] = b.m44;
            this.L.uniformMatrix4fv(a, !1, Ub.kC)
        }
        wC(a, b) {
            this.L.activeTexture(33984);
            this.L.bindTexture(3553, b);
            this.L.uniform1i(a, 0)
        }
        Xf() {}
    }
    Ub.g = !0;
    Object.assign(Ub.prototype, {
        j: Ub
    });
    class mb {
        constructor(a, b, c, d, e) {
            this.location = a;
            this.name = b;
            this.normalize = c;
            this.type = d;
            this.usage = e
        }
    }
    mb.g = !0;
    Object.assign(mb.prototype, {
        j: mb
    });
    class Lf extends Ub {
        constructor(a) {
            super();
            this.Sa(a);
            this.Wd(this.uo, 17);
            this.Ha = this.zf(4, 2);
            this.Ha.setData(this.uo, [0, 1, 1, 1, 0, 0, 1, 0]);
            this.ld = []
        }
        sJ(a) {
            this.use();
            var b = this.P.xh(this.P.vh(1).cq.Aa);
            this.ci(this.fI, b);
            for (this.L.uniform4f(this.eI, 0, 0, 0, 0); 0 < this.ld.length; )
                this.ld.pop();
            for (b = 0; b < a.length; ) {
                let c = a[b];
                ++b;
                this.ld.push(c.x);
                this.ld.push(c.y)
            }
            this.Ha.resize(this.ld.length);
            this.Ha.setData(this.uo, this.ld);
            this.P.L.stencilFunc(519, 1, 255);
            this.P.L.stencilOp(7680, 7680, 7681);
            this.drawArrays(a.length, 6);
            this.P.L.stencilFunc(514, 1, 255)
        }
        Gf() {
            return "uniform mat4 u_m;attribute vec2 a_f;void main(){gl_Position=u_m*vec4(a_f,0,1);}"
        }
        Ef() {
            return "precision mediump float;uniform vec4 u_c;void main(){gl_FragColor=u_c;}"
        }
        Xf() {
            this.uo = this.te("a_f");
            this.Uc.push(new mb(this.uo,"a_f",!1,-1,-1));
            this.fI = this.getUniformLocation("u_m");
            this.eI = this.getUniformLocation("u_c")
        }
    }
    Lf.g = !0;
    Lf.u = Ub;
    Object.assign(Lf.prototype, {
        j: Lf
    });
    class gh {
        constructor(a, b, c) {
            this.type = a;
            this.location = b;
            this.usage = c;
            this.cu = a % 4 + 1;
            this.Uk = this.cu * Kf.Ix[a >> 2];
            this.offset = 0;
            this.iA = !1
        }
    }
    gh.g = !0;
    Object.assign(gh.prototype, {
        j: gh
    });
    class ld extends yf {
        constructor(a, b, c, d) {
            super(b, c.wl, d);
            this.format = c;
            this.L = a;
            this.ws = a.createBuffer();
            this.data = new ArrayBuffer(this.Uk);
            this.Cr = [];
            this.qz()
        }
        H() {
            this.L.deleteBuffer(this.ws);
            this.data = this.Cr = this.L = this.ws = null
        }
        resize(a) {
            return super.resize(a) ? (this.data = new ArrayBuffer(this.Uk),
            this.qz(),
            !0) : !1
        }
        Ty(a) {
            return this.Cr[a >> 2]
        }
        bind() {
            let a = this.L;
            a.bindBuffer(34962, this.ws);
            let b = this.format.wl;
            var c = this.format.attributes;
            let d = c.K
              , e = 0;
            for (c = c.Z; e < c; ) {
                let f = d[e++];
                -1 != f.location && (a.enableVertexAttribArray(f.location),
                a.vertexAttribPointer(f.location, f.cu, ld.vK[f.type >> 2], f.iA, b, f.offset))
            }
            this.yi && (a.bufferData(34962, this.data, 35040 + 4 * this.iP),
            this.yi = !1)
        }
        QJ(a) {
            var b = 0;
            null == b && (b = 0);
            return new Mf(this,a,b)
        }
        uy() {
            var a = [];
            let b = Array(this.format.Xt + 1);
            for (var c = 0, d = b.length; c < d; )
                b[c++] = null;
            if (0 == a.length)
                for (a = this.format.iterator(); a.fb(); )
                    c = a.next(),
                    -1 != c.location && (b[c.location] = this.QJ(c.location));
            else
                for (c = 0; c < a.length; )
                    d = a[c++],
                    b[d] = new Mf(this,d,0);
            return b
        }
        setData(a, b, c) {
            null == c && (c = 0);
            this.yi = !0;
            0 == c && (c = b.length);
            var d = this.format.get(a);
            a = d.cu;
            var e = Kf.By(d.type);
            let f = this.format.wl / e | 0;
            e = d.offset / e | 0;
            d = this.Ty(d.type);
            let g = 0;
            for (; g < c; )
                d[e + (g / a | 0) * f + g % a] = b[g],
                ++g
        }
        qz() {
            let a = this.data;
            this.Cr = [new Int8Array(a), new Uint8Array(a), new Int16Array(a), new Uint16Array(a), new Float32Array(a), new Uint32Array(a)]
        }
    }
    ld.g = !0;
    ld.u = yf;
    Object.assign(ld.prototype, {
        j: ld
    });
    class Mf {
        constructor(a, b, c) {
            this.Ya = a;
            let d = a.format;
            b = d.get(b);
            this.view = a.Ty(b.type);
            a = Kf.By(b.type);
            this.stride = d.wl / a | 0;
            this.start = this.i = (b.offset / a | 0) + c * this.stride;
            this.Ya.yi = !0
        }
        FB(a, b) {
            let c = this.view
              , d = this.i
              , e = this.stride;
            c[d + 0 * e] = 0;
            c[d + 0 * e + 1] = 1;
            c[d + e] = 1;
            c[d + e + 1] = a;
            c[d + 2 * e] = b;
            c[d + 2 * e + 1] = 0;
            this.i = d + 3 * e
        }
    }
    Mf.g = !0;
    Object.assign(Mf.prototype, {
        j: Mf
    });
    class Nh {
        static Eu(a) {
            let b = 0
              , c = a.length;
            for (; b < c; ) {
                let d = a[b++];
                null != d && (d.i = d.start,
                d.Ya.yi = !0)
            }
        }
    }
    class fh {
        constructor(a) {
            this.wl = this.Xt = 0;
            this.attributes = new tb(a);
            this.attributes.Sa(a, null)
        }
        get(a) {
            return this.attributes.K[a]
        }
        iterator() {
            return this.attributes.iterator()
        }
        hI(a, b, c, d) {
            null == d && (d = !1);
            null == c && (c = -1);
            b = new gh(b,a,c);
            this.Xt = Math.max(this.Xt, a);
            b.iA = d;
            -1 == a ? this.attributes.ru(b) : this.attributes.K[a] = b;
            this.wl += b.Uk
        }
        seal() {
            this.attributes.qM();
            let a = this.attributes.Z
              , b = 1;
            for (; b < a; ) {
                let c = this.attributes.K[b - 1];
                this.attributes.K[b].offset = c.offset + c.Uk;
                ++b
            }
        }
    }
    fh.g = !0;
    Object.assign(fh.prototype, {
        j: fh
    });
    class Pa extends Ub {
        constructor() {
            super();
            this.Kv = this.ug();
            this.hy = this.hc()
        }
        ug() {
            return 201
        }
        hc() {
            throw 9;
        }
    }
    Pa.g = !0;
    Pa.sb = [be];
    Pa.u = Ub;
    Object.assign(Pa.prototype, {
        j: Pa
    });
    class yb extends fd {
        constructor() {
            super("webgl");
            this.L = null;
            this.ak = 1;
            this.lh = new $b;
            this.js = this.stencilMask = this.Yx = null;
            this.WI = new tb
        }
        Kn(a) {
            super.Kn(a);
            this.L = a.getContext();
            this.hl()
        }
        clear(a) {
            super.clear();
            null == a && (a = this.clearColor);
            this.L.clearColor(a.x, a.y, a.z, a.w);
            this.L.clear(17664)
        }
        Ih() {
            if (!super.Ih() || null == this.L)
                return !1;
            this.hl();
            return !0
        }
        ph() {
            super.ph()
        }
        qj(a, b, c, d) {
            super.qj(a, b, c, d);
            if (0 == a && 0 == b && 1 == c && 1 == d)
                this.L.viewport(0, 0, this.Ab.size.x, this.Ab.size.y),
                this.L.disable(3089);
            else {
                d = this.Ab;
                var e = this.viewport;
                a = d.size.x * e.x | 0;
                b = d.size.x * e.w | 0;
                c = d.size.y * e.G | 0;
                d = (this.Ab.size.y | 0) - c - (d.size.y * e.y | 0);
                this.L.viewport(a, d, b, c);
                this.L.enable(3089);
                this.L.scissor(a, d, b, c)
            }
        }
        Yu(a) {
            this.ak = a.Jj
        }
        pB(a) {
            a.Vl ? (this.L.enable(2884),
            this.L.frontFace(a.ZH ? 2305 : 2304),
            this.L.cullFace(1029)) : this.L.disable(2884)
        }
        oB(a) {
            a.Vl ? (this.L.enable(2929),
            this.L.depthFunc(yb.cJ[a.Xw])) : (this.L.disable(2929),
            this.L.depthFunc(513))
        }
        Lu(a) {
            let b = 0
              , c = 0;
            if (a.GM)
                switch (a.mg) {
                case 0:
                    b = 1;
                    c = 0;
                    break;
                case 1:
                    b = 1;
                    c = 771;
                    break;
                case 2:
                    b = 774;
                    c = 771;
                    break;
                case 3:
                    b = 770;
                    c = 772;
                    break;
                case 4:
                    b = 1;
                    c = 769;
                    break;
                case 5:
                    b = yb.Do[a.LB],
                    c = yb.Do[a.ay]
                }
            else
                switch (a.mg) {
                case 0:
                    b = 1;
                    c = 0;
                    break;
                case 1:
                    b = 770;
                    c = 771;
                    break;
                case 2:
                    b = 774;
                    c = 771;
                    break;
                case 3:
                    c = b = 1;
                    break;
                case 4:
                    b = 770;
                    c = 1;
                    break;
                case 5:
                    b = yb.Do[a.LB],
                    c = yb.Do[a.ay]
                }
            this.L.enable(3042);
            this.L.blendFunc(b, c);
            let d;
            switch (a.blendEquation) {
            case 1:
                d = 32774;
                break;
            case 2:
                d = 32778;
                break;
            case 3:
                d = 32779
            }
            this.L.blendEquation(d)
        }
        Nu(a) {
            this.lh = a.transform
        }
        Wu(a) {
            a = a.Gs;
            null != this.js && null == a && this.L.disable(2960);
            null == this.js && null != a && (this.L.clearStencil(0),
            this.L.enable(2960),
            null == this.stencilMask && (this.stencilMask = new Lf(this)),
            this.stencilMask.sJ(a));
            this.js = a
        }
        Ss(a) {
            if (0 == this.JL)
                super.Ss(a);
            else {
                var b = a.iterator()
                  , c = b.K[b.$d++]
                  , d = this.WI;
                d.gf(a.Z);
                d.clear();
                var e = d.K[d.Z++] = c;
                a = c.vp;
                var f = c.effect;
                f.update(this);
                this.info.effect = f;
                for (this.info.vx = d; b.$d < b.Mf; ) {
                    c = b.K[b.$d++];
                    c.effect.update(this);
                    let g = f.type == c.effect.type;
                    if (g = (g = (g = (g = g && f.Ma == c.effect.Ma) && (a & 3) == (c.vp & 3)) && (0 < (a & 1) ? e.xj[0].Ma == c.xj[0].Ma : !0)) && (0 < (a & 2) ? e.xj[1].Ma == c.xj[1].Ma : !0))
                        d.K[d.Z++] = c;
                    else {
                        if (1 == d.Z)
                            this.dk(d.ya());
                        else if (a = d.K[0],
                        a = this.Ey(a.effect.type, a.type),
                        null != a)
                            a.M(this.info);
                        else
                            for (a = d.K,
                            f = 0,
                            e = d.Z; f < e; )
                                this.dk(a[f++]);
                        d.clear();
                        e = d.K[d.Z++] = c;
                        a = c.vp;
                        f = c.effect;
                        f.update(this);
                        this.info.effect = f;
                        this.info.vx = d
                    }
                }
                if (0 < d.Z)
                    if (1 == d.Z)
                        this.dk(d.ya());
                    else if (b = d.K[0],
                    b = this.Ey(b.effect.type, b.type),
                    null != b)
                        b.M(this.info);
                    else
                        for (b = d.K,
                        c = 0,
                        d = d.Z; c < d; )
                            this.dk(b[c++])
            }
        }
        zt(a) {
            return new Nf(this,a)
        }
    }
    yb.g = !0;
    yb.u = fd;
    Object.assign(yb.prototype, {
        j: yb
    });
    class Nf extends kd {
        constructor(a, b) {
            super(a, b);
            this.handle = null;
            this.L = a.L
        }
        H() {
            null == this.parent && this.L.deleteTexture(this.handle);
            this.L = this.handle = null;
            super.H()
        }
        Qu(a) {
            super.Qu(a);
            null != this.handle && (null == this.parent && this.L.deleteTexture(this.handle),
            this.handle = null);
            null == this.handle && (this.handle = this.L.createTexture());
            this.L.bindTexture(3553, this.handle);
            try {
                var b = a.data instanceof ImageBitmap
            } catch (d) {
                b = !1
            }
            b || this.L.pixelStorei(37441, 1);
            this.L.pixelStorei(37440, 1);
            b = 0 < (this.flags & 2) ? 0 < (this.flags & 4) ? 33648 : 10497 : 33071;
            let c = 0 < (this.flags & 8) ? 9729 : 9728;
            this.L.texParameteri(3553, 10242, b);
            this.L.texParameteri(3553, 10243, b);
            this.L.texParameteri(3553, 10241, c);
            this.L.texParameteri(3553, 10240, c);
            this.L.texImage2D(3553, 0, 6408, 6408, 5121, a.data);
            0 < (this.flags & 240) && (a = 9984,
            0 < (this.flags & 32) && (a = 9985),
            0 < (this.flags & 64) && (a = 9986),
            0 < (this.flags & 128) && (a = 9987),
            this.L.texParameteri(3553, 10241, a),
            this.L.generateMipmap(3553));
            a = 0;
            for (b = this.children; a < b.length; )
                b[a++].handle = this.handle;
            this.L.bindTexture(3553, null)
        }
        pa(a, b) {
            super.pa(a, b);
            a.handle = this.handle
        }
    }
    Nf.g = !0;
    Nf.u = kd;
    Object.assign(Nf.prototype, {
        j: Nf
    });
    class Of extends da {
        constructor() {
            super()
        }
        ta() {
            return 2005
        }
    }
    Of.g = !0;
    Of.u = da;
    Object.assign(Of.prototype, {
        j: Of
    });
    class Pf extends da {
        constructor() {
            super();
            new hh(null,null,null,null);
            new ih(null,null,null,null,null);
            this.ft = new jh(null,null,null)
        }
        ta() {
            return 1905
        }
    }
    Pf.g = !0;
    Pf.u = da;
    Object.assign(Pf.prototype, {
        j: Pf
    });
    class jh {
        constructor() {
            new F(0,0,0,1);
            new F(0,0,-1,1);
            new F(0,0,0,1)
        }
    }
    jh.g = !0;
    Object.assign(jh.prototype, {
        j: jh
    });
    class ih {
        constructor() {
            new F(1,0,0,1);
            new F(si,0,1,1);
            new F(1,1,1,1);
            new F(1,1,1,1);
            new F(1,1,1,1)
        }
    }
    ih.g = !0;
    Object.assign(ih.prototype, {
        j: ih
    });
    class hh {
        constructor() {
            new F(0,0,0,1);
            new F(0,0,0,1);
            new F(0,0,0,1);
            new F(0,0,0,1)
        }
    }
    hh.g = !0;
    Object.assign(hh.prototype, {
        j: hh
    });
    class Qf extends da {
        constructor(a) {
            super();
            this.Ph = a
        }
        H() {}
        ta() {
            return 805
        }
    }
    Qf.g = !0;
    Qf.u = da;
    Object.assign(Qf.prototype, {
        j: Qf
    });
    class te extends Pa {
        constructor() {
            super();
            this.Sg = this.Ha = null;
            this.size = 0
        }
        Sa(a) {
            super.Sa(a);
            this.Wd(this.Le, 17);
            this.Wd(this.Kj, 13);
            this.Wd(ri.JF, 7);
            this.Ha = this.zf(600, 2)
        }
        M(a) {
            this.use();
            var b = a.P;
            let c = a.effect;
            var d = c.qb;
            if (d.tp()) {
                var e = c.ag.we
                  , f = e.Z / 5 | 0;
                if (0 != f) {
                    f > this.size && (this.size = f,
                    this.Ha.resize(6 * f),
                    this.Sg = this.Ha.uy());
                    a = b.xh(a.na.Aa);
                    this.ci(this.Wl, a);
                    this.wC(this.cs, d.handle);
                    a = d.size;
                    this.L.uniform2f(this.es, a.x, a.y);
                    a = this.Sg[this.Le];
                    var g = this.Sg[this.Kj];
                    if (c.clip) {
                        this.L.uniform1f(this.Ke, 0);
                        this.L.uniform1i(this.$w, !1);
                        Nh.Eu(this.Sg);
                        this.L.enable(2960);
                        this.L.stencilFunc(519, 1, 255);
                        this.L.stencilOp(7680, 7680, 7681);
                        var h = c.qK()
                          , m = h.x;
                        h = h.y;
                        var n = a.view
                          , q = a.i
                          , p = a.stride;
                        n[q] = 0;
                        n[q + 1] = h;
                        q += p;
                        n[q] = m;
                        n[q + 1] = 0;
                        q += p;
                        n[q] = 0;
                        n[q + 1] = 0;
                        a.i = q + p;
                        n = a.view;
                        q = a.i;
                        p = a.stride;
                        n[q] = 0;
                        n[q + 1] = h;
                        q += p;
                        n[q] = m;
                        n[q + 1] = h;
                        q += p;
                        n[q] = m;
                        n[q + 1] = 0;
                        a.i = q + p;
                        g.FB(0, 0);
                        g.FB(1, 1);
                        this.L.uniform1f(this.Ke, 0);
                        this.drawArrays(6, 4);
                        this.L.stencilFunc(514, 1, 255)
                    }
                    Nh.Eu(this.Sg);
                    this.L.uniform1f(this.Ke, b.ak);
                    b = 0 < (b.Tc & 4) ? b.lh : null;
                    this.L.uniform1i(this.$w, null != b);
                    null != b ? (m = b.Fb,
                    this.L.uniform4f(this.$g, m.x, m.y, m.z, m.w),
                    b = b.offset,
                    this.L.uniform4f(this.ah, b.x, b.y, b.z, b.w)) : (this.L.uniform4f(this.$g, 1, 1, 1, 1),
                    b = new F(0,0,0,0),
                    this.L.uniform4f(this.ah, b.x, b.y, b.z, b.w));
                    d = d.Nb.ik;
                    e = e.K;
                    b = 0;
                    for (m = 5 * f; b < m; ) {
                        var v = e[b++];
                        h = e[b++];
                        n = e[b++];
                        q = h + e[b++];
                        p = n + e[b++];
                        var u = a.view
                          , y = a.i
                          , B = a.stride;
                        u[y] = h;
                        u[y + 1] = p;
                        y += B;
                        u[y] = q;
                        u[y + 1] = n;
                        y += B;
                        u[y] = h;
                        u[y + 1] = n;
                        a.i = y + B;
                        u = a.view;
                        y = a.i;
                        B = a.stride;
                        u[y] = h;
                        u[y + 1] = p;
                        y += B;
                        u[y] = q;
                        u[y + 1] = p;
                        y += B;
                        u[y] = q;
                        u[y + 1] = n;
                        a.i = y + B;
                        p = d[v].sd;
                        h = p.x;
                        n = p.y;
                        q = h + p.w;
                        p = n + p.G;
                        v = g.view;
                        u = g.i;
                        y = g.stride;
                        v[u + 0 * y] = h;
                        v[u + 0 * y + 1] = p;
                        v[u + y] = q;
                        v[u + y + 1] = n;
                        v[u + 2 * y] = h;
                        v[u + 2 * y + 1] = n;
                        g.i = u + 3 * y;
                        v = g.view;
                        u = g.i;
                        y = g.stride;
                        v[u + 0 * y] = h;
                        v[u + 0 * y + 1] = p;
                        v[u + y] = q;
                        v[u + y + 1] = p;
                        v[u + 2 * y] = q;
                        v[u + 2 * y + 1] = n;
                        g.i = u + 3 * y
                    }
                    this.drawArrays(6 * f, 4);
                    c.clip && this.L.disable(2960)
                }
            }
        }
        hc() {
            return 705
        }
        ug() {
            return 401
        }
        Gf() {
            return "attribute vec4 a_position;\nattribute vec2 a_tcoord;\n\nvarying vec2 v_tcoord;\n\nuniform vec2 u_textureSize;\nuniform mat4 u_matrix;\n\nvoid main()\n{\n\tgl_Position = u_matrix * a_position;\n\tv_tcoord = vec2(a_tcoord.x, u_textureSize.y - a_tcoord.y) / u_textureSize;  \n}"
        }
        Ef() {
            return "precision mediump float;\n\nuniform sampler2D u_image;\nuniform bool u_transformColors;\nuniform vec4 u_colorMultiplier;\nuniform vec4 u_colorOffset;\nuniform float u_alpha;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tvec4 color = texture2D(u_image, v_tcoord);\n\tif (u_transformColors)\n\t{\n\t\tfloat a = color.a;\n\t\tfloat r = color.r / (a + 1e-6);\n\t\tfloat g = color.g / (a + 1e-6);\n\t\tfloat b = color.b / (a + 1e-6);\n\t\tr = r * u_colorMultiplier.r + u_colorOffset.r;\n\t\tg = g * u_colorMultiplier.g + u_colorOffset.g;\n\t\tb = b * u_colorMultiplier.b + u_colorOffset.b;\n\t\ta = a * u_colorMultiplier.a + u_colorOffset.a;\n\t\tcolor = vec4(r * a, g * a, b * a, a);\n\t}\n\tgl_FragColor = color * u_alpha;\n}"
        }
        Xf() {
            this.Le = this.te("a_position");
            this.Uc.push(new mb(this.Le,"a_position",!1,-1,-1));
            this.Kj = this.te("a_tcoord");
            this.Uc.push(new mb(this.Kj,"a_tcoord",!1,-1,-1));
            this.es = this.getUniformLocation("u_textureSize");
            this.Wl = this.getUniformLocation("u_matrix");
            this.cs = this.getUniformLocation("u_image");
            this.$w = this.getUniformLocation("u_transformColors");
            this.$g = this.getUniformLocation("u_colorMultiplier");
            this.ah = this.getUniformLocation("u_colorOffset");
            this.Ke = this.getUniformLocation("u_alpha")
        }
    }
    te.g = !0;
    te.u = Pa;
    Object.assign(te.prototype, {
        j: te
    });
    class xe extends Pa {
        constructor() {
            super();
            this.Ha = null
        }
        Sa(a) {
            super.Sa(a);
            this.Wd(this.qd, 17);
            this.Wd(this.gs, 18);
            this.Ha = this.zf(32, 2)
        }
        M(a) {
            this.use();
            let b = a.effect;
            a = a.P.Jm(a.na.Aa);
            this.ci(this.ii, a);
            this.L.uniform1f(this.ki, 0);
            a = b.V;
            let c = 0
              , d = b.points.length;
            for (; c < d; ) {
                let e = c++;
                this.L.uniform1f(this.Ke, b.$l[e]);
                this.tJ(b.points[e], b.jh[e], a)
            }
        }
        tJ(a, b, c) {
            a = this.hm(a, c, !1);
            for (var d = 0, e = a.length; d < e; )
                a[d] += c / 2,
                d += 2;
            this.Ha.resize(a.length);
            this.Ha.setData(this.qd, a);
            c = [];
            for (d = 0; d < b.length; )
                e = b[d],
                ++d,
                c.push(e.x),
                c.push(e.y),
                c.push(e.z),
                c.push(e.x),
                c.push(e.y),
                c.push(e.z),
                c.push(e.x),
                c.push(e.y),
                c.push(e.z),
                c.push(e.x),
                c.push(e.y),
                c.push(e.z),
                c.push(e.x),
                c.push(e.y),
                c.push(e.z),
                c.push(e.x),
                c.push(e.y),
                c.push(e.z);
            this.Ha.setData(this.gs, c);
            this.drawArrays(a.length, 4)
        }
        hc() {
            return 605
        }
        hm(a, b, c) {
            let d = (new kh).nm(a, c)
              , e = a.length;
            if (0 == e)
                return [];
            a = a.slice();
            c && (a.push(a[0]),
            d.push(d[0]),
            d.push(d[1]),
            d.push(d[2]),
            ++e);
            c = [];
            let f = 0
              , g = 1;
            for (; g < e; ) {
                var h = a[f]
                  , m = a[g]
                  , n = 3 * f
                  , q = d[n++];
                let p = d[n++];
                n = Math.min(2, d[n++]);
                n *= b;
                let v = h.x + q * n
                  , u = h.y + p * n
                  , y = h.x - q * n;
                h = h.y - p * n;
                n = 3 * g;
                q = d[n++];
                p = d[n++];
                n = Math.min(2, d[n++]);
                n *= b;
                let B = m.x + q * n
                  , x = m.y + p * n;
                q = m.x - q * n;
                m = m.y - p * n;
                c.push(B);
                c.push(x);
                c.push(y);
                c.push(h);
                c.push(v);
                c.push(u);
                c.push(B);
                c.push(x);
                c.push(q);
                c.push(m);
                c.push(y);
                c.push(h);
                ++f;
                ++g
            }
            return c
        }
        Gf() {
            return "attribute vec2 a_vertexPosition;\nattribute vec3 a_vertexColor;\n\nvarying vec3 v_vertexColor;\n\nuniform float u_zNDC;\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tv_vertexColor = a_vertexColor;\n\tgl_Position = u_camera * vec4(a_vertexPosition, u_zNDC, 1.0);\n}"
        }
        Ef() {
            return "precision mediump float;\n\nvarying vec3 v_vertexColor;\n\nuniform float u_alpha;\n\nvoid main()\n{\n\tgl_FragColor = vec4(v_vertexColor * u_alpha, u_alpha);\n}"
        }
        Xf() {
            this.qd = this.te("a_vertexPosition");
            this.Uc.push(new mb(this.qd,"a_vertexPosition",!1,-1,-1));
            this.gs = this.te("a_vertexColor");
            this.Uc.push(new mb(this.gs,"a_vertexColor",!1,-1,-1));
            this.ki = this.getUniformLocation("u_zNDC");
            this.ii = this.getUniformLocation("u_camera");
            this.Ke = this.getUniformLocation("u_alpha")
        }
    }
    xe.g = !0;
    xe.u = Pa;
    Object.assign(xe.prototype, {
        j: xe
    });
    class kh {
        constructor() {
            this.Zi = new F(0,0,0,1);
            this.dC = new F(0,0,0,1);
            this.Pp = new F(0,0,0,1);
            this.Ek = new F(0,0,0,1)
        }
        nm(a, b) {
            function c(v, u) {
                f.push(v.x);
                f.push(v.y);
                f.push(u)
            }
            function d(v, u, y, B, x) {
                v.x = y.x + B.x;
                v.y = y.y + B.y;
                B = Math.sqrt(v.x * v.x + v.y * v.y);
                0 < B ? (v.x /= B,
                v.y /= B) : (v.x = 0,
                v.y = 0);
                B = v.x;
                u.x = -v.y;
                u.y = B;
                return x / (u.x * -y.y + u.y * y.x)
            }
            var e = null;
            let f = [];
            if (b) {
                a = a.slice();
                var g = a[0];
                a.push(new F(g.x,g.y,0,1))
            }
            g = a.length;
            for (var h = 1; h < g; ) {
                var m = h++
                  , n = a[m - 1]
                  , q = a[m]
                  , p = m < a.length - 1 ? a[m + 1] : null;
                let v = q.x - n.x;
                n = q.y - n.y;
                let u = Math.sqrt(v * v + n * n);
                this.Ek = new F(v / u,n / u,0,1);
                null == e && (e = this.Ek,
                e = new F(-e.y,e.x,0,1));
                1 == m && c(e, 1);
                null == p ? (e = this.Ek,
                e = new F(-e.y,e.x,0,1),
                c(e, 1)) : (m = p.x - q.x,
                q = p.y - q.y,
                p = Math.sqrt(m * m + q * q),
                this.Pp = new F(m / p,q / p,0,1),
                q = d(this.dC, this.Zi, this.Ek, this.Pp, 1),
                c(this.Zi, q))
            }
            b && 2 < a.length && (e = a[g - 2],
            b = a[0],
            a = a[1],
            h = b.x - e.x,
            e = b.y - e.y,
            q = Math.sqrt(h * h + e * e),
            this.Ek = new F(h / q,e / q,0,1),
            h = a.x - b.x,
            a = a.y - b.y,
            b = Math.sqrt(h * h + a * a),
            this.Pp = new F(h / b,a / b,0,1),
            a = d(this.dC, this.Zi, this.Ek, this.Pp, 1),
            f[0] = this.Zi.x,
            f[1] = this.Zi.y,
            f[2] = a,
            f[3 * g - 3] = this.Zi.x,
            f[3 * g - 2] = this.Zi.y,
            f[3 * g - 1] = a,
            f.pop(),
            f.pop(),
            f.pop());
            return f
        }
    }
    kh.g = !0;
    Object.assign(kh.prototype, {
        j: kh
    });
    class ue extends Pa {
        constructor() {
            super();
            this.Ha = null
        }
        Sa(a) {
            super.Sa(a);
            this.Wd(this.Le, 17);
            this.Ha = this.zf(600, 2);
            this.Ha = this.zf(4, 2);
            this.Ha.setData(this.Le, [0, 1, 1, 1, 0, 0, 1, 0])
        }
        M(a) {
            this.use();
            var b = a.na
              , c = a.effect.color;
            let d = c.w;
            this.L.uniform4f(this.dI, c.x * d, c.y * d, c.z * d, d);
            a = a.P;
            c = a.xh(b.Aa);
            this.ci(this.Wl, c);
            this.L.uniform1f(this.Ke, a.ak);
            c = b.size;
            this.L.uniform2f(this.ds, c.x, c.y);
            this.L.uniform1f(this.ki, a.Uy(b));
            b = 0 < (a.Tc & 4) ? a.lh : null;
            null != b ? (a = b.Fb,
            this.L.uniform4f(this.$g, a.x, a.y, a.z, a.w),
            b = b.offset,
            this.L.uniform4f(this.ah, b.x, b.y, b.z, b.w)) : (this.L.uniform4f(this.$g, 1, 1, 1, 1),
            b = new F(0,0,0,0),
            this.L.uniform4f(this.ah, b.x, b.y, b.z, b.w));
            this.drawArrays(4, 5)
        }
        hc() {
            return 1205
        }
        ug() {
            return 401
        }
        Gf() {
            return "uniform mat4 u_matrix;\nuniform vec2 u_size;\nuniform float u_zNDC;\n\nattribute vec2 a_position;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position * u_size, u_zNDC, 1.0);\n}"
        }
        Ef() {
            return "precision mediump float;\n\nuniform float u_alpha;\nuniform vec4 u_Color;\nuniform vec4 u_colorMultiplier;\nuniform vec4 u_colorOffset;\n\nvoid main()\n{\n\tvec4 color = u_Color;\n\tfloat alpha = color.a;\n\tcolor = vec4(color.rgb / alpha, alpha) * u_colorMultiplier + u_colorOffset;\n\tcolor = vec4(color.rgb * color.a, color.a);\n\tgl_FragColor = color * u_alpha;\n}"
        }
        Xf() {
            this.Le = this.te("a_position");
            this.Uc.push(new mb(this.Le,"a_position",!1,-1,-1));
            this.Wl = this.getUniformLocation("u_matrix");
            this.ds = this.getUniformLocation("u_size");
            this.ki = this.getUniformLocation("u_zNDC");
            this.Ke = this.getUniformLocation("u_alpha");
            this.dI = this.getUniformLocation("u_Color");
            this.$g = this.getUniformLocation("u_colorMultiplier");
            this.ah = this.getUniformLocation("u_colorOffset")
        }
    }
    ue.g = !0;
    ue.u = Pa;
    Object.assign(ue.prototype, {
        j: ue
    });
    class ve extends Pa {
        constructor() {
            super();
            this.Sg = this.Ha = null
        }
        Sa(a) {
            super.Sa(a);
            this.Wd(this.fs, 17);
            this.Ha = this.zf(4, 1);
            this.Sg = this.Ha.uy()
        }
        M(a) {
            this.use();
            var b = a.P
              , c = a.effect;
            if (!(b.ak < b.aL)) {
                this.L.uniform1f(this.ki, 0);
                var d = 0
                  , e = 0
                  , f = 1
                  , g = 1
                  , h = c.color
                  , m = h.w;
                this.L.uniform4f(this.ji, h.x * m, h.y * m, h.z * m, m);
                this.L.uniform1f(this.Ke, b.ak);
                null != c.oq && (g = a.P.Ab.size,
                c = c.oq,
                d = c.o / g.x,
                e = c.C / g.y,
                f = (c.A - c.o) / g.x,
                g = (c.D - c.C) / g.y);
                e = 1 - g - e;
                Nh.Eu(this.Sg);
                c = this.Sg[this.fs];
                a = c.view;
                b = c.i;
                h = c.stride;
                a[b] = d;
                a[b + 1] = e;
                b += h;
                a[b] = d + f;
                a[b + 1] = e;
                b += h;
                a[b] = d;
                a[b + 1] = e + g;
                b += h;
                a[b] = d + f;
                a[b + 1] = e + g;
                c.i = b + h;
                this.drawArrays(4, 5)
            }
        }
        hc() {
            return 305
        }
        Gf() {
            return "precision mediump float;\n\nuniform float u_zNDC;\n\nattribute vec2 a_modelPosition;\n\nvoid main()\n{\n\tgl_Position.xy = 2.0 * a_modelPosition - 1.0;\n\tgl_Position.z = u_zNDC;\n\tgl_Position.w = 1.0;\n}"
        }
        Ef() {
            return "precision mediump float;\n\nuniform vec4 u_color;\nuniform float u_alpha;\n\nvoid main()\n{\n\tgl_FragColor = u_color * u_alpha;\n}"
        }
        Xf() {
            this.fs = this.te("a_modelPosition");
            this.Uc.push(new mb(this.fs,"a_modelPosition",!1,-1,-1));
            this.ki = this.getUniformLocation("u_zNDC");
            this.ji = this.getUniformLocation("u_color");
            this.Ke = this.getUniformLocation("u_alpha")
        }
    }
    ve.g = !0;
    ve.u = Pa;
    Object.assign(ve.prototype, {
        j: ve
    });
    class we extends Pa {
        constructor() {
            super();
            this.Ha = null;
            this.ld = []
        }
        Sa(a) {
            super.Sa(a);
            this.Wd(this.qd, 17);
            this.Ha = this.zf(32, 2)
        }
        M(a) {
            this.use();
            var b = a.effect;
            a = a.P.Jm(a.na.Aa);
            this.ci(this.ii, a);
            this.L.uniform4f(this.ji, 1, 1, 1, 1);
            a = 0;
            for (b = b.sr; a < b.length; ) {
                let c = b[a];
                ++a;
                this.Ha.resize(c.length);
                let d = 0
                  , e = 0;
                for (; e < c.length; ) {
                    let f = c[e];
                    ++e;
                    this.ld[d++] = f.x;
                    this.ld[d++] = f.y
                }
                this.Ha.setData(this.qd, this.ld, d);
                this.drawArrays(c.length, 5)
            }
        }
        hc() {
            return 1105
        }
        Gf() {
            return "attribute vec2 a_vertexPosition;\n\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tgl_Position = u_camera * vec4(a_vertexPosition, 0.0, 1.0);\n}"
        }
        Ef() {
            return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = vec4(u_color.rgb * u_color.a, u_color.a);\n}"
        }
        Xf() {
            this.qd = this.te("a_vertexPosition");
            this.Uc.push(new mb(this.qd,"a_vertexPosition",!1,-1,-1));
            this.ii = this.getUniformLocation("u_camera");
            this.ji = this.getUniformLocation("u_color")
        }
    }
    we.g = !0;
    we.u = Pa;
    Object.assign(we.prototype, {
        j: we
    });
    class ye extends Pa {
        constructor() {
            super();
            this.Ha = null;
            this.Ya = [];
            this.Me = 0
        }
        Sa(a) {
            super.Sa(a);
            this.Wd(this.qd, 17);
            this.Ha = this.zf(32, 1)
        }
        M(a) {
            this.use();
            var b = a.effect;
            a = a.P.Jm(a.na.Aa);
            this.ci(this.ii, a);
            a = b.color;
            this.L.uniform4f(this.ji, a.x, a.y, a.z, a.w);
            this.hm(b);
            b = this.Me >> 1;
            this.Ha.resize(b);
            this.Ha.setData(this.qd, this.Ya, this.Me);
            this.drawArrays(b, 4)
        }
        hm(a) {
            this.Me = 0;
            let b = a.qn
              , c = 2 * Math.PI
              , d = c / b * a.V * .5
              , e = 0;
            for (; e < b; ) {
                var f = e++;
                if (1 == (f & 1))
                    continue;
                f = f / b * c;
                var g = a.F
                  , h = a.V
                  , m = a.lineWidth / 2
                  , n = Math.cos(f)
                  , q = Math.sin(f);
                f = g.x + n * h;
                g = g.y + q * h;
                h = -q * d;
                let p = n * d;
                n *= m;
                m *= q;
                q = f + h + n;
                let v = g + p + m
                  , u = f - h - n
                  , y = g - p - m
                  , B = this.Me;
                this.Ya[B++] = q;
                this.Ya[B++] = v;
                this.Ya[B++] = f - h + n;
                this.Ya[B++] = g - p + m;
                this.Ya[B++] = u;
                this.Ya[B++] = y;
                this.Ya[B++] = q;
                this.Ya[B++] = v;
                this.Ya[B++] = u;
                this.Ya[B++] = y;
                this.Ya[B++] = f + h - n;
                this.Ya[B++] = g + p - m;
                this.Me = B
            }
        }
        hc() {
            return 505
        }
        Gf() {
            return "attribute vec2 a_vertexPosition;\n\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tgl_Position = u_camera * vec4(a_vertexPosition, 0.0, 1.0);\n}"
        }
        Ef() {
            return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = vec4(u_color.rgb * u_color.a, u_color.a);\n}"
        }
        Xf() {
            this.qd = this.te("a_vertexPosition");
            this.Uc.push(new mb(this.qd,"a_vertexPosition",!1,-1,-1));
            this.ii = this.getUniformLocation("u_camera");
            this.ji = this.getUniformLocation("u_color")
        }
    }
    ye.g = !0;
    ye.u = Pa;
    Object.assign(ye.prototype, {
        j: ye
    });
    class ze extends Pa {
        constructor() {
            super();
            this.Ha = null;
            this.Ya = [];
            this.Me = 0;
            this.Ch = Array(256);
            this.Kh = Array(256)
        }
        Sa(a) {
            super.Sa(a);
            this.Wd(this.qd, 17);
            this.Ha = this.zf(32, 1)
        }
        M(a) {
            this.use();
            var b = a.effect;
            a = a.P.Jm(a.na.Aa);
            this.ci(this.ii, a);
            this.L.uniform4f(this.ji, b.color.x, b.color.y, b.color.z, b.Op);
            this.hm(b);
            b = this.Me >> 1;
            this.Ha.resize(b);
            this.Ha.setData(this.qd, this.Ya, this.Me);
            this.drawArrays(b, 4)
        }
        hm(a) {
            this.Me = 0;
            var b = a.V;
            let c = (si / (2 * Math.acos(1 - .25 / b)) - 1 | 0) << 2;
            128 < c && (c = 128);
            var d = 2 * Math.PI;
            let e = 0
              , f = 0
              , g = c;
            for (; f < g; ) {
                var h = f++ / c * d;
                let m = Math.cos(h);
                h = Math.sin(h);
                this.Kh[e] = m * b;
                this.Kh[e + 1] = h * b;
                this.Ch[e] = m * (b + a.lineWidth);
                this.Ch[e + 1] = h * (b + a.lineWidth);
                e += 2
            }
            a = 0;
            for (b = 1; a < c; )
                d = this.Me,
                this.Ya[d++] = this.Kh[2 * a],
                this.Ya[d++] = this.Kh[2 * a + 1],
                this.Ya[d++] = this.Kh[2 * b],
                this.Ya[d++] = this.Kh[2 * b + 1],
                this.Ya[d++] = this.Ch[2 * b],
                this.Ya[d++] = this.Ch[2 * b + 1],
                this.Ya[d++] = this.Kh[2 * a],
                this.Ya[d++] = this.Kh[2 * a + 1],
                this.Ya[d++] = this.Ch[2 * b],
                this.Ya[d++] = this.Ch[2 * b + 1],
                this.Ya[d++] = this.Ch[2 * a],
                this.Ya[d++] = this.Ch[2 * a + 1],
                this.Me = d,
                ++a,
                ++b,
                b == c && (b = 0)
        }
        hc() {
            return 905
        }
        Gf() {
            return "attribute vec2 a_vertexPosition;\n\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tgl_Position = u_camera * vec4(a_vertexPosition, 0.0, 1.0);\n}"
        }
        Ef() {
            return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = vec4(u_color.rgb * u_color.a, u_color.a);\n}"
        }
        Xf() {
            this.qd = this.te("a_vertexPosition");
            this.Uc.push(new mb(this.qd,"a_vertexPosition",!1,-1,-1));
            this.ii = this.getUniformLocation("u_camera");
            this.ji = this.getUniformLocation("u_color")
        }
    }
    ze.g = !0;
    ze.u = Pa;
    Object.assign(ze.prototype, {
        j: ze
    });
    class Ic extends Pa {
        constructor() {
            super();
            this.Ha = null
        }
        Sa(a) {
            super.Sa(a);
            this.Wd(this.Le, 17);
            this.Wd(this.Kj, 17);
            this.Ha = this.zf(4, 2)
        }
        M(a) {
            this.use();
            var b = a.P
              , c = a.na
              , d = a.effect
              , e = d.qb;
            if (e.tp()) {
                var f = d.Rn;
                a = f.x + d.offsetX * f.w;
                var g = f.y + d.offsetY * f.G
                  , h = a + d.yu * f.w;
                d = g + d.zu * f.G;
                this.wC(this.cs, e.handle);
                e = e.size;
                this.L.uniform2f(this.es, e.x, e.y);
                e = this.Ha.Cr[4];
                e[2] = a;
                e[3] = d;
                e[6] = h;
                e[7] = d;
                e[10] = a;
                e[11] = g;
                e[14] = h;
                e[15] = g;
                this.Ha.yi = !0;
                this.Ha.setData(this.Le, Ic.TH[0]);
                a = b.xh(c.Aa);
                this.ci(this.Wl, a);
                this.L.uniform1f(this.Ke, b.ak);
                a = c.size;
                this.L.uniform2f(this.ds, a.x, a.y);
                this.L.uniform1f(this.ki, b.Uy(c));
                b = 0 < (b.Tc & 4) ? b.lh : null;
                null != b ? (c = b.Fb,
                this.L.uniform4f(this.$g, c.x, c.y, c.z, c.w),
                b = b.offset,
                this.L.uniform4f(this.ah, b.x, b.y, b.z, b.w)) : (this.L.uniform4f(this.$g, 1, 1, 1, 1),
                b = new F(0,0,0,0),
                this.L.uniform4f(this.ah, b.x, b.y, b.z, b.w));
                this.drawArrays(4, 5)
            }
        }
        hc() {
            return 205
        }
        ug() {
            return 401
        }
        Gf() {
            return "attribute vec2 a_position;\nattribute vec2 a_tcoord;\n\nuniform mat4 u_matrix;\nuniform vec2 u_size;\nuniform vec2 u_textureSize;\nuniform float u_zNDC;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position * u_size, u_zNDC, 1.0);\n\tv_tcoord = vec2(a_tcoord.x, u_textureSize.y - a_tcoord.y) / u_textureSize;  \n}"
        }
        Ef() {
            return "precision mediump float;\n\nuniform sampler2D u_image;\nuniform float u_alpha;\nuniform vec4 u_colorMultiplier;\nuniform vec4 u_colorOffset;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tvec4 color = texture2D(u_image, v_tcoord);\n\tfloat alpha = color.a;\n\tcolor = vec4(color.rgb / (alpha + 0.001), alpha) * u_colorMultiplier + u_colorOffset;\n\tcolor = vec4(color.rgb * color.a, color.a);\n\tgl_FragColor = color * u_alpha;\n}"
        }
        Xf() {
            this.Le = this.te("a_position");
            this.Uc.push(new mb(this.Le,"a_position",!1,-1,-1));
            this.Kj = this.te("a_tcoord");
            this.Uc.push(new mb(this.Kj,"a_tcoord",!1,-1,-1));
            this.Wl = this.getUniformLocation("u_matrix");
            this.ds = this.getUniformLocation("u_size");
            this.es = this.getUniformLocation("u_textureSize");
            this.ki = this.getUniformLocation("u_zNDC");
            this.cs = this.getUniformLocation("u_image");
            this.Ke = this.getUniformLocation("u_alpha");
            this.$g = this.getUniformLocation("u_colorMultiplier");
            this.ah = this.getUniformLocation("u_colorOffset")
        }
    }
    Ic.g = !0;
    Ic.u = Pa;
    Object.assign(Ic.prototype, {
        j: Ic
    });
    class eb {
        constructor(a) {
            this.type = a;
            this.Ma = 0;
            this.cq = null
        }
        set() {}
        collapse() {
            return this
        }
    }
    eb.g = !0;
    Object.assign(eb.prototype, {
        j: eb
    });
    class Vd extends eb {
        constructor(a, b) {
            null == b && (b = !0);
            super(0);
            this.mg = a;
            this.Ma = this.Ma & -16 | a;
            this.GM = b;
            this.Ma &= -65537;
            b && (this.Ma |= 65536);
            this.blendEquation = 1;
            this.Ma = this.Ma & -61441 | 4096;
            this.ay = this.LB = 0
        }
        set(a) {
            a.Lu(this)
        }
    }
    Vd.g = !0;
    Vd.u = eb;
    Object.assign(Vd.prototype, {
        j: Vd
    });
    class xb {
        constructor() {
            this.type = this.ta();
            this.F = new F(0,0,0,1);
            this.V = 0
        }
        H() {
            this.F = null
        }
        om() {}
        from() {}
        ta() {
            return 102
        }
    }
    xb.g = !0;
    xb.sb = [id];
    Object.assign(xb.prototype, {
        j: xb
    });
    class yc extends xb {
        constructor() {
            super();
            this.Qa = new X(qa,qa,ra,ra)
        }
        H() {
            this.Qa = null;
            super.H()
        }
        om(a) {
            var b = this.Qa;
            b.o = b.C = qa;
            b.A = b.D = ra;
            b = a.length >> 1;
            let c = 0;
            for (; c < b; ) {
                let d = c++;
                this.Qa.ms(new F(a[d << 1],a[(d << 1) + 1],0,1))
            }
        }
        contains(a) {
            let b = this.Qa
              , c = a.x;
            a = a.y;
            return c >= b.o && c <= b.A && a >= b.C ? a <= b.D : !1
        }
        yp(a) {
            switch (a.type) {
            case 202:
                var b = a.F;
                a = a.V;
                this.Qa.ms(new F(b.x - a,b.y - a,0,1));
                this.Qa.ms(new F(b.x + a,b.y + a,0,1));
                break;
            case 302:
                this.Qa.add(a.Qa)
            }
            b = this.Qa;
            b = (b.A - b.o) / 2;
            a = this.Qa;
            a = (a.D - a.C) / 2;
            this.F.x = this.Qa.o + b;
            this.F.y = this.Qa.C + a;
            this.V = Math.sqrt(b * b + a * a)
        }
        from(a) {
            let b = a.F
              , c = a.V;
            switch (a.type) {
            case 202:
                this.Qa.o = b.x - c;
                this.Qa.C = b.y - c;
                this.Qa.A = b.x + c;
                this.Qa.D = b.y + c;
                break;
            case 302:
                var d = this.Qa;
                a = a.Qa;
                d.o = a.o;
                d.C = a.C;
                d.A = a.A;
                d.D = a.D
            }
            d = this.F;
            d.x = b.x;
            d.y = b.y;
            d.z = b.z;
            this.V = c
        }
        rr(a, b) {
            var c = this.F
              , d = b.F;
            0 < (a.I & 64) && a.ul();
            var e = a.xe
              , f = e.m21 * c.x + e.m22 * c.y + e.m24;
            d.x = e.m11 * c.x + e.m12 * c.y + e.m14;
            d.y = f;
            b.V = (0 < (a.I & 8) ? Math.max(Math.abs(a.scale.x), Math.abs(a.scale.y)) : Math.max(Math.abs(a.matrix.m11) + Math.abs(a.matrix.m12), Math.abs(a.matrix.m21) + Math.abs(a.matrix.m22))) * this.V;
            b = b.Qa;
            c = this.Qa;
            d = c.A - c.o;
            c = this.Qa;
            c = c.D - c.C;
            f = e = yc.ld;
            var g = this.Qa
              , h = this.Qa;
            f.x = (g.o + g.A) / 2;
            f.y = (h.C + h.D) / 2;
            a.tb(e, e);
            b.o = e.x;
            b.C = e.y;
            b.A = e.x;
            b.D = e.y;
            0 < (a.I & 8) ? (h = a.matrix,
            e = h.m11,
            f = h.m12,
            g = h.m21,
            h = h.m22,
            a = a.scale,
            d = d * a.x * .5,
            a = c * a.y * .5,
            0 < e ? (b.o -= e * d,
            b.A += e * d) : (b.o += e * d,
            b.A -= e * d),
            0 < f ? (b.o -= f * a,
            b.A += f * a) : (b.o += f * a,
            b.A -= f * a),
            0 < g ? (b.C -= g * d,
            b.D += g * d) : (b.C += g * d,
            b.D -= g * d),
            0 < h ? (b.C -= h * a,
            b.D += h * a) : (b.C += h * a,
            b.D -= h * a)) : (g = a.matrix,
            e = g.m11,
            f = g.m12,
            h = Math.sqrt(e * e + f * f),
            a = h * d * .5,
            c = (e * g.m22 - f * g.m21) / h * c * .5,
            e = Math.atan2(f, e),
            d = Math.cos(e),
            e = Math.sin(e),
            0 < d ? (b.o -= d * a,
            b.A += d * a) : (b.o += d * a,
            b.A -= d * a),
            0 < e ? (b.o -= e * c,
            b.A += e * c) : (b.o += e * c,
            b.A -= e * c),
            0 < -e ? (b.C -= -e * a,
            b.D += -e * a) : (b.C += -e * a,
            b.D -= -e * a),
            0 < d ? (b.C -= d * c,
            b.D += d * c) : (b.C += d * c,
            b.D -= d * c))
        }
        ta() {
            return 302
        }
    }
    yc.g = !0;
    yc.u = xb;
    Object.assign(yc.prototype, {
        j: yc
    });
    class Rf extends xb {
        constructor() {
            super();
            this.box = new lh(qa,qa,ra,ra)
        }
        H() {
            this.box = null;
            super.H()
        }
        om(a) {
            var b = this.box;
            b.o = b.C = qa;
            b.A = b.D = ra;
            a = a.length >> 1;
            for (b = 0; b < a; )
                ++b
        }
        contains() {
            return !1
        }
        yp() {}
        from() {}
        rr(a, b) {
            var c = this.F
              , d = b.F;
            0 < (a.I & 16) && a.ur();
            var e = a.xe;
            let f = c.x
              , g = c.y;
            c = c.z;
            d.x = e.m11 * f + e.m12 * g + e.m13 * c + e.m14;
            d.y = e.m21 * f + e.m22 * g + e.m23 * c + e.m24;
            d.z = e.m31 * f + e.m32 * g + e.m33 * c + e.m34;
            0 < (a.I & 8) ? (d = Math.abs(a.scale.x),
            e = Math.abs(a.scale.y),
            a = Math.abs(a.scale.z)) : (a = a.matrix,
            d = Math.abs(a.m11) + Math.abs(a.m12) + Math.abs(a.m13),
            e = Math.abs(a.m21) + Math.abs(a.m22) + Math.abs(a.m23),
            a = Math.abs(a.m31) + Math.abs(a.m32) + Math.abs(a.m33));
            b.V = Math.max(Math.max(d, e), a) * this.V
        }
        ta() {
            return 402
        }
    }
    Rf.g = !0;
    Rf.u = xb;
    Object.assign(Rf.prototype, {
        j: Rf
    });
    class ce extends xb {
        constructor() {
            super()
        }
        om(a) {
            let b = a.length >> 1;
            for (var c = 0, d = 0, e = 0; e < b; ) {
                var f = e++;
                c += a[f << 1];
                d += a[(f << 1) + 1]
            }
            c = this.F.x = c / b;
            d = this.F.y = d / b;
            for (e = this.V = 0; e < b; ) {
                var g = e++;
                f = a[g << 1] - c;
                g = a[(g << 1) + 1] - d;
                this.V = Math.max(f * f + g * g, this.V)
            }
            this.V = Math.sqrt(this.V)
        }
        contains(a) {
            let b = a.x - this.F.x;
            a = a.y - this.F.y;
            return b * b + a * a <= this.V * this.V
        }
        yp(a) {
            if (0 != a.V)
                if (0 == this.V)
                    this.V = a.V,
                    this.F.x = a.F.x,
                    this.F.y = a.F.y;
                else {
                    var b = a.F.x - this.F.x
                      , c = a.F.y - this.F.y
                      , d = a.V - this.V
                      , e = b * b + c * c;
                    d * d >= e ? 0 <= d && this.from(a) : (d = Math.sqrt(e),
                    e = (d + a.V - this.V) / (2 * d),
                    this.F.x += e * b,
                    this.F.y += e * c,
                    this.V = (d + this.V + a.V) / 2)
                }
        }
        from(a) {
            this.F.x = a.F.x;
            this.F.y = a.F.y;
            this.V = a.V
        }
        rr(a, b) {
            var c = this.F
              , d = b.F;
            0 < (a.I & 64) && a.ul();
            let e = a.xe
              , f = e.m21 * c.x + e.m22 * c.y + e.m24;
            d.x = e.m11 * c.x + e.m12 * c.y + e.m14;
            d.y = f;
            0 < (a.I & 8) ? (c = Math.abs(a.scale.x),
            d = Math.abs(a.scale.y),
            a = Math.abs(a.scale.z)) : (a = a.matrix,
            c = Math.abs(a.m11) + Math.abs(a.m12) + Math.abs(a.m13),
            d = Math.abs(a.m21) + Math.abs(a.m22) + Math.abs(a.m23),
            a = Math.abs(a.m31) + Math.abs(a.m32) + Math.abs(a.m33));
            b.V = Math.max(Math.max(c, d), a) * this.V
        }
        ta() {
            return 202
        }
    }
    ce.g = !0;
    ce.u = xb;
    Object.assign(ce.prototype, {
        j: ce
    });
    class de extends xb {
        constructor() {
            super()
        }
        om(a) {
            let b = 0
              , c = 0
              , d = 0
              , e = a.length;
            for (var f = 0; f < e; )
                b += a[f++],
                c += a[f++],
                d += a[f++];
            f = e / 3 | 0;
            b /= f;
            c /= f;
            d /= f;
            let g = 0;
            for (f = 0; f < e; ) {
                var h = a[f++] - b;
                let m = a[f++] - c
                  , n = a[f++] - d;
                h = h * h + m * m + n * n;
                h > g && (g = h)
            }
            this.V = Math.sqrt(g);
            a = this.F;
            a.x = b;
            a.y = c;
            a.z = d
        }
        contains(a) {
            let b = a.x - this.F.x
              , c = a.y - this.F.y;
            a = a.z - this.F.z;
            return b * b + c * c + a * a <= this.V * this.V
        }
        yp(a) {
            var b = a.V;
            if (0 != b) {
                var c = this.V;
                if (0 == c)
                    this.V = a.V,
                    b = this.F,
                    c = a.F,
                    b.x = c.x,
                    b.y = c.y,
                    b.z = c.z;
                else {
                    var d = this.F
                      , e = a.F
                      , f = e.x - d.x
                      , g = e.y - d.y;
                    e = e.z - d.z;
                    var h = f * f + g * g + e * e
                      , m = b - c;
                    m * m >= h ? 0 <= m && (this.V = a.V,
                    b = this.F,
                    c = a.F,
                    b.x = c.x,
                    b.y = c.y,
                    b.z = c.z) : (a = Math.sqrt(h),
                    0 < a && (m = (a + m) / (2 * a),
                    h = this.F,
                    h.x = d.x + f * m,
                    h.y = d.y + g * m,
                    h.z = d.z + e * m),
                    this.V = (a + c + b) / 2)
                }
            }
        }
        from(a) {
            this.F.x = a.F.x;
            this.F.y = a.F.y;
            this.V = a.V
        }
        rr(a, b) {
            b.F = a.pI(this.F, b.F);
            b.V = a.hK() * this.V
        }
        ta() {
            return 502
        }
    }
    de.g = !0;
    de.u = xb;
    Object.assign(de.prototype, {
        j: de
    });
    class Sf {
        constructor() {
            this.xl = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.MA = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.ij = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
        }
        fP() {
            let a = this.MA
              , b = this.xl;
            this.ij = new db(a.m11 * b.m11 + a.m12 * b.m21 + a.m13 * b.m31 + a.m14 * b.m41,a.m11 * b.m12 + a.m12 * b.m22 + a.m13 * b.m32 + a.m14 * b.m42,a.m11 * b.m13 + a.m12 * b.m23 + a.m13 * b.m33 + a.m14 * b.m43,a.m11 * b.m14 + a.m12 * b.m24 + a.m13 * b.m34 + a.m14 * b.m44,a.m21 * b.m11 + a.m22 * b.m21 + a.m23 * b.m31 + a.m24 * b.m41,a.m21 * b.m12 + a.m22 * b.m22 + a.m23 * b.m32 + a.m24 * b.m42,a.m21 * b.m13 + a.m22 * b.m23 + a.m23 * b.m33 + a.m24 * b.m43,a.m21 * b.m14 + a.m22 * b.m24 + a.m23 * b.m34 + a.m24 * b.m44,a.m31 * b.m11 + a.m32 * b.m21 + a.m33 * b.m31 + a.m34 * b.m41,a.m31 * b.m12 + a.m32 * b.m22 + a.m33 * b.m32 + a.m34 * b.m42,a.m31 * b.m13 + a.m32 * b.m23 + a.m33 * b.m33 + a.m34 * b.m43,a.m31 * b.m14 + a.m32 * b.m24 + a.m33 * b.m34 + a.m34 * b.m44,a.m41 * b.m11 + a.m42 * b.m21 + a.m43 * b.m31 + a.m44 * b.m41,a.m41 * b.m12 + a.m42 * b.m22 + a.m43 * b.m32 + a.m44 * b.m42,a.m41 * b.m13 + a.m42 * b.m23 + a.m43 * b.m33 + a.m44 * b.m43,a.m41 * b.m14 + a.m42 * b.m24 + a.m43 * b.m34 + a.m44 * b.m44)
        }
        IC(a, b) {
            var c = this.ij;
            let d = a.x
              , e = a.y
              , f = a.z
              , g = a.w
              , h = 1 / (c.m41 * d + c.m42 * e + c.m43 * f + c.m44 * g);
            a = b.w / 2;
            let m = b.G / 2
              , n = (c.m11 * d + c.m12 * e + c.m13 * f + c.m14 * g) * h;
            c = (c.m21 * d + c.m22 * e + c.m23 * f + c.m24 * g) * h;
            return new F(a * n + 0 * c + (a + b.x),0 * n + -m * c + (m + b.y),0,1)
        }
    }
    Sf.g = !0;
    Object.assign(Sf.prototype, {
        j: Sf
    });
    class Cd extends Sf {
        constructor() {
            super();
            this.origin = new F(0,0,0,1);
            this.position = new F(0,0,0,1);
            this.rotation = 0;
            this.zoom = 1;
            this.uz = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.sz = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.Bt = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.size = new F(0,0,0,1);
            this.ob(new F(1E3,1E3,0,1))
        }
        fO(a) {
            this.zoom != a && (this.zoom = a,
            this.Zp())
        }
        km() {
            let a = this.origin
              , b = this.size;
            a.x = b.x / 2;
            a.y = b.y / 2;
            this.Zp()
        }
        ob(a) {
            let b = a.x
              , c = a.y;
            var d = this.size;
            d.x = a.x;
            d.y = a.y;
            d = this.MA;
            d.m11 = 2 / b;
            d.m12 = 0;
            d.m13 = 0;
            d.m14 = -1;
            d.m21 = 0;
            d.m22 = 2 / c * -1;
            d.m23 = 0;
            d.m24 = 1;
            d.m31 = 0;
            d.m32 = 0;
            d.m33 = -.001;
            d.m34 = 0;
            d.m41 = 0;
            d.m42 = 0;
            d.m43 = 0;
            d.m44 = 1;
            a = d.m14;
            d = d.m24;
            let e = this.sz;
            e.m11 = b / 2;
            e.m12 = 0;
            e.m13 = 0;
            e.m14 = -e.m11 * a + e.m12 * d;
            e.m21 = 0;
            e.m22 = -c / 2;
            e.m23 = 0;
            e.m24 = -e.m21 * a + e.m22 * d;
            e.m31 = 0;
            e.m32 = 0;
            e.m33 = -1E3;
            e.m34 = 0;
            e.m41 = 0;
            e.m42 = 0;
            e.m43 = 0;
            e.m44 = 1;
            this.Zp()
        }
        Zp() {
            var a = this.xl;
            a.m11 = 1;
            a.m12 = 0;
            a.m13 = 0;
            a.m14 = 0;
            a.m21 = 0;
            a.m22 = 1;
            a.m23 = 0;
            a.m24 = 0;
            a.m31 = 0;
            a.m32 = 0;
            a.m33 = 1;
            a.m34 = 0;
            a.m41 = 0;
            a.m42 = 0;
            a.m43 = 0;
            a.m44 = 1;
            a = this.xl;
            var b = this.position
              , c = b.x;
            b = b.y;
            a.m14 += -c;
            a.m24 += -b;
            var d = this.zoom
              , e = this.zoom;
            a.m11 *= d;
            a.m12 *= d;
            a.m14 *= d;
            a.m21 *= e;
            a.m22 *= e;
            a.m24 *= e;
            e = this.rotation * Fa;
            d = Math.sin(e);
            e = Math.cos(e);
            var f = a.m11
              , g = a.m21;
            a.m11 = e * f - d * g;
            a.m21 = d * f + e * g;
            f = a.m12;
            g = a.m22;
            a.m12 = e * f - d * g;
            a.m22 = d * f + e * g;
            f = a.m14;
            g = a.m24;
            a.m14 = e * f - d * g;
            a.m24 = d * f + e * g;
            a.m14 += c;
            a.m24 += b;
            a.m14 += this.origin.x - this.position.x;
            a.m24 += this.origin.y - this.position.y;
            c = this.xl;
            c.m11 = a.m11;
            c.m12 = a.m12;
            c.m14 = a.m14;
            c.m21 = a.m21;
            c.m22 = a.m22;
            c.m24 = a.m24;
            this.fP();
            a = this.uz;
            var h = this.xl;
            c = h.m11;
            b = h.m12;
            d = h.m13;
            e = h.m14;
            f = h.m21;
            g = h.m22;
            var m = h.m23
              , n = h.m24
              , q = h.m31
              , p = h.m32
              , v = h.m33
              , u = h.m34
              , y = h.m41
              , B = h.m42
              , x = h.m43;
            h = h.m44;
            var H = c * g - b * f;
            let D = c * m - d * f
              , Z = c * n - e * f
              , Y = b * m - d * g
              , T = b * n - e * g
              , ba = d * n - e * m
              , sa = q * B - p * y
              , ma = q * x - v * y
              , ca = q * h - u * y
              , pa = p * x - v * B
              , ya = p * h - u * B
              , na = v * h - u * x
              , fa = 1 / (H * na - D * ya + Z * pa + Y * ca - T * ma + ba * sa);
            a.m11 = (g * na - m * ya + n * pa) * fa;
            a.m12 = (-b * na + d * ya - e * pa) * fa;
            a.m13 = (B * ba - x * T + h * Y) * fa;
            a.m14 = (-p * ba + v * T - u * Y) * fa;
            a.m21 = (-f * na + m * ca - n * ma) * fa;
            a.m22 = (c * na - d * ca + e * ma) * fa;
            a.m23 = (-y * ba + x * Z - h * D) * fa;
            a.m24 = (q * ba - v * Z + u * D) * fa;
            a.m31 = (f * ya - g * ca + n * sa) * fa;
            a.m32 = (-c * ya + b * ca - e * sa) * fa;
            a.m33 = (y * T - B * Z + h * H) * fa;
            a.m34 = (-q * T + p * Z - u * H) * fa;
            a.m41 = (-f * pa + g * ma - m * sa) * fa;
            a.m42 = (c * pa - b * ma + d * sa) * fa;
            a.m43 = (-y * Y + B * D - x * H) * fa;
            a.m44 = (q * Y - p * D + v * H) * fa;
            a = this.Bt;
            c = this.uz;
            b = this.sz;
            d = c.m11 * b.m12 + c.m12 * b.m22 + c.m13 * b.m32 + c.m14 * b.m42;
            e = c.m11 * b.m13 + c.m12 * b.m23 + c.m13 * b.m33 + c.m14 * b.m43;
            f = c.m11 * b.m14 + c.m12 * b.m24 + c.m13 * b.m34 + c.m14 * b.m44;
            g = c.m21 * b.m11 + c.m22 * b.m21 + c.m23 * b.m31 + c.m24 * b.m41;
            m = c.m21 * b.m12 + c.m22 * b.m22 + c.m23 * b.m32 + c.m24 * b.m42;
            n = c.m21 * b.m13 + c.m22 * b.m23 + c.m23 * b.m33 + c.m24 * b.m43;
            q = c.m21 * b.m14 + c.m22 * b.m24 + c.m23 * b.m34 + c.m24 * b.m44;
            p = c.m31 * b.m11 + c.m32 * b.m21 + c.m33 * b.m31 + c.m34 * b.m41;
            v = c.m31 * b.m12 + c.m32 * b.m22 + c.m33 * b.m32 + c.m34 * b.m42;
            u = c.m31 * b.m13 + c.m32 * b.m23 + c.m33 * b.m33 + c.m34 * b.m43;
            y = c.m31 * b.m14 + c.m32 * b.m24 + c.m33 * b.m34 + c.m34 * b.m44;
            B = c.m41 * b.m11 + c.m42 * b.m21 + c.m43 * b.m31 + c.m44 * b.m41;
            x = c.m41 * b.m12 + c.m42 * b.m22 + c.m43 * b.m32 + c.m44 * b.m42;
            h = c.m41 * b.m13 + c.m42 * b.m23 + c.m43 * b.m33 + c.m44 * b.m43;
            H = c.m41 * b.m14 + c.m42 * b.m24 + c.m43 * b.m34 + c.m44 * b.m44;
            a.m11 = c.m11 * b.m11 + c.m12 * b.m21 + c.m13 * b.m31 + c.m14 * b.m41;
            a.m12 = d;
            a.m13 = e;
            a.m14 = f;
            a.m21 = g;
            a.m22 = m;
            a.m23 = n;
            a.m24 = q;
            a.m31 = p;
            a.m32 = v;
            a.m33 = u;
            a.m34 = y;
            a.m41 = B;
            a.m42 = x;
            a.m43 = h;
            a.m44 = H
        }
    }
    Cd.g = !0;
    Cd.u = Sf;
    Object.assign(Cd.prototype, {
        j: Cd
    });
    class $b {
        constructor() {
            this.hint = 0;
            this.offset = new F(0,0,0,0);
            this.Fb = new F(1,1,1,1)
        }
        set(a) {
            var b = this.Fb
              , c = a.Fb;
            b.x = c.x;
            b.y = c.y;
            b.z = c.z;
            b.w = c.w;
            b = this.offset;
            c = a.offset;
            b.x = c.x;
            b.y = c.y;
            b.z = c.z;
            b.w = c.w;
            this.hint = a.hint
        }
        Mu(a) {
            0 <= a ? (this.Fb.x = 1 - a,
            this.Fb.y = 1 - a,
            this.Fb.z = 1 - a,
            this.offset.x = a,
            this.offset.y = a,
            this.offset.z = a) : (this.Fb.x = a + 1,
            this.Fb.y = a + 1,
            this.Fb.z = a + 1,
            this.offset.x = 0,
            this.offset.y = 0,
            this.offset.z = 0);
            this.Fb.w = 1;
            this.offset.w = 0;
            this.hint = 2;
            return this
        }
        concat(a) {
            if (1 == this.hint && 1 == a.hint)
                return this.Fb.w *= a.Fb.w,
                this;
            let b = this.offset
              , c = this.Fb
              , d = a.Fb;
            a = a.offset;
            c.x *= d.x;
            c.y *= d.y;
            c.z *= d.z;
            c.w *= d.w;
            b.x = d.x * b.x + a.x;
            b.y = d.y * b.y + a.y;
            b.z = d.z * b.z + a.z;
            b.w = d.w * b.w + a.w;
            this.hint = 0;
            return this
        }
    }
    $b.g = !0;
    Object.assign($b.prototype, {
        j: $b
    });
    class dc extends eb {
        constructor(a) {
            super(2);
            this.transform = new $b;
            null != a && this.transform.set(a);
            this.collapsed = null;
            this.Ma = dc.next++
        }
        set(a) {
            a.Nu(this)
        }
        collapse(a) {
            if (1 == a.Ba)
                return this;
            null == this.collapsed && (this.collapsed = new dc);
            let b = this.collapsed.transform;
            b.set(a.top().transform);
            let c = a.Ba - 2;
            for (; -1 < c; )
                b.concat(a.K[c--].transform);
            return this.collapsed
        }
    }
    dc.g = !0;
    dc.u = eb;
    Object.assign(dc.prototype, {
        j: dc
    });
    class Oh {
        constructor() {
            this.jb = null;
            this.Jv = new tb(1024);
            this.Jv.jl = !0;
            this.stack = new ac;
            this.ld = new tb
        }
        nj(a) {
            this.jb = a
        }
    }
    Oh.g = !0;
    Object.assign(Oh.prototype, {
        j: Oh
    });
    class wf extends eb {
        constructor(a, b) {
            null == b && (b = 1);
            super(4);
            this.Xw = b;
            this.Vl = a;
            this.bv(a);
            this.hO(b)
        }
        bv(a) {
            this.Ma &= -257;
            a && (this.Ma |= 256);
            this.Vl = a
        }
        hO(a) {
            this.Ma = this.Ma & -256 | 1 << a;
            this.Xw = a
        }
        set(a) {
            a.oB(this)
        }
    }
    wf.g = !0;
    wf.u = eb;
    Object.assign(wf.prototype, {
        j: wf
    });
    class vf extends eb {
        constructor(a, b) {
            null == b && (b = !0);
            super(3);
            this.Vl = a;
            this.ZH = b;
            this.bv(a);
            this.gO(b)
        }
        gO(a) {
            this.Ma = (this.Ma &= -3) | (a ? 2 : 0)
        }
        bv(a) {
            this.Ma = (this.Ma &= -2) | (a ? 1 : 0);
            this.Vl = a
        }
        set(a) {
            a.pB(this)
        }
    }
    vf.g = !0;
    vf.u = eb;
    Object.assign(vf.prototype, {
        j: vf
    });
    class Lb {
        static GI() {
            let a = 0;
            for (; 7 > a; )
                Lb.er[a++].Ba = 0
        }
        static QM(a) {
            null == Lb.er && Lb.GK();
            let b = Lb.er
              , c = Lb.mB;
            var d = a;
            for (c.clear(); null != d.parent; ) {
                var e = d.parent;
                c.Ba == c.Na && c.grow();
                c.K[c.Ba++] = e;
                d = d.parent
            }
            d = 0;
            for (e = c.Ba; d < e; )
                ++d,
                c.K[--c.Ba].SM(b);
            for (a = a.td; null != a; )
                d = b[a.state.type],
                e = a.state,
                d.Ba == d.Na && d.grow(),
                d.K[d.Ba++] = e,
                a = a.next;
            c.clear(!0);
            return b
        }
        static GK() {
            Lb.er = Array(7);
            let a = 0;
            for (; 7 > a; )
                Lb.er[a++] = new ac;
            Lb.mB = new ac(16)
        }
    }
    Lb.g = !0;
    class Tf {
        constructor(a) {
            this.state = a
        }
    }
    Tf.g = !0;
    Object.assign(Tf.prototype, {
        j: Tf
    });
    class Ka extends Yc {
        constructor(a, b) {
            super();
            this.type = this.ta();
            this.flags = 32 | b | Ka.bJ;
            this.W = this.parent = this.name = null;
            this.mb = new Uf;
            this.Aa = new Uf;
            this.qe = 0;
            this.ia = this.Ls(a);
            this.key = We.next();
            this.td = this.fh = null;
            Ka.count++
        }
        H() {
            if (!(0 < (this.flags & 16))) {
                super.H();
                null != this.parent && this.parent.removeChild(this);
                this.ia = this.Aa = this.mb = null;
                for (var a = this.td; null != a; )
                    a.state.cq = null,
                    a = a.next;
                this.$M();
                this.flags = 16;
                Ka.count--
            }
        }
        Ry() {
            let a = this;
            for (; null != a.parent; )
                a = a.parent;
            return a
        }
        md(a, b) {
            null == b && (b = !0);
            null == a && (a = !0);
            this.Ev(b);
            b && (this.Sd(),
            a && this.NA())
        }
        Ev() {
            0 < (this.flags & 64) || (0 < (this.flags & 512) ? null != this.parent ? this.Aa.BB(this.parent.Aa, this.mb) : this.Aa.Ku(this.mb) : null != this.parent ? this.Aa.AB(this.parent.Aa, this.mb) : this.Aa.set(this.mb))
        }
        Sd() {}
        NA() {
            null != this.parent && (this.parent.Sd(),
            this.parent.NA())
        }
        vl(a) {
            var b = null == a;
            if (b)
                a = Lb.QM(this);
            else {
                let c = this.td;
                for (; null != c; ) {
                    let d = a[c.state.type]
                      , e = c.state;
                    d.Ba == d.Na && d.grow();
                    d.K[d.Ba++] = e;
                    c = c.next
                }
            }
            this.OA(a);
            if (b)
                Lb.GI();
            else
                for (b = this.td; null != b; )
                    --a[b.state.type].Ba,
                    b = b.next;
            this.flags &= -33
        }
        vh(a) {
            let b = this.td;
            for (; null != b; ) {
                if (b.state.type == a)
                    return b.state;
                b = b.next
            }
            return null
        }
        Kg(a) {
            a.cq = this;
            this.flags |= 32;
            if (null == this.td)
                this.td = new Tf(a);
            else {
                for (var b = this.td; null != b; ) {
                    if (b.state.type == a.type) {
                        b.state = a;
                        return
                    }
                    b = b.next
                }
                b = new Tf(a);
                b.next = this.td;
                this.td = b
            }
        }
        vq(a) {
            let b = this.td
              , c = null;
            for (; null != b; ) {
                if (b.state.type == a) {
                    null != c ? c.next = b.next : this.td = b.next;
                    b.next = null;
                    this.flags |= 32;
                    break
                }
                c = b;
                b = b.next
            }
        }
        $M() {
            let a = this.td, b;
            null != a && (this.flags |= 32);
            for (; null != a; )
                b = a.next,
                a.next = null,
                a = b;
            this.td = null
        }
        SM(a) {
            let b = this.td;
            for (; null != b; ) {
                let c = a[b.state.type]
                  , d = b.state;
                c.Ba == c.Na && c.grow();
                c.K[c.Ba++] = d;
                b = b.next
            }
        }
        Ls(a) {
            null == a && (a = Ka.aJ);
            if (null == a)
                throw 10;
            switch (a) {
            case 202:
                return new ce;
            case 302:
                return new yc;
            default:
                throw 11;
            }
        }
        ta() {
            return 101
        }
    }
    Ka.g = !0;
    Ka.sb = [id, ug];
    Ka.u = Yc;
    Object.assign(Ka.prototype, {
        j: Ka
    });
    class Ta extends Ka {
        constructor(a, b) {
            super(b, 2);
            this.ca = this.Ls(b);
            this.xj = Array(7);
            null != a && a.R(this);
            this.vp = 0;
            this.effect = this.tn = null;
            Ta.count++
        }
        H() {
            0 < (this.flags & 16) || (null != this.effect && this.effect.H(),
            this.effect = null,
            this.ca.H(),
            this.xj = this.ca = null,
            super.H(),
            Ta.count--)
        }
        jf(a) {
            this.effect = a;
            this.effect.Ng(this)
        }
        zc() {}
        Jb(a, b) {
            if (!this.ia.contains(a))
                return !1;
            null != b && b.add(this);
            return !0
        }
        kk(a, b) {
            return b
        }
        Sd() {
            0 < (this.flags & 128) || (this.ca.rr(this.Aa, this.ia),
            super.Sd())
        }
        OA(a) {
            let b = 0;
            let c = this.xj
              , d = 0
              , e = 0;
            for (; e < a.length; ) {
                var f = a[e];
                ++e;
                0 == f.Ba ? c[d] = null : (f = f.K[f.Ba - 1].collapse(f),
                c[d] = f,
                b |= 1 << f.type);
                ++d
            }
            this.vp = b
        }
        ta() {
            return 201
        }
    }
    Ta.g = !0;
    Ta.u = Ka;
    Object.assign(Ta.prototype, {
        j: Ta
    });
    class Vf extends Ta {
        constructor(a, b, c, d) {
            super(c, d);
            this.size = new F(1,1,0,1);
            this.min = new F(0,0,0,1);
            this.max = new F(1,1,0,1);
            this.cols = a;
            this.rows = b;
            this.GL();
            this.zc()
        }
        GL() {
            this.hu = (this.cols + 1) * (this.rows + 1);
            this.di = new tb(this.hu);
            for (var a = 0, b = this.hu; a < b; )
                ++a,
                this.di.ru(new F(0,0,0,1));
            a = this.cols + 1;
            b = this.rows + 1;
            let c = 0, d;
            for (; c < b; ) {
                for (d = 0; d < a; ) {
                    var e = this.di.K[c * a + d];
                    e.x = this.min.x + d / (a - 1) * this.max.x;
                    e.y = this.min.y + c / (b - 1) * this.max.y;
                    ++d
                }
                ++c
            }
            this.TL = (2 * this.cols + 2) * this.rows + 2 * (this.rows - 1);
            this.indices = new Uint8Array(this.TL);
            --b;
            for (c = e = 0; c < b; ) {
                for (d = 0; d < a; )
                    this.indices[e++] = c * a + d,
                    this.indices[e++] = c * a + a + d,
                    ++d;
                c < b - 1 && (this.indices[e++] = (c + 1) * a + (a - 1),
                this.indices[e++] = (c + 1) * a);
                ++c
            }
        }
        zc() {
            super.zc()
        }
        ta() {
            return 601
        }
    }
    Vf.g = !0;
    Vf.u = Ta;
    Object.assign(Vf.prototype, {
        j: Vf
    });
    class wc extends eb {
        constructor() {
            super(1);
            this.na = null;
            this.PK = !1;
            this.Gs = null;
            this.Ma = wc.next++
        }
        set(a) {
            a.Wu(this)
        }
        TN(a) {
            let b = a.o
              , c = a.C
              , d = a.A - a.o;
            a = a.D - a.C;
            this.Gs = [new F(b,c,0,1), new F(b,c + a,0,1), new F(b + d,c + a,0,1), new F(b + d,c,0,1)]
        }
    }
    wc.g = !0;
    wc.u = eb;
    Object.assign(wc.prototype, {
        j: wc
    });
    class Wf extends Ta {
        constructor(a, b) {
            super(a, 402);
            this.ft = b;
            this.zc();
            this.jz = this.CC = null
        }
        H() {
            this.ft = null;
            var a = this.CC;
            null != a && a.H();
            a = this.jz;
            null != a && a.H();
            this.jz = this.CC = null;
            super.H()
        }
        Ls() {
            return new de
        }
        Jb() {
            return !1
        }
        zc() {
            let a = this.ft.getData(0);
            this.ca.om(a)
        }
        ta() {
            return 501
        }
    }
    Wf.g = !0;
    Wf.u = Ta;
    Object.assign(Wf.prototype, {
        j: Wf
    });
    class pb extends Ka {
        constructor(a, b, c) {
            null == c && (c = 0);
            super(b, 1 | c);
            this.children = null;
            null != a && a.R(this);
            pb.count++
        }
        H() {
            if (!(0 < (this.flags & 16))) {
                for (var a = this.children; null != a; ) {
                    let b = a.W;
                    null != a.fh ? a.fh.H() : a.H();
                    a = b
                }
                super.H();
                pb.count--
            }
        }
        kk(a, b) {
            return Ea.kk(this, a, b)
        }
        Jb(a, b) {
            let c = !1;
            if (this.ia.contains(a)) {
                let d = this.children;
                for (; null != d; )
                    d.Jb(a, b) && (c = !0),
                    d = d.W
            }
            return c
        }
        Rg(a) {
            let b = super.Rg(a), c = this.children, d;
            for (; null != c; )
                d = c.W,
                c.Rg(a) && (b = !0),
                c = d;
            return b
        }
        R(a) {
            if (null == this.children)
                this.children = a,
                a.W = null;
            else {
                let b = this.children;
                for (; null != b.W; )
                    b = b.W;
                b.W = a
            }
            a.parent = this
        }
        nk() {
            let a = 0
              , b = this.children;
            for (; null != b; )
                ++a,
                b = b.W;
            return a
        }
        jI(a, b) {
            if (0 == b)
                a.W = this.children,
                this.children = a;
            else {
                let c = this.children
                  , d = 0;
                for (--b; d < b; )
                    ++d,
                    c = c.W;
                a.W = c.W;
                c.W = a
            }
            a.parent = this
        }
        removeChild(a) {
            if (this.children == a)
                this.children = a.W;
            else {
                let b = this.children;
                for (; b.W != a; )
                    b = b.W;
                b.W = a.W
            }
            a.W = null;
            a.parent = null;
            return this
        }
        Yc(a) {
            let b = this.children
              , c = 0;
            for (; c <= a; ) {
                if (c == a)
                    return b;
                b = b.W;
                ++c
            }
            return null
        }
        Kq(a, b) {
            this.removeChild(a);
            this.jI(a, b)
        }
        np(a) {
            let b = this.children;
            for (; null != b; ) {
                if (b.name == a)
                    return b;
                b = b.W
            }
            return null
        }
        DO(a, b) {
            let c = null
              , d = null;
            for (var e = 0, f = this.children; 2 > e && null != f; )
                f.W == a ? (c = f,
                ++e) : f.W == b && (d = f,
                ++e),
                f = f.W;
            e = a.W;
            f = b.W;
            a.W = null;
            b.W = null;
            e == b ? (null != c ? c.W = b : this.children = b,
            b.W = a,
            a.W = f) : f == a ? (null != d ? d.W = a : this.children = a,
            a.W = b,
            b.W = e) : (null != c ? c.W = b : this.children = b,
            b.W = e,
            null != d ? d.W = a : this.children = a,
            a.W = f)
        }
        EO(a, b) {
            this.DO(this.Yc(a), this.Yc(b))
        }
        FN(a) {
            if (this.children != a) {
                for (var b = this.children; b.W != a; )
                    b = b.W;
                b.W = a.W;
                a.W = this.children;
                this.children = a
            }
        }
        Su(a) {
            if (null != a.W) {
                var b = this.children;
                if (b == a) {
                    for (; null != b.W; )
                        b = b.W;
                    b.W = a;
                    this.children = a.W
                } else {
                    for (; b.W != a; )
                        b = b.W;
                    for (b = b.W = a.W; null != b.W; )
                        b = b.W;
                    b.W = a
                }
                a.W = null
            }
        }
        Ev(a) {
            super.Ev(a);
            let b = this.children;
            for (; null != b; )
                b.md(!1, a),
                b = b.W
        }
        Sd() {
            if (!(0 < (this.flags & 128)) && null != this.children) {
                var a = this.children;
                this.ia.from(a.ia);
                for (a = a.W; null != a; )
                    this.ia.yp(a.ia),
                    a = a.W;
                super.Sd()
            }
        }
        OA(a) {
            let b = this.children;
            for (; null != b; )
                b.vl(a),
                b = b.W
        }
        ta() {
            return 301
        }
    }
    pb.g = !0;
    pb.u = Ka;
    Object.assign(pb.prototype, {
        j: pb
    });
    class Xb extends eb {
        constructor(a) {
            super(5);
            this.Jj = 1;
            this.collapsed = null;
            this.Ee(a)
        }
        Ee(a) {
            this.Jj = 0 > a ? 0 : 1 < a ? 1 : a;
            this.Ma = 65535 * this.Jj | 0
        }
        set(a) {
            a.Yu(this)
        }
        collapse(a) {
            if (1 == a.Ba)
                return this;
            let b = a.top().Jj
              , c = a.Ba - 2;
            for (; -1 < c; )
                b *= a.K[c--].Jj;
            null == this.collapsed ? this.collapsed = new Xb(b) : this.collapsed.Ee(b);
            return this.collapsed
        }
    }
    Xb.g = !0;
    Xb.u = eb;
    Object.assign(Xb.prototype, {
        j: Xb
    });
    class Ph {
        constructor() {
            this.list = [];
            this.size = 0
        }
        add(a) {
            this.list[this.size++] = a
        }
    }
    Ph.g = !0;
    Object.assign(Ph.prototype, {
        j: Ph
    });
    class zc extends Ta {
        constructor(a) {
            super(a, 302);
            this.flags |= 512;
            this.size = new F(1,1,0,1);
            this.zc()
        }
        ob(a, b) {
            let c = this.size;
            c.x = a;
            c.y = b;
            this.zc()
        }
        Jb(a, b) {
            if (!this.ia.contains(a))
                return !1;
            a = this.Aa.xf(a, new F(0,0,0,1));
            return ti.IO(a.x, a.y, this.size.x, this.size.y) ? (null != b && b.add(this),
            !0) : !1
        }
        kk(a, b) {
            let c = new F(0,0,0,1)
              , d = ee
              , e = ee
              , f = fe
              , g = fe
              , h = this.size.x
              , m = this.size.y;
            if (a == this)
                e = d = 0,
                f = h,
                g = m;
            else {
                if (a == this.parent) {
                    var n = this.mb;
                    c.x = 0;
                    c.y = 0;
                    n.tb(c, c);
                    c.x < d && (d = c.x);
                    c.x > f && (f = c.x);
                    c.y < e && (e = c.y);
                    c.y > g && (g = c.y);
                    c.x = h;
                    c.y = 0;
                    n.tb(c, c);
                    c.x < d && (d = c.x);
                    c.x > f && (f = c.x);
                    c.y < e && (e = c.y);
                    c.y > g && (g = c.y);
                    c.x = h;
                    c.y = m;
                    n.tb(c, c);
                    c.x < d && (d = c.x);
                    c.x > f && (f = c.x);
                    c.y < e && (e = c.y);
                    c.y > g && (g = c.y);
                    c.x = 0;
                    c.y = m;
                    n.tb(c, c)
                } else
                    null == a.parent ? (n = this.Aa,
                    c.x = 0,
                    c.y = 0,
                    n.tb(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = h,
                    c.y = 0,
                    n.tb(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = h,
                    c.y = m,
                    n.tb(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = 0,
                    c.y = m,
                    n.tb(c, c)) : (n = this.Aa,
                    a = a.Aa,
                    c.x = 0,
                    c.y = 0,
                    n.tb(c, c),
                    a.xf(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = h,
                    c.y = 0,
                    n.tb(c, c),
                    a.xf(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = h,
                    c.y = m,
                    n.tb(c, c),
                    a.xf(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = 0,
                    c.y = m,
                    n.tb(c, c),
                    a.xf(c, c));
                c.x < d && (d = c.x);
                c.x > f && (f = c.x);
                c.y < e && (e = c.y);
                c.y > g && (g = c.y)
            }
            null == b ? b = new X(d,e,f,g) : (b.o = d,
            b.C = e,
            b.A = f,
            b.D = g);
            return b
        }
        zc() {
            super.zc();
            var a = this.size.x / 2;
            let b = this.size.y / 2;
            this.ca.F.x = a;
            this.ca.F.y = b;
            this.ca.V = Math.sqrt(a * a + b * b);
            302 == this.ca.type && (a = this.ca.Qa,
            a.o = 0,
            a.C = 0,
            a.A = this.size.x,
            a.D = this.size.y)
        }
        ta() {
            return 401
        }
    }
    zc.g = !0;
    zc.u = Ta;
    Object.assign(zc.prototype, {
        j: zc
    });
    class Ea {
        static Ft(a, b) {
            for (a = a.parent; null != a; ) {
                if (a == b)
                    return !0;
                a = a.parent
            }
            return !1
        }
        static pf(a) {
            let b = Ea.kv;
            b.clear();
            for (b.gf(Ka.count); null != a; )
                b.K[b.Ba++] = a,
                a = a.parent;
            a = b.K[--b.Ba];
            for (a.Aa.set(a.mb); 0 < b.Ba; ) {
                let c = b.K[--b.Ba];
                0 >= (c.flags & 64) && (0 < (c.flags & 512) ? c.Aa.BB(a.Aa, c.mb) : c.Aa.AB(a.Aa, c.mb));
                a = c
            }
        }
        static WJ(a, b) {
            let c = Ea.uO;
            c.gf(Ka.count);
            var d = Ea.kv;
            d.gf(Ka.count);
            d.clear();
            for (d.K[d.Ba++] = a; 0 < d.Ba; )
                if (a = d.K[--d.Ba],
                1 != a.qe)
                    if (0 < (a.flags & 2))
                        null != a.effect && (c.K[c.Ba++] = a);
                    else if (0 < (a.flags & 1))
                        for (a = a.children; null != a; )
                            d.K[d.Ba++] = a,
                            a = a.W;
            b.clear();
            b.gf(c.Ba);
            d = 0;
            for (a = c.Ba; d < a; ) {
                ++d;
                let e = c.K[--c.Ba];
                b.K[b.Z++] = e
            }
        }
        static kk(a, b, c) {
            let d = ee
              , e = ee
              , f = fe
              , g = fe
              , h = Ea.kv;
            h.gf(Ka.count);
            h.clear();
            for (h.K[h.Ba++] = a; 0 < h.Ba; )
                if (a = h.K[--h.Ba],
                0 < (a.flags & 2))
                    a.kk(b, c),
                    c.o < d && (d = c.o),
                    c.C < e && (e = c.C),
                    c.A > f && (f = c.A),
                    c.D > g && (g = c.D);
                else if (0 < (a.flags & 1))
                    for (a = a.children; null != a; )
                        h.K[h.Ba++] = a,
                        a = a.W;
            c.o = d;
            c.C = e;
            c.A = f;
            c.D = g;
            return c
        }
        static UO(a, b, c) {
            let d = c.o
              , e = c.C
              , f = c.A
              , g = c.D
              , h = ee
              , m = ee
              , n = fe
              , q = fe
              , p = new F(0,0,0,1);
            b == a ? (h = c.o,
            m = c.C,
            n = c.A,
            q = c.D) : (b == a.parent ? (b = a.mb,
            p.x = d,
            p.y = e,
            b.tb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = e,
            b.tb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = g,
            b.tb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = d,
            p.y = g,
            b.tb(p, p)) : null == b.parent ? (b = a.Aa,
            p.x = d,
            p.y = e,
            b.tb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = e,
            b.tb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = g,
            b.tb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = d,
            p.y = g,
            b.tb(p, p)) : (a = a.Aa,
            b = b.Aa,
            p.x = d,
            p.y = e,
            a.tb(p, p),
            b.xf(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = e,
            a.tb(p, p),
            b.xf(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = g,
            a.tb(p, p),
            b.xf(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = d,
            p.y = g,
            a.tb(p, p),
            b.xf(p, p)),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y));
            return new X(h,m,n,q)
        }
    }
    Ea.g = !0;
    class ge {
    }
    ge.g = !0;
    ge.me = !0;
    Object.assign(ge.prototype, {
        j: ge
    });
    class Uf {
        constructor() {
            this.az = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.xe = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.I = 15;
            this.scale = new F(1,1,1,1);
            this.translate = new F(0,0,0,1);
            this.matrix = new db(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
        }
        set(a) {
            var b = this.translate
              , c = a.translate;
            b.x = c.x;
            b.y = c.y;
            b.z = c.z;
            b = this.scale;
            c = a.scale;
            b.x = c.x;
            b.y = c.y;
            b.z = c.z;
            b = this.matrix;
            c = a.matrix;
            b.m11 = c.m11;
            b.m12 = c.m12;
            b.m13 = c.m13;
            b.m21 = c.m21;
            b.m22 = c.m22;
            b.m23 = c.m23;
            b.m31 = c.m31;
            b.m32 = c.m32;
            b.m33 = c.m33;
            this.I = a.I | 240
        }
        Ku(a) {
            this.translate.x = a.translate.x;
            this.translate.y = a.translate.y;
            this.scale.x = a.scale.x;
            this.scale.y = a.scale.y;
            let b = this.matrix
              , c = a.matrix;
            b.m11 = c.m11;
            b.m12 = c.m12;
            b.m21 = c.m21;
            b.m22 = c.m22;
            this.I = a.I | 240
        }
        rB() {
            let a = this.matrix;
            a.m11 = 1;
            a.m12 = 0;
            a.m21 = 0;
            a.m22 = 1;
            this.I |= 506
        }
        hK() {
            let a, b;
            if (0 < (this.I & 8)) {
                a = Math.abs(this.scale.x);
                b = Math.abs(this.scale.y);
                var c = Math.abs(this.scale.z)
            } else
                c = this.matrix,
                a = Math.abs(c.m11) + Math.abs(c.m12) + Math.abs(c.m13),
                b = Math.abs(c.m21) + Math.abs(c.m22) + Math.abs(c.m23),
                c = Math.abs(c.m31) + Math.abs(c.m32) + Math.abs(c.m33);
            return Math.max(Math.max(a, b), c)
        }
        AB(a, b) {
            let c = a.I
              , d = b.I;
            if (0 < (c & 1))
                this.set(b);
            else if (0 < (d & 1))
                this.set(a);
            else if (12 == (c & 12) && 0 < (d & 8)) {
                if (0 < (c & 2)) {
                    let f = b.matrix
                      , g = this.matrix;
                    g.m11 = f.m11;
                    g.m12 = f.m12;
                    g.m13 = f.m13;
                    g.m21 = f.m21;
                    g.m22 = f.m22;
                    g.m23 = f.m23;
                    g.m31 = f.m31;
                    g.m32 = f.m32;
                    g.m33 = f.m33
                } else if (0 < (d & 2)) {
                    let f = a.matrix
                      , g = this.matrix;
                    g.m11 = f.m11;
                    g.m12 = f.m12;
                    g.m13 = f.m13;
                    g.m21 = f.m21;
                    g.m22 = f.m22;
                    g.m23 = f.m23;
                    g.m31 = f.m31;
                    g.m32 = f.m32;
                    g.m33 = f.m33
                } else {
                    let f = a.matrix
                      , g = b.matrix
                      , h = g.m11
                      , m = g.m12
                      , n = g.m13
                      , q = g.m21
                      , p = g.m22
                      , v = g.m23
                      , u = g.m31
                      , y = g.m32
                      , B = g.m33
                      , x = f.m11 * m + f.m12 * p + f.m13 * y
                      , H = f.m11 * n + f.m12 * v + f.m13 * B
                      , D = f.m21 * m + f.m22 * p + f.m23 * y
                      , Z = f.m21 * n + f.m22 * v + f.m23 * B
                      , Y = f.m31 * m + f.m32 * p + f.m33 * y
                      , T = f.m31 * n + f.m32 * v + f.m33 * B
                      , ba = this.matrix;
                    ba.m11 = f.m11 * h + f.m12 * q + f.m13 * u;
                    ba.m12 = x;
                    ba.m13 = H;
                    ba.m21 = f.m21 * h + f.m22 * q + f.m23 * u;
                    ba.m22 = D;
                    ba.m23 = Z;
                    ba.m31 = f.m31 * h + f.m32 * q + f.m33 * u;
                    ba.m32 = Y;
                    ba.m33 = T
                }
                this.I = this.I & -4 | 248;
                let e = a.scale.x;
                if (0 < (c & 2)) {
                    let f = a.scale.x
                      , g = b.translate
                      , h = a.translate;
                    this.translate.x = g.x * f + h.x;
                    this.translate.y = g.y * f + h.y;
                    this.translate.z = g.z * f + h.z
                } else {
                    let f = a.scale.x
                      , g = a.matrix
                      , h = b.translate
                      , m = h.x
                      , n = h.y
                      , q = h.z
                      , p = a.translate;
                    this.translate.x = (g.m11 * m + g.m12 * n + g.m13 * q) * f + p.x;
                    this.translate.y = (g.m21 * m + g.m22 * n + g.m23 * q) * f + p.y;
                    this.translate.z = (g.m31 * m + g.m32 * n + g.m33 * q) * f + p.z
                }
                this.I = this.I & -2 | 240;
                if (0 < (d & 4))
                    this.scale.x = this.scale.y = this.scale.z = e * b.scale.x,
                    this.I = this.I & -2 | 244;
                else {
                    let f = b.scale;
                    this.scale.x = f.x * e;
                    this.scale.y = f.y * e;
                    this.scale.z = f.z * e;
                    this.I = this.I & -6 | 240
                }
            } else {
                if (0 < (c & 8) && 0 < (d & 8)) {
                    let e = a.matrix
                      , f = a.scale
                      , g = f.x
                      , h = f.y
                      , m = f.z
                      , n = e.m11 * g
                      , q = e.m12 * h
                      , p = e.m13 * m
                      , v = e.m21 * g
                      , u = e.m22 * h
                      , y = e.m23 * m
                      , B = e.m31 * g
                      , x = e.m32 * h
                      , H = e.m33 * m
                      , D = b.matrix
                      , Z = b.scale
                      , Y = Z.x
                      , T = Z.y
                      , ba = Z.z
                      , sa = D.m11 * Y
                      , ma = D.m12 * T
                      , ca = D.m13 * ba
                      , pa = D.m21 * Y
                      , ya = D.m22 * T
                      , na = D.m23 * ba
                      , fa = D.m31 * Y
                      , Ya = D.m32 * T
                      , jb = D.m33 * ba
                      , Oa = this.matrix;
                    Oa.m11 = n * sa + q * pa + p * fa;
                    Oa.m12 = n * ma + q * ya + p * Ya;
                    Oa.m13 = n * ca + q * na + p * jb;
                    Oa.m21 = v * sa + u * pa + y * fa;
                    Oa.m22 = v * ma + u * ya + y * Ya;
                    Oa.m23 = v * ca + u * na + y * jb;
                    Oa.m31 = B * sa + x * pa + H * fa;
                    Oa.m32 = B * ma + x * ya + H * Ya;
                    Oa.m33 = B * ca + x * na + H * jb;
                    this.I = 240;
                    let kb = b.translate
                      , Rd = kb.x
                      , dd = kb.y
                      , Sd = kb.z
                      , ed = a.translate;
                    this.translate.x = n * Rd + q * dd + p * Sd + ed.x;
                    this.translate.y = v * Rd + u * dd + y * Sd + ed.y;
                    this.translate.z = B * Rd + x * dd + H * Sd + ed.z
                } else if (0 < (c & 8)) {
                    let e = a.matrix
                      , f = a.scale
                      , g = f.x
                      , h = f.y
                      , m = f.z
                      , n = e.m11 * g
                      , q = e.m12 * h
                      , p = e.m13 * m
                      , v = e.m21 * g
                      , u = e.m22 * h
                      , y = e.m23 * m
                      , B = e.m31 * g
                      , x = e.m32 * h
                      , H = e.m33 * m
                      , D = b.matrix
                      , Z = D.m11
                      , Y = D.m12
                      , T = D.m13
                      , ba = D.m21
                      , sa = D.m22
                      , ma = D.m23
                      , ca = D.m31
                      , pa = D.m32
                      , ya = D.m33
                      , na = this.matrix;
                    na.m11 = n * Z + q * ba + p * ca;
                    na.m12 = n * Y + q * sa + p * pa;
                    na.m13 = n * T + q * ma + p * ya;
                    na.m21 = v * Z + u * ba + y * ca;
                    na.m22 = v * Y + u * sa + y * pa;
                    na.m23 = v * T + u * ma + y * ya;
                    na.m31 = B * Z + x * ba + H * ca;
                    na.m32 = B * Y + x * sa + H * pa;
                    na.m33 = B * T + x * ma + H * ya;
                    this.I = 240;
                    let fa = b.translate
                      , Ya = fa.x
                      , jb = fa.y
                      , Oa = fa.z
                      , kb = a.translate;
                    this.translate.x = n * Ya + q * jb + p * Oa + kb.x;
                    this.translate.y = v * Ya + u * jb + y * Oa + kb.y;
                    this.translate.z = B * Ya + x * jb + H * Oa + kb.z
                } else if (0 < (d & 8)) {
                    let e = a.matrix
                      , f = b.matrix
                      , g = b.scale
                      , h = g.x
                      , m = g.y
                      , n = g.z
                      , q = f.m11 * h
                      , p = f.m12 * m
                      , v = f.m13 * n
                      , u = f.m21 * h
                      , y = f.m22 * m
                      , B = f.m23 * n
                      , x = f.m31 * h
                      , H = f.m32 * m
                      , D = f.m33 * n
                      , Z = e.m11 * p + e.m12 * y + e.m13 * H
                      , Y = e.m11 * v + e.m12 * B + e.m13 * D
                      , T = e.m21 * p + e.m22 * y + e.m23 * H
                      , ba = e.m21 * v + e.m22 * B + e.m23 * D
                      , sa = e.m31 * p + e.m32 * y + e.m33 * H
                      , ma = e.m31 * v + e.m32 * B + e.m33 * D
                      , ca = this.matrix;
                    ca.m11 = e.m11 * q + e.m12 * u + e.m13 * x;
                    ca.m12 = Z;
                    ca.m13 = Y;
                    ca.m21 = e.m21 * q + e.m22 * u + e.m23 * x;
                    ca.m22 = T;
                    ca.m23 = ba;
                    ca.m31 = e.m31 * q + e.m32 * u + e.m33 * x;
                    ca.m32 = sa;
                    ca.m33 = ma;
                    this.I = 240;
                    let pa = b.translate
                      , ya = pa.x
                      , na = pa.y
                      , fa = pa.z
                      , Ya = a.translate;
                    this.translate.x = e.m11 * ya + e.m12 * na + e.m13 * fa + Ya.x;
                    this.translate.y = e.m21 * ya + e.m22 * na + e.m23 * fa + Ya.y;
                    this.translate.z = e.m31 * ya + e.m32 * na + e.m33 * fa + Ya.z
                } else {
                    let e = a.matrix
                      , f = b.matrix
                      , g = f.m11
                      , h = f.m12
                      , m = f.m13
                      , n = f.m21
                      , q = f.m22
                      , p = f.m23
                      , v = f.m31
                      , u = f.m32
                      , y = f.m33
                      , B = e.m11 * h + e.m12 * q + e.m13 * u
                      , x = e.m11 * m + e.m12 * p + e.m13 * y
                      , H = e.m21 * h + e.m22 * q + e.m23 * u
                      , D = e.m21 * m + e.m22 * p + e.m23 * y
                      , Z = e.m31 * h + e.m32 * q + e.m33 * u
                      , Y = e.m31 * m + e.m32 * p + e.m33 * y
                      , T = this.matrix;
                    T.m11 = e.m11 * g + e.m12 * n + e.m13 * v;
                    T.m12 = B;
                    T.m13 = x;
                    T.m21 = e.m21 * g + e.m22 * n + e.m23 * v;
                    T.m22 = H;
                    T.m23 = D;
                    T.m31 = e.m31 * g + e.m32 * n + e.m33 * v;
                    T.m32 = Z;
                    T.m33 = Y;
                    this.I = 240;
                    let ba = b.translate
                      , sa = ba.x
                      , ma = ba.y
                      , ca = ba.z
                      , pa = a.translate;
                    this.translate.x = e.m11 * sa + e.m12 * ma + e.m13 * ca + pa.x;
                    this.translate.y = e.m21 * sa + e.m22 * ma + e.m23 * ca + pa.y;
                    this.translate.z = e.m31 * sa + e.m32 * ma + e.m33 * ca + pa.z
                }
                this.I = this.I & -2 | 240
            }
        }
        BB(a, b) {
            var c = a.I
              , d = b.I;
            if (0 < (c & 1))
                this.Ku(b);
            else if (0 < (d & 1))
                this.Ku(a);
            else if (12 == (c & 12) && 0 < (d & 8)) {
                if (0 < (c & 2)) {
                    var e = b.matrix
                      , f = this.matrix;
                    f.m11 = e.m11;
                    f.m12 = e.m12;
                    f.m21 = e.m21;
                    f.m22 = e.m22
                } else if (0 < (d & 2))
                    e = a.matrix,
                    f = this.matrix,
                    f.m11 = e.m11,
                    f.m12 = e.m12,
                    f.m21 = e.m21,
                    f.m22 = e.m22;
                else {
                    e = a.matrix;
                    var g = b.matrix;
                    f = g.m11;
                    var h = g.m12
                      , m = g.m21
                      , n = g.m22;
                    g = e.m11 * h + e.m12 * n;
                    h = e.m21 * h + e.m22 * n;
                    n = this.matrix;
                    n.m11 = e.m11 * f + e.m12 * m;
                    n.m12 = g;
                    n.m21 = e.m21 * f + e.m22 * m;
                    n.m22 = h
                }
                this.I = this.I & -4 | 504;
                e = a.scale.x;
                0 < (c & 2) ? (c = a.scale.x,
                f = b.translate,
                a = a.translate,
                this.translate.x = f.x * c + a.x,
                this.translate.y = f.y * c + a.y) : (c = a.scale.x,
                f = a.matrix,
                g = b.translate,
                m = g.x,
                g = g.y,
                a = a.translate,
                this.translate.x = (f.m11 * m + f.m12 * g) * c + a.x,
                this.translate.y = (f.m21 * m + f.m22 * g) * c + a.y);
                this.I = this.I & -2 | 496;
                0 < (d & 4) ? (this.scale.x = this.scale.y = e * b.scale.x,
                this.I = this.I & -2 | 500) : (a = b.scale,
                this.scale.x = a.x * e,
                this.scale.y = a.y * e,
                this.I = this.I & -6 | 496)
            } else {
                if (0 < (c & 8) && 0 < (d & 8)) {
                    f = a.matrix;
                    d = a.scale;
                    e = d.x;
                    m = d.y;
                    d = f.m11 * e;
                    c = f.m12 * m;
                    e *= f.m21;
                    f = f.m22 * m;
                    h = b.matrix;
                    m = b.scale;
                    n = m.x;
                    var q = m.y;
                    m = h.m11 * n;
                    g = h.m12 * q;
                    n *= h.m21;
                    h = h.m22 * q;
                    q = this.matrix;
                    q.m11 = d * m + c * n;
                    q.m12 = d * g + c * h;
                    q.m21 = e * m + f * n;
                    q.m22 = e * g + f * h;
                    this.I = this.I & -16 | 496;
                    m = b.translate;
                    b = m.x;
                    m = m.y;
                    a = a.translate;
                    this.translate.x = d * b + c * m + a.x;
                    this.translate.y = e * b + f * m + a.y
                } else
                    0 < (c & 8) ? (f = a.matrix,
                    d = a.scale,
                    e = d.x,
                    m = d.y,
                    d = f.m11 * e,
                    c = f.m12 * m,
                    e *= f.m21,
                    f = f.m22 * m,
                    n = b.matrix,
                    m = n.m11,
                    g = n.m12,
                    h = n.m21,
                    n = n.m22,
                    q = this.matrix,
                    q.m11 = d * m + c * h,
                    q.m12 = d * g + c * n,
                    q.m21 = e * m + f * h,
                    q.m22 = e * g + f * n,
                    this.I = this.I & -16 | 496,
                    m = b.translate,
                    b = m.x,
                    m = m.y,
                    a = a.translate,
                    this.translate.x = d * b + c * m + a.x,
                    this.translate.y = e * b + f * m + a.y) : 0 < (d & 8) ? (d = a.matrix,
                    m = b.matrix,
                    c = b.scale,
                    e = c.x,
                    g = c.y,
                    c = m.m11 * e,
                    f = m.m12 * g,
                    e *= m.m21,
                    g *= m.m22,
                    m = d.m11 * f + d.m12 * g,
                    f = d.m21 * f + d.m22 * g,
                    g = this.matrix,
                    g.m11 = d.m11 * c + d.m12 * e,
                    g.m12 = m,
                    g.m21 = d.m21 * c + d.m22 * e,
                    g.m22 = f,
                    this.I = this.I & -16 | 496,
                    c = b.translate,
                    b = c.x,
                    c = c.y,
                    a = a.translate,
                    this.translate.x = d.m11 * b + d.m12 * c + a.x,
                    this.translate.y = d.m21 * b + d.m22 * c + a.y) : (d = a.matrix,
                    f = b.matrix,
                    c = f.m11,
                    m = f.m12,
                    e = f.m21,
                    g = f.m22,
                    f = d.m11 * m + d.m12 * g,
                    m = d.m21 * m + d.m22 * g,
                    g = this.matrix,
                    g.m11 = d.m11 * c + d.m12 * e,
                    g.m12 = f,
                    g.m21 = d.m21 * c + d.m22 * e,
                    g.m22 = m,
                    this.I = this.I & -16 | 496,
                    c = b.translate,
                    b = c.x,
                    c = c.y,
                    a = a.translate,
                    this.translate.x = d.m11 * b + d.m12 * c + a.x,
                    this.translate.y = d.m21 * b + d.m22 * c + a.y);
                this.I = this.I & -2 | 496
            }
        }
        pI(a, b) {
            0 < (this.I & 16) && this.ur();
            let c = this.xe
              , d = a.x
              , e = a.y;
            a = a.z;
            b.x = c.m11 * d + c.m12 * e + c.m13 * a + c.m14;
            b.y = c.m21 * d + c.m22 * e + c.m23 * a + c.m24;
            b.z = c.m31 * d + c.m32 * e + c.m33 * a + c.m34;
            return b
        }
        tb(a, b) {
            0 < (this.I & 64) && this.ul();
            let c = this.xe
              , d = c.m21 * a.x + c.m22 * a.y + c.m24;
            b.x = c.m11 * a.x + c.m12 * a.y + c.m14;
            b.y = d;
            return b
        }
        xf(a, b) {
            0 < (this.I & 128) && this.dP();
            let c = this.az
              , d = c.m21 * a.x + c.m22 * a.y + c.m24;
            b.x = c.m11 * a.x + c.m12 * a.y + c.m14;
            b.y = d;
            return b
        }
        ur() {
            let a = this.xe;
            if (0 < (this.I & 1))
                a.m11 = 1,
                a.m12 = 0,
                a.m13 = 0,
                a.m21 = 0,
                a.m22 = 1,
                a.m23 = 0,
                a.m31 = 0,
                a.m32 = 0,
                a.m33 = 1,
                a.m14 = 0,
                a.m24 = 0,
                a.m34 = 0;
            else {
                var b = this.matrix;
                if (0 < (this.I & 8)) {
                    let c = this.scale.x
                      , d = this.scale.y
                      , e = this.scale.z;
                    a.m11 = b.m11 * c;
                    a.m12 = b.m12 * d;
                    a.m13 = b.m13 * e;
                    a.m21 = b.m21 * c;
                    a.m22 = b.m22 * d;
                    a.m23 = b.m23 * e;
                    a.m31 = b.m31 * c;
                    a.m32 = b.m32 * d;
                    a.m33 = b.m33 * e
                } else
                    a.m11 = b.m11,
                    a.m12 = b.m12,
                    a.m13 = b.m13,
                    a.m21 = b.m21,
                    a.m22 = b.m22,
                    a.m23 = b.m23,
                    a.m31 = b.m31,
                    a.m32 = b.m32,
                    a.m33 = b.m33;
                b = this.translate;
                a.m14 = b.x;
                a.m24 = b.y;
                a.m34 = b.z
            }
            this.I &= -81
        }
        ul() {
            let a = this.xe;
            if (0 < (this.I & 1))
                a.m11 = 1,
                a.m12 = 0,
                a.m21 = 0,
                a.m22 = 1,
                a.m14 = 0,
                a.m24 = 0;
            else {
                let c = this.matrix;
                if (0 < (this.I & 8)) {
                    var b = this.scale;
                    let d = b.x;
                    b = b.y;
                    a.m11 = c.m11 * d;
                    a.m12 = c.m12 * b;
                    a.m21 = c.m21 * d;
                    a.m22 = c.m22 * b
                } else
                    a.m11 = c.m11,
                    a.m12 = c.m12,
                    a.m21 = c.m21,
                    a.m22 = c.m22;
                a.m14 = this.translate.x;
                a.m24 = this.translate.y
            }
            this.I &= -65
        }
        dP() {
            let a = this.az;
            var b = this.matrix;
            if (0 < (this.I & 1))
                a.m11 = 1,
                a.m12 = 0,
                a.m21 = 0,
                a.m22 = 1,
                a.m14 = 0,
                a.m24 = 0;
            else {
                if (0 < (this.I & 8))
                    if (12 == (this.I & 12)) {
                        var c = 1 / this.scale.x
                          , d = b.m12 * c;
                        a.m11 = b.m11 * c;
                        a.m12 = b.m21 * c;
                        a.m21 = d;
                        a.m22 = b.m22 * c
                    } else {
                        c = this.scale;
                        var e = c.x
                          , f = c.y;
                        c = b.m11 * e;
                        d = b.m12 * f;
                        e *= b.m21;
                        b = b.m22 * f;
                        f = 1 / (c * b - d * e);
                        a.m11 = b * f;
                        a.m12 = -d * f;
                        a.m21 = -e * f;
                        a.m22 = c * f
                    }
                else
                    0 < (this.I & 64) && this.ul(),
                    b = this.xe,
                    c = 1 / (b.m11 * b.m22 - b.m12 * b.m21),
                    d = b.m11 * c,
                    a.m11 = b.m22 * c,
                    a.m12 = -b.m12 * c,
                    a.m21 = -b.m21 * c,
                    a.m22 = d;
                a.m14 = -(a.m11 * this.translate.x + a.m12 * this.translate.y);
                a.m24 = -(a.m21 * this.translate.x + a.m22 * this.translate.y)
            }
            this.I &= -129
        }
    }
    Uf.g = !0;
    Object.assign(Uf.prototype, {
        j: Uf
    });
    class xf extends eb {
        constructor() {
            super(3)
        }
        set() {}
    }
    xf.g = !0;
    xf.u = eb;
    Object.assign(xf.prototype, {
        j: xf
    });
    class ic {
        constructor(a, b) {
            this.B = this.na = new Ta;
            this.B.fh = this;
            this.na.Kg(new Xb(1));
            null != a ? this.na.jf(new ae(a)) : this.na.jf(new Zd(b))
        }
        aa(a) {
            this.na.vh(5).Ee(a)
        }
        N(a) {
            this.na.qe = a ? 2 : 1
        }
        H() {
            this.na.H();
            this.B = this.na = null
        }
    }
    ic.g = !0;
    ic.sb = [ge];
    Object.assign(ic.prototype, {
        j: ic
    });
    class nb {
        constructor(a) {
            nb.count++;
            this.B = a;
            a.fh = this;
            this.qI = this.ta();
            this.flags = 6;
            this.vf = this.Sc = this.uf = this.ib = 1;
            this.Ul = this.Tl = this.ig = this.hg = this.Ka = this.jg = this.tf = this.Td = 0;
            this.Bc = 1;
            this.bh = !0
        }
        H() {
            this.B = null;
            nb.count--
        }
        remove() {
            let a = this.B.parent;
            null != a && a.removeChild(this.B)
        }
        rk() {
            var a = this.B.parent;
            return null != a && (a = a.fh,
            null != a && 204 == a.qI) ? a : null
        }
        iO() {
            this.B.name = "lock"
        }
        aa(a) {
            a = 0 > a ? 0 : 1 < a ? 1 : a;
            if (this.Bc != a) {
                this.Bc = a;
                let b = this.B;
                if (1 > a) {
                    let c = b.vh(5);
                    null == c ? b.Kg(new Xb(this.Bc)) : c.Ee(a)
                } else
                    b.vq(5);
                b.flags |= 32
            }
        }
        N(a) {
            this.bh != a && (this.bh = a,
            this.B.qe = a ? 0 : 1)
        }
        sa(a) {
            this.ib != a && (this.uf = this.ib = a,
            ab(a, .001) && (this.uf = .001 * (0 <= a ? 1 : -1)),
            1 == a && 1 == this.Sc ? (this.flags = this.flags & -3 | 4,
            a = this.B.mb,
            a.scale.x = 1,
            a.scale.y = 1,
            a.I |= 500) : this.flags &= -7,
            this.Ub())
        }
        xb(a) {
            this.Sc != a && (this.vf = this.Sc = a,
            ab(a, .001) && (this.vf = .001 * (0 <= a ? 1 : -1)),
            1 == a && 1 == this.ib ? (this.flags = this.flags & -3 | 4,
            a = this.B.mb,
            a.scale.x = 1,
            a.scale.y = 1,
            a.I |= 500) : this.flags &= -7,
            this.Ub())
        }
        J(a) {
            if (this.ib != a || this.Sc != a)
                this.ib = this.Sc = a,
                ab(a, .001) ? this.uf = this.vf = .001 * (0 <= a ? 1 : -1) : this.uf = this.vf = a,
                this.flags |= 2,
                1 == a ? (a = this.B.mb,
                a.scale.x = 1,
                a.scale.y = 1,
                a.I |= 500,
                this.flags |= 4) : this.flags &= -5,
                this.Ub()
        }
        setScale(a, b) {
            if (this.ib != a || this.Sc != b) {
                if (1 == a && 1 == b) {
                    this.flags = this.flags & -3 | 4;
                    let c = this.B.mb;
                    c.scale.x = 1;
                    c.scale.y = 1;
                    c.I |= 500
                } else
                    this.flags = a == b ? (this.flags &= -5) | 2 : this.flags & -7;
                this.ib = this.uf = a;
                this.Sc = this.vf = b;
                ab(a, .001) && (this.uf = .001 * (0 <= a ? 1 : -1));
                ab(b, .001) && (this.vf = .001 * (0 <= b ? 1 : -1));
                this.Ub()
            }
        }
        ma(a) {
            if (this.Td != a) {
                this.Td = a;
                let b;
                b = a % 360;
                0 > b && (b += 360);
                this.tf = b * Fa;
                0 == a ? (this.flags &= -2,
                this.B.mb.rB()) : this.flags |= 1;
                this.Ub()
            }
        }
        cb() {
            return this.jg
        }
        m(a) {
            this.jg != a && (this.jg = a,
            this.Ub());
            return a
        }
        s(a) {
            this.Ka != a && (this.Ka = a,
            this.Ub())
        }
        kO(a) {
            if (this.jg != a.x || this.Ka != a.y)
                this.jg = a.x,
                this.Ka = a.y,
                this.Ub()
        }
        WN(a, b, c, d) {
            let e = !1;
            if (this.jg != a || this.Ka != b)
                this.jg = a,
                this.Ka = b,
                e = !0;
            0 != this.Td && (a = this.Td = 0,
            0 > a && (a += 360),
            this.tf = a * Fa,
            this.flags &= -2,
            this.B.mb.rB(),
            e = !0);
            if (this.ib != c || this.Sc != d)
                this.uf = c,
                ab(c, .001) && (this.uf = .001 * (0 <= c ? 1 : -1)),
                this.vf = d,
                ab(d, .001) && (this.vf = .001 * (0 <= d ? 1 : -1)),
                c == d ? 1 == c ? (this.flags = this.flags & -3 | 4,
                c = this.B.mb,
                c.scale.x = 1,
                c.scale.y = 1,
                c.I |= 500) : this.flags = this.flags & -5 | 2 : this.flags &= -7,
                e = !0;
            e && this.Ub()
        }
        jO(a) {
            let b = a.x;
            a = a.y;
            null == b && (b = this.hg);
            null == a && (a = this.ig);
            if (this.hg != b || this.ig != a)
                this.hg = b,
                this.ig = a,
                this.Ub()
        }
        Zf(a, b) {
            null == a && (a = this.hg);
            null == b && (b = this.ig);
            if (this.hg != a || this.ig != b)
                this.hg = a,
                this.ig = b,
                this.Ub()
        }
        fe(a, b) {
            null == a && (a = this.Tl);
            null == b && (b = this.Ul);
            if (this.Tl != a || this.Ul != b)
                this.Tl = a,
                this.Ul = b,
                this.Ub()
        }
        F() {
            this.km();
            this.Xj()
        }
        update(a) {
            this.B.Rg(a);
            this.B.md();
            this.B.vl()
        }
        vv(a) {
            Ea.pf(this.B);
            return this.B.Aa.tb(a, new F(0,0,0,1))
        }
        uv(a) {
            Ea.pf(this.B);
            return this.B.Aa.xf(a, new F(0,0,0,1))
        }
        Yb() {
            return new mh(this)
        }
        Wh(a) {
            null == a ? this.B.vq(0) : this.B.Kg(new Vd(a,!1))
        }
        Hn(a) {
            var b = this.B.vh(2);
            if (null != a) {
                null == b && (b = new dc,
                this.B.Kg(b));
                b = b.transform;
                var c = b.Fb
                  , d = a.Fb;
                c.x = d.x;
                c.y = d.y;
                c.z = d.z;
                c.w = d.w;
                c = b.offset;
                d = a.offset;
                c.x = d.x;
                c.y = d.y;
                c.z = d.z;
                c.w = d.w;
                b.hint = a.hint
            } else
                null != b && this.B.vq(2)
        }
        JB(a) {
            let b = this.B.vh(1);
            null != a ? (null == b && (b = new wc,
            this.B.Kg(b)),
            b.TN(a)) : null != b && this.B.vq(1)
        }
        Ub() {
            let a = this.B.mb
              , b = this.jg
              , c = this.Ka
              , d = this.hg
              , e = this.ig
              , f = this.Tl
              , g = this.Ul
              , h = this.uf;
            var m = this.vf
              , n = this.flags;
            if (0 < (n & 1)) {
                let p = Math.sin(this.tf)
                  , v = Math.cos(this.tf);
                var q = a.matrix;
                q.m11 = v;
                q.m12 = -p;
                q.m21 = p;
                q.m22 = v;
                a.I = a.I & -4 | 504;
                0 < (n & 4) ? (a.translate.x = -(f * v) + g * p + f + b - d,
                a.translate.y = -(f * p) - g * v + g + c - e) : 0 < (n & 2) ? (m = h * f,
                n = h * g,
                a.scale.x = a.scale.y = h,
                a.I = a.I & -2 | 500,
                a.translate.x = -(m * v) + n * p + f + b - d,
                a.translate.y = -(m * p) - n * v + g + c - e) : (n = h * f,
                q = m * g,
                a.scale.x = h,
                a.scale.y = m,
                a.I = a.I & -6 | 496,
                a.translate.x = -(n * v) + q * p + f + b - d,
                a.translate.y = -(n * p) - q * v + g + c - e)
            } else
                0 < (n & 4) ? (a.translate.x = b - d,
                a.translate.y = c - e) : 0 < (n & 2) ? (a.scale.x = a.scale.y = h,
                a.I = a.I & -2 | 500,
                a.translate.x = -(h * f) + f + b - d,
                a.translate.y = -(h * g) + g + c - e) : (a.scale.x = h,
                a.scale.y = m,
                a.I = a.I & -6 | 496,
                a.translate.x = -(h * f) + f + b - d,
                a.translate.y = -(m * g) + g + c - e);
            a.I = a.I & -2 | 496
        }
        ta() {
            return 104
        }
    }
    nb.g = !0;
    nb.sb = [id, ge];
    Object.assign(nb.prototype, {
        j: nb
    });
    class A extends nb {
        constructor(a, b, c) {
            super(new zc(null != a ? a.node : null));
            this.ke = new X(0,0,0,0);
            this.Pe = this.So = null;
            this.Y = new F(0,0,0,1);
            null != b && this.kf(b, c);
            nb.count++
        }
        H() {
            null != this.B && (this.B.H(),
            this.Y = this.Pe = this.So = this.ke = null,
            super.H())
        }
        la() {
            if (0 == (this.flags & 1))
                return this.Y.x * Math.abs(this.ib);
            var a = this.Y.x * Math.abs(this.ib) / 2;
            let b = this.Y.y * Math.abs(this.Sc) / 2, c = -Math.sin(this.tf), d = Math.cos(this.tf), e;
            0 < d ? (e = -(d * a),
            a *= d) : (e = d * a,
            a = -(d * a));
            0 < c ? (e -= c * b,
            a += c * b) : (e += c * b,
            a -= c * b);
            return a - e
        }
        dv(a) {
            this.sa(a / this.Y.x)
        }
        ua() {
            if (0 == (this.flags & 1))
                return this.Y.y * Math.abs(this.Sc);
            var a = this.Y.x * Math.abs(this.ib) / 2;
            let b = this.Y.y * Math.abs(this.Sc) / 2, c = Math.sin(this.tf), d = Math.cos(this.tf), e;
            0 < c ? (e = -(c * a),
            a *= c) : (e = c * a,
            a = -(c * a));
            0 < d ? (e -= d * b,
            a += d * b) : (e += d * b,
            a -= d * b);
            return a - e
        }
        cv(a) {
            this.xb(a / this.Y.y)
        }
        km() {
            this.Zf(this.Y.x / 2, this.Y.y / 2)
        }
        Xj() {
            var a = this.B;
            205 == a.effect.type && null != a.effect.Iu ? (a = this.B.size,
            this.fe(a.x / 2, a.y / 2)) : this.fe(this.Y.x / 2, this.Y.y / 2)
        }
        Zf(a, b) {
            null != a && 0 <= a && 1 >= a && (a *= this.Y.x);
            null != b && 0 <= b && 1 >= b && (b *= this.Y.y);
            super.Zf(a, b)
        }
        fe(a, b) {
            null != a && 0 <= a && 1 >= a && (a *= this.Y.x);
            null != b && 0 <= b && 1 >= b && (b *= this.Y.y);
            super.fe(a, b)
        }
        kf(a, b) {
            if (this.So != a) {
                this.So = a;
                this.Pe = null;
                var c = this.B;
                c.tn = O(this, this.wA);
                c.jf(new $d(a));
                this.wA();
                this.Ub()
            }
            null != b && this.In(b)
        }
        wA() {
            var a = this.So;
            let b = this.Y;
            b.x = a.size.x * a.Be;
            b.y = a.size.y * a.Be;
            this.B.ob(this.Y.x, this.Y.y);
            a = this.Pe;
            null != a && (this.Pe = null,
            this.In(a))
        }
        bc(a) {
            if (this.Pe != a) {
                this.Pe = a;
                var b = this.B
                  , c = b.effect
                  , d = c.Ou(a);
                c = c.qb.Be;
                a = this.ke;
                var e = this.Y;
                e.x = d.cc.x * c;
                e.y = d.cc.y * c;
                if (d.Xn) {
                    e = d.tr;
                    d = d.sd;
                    let f = e.x * c;
                    e = e.y * c;
                    a.o = f;
                    a.C = e;
                    a.A = f + d.w;
                    a.D = e + d.G;
                    b.ob(d.w * c, d.G * c)
                } else
                    b.ob(this.Y.x, this.Y.y),
                    a.o = 0,
                    a.C = 0,
                    a.A = 0,
                    a.D = 0;
                this.Ub()
            }
        }
        In(a) {
            if (this.Pe != a) {
                this.Pe = a;
                var b = this.B
                  , c = b.effect
                  , d = c.Ou(a);
                c = c.qb.Be;
                a = this.ke;
                var e = this.Y;
                e.x = d.cc.x * c;
                e.y = d.cc.y * c;
                if (d.Xn) {
                    e = d.tr;
                    d = d.sd;
                    let f = e.x * c;
                    e = e.y * c;
                    a.o = f;
                    a.C = e;
                    a.A = f + d.w;
                    a.D = e + d.G;
                    b.ob(d.w * c, d.G * c)
                } else
                    b.ob(this.Y.x, this.Y.y),
                    a.o = 0,
                    a.C = 0,
                    a.A = 0,
                    a.D = 0;
                this.Ub()
            }
        }
        ka() {
            return new fb(this)
        }
        setColor(a, b, c) {
            let d = this.Y;
            d.x = b;
            d.y = c;
            b = this.B;
            b.ob(this.Y.x, this.Y.y);
            b.zc();
            this.B.jf(new Yd(a));
            return this
        }
        Jb(a, b) {
            if (!this.bh)
                return !1;
            Ea.pf(this.B);
            this.B.Sd();
            return this.B.Jb(a, b)
        }
        Df(a, b) {
            null == b && (b = !0);
            let c = new X(qa,qa,ra,ra);
            if (0 == this.Y.x)
                return c;
            if (a == this)
                return c.o = 0,
                c.C = 0,
                c.A = this.Y.x,
                c.D = this.Y.y,
                c;
            var d = this.ke.o
              , e = this.ke.C;
            let f = this.B;
            var g = f.size;
            let h = g.x;
            g = g.y;
            var m = this.ke;
            if (m = 0 < m.A - m.o) {
                var n = this.ke
                  , q = n.A - n.o;
                n.o = 0;
                n.A = q;
                n = this.ke;
                q = n.D - n.C;
                n.C = 0;
                n.D = q;
                f.ob(this.Y.x, this.Y.y);
                this.Ub();
                this.B.md(!1, !1)
            }
            b && (Ea.pf(this.B),
            null == a || Ea.Ft(this.B.parent, a.B) || Ea.pf(a.B));
            this.B.kk(null == a ? this.B.Ry() : a.B, c);
            m && (a = this.ke,
            b = a.A - a.o,
            a.o = d,
            a.A = d + b,
            d = this.ke,
            a = d.D - d.C,
            d.C = e,
            d.D = e + a,
            e = f.size,
            e.x = h,
            e.y = g,
            f.zc(),
            this.Ub(),
            this.B.md(!1, !1));
            return c
        }
        vv(a) {
            let b = this.ke;
            var c = b.o;
            let d = b.C;
            var e = 0 < b.A - b.o;
            if (e) {
                var f = b.A - b.o;
                b.o = 0;
                b.A = f;
                f = b.D - b.C;
                b.C = 0;
                b.D = f;
                this.Ub();
                this.B.md(!1, !1)
            }
            a = super.vv(a);
            e && (e = b.A - b.o,
            b.o = c,
            b.A = c + e,
            c = b.D - b.C,
            b.C = d,
            b.D = d + c,
            this.Ub(),
            this.B.md(!1, !1));
            return a
        }
        uv(a) {
            let b = this.ke;
            var c = b.o;
            let d = b.C;
            var e = 0 < b.A - b.o;
            if (e) {
                var f = b.A - b.o;
                b.o = 0;
                b.A = f;
                f = b.D - b.C;
                b.C = 0;
                b.D = f;
                this.Ub();
                this.B.md(!1, !1)
            }
            a = super.uv(a);
            e && (e = b.A - b.o,
            b.o = c,
            b.A = c + e,
            c = b.D - b.C,
            b.C = d,
            b.D = d + c,
            this.Ub(),
            this.B.md(!1, !1));
            return a
        }
        Jq() {
            null != this.rk() ? this.rk().Jq(this) : null != this.B.parent && this.B.parent.Su(this.B)
        }
        Ub() {
            let a = this.B.mb
              , b = this.jg
              , c = this.Ka;
            var d = this.ke;
            let e = d.o;
            d = d.C;
            let f = this.hg
              , g = this.ig
              , h = this.Tl - e
              , m = this.Ul - d
              , n = this.uf;
            var q = this.vf
              , p = this.flags;
            if (0 < (p & 1)) {
                let u = Math.sin(this.tf)
                  , y = Math.cos(this.tf);
                var v = a.matrix;
                let B = a.matrix;
                B.m11 = y;
                B.m12 = -u;
                B.m13 = v.m13;
                B.m21 = u;
                B.m22 = y;
                B.m23 = v.m23;
                B.m31 = v.m31;
                B.m32 = v.m32;
                B.m33 = v.m33;
                a.I = a.I & -4 | 248;
                0 < (p & 4) ? (a.scale.x = 1,
                a.scale.y = 1,
                a.I |= 500,
                a.translate.x = -(h * y) + m * u + h + b - f + e,
                a.translate.y = -(h * u) - m * y + m + c - g + d) : 0 < (p & 2) ? (q = n * h,
                p = n * m,
                a.scale.x = a.scale.y = n,
                a.I = a.I & -2 | 500,
                a.translate.x = -(q * y) + p * u + h + b - f + e,
                a.translate.y = -(q * u) - p * y + m + c - g + d) : (p = n * h,
                v = q * m,
                a.scale.x = n,
                a.scale.y = q,
                a.I = a.I & -6 | 496,
                a.translate.x = -(p * y) + v * u + h + b - f + e,
                a.translate.y = -(p * u) - v * y + m + c - g + d)
            } else
                0 < (p & 4) ? (a.scale.x = 1,
                a.scale.y = 1,
                a.I |= 500,
                a.translate.x = b - f + e,
                a.translate.y = c - g + d) : 0 < (p & 2) ? (a.scale.x = a.scale.y = n,
                a.I = a.I & -2 | 500,
                a.translate.x = -(n * h) + h + b - f + e,
                a.translate.y = -(n * m) + m + c - g + d) : (a.scale.x = n,
                a.scale.y = q,
                a.I = a.I & -6 | 496,
                a.translate.x = -(n * h) + h + b - f + e,
                a.translate.y = -(q * m) + m + c - g + d);
            a.I = a.I & -2 | 496
        }
        ta() {
            return 304
        }
    }
    A.g = !0;
    A.u = nb;
    Object.assign(A.prototype, {
        j: A
    });
    class S extends nb {
        constructor(a, b) {
            super(new pb(null != b ? b.node : null,null,512));
            this.node = this.B;
            this.B.name = a
        }
        H() {
            null != this.node && (this.node.H(),
            this.node = null,
            super.H())
        }
        appendChild(a) {
            this.node.R(a.B)
        }
        nk() {
            return this.node.nk()
        }
        Yc(a) {
            return this.node.Yc(a).fh
        }
        Kq(a, b) {
            this.node.Kq(a.B, b)
        }
        np(a) {
            a = this.node.np(a);
            return null != a ? a.fh : null
        }
        Jq(a) {
            null == a ? null != this.rk() && this.node.parent.Su(this.B) : this.node.Su(a.B)
        }
        xN() {
            null != this.rk() && this.node.parent.FN(this.B)
        }
        Jb(a, b) {
            Ea.pf(this.B);
            this.B.md(!1, !0);
            return this.node.Jb(a, b)
        }
        Df(a, b) {
            null == b && (b = !0);
            b && (this.B.md(!1, !1),
            Ea.pf(this.B),
            null == a || Ea.Ft(this.B, a.B) || Ea.pf(a.B),
            b = !1);
            let c = new X(qa,qa,ra,ra)
              , d = this.node.children;
            for (; null != d; ) {
                let e = d.fh;
                null != e && e instanceof nb && c.add(e.Df(a, b));
                d = d.W
            }
            return c
        }
        la() {
            let a = this.Df(this.rk());
            return a.A - a.o
        }
        ua() {
            let a = this.Df(this.rk());
            return a.D - a.C
        }
        Xj() {
            if (0 != this.nk()) {
                var a = this.Df(this);
                this.fe((a.o + a.A) / 2, (a.C + a.D) / 2)
            }
        }
        km() {
            if (0 != this.nk()) {
                var a = this.Df(this);
                this.Zf((a.o + a.A) / 2, (a.C + a.D) / 2)
            }
        }
        ta() {
            return 204
        }
    }
    S.g = !0;
    S.u = nb;
    Object.assign(S.prototype, {
        j: S
    });
    class Va {
        constructor(a) {
            this.T = a;
            this.controllers = Array(6);
            for (a = 0; 6 > a; )
                this.controllers[a++] = null
        }
        va() {
            if (null != this.controllers) {
                for (var a = 0, b = this.controllers; a < b.length; ) {
                    let c = b[a];
                    ++a;
                    null != c && c.H()
                }
                this.T = this.controllers = null
            }
        }
        play(a, b) {
            this.start(a, 0, b)
        }
        loop(a, b) {
            null == b && (b = !1);
            this.start(a, b ? 2 : 1)
        }
        Nc() {
            return null != this.current.La
        }
        stop() {
            let a = 0
              , b = this.controllers;
            for (; a < b.length; ) {
                let c = b[a];
                ++a;
                null != c && c.stop()
            }
        }
        start(a, b, c) {
            let d = 0;
            this.current = null;
            let e = 0;
            for (; 6 > e; ) {
                let f = e++
                  , g = a.nK();
                if (null == g[f])
                    continue;
                let h = this.controllers[f];
                if (null == h) {
                    h = new Zc;
                    let n;
                    switch (f) {
                    case 0:
                        n = O(this, this.XN);
                        break;
                    case 1:
                        n = O(this, this.YN);
                        break;
                    case 2:
                        n = O(this, this.VN);
                        break;
                    case 3:
                        n = O(this, this.QN);
                        break;
                    case 4:
                        n = O(this, this.RN);
                        break;
                    case 5:
                        n = O(this, this.hd)
                    }
                    h.un = n;
                    h.Bz = !0;
                    this.T.B.Bo(h);
                    this.controllers[f] = h
                }
                let m = g[f].ai;
                m > d && (d = m,
                this.current = h);
                h.play(g[f], b)
            }
            null != c && (this.current.dj = function() {
                c(a)
            }
            )
        }
        XN(a, b, c) {
            this.T.sa(this.wk(a, b, c))
        }
        YN(a, b, c) {
            this.T.xb(this.wk(a, b, c))
        }
        VN(a, b, c) {
            this.T.ma(this.wk(a, b, c))
        }
        QN(a, b, c) {
            this.T.m(this.wk(a, b, c))
        }
        RN(a, b, c) {
            this.T.s(this.wk(a, b, c))
        }
        hd(a, b, c) {
            this.T.aa(this.wk(a, b, c))
        }
        wk(a, b, c) {
            c = Ba.Bm(100 * a.uJ)(c);
            a = a.value;
            return a + (b.value - a) * c
        }
    }
    Va.g = !0;
    Object.assign(Va.prototype, {
        j: Va
    });
    class Xf {
        constructor(a, b) {
            this.value = a;
            this.uJ = b
        }
    }
    Xf.g = !0;
    Object.assign(Xf.prototype, {
        j: Xf
    });
    class Ia {
        constructor() {
            this.Vb = null;
            let a = []
              , b = 0;
            for (; 6 > b; )
                ++b,
                a.push(0);
            this.rb = a;
            this.frames = []
        }
        Tq(a, b, c) {
            null == c && (c = 0);
            this.Nj(0, a, b, c)
        }
        Uq(a, b, c) {
            null == c && (c = 0);
            this.Nj(1, a, b, c)
        }
        setScale(a, b, c, d) {
            null == d && (d = 0);
            this.Tq(a, c, d);
            this.Uq(b, c, d)
        }
        GB(a, b) {
            var c;
            null == c && (c = 0);
            this.Tq(a, b, c);
            this.Uq(a, b, c)
        }
        HB(a, b, c) {
            null == c && (c = 0);
            this.Nj(3, a, b, c)
        }
        IB(a, b, c) {
            null == c && (c = 0);
            this.Nj(4, a, b, c)
        }
        Mg(a, b, c, d) {
            null == d && (d = 0);
            this.HB(a, c, d);
            this.IB(b, c, d)
        }
        hd(a, b, c) {
            null == c && (c = 0);
            this.Nj(5, a, b, c)
        }
        vo(a, b, c) {
            var d;
            null == d && (d = 0);
            let e = this.rb[0];
            this.Tq(a, e, d);
            this.rb[0] += c;
            e = this.rb[1];
            this.Uq(b, e, d);
            this.rb[1] += c
        }
        Yl(a, b, c) {
            null == c && (c = 0);
            let d = this.rb[0];
            this.Tq(a, d, c);
            this.rb[0] += b;
            d = this.rb[1];
            this.Uq(a, d, c);
            this.rb[1] += b
        }
        ns(a, b) {
            var c;
            null == c && (c = 0);
            let d = this.rb[3];
            this.HB(0, d, c);
            this.rb[3] += b;
            d = this.rb[4];
            this.IB(a, d, c);
            this.rb[4] += b
        }
        Nj(a, b, c, d) {
            this.frames.push(new Yf(a,c,new Xf(b,d)));
            this.Vb = null
        }
        nK() {
            if (null == this.Vb) {
                this.Vb = [];
                let d = 0;
                for (; 6 > d; ) {
                    let e = d++;
                    var a = this.frames;
                    let f = [];
                    for (var b = 0; b < a.length; ) {
                        var c = a[b];
                        ++b;
                        c.PM == e && f.push(c)
                    }
                    if (0 == f.length)
                        this.Vb[e] = null;
                    else {
                        f.sort(function(g, h) {
                            return 1E5 * g.time - 1E5 * h.time | 0
                        });
                        if (0 < f[0].time) {
                            switch (e) {
                            case 0:
                            case 1:
                            case 5:
                                a = 1;
                                break;
                            default:
                                a = 0
                            }
                            f.unshift(new Yf(e,0,new Xf(a,0)))
                        }
                        a = Array(f.length);
                        b = 0;
                        for (c = f.length; b < c; ) {
                            let g = b++
                              , h = f[g];
                            a[g] = new sc(h.$K,h.time)
                        }
                        this.Vb[e] = new Xc(a,1)
                    }
                }
            }
            return this.Vb
        }
        static parse(a) {
            a = a.replace(RegExp("\\s", "g"), "");
            let b = new Ia
              , c = Object.create(null);
            c.sx = 0;
            c.sy = 1;
            c.r = 2;
            c.x = 3;
            c.y = 4;
            c.a = 5;
            let d = new ka("(s|p|sx|sy|r|x|y|a)([\\-\\d\\.]+)([<>]*)","")
              , e = new ka("([\\d\\.]+)","");
            a = a.split(",");
            let f = 0
              , g = a.length
              , h = -1
              , m = [];
            for (; f < g; ) {
                var n = a[f++];
                let q = !1;
                for (; d.match(n); ) {
                    q = !0;
                    n = d.Gc(1);
                    let p = parseFloat(d.Gc(2))
                      , v = d.Gc(3);
                    switch (n) {
                    case "p":
                        m.push(4);
                        m.push(3);
                        break;
                    case "s":
                        m.push(1);
                        m.push(0);
                        break;
                    default:
                        m.push(c[n])
                    }
                    for (; 0 < m.length; )
                        b.Nj(m.pop(), p, h, "<" == v ? -100 : ">" == v ? 100 : 0);
                    n = d.IL()
                }
                q || (e.match(n),
                h = parseFloat(e.Gc(1)))
            }
            return b
        }
    }
    Ia.g = !0;
    Object.assign(Ia.prototype, {
        j: Ia
    });
    class Yf {
        constructor(a, b, c) {
            this.PM = a;
            this.time = b;
            this.$K = c
        }
    }
    Yf.g = !0;
    Object.assign(Yf.prototype, {
        j: Yf
    });
    class wa extends nb {
        constructor(a, b) {
            a = new zc(null != a ? a.node : null);
            super(a);
            this.effect = new jd(b);
            a.jf(this.effect);
            b = this.effect.size;
            a.ob(b.x, b.y)
        }
        H() {
            null != this.B && (this.B.H(),
            this.qb = this.effect = null,
            super.H())
        }
        kf(a) {
            this.effect.H();
            this.effect = new jd(a);
            a = this.B;
            a.jf(this.effect);
            let b = this.effect.size;
            a.ob(b.x, b.y)
        }
        Yh(a) {
            null == a && (a = !0);
            this.effect.ze && this.effect.shape();
            this.effect.IJ(a)
        }
        shape() {
            this.effect.shape()
        }
        Gb(a, b) {
            this.effect.Gb(a, b);
            this.B.ob(a, b)
        }
        Wa(a) {
            this.effect.Wa(a)
        }
        Rb(a, b) {
            this.effect.Rb(a, b)
        }
        pp() {
            return this.effect.pp()
        }
        wc(a) {
            this.effect.wc(a)
        }
        nt() {
            return this.effect.nt()
        }
        zq() {
            this.effect.zq()
        }
        $u(a) {
            this.effect.$u(a)
        }
        Pq(a) {
            this.effect.Pq(a)
        }
        Lg(a) {
            this.effect.Lg(a)
        }
        Df(a, b) {
            null == b && (b = !0);
            this.shape();
            var c = this.effect.ag.Qa;
            c = new X(c.o,c.C,c.A,c.D);
            if (c.o >= c.A || c.C >= c.D || a == this)
                return c;
            b && (Ea.pf(this.B),
            null == a || Ea.Ft(this.B, a.B) || Ea.pf(a.B));
            return Ea.UO(this.B, null == a ? this.B.Ry() : a.B, c)
        }
        Xj() {
            let a = this.Df(this);
            a.o >= a.A || a.C >= a.D ? this.fe(0, 0) : this.fe((a.o + a.A) / 2, (a.C + a.D) / 2)
        }
        km() {
            let a = this.Df(this);
            a.o >= a.A || a.C >= a.D ? this.Zf(0, 0) : this.Zf((a.o + a.A) / 2, (a.C + a.D) / 2)
        }
        sa() {
            throw 24;
        }
        xb() {
            throw 25;
        }
        ta() {
            return 404
        }
    }
    wa.g = !0;
    wa.u = nb;
    Object.assign(wa.prototype, {
        j: wa
    });
    class mh {
        constructor(a) {
            this.T = a;
            this.channels = 0;
            this.Ws = [];
            this.repeat = 0;
            this.easing = Ba.Kz()
        }
        KC(a, b) {
            this.zj(0, a, .1, void 0, null);
            this.zj(1, b, .1, void 0, null)
        }
        scale(a, b, c, d, e) {
            this.zj(4, a, b, c, d, e);
            return this
        }
        rotation(a, b, c, d, e) {
            this.zj(5, a, b, c, d, e);
            return this
        }
        alpha(a, b, c, d, e) {
            this.zj(6, a, b, c, d, e);
            return this
        }
        AO() {
            let a = this.T.B.controllers;
            for (; null != a; ) {
                let b = a.next;
                203 == a.type && a.stop();
                a = b
            }
            this.channels = 0
        }
        zj(a, b, c, d, e, f) {
            let g;
            switch (a) {
            case 0:
                g = this.T.cb();
                break;
            case 1:
                g = this.T.Ka;
                break;
            case 2:
                g = this.T.ib;
                break;
            case 3:
                g = this.T.Sc;
                break;
            case 4:
                g = this.T.ib;
                break;
            case 5:
                g = this.T.Td;
                break;
            case 6:
                g = this.T.Bc
            }
            let h = this.kt(a);
            h.zj(a, g, b, c, null == d ? Ba.Kz() : d);
            h.Hg = null == e ? 0 : e;
            this.Ws[a] = f;
            this.channels |= 1 << a
        }
        kt(a) {
            let b, c = this.T.B.controllers;
            if (null != c)
                if (0 < (this.channels & 1 << a))
                    for (; null != c; ) {
                        if (203 == c.type && (b = c,
                        b.key == a))
                            return b.Bg = O(this, this.Bg),
                            b.Pf = O(this, this.Pf),
                            b;
                        c = c.next
                    }
                else
                    for (; null != c; ) {
                        if (203 == c.type && c.ck)
                            return b = c,
                            b.Bg = O(this, this.Bg),
                            b.Pf = O(this, this.Pf),
                            b;
                        c = c.next
                    }
            b = new Xd;
            b.Bg = O(this, this.Bg);
            b.Pf = O(this, this.Pf);
            this.T.B.Bo(b);
            return b
        }
        Pf(a, b) {
            let c = this.T;
            switch (a) {
            case 0:
                c.m(b);
                break;
            case 1:
                c.s(b);
                break;
            case 2:
                c.sa(b);
                break;
            case 3:
                c.xb(b);
                break;
            case 4:
                c.J(b);
                break;
            case 5:
                c.ma(b);
                break;
            case 6:
                c.aa(b)
            }
        }
        Bg(a) {
            let b = this.Ws[a];
            null != b && (this.Ws[a] = null,
            b())
        }
    }
    mh.g = !0;
    Object.assign(mh.prototype, {
        j: mh
    });
    class md {
    }
    md.g = !0;
    md.me = !0;
    Object.assign(md.prototype, {
        j: md
    });
    class Gc {
        constructor(a) {
            let b = this;
            this.id = setInterval(function() {
                b.Tf()
            }, a)
        }
        stop() {
            null != this.id && (clearInterval(this.id),
            this.id = null)
        }
        Tf() {}
        static delay(a, b) {
            let c = new Gc(b);
            c.Tf = function() {
                c.stop();
                a()
            }
            ;
            return c
        }
    }
    Gc.g = !0;
    Object.assign(Gc.prototype, {
        j: Gc
    });
    class Qa {
        constructor(a) {
            this.length = a.byteLength;
            this.b = new Uint8Array(a);
            this.b.yI = a;
            a.DK = this;
            a.Gx = this.b
        }
        Xb(a, b, c) {
            if (0 > a || 0 > b || a + b > this.length)
                throw 12;
            null == c && (c = he.Vr);
            let d = ""
              , e = this.b
              , f = a;
            a += b;
            switch (c.bs) {
            case 0:
                for (; f < a; )
                    if (c = e[f++],
                    128 > c) {
                        if (0 == c)
                            break;
                        d += String.fromCodePoint(c)
                    } else
                        224 > c ? (c = (c & 63) << 6 | e[f++] & 127,
                        d += String.fromCodePoint(c)) : 240 > c ? (c = (c & 31) << 12 | (e[f++] & 127) << 6 | e[f++] & 127,
                        d += String.fromCodePoint(c)) : (c = (c & 15) << 18 | (e[f++] & 127) << 12 | (e[f++] & 127) << 6 | e[f++] & 127,
                        d += String.fromCodePoint(c));
                break;
            case 1:
                for (; f < a; )
                    c = e[f++] | e[f++] << 8,
                    d += String.fromCodePoint(c)
            }
            return d
        }
        toString() {
            return this.Xb(0, this.length)
        }
        static lA(a) {
            if (void 0 == he.yw) {
                for (var b = new Uint8Array(a.length << 1), c = 0, d = a.length; c < d; ) {
                    let e = c++
                      , f = a.charCodeAt(e);
                    b[e << 1] = f & 255;
                    b[e << 1 | 1] = f >> 8
                }
                return new Qa(b.buffer)
            }
            b = [];
            for (c = 0; c < a.length; )
                d = a.charCodeAt(c++),
                55296 <= d && 56319 >= d && (d = d - 55232 << 10 | a.charCodeAt(c++) & 1023),
                127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18),
                b.push(128 | d >> 12 & 63)),
                b.push(128 | d >> 6 & 63)),
                b.push(128 | d & 63));
            return new Qa((new Uint8Array(b)).buffer)
        }
        static cj(a) {
            let b = a.DK;
            return null != b ? b : new Qa(a)
        }
    }
    Qa.g = !0;
    Object.assign(Qa.prototype, {
        j: Qa
    });
    var he = mg["haxe.io.Encoding"] = {
        Sw: !0,
        Rw: null,
        Vr: {
            Yw: "UTF8",
            bs: 0,
            Rl: "haxe.io.Encoding",
            toString: ta
        },
        yw: {
            Yw: "RawNative",
            bs: 1,
            Rl: "haxe.io.Encoding",
            toString: ta
        }
    };
    he.Rw = [he.Vr, he.yw];
    class xc {
        static encode(a, b) {
            null == b && (b = !0);
            let c = (new Zf(xc.Uv)).yJ(a).toString();
            if (b)
                switch (a.length % 3) {
                case 1:
                    c += "==";
                    break;
                case 2:
                    c += "="
                }
            return c
        }
        static decode(a, b) {
            null == b && (b = !0);
            if (b)
                for (; 61 == ua.Es(a, a.length - 1); )
                    a = ua.substr(a, 0, -1);
            return (new Zf(xc.Uv)).$I(Qa.lA(a))
        }
    }
    xc.g = !0;
    class Zf {
        constructor(a) {
            let b = a.length
              , c = 1;
            for (; b > 1 << c; )
                ++c;
            if (8 < c || b != 1 << c)
                throw 13;
            this.pi = a;
            this.bA = c
        }
        yJ(a) {
            let b = this.bA
              , c = this.pi
              , d = 8 * a.length / b | 0
              , e = new Qa(new ArrayBuffer(d + (0 == 8 * a.length % b ? 0 : 1)))
              , f = 0
              , g = 0
              , h = (1 << b) - 1
              , m = 0
              , n = 0;
            for (; n < d; ) {
                for (; g < b; )
                    g += 8,
                    f <<= 8,
                    f |= a.b[m++];
                g -= b;
                e.b[n++] = c.b[f >> g & h]
            }
            0 < g && (e.b[n++] = c.b[f << b - g & h]);
            return e
        }
        HK() {
            let a = [];
            for (var b = 0; 256 > b; )
                a[b++] = -1;
            b = 0;
            let c = this.pi.length;
            for (; b < c; ) {
                let d = b++;
                a[this.pi.b[d]] = d
            }
            this.fC = a
        }
        $I(a) {
            let b = this.bA;
            null == this.fC && this.HK();
            let c = this.fC
              , d = a.length * b >> 3
              , e = new Qa(new ArrayBuffer(d))
              , f = 0
              , g = 0
              , h = 0
              , m = 0;
            for (; m < d; ) {
                for (; 8 > g; ) {
                    g += b;
                    f <<= b;
                    let n = c[a.b[h++]];
                    if (-1 == n)
                        throw 14;
                    f |= n
                }
                g -= 8;
                e.b[m++] = f >> g & 255
            }
            return e
        }
    }
    Zf.g = !0;
    Object.assign(Zf.prototype, {
        j: Zf
    });
    class gb {
        constructor() {
            this.G = {}
        }
        get(a) {
            return this.G[a]
        }
        remove(a) {
            if (!this.G.hasOwnProperty(a))
                return !1;
            delete this.G[a];
            return !0
        }
        keys() {
            let a = [];
            for (var b in this.G)
                this.G.hasOwnProperty(b) && a.push(+b);
            return new Dc(a)
        }
        iterator() {
            return {
                pq: this.G,
                Ym: this.keys(),
                fb: function() {
                    return this.Ym.fb()
                },
                next: function() {
                    let a = this.Ym.next();
                    return this.pq[a]
                }
            }
        }
    }
    gb.g = !0;
    gb.sb = [md];
    Object.assign(gb.prototype, {
        j: gb
    });
    class pf {
        constructor() {
            this.G = {
                Ij: {}
            }
        }
        set(a, b) {
            let c = a.Je;
            null == c && (c = a.Je = ja.Er++);
            this.G[c] = b;
            this.G.Ij[c] = a
        }
        get(a) {
            return this.G[a.Je]
        }
        remove(a) {
            a = a.Je;
            if (null == this.G.Ij[a])
                return !1;
            delete this.G[a];
            delete this.G.Ij[a];
            return !0
        }
        keys() {
            let a = [];
            for (var b in this.G.Ij)
                this.G.hasOwnProperty(b) && a.push(this.G.Ij[b]);
            return new Dc(a)
        }
        iterator() {
            return {
                pq: this.G,
                Ym: this.keys(),
                fb: function() {
                    return this.Ym.fb()
                },
                next: function() {
                    let a = this.Ym.next();
                    return this.pq[a.Je]
                }
            }
        }
    }
    pf.g = !0;
    pf.sb = [md];
    Object.assign(pf.prototype, {
        j: pf
    });
    class hd {
        constructor() {
            this.G = Object.create(null)
        }
        get(a) {
            return this.G[a]
        }
        keys() {
            return new nh(this.G)
        }
    }
    hd.g = !0;
    hd.sb = [md];
    Object.assign(hd.prototype, {
        j: hd
    });
    class nh {
        constructor(a) {
            this.G = a;
            this.keys = Object.keys(a);
            this.length = this.keys.length;
            this.current = 0
        }
        fb() {
            return this.current < this.length
        }
        next() {
            return this.keys[this.current++]
        }
    }
    nh.g = !0;
    Object.assign(nh.prototype, {
        j: nh
    });
    class oh {
        constructor() {
            this.size = this.i = 0
        }
        iI(a) {
            this.i == this.size && this.grow(1);
            this.view.setUint8(this.i++, a)
        }
        grow(a) {
            var b = this.i + a;
            for (a = 0 == this.size ? 16 : this.size; a < b; )
                a = 3 * a >> 1;
            b = new ArrayBuffer(a);
            let c = new Uint8Array(b);
            0 < this.size && c.set(this.XO);
            this.size = a;
            this.buffer = b;
            this.XO = c;
            this.view = new DataView(this.buffer)
        }
        Fm() {
            if (0 == this.size)
                return new Qa(new ArrayBuffer(0));
            let a = new Qa(this.buffer);
            a.length = this.i;
            return a
        }
    }
    oh.g = !0;
    Object.assign(oh.prototype, {
        j: oh
    });
    class $f {
        ja() {
            throw 26;
        }
        gl(a, b, c) {
            let d = c
              , e = a.b;
            if (0 > b || 0 > c || b + c > a.length)
                throw 15;
            try {
                for (; 0 < d; )
                    e[b] = this.ja(),
                    ++b,
                    --d
            } catch (f) {
                if (!(haxe.Exception.qP(f).tP()instanceof haxe.rP.pP))
                    throw f;
            }
            return c - d
        }
        VM(a, b) {
            for (var c = 0; 0 < b; ) {
                let d = this.gl(a, c, b);
                if (0 == d)
                    throw 16;
                c += d;
                b -= d
            }
        }
        UA() {
            let a = new oh, b;
            for (; ; ) {
                b = this.ja();
                if (0 == b)
                    break;
                a.iI(b)
            }
            a.Fm()
        }
        UM() {
            let a = this.Rf()
              , b = this.Rf();
            return this.Co ? nd.iz(b, a) : nd.iz(a, b)
        }
        Qb() {
            var a = this.ja();
            let b = this.ja();
            a = this.Co ? b | a << 8 : a | b << 8;
            return 0 != (a & 32768) ? a - 65536 : a
        }
        gd() {
            let a = this.ja()
              , b = this.ja();
            return this.Co ? b | a << 8 : a | b << 8
        }
        TA() {
            let a = this.ja()
              , b = this.ja()
              , c = this.ja();
            return this.Co ? c | b << 8 | a << 16 : a | b << 8 | c << 16
        }
        Rf() {
            let a = this.ja()
              , b = this.ja()
              , c = this.ja()
              , d = this.ja();
            return this.Co ? d | c << 8 | b << 16 | a << 24 : a | b << 8 | c << 16 | d << 24
        }
        nq(a, b) {
            let c = new Qa(new ArrayBuffer(a));
            this.VM(c, a);
            return c.Xb(0, a, b)
        }
    }
    $f.g = !0;
    Object.assign($f.prototype, {
        j: $f
    });
    class fc extends $f {
        constructor(a, b, c) {
            super();
            null == b && (b = 0);
            null == c && (c = a.length - b);
            if (0 > b || 0 > c || b + c > a.length)
                throw 17;
            this.b = a.b;
            this.i = b;
            this.nC = this.Si = c
        }
        ja() {
            if (0 == this.Si)
                throw 18;
            this.Si--;
            return this.b[this.i++]
        }
        gl(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length)
                throw 19;
            if (0 == this.Si && 0 < c)
                throw 20;
            this.Si < c && (c = this.Si);
            let d = this.b;
            a = a.b;
            let e = 0
              , f = c;
            for (; e < f; ) {
                let g = e++;
                a[b + g] = d[this.i + g]
            }
            this.i += c;
            this.Si -= c;
            return c
        }
    }
    fc.g = !0;
    fc.u = $f;
    Object.assign(fc.prototype, {
        j: fc
    });
    class nd {
        static iz(a, b) {
            nd.ut.setInt32(0, a, !0);
            nd.ut.setInt32(4, b, !0);
            return nd.ut.getFloat64(0, !0)
        }
    }
    nd.g = !0;
    class Dc {
        constructor(a) {
            this.current = 0;
            this.ox = a
        }
        fb() {
            return this.current < this.ox.length
        }
        next() {
            return this.ox[this.current++]
        }
    }
    Dc.g = !0;
    Object.assign(Dc.prototype, {
        j: Dc
    });
    class ph {
        constructor(a) {
            this.id = a;
            this.state = 0;
            this.Yj = !1
        }
        cg() {
            return 1 == this.state
        }
        ei() {
            return 3 == this.state
        }
        Kp() {
            return 1 != this.state ? 2 == this.state : !0
        }
        pj(a) {
            if (this.state != a)
                switch (this.state = a,
                a) {
                case 1:
                    this.Yj = !0;
                    break;
                case 3:
                    this.Yj = !0
                }
        }
        update() {
            switch (this.state) {
            case 1:
                this.Yj ? this.Yj = !1 : this.state = 2;
                break;
            case 3:
                this.Yj ? this.Yj = !1 : this.state = 0
            }
        }
    }
    ph.g = !0;
    Object.assign(ph.prototype, {
        j: ph
    });
    class ag {
        constructor() {
            this.state = null;
            this.enabled = !0
        }
    }
    ag.g = !0;
    Object.assign(ag.prototype, {
        j: ag
    });
    class bg {
        constructor() {
            this.enabled = !0;
            this.buttons = []
        }
        update(a) {
            let b = 0
              , c = this.buttons;
            for (; b < c.length; )
                c[b++].update(a)
        }
        cg(a) {
            if (!this.enabled)
                return !1;
            a = this.Em(a);
            return null == a ? !1 : a.cg()
        }
        ei(a) {
            if (!this.enabled)
                return !1;
            a = this.Em(a);
            return null == a ? !1 : a.ei()
        }
        reset() {
            this.buttons = []
        }
        jq(a) {
            let b = this.Em(a);
            null == b && (b = new ph(a),
            this.buttons.push(b));
            b.pj(1)
        }
        release(a) {
            a = this.Em(a);
            null != a && a.pj(3)
        }
        Em(a) {
            let b = 0
              , c = this.buttons.length;
            for (; b < c; ) {
                let d = this.buttons[b];
                if (d.id == a)
                    return d;
                ++b
            }
            return null
        }
    }
    bg.g = !0;
    Object.assign(bg.prototype, {
        j: bg
    });
    class re extends ag {
        constructor(a) {
            super();
            this.target = null != a ? a : window;
            this.Vz = 0;
            this.wB(1);
            this.state = new Vb;
            this.Id = new Ud;
            this.fA = 4;
            this.gu = 0;
            this.touches = {};
            window.document.body.style.setProperty("touch-action", "none");
            this.ks()
        }
        wB(a) {
            this.Vz = Math.min(a, 5)
        }
        tK(a) {
            return 4 > a ? 0 : a - 4
        }
        JM(a) {
            if (this.enabled)
                if ("mouse" == a.pointerType) {
                    var b = a.button + 1;
                    3 < b || (this.bg(a, b),
                    this.state.jq(b),
                    this.state.jq(0),
                    a = this.state.position[b],
                    b = this.state.position[0],
                    b.x = a.x,
                    b.y = a.y)
                } else
                    this.gu != this.Vz && (b = this.fA++,
                    this.touches["" + a.pointerId] = b,
                    this.bg(a, b),
                    this.gu++,
                    this.state.jq(b),
                    4 == b && (this.state.jq(0),
                    a = this.state.position[b],
                    b = this.state.position[0],
                    b.x = a.x,
                    b.y = a.y))
        }
        EA(a) {
            a.stopPropagation();
            if (this.enabled)
                if ("mouse" == a.pointerType)
                    a = a.button + 1,
                    3 < a || (this.state.release(a),
                    this.state.release(0));
                else {
                    var b = this.touches[a.pointerId];
                    null != b && (delete this.touches[a.pointerId],
                    this.bg(a, b),
                    this.state.release(b),
                    0 == --this.gu && (this.fA = 4,
                    this.state.release(0),
                    a = this.state.position[b],
                    b = this.state.position[0],
                    b.x = a.x,
                    b.y = a.y))
                }
        }
        IM(a) {
            this.EA(a)
        }
        KM(a) {
            if (this.enabled)
                if ("mouse" == a.pointerType)
                    this.bg(a, 0),
                    this.state.aj[0][1] = !0;
                else {
                    var b = this.touches[a.pointerId];
                    null != b && (this.bg(a, b),
                    this.state.aj[b][1] = !0,
                    4 == b && (this.state.aj[0][1] = !0,
                    a = this.state.position[b],
                    b = this.state.position[0],
                    b.x = a.x,
                    b.y = a.y))
                }
        }
        bg(a, b) {
            let c = a.clientX;
            a = a.clientY;
            if (this.target instanceof Element) {
                var d = this.target.getBoundingClientRect();
                c -= d.left;
                a -= d.top
            }
            d = window.devicePixelRatio;
            b = this.state.position[b];
            b.x = c * d | 0;
            b.y = a * d | 0
        }
        addListener(a, b, c) {
            null == c && (c = !1);
            this.target.addEventListener(a, b, c);
            "pointerup" == a && window.addEventListener(a, b, c)
        }
        ks() {
            this.addListener("pointerdown", O(this, this.JM));
            this.addListener("pointerup", O(this, this.EA));
            this.addListener("pointercancel", O(this, this.IM));
            this.addListener("pointermove", O(this, this.KM))
        }
    }
    re.g = !0;
    re.u = ag;
    Object.assign(re.prototype, {
        j: re
    });
    class Vb extends bg {
        constructor() {
            super();
            for (var a = [], b = 0; 9 > b; )
                ++b,
                a.push(new Sa(Vb.ro,Vb.ro));
            this.position = a;
            a = [];
            for (b = 0; 9 > b; )
                ++b,
                a.push([!1, !1]);
            this.aj = a;
            a = [];
            for (b = 0; 9 > b; )
                ++b,
                a.push(0);
            this.tq = a
        }
        update(a) {
            super.update(a);
            for (a = 0; 9 > a; ) {
                var b = a++;
                this.aj[b][0] = this.aj[b][1];
                this.aj[b][1] = !1;
                var c = this.tq[b];
                switch (c) {
                case 1:
                    this.tq[b] = 0;
                    c = this.position[b];
                    let d = Vb.ro;
                    c.x = d;
                    c.y = d;
                    4 == b && (b = this.position[0],
                    c = Vb.ro,
                    b.x = c,
                    b.y = c);
                    break;
                case 2:
                    this.tq[b] = c - 1
                }
            }
        }
        lP(a) {
            return this.aj[a][0]
        }
        cg(a) {
            return super.cg(a)
        }
        ei(a) {
            return super.ei(a)
        }
        Kp(a) {
            let b = this.Em(a);
            return null == b ? !1 : this.cg(a) ? !0 : b.Kp()
        }
        release(a) {
            super.release(a);
            4 <= a && (this.tq[a] = 2)
        }
    }
    Vb.g = !0;
    Vb.u = bg;
    Object.assign(Vb.prototype, {
        j: Vb
    });
    class Ua {
        static UJ(a) {
            if (null == a)
                return null;
            if (a instanceof Array)
                return Array;
            let b = a.j;
            if (null != b)
                return b;
            a = Ua.Uw(a);
            return null != a ? Ua.XH(a) : null
        }
        static Sl(a, b) {
            if (null == a)
                return "null";
            if (5 <= b.length)
                return "<...>";
            var c = typeof a;
            "function" == c && (a.g || a.Sw) && (c = "object");
            switch (c) {
            case "function":
                return "<function>";
            case "object":
                if (a.Rl) {
                    var d = mg[a.Rl].Rw[a.bs];
                    c = d.Yw;
                    if (d.WH) {
                        b += "\t";
                        var e = []
                          , f = 0;
                        for (d = d.WH; f < d.length; ) {
                            let g = d[f];
                            f += 1;
                            e.push(Ua.Sl(a[g], b))
                        }
                        return c + "(" + e.join(",") + ")"
                    }
                    return c
                }
                if (a instanceof Array) {
                    c = "[";
                    b += "\t";
                    e = 0;
                    for (f = a.length; e < f; )
                        d = e++,
                        c += (0 < d ? "," : "") + Ua.Sl(a[d], b);
                    return c + "]"
                }
                try {
                    e = a.toString
                } catch (g) {
                    return "???"
                }
                if (null != e && e != Object.toString && "function" == typeof e && (c = a.toString(),
                "[object Object]" != c))
                    return c;
                c = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                f = null;
                for (f in a)
                    e && !a.hasOwnProperty(f) || "prototype" == f || "__class__" == f || "__super__" == f || "__interfaces__" == f || "__properties__" == f || (2 != c.length && (c += ", \n"),
                    c += b + f + " : " + Ua.Sl(a[f], b));
                b = b.substring(1);
                return c + ("\n" + b + "}");
            case "string":
                return a;
            default:
                return String(a)
            }
        }
        static Tw(a, b) {
            for (; ; ) {
                if (null == a)
                    return !1;
                if (a == b)
                    return !0;
                let c = a.sb;
                if (null != c && (null == a.u || a.u.sb != c)) {
                    let d = 0
                      , e = c.length;
                    for (; d < e; ) {
                        let f = c[d++];
                        if (f == b || Ua.Tw(f, b))
                            return !0
                    }
                }
                a = a.u
            }
        }
        static Yr(a, b) {
            if (null == b)
                return !1;
            switch (b) {
            case Array:
                return a instanceof Array;
            case cj:
                return "boolean" == typeof a;
            case dj:
                return null != a;
            case ej:
                return "number" == typeof a;
            case fj:
                return "number" == typeof a ? (a | 0) === a : !1;
            case String:
                return "string" == typeof a;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (Ua.UH(a, b))
                            return !0
                    } else {
                        if ("object" == typeof b && Ua.VH(b) && a instanceof b)
                            return !0
                    }
                else
                    return !1;
                return b == gj && null != a.g || b == hj && null != a.Sw ? !0 : null != a.Rl ? mg[a.Rl] == b : !1
            }
        }
        static UH(a, b) {
            return a instanceof b ? !0 : b.me ? Ua.Tw(Ua.UJ(a), b) : !1
        }
        static Uw(a) {
            a = Ua.YH.call(a).slice(8, -1);
            return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
        }
        static VH(a) {
            return null != Ua.Uw(a)
        }
        static XH(a) {
            return ja[a]
        }
    }
    Ua.g = !0;
    class Ah {
        static My() {
            try {
                let a = window.localStorage;
                a.getItem("");
                if (0 == a.length) {
                    let b = "_hx_" + Math.random();
                    a.setItem(b, b);
                    a.removeItem(b)
                }
                return a
            } catch (a) {
                return null
            }
        }
    }
    Ah.g = !0;
    class X {
        constructor(a, b, c, d) {
            this.o = a;
            this.C = b;
            this.A = c;
            this.D = d
        }
        add(a) {
            a.o < this.o && (this.o = a.o);
            a.A > this.A && (this.A = a.A);
            a.C < this.C && (this.C = a.C);
            a.D > this.D && (this.D = a.D)
        }
        ms(a) {
            let b = a.x;
            b < this.o && (this.o = b);
            b > this.A && (this.A = b);
            a = a.y;
            a < this.C && (this.C = a);
            a > this.D && (this.D = a)
        }
        scale(a, b) {
            if (b) {
                b = (this.A - this.o) / 2;
                let c = this.o + b;
                this.o = c - b * a;
                this.A = c + b * a;
                b = (this.D - this.C) / 2;
                c = this.C + b;
                this.C = c - b * a;
                this.D = c + b * a
            } else
                this.o *= a,
                this.C *= a,
                this.A *= a,
                this.D *= a
        }
        rh(a) {
            var b = this.A - this.o;
            let c = this.D - this.C;
            var d = b / a;
            let e = c / 1;
            if (d <= e)
                return b = this.C + (c - d) / 2,
                new X(this.o,b,this.A,b + d);
            d = a * e;
            b = this.o + (b - d) / 2;
            return new X(b,this.C,b + d,this.D)
        }
    }
    X.g = !0;
    Object.assign(X.prototype, {
        j: X
    });
    class lh {
        constructor(a, b, c, d) {
            this.o = a;
            this.C = b;
            this.A = c;
            this.D = d
        }
    }
    lh.g = !0;
    Object.assign(lh.prototype, {
        j: lh
    });
    class bj {
        static clone(a) {
            return new F(a.x,a.y,a.z,a.w)
        }
    }
    class Ba {
        static Kz() {
            return function(a) {
                return a
            }
        }
        static Bm(a) {
            let b = (-100 > a ? -100 : 100 < a ? 100 : a) / 100;
            return function(c) {
                return 0 == b ? c : 0 > b ? c * (c * -b + 1 + b) : c * ((2 - c) * b + (1 - b))
            }
        }
        static IA() {
            return function(a) {
                return Math.pow(a, 2)
            }
        }
        static MM() {
            return function(a) {
                return 1 > (a *= 2) ? .5 * Math.pow(a, 2) : 1 - .5 * Math.abs(Math.pow(2 - a, 2))
            }
        }
        static Qf() {
            return function(a) {
                return 1 - Math.pow(1 - a, 2)
            }
        }
        static rI() {
            var a = .1;
            null == a && (a = .1);
            let b = 17.0158 * a;
            return function(c) {
                --c;
                return c * c * ((b + 1) * c + b) + 1
            }
        }
        static iy(a) {
            var b = .5;
            null == b && (b = .3);
            null == a && (a = 0);
            let c, d;
            1 > a ? (d = 1,
            c = .25 * b) : (d = a,
            c = b / ui * Math.asin(1 / d));
            return function(e) {
                return d * Math.pow(2, -10 * e) * Math.sin((e - c) * ui / b) + 1
            }
        }
    }
    Ba.g = !0;
    class Sa {
        constructor(a, b) {
            this.x = a;
            this.y = b
        }
    }
    Sa.g = !0;
    Object.assign(Sa.prototype, {
        j: Sa
    });
    class ti {
        static IO(a, b, c, d) {
            return 0 <= a && a <= c && 0 <= b ? b <= d : !1
        }
    }
    ti.g = !0;
    class Mg {
        static ov(a, b, c, d, e) {
            a -= c;
            b -= d;
            return a * a + b * b < e * e
        }
    }
    Mg.g = !0;
    class Xh {
        static test(a, b) {
            return a.o >= b.A ? !1 : a.A <= b.o ? !1 : a.C >= b.D ? !1 : a.D <= b.C ? !1 : !0
        }
    }
    Xh.g = !0;
    class cg {
        constructor(a) {
            this.ZN(a)
        }
        ZN(a) {
            this.seed = a
        }
        fl() {
            return .5 > this.qh()
        }
        Gg(a, b) {
            a -= .4999;
            return Math.round(a + (b + .4999 - a) * this.qh())
        }
        ym(a, b) {
            return a + (b - a) * this.qh()
        }
        jy(a) {
            return this.ym(-a, a)
        }
        fc() {
            return this.qh() - this.qh()
        }
    }
    cg.g = !0;
    Object.assign(cg.prototype, {
        j: cg
    });
    class dg extends cg {
        constructor() {
            super(0)
        }
        qh() {
            return Math.random()
        }
    }
    dg.g = !0;
    dg.u = cg;
    Object.assign(dg.prototype, {
        j: dg
    });
    class Me extends Mc {
        constructor(a, b) {
            super(a, b)
        }
        za() {
            super.za();
            r.Gk = za.instance.createTexture(l.Jr, 8);
            this.$ = new S;
            this.node.R(this.$.B);
            let a = new A(null,r.Gk.children[0],"bubble")
              , b = Math.min(this.ea.la(), this.ea.ua()) / a.Y.x * .25;
            this.$.J(b);
            this.$.appendChild(a);
            a.F();
            this.text = new wa(this.$,r.Gk.children[1]);
            this.text.Wa("100%");
            this.text.Gb(a.Y.x, a.Y.y);
            this.text.Rb(0, 0);
            this.text.Yh(!1);
            this.text.Wa("0%");
            this.text.m(-a.Y.x / 2);
            this.text.s(-a.Y.y / 2);
            this.text.wc(.7 * this.text.pp());
            this.Vi = this.dd = 0;
            this.ni = Math.random() * jc * 2;
            this.oi = Math.random() * jc * 2;
            this.sj = .1 * Math.random() - .05;
            this.tj = .1 * Math.random() - .05
        }
        update(a) {
            super.update(a);
            this.time += a;
            this.$.m(this.ea.la() / 2);
            this.$.s(this.ea.ua() / 2);
            var b = 50 * Math.cos(this.ni);
            a = 50 * Math.sin(this.oi);
            this.ni += this.sj;
            this.oi += this.tj;
            let c = this.$;
            c.m(c.cb() + b);
            b = this.$;
            b.s(b.Ka + a);
            switch (this.Vi) {
            case 0:
                this.dd < this.sp() && (this.dd += 5,
                100 < this.dd && (this.dd = 100));
                this.text.Wa("" + this.dd + "%");
                this.Hk.rt() && 100 == this.dd && (this.Vi++,
                this.time = 0);
                break;
            case 1:
                .5 > this.time ? (this.sj *= .95,
                this.tj *= .95) : (this.Vi++,
                super.Vu())
            }
        }
        Vu() {}
        Ob() {
            return .25
        }
        Fa() {
            return "LoadingOverlay"
        }
    }
    Me.g = !0;
    Me.u = Mc;
    Object.assign(Me.prototype, {
        j: Me
    });
    class wd extends ia {
        constructor() {
            super();
            this.state = 0
        }
        Xp() {
            super.Xp();
            let a = this.parent;
            this.Yd = new A(a.xa,r.Hb,k.OH);
            this.Yd.F();
            this.Yd.m(378);
            this.Yd.s(364);
            this.Yd.aa(0);
            this.$e = new A(a.xa,r.Hb,k.PH);
            this.$e.m(368);
            this.$e.s(354);
            this.$e.aa(0)
        }
        update(a) {
            super.update(a);
            this.Yd.J(Ma(Math.sin(10 * this.time), -1, 1, 1, 1.1));
            a = this.parent;
            switch (this.state) {
            case 0:
                if (1 > this.time)
                    break;
                this.time = 0;
                this.state = 1;
                break;
            case 1:
                a = this.wb(.5);
                this.Yd.aa(a);
                this.$e.aa(a);
                this.$e.m(428 + -60 * Ba.Qf()(a));
                this.$e.s(414 + -60 * Ba.Qf()(a));
                1 == a && (this.time = 0,
                this.state = 2);
                break;
            case 2:
                var b = this.wb(.25);
                this.$e.J(Ma(b, 0, 1, 1, .9));
                1 == b && (this.time = 0,
                this.state = 3,
                a.O.bc(a.O.Pe == k.Hw ? k.Gw : k.Hw),
                a.Pz());
                break;
            case 3:
                b = this.wb(.5);
                this.$e.J(Ma(Ba.Qf()(b), 0, 1, .9, 1));
                1 == b && (this.time = 0,
                this.state = a.O.Pe == k.Gw ? 5 : 4);
                break;
            case 4:
                1 < this.time && (this.time = 0,
                this.state = 2);
                break;
            case 5:
                a = this.wb(.5),
                this.Yd.aa(1 - a),
                this.$e.aa(1 - a),
                this.$e.m(368 + 60 * Ba.IA()(a)),
                this.$e.s(354 + 60 * Ba.IA()(a)),
                1 == a && this.va()
            }
        }
    }
    wd.g = !0;
    wd.u = ia;
    Object.assign(wd.prototype, {
        j: wd
    });
    class yd extends ea {
        constructor() {
            super()
        }
        za() {
            super.za();
            this.Bd = new S;
            var a = new A(this.Bd,r.Hb,k.Lw)
              , b = new A(this.Bd,r.Hb,k.NH)
              , c = new A(this.Bd,r.Hb,k.JH);
            b.cv(500);
            b.s(a.Y.y - 1);
            c.s(b.Ka + 500 - 1);
            this.Bd.F();
            a = Ca.create(null, k.KH, k.LH, k.MH);
            this.buttons.push(a);
            a.m(680);
            a.s(-20);
            this.Bd.appendChild(a.l);
            this.pa(a);
            b = new wa(this.Bd,r.qc);
            b.Wa(Yb.get("CANT_UNLOCK_TEXT1"));
            b.m(20);
            b.s(60);
            b.Rb(0);
            b.Gb(760, 100);
            b.wc(80);
            a = new wa(this.Bd,r.qc);
            a.Wa(Ha.ie(this.caller.Pb.starCount));
            a.m(20);
            a.s(b.Ka + 90);
            a.Rb(0);
            a.Gb(760, 100);
            a.wc(80);
            b = new A(this.Bd,r.Hb,k.Nw);
            c = a.Df();
            b.J(.8);
            b.m(c.A);
            b.s((c.C + c.D) / 2 - b.ua() / 2);
            b = new wa(this.Bd,r.qc);
            b.Wa(Yb.get("CANT_UNLOCK_TEXT2"));
            b.m(20);
            b.s(a.Ka + 90);
            b.Rb(0);
            b.Gb(760, 100);
            b.wc(80);
            a = new wa(this.Bd,r.Cm);
            a.Wa(Yb.get("CANT_UNLOCK_TEXT3"));
            a.m(20);
            a.s(b.Ka + 90 + 40);
            a.Rb(0);
            a.Lg(!0);
            a.Gb(760, 140);
            a.wc(60);
            this.node.R(this.Bd.B)
        }
        Ob() {
            return .5
        }
        Oc(a) {
            a = Ba.Qf()(1 - a);
            let b = this.node.mb;
            b.scale.x = b.scale.y = .001 + a;
            b.I = b.I & -2 | 500
        }
        Nd(a) {
            a = Ba.iy(.5)(a);
            let b = this.node.mb;
            b.scale.x = b.scale.y = .001 + a;
            b.I = b.I & -2 | 500
        }
        Hd() {
            this.bb(1) && this.Dg()
        }
        Va() {
            super.Va();
            let a = this.ea.qt().rh(1);
            var b = this.node.mb;
            b.translate.x = (a.o + a.A) / 2;
            b.translate.y = (a.C + a.D) / 2;
            b.I = b.I & -2 | 496;
            if (1 < this.ea.ue())
                this.Bd.J(1),
                b = this.Bd.ua(),
                this.Bd.J((a.D - a.C) / b * .75);
            else {
                b = 1.1;
                let c = 1 / this.ea.ue();
                1 > c && (b = 1.1 * c);
                this.Bd.J((a.A - a.o) / (r.Hb.Nb.Xe(k.Lw).cc.x * b))
            }
        }
        Pi() {
            return !1
        }
        Fa() {
            return "MissingStarsPopup"
        }
    }
    yd.g = !0;
    yd.u = ea;
    Object.assign(yd.prototype, {
        j: yd
    });
    class Tc extends lc {
        constructor() {
            super()
        }
        Pi() {
            return !1
        }
        getData() {
            let a = l.data.G[l.Qw];
            return null != a ? a : l.data.G[l.Pw]
        }
        sc() {
            return [1 < this.X.window.Dm() ? l.Pw : l.Qw]
        }
        qA() {
            this.Dg()
        }
        Fa() {
            return "OutroVideoScene"
        }
    }
    Tc.g = !0;
    Tc.u = lc;
    Object.assign(Tc.prototype, {
        j: Tc
    });
    class Qe extends ia {
        constructor() {
            super();
            this.l = new S;
            this.Qc = [];
            this.eo = [];
            this.Qj = [];
            let a = 0;
            for (; 10 > a; ) {
                let c = a++;
                var b = W.ym(-jc / 2 - jc / 4, -jc / 2 + jc / 4);
                this.eo[c] = new F(10 * Math.cos(b),10 * Math.sin(b),0,1);
                b = this.Qc[c] = new A(this.l,r.Cb,[k.RF, k.SF, k.TF][W.Gg(0, 2)]);
                b.F();
                b.J(W.ym(.75, 2));
                b.ma(360 * Math.random());
                this.Qj[c] = W.jy(10)
            }
        }
        va() {
            super.va();
            this.l.H();
            this.Qc = null
        }
        update(a) {
            super.update(a);
            let b = a = 0;
            for (; 10 > b; ) {
                let c = b++;
                this.eo[c].y += .25;
                let d = this.Qc[c];
                d.m(d.cb() + this.eo[c].x);
                d.s(d.Ka + this.eo[c].y);
                d.ma(d.Td + this.Qj[c]);
                3 < this.time && (d.aa(.95 * d.Bc),
                .05 > d.Bc && ++a)
            }
            10 == a && this.va()
        }
    }
    Qe.g = !0;
    Qe.u = ia;
    Object.assign(Qe.prototype, {
        j: Qe
    });
    class Ac extends ia {
        constructor() {
            super();
            this.cc = null;
            this.ee = 0;
            this.l = new S
        }
        Pu() {}
        setActive(a) {
            this.active = a
        }
        select() {
            this.selected = !0
        }
        cb() {
            return this.l.cb()
        }
        m(a) {
            this.l.m(a);
            return a
        }
        s(a) {
            this.l.s(a)
        }
        Vq(a) {
            this.l.s(a)
        }
        KB(a) {
            this.l.m(a - this.l.la())
        }
    }
    Ac.g = !0;
    Ac.u = ia;
    Object.assign(Ac.prototype, {
        j: Ac
    });
    class Qc extends Ac {
        constructor(a) {
            super();
            this.level = a;
            this.l = new S;
            this.icon = new A(this.l,r.Hb,k.rH);
            this.CK = new Pe(this.l.node,new X(20,10,170,160))
        }
        PN(a) {
            this.icon.bc(k.Ur);
            let b = new wa(this.l,r.qc);
            b.Gb(this.icon.la(), this.icon.ua());
            b.Wa(Ha.ie(this.level));
            b.Rb(0, 0);
            b.wc(.5 * this.icon.ua());
            b.s(b.Ka - 20);
            this.Sb = new A(this.l,r.Hb,Qc.yO[a])
        }
        Jb(a) {
            return this.icon.Pe == k.Ur ? this.CK.Jb(a) : !1
        }
    }
    Qc.g = !0;
    Qc.u = Ac;
    Object.assign(Qc.prototype, {
        j: Qc
    });
    class qh {
        constructor(a, b, c) {
            this.xi = a;
            this.Ig = b;
            this.type = c
        }
    }
    qh.g = !0;
    Object.assign(qh.prototype, {
        j: qh
    });
    class eg {
        constructor() {
            this.um = !1;
            this.$f(1);
            this.yq()
        }
        $f(a) {
            this.weight = a;
            this.Gp = 1 / a;
            this.vb = new t(0,Xa.ew * a)
        }
        yq() {
            this.$a = t.$b();
            this.a = t.$b();
            this.i = t.$b();
            this.ed = t.$b();
            this.nr = t.$b()
        }
        zo(a, b) {
            a.YK() || this.i.add(t.pd(a, b / 1))
        }
    }
    eg.g = !0;
    Object.assign(eg.prototype, {
        j: eg
    });
    class Cb extends eg {
        constructor() {
            super();
            this.qa = new t(od,od);
            this.Cg = new t(-1,-1);
            this.yf = [];
            this.nr = t.$b();
            this.yq()
        }
        yq() {
            super.yq();
            this.qa = new t(od,od);
            this.qa.x = od;
            this.qa.y = od;
            this.$A()
        }
        $A() {
            this.yf = []
        }
        Mj(a, b, c) {
            this.yf.push(new qh(a,b,c))
        }
        aN(a) {
            this.yf.splice(a, 1)
        }
        AK(a) {
            let b = this.yf
              , c = b.length
              , d = 0;
            for (; d < c; )
                if (b[d++].xi == a)
                    return !0;
            return !1
        }
        Lo(a, b) {
            let c = this.yf
              , d = c.length
              , e = 0;
            for (; e < d; ) {
                let f = c[e++];
                if (f.xi == a) {
                    f.Ig = b;
                    break
                }
            }
        }
        Qx(a, b, c) {
            let d = this.yf
              , e = d.length
              , f = 0;
            for (; f < e; ) {
                let g = d[f++];
                if (g.xi == a) {
                    g.xi = b;
                    g.Ig = c;
                    break
                }
            }
        }
        Ig(a) {
            let b = this.yf
              , c = b.length
              , d = 0;
            for (; d < c; ) {
                let e = b[d++];
                if (e.xi == a)
                    return e.Ig
            }
            return -1
        }
        update(a) {
            if (0 != a) {
                var b = this.nr
                  , c = Xa.current;
                this.um ? (b.x = 0,
                b.y = 0) : 0 != c.y || 0 != c.x ? (b.x = c.x,
                b.y = c.y) : (b.x = this.vb.x * this.Gp,
                b.y = this.vb.y * this.Gp);
                b = a / 1 * a;
                this.a.x = this.nr.x * b;
                this.a.y = this.nr.y * b;
                this.qa.x == od && (this.qa.x = this.i.x,
                this.qa.y = this.i.y);
                this.ed.x = this.i.x - this.qa.x + this.a.x;
                this.ed.y = this.i.y - this.qa.y + this.a.y;
                0 < a && (a = 1 / a,
                this.$a.x = this.ed.x * a,
                this.$a.y = this.ed.y * a);
                this.qa.x = this.i.x;
                this.qa.y = this.i.y;
                this.i.x += this.ed.x;
                this.i.y += this.ed.y
            }
        }
        Fq() {
            var a = this.Cg;
            let b = this.i
              , c = this.Gp;
            let d, e = 0, f = 0;
            if (-1 != a.x)
                b.x = a.x,
                b.y = a.y;
            else {
                a = this.yf;
                for (var g = a.length, h = 0; h < g; ) {
                    var m = a[h++]
                      , n = m.xi;
                    let u = n.i;
                    var q = u.x - b.x;
                    d = u.y - b.y;
                    0 == q && 0 == d && (d = q = 1);
                    var p = Math.sqrt(q * q + d * d)
                      , v = m.Ig;
                    m = m.type;
                    if (1 == m) {
                        if (p <= v)
                            continue
                    } else if (2 == m && p >= v)
                        continue;
                    m = -1 == n.Cg.x;
                    n = n.Gp;
                    p = (p - v) / ((1 < p ? p : 1) * (c + n));
                    m && (e = q,
                    f = d);
                    v = c * p;
                    q *= v;
                    d *= v;
                    b.x += q;
                    b.y += d;
                    m && (q = n * p,
                    u.x -= e * q,
                    u.y -= f * q)
                }
            }
        }
    }
    Cb.g = !0;
    Cb.u = eg;
    Object.assign(Cb.prototype, {
        j: Cb
    });
    class Xa {
        static toggle() {
            Xa.current.y = -Xa.current.y
        }
        static VK() {
            return Xa.current.y == Xa.ew ? 0 == Xa.current.x : !1
        }
        static reset() {
            Xa.current.x = 0;
            Xa.current.y = Xa.Ir
        }
    }
    Xa.g = !0;
    class Fc {
        constructor() {
            this.Xz = this.Uz = 0;
            this.Ik = [];
            this.fd = new Ye;
            this.version = null;
            this.kA = this.du = 0;
            this.sn = 1
        }
        load(a) {
            if (this.zz(a) || this.Ht(a) || this.Ni(a))
                return !1;
            this.du++;
            a = new fg(a,this);
            a.priority = this.Xz--;
            if (this.Ik.length == this.sn)
                return this.fd.enqueue(a),
                !0;
            this.Ik.push(a);
            a.load();
            return !0
        }
        stop() {
            this.fd.clear()
        }
        OM(a) {
            if (this.zz(a) && !this.Ht(a) && !this.Ni(a)) {
                var b = Ga.find(this.fd, function(c) {
                    return -1 < c.Bj.url.indexOf(a)
                });
                null != b && this.fd.gN(b, ++this.Uz)
            }
        }
        Im(a) {
            if (0 == this.du)
                return 1;
            if (null == a)
                return this.kA / this.du;
            let b = this;
            return Ga.count(a, function(c) {
                return b.Ht(c)
            }) / a.length
        }
        zz(a) {
            function b(c) {
                return -1 < c.Bj.url.indexOf(a)
            }
            return null == this.fd ? !1 : 0 < Ga.count(this.fd, b) + Ga.count(this.Ik, b)
        }
        gM(a) {
            ua.remove(this.Ik, a);
            this.kA++;
            0 == this.fd.Z && 0 == this.Ik.length && (this.Xz = this.Uz = 0);
            let b = l.Ff(a.Bj.url);
            0 <= b && l.setData(b, a.Bj.data);
            0 < this.fd.Z && (a = this.fd.dJ(),
            this.Ik.push(a),
            a.load())
        }
        fM() {
            this.stop()
        }
        Ht(a) {
            return l.eb(l.Ff(a))
        }
        Ni(a) {
            return l.Ni(l.Ff(a))
        }
    }
    Fc.g = !0;
    Object.assign(Fc.prototype, {
        j: Fc
    });
    class fg {
        constructor(a, b) {
            this.Bj = new rh(a,b.version);
            this.fd = b
        }
        load() {
            let a = this;
            this.Bj.load(function() {
                Fc.Hx += l.TJ(a.Bj.url);
                a.fd.gM(a);
                a.H()
            }, function() {
                a.fd.fM();
                a.H()
            })
        }
        H() {
            this.fd = null;
            this.Bj.H()
        }
    }
    fg.g = !0;
    fg.sb = [Xe];
    Object.assign(fg.prototype, {
        j: fg
    });
    class pd {
        static encode(a) {
            var b = a.length;
            let c = [1732584193, -271733879, -1732584194, 271733878]
              , d = 64
              , e = a.length;
            for (var f = []; d <= e; ) {
                var g = a.substring(d - 64, d);
                let h = 0;
                for (; 64 > h; )
                    f[h >> 2] = g.charCodeAt(h) + (g.charCodeAt(h + 1) << 8) + (g.charCodeAt(h + 2) << 16) + (g.charCodeAt(h + 3) << 24),
                    h += 4;
                pd.$t(c, f);
                d += 64
            }
            a = a.substring(d - 64);
            f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            d = 0;
            for (e = a.length; d < e; )
                f[d >> 2] |= a.charCodeAt(d) << (d % 4 << 3),
                ++d;
            f[d >> 2] |= 128 << (d % 4 << 3);
            if (55 < d)
                for (pd.$t(c, f),
                d = 0; 16 > d; )
                    f[d] = 0,
                    ++d;
            f[14] = 8 * b;
            pd.$t(c, f);
            b = pd.HD;
            f = "";
            d = 0;
            for (e = c.length; d < e; )
                for (a = 0,
                g = c[d++]; 4 > a; )
                    f += b[g >> (a << 3) + 4 & 15] + b[g >> (a << 3) & 15],
                    ++a;
            return f
        }
        static $t(a, b) {
            let c = a[0]
              , d = a[1]
              , e = a[2]
              , f = a[3]
              , g = (c + (d & e | ~d & f) & -1) + (b[0] + -680876936 & -1) & -1;
            c = (g << 7 | g >>> 25) + d & -1;
            g = (f + (c & d | ~c & e) & -1) + (b[1] + -389564586 & -1) & -1;
            f = (g << 12 | g >>> 20) + c & -1;
            g = (e + (f & c | ~f & d) & -1) + (b[2] + 606105819 & -1) & -1;
            e = (g << 17 | g >>> 15) + f & -1;
            g = (d + (e & f | ~e & c) & -1) + (b[3] + -1044525330 & -1) & -1;
            d = (g << 22 | g >>> 10) + e & -1;
            g = (c + (d & e | ~d & f) & -1) + (b[4] + -176418897 & -1) & -1;
            c = (g << 7 | g >>> 25) + d & -1;
            g = (f + (c & d | ~c & e) & -1) + (b[5] + 1200080426 & -1) & -1;
            f = (g << 12 | g >>> 20) + c & -1;
            g = (e + (f & c | ~f & d) & -1) + (b[6] + -1473231341 & -1) & -1;
            e = (g << 17 | g >>> 15) + f & -1;
            g = (d + (e & f | ~e & c) & -1) + (b[7] + -45705983 & -1) & -1;
            d = (g << 22 | g >>> 10) + e & -1;
            g = (c + (d & e | ~d & f) & -1) + (b[8] + 1770035416 & -1) & -1;
            c = (g << 7 | g >>> 25) + d & -1;
            g = (f + (c & d | ~c & e) & -1) + (b[9] + -1958414417 & -1) & -1;
            f = (g << 12 | g >>> 20) + c & -1;
            g = (e + (f & c | ~f & d) & -1) + (b[10] + -42063 & -1) & -1;
            e = (g << 17 | g >>> 15) + f & -1;
            g = (d + (e & f | ~e & c) & -1) + (b[11] + -1990404162 & -1) & -1;
            d = (g << 22 | g >>> 10) + e & -1;
            g = (c + (d & e | ~d & f) & -1) + (b[12] + 1804603682 & -1) & -1;
            c = (g << 7 | g >>> 25) + d & -1;
            g = (f + (c & d | ~c & e) & -1) + (b[13] + -40341101 & -1) & -1;
            f = (g << 12 | g >>> 20) + c & -1;
            g = (e + (f & c | ~f & d) & -1) + (b[14] + -1502002290 & -1) & -1;
            e = (g << 17 | g >>> 15) + f & -1;
            g = (d + (e & f | ~e & c) & -1) + (b[15] + 1236535329 & -1) & -1;
            d = (g << 22 | g >>> 10) + e & -1;
            g = (c + (d & f | e & ~f) & -1) + (b[1] + -165796510 & -1) & -1;
            c = (g << 5 | g >>> 27) + d & -1;
            g = (f + (c & e | d & ~e) & -1) + (b[6] + -1069501632 & -1) & -1;
            f = (g << 9 | g >>> 23) + c & -1;
            g = (e + (f & d | c & ~d) & -1) + (b[11] + 643717713 & -1) & -1;
            e = (g << 14 | g >>> 18) + f & -1;
            g = (d + (e & c | f & ~c) & -1) + (b[0] + -373897302 & -1) & -1;
            d = (g << 20 | g >>> 12) + e & -1;
            g = (c + (d & f | e & ~f) & -1) + (b[5] + -701558691 & -1) & -1;
            c = (g << 5 | g >>> 27) + d & -1;
            g = (f + (c & e | d & ~e) & -1) + (b[10] + 38016083 & -1) & -1;
            f = (g << 9 | g >>> 23) + c & -1;
            g = (e + (f & d | c & ~d) & -1) + (b[15] + -660478335 & -1) & -1;
            e = (g << 14 | g >>> 18) + f & -1;
            g = (d + (e & c | f & ~c) & -1) + (b[4] + -405537848 & -1) & -1;
            d = (g << 20 | g >>> 12) + e & -1;
            g = (c + (d & f | e & ~f) & -1) + (b[9] + 568446438 & -1) & -1;
            c = (g << 5 | g >>> 27) + d & -1;
            g = (f + (c & e | d & ~e) & -1) + (b[14] + -1019803690 & -1) & -1;
            f = (g << 9 | g >>> 23) + c & -1;
            g = (e + (f & d | c & ~d) & -1) + (b[3] + -187363961 & -1) & -1;
            e = (g << 14 | g >>> 18) + f & -1;
            g = (d + (e & c | f & ~c) & -1) + (b[8] + 1163531501 & -1) & -1;
            d = (g << 20 | g >>> 12) + e & -1;
            g = (c + (d & f | e & ~f) & -1) + (b[13] + -1444681467 & -1) & -1;
            c = (g << 5 | g >>> 27) + d & -1;
            g = (f + (c & e | d & ~e) & -1) + (b[2] + -51403784 & -1) & -1;
            f = (g << 9 | g >>> 23) + c & -1;
            g = (e + (f & d | c & ~d) & -1) + (b[7] + 1735328473 & -1) & -1;
            e = (g << 14 | g >>> 18) + f & -1;
            g = (d + (e & c | f & ~c) & -1) + (b[12] + -1926607734 & -1) & -1;
            d = (g << 20 | g >>> 12) + e & -1;
            g = (c + (d ^ e ^ f) & -1) + (b[5] + -378558 & -1) & -1;
            c = (g << 4 | g >>> 28) + d & -1;
            g = (f + (c ^ d ^ e) & -1) + (b[8] + -2022574463 & -1) & -1;
            f = (g << 11 | g >>> 21) + c & -1;
            g = (e + (f ^ c ^ d) & -1) + (b[11] + 1839030562 & -1) & -1;
            e = (g << 16 | g >>> 16) + f & -1;
            g = (d + (e ^ f ^ c) & -1) + (b[14] + -35309556 & -1) & -1;
            d = (g << 23 | g >>> 9) + e & -1;
            g = (c + (d ^ e ^ f) & -1) + (b[1] + -1530992060 & -1) & -1;
            c = (g << 4 | g >>> 28) + d & -1;
            g = (f + (c ^ d ^ e) & -1) + (b[4] + 1272893353 & -1) & -1;
            f = (g << 11 | g >>> 21) + c & -1;
            g = (e + (f ^ c ^ d) & -1) + (b[7] + -155497632 & -1) & -1;
            e = (g << 16 | g >>> 16) + f & -1;
            g = (d + (e ^ f ^ c) & -1) + (b[10] + -1094730640 & -1) & -1;
            d = (g << 23 | g >>> 9) + e & -1;
            g = (c + (d ^ e ^ f) & -1) + (b[13] + 681279174 & -1) & -1;
            c = (g << 4 | g >>> 28) + d & -1;
            g = (f + (c ^ d ^ e) & -1) + (b[0] + -358537222 & -1) & -1;
            f = (g << 11 | g >>> 21) + c & -1;
            g = (e + (f ^ c ^ d) & -1) + (b[3] + -722521979 & -1) & -1;
            e = (g << 16 | g >>> 16) + f & -1;
            g = (d + (e ^ f ^ c) & -1) + (b[6] + 76029189 & -1) & -1;
            d = (g << 23 | g >>> 9) + e & -1;
            g = (c + (d ^ e ^ f) & -1) + (b[9] + -640364487 & -1) & -1;
            c = (g << 4 | g >>> 28) + d & -1;
            g = (f + (c ^ d ^ e) & -1) + (b[12] + -421815835 & -1) & -1;
            f = (g << 11 | g >>> 21) + c & -1;
            g = (e + (f ^ c ^ d) & -1) + (b[15] + 530742520 & -1) & -1;
            e = (g << 16 | g >>> 16) + f & -1;
            g = (d + (e ^ f ^ c) & -1) + (b[2] + -995338651 & -1) & -1;
            d = (g << 23 | g >>> 9) + e & -1;
            g = (c + (e ^ (d | ~f)) & -1) + (b[0] + -198630844 & -1) & -1;
            c = (g << 6 | g >>> 26) + d & -1;
            g = (f + (d ^ (c | ~e)) & -1) + (b[7] + 1126891415 & -1) & -1;
            f = (g << 10 | g >>> 22) + c & -1;
            g = (e + (c ^ (f | ~d)) & -1) + (b[14] + -1416354905 & -1) & -1;
            e = (g << 15 | g >>> 17) + f & -1;
            g = (d + (f ^ (e | ~c)) & -1) + (b[5] + -57434055 & -1) & -1;
            d = (g << 21 | g >>> 11) + e & -1;
            g = (c + (e ^ (d | ~f)) & -1) + (b[12] + 1700485571 & -1) & -1;
            c = (g << 6 | g >>> 26) + d & -1;
            g = (f + (d ^ (c | ~e)) & -1) + (b[3] + -1894986606 & -1) & -1;
            f = (g << 10 | g >>> 22) + c & -1;
            g = (e + (c ^ (f | ~d)) & -1) + (b[10] + -1051523 & -1) & -1;
            e = (g << 15 | g >>> 17) + f & -1;
            g = (d + (f ^ (e | ~c)) & -1) + (b[1] + -2054922799 & -1) & -1;
            d = (g << 21 | g >>> 11) + e & -1;
            g = (c + (e ^ (d | ~f)) & -1) + (b[8] + 1873313359 & -1) & -1;
            c = (g << 6 | g >>> 26) + d & -1;
            g = (f + (d ^ (c | ~e)) & -1) + (b[15] + -30611744 & -1) & -1;
            f = (g << 10 | g >>> 22) + c & -1;
            g = (e + (c ^ (f | ~d)) & -1) + (b[6] + -1560198380 & -1) & -1;
            e = (g << 15 | g >>> 17) + f & -1;
            g = (d + (f ^ (e | ~c)) & -1) + (b[13] + 1309151649 & -1) & -1;
            d = (g << 21 | g >>> 11) + e & -1;
            g = (c + (e ^ (d | ~f)) & -1) + (b[4] + -145523070 & -1) & -1;
            c = (g << 6 | g >>> 26) + d & -1;
            g = (f + (d ^ (c | ~e)) & -1) + (b[11] + -1120210379 & -1) & -1;
            f = (g << 10 | g >>> 22) + c & -1;
            g = (e + (c ^ (f | ~d)) & -1) + (b[2] + 718787259 & -1) & -1;
            e = (g << 15 | g >>> 17) + f & -1;
            g = (d + (f ^ (e | ~c)) & -1) + (b[9] + -343485551 & -1) & -1;
            a[0] = c + a[0] & -1;
            a[1] = ((g << 21 | g >>> 11) + e & -1) + a[1] & -1;
            a[2] = e + a[2] & -1;
            a[3] = f + a[3] & -1
        }
    }
    pd.g = !0;
    class sd {
        constructor(a) {
            this.Eo = [];
            this.data = null;
            var b = new Uint8Array(a)
              , c = b.byteLength;
            if (69 == b[c - 1]) {
                var d = b[c - 6] | b[c - 5] << 8 | b[c - 4] << 16
                  , e = a.slice(c - (d + 6), c - 6);
                if (0 < (b[c - 3] & 1)) {
                    a = Qa.cj(a.slice(0, a.byteLength - (d + 6)));
                    b = pd.encode(xc.encode(a));
                    a = [];
                    for (c = 0; 32 > c; )
                        a.push(ua.Es(b, c++));
                    b = new Uint8Array(e);
                    c = 0;
                    for (d = e.byteLength; c < d; ) {
                        var f = c++;
                        b[f] ^= a[f & 31]
                    }
                }
                this.data = Qa.cj(e);
                e = new fc(this.data);
                a = e.ja();
                for (b = 0; b < a; ) {
                    ++b;
                    d = e.ja();
                    f = e.ja();
                    c = null;
                    let g = e.gd();
                    0 < g && (c = e.nq(g, he.Vr));
                    0 == d ? (d = e.gd(),
                    f = new Qa(new ArrayBuffer(d)),
                    e.gl(f, 0, d),
                    this.Eo.push(new gg(c,f,null))) : this.Eo.push(new gg(c,this.Eo[f].data,f))
                }
            }
        }
    }
    sd.g = !0;
    Object.assign(sd.prototype, {
        j: sd
    });
    class gg {
        constructor(a, b, c) {
            this.name = a;
            this.data = b;
            this.pq = c
        }
    }
    gg.g = !0;
    Object.assign(gg.prototype, {
        j: gg
    });
    class l {
        static Sa() {
            l.data = new gb;
            l.Mk = new gb;
            l.Kx = [];
            l.Aq = 1;
            l.language = "en";
            l.Vm = "png";
            l.Sj = null;
            l.Gu = new hd;
            l.Os = new gb;
            l.decoding = new gb;
            l.Ho = null;
            l.rg = new gb;
            l.rg.G[0] = ["wav", "ogg", "aac"];
            l.rg.G[2] = ["png", "jpg", "avif"];
            l.rg.G[3] = ["txt", "json", "tmj", "tsj"];
            l.rg.G[1] = ["dat", "tps", "fnt", "zst"];
            l.rg.G[4] = ["mp4"]
        }
        static UN(a) {
            l.Aq = a
        }
        static Jy() {
            return l.language
        }
        static Ru(a) {
            var b;
            null == b && (b = !1);
            null == a && (a = "en");
            a = a.toLowerCase();
            var c = l.wy();
            0 < c.length && !Ga.gk(c, function(d) {
                return d == l.language
            }) && (a = "en");
            if (b && a != l.language)
                for (b = 0,
                c = l.de; b < c.length; ) {
                    let d = c[b];
                    ++b;
                    (new ka("{language}","")).match(d) && (l.Ff(d),
                    l.uq(l.Ff(d)))
                }
            l.language = a
        }
        static HN() {
            l.Vm = "avif"
        }
        static $J(a) {
            var b = new RegExp("^(" + l.io + "/)","");
            a = l.Hi(a).replace(b, "");
            b = new ka("-(\\d)x","");
            return b.match(a) ? Ha.parseInt(b.Gc(1)) : 1
        }
        static cK(a) {
            return l.LL[a]
        }
        static vy() {
            return l.Sj
        }
        static zN(a) {
            l.Sj = a
        }
        static getType(a) {
            let b = 0;
            for (; 5 > b; ) {
                let c = b++;
                if ((new ka("\\.(" + l.rg.G[c].join("|") + ")","mi")).match(a))
                    return c
            }
            throw 21;
        }
        static Hi(a) {
            let b = l.de[a];
            if (null == b)
                return null;
            let c = new ka("{(?:language|image|audio|resolution)}","");
            c.match(b) && (c = new ka("{language}",""),
            c.match(b) && null != l.language && (b = b.replace(c.r, "-" + l.language)),
            c = new ka("{image}","g"),
            c.match(b) && null != l.Vm && (b = b.replace(c.r, l.Vm)),
            c = new ka("{audio}","g"),
            c.match(b) && null != l.Sj && (b = b.replace(c.r, l.Sj)),
            c = new ka("{resolution}","g"),
            c.match(b) && null != l.Aq && (b = 1 == l.Aq ? b.replace(c.r, "") : b.replace(c.r, "-" + Math.min(l.cK(a), l.Aq) + "x")));
            return "" + l.io + "/" + b
        }
        static kK() {
            var a;
            null == a && (a = l.YJ());
            let b = []
              , c = 0;
            for (; c < a.length; ) {
                let d = l.Hi(a[c++]);
                null != d && b.push(d)
            }
            return b
        }
        static YJ() {
            let a = []
              , b = 0
              , c = l.MAX;
            for (; b < c; )
                a.push(b++);
            return a
        }
        static iterator() {
            return new sh
        }
        static Qy() {
            let a = l.NM
              , b = []
              , c = 0;
            for (; c < a.length; ) {
                let d = a[c];
                ++c;
                l.hC(d) && b.push(d)
            }
            return b
        }
        static ZJ() {
            let a = l.EK
              , b = []
              , c = 0;
            for (; c < a.length; ) {
                let d = a[c];
                ++c;
                l.hC(d) && b.push(d)
            }
            return b
        }
        static mk(a, b, c) {
            null == c && (c = !1);
            let d = RegExp("\\.(\\w+)$", "");
            a = l.Hi(a).replace(d, "." + b);
            c && (a = a.replace(RegExp("\\.p\\.", ""), "."));
            return l.Ff(a)
        }
        static Ff(a) {
            function b(d, e) {
                a = a.replace(new RegExp(d,""), e)
            }
            if (Object.prototype.hasOwnProperty.call(l.Gu.G, a))
                return Ha.parseInt(l.Gu.G[a]);
            b("^(" + l.io + "/)(.*)", "$2");
            var c = l.de.indexOf(a);
            if (-1 != c)
                return c;
            c = l.wy();
            0 < c.length && b("-(" + c.join("|") + ")", "{language}");
            l.sM.includes(a) ? b("(\\.\\w+)$", "{resolution}$1") : b("[\\/-][124]x", "{resolution}");
            c = l.de.indexOf(a);
            if (-1 != c)
                return c;
            (new ka("(" + l.rg.G[2].join("|") + ")","g")).match(a) ? (c = l.SJ(),
            0 < c.length && (b("(.*?)\\.(" + c.join("|") + ")$", "$1.{image}"),
            b("((" + c.join("|") + ")\\/)", "{image}/"))) : (new ka("(" + l.rg.G[0].join("|") + ")","g")).match(a) && (c = l.mp(),
            0 < c.length && (b("(.*?)\\.(" + c.join("|") + ")$", "$1.{audio}"),
            b("((" + c.join("|") + ")\\/)", "{audio}/")));
            return l.de.indexOf(a)
        }
        static Xb(a) {
            a = l.data.G[a];
            if ("string" == typeof a)
                return a;
            if (a instanceof ArrayBuffer) {
                if ("TextDecoder"in window)
                    return a = new DataView(a),
                    (new TextDecoder("utf-8")).decode(a);
                a = Qa.cj(a);
                return a.Xb(0, a.length)
            }
            return null
        }
        static Fm(a) {
            return Qa.cj(l.data.G[a])
        }
        static TJ(a) {
            if (null == l.Ho) {
                l.Ho = new hd;
                let b = 0
                  , c = l.Gx;
                for (; b < c.length; ) {
                    let d = c[b++].split(":");
                    l.Ho.G[l.io + "/" + d[0]] = Ha.parseInt(d[1])
                }
            }
            return l.Ho.G[a]
        }
        static hC(a) {
            return l.Ct(a) ? null == l.Sj ? !1 : Ga.gk(l.mp(), function(b) {
                return b == l.Sj
            }) : !0
        }
        static setData(a, b) {
            if (l.Os.G.hasOwnProperty(a) && 0 == l.decoding.G[a])
                l.decoding.G[a] = 1,
                l.Os.G[a](a, b, function(c) {
                    l.decoding.G[a] = 2;
                    l.setData(a, c)
                });
            else {
                l.data.G[a] = b;
                b = l.Kx;
                let c = b.length;
                for (; -1 < --c; )
                    if (b[c].id == a) {
                        let d = b[c];
                        b[c] = b[b.length - 1];
                        b.pop();
                        d.se()
                    }
            }
        }
        static eb(a) {
            return null != l.data.G[a]
        }
        static uq(a) {
            l.data.G[a] = null;
            l.data.remove(a);
            l.decoding.G[a] = 0
        }
        static KN(a, b) {
            l.Mk.G[a] = b
        }
        static dK(a) {
            return l.Mk.G[a]
        }
        static Ct(a) {
            return 1E3 < a ? (a = l.Gu.G[null == a ? "null" : "" + a],
            (new ka("(ogg|aac|mp3|wav)$","")).match(a)) : (new ka("{audio}","")).match(l.de[a])
        }
        static Hf(a) {
            return (new ka("music","")).match(l.de[a])
        }
        static TK(a) {
            a = l.de[a];
            let b = new ka("{image}","g");
            b.match(a) && null != l.Vm && (a = a.replace(b.r, l.Vm));
            return (new ka("\\.(" + l.rg.G[2].join("|") + ")$","")).match(a)
        }
        static Ni(a) {
            return 1 == l.decoding.G[a]
        }
        static WL(a, b) {
            null != l.Hi(a) && (l.eb(a) ? b(a) : l.Kx.push(new th(a,b)))
        }
        static ax(a, b) {
            l.Os.G[a] = b;
            l.decoding.G[a] = 0
        }
        static mp() {
            return ["ogg", "aac"].slice()
        }
        static SJ() {
            return ["png", "jpg", "avif"].slice()
        }
        static wy() {
            return "ru nl ko ja it fr es en de br".split(" ").slice()
        }
    }
    l.g = !0;
    class th {
        constructor(a, b) {
            this.id = a;
            this.lp = b
        }
        se() {
            this.lp(this.id);
            this.lp = null
        }
    }
    th.g = !0;
    Object.assign(th.prototype, {
        j: th
    });
    class sh {
        constructor() {
            this.hz = 0
        }
        fb() {
            return this.hz < l.MAX
        }
        next() {
            return this.hz++
        }
    }
    sh.g = !0;
    Object.assign(sh.prototype, {
        j: sh
    });
    class rh {
        constructor(a, b) {
            this.Vk = this.ff = null;
            this.progress = 0;
            this.data = null;
            this.url = a;
            this.version = b
        }
        H() {
            this.ff = this.Vk = this.data = null
        }
        load(a, b) {
            this.Vk = a;
            this.ff = b;
            let c;
            switch (l.getType(this.url)) {
            case 0:
                c = "arraybuffer";
                break;
            case 1:
                c = "arraybuffer";
                break;
            case 2:
                c = "blob";
                break;
            case 3:
                c = "text";
                break;
            case 4:
                c = "blob"
            }
            let d = this;
            this.nP(this.url, c, function(e) {
                d.Jh(e)
            })
        }
        nP(a, b, c) {
            let d = new XMLHttpRequest
              , e = this;
            d.onerror = function() {
                null != e.ff && e.ff();
                d.onerror = d.onload = d.onprogress = null
            }
            ;
            d.onload = function() {
                e.progress = 1;
                if (404 == d.status)
                    null != e.ff && e.ff();
                else {
                    var f = d.response;
                    d.onerror = d.onload = d.onprogress = null;
                    c(f)
                }
            }
            ;
            d.onprogress = function(f) {
                0 < f.total && (e.progress = f.loaded / f.total)
            }
            ;
            try {
                d.open("GET", null != this.version ? "" + a + "?v=" + this.version : a, !0),
                d.responseType = b,
                d.send()
            } catch (f) {}
        }
        Jh(a) {
            this.data = a;
            this.Vk();
            this.Vk = null
        }
    }
    rh.g = !0;
    Object.assign(rh.prototype, {
        j: rh
    });
    class hg {
        constructor(a, b, c) {
            this.id = a;
            this.data = b;
            this.Hf = c;
            this.Ez = -1
        }
    }
    hg.g = !0;
    Object.assign(hg.prototype, {
        j: hg
    });
    class qd {
        constructor() {
            this.KO = .05;
            this.enabled = !0;
            this.Tz = 2;
            this.ML = 16;
            this.Sz = this.eh = 0;
            this.Vt = this.Ut = this.Wt = 1;
            this.Rz = 0;
            this.SL = 1E4;
            this.Jc = [];
            this.lg = new gb;
            this.LO = new gb;
            this.names = []
        }
        H() {
            1 != this.Ut && this.De(1);
            1 != this.Vt && this.Xu(1);
            1 != this.Wt && this.Yf(1);
            0 != this.Rz && this.Qq(0);
            let a = 0
              , b = this.Jc;
            for (; a < b.length; )
                b[a++].H();
            this.names = this.lg = this.Jc = null
        }
        qq() {}
        rq(a) {
            let b = 0;
            for (; b < a.length; ) {
                let c = a[b];
                ++b;
                this.names[c.id] = c.name
            }
        }
        play() {
            return -1
        }
        stop(a, b) {
            null == b && (b = 0);
            if (0 > a)
                return !1;
            if (1E4 > a) {
                var c = !1;
                let d = 0
                  , e = this.Jc
                  , f = []
                  , g = 0;
                for (; g < e.length; ) {
                    let h = e[g];
                    ++g;
                    h.ne.id == a && f.push(h)
                }
                for (; d < f.length; )
                    c = !0,
                    f[d++].stop(b);
                return c
            }
            c = Ga.find(this.Jc, function(d) {
                return d.id == a
            });
            return null != c ? (c.stop(b),
            !0) : !1
        }
        Nc(a) {
            return 0 > a ? !1 : 1E4 > a ? Ga.gk(this.Jc, function(b) {
                return b.ne.id == a
            }) : Ga.gk(this.Jc, function(b) {
                return b.id == a
            })
        }
        Ff(a) {
            let b = Ga.find(this.Jc, function(c) {
                return c.ne.id == a
            });
            return null != b ? b.id : -1
        }
        pK(a) {
            return 1E4 > a ? Ga.find(this.Jc, function(b) {
                return b.ne.id == a
            }) : Ga.find(this.Jc, function(b) {
                return b.id == a
            })
        }
        XK(a) {
            return null != this.lg.G[a]
        }
        $N(a, b) {
            null == a ? Ga.Eh(this.Jc, function(c) {
                c.ne.Hf || c.Vh(b)
            }) : Ga.Eh(this.Jc, function(c) {
                c.ne.Hf || (1E4 > a ? c.ne.id : c.id) != a || c.Vh(b)
            })
        }
        Yf(a) {
            this.Wt = 0 > a ? 0 : 1 < a ? 1 : a;
            this.vr();
            this.xr()
        }
        Xu(a) {
            this.Vt = 0 > a ? 0 : 1 < a ? 1 : a;
            this.xr()
        }
        De(a) {
            this.Ut = 0 > a ? 0 : 1 < a ? 1 : a;
            this.vr()
        }
        Qq(a) {
            this.Rz = -1 > a ? -1 : 1 < a ? 1 : a
        }
        zm(a, b, c) {
            null == c && (c = !0);
            this.el(a, 0, b);
            c && this.stop(a, b)
        }
        el(a, b, c) {
            var d;
            null == d && (d = -1);
            let e = this.pK(a);
            null != e && this.Nc(a) && (-1 != d && e.Vh(d),
            a = e.Lm() - b,
            (0 < a ? .01 > a : .01 > -a) || e.el(b, c))
        }
        iN(a, b, c) {
            if (!this.enabled || !this.XK(a))
                return -1;
            if (b && this.Nc(a))
                return this.Ff(a);
            b && (c = !0);
            if (!c && this.rv(a))
                return -1;
            a = this.gK(this.lg.G[a].Hf, c);
            return 0 > a ? -1 : a
        }
        jM(a) {
            this.Jc.push(a);
            this.Jc.length > this.Sz && (this.Sz = this.Jc.length)
        }
        iM(a) {
            this.eh &= ~(1 << a.channel);
            ua.remove(this.Jc, a);
            null != a.Jh && (a.Jh(),
            a.Jh = null)
        }
        rv(a) {
            let b = this.lg.G[a];
            if (b.Hf)
                return !1;
            let c = ua.now() / 1E3;
            a = this.LO.G[a];
            null == a && (a = this.KO);
            if (c - b.Ez < a)
                return !0;
            b.Ez = c;
            return !1
        }
        gK(a, b) {
            if (a) {
                for (b = 0; b < this.Tz; ) {
                    if (0 == (this.eh & 1 << b))
                        return this.eh |= 1 << b,
                        b;
                    ++b
                }
                return -1
            }
            a = -1;
            for (var c = this.Tz, d = c + this.ML; c < d; ) {
                if (0 == (this.eh & 1 << c)) {
                    this.eh |= 1 << c;
                    a = c;
                    break
                }
                ++c
            }
            if (b && 0 > a) {
                b = null;
                c = a = 0;
                for (d = this.Jc; c < d.length; ) {
                    let e = d[c];
                    ++c;
                    !e.ne.Hf && !e.loop && e.Im() > a && (a = e.Im(),
                    b = e)
                }
                if (null == b)
                    return -1;
                a = b.channel;
                b.stop()
            }
            return a
        }
        vr() {
            Ga.Eh(this.Jc, function(a) {
                a.ne.Hf && a.Vh(a.Lm())
            })
        }
        xr() {
            Ga.Eh(this.Jc, function(a) {
                a.ne.Hf || a.Vh(a.Lm())
            })
        }
    }
    qd.g = !0;
    Object.assign(qd.prototype, {
        j: qd
    });
    class uh {
        constructor(a, b, c, d) {
            this.name = a;
            this.id = b;
            this.min = c;
            this.max = d
        }
    }
    uh.g = !0;
    Object.assign(uh.prototype, {
        j: uh
    });
    class pe {
        static cz(a) {
            a = Qa.cj(a);
            return 83 == a.b[0] && 80 == a.b[1] ? 82 == a.b[2] : !1
        }
        static bN(a) {
            return a.slice(5 + (new fc(Qa.cj(a),3)).gd())
        }
        static RJ(a) {
            if (!pe.cz(a))
                throw 22;
            a = new fc(Qa.cj(a),5);
            let b = []
              , c = 0
              , d = a.gd();
            for (; c < d; ) {
                c++;
                let e = ""
                  , f = 0
                  , g = a.gd();
                for (; f < g; ) {
                    f++;
                    let h = a.ja();
                    e += String.fromCodePoint(h)
                }
                b.push(new uh(e,a.gd(),a.TA(),a.TA()))
            }
            return b
        }
    }
    pe.g = !0;
    class je extends qd {
        constructor() {
            super()
        }
        qq() {}
        rq() {}
        play() {
            return -1
        }
        Yf() {}
        De() {}
        Xu() {}
        Qq() {}
        vr() {}
        xr() {}
    }
    je.g = !0;
    je.u = qd;
    Object.assign(je.prototype, {
        j: je
    });
    class ig {
        constructor(a, b) {
            this.volume = 1;
            this.offset = 0;
            this.loop = !1;
            this.ou = a;
            this.ne = b
        }
        H() {
            this.ou = this.ne = null;
            this.Oi = !0
        }
        Lm() {
            return this.Oi ? NaN : this.volume
        }
        Vh(a) {
            this.Oi || (this.volume = a,
            this.hP())
        }
        Im() {
            return this.Oi ? NaN : this.mK() / this.data.duration
        }
    }
    ig.g = !0;
    Object.assign(ig.prototype, {
        j: ig
    });
    class Ud {
        constructor() {
            this.Nt = [];
            this.stack = [];
            this.XB = this.WB = 0
        }
        Of(a, b) {
            this.Nt.push(new vh(a,b));
            let c = this;
            return function() {
                c.removeListener(a, b)
            }
        }
        removeListener(a, b) {
            let c = this.Nt
              , d = 0
              , e = c.length;
            for (; d < e; ) {
                let f = c[d];
                if (f.type == a && f.listener == b) {
                    f.flags = 0;
                    c[d] = c[e - 1];
                    c.pop();
                    break
                }
                ++d
            }
        }
        se(a) {
            var b = this.Nt;
            let c = b.length
              , d = this.stack
              , e = this.WB
              , f = 0
              , g = c;
            for (; f < g; )
                d[e++] = b[f++];
            e > this.XB && (this.XB = e);
            for (this.WB = e; 0 < c; )
                b = d[--e],
                d[e] = null,
                b.type == a && 0 < b.flags && (b.listener.apply(null, void 0),
                3 == b.flags && (b.flags = 0)),
                --c
        }
    }
    Ud.g = !0;
    Object.assign(Ud.prototype, {
        j: Ud
    });
    class J {
        static Mm() {
            return null != J.context ? "running" == J.context.state : !1
        }
        static Of(a, b) {
            return J.Id.Of(a, b)
        }
        static Sa() {
            if (null != J.context) {
                J.HI();
                var a = J.Ge;
                null != a && a.stop()
            }
            a = (new ka("(iPad|iPhone)","g")).match(ja.navigator.platform);
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (a = !0);
            a && (J.currentTime = null,
            J.Ge = new Gc(1E3),
            J.Ge.Tf = function() {
                null != J.context && J.Mm() && (null != J.currentTime && J.currentTime == J.context.currentTime && (J.Ge.stop(),
                J.Id.se("EContextBroken")),
                J.currentTime = J.context.currentTime)
            }
            );
            try {
                "undefined" !== typeof AudioContext ? J.context = new AudioContext : "undefined" !== typeof webkitAudioContext && (J.context = new webkitAudioContext),
                J.context.onstatechange = function() {
                    J.Id.se(J.Mm() ? "EContextResumed" : "EContextSuspended")
                }
                ,
                J.Id.se("EContextCreated"),
                J.Mm() || J.addListener()
            } catch (b) {
                J.context = null
            }
        }
        static wz() {
            for (; ; ) {
                if (null != J.Lv)
                    return J.Lv;
                try {
                    J.Lv = !(!window.AudioContext && !window.webkitAudioContext)
                } catch (a) {
                    J.Lv = !1
                }
            }
        }
        static eJ() {
            function a(h, m) {
                e[h] = m
            }
            let b = null;
            try {
                b = "undefined" !== typeof Audio ? new Audio : null
            } catch (h) {
                return null
            }
            if (!b || "function" !== typeof b.canPlayType)
                return null;
            let c = {
                probably: 2,
                maybe: 1,
                "": 0
            }
              , d = null;
            d = function(h) {
                if (h instanceof Array) {
                    let m = 0
                      , n = 0;
                    for (; n < h.length; ) {
                        let q = d(h[n++]);
                        q > m && (m = q)
                    }
                    return m
                }
                return Bb.Cf(c, b.canPlayType(h).replace(RegExp("^no$", ""), ""))
            }
            ;
            let e = {};
            a("mp3", d("audio/mp3;"));
            a("ogg", d('audio/ogg; codecs="vorbis"'));
            a("aac", d("audio/aac;"));
            var f = ja.navigator.userAgent;
            if (-1 < f.indexOf("OPR") || -1 < f.indexOf("YaBrowser"))
                e.aac = 0;
            f = 0;
            let g = ["aac", "ogg", "mp3"];
            for (; f < g.length; ) {
                let h = g[f];
                ++f;
                if (0 < Bb.Cf(e, h))
                    return h
            }
            return null
        }
        static HI() {
            try {
                J.context.onstatechange = null,
                J.context.close()
            } catch (a) {}
            J.context = null
        }
        static yA(a) {
            a.preventDefault();
            null != J.context && "running" != J.context.state && J.context.resume().then(function() {}, function() {
                J.Id.se("EContextResumeRejected")
            })
        }
        static addListener() {
            window.addEventListener("mouseup", J.yA);
            window.addEventListener("touchend", J.yA)
        }
    }
    J.g = !0;
    class Hc extends qd {
        constructor() {
            super()
        }
        H() {
            super.H();
            this.hn = this.gn = this.jn = this.fn = null
        }
        qq(a, b, c, d, e) {
            null == c && (c = !1);
            super.qq(a, b, c, d, e);
            let f = this;
            this.decode(b, function(g) {
                null == g ? d(null) : (f.lg.G[a] = new hg(a,g,c),
                d(g))
            })
        }
        rq(a, b, c) {
            super.rq(a, b, c);
            let d = this;
            this.decode(b, function(e) {
                if (null == e)
                    c(null);
                else
                    try {
                        let f = d.split(e, a)
                          , g = 0
                          , h = a.length;
                        for (; g < h; ) {
                            let m = g++
                              , n = a[m].id;
                            d.names[n] = a[m].name;
                            d.lg.G[n] = new hg(n,f[m],!1)
                        }
                        c(e)
                    } catch (f) {}
            })
        }
        play(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            if (null == J.context || !J.Mm())
                return -1;
            c = this.iN(a, b, c);
            if (0 > c)
                return -1;
            a = new Bc(this,this.lg.G[a]);
            a.id = this.SL++;
            a.channel = c;
            a.loop = b;
            a.offset = d;
            a.play();
            this.jM(a);
            return a.id
        }
        Yf(a, b) {
            null == b && (b = 0);
            if (null != J.context) {
                this.Wt = 0 > a ? 0 : 1 < a ? 1 : a;
                var c = this.qp();
                0 < b ? c.el(a, b) : c.Mq(a)
            }
        }
        De(a) {
            null != J.context && (this.Ut = 0 > a ? 0 : 1 < a ? 1 : a,
            this.Ny().Mq(a))
        }
        Xu(a) {
            null != J.context && (this.Vt = 0 > a ? 0 : 1 < a ? 1 : a,
            this.Oy().Mq(a))
        }
        Qq(a) {
            null != J.context && (super.Qq(a),
            this.bK().eO(a))
        }
        vr() {}
        xr() {}
        decode(a, b) {
            (new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(2,1323E4,44100)).decodeAudioData(a, function(c) {
                b(c)
            }, function() {
                b(null)
            })
        }
        qp() {
            null == this.fn && (this.fn = new Cc,
            this.fn.type = 5,
            this.fn.connect(new jg));
            return this.fn
        }
        Oy() {
            null == this.jn && (this.jn = new Cc,
            this.jn.type = 3,
            this.jn.connect(this.qp()));
            return this.jn
        }
        Ny() {
            null == this.gn && (this.gn = new Cc,
            this.gn.type = 4,
            this.gn.connect(this.qp()));
            return this.gn
        }
        bK() {
            null == this.hn && (this.hn = new kg,
            this.hn.type = 6,
            this.qp().append(this.hn));
            return this.hn
        }
        UI(a) {
            let b = window.OfflineAudioContext;
            null == b && (b = window.webkitOfflineAudioContext);
            return new b(2,44100 * a,44100)
        }
        split(a, b) {
            let c = this.UI(Math.ceil(2 * b[b.length - 1].max / 1E3))
              , d = a.sampleRate
              , e = []
              , f = 0
              , g = b.length;
            if (1 == a.numberOfChannels)
                for (var h = a.getChannelData(0); f < g; ) {
                    var m = b[f++];
                    a = d / 1E3 * m.min | 0;
                    var n = d / 1E3 * m.max | 0;
                    m = c.createBuffer(1, n - a, d);
                    a = h.subarray(a, n);
                    try {
                        m.copyToChannel(a, 0)
                    } catch (q) {
                        m.getChannelData(0).set(a)
                    }
                    e.push(m)
                }
            else
                for (h = a.getChannelData(0),
                a = a.getChannelData(1); f < g; ) {
                    n = b[f++];
                    m = d / 1E3 * n.min | 0;
                    let q = d / 1E3 * n.max | 0;
                    n = c.createBuffer(2, q - m, d);
                    let p = h.subarray(m, q);
                    m = a.subarray(m, q);
                    try {
                        n.copyToChannel(p, 0),
                        n.copyToChannel(m, 1)
                    } catch (v) {
                        n.getChannelData(0).set(p),
                        n.getChannelData(1).set(m)
                    }
                    e.push(n)
                }
            return e
        }
    }
    Hc.g = !0;
    Hc.u = qd;
    Object.assign(Hc.prototype, {
        j: Hc
    });
    class Bc extends ig {
        constructor(a, b) {
            super(a, b);
            this.data = b.data;
            this.Tp = null
        }
        H() {
            if (!this.Oi) {
                var a = this.Ne;
                a: for (; null != a; ) {
                    let b = a.fj;
                    switch (a.type) {
                    case 0:
                        this.Nc && (this.Nc = !1,
                        this.Ne.stop(0));
                        break;
                    case 1:
                    case 2:
                        break;
                    default:
                        break a
                    }
                    ua.remove(a.fj.inputs, a);
                    a.n.disconnect();
                    a.H();
                    a = b
                }
                this.Ne = this.data = null;
                a = this.ou;
                super.H();
                a.iM(this)
            }
        }
        play() {
            if (!this.Oi) {
                this.Nc = !0;
                this.Ne = new lg;
                var a = this.ou;
                this.Ne.connect(this.ne.Hf ? a.Ny() : a.Oy());
                this.startTime = J.context.currentTime;
                this.Ne.play(this.data, this.loop, this.offset, O(this, this.onended))
            }
        }
        el(a, b) {
            if (!this.Oi) {
                var c = this.Hy();
                null != c && c.el(a, b);
                this.volume = a;
                this.Tp = J.context.currentTime + b
            }
        }
        stop(a) {
            null == a && (a = 0);
            this.Oi || this.stopped || !this.Nc || (this.stopped = !0,
            this.Ne.stop(J.context.currentTime + a))
        }
        mK() {
            return (this.offset + (J.context.currentTime - this.startTime)) % this.data.duration
        }
        Lm() {
            if (null != this.Tp) {
                if (J.context.currentTime < this.Tp)
                    return this.Ne.get(2).n.gain.value;
                this.Tp = null
            }
            return this.volume
        }
        hP() {
            let a = this.Hy();
            null != a && a.Mq(this.Lm())
        }
        onended() {
            this.Nc && (this.Nc = !1,
            this.H())
        }
        Hy() {
            if (!Bc.ty || null == this.Ne)
                return null;
            try {
                let a = this.Ne.get(2);
                if (null == a) {
                    a = new Cc;
                    let b = this.Ne.get(1);
                    null == b ? this.Ne.append(a) : b.append(a)
                }
                return a
            } catch (a) {
                return Bc.ty = !1,
                null
            }
        }
    }
    Bc.g = !0;
    Bc.u = ig;
    Object.assign(Bc.prototype, {
        j: Bc
    });
    class Mb {
        constructor(a, b) {
            this.n = a;
            this.type = b;
            this.inputs = [];
            this.fj = null
        }
        get(a) {
            let b = this;
            for (; null != b; ) {
                if (b.type == a)
                    return b;
                b = b.fj
            }
            return null
        }
        H() {
            this.n = this.fj = this.inputs = null
        }
        connect(a) {
            this.fj = a;
            a.inputs.push(this);
            this.n.disconnect();
            this.n.connect(a.n)
        }
        append(a) {
            ua.remove(this.fj.inputs, this);
            a.connect(this.fj);
            this.connect(a)
        }
    }
    Mb.g = !0;
    Object.assign(Mb.prototype, {
        j: Mb
    });
    class jg extends Mb {
        constructor() {
            super(J.context.destination, 8)
        }
    }
    jg.g = !0;
    jg.u = Mb;
    Object.assign(jg.prototype, {
        j: jg
    });
    class lg extends Mb {
        constructor() {
            super(J.context.createBufferSource(), 0)
        }
        H() {
            this.n.onended = null;
            super.H()
        }
        play(a, b, c, d) {
            let e = this.n;
            e.buffer = a;
            e.loop = b;
            e.start(0, c);
            e.onended = d
        }
        stop(a) {
            null == a && (a = 0);
            this.n.stop(a)
        }
    }
    lg.g = !0;
    lg.u = Mb;
    Object.assign(lg.prototype, {
        j: lg
    });
    class Cc extends Mb {
        constructor() {
            super(J.context.createGain(), 2)
        }
        Mq(a) {
            this.n.gain.value = a
        }
        el(a, b) {
            let c = J.context.currentTime
              , d = this.n;
            d.gain.cancelScheduledValues(0);
            d.gain.linearRampToValueAtTime(a, c + b)
        }
    }
    Cc.g = !0;
    Cc.u = Mb;
    Object.assign(Cc.prototype, {
        j: Cc
    });
    class kg extends Mb {
        constructor() {
            super(J.context.createStereoPanner(), 1)
        }
        eO(a) {
            let b = this.n;
            b.pan.cancelScheduledValues(0);
            b.pan.setTargetAtTime(a, J.context.currentTime, .005)
        }
    }
    kg.g = !0;
    kg.u = Mb;
    Object.assign(kg.prototype, {
        j: kg
    });
    class Pc extends ia {
        constructor(a, b, c) {
            null == c && (c = !1);
            null == b && (b = 1);
            super();
            this.S = a;
            this.scale = b;
            this.loop = c;
            this.time = 0;
            a.setScale(1, 1);
            a.Xj();
            this.i = new F(a.cb(),a.Ka,0,1)
        }
        va() {
            this.S.setScale(1, 1);
            this.S.m(this.i.x);
            this.S.s(this.i.y);
            super.va()
        }
        update(a) {
            super.update(a);
            a = this.time;
            if (.1 > a) {
                a = .05 * Math.sin(a / .1 * (Math.PI / 2)) * this.scale;
                var b = 1 - a;
                a = 1 + a
            } else if (.3 > a)
                b = a - .1,
                a = (1 > (b /= .09999999999999999) ? .055 * b * b * b : .055 * ((b -= 2) * b * b + 2)) * this.scale,
                b = .95 + a,
                a = 1.05 - a;
            else if (.6 > a)
                a = (a - .3) / .3 - 1,
                a = .05 * (a * a * a + 1) * this.scale,
                b = 1.06 - a,
                a = .94 + a;
            else {
                this.loop ? 4 < a && (this.time = 0) : this.va();
                return
            }
            this.S.m(this.i.x + b);
            this.S.s(this.i.y + a);
            this.S.sa(b);
            this.S.xb(a)
        }
    }
    Pc.g = !0;
    Pc.u = ia;
    Object.assign(Pc.prototype, {
        j: Pc
    });
    class Ra extends ia {
        constructor() {
            super();
            Ra.instance = this;
            this.state = 0;
            this.l = new S;
            this.node = new pb;
            this.node.R(this.l.B);
            this.node.name = "cover";
            this.uc = new ic(null,new F(0,0,0,1));
            this.uc.aa(.5);
            this.l.node.R(this.uc.B);
            this.iq = [];
            this.Gq = [1, 1];
            this.Qd = [new A(this.l,r.si,k.dw), new A(this.l,r.si,k.dw)];
            this.ya = [new A(this.l,r.si,k.cw), new A(this.l,r.si,k.cw)];
            this.pb = [new A(this.l,r.ec,k.hD), new A(this.l,r.ec,k.iD)];
            this.qm = null;
            za.instance.Mc.Nm && (this.qm = new $b,
            this.ya[1].Hn(this.qm));
            this.Re = new A(null,r.ec,k.eD);
            this.node.R(this.Re.B);
            this.Re.Zf(652, 577);
            this.bk = new F(0,0,0,1);
            this.Re.N(!1);
            this.Re.aa(0);
            this.Kb = new A(null,r.ec,k.gD);
            this.Kb.N(!1);
            this.Kb.aa(0);
            this.node.R(this.Kb.B);
            this.Kb.fe(this.Kb.Y.x / 2, 0);
            this.Kb.Zf(this.Kb.Y.x / 2, 0);
            this.lj = new F(0,0,0,1);
            this.Qd[0].sa(.001);
            this.Qd[1].sa(.001);
            this.ya[0].m(-this.ya[0].Y.x);
            this.ya[1].sa(-1);
            this.pb[0].Zf(this.pb[0].Y.x, 0);
            this.pb[0].fe(this.pb[0].Y.x, 0);
            this.node.md();
            this.Lp = !1;
            this.layout()
        }
        Zu() {
            this.Lp = !0;
            this.layout()
        }
        va() {
            super.va();
            this.node.H();
            this.aq = null;
            Ra.instance = null
        }
        xC(a) {
            this.aq = a;
            this.time = 0;
            this.state = 5
        }
        bt() {
            this.time = 0;
            this.Qd[0].sa(1);
            this.Qd[1].sa(1);
            this.pb[0].N(!1);
            this.pb[1].N(!1);
            this.layout();
            this.animate(1);
            this.state = 6;
            z.stop(z.Hj);
            z.stop(z.Yg)
        }
        YI() {
            this.Re.N(!0);
            this.state = 1;
            this.time = 0
        }
        ps() {
            this.Kb.N(!0);
            this.state = 3;
            this.time = 0
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 1:
                a = this.wb(1.5);
                this.Re.m(this.bk.x);
                this.Re.s(this.bk.y);
                this.Re.aa(Ba.Qf()(a));
                1 == a && (this.state = 2,
                this.time = 0);
                break;
            case 2:
                a = this.wb(2);
                this.Re.m(this.bk.x);
                this.Re.s(this.bk.y * (1 - a));
                1 == a && (this.state = 0,
                this.Re.N(!1));
                break;
            case 3:
                a = this.wb(1);
                this.Kb.aa(Ba.Qf()(a));
                this.Kb.m(this.lj.x);
                this.Kb.s(0 * this.lj.y);
                this.pb[0].N(!0);
                this.pb[1].N(!0);
                this.pb[0].aa(this.Kb.Bc);
                this.pb[1].aa(this.Kb.Bc);
                this.pb[0].s(.9 * -this.pb[0].ua());
                this.pb[1].s(.9 * -this.pb[1].ua());
                1 == a && (this.state = 4,
                this.time = 0);
                break;
            case 4:
                a = this.wb(2);
                this.Kb.m(this.lj.x);
                this.Kb.s(this.lj.y * a);
                var b = this.Kb.vv(new F(0,0,0,1));
                b = this.l.uv(b);
                this.pb[0].s(Math.min(0, b.y - .9 * this.pb[0].ua()));
                this.pb[1].s(Math.min(0, b.y - .9 * this.pb[1].ua()));
                1 == a && (this.state = 0,
                this.Kb.N(!1));
                break;
            case 5:
                a = this.wb(2);
                this.animate(a);
                1 == a && (this.Lp = !0,
                this.state = 0,
                null != this.aq && (this.aq(),
                this.aq = null));
                break;
            case 6:
                a = this.wb(2),
                this.animate(1 - a),
                1 == a && (this.Lp = !1,
                this.state = 0)
            }
        }
        layout() {
            var a = za.instance.window.zh();
            this.l.update(.016666666666666666);
            var b = a.x
              , c = a.y
              , d = b;
            let e = c;
            2 < za.instance.window.qk() && (d = b / 2,
            e = c / 2,
            b = this.node.mb,
            b.scale.x = b.scale.y = b.scale.z = 2,
            b.I = b.I & -2 | 244);
            d /= 2;
            this.l.m(d);
            b = this.ya[0];
            b.sa(d / b.Y.x);
            b.m(-b.la());
            this.Gq[0] = b.ib;
            this.iq[0] = b.cb();
            c = this.ya[1];
            c.sa(-d / c.Y.x);
            c.m(c.la());
            this.Gq[1] = -c.ib;
            this.iq[1] = c.cb();
            this.bk.x = d;
            this.bk.y = e;
            this.lj.x = d;
            this.lj.y = e;
            this.l.xb(e / b.Y.y);
            this.node.md();
            this.Kb.m(this.lj.x);
            this.animate(this.Lp ? 1 : 0);
            this.pb[1].sa(1);
            a = 1 / (a.x / a.y);
            this.Kb.J(1);
            1 > a && (this.Kb.J(a),
            this.pb[0].sa(a),
            this.pb[1].sa(a))
        }
        animate(a) {
            this.ya[0].sa((1 - a) * this.Gq[0]);
            this.ya[1].sa((-1 + a) * this.Gq[1]);
            this.ya[0].m(this.iq[0] - a * this.Qd[0].la());
            this.ya[1].m(this.iq[1] + a * this.Qd[1].la());
            null != this.qm && (this.qm.Mu(-a),
            this.ya[1].Hn(this.qm));
            this.Qd[0].sa(a);
            this.Qd[0].m(this.ya[0].cb() + this.ya[0].la());
            this.Qd[1].sa(a);
            this.Qd[1].m(this.ya[1].cb() - this.ya[1].la() - this.Qd[1].la());
            this.pb[0].sa(1 - a);
            this.pb[0].m(this.Qd[0].cb());
            this.pb[0].aa(1 - a);
            this.pb[1].sa(1 - a);
            this.pb[1].m(this.Qd[1].cb() + this.Qd[1].la());
            this.pb[1].aa(1 - a);
            this.uc.aa(.5 * (1 - a))
        }
    }
    Ra.g = !0;
    Ra.u = ia;
    Object.assign(Ra.prototype, {
        j: Ra
    });
    class Pe {
        constructor(a, b) {
            this.rect = new zc(a);
            this.rect.ob(b.A - b.o, b.D - b.C);
            a = this.rect.mb;
            a.translate.x = b.o;
            a.translate.y = b.C;
            a.I = a.I & -2 | 496
        }
        Jb(a) {
            Ea.pf(this.rect);
            this.rect.Sd();
            return this.rect.Jb(a)
        }
    }
    Pe.g = !0;
    Object.assign(Pe.prototype, {
        j: Pe
    });
    class pc extends ia {
        constructor() {
            super();
            this.icon = new A(null,r.Hb,k.Iw);
            this.label = new wa(null,r.qc)
        }
        Wa(a) {
            this.label.Wa(a);
            this.layout()
        }
        Xp() {
            let a = this.parent;
            a.node.R(this.icon.B);
            a.node.R(this.label.B)
        }
        layout() {
            var a = this.parent
              , b = a.ea.la();
            a = Math.min(.12 * a.ea.Wy().x, .12 * a.ea.Wy().y);
            this.icon.J(a / this.icon.Y.x);
            this.icon.m(b - this.icon.la() - 10);
            this.icon.s(10);
            b = .1 * this.icon.ua();
            this.label.Gb(300, this.icon.ua() - 2 * b);
            this.label.Rb(1, 0);
            this.label.m(this.icon.cb() - 300);
            this.label.s(this.icon.Ka + b);
            this.label.Yh()
        }
    }
    pc.g = !0;
    pc.u = ia;
    Object.assign(pc.prototype, {
        j: pc
    });
    class Ca extends Ac {
        constructor(a, b, c, d) {
            super();
            this.frame = b;
            this.gz = c;
            null == a && (a = r.Hb);
            this.S = new A(null,a,this.frame = b);
            this.l.appendChild(this.S);
            this.icon = null;
            null != d && (this.icon = new A(null,a,d),
            this.icon.Xj(),
            this.l.appendChild(this.icon));
            a = this.S.Y;
            this.cc = new F(a.x,a.y,0,1);
            this.ee = 0
        }
        Pu(a) {
            null != this.gz && this.l.Yc(0).bc(a ? this.gz : this.frame)
        }
        update(a) {
            super.update(a);
            0 < this.ee && (this.ee -= a,
            0 > this.ee && (this.S.bc(this.frame),
            this.ee = 0))
        }
        select() {
            super.select();
            this.ee = .2
        }
        Jb(a) {
            return this.l.Jb(a)
        }
        static create(a, b, c, d) {
            return new Ca(a,b,c,d)
        }
    }
    Ca.g = !0;
    Ca.u = Ac;
    Object.assign(Ca.prototype, {
        j: Ca
    });
    class Ob extends Ca {
        constructor(a, b, c) {
            super(null, a, b);
            this.je = new wa(null,r.qc);
            this.je.Gb(this.S.Y.x - 80, this.S.Y.y - 50);
            this.je.m(40);
            this.je.s(25);
            this.je.Wa(c);
            this.je.Rb(0, 0);
            this.je.Yh(!1);
            this.l.appendChild(this.je)
        }
        BC() {
            this.je.kf(r.qc);
            this.je.Gb(this.S.Y.x - 80, this.S.Y.y - 50);
            this.je.Rb(0, 0)
        }
        vB(a) {
            this.je.zq();
            this.je.Wa(a);
            this.je.Yh()
        }
        static pm(a) {
            return new Ob(k.kH,k.lH,a)
        }
    }
    Ob.g = !0;
    Ob.u = Ca;
    Object.assign(Ob.prototype, {
        j: Ob
    });
    class Kh {
    }
    Kh.g = !0;
    class vh {
        constructor(a, b) {
            this.type = a;
            this.listener = b;
            this.flags = 1
        }
    }
    vh.g = !0;
    Object.assign(vh.prototype, {
        j: vh
    });
    class Ig {
        constructor() {
            this.$h = new t(0,0);
            this.i = new t(0,0);
            this.dir = new t(0,0);
            this.ir = this.lq = 0;
            this.color = new bb(0,0,0,0);
            this.mh = new bb(0,0,0,0);
            this.angle = this.To = this.Mt = this.Zc = this.size = 0;
            this.scale = this.alpha = 1;
            this.height = this.width = 0
        }
    }
    Ig.g = !0;
    Object.assign(Ig.prototype, {
        j: Ig
    });
    class Jg {
        constructor(a, b, c) {
            this.x = a;
            this.y = b;
            this.size = c
        }
    }
    Jg.g = !0;
    Object.assign(Jg.prototype, {
        j: Jg
    });
    ja.Er |= 0;
    "undefined" != typeof performance && "function" == typeof performance.now && (ua.now = performance.now.bind(performance));
    null == String.fromCodePoint && (String.fromCodePoint = function(a) {
        return 65536 > a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320)
    }
    );
    Object.defineProperty(String.prototype, "__class__", {
        value: String,
        enumerable: !1,
        writable: !0
    });
    String.g = !0;
    Array.g = !0;
    Date.prototype.j = Date;
    Date.g = "Date";
    var fj = {}
      , dj = {}
      , ej = Number
      , cj = Boolean
      , gj = {}
      , hj = {};
    Ua.YH = {}.toString;
    var zi = 3
      , zg = "en de fr ru nl br it es ko ja".split(" ")
      , Th = [0, 30, 80, 170, 230, 0, 40, 90, 150, 200, 0, 40, 90, 150, 200, 270, 350]
      , Rh = [3, 31, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 19351, 64407, 123823, 260791, 375463, 633511, 1117095];
    k.RC = "blink/0000";
    k.SC = "blink/";
    k.TC = "chew/";
    k.UC = "fail/";
    k.YC = "idle/";
    k.VC = "idle2/0000";
    k.WC = "idle2/";
    k.XC = "idle3/";
    k.ZC = "excited/";
    k.$C = "greeting/";
    k.Wv = "mouth_close/";
    k.aD = "mouth_open/";
    k.bD = "puzzled/";
    k.cD = "sleeping/";
    k.Xv = "zzz/";
    k.kE = "0000";
    k.lE = "0001";
    k.mE = "0002";
    k.nE = "0019";
    k.oE = "0020";
    k.pE = "0021";
    k.hF = "disappear/0000";
    k.iF = "disappear/";
    k.jF = "glow";
    k.lF = "idle/";
    k.kF = "idle/0001";
    k.nF = "idle_off/";
    k.mF = "idle_off/0001";
    k.oF = "light_down/0000";
    k.pF = "light_down/";
    k.qF = "light_up/0000";
    k.rF = "light_up/";
    k.sF = "timer/0000";
    k.tF = "timer/";
    k.CE = "a_01";
    k.DE = "a_02";
    k.AE = "auto_01";
    k.BE = "auto_02";
    k.HE = "b_01";
    k.IE = "b_02";
    k.EE = "bar_0";
    k.FE = "bar_1";
    k.GE = "bar_2";
    k.qw = "drag_button";
    k.JE = "drag_button_hot";
    k.KE = "wheel_active";
    k.LE = "wheel_bottom";
    k.ME = "wheel_rope";
    k.NE = "wheel_top";
    k.eE = "flight/0000";
    k.fE = "flight/";
    k.ow = "idle";
    k.gE = "pop/0000";
    k.hE = "pop/";
    k.iE = "stain_01";
    k.jE = "stain_03";
    k.dF = "x1";
    k.eF = "x2";
    k.fF = "x3";
    k.gF = "x4";
    k.YE = "0000";
    k.aF = "0000";
    k.bF = "0011";
    k.cF = "0012";
    k.qE = "0000";
    k.rw = "0000";
    k.ZE = "0001";
    k.$E = "0002";
    k.aE = "x1/0000";
    k.bE = "x1/";
    k.cE = "x2/0000";
    k.dE = "x2/";
    k.pw = "button0";
    k.zE = "button1";
    k.TD = "button0";
    k.UD = "button1";
    k.VD = "button2";
    k.WD = "button3";
    k.XD = "x1";
    k.YD = "x2";
    k.ZD = "x3";
    k.$D = "x4";
    k.PD = "bee0000";
    k.RD = "bee";
    k.QD = "bee0001";
    k.SD = "pollen";
    k.HF = "center";
    k.sw = "handle";
    k.tw = "handle_hot";
    k.uw = "highlight";
    k.IF = "record";
    k.vw = "sticker";
    k.xE = "body";
    k.oo = "bubbles/";
    k.yE = "face";
    k.uF = "particle_1/";
    k.vF = "particle_2/";
    k.wF = "particle_3/";
    k.xF = "pipe";
    k.yF = "valve";
    k.OE = "fire";
    k.PE = "lantern_end";
    k.QE = "lantern_start";
    k.RE = "particle_1";
    k.SE = "particle_2";
    k.TE = "particle_3";
    k.rE = "cheese_hole";
    k.sE = "eyes/0000";
    k.tE = "eyes/";
    k.uE = "idle";
    k.vE = "mouse/0000";
    k.no = "mouse/";
    k.wE = "mouse/0008";
    k.UE = "bottle";
    k.VE = "firefly/";
    k.WE = "light";
    k.XE = "top";
    k.zF = "0000";
    k.AF = "0001";
    k.BF = "0002";
    k.CF = "0003";
    k.DF = "0004";
    k.EF = "0005";
    k.FF = "0006";
    k.GF = "0007";
    k.$G = "sign/";
    k.Dw = "button_audio_x";
    k.aH = "button_back";
    k.bH = "button_back_hot";
    k.cH = "button_music_hot";
    k.dH = "button_music_on";
    k.eH = "button_pause";
    k.fH = "button_pause_hot";
    k.gH = "button_restart";
    k.hH = "button_restart_hot";
    k.Ew = "button_round";
    k.Fw = "button_round_hot";
    k.Sr = "button_short";
    k.Tr = "button_short_hot";
    k.iH = "button_sound_hot";
    k.jH = "button_sound_on";
    k.Pl = "button_tiny";
    k.Ql = "button_tiny_hot";
    k.kH = "button_wide";
    k.lH = "button_wide_hot";
    k.Gw = "candy/0000";
    k.mH = "candy/";
    k.Hw = "candy/0002";
    k.nH = "famobi";
    k.oH = "gear_icon";
    k.pH = "hud_star/0000";
    k.qH = "hud_star/";
    k.rH = "level/locked";
    k.Ur = "level/playable";
    k.Iw = "level/star_result_small";
    k.sH = "level/stars0";
    k.tH = "level/stars1";
    k.uH = "level/stars2";
    k.vH = "level/stars3";
    k.wH = "logo";
    k.xH = "logo_ru";
    k.yH = "menu_icon_round";
    k.Jw = "menu_icon_tiny";
    k.zH = "monster_results";
    k.AH = "monster_sad1";
    k.BH = "monster_sad2";
    k.CH = "monster_sad3";
    k.DH = "music_icon";
    k.EH = "nav_next0";
    k.FH = "nav_next1";
    k.GH = "nav_prev0";
    k.Kw = "nav_prev1";
    k.HH = "next_icon_tiny";
    k.IH = "play_icon_round";
    k.JH = "popup_bottom";
    k.KH = "popup_button";
    k.LH = "popup_button_hot";
    k.MH = "popup_button_x";
    k.NH = "popup_middle";
    k.Lw = "popup_top";
    k.Mw = "restart_icon_tiny";
    k.OH = "skin_glow";
    k.PH = "skin_hand";
    k.QH = "sound_icon";
    k.Nw = "star";
    k.RH = "star_empty";
    k.Ow = "x_icon";
    k.SH = "zeptolab";
    k.hD = "tape0";
    k.iD = "tape1";
    k.gD = "roll";
    k.eD = "cutter";
    k.hG = "season1";
    k.iG = "season2";
    k.jG = "season3";
    k.Qr = "shelf";
    k.kG = "shelf_button";
    k.lG = "shelf_button_hot";
    k.LF = "cover1";
    k.MF = "cover2";
    k.NF = "cover3";
    k.OF = "cover4";
    k.PF = "cover5";
    k.Pr = "lock";
    k.QF = "monster";
    k.zw = "next";
    k.RF = "particle0";
    k.SF = "particle1";
    k.TF = "particle2";
    k.UF = "perfect";
    k.WF = "cover6";
    k.XF = "cover7";
    k.YF = "cover8";
    k.ZF = "cover9";
    k.VF = "cover10";
    k.$F = "cover11";
    k.aG = "cover12";
    k.bG = "cover13";
    k.cG = "cover14";
    k.dG = "cover15";
    k.eG = "cover16";
    k.fG = "cover17";
    k.gG = "label";
    k.cw = "front";
    k.dw = "side";
    ia.iu = new tb(4096,null,!0);
    ea.kB = !1;
    sb.Di = !0;
    Za.Rt = -1;
    Za.Di = !0;
    var Sh = !1
      , wh = !1
      , xh = !1;
    E.Za = 1;
    E.box = 1;
    E.level = 1;
    Ad.po = 1.2;
    z.WG = 1001;
    z.VG = 1002;
    z.UG = 1003;
    z.TG = 1004;
    z.Cw = 1005;
    z.SG = 1006;
    z.QG = 1007;
    z.PG = 1008;
    z.OG = 1009;
    z.NG = 1010;
    z.MG = 1013;
    z.LG = 1014;
    z.KG = 1015;
    z.JG = 1016;
    z.IG = 1017;
    z.HG = 1018;
    z.GG = 1019;
    z.FG = 1020;
    z.EG = 1021;
    z.DG = 1022;
    z.CG = 1031;
    z.BG = 1032;
    z.AG = 1037;
    z.zG = 1038;
    z.yG = 1039;
    z.Yg = 1040;
    z.xG = 1041;
    z.wG = 1042;
    z.vG = 1043;
    z.uG = 1044;
    z.tG = 1045;
    z.Hj = 1046;
    z.sG = 1051;
    z.rG = 1052;
    z.qG = 1053;
    z.Xg = 1054;
    z.pG = 1055;
    z.Bw = 1056;
    z.oG = 1057;
    r.Jk = [];
    rd.VERSION = new Ag("1.3.35");
    rd.OD = "v1.3.35 2024-05-24 17:10:32 Generated by Haxe 4.3.4 polygonal";
    bb.tO = new bb(1,1,1,1);
    bb.mP = bb.tO;
    Q.Zv = 1;
    Q.$v = 2;
    Q.Yv = 4;
    Q.aw = 8;
    Fb.Fj = .016666666666666666;
    t.bI = [];
    t.cI = [];
    K.EI = !1;
    K.Dz = -1;
    var Yh = 10
      , Ci = k.Oa(k.bE, 0, 4, 25)
      , Di = k.Oa(k.dE, 0, 4, 25)
      , $h = fb.create("" + k.no + "@20,0-2")
      , Zh = fb.create("" + k.no + "@20,3,4,8")
      , bi = fb.create("" + k.no + "@20,2,6,7,11")
      , ai = fb.create("" + k.no + "@20,8,9,10,11")
      , Ch = null
      , Ei = fb.create("" + k.tE + "@20,0-8");
    ib.KF = k.Oa(k.hE, 0, 11, 20);
    ib.Tv = Q.ml(new Q(48,48,152,152));
    ib.OC = -17;
    ib.NC = 20;
    vb.Rv = new Q(142,157,112,104);
    vb.jo = Q.ml(vb.Rv);
    var ci = k.Oa(null, 8, 17, 15)
      , Fi = fb.create("18@3,18")
      , $i = k.Oa(null, 21, 25, 20);
    bc.LC = k.Oa(k.fE, 0, 13, 20);
    cc.Vv = Q.ml(new Q(155,176,88,76));
    Na.lw = 100;
    var Gi = k.Oa(k.RD, 1, 3, 33)
      , Dh = null
      , Eh = null
      , di = null
      , ei = null
      , Hi = k.Oa(k.VE, 0, 39, 20);
    Nd.Tt = [];
    Sb.YG = Q.ml(new Q(264,350,108,2));
    Sb.nw = 80;
    var hi = [k.Oa(k.YC, 0, 18, 20), k.Oa(k.WC, 0, 24, 20), k.Oa(k.XC, 0, 15, 20), k.Oa(k.ZC, 0, 19, 20), k.Oa(k.bD, 0, 26, 20), k.Oa(k.UC, 0, 12, 20), k.Oa(k.Wv, 0, 3, 20), k.Oa(k.aD, 0, 8, 20), k.Oa(k.Wv, 0, 3, 20), k.Oa(k.TC, 0, 8, 20), k.Oa(k.$C, 0, 29, 20), k.Oa(k.cD, 0, 6, 20)]
      , Ki = fb.create("" + k.SC + "@20,0,1,0,1")
      , fi = fb.create("" + k.Xv + "@30,0-36,0x15")
      , gi = fb.create("" + k.Xv + "@30,0x15,0-36");
    Tb.MC = k.Oa(null, 1, 5, 20);
    Tb.xw = Q.ml(new Q(300,300,175,175));
    Wa.Aw = 56;
    Wa.mG = 6;
    Wa.Gj = 16;
    Wa.nG = -6.4;
    var Og = fb.create("@20,2,3,3,4")
      , Mi = fb.create("0-4@20,5@0.4,6@20")
      , Ni = k.Oa(null, 7, 10, 10)
      , Oi = k.Oa(null, 1, 4, 20);
    Kb.Rr = 16.8;
    Kb.XG = Q.ml(new Q(70,64,82,82));
    var Pi = k.Oa(k.lF, 0, 17, 20)
      , Qi = k.Oa(k.nF, 0, 17, 20)
      , Ri = k.Oa(k.rF, 0, 5, 20)
      , Si = k.Oa(k.pF, 0, 5, 20)
      , aj = k.Oa(k.iF, 0, 12, 20)
      , Ti = k.Oa(k.uF, 0, 10, 20)
      , Ui = k.Oa(k.vF, 0, 10, 20)
      , Vi = k.Oa(k.wF, 0, 10, 20);
    Pd.$H = 0;
    var ii = k.zF
      , Rg = k.AF
      , Wi = k.BF
      , ji = k.CF
      , li = k.DF
      , Yi = k.EF
      , Xi = k.FF
      , ki = k.GF;
    oa.qo = 36;
    oa.QC = 120;
    oa.PC = 240;
    oa.ZG = 110;
    oa.Ol = 1.2000000000000002;
    oa.ww = .9;
    oa.Di = !0;
    var Ii = 0
      , Ji = 0;
    gd.RL = 1;
    lb.bw = 0;
    lb.jD = 3;
    lb.TYPE = 103;
    Jd.TYPE = 303;
    Zc.TYPE = 403;
    Xd.TYPE = 203;
    da.TYPE = 105;
    jd.TYPE = 705;
    Ld.TYPE = 605;
    Bf.TYPE = 1805;
    Yd.TYPE = 1205;
    Zd.TYPE = 305;
    vc.fD = 4.800000000000001;
    vc.TYPE = 1105;
    Md.TYPE = 505;
    Cf.TYPE = 1705;
    ec.TYPE = 1005;
    cd.TYPE = 905;
    $d.TYPE = 205;
    ae.TYPE = 405;
    Df.TYPE = 1605;
    Ef.TYPE = 1405;
    Ff.TYPE = 1505;
    (function() {
        rg.Kr = Array(256);
        let a = 0;
        for (; 256 > a; ) {
            let b = a++;
            rg.Kr[b] = Ec.BK(b)
        }
        return null
    }
    )(this);
    var Mh = "#000000";
    Jf.TYPE = 1305;
    ri.JF = -1;
    Kf.Ix = [1, 1, 2, 2, 4];
    Ub.kC = new Float32Array(16);
    ld.vK = [5120, 5121, 5122, 5123, 5126];
    yb.Do = [0, 1, 774, 775, 770, 771, 772, 773];
    yb.cJ = [512, 513, 514, 515, 516, 517, 518, 519];
    Of.TYPE = 2005;
    Pf.TYPE = 1905;
    Qf.TYPE = 805;
    Ic.TH = [[0, 1, 1, 1, 0, 0, 1, 0], [1, 1, 0, 1, 1, 0, 0, 0]];
    xb.TYPE = 102;
    yc.ld = new F(0,0,0,1);
    yc.TYPE = 302;
    Rf.TYPE = 402;
    ce.TYPE = 202;
    de.TYPE = 502;
    dc.next = 0;
    Ka.count = 0;
    Ka.aJ = 202;
    Ka.bJ = 0;
    Ka.TYPE = 101;
    Ta.count = 0;
    Ta.TYPE = 201;
    Vf.TYPE = 601;
    wc.next = 0;
    Wf.TYPE = 501;
    pb.count = 0;
    pb.TYPE = 301;
    zc.TYPE = 401;
    Ea.kv = new ac;
    Ea.uO = new ac;
    nb.count = 0;
    nb.TYPE = 104;
    A.TYPE = 304;
    S.TYPE = 204;
    wa.TYPE = 404;
    xc.dD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    xc.Uv = Qa.lA(xc.dD);
    nd.ut = new DataView(new ArrayBuffer(8));
    var Li = 1E-6
      , ad = 57.29577951308232
      , Fa = .0174532925199432
      , jc = 3.141592653589793
      , si = 1.5707963267948966
      , ui = 6.283185307179586
      , qa = Infinity
      , ra = -Infinity
      , od = 2147483647
      , ee = 3.4E38
      , fe = -3.4E38;
    Vb.ro = -32768;
    var W = new dg
      , Ai = k.Oa(k.qH, 0, 10, 25)
      , Uh = k.pH
      , Bi = [0, 5, 6, 7, 8];
    Qc.yO = [k.sH, k.tH, k.uH, k.vH];
    Xa.Ir = 784;
    Xa.ew = Xa.Ir;
    Xa.current = new t(0,Xa.Ir);
    Fc.Hx = 0;
    pd.HD = "0123456789abcdef".split("");
    l.Sa();
    l.Gx = "video/outro_portrait.mp4:606240 video/outro_landscape.mp4:707037 video/intro_portrait.mp4:254354 video/intro_landscape.mp4:364300 strings.json:42459 menu/ui.png:300339 menu/ui.json:15147 menu/ui.avif:101487 menu/shadow.png:15280 menu/shadow.avif:2633 menu/seasons.png:153688 menu/seasons.json:1527 menu/seasons.avif:34025 menu/season3.png:231313 menu/season3.json:3097 menu/season3.avif:39252 menu/season2.png:231231 menu/season2.json:2700 menu/season2.avif:35274 menu/season1.png:250245 menu/season1.json:2699 menu/season1.avif:35761 menu/salute.png:89882 menu/salute.json:11190 menu/salute.avif:78563 menu/cut.png:63004 menu/cut.json:1104 menu/cut.avif:14932 menu/bg2.png:247796 menu/bg2.avif:83887 menu/bg.jpg:90340 loader_bg.jpg:22263 loader.png:16984 loader.dat:440 loader.avif:13186 lang/font-ru.png:66118 lang/font-ru.dat:5849 lang/font-ru.avif:50788 lang/font-nl.png:48803 lang/font-nl.dat:5569 lang/font-nl.avif:35766 lang/font-ko.png:154529 lang/font-ko.dat:13729 lang/font-ko.avif:114434 lang/font-ja.png:198378 lang/font-ja.dat:20199 lang/font-ja.avif:157855 lang/font-it.png:48543 lang/font-it.dat:5509 lang/font-it.avif:36329 lang/font-fr.png:49522 lang/font-fr.dat:5649 lang/font-fr.avif:37314 lang/font-es.png:50611 lang/font-es.dat:5709 lang/font-es.avif:38186 lang/font-en.png:48150 lang/font-en.dat:5589 lang/font-en.avif:35953 lang/font-de.png:51353 lang/font-de.dat:5689 lang/font-de.avif:38537 lang/font-br.png:52805 lang/font-br.dat:5849 lang/font-br.avif:40694 game/tut.png:27759 game/tut.json:2291 game/tut.avif:8244 game/obj_vinyl.png:105044 game/obj_vinyl.json:1520 game/obj_vinyl.avif:14661 game/obj_transporter.png:1535 game/obj_transporter.json:1841 game/obj_transporter.avif:1159 game/obj_steam.png:21885 game/obj_steam.json:7377 game/obj_steam.avif:13073 game/obj_star.png:347425 game/obj_star.json:20213 game/obj_star.avif:140409 game/obj_spikes.png:17960 game/obj_spikes.json:1080 game/obj_spikes.avif:10490 game/obj_spider.png:24082 game/obj_spider.json:2865 game/obj_spider.avif:12205 game/obj_sock.png:35190 game/obj_sock.json:1296 game/obj_sock.avif:7669 game/obj_pump.png:29141 game/obj_pump.json:2082 game/obj_pump.avif:9587 game/obj_lighter.png:56932 game/obj_lighter.json:8864 game/obj_lighter.avif:17301 game/obj_lantern.png:35359 game/obj_lantern.json:1538 game/obj_lantern.avif:10633 game/obj_hook.png:37297 game/obj_hook.json:3470 game/obj_hook.avif:15050 game/obj_gravity.png:14510 game/obj_gravity.json:728 game/obj_gravity.avif:4457 game/obj_ghost.png:12807 game/obj_ghost.json:1708 game/obj_ghost.avif:5544 game/obj_gap.png:47790 game/obj_gap.json:4895 game/obj_gap.avif:11868 game/obj_electro.png:30475 game/obj_electro.json:1296 game/obj_electro.avif:19955 game/obj_candy2.png:220109 game/obj_candy2.json:5411 game/obj_candy2.avif:38778 game/obj_candy1.png:242851 game/obj_candy1.json:5423 game/obj_candy1.avif:43390 game/obj_candy0.png:211894 game/obj_candy0.json:5408 game/obj_candy0.avif:39572 game/obj_bubble.png:104972 game/obj_bubble.json:6346 game/obj_bubble.avif:52076 game/obj_bouncer.png:42679 game/obj_bouncer.json:2308 game/obj_bouncer.avif:11241 game/obj_blades.png:26077 game/obj_blades.json:1871 game/obj_blades.avif:14498 game/obj_bee.png:8439 game/obj_bee.json:1294 game/obj_bee.avif:4060 game/char3.png:57662 game/char3.json:9011 game/char3.avif:27355 game/char2.png:364841 game/char2.json:18905 game/char2.avif:238826 game/char1.png:325294 game/char1.json:17377 game/char1.avif:222007 box17/support.png:20935 box17/support.avif:3584 box17/maps.json:31738 box17/cover.png:94067 box17/cover.json:721 box17/cover.avif:11863 box17/bg.jpg:192584 box16/support.png:20889 box16/support.avif:4603 box16/maps.json:33960 box16/cover.png:111821 box16/cover.json:721 box16/cover.avif:8733 box16/bg.jpg:166366 box15/support.png:19248 box15/support.avif:2873 box15/maps.json:26577 box15/cover.png:121680 box15/cover.json:721 box15/cover.avif:3647 box15/bg.jpg:80627 box14/support.png:22796 box14/support.avif:4530 box14/maps.json:22048 box14/cover.png:117995 box14/cover.json:721 box14/cover.avif:17531 box14/bg.jpg:193042 box13/support.png:14277 box13/support.avif:3572 box13/maps.json:22055 box13/cover.png:102039 box13/cover.json:721 box13/cover.avif:10244 box13/bg.jpg:130490 box12/support.png:27855 box12/support.avif:3644 box12/maps.json:26390 box12/cover.png:163397 box12/cover.json:721 box12/cover.avif:12415 box12/bg.jpg:161968 box11/support.png:20124 box11/support.avif:5281 box11/maps.json:27676 box11/cover.png:147733 box11/cover.json:721 box11/cover.avif:35474 box11/bg.jpg:318137 box10/support.png:10900 box10/support.avif:3824 box10/maps.json:28064 box10/cover.png:142967 box10/cover.json:721 box10/cover.avif:33681 box10/bg.jpg:291192 box09/support.png:18151 box09/support.avif:4523 box09/maps.json:26658 box09/cover.png:127769 box09/cover.json:721 box09/cover.avif:28967 box09/bg.jpg:290591 box08/support.png:17382 box08/support.avif:4089 box08/maps.json:29818 box08/earth.png:37193 box08/earth.avif:4882 box08/cover.png:154083 box08/cover.json:721 box08/cover.avif:31701 box08/bg.jpg:261876 box07/support.png:17646 box07/support.avif:4297 box07/maps.json:28052 box07/cover.png:176165 box07/cover.json:721 box07/cover.avif:39919 box07/bg.jpg:276708 box06/support.png:24856 box06/support.avif:3389 box06/maps.json:23078 box06/cover.png:191492 box06/cover.json:721 box06/cover.avif:45432 box06/bg.jpg:302842 box05/support.png:19451 box05/support.avif:5872 box05/maps.json:27415 box05/cover.png:112297 box05/cover.json:721 box05/cover.avif:57943 box05/bg.jpg:327075 box04/support.png:23898 box04/support.avif:5691 box04/maps.json:28162 box04/cover.png:174462 box04/cover.json:721 box04/cover.avif:37968 box04/bg.jpg:297536 box03/support.png:21077 box03/support.avif:4881 box03/maps.json:27927 box03/cover.png:144475 box03/cover.json:721 box03/cover.avif:32034 box03/bg.jpg:271789 box02/support.png:23502 box02/support.avif:5663 box02/maps.json:27937 box02/cover.png:141431 box02/cover.json:721 box02/cover.avif:26487 box02/bg.jpg:292429 box01/support.png:12953 box01/support.avif:4676 box01/maps.json:53148 box01/cover.png:178457 box01/cover.json:721 box01/cover.avif:40419 box01/bg.jpg:224627 audio/ogg/sound.ogg:202490 audio/ogg/menu_music.ogg:431450 audio/ogg/game_music.ogg:509573 audio/aac/sound.aac:262358 audio/aac/menu_music.aac:264130 audio/aac/game_music.aac:286172".split(" ");
    l.io = "res";
    l.MAX = 168;
    l.NM = [22, 23, 24];
    l.de = "video/outro_portrait.mp4 video/outro_landscape.mp4 video/intro_portrait.mp4 video/intro_landscape.mp4 strings.json menu/ui.{image} menu/ui.json menu/shadow.{image} menu/seasons.{image} menu/seasons.json menu/season3.{image} menu/season3.json menu/season2.{image} menu/season2.json menu/season1.{image} menu/season1.json menu/salute.{image} menu/salute.json menu/cut.{image} menu/cut.json menu/bg2.{image} menu/bg.jpg loader_bg.jpg loader.{image} loader.dat lang/font{language}.{image} lang/font{language}.dat game/tut.{image} game/tut.json game/obj_vinyl.{image} game/obj_vinyl.json game/obj_transporter.{image} game/obj_transporter.json game/obj_steam.{image} game/obj_steam.json game/obj_star.{image} game/obj_star.json game/obj_spikes.{image} game/obj_spikes.json game/obj_spider.{image} game/obj_spider.json game/obj_sock.{image} game/obj_sock.json game/obj_pump.{image} game/obj_pump.json game/obj_lighter.{image} game/obj_lighter.json game/obj_lantern.{image} game/obj_lantern.json game/obj_hook.{image} game/obj_hook.json game/obj_gravity.{image} game/obj_gravity.json game/obj_ghost.{image} game/obj_ghost.json game/obj_gap.{image} game/obj_gap.json game/obj_electro.{image} game/obj_electro.json game/obj_candy2.{image} game/obj_candy2.json game/obj_candy1.{image} game/obj_candy1.json game/obj_candy0.{image} game/obj_candy0.json game/obj_bubble.{image} game/obj_bubble.json game/obj_bouncer.{image} game/obj_bouncer.json game/obj_blades.{image} game/obj_blades.json game/obj_bee.{image} game/obj_bee.json game/char3.{image} game/char3.json game/char2.{image} game/char2.json game/char1.{image} game/char1.json box17/support.{image} box17/maps.json box17/cover.{image} box17/cover.json box17/bg.jpg box16/support.{image} box16/maps.json box16/cover.{image} box16/cover.json box16/bg.jpg box15/support.{image} box15/maps.json box15/cover.{image} box15/cover.json box15/bg.jpg box14/support.{image} box14/maps.json box14/cover.{image} box14/cover.json box14/bg.jpg box13/support.{image} box13/maps.json box13/cover.{image} box13/cover.json box13/bg.jpg box12/support.{image} box12/maps.json box12/cover.{image} box12/cover.json box12/bg.jpg box11/support.{image} box11/maps.json box11/cover.{image} box11/cover.json box11/bg.jpg box10/support.{image} box10/maps.json box10/cover.{image} box10/cover.json box10/bg.jpg box09/support.{image} box09/maps.json box09/cover.{image} box09/cover.json box09/bg.jpg box08/support.{image} box08/maps.json box08/earth.{image} box08/cover.{image} box08/cover.json box08/bg.jpg box07/support.{image} box07/maps.json box07/cover.{image} box07/cover.json box07/bg.jpg box06/support.{image} box06/maps.json box06/cover.{image} box06/cover.json box06/bg.jpg box05/support.{image} box05/maps.json box05/cover.{image} box05/cover.json box05/bg.jpg box04/support.{image} box04/maps.json box04/cover.{image} box04/cover.json box04/bg.jpg box03/support.{image} box03/maps.json box03/cover.{image} box03/cover.json box03/bg.jpg box02/support.{image} box02/maps.json box02/cover.{image} box02/cover.json box02/bg.jpg box01/support.{image} box01/maps.json box01/cover.{image} box01/cover.json box01/bg.jpg audio/{audio}/sound.{audio} audio/{audio}/menu_music.{audio} audio/{audio}/game_music.{audio}".split(" ");
    l.sM = [];
    l.EK = [];
    l.LL = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    l.Qw = 0;
    l.Pw = 1;
    l.Xr = 2;
    l.Wr = 3;
    l.Zg = 4;
    l.Ie = 5;
    l.gg = 6;
    l.Wg = 7;
    l.Or = 8;
    l.ND = 9;
    l.Nr = 10;
    l.MD = 11;
    l.Mr = 12;
    l.LD = 13;
    l.Lr = 14;
    l.KD = 15;
    l.mo = 16;
    l.JD = 17;
    l.lo = 18;
    l.mw = 19;
    l.ko = 20;
    l.fg = 21;
    l.kw = 22;
    l.Jr = 23;
    l.Dd = 25;
    l.sf = 26;
    l.jw = 27;
    l.GD = 28;
    l.Nl = 29;
    l.FD = 30;
    l.Ml = 31;
    l.ED = 32;
    l.Ll = 33;
    l.DD = 34;
    l.iw = 35;
    l.CD = 36;
    l.Kl = 37;
    l.BD = 38;
    l.Jl = 39;
    l.AD = 40;
    l.Il = 41;
    l.zD = 42;
    l.Hl = 43;
    l.yD = 44;
    l.hi = 45;
    l.xD = 46;
    l.Gl = 47;
    l.wD = 48;
    l.hw = 49;
    l.vD = 50;
    l.gi = 51;
    l.uD = 52;
    l.Hr = 53;
    l.tD = 54;
    l.Fl = 55;
    l.sD = 56;
    l.El = 57;
    l.rD = 58;
    l.Dl = 65;
    l.qD = 66;
    l.Cl = 67;
    l.pD = 68;
    l.Gr = 69;
    l.oD = 70;
    l.Fr = 71;
    l.nD = 72;
    l.Bl = 73;
    l.mD = 74;
    l.gw = 75;
    l.lD = 76;
    l.fw = 77;
    l.kD = 78;
    l.Sv = 126;
    l.eg = 165;
    l.dg = 166;
    l.Al = 167;
    J.Id = new Ud;
    Bc.ty = !0;
    Kh.ID = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215, 33554431, 67108863, 134217727, 268435455, 536870911, 1073741823, 2147483647, -1]
}
)("undefined" != typeof exports ? exports : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this, "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);
//# sourceMappingURL=ctrr.js.map
