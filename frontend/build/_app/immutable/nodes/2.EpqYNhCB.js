import { s as Vt, n as Mt, r as Ft } from "../chunks/scheduler.zMJaRgub.js"; import { S as Jt, i as Kt, e as a, s as o, t as $, c as i, g as A, a as p, b as m, d as tt, f as l, h as s, j as f, k as e, l as h, m as b, n as ut, o as I } from "../chunks/index.aVnu3b9f.js"; function Qt(u) { let T, _ = "HikePlanner", G, v, st = 'Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation', d, r, E, y, H, R = u[0] === 1 ? "time" : "times", z, M, c, S, rt = "Abwärts [m]", et, w, C, g, P, ot, B, V, gt = "Aufwärts [m]", Nt, O, N, kt, k, pt, q, F, Bt = "Distanz [m]", Lt, j, L, Dt, D, ft, x, qt = "Predict", mt, nt, _t, U, J, K, xt = "Dauer:", lt, ht, Ut, Q, W, yt = "DIN33466:", at, vt, wt, X, Y, Ot = "SAC:", it, dt, At, jt; return { c() { T = a("h1"), T.textContent = _, G = o(), v = a("p"), v.innerHTML = st, d = o(), r = a("button"), E = $("Clicked "), y = $(u[0]), H = o(), z = $(R), M = o(), c = a("p"), S = a("strong"), S.textContent = rt, et = o(), w = a("label"), C = a("input"), g = o(), P = a("input"), ot = o(), B = a("p"), V = a("strong"), V.textContent = gt, Nt = o(), O = a("label"), N = a("input"), kt = o(), k = a("input"), pt = o(), q = a("p"), F = a("strong"), F.textContent = Bt, Lt = o(), j = a("label"), L = a("input"), Dt = o(), D = a("input"), ft = o(), x = a("button"), x.textContent = qt, mt = o(), nt = a("p"), _t = o(), U = a("table"), J = a("tr"), K = a("td"), K.textContent = xt, lt = a("td"), ht = $(u[4]), Ut = o(), Q = a("tr"), W = a("td"), W.textContent = yt, at = a("td"), vt = $(u[5]), wt = o(), X = a("tr"), Y = a("td"), Y.textContent = Ot, it = a("td"), dt = $(u[6]), this.h() }, l(t) { T = i(t, "H1", { "data-svelte-h": !0 }), A(T) !== "svelte-e3ww2p" && (T.textContent = _), G = p(t), v = i(t, "P", { "data-svelte-h": !0 }), A(v) !== "svelte-a64301" && (v.innerHTML = st), d = p(t), r = i(t, "BUTTON", {}); var n = m(r); E = tt(n, "Clicked "), y = tt(n, u[0]), H = p(n), z = tt(n, R), n.forEach(l), M = p(t), c = i(t, "P", {}); var Ct = m(c); S = i(Ct, "STRONG", { "data-svelte-h": !0 }), A(S) !== "svelte-4z8nqm" && (S.textContent = rt), et = p(Ct), w = i(Ct, "LABEL", {}); var bt = m(w); C = i(bt, "INPUT", { type: !0, min: !0, max: !0 }), g = p(bt), P = i(bt, "INPUT", { type: !0, min: !0, max: !0 }), bt.forEach(l), Ct.forEach(l), ot = p(t), B = i(t, "P", {}); var Tt = m(B); V = i(Tt, "STRONG", { "data-svelte-h": !0 }), A(V) !== "svelte-12bkxll" && (V.textContent = gt), Nt = p(Tt), O = i(Tt, "LABEL", {}); var Et = m(O); N = i(Et, "INPUT", { type: !0, min: !0, max: !0 }), kt = p(Et), k = i(Et, "INPUT", { type: !0, min: !0, max: !0 }), Et.forEach(l), Tt.forEach(l), pt = p(t), q = i(t, "P", {}); var ct = m(q); F = i(ct, "STRONG", { "data-svelte-h": !0 }), A(F) !== "svelte-gkflnq" && (F.textContent = Bt), Lt = p(ct), j = i(ct, "LABEL", {}); var Pt = m(j); L = i(Pt, "INPUT", { type: !0, min: !0, max: !0 }), Dt = p(Pt), D = i(Pt, "INPUT", { type: !0, min: !0, max: !0 }), Pt.forEach(l), ct.forEach(l), ft = p(t), x = i(t, "BUTTON", { "data-svelte-h": !0 }), A(x) !== "svelte-7qel70" && (x.textContent = qt), mt = p(t), nt = i(t, "P", {}), m(nt).forEach(l), _t = p(t), U = i(t, "TABLE", {}); var Z = m(U); J = i(Z, "TR", {}); var It = m(J); K = i(It, "TD", { "data-svelte-h": !0 }), A(K) !== "svelte-1qjxbrr" && (K.textContent = xt), lt = i(It, "TD", {}); var Gt = m(lt); ht = tt(Gt, u[4]), Gt.forEach(l), It.forEach(l), Ut = p(Z), Q = i(Z, "TR", {}); var Rt = m(Q); W = i(Rt, "TD", { "data-svelte-h": !0 }), A(W) !== "svelte-cb1clj" && (W.textContent = yt), at = i(Rt, "TD", {}); var Ht = m(at); vt = tt(Ht, u[5]), Ht.forEach(l), Rt.forEach(l), wt = p(Z), X = i(Z, "TR", {}); var St = m(X); Y = i(St, "TD", { "data-svelte-h": !0 }), A(Y) !== "svelte-orpm3r" && (Y.textContent = Ot), it = i(St, "TD", {}); var zt = m(it); dt = tt(zt, u[6]), zt.forEach(l), St.forEach(l), Z.forEach(l), this.h() }, h() { s(C, "type", "number"), s(C, "min", "0"), s(C, "max", "10000"), s(P, "type", "range"), s(P, "min", "0"), s(P, "max", "10000"), s(N, "type", "number"), s(N, "min", "0"), s(N, "max", "10000"), s(k, "type", "range"), s(k, "min", "0"), s(k, "max", "10000"), s(L, "type", "number"), s(L, "min", "0"), s(L, "max", "30000"), s(D, "type", "range"), s(D, "min", "0"), s(D, "max", "30000") }, m(t, n) { f(t, T, n), f(t, G, n), f(t, v, n), f(t, d, n), f(t, r, n), e(r, E), e(r, y), e(r, H), e(r, z), f(t, M, n), f(t, c, n), e(c, S), e(c, et), e(c, w), e(w, C), h(C, u[1]), e(w, g), e(w, P), h(P, u[1]), f(t, ot, n), f(t, B, n), e(B, V), e(B, Nt), e(B, O), e(O, N), h(N, u[2]), e(O, kt), e(O, k), h(k, u[2]), f(t, pt, n), f(t, q, n), e(q, F), e(q, Lt), e(q, j), e(j, L), h(L, u[3]), e(j, Dt), e(j, D), h(D, u[3]), f(t, ft, n), f(t, x, n), f(t, mt, n), f(t, nt, n), f(t, _t, n), f(t, U, n), e(U, J), e(J, K), e(J, lt), e(lt, ht), e(U, Ut), e(U, Q), e(Q, W), e(Q, at), e(at, vt), e(U, wt), e(U, X), e(X, Y), e(X, it), e(it, dt), At || (jt = [b(r, "click", u[7]), b(C, "input", u[9]), b(P, "change", u[10]), b(P, "input", u[10]), b(N, "input", u[11]), b(k, "change", u[12]), b(k, "input", u[12]), b(L, "input", u[13]), b(D, "change", u[14]), b(D, "input", u[14]), b(x, "click", u[8])], At = !0) }, p(t, [n]) { n & 1 && ut(y, t[0]), n & 1 && R !== (R = t[0] === 1 ? "time" : "times") && ut(z, R), n & 2 && I(C.value) !== t[1] && h(C, t[1]), n & 2 && h(P, t[1]), n & 4 && I(N.value) !== t[2] && h(N, t[2]), n & 4 && h(k, t[2]), n & 8 && I(L.value) !== t[3] && h(L, t[3]), n & 8 && h(D, t[3]), n & 16 && ut(ht, t[4]), n & 32 && ut(vt, t[5]), n & 64 && ut(dt, t[6]) }, i: Mt, o: Mt, d(t) { t && (l(T), l(G), l(v), l(d), l(r), l(M), l(c), l(ot), l(B), l(pt), l(q), l(ft), l(x), l(mt), l(nt), l(_t), l(U)), At = !1, Ft(jt) } } } function Wt(u, T, _) { let G = location.protocol + "//" + location.host, v = 0; function st() { _(0, v++, v) } let d = 0, r = 0, E = 0, y = "n.a.", H = "n.a.", R = "n.a."; async function z() { let g = await (await fetch(G + "/api/predict?" + new URLSearchParams({ downhill: d, uphill: r, length: E }), { method: "GET" })).json(); console.log(g), _(4, y = g.time), _(5, H = g.din33466), _(6, R = g.sac) } function M() { d = I(this.value), _(1, d) } function c() { d = I(this.value), _(1, d) } function S() { r = I(this.value), _(2, r) } function rt() { r = I(this.value), _(2, r) } function et() { E = I(this.value), _(3, E) } function w() { E = I(this.value), _(3, E) } return [v, d, r, E, y, H, R, st, z, M, c, S, rt, et, w] } class Zt extends Jt { constructor(T) { super(), Kt(this, T, Wt, Qt, Vt, {}) } } export { Zt as component };
