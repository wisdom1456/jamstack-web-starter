"use strict";
function _slicedToArray(t, e) {
    return (
        _arrayWithHoles(t) ||
        _iterableToArrayLimit(t, e) ||
        _unsupportedIterableToArray(t, e) ||
        _nonIterableRest()
    );
}
function _nonIterableRest() {
    throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return (
            "Object" === i && t.constructor && (i = t.constructor.name),
            "Map" === i || "Set" === i
                ? Array.from(t)
                : "Arguments" === i ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                ? _arrayLikeToArray(t, e)
                : void 0
        );
    }
}
function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
    return r;
}
function _iterableToArrayLimit(t, e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
        var i = [],
            r = !0,
            a = !1,
            l = void 0;
        try {
            for (
                var s, n = t[Symbol.iterator]();
                !(r = (s = n.next()).done) &&
                (i.push(s.value), !e || i.length !== e);
                r = !0
            );
        } catch (t) {
            (a = !0), (l = t);
        } finally {
            try {
                r || null == n.return || n.return();
            } finally {
                if (a) throw l;
            }
        }
        return i;
    }
}
function _arrayWithHoles(t) {
    if (Array.isArray(t)) return t;
}
function gallery() {
    return {
        last: 0,
        active: 0,
        default: {
            item: "gallery__item",
            hidden: "gallery__item--hidden",
            left_in: "gallery__anim-left-in",
            left_out: "gallery__anim-left-out",
            right_in: "gallery__anim-right-in",
            right_out: "gallery__anim-right-out",
            lazy: "gallery__image--lazy",
            index: 0
        },
        elements: [],
        init: function (t) {
            var e = this;
            if (void 0 !== t)
                for (var i = 0, r = Object.entries(t); i < r.length; i++) {
                    var a = _slicedToArray(r[i], 2),
                        l = a[0],
                        s = a[1];
                    this.default[l] = s;
                }
            var n = this,
                h = this.$el,
                o = null,
                u = "";
            ["height", "width", "size"].forEach(function (t) {
                void 0 !== n.$refs[t] &&
                    ((o = n.$refs[t].querySelector("img")), (u = t));
            }),
                this.$el
                    .querySelectorAll("." + this.default.item)
                    .forEach(function (t) {
                        e.elements.push(t);
                        var i = t.querySelector("img");
                        if (null === i) return !1;
                        var r = !1;
                        i.classList.contains(e.default.lazy) &&
                            void 0 !== i.dataset.src &&
                            (r = !0);
                        var a = new Image();
                        (a.onload = function () {
                            r &&
                                (i.classList.remove(n.default.lazy),
                                (i.src = a.src));
                            var t = a.naturalWidth / a.naturalHeight;
                            null !== o &&
                                o.src === i.src &&
                                ("height" === u
                                    ? h.style.setProperty(
                                          "--gallery_height",
                                          a.height + "px"
                                      )
                                    : "width" === u
                                    ? (h.style.setProperty(
                                          "--gallery_width",
                                          a.width + "px"
                                      ),
                                      h.style.setProperty(
                                          "--gallery_height",
                                          Math.floor(i.width / t) + "px"
                                      ))
                                    : "size" === u &&
                                      (h.style.setProperty(
                                          "--gallery_width",
                                          a.width + "px"
                                      ),
                                      h.style.setProperty(
                                          "--gallery_height",
                                          a.height + "px"
                                      )));
                        }),
                            (a.src = r ? i.dataset.src : i.src);
                    }),
                this.elements[0].classList.remove(this.default.hidden);
        },
        next: function () {
            (this.last = this.active),
                this.elements.length > this.active + 1
                    ? this.active++
                    : (this.active = 0);
            this.default.left_out, this.default.left_in;
            this.elements[this.active].classList.remove(
                this.default.left_out,
                this.default.left_in,
                this.default.right_out,
                this.default.hidden
            ),
                this.elements[this.active].classList.add(this.default.right_in),
                this.elements[this.last].classList.add(
                    this.default.right_out,
                    this.default.hidden
                ),
                this.elements[this.last].classList.remove(
                    this.default.left_out,
                    this.default.left_in,
                    this.default.right_in
                );
        },
        previous: function () {
            (this.last = this.active),
                this.active - 1 >= 0
                    ? this.active--
                    : (this.active = this.elements.length - 1),
                this.elements[this.active].classList.remove(
                    this.default.right_in,
                    this.default.right_out,
                    this.default.left_out,
                    this.default.hidden
                ),
                this.elements[this.active].classList.add(this.default.left_in),
                this.elements[this.last].classList.add(
                    this.default.hidden,
                    this.default.left_out
                ),
                this.elements[this.last].classList.remove(
                    this.default.right_in,
                    this.default.right_out,
                    this.default.left_in
                );
        }
    };
}
