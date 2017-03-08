(function() {
    function t(t, e) {
        if (t !== e) {
            var n = null === t,
                r = t === w,
                i = t === t,
                o = null === e,
                a = e === w,
                s = e === e;
            if (t > e && !o || !i || n && !a && s || r && s) return 1;
            if (e > t && !n || !s || o && !r && i || a && i) return -1
        }
        return 0
    }

    function e(t, e, n) {
        for (var r = t.length, i = n ? r : -1; n ? i-- : ++i < r;)
            if (e(t[i], i, t)) return i;
        return -1
    }

    function n(t, e, n) {
        if (e !== e) return p(t, n);
        for (var r = n - 1, i = t.length; ++r < i;)
            if (t[r] === e) return r;
        return -1
    }

    function r(t) {
        return "function" == typeof t || !1
    }

    function i(t) {
        return null == t ? "" : t + ""
    }

    function o(t, e) {
        for (var n = -1, r = t.length; ++n < r && e.indexOf(t.charAt(n)) > -1;);
        return n
    }

    function a(t, e) {
        for (var n = t.length; n-- && e.indexOf(t.charAt(n)) > -1;);
        return n
    }

    function s(e, n) {
        return t(e.criteria, n.criteria) || e.index - n.index
    }

    function u(e, n, r) {
        for (var i = -1, o = e.criteria, a = n.criteria, s = o.length, u = r.length; ++i < s;) {
            var c = t(o[i], a[i]);
            if (c) {
                if (i >= u) return c;
                var l = r[i];
                return c * ("asc" === l || l === !0 ? 1 : -1)
            }
        }
        return e.index - n.index
    }

    function c(t) {
        return qt[t]
    }

    function l(t) {
        return Ht[t]
    }

    function f(t, e, n) {
        return e ? t = Ut[t] : n && (t = Wt[t]), "\\" + t
    }

    function h(t) {
        return "\\" + Wt[t]
    }

    function p(t, e, n) {
        for (var r = t.length, i = e + (n ? 0 : -1); n ? i-- : ++i < r;) {
            var o = t[i];
            if (o !== o) return i
        }
        return -1
    }

    function d(t) {
        return !!t && "object" == typeof t
    }

    function g(t) {
        return 160 >= t && t >= 9 && 13 >= t || 32 == t || 160 == t || 5760 == t || 6158 == t || t >= 8192 && (8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
    }

    function v(t, e) {
        for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) t[n] === e && (t[n] = q, o[++i] = n);
        return o
    }

    function m(t, e) {
        for (var n, r = -1, i = t.length, o = -1, a = []; ++r < i;) {
            var s = t[r],
                u = e ? e(s, r, t) : s;
            r && n === u || (n = u, a[++o] = s)
        }
        return a
    }

    function y(t) {
        for (var e = -1, n = t.length; ++e < n && g(t.charCodeAt(e)););
        return e
    }

    function $(t) {
        for (var e = t.length; e-- && g(t.charCodeAt(e)););
        return e
    }

    function x(t) {
        return Bt[t]
    }

    function b(g) {
        function X(t) {
            if (d(t) && !Ts(t) && !(t instanceof qt)) {
                if (t instanceof tt) return t;
                if (ea.call(t, "__chain__") && ea.call(t, "__wrapped__")) return pr(t)
            }
            return new tt(t)
        }

        function Q() {}

        function tt(t, e, n) {
            this.__wrapped__ = t, this.__actions__ = n || [], this.__chain__ = !!e
        }

        function qt(t) {
            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = _a, this.__views__ = []
        }

        function Ht() {
            var t = new qt(this.__wrapped__);
            return t.__actions__ = ne(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ne(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ne(this.__views__), t
        }

        function Bt() {
            if (this.__filtered__) {
                var t = new qt(this);
                t.__dir__ = -1, t.__filtered__ = !0
            } else t = this.clone(), t.__dir__ *= -1;
            return t
        }

        function zt() {
            var t = this.__wrapped__.value(),
                e = this.__dir__,
                n = Ts(t),
                r = 0 > e,
                i = n ? t.length : 0,
                o = Wn(0, i, this.__views__),
                a = o.start,
                s = o.end,
                u = s - a,
                c = r ? s : a - 1,
                l = this.__iteratees__,
                f = l.length,
                h = 0,
                p = Sa(u, this.__takeCount__);
            if (!n || L > i || i == u && p == u) return nn(t, this.__actions__);
            var d = [];
            t: for (; u-- && p > h;) {
                c += e;
                for (var g = -1, v = t[c]; ++g < f;) {
                    var m = l[g],
                        y = m.iteratee,
                        $ = m.type,
                        x = y(v);
                    if ($ == R) v = x;
                    else if (!x) {
                        if ($ == I) continue t;
                        break t
                    }
                }
                d[h++] = v
            }
            return d
        }

        function Ut() {
            this.__data__ = {}
        }

        function Wt(t) {
            return this.has(t) && delete this.__data__[t]
        }

        function Gt(t) {
            return "__proto__" == t ? w : this.__data__[t]
        }

        function Xt(t) {
            return "__proto__" != t && ea.call(this.__data__, t)
        }

        function Yt(t, e) {
            return "__proto__" != t && (this.__data__[t] = e), this
        }

        function Kt(t) {
            var e = t ? t.length : 0;
            for (this.data = {
                    hash: ma(null),
                    set: new fa
                }; e--;) this.push(t[e])
        }

        function Jt(t, e) {
            var n = t.data,
                r = "string" == typeof e || Pi(e) ? n.set.has(e) : n.hash[e];
            return r ? 0 : -1
        }

        function Qt(t) {
            var e = this.data;
            "string" == typeof t || Pi(t) ? e.set.add(t) : e.hash[t] = !0
        }

        function ee(t, e) {
            for (var n = -1, r = t.length, i = -1, o = e.length, a = qo(r + o); ++n < r;) a[n] = t[n];
            for (; ++i < o;) a[n++] = e[i];
            return a
        }

        function ne(t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = qo(r)); ++n < r;) e[n] = t[n];
            return e
        }

        function re(t, e) {
            for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1;);
            return t
        }

        function ie(t, e) {
            for (var n = t.length; n-- && e(t[n], n, t) !== !1;);
            return t
        }

        function oe(t, e) {
            for (var n = -1, r = t.length; ++n < r;)
                if (!e(t[n], n, t)) return !1;
            return !0
        }

        function ae(t, e, n, r) {
            for (var i = -1, o = t.length, a = r, s = a; ++i < o;) {
                var u = t[i],
                    c = +e(u);
                n(c, a) && (a = c, s = u)
            }
            return s
        }

        function se(t, e) {
            for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) {
                var a = t[n];
                e(a, n, t) && (o[++i] = a)
            }
            return o
        }

        function ue(t, e) {
            for (var n = -1, r = t.length, i = qo(r); ++n < r;) i[n] = e(t[n], n, t);
            return i
        }

        function ce(t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
            return t
        }

        function le(t, e, n, r) {
            var i = -1,
                o = t.length;
            for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
            return n
        }

        function fe(t, e, n, r) {
            var i = t.length;
            for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
            return n
        }

        function he(t, e) {
            for (var n = -1, r = t.length; ++n < r;)
                if (e(t[n], n, t)) return !0;
            return !1
        }

        function pe(t, e) {
            for (var n = t.length, r = 0; n--;) r += +e(t[n]) || 0;
            return r
        }

        function de(t, e) {
            return t === w ? e : t
        }

        function ge(t, e, n, r) {
            return t !== w && ea.call(r, n) ? t : e
        }

        function ve(t, e, n) {
            for (var r = -1, i = Vs(e), o = i.length; ++r < o;) {
                var a = i[r],
                    s = t[a],
                    u = n(s, e[a], a, t, e);
                (u === u ? u === s : s !== s) && (s !== w || a in t) || (t[a] = u)
            }
            return t
        }

        function me(t, e) {
            return null == e ? t : $e(e, Vs(e), t)
        }

        function ye(t, e) {
            for (var n = -1, r = null == t, i = !r && Jn(t), o = i ? t.length : 0, a = e.length, s = qo(a); ++n < a;) {
                var u = e[n];
                i ? s[n] = Qn(u, o) ? t[u] : w : s[n] = r ? w : t[u]
            }
            return s
        }

        function $e(t, e, n) {
            n || (n = {});
            for (var r = -1, i = e.length; ++r < i;) {
                var o = e[r];
                n[o] = t[o]
            }
            return n
        }

        function xe(t, e, n) {
            var r = typeof t;
            return "function" == r ? e === w ? t : an(t, e, n) : null == t ? _o : "object" == r ? Re(t) : e === w ? Po(t) : Ve(t, e)
        }

        function be(t, e, n, r, i, o, a) {
            var s;
            if (n && (s = i ? n(t, r, i) : n(t)), s !== w) return s;
            if (!Pi(t)) return t;
            var u = Ts(t);
            if (u) {
                if (s = Gn(t), !e) return ne(t, s)
            } else {
                var c = ra.call(t),
                    l = c == G;
                if (c != K && c != H && (!l || i)) return Vt[c] ? Yn(t, c, e) : i ? t : {};
                if (s = Xn(l ? {} : t), !e) return me(s, t)
            }
            o || (o = []), a || (a = []);
            for (var f = o.length; f--;)
                if (o[f] == t) return a[f];
            return o.push(t), a.push(s), (u ? re : je)(t, function(r, i) {
                s[i] = be(r, e, n, i, t, o, a)
            }), s
        }

        function we(t, e, n) {
            if ("function" != typeof t) throw new Ko(V);
            return ha(function() {
                t.apply(w, n)
            }, e)
        }

        function Se(t, e) {
            var r = t ? t.length : 0,
                i = [];
            if (!r) return i;
            var o = -1,
                a = Bn(),
                s = a === n,
                u = s && e.length >= L ? gn(e) : null,
                c = e.length;
            u && (a = Jt, s = !1, e = u);
            t: for (; ++o < r;) {
                var l = t[o];
                if (s && l === l) {
                    for (var f = c; f--;)
                        if (e[f] === l) continue t;
                    i.push(l)
                } else a(e, l, 0) < 0 && i.push(l)
            }
            return i
        }

        function Ce(t, e) {
            var n = !0;
            return Fa(t, function(t, r, i) {
                return n = !!e(t, r, i)
            }), n
        }

        function Ee(t, e, n, r) {
            var i = r,
                o = i;
            return Fa(t, function(t, a, s) {
                var u = +e(t, a, s);
                (n(u, i) || u === r && u === o) && (i = u, o = t)
            }), o
        }

        function ke(t, e, n, r) {
            var i = t.length;
            for (n = null == n ? 0 : +n || 0, 0 > n && (n = -n > i ? 0 : i + n), r = r === w || r > i ? i : +r || 0, 0 > r && (r += i), i = n > r ? 0 : r >>> 0, n >>>= 0; i > n;) t[n++] = e;
            return t
        }

        function Ae(t, e) {
            var n = [];
            return Fa(t, function(t, r, i) {
                e(t, r, i) && n.push(t)
            }), n
        }

        function _e(t, e, n, r) {
            var i;
            return n(t, function(t, n, o) {
                return e(t, n, o) ? (i = r ? n : t, !1) : void 0
            }), i
        }

        function Te(t, e, n, r) {
            r || (r = []);
            for (var i = -1, o = t.length; ++i < o;) {
                var a = t[i];
                d(a) && Jn(a) && (n || Ts(a) || Ei(a)) ? e ? Te(a, e, n, r) : ce(r, a) : n || (r[r.length] = a)
            }
            return r
        }

        function Ne(t, e) {
            return Ia(t, e, to)
        }

        function je(t, e) {
            return Ia(t, e, Vs)
        }

        function Oe(t, e) {
            return Ra(t, e, Vs)
        }

        function Me(t, e) {
            for (var n = -1, r = e.length, i = -1, o = []; ++n < r;) {
                var a = e[n];
                Mi(t[a]) && (o[++i] = a)
            }
            return o
        }

        function Pe(t, e, n) {
            if (null != t) {
                n !== w && n in fr(t) && (e = [n]);
                for (var r = 0, i = e.length; null != t && i > r;) t = t[e[r++]];
                return r && r == i ? t : w
            }
        }

        function De(t, e, n, r, i, o) {
            return t === e ? !0 : null == t || null == e || !Pi(t) && !d(e) ? t !== t && e !== e : Fe(t, e, De, n, r, i, o)
        }

        function Fe(t, e, n, r, i, o, a) {
            var s = Ts(t),
                u = Ts(e),
                c = B,
                l = B;
            s || (c = ra.call(t), c == H ? c = K : c != K && (s = Bi(t))), u || (l = ra.call(e), l == H ? l = K : l != K && (u = Bi(e)));
            var f = c == K,
                h = l == K,
                p = c == l;
            if (p && !s && !f) return Rn(t, e, c);
            if (!i) {
                var d = f && ea.call(t, "__wrapped__"),
                    g = h && ea.call(e, "__wrapped__");
                if (d || g) return n(d ? t.value() : t, g ? e.value() : e, r, i, o, a)
            }
            if (!p) return !1;
            o || (o = []), a || (a = []);
            for (var v = o.length; v--;)
                if (o[v] == t) return a[v] == e;
            o.push(t), a.push(e);
            var m = (s ? In : Vn)(t, e, n, r, i, o, a);
            return o.pop(), a.pop(), m
        }

        function Le(t, e, n) {
            var r = e.length,
                i = r,
                o = !n;
            if (null == t) return !i;
            for (t = fr(t); r--;) {
                var a = e[r];
                if (o && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
            }
            for (; ++r < i;) {
                a = e[r];
                var s = a[0],
                    u = t[s],
                    c = a[1];
                if (o && a[2]) {
                    if (u === w && !(s in t)) return !1
                } else {
                    var l = n ? n(u, c, s) : w;
                    if (!(l === w ? De(c, u, n, !0) : l)) return !1
                }
            }
            return !0
        }

        function Ie(t, e) {
            var n = -1,
                r = Jn(t) ? qo(t.length) : [];
            return Fa(t, function(t, i, o) {
                r[++n] = e(t, i, o)
            }), r
        }

        function Re(t) {
            var e = zn(t);
            if (1 == e.length && e[0][2]) {
                var n = e[0][0],
                    r = e[0][1];
                return function(t) {
                    return null == t ? !1 : t[n] === r && (r !== w || n in fr(t))
                }
            }
            return function(t) {
                return Le(t, e)
            }
        }

        function Ve(t, e) {
            var n = Ts(t),
                r = tr(t) && rr(e),
                i = t + "";
            return t = hr(t),
                function(o) {
                    if (null == o) return !1;
                    var a = i;
                    if (o = fr(o), (n || !r) && !(a in o)) {
                        if (o = 1 == t.length ? o : Pe(o, Xe(t, 0, -1)), null == o) return !1;
                        a = kr(t), o = fr(o)
                    }
                    return o[a] === e ? e !== w || a in o : De(e, o[a], w, !0)
                }
        }

        function qe(t, e, n, r, i) {
            if (!Pi(t)) return t;
            var o = Jn(e) && (Ts(e) || Bi(e)),
                a = o ? w : Vs(e);
            return re(a || e, function(s, u) {
                if (a && (u = s, s = e[u]), d(s)) r || (r = []), i || (i = []), He(t, e, u, qe, n, r, i);
                else {
                    var c = t[u],
                        l = n ? n(c, s, u, t, e) : w,
                        f = l === w;
                    f && (l = s), l === w && (!o || u in t) || !f && (l === l ? l === c : c !== c) || (t[u] = l)
                }
            }), t
        }

        function He(t, e, n, r, i, o, a) {
            for (var s = o.length, u = e[n]; s--;)
                if (o[s] == u) return void(t[n] = a[s]);
            var c = t[n],
                l = i ? i(c, u, n, t, e) : w,
                f = l === w;
            f && (l = u, Jn(u) && (Ts(u) || Bi(u)) ? l = Ts(c) ? c : Jn(c) ? ne(c) : [] : Vi(u) || Ei(u) ? l = Ei(c) ? Xi(c) : Vi(c) ? c : {} : f = !1), o.push(u), a.push(l), f ? t[n] = r(l, u, i, o, a) : (l === l ? l !== c : c === c) && (t[n] = l)
        }

        function Be(t) {
            return function(e) {
                return null == e ? w : e[t]
            }
        }

        function ze(t) {
            var e = t + "";
            return t = hr(t),
                function(n) {
                    return Pe(n, t, e)
                }
        }

        function Ue(t, e) {
            for (var n = t ? e.length : 0; n--;) {
                var r = e[n];
                if (r != i && Qn(r)) {
                    var i = r;
                    pa.call(t, r, 1)
                }
            }
            return t
        }

        function We(t, e) {
            return t + ya(ka() * (e - t + 1))
        }

        function Ge(t, e, n, r, i) {
            return i(t, function(t, i, o) {
                n = r ? (r = !1, t) : e(n, t, i, o)
            }), n
        }

        function Xe(t, e, n) {
            var r = -1,
                i = t.length;
            e = null == e ? 0 : +e || 0, 0 > e && (e = -e > i ? 0 : i + e), n = n === w || n > i ? i : +n || 0, 0 > n && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
            for (var o = qo(i); ++r < i;) o[r] = t[r + e];
            return o
        }

        function Ye(t, e) {
            var n;
            return Fa(t, function(t, r, i) {
                return n = e(t, r, i), !n
            }), !!n
        }

        function Ke(t, e) {
            var n = t.length;
            for (t.sort(e); n--;) t[n] = t[n].value;
            return t
        }

        function Je(t, e, n) {
            var r = qn(),
                i = -1;
            e = ue(e, function(t) {
                return r(t)
            });
            var o = Ie(t, function(t) {
                var n = ue(e, function(e) {
                    return e(t)
                });
                return {
                    criteria: n,
                    index: ++i,
                    value: t
                }
            });
            return Ke(o, function(t, e) {
                return u(t, e, n)
            })
        }

        function Qe(t, e) {
            var n = 0;
            return Fa(t, function(t, r, i) {
                n += +e(t, r, i) || 0
            }), n
        }

        function Ze(t, e) {
            var r = -1,
                i = Bn(),
                o = t.length,
                a = i === n,
                s = a && o >= L,
                u = s ? gn() : null,
                c = [];
            u ? (i = Jt, a = !1) : (s = !1, u = e ? [] : c);
            t: for (; ++r < o;) {
                var l = t[r],
                    f = e ? e(l, r, t) : l;
                if (a && l === l) {
                    for (var h = u.length; h--;)
                        if (u[h] === f) continue t;
                    e && u.push(f), c.push(l)
                } else i(u, f, 0) < 0 && ((e || s) && u.push(f), c.push(l))
            }
            return c
        }

        function tn(t, e) {
            for (var n = -1, r = e.length, i = qo(r); ++n < r;) i[n] = t[e[n]];
            return i
        }

        function en(t, e, n, r) {
            for (var i = t.length, o = r ? i : -1;
                (r ? o-- : ++o < i) && e(t[o], o, t););
            return n ? Xe(t, r ? 0 : o, r ? o + 1 : i) : Xe(t, r ? o + 1 : 0, r ? i : o)
        }

        function nn(t, e) {
            var n = t;
            n instanceof qt && (n = n.value());
            for (var r = -1, i = e.length; ++r < i;) {
                var o = e[r];
                n = o.func.apply(o.thisArg, ce([n], o.args))
            }
            return n
        }

        function rn(t, e, n) {
            var r = 0,
                i = t ? t.length : r;
            if ("number" == typeof e && e === e && ja >= i) {
                for (; i > r;) {
                    var o = r + i >>> 1,
                        a = t[o];
                    (n ? e >= a : e > a) && null !== a ? r = o + 1 : i = o
                }
                return i
            }
            return on(t, e, _o, n)
        }

        function on(t, e, n, r) {
            e = n(e);
            for (var i = 0, o = t ? t.length : 0, a = e !== e, s = null === e, u = e === w; o > i;) {
                var c = ya((i + o) / 2),
                    l = n(t[c]),
                    f = l !== w,
                    h = l === l;
                if (a) var p = h || r;
                else p = s ? h && f && (r || null != l) : u ? h && (r || f) : null == l ? !1 : r ? e >= l : e > l;
                p ? i = c + 1 : o = c
            }
            return Sa(o, Na)
        }

        function an(t, e, n) {
            if ("function" != typeof t) return _o;
            if (e === w) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 3:
                    return function(n, r, i) {
                        return t.call(e, n, r, i)
                    };
                case 4:
                    return function(n, r, i, o) {
                        return t.call(e, n, r, i, o)
                    };
                case 5:
                    return function(n, r, i, o, a) {
                        return t.call(e, n, r, i, o, a)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }

        function sn(t) {
            var e = new aa(t.byteLength),
                n = new da(e);
            return n.set(new da(t)), e
        }

        function un(t, e, n) {
            for (var r = n.length, i = -1, o = wa(t.length - r, 0), a = -1, s = e.length, u = qo(s + o); ++a < s;) u[a] = e[a];
            for (; ++i < r;) u[n[i]] = t[i];
            for (; o--;) u[a++] = t[i++];
            return u
        }

        function cn(t, e, n) {
            for (var r = -1, i = n.length, o = -1, a = wa(t.length - i, 0), s = -1, u = e.length, c = qo(a + u); ++o < a;) c[o] = t[o];
            for (var l = o; ++s < u;) c[l + s] = e[s];
            for (; ++r < i;) c[l + n[r]] = t[o++];
            return c
        }

        function ln(t, e) {
            return function(n, r, i) {
                var o = e ? e() : {};
                if (r = qn(r, i, 3), Ts(n))
                    for (var a = -1, s = n.length; ++a < s;) {
                        var u = n[a];
                        t(o, u, r(u, a, n), n)
                    } else Fa(n, function(e, n, i) {
                        t(o, e, r(e, n, i), i)
                    });
                return o
            }
        }

        function fn(t) {
            return mi(function(e, n) {
                var r = -1,
                    i = null == e ? 0 : n.length,
                    o = i > 2 ? n[i - 2] : w,
                    a = i > 2 ? n[2] : w,
                    s = i > 1 ? n[i - 1] : w;
                for ("function" == typeof o ? (o = an(o, s, 5), i -= 2) : (o = "function" == typeof s ? s : w, i -= o ? 1 : 0), a && Zn(n[0], n[1], a) && (o = 3 > i ? w : o, i = 1); ++r < i;) {
                    var u = n[r];
                    u && t(e, u, o)
                }
                return e
            })
        }

        function hn(t, e) {
            return function(n, r) {
                var i = n ? Ha(n) : 0;
                if (!nr(i)) return t(n, r);
                for (var o = e ? i : -1, a = fr(n);
                    (e ? o-- : ++o < i) && r(a[o], o, a) !== !1;);
                return n
            }
        }

        function pn(t) {
            return function(e, n, r) {
                for (var i = fr(e), o = r(e), a = o.length, s = t ? a : -1; t ? s-- : ++s < a;) {
                    var u = o[s];
                    if (n(i[u], u, i) === !1) break
                }
                return e
            }
        }

        function dn(t, e) {
            function n() {
                var i = this && this !== Zt && this instanceof n ? r : t;
                return i.apply(e, arguments)
            }
            var r = mn(t);
            return n
        }

        function gn(t) {
            return ma && fa ? new Kt(t) : null
        }

        function vn(t) {
            return function(e) {
                for (var n = -1, r = Eo(lo(e)), i = r.length, o = ""; ++n < i;) o = t(o, r[n], n);
                return o
            }
        }

        function mn(t) {
            return function() {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3]);
                    case 5:
                        return new t(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                }
                var n = Da(t.prototype),
                    r = t.apply(n, e);
                return Pi(r) ? r : n
            }
        }

        function yn(t) {
            function e(n, r, i) {
                i && Zn(n, r, i) && (r = w);
                var o = Ln(n, t, w, w, w, w, w, r);
                return o.placeholder = e.placeholder, o
            }
            return e
        }

        function $n(t, e) {
            return mi(function(n) {
                var r = n[0];
                return null == r ? r : (n.push(e), t.apply(w, n))
            })
        }

        function xn(t, e) {
            return function(n, r, i) {
                if (i && Zn(n, r, i) && (r = w), r = qn(r, i, 3), 1 == r.length) {
                    n = Ts(n) ? n : lr(n);
                    var o = ae(n, r, t, e);
                    if (!n.length || o !== e) return o
                }
                return Ee(n, r, t, e)
            }
        }

        function bn(t, n) {
            return function(r, i, o) {
                if (i = qn(i, o, 3), Ts(r)) {
                    var a = e(r, i, n);
                    return a > -1 ? r[a] : w
                }
                return _e(r, i, t)
            }
        }

        function wn(t) {
            return function(n, r, i) {
                return n && n.length ? (r = qn(r, i, 3), e(n, r, t)) : -1
            }
        }

        function Sn(t) {
            return function(e, n, r) {
                return n = qn(n, r, 3), _e(e, n, t, !0)
            }
        }

        function Cn(t) {
            return function() {
                for (var e, n = arguments.length, r = t ? n : -1, i = 0, o = qo(n); t ? r-- : ++r < n;) {
                    var a = o[i++] = arguments[r];
                    if ("function" != typeof a) throw new Ko(V);
                    !e && tt.prototype.thru && "wrapper" == Hn(a) && (e = new tt([], !0))
                }
                for (r = e ? -1 : n; ++r < n;) {
                    a = o[r];
                    var s = Hn(a),
                        u = "wrapper" == s ? qa(a) : w;
                    e = u && er(u[0]) && u[1] == (j | A | T | O) && !u[4].length && 1 == u[9] ? e[Hn(u[0])].apply(e, u[3]) : 1 == a.length && er(a) ? e[s]() : e.thru(a)
                }
                return function() {
                    var t = arguments,
                        r = t[0];
                    if (e && 1 == t.length && Ts(r) && r.length >= L) return e.plant(r).value();
                    for (var i = 0, a = n ? o[i].apply(this, t) : r; ++i < n;) a = o[i].call(this, a);
                    return a
                }
            }
        }

        function En(t, e) {
            return function(n, r, i) {
                return "function" == typeof r && i === w && Ts(n) ? t(n, r) : e(n, an(r, i, 3))
            }
        }

        function kn(t) {
            return function(e, n, r) {
                return ("function" != typeof n || r !== w) && (n = an(n, r, 3)), t(e, n, to)
            }
        }

        function An(t) {
            return function(e, n, r) {
                return ("function" != typeof n || r !== w) && (n = an(n, r, 3)), t(e, n)
            }
        }

        function _n(t) {
            return function(e, n, r) {
                var i = {};
                return n = qn(n, r, 3), je(e, function(e, r, o) {
                    var a = n(e, r, o);
                    r = t ? a : r, e = t ? e : a, i[r] = e
                }), i
            }
        }

        function Tn(t) {
            return function(e, n, r) {
                return e = i(e), (t ? e : "") + Mn(e, n, r) + (t ? "" : e)
            }
        }

        function Nn(t) {
            var e = mi(function(n, r) {
                var i = v(r, e.placeholder);
                return Ln(n, t, w, r, i)
            });
            return e
        }

        function jn(t, e) {
            return function(n, r, i, o) {
                var a = arguments.length < 3;
                return "function" == typeof r && o === w && Ts(n) ? t(n, r, i, a) : Ge(n, qn(r, o, 4), i, a, e)
            }
        }

        function On(t, e, n, r, i, o, a, s, u, c) {
            function l() {
                for (var $ = arguments.length, x = $, b = qo($); x--;) b[x] = arguments[x];
                if (r && (b = un(b, r, i)), o && (b = cn(b, o, a)), d || m) {
                    var S = l.placeholder,
                        k = v(b, S);
                    if ($ -= k.length, c > $) {
                        var A = s ? ne(s) : w,
                            _ = wa(c - $, 0),
                            j = d ? k : w,
                            O = d ? w : k,
                            M = d ? b : w,
                            P = d ? w : b;
                        e |= d ? T : N, e &= ~(d ? N : T), g || (e &= ~(C | E));
                        var D = [t, e, n, M, j, P, O, A, u, _],
                            F = On.apply(w, D);
                        return er(t) && Ba(F, D), F.placeholder = S, F
                    }
                }
                var L = h ? n : this,
                    I = p ? L[t] : t;
                return s && (b = ur(b, s)), f && u < b.length && (b.length = u), this && this !== Zt && this instanceof l && (I = y || mn(t)), I.apply(L, b)
            }
            var f = e & j,
                h = e & C,
                p = e & E,
                d = e & A,
                g = e & k,
                m = e & _,
                y = p ? w : mn(t);
            return l
        }

        function Mn(t, e, n) {
            var r = t.length;
            if (e = +e, r >= e || !xa(e)) return "";
            var i = e - r;
            return n = null == n ? " " : n + "", mo(n, va(i / n.length)).slice(0, i)
        }

        function Pn(t, e, n, r) {
            function i() {
                for (var e = -1, s = arguments.length, u = -1, c = r.length, l = qo(c + s); ++u < c;) l[u] = r[u];
                for (; s--;) l[u++] = arguments[++e];
                var f = this && this !== Zt && this instanceof i ? a : t;
                return f.apply(o ? n : this, l)
            }
            var o = e & C,
                a = mn(t);
            return i
        }

        function Dn(t) {
            var e = Uo[t];
            return function(t, n) {
                return n = n === w ? 0 : +n || 0, n ? (n = ca(10, n), e(t * n) / n) : e(t)
            }
        }

        function Fn(t) {
            return function(e, n, r, i) {
                var o = qn(r);
                return null == r && o === xe ? rn(e, n, t) : on(e, n, o(r, i, 1), t)
            }
        }

        function Ln(t, e, n, r, i, o, a, s) {
            var u = e & E;
            if (!u && "function" != typeof t) throw new Ko(V);
            var c = r ? r.length : 0;
            if (c || (e &= ~(T | N), r = i = w), c -= i ? i.length : 0, e & N) {
                var l = r,
                    f = i;
                r = i = w
            }
            var h = u ? w : qa(t),
                p = [t, e, n, r, i, l, f, o, a, s];
            if (h && (ir(p, h), e = p[1], s = p[9]), p[9] = null == s ? u ? 0 : t.length : wa(s - c, 0) || 0, e == C) var d = dn(p[0], p[2]);
            else d = e != T && e != (C | T) || p[4].length ? On.apply(w, p) : Pn.apply(w, p);
            var g = h ? Va : Ba;
            return g(d, p)
        }

        function In(t, e, n, r, i, o, a) {
            var s = -1,
                u = t.length,
                c = e.length;
            if (u != c && !(i && c > u)) return !1;
            for (; ++s < u;) {
                var l = t[s],
                    f = e[s],
                    h = r ? r(i ? f : l, i ? l : f, s) : w;
                if (h !== w) {
                    if (h) continue;
                    return !1
                }
                if (i) {
                    if (!he(e, function(t) {
                            return l === t || n(l, t, r, i, o, a)
                        })) return !1
                } else if (l !== f && !n(l, f, r, i, o, a)) return !1
            }
            return !0
        }

        function Rn(t, e, n) {
            switch (n) {
                case z:
                case U:
                    return +t == +e;
                case W:
                    return t.name == e.name && t.message == e.message;
                case Y:
                    return t != +t ? e != +e : t == +e;
                case J:
                case Z:
                    return t == e + ""
            }
            return !1
        }

        function Vn(t, e, n, r, i, o, a) {
            var s = Vs(t),
                u = s.length,
                c = Vs(e),
                l = c.length;
            if (u != l && !i) return !1;
            for (var f = u; f--;) {
                var h = s[f];
                if (!(i ? h in e : ea.call(e, h))) return !1
            }
            for (var p = i; ++f < u;) {
                h = s[f];
                var d = t[h],
                    g = e[h],
                    v = r ? r(i ? g : d, i ? d : g, h) : w;
                if (!(v === w ? n(d, g, r, i, o, a) : v)) return !1;
                p || (p = "constructor" == h)
            }
            if (!p) {
                var m = t.constructor,
                    y = e.constructor;
                if (m != y && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof y && y instanceof y)) return !1
            }
            return !0
        }

        function qn(t, e, n) {
            var r = X.callback || ko;
            return r = r === ko ? xe : r, n ? r(t, e, n) : r
        }

        function Hn(t) {
            for (var e = t.name + "", n = Pa[e], r = n ? n.length : 0; r--;) {
                var i = n[r],
                    o = i.func;
                if (null == o || o == t) return i.name
            }
            return e
        }

        function Bn(t, e, r) {
            var i = X.indexOf || Cr;
            return i = i === Cr ? n : i, t ? i(t, e, r) : i
        }

        function zn(t) {
            for (var e = eo(t), n = e.length; n--;) e[n][2] = rr(e[n][1]);
            return e
        }

        function Un(t, e) {
            var n = null == t ? w : t[e];
            return Li(n) ? n : w
        }

        function Wn(t, e, n) {
            for (var r = -1, i = n.length; ++r < i;) {
                var o = n[r],
                    a = o.size;
                switch (o.type) {
                    case "drop":
                        t += a;
                        break;
                    case "dropRight":
                        e -= a;
                        break;
                    case "take":
                        e = Sa(e, t + a);
                        break;
                    case "takeRight":
                        t = wa(t, e - a)
                }
            }
            return {
                start: t,
                end: e
            }
        }

        function Gn(t) {
            var e = t.length,
                n = new t.constructor(e);
            return e && "string" == typeof t[0] && ea.call(t, "index") && (n.index = t.index, n.input = t.input), n
        }

        function Xn(t) {
            var e = t.constructor;
            return "function" == typeof e && e instanceof e || (e = Go), new e
        }

        function Yn(t, e, n) {
            var r = t.constructor;
            switch (e) {
                case et:
                    return sn(t);
                case z:
                case U:
                    return new r(+t);
                case nt:
                case rt:
                case it:
                case ot:
                case at:
                case st:
                case ut:
                case ct:
                case lt:
                    var i = t.buffer;
                    return new r(n ? sn(i) : i, t.byteOffset, t.length);
                case Y:
                case Z:
                    return new r(t);
                case J:
                    var o = new r(t.source, Tt.exec(t));
                    o.lastIndex = t.lastIndex
            }
            return o
        }

        function Kn(t, e, n) {
            null == t || tr(e, t) || (e = hr(e), t = 1 == e.length ? t : Pe(t, Xe(e, 0, -1)), e = kr(e));
            var r = null == t ? t : t[e];
            return null == r ? w : r.apply(t, n)
        }

        function Jn(t) {
            return null != t && nr(Ha(t))
        }

        function Qn(t, e) {
            return t = "number" == typeof t || Ot.test(t) ? +t : -1, e = null == e ? Oa : e, t > -1 && t % 1 == 0 && e > t
        }

        function Zn(t, e, n) {
            if (!Pi(n)) return !1;
            var r = typeof e;
            if ("number" == r ? Jn(n) && Qn(e, n.length) : "string" == r && e in n) {
                var i = n[e];
                return t === t ? t === i : i !== i
            }
            return !1
        }

        function tr(t, e) {
            var n = typeof t;
            if ("string" == n && wt.test(t) || "number" == n) return !0;
            if (Ts(t)) return !1;
            var r = !bt.test(t);
            return r || null != e && t in fr(e)
        }

        function er(t) {
            var e = Hn(t),
                n = X[e];
            if ("function" != typeof n || !(e in qt.prototype)) return !1;
            if (t === n) return !0;
            var r = qa(n);
            return !!r && t === r[0]
        }

        function nr(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && Oa >= t
        }

        function rr(t) {
            return t === t && !Pi(t)
        }

        function ir(t, e) {
            var n = t[1],
                r = e[1],
                i = n | r,
                o = j > i,
                a = r == j && n == A || r == j && n == O && t[7].length <= e[8] || r == (j | O) && n == A;
            if (!o && !a) return t;
            r & C && (t[2] = e[2], i |= n & C ? 0 : k);
            var s = e[3];
            if (s) {
                var u = t[3];
                t[3] = u ? un(u, s, e[4]) : ne(s), t[4] = u ? v(t[3], q) : ne(e[4])
            }
            return s = e[5], s && (u = t[5], t[5] = u ? cn(u, s, e[6]) : ne(s), t[6] = u ? v(t[5], q) : ne(e[6])), s = e[7], s && (t[7] = ne(s)), r & j && (t[8] = null == t[8] ? e[8] : Sa(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i, t
        }

        function or(t, e) {
            return t === w ? e : Ns(t, e, or)
        }

        function ar(t, e) {
            t = fr(t);
            for (var n = -1, r = e.length, i = {}; ++n < r;) {
                var o = e[n];
                o in t && (i[o] = t[o])
            }
            return i
        }

        function sr(t, e) {
            var n = {};
            return Ne(t, function(t, r, i) {
                e(t, r, i) && (n[r] = t)
            }), n
        }

        function ur(t, e) {
            for (var n = t.length, r = Sa(e.length, n), i = ne(t); r--;) {
                var o = e[r];
                t[r] = Qn(o, n) ? i[o] : w
            }
            return t
        }

        function cr(t) {
            for (var e = to(t), n = e.length, r = n && t.length, i = !!r && nr(r) && (Ts(t) || Ei(t)), o = -1, a = []; ++o < n;) {
                var s = e[o];
                (i && Qn(s, r) || ea.call(t, s)) && a.push(s)
            }
            return a
        }

        function lr(t) {
            return null == t ? [] : Jn(t) ? Pi(t) ? t : Go(t) : oo(t)
        }

        function fr(t) {
            return Pi(t) ? t : Go(t)
        }

        function hr(t) {
            if (Ts(t)) return t;
            var e = [];
            return i(t).replace(St, function(t, n, r, i) {
                e.push(r ? i.replace(At, "$1") : n || t)
            }), e
        }

        function pr(t) {
            return t instanceof qt ? t.clone() : new tt(t.__wrapped__, t.__chain__, ne(t.__actions__))
        }

        function dr(t, e, n) {
            e = (n ? Zn(t, e, n) : null == e) ? 1 : wa(ya(e) || 1, 1);
            for (var r = 0, i = t ? t.length : 0, o = -1, a = qo(va(i / e)); i > r;) a[++o] = Xe(t, r, r += e);
            return a
        }

        function gr(t) {
            for (var e = -1, n = t ? t.length : 0, r = -1, i = []; ++e < n;) {
                var o = t[e];
                o && (i[++r] = o)
            }
            return i
        }

        function vr(t, e, n) {
            var r = t ? t.length : 0;
            return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), Xe(t, 0 > e ? 0 : e)) : []
        }

        function mr(t, e, n) {
            var r = t ? t.length : 0;
            return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), e = r - (+e || 0), Xe(t, 0, 0 > e ? 0 : e)) : []
        }

        function yr(t, e, n) {
            return t && t.length ? en(t, qn(e, n, 3), !0, !0) : []
        }

        function $r(t, e, n) {
            return t && t.length ? en(t, qn(e, n, 3), !0) : []
        }

        function xr(t, e, n, r) {
            var i = t ? t.length : 0;
            return i ? (n && "number" != typeof n && Zn(t, e, n) && (n = 0, r = i), ke(t, e, n, r)) : []
        }

        function br(t) {
            return t ? t[0] : w
        }

        function wr(t, e, n) {
            var r = t ? t.length : 0;
            return n && Zn(t, e, n) && (e = !1), r ? Te(t, e) : []
        }

        function Sr(t) {
            var e = t ? t.length : 0;
            return e ? Te(t, !0) : []
        }

        function Cr(t, e, r) {
            var i = t ? t.length : 0;
            if (!i) return -1;
            if ("number" == typeof r) r = 0 > r ? wa(i + r, 0) : r;
            else if (r) {
                var o = rn(t, e);
                return i > o && (e === e ? e === t[o] : t[o] !== t[o]) ? o : -1
            }
            return n(t, e, r || 0)
        }

        function Er(t) {
            return mr(t, 1)
        }

        function kr(t) {
            var e = t ? t.length : 0;
            return e ? t[e - 1] : w
        }

        function Ar(t, e, n) {
            var r = t ? t.length : 0;
            if (!r) return -1;
            var i = r;
            if ("number" == typeof n) i = (0 > n ? wa(r + n, 0) : Sa(n || 0, r - 1)) + 1;
            else if (n) {
                i = rn(t, e, !0) - 1;
                var o = t[i];
                return (e === e ? e === o : o !== o) ? i : -1
            }
            if (e !== e) return p(t, i, !0);
            for (; i--;)
                if (t[i] === e) return i;
            return -1
        }

        function _r() {
            var t = arguments,
                e = t[0];
            if (!e || !e.length) return e;
            for (var n = 0, r = Bn(), i = t.length; ++n < i;)
                for (var o = 0, a = t[n];
                    (o = r(e, a, o)) > -1;) pa.call(e, o, 1);
            return e
        }

        function Tr(t, e, n) {
            var r = [];
            if (!t || !t.length) return r;
            var i = -1,
                o = [],
                a = t.length;
            for (e = qn(e, n, 3); ++i < a;) {
                var s = t[i];
                e(s, i, t) && (r.push(s), o.push(i))
            }
            return Ue(t, o), r
        }

        function Nr(t) {
            return vr(t, 1)
        }

        function jr(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (n && "number" != typeof n && Zn(t, e, n) && (e = 0, n = r), Xe(t, e, n)) : []
        }

        function Or(t, e, n) {
            var r = t ? t.length : 0;
            return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), Xe(t, 0, 0 > e ? 0 : e)) : []
        }

        function Mr(t, e, n) {
            var r = t ? t.length : 0;
            return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), e = r - (+e || 0), Xe(t, 0 > e ? 0 : e)) : []
        }

        function Pr(t, e, n) {
            return t && t.length ? en(t, qn(e, n, 3), !1, !0) : []
        }

        function Dr(t, e, n) {
            return t && t.length ? en(t, qn(e, n, 3)) : []
        }

        function Fr(t, e, r, i) {
            var o = t ? t.length : 0;
            if (!o) return [];
            null != e && "boolean" != typeof e && (i = r, r = Zn(t, e, i) ? w : e, e = !1);
            var a = qn();
            return (null != r || a !== xe) && (r = a(r, i, 3)), e && Bn() === n ? m(t, r) : Ze(t, r)
        }

        function Lr(t) {
            if (!t || !t.length) return [];
            var e = -1,
                n = 0;
            t = se(t, function(t) {
                return Jn(t) ? (n = wa(t.length, n), !0) : void 0
            });
            for (var r = qo(n); ++e < n;) r[e] = ue(t, Be(e));
            return r
        }

        function Ir(t, e, n) {
            var r = t ? t.length : 0;
            if (!r) return [];
            var i = Lr(t);
            return null == e ? i : (e = an(e, n, 4), ue(i, function(t) {
                return le(t, e, w, !0)
            }))
        }

        function Rr() {
            for (var t = -1, e = arguments.length; ++t < e;) {
                var n = arguments[t];
                if (Jn(n)) var r = r ? ce(Se(r, n), Se(n, r)) : n
            }
            return r ? Ze(r) : []
        }

        function Vr(t, e) {
            var n = -1,
                r = t ? t.length : 0,
                i = {};
            for (!r || e || Ts(t[0]) || (e = []); ++n < r;) {
                var o = t[n];
                e ? i[o] = e[n] : o && (i[o[0]] = o[1])
            }
            return i
        }

        function qr(t) {
            var e = X(t);
            return e.__chain__ = !0, e
        }

        function Hr(t, e, n) {
            return e.call(n, t), t
        }

        function Br(t, e, n) {
            return e.call(n, t)
        }

        function zr() {
            return qr(this)
        }

        function Ur() {
            return new tt(this.value(), this.__chain__)
        }

        function Wr(t) {
            for (var e, n = this; n instanceof Q;) {
                var r = pr(n);
                e ? i.__wrapped__ = r : e = r;
                var i = r;
                n = n.__wrapped__
            }
            return i.__wrapped__ = t, e
        }

        function Gr() {
            var t = this.__wrapped__,
                e = function(t) {
                    return t.reverse()
                };
            if (t instanceof qt) {
                var n = t;
                return this.__actions__.length && (n = new qt(this)), n = n.reverse(), n.__actions__.push({
                    func: Br,
                    args: [e],
                    thisArg: w
                }), new tt(n, this.__chain__)
            }
            return this.thru(e)
        }

        function Xr() {
            return this.value() + ""
        }

        function Yr() {
            return nn(this.__wrapped__, this.__actions__)
        }

        function Kr(t, e, n) {
            var r = Ts(t) ? oe : Ce;
            return n && Zn(t, e, n) && (e = w), ("function" != typeof e || n !== w) && (e = qn(e, n, 3)), r(t, e)
        }

        function Jr(t, e, n) {
            var r = Ts(t) ? se : Ae;
            return e = qn(e, n, 3), r(t, e)
        }

        function Qr(t, e) {
            return is(t, Re(e))
        }

        function Zr(t, e, n, r) {
            var i = t ? Ha(t) : 0;
            return nr(i) || (t = oo(t), i = t.length), n = "number" != typeof n || r && Zn(e, n, r) ? 0 : 0 > n ? wa(i + n, 0) : n || 0, "string" == typeof t || !Ts(t) && Hi(t) ? i >= n && t.indexOf(e, n) > -1 : !!i && Bn(t, e, n) > -1
        }

        function ti(t, e, n) {
            var r = Ts(t) ? ue : Ie;
            return e = qn(e, n, 3), r(t, e)
        }

        function ei(t, e) {
            return ti(t, Po(e))
        }

        function ni(t, e, n) {
            var r = Ts(t) ? se : Ae;
            return e = qn(e, n, 3), r(t, function(t, n, r) {
                return !e(t, n, r)
            })
        }

        function ri(t, e, n) {
            if (n ? Zn(t, e, n) : null == e) {
                t = lr(t);
                var r = t.length;
                return r > 0 ? t[We(0, r - 1)] : w
            }
            var i = -1,
                o = Gi(t),
                r = o.length,
                a = r - 1;
            for (e = Sa(0 > e ? 0 : +e || 0, r); ++i < e;) {
                var s = We(i, a),
                    u = o[s];
                o[s] = o[i], o[i] = u
            }
            return o.length = e, o
        }

        function ii(t) {
            return ri(t, _a)
        }

        function oi(t) {
            var e = t ? Ha(t) : 0;
            return nr(e) ? e : Vs(t).length
        }

        function ai(t, e, n) {
            var r = Ts(t) ? he : Ye;
            return n && Zn(t, e, n) && (e = w), ("function" != typeof e || n !== w) && (e = qn(e, n, 3)), r(t, e)
        }

        function si(t, e, n) {
            if (null == t) return [];
            n && Zn(t, e, n) && (e = w);
            var r = -1;
            e = qn(e, n, 3);
            var i = Ie(t, function(t, n, i) {
                return {
                    criteria: e(t, n, i),
                    index: ++r,
                    value: t
                }
            });
            return Ke(i, s)
        }

        function ui(t, e, n, r) {
            return null == t ? [] : (r && Zn(e, n, r) && (n = w), Ts(e) || (e = null == e ? [] : [e]), Ts(n) || (n = null == n ? [] : [n]), Je(t, e, n))
        }

        function ci(t, e) {
            return Jr(t, Re(e))
        }

        function li(t, e) {
            if ("function" != typeof e) {
                if ("function" != typeof t) throw new Ko(V);
                var n = t;
                t = e, e = n
            }
            return t = xa(t = +t) ? t : 0,
                function() {
                    return --t < 1 ? e.apply(this, arguments) : void 0
                }
        }

        function fi(t, e, n) {
            return n && Zn(t, e, n) && (e = w), e = t && null == e ? t.length : wa(+e || 0, 0), Ln(t, j, w, w, w, w, e)
        }

        function hi(t, e) {
            var n;
            if ("function" != typeof e) {
                if ("function" != typeof t) throw new Ko(V);
                var r = t;
                t = e, e = r
            }
            return function() {
                return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = w), n
            }
        }

        function pi(t, e, n) {
            function r() {
                p && sa(p), c && sa(c), g = 0, c = p = d = w
            }

            function i(e, n) {
                n && sa(n), c = p = d = w, e && (g = gs(), l = t.apply(h, u), p || c || (u = h = w))
            }

            function o() {
                var t = e - (gs() - f);
                0 >= t || t > e ? i(d, c) : p = ha(o, t)
            }

            function a() {
                i(m, p)
            }

            function s() {
                if (u = arguments, f = gs(), h = this, d = m && (p || !y), v === !1) var n = y && !p;
                else {
                    c || y || (g = f);
                    var r = v - (f - g),
                        i = 0 >= r || r > v;
                    i ? (c && (c = sa(c)), g = f, l = t.apply(h, u)) : c || (c = ha(a, r))
                }
                return i && p ? p = sa(p) : p || e === v || (p = ha(o, e)), n && (i = !0, l = t.apply(h, u)), !i || p || c || (u = h = w), l
            }
            var u, c, l, f, h, p, d, g = 0,
                v = !1,
                m = !0;
            if ("function" != typeof t) throw new Ko(V);
            if (e = 0 > e ? 0 : +e || 0, n === !0) {
                var y = !0;
                m = !1
            } else Pi(n) && (y = !!n.leading, v = "maxWait" in n && wa(+n.maxWait || 0, e), m = "trailing" in n ? !!n.trailing : m);
            return s.cancel = r, s
        }

        function di(t, e) {
            if ("function" != typeof t || e && "function" != typeof e) throw new Ko(V);
            var n = function() {
                var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return n.cache = o.set(i, a), a
            };
            return n.cache = new di.Cache, n
        }

        function gi(t) {
            if ("function" != typeof t) throw new Ko(V);
            return function() {
                return !t.apply(this, arguments)
            }
        }

        function vi(t) {
            return hi(2, t)
        }

        function mi(t, e) {
            if ("function" != typeof t) throw new Ko(V);
            return e = wa(e === w ? t.length - 1 : +e || 0, 0),
                function() {
                    for (var n = arguments, r = -1, i = wa(n.length - e, 0), o = qo(i); ++r < i;) o[r] = n[e + r];
                    switch (e) {
                        case 0:
                            return t.call(this, o);
                        case 1:
                            return t.call(this, n[0], o);
                        case 2:
                            return t.call(this, n[0], n[1], o)
                    }
                    var a = qo(e + 1);
                    for (r = -1; ++r < e;) a[r] = n[r];
                    return a[e] = o, t.apply(this, a)
                }
        }

        function yi(t) {
            if ("function" != typeof t) throw new Ko(V);
            return function(e) {
                return t.apply(this, e)
            }
        }

        function $i(t, e, n) {
            var r = !0,
                i = !0;
            if ("function" != typeof t) throw new Ko(V);
            return n === !1 ? r = !1 : Pi(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), pi(t, e, {
                leading: r,
                maxWait: +e,
                trailing: i
            })
        }

        function xi(t, e) {
            return e = null == e ? _o : e, Ln(e, T, w, [t], [])
        }

        function bi(t, e, n, r) {
            return e && "boolean" != typeof e && Zn(t, e, n) ? e = !1 : "function" == typeof e && (r = n, n = e, e = !1), "function" == typeof n ? be(t, e, an(n, r, 3)) : be(t, e)
        }

        function wi(t, e, n) {
            return "function" == typeof e ? be(t, !0, an(e, n, 3)) : be(t, !0)
        }

        function Si(t, e) {
            return t > e
        }

        function Ci(t, e) {
            return t >= e
        }

        function Ei(t) {
            return d(t) && Jn(t) && ea.call(t, "callee") && !la.call(t, "callee")
        }

        function ki(t) {
            return t === !0 || t === !1 || d(t) && ra.call(t) == z
        }

        function Ai(t) {
            return d(t) && ra.call(t) == U
        }

        function _i(t) {
            return !!t && 1 === t.nodeType && d(t) && !Vi(t)
        }

        function Ti(t) {
            return null == t ? !0 : Jn(t) && (Ts(t) || Hi(t) || Ei(t) || d(t) && Mi(t.splice)) ? !t.length : !Vs(t).length
        }

        function Ni(t, e, n, r) {
            n = "function" == typeof n ? an(n, r, 3) : w;
            var i = n ? n(t, e) : w;
            return i === w ? De(t, e, n) : !!i
        }

        function ji(t) {
            return d(t) && "string" == typeof t.message && ra.call(t) == W
        }

        function Oi(t) {
            return "number" == typeof t && xa(t)
        }

        function Mi(t) {
            return Pi(t) && ra.call(t) == G
        }

        function Pi(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function Di(t, e, n, r) {
            return n = "function" == typeof n ? an(n, r, 3) : w, Le(t, zn(e), n)
        }

        function Fi(t) {
            return Ri(t) && t != +t
        }

        function Li(t) {
            return null == t ? !1 : Mi(t) ? oa.test(ta.call(t)) : d(t) && jt.test(t)
        }

        function Ii(t) {
            return null === t
        }

        function Ri(t) {
            return "number" == typeof t || d(t) && ra.call(t) == Y
        }

        function Vi(t) {
            var e;
            if (!d(t) || ra.call(t) != K || Ei(t) || !ea.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e))) return !1;
            var n;
            return Ne(t, function(t, e) {
                n = e
            }), n === w || ea.call(t, n)
        }

        function qi(t) {
            return Pi(t) && ra.call(t) == J
        }

        function Hi(t) {
            return "string" == typeof t || d(t) && ra.call(t) == Z
        }

        function Bi(t) {
            return d(t) && nr(t.length) && !!Rt[ra.call(t)]
        }

        function zi(t) {
            return t === w
        }

        function Ui(t, e) {
            return e > t
        }

        function Wi(t, e) {
            return e >= t
        }

        function Gi(t) {
            var e = t ? Ha(t) : 0;
            return nr(e) ? e ? ne(t) : [] : oo(t)
        }

        function Xi(t) {
            return $e(t, to(t))
        }

        function Yi(t, e, n) {
            var r = Da(t);
            return n && Zn(t, e, n) && (e = w), e ? me(r, e) : r
        }

        function Ki(t) {
            return Me(t, to(t))
        }

        function Ji(t, e, n) {
            var r = null == t ? w : Pe(t, hr(e), e + "");
            return r === w ? n : r
        }

        function Qi(t, e) {
            if (null == t) return !1;
            var n = ea.call(t, e);
            if (!n && !tr(e)) {
                if (e = hr(e), t = 1 == e.length ? t : Pe(t, Xe(e, 0, -1)), null == t) return !1;
                e = kr(e), n = ea.call(t, e)
            }
            return n || nr(t.length) && Qn(e, t.length) && (Ts(t) || Ei(t))
        }

        function Zi(t, e, n) {
            n && Zn(t, e, n) && (e = w);
            for (var r = -1, i = Vs(t), o = i.length, a = {}; ++r < o;) {
                var s = i[r],
                    u = t[s];
                e ? ea.call(a, u) ? a[u].push(s) : a[u] = [s] : a[u] = s
            }
            return a
        }

        function to(t) {
            if (null == t) return [];
            Pi(t) || (t = Go(t));
            var e = t.length;
            e = e && nr(e) && (Ts(t) || Ei(t)) && e || 0;
            for (var n = t.constructor, r = -1, i = "function" == typeof n && n.prototype === t, o = qo(e), a = e > 0; ++r < e;) o[r] = r + "";
            for (var s in t) a && Qn(s, e) || "constructor" == s && (i || !ea.call(t, s)) || o.push(s);
            return o
        }

        function eo(t) {
            t = fr(t);
            for (var e = -1, n = Vs(t), r = n.length, i = qo(r); ++e < r;) {
                var o = n[e];
                i[e] = [o, t[o]]
            }
            return i
        }

        function no(t, e, n) {
            var r = null == t ? w : t[e];
            return r === w && (null == t || tr(e, t) || (e = hr(e), t = 1 == e.length ? t : Pe(t, Xe(e, 0, -1)), r = null == t ? w : t[kr(e)]), r = r === w ? n : r), Mi(r) ? r.call(t) : r
        }

        function ro(t, e, n) {
            if (null == t) return t;
            var r = e + "";
            e = null != t[r] || tr(e, t) ? [r] : hr(e);
            for (var i = -1, o = e.length, a = o - 1, s = t; null != s && ++i < o;) {
                var u = e[i];
                Pi(s) && (i == a ? s[u] = n : null == s[u] && (s[u] = Qn(e[i + 1]) ? [] : {})), s = s[u]
            }
            return t
        }

        function io(t, e, n, r) {
            var i = Ts(t) || Bi(t);
            if (e = qn(e, r, 4), null == n)
                if (i || Pi(t)) {
                    var o = t.constructor;
                    n = i ? Ts(t) ? new o : [] : Da(Mi(o) ? o.prototype : w)
                } else n = {};
            return (i ? re : je)(t, function(t, r, i) {
                return e(n, t, r, i)
            }), n
        }

        function oo(t) {
            return tn(t, Vs(t))
        }

        function ao(t) {
            return tn(t, to(t))
        }

        function so(t, e, n) {
            return e = +e || 0, n === w ? (n = e, e = 0) : n = +n || 0, t >= Sa(e, n) && t < wa(e, n)
        }

        function uo(t, e, n) {
            n && Zn(t, e, n) && (e = n = w);
            var r = null == t,
                i = null == e;
            if (null == n && (i && "boolean" == typeof t ? (n = t, t = 1) : "boolean" == typeof e && (n = e, i = !0)), r && i && (e = 1, i = !1), t = +t || 0, i ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
                var o = ka();
                return Sa(t + o * (e - t + ua("1e-" + ((o + "").length - 1))), e)
            }
            return We(t, e)
        }

        function co(t) {
            return t = i(t), t && t.charAt(0).toUpperCase() + t.slice(1)
        }

        function lo(t) {
            return t = i(t),
                t && t.replace(Mt, c).replace(kt, "")
        }

        function fo(t, e, n) {
            t = i(t), e += "";
            var r = t.length;
            return n = n === w ? r : Sa(0 > n ? 0 : +n || 0, r), n -= e.length, n >= 0 && t.indexOf(e, n) == n
        }

        function ho(t) {
            return t = i(t), t && mt.test(t) ? t.replace(gt, l) : t
        }

        function po(t) {
            return t = i(t), t && Et.test(t) ? t.replace(Ct, f) : t || "(?:)"
        }

        function go(t, e, n) {
            t = i(t), e = +e;
            var r = t.length;
            if (r >= e || !xa(e)) return t;
            var o = (e - r) / 2,
                a = ya(o),
                s = va(o);
            return n = Mn("", s, n), n.slice(0, a) + t + n
        }

        function vo(t, e, n) {
            return (n ? Zn(t, e, n) : null == e) ? e = 0 : e && (e = +e), t = xo(t), Ea(t, e || (Nt.test(t) ? 16 : 10))
        }

        function mo(t, e) {
            var n = "";
            if (t = i(t), e = +e, 1 > e || !t || !xa(e)) return n;
            do e % 2 && (n += t), e = ya(e / 2), t += t; while (e);
            return n
        }

        function yo(t, e, n) {
            return t = i(t), n = null == n ? 0 : Sa(0 > n ? 0 : +n || 0, t.length), t.lastIndexOf(e, n) == n
        }

        function $o(t, e, n) {
            var r = X.templateSettings;
            n && Zn(t, e, n) && (e = n = w), t = i(t), e = ve(me({}, n || e), r, ge);
            var o, a, s = ve(me({}, e.imports), r.imports, ge),
                u = Vs(s),
                c = tn(s, u),
                l = 0,
                f = e.interpolate || Pt,
                p = "__p += '",
                d = Xo((e.escape || Pt).source + "|" + f.source + "|" + (f === xt ? _t : Pt).source + "|" + (e.evaluate || Pt).source + "|$", "g"),
                g = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++It + "]") + "\n";
            t.replace(d, function(e, n, r, i, s, u) {
                return r || (r = i), p += t.slice(l, u).replace(Dt, h), n && (o = !0, p += "' +\n__e(" + n + ") +\n'"), s && (a = !0, p += "';\n" + s + ";\n__p += '"), r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = u + e.length, e
            }), p += "';\n";
            var v = e.variable;
            v || (p = "with (obj) {\n" + p + "\n}\n"), p = (a ? p.replace(ft, "") : p).replace(ht, "$1").replace(pt, "$1;"), p = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
            var m = Js(function() {
                return zo(u, g + "return " + p).apply(w, c)
            });
            if (m.source = p, ji(m)) throw m;
            return m
        }

        function xo(t, e, n) {
            var r = t;
            return (t = i(t)) ? (n ? Zn(r, e, n) : null == e) ? t.slice(y(t), $(t) + 1) : (e += "", t.slice(o(t, e), a(t, e) + 1)) : t
        }

        function bo(t, e, n) {
            var r = t;
            return t = i(t), t ? (n ? Zn(r, e, n) : null == e) ? t.slice(y(t)) : t.slice(o(t, e + "")) : t
        }

        function wo(t, e, n) {
            var r = t;
            return t = i(t), t ? (n ? Zn(r, e, n) : null == e) ? t.slice(0, $(t) + 1) : t.slice(0, a(t, e + "") + 1) : t
        }

        function So(t, e, n) {
            n && Zn(t, e, n) && (e = w);
            var r = M,
                o = P;
            if (null != e)
                if (Pi(e)) {
                    var a = "separator" in e ? e.separator : a;
                    r = "length" in e ? +e.length || 0 : r, o = "omission" in e ? i(e.omission) : o
                } else r = +e || 0;
            if (t = i(t), r >= t.length) return t;
            var s = r - o.length;
            if (1 > s) return o;
            var u = t.slice(0, s);
            if (null == a) return u + o;
            if (qi(a)) {
                if (t.slice(s).search(a)) {
                    var c, l, f = t.slice(0, s);
                    for (a.global || (a = Xo(a.source, (Tt.exec(a) || "") + "g")), a.lastIndex = 0; c = a.exec(f);) l = c.index;
                    u = u.slice(0, null == l ? s : l)
                }
            } else if (t.indexOf(a, s) != s) {
                var h = u.lastIndexOf(a);
                h > -1 && (u = u.slice(0, h))
            }
            return u + o
        }

        function Co(t) {
            return t = i(t), t && vt.test(t) ? t.replace(dt, x) : t
        }

        function Eo(t, e, n) {
            return n && Zn(t, e, n) && (e = w), t = i(t), t.match(e || Ft) || []
        }

        function ko(t, e, n) {
            return n && Zn(t, e, n) && (e = w), d(t) ? To(t) : xe(t, e)
        }

        function Ao(t) {
            return function() {
                return t
            }
        }

        function _o(t) {
            return t
        }

        function To(t) {
            return Re(be(t, !0))
        }

        function No(t, e) {
            return Ve(t, be(e, !0))
        }

        function jo(t, e, n) {
            if (null == n) {
                var r = Pi(e),
                    i = r ? Vs(e) : w,
                    o = i && i.length ? Me(e, i) : w;
                (o ? o.length : r) || (o = !1, n = e, e = t, t = this)
            }
            o || (o = Me(e, Vs(e)));
            var a = !0,
                s = -1,
                u = Mi(t),
                c = o.length;
            n === !1 ? a = !1 : Pi(n) && "chain" in n && (a = n.chain);
            for (; ++s < c;) {
                var l = o[s],
                    f = e[l];
                t[l] = f, u && (t.prototype[l] = function(e) {
                    return function() {
                        var n = this.__chain__;
                        if (a || n) {
                            var r = t(this.__wrapped__),
                                i = r.__actions__ = ne(this.__actions__);
                            return i.push({
                                func: e,
                                args: arguments,
                                thisArg: t
                            }), r.__chain__ = n, r
                        }
                        return e.apply(t, ce([this.value()], arguments))
                    }
                }(f))
            }
            return t
        }

        function Oo() {
            return Zt._ = ia, this
        }

        function Mo() {}

        function Po(t) {
            return tr(t) ? Be(t) : ze(t)
        }

        function Do(t) {
            return function(e) {
                return Pe(t, hr(e), e + "")
            }
        }

        function Fo(t, e, n) {
            n && Zn(t, e, n) && (e = n = w), t = +t || 0, n = null == n ? 1 : +n || 0, null == e ? (e = t, t = 0) : e = +e || 0;
            for (var r = -1, i = wa(va((e - t) / (n || 1)), 0), o = qo(i); ++r < i;) o[r] = t, t += n;
            return o
        }

        function Lo(t, e, n) {
            if (t = ya(t), 1 > t || !xa(t)) return [];
            var r = -1,
                i = qo(Sa(t, Ta));
            for (e = an(e, n, 1); ++r < t;) Ta > r ? i[r] = e(r) : e(r);
            return i
        }

        function Io(t) {
            var e = ++na;
            return i(t) + e
        }

        function Ro(t, e) {
            return (+t || 0) + (+e || 0)
        }

        function Vo(t, e, n) {
            return n && Zn(t, e, n) && (e = w), e = qn(e, n, 3), 1 == e.length ? pe(Ts(t) ? t : lr(t), e) : Qe(t, e)
        }
        g = g ? te.defaults(Zt.Object(), g, te.pick(Zt, Lt)) : Zt;
        var qo = g.Array,
            Ho = g.Date,
            Bo = g.Error,
            zo = g.Function,
            Uo = g.Math,
            Wo = g.Number,
            Go = g.Object,
            Xo = g.RegExp,
            Yo = g.String,
            Ko = g.TypeError,
            Jo = qo.prototype,
            Qo = Go.prototype,
            Zo = Yo.prototype,
            ta = zo.prototype.toString,
            ea = Qo.hasOwnProperty,
            na = 0,
            ra = Qo.toString,
            ia = Zt._,
            oa = Xo("^" + ta.call(ea).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            aa = g.ArrayBuffer,
            sa = g.clearTimeout,
            ua = g.parseFloat,
            ca = Uo.pow,
            la = Qo.propertyIsEnumerable,
            fa = Un(g, "Set"),
            ha = g.setTimeout,
            pa = Jo.splice,
            da = g.Uint8Array,
            ga = Un(g, "WeakMap"),
            va = Uo.ceil,
            ma = Un(Go, "create"),
            ya = Uo.floor,
            $a = Un(qo, "isArray"),
            xa = g.isFinite,
            ba = Un(Go, "keys"),
            wa = Uo.max,
            Sa = Uo.min,
            Ca = Un(Ho, "now"),
            Ea = g.parseInt,
            ka = Uo.random,
            Aa = Wo.NEGATIVE_INFINITY,
            _a = Wo.POSITIVE_INFINITY,
            Ta = 4294967295,
            Na = Ta - 1,
            ja = Ta >>> 1,
            Oa = 9007199254740991,
            Ma = ga && new ga,
            Pa = {};
        X.support = {};
        X.templateSettings = {
            escape: yt,
            evaluate: $t,
            interpolate: xt,
            variable: "",
            imports: {
                _: X
            }
        };
        var Da = function() {
                function t() {}
                return function(e) {
                    if (Pi(e)) {
                        t.prototype = e;
                        var n = new t;
                        t.prototype = w
                    }
                    return n || {}
                }
            }(),
            Fa = hn(je),
            La = hn(Oe, !0),
            Ia = pn(),
            Ra = pn(!0),
            Va = Ma ? function(t, e) {
                return Ma.set(t, e), t
            } : _o,
            qa = Ma ? function(t) {
                return Ma.get(t)
            } : Mo,
            Ha = Be("length"),
            Ba = function() {
                var t = 0,
                    e = 0;
                return function(n, r) {
                    var i = gs(),
                        o = F - (i - e);
                    if (e = i, o > 0) {
                        if (++t >= D) return n
                    } else t = 0;
                    return Va(n, r)
                }
            }(),
            za = mi(function(t, e) {
                return d(t) && Jn(t) ? Se(t, Te(e, !1, !0)) : []
            }),
            Ua = wn(),
            Wa = wn(!0),
            Ga = mi(function(t) {
                for (var e = t.length, r = e, i = qo(f), o = Bn(), a = o === n, s = []; r--;) {
                    var u = t[r] = Jn(u = t[r]) ? u : [];
                    i[r] = a && u.length >= 120 ? gn(r && u) : null
                }
                var c = t[0],
                    l = -1,
                    f = c ? c.length : 0,
                    h = i[0];
                t: for (; ++l < f;)
                    if (u = c[l], (h ? Jt(h, u) : o(s, u, 0)) < 0) {
                        for (var r = e; --r;) {
                            var p = i[r];
                            if ((p ? Jt(p, u) : o(t[r], u, 0)) < 0) continue t
                        }
                        h && h.push(u), s.push(u)
                    }
                return s
            }),
            Xa = mi(function(e, n) {
                n = Te(n);
                var r = ye(e, n);
                return Ue(e, n.sort(t)), r
            }),
            Ya = Fn(),
            Ka = Fn(!0),
            Ja = mi(function(t) {
                return Ze(Te(t, !1, !0))
            }),
            Qa = mi(function(t, e) {
                return Jn(t) ? Se(t, e) : []
            }),
            Za = mi(Lr),
            ts = mi(function(t) {
                var e = t.length,
                    n = e > 2 ? t[e - 2] : w,
                    r = e > 1 ? t[e - 1] : w;
                return e > 2 && "function" == typeof n ? e -= 2 : (n = e > 1 && "function" == typeof r ? (--e, r) : w, r = w), t.length = e, Ir(t, n, r)
            }),
            es = mi(function(t) {
                return t = Te(t), this.thru(function(e) {
                    return ee(Ts(e) ? e : [fr(e)], t)
                })
            }),
            ns = mi(function(t, e) {
                return ye(t, Te(e))
            }),
            rs = ln(function(t, e, n) {
                ea.call(t, n) ? ++t[n] : t[n] = 1
            }),
            is = bn(Fa),
            os = bn(La, !0),
            as = En(re, Fa),
            ss = En(ie, La),
            us = ln(function(t, e, n) {
                ea.call(t, n) ? t[n].push(e) : t[n] = [e]
            }),
            cs = ln(function(t, e, n) {
                t[n] = e
            }),
            ls = mi(function(t, e, n) {
                var r = -1,
                    i = "function" == typeof e,
                    o = tr(e),
                    a = Jn(t) ? qo(t.length) : [];
                return Fa(t, function(t) {
                    var s = i ? e : o && null != t ? t[e] : w;
                    a[++r] = s ? s.apply(t, n) : Kn(t, e, n)
                }), a
            }),
            fs = ln(function(t, e, n) {
                t[n ? 0 : 1].push(e)
            }, function() {
                return [
                    [],
                    []
                ]
            }),
            hs = jn(le, Fa),
            ps = jn(fe, La),
            ds = mi(function(t, e) {
                if (null == t) return [];
                var n = e[2];
                return n && Zn(e[0], e[1], n) && (e.length = 1), Je(t, Te(e), [])
            }),
            gs = Ca || function() {
                return (new Ho).getTime()
            },
            vs = mi(function(t, e, n) {
                var r = C;
                if (n.length) {
                    var i = v(n, vs.placeholder);
                    r |= T
                }
                return Ln(t, r, e, n, i)
            }),
            ms = mi(function(t, e) {
                e = e.length ? Te(e) : Ki(t);
                for (var n = -1, r = e.length; ++n < r;) {
                    var i = e[n];
                    t[i] = Ln(t[i], C, t)
                }
                return t
            }),
            ys = mi(function(t, e, n) {
                var r = C | E;
                if (n.length) {
                    var i = v(n, ys.placeholder);
                    r |= T
                }
                return Ln(e, r, t, n, i)
            }),
            $s = yn(A),
            xs = yn(_),
            bs = mi(function(t, e) {
                return we(t, 1, e)
            }),
            ws = mi(function(t, e, n) {
                return we(t, e, n)
            }),
            Ss = Cn(),
            Cs = Cn(!0),
            Es = mi(function(t, e) {
                if (e = Te(e), "function" != typeof t || !oe(e, r)) throw new Ko(V);
                var n = e.length;
                return mi(function(r) {
                    for (var i = Sa(r.length, n); i--;) r[i] = e[i](r[i]);
                    return t.apply(this, r)
                })
            }),
            ks = Nn(T),
            As = Nn(N),
            _s = mi(function(t, e) {
                return Ln(t, O, w, w, w, Te(e))
            }),
            Ts = $a || function(t) {
                return d(t) && nr(t.length) && ra.call(t) == B
            },
            Ns = fn(qe),
            js = fn(function(t, e, n) {
                return n ? ve(t, e, n) : me(t, e)
            }),
            Os = $n(js, de),
            Ms = $n(Ns, or),
            Ps = Sn(je),
            Ds = Sn(Oe),
            Fs = kn(Ia),
            Ls = kn(Ra),
            Is = An(je),
            Rs = An(Oe),
            Vs = ba ? function(t) {
                var e = null == t ? w : t.constructor;
                return "function" == typeof e && e.prototype === t || "function" != typeof t && Jn(t) ? cr(t) : Pi(t) ? ba(t) : []
            } : cr,
            qs = _n(!0),
            Hs = _n(),
            Bs = mi(function(t, e) {
                if (null == t) return {};
                if ("function" != typeof e[0]) {
                    var e = ue(Te(e), Yo);
                    return ar(t, Se(to(t), e))
                }
                var n = an(e[0], e[1], 3);
                return sr(t, function(t, e, r) {
                    return !n(t, e, r)
                })
            }),
            zs = mi(function(t, e) {
                return null == t ? {} : "function" == typeof e[0] ? sr(t, an(e[0], e[1], 3)) : ar(t, Te(e))
            }),
            Us = vn(function(t, e, n) {
                return e = e.toLowerCase(), t + (n ? e.charAt(0).toUpperCase() + e.slice(1) : e)
            }),
            Ws = vn(function(t, e, n) {
                return t + (n ? "-" : "") + e.toLowerCase()
            }),
            Gs = Tn(),
            Xs = Tn(!0),
            Ys = vn(function(t, e, n) {
                return t + (n ? "_" : "") + e.toLowerCase()
            }),
            Ks = vn(function(t, e, n) {
                return t + (n ? " " : "") + (e.charAt(0).toUpperCase() + e.slice(1))
            }),
            Js = mi(function(t, e) {
                try {
                    return t.apply(w, e)
                } catch (n) {
                    return ji(n) ? n : new Bo(n)
                }
            }),
            Qs = mi(function(t, e) {
                return function(n) {
                    return Kn(n, t, e)
                }
            }),
            Zs = mi(function(t, e) {
                return function(n) {
                    return Kn(t, n, e)
                }
            }),
            tu = Dn("ceil"),
            eu = Dn("floor"),
            nu = xn(Si, Aa),
            ru = xn(Ui, _a),
            iu = Dn("round");
        return X.prototype = Q.prototype, tt.prototype = Da(Q.prototype), tt.prototype.constructor = tt, qt.prototype = Da(Q.prototype), qt.prototype.constructor = qt, Ut.prototype["delete"] = Wt, Ut.prototype.get = Gt, Ut.prototype.has = Xt, Ut.prototype.set = Yt, Kt.prototype.push = Qt, di.Cache = Ut, X.after = li, X.ary = fi, X.assign = js, X.at = ns, X.before = hi, X.bind = vs, X.bindAll = ms, X.bindKey = ys, X.callback = ko, X.chain = qr, X.chunk = dr, X.compact = gr, X.constant = Ao, X.countBy = rs, X.create = Yi, X.curry = $s, X.curryRight = xs, X.debounce = pi, X.defaults = Os, X.defaultsDeep = Ms, X.defer = bs, X.delay = ws, X.difference = za, X.drop = vr, X.dropRight = mr, X.dropRightWhile = yr, X.dropWhile = $r, X.fill = xr, X.filter = Jr, X.flatten = wr, X.flattenDeep = Sr, X.flow = Ss, X.flowRight = Cs, X.forEach = as, X.forEachRight = ss, X.forIn = Fs, X.forInRight = Ls, X.forOwn = Is, X.forOwnRight = Rs, X.functions = Ki, X.groupBy = us, X.indexBy = cs, X.initial = Er, X.intersection = Ga, X.invert = Zi, X.invoke = ls, X.keys = Vs, X.keysIn = to, X.map = ti, X.mapKeys = qs, X.mapValues = Hs, X.matches = To, X.matchesProperty = No, X.memoize = di, X.merge = Ns, X.method = Qs, X.methodOf = Zs, X.mixin = jo, X.modArgs = Es, X.negate = gi, X.omit = Bs, X.once = vi, X.pairs = eo, X.partial = ks, X.partialRight = As, X.partition = fs, X.pick = zs, X.pluck = ei, X.property = Po, X.propertyOf = Do, X.pull = _r, X.pullAt = Xa, X.range = Fo, X.rearg = _s, X.reject = ni, X.remove = Tr, X.rest = Nr, X.restParam = mi, X.set = ro, X.shuffle = ii, X.slice = jr, X.sortBy = si, X.sortByAll = ds, X.sortByOrder = ui, X.spread = yi, X.take = Or, X.takeRight = Mr, X.takeRightWhile = Pr, X.takeWhile = Dr, X.tap = Hr, X.throttle = $i, X.thru = Br, X.times = Lo, X.toArray = Gi, X.toPlainObject = Xi, X.transform = io, X.union = Ja, X.uniq = Fr, X.unzip = Lr, X.unzipWith = Ir, X.values = oo, X.valuesIn = ao, X.where = ci, X.without = Qa, X.wrap = xi, X.xor = Rr, X.zip = Za, X.zipObject = Vr, X.zipWith = ts, X.backflow = Cs, X.collect = ti, X.compose = Cs, X.each = as, X.eachRight = ss, X.extend = js, X.iteratee = ko, X.methods = Ki, X.object = Vr, X.select = Jr, X.tail = Nr, X.unique = Fr, jo(X, X), X.add = Ro, X.attempt = Js, X.camelCase = Us, X.capitalize = co, X.ceil = tu, X.clone = bi, X.cloneDeep = wi, X.deburr = lo, X.endsWith = fo, X.escape = ho, X.escapeRegExp = po, X.every = Kr, X.find = is, X.findIndex = Ua, X.findKey = Ps, X.findLast = os, X.findLastIndex = Wa, X.findLastKey = Ds, X.findWhere = Qr, X.first = br, X.floor = eu, X.get = Ji, X.gt = Si, X.gte = Ci, X.has = Qi, X.identity = _o, X.includes = Zr, X.indexOf = Cr, X.inRange = so, X.isArguments = Ei, X.isArray = Ts, X.isBoolean = ki, X.isDate = Ai, X.isElement = _i, X.isEmpty = Ti, X.isEqual = Ni, X.isError = ji, X.isFinite = Oi, X.isFunction = Mi, X.isMatch = Di, X.isNaN = Fi, X.isNative = Li, X.isNull = Ii, X.isNumber = Ri, X.isObject = Pi, X.isPlainObject = Vi, X.isRegExp = qi, X.isString = Hi, X.isTypedArray = Bi, X.isUndefined = zi, X.kebabCase = Ws, X.last = kr, X.lastIndexOf = Ar, X.lt = Ui, X.lte = Wi, X.max = nu, X.min = ru, X.noConflict = Oo, X.noop = Mo, X.now = gs, X.pad = go, X.padLeft = Gs, X.padRight = Xs, X.parseInt = vo, X.random = uo, X.reduce = hs, X.reduceRight = ps, X.repeat = mo, X.result = no, X.round = iu, X.runInContext = b, X.size = oi, X.snakeCase = Ys, X.some = ai, X.sortedIndex = Ya, X.sortedLastIndex = Ka, X.startCase = Ks, X.startsWith = yo, X.sum = Vo, X.template = $o, X.trim = xo, X.trimLeft = bo, X.trimRight = wo, X.trunc = So, X.unescape = Co, X.uniqueId = Io, X.words = Eo, X.all = Kr, X.any = ai, X.contains = Zr, X.eq = Ni, X.detect = is, X.foldl = hs, X.foldr = ps, X.head = br, X.include = Zr, X.inject = hs, jo(X, function() {
            var t = {};
            return je(X, function(e, n) {
                X.prototype[n] || (t[n] = e)
            }), t
        }(), !1), X.sample = ri, X.prototype.sample = function(t) {
            return this.__chain__ || null != t ? this.thru(function(e) {
                return ri(e, t)
            }) : ri(this.value())
        }, X.VERSION = S, re(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
            X[t].placeholder = X
        }), re(["drop", "take"], function(t, e) {
            qt.prototype[t] = function(n) {
                var r = this.__filtered__;
                if (r && !e) return new qt(this);
                n = null == n ? 1 : wa(ya(n) || 0, 0);
                var i = this.clone();
                return r ? i.__takeCount__ = Sa(i.__takeCount__, n) : i.__views__.push({
                    size: n,
                    type: t + (i.__dir__ < 0 ? "Right" : "")
                }), i
            }, qt.prototype[t + "Right"] = function(e) {
                return this.reverse()[t](e).reverse()
            }
        }), re(["filter", "map", "takeWhile"], function(t, e) {
            var n = e + 1,
                r = n != R;
            qt.prototype[t] = function(t, e) {
                var i = this.clone();
                return i.__iteratees__.push({
                    iteratee: qn(t, e, 1),
                    type: n
                }), i.__filtered__ = i.__filtered__ || r, i
            }
        }), re(["first", "last"], function(t, e) {
            var n = "take" + (e ? "Right" : "");
            qt.prototype[t] = function() {
                return this[n](1).value()[0]
            }
        }), re(["initial", "rest"], function(t, e) {
            var n = "drop" + (e ? "" : "Right");
            qt.prototype[t] = function() {
                return this.__filtered__ ? new qt(this) : this[n](1)
            }
        }), re(["pluck", "where"], function(t, e) {
            var n = e ? "filter" : "map",
                r = e ? Re : Po;
            qt.prototype[t] = function(t) {
                return this[n](r(t))
            }
        }), qt.prototype.compact = function() {
            return this.filter(_o)
        }, qt.prototype.reject = function(t, e) {
            return t = qn(t, e, 1), this.filter(function(e) {
                return !t(e)
            })
        }, qt.prototype.slice = function(t, e) {
            t = null == t ? 0 : +t || 0;
            var n = this;
            return n.__filtered__ && (t > 0 || 0 > e) ? new qt(n) : (0 > t ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== w && (e = +e || 0, n = 0 > e ? n.dropRight(-e) : n.take(e - t)), n)
        }, qt.prototype.takeRightWhile = function(t, e) {
            return this.reverse().takeWhile(t, e).reverse()
        }, qt.prototype.toArray = function() {
            return this.take(_a)
        }, je(qt.prototype, function(t, e) {
            var n = /^(?:filter|map|reject)|While$/.test(e),
                r = /^(?:first|last)$/.test(e),
                i = X[r ? "take" + ("last" == e ? "Right" : "") : e];
            i && (X.prototype[e] = function() {
                var e = r ? [1] : arguments,
                    o = this.__chain__,
                    a = this.__wrapped__,
                    s = !!this.__actions__.length,
                    u = a instanceof qt,
                    c = e[0],
                    l = u || Ts(a);
                l && n && "function" == typeof c && 1 != c.length && (u = l = !1);
                var f = function(t) {
                        return r && o ? i(t, 1)[0] : i.apply(w, ce([t], e))
                    },
                    h = {
                        func: Br,
                        args: [f],
                        thisArg: w
                    },
                    p = u && !s;
                if (r && !o) return p ? (a = a.clone(), a.__actions__.push(h), t.call(a)) : i.call(w, this.value())[0];
                if (!r && l) {
                    a = p ? a : new qt(this);
                    var d = t.apply(a, e);
                    return d.__actions__.push(h), new tt(d, o)
                }
                return this.thru(f)
            })
        }), re(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function(t) {
            var e = (/^(?:replace|split)$/.test(t) ? Zo : Jo)[t],
                n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                r = /^(?:join|pop|replace|shift)$/.test(t);
            X.prototype[t] = function() {
                var t = arguments;
                return r && !this.__chain__ ? e.apply(this.value(), t) : this[n](function(n) {
                    return e.apply(n, t)
                })
            }
        }), je(qt.prototype, function(t, e) {
            var n = X[e];
            if (n) {
                var r = n.name + "",
                    i = Pa[r] || (Pa[r] = []);
                i.push({
                    name: e,
                    func: n
                })
            }
        }), Pa[On(w, E).name] = [{
            name: "wrapper",
            func: w
        }], qt.prototype.clone = Ht, qt.prototype.reverse = Bt, qt.prototype.value = zt, X.prototype.chain = zr, X.prototype.commit = Ur, X.prototype.concat = es, X.prototype.plant = Wr, X.prototype.reverse = Gr, X.prototype.toString = Xr, X.prototype.run = X.prototype.toJSON = X.prototype.valueOf = X.prototype.value = Yr, X.prototype.collect = X.prototype.map, X.prototype.head = X.prototype.first, X.prototype.select = X.prototype.filter, X.prototype.tail = X.prototype.rest, X
    }
    var w, S = "3.10.1",
        C = 1,
        E = 2,
        k = 4,
        A = 8,
        _ = 16,
        T = 32,
        N = 64,
        j = 128,
        O = 256,
        M = 30,
        P = "...",
        D = 150,
        F = 16,
        L = 200,
        I = 1,
        R = 2,
        V = "Expected a function",
        q = "__lodash_placeholder__",
        H = "[object Arguments]",
        B = "[object Array]",
        z = "[object Boolean]",
        U = "[object Date]",
        W = "[object Error]",
        G = "[object Function]",
        X = "[object Map]",
        Y = "[object Number]",
        K = "[object Object]",
        J = "[object RegExp]",
        Q = "[object Set]",
        Z = "[object String]",
        tt = "[object WeakMap]",
        et = "[object ArrayBuffer]",
        nt = "[object Float32Array]",
        rt = "[object Float64Array]",
        it = "[object Int8Array]",
        ot = "[object Int16Array]",
        at = "[object Int32Array]",
        st = "[object Uint8Array]",
        ut = "[object Uint8ClampedArray]",
        ct = "[object Uint16Array]",
        lt = "[object Uint32Array]",
        ft = /\b__p \+= '';/g,
        ht = /\b(__p \+=) '' \+/g,
        pt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        dt = /&(?:amp|lt|gt|quot|#39|#96);/g,
        gt = /[&<>"'`]/g,
        vt = RegExp(dt.source),
        mt = RegExp(gt.source),
        yt = /<%-([\s\S]+?)%>/g,
        $t = /<%([\s\S]+?)%>/g,
        xt = /<%=([\s\S]+?)%>/g,
        bt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
        wt = /^\w*$/,
        St = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        Ct = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
        Et = RegExp(Ct.source),
        kt = /[\u0300-\u036f\ufe20-\ufe23]/g,
        At = /\\(\\)?/g,
        _t = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Tt = /\w*$/,
        Nt = /^0[xX]/,
        jt = /^\[object .+?Constructor\]$/,
        Ot = /^\d+$/,
        Mt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        Pt = /($^)/,
        Dt = /['\n\r\u2028\u2029\\]/g,
        Ft = function() {
            var t = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                e = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
            return RegExp(t + "+(?=" + t + e + ")|" + t + "?" + e + "|" + t + "+|[0-9]+", "g")
        }(),
        Lt = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap"],
        It = -1,
        Rt = {};
    Rt[nt] = Rt[rt] = Rt[it] = Rt[ot] = Rt[at] = Rt[st] = Rt[ut] = Rt[ct] = Rt[lt] = !0, Rt[H] = Rt[B] = Rt[et] = Rt[z] = Rt[U] = Rt[W] = Rt[G] = Rt[X] = Rt[Y] = Rt[K] = Rt[J] = Rt[Q] = Rt[Z] = Rt[tt] = !1;
    var Vt = {};
    Vt[H] = Vt[B] = Vt[et] = Vt[z] = Vt[U] = Vt[nt] = Vt[rt] = Vt[it] = Vt[ot] = Vt[at] = Vt[Y] = Vt[K] = Vt[J] = Vt[Z] = Vt[st] = Vt[ut] = Vt[ct] = Vt[lt] = !0, Vt[W] = Vt[G] = Vt[X] = Vt[Q] = Vt[tt] = !1;
    var qt = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss"
        },
        Ht = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        },
        Bt = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        },
        zt = {
            "function": !0,
            object: !0
        },
        Ut = {
            0: "x30",
            1: "x31",
            2: "x32",
            3: "x33",
            4: "x34",
            5: "x35",
            6: "x36",
            7: "x37",
            8: "x38",
            9: "x39",
            A: "x41",
            B: "x42",
            C: "x43",
            D: "x44",
            E: "x45",
            F: "x46",
            a: "x61",
            b: "x62",
            c: "x63",
            d: "x64",
            e: "x65",
            f: "x66",
            n: "x6e",
            r: "x72",
            t: "x74",
            u: "x75",
            v: "x76",
            x: "x78"
        },
        Wt = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        Gt = zt[typeof exports] && exports && !exports.nodeType && exports,
        Xt = zt[typeof module] && module && !module.nodeType && module,
        Yt = Gt && Xt && "object" == typeof global && global && global.Object && global,
        Kt = zt[typeof self] && self && self.Object && self,
        Jt = zt[typeof window] && window && window.Object && window,
        Qt = Xt && Xt.exports === Gt && Gt,
        Zt = Yt || Jt !== (this && this.window) && Jt || Kt || this,
        te = b();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (Zt._ = te, define(function() {
        return te
    })) : Gt && Xt ? Qt ? (Xt.exports = te)._ = te : Gt._ = te : Zt._ = te
}).call(this),
    function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = "length" in t && t.length,
                n = Z.type(t);
            return "function" === n || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function r(t, e, n) {
            if (Z.isFunction(e)) return Z.grep(t, function(t, r) {
                return !!e.call(t, r, t) !== n
            });
            if (e.nodeType) return Z.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (st.test(e)) return Z.filter(e, t, n);
                e = Z.filter(e, t)
            }
            return Z.grep(t, function(t) {
                return W.call(e, t) >= 0 !== n
            })
        }

        function i(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = dt[t] = {};
            return Z.each(t.match(pt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function a() {
            J.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), Z.ready()
        }

        function s() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = Z.expando + s.uid++
        }

        function u(t, e, n) {
            var r;
            if (void 0 === n && 1 === t.nodeType)
                if (r = "data-" + e.replace(xt, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : $t.test(n) ? Z.parseJSON(n) : n
                    } catch (i) {}
                    yt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function c() {
            return !0
        }

        function l() {
            return !1
        }

        function f() {
            try {
                return J.activeElement
            } catch (t) {}
        }

        function h(t, e) {
            return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function p(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function d(t) {
            var e = Ft.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function g(t, e) {
            for (var n = 0, r = t.length; r > n; n++) mt.set(t[n], "globalEval", !e || mt.get(e[n], "globalEval"))
        }

        function v(t, e) {
            var n, r, i, o, a, s, u, c;
            if (1 === e.nodeType) {
                if (mt.hasData(t) && (o = mt.access(t), a = mt.set(e, o), c = o.events)) {
                    delete a.handle, a.events = {};
                    for (i in c)
                        for (n = 0, r = c[i].length; r > n; n++) Z.event.add(e, i, c[i][n])
                }
                yt.hasData(t) && (s = yt.access(t), u = Z.extend({}, s), yt.set(e, u))
            }
        }

        function m(t, e) {
            var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], n) : n
        }

        function y(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Ct.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }

        function $(e, n) {
            var r, i = Z(n.createElement(e)).appendTo(n.body),
                o = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
            return i.detach(), o
        }

        function x(t) {
            var e = J,
                n = Vt[t];
            return n || (n = $(t, e), "none" !== n && n || (Rt = (Rt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Rt[0].contentDocument, e.write(), e.close(), n = $(t, e), Rt.detach()), Vt[t] = n), n
        }

        function b(t, e, n) {
            var r, i, o, a, s = t.style;
            return n = n || Bt(t), n && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || Z.contains(t.ownerDocument, t) || (a = Z.style(t, e)), Ht.test(a) && qt.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function w(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function S(t, e) {
            if (e in t) return e;
            for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Yt.length; i--;)
                if (e = Yt[i] + n, e in t) return e;
            return r
        }

        function C(t, e, n) {
            var r = Ut.exec(e);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
        }

        function E(t, e, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Z.css(t, n + wt[o], !0, i)), r ? ("content" === n && (a -= Z.css(t, "padding" + wt[o], !0, i)), "margin" !== n && (a -= Z.css(t, "border" + wt[o] + "Width", !0, i))) : (a += Z.css(t, "padding" + wt[o], !0, i), "padding" !== n && (a += Z.css(t, "border" + wt[o] + "Width", !0, i)));
            return a
        }

        function k(t, e, n) {
            var r = !0,
                i = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = Bt(t),
                a = "border-box" === Z.css(t, "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if (i = b(t, e, o), (0 > i || null == i) && (i = t.style[e]), Ht.test(i)) return i;
                r = a && (K.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
            }
            return i + E(t, e, n || (a ? "border" : "content"), r, o) + "px"
        }

        function A(t, e) {
            for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++) r = t[a], r.style && (o[a] = mt.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && St(r) && (o[a] = mt.access(r, "olddisplay", x(r.nodeName)))) : (i = St(r), "none" === n && i || mt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
            for (a = 0; s > a; a++) r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
            return t
        }

        function _(t, e, n, r, i) {
            return new _.prototype.init(t, e, n, r, i)
        }

        function T() {
            return setTimeout(function() {
                Kt = void 0
            }), Kt = Z.now()
        }

        function N(t, e) {
            var n, r = 0,
                i = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = wt[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function j(t, e, n) {
            for (var r, i = (ne[e] || []).concat(ne["*"]), o = 0, a = i.length; a > o; o++)
                if (r = i[o].call(n, e, t)) return r
        }

        function O(t, e, n) {
            var r, i, o, a, s, u, c, l, f = this,
                h = {},
                p = t.style,
                d = t.nodeType && St(t),
                g = mt.get(t, "fxshow");
            n.queue || (s = Z._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                s.unqueued || u()
            }), s.unqueued++, f.always(function() {
                f.always(function() {
                    s.unqueued--, Z.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = Z.css(t, "display"), l = "none" === c ? mt.get(t, "olddisplay") || x(t.nodeName) : c, "inline" === l && "none" === Z.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (r in e)
                if (i = e[r], Qt.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        d = !0
                    }
                    h[r] = g && g[r] || Z.style(t, r)
                } else c = void 0;
            if (Z.isEmptyObject(h)) "inline" === ("none" === c ? x(t.nodeName) : c) && (p.display = c);
            else {
                g ? "hidden" in g && (d = g.hidden) : g = mt.access(t, "fxshow", {}), o && (g.hidden = !d), d ? Z(t).show() : f.done(function() {
                    Z(t).hide()
                }), f.done(function() {
                    var e;
                    mt.remove(t, "fxshow");
                    for (e in h) Z.style(t, e, h[e])
                });
                for (r in h) a = j(d ? g[r] : 0, r, f), r in g || (g[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function M(t, e) {
            var n, r, i, o, a;
            for (n in t)
                if (r = Z.camelCase(n), i = e[r], o = t[n], Z.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = Z.cssHooks[r], a && "expand" in a) {
                    o = a.expand(o), delete t[r];
                    for (n in o) n in t || (t[n] = o[n], e[n] = i)
                } else e[r] = i
        }

        function P(t, e, n) {
            var r, i, o = 0,
                a = ee.length,
                s = Z.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (i) return !1;
                    for (var e = Kt || T(), n = Math.max(0, c.startTime + c.duration - e), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[a].run(o);
                    return s.notifyWith(t, [c, o, n]), 1 > o && u ? n : (s.resolveWith(t, [c]), !1)
                },
                c = s.promise({
                    elem: t,
                    props: Z.extend({}, e),
                    opts: Z.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Kt || T(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var r = Z.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function(e) {
                        var n = 0,
                            r = e ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) c.tweens[n].run(1);
                        return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                    }
                }),
                l = c.props;
            for (M(l, c.opts.specialEasing); a > o; o++)
                if (r = ee[o].call(c, t, l, c.opts)) return r;
            return Z.map(l, j, c), Z.isFunction(c.opts.start) && c.opts.start.call(t, c), Z.fx.timer(Z.extend(u, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function D(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var r, i = 0,
                    o = e.toLowerCase().match(pt) || [];
                if (Z.isFunction(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
            }
        }

        function F(t, e, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, Z.each(t[s] || [], function(t, s) {
                    var c = s(e, n, r);
                    return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (e.dataTypes.unshift(c), i(c), !1)
                }), u
            }
            var o = {},
                a = t === $e;
            return i(e.dataTypes[0]) || !o["*"] && i("*")
        }

        function L(t, e) {
            var n, r, i = Z.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
            return r && Z.extend(!0, t, r), t
        }

        function I(t, e, n) {
            for (var r, i, o, a, s = t.contents, u = t.dataTypes;
                "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
                for (i in s)
                    if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
            if (u[0] in n) o = u[0];
            else {
                for (i in n) {
                    if (!u[0] || t.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    a || (a = i)
                }
                o = o || a
            }
            return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
        }

        function R(t, e, n, r) {
            var i, o, a, s, u, c = {},
                l = t.dataTypes.slice();
            if (l[1])
                for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
            for (o = l.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                if (a = c[u + " " + o] || c["* " + o], !a)
                    for (i in c)
                        if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && t["throws"]) e = a(e);
                    else try {
                        e = a(e)
                    } catch (f) {
                        return {
                            state: "parsererror",
                            error: a ? f : "No conversion from " + u + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function V(t, e, n, r) {
            var i;
            if (Z.isArray(e)) Z.each(e, function(e, i) {
                n || Ce.test(t) ? r(t, i) : V(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
            });
            else if (n || "object" !== Z.type(e)) r(t, e);
            else
                for (i in e) V(t + "[" + i + "]", e[i], n, r)
        }

        function q(t) {
            return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var H = [],
            B = H.slice,
            z = H.concat,
            U = H.push,
            W = H.indexOf,
            G = {},
            X = G.toString,
            Y = G.hasOwnProperty,
            K = {},
            J = t.document,
            Q = "2.1.4",
            Z = function(t, e) {
                return new Z.fn.init(t, e)
            },
            tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            et = /^-ms-/,
            nt = /-([\da-z])/gi,
            rt = function(t, e) {
                return e.toUpperCase()
            };
        Z.fn = Z.prototype = {
            jquery: Q,
            constructor: Z,
            selector: "",
            length: 0,
            toArray: function() {
                return B.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : B.call(this)
            },
            pushStack: function(t) {
                var e = Z.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return Z.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(Z.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(B.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: U,
            sort: H.sort,
            splice: H.splice
        }, Z.extend = Z.fn.extend = function() {
            var t, e, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
                if (null != (t = arguments[s]))
                    for (e in t) n = a[e], r = t[e], a !== r && (c && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[e] = Z.extend(c, o, r)) : void 0 !== r && (a[e] = r));
            return a
        }, Z.extend({
            expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === Z.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(t) {
                return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? G[X.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, n = eval;
                t = Z.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function(t) {
                return t.replace(et, "ms-").replace(nt, rt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, r) {
                var i, o = 0,
                    a = t.length,
                    s = n(t);
                if (r) {
                    if (s)
                        for (; a > o && (i = e.apply(t[o], r), i !== !1); o++);
                    else
                        for (o in t)
                            if (i = e.apply(t[o], r), i === !1) break
                } else if (s)
                    for (; a > o && (i = e.call(t[o], o, t[o]), i !== !1); o++);
                else
                    for (o in t)
                        if (i = e.call(t[o], o, t[o]), i === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(tt, "")
            },
            makeArray: function(t, e) {
                var r = e || [];
                return null != t && (n(Object(t)) ? Z.merge(r, "string" == typeof t ? [t] : t) : U.call(r, t)), r
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : W.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, r = 0, i = t.length; n > r; r++) t[i++] = e[r];
                return t.length = i, t
            },
            grep: function(t, e, n) {
                for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++) r = !e(t[o], o), r !== s && i.push(t[o]);
                return i
            },
            map: function(t, e, r) {
                var i, o = 0,
                    a = t.length,
                    s = n(t),
                    u = [];
                if (s)
                    for (; a > o; o++) i = e(t[o], o, r), null != i && u.push(i);
                else
                    for (o in t) i = e(t[o], o, r), null != i && u.push(i);
                return z.apply([], u)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, r, i;
                return "string" == typeof e && (n = t[e], e = t, t = n), Z.isFunction(t) ? (r = B.call(arguments, 2), i = function() {
                    return t.apply(e || this, r.concat(B.call(arguments)));
                }, i.guid = t.guid = t.guid || Z.guid++, i) : void 0
            },
            now: Date.now,
            support: K
        }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            G["[object " + e + "]"] = e.toLowerCase()
        });
        var it = function(t) {
            function e(t, e, n, r) {
                var i, o, a, s, u, c, f, p, d, g;
                if ((e ? e.ownerDocument || e : V) !== O && j(e), e = e || O, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!r && P) {
                    if (11 !== s && (i = yt.exec(t)))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = e.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && I(e, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                            if ((a = i[3]) && b.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(a)), n
                        }
                    if (b.qsa && (!D || !D.test(t))) {
                        if (p = f = R, d = e, g = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (c = E(t), (f = e.getAttribute("id")) ? p = f.replace(xt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", u = c.length; u--;) c[u] = p + h(c[u]);
                            d = $t.test(t) && l(e.parentNode) || e, g = c.join(",")
                        }
                        if (g) try {
                            return Q.apply(n, d.querySelectorAll(g)), n
                        } catch (v) {} finally {
                            f || e.removeAttribute("id")
                        }
                    }
                }
                return A(t.replace(ut, "$1"), e, n, r)
            }

            function n() {
                function t(n, r) {
                    return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = r
                }
                var e = [];
                return t
            }

            function r(t) {
                return t[R] = !0, t
            }

            function i(t) {
                var e = O.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), r = t.length; r--;) w.attrHandle[n[r]] = e
            }

            function a(t, e) {
                var n = e && t,
                    r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function s(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function u(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return r(function(e) {
                    return e = +e, r(function(n, r) {
                        for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function l(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function f() {}

            function h(t) {
                for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
                return r
            }

            function p(t, e, n) {
                var r = e.dir,
                    i = n && "parentNode" === r,
                    o = H++;
                return e.first ? function(e, n, o) {
                    for (; e = e[r];)
                        if (1 === e.nodeType || i) return t(e, n, o)
                } : function(e, n, a) {
                    var s, u, c = [q, o];
                    if (a) {
                        for (; e = e[r];)
                            if ((1 === e.nodeType || i) && t(e, n, a)) return !0
                    } else
                        for (; e = e[r];)
                            if (1 === e.nodeType || i) {
                                if (u = e[R] || (e[R] = {}), (s = u[r]) && s[0] === q && s[1] === o) return c[2] = s[2];
                                if (u[r] = c, c[2] = t(e, n, a)) return !0
                            }
                }
            }

            function d(t) {
                return t.length > 1 ? function(e, n, r) {
                    for (var i = t.length; i--;)
                        if (!t[i](e, n, r)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, n, r) {
                for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
                return r
            }

            function v(t, e, n, r, i) {
                for (var o, a = [], s = 0, u = t.length, c = null != e; u > s; s++)(o = t[s]) && (!n || n(o, r, i)) && (a.push(o), c && e.push(s));
                return a
            }

            function m(t, e, n, i, o, a) {
                return i && !i[R] && (i = m(i)), o && !o[R] && (o = m(o, a)), r(function(r, a, s, u) {
                    var c, l, f, h = [],
                        p = [],
                        d = a.length,
                        m = r || g(e || "*", s.nodeType ? [s] : s, []),
                        y = !t || !r && e ? m : v(m, h, t, s, u),
                        $ = n ? o || (r ? t : d || i) ? [] : a : y;
                    if (n && n(y, $, s, u), i)
                        for (c = v($, p), i(c, [], s, u), l = c.length; l--;)(f = c[l]) && ($[p[l]] = !(y[p[l]] = f));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (c = [], l = $.length; l--;)(f = $[l]) && c.push(y[l] = f);
                                o(null, $ = [], c, u)
                            }
                            for (l = $.length; l--;)(f = $[l]) && (c = o ? tt(r, f) : h[l]) > -1 && (r[c] = !(a[c] = f))
                        }
                    } else $ = v($ === a ? $.splice(d, $.length) : $), o ? o(null, a, $, u) : Q.apply(a, $)
                })
            }

            function y(t) {
                for (var e, n, r, i = t.length, o = w.relative[t[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = p(function(t) {
                        return t === e
                    }, a, !0), c = p(function(t) {
                        return tt(e, t) > -1
                    }, a, !0), l = [function(t, n, r) {
                        var i = !o && (r || n !== _) || ((e = n).nodeType ? u(t, n, r) : c(t, n, r));
                        return e = null, i
                    }]; i > s; s++)
                    if (n = w.relative[t[s].type]) l = [p(d(l), n)];
                    else {
                        if (n = w.filter[t[s].type].apply(null, t[s].matches), n[R]) {
                            for (r = ++s; i > r && !w.relative[t[r].type]; r++);
                            return m(s > 1 && d(l), s > 1 && h(t.slice(0, s - 1).concat({
                                value: " " === t[s - 2].type ? "*" : ""
                            })).replace(ut, "$1"), n, r > s && y(t.slice(s, r)), i > r && y(t = t.slice(r)), i > r && h(t))
                        }
                        l.push(n)
                    }
                return d(l)
            }

            function $(t, n) {
                var i = n.length > 0,
                    o = t.length > 0,
                    a = function(r, a, s, u, c) {
                        var l, f, h, p = 0,
                            d = "0",
                            g = r && [],
                            m = [],
                            y = _,
                            $ = r || o && w.find.TAG("*", c),
                            x = q += null == y ? 1 : Math.random() || .1,
                            b = $.length;
                        for (c && (_ = a !== O && a); d !== b && null != (l = $[d]); d++) {
                            if (o && l) {
                                for (f = 0; h = t[f++];)
                                    if (h(l, a, s)) {
                                        u.push(l);
                                        break
                                    }
                                c && (q = x)
                            }
                            i && ((l = !h && l) && p--, r && g.push(l))
                        }
                        if (p += d, i && d !== p) {
                            for (f = 0; h = n[f++];) h(g, m, a, s);
                            if (r) {
                                if (p > 0)
                                    for (; d--;) g[d] || m[d] || (m[d] = K.call(u));
                                m = v(m)
                            }
                            Q.apply(u, m), c && !r && m.length > 0 && p + n.length > 1 && e.uniqueSort(u)
                        }
                        return c && (q = x, _ = y), g
                    };
                return i ? r(a) : a
            }
            var x, b, w, S, C, E, k, A, _, T, N, j, O, M, P, D, F, L, I, R = "sizzle" + 1 * new Date,
                V = t.document,
                q = 0,
                H = 0,
                B = n(),
                z = n(),
                U = n(),
                W = function(t, e) {
                    return t === e && (N = !0), 0
                },
                G = 1 << 31,
                X = {}.hasOwnProperty,
                Y = [],
                K = Y.pop,
                J = Y.push,
                Q = Y.push,
                Z = Y.slice,
                tt = function(t, e) {
                    for (var n = 0, r = t.length; r > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = rt.replace("w", "w#"),
                ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ct = new RegExp("^" + nt + "*," + nt + "*"),
                lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                ht = new RegExp(at),
                pt = new RegExp("^" + it + "$"),
                dt = {
                    ID: new RegExp("^#(" + rt + ")"),
                    CLASS: new RegExp("^\\.(" + rt + ")"),
                    TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + at),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                gt = /^(?:input|select|textarea|button)$/i,
                vt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                $t = /[+~]/,
                xt = /'|\\/g,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                wt = function(t, e, n) {
                    var r = "0x" + e - 65536;
                    return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                St = function() {
                    j()
                };
            try {
                Q.apply(Y = Z.call(V.childNodes), V.childNodes), Y[V.childNodes.length].nodeType
            } catch (Ct) {
                Q = {
                    apply: Y.length ? function(t, e) {
                        J.apply(t, Z.call(e))
                    } : function(t, e) {
                        for (var n = t.length, r = 0; t[n++] = e[r++];);
                        t.length = n - 1
                    }
                }
            }
            b = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, j = e.setDocument = function(t) {
                var e, n, r = t ? t.ownerDocument || t : V;
                return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, M = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", St, !1) : n.attachEvent && n.attachEvent("onunload", St)), P = !C(r), b.attributes = i(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), b.getElementsByTagName = i(function(t) {
                    return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
                }), b.getElementsByClassName = mt.test(r.getElementsByClassName), b.getById = i(function(t) {
                    return M.appendChild(t).id = R, !r.getElementsByName || !r.getElementsByName(R).length
                }), b.getById ? (w.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && P) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, w.filter.ID = function(t) {
                    var e = t.replace(bt, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete w.find.ID, w.filter.ID = function(t) {
                    var e = t.replace(bt, wt);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), w.find.TAG = b.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, r = [],
                        i = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, w.find.CLASS = b.getElementsByClassName && function(t, e) {
                    return P ? e.getElementsByClassName(t) : void 0
                }, F = [], D = [], (b.qsa = mt.test(r.querySelectorAll)) && (i(function(t) {
                    M.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || D.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || D.push("~="), t.querySelectorAll(":checked").length || D.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || D.push(".#.+[+~]")
                }), i(function(t) {
                    var e = r.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && D.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), D.push(",.*:")
                })), (b.matchesSelector = mt.test(L = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && i(function(t) {
                    b.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), F.push("!=", at)
                }), D = D.length && new RegExp(D.join("|")), F = F.length && new RegExp(F.join("|")), e = mt.test(M.compareDocumentPosition), I = e || mt.test(M.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        r = e && e.parentNode;
                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, W = e ? function(t, e) {
                    if (t === e) return N = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === V && I(V, t) ? -1 : e === r || e.ownerDocument === V && I(V, e) ? 1 : T ? tt(T, t) - tt(T, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return N = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        s = e.parentNode,
                        u = [t],
                        c = [e];
                    if (!o || !s) return t === r ? -1 : e === r ? 1 : o ? -1 : s ? 1 : T ? tt(T, t) - tt(T, e) : 0;
                    if (o === s) return a(t, e);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (n = e; n = n.parentNode;) c.unshift(n);
                    for (; u[i] === c[i];) i++;
                    return i ? a(u[i], c[i]) : u[i] === V ? -1 : c[i] === V ? 1 : 0
                }, r) : O
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== O && j(t), n = n.replace(ft, "='$1']"), b.matchesSelector && P && (!F || !F.test(n)) && (!D || !D.test(n))) try {
                    var r = L.call(t, n);
                    if (r || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                } catch (i) {}
                return e(n, O, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== O && j(t), I(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== O && j(t);
                var n = w.attrHandle[e.toLowerCase()],
                    r = n && X.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
                return void 0 !== r ? r : b.attributes || !P ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    r = 0,
                    i = 0;
                if (N = !b.detectDuplicates, T = !b.sortStable && t.slice(0), t.sort(W), N) {
                    for (; e = t[i++];) e === t[i] && (r = n.push(i));
                    for (; r--;) t.splice(n[r], 1)
                }
                return T = null, t
            }, S = e.getText = function(t) {
                var e, n = "",
                    r = 0,
                    i = t.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                    } else if (3 === i || 4 === i) return t.nodeValue
                } else
                    for (; e = t[r++];) n += S(e);
                return n
            }, w = e.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(bt, wt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, r) {
                        return function(i) {
                            var o = e.attr(i, t);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, r, i) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === r && 0 === i ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, u) {
                            var c, l, f, h, p, d, g = o !== a ? "nextSibling" : "previousSibling",
                                v = e.parentNode,
                                m = s && e.nodeName.toLowerCase(),
                                y = !u && !s;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (f = e; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                        d = g = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [a ? v.firstChild : v.lastChild], a && y) {
                                    for (l = v[R] || (v[R] = {}), c = l[t] || [], p = c[0] === q && c[1], h = c[0] === q && c[2], f = p && v.childNodes[p]; f = ++p && f && f[g] || (h = p = 0) || d.pop();)
                                        if (1 === f.nodeType && ++h && f === e) {
                                            l[t] = [q, p, h];
                                            break
                                        }
                                } else if (y && (c = (e[R] || (e[R] = {}))[t]) && c[0] === q) h = c[1];
                                else
                                    for (;
                                        (f = ++p && f && f[g] || (h = p = 0) || d.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++h || (y && ((f[R] || (f[R] = {}))[t] = [q, h]), f !== e)););
                                return h -= i, h === r || h % r === 0 && h / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var i, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[R] ? o(n) : o.length > 1 ? (i = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                            for (var r, i = o(t, n), a = i.length; a--;) r = tt(t, i[a]), t[r] = !(e[r] = i[a])
                        }) : function(t) {
                            return o(t, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(t) {
                        var e = [],
                            n = [],
                            i = k(t.replace(ut, "$1"));
                        return i[R] ? r(function(t, e, n, r) {
                            for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                        }) : function(t, r, o) {
                            return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: r(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: r(function(t) {
                        return t = t.replace(bt, wt),
                            function(e) {
                                return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                            }
                    }),
                    lang: r(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === M
                    },
                    focus: function(t) {
                        return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !w.pseudos.empty(t)
                    },
                    header: function(t) {
                        return vt.test(t.nodeName)
                    },
                    input: function(t) {
                        return gt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: c(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function(t, e, n) {
                        for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
                        return t
                    }),
                    gt: c(function(t, e, n) {
                        for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
                        return t
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[x] = u(x);
            return f.prototype = w.filters = w.pseudos, w.setFilters = new f, E = e.tokenize = function(t, n) {
                var r, i, o, a, s, u, c, l = z[t + " "];
                if (l) return n ? 0 : l.slice(0);
                for (s = t, u = [], c = w.preFilter; s;) {
                    (!r || (i = ct.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = lt.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ut, " ")
                    }), s = s.slice(r.length));
                    for (a in w.filter) !(i = dt[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? e.error(t) : z(t, u).slice(0)
            }, k = e.compile = function(t, e) {
                var n, r = [],
                    i = [],
                    o = U[t + " "];
                if (!o) {
                    for (e || (e = E(t)), n = e.length; n--;) o = y(e[n]), o[R] ? r.push(o) : i.push(o);
                    o = U(t, $(i, r)), o.selector = t
                }
                return o
            }, A = e.select = function(t, e, n, r) {
                var i, o, a, s, u, c = "function" == typeof t && t,
                    f = !r && E(t = c.selector || t);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === e.nodeType && P && w.relative[o[1].type]) {
                        if (e = (w.find.ID(a.matches[0].replace(bt, wt), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (i = dt.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                        if ((u = w.find[s]) && (r = u(a.matches[0].replace(bt, wt), $t.test(o[0].type) && l(e.parentNode) || e))) {
                            if (o.splice(i, 1), t = r.length && h(o), !t) return Q.apply(n, r), n;
                            break
                        }
                }
                return (c || k(t, f))(r, e, !P, n, $t.test(t) && l(e.parentNode) || e), n
            }, b.sortStable = R.split("").sort(W).join("") === R, b.detectDuplicates = !!N, j(), b.sortDetached = i(function(t) {
                return 1 & t.compareDocumentPosition(O.createElement("div"))
            }), i(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), b.attributes && i(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), i(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(et, function(t, e, n) {
                var r;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }), e
        }(t);
        Z.find = it, Z.expr = it.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = it.uniqueSort, Z.text = it.getText, Z.isXMLDoc = it.isXML, Z.contains = it.contains;
        var ot = Z.expr.match.needsContext,
            at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            st = /^.[^:#\[\.,]*$/;
        Z.filter = function(t, e, n) {
            var r = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? Z.find.matchesSelector(r, t) ? [r] : [] : Z.find.matches(t, Z.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, Z.fn.extend({
            find: function(t) {
                var e, n = this.length,
                    r = [],
                    i = this;
                if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (Z.contains(i[e], this)) return !0
                }));
                for (e = 0; n > e; e++) Z.find(t, i[e], r);
                return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
            },
            filter: function(t) {
                return this.pushStack(r(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(r(this, t || [], !0))
            },
            is: function(t) {
                return !!r(this, "string" == typeof t && ot.test(t) ? Z(t) : t || [], !1).length
            }
        });
        var ut, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            lt = Z.fn.init = function(t, e) {
                var n, r;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ut).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), at.test(n[1]) && Z.isPlainObject(e))
                            for (n in e) Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof ut.ready ? ut.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
            };
        lt.prototype = Z.fn, ut = Z(J);
        var ft = /^(?:parents|prev(?:Until|All))/,
            ht = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Z.extend({
            dir: function(t, e, n) {
                for (var r = [], i = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (i && Z(t).is(n)) break;
                        r.push(t)
                    }
                return r
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), Z.fn.extend({
            has: function(t) {
                var e = Z(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; n > t; t++)
                        if (Z.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, r = 0, i = this.length, o = [], a = ot.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? Z.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? W.call(Z(t), this[0]) : W.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), Z.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return Z.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return Z.dir(t, "parentNode", n)
            },
            next: function(t) {
                return i(t, "nextSibling")
            },
            prev: function(t) {
                return i(t, "previousSibling")
            },
            nextAll: function(t) {
                return Z.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return Z.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return Z.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return Z.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return Z.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return Z.sibling(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || Z.merge([], t.childNodes)
            }
        }, function(t, e) {
            Z.fn[t] = function(n, r) {
                var i = Z.map(this, e, n);
                return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (ht[t] || Z.unique(i), ft.test(t) && i.reverse()), this.pushStack(i)
            }
        });
        var pt = /\S+/g,
            dt = {};
        Z.Callbacks = function(t) {
            t = "string" == typeof t ? dt[t] || o(t) : Z.extend({}, t);
            var e, n, r, i, a, s, u = [],
                c = !t.once && [],
                l = function(o) {
                    for (e = t.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
                        if (u[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    r = !1, u && (c ? c.length && l(c.shift()) : e ? u = [] : f.disable())
                },
                f = {
                    add: function() {
                        if (u) {
                            var n = u.length;
                            ! function o(e) {
                                Z.each(e, function(e, n) {
                                    var r = Z.type(n);
                                    "function" === r ? t.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                                })
                            }(arguments), r ? a = u.length : e && (i = n, l(e))
                        }
                        return this
                    },
                    remove: function() {
                        return u && Z.each(arguments, function(t, e) {
                            for (var n;
                                (n = Z.inArray(e, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                        }), this
                    },
                    has: function(t) {
                        return t ? Z.inArray(t, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [], a = 0, this
                    },
                    disable: function() {
                        return u = c = e = void 0, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = void 0, e || f.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, e) {
                        return !u || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? c.push(e) : l(e)), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return f
        }, Z.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Z.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return Z.Deferred(function(n) {
                                Z.each(e, function(e, o) {
                                    var a = Z.isFunction(t[e]) && t[e];
                                    i[o[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && Z.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? Z.extend(t, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, Z.each(e, function(t, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), t && t.call(i, i), i
            },
            when: function(t) {
                var e, n, r, i = 0,
                    o = B.call(arguments),
                    a = o.length,
                    s = 1 !== a || t && Z.isFunction(t.promise) ? a : 0,
                    u = 1 === s ? t : Z.Deferred(),
                    c = function(t, n, r) {
                        return function(i) {
                            n[t] = this, r[t] = arguments.length > 1 ? B.call(arguments) : i, r === e ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, e)) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        });
        var gt;
        Z.fn.ready = function(t) {
            return Z.ready.promise().done(t), this
        }, Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? Z.readyWait++ : Z.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (gt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
            }
        }), Z.ready.promise = function(e) {
            return gt || (gt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), gt.promise(e)
        }, Z.ready.promise();
        var vt = Z.access = function(t, e, n, r, i, o, a) {
            var s = 0,
                u = t.length,
                c = null == n;
            if ("object" === Z.type(n)) {
                i = !0;
                for (s in n) Z.access(t, e, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (a = !0), c && (a ? (e.call(t, r), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(Z(t), n)
                })), e))
                for (; u > s; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
            return i ? t : c ? e.call(t) : u ? e(t[0], n) : o
        };
        Z.acceptData = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
            key: function(t) {
                if (!s.accepts(t)) return 0;
                var e = {},
                    n = t[this.expando];
                if (!n) {
                    n = s.uid++;
                    try {
                        e[this.expando] = {
                            value: n
                        }, Object.defineProperties(t, e)
                    } catch (r) {
                        e[this.expando] = n, Z.extend(t, e)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(t, e, n) {
                var r, i = this.key(t),
                    o = this.cache[i];
                if ("string" == typeof e) o[e] = n;
                else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], e);
                else
                    for (r in e) o[r] = e[r];
                return o
            },
            get: function(t, e) {
                var n = this.cache[this.key(t)];
                return void 0 === e ? n : n[e]
            },
            access: function(t, e, n) {
                var r;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, Z.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, r, i, o = this.key(t),
                    a = this.cache[o];
                if (void 0 === e) this.cache[o] = {};
                else {
                    Z.isArray(e) ? r = e.concat(e.map(Z.camelCase)) : (i = Z.camelCase(e), e in a ? r = [e, i] : (r = i, r = r in a ? [r] : r.match(pt) || [])), n = r.length;
                    for (; n--;) delete a[r[n]]
                }
            },
            hasData: function(t) {
                return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function(t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var mt = new s,
            yt = new s,
            $t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            xt = /([A-Z])/g;
        Z.extend({
            hasData: function(t) {
                return yt.hasData(t) || mt.hasData(t)
            },
            data: function(t, e, n) {
                return yt.access(t, e, n)
            },
            removeData: function(t, e) {
                yt.remove(t, e)
            },
            _data: function(t, e, n) {
                return mt.access(t, e, n)
            },
            _removeData: function(t, e) {
                mt.remove(t, e)
            }
        }), Z.fn.extend({
            data: function(t, e) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (i = yt.get(o), 1 === o.nodeType && !mt.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                        mt.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof t ? this.each(function() {
                    yt.set(this, t)
                }) : vt(this, function(e) {
                    var n, r = Z.camelCase(t);
                    if (o && void 0 === e) {
                        if (n = yt.get(o, t), void 0 !== n) return n;
                        if (n = yt.get(o, r), void 0 !== n) return n;
                        if (n = u(o, r, void 0), void 0 !== n) return n
                    } else this.each(function() {
                        var n = yt.get(this, r);
                        yt.set(this, r, e), -1 !== t.indexOf("-") && void 0 !== n && yt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    yt.remove(this, t)
                })
            }
        }), Z.extend({
            queue: function(t, e, n) {
                var r;
                return t ? (e = (e || "fx") + "queue", r = mt.get(t, e), n && (!r || Z.isArray(n) ? r = mt.access(t, e, Z.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = Z.queue(t, e),
                    r = n.length,
                    i = n.shift(),
                    o = Z._queueHooks(t, e),
                    a = function() {
                        Z.dequeue(t, e)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return mt.get(t, n) || mt.access(t, n, {
                    empty: Z.Callbacks("once memory").add(function() {
                        mt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), Z.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = Z.queue(this, t, e);
                    Z._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Z.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    Z.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, r = 1,
                    i = Z.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = mt.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(e)
            }
        });
        var bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wt = ["Top", "Right", "Bottom", "Left"],
            St = function(t, e) {
                return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
            },
            Ct = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = J.createDocumentFragment(),
                e = t.appendChild(J.createElement("div")),
                n = J.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), K.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Et = "undefined";
        K.focusinBubbles = "onfocusin" in t;
        var kt = /^key/,
            At = /^(?:mouse|pointer|contextmenu)|click/,
            _t = /^(?:focusinfocus|focusoutblur)$/,
            Tt = /^([^.]*)(?:\.(.+)|)$/;
        Z.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, a, s, u, c, l, f, h, p, d, g, v = mt.get(t);
                if (v)
                    for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                            return typeof Z !== Et && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(pt) || [""], c = e.length; c--;) s = Tt.exec(e[c]) || [], p = g = s[1], d = (s[2] || "").split(".").sort(), p && (f = Z.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = Z.event.special[p] || {}, l = Z.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && Z.expr.match.needsContext.test(i),
                        namespace: d.join(".")
                    }, o), (h = u[p]) || (h = u[p] = [], h.delegateCount = 0, f.setup && f.setup.call(t, r, d, a) !== !1 || t.addEventListener && t.addEventListener(p, a, !1)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), Z.event.global[p] = !0)
            },
            remove: function(t, e, n, r, i) {
                var o, a, s, u, c, l, f, h, p, d, g, v = mt.hasData(t) && mt.get(t);
                if (v && (u = v.events)) {
                    for (e = (e || "").match(pt) || [""], c = e.length; c--;)
                        if (s = Tt.exec(e[c]) || [], p = g = s[1], d = (s[2] || "").split(".").sort(), p) {
                            for (f = Z.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, h = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) l = h[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount--, f.remove && f.remove.call(t, l));
                            a && !h.length && (f.teardown && f.teardown.call(t, d, v.handle) !== !1 || Z.removeEvent(t, p, v.handle), delete u[p])
                        } else
                            for (p in u) Z.event.remove(t, p + e[c], n, r, !0);
                    Z.isEmptyObject(u) && (delete v.handle, mt.remove(t, "events"))
                }
            },
            trigger: function(e, n, r, i) {
                var o, a, s, u, c, l, f, h = [r || J],
                    p = Y.call(e, "type") ? e.type : e,
                    d = Y.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = s = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !_t.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), c = p.indexOf(":") < 0 && "on" + p,
                        e = e[Z.expando] ? e : new Z.Event(p, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : Z.makeArray(n, [e]), f = Z.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                    if (!i && !f.noBubble && !Z.isWindow(r)) {
                        for (u = f.delegateType || p, _t.test(u + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                        s === (r.ownerDocument || J) && h.push(s.defaultView || s.parentWindow || t)
                    }
                    for (o = 0;
                        (a = h[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : f.bindType || p, l = (mt.get(a, "events") || {})[e.type] && mt.get(a, "handle"), l && l.apply(a, n), l = c && a[c], l && l.apply && Z.acceptData(a) && (e.result = l.apply(a, n), e.result === !1 && e.preventDefault());
                    return e.type = p, i || e.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !Z.acceptData(r) || c && Z.isFunction(r[p]) && !Z.isWindow(r) && (s = r[c], s && (r[c] = null), Z.event.triggered = p, r[p](), Z.event.triggered = void 0, s && (r[c] = s)), e.result
                }
            },
            dispatch: function(t) {
                t = Z.event.fix(t);
                var e, n, r, i, o, a = [],
                    s = B.call(arguments),
                    u = (mt.get(this, "events") || {})[t.type] || [],
                    c = Z.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = Z.event.handlers.call(this, t, u), e = 0;
                        (i = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, r, i, o, a = [],
                    s = e.delegateCount,
                    u = t.target;
                if (s && u.nodeType && (!t.button || "click" !== t.type))
                    for (; u !== this; u = u.parentNode || this)
                        if (u.disabled !== !0 || "click" !== t.type) {
                            for (r = [], n = 0; s > n; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                            r.length && a.push({
                                elem: u,
                                handlers: r
                            })
                        }
                return s < e.length && a.push({
                    elem: this,
                    handlers: e.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, r, i, o = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[Z.expando]) return t;
                var e, n, r, i = t.type,
                    o = t,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = At.test(i) ? this.mouseHooks : kt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new Z.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
                return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== f() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return Z.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, r) {
                var i = Z.extend(new Z.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? Z.event.trigger(i, null, e) : Z.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, Z.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        }, Z.Event = function(t, e) {
            return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : l) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
        }, Z.Event.prototype = {
            isDefaultPrevented: l,
            isPropagationStopped: l,
            isImmediatePropagationStopped: l,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Z.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            Z.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, r = this,
                        i = t.relatedTarget,
                        o = t.handleObj;
                    return (!i || i !== r && !Z.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), K.focusinBubbles || Z.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                Z.event.simulate(e, t.target, Z.event.fix(t), !0)
            };
            Z.event.special[e] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        i = mt.access(r, e);
                    i || r.addEventListener(t, n, !0), mt.access(r, e, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        i = mt.access(r, e) - 1;
                    i ? mt.access(r, e, i) : (r.removeEventListener(t, n, !0), mt.remove(r, e))
                }
            }
        }), Z.fn.extend({
            on: function(t, e, n, r, i) {
                var o, a;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (a in t) this.on(a, e, n, t[a], i);
                    return this
                }
                if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = l;
                else if (!r) return this;
                return 1 === i && (o = r, r = function(t) {
                    return Z().off(t), o.apply(this, arguments)
                }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                    Z.event.add(this, t, r, n, e)
                })
            },
            one: function(t, e, n, r) {
                return this.on(t, e, n, r, 1)
            },
            off: function(t, e, n) {
                var r, i;
                if (t && t.preventDefault && t.handleObj) return r = t.handleObj, Z(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof t) {
                    for (i in t) this.off(i, e, t[i]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = l), this.each(function() {
                    Z.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    Z.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? Z.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            jt = /<([\w:]+)/,
            Ot = /<|&#?\w+;/,
            Mt = /<(?:script|style|link)/i,
            Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Dt = /^$|\/(?:java|ecma)script/i,
            Ft = /^true\/(.*)/,
            Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            It = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        It.optgroup = It.option, It.tbody = It.tfoot = It.colgroup = It.caption = It.thead, It.th = It.td, Z.extend({
            clone: function(t, e, n) {
                var r, i, o, a, s = t.cloneNode(!0),
                    u = Z.contains(t.ownerDocument, t);
                if (!(K.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                    for (a = m(s), o = m(t), r = 0, i = o.length; i > r; r++) y(o[r], a[r]);
                if (e)
                    if (n)
                        for (o = o || m(t), a = a || m(s), r = 0, i = o.length; i > r; r++) v(o[r], a[r]);
                    else v(t, s);
                return a = m(s, "script"), a.length > 0 && g(a, !u && m(t, "script")), s
            },
            buildFragment: function(t, e, n, r) {
                for (var i, o, a, s, u, c, l = e.createDocumentFragment(), f = [], h = 0, p = t.length; p > h; h++)
                    if (i = t[h], i || 0 === i)
                        if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                        else if (Ot.test(i)) {
                    for (o = o || l.appendChild(e.createElement("div")), a = (jt.exec(i) || ["", ""])[1].toLowerCase(), s = It[a] || It._default, o.innerHTML = s[1] + i.replace(Nt, "<$1></$2>") + s[2], c = s[0]; c--;) o = o.lastChild;
                    Z.merge(f, o.childNodes), o = l.firstChild, o.textContent = ""
                } else f.push(e.createTextNode(i));
                for (l.textContent = "", h = 0; i = f[h++];)
                    if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = m(l.appendChild(i), "script"), u && g(o), n))
                        for (c = 0; i = o[c++];) Dt.test(i.type || "") && n.push(i);
                return l
            },
            cleanData: function(t) {
                for (var e, n, r, i, o = Z.event.special, a = 0; void 0 !== (n = t[a]); a++) {
                    if (Z.acceptData(n) && (i = n[mt.expando], i && (e = mt.cache[i]))) {
                        if (e.events)
                            for (r in e.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, e.handle);
                        mt.cache[i] && delete mt.cache[i]
                    }
                    delete yt.cache[n[yt.expando]]
                }
            }
        }), Z.fn.extend({
            text: function(t) {
                return vt(this, function(t) {
                    return void 0 === t ? Z.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = h(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = h(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, r = t ? Z.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || Z.cleanData(m(n)), n.parentNode && (e && Z.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(m(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return Z.clone(this, t, e)
                })
            },
            html: function(t) {
                return vt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Mt.test(t) && !It[(jt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Nt, "<$1></$2>");
                        try {
                            for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (Z.cleanData(m(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (i) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, Z.cleanData(m(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = z.apply([], t);
                var n, r, i, o, a, s, u = 0,
                    c = this.length,
                    l = this,
                    f = c - 1,
                    h = t[0],
                    g = Z.isFunction(h);
                if (g || c > 1 && "string" == typeof h && !K.checkClone && Pt.test(h)) return this.each(function(n) {
                    var r = l.eq(n);
                    g && (t[0] = h.call(this, n, r.html())), r.domManip(t, e)
                });
                if (c && (n = Z.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                    for (i = Z.map(m(n, "script"), p), o = i.length; c > u; u++) a = n, u !== f && (a = Z.clone(a, !0, !0), o && Z.merge(i, m(a, "script"))), e.call(this[u], a, u);
                    if (o)
                        for (s = i[i.length - 1].ownerDocument, Z.map(i, d), u = 0; o > u; u++) a = i[u], Dt.test(a.type || "") && !mt.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Lt, "")))
                }
                return this
            }
        }), Z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            Z.fn[t] = function(t) {
                for (var n, r = [], i = Z(t), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(i[a])[e](n), U.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Rt, Vt = {},
            qt = /^margin/,
            Ht = new RegExp("^(" + bt + ")(?!px)[a-z%]+$", "i"),
            Bt = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            };
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
                var e = t.getComputedStyle(a, null);
                n = "1%" !== e.top, r = "4px" === e.width, i.removeChild(o)
            }
            var n, r, i = J.documentElement,
                o = J.createElement("div"),
                a = J.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), t.getComputedStyle && Z.extend(K, {
                pixelPosition: function() {
                    return e(), n
                },
                boxSizingReliable: function() {
                    return null == r && e(), r
                },
                reliableMarginRight: function() {
                    var e, n = a.appendChild(J.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), e
                }
            }))
        }(), Z.swap = function(t, e, n, r) {
            var i, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            i = n.apply(t, r || []);
            for (o in e) t.style[o] = a[o];
            return i
        };
        var zt = /^(none|table(?!-c[ea]).+)/,
            Ut = new RegExp("^(" + bt + ")(.*)$", "i"),
            Wt = new RegExp("^([+-])=(" + bt + ")", "i"),
            Gt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Xt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Yt = ["Webkit", "O", "Moz", "ms"];
        Z.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = b(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, n, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var i, o, a, s = Z.camelCase(e),
                        u = t.style;
                    return e = Z.cssProps[s] || (Z.cssProps[s] = S(u, s)), a = Z.cssHooks[e] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e] : (o = typeof n, "string" === o && (i = Wt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u[e] = n)), void 0)
                }
            },
            css: function(t, e, n, r) {
                var i, o, a, s = Z.camelCase(e);
                return e = Z.cssProps[s] || (Z.cssProps[s] = S(t.style, s)), a = Z.cssHooks[e] || Z.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = b(t, e, r)), "normal" === i && e in Xt && (i = Xt[e]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
            }
        }), Z.each(["height", "width"], function(t, e) {
            Z.cssHooks[e] = {
                get: function(t, n, r) {
                    return n ? zt.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Gt, function() {
                        return k(t, e, r)
                    }) : k(t, e, r) : void 0
                },
                set: function(t, n, r) {
                    var i = r && Bt(t);
                    return C(t, n, r ? E(t, e, r, "border-box" === Z.css(t, "boxSizing", !1, i), i) : 0)
                }
            }
        }), Z.cssHooks.marginRight = w(K.reliableMarginRight, function(t, e) {
            return e ? Z.swap(t, {
                display: "inline-block"
            }, b, [t, "marginRight"]) : void 0
        }), Z.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            Z.cssHooks[t + e] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + wt[r] + e] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, qt.test(t) || (Z.cssHooks[t + e].set = C)
        }), Z.fn.extend({
            css: function(t, e) {
                return vt(this, function(t, e, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Z.isArray(e)) {
                        for (r = Bt(t), i = e.length; i > a; a++) o[e[a]] = Z.css(t, e[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return A(this, !0)
            },
            hide: function() {
                return A(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    St(this) ? Z(this).show() : Z(this).hide()
                })
            }
        }), Z.Tween = _, _.prototype = {
            constructor: _,
            init: function(t, e, n, r, i, o) {
                this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = _.propHooks[this.prop];
                return t && t.get ? t.get(this) : _.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = _.propHooks[this.prop];
                return this.options.duration ? this.pos = e = Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
            }
        }, _.prototype.init.prototype = _.prototype, _.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, Z.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, Z.fx = _.prototype.init, Z.fx.step = {};
        var Kt, Jt, Qt = /^(?:toggle|show|hide)$/,
            Zt = new RegExp("^(?:([+-])=|)(" + bt + ")([a-z%]*)$", "i"),
            te = /queueHooks$/,
            ee = [O],
            ne = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        r = n.cur(),
                        i = Zt.exec(e),
                        o = i && i[3] || (Z.cssNumber[t] ? "" : "px"),
                        a = (Z.cssNumber[t] || "px" !== o && +r) && Zt.exec(Z.css(n.elem, t)),
                        s = 1,
                        u = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, Z.style(n.elem, t, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }]
            };
        Z.Animation = Z.extend(P, {
                tweener: function(t, e) {
                    Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, r = 0, i = t.length; i > r; r++) n = t[r], ne[n] = ne[n] || [], ne[n].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? ee.unshift(t) : ee.push(t)
                }
            }), Z.speed = function(t, e, n) {
                var r = t && "object" == typeof t ? Z.extend({}, t) : {
                    complete: n || !n && e || Z.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !Z.isFunction(e) && e
                };
                return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
                }, r
            }, Z.fn.extend({
                fadeTo: function(t, e, n, r) {
                    return this.filter(St).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, r)
                },
                animate: function(t, e, n, r) {
                    var i = Z.isEmptyObject(t),
                        o = Z.speed(e, n, r),
                        a = function() {
                            var e = P(this, Z.extend({}, t), o);
                            (i || mt.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(t, e, n) {
                    var r = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            i = null != t && t + "queueHooks",
                            o = Z.timers,
                            a = mt.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && te.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                        (e || !n) && Z.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = mt.get(this),
                            r = n[t + "queue"],
                            i = n[t + "queueHooks"],
                            o = Z.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, Z.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; a > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), Z.each(["toggle", "show", "hide"], function(t, e) {
                var n = Z.fn[e];
                Z.fn[e] = function(t, r, i) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, r, i)
                }
            }), Z.each({
                slideDown: N("show"),
                slideUp: N("hide"),
                slideToggle: N("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                Z.fn[t] = function(t, n, r) {
                    return this.animate(e, t, n, r)
                }
            }), Z.timers = [], Z.fx.tick = function() {
                var t, e = 0,
                    n = Z.timers;
                for (Kt = Z.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || Z.fx.stop(), Kt = void 0
            }, Z.fx.timer = function(t) {
                Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
            }, Z.fx.interval = 13, Z.fx.start = function() {
                Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
            }, Z.fx.stop = function() {
                clearInterval(Jt), Jt = null
            }, Z.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, Z.fn.delay = function(t, e) {
                return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var r = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            function() {
                var t = J.createElement("input"),
                    e = J.createElement("select"),
                    n = e.appendChild(J.createElement("option"));
                t.type = "checkbox", K.checkOn = "" !== t.value, K.optSelected = n.selected, e.disabled = !0, K.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", K.radioValue = "t" === t.value
            }();
        var re, ie, oe = Z.expr.attrHandle;
        Z.fn.extend({
            attr: function(t, e) {
                return vt(this, Z.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    Z.removeAttr(this, t)
                })
            }
        }), Z.extend({
            attr: function(t, e, n) {
                var r, i, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Et ? Z.prop(t, e, n) : (1 === o && Z.isXMLDoc(t) || (e = e.toLowerCase(), r = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? ie : re)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = Z.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, r, i = 0,
                    o = e && e.match(pt);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!K.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), ie = {
            set: function(t, e, n) {
                return e === !1 ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = oe[e] || Z.find.attr;
            oe[e] = function(t, e, r) {
                var i, o;
                return r || (o = oe[e], oe[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, oe[e] = o), i
            }
        });
        var ae = /^(?:input|select|textarea|button)$/i;
        Z.fn.extend({
            prop: function(t, e) {
                return vt(this, Z.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[Z.propFix[t] || t]
                })
            }
        }), Z.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var r, i, o, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Z.isXMLDoc(t), o && (e = Z.propFix[e] || e, i = Z.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        return t.hasAttribute("tabindex") || ae.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), K.optSelected || (Z.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Z.propFix[this.toLowerCase()] = this
        });
        var se = /[\t\r\n\f]/g;
        Z.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a, s = "string" == typeof t && t,
                    u = 0,
                    c = this.length;
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).addClass(t.call(this, e, this.className))
                });
                if (s)
                    for (e = (t || "").match(pt) || []; c > u; u++)
                        if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(se, " ") : " ")) {
                            for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            a = Z.trim(r), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof t && t,
                    u = 0,
                    c = this.length;
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).removeClass(t.call(this, e, this.className))
                });
                if (s)
                    for (e = (t || "").match(pt) || []; c > u; u++)
                        if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(se, " ") : "")) {
                            for (o = 0; i = e[o++];)
                                for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                            a = t ? Z.trim(r) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : Z.isFunction(t) ? this.each(function(n) {
                    Z(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var e, r = 0, i = Z(this), o = t.match(pt) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                    else(n === Et || "boolean" === n) && (this.className && mt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : mt.get(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(se, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        });
        var ue = /\r/g;
        Z.fn.extend({
            val: function(t) {
                var e, n, r, i = this[0]; {
                    if (arguments.length) return r = Z.isFunction(t), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? t.call(this, n, Z(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(t) {
                            return null == t ? "" : t + ""
                        })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return e = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ue, "") : null == n ? "" : n)
                }
            }
        }), Z.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = Z.find.attr(t, "value");
                        return null != e ? e : Z.trim(Z.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                            if (n = r[u], (n.selected || u === i) && (K.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                                if (e = Z(n).val(), o) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var n, r, i = t.options, o = Z.makeArray(e), a = i.length; a--;) r = i[a], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), Z.each(["radio", "checkbox"], function() {
            Z.valHooks[this] = {
                set: function(t, e) {
                    return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
                }
            }, K.checkOn || (Z.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            Z.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), Z.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, r) {
                return this.on(e, t, n, r)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var ce = Z.now(),
            le = /\?/;
        Z.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, Z.parseXML = function(t) {
            var e, n;
            if (!t || "string" != typeof t) return null;
            try {
                n = new DOMParser, e = n.parseFromString(t, "text/xml")
            } catch (r) {
                e = void 0
            }
            return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
        };
        var fe = /#.*$/,
            he = /([?&])_=[^&]*/,
            pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            de = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ge = /^(?:GET|HEAD)$/,
            ve = /^\/\//,
            me = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            ye = {},
            $e = {},
            xe = "*/".concat("*"),
            be = t.location.href,
            we = me.exec(be.toLowerCase()) || [];
        Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be,
                type: "GET",
                isLocal: de.test(we[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": Z.parseJSON,
                    "text xml": Z.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? L(L(t, Z.ajaxSettings), e) : L(Z.ajaxSettings, t)
            },
            ajaxPrefilter: D(ye),
            ajaxTransport: D($e),
            ajax: function(t, e) {
                function n(t, e, n, a) {
                    var u, l, m, y, x, w = e;
                    2 !== $ && ($ = 2, s && clearTimeout(s), r = void 0, o = a || "", b.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (y = I(f, b, n)), y = R(f, y, b, u), u ? (f.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (Z.lastModified[i] = x), x = b.getResponseHeader("etag"), x && (Z.etag[i] = x)), 204 === t || "HEAD" === f.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, l = y.data, m = y.error, u = !m)) : (m = w, (t || !w) && (w = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || w) + "", u ? d.resolveWith(h, [l, w, b]) : d.rejectWith(h, [b, w, m]), b.statusCode(v), v = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [b, f, u ? l : m]), g.fireWith(h, [b, w]), c && (p.trigger("ajaxComplete", [b, f]), --Z.active || Z.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var r, i, o, a, s, u, c, l, f = Z.ajaxSetup({}, e),
                    h = f.context || f,
                    p = f.context && (h.nodeType || h.jquery) ? Z(h) : Z.event,
                    d = Z.Deferred(),
                    g = Z.Callbacks("once memory"),
                    v = f.statusCode || {},
                    m = {},
                    y = {},
                    $ = 0,
                    x = "canceled",
                    b = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === $) {
                                if (!a)
                                    for (a = {}; e = pe.exec(o);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === $ ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return $ || (t = y[n] = y[n] || t, m[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return $ || (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > $)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else b.always(t[b.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return r && r.abort(e), n(0, e), this
                        }
                    };
                if (d.promise(b).complete = g.add, b.success = b.done, b.error = b.fail, f.url = ((t || f.url || be) + "").replace(fe, "").replace(ve, we[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(pt) || [""], null == f.crossDomain && (u = me.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === we[1] && u[2] === we[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (we[3] || ("http:" === we[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), F(ye, f, e, b), 2 === $) return b;
                c = Z.event && f.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !ge.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (le.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = he.test(i) ? i.replace(he, "$1_=" + ce++) : i + (le.test(i) ? "&" : "?") + "_=" + ce++)), f.ifModified && (Z.lastModified[i] && b.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && b.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", f.contentType), b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xe + "; q=0.01" : "") : f.accepts["*"]);
                for (l in f.headers) b.setRequestHeader(l, f.headers[l]);
                if (f.beforeSend && (f.beforeSend.call(h, b, f) === !1 || 2 === $)) return b.abort();
                x = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) b[l](f[l]);
                if (r = F($e, f, e, b)) {
                    b.readyState = 1, c && p.trigger("ajaxSend", [b, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                        b.abort("timeout")
                    }, f.timeout));
                    try {
                        $ = 1, r.send(m, n)
                    } catch (w) {
                        if (!(2 > $)) throw w;
                        n(-1, w)
                    }
                } else n(-1, "No Transport");
                return b
            },
            getJSON: function(t, e, n) {
                return Z.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return Z.get(t, void 0, e, "script")
            }
        }), Z.each(["get", "post"], function(t, e) {
            Z[e] = function(t, n, r, i) {
                return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                    url: t,
                    type: e,
                    dataType: i,
                    data: n,
                    success: r
                })
            }
        }), Z._evalUrl = function(t) {
            return Z.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, Z.fn.extend({
            wrapAll: function(t) {
                var e;
                return Z.isFunction(t) ? this.each(function(e) {
                    Z(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return Z.isFunction(t) ? this.each(function(e) {
                    Z(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = Z(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = Z.isFunction(t);
                return this.each(function(n) {
                    Z(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            }
        }), Z.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, Z.expr.filters.visible = function(t) {
            return !Z.expr.filters.hidden(t)
        };
        var Se = /%20/g,
            Ce = /\[\]$/,
            Ee = /\r?\n/g,
            ke = /^(?:submit|button|image|reset|file)$/i,
            Ae = /^(?:input|select|textarea|keygen)/i;
        Z.param = function(t, e) {
            var n, r = [],
                i = function(t, e) {
                    e = Z.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
                i(this.name, this.value)
            });
            else
                for (n in t) V(n, t[n], e, i);
            return r.join("&").replace(Se, "+")
        }, Z.fn.extend({
            serialize: function() {
                return Z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = Z.prop(this, "elements");
                    return t ? Z.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !Z(this).is(":disabled") && Ae.test(this.nodeName) && !ke.test(t) && (this.checked || !Ct.test(t))
                }).map(function(t, e) {
                    var n = Z(this).val();
                    return null == n ? null : Z.isArray(n) ? Z.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ee, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ee, "\r\n")
                    }
                }).get()
            }
        }), Z.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        };
        var _e = 0,
            Te = {},
            Ne = {
                0: 200,
                1223: 204
            },
            je = Z.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in Te) Te[t]()
        }), K.cors = !!je && "withCredentials" in je, K.ajax = je = !!je, Z.ajaxTransport(function(t) {
            var e;
            return K.cors || je && !t.crossDomain ? {
                send: function(n, r) {
                    var i, o = t.xhr(),
                        a = ++_e;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (i in t.xhrFields) o[i] = t.xhrFields[i];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) o.setRequestHeader(i, n[i]);
                    e = function(t) {
                        return function() {
                            e && (delete Te[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(Ne[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : void 0, o.getAllResponseHeaders()))
                        }
                    }, o.onload = e(), o.onerror = e("error"), e = Te[a] = e("abort");
                    try {
                        o.send(t.hasContent && t.data || null)
                    } catch (s) {
                        if (e) throw s
                    }
                },
                abort: function() {
                    e && e()
                }
            } : void 0
        }), Z.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return Z.globalEval(t), t
                }
            }
        }), Z.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), Z.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(r, i) {
                        e = Z("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                        }), J.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Oe = [],
            Me = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Oe.pop() || Z.expando + "_" + ce++;
                return this[t] = !0, t
            }
        }), Z.ajaxPrefilter("json jsonp", function(e, n, r) {
            var i, o, a, s = e.jsonp !== !1 && (Me.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Me.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Me, "$1" + i) : e.jsonp !== !1 && (e.url += (le.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return a || Z.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
                a = arguments
            }, r.always(function() {
                t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Oe.push(i)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), Z.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || J;
            var r = at.exec(t),
                i = !n && [];
            return r ? [e.createElement(r[1])] : (r = Z.buildFragment([t], e, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
        };
        var Pe = Z.fn.load;
        Z.fn.load = function(t, e, n) {
            if ("string" != typeof t && Pe) return Pe.apply(this, arguments);
            var r, i, o, a = this,
                s = t.indexOf(" ");
            return s >= 0 && (r = Z.trim(t.slice(s)), t = t.slice(0, s)), Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && Z.ajax({
                url: t,
                type: i,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(t)).find(r) : t)
            }).complete(n && function(t, e) {
                a.each(n, o || [t.responseText, e, t])
            }), this
        }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            Z.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), Z.expr.filters.animated = function(t) {
            return Z.grep(Z.timers, function(e) {
                return t === e.elem
            }).length
        };
        var De = t.document.documentElement;
        Z.offset = {
            setOffset: function(t, e, n) {
                var r, i, o, a, s, u, c, l = Z.css(t, "position"),
                    f = Z(t),
                    h = {};
                "static" === l && (t.style.position = "relative"), s = f.offset(), o = Z.css(t, "top"), u = Z.css(t, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + i), "using" in e ? e.using.call(t, h) : f.css(h)
            }
        }, Z.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    Z.offset.setOffset(this, t, e)
                });
                var e, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    },
                    o = r && r.ownerDocument;
                if (o) return e = o.documentElement, Z.contains(e, r) ? (typeof r.getBoundingClientRect !== Et && (i = r.getBoundingClientRect()), n = q(o), {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (r = t.offset()), r.top += Z.css(t[0], "borderTopWidth", !0), r.left += Z.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - r.top - Z.css(n, "marginTop", !0),
                        left: e.left - r.left - Z.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || De; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                    return t || De
                })
            }
        }), Z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = "pageYOffset" === n;
            Z.fn[e] = function(i) {
                return vt(this, function(e, i, o) {
                    var a = q(e);
                    return void 0 === o ? a ? a[n] : e[i] : void(a ? a.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset) : e[i] = o)
                }, e, i, arguments.length, null)
            }
        }), Z.each(["top", "left"], function(t, e) {
            Z.cssHooks[e] = w(K.pixelPosition, function(t, n) {
                return n ? (n = b(t, e), Ht.test(n) ? Z(t).position()[e] + "px" : n) : void 0
            })
        }), Z.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            Z.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, r) {
                Z.fn[r] = function(r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return vt(this, function(e, n, r) {
                        var i;
                        return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? Z.css(e, n, a) : Z.style(e, n, r, a)
                    }, e, o ? r : void 0, o, null)
                }
            })
        }), Z.fn.size = function() {
            return this.length
        }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return Z
        });
        var Fe = t.jQuery,
            Le = t.$;
        return Z.noConflict = function(e) {
            return t.$ === Z && (t.$ = Le), e && t.jQuery === Z && (t.jQuery = Fe), Z
        }, typeof e === Et && (t.jQuery = t.$ = Z), Z
    }),
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return e = e || Error,
                function() {
                    var n, r, i = 2,
                        o = arguments,
                        a = o[0],
                        s = "[" + (t ? t + ":" : "") + a + "] ",
                        u = o[1];
                    for (s += u.replace(/\{\d+\}/g, function(t) {
                            var e = +t.slice(1, -1),
                                n = e + i;
                            return n < o.length ? $t(o[n]) : t
                        }), s += "\nhttp://errors.angularjs.org/1.4.7/" + (t ? t + "/" : "") + a, r = i, n = "?"; r < o.length; r++, n = "&") s += n + "p" + (r - i) + "=" + encodeURIComponent($t(o[r]));
                    return new e(s)
                }
        }

        function i(t) {
            if (null == t || _(t)) return !1;
            var e = "length" in Object(t) && t.length;
            return t.nodeType === Gr && e ? !0 : S(t) || Ir(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function o(t, e, n) {
            var r, a;
            if (t)
                if (k(t))
                    for (r in t) "prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r, t);
                else if (Ir(t) || i(t)) {
                var s = "object" != typeof t;
                for (r = 0, a = t.length; a > r; r++)(s || r in t) && e.call(n, t[r], r, t)
            } else if (t.forEach && t.forEach !== o) t.forEach(e, n, t);
            else if (w(t))
                for (r in t) e.call(n, t[r], r, t);
            else if ("function" == typeof t.hasOwnProperty)
                for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
            else
                for (r in t) br.call(t, r) && e.call(n, t[r], r, t);
            return t
        }

        function a(t, e, n) {
            for (var r = Object.keys(t).sort(), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
            return r
        }

        function s(t) {
            return function(e, n) {
                t(n, e)
            }
        }

        function u() {
            return ++Fr
        }

        function c(t, e) {
            e ? t.$$hashKey = e : delete t.$$hashKey
        }

        function l(t, e, n) {
            for (var r = t.$$hashKey, i = 0, o = e.length; o > i; ++i) {
                var a = e[i];
                if (b(a) || k(a))
                    for (var s = Object.keys(a), u = 0, f = s.length; f > u; u++) {
                        var h = s[u],
                            p = a[h];
                        n && b(p) ? E(p) ? t[h] = new Date(p.valueOf()) : A(p) ? t[h] = new RegExp(p) : (b(t[h]) || (t[h] = Ir(p) ? [] : {}), l(t[h], [p], !0)) : t[h] = p
                    }
            }
            return c(t, r), t
        }

        function f(t) {
            return l(t, Tr.call(arguments, 1), !1)
        }

        function h(t) {
            return l(t, Tr.call(arguments, 1), !0)
        }

        function p(t) {
            return parseInt(t, 10)
        }

        function d(t, e) {
            return f(Object.create(t), e)
        }

        function g() {}

        function v(t) {
            return t
        }

        function m(t) {
            return function() {
                return t
            }
        }

        function y(t) {
            return k(t.toString) && t.toString !== Object.prototype.toString
        }

        function $(t) {
            return "undefined" == typeof t
        }

        function x(t) {
            return "undefined" != typeof t
        }

        function b(t) {
            return null !== t && "object" == typeof t
        }

        function w(t) {
            return null !== t && "object" == typeof t && !Mr(t)
        }

        function S(t) {
            return "string" == typeof t
        }

        function C(t) {
            return "number" == typeof t
        }

        function E(t) {
            return "[object Date]" === Or.call(t)
        }

        function k(t) {
            return "function" == typeof t
        }

        function A(t) {
            return "[object RegExp]" === Or.call(t)
        }

        function _(t) {
            return t && t.window === t
        }

        function T(t) {
            return t && t.$evalAsync && t.$watch
        }

        function N(t) {
            return "[object File]" === Or.call(t)
        }

        function j(t) {
            return "[object FormData]" === Or.call(t)
        }

        function O(t) {
            return "[object Blob]" === Or.call(t)
        }

        function M(t) {
            return "boolean" == typeof t
        }

        function P(t) {
            return t && k(t.then)
        }

        function D(t) {
            return Rr.test(Or.call(t))
        }

        function F(t) {
            return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
        }

        function L(t) {
            var e, n = {},
                r = t.split(",");
            for (e = 0; e < r.length; e++) n[r[e]] = !0;
            return n
        }

        function I(t) {
            return xr(t.nodeName || t[0] && t[0].nodeName)
        }

        function R(t, e) {
            var n = t.indexOf(e);
            return n >= 0 && t.splice(n, 1), n
        }

        function V(t, e, n, r) {
            if (_(t) || T(t)) throw Pr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            if (D(e)) throw Pr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (e) {
                if (t === e) throw Pr("cpi", "Can't copy! Source and destination are identical.");
                n = n || [], r = r || [], b(t) && (n.push(t), r.push(e));
                var i;
                if (Ir(t)) {
                    e.length = 0;
                    for (var a = 0; a < t.length; a++) e.push(V(t[a], null, n, r))
                } else {
                    var s = e.$$hashKey;
                    if (Ir(e) ? e.length = 0 : o(e, function(t, n) {
                            delete e[n]
                        }), w(t))
                        for (i in t) e[i] = V(t[i], null, n, r);
                    else if (t && "function" == typeof t.hasOwnProperty)
                        for (i in t) t.hasOwnProperty(i) && (e[i] = V(t[i], null, n, r));
                    else
                        for (i in t) br.call(t, i) && (e[i] = V(t[i], null, n, r));
                    c(e, s)
                }
            } else if (e = t, b(t)) {
                var u;
                if (n && -1 !== (u = n.indexOf(t))) return r[u];
                if (Ir(t)) return V(t, [], n, r);
                if (D(t)) e = new t.constructor(t);
                else if (E(t)) e = new Date(t.getTime());
                else if (A(t)) e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex;
                else {
                    if (!k(t.cloneNode)) {
                        var l = Object.create(Mr(t));
                        return V(t, l, n, r)
                    }
                    e = t.cloneNode(!0)
                }
                r && (n.push(t), r.push(e))
            }
            return e
        }

        function q(t, e) {
            if (Ir(t)) {
                e = e || [];
                for (var n = 0, r = t.length; r > n; n++) e[n] = t[n]
            } else if (b(t)) {
                e = e || {};
                for (var i in t)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (e[i] = t[i])
            }
            return e || t
        }

        function H(t, e) {
            if (t === e) return !0;
            if (null === t || null === e) return !1;
            if (t !== t && e !== e) return !0;
            var n, r, i, o = typeof t,
                a = typeof e;
            if (o == a && "object" == o) {
                if (!Ir(t)) {
                    if (E(t)) return E(e) ? H(t.getTime(), e.getTime()) : !1;
                    if (A(t)) return A(e) ? t.toString() == e.toString() : !1;
                    if (T(t) || T(e) || _(t) || _(e) || Ir(e) || E(e) || A(e)) return !1;
                    i = vt();
                    for (r in t)
                        if ("$" !== r.charAt(0) && !k(t[r])) {
                            if (!H(t[r], e[r])) return !1;
                            i[r] = !0
                        }
                    for (r in e)
                        if (!(r in i) && "$" !== r.charAt(0) && x(e[r]) && !k(e[r])) return !1;
                    return !0
                }
                if (!Ir(e)) return !1;
                if ((n = t.length) == e.length) {
                    for (r = 0; n > r; r++)
                        if (!H(t[r], e[r])) return !1;
                    return !0
                }
            }
            return !1
        }

        function B(t, e, n) {
            return t.concat(Tr.call(e, n))
        }

        function z(t, e) {
            return Tr.call(t, e || 0)
        }

        function U(t, e) {
            var n = arguments.length > 2 ? z(arguments, 2) : [];
            return !k(e) || e instanceof RegExp ? e : n.length ? function() {
                return arguments.length ? e.apply(t, B(n, arguments, 0)) : e.apply(t, n)
            } : function() {
                return arguments.length ? e.apply(t, arguments) : e.call(t)
            }
        }

        function W(t, r) {
            var i = r;
            return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = n : _(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : T(r) && (i = "$SCOPE"), i
        }

        function G(t, e) {
            return "undefined" == typeof t ? n : (C(e) || (e = e ? 2 : null), JSON.stringify(t, W, e))
        }

        function X(t) {
            return S(t) ? JSON.parse(t) : t
        }

        function Y(t, e) {
            var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
            return isNaN(n) ? e : n
        }

        function K(t, e) {
            return t = new Date(t.getTime()), t.setMinutes(t.getMinutes() + e), t
        }

        function J(t, e, n) {
            n = n ? -1 : 1;
            var r = Y(e, t.getTimezoneOffset());
            return K(t, n * (r - t.getTimezoneOffset()))
        }

        function Q(t) {
            t = kr(t).clone();
            try {
                t.empty()
            } catch (e) {}
            var n = kr("<div>").append(t).html();
            try {
                return t[0].nodeType === Yr ? xr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(t, e) {
                    return "<" + xr(e)
                })
            } catch (e) {
                return xr(n)
            }
        }

        function Z(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {}
        }

        function tt(t) {
            var e = {};
            return o((t || "").split("&"), function(t) {
                var n, r, i;
                t && (r = t = t.replace(/\+/g, "%20"), n = t.indexOf("="), -1 !== n && (r = t.substring(0, n), i = t.substring(n + 1)), r = Z(r), x(r) && (i = x(i) ? Z(i) : !0, br.call(e, r) ? Ir(e[r]) ? e[r].push(i) : e[r] = [e[r], i] : e[r] = i))
            }), e
        }

        function et(t) {
            var e = [];
            return o(t, function(t, n) {
                Ir(t) ? o(t, function(t) {
                    e.push(rt(n, !0) + (t === !0 ? "" : "=" + rt(t, !0)))
                }) : e.push(rt(n, !0) + (t === !0 ? "" : "=" + rt(t, !0)))
            }), e.length ? e.join("&") : ""
        }

        function nt(t) {
            return rt(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function rt(t, e) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
        }

        function it(t, e) {
            var n, r, i = zr.length;
            for (r = 0; i > r; ++r)
                if (n = zr[r] + e, S(n = t.getAttribute(n))) return n;
            return null
        }

        function ot(t, e) {
            var n, r, i = {};
            o(zr, function(e) {
                var i = e + "app";
                !n && t.hasAttribute && t.hasAttribute(i) && (n = t, r = t.getAttribute(i))
            }), o(zr, function(e) {
                var i, o = e + "app";
                !n && (i = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
            }), n && (i.strictDi = null !== it(n, "strict-di"), e(n, r ? [r] : [], i))
        }

        function at(n, r, i) {
            b(i) || (i = {});
            var a = {
                strictDi: !1
            };
            i = f(a, i);
            var s = function() {
                    if (n = kr(n), n.injector()) {
                        var t = n[0] === e ? "document" : Q(n);
                        throw Pr("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
                    }
                    r = r || [], r.unshift(["$provide", function(t) {
                        t.value("$rootElement", n)
                    }]), i.debugInfoEnabled && r.push(["$compileProvider", function(t) {
                        t.debugInfoEnabled(!0)
                    }]), r.unshift("ng");
                    var o = Qt(r, i.strictDi);
                    return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(t, e, n, r) {
                        t.$apply(function() {
                            e.data("$injector", r), n(e)(t)
                        })
                    }]), o
                },
                u = /^NG_ENABLE_DEBUG_INFO!/,
                c = /^NG_DEFER_BOOTSTRAP!/;
            return t && u.test(t.name) && (i.debugInfoEnabled = !0, t.name = t.name.replace(u, "")), t && !c.test(t.name) ? s() : (t.name = t.name.replace(c, ""), Dr.resumeBootstrap = function(t) {
                return o(t, function(t) {
                    r.push(t)
                }), s()
            }, void(k(Dr.resumeDeferredBootstrap) && Dr.resumeDeferredBootstrap()))
        }

        function st() {
            t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
        }

        function ut(t) {
            var e = Dr.element(t).injector();
            if (!e) throw Pr("test", "no injector found for element argument to getTestability");
            return e.get("$$testability")
        }

        function ct(t, e) {
            return e = e || "_", t.replace(Ur, function(t, n) {
                return (n ? e : "") + t.toLowerCase()
            })
        }

        function lt() {
            var e;
            if (!Wr) {
                var r = Br();
                Ar = $(r) ? t.jQuery : r ? t[r] : n, Ar && Ar.fn.on ? (kr = Ar, f(Ar.fn, {
                    scope: pi.scope,
                    isolateScope: pi.isolateScope,
                    controller: pi.controller,
                    injector: pi.injector,
                    inheritedData: pi.inheritedData
                }), e = Ar.cleanData, Ar.cleanData = function(t) {
                    var n;
                    if (Lr) Lr = !1;
                    else
                        for (var r, i = 0; null != (r = t[i]); i++) n = Ar._data(r, "events"), n && n.$destroy && Ar(r).triggerHandler("$destroy");
                    e(t)
                }) : kr = _t, Dr.element = kr, Wr = !0
            }
        }

        function ft(t, e, n) {
            if (!t) throw Pr("areq", "Argument '{0}' is {1}", e || "?", n || "required");
            return t
        }

        function ht(t, e, n) {
            return n && Ir(t) && (t = t[t.length - 1]), ft(k(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
        }

        function pt(t, e) {
            if ("hasOwnProperty" === t) throw Pr("badname", "hasOwnProperty is not a valid {0} name", e)
        }

        function dt(t, e, n) {
            if (!e) return t;
            for (var r, i = e.split("."), o = t, a = i.length, s = 0; a > s; s++) r = i[s], t && (t = (o = t)[r]);
            return !n && k(t) ? U(o, t) : t
        }

        function gt(t) {
            for (var e, n = t[0], r = t[t.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(e || t[i] !== n) && (e || (e = kr(Tr.call(t, 0, i))), e.push(n));
            return e || t
        }

        function vt() {
            return Object.create(null)
        }

        function mt(t) {
            function e(t, e, n) {
                return t[e] || (t[e] = n())
            }
            var n = r("$injector"),
                i = r("ng"),
                o = e(t, "angular", Object);
            return o.$$minErr = o.$$minErr || r, e(o, "module", function() {
                var t = {};
                return function(r, o, a) {
                    var s = function(t, e) {
                        if ("hasOwnProperty" === t) throw i("badname", "hasOwnProperty is not a valid {0} name", e)
                    };
                    return s(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function() {
                        function t(t, e, n, r) {
                            return r || (r = i),
                                function() {
                                    return r[n || "push"]([t, e, arguments]), l
                                }
                        }

                        function e(t, e) {
                            return function(n, o) {
                                return o && k(o) && (o.$$moduleName = r), i.push([t, e, arguments]), l
                            }
                        }
                        if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                        var i = [],
                            s = [],
                            u = [],
                            c = t("$injector", "invoke", "push", s),
                            l = {
                                _invokeQueue: i,
                                _configBlocks: s,
                                _runBlocks: u,
                                requires: o,
                                name: r,
                                provider: e("$provide", "provider"),
                                factory: e("$provide", "factory"),
                                service: e("$provide", "service"),
                                value: t("$provide", "value"),
                                constant: t("$provide", "constant", "unshift"),
                                decorator: e("$provide", "decorator"),
                                animation: e("$animateProvider", "register"),
                                filter: e("$filterProvider", "register"),
                                controller: e("$controllerProvider", "register"),
                                directive: e("$compileProvider", "directive"),
                                config: c,
                                run: function(t) {
                                    return u.push(t), this
                                }
                            };
                        return a && c(a), l
                    })
                }
            })
        }

        function yt(t) {
            var e = [];
            return JSON.stringify(t, function(t, n) {
                if (n = W(t, n), b(n)) {
                    if (e.indexOf(n) >= 0) return "...";
                    e.push(n)
                }
                return n
            })
        }

        function $t(t) {
            return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : $(t) ? "undefined" : "string" != typeof t ? yt(t) : t
        }

        function xt(e) {
            f(e, {
                bootstrap: at,
                copy: V,
                extend: f,
                merge: h,
                equals: H,
                element: kr,
                forEach: o,
                injector: Qt,
                noop: g,
                bind: U,
                toJson: G,
                fromJson: X,
                identity: v,
                isUndefined: $,
                isDefined: x,
                isString: S,
                isFunction: k,
                isObject: b,
                isNumber: C,
                isElement: F,
                isArray: Ir,
                version: Zr,
                isDate: E,
                lowercase: xr,
                uppercase: wr,
                callbacks: {
                    counter: 0
                },
                getTestability: ut,
                $$minErr: r,
                $$csp: Hr,
                reloadWithDebugInfo: st
            }), (_r = mt(t))("ng", ["ngLocale"], ["$provide", function(t) {
                t.provider({
                    $$sanitizeUri: mn
                }), t.provider("$compile", ue).directive({
                    a: po,
                    input: jo,
                    textarea: jo,
                    form: $o,
                    script: Sa,
                    select: ka,
                    style: _a,
                    option: Aa,
                    ngBind: Po,
                    ngBindHtml: Fo,
                    ngBindTemplate: Do,
                    ngClass: Io,
                    ngClassEven: Vo,
                    ngClassOdd: Ro,
                    ngCloak: qo,
                    ngController: Ho,
                    ngForm: xo,
                    ngHide: ma,
                    ngIf: Uo,
                    ngInclude: Wo,
                    ngInit: Xo,
                    ngNonBindable: ua,
                    ngPluralize: ha,
                    ngRepeat: pa,
                    ngShow: va,
                    ngStyle: ya,
                    ngSwitch: $a,
                    ngSwitchWhen: xa,
                    ngSwitchDefault: ba,
                    ngOptions: fa,
                    ngTransclude: wa,
                    ngModel: oa,
                    ngList: Yo,
                    ngChange: Lo,
                    pattern: Na,
                    ngPattern: Na,
                    required: Ta,
                    ngRequired: Ta,
                    minlength: Oa,
                    ngMinlength: Oa,
                    maxlength: ja,
                    ngMaxlength: ja,
                    ngValue: Mo,
                    ngModelOptions: sa
                }).directive({
                    ngInclude: Go
                }).directive(go).directive(Bo), t.provider({
                    $anchorScroll: Zt,
                    $animate: _i,
                    $animateCss: Ti,
                    $$animateQueue: Ai,
                    $$AnimateRunner: ki,
                    $browser: oe,
                    $cacheFactory: ae,
                    $controller: pe,
                    $document: de,
                    $exceptionHandler: ge,
                    $filter: jn,
                    $$forceReflow: Pi,
                    $interpolate: Te,
                    $interval: Ne,
                    $http: Ee,
                    $httpParamSerializer: me,
                    $httpParamSerializerJQLike: ye,
                    $httpBackend: Ae,
                    $xhrFactory: ke,
                    $location: ze,
                    $log: Ue,
                    $parse: fn,
                    $rootScope: vn,
                    $q: hn,
                    $$q: pn,
                    $sce: bn,
                    $sceDelegate: xn,
                    $sniffer: wn,
                    $templateCache: se,
                    $templateRequest: Sn,
                    $$testability: Cn,
                    $timeout: En,
                    $window: _n,
                    $$rAF: gn,
                    $$jqLite: Gt,
                    $$HashMap: mi,
                    $$cookieReader: Nn
                })
            }])
        }

        function bt() {
            return ++ei
        }

        function wt(t) {
            return t.replace(ii, function(t, e, n, r) {
                return r ? n.toUpperCase() : n
            }).replace(oi, "Moz$1")
        }

        function St(t) {
            return !ci.test(t)
        }

        function Ct(t) {
            var e = t.nodeType;
            return e === Gr || !e || e === Jr
        }

        function Et(t) {
            for (var e in ti[t.ng339]) return !0;
            return !1
        }

        function kt(t, e) {
            var n, r, i, a, s = e.createDocumentFragment(),
                u = [];
            if (St(t)) u.push(e.createTextNode(t));
            else {
                for (n = n || s.appendChild(e.createElement("div")), r = (li.exec(t) || ["", ""])[1].toLowerCase(), i = hi[r] || hi._default, n.innerHTML = i[1] + t.replace(fi, "<$1></$2>") + i[2], a = i[0]; a--;) n = n.lastChild;
                u = B(u, n.childNodes), n = s.firstChild, n.textContent = ""
            }
            return s.textContent = "", s.innerHTML = "", o(u, function(t) {
                s.appendChild(t)
            }), s
        }

        function At(t, n) {
            n = n || e;
            var r;
            return (r = ui.exec(t)) ? [n.createElement(r[1])] : (r = kt(t, n)) ? r.childNodes : []
        }

        function _t(t) {
            if (t instanceof _t) return t;
            var e;
            if (S(t) && (t = Vr(t), e = !0), !(this instanceof _t)) {
                if (e && "<" != t.charAt(0)) throw si("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new _t(t)
            }
            e ? It(this, At(t)) : It(this, t)
        }

        function Tt(t) {
            return t.cloneNode(!0)
        }

        function Nt(t, e) {
            if (e || Ot(t), t.querySelectorAll)
                for (var n = t.querySelectorAll("*"), r = 0, i = n.length; i > r; r++) Ot(n[r])
        }

        function jt(t, e, n, r) {
            if (x(r)) throw si("offargs", "jqLite#off() does not support the `selector` argument");
            var i = Mt(t),
                a = i && i.events,
                s = i && i.handle;
            if (s)
                if (e) o(e.split(" "), function(e) {
                    if (x(n)) {
                        var r = a[e];
                        if (R(r || [], n), r && r.length > 0) return
                    }
                    ri(t, e, s), delete a[e]
                });
                else
                    for (e in a) "$destroy" !== e && ri(t, e, s), delete a[e]
        }

        function Ot(t, e) {
            var r = t.ng339,
                i = r && ti[r];
            if (i) {
                if (e) return void delete i.data[e];
                i.handle && (i.events.$destroy && i.handle({}, "$destroy"), jt(t)), delete ti[r], t.ng339 = n
            }
        }

        function Mt(t, e) {
            var r = t.ng339,
                i = r && ti[r];
            return e && !i && (t.ng339 = r = bt(), i = ti[r] = {
                events: {},
                data: {},
                handle: n
            }), i
        }

        function Pt(t, e, n) {
            if (Ct(t)) {
                var r = x(n),
                    i = !r && e && !b(e),
                    o = !e,
                    a = Mt(t, !i),
                    s = a && a.data;
                if (r) s[e] = n;
                else {
                    if (o) return s;
                    if (i) return s && s[e];
                    f(s, e)
                }
            }
        }

        function Dt(t, e) {
            return t.getAttribute ? (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 : !1
        }

        function Ft(t, e) {
            e && t.setAttribute && o(e.split(" "), function(e) {
                t.setAttribute("class", Vr((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Vr(e) + " ", " ")))
            })
        }

        function Lt(t, e) {
            if (e && t.setAttribute) {
                var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                o(e.split(" "), function(t) {
                    t = Vr(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
                }), t.setAttribute("class", Vr(n))
            }
        }

        function It(t, e) {
            if (e)
                if (e.nodeType) t[t.length++] = e;
                else {
                    var n = e.length;
                    if ("number" == typeof n && e.window !== e) {
                        if (n)
                            for (var r = 0; n > r; r++) t[t.length++] = e[r]
                    } else t[t.length++] = e
                }
        }

        function Rt(t, e) {
            return Vt(t, "$" + (e || "ngController") + "Controller")
        }

        function Vt(t, e, n) {
            t.nodeType == Jr && (t = t.documentElement);
            for (var r = Ir(e) ? e : [e]; t;) {
                for (var i = 0, o = r.length; o > i; i++)
                    if (x(n = kr.data(t, r[i]))) return n;
                t = t.parentNode || t.nodeType === Qr && t.host
            }
        }

        function qt(t) {
            for (Nt(t, !0); t.firstChild;) t.removeChild(t.firstChild)
        }

        function Ht(t, e) {
            e || Nt(t);
            var n = t.parentNode;
            n && n.removeChild(t)
        }

        function Bt(e, n) {
            n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : kr(n).on("load", e)
        }

        function zt(t, e) {
            var n = di[e.toLowerCase()];
            return n && gi[I(t)] && n
        }

        function Ut(t) {
            return vi[t]
        }

        function Wt(t, e) {
            var n = function(n, r) {
                n.isDefaultPrevented = function() {
                    return n.defaultPrevented
                };
                var i = e[r || n.type],
                    o = i ? i.length : 0;
                if (o) {
                    if ($(n.immediatePropagationStopped)) {
                        var a = n.stopImmediatePropagation;
                        n.stopImmediatePropagation = function() {
                            n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                        }
                    }
                    n.isImmediatePropagationStopped = function() {
                        return n.immediatePropagationStopped === !0
                    }, o > 1 && (i = q(i));
                    for (var s = 0; o > s; s++) n.isImmediatePropagationStopped() || i[s].call(t, n)
                }
            };
            return n.elem = t, n
        }

        function Gt() {
            this.$get = function() {
                return f(_t, {
                    hasClass: function(t, e) {
                        return t.attr && (t = t[0]), Dt(t, e)
                    },
                    addClass: function(t, e) {
                        return t.attr && (t = t[0]), Lt(t, e)
                    },
                    removeClass: function(t, e) {
                        return t.attr && (t = t[0]), Ft(t, e)
                    }
                })
            }
        }

        function Xt(t, e) {
            var n = t && t.$$hashKey;
            if (n) return "function" == typeof n && (n = t.$$hashKey()), n;
            var r = typeof t;
            return n = "function" == r || "object" == r && null !== t ? t.$$hashKey = r + ":" + (e || u)() : r + ":" + t
        }

        function Yt(t, e) {
            if (e) {
                var n = 0;
                this.nextUid = function() {
                    return ++n
                }
            }
            o(t, this.put, this)
        }

        function Kt(t) {
            var e = t.toString().replace(bi, ""),
                n = e.match(yi);
            return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
        }

        function Jt(t, e, n) {
            var r, i, a, s;
            if ("function" == typeof t) {
                if (!(r = t.$inject)) {
                    if (r = [], t.length) {
                        if (e) throw S(n) && n || (n = t.name || Kt(t)), wi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                        i = t.toString().replace(bi, ""), a = i.match(yi), o(a[1].split($i), function(t) {
                            t.replace(xi, function(t, e, n) {
                                r.push(n)
                            })
                        })
                    }
                    t.$inject = r
                }
            } else Ir(t) ? (s = t.length - 1, ht(t[s], "fn"), r = t.slice(0, s)) : ht(t, "fn", !0);
            return r
        }

        function Qt(t, e) {
            function r(t) {
                return function(e, n) {
                    return b(e) ? void o(e, s(t)) : t(e, n)
                }
            }

            function i(t, e) {
                if (pt(t, "service"), (k(e) || Ir(e)) && (e = C.instantiate(e)), !e.$get) throw wi("pget", "Provider '{0}' must define $get factory method.", t);
                return w[t + v] = e
            }

            function a(t, e) {
                return function() {
                    var n = A.invoke(e, this);
                    if ($(n)) throw wi("undef", "Provider '{0}' must return a value from $get factory method.", t);
                    return n
                }
            }

            function u(t, e, n) {
                return i(t, {
                    $get: n !== !1 ? a(t, e) : e
                })
            }

            function c(t, e) {
                return u(t, ["$injector", function(t) {
                    return t.instantiate(e)
                }])
            }

            function l(t, e) {
                return u(t, m(e), !1)
            }

            function f(t, e) {
                pt(t, "constant"), w[t] = e, E[t] = e
            }

            function h(t, e) {
                var n = C.get(t + v),
                    r = n.$get;
                n.$get = function() {
                    var t = A.invoke(r, n);
                    return A.invoke(e, null, {
                        $delegate: t
                    })
                }
            }

            function p(t) {
                ft($(t) || Ir(t), "modulesToLoad", "not an array");
                var e, n = [];
                return o(t, function(t) {
                    function r(t) {
                        var e, n;
                        for (e = 0, n = t.length; n > e; e++) {
                            var r = t[e],
                                i = C.get(r[0]);
                            i[r[1]].apply(i, r[2])
                        }
                    }
                    if (!x.get(t)) {
                        x.put(t, !0);
                        try {
                            S(t) ? (e = _r(t), n = n.concat(p(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : k(t) ? n.push(C.invoke(t)) : Ir(t) ? n.push(C.invoke(t)) : ht(t, "module")
                        } catch (i) {
                            throw Ir(t) && (t = t[t.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), wi("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, i.stack || i.message || i)
                        }
                    }
                }), n
            }

            function d(t, n) {
                function r(e, r) {
                    if (t.hasOwnProperty(e)) {
                        if (t[e] === g) throw wi("cdep", "Circular dependency found: {0}", e + " <- " + y.join(" <- "));
                        return t[e]
                    }
                    try {
                        return y.unshift(e), t[e] = g, t[e] = n(e, r)
                    } catch (i) {
                        throw t[e] === g && delete t[e], i
                    } finally {
                        y.shift()
                    }
                }

                function i(t, n, i, o) {
                    "string" == typeof i && (o = i, i = null);
                    var a, s, u, c = [],
                        l = Qt.$$annotate(t, e, o);
                    for (s = 0, a = l.length; a > s; s++) {
                        if (u = l[s], "string" != typeof u) throw wi("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                        c.push(i && i.hasOwnProperty(u) ? i[u] : r(u, o))
                    }
                    return Ir(t) && (t = t[a]), t.apply(n, c)
                }

                function o(t, e, n) {
                    var r = Object.create((Ir(t) ? t[t.length - 1] : t).prototype || null),
                        o = i(t, r, e, n);
                    return b(o) || k(o) ? o : r
                }
                return {
                    invoke: i,
                    instantiate: o,
                    get: r,
                    annotate: Qt.$$annotate,
                    has: function(e) {
                        return w.hasOwnProperty(e + v) || t.hasOwnProperty(e)
                    }
                }
            }
            e = e === !0;
            var g = {},
                v = "Provider",
                y = [],
                x = new Yt([], !0),
                w = {
                    $provide: {
                        provider: r(i),
                        factory: r(u),
                        service: r(c),
                        value: r(l),
                        constant: r(f),
                        decorator: h
                    }
                },
                C = w.$injector = d(w, function(t, e) {
                    throw Dr.isString(e) && y.push(e), wi("unpr", "Unknown provider: {0}", y.join(" <- "))
                }),
                E = {},
                A = E.$injector = d(E, function(t, e) {
                    var r = C.get(t + v, e);
                    return A.invoke(r.$get, r, n, t)
                });
            return o(p(t), function(t) {
                t && A.invoke(t)
            }), A
        }

        function Zt() {
            var t = !0;
            this.disableAutoScrolling = function() {
                t = !1
            }, this.$get = ["$window", "$location", "$rootScope", function(e, n, r) {
                function i(t) {
                    var e = null;
                    return Array.prototype.some.call(t, function(t) {
                        return "a" === I(t) ? (e = t, !0) : void 0
                    }), e
                }

                function o() {
                    var t = s.yOffset;
                    if (k(t)) t = t();
                    else if (F(t)) {
                        var n = t[0],
                            r = e.getComputedStyle(n);
                        t = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                    } else C(t) || (t = 0);
                    return t
                }

                function a(t) {
                    if (t) {
                        t.scrollIntoView();
                        var n = o();
                        if (n) {
                            var r = t.getBoundingClientRect().top;
                            e.scrollBy(0, r - n)
                        }
                    } else e.scrollTo(0, 0)
                }

                function s(t) {
                    t = S(t) ? t : n.hash();
                    var e;
                    t ? (e = u.getElementById(t)) ? a(e) : (e = i(u.getElementsByName(t))) ? a(e) : "top" === t && a(null) : a(null)
                }
                var u = e.document;
                return t && r.$watch(function() {
                    return n.hash()
                }, function(t, e) {
                    (t !== e || "" !== t) && Bt(function() {
                        r.$evalAsync(s)
                    })
                }), s
            }]
        }

        function te(t, e) {
            return t || e ? t ? e ? (Ir(t) && (t = t.join(" ")), Ir(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
        }

        function ee(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.nodeType === Ci) return n
            }
        }

        function ne(t) {
            S(t) && (t = t.split(" "));
            var e = vt();
            return o(t, function(t) {
                t.length && (e[t] = !0)
            }), e
        }

        function re(t) {
            return b(t) ? t : {}
        }

        function ie(t, e, n, r) {
            function i(t) {
                try {
                    t.apply(null, z(arguments, 1))
                } finally {
                    if (y--, 0 === y)
                        for (; x.length;) try {
                            x.pop()()
                        } catch (e) {
                            n.error(e)
                        }
                }
            }

            function a(t) {
                var e = t.indexOf("#");
                return -1 === e ? "" : t.substr(e)
            }

            function s() {
                E = null, c(), l()
            }

            function u() {
                try {
                    return p.state
                } catch (t) {}
            }

            function c() {
                b = u(), b = $(b) ? null : b, H(b, _) && (b = _), _ = b
            }

            function l() {
                (S !== f.url() || w !== b) && (S = f.url(), w = b, o(k, function(t) {
                    t(f.url(), b)
                }))
            }
            var f = this,
                h = (e[0], t.location),
                p = t.history,
                d = t.setTimeout,
                v = t.clearTimeout,
                m = {};
            f.isMock = !1;
            var y = 0,
                x = [];
            f.$$completeOutstandingRequest = i, f.$$incOutstandingRequestCount = function() {
                y++
            }, f.notifyWhenNoOutstandingRequests = function(t) {
                0 === y ? t() : x.push(t)
            };
            var b, w, S = h.href,
                C = e.find("base"),
                E = null;
            c(), w = b, f.url = function(e, n, i) {
                if ($(i) && (i = null), h !== t.location && (h = t.location), p !== t.history && (p = t.history), e) {
                    var o = w === i;
                    if (S === e && (!r.history || o)) return f;
                    var s = S && De(S) === De(e);
                    return S = e, w = i, !r.history || s && o ? ((!s || E) && (E = e), n ? h.replace(e) : s ? h.hash = a(e) : h.href = e, h.href !== e && (E = e)) : (p[n ? "replaceState" : "pushState"](i, "", e), c(), w = b), f
                }
                return E || h.href.replace(/%27/g, "'")
            }, f.state = function() {
                return b
            };
            var k = [],
                A = !1,
                _ = null;
            f.onUrlChange = function(e) {
                return A || (r.history && kr(t).on("popstate", s), kr(t).on("hashchange", s), A = !0), k.push(e), e
            }, f.$$applicationDestroyed = function() {
                kr(t).off("hashchange popstate", s)
            }, f.$$checkUrlChange = l, f.baseHref = function() {
                var t = C.attr("href");
                return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            }, f.defer = function(t, e) {
                var n;
                return y++, n = d(function() {
                    delete m[n], i(t)
                }, e || 0), m[n] = !0, n
            }, f.defer.cancel = function(t) {
                return m[t] ? (delete m[t], v(t), i(g), !0) : !1
            }
        }

        function oe() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function(t, e, n, r) {
                return new ie(t, r, e, n)
            }]
        }

        function ae() {
            this.$get = function() {
                function t(t, n) {
                    function i(t) {
                        t != h && (p ? p == t && (p = t.n) : p = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                    }

                    function o(t, e) {
                        t != e && (t && (t.p = e), e && (e.n = t))
                    }
                    if (t in e) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                    var a = 0,
                        s = f({}, n, {
                            id: t
                        }),
                        u = {},
                        c = n && n.capacity || Number.MAX_VALUE,
                        l = {},
                        h = null,
                        p = null;
                    return e[t] = {
                        put: function(t, e) {
                            if (!$(e)) {
                                if (c < Number.MAX_VALUE) {
                                    var n = l[t] || (l[t] = {
                                        key: t
                                    });
                                    i(n)
                                }
                                return t in u || a++, u[t] = e, a > c && this.remove(p.key), e
                            }
                        },
                        get: function(t) {
                            if (c < Number.MAX_VALUE) {
                                var e = l[t];
                                if (!e) return;
                                i(e)
                            }
                            return u[t]
                        },
                        remove: function(t) {
                            if (c < Number.MAX_VALUE) {
                                var e = l[t];
                                if (!e) return;
                                e == h && (h = e.p), e == p && (p = e.n), o(e.n, e.p), delete l[t]
                            }
                            delete u[t], a--
                        },
                        removeAll: function() {
                            u = {}, a = 0, l = {}, h = p = null
                        },
                        destroy: function() {
                            u = null, s = null, l = null, delete e[t]
                        },
                        info: function() {
                            return f({}, s, {
                                size: a
                            })
                        }
                    }
                }
                var e = {};
                return t.info = function() {
                    var t = {};
                    return o(e, function(e, n) {
                        t[n] = e.info()
                    }), t
                }, t.get = function(t) {
                    return e[t]
                }, t
            }
        }

        function se() {
            this.$get = ["$cacheFactory", function(t) {
                return t("templates")
            }]
        }

        function ue(t, r) {
            function i(t, e, n) {
                var r = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                    i = {};
                return o(t, function(t, o) {
                    var a = t.match(r);
                    if (!a) throw Ni("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, o, t, n ? "controller bindings definition" : "isolate scope definition");
                    i[o] = {
                        mode: a[1][0],
                        collection: "*" === a[2],
                        optional: "?" === a[3],
                        attrName: a[4] || o
                    }
                }), i
            }

            function a(t, e) {
                var n = {
                    isolateScope: null,
                    bindToController: null
                };
                if (b(t.scope) && (t.bindToController === !0 ? (n.bindToController = i(t.scope, e, !0), n.isolateScope = {}) : n.isolateScope = i(t.scope, e, !1)), b(t.bindToController) && (n.bindToController = i(t.bindToController, e, !0)), b(n.bindToController)) {
                    var r = t.controller,
                        o = t.controllerAs;
                    if (!r) throw Ni("noctrl", "Cannot bind to controller without directive '{0}'s controller.", e);
                    if (!he(r, o)) throw Ni("noident", "Cannot bind to controller without identifier for directive '{0}'.", e)
                }
                return n
            }

            function u(t) {
                var e = t.charAt(0);
                if (!e || e !== xr(e)) throw Ni("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", t);
                if (t !== t.trim()) throw Ni("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", t)
            }
            var c = {},
                l = "Directive",
                h = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
                p = /(([\w\-]+)(?:\:([^;]+))?;?)/,
                y = L("ngSrc,ngSrcset,src,srcset"),
                w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                C = /^(on[a-z]+|formaction)$/;
            this.directive = function A(e, n) {
                return pt(e, "directive"), S(e) ? (u(e), ft(n, "directiveFactory"), c.hasOwnProperty(e) || (c[e] = [], t.factory(e + l, ["$injector", "$exceptionHandler", function(t, n) {
                    var r = [];
                    return o(c[e], function(i, o) {
                        try {
                            var s = t.invoke(i);
                            k(s) ? s = {
                                compile: m(s)
                            } : !s.compile && s.link && (s.compile = m(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || e, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA";
                            var u = s.$$bindings = a(s, s.name);
                            b(u.isolateScope) && (s.$$isolateBindings = u.isolateScope), s.$$moduleName = i.$$moduleName, r.push(s)
                        } catch (c) {
                            n(c)
                        }
                    }), r
                }])), c[e].push(n)) : o(e, s(A)), this
            }, this.aHrefSanitizationWhitelist = function(t) {
                return x(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
            }, this.imgSrcSanitizationWhitelist = function(t) {
                return x(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
            };
            var E = !0;
            this.debugInfoEnabled = function(t) {
                return x(t) ? (E = t, this) : E
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(t, r, i, a, s, u, m, x, A, _, N) {
                function j(t, e) {
                    try {
                        t.addClass(e)
                    } catch (n) {}
                }

                function O(t, e, n, r, i) {
                    t instanceof kr || (t = kr(t)), o(t, function(e, n) {
                        e.nodeType == Yr && e.nodeValue.match(/\S+/) && (t[n] = kr(e).wrap("<span></span>").parent()[0])
                    });
                    var a = P(t, e, t, n, r, i);
                    O.$$addScopeClass(t);
                    var s = null;
                    return function(e, n, r) {
                        ft(e, "scope"), r = r || {};
                        var i = r.parentBoundTranscludeFn,
                            o = r.transcludeControllers,
                            u = r.futureParentElement;
                        i && i.$$boundTransclude && (i = i.$$boundTransclude), s || (s = M(u));
                        var c;
                        if (c = "html" !== s ? kr(Z(s, kr("<div>").append(t).html())) : n ? pi.clone.call(t) : t, o)
                            for (var l in o) c.data("$" + l + "Controller", o[l].instance);
                        return O.$$addScopeInfo(c, e), n && n(c, e), a && a(e, c, c, i), c
                    }
                }

                function M(t) {
                    var e = t && t[0];
                    return e && "foreignobject" !== I(e) && e.toString().match(/SVG/) ? "svg" : "html"
                }

                function P(t, e, r, i, o, a) {
                    function s(t, r, i, o) {
                        var a, s, u, c, l, f, h, p, v;
                        if (d) {
                            var m = r.length;
                            for (v = new Array(m), l = 0; l < g.length; l += 3) h = g[l], v[h] = r[h]
                        } else v = r;
                        for (l = 0, f = g.length; f > l;)
                            if (u = v[g[l++]], a = g[l++], s = g[l++], a) {
                                if (a.scope) {
                                    c = t.$new(), O.$$addScopeInfo(kr(u), c);
                                    var y = a.$$destroyBindings;
                                    y && (a.$$destroyBindings = null, c.$on("$destroyed", y))
                                } else c = t;
                                p = a.transcludeOnThisElement ? D(t, a.transclude, o) : !a.templateOnThisElement && o ? o : !o && e ? D(t, e) : null, a(s, c, u, i, p, a)
                            } else s && s(t, u.childNodes, n, o)
                    }
                    for (var u, c, l, f, h, p, d, g = [], v = 0; v < t.length; v++) u = new at, c = F(t[v], [], u, 0 === v ? i : n, o), l = c.length ? q(c, t[v], u, e, r, null, [], [], a) : null, l && l.scope && O.$$addScopeClass(u.$$element), h = l && l.terminal || !(f = t[v].childNodes) || !f.length ? null : P(f, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : e), (l || h) && (g.push(v, l, h), p = !0, d = d || l), a = null;
                    return p ? s : null
                }

                function D(t, e, n) {
                    var r = function(r, i, o, a, s) {
                        return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
                            parentBoundTranscludeFn: n,
                            transcludeControllers: o,
                            futureParentElement: a
                        })
                    };
                    return r
                }

                function F(t, e, n, r, i) {
                    var o, a, s = t.nodeType,
                        u = n.$attr;
                    switch (s) {
                        case Gr:
                            U(e, ce(I(t)), "E", r, i);
                            for (var c, l, f, d, g, v, m = t.attributes, y = 0, $ = m && m.length; $ > y; y++) {
                                var x = !1,
                                    w = !1;
                                c = m[y], l = c.name, g = Vr(c.value), d = ce(l), (v = ht.test(d)) && (l = l.replace(ji, "").substr(8).replace(/_(.)/g, function(t, e) {
                                    return e.toUpperCase()
                                }));
                                var C = d.replace(/(Start|End)$/, "");
                                W(C) && d === C + "Start" && (x = l, w = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6)), f = ce(l.toLowerCase()), u[f] = l, (v || !n.hasOwnProperty(f)) && (n[f] = g, zt(t, f) && (n[f] = !0)), et(t, e, g, f, v), U(e, f, "A", r, i, x, w)
                            }
                            if (a = t.className, b(a) && (a = a.animVal), S(a) && "" !== a)
                                for (; o = p.exec(a);) f = ce(o[2]), U(e, f, "C", r, i) && (n[f] = Vr(o[3])), a = a.substr(o.index + o[0].length);
                            break;
                        case Yr:
                            if (11 === Er)
                                for (; t.parentNode && t.nextSibling && t.nextSibling.nodeType === Yr;) t.nodeValue = t.nodeValue + t.nextSibling.nodeValue, t.parentNode.removeChild(t.nextSibling);
                            J(e, t.nodeValue);
                            break;
                        case Kr:
                            try {
                                o = h.exec(t.nodeValue), o && (f = ce(o[1]), U(e, f, "M", r, i) && (n[f] = Vr(o[2])))
                            } catch (E) {}
                    }
                    return e.sort(Y), e
                }

                function L(t, e, n) {
                    var r = [],
                        i = 0;
                    if (e && t.hasAttribute && t.hasAttribute(e)) {
                        do {
                            if (!t) throw Ni("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
                            t.nodeType == Gr && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                        } while (i > 0)
                    } else r.push(t);
                    return kr(r)
                }

                function V(t, e, n) {
                    return function(r, i, o, a, s) {
                        return i = L(i[0], e, n), t(r, i, o, a, s)
                    }
                }

                function q(t, r, o, a, s, c, l, f, h) {
                    function p(t, e, n, r) {
                        t && (n && (t = V(t, n, r)), t.require = m.require, t.directiveName = y, (N === m || m.$$isolateScope) && (t = rt(t, {
                            isolateScope: !0
                        })), l.push(t)), e && (n && (e = V(e, n, r)), e.require = m.require, e.directiveName = y, (N === m || m.$$isolateScope) && (e = rt(e, {
                            isolateScope: !0
                        })), f.push(e))
                    }

                    function d(t, e, n, r) {
                        var i;
                        if (S(e)) {
                            var o = e.match(w),
                                a = e.substring(o[0].length),
                                s = o[1] || o[3],
                                u = "?" === o[2];
                            if ("^^" === s ? n = n.parent() : (i = r && r[a], i = i && i.instance), !i) {
                                var c = "$" + a + "Controller";
                                i = s ? n.inheritedData(c) : n.data(c)
                            }
                            if (!i && !u) throw Ni("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, t)
                        } else if (Ir(e)) {
                            i = [];
                            for (var l = 0, f = e.length; f > l; l++) i[l] = d(t, e[l], n, r)
                        }
                        return i || null
                    }

                    function g(t, e, n, r, i, o) {
                        var a = vt();
                        for (var s in r) {
                            var c = r[s],
                                l = {
                                    $scope: c === N || c.$$isolateScope ? i : o,
                                    $element: t,
                                    $attrs: e,
                                    $transclude: n
                                },
                                f = c.controller;
                            "@" == f && (f = e[c.name]);
                            var h = u(f, l, !0, c.controllerAs);
                            a[c.name] = h, I || t.data("$" + c.name + "Controller", h.instance)
                        }
                        return a
                    }

                    function v(t, e, i, a, s, u) {
                        function c(t, e, r) {
                            var i;
                            return T(t) || (r = e, e = t, t = n), I && (i = $), r || (r = I ? b.parent() : b), s(t, e, i, r, M)
                        }
                        var h, p, v, m, y, $, x, b, w;
                        if (r === i ? (w = o, b = o.$$element) : (b = kr(i), w = new at(b, o)), N && (y = e.$new(!0)), s && (x = c, x.$$boundTransclude = s), _ && ($ = g(b, w, x, _, y, e)), N && (O.$$addScopeInfo(b, y, !0, !(j && (j === N || j === N.$$originalDirective))), O.$$addScopeClass(b, !0), y.$$isolateBindings = N.$$isolateBindings, ot(e, w, y, y.$$isolateBindings, N, y)), $) {
                            var S, C, E = N || A;
                            E && $[E.name] && (S = E.$$bindings.bindToController, m = $[E.name], m && m.identifier && S && (C = m, u.$$destroyBindings = ot(e, w, m.instance, S, E)));
                            for (h in $) {
                                m = $[h];
                                var k = m();
                                k !== m.instance && (m.instance = k, b.data("$" + h + "Controller", k), m === C && (u.$$destroyBindings(), u.$$destroyBindings = ot(e, w, k, S, E)))
                            }
                        }
                        for (h = 0, p = l.length; p > h; h++) v = l[h], it(v, v.isolateScope ? y : e, b, w, v.require && d(v.directiveName, v.require, b, $), x);
                        var M = e;
                        for (N && (N.template || null === N.templateUrl) && (M = y), t && t(M, i.childNodes, n, s), h = f.length - 1; h >= 0; h--) v = f[h], it(v, v.isolateScope ? y : e, b, w, v.require && d(v.directiveName, v.require, b, $), x)
                    }
                    h = h || {};
                    for (var m, y, $, x, C, E = -Number.MAX_VALUE, A = h.newScopeDirective, _ = h.controllerDirectives, N = h.newIsolateScopeDirective, j = h.templateDirective, M = h.nonTlbTranscludeDirective, P = !1, D = !1, I = h.hasElementTranscludeDirective, R = o.$$element = kr(r), q = c, H = a, U = 0, W = t.length; W > U; U++) {
                        m = t[U];
                        var Y = m.$$start,
                            J = m.$$end;
                        if (Y && (R = L(r, Y, J)), $ = n, E > m.priority) break;
                        if ((C = m.scope) && (m.templateUrl || (b(C) ? (K("new/isolated scope", N || A, m, R), N = m) : K("new/isolated scope", N, m, R)), A = A || m), y = m.name, !m.templateUrl && m.controller && (C = m.controller, _ = _ || vt(), K("'" + y + "' controller", _[y], m, R), _[y] = m), (C = m.transclude) && (P = !0, m.$$tlb || (K("transclusion", M, m, R), M = m), "element" == C ? (I = !0, E = m.priority, $ = R, R = o.$$element = kr(e.createComment(" " + y + ": " + o[y] + " ")), r = R[0], nt(s, z($), r), H = O($, a, E, q && q.name, {
                                nonTlbTranscludeDirective: M
                            })) : ($ = kr(Tt(r)).contents(), R.empty(), H = O($, a))), m.template)
                            if (D = !0, K("template", j, m, R), j = m, C = k(m.template) ? m.template(R, o) : m.template, C = lt(C), m.replace) {
                                if (q = m, $ = St(C) ? [] : fe(Z(m.templateNamespace, Vr(C))), r = $[0], 1 != $.length || r.nodeType !== Gr) throw Ni("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", y, "");
                                nt(s, R, r);
                                var tt = {
                                        $attr: {}
                                    },
                                    et = F(r, [], tt),
                                    st = t.splice(U + 1, t.length - (U + 1));
                                N && B(et), t = t.concat(et).concat(st), G(o, tt), W = t.length
                            } else R.html(C);
                        if (m.templateUrl) D = !0, K("template", j, m, R), j = m, m.replace && (q = m), v = X(t.splice(U, t.length - U), R, o, s, P && H, l, f, {
                            controllerDirectives: _,
                            newScopeDirective: A !== m && A,
                            newIsolateScopeDirective: N,
                            templateDirective: j,
                            nonTlbTranscludeDirective: M
                        }), W = t.length;
                        else if (m.compile) try {
                            x = m.compile(R, o, H), k(x) ? p(null, x, Y, J) : x && p(x.pre, x.post, Y, J)
                        } catch (ut) {
                            i(ut, Q(R))
                        }
                        m.terminal && (v.terminal = !0, E = Math.max(E, m.priority))
                    }
                    return v.scope = A && A.scope === !0, v.transcludeOnThisElement = P, v.templateOnThisElement = D, v.transclude = H, h.hasElementTranscludeDirective = I, v
                }

                function B(t) {
                    for (var e = 0, n = t.length; n > e; e++) t[e] = d(t[e], {
                        $$isolateScope: !0
                    })
                }

                function U(e, n, r, o, a, s, u) {
                    if (n === a) return null;
                    var f = null;
                    if (c.hasOwnProperty(n))
                        for (var h, p = t.get(n + l), g = 0, v = p.length; v > g; g++) try {
                            h = p[g], ($(o) || o > h.priority) && -1 != h.restrict.indexOf(r) && (s && (h = d(h, {
                                $$start: s,
                                $$end: u
                            })), e.push(h), f = h)
                        } catch (m) {
                            i(m)
                        }
                    return f
                }

                function W(e) {
                    if (c.hasOwnProperty(e))
                        for (var n, r = t.get(e + l), i = 0, o = r.length; o > i; i++)
                            if (n = r[i], n.multiElement) return !0;
                    return !1
                }

                function G(t, e) {
                    var n = e.$attr,
                        r = t.$attr,
                        i = t.$$element;
                    o(t, function(r, i) {
                        "$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
                    }), o(e, function(e, o) {
                        "class" == o ? (j(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
                    })
                }

                function X(t, e, n, r, i, s, u, c) {
                    var l, f, h = [],
                        p = e[0],
                        g = t.shift(),
                        v = d(g, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: g
                        }),
                        m = k(g.templateUrl) ? g.templateUrl(e, n) : g.templateUrl,
                        y = g.templateNamespace;
                    return e.empty(), a(m).then(function(a) {
                            var d, $, x, w;
                            if (a = lt(a), g.replace) {
                                if (x = St(a) ? [] : fe(Z(y, Vr(a))), d = x[0], 1 != x.length || d.nodeType !== Gr) throw Ni("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, m);
                                $ = {
                                    $attr: {}
                                }, nt(r, e, d);
                                var S = F(d, [], $);
                                b(g.scope) && B(S), t = S.concat(t), G(n, $)
                            } else d = p, e.html(a);
                            for (t.unshift(v), l = q(t, d, n, i, e, g, s, u, c), o(r, function(t, n) {
                                    t == d && (r[n] = e[0])
                                }), f = P(e[0].childNodes, i); h.length;) {
                                var C = h.shift(),
                                    E = h.shift(),
                                    k = h.shift(),
                                    A = h.shift(),
                                    _ = e[0];
                                if (!C.$$destroyed) {
                                    if (E !== p) {
                                        var T = E.className;
                                        c.hasElementTranscludeDirective && g.replace || (_ = Tt(d)), nt(k, kr(E), _), j(kr(_), T)
                                    }
                                    w = l.transcludeOnThisElement ? D(C, l.transclude, A) : A, l(f, C, _, r, w, l)
                                }
                            }
                            h = null
                        }),
                        function(t, e, n, r, i) {
                            var o = i;
                            e.$$destroyed || (h ? h.push(e, n, r, o) : (l.transcludeOnThisElement && (o = D(e, l.transclude, i)), l(f, e, n, r, o, l)))
                        }
                }

                function Y(t, e) {
                    var n = e.priority - t.priority;
                    return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
                }

                function K(t, e, n, r) {
                    function i(t) {
                        return t ? " (module: " + t + ")" : ""
                    }
                    if (e) throw Ni("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", e.name, i(e.$$moduleName), n.name, i(n.$$moduleName), t, Q(r))
                }

                function J(t, e) {
                    var n = r(e, !0);
                    n && t.push({
                        priority: 0,
                        compile: function(t) {
                            var e = t.parent(),
                                r = !!e.length;
                            return r && O.$$addBindingClass(e),
                                function(t, e) {
                                    var i = e.parent();
                                    r || O.$$addBindingClass(i), O.$$addBindingInfo(i, n.expressions), t.$watch(n, function(t) {
                                        e[0].nodeValue = t
                                    })
                                }
                        }
                    })
                }

                function Z(t, n) {
                    switch (t = xr(t || "html")) {
                        case "svg":
                        case "math":
                            var r = e.createElement("div");
                            return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
                        default:
                            return n
                    }
                }

                function tt(t, e) {
                    if ("srcdoc" == e) return A.HTML;
                    var n = I(t);
                    return "xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? A.RESOURCE_URL : void 0
                }

                function et(t, e, n, i, o) {
                    var a = tt(t, i);
                    o = y[i] || o;
                    var s = r(n, !0, a, o);
                    if (s) {
                        if ("multiple" === i && "select" === I(t)) throw Ni("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Q(t));
                        e.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(t, e, u) {
                                        var c = u.$$observers || (u.$$observers = vt());
                                        if (C.test(i)) throw Ni("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        var l = u[i];
                                        l !== n && (s = l && r(l, !0, a, o), n = l), s && (u[i] = s(t), (c[i] || (c[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || t).$watch(s, function(t, e) {
                                            "class" === i && t != e ? u.$updateClass(t, e) : u.$set(i, t)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function nt(t, n, r) {
                    var i, o, a = n[0],
                        s = n.length,
                        u = a.parentNode;
                    if (t)
                        for (i = 0, o = t.length; o > i; i++)
                            if (t[i] == a) {
                                t[i++] = r;
                                for (var c = i, l = c + s - 1, f = t.length; f > c; c++, l++) f > l ? t[c] = t[l] : delete t[c];
                                t.length -= s - 1, t.context === a && (t.context = r);
                                break
                            }
                    u && u.replaceChild(r, a);
                    var h = e.createDocumentFragment();
                    h.appendChild(a), kr.hasData(a) && (kr(r).data(kr(a).data()), Ar ? (Lr = !0, Ar.cleanData([a])) : delete kr.cache[a[kr.expando]]);
                    for (var p = 1, d = n.length; d > p; p++) {
                        var g = n[p];
                        kr(g).remove(), h.appendChild(g), delete n[p]
                    }
                    n[0] = r, n.length = 1
                }

                function rt(t, e) {
                    return f(function() {
                        return t.apply(null, arguments)
                    }, t, e)
                }

                function it(t, e, n, r, o, a) {
                    try {
                        t(e, n, r, o, a)
                    } catch (s) {
                        i(s, Q(n))
                    }
                }

                function ot(t, e, n, i, a, u) {
                    var c;
                    o(i, function(i, o) {
                        var u, l, f, h, p = i.attrName,
                            d = i.optional,
                            v = i.mode;
                        switch (v) {
                            case "@":
                                d || br.call(e, p) || (n[o] = e[p] = void 0), e.$observe(p, function(t) {
                                    S(t) && (n[o] = t)
                                }), e.$$observers[p].$$scope = t, S(e[p]) && (n[o] = r(e[p])(t));
                                break;
                            case "=":
                                if (!br.call(e, p)) {
                                    if (d) break;
                                    e[p] = void 0
                                }
                                if (d && !e[p]) break;
                                l = s(e[p]), h = l.literal ? H : function(t, e) {
                                    return t === e || t !== t && e !== e
                                }, f = l.assign || function() {
                                    throw u = n[o] = l(t), Ni("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", e[p], a.name)
                                }, u = n[o] = l(t);
                                var m = function(e) {
                                    return h(e, n[o]) || (h(e, u) ? f(t, e = n[o]) : n[o] = e), u = e
                                };
                                m.$stateful = !0;
                                var y;
                                y = i.collection ? t.$watchCollection(e[p], m) : t.$watch(s(e[p], m), null, l.literal), c = c || [], c.push(y);
                                break;
                            case "&":
                                if (l = e.hasOwnProperty(p) ? s(e[p]) : g, l === g && d) break;
                                n[o] = function(e) {
                                    return l(t, e)
                                }
                        }
                    });
                    var l = c ? function() {
                        for (var t = 0, e = c.length; e > t; ++t) c[t]()
                    } : g;
                    return u && l !== g ? (u.$on("$destroy", l), g) : l
                }
                var at = function(t, e) {
                    if (e) {
                        var n, r, i, o = Object.keys(e);
                        for (n = 0, r = o.length; r > n; n++) i = o[n], this[i] = e[i]
                    } else this.$attr = {};
                    this.$$element = t
                };
                at.prototype = {
                    $normalize: ce,
                    $addClass: function(t) {
                        t && t.length > 0 && _.addClass(this.$$element, t)
                    },
                    $removeClass: function(t) {
                        t && t.length > 0 && _.removeClass(this.$$element, t)
                    },
                    $updateClass: function(t, e) {
                        var n = le(t, e);
                        n && n.length && _.addClass(this.$$element, n);
                        var r = le(e, t);
                        r && r.length && _.removeClass(this.$$element, r)
                    },
                    $set: function(t, e, n, r) {
                        var a, s = this.$$element[0],
                            u = zt(s, t),
                            c = Ut(t),
                            l = t;
                        if (u ? (this.$$element.prop(t, e), r = u) : c && (this[c] = e, l = c), this[t] = e, r ? this.$attr[t] = r : (r = this.$attr[t], r || (this.$attr[t] = r = ct(t, "-"))), a = I(this.$$element), "a" === a && "href" === t || "img" === a && "src" === t) this[t] = e = N(e, "src" === t);
                        else if ("img" === a && "srcset" === t) {
                            for (var f = "", h = Vr(e), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, d = /\s/.test(h) ? p : /(,)/, g = h.split(d), v = Math.floor(g.length / 2), m = 0; v > m; m++) {
                                var y = 2 * m;
                                f += N(Vr(g[y]), !0), f += " " + Vr(g[y + 1])
                            }
                            var x = Vr(g[2 * m]).split(/\s/);
                            f += N(Vr(x[0]), !0), 2 === x.length && (f += " " + Vr(x[1])), this[t] = e = f
                        }
                        n !== !1 && (null === e || $(e) ? this.$$element.removeAttr(r) : this.$$element.attr(r, e));
                        var b = this.$$observers;
                        b && o(b[l], function(t) {
                            try {
                                t(e)
                            } catch (n) {
                                i(n)
                            }
                        })
                    },
                    $observe: function(t, e) {
                        var n = this,
                            r = n.$$observers || (n.$$observers = vt()),
                            i = r[t] || (r[t] = []);
                        return i.push(e), m.$evalAsync(function() {
                                i.$$inter || !n.hasOwnProperty(t) || $(n[t]) || e(n[t])
                            }),
                            function() {
                                R(i, e)
                            }
                    }
                };
                var st = r.startSymbol(),
                    ut = r.endSymbol(),
                    lt = "{{" == st || "}}" == ut ? v : function(t) {
                        return t.replace(/\{\{/g, st).replace(/}}/g, ut)
                    },
                    ht = /^ngAttr[A-Z]/;
                return O.$$addBindingInfo = E ? function(t, e) {
                    var n = t.data("$binding") || [];
                    Ir(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
                } : g, O.$$addBindingClass = E ? function(t) {
                    j(t, "ng-binding")
                } : g, O.$$addScopeInfo = E ? function(t, e, n, r) {
                    var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                    t.data(i, e)
                } : g, O.$$addScopeClass = E ? function(t, e) {
                    j(t, e ? "ng-isolate-scope" : "ng-scope")
                } : g, O
            }]
        }

        function ce(t) {
            return wt(t.replace(ji, ""))
        }

        function le(t, e) {
            var n = "",
                r = t.split(/\s+/),
                i = e.split(/\s+/);
            t: for (var o = 0; o < r.length; o++) {
                for (var a = r[o], s = 0; s < i.length; s++)
                    if (a == i[s]) continue t;
                n += (n.length > 0 ? " " : "") + a
            }
            return n
        }

        function fe(t) {
            t = kr(t);
            var e = t.length;
            if (1 >= e) return t;
            for (; e--;) {
                var n = t[e];
                n.nodeType === Kr && Nr.call(t, e, 1)
            }
            return t
        }

        function he(t, e) {
            if (e && S(e)) return e;
            if (S(t)) {
                var n = Mi.exec(t);
                if (n) return n[3]
            }
        }

        function pe() {
            var t = {},
                e = !1;
            this.register = function(e, n) {
                pt(e, "controller"), b(e) ? f(t, e) : t[e] = n
            }, this.allowGlobals = function() {
                e = !0
            }, this.$get = ["$injector", "$window", function(i, o) {
                function a(t, e, n, i) {
                    if (!t || !b(t.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, e);
                    t.$scope[e] = n
                }
                return function(r, s, u, c) {
                    var l, h, p, d;
                    if (u = u === !0, c && S(c) && (d = c), S(r)) {
                        if (h = r.match(Mi), !h) throw Oi("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                        p = h[1], d = d || h[3], r = t.hasOwnProperty(p) ? t[p] : dt(s.$scope, p, !0) || (e ? dt(o, p, !0) : n), ht(r, p, !0)
                    }
                    if (u) {
                        var g = (Ir(r) ? r[r.length - 1] : r).prototype;
                        l = Object.create(g || null), d && a(s, d, l, p || r.name);
                        var v;
                        return v = f(function() {
                            var t = i.invoke(r, l, s, p);
                            return t !== l && (b(t) || k(t)) && (l = t, d && a(s, d, l, p || r.name)), l
                        }, {
                            instance: l,
                            identifier: d
                        })
                    }
                    return l = i.instantiate(r, s, p), d && a(s, d, l, p || r.name), l
                }
            }]
        }

        function de() {
            this.$get = ["$window", function(t) {
                return kr(t.document)
            }]
        }

        function ge() {
            this.$get = ["$log", function(t) {
                return function(e, n) {
                    t.error.apply(t, arguments)
                }
            }]
        }

        function ve(t) {
            return b(t) ? E(t) ? t.toISOString() : G(t) : t
        }

        function me() {
            this.$get = function() {
                return function(t) {
                    if (!t) return "";
                    var e = [];
                    return a(t, function(t, n) {
                        null === t || $(t) || (Ir(t) ? o(t, function(t, r) {
                            e.push(rt(n) + "=" + rt(ve(t)))
                        }) : e.push(rt(n) + "=" + rt(ve(t))))
                    }), e.join("&")
                }
            }
        }

        function ye() {
            this.$get = function() {
                return function(t) {
                    function e(t, r, i) {
                        null === t || $(t) || (Ir(t) ? o(t, function(t, n) {
                            e(t, r + "[" + (b(t) ? n : "") + "]")
                        }) : b(t) && !E(t) ? a(t, function(t, n) {
                            e(t, r + (i ? "" : "[") + n + (i ? "" : "]"))
                        }) : n.push(rt(r) + "=" + rt(ve(t))))
                    }
                    if (!t) return "";
                    var n = [];
                    return e(t, "", !0), n.join("&")
                }
            }
        }

        function $e(t, e) {
            if (S(t)) {
                var n = t.replace(Ri, "").trim();
                if (n) {
                    var r = e("Content-Type");
                    (r && 0 === r.indexOf(Di) || xe(n)) && (t = X(n))
                }
            }
            return t
        }

        function xe(t) {
            var e = t.match(Li);
            return e && Ii[e[0]].test(t)
        }

        function be(t) {
            function e(t, e) {
                t && (r[t] = r[t] ? r[t] + ", " + e : e)
            }
            var n, r = vt();
            return S(t) ? o(t.split("\n"), function(t) {
                n = t.indexOf(":"), e(xr(Vr(t.substr(0, n))), Vr(t.substr(n + 1)))
            }) : b(t) && o(t, function(t, n) {
                e(xr(n), Vr(t))
            }), r
        }

        function we(t) {
            var e;
            return function(n) {
                if (e || (e = be(t)), n) {
                    var r = e[xr(n)];
                    return void 0 === r && (r = null), r
                }
                return e
            }
        }

        function Se(t, e, n, r) {
            return k(r) ? r(t, e, n) : (o(r, function(r) {
                t = r(t, e, n)
            }), t)
        }

        function Ce(t) {
            return t >= 200 && 300 > t
        }

        function Ee() {
            var t = this.defaults = {
                    transformResponse: [$e],
                    transformRequest: [function(t) {
                        return !b(t) || N(t) || O(t) || j(t) ? t : G(t)
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        post: q(Fi),
                        put: q(Fi),
                        patch: q(Fi)
                    },
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    paramSerializer: "$httpParamSerializer"
                },
                e = !1;
            this.useApplyAsync = function(t) {
                return x(t) ? (e = !!t, this) : e
            };
            var i = !0;
            this.useLegacyPromiseExtensions = function(t) {
                return x(t) ? (i = !!t, this) : i
            };
            var a = this.interceptors = [];
            this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(s, u, c, l, h, p) {
                function d(e) {
                    function a(t) {
                        var e = f({}, t);
                        return t.data ? e.data = Se(t.data, t.headers, t.status, c.transformResponse) : e.data = t.data, Ce(t.status) ? e : h.reject(e)
                    }

                    function s(t, e) {
                        var n, r = {};
                        return o(t, function(t, i) {
                            k(t) ? (n = t(e), null != n && (r[i] = n)) : r[i] = t
                        }), r
                    }

                    function u(e) {
                        var n, r, i, o = t.headers,
                            a = f({}, e.headers);
                        o = f({}, o.common, o[xr(e.method)]);
                        t: for (n in o) {
                            r = xr(n);
                            for (i in a)
                                if (xr(i) === r) continue t;
                            a[n] = o[n]
                        }
                        return s(a, q(e))
                    }
                    if (!Dr.isObject(e)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
                    var c = f({
                        method: "get",
                        transformRequest: t.transformRequest,
                        transformResponse: t.transformResponse,
                        paramSerializer: t.paramSerializer
                    }, e);
                    c.headers = u(e), c.method = wr(c.method), c.paramSerializer = S(c.paramSerializer) ? p.get(c.paramSerializer) : c.paramSerializer;
                    var l = function(e) {
                            var r = e.headers,
                                i = Se(e.data, we(r), n, e.transformRequest);
                            return $(i) && o(r, function(t, e) {
                                "content-type" === xr(e) && delete r[e]
                            }), $(e.withCredentials) && !$(t.withCredentials) && (e.withCredentials = t.withCredentials), m(e, i).then(a, a)
                        },
                        d = [l, n],
                        g = h.when(c);
                    for (o(C, function(t) {
                            (t.request || t.requestError) && d.unshift(t.request, t.requestError), (t.response || t.responseError) && d.push(t.response, t.responseError)
                        }); d.length;) {
                        var v = d.shift(),
                            y = d.shift();
                        g = g.then(v, y)
                    }
                    return i ? (g.success = function(t) {
                        return ht(t, "fn"), g.then(function(e) {
                            t(e.data, e.status, e.headers, c)
                        }), g
                    }, g.error = function(t) {
                        return ht(t, "fn"), g.then(null, function(e) {
                            t(e.data, e.status, e.headers, c)
                        }), g
                    }) : (g.success = qi("success"), g.error = qi("error")), g
                }

                function g(t) {
                    o(arguments, function(t) {
                        d[t] = function(e, n) {
                            return d(f({}, n || {}, {
                                method: t,
                                url: e
                            }))
                        }
                    })
                }

                function v(t) {
                    o(arguments, function(t) {
                        d[t] = function(e, n, r) {
                            return d(f({}, r || {}, {
                                method: t,
                                url: e,
                                data: n
                            }))
                        }
                    })
                }

                function m(r, i) {
                    function o(t, n, r, i) {
                        function o() {
                            a(n, t, r, i)
                        }
                        p && (Ce(t) ? p.put(C, [t, n, be(r), i]) : p.remove(C)), e ? l.$applyAsync(o) : (o(), l.$$phase || l.$apply())
                    }

                    function a(t, e, n, i) {
                        e = e >= -1 ? e : 0, (Ce(e) ? v.resolve : v.reject)({
                            data: t,
                            status: e,
                            headers: we(n),
                            config: r,
                            statusText: i
                        })
                    }

                    function c(t) {
                        a(t.data, t.status, q(t.headers()), t.statusText)
                    }

                    function f() {
                        var t = d.pendingRequests.indexOf(r); - 1 !== t && d.pendingRequests.splice(t, 1)
                    }
                    var p, g, v = h.defer(),
                        m = v.promise,
                        S = r.headers,
                        C = y(r.url, r.paramSerializer(r.params));
                    if (d.pendingRequests.push(r), m.then(f, f), !r.cache && !t.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (p = b(r.cache) ? r.cache : b(t.cache) ? t.cache : w), p && (g = p.get(C), x(g) ? P(g) ? g.then(c, c) : Ir(g) ? a(g[1], g[0], q(g[2]), g[3]) : a(g, 200, {}, "OK") : p.put(C, m)), $(g)) {
                        var E = An(r.url) ? u()[r.xsrfCookieName || t.xsrfCookieName] : n;
                        E && (S[r.xsrfHeaderName || t.xsrfHeaderName] = E), s(r.method, C, i, o, S, r.timeout, r.withCredentials, r.responseType)
                    }
                    return m
                }

                function y(t, e) {
                    return e.length > 0 && (t += (-1 == t.indexOf("?") ? "?" : "&") + e), t
                }
                var w = c("$http");
                t.paramSerializer = S(t.paramSerializer) ? p.get(t.paramSerializer) : t.paramSerializer;
                var C = [];
                return o(a, function(t) {
                    C.unshift(S(t) ? p.get(t) : p.invoke(t))
                }), d.pendingRequests = [], g("get", "delete", "head", "jsonp"), v("post", "put", "patch"), d.defaults = t, d
            }]
        }

        function ke() {
            this.$get = function() {
                return function() {
                    return new t.XMLHttpRequest
                }
            }
        }

        function Ae() {
            this.$get = ["$browser", "$window", "$document", "$xhrFactory", function(t, e, n, r) {
                return _e(t, r, t.defer, e.angular.callbacks, n[0])
            }]
        }

        function _e(t, e, n, r, i) {
            function a(t, e, n) {
                var o = i.createElement("script"),
                    a = null;
                return o.type = "text/javascript", o.src = t, o.async = !0, a = function(t) {
                    ri(o, "load", a), ri(o, "error", a), i.body.removeChild(o), o = null;
                    var s = -1,
                        u = "unknown";
                    t && ("load" !== t.type || r[e].called || (t = {
                        type: "error"
                    }), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u)
                }, ni(o, "load", a), ni(o, "error", a), i.body.appendChild(o), a
            }
            return function(i, s, u, c, l, f, h, p) {
                function d() {
                    y && y(), b && b.abort()
                }

                function v(e, r, i, o, a) {
                    x(C) && n.cancel(C), y = b = null, e(r, i, o, a), t.$$completeOutstandingRequest(g)
                }
                if (t.$$incOutstandingRequestCount(), s = s || t.url(), "jsonp" == xr(i)) {
                    var m = "_" + (r.counter++).toString(36);
                    r[m] = function(t) {
                        r[m].data = t, r[m].called = !0
                    };
                    var y = a(s.replace("JSON_CALLBACK", "angular.callbacks." + m), m, function(t, e) {
                        v(c, t, r[m].data, "", e), r[m] = g
                    })
                } else {
                    var b = e(i, s);
                    b.open(i, s, !0), o(l, function(t, e) {
                        x(t) && b.setRequestHeader(e, t)
                    }), b.onload = function() {
                        var t = b.statusText || "",
                            e = "response" in b ? b.response : b.responseText,
                            n = 1223 === b.status ? 204 : b.status;
                        0 === n && (n = e ? 200 : "file" == kn(s).protocol ? 404 : 0), v(c, n, e, b.getAllResponseHeaders(), t)
                    };
                    var w = function() {
                        v(c, -1, null, null, "")
                    };
                    if (b.onerror = w, b.onabort = w, h && (b.withCredentials = !0), p) try {
                        b.responseType = p
                    } catch (S) {
                        if ("json" !== p) throw S
                    }
                    b.send($(u) ? null : u)
                }
                if (f > 0) var C = n(d, f);
                else P(f) && f.then(d)
            }
        }

        function Te() {
            var t = "{{",
                e = "}}";
            this.startSymbol = function(e) {
                return e ? (t = e, this) : t
            }, this.endSymbol = function(t) {
                return t ? (e = t, this) : e
            }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
                function o(t) {
                    return "\\\\\\" + t
                }

                function a(n) {
                    return n.replace(h, t).replace(p, e)
                }

                function s(t) {
                    if (null == t) return "";
                    switch (typeof t) {
                        case "string":
                            break;
                        case "number":
                            t = "" + t;
                            break;
                        default:
                            t = G(t)
                    }
                    return t
                }

                function u(o, u, h, p) {
                    function d(t) {
                        try {
                            return t = _(t), p && !x(t) ? t : s(t)
                        } catch (e) {
                            r(Hi.interr(o, e))
                        }
                    }
                    p = !!p;
                    for (var g, v, m, y = 0, b = [], w = [], S = o.length, C = [], E = []; S > y;) {
                        if (-1 == (g = o.indexOf(t, y)) || -1 == (v = o.indexOf(e, g + c))) {
                            y !== S && C.push(a(o.substring(y)));
                            break
                        }
                        y !== g && C.push(a(o.substring(y, g))), m = o.substring(g + c, v), b.push(m), w.push(n(m, d)), y = v + l, E.push(C.length), C.push("")
                    }
                    if (h && C.length > 1 && Hi.throwNoconcat(o), !u || b.length) {
                        var A = function(t) {
                                for (var e = 0, n = b.length; n > e; e++) {
                                    if (p && $(t[e])) return;
                                    C[E[e]] = t[e]
                                }
                                return C.join("")
                            },
                            _ = function(t) {
                                return h ? i.getTrusted(h, t) : i.valueOf(t)
                            };
                        return f(function(t) {
                            var e = 0,
                                n = b.length,
                                i = new Array(n);
                            try {
                                for (; n > e; e++) i[e] = w[e](t);
                                return A(i)
                            } catch (a) {
                                r(Hi.interr(o, a))
                            }
                        }, {
                            exp: o,
                            expressions: b,
                            $$watchDelegate: function(t, e) {
                                var n;
                                return t.$watchGroup(w, function(r, i) {
                                    var o = A(r);
                                    k(e) && e.call(this, o, r !== i ? n : o, t), n = o
                                })
                            }
                        })
                    }
                }
                var c = t.length,
                    l = e.length,
                    h = new RegExp(t.replace(/./g, o), "g"),
                    p = new RegExp(e.replace(/./g, o), "g");
                return u.startSymbol = function() {
                    return t
                }, u.endSymbol = function() {
                    return e
                }, u
            }]
        }

        function Ne() {
            this.$get = ["$rootScope", "$window", "$q", "$$q", function(t, e, n, r) {
                function i(i, a, s, u) {
                    var c = arguments.length > 4,
                        l = c ? z(arguments, 4) : [],
                        f = e.setInterval,
                        h = e.clearInterval,
                        p = 0,
                        d = x(u) && !u,
                        g = (d ? r : n).defer(),
                        v = g.promise;
                    return s = x(s) ? s : 0, v.then(null, null, c ? function() {
                        i.apply(null, l)
                    } : i), v.$$intervalId = f(function() {
                        g.notify(p++), s > 0 && p >= s && (g.resolve(p), h(v.$$intervalId), delete o[v.$$intervalId]), d || t.$apply()
                    }, a), o[v.$$intervalId] = g, v
                }
                var o = {};
                return i.cancel = function(t) {
                    return t && t.$$intervalId in o ? (o[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0) : !1
                }, i
            }]
        }

        function je(t) {
            for (var e = t.split("/"), n = e.length; n--;) e[n] = nt(e[n]);
            return e.join("/")
        }

        function Oe(t, e) {
            var n = kn(t);
            e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = p(n.port) || zi[n.protocol] || null
        }

        function Me(t, e) {
            var n = "/" !== t.charAt(0);
            n && (t = "/" + t);
            var r = kn(t);
            e.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), e.$$search = tt(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
        }

        function Pe(t, e) {
            return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
        }

        function De(t) {
            var e = t.indexOf("#");
            return -1 == e ? t : t.substr(0, e)
        }

        function Fe(t) {
            return t.replace(/(#.+)|#$/, "$1")
        }

        function Le(t) {
            return t.substr(0, De(t).lastIndexOf("/") + 1)
        }

        function Ie(t) {
            return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
        }

        function Re(t, e, n) {
            this.$$html5 = !0, n = n || "", Oe(t, this), this.$$parse = function(t) {
                var n = Pe(e, t);
                if (!S(n)) throw Ui("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, e);
                Me(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
            }, this.$$compose = function() {
                var t = et(this.$$search),
                    n = this.$$hash ? "#" + nt(this.$$hash) : "";
                this.$$url = je(this.$$path) + (t ? "?" + t : "") + n, this.$$absUrl = e + this.$$url.substr(1)
            }, this.$$parseLinkUrl = function(r, i) {
                if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
                var o, a, s;
                return x(o = Pe(t, r)) ? (a = o, s = x(o = Pe(n, o)) ? e + (Pe("/", o) || o) : t + a) : x(o = Pe(e, r)) ? s = e + o : e == r + "/" && (s = e), s && this.$$parse(s), !!s
            }
        }

        function Ve(t, e, n) {
            Oe(t, this), this.$$parse = function(r) {
                function i(t, e, n) {
                    var r, i = /^\/[A-Z]:(\/.*)/;
                    return 0 === e.indexOf(n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
                }
                var o, a = Pe(t, r) || Pe(e, r);
                $(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", $(a) && (t = r, this.replace())) : (o = Pe(n, a), $(o) && (o = a)), Me(o, this), this.$$path = i(this.$$path, o, t), this.$$compose()
            }, this.$$compose = function() {
                var e = et(this.$$search),
                    r = this.$$hash ? "#" + nt(this.$$hash) : "";
                this.$$url = je(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = t + (this.$$url ? n + this.$$url : "")
            }, this.$$parseLinkUrl = function(e, n) {
                return De(t) == De(e) ? (this.$$parse(e), !0) : !1
            }
        }

        function qe(t, e, n) {
            this.$$html5 = !0, Ve.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
                if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
                var o, a;
                return t == De(r) ? o = r : (a = Pe(e, r)) ? o = t + n + a : e === r + "/" && (o = e), o && this.$$parse(o), !!o
            }, this.$$compose = function() {
                var e = et(this.$$search),
                    r = this.$$hash ? "#" + nt(this.$$hash) : "";
                this.$$url = je(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = t + n + this.$$url
            }
        }

        function He(t) {
            return function() {
                return this[t]
            }
        }

        function Be(t, e) {
            return function(n) {
                return $(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
            }
        }

        function ze() {
            var t = "",
                e = {
                    enabled: !1,
                    requireBase: !0,
                    rewriteLinks: !0
                };
            this.hashPrefix = function(e) {
                return x(e) ? (t = e, this) : t
            }, this.html5Mode = function(t) {
                return M(t) ? (e.enabled = t, this) : b(t) ? (M(t.enabled) && (e.enabled = t.enabled), M(t.requireBase) && (e.requireBase = t.requireBase), M(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
                function s(t, e, n) {
                    var i = c.url(),
                        o = c.$$state;
                    try {
                        r.url(t, e, n), c.$$state = r.state()
                    } catch (a) {
                        throw c.url(i), c.$$state = o, a
                    }
                }

                function u(t, e) {
                    n.$broadcast("$locationChangeSuccess", c.absUrl(), t, c.$$state, e)
                }
                var c, l, f, h = r.baseHref(),
                    p = r.url();
                if (e.enabled) {
                    if (!h && e.requireBase) throw Ui("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    f = Ie(p) + (h || "/"), l = i.history ? Re : qe
                } else f = De(p), l = Ve;
                var d = Le(f);
                c = new l(f, d, "#" + t), c.$$parseLinkUrl(p, p), c.$$state = r.state();
                var g = /^\s*(javascript|mailto):/i;
                o.on("click", function(t) {
                    if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 != t.which && 2 != t.button) {
                        for (var i = kr(t.target);
                            "a" !== I(i[0]);)
                            if (i[0] === o[0] || !(i = i.parent())[0]) return;
                        var s = i.prop("href"),
                            u = i.attr("href") || i.attr("xlink:href");
                        b(s) && "[object SVGAnimatedString]" === s.toString() && (s = kn(s.animVal).href), g.test(s) || !s || i.attr("target") || t.isDefaultPrevented() || c.$$parseLinkUrl(s, u) && (t.preventDefault(), c.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                    }
                }), Fe(c.absUrl()) != Fe(p) && r.url(c.absUrl(), !0);
                var v = !0;
                return r.onUrlChange(function(t, e) {
                    return $(Pe(d, t)) ? void(a.location.href = t) : (n.$evalAsync(function() {
                        var r, i = c.absUrl(),
                            o = c.$$state;
                        c.$$parse(t), c.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, c.absUrl() === t && (r ? (c.$$parse(i), c.$$state = o, s(i, !1, o)) : (v = !1, u(i, o)))
                    }), void(n.$$phase || n.$digest()))
                }), n.$watch(function() {
                    var t = Fe(r.url()),
                        e = Fe(c.absUrl()),
                        o = r.state(),
                        a = c.$$replace,
                        l = t !== e || c.$$html5 && i.history && o !== c.$$state;
                    (v || l) && (v = !1, n.$evalAsync(function() {
                        var e = c.absUrl(),
                            r = n.$broadcast("$locationChangeStart", e, t, c.$$state, o).defaultPrevented;
                        c.absUrl() === e && (r ? (c.$$parse(t), c.$$state = o) : (l && s(e, a, o === c.$$state ? null : c.$$state), u(t, o)))
                    })), c.$$replace = !1
                }), c
            }]
        }

        function Ue() {
            var t = !0,
                e = this;
            this.debugEnabled = function(e) {
                return x(e) ? (t = e, this) : t
            }, this.$get = ["$window", function(n) {
                function r(t) {
                    return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
                }

                function i(t) {
                    var e = n.console || {},
                        i = e[t] || e.log || g,
                        a = !1;
                    try {
                        a = !!i.apply
                    } catch (s) {}
                    return a ? function() {
                        var t = [];
                        return o(arguments, function(e) {
                            t.push(r(e))
                        }), i.apply(e, t)
                    } : function(t, e) {
                        i(t, null == e ? "" : e)
                    }
                }
                return {
                    log: i("log"),
                    info: i("info"),
                    warn: i("warn"),
                    error: i("error"),
                    debug: function() {
                        var n = i("debug");
                        return function() {
                            t && n.apply(e, arguments)
                        }
                    }()
                }
            }]
        }

        function We(t, e) {
            if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw Gi("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
            return t
        }

        function Ge(t, e) {
            if (t += "", !S(t)) throw Gi("iseccst", "Cannot convert object to primitive value! Expression: {0}", e);
            return t
        }

        function Xe(t, e) {
            if (t) {
                if (t.constructor === t) throw Gi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
                if (t.window === t) throw Gi("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
                if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw Gi("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
                if (t === Object) throw Gi("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
            }
            return t
        }

        function Ye(t, e) {
            if (t) {
                if (t.constructor === t) throw Gi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
                if (t === Xi || t === Yi || t === Ki) throw Gi("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
            }
        }

        function Ke(t, e) {
            if (t && (t === 0..constructor || t === (!1).constructor || t === "".constructor || t === {}.constructor || t === [].constructor || t === Function.constructor)) throw Gi("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", e);
        }

        function Je(t, e) {
            return "undefined" != typeof t ? t : e
        }

        function Qe(t, e) {
            return "undefined" == typeof t ? e : "undefined" == typeof e ? t : t + e
        }

        function Ze(t, e) {
            var n = t(e);
            return !n.$stateful
        }

        function tn(t, e) {
            var n, r;
            switch (t.type) {
                case to.Program:
                    n = !0, o(t.body, function(t) {
                        tn(t.expression, e), n = n && t.expression.constant
                    }), t.constant = n;
                    break;
                case to.Literal:
                    t.constant = !0, t.toWatch = [];
                    break;
                case to.UnaryExpression:
                    tn(t.argument, e), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
                    break;
                case to.BinaryExpression:
                    tn(t.left, e), tn(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
                    break;
                case to.LogicalExpression:
                    tn(t.left, e), tn(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
                    break;
                case to.ConditionalExpression:
                    tn(t.test, e), tn(t.alternate, e), tn(t.consequent, e), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
                    break;
                case to.Identifier:
                    t.constant = !1, t.toWatch = [t];
                    break;
                case to.MemberExpression:
                    tn(t.object, e), t.computed && tn(t.property, e), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = [t];
                    break;
                case to.CallExpression:
                    n = t.filter ? Ze(e, t.callee.name) : !1, r = [], o(t.arguments, function(t) {
                        tn(t, e), n = n && t.constant, t.constant || r.push.apply(r, t.toWatch)
                    }), t.constant = n, t.toWatch = t.filter && Ze(e, t.callee.name) ? r : [t];
                    break;
                case to.AssignmentExpression:
                    tn(t.left, e), tn(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
                    break;
                case to.ArrayExpression:
                    n = !0, r = [], o(t.elements, function(t) {
                        tn(t, e), n = n && t.constant, t.constant || r.push.apply(r, t.toWatch)
                    }), t.constant = n, t.toWatch = r;
                    break;
                case to.ObjectExpression:
                    n = !0, r = [], o(t.properties, function(t) {
                        tn(t.value, e), n = n && t.value.constant, t.value.constant || r.push.apply(r, t.value.toWatch)
                    }), t.constant = n, t.toWatch = r;
                    break;
                case to.ThisExpression:
                    t.constant = !1, t.toWatch = []
            }
        }

        function en(t) {
            if (1 == t.length) {
                var e = t[0].expression,
                    r = e.toWatch;
                return 1 !== r.length ? r : r[0] !== e ? r : n
            }
        }

        function nn(t) {
            return t.type === to.Identifier || t.type === to.MemberExpression
        }

        function rn(t) {
            return 1 === t.body.length && nn(t.body[0].expression) ? {
                type: to.AssignmentExpression,
                left: t.body[0].expression,
                right: {
                    type: to.NGValueParameter
                },
                operator: "="
            } : void 0
        }

        function on(t) {
            return 0 === t.body.length || 1 === t.body.length && (t.body[0].expression.type === to.Literal || t.body[0].expression.type === to.ArrayExpression || t.body[0].expression.type === to.ObjectExpression)
        }

        function an(t) {
            return t.constant
        }

        function sn(t, e) {
            this.astBuilder = t, this.$filter = e
        }

        function un(t, e) {
            this.astBuilder = t, this.$filter = e
        }

        function cn(t) {
            return "constructor" == t
        }

        function ln(t) {
            return k(t.valueOf) ? t.valueOf() : no.call(t)
        }

        function fn() {
            var t = vt(),
                e = vt();
            this.$get = ["$filter", function(r) {
                function i(t, e) {
                    return null == t || null == e ? t === e : "object" == typeof t && (t = ln(t), "object" == typeof t) ? !1 : t === e || t !== t && e !== e
                }

                function a(t, e, r, o, a) {
                    var s, u = o.inputs;
                    if (1 === u.length) {
                        var c = i;
                        return u = u[0], t.$watch(function(t) {
                            var e = u(t);
                            return i(e, c) || (s = o(t, n, n, [e]), c = e && ln(e)), s
                        }, e, r, a)
                    }
                    for (var l = [], f = [], h = 0, p = u.length; p > h; h++) l[h] = i, f[h] = null;
                    return t.$watch(function(t) {
                        for (var e = !1, r = 0, a = u.length; a > r; r++) {
                            var c = u[r](t);
                            (e || (e = !i(c, l[r]))) && (f[r] = c, l[r] = c && ln(c))
                        }
                        return e && (s = o(t, n, n, f)), s
                    }, e, r, a)
                }

                function s(t, e, n, r) {
                    var i, o;
                    return i = t.$watch(function(t) {
                        return r(t)
                    }, function(t, n, r) {
                        o = t, k(e) && e.apply(this, arguments), x(t) && r.$$postDigest(function() {
                            x(o) && i()
                        })
                    }, n)
                }

                function u(t, e, n, r) {
                    function i(t) {
                        var e = !0;
                        return o(t, function(t) {
                            x(t) || (e = !1)
                        }), e
                    }
                    var a, s;
                    return a = t.$watch(function(t) {
                        return r(t)
                    }, function(t, n, r) {
                        s = t, k(e) && e.call(this, t, n, r), i(t) && r.$$postDigest(function() {
                            i(s) && a()
                        })
                    }, n)
                }

                function c(t, e, n, r) {
                    var i;
                    return i = t.$watch(function(t) {
                        return r(t)
                    }, function(t, n, r) {
                        k(e) && e.apply(this, arguments), i()
                    }, n)
                }

                function l(t, e) {
                    if (!e) return t;
                    var n = t.$$watchDelegate,
                        r = n !== u && n !== s,
                        i = r ? function(n, r, i, o) {
                            var a = t(n, r, i, o);
                            return e(a, n, r)
                        } : function(n, r, i, o) {
                            var a = t(n, r, i, o),
                                s = e(a, n, r);
                            return x(a) ? s : a
                        };
                    return t.$$watchDelegate && t.$$watchDelegate !== a ? i.$$watchDelegate = t.$$watchDelegate : e.$stateful || (i.$$watchDelegate = a, i.inputs = t.inputs ? t.inputs : [t]), i
                }
                var f = Hr().noUnsafeEval,
                    h = {
                        csp: f,
                        expensiveChecks: !1
                    },
                    p = {
                        csp: f,
                        expensiveChecks: !0
                    };
                return function(n, i, o) {
                    var f, d, v;
                    switch (typeof n) {
                        case "string":
                            n = n.trim(), v = n;
                            var m = o ? e : t;
                            if (f = m[v], !f) {
                                ":" === n.charAt(0) && ":" === n.charAt(1) && (d = !0, n = n.substring(2));
                                var y = o ? p : h,
                                    $ = new Zi(y),
                                    x = new eo($, r, y);
                                f = x.parse(n), f.constant ? f.$$watchDelegate = c : d ? f.$$watchDelegate = f.literal ? u : s : f.inputs && (f.$$watchDelegate = a), m[v] = f
                            }
                            return l(f, i);
                        case "function":
                            return l(n, i);
                        default:
                            return g
                    }
                }
            }]
        }

        function hn() {
            this.$get = ["$rootScope", "$exceptionHandler", function(t, e) {
                return dn(function(e) {
                    t.$evalAsync(e)
                }, e)
            }]
        }

        function pn() {
            this.$get = ["$browser", "$exceptionHandler", function(t, e) {
                return dn(function(e) {
                    t.defer(e)
                }, e)
            }]
        }

        function dn(t, e) {
            function i(t, e, n) {
                function r(e) {
                    return function(n) {
                        i || (i = !0, e.call(t, n))
                    }
                }
                var i = !1;
                return [r(e), r(n)]
            }

            function a() {
                this.$$state = {
                    status: 0
                }
            }

            function s(t, e) {
                return function(n) {
                    e.call(t, n)
                }
            }

            function u(t) {
                var r, i, o;
                o = t.pending, t.processScheduled = !1, t.pending = n;
                for (var a = 0, s = o.length; s > a; ++a) {
                    i = o[a][0], r = o[a][t.status];
                    try {
                        k(r) ? i.resolve(r(t.value)) : 1 === t.status ? i.resolve(t.value) : i.reject(t.value)
                    } catch (u) {
                        i.reject(u), e(u)
                    }
                }
            }

            function c(e) {
                !e.processScheduled && e.pending && (e.processScheduled = !0, t(function() {
                    u(e)
                }))
            }

            function l() {
                this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
            }

            function h(t) {
                var e = new l,
                    n = 0,
                    r = Ir(t) ? [] : {};
                return o(t, function(t, i) {
                    n++, y(t).then(function(t) {
                        r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
                    }, function(t) {
                        r.hasOwnProperty(i) || e.reject(t)
                    })
                }), 0 === n && e.resolve(r), e.promise
            }
            var p = r("$q", TypeError),
                d = function() {
                    return new l
                };
            f(a.prototype, {
                then: function(t, e, n) {
                    if ($(t) && $(e) && $(n)) return this;
                    var r = new l;
                    return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), this.$$state.status > 0 && c(this.$$state), r.promise
                },
                "catch": function(t) {
                    return this.then(null, t)
                },
                "finally": function(t, e) {
                    return this.then(function(e) {
                        return m(e, !0, t)
                    }, function(e) {
                        return m(e, !1, t)
                    }, e)
                }
            }), f(l.prototype, {
                resolve: function(t) {
                    this.promise.$$state.status || (t === this.promise ? this.$$reject(p("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : this.$$resolve(t))
                },
                $$resolve: function(t) {
                    var n, r;
                    r = i(this, this.$$resolve, this.$$reject);
                    try {
                        (b(t) || k(t)) && (n = t && t.then), k(n) ? (this.promise.$$state.status = -1, n.call(t, r[0], r[1], this.notify)) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, c(this.promise.$$state))
                    } catch (o) {
                        r[1](o), e(o)
                    }
                },
                reject: function(t) {
                    this.promise.$$state.status || this.$$reject(t)
                },
                $$reject: function(t) {
                    this.promise.$$state.value = t, this.promise.$$state.status = 2, c(this.promise.$$state)
                },
                notify: function(n) {
                    var r = this.promise.$$state.pending;
                    this.promise.$$state.status <= 0 && r && r.length && t(function() {
                        for (var t, i, o = 0, a = r.length; a > o; o++) {
                            i = r[o][0], t = r[o][3];
                            try {
                                i.notify(k(t) ? t(n) : n)
                            } catch (s) {
                                e(s)
                            }
                        }
                    })
                }
            });
            var g = function(t) {
                    var e = new l;
                    return e.reject(t), e.promise
                },
                v = function(t, e) {
                    var n = new l;
                    return e ? n.resolve(t) : n.reject(t), n.promise
                },
                m = function(t, e, n) {
                    var r = null;
                    try {
                        k(n) && (r = n())
                    } catch (i) {
                        return v(i, !1)
                    }
                    return P(r) ? r.then(function() {
                        return v(t, e)
                    }, function(t) {
                        return v(t, !1)
                    }) : v(t, e)
                },
                y = function(t, e, n, r) {
                    var i = new l;
                    return i.resolve(t), i.promise.then(e, n, r)
                },
                x = y,
                w = function S(t) {
                    function e(t) {
                        r.resolve(t)
                    }

                    function n(t) {
                        r.reject(t)
                    }
                    if (!k(t)) throw p("norslvr", "Expected resolverFn, got '{0}'", t);
                    if (!(this instanceof S)) return new S(t);
                    var r = new l;
                    return t(e, n), r.promise
                };
            return w.defer = d, w.reject = g, w.when = y, w.resolve = x, w.all = h, w
        }

        function gn() {
            this.$get = ["$window", "$timeout", function(t, e) {
                var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
                    r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                    i = !!n,
                    o = i ? function(t) {
                        var e = n(t);
                        return function() {
                            r(e)
                        }
                    } : function(t) {
                        var n = e(t, 16.66, !1);
                        return function() {
                            e.cancel(n)
                        }
                    };
                return o.supported = i, o
            }]
        }

        function vn() {
            function t(t) {
                function e() {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = u(), this.$$ChildScope = null
                }
                return e.prototype = t, e
            }
            var e = 10,
                n = r("$rootScope"),
                a = null,
                s = null;
            this.digestTtl = function(t) {
                return arguments.length && (e = t), e
            }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, c, l, f) {
                function h(t) {
                    t.currentScope.$$destroyed = !0
                }

                function p() {
                    this.$id = u(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
                }

                function d(t) {
                    if (C.$$phase) throw n("inprog", "{0} already in progress", C.$$phase);
                    C.$$phase = t
                }

                function v() {
                    C.$$phase = null
                }

                function m(t, e) {
                    do t.$$watchersCount += e; while (t = t.$parent)
                }

                function y(t, e, n) {
                    do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
                }

                function x() {}

                function w() {
                    for (; _.length;) try {
                        _.shift()()
                    } catch (t) {
                        c(t)
                    }
                    s = null
                }

                function S() {
                    null === s && (s = f.defer(function() {
                        C.$apply(w)
                    }))
                }
                p.prototype = {
                    constructor: p,
                    $new: function(e, n) {
                        var r;
                        return n = n || this, e ? (r = new p, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (e || n != this) && r.$on("$destroy", h), r
                    },
                    $watch: function(t, e, n, r) {
                        var i = l(t);
                        if (i.$$watchDelegate) return i.$$watchDelegate(this, e, n, i, t);
                        var o = this,
                            s = o.$$watchers,
                            u = {
                                fn: e,
                                last: x,
                                get: i,
                                exp: r || t,
                                eq: !!n
                            };
                        return a = null, k(e) || (u.fn = g), s || (s = o.$$watchers = []), s.unshift(u), m(this, 1),
                            function() {
                                R(s, u) >= 0 && m(o, -1), a = null
                            }
                    },
                    $watchGroup: function(t, e) {
                        function n() {
                            u = !1, c ? (c = !1, e(i, i, s)) : e(i, r, s)
                        }
                        var r = new Array(t.length),
                            i = new Array(t.length),
                            a = [],
                            s = this,
                            u = !1,
                            c = !0;
                        if (!t.length) {
                            var l = !0;
                            return s.$evalAsync(function() {
                                    l && e(i, i, s)
                                }),
                                function() {
                                    l = !1
                                }
                        }
                        return 1 === t.length ? this.$watch(t[0], function(t, n, o) {
                            i[0] = t, r[0] = n, e(i, t === n ? i : r, o)
                        }) : (o(t, function(t, e) {
                            var o = s.$watch(t, function(t, o) {
                                i[e] = t, r[e] = o, u || (u = !0, s.$evalAsync(n))
                            });
                            a.push(o)
                        }), function() {
                            for (; a.length;) a.shift()()
                        })
                    },
                    $watchCollection: function(t, e) {
                        function n(t) {
                            o = t;
                            var e, n, r, s, u;
                            if (!$(o)) {
                                if (b(o))
                                    if (i(o)) {
                                        a !== p && (a = p, v = a.length = 0, f++), e = o.length, v !== e && (f++, a.length = v = e);
                                        for (var c = 0; e > c; c++) u = a[c], s = o[c], r = u !== u && s !== s, r || u === s || (f++, a[c] = s)
                                    } else {
                                        a !== d && (a = d = {}, v = 0, f++), e = 0;
                                        for (n in o) br.call(o, n) && (e++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s)) : (v++, a[n] = s, f++));
                                        if (v > e) {
                                            f++;
                                            for (n in a) br.call(o, n) || (v--, delete a[n])
                                        }
                                    } else a !== o && (a = o, f++);
                                return f
                            }
                        }

                        function r() {
                            if (g ? (g = !1, e(o, o, u)) : e(o, s, u), c)
                                if (b(o))
                                    if (i(o)) {
                                        s = new Array(o.length);
                                        for (var t = 0; t < o.length; t++) s[t] = o[t]
                                    } else {
                                        s = {};
                                        for (var n in o) br.call(o, n) && (s[n] = o[n])
                                    } else s = o
                        }
                        n.$stateful = !0;
                        var o, a, s, u = this,
                            c = e.length > 1,
                            f = 0,
                            h = l(t, n),
                            p = [],
                            d = {},
                            g = !0,
                            v = 0;
                        return this.$watch(h, r)
                    },
                    $digest: function() {
                        var t, r, i, o, u, l, h, p, g, m, y = e,
                            $ = this,
                            b = [];
                        d("$digest"), f.$$checkUrlChange(), this === C && null !== s && (f.defer.cancel(s), w()), a = null;
                        do {
                            for (l = !1, p = $; E.length;) {
                                try {
                                    m = E.shift(), m.scope.$eval(m.expression, m.locals)
                                } catch (S) {
                                    c(S)
                                }
                                a = null
                            }
                            t: do {
                                if (o = p.$$watchers)
                                    for (u = o.length; u--;) try {
                                        if (t = o[u])
                                            if ((r = t.get(p)) === (i = t.last) || (t.eq ? H(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i))) {
                                                if (t === a) {
                                                    l = !1;
                                                    break t
                                                }
                                            } else l = !0, a = t, t.last = t.eq ? V(r, null) : r, t.fn(r, i === x ? r : i, p), 5 > y && (g = 4 - y, b[g] || (b[g] = []), b[g].push({
                                                msg: k(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
                                                newVal: r,
                                                oldVal: i
                                            }))
                                    } catch (S) {
                                        c(S)
                                    }
                                if (!(h = p.$$watchersCount && p.$$childHead || p !== $ && p.$$nextSibling))
                                    for (; p !== $ && !(h = p.$$nextSibling);) p = p.$parent
                            } while (p = h);
                            if ((l || E.length) && !y--) throw v(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, b)
                        } while (l || E.length);
                        for (v(); A.length;) try {
                            A.shift()()
                        } catch (S) {
                            c(S)
                        }
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var t = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this === C && f.$$applicationDestroyed(), m(this, -this.$$watchersCount);
                            for (var e in this.$$listenerCount) y(this, this.$$listenerCount[e], e);
                            t && t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = g, this.$on = this.$watch = this.$watchGroup = function() {
                                return g
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    },
                    $eval: function(t, e) {
                        return l(t)(this, e)
                    },
                    $evalAsync: function(t, e) {
                        C.$$phase || E.length || f.defer(function() {
                            E.length && C.$digest()
                        }), E.push({
                            scope: this,
                            expression: t,
                            locals: e
                        })
                    },
                    $$postDigest: function(t) {
                        A.push(t)
                    },
                    $apply: function(t) {
                        try {
                            d("$apply");
                            try {
                                return this.$eval(t)
                            } finally {
                                v()
                            }
                        } catch (e) {
                            c(e)
                        } finally {
                            try {
                                C.$digest()
                            } catch (e) {
                                throw c(e), e
                            }
                        }
                    },
                    $applyAsync: function(t) {
                        function e() {
                            n.$eval(t)
                        }
                        var n = this;
                        t && _.push(e), S()
                    },
                    $on: function(t, e) {
                        var n = this.$$listeners[t];
                        n || (this.$$listeners[t] = n = []), n.push(e);
                        var r = this;
                        do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
                        var i = this;
                        return function() {
                            var r = n.indexOf(e); - 1 !== r && (n[r] = null, y(i, 1, t))
                        }
                    },
                    $emit: function(t, e) {
                        var n, r, i, o = [],
                            a = this,
                            s = !1,
                            u = {
                                name: t,
                                targetScope: a,
                                stopPropagation: function() {
                                    s = !0
                                },
                                preventDefault: function() {
                                    u.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            l = B([u], arguments, 1);
                        do {
                            for (n = a.$$listeners[t] || o, u.currentScope = a, r = 0, i = n.length; i > r; r++)
                                if (n[r]) try {
                                    n[r].apply(null, l)
                                } catch (f) {
                                    c(f)
                                } else n.splice(r, 1), r--, i--;
                            if (s) return u.currentScope = null, u;
                            a = a.$parent
                        } while (a);
                        return u.currentScope = null, u
                    },
                    $broadcast: function(t, e) {
                        var n = this,
                            r = n,
                            i = n,
                            o = {
                                name: t,
                                targetScope: n,
                                preventDefault: function() {
                                    o.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            };
                        if (!n.$$listenerCount[t]) return o;
                        for (var a, s, u, l = B([o], arguments, 1); r = i;) {
                            for (o.currentScope = r, a = r.$$listeners[t] || [], s = 0, u = a.length; u > s; s++)
                                if (a[s]) try {
                                    a[s].apply(null, l)
                                } catch (f) {
                                    c(f)
                                } else a.splice(s, 1), s--, u--;
                            if (!(i = r.$$listenerCount[t] && r.$$childHead || r !== n && r.$$nextSibling))
                                for (; r !== n && !(i = r.$$nextSibling);) r = r.$parent
                        }
                        return o.currentScope = null, o
                    }
                };
                var C = new p,
                    E = C.$$asyncQueue = [],
                    A = C.$$postDigestQueue = [],
                    _ = C.$$applyAsyncQueue = [];
                return C
            }]
        }

        function mn() {
            var t = /^\s*(https?|ftp|mailto|tel|file):/,
                e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(e) {
                return x(e) ? (t = e, this) : t
            }, this.imgSrcSanitizationWhitelist = function(t) {
                return x(t) ? (e = t, this) : e
            }, this.$get = function() {
                return function(n, r) {
                    var i, o = r ? e : t;
                    return i = kn(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
                }
            }
        }

        function yn(t) {
            if ("self" === t) return t;
            if (S(t)) {
                if (t.indexOf("***") > -1) throw ro("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
                return t = qr(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
            }
            if (A(t)) return new RegExp("^" + t.source + "$");
            throw ro("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
        }

        function $n(t) {
            var e = [];
            return x(t) && o(t, function(t) {
                e.push(yn(t))
            }), e
        }

        function xn() {
            this.SCE_CONTEXTS = io;
            var t = ["self"],
                e = [];
            this.resourceUrlWhitelist = function(e) {
                return arguments.length && (t = $n(e)), t
            }, this.resourceUrlBlacklist = function(t) {
                return arguments.length && (e = $n(t)), e
            }, this.$get = ["$injector", function(n) {
                function r(t, e) {
                    return "self" === t ? An(e) : !!t.exec(e.href)
                }

                function i(n) {
                    var i, o, a = kn(n.toString()),
                        s = !1;
                    for (i = 0, o = t.length; o > i; i++)
                        if (r(t[i], a)) {
                            s = !0;
                            break
                        }
                    if (s)
                        for (i = 0, o = e.length; o > i; i++)
                            if (r(e[i], a)) {
                                s = !1;
                                break
                            }
                    return s
                }

                function o(t) {
                    var e = function(t) {
                        this.$$unwrapTrustedValue = function() {
                            return t
                        }
                    };
                    return t && (e.prototype = new t), e.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue()
                    }, e.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString()
                    }, e
                }

                function a(t, e) {
                    var n = f.hasOwnProperty(t) ? f[t] : null;
                    if (!n) throw ro("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
                    if (null === e || $(e) || "" === e) return e;
                    if ("string" != typeof e) throw ro("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
                    return new n(e)
                }

                function s(t) {
                    return t instanceof l ? t.$$unwrapTrustedValue() : t
                }

                function u(t, e) {
                    if (null === e || $(e) || "" === e) return e;
                    var n = f.hasOwnProperty(t) ? f[t] : null;
                    if (n && e instanceof n) return e.$$unwrapTrustedValue();
                    if (t === io.RESOURCE_URL) {
                        if (i(e)) return e;
                        throw ro("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
                    }
                    if (t === io.HTML) return c(e);
                    throw ro("unsafe", "Attempting to use an unsafe value in a safe context.")
                }
                var c = function(t) {
                    throw ro("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                n.has("$sanitize") && (c = n.get("$sanitize"));
                var l = o(),
                    f = {};
                return f[io.HTML] = o(l), f[io.CSS] = o(l), f[io.URL] = o(l), f[io.JS] = o(l), f[io.RESOURCE_URL] = o(f[io.URL]), {
                    trustAs: a,
                    getTrusted: u,
                    valueOf: s
                }
            }]
        }

        function bn() {
            var t = !0;
            this.enabled = function(e) {
                return arguments.length && (t = !!e), t
            }, this.$get = ["$parse", "$sceDelegate", function(e, n) {
                if (t && 8 > Er) throw ro("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var r = q(io);
                r.isEnabled = function() {
                    return t
                }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function(t, e) {
                    return e
                }, r.valueOf = v), r.parseAs = function(t, n) {
                    var i = e(n);
                    return i.literal && i.constant ? i : e(n, function(e) {
                        return r.getTrusted(t, e)
                    })
                };
                var i = r.parseAs,
                    a = r.getTrusted,
                    s = r.trustAs;
                return o(io, function(t, e) {
                    var n = xr(e);
                    r[wt("parse_as_" + n)] = function(e) {
                        return i(t, e)
                    }, r[wt("get_trusted_" + n)] = function(e) {
                        return a(t, e)
                    }, r[wt("trust_as_" + n)] = function(e) {
                        return s(t, e)
                    }
                }), r
            }]
        }

        function wn() {
            this.$get = ["$window", "$document", function(t, e) {
                var n, r, i = {},
                    o = p((/android (\d+)/.exec(xr((t.navigator || {}).userAgent)) || [])[1]),
                    a = /Boxee/i.test((t.navigator || {}).userAgent),
                    s = e[0] || {},
                    u = /^(Moz|webkit|ms)(?=[A-Z])/,
                    c = s.body && s.body.style,
                    l = !1,
                    f = !1;
                if (c) {
                    for (var h in c)
                        if (r = u.exec(h)) {
                            n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                            break
                        }
                    n || (n = "WebkitOpacity" in c && "webkit"), l = !!("transition" in c || n + "Transition" in c), f = !!("animation" in c || n + "Animation" in c), !o || l && f || (l = S(c.webkitTransition), f = S(c.webkitAnimation))
                }
                return {
                    history: !(!t.history || !t.history.pushState || 4 > o || a),
                    hasEvent: function(t) {
                        if ("input" === t && 11 >= Er) return !1;
                        if ($(i[t])) {
                            var e = s.createElement("div");
                            i[t] = "on" + t in e
                        }
                        return i[t]
                    },
                    csp: Hr(),
                    vendorPrefix: n,
                    transitions: l,
                    animations: f,
                    android: o
                }
            }]
        }

        function Sn() {
            this.$get = ["$templateCache", "$http", "$q", "$sce", function(t, e, n, r) {
                function i(o, a) {
                    function s(t) {
                        if (!a) throw Ni("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", o, t.status, t.statusText);
                        return n.reject(t)
                    }
                    i.totalPendingRequests++, S(o) && t.get(o) || (o = r.getTrustedResourceUrl(o));
                    var u = e.defaults && e.defaults.transformResponse;
                    Ir(u) ? u = u.filter(function(t) {
                        return t !== $e
                    }) : u === $e && (u = null);
                    var c = {
                        cache: t,
                        transformResponse: u
                    };
                    return e.get(o, c)["finally"](function() {
                        i.totalPendingRequests--
                    }).then(function(e) {
                        return t.put(o, e.data), e.data
                    }, s)
                }
                return i.totalPendingRequests = 0, i
            }]
        }

        function Cn() {
            this.$get = ["$rootScope", "$browser", "$location", function(t, e, n) {
                var r = {};
                return r.findBindings = function(t, e, n) {
                    var r = t.getElementsByClassName("ng-binding"),
                        i = [];
                    return o(r, function(t) {
                        var r = Dr.element(t).data("$binding");
                        r && o(r, function(r) {
                            if (n) {
                                var o = new RegExp("(^|\\s)" + qr(e) + "(\\s|\\||$)");
                                o.test(r) && i.push(t)
                            } else -1 != r.indexOf(e) && i.push(t)
                        })
                    }), i
                }, r.findModels = function(t, e, n) {
                    for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                        var o = n ? "=" : "*=",
                            a = "[" + r[i] + "model" + o + '"' + e + '"]',
                            s = t.querySelectorAll(a);
                        if (s.length) return s
                    }
                }, r.getLocation = function() {
                    return n.url()
                }, r.setLocation = function(e) {
                    e !== n.url() && (n.url(e), t.$digest())
                }, r.whenStable = function(t) {
                    e.notifyWhenNoOutstandingRequests(t)
                }, r
            }]
        }

        function En() {
            this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(t, e, n, r, i) {
                function o(o, s, u) {
                    k(o) || (u = s, s = o, o = g);
                    var c, l = z(arguments, 3),
                        f = x(u) && !u,
                        h = (f ? r : n).defer(),
                        p = h.promise;
                    return c = e.defer(function() {
                        try {
                            h.resolve(o.apply(null, l))
                        } catch (e) {
                            h.reject(e), i(e)
                        } finally {
                            delete a[p.$$timeoutId]
                        }
                        f || t.$apply()
                    }, s), p.$$timeoutId = c, a[c] = h, p
                }
                var a = {};
                return o.cancel = function(t) {
                    return t && t.$$timeoutId in a ? (a[t.$$timeoutId].reject("canceled"), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
                }, o
            }]
        }

        function kn(t) {
            var e = t;
            return Er && (oo.setAttribute("href", e), e = oo.href), oo.setAttribute("href", e), {
                href: oo.href,
                protocol: oo.protocol ? oo.protocol.replace(/:$/, "") : "",
                host: oo.host,
                search: oo.search ? oo.search.replace(/^\?/, "") : "",
                hash: oo.hash ? oo.hash.replace(/^#/, "") : "",
                hostname: oo.hostname,
                port: oo.port,
                pathname: "/" === oo.pathname.charAt(0) ? oo.pathname : "/" + oo.pathname
            }
        }

        function An(t) {
            var e = S(t) ? kn(t) : t;
            return e.protocol === ao.protocol && e.host === ao.host
        }

        function _n() {
            this.$get = m(t)
        }

        function Tn(t) {
            function e(t) {
                try {
                    return decodeURIComponent(t)
                } catch (e) {
                    return t
                }
            }
            var n = t[0] || {},
                r = {},
                i = "";
            return function() {
                var t, o, a, s, u, c = n.cookie || "";
                if (c !== i)
                    for (i = c, t = i.split("; "), r = {}, a = 0; a < t.length; a++) o = t[a], s = o.indexOf("="), s > 0 && (u = e(o.substring(0, s)), $(r[u]) && (r[u] = e(o.substring(s + 1))));
                return r
            }
        }

        function Nn() {
            this.$get = Tn
        }

        function jn(t) {
            function e(r, i) {
                if (b(r)) {
                    var a = {};
                    return o(r, function(t, n) {
                        a[n] = e(n, t)
                    }), a
                }
                return t.factory(r + n, i)
            }
            var n = "Filter";
            this.register = e, this.$get = ["$injector", function(t) {
                return function(e) {
                    return t.get(e + n)
                }
            }], e("currency", Fn), e("date", Yn), e("filter", On), e("json", Kn), e("limitTo", Jn), e("lowercase", fo), e("number", Ln), e("orderBy", Qn), e("uppercase", ho)
        }

        function On() {
            return function(t, e, n) {
                if (!i(t)) {
                    if (null == t) return t;
                    throw r("filter")("notarray", "Expected array but received: {0}", t)
                }
                var o, a, s = Dn(e);
                switch (s) {
                    case "function":
                        o = e;
                        break;
                    case "boolean":
                    case "null":
                    case "number":
                    case "string":
                        a = !0;
                    case "object":
                        o = Mn(e, n, a);
                        break;
                    default:
                        return t
                }
                return Array.prototype.filter.call(t, o)
            }
        }

        function Mn(t, e, n) {
            var r, i = b(t) && "$" in t;
            return e === !0 ? e = H : k(e) || (e = function(t, e) {
                return $(t) ? !1 : null === t || null === e ? t === e : b(e) || b(t) && !y(t) ? !1 : (t = xr("" + t), e = xr("" + e), -1 !== t.indexOf(e))
            }), r = function(r) {
                return i && !b(r) ? Pn(r, t.$, e, !1) : Pn(r, t, e, n)
            }
        }

        function Pn(t, e, n, r, i) {
            var o = Dn(t),
                a = Dn(e);
            if ("string" === a && "!" === e.charAt(0)) return !Pn(t, e.substring(1), n, r);
            if (Ir(t)) return t.some(function(t) {
                return Pn(t, e, n, r)
            });
            switch (o) {
                case "object":
                    var s;
                    if (r) {
                        for (s in t)
                            if ("$" !== s.charAt(0) && Pn(t[s], e, n, !0)) return !0;
                        return i ? !1 : Pn(t, e, n, !1)
                    }
                    if ("object" === a) {
                        for (s in e) {
                            var u = e[s];
                            if (!k(u) && !$(u)) {
                                var c = "$" === s,
                                    l = c ? t : t[s];
                                if (!Pn(l, u, n, c, c)) return !1
                            }
                        }
                        return !0
                    }
                    return n(t, e);
                case "function":
                    return !1;
                default:
                    return n(t, e)
            }
        }

        function Dn(t) {
            return null === t ? "null" : typeof t
        }

        function Fn(t) {
            var e = t.NUMBER_FORMATS;
            return function(t, n, r) {
                return $(n) && (n = e.CURRENCY_SYM), $(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : In(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n)
            }
        }

        function Ln(t) {
            var e = t.NUMBER_FORMATS;
            return function(t, n) {
                return null == t ? t : In(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
            }
        }

        function In(t, e, n, r, i) {
            if (b(t)) return "";
            var o = 0 > t;
            t = Math.abs(t);
            var a = t === 1 / 0;
            if (!a && !isFinite(t)) return "";
            var s = t + "",
                u = "",
                c = !1,
                l = [];
            if (a && (u = "∞"), !a && -1 !== s.indexOf("e")) {
                var f = s.match(/([\d\.]+)e(-?)(\d+)/);
                f && "-" == f[2] && f[3] > i + 1 ? t = 0 : (u = s, c = !0)
            }
            if (a || c) i > 0 && 1 > t && (u = t.toFixed(i), t = parseFloat(u), u = u.replace(so, r));
            else {
                var h = (s.split(so)[1] || "").length;
                $(i) && (i = Math.min(Math.max(e.minFrac, h), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
                var p = ("" + t).split(so),
                    d = p[0];
                p = p[1] || "";
                var g, v = 0,
                    m = e.lgSize,
                    y = e.gSize;
                if (d.length >= m + y)
                    for (v = d.length - m, g = 0; v > g; g++)(v - g) % y === 0 && 0 !== g && (u += n), u += d.charAt(g);
                for (g = v; g < d.length; g++)(d.length - g) % m === 0 && 0 !== g && (u += n), u += d.charAt(g);
                for (; p.length < i;) p += "0";
                i && "0" !== i && (u += r + p.substr(0, i))
            }
            return 0 === t && (o = !1), l.push(o ? e.negPre : e.posPre, u, o ? e.negSuf : e.posSuf), l.join("")
        }

        function Rn(t, e, n) {
            var r = "";
            for (0 > t && (r = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
            return n && (t = t.substr(t.length - e)), r + t
        }

        function Vn(t, e, n, r) {
            return n = n || 0,
                function(i) {
                    var o = i["get" + t]();
                    return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), Rn(o, e, r)
                }
        }

        function qn(t, e) {
            return function(n, r) {
                var i = n["get" + t](),
                    o = wr(e ? "SHORT" + t : t);
                return r[o][i]
            }
        }

        function Hn(t, e, n) {
            var r = -1 * n,
                i = r >= 0 ? "+" : "";
            return i += Rn(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Rn(Math.abs(r % 60), 2)
        }

        function Bn(t) {
            var e = new Date(t, 0, 1).getDay();
            return new Date(t, 0, (4 >= e ? 5 : 12) - e)
        }

        function zn(t) {
            return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
        }

        function Un(t) {
            return function(e) {
                var n = Bn(e.getFullYear()),
                    r = zn(e),
                    i = +r - +n,
                    o = 1 + Math.round(i / 6048e5);
                return Rn(o, t)
            }
        }

        function Wn(t, e) {
            return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
        }

        function Gn(t, e) {
            return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1]
        }

        function Xn(t, e) {
            return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1]
        }

        function Yn(t) {
            function e(t) {
                var e;
                if (e = t.match(n)) {
                    var r = new Date(0),
                        i = 0,
                        o = 0,
                        a = e[8] ? r.setUTCFullYear : r.setFullYear,
                        s = e[8] ? r.setUTCHours : r.setHours;
                    e[9] && (i = p(e[9] + e[10]), o = p(e[9] + e[11])), a.call(r, p(e[1]), p(e[2]) - 1, p(e[3]));
                    var u = p(e[4] || 0) - i,
                        c = p(e[5] || 0) - o,
                        l = p(e[6] || 0),
                        f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                    return s.call(r, u, c, l, f), r
                }
                return t
            }
            var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(n, r, i) {
                var a, s, u = "",
                    c = [];
                if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, S(n) && (n = lo.test(n) ? p(n) : e(n)), C(n) && (n = new Date(n)), !E(n) || !isFinite(n.getTime())) return n;
                for (; r;) s = co.exec(r), s ? (c = B(c, s, 1), r = c.pop()) : (c.push(r), r = null);
                var l = n.getTimezoneOffset();
                return i && (l = Y(i, n.getTimezoneOffset()), n = J(n, i, !0)), o(c, function(e) {
                    a = uo[e], u += a ? a(n, t.DATETIME_FORMATS, l) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), u
            }
        }

        function Kn() {
            return function(t, e) {
                return $(e) && (e = 2), G(t, e)
            }
        }

        function Jn() {
            return function(t, e, n) {
                return e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : p(e), isNaN(e) ? t : (C(t) && (t = t.toString()), Ir(t) || S(t) ? (n = !n || isNaN(n) ? 0 : p(n), n = 0 > n && n >= -t.length ? t.length + n : n, e >= 0 ? t.slice(n, n + e) : 0 === n ? t.slice(e, t.length) : t.slice(Math.max(0, n + e), n)) : t)
            }
        }

        function Qn(t) {
            function e(e, n) {
                return n = n ? -1 : 1, e.map(function(e) {
                    var r = 1,
                        i = v;
                    if (k(e)) i = e;
                    else if (S(e) && (("+" == e.charAt(0) || "-" == e.charAt(0)) && (r = "-" == e.charAt(0) ? -1 : 1, e = e.substring(1)), "" !== e && (i = t(e), i.constant))) {
                        var o = i();
                        i = function(t) {
                            return t[o]
                        }
                    }
                    return {
                        get: i,
                        descending: r * n
                    }
                })
            }

            function n(t) {
                switch (typeof t) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function r(t, e) {
                return "function" == typeof t.valueOf && (t = t.valueOf(), n(t)) ? t : y(t) && (t = t.toString(), n(t)) ? t : e
            }

            function o(t, e) {
                var n = typeof t;
                return null === t ? (n = "string", t = "null") : "string" === n ? t = t.toLowerCase() : "object" === n && (t = r(t, e)), {
                    value: t,
                    type: n
                }
            }

            function a(t, e) {
                var n = 0;
                return t.type === e.type ? t.value !== e.value && (n = t.value < e.value ? -1 : 1) : n = t.type < e.type ? -1 : 1, n
            }
            return function(t, n, r) {
                function s(t, e) {
                    return {
                        value: t,
                        predicateValues: c.map(function(n) {
                            return o(n.get(t), e)
                        })
                    }
                }

                function u(t, e) {
                    for (var n = 0, r = 0, i = c.length; i > r && !(n = a(t.predicateValues[r], e.predicateValues[r]) * c[r].descending); ++r);
                    return n
                }
                if (!i(t)) return t;
                Ir(n) || (n = [n]), 0 === n.length && (n = ["+"]);
                var c = e(n, r);
                c.push({
                    get: function() {
                        return {}
                    },
                    descending: r ? -1 : 1
                });
                var l = Array.prototype.map.call(t, s);
                return l.sort(u), t = l.map(function(t) {
                    return t.value
                })
            }
        }

        function Zn(t) {
            return k(t) && (t = {
                link: t
            }), t.restrict = t.restrict || "AC", m(t)
        }

        function tr(t, e) {
            t.$name = e
        }

        function er(t, e, r, i, a) {
            var s = this,
                u = [];
            s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(e.name || e.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, s.$$parentForm = vo, s.$rollbackViewValue = function() {
                o(u, function(t) {
                    t.$rollbackViewValue()
                })
            }, s.$commitViewValue = function() {
                o(u, function(t) {
                    t.$commitViewValue()
                })
            }, s.$addControl = function(t) {
                pt(t.$name, "input"), u.push(t), t.$name && (s[t.$name] = t), t.$$parentForm = s
            }, s.$$renameControl = function(t, e) {
                var n = t.$name;
                s[n] === t && delete s[n], s[e] = t, t.$name = e
            }, s.$removeControl = function(t) {
                t.$name && s[t.$name] === t && delete s[t.$name], o(s.$pending, function(e, n) {
                    s.$setValidity(n, null, t)
                }), o(s.$error, function(e, n) {
                    s.$setValidity(n, null, t)
                }), o(s.$$success, function(e, n) {
                    s.$setValidity(n, null, t)
                }), R(u, t), t.$$parentForm = vo
            }, vr({
                ctrl: this,
                $element: t,
                set: function(t, e, n) {
                    var r = t[e];
                    if (r) {
                        var i = r.indexOf(n); - 1 === i && r.push(n)
                    } else t[e] = [n]
                },
                unset: function(t, e, n) {
                    var r = t[e];
                    r && (R(r, n), 0 === r.length && delete t[e])
                },
                $animate: i
            }), s.$setDirty = function() {
                i.removeClass(t, Qo), i.addClass(t, Zo), s.$dirty = !0, s.$pristine = !1, s.$$parentForm.$setDirty()
            }, s.$setPristine = function() {
                i.setClass(t, Qo, Zo + " " + mo), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(u, function(t) {
                    t.$setPristine()
                })
            }, s.$setUntouched = function() {
                o(u, function(t) {
                    t.$setUntouched()
                })
            }, s.$setSubmitted = function() {
                i.addClass(t, mo), s.$submitted = !0, s.$$parentForm.$setSubmitted()
            }
        }

        function nr(t) {
            t.$formatters.push(function(e) {
                return t.$isEmpty(e) ? e : e.toString()
            })
        }

        function rr(t, e, n, r, i, o) {
            ir(t, e, n, r, i, o), nr(r)
        }

        function ir(t, e, n, r, i, o) {
            var a = xr(e[0].type);
            if (!i.android) {
                var s = !1;
                e.on("compositionstart", function(t) {
                    s = !0
                }), e.on("compositionend", function() {
                    s = !1, u()
                })
            }
            var u = function(t) {
                if (c && (o.defer.cancel(c), c = null), !s) {
                    var i = e.val(),
                        u = t && t.type;
                    "password" === a || n.ngTrim && "false" === n.ngTrim || (i = Vr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
                }
            };
            if (i.hasEvent("input")) e.on("input", u);
            else {
                var c, l = function(t, e, n) {
                    c || (c = o.defer(function() {
                        c = null, e && e.value === n || u(t)
                    }))
                };
                e.on("keydown", function(t) {
                    var e = t.keyCode;
                    91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || l(t, this, this.value)
                }), i.hasEvent("paste") && e.on("paste cut", l)
            }
            e.on("change", u), r.$render = function() {
                var t = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
                e.val() !== t && e.val(t)
            }
        }

        function or(t, e) {
            if (E(t)) return t;
            if (S(t)) {
                Ao.lastIndex = 0;
                var n = Ao.exec(t);
                if (n) {
                    var r = +n[1],
                        i = +n[2],
                        o = 0,
                        a = 0,
                        s = 0,
                        u = 0,
                        c = Bn(r),
                        l = 7 * (i - 1);
                    return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), u = e.getMilliseconds()), new Date(r, 0, c.getDate() + l, o, a, s, u)
                }
            }
            return NaN
        }

        function ar(t, e) {
            return function(n, r) {
                var i, a;
                if (E(n)) return n;
                if (S(n)) {
                    if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), bo.test(n)) return new Date(n);
                    if (t.lastIndex = 0, i = t.exec(n)) return i.shift(), a = r ? {
                        yyyy: r.getFullYear(),
                        MM: r.getMonth() + 1,
                        dd: r.getDate(),
                        HH: r.getHours(),
                        mm: r.getMinutes(),
                        ss: r.getSeconds(),
                        sss: r.getMilliseconds() / 1e3
                    } : {
                        yyyy: 1970,
                        MM: 1,
                        dd: 1,
                        HH: 0,
                        mm: 0,
                        ss: 0,
                        sss: 0
                    }, o(i, function(t, n) {
                        n < e.length && (a[e[n]] = +t)
                    }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
                }
                return NaN
            }
        }

        function sr(t, e, r, i) {
            return function(o, a, s, u, c, l, f) {
                function h(t) {
                    return t && !(t.getTime && t.getTime() !== t.getTime())
                }

                function p(t) {
                    return x(t) && !E(t) ? r(t) || n : t
                }
                ur(o, a, s, u), ir(o, a, s, u, c, l);
                var d, g = u && u.$options && u.$options.timezone;
                if (u.$$parserName = t, u.$parsers.push(function(t) {
                        if (u.$isEmpty(t)) return null;
                        if (e.test(t)) {
                            var i = r(t, d);
                            return g && (i = J(i, g)), i
                        }
                        return n
                    }), u.$formatters.push(function(t) {
                        if (t && !E(t)) throw ra("datefmt", "Expected `{0}` to be a date", t);
                        return h(t) ? (d = t, d && g && (d = J(d, g, !0)), f("date")(t, i, g)) : (d = null, "")
                    }), x(s.min) || s.ngMin) {
                    var v;
                    u.$validators.min = function(t) {
                        return !h(t) || $(v) || r(t) >= v
                    }, s.$observe("min", function(t) {
                        v = p(t), u.$validate()
                    })
                }
                if (x(s.max) || s.ngMax) {
                    var m;
                    u.$validators.max = function(t) {
                        return !h(t) || $(m) || r(t) <= m
                    }, s.$observe("max", function(t) {
                        m = p(t), u.$validate()
                    })
                }
            }
        }

        function ur(t, e, r, i) {
            var o = e[0],
                a = i.$$hasNativeValidators = b(o.validity);
            a && i.$parsers.push(function(t) {
                var r = e.prop($r) || {};
                return r.badInput && !r.typeMismatch ? n : t
            })
        }

        function cr(t, e, r, i, o, a) {
            if (ur(t, e, r, i), ir(t, e, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function(t) {
                    return i.$isEmpty(t) ? null : Co.test(t) ? parseFloat(t) : n
                }), i.$formatters.push(function(t) {
                    if (!i.$isEmpty(t)) {
                        if (!C(t)) throw ra("numfmt", "Expected `{0}` to be a number", t);
                        t = t.toString()
                    }
                    return t
                }), x(r.min) || r.ngMin) {
                var s;
                i.$validators.min = function(t) {
                    return i.$isEmpty(t) || $(s) || t >= s
                }, r.$observe("min", function(t) {
                    x(t) && !C(t) && (t = parseFloat(t, 10)), s = C(t) && !isNaN(t) ? t : n, i.$validate()
                })
            }
            if (x(r.max) || r.ngMax) {
                var u;
                i.$validators.max = function(t) {
                    return i.$isEmpty(t) || $(u) || u >= t;
                }, r.$observe("max", function(t) {
                    x(t) && !C(t) && (t = parseFloat(t, 10)), u = C(t) && !isNaN(t) ? t : n, i.$validate()
                })
            }
        }

        function lr(t, e, n, r, i, o) {
            ir(t, e, n, r, i, o), nr(r), r.$$parserName = "url", r.$validators.url = function(t, e) {
                var n = t || e;
                return r.$isEmpty(n) || wo.test(n)
            }
        }

        function fr(t, e, n, r, i, o) {
            ir(t, e, n, r, i, o), nr(r), r.$$parserName = "email", r.$validators.email = function(t, e) {
                var n = t || e;
                return r.$isEmpty(n) || So.test(n)
            }
        }

        function hr(t, e, n, r) {
            $(n.name) && e.attr("name", u());
            var i = function(t) {
                e[0].checked && r.$setViewValue(n.value, t && t.type)
            };
            e.on("click", i), r.$render = function() {
                var t = n.value;
                e[0].checked = t == r.$viewValue
            }, n.$observe("value", r.$render)
        }

        function pr(t, e, n, r, i) {
            var o;
            if (x(r)) {
                if (o = t(r), !o.constant) throw ra("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
                return o(e)
            }
            return i
        }

        function dr(t, e, n, r, i, o, a, s) {
            var u = pr(s, t, "ngTrueValue", n.ngTrueValue, !0),
                c = pr(s, t, "ngFalseValue", n.ngFalseValue, !1),
                l = function(t) {
                    r.$setViewValue(e[0].checked, t && t.type)
                };
            e.on("click", l), r.$render = function() {
                e[0].checked = r.$viewValue
            }, r.$isEmpty = function(t) {
                return t === !1
            }, r.$formatters.push(function(t) {
                return H(t, u)
            }), r.$parsers.push(function(t) {
                return t ? u : c
            })
        }

        function gr(t, e) {
            return t = "ngClass" + t, ["$animate", function(n) {
                function r(t, e) {
                    var n = [];
                    t: for (var r = 0; r < t.length; r++) {
                        for (var i = t[r], o = 0; o < e.length; o++)
                            if (i == e[o]) continue t;
                        n.push(i)
                    }
                    return n
                }

                function i(t) {
                    var e = [];
                    return Ir(t) ? (o(t, function(t) {
                        e = e.concat(i(t))
                    }), e) : S(t) ? t.split(" ") : b(t) ? (o(t, function(t, n) {
                        t && (e = e.concat(n.split(" ")))
                    }), e) : t
                }
                return {
                    restrict: "AC",
                    link: function(a, s, u) {
                        function c(t) {
                            var e = f(t, 1);
                            u.$addClass(e)
                        }

                        function l(t) {
                            var e = f(t, -1);
                            u.$removeClass(e)
                        }

                        function f(t, e) {
                            var n = s.data("$classCounts") || vt(),
                                r = [];
                            return o(t, function(t) {
                                (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
                            }), s.data("$classCounts", n), r.join(" ")
                        }

                        function h(t, e) {
                            var i = r(e, t),
                                o = r(t, e);
                            i = f(i, 1), o = f(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
                        }

                        function p(t) {
                            if (e === !0 || a.$index % 2 === e) {
                                var n = i(t || []);
                                if (d) {
                                    if (!H(t, d)) {
                                        var r = i(d);
                                        h(r, n)
                                    }
                                } else c(n)
                            }
                            d = q(t)
                        }
                        var d;
                        a.$watch(u[t], p, !0), u.$observe("class", function(e) {
                            p(a.$eval(u[t]))
                        }), "ngClass" !== t && a.$watch("$index", function(n, r) {
                            var o = 1 & n;
                            if (o !== (1 & r)) {
                                var s = i(a.$eval(u[t]));
                                o === e ? c(s) : l(s)
                            }
                        })
                    }
                }
            }]
        }

        function vr(t) {
            function e(t, e, u) {
                $(e) ? r("$pending", t, u) : i("$pending", t, u), M(e) ? e ? (f(s.$error, t, u), l(s.$$success, t, u)) : (l(s.$error, t, u), f(s.$$success, t, u)) : (f(s.$error, t, u), f(s.$$success, t, u)), s.$pending ? (o(na, !0), s.$valid = s.$invalid = n, a("", null)) : (o(na, !1), s.$valid = mr(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
                var c;
                c = s.$pending && s.$pending[t] ? n : s.$error[t] ? !1 : s.$$success[t] ? !0 : null, a(t, c), s.$$parentForm.$setValidity(t, c, s)
            }

            function r(t, e, n) {
                s[t] || (s[t] = {}), l(s[t], e, n)
            }

            function i(t, e, r) {
                s[t] && f(s[t], e, r), mr(s[t]) && (s[t] = n)
            }

            function o(t, e) {
                e && !c[t] ? (h.addClass(u, t), c[t] = !0) : !e && c[t] && (h.removeClass(u, t), c[t] = !1)
            }

            function a(t, e) {
                t = t ? "-" + ct(t, "-") : "", o(Ko + t, e === !0), o(Jo + t, e === !1)
            }
            var s = t.ctrl,
                u = t.$element,
                c = {},
                l = t.set,
                f = t.unset,
                h = t.$animate;
            c[Jo] = !(c[Ko] = u.hasClass(Ko)), s.$setValidity = e
        }

        function mr(t) {
            if (t)
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
            return !0
        }
        var yr = /^\/(.+)\/([a-z]*)$/,
            $r = "validity",
            xr = function(t) {
                return S(t) ? t.toLowerCase() : t
            },
            br = Object.prototype.hasOwnProperty,
            wr = function(t) {
                return S(t) ? t.toUpperCase() : t
            },
            Sr = function(t) {
                return S(t) ? t.replace(/[A-Z]/g, function(t) {
                    return String.fromCharCode(32 | t.charCodeAt(0))
                }) : t
            },
            Cr = function(t) {
                return S(t) ? t.replace(/[a-z]/g, function(t) {
                    return String.fromCharCode(-33 & t.charCodeAt(0))
                }) : t
            };
        "i" !== "I".toLowerCase() && (xr = Sr, wr = Cr);
        var Er, kr, Ar, _r, Tr = [].slice,
            Nr = [].splice,
            jr = [].push,
            Or = Object.prototype.toString,
            Mr = Object.getPrototypeOf,
            Pr = r("ng"),
            Dr = t.angular || (t.angular = {}),
            Fr = 0;
        Er = e.documentMode, g.$inject = [], v.$inject = [];
        var Lr, Ir = Array.isArray,
            Rr = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
            Vr = function(t) {
                return S(t) ? t.trim() : t
            },
            qr = function(t) {
                return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            },
            Hr = function() {
                function t() {
                    try {
                        return new Function(""), !1
                    } catch (t) {
                        return !0
                    }
                }
                if (!x(Hr.rules)) {
                    var n = e.querySelector("[ng-csp]") || e.querySelector("[data-ng-csp]");
                    if (n) {
                        var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
                        Hr.rules = {
                            noUnsafeEval: !r || -1 !== r.indexOf("no-unsafe-eval"),
                            noInlineStyle: !r || -1 !== r.indexOf("no-inline-style")
                        }
                    } else Hr.rules = {
                        noUnsafeEval: t(),
                        noInlineStyle: !1
                    }
                }
                return Hr.rules
            },
            Br = function() {
                if (x(Br.name_)) return Br.name_;
                var t, n, r, i, o = zr.length;
                for (n = 0; o > n; ++n)
                    if (r = zr[n], t = e.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                        i = t.getAttribute(r + "jq");
                        break
                    }
                return Br.name_ = i
            },
            zr = ["ng-", "data-ng-", "ng:", "x-ng-"],
            Ur = /[A-Z]/g,
            Wr = !1,
            Gr = 1,
            Xr = 2,
            Yr = 3,
            Kr = 8,
            Jr = 9,
            Qr = 11,
            Zr = {
                full: "1.4.7",
                major: 1,
                minor: 4,
                dot: 7,
                codeName: "dark-luminescence"
            };
        _t.expando = "ng339";
        var ti = _t.cache = {},
            ei = 1,
            ni = function(t, e, n) {
                t.addEventListener(e, n, !1)
            },
            ri = function(t, e, n) {
                t.removeEventListener(e, n, !1)
            };
        _t._data = function(t) {
            return this.cache[t[this.expando]] || {}
        };
        var ii = /([\:\-\_]+(.))/g,
            oi = /^moz([A-Z])/,
            ai = {
                mouseleave: "mouseout",
                mouseenter: "mouseover"
            },
            si = r("jqLite"),
            ui = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            ci = /<|&#?\w+;/,
            li = /<([\w:-]+)/,
            fi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            hi = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        hi.optgroup = hi.option, hi.tbody = hi.tfoot = hi.colgroup = hi.caption = hi.thead, hi.th = hi.td;
        var pi = _t.prototype = {
                ready: function(n) {
                    function r() {
                        i || (i = !0, n())
                    }
                    var i = !1;
                    "complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), _t(t).on("load", r))
                },
                toString: function() {
                    var t = [];
                    return o(this, function(e) {
                        t.push("" + e)
                    }), "[" + t.join(", ") + "]"
                },
                eq: function(t) {
                    return kr(t >= 0 ? this[t] : this[this.length + t])
                },
                length: 0,
                push: jr,
                sort: [].sort,
                splice: [].splice
            },
            di = {};
        o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(t) {
            di[xr(t)] = t
        });
        var gi = {};
        o("input,select,option,textarea,button,form,details".split(","), function(t) {
            gi[t] = !0
        });
        var vi = {
            ngMinlength: "minlength",
            ngMaxlength: "maxlength",
            ngMin: "min",
            ngMax: "max",
            ngPattern: "pattern"
        };
        o({
            data: Pt,
            removeData: Ot,
            hasData: Et
        }, function(t, e) {
            _t[e] = t
        }), o({
            data: Pt,
            inheritedData: Vt,
            scope: function(t) {
                return kr.data(t, "$scope") || Vt(t.parentNode || t, ["$isolateScope", "$scope"])
            },
            isolateScope: function(t) {
                return kr.data(t, "$isolateScope") || kr.data(t, "$isolateScopeNoTemplate")
            },
            controller: Rt,
            injector: function(t) {
                return Vt(t, "$injector")
            },
            removeAttr: function(t, e) {
                t.removeAttribute(e)
            },
            hasClass: Dt,
            css: function(t, e, n) {
                return e = wt(e), x(n) ? void(t.style[e] = n) : t.style[e]
            },
            attr: function(t, e, r) {
                var i = t.nodeType;
                if (i !== Yr && i !== Xr && i !== Kr) {
                    var o = xr(e);
                    if (di[o]) {
                        if (!x(r)) return t[e] || (t.attributes.getNamedItem(e) || g).specified ? o : n;
                        r ? (t[e] = !0, t.setAttribute(e, o)) : (t[e] = !1, t.removeAttribute(o))
                    } else if (x(r)) t.setAttribute(e, r);
                    else if (t.getAttribute) {
                        var a = t.getAttribute(e, 2);
                        return null === a ? n : a
                    }
                }
            },
            prop: function(t, e, n) {
                return x(n) ? void(t[e] = n) : t[e]
            },
            text: function() {
                function t(t, e) {
                    if ($(e)) {
                        var n = t.nodeType;
                        return n === Gr || n === Yr ? t.textContent : ""
                    }
                    t.textContent = e
                }
                return t.$dv = "", t
            }(),
            val: function(t, e) {
                if ($(e)) {
                    if (t.multiple && "select" === I(t)) {
                        var n = [];
                        return o(t.options, function(t) {
                            t.selected && n.push(t.value || t.text)
                        }), 0 === n.length ? null : n
                    }
                    return t.value
                }
                t.value = e
            },
            html: function(t, e) {
                return $(e) ? t.innerHTML : (Nt(t, !0), void(t.innerHTML = e))
            },
            empty: qt
        }, function(t, e) {
            _t.prototype[e] = function(e, n) {
                var r, i, o = this.length;
                if (t !== qt && $(2 == t.length && t !== Dt && t !== Rt ? e : n)) {
                    if (b(e)) {
                        for (r = 0; o > r; r++)
                            if (t === Pt) t(this[r], e);
                            else
                                for (i in e) t(this[r], i, e[i]);
                        return this
                    }
                    for (var a = t.$dv, s = $(a) ? Math.min(o, 1) : o, u = 0; s > u; u++) {
                        var c = t(this[u], e, n);
                        a = a ? a + c : c
                    }
                    return a
                }
                for (r = 0; o > r; r++) t(this[r], e, n);
                return this
            }
        }), o({
            removeData: Ot,
            on: function Ma(t, e, n, r) {
                if (x(r)) throw si("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (Ct(t)) {
                    var i = Mt(t, !0),
                        o = i.events,
                        a = i.handle;
                    a || (a = i.handle = Wt(t, o));
                    for (var s = e.indexOf(" ") >= 0 ? e.split(" ") : [e], u = s.length; u--;) {
                        e = s[u];
                        var c = o[e];
                        c || (o[e] = [], "mouseenter" === e || "mouseleave" === e ? Ma(t, ai[e], function(t) {
                            var n = this,
                                r = t.relatedTarget;
                            (!r || r !== n && !n.contains(r)) && a(t, e)
                        }) : "$destroy" !== e && ni(t, e, a), c = o[e]), c.push(n)
                    }
                }
            },
            off: jt,
            one: function(t, e, n) {
                t = kr(t), t.on(e, function r() {
                    t.off(e, n), t.off(e, r)
                }), t.on(e, n)
            },
            replaceWith: function(t, e) {
                var n, r = t.parentNode;
                Nt(t), o(new _t(e), function(e) {
                    n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
                })
            },
            children: function(t) {
                var e = [];
                return o(t.childNodes, function(t) {
                    t.nodeType === Gr && e.push(t)
                }), e
            },
            contents: function(t) {
                return t.contentDocument || t.childNodes || []
            },
            append: function(t, e) {
                var n = t.nodeType;
                if (n === Gr || n === Qr) {
                    e = new _t(e);
                    for (var r = 0, i = e.length; i > r; r++) {
                        var o = e[r];
                        t.appendChild(o)
                    }
                }
            },
            prepend: function(t, e) {
                if (t.nodeType === Gr) {
                    var n = t.firstChild;
                    o(new _t(e), function(e) {
                        t.insertBefore(e, n)
                    })
                }
            },
            wrap: function(t, e) {
                e = kr(e).eq(0).clone()[0];
                var n = t.parentNode;
                n && n.replaceChild(e, t), e.appendChild(t)
            },
            remove: Ht,
            detach: function(t) {
                Ht(t, !0)
            },
            after: function(t, e) {
                var n = t,
                    r = t.parentNode;
                e = new _t(e);
                for (var i = 0, o = e.length; o > i; i++) {
                    var a = e[i];
                    r.insertBefore(a, n.nextSibling), n = a
                }
            },
            addClass: Lt,
            removeClass: Ft,
            toggleClass: function(t, e, n) {
                e && o(e.split(" "), function(e) {
                    var r = n;
                    $(r) && (r = !Dt(t, e)), (r ? Lt : Ft)(t, e)
                })
            },
            parent: function(t) {
                var e = t.parentNode;
                return e && e.nodeType !== Qr ? e : null
            },
            next: function(t) {
                return t.nextElementSibling
            },
            find: function(t, e) {
                return t.getElementsByTagName ? t.getElementsByTagName(e) : []
            },
            clone: Tt,
            triggerHandler: function(t, e, n) {
                var r, i, a, s = e.type || e,
                    u = Mt(t),
                    c = u && u.events,
                    l = c && c[s];
                l && (r = {
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    },
                    isDefaultPrevented: function() {
                        return this.defaultPrevented === !0
                    },
                    stopImmediatePropagation: function() {
                        this.immediatePropagationStopped = !0
                    },
                    isImmediatePropagationStopped: function() {
                        return this.immediatePropagationStopped === !0
                    },
                    stopPropagation: g,
                    type: s,
                    target: t
                }, e.type && (r = f(r, e)), i = q(l), a = n ? [r].concat(n) : [r], o(i, function(e) {
                    r.isImmediatePropagationStopped() || e.apply(t, a)
                }))
            }
        }, function(t, e) {
            _t.prototype[e] = function(e, n, r) {
                for (var i, o = 0, a = this.length; a > o; o++) $(i) ? (i = t(this[o], e, n, r), x(i) && (i = kr(i))) : It(i, t(this[o], e, n, r));
                return x(i) ? i : this
            }, _t.prototype.bind = _t.prototype.on, _t.prototype.unbind = _t.prototype.off
        }), Yt.prototype = {
            put: function(t, e) {
                this[Xt(t, this.nextUid)] = e
            },
            get: function(t) {
                return this[Xt(t, this.nextUid)]
            },
            remove: function(t) {
                var e = this[t = Xt(t, this.nextUid)];
                return delete this[t], e
            }
        };
        var mi = [function() {
                this.$get = [function() {
                    return Yt
                }]
            }],
            yi = /^[^\(]*\(\s*([^\)]*)\)/m,
            $i = /,/,
            xi = /^\s*(_?)(\S+?)\1\s*$/,
            bi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            wi = r("$injector");
        Qt.$$annotate = Jt;
        var Si = r("$animate"),
            Ci = 1,
            Ei = "ng-animate",
            ki = function() {
                this.$get = ["$q", "$$rAF", function(t, e) {
                    function n() {}
                    return n.all = g, n.chain = g, n.prototype = {
                        end: g,
                        cancel: g,
                        resume: g,
                        pause: g,
                        complete: g,
                        then: function(n, r) {
                            return t(function(t) {
                                e(function() {
                                    t()
                                })
                            }).then(n, r)
                        }
                    }, n
                }]
            },
            Ai = function() {
                var t = new Yt,
                    e = [];
                this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
                    function i(t, e, n) {
                        var r = !1;
                        return e && (e = S(e) ? e.split(" ") : Ir(e) ? e : [], o(e, function(e) {
                            e && (r = !0, t[e] = n)
                        })), r
                    }

                    function a() {
                        o(e, function(e) {
                            var n = t.get(e);
                            if (n) {
                                var r = ne(e.attr("class")),
                                    i = "",
                                    a = "";
                                o(n, function(t, e) {
                                    var n = !!r[e];
                                    t !== n && (t ? i += (i.length ? " " : "") + e : a += (a.length ? " " : "") + e)
                                }), o(e, function(t) {
                                    i && Lt(t, i), a && Ft(t, a)
                                }), t.remove(e)
                            }
                        }), e.length = 0
                    }

                    function s(n, o, s) {
                        var u = t.get(n) || {},
                            c = i(u, o, !0),
                            l = i(u, s, !1);
                        (c || l) && (t.put(n, u), e.push(n), 1 === e.length && r.$$postDigest(a))
                    }
                    return {
                        enabled: g,
                        on: g,
                        off: g,
                        pin: g,
                        push: function(t, e, r, i) {
                            return i && i(), r = r || {}, r.from && t.css(r.from), r.to && t.css(r.to), (r.addClass || r.removeClass) && s(t, r.addClass, r.removeClass), new n
                        }
                    }
                }]
            },
            _i = ["$provide", function(t) {
                var e = this;
                this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                    if (n && "." !== n.charAt(0)) throw Si("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                    var i = n + "-animation";
                    e.$$registeredAnimations[n.substr(1)] = i, t.factory(i, r)
                }, this.classNameFilter = function(t) {
                    if (1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null, this.$$classNameFilter)) {
                        var e = new RegExp("(\\s+|\\/)" + Ei + "(\\s+|\\/)");
                        if (e.test(this.$$classNameFilter.toString())) throw Si("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Ei)
                    }
                    return this.$$classNameFilter
                }, this.$get = ["$$animateQueue", function(t) {
                    function e(t, e, n) {
                        if (n) {
                            var r = ee(n);
                            !r || r.parentNode || r.previousElementSibling || (n = null)
                        }
                        n ? n.after(t) : e.prepend(t)
                    }
                    return {
                        on: t.on,
                        off: t.off,
                        pin: t.pin,
                        enabled: t.enabled,
                        cancel: function(t) {
                            t.end && t.end()
                        },
                        enter: function(n, r, i, o) {
                            return r = r && kr(r), i = i && kr(i), r = r || i.parent(), e(n, r, i), t.push(n, "enter", re(o))
                        },
                        move: function(n, r, i, o) {
                            return r = r && kr(r), i = i && kr(i), r = r || i.parent(), e(n, r, i), t.push(n, "move", re(o))
                        },
                        leave: function(e, n) {
                            return t.push(e, "leave", re(n), function() {
                                e.remove()
                            })
                        },
                        addClass: function(e, n, r) {
                            return r = re(r), r.addClass = te(r.addclass, n), t.push(e, "addClass", r)
                        },
                        removeClass: function(e, n, r) {
                            return r = re(r), r.removeClass = te(r.removeClass, n), t.push(e, "removeClass", r)
                        },
                        setClass: function(e, n, r, i) {
                            return i = re(i), i.addClass = te(i.addClass, n), i.removeClass = te(i.removeClass, r), t.push(e, "setClass", i)
                        },
                        animate: function(e, n, r, i, o) {
                            return o = re(o), o.from = o.from ? f(o.from, n) : n, o.to = o.to ? f(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = te(o.tempClasses, i), t.push(e, "animate", o)
                        }
                    }
                }]
            }],
            Ti = function() {
                this.$get = ["$$rAF", "$q", function(t, e) {
                    var n = function() {};
                    return n.prototype = {
                            done: function(t) {
                                this.defer && this.defer[t === !0 ? "reject" : "resolve"]()
                            },
                            end: function() {
                                this.done()
                            },
                            cancel: function() {
                                this.done(!0)
                            },
                            getPromise: function() {
                                return this.defer || (this.defer = e.defer()), this.defer.promise
                            },
                            then: function(t, e) {
                                return this.getPromise().then(t, e)
                            },
                            "catch": function(t) {
                                return this.getPromise()["catch"](t)
                            },
                            "finally": function(t) {
                                return this.getPromise()["finally"](t)
                            }
                        },
                        function(e, r) {
                            function i() {
                                return t(function() {
                                    o(), a || s.done(), a = !0
                                }), s
                            }

                            function o() {
                                r.addClass && (e.addClass(r.addClass), r.addClass = null), r.removeClass && (e.removeClass(r.removeClass), r.removeClass = null), r.to && (e.css(r.to), r.to = null)
                            }
                            r.cleanupStyles && (r.from = r.to = null), r.from && (e.css(r.from), r.from = null);
                            var a, s = new n;
                            return {
                                start: i,
                                end: i
                            }
                        }
                }]
            },
            Ni = r("$compile");
        ue.$inject = ["$provide", "$$sanitizeUriProvider"];
        var ji = /^((?:x|data)[\:\-_])/i,
            Oi = r("$controller"),
            Mi = /^(\S+)(\s+as\s+(\w+))?$/,
            Pi = function() {
                this.$get = ["$document", function(t) {
                    return function(e) {
                        return e ? !e.nodeType && e instanceof kr && (e = e[0]) : e = t[0].body, e.offsetWidth + 1
                    }
                }]
            },
            Di = "application/json",
            Fi = {
                "Content-Type": Di + ";charset=utf-8"
            },
            Li = /^\[|^\{(?!\{)/,
            Ii = {
                "[": /]$/,
                "{": /}$/
            },
            Ri = /^\)\]\}',?\n/,
            Vi = r("$http"),
            qi = function(t) {
                return function() {
                    throw Vi("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", t)
                }
            },
            Hi = Dr.$interpolateMinErr = r("$interpolate");
        Hi.throwNoconcat = function(t) {
            throw Hi("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", t)
        }, Hi.interr = function(t, e) {
            return Hi("interr", "Can't interpolate: {0}\n{1}", t, e.toString())
        };
        var Bi = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
            zi = {
                http: 80,
                https: 443,
                ftp: 21
            },
            Ui = r("$location"),
            Wi = {
                $$html5: !1,
                $$replace: !1,
                absUrl: He("$$absUrl"),
                url: function(t) {
                    if ($(t)) return this.$$url;
                    var e = Bi.exec(t);
                    return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
                },
                protocol: He("$$protocol"),
                host: He("$$host"),
                port: He("$$port"),
                path: Be("$$path", function(t) {
                    return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
                }),
                search: function(t, e) {
                    switch (arguments.length) {
                        case 0:
                            return this.$$search;
                        case 1:
                            if (S(t) || C(t)) t = t.toString(), this.$$search = tt(t);
                            else {
                                if (!b(t)) throw Ui("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                                t = V(t, {}), o(t, function(e, n) {
                                    null == e && delete t[n]
                                }), this.$$search = t
                            }
                            break;
                        default:
                            $(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
                    }
                    return this.$$compose(), this
                },
                hash: Be("$$hash", function(t) {
                    return null !== t ? t.toString() : ""
                }),
                replace: function() {
                    return this.$$replace = !0, this
                }
            };
        o([qe, Ve, Re], function(t) {
            t.prototype = Object.create(Wi), t.prototype.state = function(e) {
                if (!arguments.length) return this.$$state;
                if (t !== Re || !this.$$html5) throw Ui("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                return this.$$state = $(e) ? null : e, this
            }
        });
        var Gi = r("$parse"),
            Xi = Function.prototype.call,
            Yi = Function.prototype.apply,
            Ki = Function.prototype.bind,
            Ji = vt();
        o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(t) {
            Ji[t] = !0
        });
        var Qi = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "	",
                v: "\x0B",
                "'": "'",
                '"': '"'
            },
            Zi = function(t) {
                this.options = t
            };
        Zi.prototype = {
            constructor: Zi,
            lex: function(t) {
                for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                    var e = this.text.charAt(this.index);
                    if ('"' === e || "'" === e) this.readString(e);
                    else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdent(e)) this.readIdent();
                    else if (this.is(e, "(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: e
                    }), this.index++;
                    else if (this.isWhitespace(e)) this.index++;
                    else {
                        var n = e + this.peek(),
                            r = n + this.peek(2),
                            i = Ji[e],
                            o = Ji[n],
                            a = Ji[r];
                        if (i || o || a) {
                            var s = a ? r : o ? n : e;
                            this.tokens.push({
                                index: this.index,
                                text: s,
                                operator: !0
                            }), this.index += s.length
                        } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                }
                return this.tokens
            },
            is: function(t, e) {
                return -1 !== e.indexOf(t)
            },
            peek: function(t) {
                var e = t || 1;
                return this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
            },
            isNumber: function(t) {
                return t >= "0" && "9" >= t && "string" == typeof t
            },
            isWhitespace: function(t) {
                return " " === t || "\r" === t || "	" === t || "\n" === t || "\x0B" === t || " " === t
            },
            isIdent: function(t) {
                return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
            },
            isExpOperator: function(t) {
                return "-" === t || "+" === t || this.isNumber(t)
            },
            throwError: function(t, e, n) {
                n = n || this.index;
                var r = x(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
                throw Gi("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
            },
            readNumber: function() {
                for (var t = "", e = this.index; this.index < this.text.length;) {
                    var n = xr(this.text.charAt(this.index));
                    if ("." == n || this.isNumber(n)) t += n;
                    else {
                        var r = this.peek();
                        if ("e" == n && this.isExpOperator(r)) t += n;
                        else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1)) t += n;
                        else {
                            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1)) break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                this.tokens.push({
                    index: e,
                    text: t,
                    constant: !0,
                    value: Number(t)
                })
            },
            readIdent: function() {
                for (var t = this.index; this.index < this.text.length;) {
                    var e = this.text.charAt(this.index);
                    if (!this.isIdent(e) && !this.isNumber(e)) break;
                    this.index++
                }
                this.tokens.push({
                    index: t,
                    text: this.text.slice(t, this.index),
                    identifier: !0
                })
            },
            readString: function(t) {
                var e = this.index;
                this.index++;
                for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                    var o = this.text.charAt(this.index);
                    if (r += o, i) {
                        if ("u" === o) {
                            var a = this.text.substring(this.index + 1, this.index + 5);
                            a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                        } else {
                            var s = Qi[o];
                            n += s || o
                        }
                        i = !1
                    } else if ("\\" === o) i = !0;
                    else {
                        if (o === t) return this.index++, void this.tokens.push({
                            index: e,
                            text: r,
                            constant: !0,
                            value: n
                        });
                        n += o
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", e)
            }
        };
        var to = function(t, e) {
            this.lexer = t, this.options = e
        };
        to.Program = "Program", to.ExpressionStatement = "ExpressionStatement", to.AssignmentExpression = "AssignmentExpression", to.ConditionalExpression = "ConditionalExpression", to.LogicalExpression = "LogicalExpression", to.BinaryExpression = "BinaryExpression", to.UnaryExpression = "UnaryExpression", to.CallExpression = "CallExpression", to.MemberExpression = "MemberExpression", to.Identifier = "Identifier", to.Literal = "Literal", to.ArrayExpression = "ArrayExpression", to.Property = "Property", to.ObjectExpression = "ObjectExpression", to.ThisExpression = "ThisExpression", to.NGValueParameter = "NGValueParameter", to.prototype = {
            ast: function(t) {
                this.text = t, this.tokens = this.lexer.lex(t);
                var e = this.program();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e
            },
            program: function() {
                for (var t = [];;)
                    if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return {
                        type: to.Program,
                        body: t
                    }
            },
            expressionStatement: function() {
                return {
                    type: to.ExpressionStatement,
                    expression: this.filterChain()
                }
            },
            filterChain: function() {
                for (var t, e = this.expression(); t = this.expect("|");) e = this.filter(e);
                return e
            },
            expression: function() {
                return this.assignment()
            },
            assignment: function() {
                var t = this.ternary();
                return this.expect("=") && (t = {
                    type: to.AssignmentExpression,
                    left: t,
                    right: this.assignment(),
                    operator: "="
                }), t
            },
            ternary: function() {
                var t, e, n = this.logicalOR();
                return this.expect("?") && (t = this.expression(), this.consume(":")) ? (e = this.expression(), {
                    type: to.ConditionalExpression,
                    test: n,
                    alternate: t,
                    consequent: e
                }) : n
            },
            logicalOR: function() {
                for (var t = this.logicalAND(); this.expect("||");) t = {
                    type: to.LogicalExpression,
                    operator: "||",
                    left: t,
                    right: this.logicalAND()
                };
                return t
            },
            logicalAND: function() {
                for (var t = this.equality(); this.expect("&&");) t = {
                    type: to.LogicalExpression,
                    operator: "&&",
                    left: t,
                    right: this.equality()
                };
                return t
            },
            equality: function() {
                for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = {
                    type: to.BinaryExpression,
                    operator: t.text,
                    left: e,
                    right: this.relational()
                };
                return e
            },
            relational: function() {
                for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = {
                    type: to.BinaryExpression,
                    operator: t.text,
                    left: e,
                    right: this.additive()
                };
                return e
            },
            additive: function() {
                for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = {
                    type: to.BinaryExpression,
                    operator: t.text,
                    left: e,
                    right: this.multiplicative()
                };
                return e
            },
            multiplicative: function() {
                for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = {
                    type: to.BinaryExpression,
                    operator: t.text,
                    left: e,
                    right: this.unary()
                };
                return e
            },
            unary: function() {
                var t;
                return (t = this.expect("+", "-", "!")) ? {
                    type: to.UnaryExpression,
                    operator: t.text,
                    prefix: !0,
                    argument: this.unary()
                } : this.primary()
            },
            primary: function() {
                var t;
                this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.constants.hasOwnProperty(this.peek().text) ? t = V(this.constants[this.consume().text]) : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var e; e = this.expect("(", "[", ".");) "(" === e.text ? (t = {
                    type: to.CallExpression,
                    callee: t,
                    arguments: this.parseArguments()
                }, this.consume(")")) : "[" === e.text ? (t = {
                    type: to.MemberExpression,
                    object: t,
                    property: this.expression(),
                    computed: !0
                }, this.consume("]")) : "." === e.text ? t = {
                    type: to.MemberExpression,
                    object: t,
                    property: this.identifier(),
                    computed: !1
                } : this.throwError("IMPOSSIBLE");
                return t
            },
            filter: function(t) {
                for (var e = [t], n = {
                        type: to.CallExpression,
                        callee: this.identifier(),
                        arguments: e,
                        filter: !0
                    }; this.expect(":");) e.push(this.expression());
                return n
            },
            parseArguments: function() {
                var t = [];
                if (")" !== this.peekToken().text)
                    do t.push(this.expression()); while (this.expect(","));
                return t
            },
            identifier: function() {
                var t = this.consume();
                return t.identifier || this.throwError("is not a valid identifier", t), {
                    type: to.Identifier,
                    name: t.text
                }
            },
            constant: function() {
                return {
                    type: to.Literal,
                    value: this.consume().value
                }
            },
            arrayDeclaration: function() {
                var t = [];
                if ("]" !== this.peekToken().text)
                    do {
                        if (this.peek("]")) break;
                        t.push(this.expression())
                    } while (this.expect(","));
                return this.consume("]"), {
                    type: to.ArrayExpression,
                    elements: t
                }
            },
            object: function() {
                var t, e = [];
                if ("}" !== this.peekToken().text)
                    do {
                        if (this.peek("}")) break;
                        t = {
                            type: to.Property,
                            kind: "init"
                        }, this.peek().constant ? t.key = this.constant() : this.peek().identifier ? t.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), t.value = this.expression(), e.push(t)
                    } while (this.expect(","));
                return this.consume("}"), {
                    type: to.ObjectExpression,
                    properties: e
                }
            },
            throwError: function(t, e) {
                throw Gi("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
            },
            consume: function(t) {
                if (0 === this.tokens.length) throw Gi("ueoe", "Unexpected end of expression: {0}", this.text);
                var e = this.expect(t);
                return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
            },
            peekToken: function() {
                if (0 === this.tokens.length) throw Gi("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            },
            peek: function(t, e, n, r) {
                return this.peekAhead(0, t, e, n, r)
            },
            peekAhead: function(t, e, n, r, i) {
                if (this.tokens.length > t) {
                    var o = this.tokens[t],
                        a = o.text;
                    if (a === e || a === n || a === r || a === i || !e && !n && !r && !i) return o
                }
                return !1
            },
            expect: function(t, e, n, r) {
                var i = this.peek(t, e, n, r);
                return i ? (this.tokens.shift(), i) : !1
            },
            constants: {
                "true": {
                    type: to.Literal,
                    value: !0
                },
                "false": {
                    type: to.Literal,
                    value: !1
                },
                "null": {
                    type: to.Literal,
                    value: null
                },
                undefined: {
                    type: to.Literal,
                    value: n
                },
                "this": {
                    type: to.ThisExpression
                }
            }
        }, sn.prototype = {
            compile: function(t, e) {
                var r = this,
                    i = this.astBuilder.ast(t);
                this.state = {
                    nextId: 0,
                    filters: {},
                    expensiveChecks: e,
                    fn: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    assign: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    inputs: []
                }, tn(i, r.$filter);
                var a, s = "";
                if (this.stage = "assign", a = rn(i)) {
                    this.state.computing = "assign";
                    var u = this.nextId();
                    this.recurse(a, u), this.return_(u), s = "fn.assign=" + this.generateFunction("assign", "s,v,l")
                }
                var c = en(i.body);
                r.stage = "inputs", o(c, function(t, e) {
                    var n = "fn" + e;
                    r.state[n] = {
                        vars: [],
                        body: [],
                        own: {}
                    }, r.state.computing = n;
                    var i = r.nextId();
                    r.recurse(t, i), r.return_(i), r.state.inputs.push(n), t.watchId = e
                }), this.state.computing = "fn", this.stage = "main", this.recurse(i);
                var l = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + s + this.watchFns() + "return fn;",
                    f = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", l)(this.$filter, We, Xe, Ye, Ge, Ke, Je, Qe, t);
                return this.state = this.stage = n, f.literal = on(i), f.constant = an(i), f
            },
            USE: "use",
            STRICT: "strict",
            watchFns: function() {
                var t = [],
                    e = this.state.inputs,
                    n = this;
                return o(e, function(e) {
                    t.push("var " + e + "=" + n.generateFunction(e, "s"))
                }), e.length && t.push("fn.inputs=[" + e.join(",") + "];"), t.join("")
            },
            generateFunction: function(t, e) {
                return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};"
            },
            filterPrefix: function() {
                var t = [],
                    e = this;
                return o(this.state.filters, function(n, r) {
                    t.push(n + "=$filter(" + e.escape(r) + ")")
                }), t.length ? "var " + t.join(",") + ";" : ""
            },
            varsPrefix: function(t) {
                return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : ""
            },
            body: function(t) {
                return this.state[t].body.join("")
            },
            recurse: function(t, e, r, i, a, s) {
                var u, c, l, f, h = this;
                if (i = i || g, !s && x(t.watchId)) return e = e || this.nextId(), void this.if_("i", this.lazyAssign(e, this.computedMember("i", t.watchId)), this.lazyRecurse(t, e, r, i, a, !0));
                switch (t.type) {
                    case to.Program:
                        o(t.body, function(e, r) {
                            h.recurse(e.expression, n, n, function(t) {
                                c = t
                            }), r !== t.body.length - 1 ? h.current().body.push(c, ";") : h.return_(c)
                        });
                        break;
                    case to.Literal:
                        f = this.escape(t.value), this.assign(e, f), i(f);
                        break;
                    case to.UnaryExpression:
                        this.recurse(t.argument, n, n, function(t) {
                            c = t
                        }), f = t.operator + "(" + this.ifDefined(c, 0) + ")", this.assign(e, f), i(f);
                        break;
                    case to.BinaryExpression:
                        this.recurse(t.left, n, n, function(t) {
                            u = t
                        }), this.recurse(t.right, n, n, function(t) {
                            c = t
                        }), f = "+" === t.operator ? this.plus(u, c) : "-" === t.operator ? this.ifDefined(u, 0) + t.operator + this.ifDefined(c, 0) : "(" + u + ")" + t.operator + "(" + c + ")", this.assign(e, f), i(f);
                        break;
                    case to.LogicalExpression:
                        e = e || this.nextId(), h.recurse(t.left, e), h.if_("&&" === t.operator ? e : h.not(e), h.lazyRecurse(t.right, e)), i(e);
                        break;
                    case to.ConditionalExpression:
                        e = e || this.nextId(), h.recurse(t.test, e), h.if_(e, h.lazyRecurse(t.alternate, e), h.lazyRecurse(t.consequent, e)), i(e);
                        break;
                    case to.Identifier:
                        e = e || this.nextId(), r && (r.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", t.name) + "?l:s"), r.computed = !1, r.name = t.name), We(t.name), h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", t.name)), function() {
                            h.if_("inputs" === h.stage || "s", function() {
                                a && 1 !== a && h.if_(h.not(h.nonComputedMember("s", t.name)), h.lazyAssign(h.nonComputedMember("s", t.name), "{}")), h.assign(e, h.nonComputedMember("s", t.name))
                            })
                        }, e && h.lazyAssign(e, h.nonComputedMember("l", t.name))), (h.state.expensiveChecks || cn(t.name)) && h.addEnsureSafeObject(e), i(e);
                        break;
                    case to.MemberExpression:
                        u = r && (r.context = this.nextId()) || this.nextId(), e = e || this.nextId(), h.recurse(t.object, u, n, function() {
                            h.if_(h.notNull(u), function() {
                                t.computed ? (c = h.nextId(), h.recurse(t.property, c), h.getStringValue(c), h.addEnsureSafeMemberName(c), a && 1 !== a && h.if_(h.not(h.computedMember(u, c)), h.lazyAssign(h.computedMember(u, c), "{}")), f = h.ensureSafeObject(h.computedMember(u, c)), h.assign(e, f), r && (r.computed = !0, r.name = c)) : (We(t.property.name), a && 1 !== a && h.if_(h.not(h.nonComputedMember(u, t.property.name)), h.lazyAssign(h.nonComputedMember(u, t.property.name), "{}")), f = h.nonComputedMember(u, t.property.name), (h.state.expensiveChecks || cn(t.property.name)) && (f = h.ensureSafeObject(f)), h.assign(e, f), r && (r.computed = !1, r.name = t.property.name))
                            }, function() {
                                h.assign(e, "undefined")
                            }), i(e)
                        }, !!a);
                        break;
                    case to.CallExpression:
                        e = e || this.nextId(), t.filter ? (c = h.filter(t.callee.name), l = [], o(t.arguments, function(t) {
                            var e = h.nextId();
                            h.recurse(t, e), l.push(e)
                        }), f = c + "(" + l.join(",") + ")", h.assign(e, f), i(e)) : (c = h.nextId(), u = {}, l = [], h.recurse(t.callee, c, u, function() {
                            h.if_(h.notNull(c), function() {
                                h.addEnsureSafeFunction(c), o(t.arguments, function(t) {
                                    h.recurse(t, h.nextId(), n, function(t) {
                                        l.push(h.ensureSafeObject(t))
                                    })
                                }), u.name ? (h.state.expensiveChecks || h.addEnsureSafeObject(u.context), f = h.member(u.context, u.name, u.computed) + "(" + l.join(",") + ")") : f = c + "(" + l.join(",") + ")", f = h.ensureSafeObject(f), h.assign(e, f)
                            }, function() {
                                h.assign(e, "undefined")
                            }), i(e)
                        }));
                        break;
                    case to.AssignmentExpression:
                        if (c = this.nextId(), u = {}, !nn(t.left)) throw Gi("lval", "Trying to assing a value to a non l-value");
                        this.recurse(t.left, n, u, function() {
                            h.if_(h.notNull(u.context), function() {
                                h.recurse(t.right, c), h.addEnsureSafeObject(h.member(u.context, u.name, u.computed)), h.addEnsureSafeAssignContext(u.context), f = h.member(u.context, u.name, u.computed) + t.operator + c, h.assign(e, f), i(e || f)
                            })
                        }, 1);
                        break;
                    case to.ArrayExpression:
                        l = [], o(t.elements, function(t) {
                            h.recurse(t, h.nextId(), n, function(t) {
                                l.push(t)
                            })
                        }), f = "[" + l.join(",") + "]", this.assign(e, f), i(f);
                        break;
                    case to.ObjectExpression:
                        l = [], o(t.properties, function(t) {
                            h.recurse(t.value, h.nextId(), n, function(e) {
                                l.push(h.escape(t.key.type === to.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
                            })
                        }), f = "{" + l.join(",") + "}", this.assign(e, f), i(f);
                        break;
                    case to.ThisExpression:
                        this.assign(e, "s"), i("s");
                        break;
                    case to.NGValueParameter:
                        this.assign(e, "v"), i("v")
                }
            },
            getHasOwnProperty: function(t, e) {
                var n = t + "." + e,
                    r = this.current().own;
                return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), r[n]
            },
            assign: function(t, e) {
                return t ? (this.current().body.push(t, "=", e, ";"), t) : void 0
            },
            filter: function(t) {
                return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t]
            },
            ifDefined: function(t, e) {
                return "ifDefined(" + t + "," + this.escape(e) + ")"
            },
            plus: function(t, e) {
                return "plus(" + t + "," + e + ")"
            },
            return_: function(t) {
                this.current().body.push("return ", t, ";")
            },
            if_: function(t, e, n) {
                if (t === !0) e();
                else {
                    var r = this.current().body;
                    r.push("if(", t, "){"), e(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
                }
            },
            not: function(t) {
                return "!(" + t + ")"
            },
            notNull: function(t) {
                return t + "!=null"
            },
            nonComputedMember: function(t, e) {
                return t + "." + e
            },
            computedMember: function(t, e) {
                return t + "[" + e + "]"
            },
            member: function(t, e, n) {
                return n ? this.computedMember(t, e) : this.nonComputedMember(t, e)
            },
            addEnsureSafeObject: function(t) {
                this.current().body.push(this.ensureSafeObject(t), ";")
            },
            addEnsureSafeMemberName: function(t) {
                this.current().body.push(this.ensureSafeMemberName(t), ";")
            },
            addEnsureSafeFunction: function(t) {
                this.current().body.push(this.ensureSafeFunction(t), ";")
            },
            addEnsureSafeAssignContext: function(t) {
                this.current().body.push(this.ensureSafeAssignContext(t), ";")
            },
            ensureSafeObject: function(t) {
                return "ensureSafeObject(" + t + ",text)"
            },
            ensureSafeMemberName: function(t) {
                return "ensureSafeMemberName(" + t + ",text)"
            },
            ensureSafeFunction: function(t) {
                return "ensureSafeFunction(" + t + ",text)"
            },
            getStringValue: function(t) {
                this.assign(t, "getStringValue(" + t + ",text)")
            },
            ensureSafeAssignContext: function(t) {
                return "ensureSafeAssignContext(" + t + ",text)"
            },
            lazyRecurse: function(t, e, n, r, i, o) {
                var a = this;
                return function() {
                    a.recurse(t, e, n, r, i, o)
                }
            },
            lazyAssign: function(t, e) {
                var n = this;
                return function() {
                    n.assign(t, e)
                }
            },
            stringEscapeRegex: /[^ a-zA-Z0-9]/g,
            stringEscapeFn: function(t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            },
            escape: function(t) {
                if (S(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                if (C(t)) return t.toString();
                if (t === !0) return "true";
                if (t === !1) return "false";
                if (null === t) return "null";
                if ("undefined" == typeof t) return "undefined";
                throw Gi("esc", "IMPOSSIBLE")
            },
            nextId: function(t, e) {
                var n = "v" + this.state.nextId++;
                return t || this.current().vars.push(n + (e ? "=" + e : "")), n
            },
            current: function() {
                return this.state[this.state.computing]
            }
        }, un.prototype = {
            compile: function(t, e) {
                var n = this,
                    r = this.astBuilder.ast(t);
                this.expression = t, this.expensiveChecks = e, tn(r, n.$filter);
                var i, a;
                (i = rn(r)) && (a = this.recurse(i));
                var s, u = en(r.body);
                u && (s = [], o(u, function(t, e) {
                    var r = n.recurse(t);
                    t.input = r, s.push(r), t.watchId = e
                }));
                var c = [];
                o(r.body, function(t) {
                    c.push(n.recurse(t.expression))
                });
                var l = 0 === r.body.length ? function() {} : 1 === r.body.length ? c[0] : function(t, e) {
                    var n;
                    return o(c, function(r) {
                        n = r(t, e)
                    }), n
                };
                return a && (l.assign = function(t, e, n) {
                    return a(t, n, e)
                }), s && (l.inputs = s), l.literal = on(r), l.constant = an(r), l
            },
            recurse: function(t, e, r) {
                var i, a, s, u = this;
                if (t.input) return this.inputs(t.input, t.watchId);
                switch (t.type) {
                    case to.Literal:
                        return this.value(t.value, e);
                    case to.UnaryExpression:
                        return a = this.recurse(t.argument), this["unary" + t.operator](a, e);
                    case to.BinaryExpression:
                        return i = this.recurse(t.left), a = this.recurse(t.right), this["binary" + t.operator](i, a, e);
                    case to.LogicalExpression:
                        return i = this.recurse(t.left), a = this.recurse(t.right), this["binary" + t.operator](i, a, e);
                    case to.ConditionalExpression:
                        return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);
                    case to.Identifier:
                        return We(t.name, u.expression), u.identifier(t.name, u.expensiveChecks || cn(t.name), e, r, u.expression);
                    case to.MemberExpression:
                        return i = this.recurse(t.object, !1, !!r), t.computed || (We(t.property.name, u.expression), a = t.property.name), t.computed && (a = this.recurse(t.property)), t.computed ? this.computedMember(i, a, e, r, u.expression) : this.nonComputedMember(i, a, u.expensiveChecks, e, r, u.expression);
                    case to.CallExpression:
                        return s = [], o(t.arguments, function(t) {
                            s.push(u.recurse(t))
                        }), t.filter && (a = this.$filter(t.callee.name)), t.filter || (a = this.recurse(t.callee, !0)), t.filter ? function(t, r, i, o) {
                            for (var u = [], c = 0; c < s.length; ++c) u.push(s[c](t, r, i, o));
                            var l = a.apply(n, u, o);
                            return e ? {
                                context: n,
                                name: n,
                                value: l
                            } : l
                        } : function(t, n, r, i) {
                            var o, c = a(t, n, r, i);
                            if (null != c.value) {
                                Xe(c.context, u.expression), Ye(c.value, u.expression);
                                for (var l = [], f = 0; f < s.length; ++f) l.push(Xe(s[f](t, n, r, i), u.expression));
                                o = Xe(c.value.apply(c.context, l), u.expression)
                            }
                            return e ? {
                                value: o
                            } : o
                        };
                    case to.AssignmentExpression:
                        return i = this.recurse(t.left, !0, 1), a = this.recurse(t.right),
                            function(t, n, r, o) {
                                var s = i(t, n, r, o),
                                    c = a(t, n, r, o);
                                return Xe(s.value, u.expression), Ke(s.context), s.context[s.name] = c, e ? {
                                    value: c
                                } : c
                            };
                    case to.ArrayExpression:
                        return s = [], o(t.elements, function(t) {
                                s.push(u.recurse(t))
                            }),
                            function(t, n, r, i) {
                                for (var o = [], a = 0; a < s.length; ++a) o.push(s[a](t, n, r, i));
                                return e ? {
                                    value: o
                                } : o
                            };
                    case to.ObjectExpression:
                        return s = [], o(t.properties, function(t) {
                                s.push({
                                    key: t.key.type === to.Identifier ? t.key.name : "" + t.key.value,
                                    value: u.recurse(t.value)
                                })
                            }),
                            function(t, n, r, i) {
                                for (var o = {}, a = 0; a < s.length; ++a) o[s[a].key] = s[a].value(t, n, r, i);
                                return e ? {
                                    value: o
                                } : o
                            };
                    case to.ThisExpression:
                        return function(t) {
                            return e ? {
                                value: t
                            } : t
                        };
                    case to.NGValueParameter:
                        return function(t, n, r, i) {
                            return e ? {
                                value: r
                            } : r
                        }
                }
            },
            "unary+": function(t, e) {
                return function(n, r, i, o) {
                    var a = t(n, r, i, o);
                    return a = x(a) ? +a : 0, e ? {
                        value: a
                    } : a
                }
            },
            "unary-": function(t, e) {
                return function(n, r, i, o) {
                    var a = t(n, r, i, o);
                    return a = x(a) ? -a : 0, e ? {
                        value: a
                    } : a
                }
            },
            "unary!": function(t, e) {
                return function(n, r, i, o) {
                    var a = !t(n, r, i, o);
                    return e ? {
                        value: a
                    } : a
                }
            },
            "binary+": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a),
                        u = e(r, i, o, a),
                        c = Qe(s, u);
                    return n ? {
                        value: c
                    } : c
                }
            },
            "binary-": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a),
                        u = e(r, i, o, a),
                        c = (x(s) ? s : 0) - (x(u) ? u : 0);
                    return n ? {
                        value: c
                    } : c
                }
            },
            "binary*": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) * e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary/": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) / e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary%": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) % e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary===": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) === e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary!==": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) !== e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary==": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) == e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary!=": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) != e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary<": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) < e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary>": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) > e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary<=": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) <= e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary>=": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) >= e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary&&": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) && e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary||": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) || e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "ternary?:": function(t, e, n, r) {
                return function(i, o, a, s) {
                    var u = t(i, o, a, s) ? e(i, o, a, s) : n(i, o, a, s);
                    return r ? {
                        value: u
                    } : u
                }
            },
            value: function(t, e) {
                return function() {
                    return e ? {
                        context: n,
                        name: n,
                        value: t
                    } : t
                }
            },
            identifier: function(t, e, r, i, o) {
                return function(a, s, u, c) {
                    var l = s && t in s ? s : a;
                    i && 1 !== i && l && !l[t] && (l[t] = {});
                    var f = l ? l[t] : n;
                    return e && Xe(f, o), r ? {
                        context: l,
                        name: t,
                        value: f
                    } : f
                }
            },
            computedMember: function(t, e, n, r, i) {
                return function(o, a, s, u) {
                    var c, l, f = t(o, a, s, u);
                    return null != f && (c = e(o, a, s, u), c = Ge(c), We(c, i), r && 1 !== r && f && !f[c] && (f[c] = {}), l = f[c], Xe(l, i)), n ? {
                        context: f,
                        name: c,
                        value: l
                    } : l
                }
            },
            nonComputedMember: function(t, e, r, i, o, a) {
                return function(s, u, c, l) {
                    var f = t(s, u, c, l);
                    o && 1 !== o && f && !f[e] && (f[e] = {});
                    var h = null != f ? f[e] : n;
                    return (r || cn(e)) && Xe(h, a), i ? {
                        context: f,
                        name: e,
                        value: h
                    } : h
                }
            },
            inputs: function(t, e) {
                return function(n, r, i, o) {
                    return o ? o[e] : t(n, r, i)
                }
            }
        };
        var eo = function(t, e, n) {
            this.lexer = t, this.$filter = e, this.options = n, this.ast = new to(this.lexer), this.astCompiler = n.csp ? new un(this.ast, e) : new sn(this.ast, e)
        };
        eo.prototype = {
            constructor: eo,
            parse: function(t) {
                return this.astCompiler.compile(t, this.options.expensiveChecks)
            }
        };
        var no = (vt(), vt(), Object.prototype.valueOf),
            ro = r("$sce"),
            io = {
                HTML: "html",
                CSS: "css",
                URL: "url",
                RESOURCE_URL: "resourceUrl",
                JS: "js"
            },
            Ni = r("$compile"),
            oo = e.createElement("a"),
            ao = kn(t.location.href);
        Tn.$inject = ["$document"], jn.$inject = ["$provide"], Fn.$inject = ["$locale"], Ln.$inject = ["$locale"];
        var so = ".",
            uo = {
                yyyy: Vn("FullYear", 4),
                yy: Vn("FullYear", 2, 0, !0),
                y: Vn("FullYear", 1),
                MMMM: qn("Month"),
                MMM: qn("Month", !0),
                MM: Vn("Month", 2, 1),
                M: Vn("Month", 1, 1),
                dd: Vn("Date", 2),
                d: Vn("Date", 1),
                HH: Vn("Hours", 2),
                H: Vn("Hours", 1),
                hh: Vn("Hours", 2, -12),
                h: Vn("Hours", 1, -12),
                mm: Vn("Minutes", 2),
                m: Vn("Minutes", 1),
                ss: Vn("Seconds", 2),
                s: Vn("Seconds", 1),
                sss: Vn("Milliseconds", 3),
                EEEE: qn("Day"),
                EEE: qn("Day", !0),
                a: Wn,
                Z: Hn,
                ww: Un(2),
                w: Un(1),
                G: Gn,
                GG: Gn,
                GGG: Gn,
                GGGG: Xn
            },
            co = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
            lo = /^\-?\d+$/;
        Yn.$inject = ["$locale"];
        var fo = m(xr),
            ho = m(wr);
        Qn.$inject = ["$parse"];
        var po = m({
                restrict: "E",
                compile: function(t, e) {
                    return e.href || e.xlinkHref ? void 0 : function(t, e) {
                        if ("a" === e[0].nodeName.toLowerCase()) {
                            var n = "[object SVGAnimatedString]" === Or.call(e.prop("href")) ? "xlink:href" : "href";
                            e.on("click", function(t) {
                                e.attr(n) || t.preventDefault()
                            })
                        }
                    }
                }
            }),
            go = {};
        o(di, function(t, e) {
            function n(t, n, i) {
                t.$watch(i[r], function(t) {
                    i.$set(e, !!t)
                })
            }
            if ("multiple" != t) {
                var r = ce("ng-" + e),
                    i = n;
                "checked" === t && (i = function(t, e, i) {
                    i.ngModel !== i[r] && n(t, e, i)
                }), go[r] = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        link: i
                    }
                }
            }
        }), o(vi, function(t, e) {
            go[e] = function() {
                return {
                    priority: 100,
                    link: function(t, n, r) {
                        if ("ngPattern" === e && "/" == r.ngPattern.charAt(0)) {
                            var i = r.ngPattern.match(yr);
                            if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                        }
                        t.$watch(r[e], function(t) {
                            r.$set(e, t)
                        })
                    }
                }
            }
        }), o(["src", "srcset", "href"], function(t) {
            var e = ce("ng-" + t);
            go[e] = function() {
                return {
                    priority: 99,
                    link: function(n, r, i) {
                        var o = t,
                            a = t;
                        "href" === t && "[object SVGAnimatedString]" === Or.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(e, function(e) {
                            return e ? (i.$set(a, e), void(Er && o && r.prop(o, i[a]))) : void("href" === t && i.$set(a, null))
                        })
                    }
                }
            }
        });
        var vo = {
                $addControl: g,
                $$renameControl: tr,
                $removeControl: g,
                $setValidity: g,
                $setDirty: g,
                $setPristine: g,
                $setSubmitted: g
            },
            mo = "ng-submitted";
        er.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
        var yo = function(t) {
                return ["$timeout", "$parse", function(e, r) {
                    function i(t) {
                        return "" === t ? r('this[""]').assign : r(t).assign || g
                    }
                    var o = {
                        name: "form",
                        restrict: t ? "EAC" : "E",
                        require: ["form", "^^?form"],
                        controller: er,
                        compile: function(r, o) {
                            r.addClass(Qo).addClass(Ko);
                            var a = o.name ? "name" : t && o.ngForm ? "ngForm" : !1;
                            return {
                                pre: function(t, r, o, s) {
                                    var u = s[0];
                                    if (!("action" in o)) {
                                        var c = function(e) {
                                            t.$apply(function() {
                                                u.$commitViewValue(), u.$setSubmitted()
                                            }), e.preventDefault()
                                        };
                                        ni(r[0], "submit", c), r.on("$destroy", function() {
                                            e(function() {
                                                ri(r[0], "submit", c)
                                            }, 0, !1)
                                        })
                                    }
                                    var l = s[1] || u.$$parentForm;
                                    l.$addControl(u);
                                    var h = a ? i(u.$name) : g;
                                    a && (h(t, u), o.$observe(a, function(e) {
                                        u.$name !== e && (h(t, n), u.$$parentForm.$$renameControl(u, e), (h = i(u.$name))(t, u))
                                    })), r.on("$destroy", function() {
                                        u.$$parentForm.$removeControl(u), h(t, n), f(u, vo)
                                    })
                                }
                            }
                        }
                    };
                    return o
                }]
            },
            $o = yo(),
            xo = yo(!0),
            bo = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
            wo = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            So = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            Co = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
            Eo = /^(\d{4})-(\d{2})-(\d{2})$/,
            ko = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            Ao = /^(\d{4})-W(\d\d)$/,
            _o = /^(\d{4})-(\d\d)$/,
            To = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            No = {
                text: rr,
                date: sr("date", Eo, ar(Eo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                "datetime-local": sr("datetimelocal", ko, ar(ko, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
                time: sr("time", To, ar(To, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                week: sr("week", Ao, or, "yyyy-Www"),
                month: sr("month", _o, ar(_o, ["yyyy", "MM"]), "yyyy-MM"),
                number: cr,
                url: lr,
                email: fr,
                radio: hr,
                checkbox: dr,
                hidden: g,
                button: g,
                submit: g,
                reset: g,
                file: g
            },
            jo = ["$browser", "$sniffer", "$filter", "$parse", function(t, e, n, r) {
                return {
                    restrict: "E",
                    require: ["?ngModel"],
                    link: {
                        pre: function(i, o, a, s) {
                            s[0] && (No[xr(a.type)] || No.text)(i, o, a, s[0], e, t, n, r)
                        }
                    }
                }
            }],
            Oo = /^(true|false|\d+)$/,
            Mo = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    compile: function(t, e) {
                        return Oo.test(e.ngValue) ? function(t, e, n) {
                            n.$set("value", t.$eval(n.ngValue))
                        } : function(t, e, n) {
                            t.$watch(n.ngValue, function(t) {
                                n.$set("value", t)
                            })
                        }
                    }
                }
            },
            Po = ["$compile", function(t) {
                return {
                    restrict: "AC",
                    compile: function(e) {
                        return t.$$addBindingClass(e),
                            function(e, n, r) {
                                t.$$addBindingInfo(n, r.ngBind), n = n[0], e.$watch(r.ngBind, function(t) {
                                    n.textContent = $(t) ? "" : t
                                })
                            }
                    }
                }
            }],
            Do = ["$interpolate", "$compile", function(t, e) {
                return {
                    compile: function(n) {
                        return e.$$addBindingClass(n),
                            function(n, r, i) {
                                var o = t(r.attr(i.$attr.ngBindTemplate));
                                e.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function(t) {
                                    r.textContent = $(t) ? "" : t
                                })
                            }
                    }
                }
            }],
            Fo = ["$sce", "$parse", "$compile", function(t, e, n) {
                return {
                    restrict: "A",
                    compile: function(r, i) {
                        var o = e(i.ngBindHtml),
                            a = e(i.ngBindHtml, function(t) {
                                return (t || "").toString()
                            });
                        return n.$$addBindingClass(r),
                            function(e, r, i) {
                                n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function() {
                                    r.html(t.getTrustedHtml(o(e)) || "")
                                })
                            }
                    }
                }
            }],
            Lo = m({
                restrict: "A",
                require: "ngModel",
                link: function(t, e, n, r) {
                    r.$viewChangeListeners.push(function() {
                        t.$eval(n.ngChange)
                    })
                }
            }),
            Io = gr("", !0),
            Ro = gr("Odd", 0),
            Vo = gr("Even", 1),
            qo = Zn({
                compile: function(t, e) {
                    e.$set("ngCloak", n), t.removeClass("ng-cloak")
                }
            }),
            Ho = [function() {
                return {
                    restrict: "A",
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }],
            Bo = {},
            zo = {
                blur: !0,
                focus: !0
            };
        o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) {
            var e = ce("ng-" + t);
            Bo[e] = ["$parse", "$rootScope", function(n, r) {
                return {
                    restrict: "A",
                    compile: function(i, o) {
                        var a = n(o[e], null, !0);
                        return function(e, n) {
                            n.on(t, function(n) {
                                var i = function() {
                                    a(e, {
                                        $event: n
                                    })
                                };
                                zo[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
                            })
                        }
                    }
                }
            }]
        });
        var Uo = ["$animate", function(t) {
                return {
                    multiElement: !0,
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function(n, r, i, o, a) {
                        var s, u, c;
                        n.$watch(i.ngIf, function(n) {
                            n ? u || a(function(n, o) {
                                u = o, n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), s = {
                                    clone: n
                                }, t.enter(n, r.parent(), r)
                            }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = gt(s.clone), t.leave(c).then(function() {
                                c = null
                            }), s = null))
                        })
                    }
                }
            }],
            Wo = ["$templateRequest", "$anchorScroll", "$animate", function(t, e, n) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: Dr.noop,
                    compile: function(r, i) {
                        var o = i.ngInclude || i.src,
                            a = i.onload || "",
                            s = i.autoscroll;
                        return function(r, i, u, c, l) {
                            var f, h, p, d = 0,
                                g = function() {
                                    h && (h.remove(), h = null), f && (f.$destroy(), f = null), p && (n.leave(p).then(function() {
                                        h = null
                                    }), h = p, p = null)
                                };
                            r.$watch(o, function(o) {
                                var u = function() {
                                        !x(s) || s && !r.$eval(s) || e()
                                    },
                                    h = ++d;
                                o ? (t(o, !0).then(function(t) {
                                    if (h === d) {
                                        var e = r.$new();
                                        c.template = t;
                                        var s = l(e, function(t) {
                                            g(), n.enter(t, null, i).then(u)
                                        });
                                        f = e, p = s, f.$emit("$includeContentLoaded", o), r.$eval(a)
                                    }
                                }, function() {
                                    h === d && (g(), r.$emit("$includeContentError", o))
                                }), r.$emit("$includeContentRequested", o)) : (g(), c.template = null)
                            })
                        }
                    }
                }
            }],
            Go = ["$compile", function(t) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function(n, r, i, o) {
                        return /SVG/.test(r[0].toString()) ? (r.empty(), void t(kt(o.template, e).childNodes)(n, function(t) {
                            r.append(t)
                        }, {
                            futureParentElement: r
                        })) : (r.html(o.template), void t(r.contents())(n))
                    }
                }
            }],
            Xo = Zn({
                priority: 450,
                compile: function() {
                    return {
                        pre: function(t, e, n) {
                            t.$eval(n.ngInit)
                        }
                    }
                }
            }),
            Yo = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    require: "ngModel",
                    link: function(t, e, r, i) {
                        var a = e.attr(r.$attr.ngList) || ", ",
                            s = "false" !== r.ngTrim,
                            u = s ? Vr(a) : a,
                            c = function(t) {
                                if (!$(t)) {
                                    var e = [];
                                    return t && o(t.split(u), function(t) {
                                        t && e.push(s ? Vr(t) : t)
                                    }), e
                                }
                            };
                        i.$parsers.push(c), i.$formatters.push(function(t) {
                            return Ir(t) ? t.join(a) : n
                        }), i.$isEmpty = function(t) {
                            return !t || !t.length
                        }
                    }
                }
            },
            Ko = "ng-valid",
            Jo = "ng-invalid",
            Qo = "ng-pristine",
            Zo = "ng-dirty",
            ta = "ng-untouched",
            ea = "ng-touched",
            na = "ng-pending",
            ra = r("ngModel"),
            ia = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(t, e, r, i, a, s, u, c, l, f) {
                this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(t), this.$$parentForm = vo;
                var h, p = a(r.ngModel),
                    d = p.assign,
                    v = p,
                    m = d,
                    y = null,
                    b = this;
                this.$$setOptions = function(t) {
                    if (b.$options = t, t && t.getterSetter) {
                        var e = a(r.ngModel + "()"),
                            n = a(r.ngModel + "($$$p)");
                        v = function(t) {
                            var n = p(t);
                            return k(n) && (n = e(t)), n
                        }, m = function(t, e) {
                            k(p(t)) ? n(t, {
                                $$$p: b.$modelValue
                            }) : d(t, b.$modelValue)
                        }
                    } else if (!p.assign) throw ra("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, Q(i))
                }, this.$render = g, this.$isEmpty = function(t) {
                    return $(t) || "" === t || null === t || t !== t
                };
                var w = 0;
                vr({
                    ctrl: this,
                    $element: i,
                    set: function(t, e) {
                        t[e] = !0
                    },
                    unset: function(t, e) {
                        delete t[e]
                    },
                    $animate: s
                }), this.$setPristine = function() {
                    b.$dirty = !1, b.$pristine = !0, s.removeClass(i, Zo), s.addClass(i, Qo)
                }, this.$setDirty = function() {
                    b.$dirty = !0, b.$pristine = !1, s.removeClass(i, Qo), s.addClass(i, Zo), b.$$parentForm.$setDirty()
                }, this.$setUntouched = function() {
                    b.$touched = !1, b.$untouched = !0, s.setClass(i, ta, ea)
                }, this.$setTouched = function() {
                    b.$touched = !0, b.$untouched = !1, s.setClass(i, ea, ta)
                }, this.$rollbackViewValue = function() {
                    u.cancel(y), b.$viewValue = b.$$lastCommittedViewValue, b.$render()
                }, this.$validate = function() {
                    if (!C(b.$modelValue) || !isNaN(b.$modelValue)) {
                        var t = b.$$lastCommittedViewValue,
                            e = b.$$rawModelValue,
                            r = b.$valid,
                            i = b.$modelValue,
                            o = b.$options && b.$options.allowInvalid;
                        b.$$runValidators(e, t, function(t) {
                            o || r === t || (b.$modelValue = t ? e : n, b.$modelValue !== i && b.$$writeModelToScope())
                        })
                    }
                }, this.$$runValidators = function(t, e, r) {
                    function i() {
                        var t = b.$$parserName || "parse";
                        return $(h) ? (u(t, null), !0) : (h || (o(b.$validators, function(t, e) {
                            u(e, null)
                        }), o(b.$asyncValidators, function(t, e) {
                            u(e, null)
                        })), u(t, h), h)
                    }

                    function a() {
                        var n = !0;
                        return o(b.$validators, function(r, i) {
                            var o = r(t, e);
                            n = n && o, u(i, o)
                        }), n ? !0 : (o(b.$asyncValidators, function(t, e) {
                            u(e, null)
                        }), !1)
                    }

                    function s() {
                        var r = [],
                            i = !0;
                        o(b.$asyncValidators, function(o, a) {
                            var s = o(t, e);
                            if (!P(s)) throw ra("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                            u(a, n), r.push(s.then(function() {
                                u(a, !0)
                            }, function(t) {
                                i = !1, u(a, !1)
                            }))
                        }), r.length ? l.all(r).then(function() {
                            c(i)
                        }, g) : c(!0)
                    }

                    function u(t, e) {
                        f === w && b.$setValidity(t, e)
                    }

                    function c(t) {
                        f === w && r(t)
                    }
                    w++;
                    var f = w;
                    return i() && a() ? void s() : void c(!1)
                }, this.$commitViewValue = function() {
                    var t = b.$viewValue;
                    u.cancel(y), (b.$$lastCommittedViewValue !== t || "" === t && b.$$hasNativeValidators) && (b.$$lastCommittedViewValue = t, b.$pristine && this.$setDirty(), this.$$parseAndValidate())
                }, this.$$parseAndValidate = function() {
                    function e() {
                        b.$modelValue !== a && b.$$writeModelToScope()
                    }
                    var r = b.$$lastCommittedViewValue,
                        i = r;
                    if (h = $(i) ? n : !0)
                        for (var o = 0; o < b.$parsers.length; o++)
                            if (i = b.$parsers[o](i), $(i)) {
                                h = !1;
                                break
                            }
                    C(b.$modelValue) && isNaN(b.$modelValue) && (b.$modelValue = v(t));
                    var a = b.$modelValue,
                        s = b.$options && b.$options.allowInvalid;
                    b.$$rawModelValue = i, s && (b.$modelValue = i, e()), b.$$runValidators(i, b.$$lastCommittedViewValue, function(t) {
                        s || (b.$modelValue = t ? i : n, e())
                    })
                }, this.$$writeModelToScope = function() {
                    m(t, b.$modelValue), o(b.$viewChangeListeners, function(t) {
                        try {
                            t()
                        } catch (n) {
                            e(n)
                        }
                    })
                }, this.$setViewValue = function(t, e) {
                    b.$viewValue = t, (!b.$options || b.$options.updateOnDefault) && b.$$debounceViewValueCommit(e)
                }, this.$$debounceViewValueCommit = function(e) {
                    var n, r = 0,
                        i = b.$options;
                    i && x(i.debounce) && (n = i.debounce, C(n) ? r = n : C(n[e]) ? r = n[e] : C(n["default"]) && (r = n["default"])), u.cancel(y), r ? y = u(function() {
                        b.$commitViewValue()
                    }, r) : c.$$phase ? b.$commitViewValue() : t.$apply(function() {
                        b.$commitViewValue()
                    })
                }, t.$watch(function() {
                    var e = v(t);
                    if (e !== b.$modelValue && (b.$modelValue === b.$modelValue || e === e)) {
                        b.$modelValue = b.$$rawModelValue = e, h = n;
                        for (var r = b.$formatters, i = r.length, o = e; i--;) o = r[i](o);
                        b.$viewValue !== o && (b.$viewValue = b.$$lastCommittedViewValue = o, b.$render(), b.$$runValidators(e, o, g))
                    }
                    return e
                })
            }],
            oa = ["$rootScope", function(t) {
                return {
                    restrict: "A",
                    require: ["ngModel", "^?form", "^?ngModelOptions"],
                    controller: ia,
                    priority: 1,
                    compile: function(e) {
                        return e.addClass(Qo).addClass(ta).addClass(Ko), {
                            pre: function(t, e, n, r) {
                                var i = r[0],
                                    o = r[1] || i.$$parentForm;
                                i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function(t) {
                                    i.$name !== t && i.$$parentForm.$$renameControl(i, t)
                                }), t.$on("$destroy", function() {
                                    i.$$parentForm.$removeControl(i)
                                })
                            },
                            post: function(e, n, r, i) {
                                var o = i[0];
                                o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(t) {
                                    o.$$debounceViewValueCommit(t && t.type)
                                }), n.on("blur", function(n) {
                                    o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
                                })
                            }
                        }
                    }
                }
            }],
            aa = /(\s+|^)default(\s+|$)/,
            sa = function() {
                return {
                    restrict: "A",
                    controller: ["$scope", "$attrs", function(t, e) {
                        var n = this;
                        this.$options = V(t.$eval(e.ngModelOptions)), x(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Vr(this.$options.updateOn.replace(aa, function() {
                            return n.$options.updateOnDefault = !0, " "
                        }))) : this.$options.updateOnDefault = !0
                    }]
                }
            },
            ua = Zn({
                terminal: !0,
                priority: 1e3
            }),
            ca = r("ngOptions"),
            la = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            fa = ["$compile", "$parse", function(t, n) {
                function r(t, e, r) {
                    function o(t, e, n, r, i) {
                        this.selectValue = t, this.viewValue = e, this.label = n, this.group = r, this.disabled = i
                    }

                    function a(t) {
                        var e;
                        if (!c && i(t)) e = t;
                        else {
                            e = [];
                            for (var n in t) t.hasOwnProperty(n) && "$" !== n.charAt(0) && e.push(n)
                        }
                        return e
                    }
                    var s = t.match(la);
                    if (!s) throw ca("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", t, Q(e));
                    var u = s[5] || s[7],
                        c = s[6],
                        l = / as /.test(s[0]) && s[1],
                        f = s[9],
                        h = n(s[2] ? s[1] : u),
                        p = l && n(l),
                        d = p || h,
                        g = f && n(f),
                        v = f ? function(t, e) {
                            return g(r, e)
                        } : function(t) {
                            return Xt(t)
                        },
                        m = function(t, e) {
                            return v(t, S(t, e))
                        },
                        y = n(s[2] || s[1]),
                        $ = n(s[3] || ""),
                        x = n(s[4] || ""),
                        b = n(s[8]),
                        w = {},
                        S = c ? function(t, e) {
                            return w[c] = e, w[u] = t, w
                        } : function(t) {
                            return w[u] = t, w
                        };
                    return {
                        trackBy: f,
                        getTrackByValue: m,
                        getWatchables: n(b, function(t) {
                            var e = [];
                            t = t || [];
                            for (var n = a(t), i = n.length, o = 0; i > o; o++) {
                                var u = t === n ? o : n[o],
                                    c = (t[u], S(t[u], u)),
                                    l = v(t[u], c);
                                if (e.push(l), s[2] || s[1]) {
                                    var f = y(r, c);
                                    e.push(f)
                                }
                                if (s[4]) {
                                    var h = x(r, c);
                                    e.push(h)
                                }
                            }
                            return e
                        }),
                        getOptions: function() {
                            for (var t = [], e = {}, n = b(r) || [], i = a(n), s = i.length, u = 0; s > u; u++) {
                                var c = n === i ? u : i[u],
                                    l = n[c],
                                    h = S(l, c),
                                    p = d(r, h),
                                    g = v(p, h),
                                    w = y(r, h),
                                    C = $(r, h),
                                    E = x(r, h),
                                    k = new o(g, p, w, C, E);
                                t.push(k), e[g] = k
                            }
                            return {
                                items: t,
                                selectValueMap: e,
                                getOptionFromViewValue: function(t) {
                                    return e[m(t)]
                                },
                                getViewValueFromOption: function(t) {
                                    return f ? Dr.copy(t.viewValue) : t.viewValue
                                }
                            }
                        }
                    }
                }
                var a = e.createElement("option"),
                    s = e.createElement("optgroup");
                return {
                    restrict: "A",
                    terminal: !0,
                    require: ["select", "?ngModel"],
                    link: function(e, n, i, u) {
                        function c(t, e) {
                            t.element = e, e.disabled = t.disabled, t.label !== e.label && (e.label = t.label, e.textContent = t.label), t.value !== e.value && (e.value = t.selectValue)
                        }

                        function l(t, e, n, r) {
                            var i;
                            return e && xr(e.nodeName) === n ? i = e : (i = r.cloneNode(!1), e ? t.insertBefore(i, e) : t.appendChild(i)), i
                        }

                        function f(t) {
                            for (var e; t;) e = t.nextSibling, Ht(t), t = e
                        }

                        function h(t) {
                            var e = g && g[0],
                                n = w && w[0];
                            if (e || n)
                                for (; t && (t === e || t === n || e && e.nodeType === Kr);) t = t.nextSibling;
                            return t
                        }

                        function p() {
                            var t = S && v.readValue();
                            S = C.getOptions();
                            var e = {},
                                r = n[0].firstChild;
                            if (b && n.prepend(g), r = h(r), S.items.forEach(function(t) {
                                    var i, o, u;
                                    t.group ? (i = e[t.group], i || (o = l(n[0], r, "optgroup", s), r = o.nextSibling, o.label = t.group, i = e[t.group] = {
                                        groupElement: o,
                                        currentOptionElement: o.firstChild
                                    }), u = l(i.groupElement, i.currentOptionElement, "option", a), c(t, u), i.currentOptionElement = u.nextSibling) : (u = l(n[0], r, "option", a), c(t, u), r = u.nextSibling)
                                }), Object.keys(e).forEach(function(t) {
                                    f(e[t].currentOptionElement)
                                }), f(r), d.$render(), !d.$isEmpty(t)) {
                                var i = v.readValue();
                                (C.trackBy ? H(t, i) : t === i) || (d.$setViewValue(i), d.$render())
                            }
                        }
                        var d = u[1];
                        if (d) {
                            for (var g, v = u[0], m = i.multiple, y = 0, $ = n.children(), x = $.length; x > y; y++)
                                if ("" === $[y].value) {
                                    g = $.eq(y);
                                    break
                                }
                            var b = !!g,
                                w = kr(a.cloneNode(!1));
                            w.val("?");
                            var S, C = r(i.ngOptions, n, e),
                                E = function() {
                                    b || n.prepend(g), n.val(""), g.prop("selected", !0), g.attr("selected", !0)
                                },
                                k = function() {
                                    b || g.remove()
                                },
                                A = function() {
                                    n.prepend(w), n.val("?"), w.prop("selected", !0), w.attr("selected", !0)
                                },
                                _ = function() {
                                    w.remove()
                                };
                            m ? (d.$isEmpty = function(t) {
                                return !t || 0 === t.length
                            }, v.writeValue = function(t) {
                                S.items.forEach(function(t) {
                                    t.element.selected = !1
                                }), t && t.forEach(function(t) {
                                    var e = S.getOptionFromViewValue(t);
                                    e && !e.disabled && (e.element.selected = !0)
                                })
                            }, v.readValue = function() {
                                var t = n.val() || [],
                                    e = [];
                                return o(t, function(t) {
                                    var n = S.selectValueMap[t];
                                    n && !n.disabled && e.push(S.getViewValueFromOption(n))
                                }), e
                            }, C.trackBy && e.$watchCollection(function() {
                                return Ir(d.$viewValue) ? d.$viewValue.map(function(t) {
                                    return C.getTrackByValue(t)
                                }) : void 0
                            }, function() {
                                d.$render()
                            })) : (v.writeValue = function(t) {
                                var e = S.getOptionFromViewValue(t);
                                e && !e.disabled ? n[0].value !== e.selectValue && (_(), k(), n[0].value = e.selectValue, e.element.selected = !0, e.element.setAttribute("selected", "selected")) : null === t || b ? (_(), E()) : (k(), A())
                            }, v.readValue = function() {
                                var t = S.selectValueMap[n.val()];
                                return t && !t.disabled ? (k(), _(), S.getViewValueFromOption(t)) : null
                            }, C.trackBy && e.$watch(function() {
                                return C.getTrackByValue(d.$viewValue)
                            }, function() {
                                d.$render()
                            })), b ? (g.remove(), t(g)(e), g.removeClass("ng-scope")) : g = kr(a.cloneNode(!1)), p(), e.$watchCollection(C.getWatchables, p)
                        }
                    }
                }
            }],
            ha = ["$locale", "$interpolate", "$log", function(t, e, n) {
                var r = /{}/g,
                    i = /^when(Minus)?(.+)$/;
                return {
                    link: function(a, s, u) {
                        function c(t) {
                            s.text(t || "")
                        }
                        var l, f = u.count,
                            h = u.$attr.when && s.attr(u.$attr.when),
                            p = u.offset || 0,
                            d = a.$eval(h) || {},
                            v = {},
                            m = e.startSymbol(),
                            y = e.endSymbol(),
                            x = m + f + "-" + p + y,
                            b = Dr.noop;
                        o(u, function(t, e) {
                            var n = i.exec(e);
                            if (n) {
                                var r = (n[1] ? "-" : "") + xr(n[2]);
                                d[r] = s.attr(u.$attr[e])
                            }
                        }), o(d, function(t, n) {
                            v[n] = e(t.replace(r, x))
                        }), a.$watch(f, function(e) {
                            var r = parseFloat(e),
                                i = isNaN(r);
                            if (i || r in d || (r = t.pluralCat(r - p)), r !== l && !(i && C(l) && isNaN(l))) {
                                b();
                                var o = v[r];
                                $(o) ? (null != e && n.debug("ngPluralize: no rule defined for '" + r + "' in " + h), b = g, c()) : b = a.$watch(o, c), l = r
                            }
                        })
                    }
                }
            }],
            pa = ["$parse", "$animate", function(t, a) {
                var s = "$$NG_REMOVED",
                    u = r("ngRepeat"),
                    c = function(t, e, n, r, i, o, a) {
                        t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
                    },
                    l = function(t) {
                        return t.clone[0]
                    },
                    f = function(t) {
                        return t.clone[t.clone.length - 1]
                    };
                return {
                    restrict: "A",
                    multiElement: !0,
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    compile: function(r, h) {
                        var p = h.ngRepeat,
                            d = e.createComment(" end ngRepeat: " + p + " "),
                            g = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                        if (!g) throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
                        var v = g[1],
                            m = g[2],
                            y = g[3],
                            $ = g[4];
                        if (g = v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !g) throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
                        var x = g[3] || g[1],
                            b = g[2];
                        if (y && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(y) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(y))) throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", y);
                        var w, S, C, E, k = {
                            $id: Xt
                        };
                        return $ ? w = t($) : (C = function(t, e) {
                                return Xt(e)
                            }, E = function(t) {
                                return t
                            }),
                            function(t, e, r, h, g) {
                                w && (S = function(e, n, r) {
                                    return b && (k[b] = e), k[x] = n, k.$index = r, w(t, k)
                                });
                                var v = vt();
                                t.$watchCollection(m, function(r) {
                                    var h, m, $, w, k, A, _, T, N, j, O, M, P = e[0],
                                        D = vt();
                                    if (y && (t[y] = r), i(r)) N = r, T = S || C;
                                    else {
                                        T = S || E, N = [];
                                        for (var F in r) br.call(r, F) && "$" !== F.charAt(0) && N.push(F)
                                    }
                                    for (w = N.length, O = new Array(w), h = 0; w > h; h++)
                                        if (k = r === N ? h : N[h], A = r[k], _ = T(k, A, h), v[_]) j = v[_], delete v[_], D[_] = j, O[h] = j;
                                        else {
                                            if (D[_]) throw o(O, function(t) {
                                                t && t.scope && (v[t.id] = t)
                                            }), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, _, A);
                                            O[h] = {
                                                id: _,
                                                scope: n,
                                                clone: n
                                            }, D[_] = !0
                                        }
                                    for (var L in v) {
                                        if (j = v[L], M = gt(j.clone), a.leave(M), M[0].parentNode)
                                            for (h = 0, m = M.length; m > h; h++) M[h][s] = !0;
                                        j.scope.$destroy()
                                    }
                                    for (h = 0; w > h; h++)
                                        if (k = r === N ? h : N[h], A = r[k], j = O[h], j.scope) {
                                            $ = P;
                                            do $ = $.nextSibling; while ($ && $[s]);
                                            l(j) != $ && a.move(gt(j.clone), null, kr(P)), P = f(j), c(j.scope, h, x, A, b, k, w)
                                        } else g(function(t, e) {
                                            j.scope = e;
                                            var n = d.cloneNode(!1);
                                            t[t.length++] = n, a.enter(t, null, kr(P)), P = n, j.clone = t, D[j.id] = j, c(j.scope, h, x, A, b, k, w)
                                        });
                                    v = D
                                })
                            }
                    }
                }
            }],
            da = "ng-hide",
            ga = "ng-hide-animate",
            va = ["$animate", function(t) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(e, n, r) {
                        e.$watch(r.ngShow, function(e) {
                            t[e ? "removeClass" : "addClass"](n, da, {
                                tempClasses: ga
                            })
                        })
                    }
                }
            }],
            ma = ["$animate", function(t) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(e, n, r) {
                        e.$watch(r.ngHide, function(e) {
                            t[e ? "addClass" : "removeClass"](n, da, {
                                tempClasses: ga
                            })
                        })
                    }
                }
            }],
            ya = Zn(function(t, e, n) {
                t.$watch(n.ngStyle, function(t, n) {
                    n && t !== n && o(n, function(t, n) {
                        e.css(n, "")
                    }), t && e.css(t)
                }, !0)
            }),
            $a = ["$animate", function(t) {
                return {
                    require: "ngSwitch",
                    controller: ["$scope", function() {
                        this.cases = {}
                    }],
                    link: function(n, r, i, a) {
                        var s = i.ngSwitch || i.on,
                            u = [],
                            c = [],
                            l = [],
                            f = [],
                            h = function(t, e) {
                                return function() {
                                    t.splice(e, 1)
                                }
                            };
                        n.$watch(s, function(n) {
                            var r, i;
                            for (r = 0, i = l.length; i > r; ++r) t.cancel(l[r]);
                            for (l.length = 0, r = 0, i = f.length; i > r; ++r) {
                                var s = gt(c[r].clone);
                                f[r].$destroy();
                                var p = l[r] = t.leave(s);
                                p.then(h(l, r))
                            }
                            c.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && o(u, function(n) {
                                n.transclude(function(r, i) {
                                    f.push(i);
                                    var o = n.element;
                                    r[r.length++] = e.createComment(" end ngSwitchWhen: ");
                                    var a = {
                                        clone: r
                                    };
                                    c.push(a), t.enter(r, o.parent(), o)
                                })
                            })
                        })
                    }
                }
            }],
            xa = Zn({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(t, e, n, r, i) {
                    r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                        transclude: i,
                        element: e
                    })
                }
            }),
            ba = Zn({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(t, e, n, r, i) {
                    r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                        transclude: i,
                        element: e
                    })
                }
            }),
            wa = Zn({
                restrict: "EAC",
                link: function(t, e, n, i, o) {
                    if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Q(e));
                    o(function(t) {
                        e.empty(), e.append(t)
                    })
                }
            }),
            Sa = ["$templateCache", function(t) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(e, n) {
                        if ("text/ng-template" == n.type) {
                            var r = n.id,
                                i = e[0].text;
                            t.put(r, i)
                        }
                    }
                }
            }],
            Ca = {
                $setViewValue: g,
                $render: g
            },
            Ea = ["$element", "$scope", "$attrs", function(t, r, i) {
                var o = this,
                    a = new Yt;
                o.ngModelCtrl = Ca, o.unknownOption = kr(e.createElement("option")), o.renderUnknownOption = function(e) {
                    var n = "? " + Xt(e) + " ?";
                    o.unknownOption.val(n), t.prepend(o.unknownOption), t.val(n)
                }, r.$on("$destroy", function() {
                    o.renderUnknownOption = g
                }), o.removeUnknownOption = function() {
                    o.unknownOption.parent() && o.unknownOption.remove()
                }, o.readValue = function() {
                    return o.removeUnknownOption(), t.val()
                }, o.writeValue = function(e) {
                    o.hasOption(e) ? (o.removeUnknownOption(), t.val(e), "" === e && o.emptyOption.prop("selected", !0)) : null == e && o.emptyOption ? (o.removeUnknownOption(), t.val("")) : o.renderUnknownOption(e)
                }, o.addOption = function(t, e) {
                    pt(t, '"option value"'), "" === t && (o.emptyOption = e);
                    var n = a.get(t) || 0;
                    a.put(t, n + 1)
                }, o.removeOption = function(t) {
                    var e = a.get(t);
                    e && (1 === e ? (a.remove(t), "" === t && (o.emptyOption = n)) : a.put(t, e - 1))
                }, o.hasOption = function(t) {
                    return !!a.get(t)
                }
            }],
            ka = function() {
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: Ea,
                    link: function(t, e, n, r) {
                        var i = r[1];
                        if (i) {
                            var a = r[0];
                            if (a.ngModelCtrl = i, i.$render = function() {
                                    a.writeValue(i.$viewValue)
                                }, e.on("change", function() {
                                    t.$apply(function() {
                                        i.$setViewValue(a.readValue())
                                    })
                                }), n.multiple) {
                                a.readValue = function() {
                                    var t = [];
                                    return o(e.find("option"), function(e) {
                                        e.selected && t.push(e.value)
                                    }), t
                                }, a.writeValue = function(t) {
                                    var n = new Yt(t);
                                    o(e.find("option"), function(t) {
                                        t.selected = x(n.get(t.value))
                                    })
                                };
                                var s, u = NaN;
                                t.$watch(function() {
                                    u !== i.$viewValue || H(s, i.$viewValue) || (s = q(i.$viewValue), i.$render()), u = i.$viewValue
                                }), i.$isEmpty = function(t) {
                                    return !t || 0 === t.length
                                }
                            }
                        }
                    }
                }
            },
            Aa = ["$interpolate", function(t) {
                function e(t) {
                    t[0].hasAttribute("selected") && (t[0].selected = !0)
                }
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(n, r) {
                        if (x(r.value)) var i = t(r.value, !0);
                        else {
                            var o = t(n.text(), !0);
                            o || r.$set("value", n.text())
                        }
                        return function(t, n, r) {
                            function a(t) {
                                c.addOption(t, n), c.ngModelCtrl.$render(), e(n)
                            }
                            var s = "$selectController",
                                u = n.parent(),
                                c = u.data(s) || u.parent().data(s);
                            if (c && c.ngModelCtrl) {
                                if (i) {
                                    var l;
                                    r.$observe("value", function(t) {
                                        x(l) && c.removeOption(l), l = t, a(t)
                                    })
                                } else o ? t.$watch(o, function(t, e) {
                                    r.$set("value", t), e !== t && c.removeOption(e),
                                        a(t)
                                }) : a(r.value);
                                n.on("$destroy", function() {
                                    c.removeOption(r.value), c.ngModelCtrl.$render()
                                })
                            }
                        }
                    }
                }
            }],
            _a = m({
                restrict: "E",
                terminal: !1
            }),
            Ta = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(t, e, n, r) {
                        r && (n.required = !0, r.$validators.required = function(t, e) {
                            return !n.required || !r.$isEmpty(e)
                        }, n.$observe("required", function() {
                            r.$validate()
                        }))
                    }
                }
            },
            Na = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(t, e, i, o) {
                        if (o) {
                            var a, s = i.ngPattern || i.pattern;
                            i.$observe("pattern", function(t) {
                                if (S(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, t, Q(e));
                                a = t || n, o.$validate()
                            }), o.$validators.pattern = function(t, e) {
                                return o.$isEmpty(e) || $(a) || a.test(e)
                            }
                        }
                    }
                }
            },
            ja = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(t, e, n, r) {
                        if (r) {
                            var i = -1;
                            n.$observe("maxlength", function(t) {
                                var e = p(t);
                                i = isNaN(e) ? -1 : e, r.$validate()
                            }), r.$validators.maxlength = function(t, e) {
                                return 0 > i || r.$isEmpty(e) || e.length <= i
                            }
                        }
                    }
                }
            },
            Oa = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(t, e, n, r) {
                        if (r) {
                            var i = 0;
                            n.$observe("minlength", function(t) {
                                i = p(t) || 0, r.$validate()
                            }), r.$validators.minlength = function(t, e) {
                                return r.$isEmpty(e) || e.length >= i
                            }
                        }
                    }
                }
            };
        t.angular.bootstrap || (lt(), xt(Dr), Dr.module("ngLocale", [], ["$provide", function(t) {
            function e(t) {
                t += "";
                var e = t.indexOf(".");
                return -1 == e ? 0 : t.length - e - 1
            }

            function r(t, r) {
                var i = r;
                n === i && (i = Math.min(e(t), 3));
                var o = Math.pow(10, i),
                    a = (t * o | 0) % o;
                return {
                    v: i,
                    f: a
                }
            }
            var i = {
                ZERO: "zero",
                ONE: "one",
                TWO: "two",
                FEW: "few",
                MANY: "many",
                OTHER: "other"
            };
            t.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: ["AM", "PM"],
                    DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"],
                    FIRSTDAYOFWEEK: 6,
                    MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    WEEKENDRANGE: [5, 6],
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    medium: "MMM d, y h:mm:ss a",
                    mediumDate: "MMM d, y",
                    mediumTime: "h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    shortDate: "M/d/yy",
                    shortTime: "h:mm a"
                },
                NUMBER_FORMATS: {
                    CURRENCY_SYM: "$",
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: "-¤",
                        negSuf: "",
                        posPre: "¤",
                        posSuf: ""
                    }]
                },
                id: "en-us",
                pluralCat: function(t, e) {
                    var n = 0 | t,
                        o = r(t, e);
                    return 1 == n && 0 == o.v ? i.ONE : i.OTHER
                }
            })
        }]), kr(e).ready(function() {
            ot(e, at)
        }))
    }(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.SVG = e()
    }(this, function(t, e, n) {
        function r(t) {
            return t.toLowerCase().replace(/-(.)/g, function(t, e) {
                return e.toUpperCase()
            })
        }

        function i(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        function o(t) {
            return 4 == t.length ? ["#", t.substring(1, 2), t.substring(1, 2), t.substring(2, 3), t.substring(2, 3), t.substring(3, 4), t.substring(3, 4)].join("") : t
        }

        function a(t) {
            var e = t.toString(16);
            return 1 == e.length ? "0" + e : e
        }

        function s(t, e, n) {
            return null == n ? n = t.height / t.width * e : null == e && (e = t.width / t.height * n), {
                width: e,
                height: n
            }
        }

        function u(t, e, n) {
            return {
                x: e * t.a + n * t.c + 0,
                y: e * t.b + n * t.d + 0
            }
        }

        function c(t) {
            return {
                a: t[0],
                b: t[1],
                c: t[2],
                d: t[3],
                e: t[4],
                f: t[5]
            }
        }

        function l(t) {
            return t instanceof y.Matrix || (t = new y.Matrix(t)), t
        }

        function f(t, e) {
            t.cx = null == t.cx ? e.bbox().cx : t.cx, t.cy = null == t.cy ? e.bbox().cy : t.cy
        }

        function h(t) {
            return t = t.replace(y.regex.whitespace, "").replace(y.regex.matrix, "").split(y.regex.matrixElements), c(y.utils.map(t, function(t) {
                return parseFloat(t)
            }))
        }

        function p(t, e) {
            return "number" == typeof t.from ? t.from + (t.to - t.from) * e : t instanceof y.Color || t instanceof y.Number || t instanceof y.Matrix ? t.at(e) : 1 > e ? t.from : t.to
        }

        function d(t) {
            for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e][0], null != t[e][1] && (r += t[e][1], null != t[e][2] && (r += " ", r += t[e][2], null != t[e][3] && (r += " ", r += t[e][3], r += " ", r += t[e][4], null != t[e][5] && (r += " ", r += t[e][5], r += " ", r += t[e][6], null != t[e][7] && (r += " ", r += t[e][7])))));
            return r + " "
        }

        function g(t) {
            for (var e = t.childNodes.length - 1; e >= 0; e--) t.childNodes[e] instanceof SVGElement && g(t.childNodes[e]);
            return y.adopt(t).id(y.eid(t.nodeName))
        }

        function v(t) {
            return null == t.x && (t.x = 0, t.y = 0, t.width = 0, t.height = 0), t.w = t.width, t.h = t.height, t.x2 = t.x + t.width, t.y2 = t.y + t.height, t.cx = t.x + t.width / 2, t.cy = t.y + t.height / 2, t
        }

        function m(t) {
            var e = t.toString().match(y.regex.reference);
            return e ? e[1] : void 0
        }
        var y = this.SVG = function(t) {
            return y.supported ? (t = new y.Doc(t), y.parser || y.prepare(t), t) : void 0
        };
        if (y.ns = "http://www.w3.org/2000/svg", y.xmlns = "http://www.w3.org/2000/xmlns/", y.xlink = "http://www.w3.org/1999/xlink", y.supported = function() {
                return !!document.createElementNS && !!document.createElementNS(y.ns, "svg").createSVGRect
            }(), !y.supported) return !1;
        y.did = 1e3, y.eid = function(t) {
            return "Svgjs" + i(t) + y.did++
        }, y.create = function(t) {
            var e = document.createElementNS(this.ns, t);
            return e.setAttribute("id", this.eid(t)), e
        }, y.extend = function() {
            var t, e, n, r;
            for (t = [].slice.call(arguments), e = t.pop(), r = t.length - 1; r >= 0; r--)
                if (t[r])
                    for (n in e) t[r].prototype[n] = e[n];
            y.Set && y.Set.inherit && y.Set.inherit()
        }, y.invent = function(t) {
            var e = "function" == typeof t.create ? t.create : function() {
                this.constructor.call(this, y.create(t.create))
            };
            return t.inherit && (e.prototype = new t.inherit), t.extend && y.extend(e, t.extend), t.construct && y.extend(t.parent || y.Container, t.construct), e
        }, y.adopt = function(t) {
            if (t.instance) return t.instance;
            var e;
            return e = "svg" == t.nodeName ? t.parentNode instanceof SVGElement ? new y.Nested : new y.Doc : "linearGradient" == t.nodeName ? new y.Gradient("linear") : "radialGradient" == t.nodeName ? new y.Gradient("radial") : y[i(t.nodeName)] ? new(y[i(t.nodeName)]) : new y.Element(t), e.type = t.nodeName, e.node = t, t.instance = e, e instanceof y.Doc && e.namespace().defs(), e
        }, y.prepare = function(t) {
            var e = document.getElementsByTagName("body")[0],
                n = (e ? new y.Doc(e) : t.nested()).size(2, 0),
                r = y.create("path");
            n.node.appendChild(r), y.parser = {
                body: e || t.parent(),
                draw: n.style("opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"),
                poly: n.polyline().node,
                path: r
            }
        }, y.regex = {
            unit: /^(-?[\d\.]+)([a-z%]{0,2})$/,
            hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
            rgb: /rgb\((\d+),(\d+),(\d+)\)/,
            reference: /#([a-z0-9\-_]+)/i,
            matrix: /matrix\(|\)/g,
            matrixElements: /,*\s+|,/,
            whitespace: /\s/g,
            isHex: /^#[a-f0-9]{3,6}$/i,
            isRgb: /^rgb\(/,
            isCss: /[^:]+:[^;]+;?/,
            isBlank: /^(\s+)?$/,
            isNumber: /^-?[\d\.]+$/,
            isPercent: /^-?[\d\.]+%$/,
            isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i
        }, y.utils = {
            map: function(t, e) {
                var n, r = t.length,
                    i = [];
                for (n = 0; r > n; n++) i.push(e(t[n]));
                return i
            },
            radians: function(t) {
                return t % 360 * Math.PI / 180
            },
            degrees: function(t) {
                return 180 * t / Math.PI % 360
            },
            filterSVGElements: function(t) {
                return [].filter.call(t, function(t) {
                    return t instanceof SVGElement
                })
            }
        }, y.defaults = {
            attrs: {
                "fill-opacity": 1,
                "stroke-opacity": 1,
                "stroke-width": 0,
                "stroke-linejoin": "miter",
                "stroke-linecap": "butt",
                fill: "#000000",
                stroke: "#000000",
                opacity: 1,
                x: 0,
                y: 0,
                cx: 0,
                cy: 0,
                width: 0,
                height: 0,
                r: 0,
                rx: 0,
                ry: 0,
                offset: 0,
                "stop-opacity": 1,
                "stop-color": "#000000",
                "font-size": 16,
                "font-family": "Helvetica, Arial, sans-serif",
                "text-anchor": "start"
            }
        }, y.Color = function(t) {
            var e;
            this.r = 0, this.g = 0, this.b = 0, "string" == typeof t ? y.regex.isRgb.test(t) ? (e = y.regex.rgb.exec(t.replace(/\s/g, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[3])) : y.regex.isHex.test(t) && (e = y.regex.hex.exec(o(t)), this.r = parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" == typeof t && (this.r = t.r, this.g = t.g, this.b = t.b)
        }, y.extend(y.Color, {
            toString: function() {
                return this.toHex()
            },
            toHex: function() {
                return "#" + a(this.r) + a(this.g) + a(this.b)
            },
            toRgb: function() {
                return "rgb(" + [this.r, this.g, this.b].join() + ")"
            },
            brightness: function() {
                return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11
            },
            morph: function(t) {
                return this.destination = new y.Color(t), this
            },
            at: function(t) {
                return this.destination ? (t = 0 > t ? 0 : t > 1 ? 1 : t, new y.Color({
                    r: ~~(this.r + (this.destination.r - this.r) * t),
                    g: ~~(this.g + (this.destination.g - this.g) * t),
                    b: ~~(this.b + (this.destination.b - this.b) * t)
                })) : this
            }
        }), y.Color.test = function(t) {
            return t += "", y.regex.isHex.test(t) || y.regex.isRgb.test(t)
        }, y.Color.isRgb = function(t) {
            return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b
        }, y.Color.isColor = function(t) {
            return y.Color.isRgb(t) || y.Color.test(t)
        }, y.Array = function(t, e) {
            t = (t || []).valueOf(), 0 == t.length && e && (t = e.valueOf()), this.value = this.parse(t)
        }, y.extend(y.Array, {
            morph: function(t) {
                if (this.destination = this.parse(t), this.value.length != this.destination.length) {
                    for (var e = this.value[this.value.length - 1], n = this.destination[this.destination.length - 1]; this.value.length > this.destination.length;) this.destination.push(n);
                    for (; this.value.length < this.destination.length;) this.value.push(e)
                }
                return this
            },
            settle: function() {
                for (var t = 0, e = this.value.length, n = []; e > t; t++) - 1 == n.indexOf(this.value[t]) && n.push(this.value[t]);
                return this.value = n
            },
            at: function(t) {
                if (!this.destination) return this;
                for (var e = 0, n = this.value.length, r = []; n > e; e++) r.push(this.value[e] + (this.destination[e] - this.value[e]) * t);
                return new y.Array(r)
            },
            toString: function() {
                return this.value.join(" ")
            },
            valueOf: function() {
                return this.value
            },
            parse: function(t) {
                return t = t.valueOf(), Array.isArray(t) ? t : this.split(t)
            },
            split: function(t) {
                return t.trim().split(/\s+/)
            },
            reverse: function() {
                return this.value.reverse(), this
            }
        }), y.PointArray = function(t, e) {
            this.constructor.call(this, t, e || [
                [0, 0]
            ])
        }, y.PointArray.prototype = new y.Array, y.extend(y.PointArray, {
            toString: function() {
                for (var t = 0, e = this.value.length, n = []; e > t; t++) n.push(this.value[t].join(","));
                return n.join(" ")
            },
            toLine: function() {
                return {
                    x1: this.value[0][0],
                    y1: this.value[0][1],
                    x2: this.value[1][0],
                    y2: this.value[1][1]
                }
            },
            at: function(t) {
                if (!this.destination) return this;
                for (var e = 0, n = this.value.length, r = []; n > e; e++) r.push([this.value[e][0] + (this.destination[e][0] - this.value[e][0]) * t, this.value[e][1] + (this.destination[e][1] - this.value[e][1]) * t]);
                return new y.PointArray(r)
            },
            parse: function(t) {
                if (t = t.valueOf(), Array.isArray(t)) return t;
                t = this.split(t);
                for (var e, n = 0, r = t.length, i = []; r > n; n++) e = t[n].split(","), i.push([parseFloat(e[0]), parseFloat(e[1])]);
                return i
            },
            move: function(t, e) {
                var n = this.bbox();
                if (t -= n.x, e -= n.y, !isNaN(t) && !isNaN(e))
                    for (var r = this.value.length - 1; r >= 0; r--) this.value[r] = [this.value[r][0] + t, this.value[r][1] + e];
                return this
            },
            size: function(t, e) {
                var n, r = this.bbox();
                for (n = this.value.length - 1; n >= 0; n--) this.value[n][0] = (this.value[n][0] - r.x) * t / r.width + r.x, this.value[n][1] = (this.value[n][1] - r.y) * e / r.height + r.y;
                return this
            },
            bbox: function() {
                return y.parser.poly.setAttribute("points", this.toString()), y.parser.poly.getBBox()
            }
        }), y.PathArray = function(t, e) {
            this.constructor.call(this, t, e || [
                ["M", 0, 0]
            ])
        }, y.PathArray.prototype = new y.Array, y.extend(y.PathArray, {
            toString: function() {
                return d(this.value)
            },
            move: function(t, e) {
                var n = this.bbox();
                if (t -= n.x, e -= n.y, !isNaN(t) && !isNaN(e))
                    for (var r, i = this.value.length - 1; i >= 0; i--) r = this.value[i][0], "M" == r || "L" == r || "T" == r ? (this.value[i][1] += t, this.value[i][2] += e) : "H" == r ? this.value[i][1] += t : "V" == r ? this.value[i][1] += e : "C" == r || "S" == r || "Q" == r ? (this.value[i][1] += t, this.value[i][2] += e, this.value[i][3] += t, this.value[i][4] += e, "C" == r && (this.value[i][5] += t, this.value[i][6] += e)) : "A" == r && (this.value[i][6] += t, this.value[i][7] += e);
                return this
            },
            size: function(t, e) {
                var n, r, i = this.bbox();
                for (n = this.value.length - 1; n >= 0; n--) r = this.value[n][0], "M" == r || "L" == r || "T" == r ? (this.value[n][1] = (this.value[n][1] - i.x) * t / i.width + i.x, this.value[n][2] = (this.value[n][2] - i.y) * e / i.height + i.y) : "H" == r ? this.value[n][1] = (this.value[n][1] - i.x) * t / i.width + i.x : "V" == r ? this.value[n][1] = (this.value[n][1] - i.y) * e / i.height + i.y : "C" == r || "S" == r || "Q" == r ? (this.value[n][1] = (this.value[n][1] - i.x) * t / i.width + i.x, this.value[n][2] = (this.value[n][2] - i.y) * e / i.height + i.y, this.value[n][3] = (this.value[n][3] - i.x) * t / i.width + i.x, this.value[n][4] = (this.value[n][4] - i.y) * e / i.height + i.y, "C" == r && (this.value[n][5] = (this.value[n][5] - i.x) * t / i.width + i.x, this.value[n][6] = (this.value[n][6] - i.y) * e / i.height + i.y)) : "A" == r && (this.value[n][1] = this.value[n][1] * t / i.width, this.value[n][2] = this.value[n][2] * e / i.height, this.value[n][6] = (this.value[n][6] - i.x) * t / i.width + i.x, this.value[n][7] = (this.value[n][7] - i.y) * e / i.height + i.y);
                return this
            },
            parse: function(t) {
                if (t instanceof y.PathArray) return t.valueOf();
                var e, n, r, i, o, a, s, u, c, l, f, h = 0,
                    p = 0;
                for (y.parser.path.setAttribute("d", "string" == typeof t ? t : d(t)), f = y.parser.path.pathSegList, e = 0, n = f.numberOfItems; n > e; ++e) l = f.getItem(e), c = l.pathSegTypeAsLetter, "M" == c || "L" == c || "H" == c || "V" == c || "C" == c || "S" == c || "Q" == c || "T" == c || "A" == c ? ("x" in l && (h = l.x), "y" in l && (p = l.y)) : ("x1" in l && (o = h + l.x1), "x2" in l && (s = h + l.x2), "y1" in l && (a = p + l.y1), "y2" in l && (u = p + l.y2), "x" in l && (h += l.x), "y" in l && (p += l.y), "m" == c ? f.replaceItem(y.parser.path.createSVGPathSegMovetoAbs(h, p), e) : "l" == c ? f.replaceItem(y.parser.path.createSVGPathSegLinetoAbs(h, p), e) : "h" == c ? f.replaceItem(y.parser.path.createSVGPathSegLinetoHorizontalAbs(h), e) : "v" == c ? f.replaceItem(y.parser.path.createSVGPathSegLinetoVerticalAbs(p), e) : "c" == c ? f.replaceItem(y.parser.path.createSVGPathSegCurvetoCubicAbs(h, p, o, a, s, u), e) : "s" == c ? f.replaceItem(y.parser.path.createSVGPathSegCurvetoCubicSmoothAbs(h, p, s, u), e) : "q" == c ? f.replaceItem(y.parser.path.createSVGPathSegCurvetoQuadraticAbs(h, p, o, a), e) : "t" == c ? f.replaceItem(y.parser.path.createSVGPathSegCurvetoQuadraticSmoothAbs(h, p), e) : "a" == c ? f.replaceItem(y.parser.path.createSVGPathSegArcAbs(h, p, l.r1, l.r2, l.angle, l.largeArcFlag, l.sweepFlag), e) : ("z" == c || "Z" == c) && (h = r, p = i)), ("M" == c || "m" == c) && (r = h, i = p);
                for (t = [], f = y.parser.path.pathSegList, e = 0, n = f.numberOfItems; n > e; ++e) l = f.getItem(e), c = l.pathSegTypeAsLetter, h = [c], "M" == c || "L" == c || "T" == c ? h.push(l.x, l.y) : "H" == c ? h.push(l.x) : "V" == c ? h.push(l.y) : "C" == c ? h.push(l.x1, l.y1, l.x2, l.y2, l.x, l.y) : "S" == c ? h.push(l.x2, l.y2, l.x, l.y) : "Q" == c ? h.push(l.x1, l.y1, l.x, l.y) : "A" == c && h.push(l.r1, l.r2, l.angle, 0 | l.largeArcFlag, 0 | l.sweepFlag, l.x, l.y), t.push(h);
                return t
            },
            bbox: function() {
                return y.parser.path.setAttribute("d", this.toString()), y.parser.path.getBBox()
            }
        }), y.Number = y.invent({
            create: function(t, e) {
                this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : 0 > t ? -3.4e38 : 3.4e38 : "string" == typeof t ? (e = t.match(y.regex.unit), e && (this.value = parseFloat(e[1]), "%" == e[2] ? this.value /= 100 : "s" == e[2] && (this.value *= 1e3), this.unit = e[2])) : t instanceof y.Number && (this.value = t.valueOf(), this.unit = t.unit)
            },
            extend: {
                toString: function() {
                    return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit
                },
                valueOf: function() {
                    return this.value
                },
                plus: function(t) {
                    return new y.Number(this + new y.Number(t), this.unit)
                },
                minus: function(t) {
                    return this.plus(-new y.Number(t))
                },
                times: function(t) {
                    return new y.Number(this * new y.Number(t), this.unit)
                },
                divide: function(t) {
                    return new y.Number(this / new y.Number(t), this.unit)
                },
                to: function(t) {
                    var e = new y.Number(this);
                    return "string" == typeof t && (e.unit = t), e
                },
                morph: function(t) {
                    return this.destination = new y.Number(t), this
                },
                at: function(t) {
                    return this.destination ? new y.Number(this.destination).minus(this).times(t).plus(this) : this
                }
            }
        }), y.ViewBox = function(t) {
            var e, n, r, i, o = 1,
                a = 1,
                s = t.bbox(),
                u = (t.attr("viewBox") || "").match(/-?[\d\.]+/g),
                c = t,
                l = t;
            for (r = new y.Number(t.width()), i = new y.Number(t.height());
                "%" == r.unit;) o *= r.value, r = new y.Number(c instanceof y.Doc ? c.parent().offsetWidth : c.parent().width()), c = c.parent();
            for (;
                "%" == i.unit;) a *= i.value, i = new y.Number(l instanceof y.Doc ? l.parent().offsetHeight : l.parent().height()), l = l.parent();
            this.x = s.x, this.y = s.y, this.width = r * o, this.height = i * a, this.zoom = 1, u && (e = parseFloat(u[0]), n = parseFloat(u[1]), r = parseFloat(u[2]), i = parseFloat(u[3]), this.zoom = this.width / this.height > r / i ? this.height / i : this.width / r, this.x = e, this.y = n, this.width = r, this.height = i)
        }, y.extend(y.ViewBox, {
            toString: function() {
                return this.x + " " + this.y + " " + this.width + " " + this.height
            }
        }), y.Element = y.invent({
            create: function(t) {
                this._stroke = y.defaults.attrs.stroke, (this.node = t) && (this.type = t.nodeName, this.node.instance = this, this._stroke = t.getAttribute("stroke") || this._stroke)
            },
            extend: {
                x: function(t) {
                    return this.attr("x", t)
                },
                y: function(t) {
                    return this.attr("y", t)
                },
                cx: function(t) {
                    return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
                },
                cy: function(t) {
                    return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
                },
                move: function(t, e) {
                    return this.x(t).y(e)
                },
                center: function(t, e) {
                    return this.cx(t).cy(e)
                },
                width: function(t) {
                    return this.attr("width", t)
                },
                height: function(t) {
                    return this.attr("height", t)
                },
                size: function(t, e) {
                    var n = s(this.bbox(), t, e);
                    return this.width(new y.Number(n.width)).height(new y.Number(n.height))
                },
                clone: function() {
                    var t = g(this.node.cloneNode(!0));
                    return this.after(t), t
                },
                remove: function() {
                    return this.parent() && this.parent().removeElement(this), this
                },
                replace: function(t) {
                    return this.after(t).remove(), t
                },
                addTo: function(t) {
                    return t.put(this)
                },
                putIn: function(t) {
                    return t.add(this)
                },
                id: function(t) {
                    return this.attr("id", t)
                },
                inside: function(t, e) {
                    var n = this.bbox();
                    return t > n.x && e > n.y && t < n.x + n.width && e < n.y + n.height
                },
                show: function() {
                    return this.style("display", "")
                },
                hide: function() {
                    return this.style("display", "none")
                },
                visible: function() {
                    return "none" != this.style("display")
                },
                toString: function() {
                    return this.attr("id")
                },
                classes: function() {
                    var t = this.attr("class");
                    return null == t ? [] : t.trim().split(/\s+/)
                },
                hasClass: function(t) {
                    return -1 != this.classes().indexOf(t)
                },
                addClass: function(t) {
                    if (!this.hasClass(t)) {
                        var e = this.classes();
                        e.push(t), this.attr("class", e.join(" "))
                    }
                    return this
                },
                removeClass: function(t) {
                    return this.hasClass(t) && this.attr("class", this.classes().filter(function(e) {
                        return e != t
                    }).join(" ")), this
                },
                toggleClass: function(t) {
                    return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
                },
                reference: function(t) {
                    return y.get(this.attr(t))
                },
                parent: function(t) {
                    if (this.node.parentNode) {
                        var e = y.adopt(this.node.parentNode);
                        if (t)
                            for (; !(e instanceof t) && e.node.parentNode instanceof SVGElement;) e = y.adopt(e.node.parentNode);
                        return e
                    }
                },
                doc: function(t) {
                    return this instanceof y.Doc ? this : this.parent(y.Doc)
                },
                "native": function() {
                    return this.node
                },
                svg: function(t) {
                    var e = document.createElement("svg");
                    if (!(t && this instanceof y.Parent)) return e.appendChild(t = document.createElement("svg")), t.appendChild(this.node.cloneNode(!0)), e.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                    e.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<(\w+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                    for (var n = 0, r = e.firstChild.childNodes.length; r > n; n++) this.node.appendChild(e.firstChild.firstChild);
                    return this
                }
            }
        }), y.FX = y.invent({
            create: function(t) {
                this.target = t
            },
            extend: {
                animate: function(t, e, n) {
                    var r, i, o, a = this.target,
                        s = this;
                    return "object" == typeof t && (n = t.delay, e = t.ease, t = t.duration), t = "=" == t ? t : null == t ? 1e3 : new y.Number(t).valueOf(), e = e || "<>", s.at = function(t) {
                        var n;
                        if (t = 0 > t ? 0 : t > 1 ? 1 : t, null == r) {
                            r = [];
                            for (o in s.attrs) r.push(o);
                            if (a.morphArray && (s.destination.plot || r.indexOf("points") > -1)) {
                                var u, c = new a.morphArray(s.destination.plot || s.attrs.points || a.array());
                                s.destination.size && c.size(s.destination.size.width.to, s.destination.size.height.to), u = c.bbox(), s.destination.x ? c.move(s.destination.x.to, u.y) : s.destination.cx && c.move(s.destination.cx.to - u.width / 2, u.y), u = c.bbox(), s.destination.y ? c.move(u.x, s.destination.y.to) : s.destination.cy && c.move(u.x, s.destination.cy.to - u.height / 2), s.destination = {
                                    plot: a.array().morph(c)
                                }
                            }
                        }
                        if (null == i) {
                            i = [];
                            for (o in s.styles) i.push(o)
                        }
                        for (t = "<>" == e ? -Math.cos(t * Math.PI) / 2 + .5 : ">" == e ? Math.sin(t * Math.PI / 2) : "<" == e ? -Math.cos(t * Math.PI / 2) + 1 : "-" == e ? t : "function" == typeof e ? e(t) : t, s.destination.plot ? a.plot(s.destination.plot.at(t)) : (s.destination.x ? a.x(s.destination.x.at(t)) : s.destination.cx && a.cx(s.destination.cx.at(t)), s.destination.y ? a.y(s.destination.y.at(t)) : s.destination.cy && a.cy(s.destination.cy.at(t)), s.destination.size && a.size(s.destination.size.width.at(t), s.destination.size.height.at(t))), s.destination.viewbox && a.viewbox(s.destination.viewbox.x.at(t), s.destination.viewbox.y.at(t), s.destination.viewbox.width.at(t), s.destination.viewbox.height.at(t)), s.destination.leading && a.leading(s.destination.leading.at(t)), n = r.length - 1; n >= 0; n--) a.attr(r[n], p(s.attrs[r[n]], t));
                        for (n = i.length - 1; n >= 0; n--) a.style(i[n], p(s.styles[i[n]], t));
                        s.situation.during && s.situation.during.call(a, t, function(e, n) {
                            return p({
                                from: e,
                                to: n
                            }, t)
                        })
                    }, "number" == typeof t && (this.timeout = setTimeout(function() {
                        var r = (new Date).getTime();
                        s.situation.start = r, s.situation.play = !0, s.situation.finish = r + t, s.situation.duration = t, s.situation.ease = e, s.render = function() {
                            if (s.situation.play === !0) {
                                var r = (new Date).getTime(),
                                    i = r > s.situation.finish ? 1 : (r - s.situation.start) / t;
                                s.situation.reversing && (i = -i + 1), s.at(i), r > s.situation.finish ? (s.destination.plot && a.plot(new y.PointArray(s.destination.plot.destination).settle()), s.situation.loop === !0 || "number" == typeof s.situation.loop && s.situation.loop > 0 ? (s.situation.reverse && (s.situation.reversing = !s.situation.reversing), "number" == typeof s.situation.loop && ((!s.situation.reverse || s.situation.reversing) && --s.situation.loop, s.situation.reverse || 1 != s.situation.loop || --s.situation.loop), s.animate(t, e, n)) : s.situation.after ? s.situation.after.apply(a, [s]) : s.stop()) : s.animationFrame = requestAnimationFrame(s.render)
                            } else s.animationFrame = requestAnimationFrame(s.render)
                        }, s.render()
                    }, new y.Number(n).valueOf())), this
                },
                bbox: function() {
                    return this.target.bbox()
                },
                attr: function(t, e) {
                    if ("object" == typeof t)
                        for (var n in t) this.attr(n, t[n]);
                    else {
                        var r = this.target.attr(t);
                        "transform" == t ? (this.attrs[t] && (e = this.attrs[t].destination.multiply(e)), this.attrs[t] = new y.Matrix(this.target).morph(e), this.param && (e = this.target.transform("rotation"), this.attrs[t].param = {
                            from: this.target.param || {
                                rotation: e,
                                cx: this.param.cx,
                                cy: this.param.cy
                            },
                            to: this.param
                        })) : this.attrs[t] = y.Color.isColor(e) ? new y.Color(r).morph(e) : y.regex.unit.test(e) ? new y.Number(r).morph(e) : {
                            from: r,
                            to: e
                        }
                    }
                    return this
                },
                style: function(t, e) {
                    if ("object" == typeof t)
                        for (var n in t) this.style(n, t[n]);
                    else this.styles[t] = {
                        from: this.target.style(t),
                        to: e
                    };
                    return this
                },
                x: function(t) {
                    return this.destination.x = new y.Number(this.target.x()).morph(t), this
                },
                y: function(t) {
                    return this.destination.y = new y.Number(this.target.y()).morph(t), this
                },
                cx: function(t) {
                    return this.destination.cx = new y.Number(this.target.cx()).morph(t), this
                },
                cy: function(t) {
                    return this.destination.cy = new y.Number(this.target.cy()).morph(t), this
                },
                move: function(t, e) {
                    return this.x(t).y(e)
                },
                center: function(t, e) {
                    return this.cx(t).cy(e)
                },
                size: function(t, e) {
                    if (this.target instanceof y.Text) this.attr("font-size", t);
                    else {
                        var n = this.target.bbox();
                        this.destination.size = {
                            width: new y.Number(n.width).morph(t),
                            height: new y.Number(n.height).morph(e)
                        }
                    }
                    return this
                },
                plot: function(t) {
                    return this.destination.plot = t, this
                },
                leading: function(t) {
                    return this.target.destination.leading && (this.destination.leading = new y.Number(this.target.destination.leading).morph(t)), this
                },
                viewbox: function(t, e, n, r) {
                    if (this.target instanceof y.Container) {
                        var i = this.target.viewbox();
                        this.destination.viewbox = {
                            x: new y.Number(i.x).morph(t),
                            y: new y.Number(i.y).morph(e),
                            width: new y.Number(i.width).morph(n),
                            height: new y.Number(i.height).morph(r)
                        }
                    }
                    return this
                },
                update: function(t) {
                    return this.target instanceof y.Stop && (null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new y.Number(t.offset))), this
                },
                during: function(t) {
                    return this.situation.during = t, this
                },
                after: function(t) {
                    return this.situation.after = t, this
                },
                loop: function(t, e) {
                    return this.situation.loop = this.situation.loops = t || !0, this.situation.reverse = !!e, this
                },
                stop: function(t) {
                    return t === !0 ? (this.animate(0), this.situation.after && this.situation.after.apply(this.target, [this])) : (clearTimeout(this.timeout), cancelAnimationFrame(this.animationFrame), this.attrs = {}, this.styles = {}, this.situation = {}, this.destination = {}), this
                },
                pause: function() {
                    return this.situation.play === !0 && (this.situation.play = !1, this.situation.pause = (new Date).getTime()), this
                },
                play: function() {
                    if (this.situation.play === !1) {
                        var t = (new Date).getTime() - this.situation.pause;
                        this.situation.finish += t, this.situation.start += t, this.situation.play = !0
                    }
                    return this
                }
            },
            parent: y.Element,
            construct: {
                animate: function(t, e, n) {
                    return (this.fx || (this.fx = new y.FX(this))).stop().animate(t, e, n)
                },
                stop: function(t) {
                    return this.fx && this.fx.stop(t), this
                },
                pause: function() {
                    return this.fx && this.fx.pause(), this
                },
                play: function() {
                    return this.fx && this.fx.play(), this
                }
            }
        }), y.BBox = y.invent({
            create: function(t) {
                if (t) {
                    var e;
                    try {
                        e = t.node.getBBox()
                    } catch (n) {
                        if (t instanceof y.Shape) {
                            var r = t.clone().addTo(y.parser.draw);
                            e = r.bbox(), r.remove()
                        } else e = {
                            x: t.node.clientLeft,
                            y: t.node.clientTop,
                            width: t.node.clientWidth,
                            height: t.node.clientHeight
                        }
                    }
                    this.x = e.x, this.y = e.y, this.width = e.width, this.height = e.height
                }
                v(this)
            },
            parent: y.Element,
            construct: {
                bbox: function() {
                    return new y.BBox(this)
                }
            }
        }), y.TBox = y.invent({
            create: function(t) {
                if (t) {
                    var e = t.ctm().extract(),
                        n = t.bbox();
                    this.width = n.width * e.scaleX, this.height = n.height * e.scaleY, this.x = n.x + e.x, this.y = n.y + e.y
                }
                v(this)
            },
            parent: y.Element,
            construct: {
                tbox: function() {
                    return new y.TBox(this)
                }
            }
        }), y.RBox = y.invent({
            create: function(t) {
                if (t) {
                    var e = t.doc().parent(),
                        n = t.node.getBoundingClientRect(),
                        r = 1;
                    for (this.x = n.left, this.y = n.top, this.x -= e.offsetLeft, this.y -= e.offsetTop; e = e.offsetParent;) this.x -= e.offsetLeft, this.y -= e.offsetTop;
                    for (e = t; e.parent && (e = e.parent());) e.viewbox && (r *= e.viewbox().zoom, this.x -= e.x() || 0, this.y -= e.y() || 0);
                    this.width = n.width /= r, this.height = n.height /= r
                }
                v(this), this.x += window.scrollX, this.y += window.scrollY
            },
            parent: y.Element,
            construct: {
                rbox: function() {
                    return new y.RBox(this)
                }
            }
        }), [y.BBox, y.TBox, y.RBox].forEach(function(t) {
            y.extend(t, {
                merge: function(e) {
                    var n = new t;
                    return n.x = Math.min(this.x, e.x), n.y = Math.min(this.y, e.y), n.width = Math.max(this.x + this.width, e.x + e.width) - n.x, n.height = Math.max(this.y + this.height, e.y + e.height) - n.y, v(n)
                }
            })
        }), y.Matrix = y.invent({
            create: function(t) {
                var e, n = c([1, 0, 0, 1, 0, 0]);
                for (t = t instanceof y.Element ? t.matrixify() : "string" == typeof t ? h(t) : 6 == arguments.length ? c([].slice.call(arguments)) : "object" == typeof t ? t : n, e = x.length - 1; e >= 0; e--) this[x[e]] = t && "number" == typeof t[x[e]] ? t[x[e]] : n[x[e]]
            },
            extend: {
                extract: function() {
                    var t = u(this, 0, 1),
                        e = u(this, 1, 0),
                        n = 180 / Math.PI * Math.atan2(t.y, t.x) - 90;
                    return {
                        x: this.e,
                        y: this.f,
                        skewX: -n,
                        skewY: 180 / Math.PI * Math.atan2(e.y, e.x),
                        scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
                        scaleY: Math.sqrt(this.c * this.c + this.d * this.d),
                        rotation: n
                    }
                },
                clone: function() {
                    return new y.Matrix(this)
                },
                morph: function(t) {
                    return this.destination = new y.Matrix(t), this
                },
                at: function(t) {
                    if (!this.destination) return this;
                    var e = new y.Matrix({
                        a: this.a + (this.destination.a - this.a) * t,
                        b: this.b + (this.destination.b - this.b) * t,
                        c: this.c + (this.destination.c - this.c) * t,
                        d: this.d + (this.destination.d - this.d) * t,
                        e: this.e + (this.destination.e - this.e) * t,
                        f: this.f + (this.destination.f - this.f) * t
                    });
                    if (this.param && this.param.to) {
                        var n = {
                            rotation: this.param.from.rotation + (this.param.to.rotation - this.param.from.rotation) * t,
                            cx: this.param.from.cx,
                            cy: this.param.from.cy
                        };
                        e = e.rotate((this.param.to.rotation - 2 * this.param.from.rotation) * t, n.cx, n.cy), e.param = n
                    }
                    return e
                },
                multiply: function(t) {
                    return new y.Matrix(this["native"]().multiply(l(t)["native"]()))
                },
                inverse: function() {
                    return new y.Matrix(this["native"]().inverse())
                },
                translate: function(t, e) {
                    return new y.Matrix(this["native"]().translate(t || 0, e || 0))
                },
                scale: function(t, e, n, r) {
                    return (1 == arguments.length || 3 == arguments.length) && (e = t), 3 == arguments.length && (r = n, n = e), this.around(n, r, new y.Matrix(t, 0, 0, e, 0, 0))
                },
                rotate: function(t, e, n) {
                    return t = y.utils.radians(t), this.around(e, n, new y.Matrix(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0))
                },
                flip: function(t, e) {
                    return "x" == t ? this.scale(-1, 1, e, 0) : this.scale(1, -1, 0, e)
                },
                skew: function(t, e, n, r) {
                    return this.around(n, r, this["native"]().skewX(t || 0).skewY(e || 0))
                },
                skewX: function(t, e, n) {
                    return this.around(e, n, this["native"]().skewX(t || 0))
                },
                skewY: function(t, e, n) {
                    return this.around(e, n, this["native"]().skewY(t || 0))
                },
                around: function(t, e, n) {
                    return this.multiply(new y.Matrix(1, 0, 0, 1, t || 0, e || 0)).multiply(n).multiply(new y.Matrix(1, 0, 0, 1, -t || 0, -e || 0))
                },
                "native": function() {
                    for (var t = y.parser.draw.node.createSVGMatrix(), e = x.length - 1; e >= 0; e--) t[x[e]] = this[x[e]];
                    return t
                },
                toString: function() {
                    return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")"
                }
            },
            parent: y.Element,
            construct: {
                ctm: function() {
                    return new y.Matrix(this.node.getCTM())
                },
                screenCTM: function() {
                    return new y.Matrix(this.node.getScreenCTM())
                }
            }
        }), y.extend(y.Element, {
            attr: function(t, e, n) {
                if (null == t) {
                    for (t = {}, e = this.node.attributes, n = e.length - 1; n >= 0; n--) t[e[n].nodeName] = y.regex.isNumber.test(e[n].nodeValue) ? parseFloat(e[n].nodeValue) : e[n].nodeValue;
                    return t
                }
                if ("object" == typeof t)
                    for (e in t) this.attr(e, t[e]);
                else if (null === e) this.node.removeAttribute(t);
                else {
                    if (null == e) return e = this.node.getAttribute(t), null == e ? y.defaults.attrs[t] : y.regex.isNumber.test(e) ? parseFloat(e) : e;
                    "stroke-width" == t ? this.attr("stroke", parseFloat(e) > 0 ? this._stroke : null) : "stroke" == t && (this._stroke = e), ("fill" == t || "stroke" == t) && (y.regex.isImage.test(e) && (e = this.doc().defs().image(e, 0, 0)), e instanceof y.Image && (e = this.doc().defs().pattern(0, 0, function() {
                        this.add(e)
                    }))), "number" == typeof e ? e = new y.Number(e) : y.Color.isColor(e) ? e = new y.Color(e) : Array.isArray(e) ? e = new y.Array(e) : e instanceof y.Matrix && e.param && (this.param = e.param), "leading" == t ? this.leading && this.leading(e) : "string" == typeof n ? this.node.setAttributeNS(n, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" != t && "x" != t || this.rebuild(t, e)
                }
                return this
            }
        }), y.extend(y.Element, y.FX, {
            transform: function(t, e) {
                var n, r = this.target || this;
                if ("object" != typeof t) return n = new y.Matrix(r).extract(), "object" == typeof this.param && (n.rotation = this.param.rotation, n.cx = this.param.cx, n.cy = this.param.cy), "string" == typeof t ? n[t] : n;
                if (n = this instanceof y.FX && this.attrs.transform ? this.attrs.transform : new y.Matrix(r), e = !!e || !!t.relative, null != t.a) n = e ? n.multiply(new y.Matrix(t)) : new y.Matrix(t);
                else if (null != t.rotation) f(t, r), e && (t.rotation += this.param && null != this.param.rotation ? this.param.rotation : n.extract().rotation), this.param = t, this instanceof y.Element && (n = e ? n.rotate(t.rotation, t.cx, t.cy) : n.rotate(t.rotation - n.extract().rotation, t.cx, t.cy));
                else if (null != t.scale || null != t.scaleX || null != t.scaleY) {
                    if (f(t, r), t.scaleX = null != t.scale ? t.scale : null != t.scaleX ? t.scaleX : 1, t.scaleY = null != t.scale ? t.scale : null != t.scaleY ? t.scaleY : 1, !e) {
                        var i = n.extract();
                        t.scaleX = 1 * t.scaleX / i.scaleX, t.scaleY = 1 * t.scaleY / i.scaleY
                    }
                    n = n.scale(t.scaleX, t.scaleY, t.cx, t.cy)
                } else if (null != t.skewX || null != t.skewY) {
                    if (f(t, r), t.skewX = null != t.skewX ? t.skewX : 0, t.skewY = null != t.skewY ? t.skewY : 0, !e) {
                        var i = n.extract();
                        n = n.multiply((new y.Matrix).skew(i.skewX, i.skewY, t.cx, t.cy).inverse())
                    }
                    n = n.skew(t.skewX, t.skewY, t.cx, t.cy)
                } else t.flip ? n = n.flip(t.flip, null == t.offset ? r.bbox()["c" + t.flip] : t.offset) : (null != t.x || null != t.y) && (e ? n = n.translate(t.x, t.y) : (null != t.x && (n.e = t.x), null != t.y && (n.f = t.y)));
                return this.attr(this instanceof y.Pattern ? "patternTransform" : this instanceof y.Gradient ? "gradientTransform" : "transform", n)
            }
        }), y.extend(y.Element, {
            untransform: function() {
                return this.attr("transform", null)
            },
            matrixify: function() {
                var t = (this.attr("transform") || "").split(/\)\s*/).slice(0, -1).map(function(t) {
                    var e = t.trim().split("(");
                    return [e[0], e[1].split(y.regex.matrixElements).map(function(t) {
                        return parseFloat(t)
                    })]
                }).reduce(function(t, e) {
                    return "matrix" == e[0] ? t.multiply(c(e[1])) : t[e[0]].apply(t, e[1])
                }, new y.Matrix);
                return this.attr("transform", t), t
            },
            toParent: function(t) {
                if (this == t) return this;
                var e = this.screenCTM(),
                    n = t.rect(1, 1),
                    r = n.screenCTM().inverse();
                return n.remove(), this.addTo(t).untransform().transform(r.multiply(e)), this
            },
            toDoc: function() {
                return this.toParent(this.doc())
            }
        }), y.extend(y.Element, {
            style: function(t, e) {
                if (0 == arguments.length) return this.node.style.cssText || "";
                if (arguments.length < 2)
                    if ("object" == typeof t)
                        for (e in t) this.style(e, t[e]);
                    else {
                        if (!y.regex.isCss.test(t)) return this.node.style[r(t)];
                        t = t.split(";");
                        for (var n = 0; n < t.length; n++) e = t[n].split(":"), this.style(e[0].replace(/\s+/g, ""), e[1])
                    } else this.node.style[r(t)] = null === e || y.regex.isBlank.test(e) ? "" : e;
                return this
            }
        }), y.Parent = y.invent({
            create: function(t) {
                this.constructor.call(this, t)
            },
            inherit: y.Element,
            extend: {
                children: function() {
                    return y.utils.map(y.utils.filterSVGElements(this.node.childNodes), function(t) {
                        return y.adopt(t)
                    })
                },
                add: function(t, e) {
                    return this.has(t) || (e = null == e ? this.children().length : e, this.node.insertBefore(t.node, this.node.childNodes[e] || null)), this
                },
                put: function(t, e) {
                    return this.add(t, e), t
                },
                has: function(t) {
                    return this.index(t) >= 0
                },
                index: function(t) {
                    return this.children().indexOf(t)
                },
                get: function(t) {
                    return this.children()[t]
                },
                first: function() {
                    return this.children()[0]
                },
                last: function() {
                    return this.children()[this.children().length - 1]
                },
                each: function(t, e) {
                    var n, r, i = this.children();
                    for (n = 0, r = i.length; r > n; n++) i[n] instanceof y.Element && t.apply(i[n], [n, i]), e && i[n] instanceof y.Container && i[n].each(t, e);
                    return this
                },
                removeElement: function(t) {
                    return this.node.removeChild(t.node), this
                },
                clear: function() {
                    for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                    return delete this._defs, this
                },
                defs: function() {
                    return this.doc().defs()
                }
            }
        }), y.extend(y.Parent, {
            ungroup: function(t, e) {
                return 0 === e || this instanceof y.Defs ? this : (t = t || (this instanceof y.Doc ? this : this.parent(y.Parent)), e = e || 1 / 0, this.each(function() {
                    return this instanceof y.Defs ? this : this instanceof y.Parent ? this.ungroup(t, e - 1) : this.toParent(t)
                }), this.node.firstChild || this.remove(), this)
            },
            flatten: function(t, e) {
                return this.ungroup(t, e)
            }
        }), y.Container = y.invent({
            create: function(t) {
                this.constructor.call(this, t)
            },
            inherit: y.Parent,
            extend: {
                viewbox: function(t) {
                    return 0 == arguments.length ? new y.ViewBox(this) : (t = 1 == arguments.length ? [t.x, t.y, t.width, t.height] : [].slice.call(arguments), this.attr("viewBox", t))
                }
            }
        }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function(t) {
            y.Element.prototype[t] = function(e) {
                var n = this;
                return this.node["on" + t] = "function" == typeof e ? function() {
                    return e.apply(n, arguments)
                } : null, this
            }
        }), y.listeners = [], y.handlerMap = [], y.on = function(t, e, n, r) {
            var i = n.bind(r || t.instance || t),
                o = (y.handlerMap.indexOf(t) + 1 || y.handlerMap.push(t)) - 1,
                a = e.split(".")[0],
                s = e.split(".")[1] || "*";
            y.listeners[o] = y.listeners[o] || {}, y.listeners[o][a] = y.listeners[o][a] || {}, y.listeners[o][a][s] = y.listeners[o][a][s] || {}, y.listeners[o][a][s][n] = i, t.addEventListener(a, i, !1)
        }, y.off = function(t, e, n) {
            var r = y.handlerMap.indexOf(t),
                i = e && e.split(".")[0],
                o = e && e.split(".")[1];
            if (-1 != r)
                if (n) y.listeners[r][i] && y.listeners[r][i][o || "*"] && (t.removeEventListener(i, y.listeners[r][i][o || "*"][n], !1), delete y.listeners[r][i][o || "*"][n]);
                else if (o && i) {
                if (y.listeners[r][i] && y.listeners[r][i][o]) {
                    for (n in y.listeners[r][i][o]) y.off(t, [i, o].join("."), n);
                    delete y.listeners[r][i][o]
                }
            } else if (o)
                for (e in y.listeners[r])
                    for (namespace in y.listeners[r][e]) o === namespace && y.off(t, [e, o].join("."));
            else if (i) {
                if (y.listeners[r][i]) {
                    for (namespace in y.listeners[r][i]) y.off(t, [i, namespace].join("."));
                    delete y.listeners[r][i]
                }
            } else {
                for (e in y.listeners[r]) y.off(t, e);
                delete y.listeners[r]
            }
        }, y.extend(y.Element, {
            on: function(t, e, n) {
                return y.on(this.node, t, e, n), this
            },
            off: function(t, e) {
                return y.off(this.node, t, e), this
            },
            fire: function(t, e) {
                return t instanceof Event ? this.node.dispatchEvent(t) : this.node.dispatchEvent(new b(t, {
                    detail: e
                })), this
            }
        }), y.Defs = y.invent({
            create: "defs",
            inherit: y.Container
        }), y.G = y.invent({
            create: "g",
            inherit: y.Container,
            extend: {
                x: function(t) {
                    return null == t ? this.transform("x") : this.transform({
                        x: -this.x() + t
                    }, !0)
                },
                y: function(t) {
                    return null == t ? this.transform("y") : this.transform({
                        y: -this.y() + t
                    }, !0)
                },
                cx: function(t) {
                    return null == t ? this.tbox().cx : this.x(t - this.tbox().width / 2)
                },
                cy: function(t) {
                    return null == t ? this.tbox().cy : this.y(t - this.tbox().height / 2)
                }
            },
            construct: {
                group: function() {
                    return this.put(new y.G)
                }
            }
        }), y.extend(y.Element, {
            siblings: function() {
                return this.parent().children()
            },
            position: function() {
                return this.parent().index(this)
            },
            next: function() {
                return this.siblings()[this.position() + 1]
            },
            previous: function() {
                return this.siblings()[this.position() - 1]
            },
            forward: function() {
                var t = this.position() + 1,
                    e = this.parent();
                return e.removeElement(this).add(this, t), e instanceof y.Doc && e.node.appendChild(e.defs().node), this
            },
            backward: function() {
                var t = this.position();
                return t > 0 && this.parent().removeElement(this).add(this, t - 1), this
            },
            front: function() {
                var t = this.parent();
                return t.node.appendChild(this.node), t instanceof y.Doc && t.node.appendChild(t.defs().node), this
            },
            back: function() {
                return this.position() > 0 && this.parent().removeElement(this).add(this, 0), this
            },
            before: function(t) {
                t.remove();
                var e = this.position();
                return this.parent().add(t, e), this
            },
            after: function(t) {
                t.remove();
                var e = this.position();
                return this.parent().add(t, e + 1), this
            }
        }), y.Mask = y.invent({
            create: function() {
                this.constructor.call(this, y.create("mask")), this.targets = []
            },
            inherit: y.Container,
            extend: {
                remove: function() {
                    for (var t = this.targets.length - 1; t >= 0; t--) this.targets[t] && this.targets[t].unmask();
                    return delete this.targets, this.parent().removeElement(this), this
                }
            },
            construct: {
                mask: function() {
                    return this.defs().put(new y.Mask)
                }
            }
        }), y.extend(y.Element, {
            maskWith: function(t) {
                return this.masker = t instanceof y.Mask ? t : this.parent().mask().add(t), this.masker.targets.push(this), this.attr("mask", 'url("#' + this.masker.attr("id") + '")')
            },
            unmask: function() {
                return delete this.masker, this.attr("mask", null)
            }
        }), y.ClipPath = y.invent({
            create: function() {
                this.constructor.call(this, y.create("clipPath")), this.targets = []
            },
            inherit: y.Container,
            extend: {
                remove: function() {
                    for (var t = this.targets.length - 1; t >= 0; t--) this.targets[t] && this.targets[t].unclip();
                    return delete this.targets, this.parent().removeElement(this), this
                }
            },
            construct: {
                clip: function() {
                    return this.defs().put(new y.ClipPath)
                }
            }
        }), y.extend(y.Element, {
            clipWith: function(t) {
                return this.clipper = t instanceof y.ClipPath ? t : this.parent().clip().add(t), this.clipper.targets.push(this), this.attr("clip-path", 'url("#' + this.clipper.attr("id") + '")')
            },
            unclip: function() {
                return delete this.clipper, this.attr("clip-path", null)
            }
        }), y.Gradient = y.invent({
            create: function(t) {
                this.constructor.call(this, y.create(t + "Gradient")), this.type = t
            },
            inherit: y.Container,
            extend: {
                at: function(t, e, n) {
                    return this.put(new y.Stop).update(t, e, n)
                },
                update: function(t) {
                    return this.clear(), "function" == typeof t && t.call(this, this), this
                },
                fill: function() {
                    return "url(#" + this.id() + ")"
                },
                toString: function() {
                    return this.fill()
                },
                attr: function(t, e, n) {
                    return "transform" == t && (t = "gradientTransform"), y.Container.prototype.attr.call(this, t, e, n)
                }
            },
            construct: {
                gradient: function(t, e) {
                    return this.defs().gradient(t, e)
                }
            }
        }), y.extend(y.Gradient, y.FX, {
            from: function(t, e) {
                return "radial" == (this.target || this).type ? this.attr({
                    fx: new y.Number(t),
                    fy: new y.Number(e)
                }) : this.attr({
                    x1: new y.Number(t),
                    y1: new y.Number(e)
                })
            },
            to: function(t, e) {
                return "radial" == (this.target || this).type ? this.attr({
                    cx: new y.Number(t),
                    cy: new y.Number(e)
                }) : this.attr({
                    x2: new y.Number(t),
                    y2: new y.Number(e)
                })
            }
        }), y.extend(y.Defs, {
            gradient: function(t, e) {
                return this.put(new y.Gradient(t)).update(e)
            }
        }), y.Stop = y.invent({
            create: "stop",
            inherit: y.Element,
            extend: {
                update: function(t) {
                    return ("number" == typeof t || t instanceof y.Number) && (t = {
                        offset: arguments[0],
                        color: arguments[1],
                        opacity: arguments[2]
                    }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new y.Number(t.offset)), this
                }
            }
        }), y.Pattern = y.invent({
            create: "pattern",
            inherit: y.Container,
            extend: {
                fill: function() {
                    return "url(#" + this.id() + ")"
                },
                update: function(t) {
                    return this.clear(), "function" == typeof t && t.call(this, this), this
                },
                toString: function() {
                    return this.fill()
                },
                attr: function(t, e, n) {
                    return "transform" == t && (t = "patternTransform"), y.Container.prototype.attr.call(this, t, e, n)
                }
            },
            construct: {
                pattern: function(t, e, n) {
                    return this.defs().pattern(t, e, n)
                }
            }
        }), y.extend(y.Defs, {
            pattern: function(t, e, n) {
                return this.put(new y.Pattern).update(n).attr({
                    x: 0,
                    y: 0,
                    width: t,
                    height: e,
                    patternUnits: "userSpaceOnUse"
                })
            }
        }), y.Doc = y.invent({
            create: function(t) {
                t && (t = "string" == typeof t ? document.getElementById(t) : t, "svg" == t.nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, y.create("svg")), t.appendChild(this.node)), this.namespace().size("100%", "100%").defs())
            },
            inherit: y.Container,
            extend: {
                namespace: function() {
                    return this.attr({
                        xmlns: y.ns,
                        version: "1.1"
                    }).attr("xmlns:xlink", y.xlink, y.xmlns)
                },
                defs: function() {
                    if (!this._defs) {
                        var t;
                        (t = this.node.getElementsByTagName("defs")[0]) ? this._defs = y.adopt(t): this._defs = new y.Defs, this.node.appendChild(this._defs.node)
                    }
                    return this._defs
                },
                parent: function() {
                    return "#document" == this.node.parentNode.nodeName ? null : this.node.parentNode
                },
                spof: function(t) {
                    var e = this.node.getScreenCTM();
                    return e && this.style("left", -e.e % 1 + "px").style("top", -e.f % 1 + "px"), this
                },
                remove: function() {
                    return this.parent() && this.parent().removeChild(this.node), this
                }
            }
        }), y.Shape = y.invent({
            create: function(t) {
                this.constructor.call(this, t)
            },
            inherit: y.Element
        }), y.Bare = y.invent({
            create: function(t, e) {
                if (this.constructor.call(this, y.create(t)), e)
                    for (var n in e.prototype) "function" == typeof e.prototype[n] && (this[n] = e.prototype[n])
            },
            inherit: y.Element,
            extend: {
                words: function(t) {
                    for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                    return this.node.appendChild(document.createTextNode(t)), this
                }
            }
        }), y.extend(y.Parent, {
            element: function(t, e) {
                return this.put(new y.Bare(t, e))
            },
            symbol: function() {
                return this.defs().element("symbol", y.Container)
            }
        }), y.Use = y.invent({
            create: "use",
            inherit: y.Shape,
            extend: {
                element: function(t, e) {
                    return this.attr("href", (e || "") + "#" + t, y.xlink)
                }
            },
            construct: {
                use: function(t, e) {
                    return this.put(new y.Use).element(t, e)
                }
            }
        }), y.Rect = y.invent({
            create: "rect",
            inherit: y.Shape,
            construct: {
                rect: function(t, e) {
                    return this.put(new y.Rect).size(t, e)
                }
            }
        }), y.Circle = y.invent({
            create: "circle",
            inherit: y.Shape,
            construct: {
                circle: function(t) {
                    return this.put(new y.Circle).rx(new y.Number(t).divide(2)).move(0, 0)
                }
            }
        }), y.extend(y.Circle, y.FX, {
            rx: function(t) {
                return this.attr("r", t)
            },
            ry: function(t) {
                return this.rx(t)
            }
        }), y.Ellipse = y.invent({
            create: "ellipse",
            inherit: y.Shape,
            construct: {
                ellipse: function(t, e) {
                    return this.put(new y.Ellipse).size(t, e).move(0, 0)
                }
            }
        }), y.extend(y.Ellipse, y.Rect, y.FX, {
            rx: function(t) {
                return this.attr("rx", t)
            },
            ry: function(t) {
                return this.attr("ry", t)
            }
        }), y.extend(y.Circle, y.Ellipse, {
            x: function(t) {
                return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
            },
            y: function(t) {
                return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
            },
            cx: function(t) {
                return null == t ? this.attr("cx") : this.attr("cx", t)
            },
            cy: function(t) {
                return null == t ? this.attr("cy") : this.attr("cy", t)
            },
            width: function(t) {
                return null == t ? 2 * this.rx() : this.rx(new y.Number(t).divide(2))
            },
            height: function(t) {
                return null == t ? 2 * this.ry() : this.ry(new y.Number(t).divide(2))
            },
            size: function(t, e) {
                var n = s(this.bbox(), t, e);
                return this.rx(new y.Number(n.width).divide(2)).ry(new y.Number(n.height).divide(2))
            }
        }), y.Line = y.invent({
            create: "line",
            inherit: y.Shape,
            extend: {
                array: function() {
                    return new y.PointArray([
                        [this.attr("x1"), this.attr("y1")],
                        [this.attr("x2"), this.attr("y2")]
                    ])
                },
                plot: function(t, e, n, r) {
                    return t = 4 == arguments.length ? {
                        x1: t,
                        y1: e,
                        x2: n,
                        y2: r
                    } : new y.PointArray(t).toLine(), this.attr(t)
                },
                move: function(t, e) {
                    return this.attr(this.array().move(t, e).toLine())
                },
                size: function(t, e) {
                    var n = s(this.bbox(), t, e);
                    return this.attr(this.array().size(n.width, n.height).toLine())
                }
            },
            construct: {
                line: function(t, e, n, r) {
                    return this.put(new y.Line).plot(t, e, n, r)
                }
            }
        }), y.Polyline = y.invent({
            create: "polyline",
            inherit: y.Shape,
            construct: {
                polyline: function(t) {
                    return this.put(new y.Polyline).plot(t)
                }
            }
        }), y.Polygon = y.invent({
            create: "polygon",
            inherit: y.Shape,
            construct: {
                polygon: function(t) {
                    return this.put(new y.Polygon).plot(t)
                }
            }
        }), y.extend(y.Polyline, y.Polygon, {
            array: function() {
                return this._array || (this._array = new y.PointArray(this.attr("points")))
            },
            plot: function(t) {
                return this.attr("points", this._array = new y.PointArray(t))
            },
            move: function(t, e) {
                return this.attr("points", this.array().move(t, e))
            },
            size: function(t, e) {
                var n = s(this.bbox(), t, e);
                return this.attr("points", this.array().size(n.width, n.height))
            }
        }), y.extend(y.Line, y.Polyline, y.Polygon, {
            morphArray: y.PointArray,
            x: function(t) {
                return null == t ? this.bbox().x : this.move(t, this.bbox().y)
            },
            y: function(t) {
                return null == t ? this.bbox().y : this.move(this.bbox().x, t)
            },
            width: function(t) {
                var e = this.bbox();
                return null == t ? e.width : this.size(t, e.height)
            },
            height: function(t) {
                var e = this.bbox();
                return null == t ? e.height : this.size(e.width, t)
            }
        }), y.Path = y.invent({
            create: "path",
            inherit: y.Shape,
            extend: {
                morphArray: y.PathArray,
                array: function() {
                    return this._array || (this._array = new y.PathArray(this.attr("d")))
                },
                plot: function(t) {
                    return this.attr("d", this._array = new y.PathArray(t))
                },
                move: function(t, e) {
                    return this.attr("d", this.array().move(t, e))
                },
                x: function(t) {
                    return null == t ? this.bbox().x : this.move(t, this.bbox().y)
                },
                y: function(t) {
                    return null == t ? this.bbox().y : this.move(this.bbox().x, t)
                },
                size: function(t, e) {
                    var n = s(this.bbox(), t, e);
                    return this.attr("d", this.array().size(n.width, n.height))
                },
                width: function(t) {
                    return null == t ? this.bbox().width : this.size(t, this.bbox().height)
                },
                height: function(t) {
                    return null == t ? this.bbox().height : this.size(this.bbox().width, t)
                }
            },
            construct: {
                path: function(t) {
                    return this.put(new y.Path).plot(t)
                }
            }
        }), y.Image = y.invent({
            create: "image",
            inherit: y.Shape,
            extend: {
                load: function(t) {
                    if (!t) return this;
                    var e = this,
                        n = document.createElement("img");
                    return n.onload = function() {
                        var r = e.parent(y.Pattern);
                        0 == e.width() && 0 == e.height() && e.size(n.width, n.height), r && 0 == r.width() && 0 == r.height() && r.size(e.width(), e.height()), "function" == typeof e._loaded && e._loaded.call(e, {
                            width: n.width,
                            height: n.height,
                            ratio: n.width / n.height,
                            url: t
                        })
                    }, this.attr("href", n.src = this.src = t, y.xlink)
                },
                loaded: function(t) {
                    return this._loaded = t, this
                }
            },
            construct: {
                image: function(t, e, n) {
                    return this.put(new y.Image).load(t).size(e || 0, n || e || 0)
                }
            }
        }), y.Text = y.invent({
            create: function() {
                this.constructor.call(this, y.create("text")), this._leading = new y.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", y.defaults.attrs["font-family"])
            },
            inherit: y.Shape,
            extend: {
                clone: function() {
                    var t = g(this.node.cloneNode(!0));
                    return t.lines().each(function() {
                        this.newLined = !0
                    }), this.after(t), t
                },
                x: function(t) {
                    return null == t ? this.attr("x") : (this.textPath || this.lines().each(function() {
                        this.newLined && this.x(t)
                    }), this.attr("x", t))
                },
                y: function(t) {
                    var e = this.attr("y"),
                        n = "number" == typeof e ? e - this.bbox().y : 0;
                    return null == t ? "number" == typeof e ? e - n : e : this.attr("y", "number" == typeof t ? t + n : t)
                },
                cx: function(t) {
                    return null == t ? this.bbox().cx : this.x(t - this.bbox().width / 2)
                },
                cy: function(t) {
                    return null == t ? this.bbox().cy : this.y(t - this.bbox().height / 2)
                },
                text: function(t) {
                    if ("undefined" == typeof t) return this.content;
                    if (this.clear().build(!0), "function" == typeof t) t.call(this, this);
                    else {
                        t = (this.content = t).split("\n");
                        for (var e = 0, n = t.length; n > e; e++) this.tspan(t[e]).newLine()
                    }
                    return this.build(!1).rebuild()
                },
                size: function(t) {
                    return this.attr("font-size", t).rebuild()
                },
                leading: function(t) {
                    return null == t ? this._leading : (this._leading = new y.Number(t), this.rebuild())
                },
                lines: function() {
                    var t = y.utils.map(y.utils.filterSVGElements(this.node.childNodes), function(t) {
                        return y.adopt(t)
                    });
                    return new y.Set(t)
                },
                rebuild: function(t) {
                    if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
                        var e = this;
                        this.lines().each(function() {
                            this.newLined && (this.textPath || this.attr("x", e.attr("x")), this.attr("dy", e._leading * new y.Number(e.attr("font-size"))))
                        }), this.fire("rebuild")
                    }
                    return this
                },
                build: function(t) {
                    return this._build = !!t, this
                }
            },
            construct: {
                text: function(t) {
                    return this.put(new y.Text).text(t)
                },
                plain: function(t) {
                    return this.put(new y.Text).plain(t)
                }
            }
        }), y.Tspan = y.invent({
            create: "tspan",
            inherit: y.Shape,
            extend: {
                text: function(t) {
                    return "function" == typeof t ? t.call(this, this) : this.plain(t), this
                },
                dx: function(t) {
                    return this.attr("dx", t)
                },
                dy: function(t) {
                    return this.attr("dy", t)
                },
                newLine: function() {
                    var t = this.parent(y.Text);
                    return this.newLined = !0, this.dy(t._leading * t.attr("font-size")).attr("x", t.x())
                }
            }
        }), y.extend(y.Text, y.Tspan, {
            plain: function(t) {
                return this._build === !1 && this.clear(), this.node.appendChild(document.createTextNode(this.content = t)), this
            },
            tspan: function(t) {
                var e = (this.textPath() || this).node,
                    n = new y.Tspan;
                return this._build === !1 && this.clear(), e.appendChild(n.node), n.text(t)
            },
            clear: function() {
                for (var t = (this.textPath() || this).node; t.hasChildNodes();) t.removeChild(t.lastChild);
                return this instanceof y.Text && (this.content = ""), this
            },
            length: function() {
                return this.node.getComputedTextLength()
            }
        }), y.TextPath = y.invent({
            create: "textPath",
            inherit: y.Element,
            parent: y.Text,
            construct: {
                path: function(t) {
                    for (var e = new y.TextPath, n = this.doc().defs().path(t); this.node.hasChildNodes();) e.node.appendChild(this.node.firstChild);
                    return this.node.appendChild(e.node), e.attr("href", "#" + n, y.xlink), this
                },
                plot: function(t) {
                    var e = this.track();
                    return e && e.plot(t), this
                },
                track: function() {
                    var t = this.textPath();
                    return t ? t.reference("href") : void 0
                },
                textPath: function() {
                    return this.node.firstChild && "textPath" == this.node.firstChild.nodeName ? y.adopt(this.node.firstChild) : void 0
                }
            }
        }), y.Nested = y.invent({
            create: function() {
                this.constructor.call(this, y.create("svg")), this.style("overflow", "visible")
            },
            inherit: y.Container,
            construct: {
                nested: function() {
                    return this.put(new y.Nested)
                }
            }
        }), y.A = y.invent({
            create: "a",
            inherit: y.Container,
            extend: {
                to: function(t) {
                    return this.attr("href", t, y.xlink)
                },
                show: function(t) {
                    return this.attr("show", t, y.xlink)
                },
                target: function(t) {
                    return this.attr("target", t)
                }
            },
            construct: {
                link: function(t) {
                    return this.put(new y.A).to(t)
                }
            }
        }), y.extend(y.Element, {
            linkTo: function(t) {
                var e = new y.A;
                return "function" == typeof t ? t.call(e, e) : e.to(t), this.parent().put(e).put(this)
            }
        }), y.Marker = y.invent({
            create: "marker",
            inherit: y.Container,
            extend: {
                width: function(t) {
                    return this.attr("markerWidth", t)
                },
                height: function(t) {
                    return this.attr("markerHeight", t)
                },
                ref: function(t, e) {
                    return this.attr("refX", t).attr("refY", e)
                },
                update: function(t) {
                    return this.clear(), "function" == typeof t && t.call(this, this), this
                },
                toString: function() {
                    return "url(#" + this.id() + ")"
                }
            },
            construct: {
                marker: function(t, e, n) {
                    return this.defs().marker(t, e, n)
                }
            }
        }), y.extend(y.Defs, {
            marker: function(t, e, n) {
                return this.put(new y.Marker).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(n)
            }
        }), y.extend(y.Line, y.Polyline, y.Polygon, y.Path, {
            marker: function(t, e, n, r) {
                var i = ["marker"];
                return "all" != t && i.push(t), i = i.join("-"), t = arguments[1] instanceof y.Marker ? arguments[1] : this.doc().marker(e, n, r), this.attr(i, t)
            }
        });
        var $ = {
            stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
            fill: ["color", "opacity", "rule"],
            prefix: function(t, e) {
                return "color" == e ? t : t + "-" + e
            }
        };
        ["fill", "stroke"].forEach(function(t) {
            var e, n = {};
            n[t] = function(n) {
                if ("string" == typeof n || y.Color.isRgb(n) || n && "function" == typeof n.fill) this.attr(t, n);
                else
                    for (e = $[t].length - 1; e >= 0; e--) null != n[$[t][e]] && this.attr($.prefix(t, $[t][e]), n[$[t][e]]);
                return this
            }, y.extend(y.Element, y.FX, n)
        }), y.extend(y.Element, y.FX, {
            rotate: function(t, e, n) {
                return this.transform({
                    rotation: t,
                    cx: e,
                    cy: n
                })
            },
            skew: function(t, e, n, r) {
                return this.transform({
                    skewX: t,
                    skewY: e,
                    cx: n,
                    cy: r
                })
            },
            scale: function(t, e, n, r) {
                return 1 == arguments.length || 3 == arguments.length ? this.transform({
                    scale: t,
                    cx: e,
                    cy: n
                }) : this.transform({
                    scaleX: t,
                    scaleY: e,
                    cx: n,
                    cy: r
                })
            },
            translate: function(t, e) {
                return this.transform({
                    x: t,
                    y: e
                })
            },
            flip: function(t, e) {
                return this.transform({
                    flip: t,
                    offset: e
                })
            },
            matrix: function(t) {
                return this.attr("transform", new y.Matrix(t))
            },
            opacity: function(t) {
                return this.attr("opacity", t)
            },
            dx: function(t) {
                return this.x((this.target || this).x() + t)
            },
            dy: function(t) {
                return this.y((this.target || this).y() + t)
            },
            dmove: function(t, e) {
                return this.dx(t).dy(e)
            }
        }), y.extend(y.Rect, y.Ellipse, y.Circle, y.Gradient, y.FX, {
            radius: function(t, e) {
                var n = (this.target || this).type;
                return "radial" == n || "circle" == n ? this.attr({
                    r: new y.Number(t)
                }) : this.rx(t).ry(null == e ? t : e)
            }
        }), y.extend(y.Path, {
            length: function() {
                return this.node.getTotalLength()
            },
            pointAt: function(t) {
                return this.node.getPointAtLength(t)
            }
        }), y.extend(y.Parent, y.Text, y.FX, {
            font: function(t) {
                for (var e in t) "leading" == e ? this.leading(t[e]) : "anchor" == e ? this.attr("text-anchor", t[e]) : "size" == e || "family" == e || "weight" == e || "stretch" == e || "variant" == e || "style" == e ? this.attr("font-" + e, t[e]) : this.attr(e, t[e]);
                return this
            }
        }), y.Set = y.invent({
            create: function(t) {
                Array.isArray(t) ? this.members = t : this.clear()
            },
            extend: {
                add: function() {
                    var t, e, n = [].slice.call(arguments);
                    for (t = 0, e = n.length; e > t; t++) this.members.push(n[t]);
                    return this
                },
                remove: function(t) {
                    var e = this.index(t);
                    return e > -1 && this.members.splice(e, 1), this
                },
                each: function(t) {
                    for (var e = 0, n = this.members.length; n > e; e++) t.apply(this.members[e], [e, this.members]);
                    return this
                },
                clear: function() {
                    return this.members = [], this
                },
                length: function() {
                    return this.members.length
                },
                has: function(t) {
                    return this.index(t) >= 0
                },
                index: function(t) {
                    return this.members.indexOf(t)
                },
                get: function(t) {
                    return this.members[t]
                },
                first: function() {
                    return this.get(0)
                },
                last: function() {
                    return this.get(this.members.length - 1)
                },
                valueOf: function() {
                    return this.members
                },
                bbox: function() {
                    var t = new y.BBox;
                    if (0 == this.members.length) return t;
                    var e = this.members[0].rbox();
                    return t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height, this.each(function() {
                        t = t.merge(this.rbox())
                    }), t
                }
            },
            construct: {
                set: function(t) {
                    return new y.Set(t)
                }
            }
        }), y.FX.Set = y.invent({
            create: function(t) {
                this.set = t
            }
        }), y.Set.inherit = function() {
            var t, e = [];
            for (var t in y.Shape.prototype) "function" == typeof y.Shape.prototype[t] && "function" != typeof y.Set.prototype[t] && e.push(t);
            e.forEach(function(t) {
                y.Set.prototype[t] = function() {
                    for (var e = 0, n = this.members.length; n > e; e++) this.members[e] && "function" == typeof this.members[e][t] && this.members[e][t].apply(this.members[e], arguments);
                    return "animate" == t ? this.fx || (this.fx = new y.FX.Set(this)) : this
                }
            }), e = [];
            for (var t in y.FX.prototype) "function" == typeof y.FX.prototype[t] && "function" != typeof y.FX.Set.prototype[t] && e.push(t);
            e.forEach(function(t) {
                y.FX.Set.prototype[t] = function() {
                    for (var e = 0, n = this.set.members.length; n > e; e++) this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments);
                    return this
                }
            })
        }, y.extend(y.Element, {
            data: function(t, e, n) {
                if ("object" == typeof t)
                    for (e in t) this.data(e, t[e]);
                else if (arguments.length < 2) try {
                    return JSON.parse(this.attr("data-" + t))
                } catch (r) {
                    return this.attr("data-" + t)
                } else this.attr("data-" + t, null === e ? null : n === !0 || "string" == typeof e || "number" == typeof e ? e : JSON.stringify(e));
                return this
            }
        }), y.extend(y.Element, {
            remember: function(t, e) {
                if ("object" == typeof arguments[0])
                    for (var e in t) this.remember(e, t[e]);
                else {
                    if (1 == arguments.length) return this.memory()[t];
                    this.memory()[t] = e
                }
                return this
            },
            forget: function() {
                if (0 == arguments.length) this._memory = {};
                else
                    for (var t = arguments.length - 1; t >= 0; t--) delete this.memory()[arguments[t]];
                return this
            },
            memory: function() {
                return this._memory || (this._memory = {})
            }
        }), y.get = function(t) {
            var e = document.getElementById(m(t) || t);
            return e ? y.adopt(e) : void 0
        }, y.select = function(t, e) {
            return new y.Set(y.utils.map((e || document).querySelectorAll(t), function(t) {
                return y.adopt(t)
            }))
        }, y.extend(y.Parent, {
            select: function(t) {
                return y.select(t, this.node)
            }
        });
        var x = "abcdef".split("");
        if ("function" != typeof b) {
            var b = function(t, e) {
                e = e || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
            };
            b.prototype = window.Event.prototype, window.CustomEvent = b
        }
        return function(t) {
            for (var e = 0, n = ["moz", "webkit"], r = 0; r < n.length && !window.requestAnimationFrame; ++r) t.requestAnimationFrame = t[n[r] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            t.requestAnimationFrame = t.requestAnimationFrame || function(n) {
                var r = (new Date).getTime(),
                    i = Math.max(0, 16 - (r - e)),
                    o = t.setTimeout(function() {
                        n(r + i)
                    }, i);
                return e = r + i, o
            }, t.cancelAnimationFrame = t.cancelAnimationFrame || t.clearTimeout
        }(window), y
    }),
    function(t, e, n) {
        "use strict";

        function r() {
            this.$get = ["$$sanitizeUri", function(t) {
                return function(e) {
                    var n = [];
                    return a(e, c(n, function(e, n) {
                        return !/^unsafe/.test(t(e, n))
                    })), n.join("")
                }
            }]
        }

        function i(t) {
            var n = [],
                r = c(n, e.noop);
            return r.chars(t), n.join("")
        }

        function o(t, n) {
            var r, i = {},
                o = t.split(",");
            for (r = 0; r < o.length; r++) i[n ? e.lowercase(o[r]) : o[r]] = !0;
            return i
        }

        function a(t, n) {
            function r(t, r, o, a) {
                if (r = e.lowercase(r), E[r])
                    for (; $.last() && k[$.last()];) i("", $.last());
                C[r] && $.last() == r && i("", r), a = b[r] || !!a, a || $.push(r);
                var u = {};
                o.replace(p, function(t, e, n, r, i) {
                    var o = n || r || i || "";
                    u[e] = s(o)
                }), n.start && n.start(r, u, a)
            }

            function i(t, r) {
                var i, o = 0;
                if (r = e.lowercase(r))
                    for (o = $.length - 1; o >= 0 && $[o] != r; o--);
                if (o >= 0) {
                    for (i = $.length - 1; i >= o; i--) n.end && n.end($[i]);
                    $.length = o
                }
            }
            "string" != typeof t && (t = null === t || "undefined" == typeof t ? "" : "" + t);
            var o, a, u, c, $ = [],
                x = t;
            for ($.last = function() {
                    return $[$.length - 1]
                }; t;) {
                if (c = "", a = !0, $.last() && _[$.last()] ? (t = t.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + $.last() + "[^>]*>", "i"), function(t, e) {
                        return e = e.replace(v, "$1").replace(y, "$1"), n.chars && n.chars(s(e)), ""
                    }), i("", $.last())) : (0 === t.indexOf("<!--") ? (o = t.indexOf("--", 4), o >= 0 && t.lastIndexOf("-->", o) === o && (n.comment && n.comment(t.substring(4, o)), t = t.substring(o + 3), a = !1)) : m.test(t) ? (u = t.match(m), u && (t = t.replace(u[0], ""), a = !1)) : g.test(t) ? (u = t.match(h), u && (t = t.substring(u[0].length), u[0].replace(h, i), a = !1)) : d.test(t) && (u = t.match(f), u ? (u[4] && (t = t.substring(u[0].length), u[0].replace(f, r)), a = !1) : (c += "<", t = t.substring(1))), a && (o = t.indexOf("<"), c += 0 > o ? t : t.substring(0, o), t = 0 > o ? "" : t.substring(o), n.chars && n.chars(s(c)))), t == x) throw l("badparse", "The sanitizer was unable to parse the following block of html: {0}", t);
                x = t
            }
            i()
        }

        function s(t) {
            return t ? (P.innerHTML = t.replace(/</g, "&lt;"), P.textContent) : ""
        }

        function u(t) {
            return t.replace(/&/g, "&amp;").replace($, function(t) {
                var e = t.charCodeAt(0),
                    n = t.charCodeAt(1);
                return "&#" + (1024 * (e - 55296) + (n - 56320) + 65536) + ";"
            }).replace(x, function(t) {
                return "&#" + t.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function c(t, n) {
            var r = !1,
                i = e.bind(t, t.push);
            return {
                start: function(t, o, a) {
                    t = e.lowercase(t), !r && _[t] && (r = t), r || T[t] !== !0 || (i("<"), i(t), e.forEach(o, function(r, o) {
                        var a = e.lowercase(o),
                            s = "img" === t && "src" === a || "background" === a;
                        M[a] !== !0 || N[a] === !0 && !n(r, s) || (i(" "), i(o), i('="'), i(u(r)), i('"'))
                    }), i(a ? "/>" : ">"))
                },
                end: function(t) {
                    t = e.lowercase(t), r || T[t] !== !0 || (i("</"), i(t), i(">")), t == r && (r = !1)
                },
                chars: function(t) {
                    r || i(u(t))
                }
            }
        }
        var l = e.$$minErr("$sanitize"),
            f = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
            h = /^<\/\s*([\w:-]+)[^>]*>/,
            p = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
            d = /^</,
            g = /^<\//,
            v = /<!--(.*?)-->/g,
            m = /<!DOCTYPE([^>]*?)>/i,
            y = /<!\[CDATA\[(.*?)]]>/g,
            $ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            x = /([^\#-~| |!])/g,
            b = o("area,br,col,hr,img,wbr"),
            w = o("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            S = o("rp,rt"),
            C = e.extend({}, S, w),
            E = e.extend({}, w, o("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
            k = e.extend({}, S, o("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            A = o("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),
            _ = o("script,style"),
            T = e.extend({}, b, E, k, C, A),
            N = o("background,cite,href,longdesc,src,usemap,xlink:href"),
            j = o("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
            O = o("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
            M = e.extend({}, N, O, j),
            P = document.createElement("pre");
        e.module("ngSanitize", []).provider("$sanitize", r), e.module("ngSanitize").filter("linky", ["$sanitize", function(t) {
            var n = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
                r = /^mailto:/i;
            return function(o, a) {
                function s(t) {
                    t && p.push(i(t))
                }

                function u(t, n) {
                    p.push("<a "), e.isDefined(a) && p.push('target="', a, '" '), p.push('href="', t.replace(/"/g, "&quot;"), '">'), s(n), p.push("</a>")
                }
                if (!o) return o;
                for (var c, l, f, h = o, p = []; c = h.match(n);) l = c[0], c[2] || c[4] || (l = (c[3] ? "http://" : "mailto:") + l), f = c.index, s(h.substr(0, f)), u(l, c[0].replace(r, "")), h = h.substring(f + c[0].length);
                return s(h), t(p.join(""))
            }
        }])
    }(window, window.angular),
    function(t, e) {
        "function" == typeof define && define.amd ? define([], function() {
            return e()
        }) : "object" == typeof exports ? module.exports = e() : e()
    }(this, function() {
        function t(t) {
            "use strict";
            var e = t.storageKey(),
                n = t.storage(),
                r = function() {
                    var r = t.preferredLanguage();
                    angular.isString(r) ? t.use(r) : n.put(e, t.use())
                };
            r.displayName = "fallbackFromIncorrectStorageValue", n ? n.get(e) ? t.use(n.get(e))["catch"](r) : r() : angular.isString(t.preferredLanguage()) && t.use(t.preferredLanguage())
        }

        function e() {
            "use strict";
            var t, e, n = null,
                r = !1,
                i = !1;
            e = {
                sanitize: function(t, e) {
                    return "text" === e && (t = a(t)), t
                },
                escape: function(t, e) {
                    return "text" === e && (t = o(t)), t
                },
                sanitizeParameters: function(t, e) {
                    return "params" === e && (t = s(t, a)), t
                },
                escapeParameters: function(t, e) {
                    return "params" === e && (t = s(t, o)), t
                }
            }, e.escaped = e.escapeParameters, this.addStrategy = function(t, n) {
                return e[t] = n, this
            }, this.removeStrategy = function(t) {
                return delete e[t], this
            }, this.useStrategy = function(t) {
                return r = !0, n = t, this
            }, this.$get = ["$injector", "$log", function(o, a) {
                var s = function(t, n, r) {
                        return angular.forEach(r, function(r) {
                            if (angular.isFunction(r)) t = r(t, n);
                            else {
                                if (!angular.isFunction(e[r])) throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + r + "'");
                                t = e[r](t, n)
                            }
                        }), t
                    },
                    u = function() {
                        r || i || (a.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."), i = !0)
                    };
                return o.has("$sanitize") && (t = o.get("$sanitize")), {
                    useStrategy: function(t) {
                        return function(e) {
                            t.useStrategy(e)
                        }
                    }(this),
                    sanitize: function(t, e, r) {
                        if (n || u(), arguments.length < 3 && (r = n), !r) return t;
                        var i = angular.isArray(r) ? r : [r];
                        return s(t, e, i)
                    }
                }
            }];
            var o = function(t) {
                    return angular.element("<div></div>").text(t).html()
                },
                a = function(e) {
                    if (!t) throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");
                    return t(e)
                },
                s = function(t, e) {
                    if (angular.isObject(t)) {
                        var n = angular.isArray(t) ? [] : {};
                        return angular.forEach(t, function(t, r) {
                            n[r] = s(t, e)
                        }), n
                    }
                    return angular.isNumber(t) ? t : e(t)
                }
        }

        function n(t, e, n, r) {
            "use strict";
            var i, o, a, s, u, c, l, f, h, p, d, g, v, m, y, $ = {},
                x = [],
                b = t,
                w = [],
                S = "translate-cloak",
                C = !1,
                E = ".",
                k = 0,
                A = !0,
                _ = "default",
                T = {
                    "default": function(t) {
                        return (t || "").split("-").join("_")
                    },
                    java: function(t) {
                        var e = (t || "").split("-").join("_"),
                            n = e.split("_");
                        return n.length > 1 ? n[0].toLowerCase() + "_" + n[1].toUpperCase() : e
                    },
                    bcp47: function(t) {
                        var e = (t || "").split("_").join("-"),
                            n = e.split("-");
                        return n.length > 1 ? n[0].toLowerCase() + "-" + n[1].toUpperCase() : e
                    }
                },
                N = "2.7.0",
                j = function() {
                    if (angular.isFunction(r.getLocale)) return r.getLocale();
                    var t, n, i = e.$get().navigator,
                        o = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
                    if (angular.isArray(i.languages))
                        for (t = 0; t < i.languages.length; t++)
                            if (n = i.languages[t], n && n.length) return n;
                    for (t = 0; t < o.length; t++)
                        if (n = i[o[t]], n && n.length) return n;
                    return null
                };
            j.displayName = "angular-translate/service: getFirstBrowserLanguage";
            var O = function() {
                var t = j() || "";
                return T[_] && (t = T[_](t)), t
            };
            O.displayName = "angular-translate/service: getLocale";
            var M = function(t, e) {
                    for (var n = 0, r = t.length; r > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                P = function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                D = function(t) {
                    for (var e = [], n = angular.lowercase(t), r = 0, i = x.length; i > r; r++) e.push(angular.lowercase(x[r]));
                    if (M(e, n) > -1) return t;
                    if (o) {
                        var a;
                        for (var s in o) {
                            var u = !1,
                                c = Object.prototype.hasOwnProperty.call(o, s) && angular.lowercase(s) === angular.lowercase(t);
                            if ("*" === s.slice(-1) && (u = s.slice(0, -1) === t.slice(0, s.length - 1)), (c || u) && (a = o[s], M(e, angular.lowercase(a)) > -1)) return a
                        }
                    }
                    if (t) {
                        var l = t.split("_");
                        if (l.length > 1 && M(e, angular.lowercase(l[0])) > -1) return l[0]
                    }
                    return t
                },
                F = function(t, e) {
                    if (!t && !e) return $;
                    if (t && !e) {
                        if (angular.isString(t)) return $[t]
                    } else angular.isObject($[t]) || ($[t] = {}), angular.extend($[t], L(e));
                    return this
                };
            this.translations = F, this.cloakClassName = function(t) {
                return t ? (S = t, this) : S
            };
            var L = function(t, e, n, r) {
                var i, o, a, s;
                e || (e = []), n || (n = {});
                for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (s = t[i], angular.isObject(s) ? L(s, e.concat(i), n, i) : (o = e.length ? "" + e.join(E) + E + i : i, e.length && i === r && (a = "" + e.join(E), n[a] = "@:" + o), n[o] = s));
                return n
            };
            L.displayName = "flatObject", this.addInterpolation = function(t) {
                return w.push(t), this
            }, this.useMessageFormatInterpolation = function() {
                return this.useInterpolation("$translateMessageFormatInterpolation")
            }, this.useInterpolation = function(t) {
                return p = t, this
            }, this.useSanitizeValueStrategy = function(t) {
                return n.useStrategy(t), this
            }, this.preferredLanguage = function(t) {
                return I(t), this
            };
            var I = function(t) {
                return t && (i = t), i
            };
            this.translationNotFoundIndicator = function(t) {
                return this.translationNotFoundIndicatorLeft(t), this.translationNotFoundIndicatorRight(t), this
            }, this.translationNotFoundIndicatorLeft = function(t) {
                return t ? (v = t, this) : v
            }, this.translationNotFoundIndicatorRight = function(t) {
                return t ? (m = t, this) : m
            }, this.fallbackLanguage = function(t) {
                return R(t), this
            };
            var R = function(t) {
                return t ? (angular.isString(t) ? (s = !0, a = [t]) : angular.isArray(t) && (s = !1, a = t), angular.isString(i) && M(a, i) < 0 && a.push(i), this) : s ? a[0] : a
            };
            this.use = function(t) {
                if (t) {
                    if (!$[t] && !d) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + t + "'");
                    return u = t, this
                }
                return u
            };
            var V = function(t) {
                return t ? void(b = t) : f ? f + b : b
            };
            this.storageKey = V, this.useUrlLoader = function(t, e) {
                return this.useLoader("$translateUrlLoader", angular.extend({
                    url: t
                }, e))
            }, this.useStaticFilesLoader = function(t) {
                return this.useLoader("$translateStaticFilesLoader", t)
            }, this.useLoader = function(t, e) {
                return d = t, g = e || {}, this
            }, this.useLocalStorage = function() {
                return this.useStorage("$translateLocalStorage")
            }, this.useCookieStorage = function() {
                return this.useStorage("$translateCookieStorage")
            }, this.useStorage = function(t) {
                return l = t, this
            }, this.storagePrefix = function(t) {
                return t ? (f = t, this) : t
            }, this.useMissingTranslationHandlerLog = function() {
                return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
            }, this.useMissingTranslationHandler = function(t) {
                return h = t, this
            }, this.usePostCompiling = function(t) {
                return C = !!t, this
            }, this.uniformLanguageTag = function(t) {
                return t ? angular.isString(t) && (t = {
                    standard: t
                }) : t = {}, _ = t.standard, this
            }, this.determinePreferredLanguage = function(t) {
                var e = t && angular.isFunction(t) ? t() : O();
                return i = x.length ? D(e) : e, this
            }, this.registerAvailableLanguageKeys = function(t, e) {
                return t ? (x = t, e && (o = e), this) : x
            }, this.useLoaderCache = function(t) {
                return t === !1 ? y = void 0 : t === !0 ? y = !0 : "undefined" == typeof t ? y = "$translationCache" : t && (y = t), this
            }, this.directivePriority = function(t) {
                return void 0 === t ? k : (k = t, this)
            }, this.statefulFilter = function(t) {
                return void 0 === t ? A : (A = t, this)
            }, this.$get = ["$log", "$injector", "$rootScope", "$q", function(t, e, n, r) {
                var o, f, x, E = e.get(p || "$translateDefaultInterpolation"),
                    _ = !1,
                    T = {},
                    j = {},
                    O = function(t, e, n, s) {
                        if (angular.isArray(t)) {
                            var c = function(t) {
                                for (var i = {}, o = [], a = function(t) {
                                        var o = r.defer(),
                                            a = function(e) {
                                                i[t] = e, o.resolve([t, e])
                                            };
                                        return O(t, e, n, s).then(a, a), o.promise
                                    }, u = 0, c = t.length; c > u; u++) o.push(a(t[u]));
                                return r.all(o).then(function() {
                                    return i
                                })
                            };
                            return c(t)
                        }
                        var h = r.defer();
                        t && (t = P.apply(t));
                        var p = function() {
                            var t = i ? j[i] : j[u];
                            if (f = 0, l && !t) {
                                var e = o.get(b);
                                if (t = j[e], a && a.length) {
                                    var n = M(a, e);
                                    f = 0 === n ? 1 : 0, M(a, i) < 0 && a.push(i)
                                }
                            }
                            return t
                        }();
                        if (p) {
                            var d = function() {
                                Z(t, e, n, s).then(h.resolve, h.reject)
                            };
                            d.displayName = "promiseResolved", p["finally"](d, h.reject)
                        } else Z(t, e, n, s).then(h.resolve, h.reject);
                        return h.promise
                    },
                    q = function(t) {
                        return v && (t = [v, t].join(" ")), m && (t = [t, m].join(" ")), t
                    },
                    H = function(t) {
                        u = t, n.$emit("$translateChangeSuccess", {
                            language: t
                        }), l && o.put(O.storageKey(), u), E.setLocale(u);
                        var e = function(t, e) {
                            T[e].setLocale(u)
                        };
                        e.displayName = "eachInterpolatorLocaleSetter", angular.forEach(T, e), n.$emit("$translateChangeEnd", {
                            language: t
                        })
                    },
                    B = function(t) {
                        if (!t) throw "No language key specified for loading.";
                        var i = r.defer();
                        n.$emit("$translateLoadingStart", {
                            language: t
                        }), _ = !0;
                        var o = y;
                        "string" == typeof o && (o = e.get(o));
                        var a = angular.extend({}, g, {
                                key: t,
                                $http: angular.extend({}, {
                                    cache: o
                                }, g.$http)
                            }),
                            s = function(e) {
                                var r = {};
                                n.$emit("$translateLoadingSuccess", {
                                    language: t
                                }), angular.isArray(e) ? angular.forEach(e, function(t) {
                                    angular.extend(r, L(t))
                                }) : angular.extend(r, L(e)), _ = !1, i.resolve({
                                    key: t,
                                    table: r
                                }), n.$emit("$translateLoadingEnd", {
                                    language: t
                                })
                            };
                        s.displayName = "onLoaderSuccess";
                        var u = function(t) {
                            n.$emit("$translateLoadingError", {
                                language: t
                            }), i.reject(t), n.$emit("$translateLoadingEnd", {
                                language: t
                            })
                        };
                        return u.displayName = "onLoaderError", e.get(d)(a).then(s, u), i.promise
                    };
                if (l && (o = e.get(l), !o.get || !o.put)) throw new Error("Couldn't use storage '" + l + "', missing get() or put() method!");
                if (w.length) {
                    var z = function(t) {
                        var n = e.get(t);
                        n.setLocale(i || u), T[n.getInterpolationIdentifier()] = n
                    };
                    z.displayName = "interpolationFactoryAdder", angular.forEach(w, z)
                }
                var U = function(t) {
                        var e = r.defer();
                        if (Object.prototype.hasOwnProperty.call($, t)) e.resolve($[t]);
                        else if (j[t]) {
                            var n = function(t) {
                                F(t.key, t.table), e.resolve(t.table)
                            };
                            n.displayName = "translationTableResolver", j[t].then(n, e.reject)
                        } else e.reject();
                        return e.promise
                    },
                    W = function(t, e, n, i) {
                        var o = r.defer(),
                            a = function(r) {
                                if (Object.prototype.hasOwnProperty.call(r, e)) {
                                    i.setLocale(t);
                                    var a = r[e];
                                    "@:" === a.substr(0, 2) ? W(t, a.substr(2), n, i).then(o.resolve, o.reject) : o.resolve(i.interpolate(r[e], n)), i.setLocale(u)
                                } else o.reject()
                            };
                        return a.displayName = "fallbackTranslationResolver", U(t).then(a, o.reject), o.promise
                    },
                    G = function(t, e, n, r) {
                        var i, o = $[t];
                        if (o && Object.prototype.hasOwnProperty.call(o, e)) {
                            if (r.setLocale(t), i = r.interpolate(o[e], n), "@:" === i.substr(0, 2)) return G(t, i.substr(2), n, r);
                            r.setLocale(u)
                        }
                        return i
                    },
                    X = function(t, n) {
                        if (h) {
                            var r = e.get(h)(t, u, n);
                            return void 0 !== r ? r : t
                        }
                        return t
                    },
                    Y = function(t, e, n, i, o) {
                        var s = r.defer();
                        if (t < a.length) {
                            var u = a[t];
                            W(u, e, n, i).then(s.resolve, function() {
                                Y(t + 1, e, n, i, o).then(s.resolve)
                            })
                        } else o ? s.resolve(o) : s.resolve(X(e, n));
                        return s.promise
                    },
                    K = function(t, e, n, r) {
                        var i;
                        if (t < a.length) {
                            var o = a[t];
                            i = G(o, e, n, r), i || (i = K(t + 1, e, n, r))
                        }
                        return i
                    },
                    J = function(t, e, n, r) {
                        return Y(x > 0 ? x : f, t, e, n, r)
                    },
                    Q = function(t, e, n) {
                        return K(x > 0 ? x : f, t, e, n)
                    },
                    Z = function(t, e, n, i) {
                        var o = r.defer(),
                            s = u ? $[u] : $,
                            c = n ? T[n] : E;
                        if (s && Object.prototype.hasOwnProperty.call(s, t)) {
                            var l = s[t];
                            "@:" === l.substr(0, 2) ? O(l.substr(2), e, n, i).then(o.resolve, o.reject) : o.resolve(c.interpolate(l, e))
                        } else {
                            var f;
                            h && !_ && (f = X(t, e)), u && a && a.length ? J(t, e, c, i).then(function(t) {
                                o.resolve(t)
                            }, function(t) {
                                o.reject(q(t))
                            }) : h && !_ && f ? i ? o.resolve(i) : o.resolve(f) : i ? o.resolve(i) : o.reject(q(t))
                        }
                        return o.promise
                    },
                    tt = function(t, e, n) {
                        var r, i = u ? $[u] : $,
                            o = E;
                        if (T && Object.prototype.hasOwnProperty.call(T, n) && (o = T[n]), i && Object.prototype.hasOwnProperty.call(i, t)) {
                            var s = i[t];
                            r = "@:" === s.substr(0, 2) ? tt(s.substr(2), e, n) : o.interpolate(s, e)
                        } else {
                            var c;
                            h && !_ && (c = X(t, e)), u && a && a.length ? (f = 0, r = Q(t, e, o)) : r = h && !_ && c ? c : q(t)
                        }
                        return r
                    },
                    et = function(t) {
                        c === t && (c = void 0), j[t] = void 0
                    };
                if (O.preferredLanguage = function(t) {
                        return t && I(t), i
                    }, O.cloakClassName = function() {
                        return S
                    }, O.fallbackLanguage = function(t) {
                        if (void 0 !== t && null !== t) {
                            if (R(t), d && a && a.length)
                                for (var e = 0, n = a.length; n > e; e++) j[a[e]] || (j[a[e]] = B(a[e]));
                            O.use(O.use())
                        }
                        return s ? a[0] : a
                    }, O.useFallbackLanguage = function(t) {
                        if (void 0 !== t && null !== t)
                            if (t) {
                                var e = M(a, t);
                                e > -1 && (x = e)
                            } else x = 0
                    }, O.proposedLanguage = function() {
                        return c
                    }, O.storage = function() {
                        return o
                    }, O.use = function(t) {
                        if (!t) return u;
                        var e = r.defer();
                        n.$emit("$translateChangeStart", {
                            language: t
                        });
                        var i = D(t);
                        return i && (t = i), $[t] || !d || j[t] ? c === t && j[t] ? j[t].then(function(t) {
                            return e.resolve(t.key), t
                        }, function(t) {
                            return e.reject(t), r.reject(t)
                        }) : (e.resolve(t), H(t)) : (c = t, j[t] = B(t).then(function(t) {
                            return F(t.key, t.table), e.resolve(t.key), H(t.key), t
                        }, function(t) {
                            return n.$emit("$translateChangeError", {
                                language: t
                            }), e.reject(t), n.$emit("$translateChangeEnd", {
                                language: t
                            }), r.reject(t)
                        }), j[t]["finally"](function() {
                            et(t)
                        })), e.promise
                    }, O.storageKey = function() {
                        return V()
                    }, O.isPostCompilingEnabled = function() {
                        return C
                    }, O.refresh = function(t) {
                        function e() {
                            o.resolve(), n.$emit("$translateRefreshEnd", {
                                language: t
                            })
                        }

                        function i() {
                            o.reject(), n.$emit("$translateRefreshEnd", {
                                language: t
                            })
                        }
                        if (!d) throw new Error("Couldn't refresh translation table, no loader registered!");
                        var o = r.defer();
                        if (n.$emit("$translateRefreshStart", {
                                language: t
                            }), t)
                            if ($[t]) {
                                var s = function(n) {
                                    F(n.key, n.table), t === u && H(u), e()
                                };
                                s.displayName = "refreshPostProcessor", B(t).then(s, i)
                            } else i();
                        else {
                            var c = [],
                                l = {};
                            if (a && a.length)
                                for (var f = 0, h = a.length; h > f; f++) c.push(B(a[f])), l[a[f]] = !0;
                            u && !l[u] && c.push(B(u));
                            var p = function(t) {
                                $ = {}, angular.forEach(t, function(t) {
                                    F(t.key, t.table)
                                }), u && H(u), e()
                            };
                            p.displayName = "refreshPostProcessor", r.all(c).then(p)
                        }
                        return o.promise
                    }, O.instant = function(t, e, n) {
                        if (null === t || angular.isUndefined(t)) return t;
                        if (angular.isArray(t)) {
                            for (var r = {}, o = 0, s = t.length; s > o; o++) r[t[o]] = O.instant(t[o], e, n);
                            return r
                        }
                        if (angular.isString(t) && t.length < 1) return t;
                        t && (t = P.apply(t));
                        var c, l = [];
                        i && l.push(i), u && l.push(u), a && a.length && (l = l.concat(a));
                        for (var f = 0, p = l.length; p > f; f++) {
                            var d = l[f];
                            if ($[d] && ("undefined" != typeof $[d][t] ? c = tt(t, e, n) : (v || m) && (c = q(t))), "undefined" != typeof c) break
                        }
                        return c || "" === c || (c = E.interpolate(t, e), h && !_ && (c = X(t, e))), c
                    }, O.versionInfo = function() {
                        return N
                    }, O.loaderCache = function() {
                        return y
                    }, O.directivePriority = function() {
                        return k
                    }, O.statefulFilter = function() {
                        return A
                    }, d && (angular.equals($, {}) && O.use(O.use()), a && a.length))
                    for (var nt = function(t) {
                            return F(t.key, t.table), n.$emit("$translateChangeEnd", {
                                language: t.key
                            }), t
                        }, rt = 0, it = a.length; it > rt; rt++) {
                        var ot = a[rt];
                        $[ot] || (j[ot] = B(ot).then(nt))
                    }
                return O
            }]
        }

        function r(t, e) {
            "use strict";
            var n, r = {},
                i = "default";
            return r.setLocale = function(t) {
                n = t
            }, r.getInterpolationIdentifier = function() {
                return i
            }, r.useSanitizeValueStrategy = function(t) {
                return e.useStrategy(t), this
            }, r.interpolate = function(n, r) {
                r = r || {}, r = e.sanitize(r, "params");
                var i = t(n)(r);
                return i = e.sanitize(i, "text")
            }, r
        }

        function i(t, e, n, r, i, o) {
            "use strict";
            var a = function() {
                return this.replace(/^\s+|\s+$/g, "")
            };
            return {
                restrict: "AE",
                scope: !0,
                priority: t.directivePriority(),
                compile: function(e, s) {
                    var u = s.translateValues ? s.translateValues : void 0,
                        c = s.translateInterpolation ? s.translateInterpolation : void 0,
                        l = e[0].outerHTML.match(/translate-value-+/i),
                        f = "^(.*)(" + n.startSymbol() + ".*" + n.endSymbol() + ")(.*)",
                        h = "^(.*)" + n.startSymbol() + "(.*)" + n.endSymbol() + "(.*)";
                    return function(e, p, d) {
                        e.interpolateParams = {}, e.preText = "", e.postText = "";
                        var g = {},
                            v = function(t, n, r) {
                                if (n.translateValues && angular.extend(t, i(n.translateValues)(e.$parent)), l)
                                    for (var o in r)
                                        if (Object.prototype.hasOwnProperty.call(n, o) && "translateValue" === o.substr(0, 14) && "translateValues" !== o) {
                                            var a = angular.lowercase(o.substr(14, 1)) + o.substr(15);
                                            t[a] = r[o]
                                        }
                            },
                            m = function(t) {
                                if (angular.isFunction(m._unwatchOld) && (m._unwatchOld(), m._unwatchOld = void 0), angular.equals(t, "") || !angular.isDefined(t)) {
                                    var r = a.apply(p.text()).match(f);
                                    if (angular.isArray(r)) {
                                        e.preText = r[1], e.postText = r[3], g.translate = n(r[2])(e.$parent);
                                        var i = p.text().match(h);
                                        angular.isArray(i) && i[2] && i[2].length && (m._unwatchOld = e.$watch(i[2], function(t) {
                                            g.translate = t, S()
                                        }))
                                    } else g.translate = p.text().replace(/^\s+|\s+$/g, "")
                                } else g.translate = t;
                                S()
                            },
                            y = function(t) {
                                d.$observe(t, function(e) {
                                    g[t] = e, S()
                                })
                            };
                        v(e.interpolateParams, d, s);
                        var $ = !0;
                        d.$observe("translate", function(t) {
                            "undefined" == typeof t ? m("") : "" === t && $ || (g.translate = t, S()), $ = !1
                        });
                        for (var x in d) d.hasOwnProperty(x) && "translateAttr" === x.substr(0, 13) && y(x);
                        if (d.$observe("translateDefault", function(t) {
                                e.defaultText = t
                            }), u && d.$observe("translateValues", function(t) {
                                t && e.$parent.$watch(function() {
                                    angular.extend(e.interpolateParams, i(t)(e.$parent))
                                })
                            }), l) {
                            var b = function(t) {
                                d.$observe(t, function(n) {
                                    var r = angular.lowercase(t.substr(14, 1)) + t.substr(15);
                                    e.interpolateParams[r] = n
                                })
                            };
                            for (var w in d) Object.prototype.hasOwnProperty.call(d, w) && "translateValue" === w.substr(0, 14) && "translateValues" !== w && b(w)
                        }
                        var S = function() {
                                for (var t in g) g.hasOwnProperty(t) && void 0 !== g[t] && C(t, g[t], e, e.interpolateParams, e.defaultText)
                            },
                            C = function(e, n, r, i, o) {
                                n ? t(n, i, c, o).then(function(t) {
                                    E(t, r, !0, e)
                                }, function(t) {
                                    E(t, r, !1, e)
                                }) : E(n, r, !1, e)
                            },
                            E = function(e, n, i, o) {
                                if ("translate" === o) {
                                    i || "undefined" == typeof n.defaultText || (e = n.defaultText), p.html(n.preText + e + n.postText);
                                    var a = t.isPostCompilingEnabled(),
                                        u = "undefined" != typeof s.translateCompile,
                                        c = u && "false" !== s.translateCompile;
                                    (a && !u || c) && r(p.contents())(n)
                                } else {
                                    i || "undefined" == typeof n.defaultText || (e = n.defaultText);
                                    var l = d.$attr[o];
                                    "data-" === l.substr(0, 5) && (l = l.substr(5)), l = l.substr(15), p.attr(l, e)
                                }
                            };
                        (u || l || d.translateDefault) && e.$watch("interpolateParams", S, !0);
                        var k = o.$on("$translateChangeSuccess", S);
                        p.text().length && m(d.translate ? d.translate : ""), S(), e.$on("$destroy", k)
                    }
                }
            }
        }

        function o(t, e) {
            "use strict";
            return {
                compile: function(n) {
                    var r = function() {
                            n.addClass(e.cloakClassName())
                        },
                        i = function() {
                            n.removeClass(e.cloakClassName())
                        },
                        o = t.$on("$translateChangeEnd", function() {
                            i(), o(), o = null
                        });
                    return r(),
                        function(t, n, o) {
                            o.translateCloak && o.translateCloak.length && o.$observe("translateCloak", function(t) {
                                e(t).then(i, r)
                            })
                        }
                }
            }
        }

        function a(t, e) {
            "use strict";
            var n = function(n, r, i) {
                return angular.isObject(r) || (r = t(r)(this)), e.instant(n, r, i)
            };
            return e.statefulFilter() && (n.$stateful = !0), n
        }
        return angular.module("pascalprecht.translate", ["ng"]).run(t), t.$inject = ["$translate"], t.displayName = "runTranslate", angular.module("pascalprecht.translate").provider("$translateSanitization", e), angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider", {}).provider("$translate", n), n.$inject = ["$STORAGE_KEY", "$windowProvider", "$translateSanitizationProvider", "pascalprechtTranslateOverrider"], n.displayName = "displayName", angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", r), r.$inject = ["$interpolate", "$translateSanitization"], r.displayName = "$translateDefaultInterpolation", angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", i), i.$inject = ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope"], i.displayName = "translateDirective", angular.module("pascalprecht.translate").directive("translateCloak", o), o.$inject = ["$rootScope", "$translate"], o.displayName = "translateCloakDirective", angular.module("pascalprecht.translate").filter("translate", a), a.$inject = ["$parse", "$translate"], a.displayName = "translateFilterFactory", "pascalprecht.translate"
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define([], function() {
            return e()
        }) : "object" == typeof exports ? module.exports = e() : e()
    }(this, function() {
        function t(t, e) {
            "use strict";
            return function(n) {
                if (!(n && (angular.isArray(n.files) || angular.isString(n.prefix) && angular.isString(n.suffix)))) throw new Error("Couldn't load static files, no files and prefix or suffix specified!");
                n.files || (n.files = [{
                    prefix: n.prefix,
                    suffix: n.suffix
                }]);
                for (var r = function(r) {
                        if (!r || !angular.isString(r.prefix) || !angular.isString(r.suffix)) throw new Error("Couldn't load static file, no prefix or suffix specified!");
                        var i = t.defer();
                        return e(angular.extend({
                            url: [r.prefix, n.key, r.suffix].join(""),
                            method: "GET",
                            params: ""
                        }, n.$http)).success(function(t) {
                            i.resolve(t)
                        }).error(function() {
                            i.reject(n.key)
                        }), i.promise
                    }, i = t.defer(), o = [], a = n.files.length, s = 0; a > s; s++) o.push(r({
                    prefix: n.files[s].prefix,
                    key: n.key,
                    suffix: n.files[s].suffix
                }));
                return t.all(o).then(function(t) {
                    for (var e = t.length, n = {}, r = 0; e > r; r++)
                        for (var o in t[r]) n[o] = t[r][o];
                    i.resolve(n)
                }, function(t) {
                    i.reject(t)
                }), i.promise
            }
        }
        return angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", t), t.$inject = ["$q", "$http"], t.displayName = "$translateStaticFilesLoader", "pascalprecht.translate"
    });
var startedSecond = (new Date).getSeconds(),
    timeStep = 10,
    totalPointsFromStart = 3 * timeStep + startedSecond % timeStep,
    ChartArea = function(t, e) {
        function n() {
            X || (X = C(), P(), r(), V = i(), q = a(), H = s(), nt = h(), SVG.on(window, "resize", function() {
                X.spof()
            }))
        }

        function r() {
            W = parseFloat(K.width()), z = parseFloat(K.height())
        }

        function i() {
            var t = X.gradient("linear", function(t) {
                t.at({
                    offset: 0,
                    color: "#1594D1",
                    opacity: .4
                }), t.at({
                    offset: 1,
                    color: "#1594D1",
                    opacity: 0
                })
            });
            return t.from(0, 0).to(0, 1), t
        }

        function o(t) {
            return _.union([
                [t[t.length - 1][0], z]
            ], [
                [t[0][0], z]
            ], t)
        }

        function a() {
            return X.polygon().fill({
                color: V
            })
        }

        function s() {
            return X.polyline().fill("none").stroke({
                width: 2,
                color: "#1595D3"
            })
        }

        function u(t) {
            H.animate(l()).plot(t)
        }

        function c(t) {
            q.animate(l()).plot(o(t))
        }

        function l() {
            return U ? B : 0
        }

        function f(t) {
            var e = [];
            return _.each(t, function(t) {
                e.push([k(t[0]), A(t[1])])
            }), e
        }

        function h() {
            return X.group()
        }

        function p(t) {
            return 10 > t && (t = "0" + t), t
        }

        function d(t) {
            return p(t.getHours()) + ":" + p(t.getMinutes()) + ":" + p(t.getSeconds())
        }

        function g() {
            return Y[Y.length - 1]
        }

        function v() {
            _.each(pt, function(t) {
                var e = k(t.time),
                    n = A(t.level) + .5;
                if (t.drawGroup) t.drawGroup.animate(l()).transform({
                    y: n
                }), t.drawArrowGroup.animate(l()).transform({
                    y: n,
                    x: e
                });
                else {
                    var r = 1 === t.type ? "#45C672" : "#EC4D4E";
                    t.drawGroup = X.group();
                    var i = X.line(0, 0, W, 0).stroke({
                        width: 1,
                        color: r
                    });
                    t.drawGroup.add(i), t.drawGroup.transform({
                        y: n
                    }), t.drawArrowGroup = X.group();
                    var o = X.circle(10).fill({
                        color: "#272C33"
                    }).stroke({
                        width: 3,
                        color: r
                    });
                    o.transform({
                        x: -5,
                        y: -5
                    });
                    var a = [];
                    a = 1 === t.type ? [
                        [-6, -2],
                        [0, -12],
                        [6, -2],
                        [-6, -2]
                    ] : [
                        [-6, 2],
                        [0, 12],
                        [6, 2],
                        [-6, 2]
                    ];
                    var s = X.polygon(a).fill({
                        color: r
                    });
                    t.drawArrowGroup.add(s), t.drawArrowGroup.add(o), t.drawArrowGroup.transform({
                        y: n,
                        x: e
                    })
                }
            })
        }

        function m() {
            var t = k(ht + 4 * timeStep) + .5;
            if (rt) rt.transform({
                x: t
            }), setTimeout(function() {
                rt.animate(l()).transform({
                    x: t
                })
            }, 0);
            else {
                rt = X.group();
                var n = k(timeStep),
                    r = X.line(n, 0, n, z - 25).stroke({
                        width: 1,
                        color: "#D5D33D"
                    }),
                    i = X.line(0, 0, 0, z - 25).stroke({
                        width: 1,
                        color: "#9AA6AC"
                    }),
                    o = X.text(e.PURCHASE_EXPIRATION_TIME).move(0, 0).font({
                        family: "Roboto, Arial",
                        weight: 100,
                        size: 10,
                        "text-anchor": "end"
                    }).fill({
                        color: "#D5D33D"
                    }),
                    a = X.text(e.PURCHASE_DEADLINE).move(0, 0).font({
                        family: "Roboto, Arial",
                        weight: 100,
                        size: 10,
                        "text-anchor": "end"
                    }).fill({
                        color: "#9AA6AC"
                    });
                o.rotate(-90).transform({
                    x: n - 10,
                    y: 4
                }), a.rotate(-90).transform({
                    x: -10,
                    y: 4
                }), rt.add(r), rt.add(i), rt.add(o), rt.add(a), rt.transform({
                    x: t
                })
            }
        }

        function y() {
            var t = g(),
                e = t[0],
                n = t[1],
                r = A(n) - .5,
                i = k(e),
                o = 5,
                a = 10,
                s = 2;
            if (st) st.animate(l()).transform({
                y: r
            }), ut.animate(l()).transform({
                x: i,
                y: r
            }), ut.children()[0].animate(l() / 4).opacity(.2).radius(1.4 * a), setTimeout(function() {
                ut.children()[0].animate(l() / 2).opacity(.1).radius(a)
            }, l() / 4);
            else {
                st = X.line(0, 0, W, 0).stroke({
                    width: 1,
                    color: "#4186BA"
                }), st.transform({
                    y: r
                }), ut = X.group(), ut.transform({
                    x: i,
                    y: r
                });
                var u = X.circle(2 * a).fill({
                    color: "RGBA(247, 252, 255, 1)"
                }).opacity(.1);
                u.transform({
                    x: -a,
                    y: -a
                });
                var c = X.circle(2 * o).fill({
                    color: "#F7FCFF"
                });
                c.transform({
                    x: -o,
                    y: -o
                });
                var f = X.circle(2 * s).fill({
                    color: "#528FCC"
                });
                f.transform({
                    x: -s,
                    y: -s
                }), ut.add(u), ut.add(c), ut.add(f)
            }
        }

        function x() {
            0 === ot.length ? _.times(5, function(t) {
                var e = z / 5 * t - .5,
                    n = W - 80,
                    r = X.line(0, e, n, e).stroke({
                        width: 1,
                        color: "RGBA(194, 205, 209, .1)"
                    }),
                    i = E(e).toFixed(6),
                    o = X.text(i).move(n + 6, e - 2.5).font({
                        family: "Roboto, Arial",
                        weight: 100,
                        size: 10,
                        anchor: "left"
                    }).fill({
                        color: "RGBA(194, 205, 209, .8)"
                    });
                ot.push({
                    line: r,
                    text: o
                })
            }) : _.each(ot, function(t, e) {
                var n = z / 5 * e + .5,
                    r = E(n).toFixed(6);
                t.text.text(r)
            })
        }

        function b(t) {
            var e = 0,
                n = new Date,
                r = n.setSeconds(n.getSeconds() - totalPointsFromStart);
            0 === it.length ? _.times(50, function(t) {
                var n = k(e) - .5,
                    i = X.line(n, 0, n, z - 25).stroke({
                        width: 1,
                        color: "RGBA(194, 205, 209, .1)"
                    }),
                    o = d(new Date(r + 1e3 * e)),
                    a = X.text(o).move(n, z - 17).font({
                        family: "Roboto, Arial",
                        weight: 100,
                        size: 10,
                        anchor: "middle"
                    }).fill({
                        color: "RGBA(194, 205, 209, .8)"
                    });
                t > 4 + ft && (i.opacity(0), a.opacity(0)), it.push({
                    line: i,
                    text: a,
                    x: n,
                    time: e
                }), e += timeStep
            }) : _.each(it, function(t, e) {
                var n = k(0);
                ft > e + 2 ? setTimeout(function() {
                    t.line.remove(), t.text.remove()
                }, l()) : (t.line.animate(l()).transform({
                    x: n
                }), t.text.animate(l()).transform({
                    x: n
                })), e >= 3 + ft && 4 + ft >= e && (t.line.opacity(1), t.text.opacity(1))
            })
        }

        function w(t) {
            if (N(Y), U = t, b(), x(), y(), m(), v(), X && Y && Y.length > 0) {
                r();
                var e = f(Y);
                u(e), c(e)
            }
        }

        function S() {
            return {
                width: K.width(),
                height: K.height()
            }
        }

        function C() {
            if (K && K[0]) {
                var t = S();
                return SVG(K[0]).size(t.width, t.height)
            }
        }

        function E(t) {
            var e = (z - t) / (z / 100),
                n = vt.minY + e * vt.rangePercentY;
            return n
        }

        function k(t) {
            var e = (t - vt.minX) / vt.rangePercentX,
                n = (W - et - tt) / 100,
                r = n * e + tt;
            return r
        }

        function A(t) {
            var e = (t - vt.minY) / vt.rangePercentY,
                n = (z - Q - J) / 100;
            return z - n * e - Q
        }

        function T() {
            var t = lt[1];
            _.each(pt, function(e) {
                1 === e.type ? t > e.level ? e.win = 1 : t < e.level && (e.win = 0) : t < e.level ? e.win = 1 : t > e.level && (e.win = 0), t == e.level && (e.win = 2), e.drawGroup.remove(), e.drawArrowGroup.remove()
            }), I("betsCleared", pt), pt = []
        }

        function N(t) {
            var e = 0,
                n = 0,
                r = 1 / 0,
                i = 1 / 0,
                o = 0,
                a = 0,
                s = 0,
                u = 0;
            lt = t[t.length - 1], Z = pt.length > 0 ? 2 : 1, gt > at - 1 && pt.length && (I("expirationTime"), I("expirationEndsIn", timeStep - (gt - at))), gt == at * Z && (ct = !0, ht += gt, gt = 0, ft += 1, Z > 1 && (ft += 1, T())), gt++, _.each(t, function(t, e) {
                e >= ht && t[1] > n && (n = t[1])
            }), _.each(t, function(t, e) {
                e >= ht && t[1] < n && t[1] < i && (i = t[1])
            }), r = ht, e = 5 * timeStep + ht, o = e - r, a = n - i, s = o / 100, u = a / 100, vt = {
                maxX: e,
                maxY: n,
                minX: r,
                minY: i,
                rangeX: o,
                rangeY: a,
                rangePercentX: s,
                rangePercentY: u
            }
        }

        function j(t) {
            Y = _.union(Y, t), _.each(Y, function(t, e) {
                e > 3 && !Y[e][2] && (t[1] = (t[1] + Y[e - 1][1]) / 2, t[2] = !0)
            })
        }

        function O(t, e) {
            var n = lt[1],
                r = lt[0];
            if (4 * timeStep + ht + 1 > r && pt.length < G) {
                var i = {
                    drawGroup: null,
                    amount: e,
                    time: r,
                    level: n,
                    type: 0,
                    win: -1
                };
                if (!lt) return;
                1 === t && (i.type = 1), pt.push(i), v(), I("betSet", e)
            } else pt.length >= G && I("betsLengthMaximum", G), r >= 4 * timeStep + ht + 1 && I("expirationTime")
        }

        function M() {
            return pt
        }

        function P() {
            if (X) {
                var t = S();
                X.size(t.width, t.height), r()
            }
        }

        function D() {
            return $(t)
        }

        function F() {
            return pt
        }

        function L(t, e) {
            e && (dt[t] = e)
        }

        function I(t, e) {
            dt[t] && dt[t](e)
        }
        var R = this,
            V = null,
            q = null,
            H = null,
            B = 900,
            z = 0,
            U = !1,
            W = 0,
            G = 5,
            X = null,
            Y = [],
            K = D(),
            J = 50,
            Q = 50,
            Z = 1,
            tt = 0,
            et = 100,
            nt = null,
            rt = null,
            it = [],
            ot = [],
            at = timeStep,
            st = null,
            ut = null,
            ct = !1,
            lt = null,
            ft = 1,
            ht = 0,
            pt = [],
            dt = {},
            gt = startedSecond % at,
            vt = {
                maxX: 0,
                maxY: 0,
                minX: 0,
                minY: 0,
                rangeX: 0,
                rangeY: 0,
                rangePercentX: 0,
                rangePercentY: 0
            };
        R.draw = w, R.addPoints = j, R.setBet = O, R.resizeScene = P, R.getCurrentBets = M, R.on = L, R.getBets = F, n()
    },
    optionTestApp = angular.module("optionTest", ["pascalprecht.translate"]);
optionTestApp.directive("numbersOnly", function() {
    return {
        require: "ngModel",
        link: function(t, e, n, r) {
            function i(t) {
                if (t) {
                    var e = parseInt(n.maximumValue);
                    e && t > e && (t = e);
                    var i = parseInt(n.minimumValue);
                    i && i > t && (t = i), t.toString().replace(",", "."), t = t.toString().replace(/\.(?=.*\.)|[^\d\.]/g, ""), r.$setViewValue(t), r.$render();
                    var o = parseFloat(t).toFixed(2).toString();
                    return ".00" == o.substring(o.length - 3, o.length) && (o = o.substring(0, o.length - 3)), o
                }
                return ""
            }
            r.$parsers.push(i)
        }
    }
}), optionTestApp.config(["$translateProvider", function(t) {
    function e(t) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var e = new RegExp("[\\?&]" + t + "=([^&#]*)"),
            n = e.exec(location.search);
        return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
    }
    var n = "ru",
        r = e("lang");
    r && (n = r), t.useStaticFilesLoader({
        prefix: "translations/",
        suffix: ".json"
    }), t.registerAvailableLanguageKeys(["ru", "en"]), t.useSanitizeValueStrategy("escaped"), t.use(n), t.fallbackLanguage("en")
}]), optionTestApp.controller("viewportController", ["$scope", "$timeout", "$translate", function(t, e, n) {
    n(["PURCHASE_DEADLINE", "PURCHASE_EXPIRATION_TIME"]).then(function(n) {
        function r() {
            var t = -1,
                e = 1.25,
                n = 1,
                r = o.getBets(),
                i = 0,
                a = 0;
            c && (e = 1.6), _.each(r, function(t) {
                1 === t.type ? i += t.amount : a += t.amount
            }), i > a && (n *= e), a > i && (t *= e), t *= 1e-5, n *= 1e-5;
            var s = _.random(t, n);
            return s
        }

        function i(t) {
            var e;
            return e = t ? t[1] : u, e + r()
        }
        var o = new ChartArea("#scene", n),
            a = 0,
            s = [],
            u = 1.07,
            c = !0;
        _.times(totalPointsFromStart + 2, function() {
            s.push([a, i(s[s.length - 1])]), a += 1
        }), o.addPoints(s), o.draw(!1), setInterval(function() {
            var t = [a, i(s[s.length - 1])];
            s.push(t), o.addPoints([t]), a += 1, o.draw(!0)
        }, 1e3), t.chart = {}, t.chart.betAmount = 100, t.chart.balance = 1e3, t.chart.profit = 1.95, t.chart.result = 0, t.chart.buyClosed = !1, t.chart.expirationEndsSeconds = 0, t.chart.message = "", t.chart.messageTradeResult = "", t.chart.messageHeader = "", t.registerLink = "SITE_LINKS.REGISTER" + location.search, t.demoLink = "SITE_LINKS.DEMO" + location.search, t.siteLink = "SITE_LINKS.SITE" + location.search, o.on("betsLengthMaximum", function(n) {
            e(function() {
                t.chart.maxBets = n, t.chart.message = "MESSAGES.GOT_MAX_BETS"
            }, 0)
        }), o.on("expirationEndsIn", function(n) {
            e(function() {
                t.chart.expirationEndsSeconds = n
            }, 0)
        }), o.on("expirationTime", function() {
            t.chart.buyClosed = !0, c = !1
        }), o.on("betSet", function(n) {
            e(function() {
                t.chart.balance -= t.chart.parseValue(n)
            }, 0)
        }), o.on("betsCleared", function(n) {
            var r = 0,
                i = 0;
            _.each(n, function(e) {
                1 === e.win && (r += e.amount * t.chart.profit), 2 === e.win && (r += e.amount), i += e.amount
            }), r = t.chart.parseValue(r), t.chart.balance += r, e(function() {
                t.chart.buyClosed = !1, r >= i ? (t.chart.messageHeader = "HEADERS.TRADE_SUCCESSFUL", t.chart.tradeResultAmount = r, t.chart.messageTradeResult = " ", t.chart.messageTradeResultSuccess = !0) : (t.chart.messageHeader = "HEADERS.TRADE_UNSUCCESSFUL", t.chart.tradeResultAmount = 0, t.chart.messageTradeResult = "MESSAGES.TRADE_UNSUCCESSFUL", t.chart.messageTradeResultSuccess = !1)
            }, 1e3)
        }), t.$watch("chart.amount", function() {
            t.chart.result = t.chart.parseValue(t.chart.betAmount * t.chart.profit)
        }), t.chart.setResult = function(n) {
            n && e(function() {
                t.chart.amount = n.target.value
            }, 0)
        }, t.chart.bet = function(e, n) {
            return n.preventDefault(), t.chart.message = "", t.chart.messageType = null, t.chart.betAmount <= 0 ? void(t.chart.message = "MESSAGES.BET_AMOUNT_WRONG") : void(t.chart.betAmount <= t.chart.balance ? o.setBet(e, t.chart.betAmount) : t.chart.message = "MESSAGES.INSUFFICIENT_FUNDS")
        }, t.chart.parseValue = function(t) {
            return t = parseFloat(t), t = isFinite(t) ? t.toFixed(2) : 0, parseFloat(t)
        }, t.chart.dismiss = function() {
            t.chart.message = "", t.chart.messageTradeResult = "", t.chart.messageHeader = ""
        }
    })
}]);