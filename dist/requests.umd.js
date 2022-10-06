;(function(t, i) {
	typeof exports == "object" && typeof module < "u"
		? i(exports)
		: typeof define == "function" && define.amd
		? define(["exports"], i)
		: ((t = typeof globalThis < "u" ? globalThis : t || self),
		  i((t.types = {})))
})(this, function(t) {
	"use strict"
	var m = Object.defineProperty
	var $ = (t, i, l) =>
		i in t
			? m(t, i, { enumerable: !0, configurable: !0, writable: !0, value: l })
			: (t[i] = l)
	var s = (t, i, l) => ($(t, typeof i != "symbol" ? i + "" : i, l), l)
	class i {
		constructor(e) {
			s(this, "httpClient")
			s(this, "cookies")
			s(this, "redirect")
			s(this, "store")
			var h
			const d =
					(e == null ? void 0 : e.$axios) ||
					(e == null ? void 0 : e.HttpClient),
				a = (h = e == null ? void 0 : e.app) == null ? void 0 : h.$cookies,
				p = e == null ? void 0 : e.redirect,
				n = e == null ? void 0 : e.store
			;(this.httpClient = d),
				a && (this.cookies = a),
				p && (this.redirect = p),
				n && (this.store = n)
		}
	}
	class l extends i {
		constructor(e) {
			super(e)
		}
		getAnimals() {
			return this.httpClient.$get("/animals")
		}
		getAnimal(e) {
			return this.httpClient.$get(`/animals/${e}`)
		}
		deleteAnimal(e) {
			return this.httpClient.$delete(`/animals/${e}`)
		}
		deleteUpdate(e, d) {
			return this.httpClient.$delete(`/animals/${e}`, d)
		}
	}
	;(t.AnimalsService = l),
		Object.defineProperties(t, {
			__esModule: { value: !0 },
			[Symbol.toStringTag]: { value: "Module" }
		})
})
