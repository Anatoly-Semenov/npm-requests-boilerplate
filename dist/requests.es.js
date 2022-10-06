var d = Object.defineProperty
var $ = (l, e, i) =>
	e in l
		? d(l, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
		: (l[e] = i)
var a = (l, e, i) => ($(l, typeof e != "symbol" ? e + "" : e, i), i)
class m {
	constructor(e) {
		a(this, "httpClient")
		a(this, "cookies")
		a(this, "redirect")
		a(this, "store")
		var s
		const i =
				(e == null ? void 0 : e.$axios) || (e == null ? void 0 : e.HttpClient),
			h = (s = e == null ? void 0 : e.app) == null ? void 0 : s.$cookies,
			t = e == null ? void 0 : e.redirect,
			p = e == null ? void 0 : e.store
		;(this.httpClient = i),
			h && (this.cookies = h),
			t && (this.redirect = t),
			p && (this.store = p)
	}
}
class g extends m {
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
	deleteUpdate(e, i) {
		return this.httpClient.$delete(`/animals/${e}`, i)
	}
}
export { g as AnimalsService }
