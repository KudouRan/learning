(function (e) {
  function t(t) {
    for (var i, r, o = t[0], l = t[1], d = t[2], c = 0, p = []; c < o.length; c++) r = o[c], Object.prototype.hasOwnProperty.call(n, r) && n[r] && p.push(n[r][0]), n[r] = 0;
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
    u && u(t);
    while (p.length) p.shift()();
    return s.push.apply(s, d || []), a()
  }

  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], i = !0, r = 1; r < a.length; r++) {
        var l = a[r];
        0 !== n[l] && (i = !1)
      }
      i && (s.splice(t--, 1), e = o(o.s = a[0]))
    }
    return e
  }

  var i = {}, n = {home: 0}, s = [];

  function r(e) {
    return o.p + "js/" + ({}[e] || e) + "." + {"chunk-2d0b381d": "808d8c7b", "chunk-409bc85e": "79ac8e68"}[e] + ".js"
  }

  function o(t) {
    if (i[t]) return i[t].exports;
    var a = i[t] = {i: t, l: !1, exports: {}};
    return e[t].call(a.exports, a, a.exports, o), a.l = !0, a.exports
  }

  o.e = function (e) {
    var t = [], a = n[e];
    if (0 !== a) if (a) t.push(a[2]); else {
      var i = new Promise((function (t, i) {
        a = n[e] = [t, i]
      }));
      t.push(a[2] = i);
      var s, l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, o.nc && l.setAttribute("nonce", o.nc), l.src = r(e);
      var d = new Error;
      s = function (t) {
        l.onerror = l.onload = null, clearTimeout(c);
        var a = n[e];
        if (0 !== a) {
          if (a) {
            var i = t && ("load" === t.type ? "missing" : t.type), s = t && t.target && t.target.src;
            d.message = "Loading chunk " + e + " failed.\n(" + i + ": " + s + ")", d.name = "ChunkLoadError", d.type = i, d.request = s, a[1](d)
          }
          n[e] = void 0
        }
      };
      var c = setTimeout((function () {
        s({type: "timeout", target: l})
      }), 12e4);
      l.onerror = l.onload = s, document.head.appendChild(l)
    }
    return Promise.all(t)
  }, o.m = e, o.c = i, o.d = function (e, t, a) {
    o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
  }, o.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var a = Object.create(null);
    if (o.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) o.d(a, i, function (t) {
      return e[t]
    }.bind(null, i));
    return a
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return o.d(t, "a", t), t
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, o.p = "//s02.mifile.cn/assets/", o.oe = function (e) {
    throw console.error(e), e
  };
  var l = window["webpackJsonp"] = window["webpackJsonp"] || [], d = l.push.bind(l);
  l.push = t, l = l.slice();
  for (var c = 0; c < l.length; c++) t(l[c]);
  var u = d;
  s.push([20, "chunk-vendors"]), a()
})({
  "0542": function (e, t, a) {
  }, "0999": function (e, t, a) {
  }, "18e1": function (e, t, a) {
    "use strict";
    a.r(t);
    a("7ec4"), a("91bf");
    t["default"] = function (e, t) {
      var a = {Dom: {}, objs: {}}, i = function () {
        if (!t) throw"args el is needed."
      }, n = function () {
      }, s = function () {
        if (a) {
          for (var e in a.objs) {
            var t = a.objs[e];
            t && t.destroy && t.destroy()
          }
          a = null
        }
      }, r = function () {
        i(), n()
      };
      return r(), {destroy: s}
    }
  }, "1b9e": function (e, t, a) {
    "use strict";
    a("744f"), a("6c7b"), a("7514"), a("20d6"), a("1c4c"), a("6762"), a("cadf"), a("e804"), a("55dd"), a("d04f"), a("c8ce"), a("87b3"), a("217b"), a("7f7f"), a("f400"), a("7f25"), a("536b"), a("d9ab"), a("f9ab"), a("32d7"), a("25c9"), a("9f3c"), a("042e"), a("c7c6"), a("f4ff"), a("049f"), a("7872"), a("a69f"), a("0b21"), a("6c1a"), a("c7c62"), a("84b4"), a("c5f6"), a("2e37"), a("fca0"), a("7cdf"), a("ee1d"), a("b1b1"), a("87f3"), a("9278"), a("5df2"), a("04ff"), a("f751"), a("4504"), a("fee7"), a("ffc1"), a("0d6d"), a("9986"), a("8e6e"), a("25db"), a("e4f7"), a("b9a1"), a("64d5"), a("9aea"), a("db97"), a("66c8"), a("57f0"), a("165b"), a("456d"), a("cf6a"), a("fd24"), a("8615"), a("551c"), a("097d"), a("df1b"), a("2397"), a("88ca"), a("ba16"), a("d185"), a("ebde"), a("2d34"), a("f6b3"), a("2251"), a("c698"), a("a19f"), a("9253"), a("9275"), a("3b2b"), a("3846"), a("4917"), a("a481"), a("28a5"), a("386d"), a("6b54"), a("4f7f"), a("8a81"), a("ac4d"), a("8449"), a("9c86"), a("fa83"), a("48c0"), a("a032"), a("aef6"), a("d263"), a("6c37"), a("9ec8"), a("5695"), a("2fdb"), a("d0b0"), a("5df3"), a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("262f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");
    var i = function () {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("transition", {
        attrs: {name: "dialog-fade"},
        on: {"after-enter": e.opened, "after-leave": e.closed}
      }, [e.visible ? a("mi-popup", {on: {"popup-mask-click": e.clickMask}}, [a("div", {
        ref: "J_MI_DIALOG",
        staticClass: "mi-dialog__wrapper",
        class: e.dialogClass,
        style: {width: e.width}
      }, [a("div", {
        staticClass: "mi-dialog",
        attrs: {"aria-modal": "true"}
      }, [[e.isHideHeader ? e._e() : a("div", {staticClass: "mi-dialog__header"}, [a("span", {staticClass: "mi-dialog__title"}, [e._v(e._s(e.title))])]), a("a", {
        staticClass: "mi-dialog__headerbtn",
        class: {"no-header": e.isHideHeader},
        on: {click: e.close}
      }, [a("i", {staticClass: "mi-dialog__close iconfont"}, [e._v("")])])], a("div", {
        staticClass: "mi-dialog__body",
        class: {"no-header": e.isHideHeader}
      }, [a("div", {
        ref: "J_MI_DIALOG__BODY",
        staticClass: "mi-dialog__inner",
        attrs: {id: "J_aaa"}
      })]), "confirm" === e.type ? a("div", {staticClass: "el-dialog__footer"}, [a("button", {
        staticClass: "btn btn-primary",
        on: {click: e.ok}
      }, [e._v(e._s(e.okText))]), a("button", {
        staticClass: "btn btn-gray",
        on: {click: e.close}
      }, [e._v(e._s(e.cancelText))])]) : e._e(), "alert" === e.type ? a("div", {staticClass: "el-dialog__footer"}, [a("button", {
        staticClass: "btn btn-primary",
        on: {click: e.close}
      }, [e._v(e._s(e.okText))])]) : e._e()], 2)])]) : e._e()], 1)
    }, n = [], s = function () {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return e.visible ? a("div", {
        staticClass: "mi-popup",
        style: {"z-index": e.zIndex}
      }, [a("transition", {attrs: {name: "mi-modal"}}, [e.mask ? a("div", {
        staticClass: "mi-popup__mask mi-modal",
        on: {
          click: function (t) {
            return t.stopPropagation(), e.clickMask(t)
          }
        }
      }) : e._e()]), a("div", {staticClass: "mi-popup__box"}, [a("div", {staticClass: "mi-popup__content"}, [e._t("default")], 2)])], 1) : e._e()
    }, r = [], o = {
      name: "MiPopup",
      props: {mask: {type: Boolean, default: !0}, zIndex: {type: Number, default: 100}},
      data: function () {
        return {visible: !1}
      },
      methods: {
        show: function () {
          this.visible = !0
        }, hide: function () {
          this.visible = !1
        }, clickMask: function () {
          this.$emit("popup-mask-click")
        }
      },
      mounted: function () {
        this.show()
      }
    }, l = o, d = (a("2f0b"), a("2877")), c = Object(d["a"])(l, s, r, !1, null, "f6440f00", null), u = c.exports, p = {
      name: "MiDialog", components: {MiPopup: u}, data: function () {
        return {
          visible: !1,
          type: "plain",
          title: "",
          width: "800px",
          isHideHeader: !1,
          dialogClass: "",
          contentData: "",
          okText: "确定",
          cancelText: "取消"
        }
      }, created: function () {
      }, methods: {
        open: function () {
          this.visible = !0, this.$emit("open")
        }, opened: function (e) {
          this.$emit("opened", e)
        }, close: function (e) {
          this.visible = !1, this.$emit("close", e)
        }, closed: function () {
          this.$emit("closed")
        }, clickMask: function () {
          this.$emit("mi-popup-mask-click")
        }, ok: function (e) {
          this.$emit("ok", e)
        }
      }
    }, m = p, h = (a("d4c3"), Object(d["a"])(m, i, n, !1, null, "54b15c30", null)), f = h.exports, v = {}, g = null;
    v.install = function (e) {
      e.component(f.name, f);
      var t = new e(f).$mount();
      document.body.appendChild(t.$el), e.prototype.$dialog = function () {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t.type = a.type || "plain", t.title = a.title || "", t.dialogClass = a.dialogClass || "", t.isHideHeader = a.isHideHeader, t.contentData = a.contentData, t.width = a.width || "800px", t.cancelText = a.cancelText || "取消", t.okText = a.okText || "确定";
        var i = e.extend({
          name: "dia-content",
          template: '<div class="mi-dialog__inner">'.concat(a.content, "</div>"),
          data: function () {
            return t.$data
          },
          components: a.components || {}
        }), n = function () {
          t.$off("opened"), t.$off("closed"), t.$off("open"), t.$off("close"), t.$off("mi-popup-mask-click"), t.$off("ok"), g && g.$destroy && (g.$destroy(), g = null)
        }, s = function () {
          n(), t.$on("opened", (function () {
            a.opened && a.opened(g)
          })), t.$on("closed", (function () {
            a.closed && a.closed()
          })), t.$on("open", (function () {
            a.open && a.open()
          })), t.$on("close", (function () {
            a.close && a.close(g)
          })), t.$on("mi-popup-mask-click", (function () {
            a.clickMask && a.clickMask()
          })), t.$off("ok").$on("ok", (function () {
            a.ok && a.ok(g)
          })), t.open(), t.$nextTick((function () {
            g = (new i).$mount(t.$refs.J_MI_DIALOG__BODY)
          }))
        }, r = function () {
          t.close()
        };
        return s(), {hide: r, show: s, destroy: n, open: s}
      }
    };
    var b = v, y = a("a026"), w = a("caf9"), x = a("a417"), S = a("efd9");

    function C(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), a.push.apply(a, i)
      }
      return a
    }

    function E(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? C(a, !0).forEach((function (t) {
          T(e, t, a[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : C(a).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
        }))
      }
      return e
    }

    function T(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e
    }

    function k() {
      var e = !(!document.all || window.atob);
      e && (window.location.href = x["a"].host.wwwSite + "/updateBrowser/index.html")
    }

    function M() {
      "NodeList" in window && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
        t = t || window;
        for (var a = 0; a < this.length; a++) e.call(t, this[a], a, this)
      }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
        var t = (this.document || this.ownerDocument).querySelectorAll(e), a = t.length;
        while (--a >= 0 && t.item(a) !== this) ;
        return a > -1
      })
    }

    function $() {
      k(), y["a"].use(b), y["a"].use(w["a"], {
        filter: {
          httpFormat: function (e, t) {
            e.src && (e.src = e.src.replace(/^http(s?):/i, ""))
          }
        }, attempt: 1
      }), y["a"].mixin({methods: E({}, S["a"])}), M()
    }

    $()
  }, "1bbb": function (e, t, a) {
  }, 20: function (e, t, a) {
    e.exports = a("2757")
  }, 2166: function (e, t, a) {
    "use strict";
    var i = a("7f19"), n = a("a417");
    t["a"] = {
      add: function (e, t) {
        return Object(i["a"])(n["a"].host.cartSite + "/cart/add/" + e.gid, e, t)
      }, delete: function (e, t) {
        return Object(i["a"])(n["a"].host.orderApi + "/cart/delete/" + e.gid, e, t)
      }, getMiniCartList: function (e, t) {
        return Object(i["a"])(n["a"].host.orderApi + "/cart/miniNew", e, t)
      }
    }
  }, 2757: function (e, t, a) {
    "use strict";
    a.r(t);
    a("90f5"), a("e851");
    var i = a("a026"), n = (a("1b9e"), a("f644")), s = a("31bc"), r = a("c7c4"), o = a.n(r), l = function () {
          var e = this, t = e.$createElement, a = e._self._c || t;
          return a("div", {staticClass: "container"}, [e._l(e.floorData, (function (t, i) {
            return ["cells_auto_fill" === t.view_type && t.body && t.body.items ? e._l(t.body.items, (function (t) {
              return a("div", {key: t.ad_position_id, staticClass: "home-banner-box"}, [a("a", {
                attrs: {
                  href: t.action.path,
                  target: "_blank",
                  "data-log_code": t.action.log_code
                }
              }, [a("img", {
                directives: [{
                  name: "lazy",
                  rawName: "v-lazy",
                  value: e.formatImageSize(t.img_url, 1226, 120),
                  expression: "formatImageSize(item.img_url, 1226, 120)"
                }], attrs: {alt: "test", width: "1226", height: "120"}
              })])])
            })) : e._e(), "flash_purchase" === t.view_type && e.showFlashSale ? a("div", {staticClass: "home-flashsale xm-plain-box"}, [a("div", {staticClass: "box-hd"}, [a("h2", {staticClass: "title"}, [e._v(e._s(t.body.floor_name || "小米闪购"))])]), a("div", {staticClass: "box-bd clearfix"}, [e.flashSaleData ? a("flash-sale", {
              attrs: {"flash-sale-data": e.flashSaleData},
              on: {
                "~onEnd": function (t) {
                  return e.getFlashSaleData(t)
                }
              }
            }) : a("div", {staticClass: "loading"}, [a("div", {staticClass: "loader"})])], 1)]) : e._e(), "list_eight_product" === t.view_type && t.body ? a("div", {staticClass: "home-brick-box home-brick-row-2-box xm-plain-box"}, [a("div", {staticClass: "box-hd"}, [a("h2", {staticClass: "title"}, [e._v(e._s(t.body.floor_name))]), a("div", {staticClass: "more"}, [a("a", {
              staticClass: "more-link",
              attrs: {href: t.body.action.path, target: "_blank"}
            }, [e._v(e._s(t.body.more_text)), a("i", {staticClass: "iconfont iconfont-arrow-right-big"})])])]), a("div", {staticClass: "box-bd clearfix"}, [a("div", {staticClass: "row"}, [a("div", {staticClass: "span4"}, [t.body.left_ad && t.body.left_ad.items ? a("ul", {staticClass: "brick-promo-list clearfix"}, e._l(t.body.left_ad.items, (function (i, n) {
              return a("li", {
                key: n,
                class: "brick-item " + (t.body.left_ad.items.length > 1 ? "brick-item-m" : "brick-item-l")
              }, [a("a", {
                attrs: {
                  href: i.action.path,
                  "data-log_code": i.action.log_code,
                  target: "_blank"
                }
              }, [t.body.left_ad.items.length > 1 ? a("img", {
                directives: [{
                  name: "lazy",
                  rawName: "v-lazy",
                  value: e.formatImageSize(i.img_url, 234, 300),
                  expression: "formatImageSize(promo.img_url, 234, 300)"
                }], attrs: {alt: ""}
              }) : a("img", {
                directives: [{
                  name: "lazy",
                  rawName: "v-lazy",
                  value: e.formatImageSize(i.img_url, 234, 614),
                  expression: "formatImageSize(promo.img_url, 234, 614)"
                }], attrs: {alt: ""}
              })])])
            })), 0) : e._e()]), a("div", {staticClass: "span16"}, [t.body.product_list ? a("ul", {staticClass: "brick-list clearfix"}, e._l(t.body.product_list, (function (t, i) {
              return i <= 7 ? a("li", {
                key: i,
                staticClass: "brick-item brick-item-m brick-item-m-2"
              }, [a("a", {
                attrs: {
                  href: t.action.path,
                  "data-log_code": t.action.log_code,
                  target: "_blank"
                }
              }, [a("div", {staticClass: "figure figure-img"}, [a("img", {
                directives: [{
                  name: "lazy",
                  rawName: "v-lazy",
                  value: e.formatImageSize(t.img_url, 200, 200),
                  expression: "formatImageSize(proItem.img_url, 200,200)"
                }], attrs: {width: "160", height: "160", alt: t.product_name}
              })]), a("h3", {staticClass: "title"}, [e._v("\n                                        " + e._s(t.product_name) + "\n                                    ")]), a("p", {staticClass: "desc"}, [e._v(e._s(t.product_brief))]), a("p", {staticClass: "price"}, [a("span", {staticClass: "num"}, [e._v(e._s(Number(t.product_price)))]), e._v("元"), t.show_price_qi ? a("span", [e._v("起")]) : e._e(), t.product_price !== t.product_org_price ? a("del", [a("span", {staticClass: "num"}, [e._v(e._s(Number(t.product_org_price)))]), e._v("元")]) : e._e()])])]) : e._e()
            })), 0) : e._e()])])])]) : e._e(), "list_eight_product_tab" === t.view_type && t.body ? a("div", {staticClass: "home-brick-box home-brick-row-2-box xm-plain-box"}, [a("div", {staticClass: "box-hd clearfix"}, [a("h2", {staticClass: "title"}, [e._v(e._s(t.body.floor_name))]), a("div", {staticClass: "more"}, [t.body.tab_content ? a("ul", {staticClass: "tab-list"}, e._l(t.body.tab_content, (function (t, n) {
              return a("li", {
                key: n, class: t.isActive ? "tab-active" : "", on: {
                  mouseenter: function (t) {
                    return e.changeTab(i, n)
                  }
                }
              }, [e._v("\n                            " + e._s(t.tab_name) + "\n                        ")])
            })), 0) : e._e()])]), a("div", {staticClass: "box-bd"}, [a("div", {staticClass: "row"}, [a("div", {staticClass: "span4"}, [t.body.left_ad && t.body.left_ad.items ? a("ul", {staticClass: "brick-promo-list clearfix"}, e._l(t.body.left_ad.items, (function (i, n) {
              return a("li", {
                key: n,
                class: t.body.left_ad.items.length > 1 ? "brick-item  brick-item-m" : "brick-item  brick-item-l"
              }, [a("a", {
                attrs: {
                  href: i.action.path,
                  "data-log_code": i.action.log_code,
                  target: "_blank"
                }
              }, [t.body.left_ad.items.length > 1 ? a("img", {
                directives: [{
                  name: "lazy",
                  rawName: "v-lazy",
                  value: e.formatImageSize(i.img_url, 234, 300),
                  expression: "formatImageSize(promo.img_url, 234, 300)"
                }], attrs: {alt: ""}
              }) : a("img", {
                directives: [{
                  name: "lazy",
                  rawName: "v-lazy",
                  value: e.formatImageSize(i.img_url, 234, 614),
                  expression: "formatImageSize(promo.img_url, 234, 614)"
                }], attrs: {alt: ""}
              })])])
            })), 0) : e._e()]), a("div", {staticClass: "span16"}, e._l(t.body.tab_content, (function (t, i) {
              return a("div", {key: i}, [t.product_list ? a("ul", {class: ["brick-list clearfix", t.isActive ? "" : "hide"]}, [e._l(t.product_list, (function (t, i) {
                return a("div", {key: i}, [i <= 6 ? a("li", {staticClass: "brick-item brick-item-m brick-item-m-2"}, [a("a", {
                  attrs: {
                    href: t.action.path,
                    "data-log_code": t.action.log_code,
                    target: "_blank"
                  }
                }, [a("div", {staticClass: "figure figure-img"}, [a("img", {
                  directives: [{
                    name: "lazy",
                    rawName: "v-lazy",
                    value: e.formatImageSize(t.img_url, 200, 200),
                    expression: "formatImageSize(proItem.img_url, 200,200)"
                  }], attrs: {width: "160", height: "160", alt: t.product_name}
                })]), a("h3", {staticClass: "title"}, [e._v("\n                                                    " + e._s(t.product_name) + "\n                                                ")]), a("p", {staticClass: "desc"}, [e._v(e._s(t.product_brief))]), a("p", {staticClass: "price"}, [a("span", {staticClass: "num"}, [e._v(e._s(Number(t.product_price)))]), e._v("元"), t.show_price_qi ? a("span", [e._v("起")]) : e._e(), t.product_price !== t.product_org_price ? a("del", [a("span", {staticClass: "num"}, [e._v(e._s(Number(t.product_org_price)))]), e._v("元")]) : e._e()])])]) : e._e(), 7 === i ? a("li", {staticClass: "brick-item brick-item-s"}, [a("a", {
                  attrs: {
                    href: t.action.path,
                    "data-log_code": t.action.log_code,
                    target: "_blank"
                  }
                }, [a("div", {staticClass: "figure figure-img"}, [a("img", {
                  directives: [{
                    name: "lazy",
                    rawName: "v-lazy",
                    value: e.formatImageSize(t.img_url, 100, 100),
                    expression: "formatImageSize(proItem.img_url, 100,100)"
                  }], attrs: {width: "80", height: "80", alt: t.product_name}
                })]), a("h3", {staticClass: "title"}, [e._v("\n                                                    " + e._s(t.product_name) + "\n                                                ")]), a("p", {staticClass: "price"}, [a("span", {staticClass: "num"}, [e._v(e._s(Number(t.product_price)))]), e._v("元"), t.show_price_qi ? a("span", [e._v("起")]) : e._e()])])]) : e._e()])
              })), a("li", {staticClass: "brick-item brick-item-s"}, [a("a", {
                attrs: {
                  href: t.action.path,
                  "data-log_code": t.action.log_code,
                  target: "_blank"
                }
              }, [e._m(0, !0), a("div", {staticClass: "more"}, [e._v("\n                                                " + e._s(t.more_text || "浏览更多") + "\n                                                "), t.isActive ? a("small", [e._v(e._s(t.tab_name))]) : e._e()])])])], 2) : e._e()])
            })), 0)])])]) : e._e(), "list_four_video" === t.view_type ? a("video-list", {attrs: {"video-data": t}}) : e._e()]
          }))], 2)
        }, d = [function () {
          var e = this, t = e.$createElement, a = e._self._c || t;
          return a("div", {staticClass: "figure figure-more"}, [a("i", {staticClass: "iconfont iconfont-circle-arrow-right"})])
        }], c = a("7f19"), u = a("a417"), p = {
          getFlashSale: function (e, t) {
            return Object(c["a"])(u["a"].host.orderApi + "/flashsale/getslideshow", e, t)
          }, getTimestamp: function (e, t) {
            return Object(c["a"])(u["a"].time, e, t)
          }
        }, m = a("986e"), h = function () {
          var e = this, t = e.$createElement, a = e._self._c || t;
          return a("div", {staticClass: "row"}, [a("div", {staticClass: "flashsale-countdown rainbow-item-4 span4"}, [a("div", {staticClass: "round"}, [e._v(e._s(e.flashSaleRound))]), a("img", {
            attrs: {
              src: "data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ\nbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp\nbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6\neD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1\nMTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo\ndHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw\ndGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv\nIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS\nZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD\ncmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j\nZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1\nbWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N\nOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy\nQzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF\nOEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht\ncG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE\ncHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf\nS48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY\njRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN\nJbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL\nijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7\nKnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L\nbN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc\nxDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V\nkBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU\nKc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E\ncnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ\n7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII=",
              alt: "小米闪购"
            }
          }), a("div", {staticClass: "desc"}, [e._v(e._s(e.flashSaleDesc))]), e.flashCountdown ? a("div", {staticClass: "countdown clearfix"}, [a("span", [e._v(e._s(e.flashCountdown.hour))]), a("i", [e._v(":")]), a("span", [e._v(e._s(e.flashCountdown.minite))]), a("i", [e._v(":")]), a("span", [e._v(e._s(e.flashCountdown.second))])]) : e._e()]), a("div", {
            staticClass: "span16 flashsale-list swiper-container swiper-no-swiping",
            attrs: {id: "J_flashSaleList"}
          }, [a("ul", {staticClass: "swiper-wrapper"}, e._l(e.flashSaleData.list, (function (t, i) {
            return a("li", {
              key: i,
              class: "swiper-slide rainbow-item-" + (i + 1)
            }, [a("a", {
              attrs: {
                href: e.wwwUrl + "/seckill/",
                target: "_blank",
                "data-log_code": t.action.log_code + "&bid=3184494"
              }
            }, [a("div", {staticClass: "content"}, [a("div", {staticClass: "thumb"}, [t.pc_img ? a("img", {
              directives: [{
                name: "lazy",
                rawName: "v-lazy",
                value: e.formatImageSize(t.pc_img, 200, 200),
                expression: "formatImageSize(fsItem.pc_img, 200, 200)"
              }], attrs: {alt: t.goods_name, width: "160", height: "160"}
            }) : e._e()]), a("h3", {staticClass: "title"}, [e._v(e._s(t.goods_name))]), a("p", {staticClass: "desc"}, [e._v(e._s(t.desc))]), a("p", {staticClass: "price"}, [a("span", [e._v(e._s(t.seckill_Price))]), e._v("元\n                            "), t.seckill_Price !== t.goods_price ? a("del", [e._v(e._s(t.goods_price) + "元")]) : e._e()]), t.label_text ? a("span", {staticClass: "flag"}, [e._v(" " + e._s(t.label_text))]) : e._e()])])])
          })), 0)]), e.flashSaleData.list && e.flashSaleData.list.length > 4 ? a("div", {staticClass: "swiper-controls"}, [e._m(0), e._m(1)]) : e._e()])
        }, f = [function () {
          var e = this, t = e.$createElement, a = e._self._c || t;
          return a("span", {staticClass: "swiper-flashsale-prev"}, [a("i", {staticClass: "iconfont-arrow-left-big"})])
        }, function () {
          var e = this, t = e.$createElement, a = e._self._c || t;
          return a("span", {staticClass: "swiper-flashsale-next"}, [a("i", {staticClass: "iconfont-arrow-right-big"})])
        }], v = {
          name: "flash-sale", props: ["flashSaleData"], data: function () {
            return {
              flashSaleRound: "",
              flashSaleDesc: "",
              flashCountdown: null,
              flashSaleSwiperInit: null,
              wwwUrl: "",
              isLastRound: !1
            }
          }, methods: {
            getRound: function () {
              var e = this.flashSaleData.start_time, t = new Date(1e3 * e), a = t.getMinutes(), i = t.getHours(),
                  n = window.localStorage.getItem("mi_home_flashsale_round") || "";
              i < 10 && (i = "0" + i), a < 10 && (a = "0" + a), n && Number(n) == e ? this.isLastRound = !0 : window.localStorage.setItem("mi_home_flashsale_round", e), this.flashSaleRound = i + ":" + a + " 场"
            }, getCountdown: function () {
              var e = this, t = this.flashSaleData.start_time, a = this.flashSaleData.end_time,
                  i = (new Date).getTime() / 1e3, n = 0, s = 0, r = 0, o = null, l = function i() {
                    if (s = parseInt((new Date).getTime() / 1e3) + n, r = t - s, o && clearTimeout(o), s >= t && s <= a) e.flashSaleDesc = "距离结束还有", d(a - s), e.$emit("onStart"); else {
                      if (s >= a) return e.flashCountdown = {
                        hour: "00",
                        minite: "00",
                        second: "00"
                      }, void (e.isLastRound ? e.flashSaleDesc = "本场已结束" : setTimeout((function () {
                        e.$emit("onEnd")
                      }), 3e3));
                      e.flashSaleDesc = "距离开始还有", d(r), e.$emit("onBefore")
                    }
                    o = setTimeout((function () {
                      i()
                    }), 1e3)
                  }, d = function (t) {
                    var a, i, n;
                    t <= 0 || (a = Math.floor(t % 60), i = Math.floor(t / 60 % 60), n = Math.floor(t / 3600 % 24), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), a < 10 && (a = "0" + a), e.flashCountdown = {
                      hour: n,
                      minite: i,
                      second: a
                    })
                  }, c = function e() {
                    if (window.servertime && "number" === typeof window.servertime) return i = window.servertime, n = i - parseInt((new Date).getTime() / 1e3), void l();
                    setTimeout(e, 100)
                  };
              p.getTimestamp().then((function (e) {
              })).catch((function (e) {
              })), c()
            }, flashSaleSwiper: function () {
              this.flashSaleSwiperInit = new o.a("#J_flashSaleList", {
                slidesPerView: 4,
                spaceBetween: 14,
                slidesPerGroup: 4,
                loop: !1,
                speed: 1e3,
                autoplay: {delay: 6e3},
                navigation: {nextEl: ".swiper-flashsale-next", prevEl: ".swiper-flashsale-prev"}
              })
            }
          }, mounted: function () {
            var e = this;
            this.wwwUrl = u["a"].host.wwwSite, this.getRound(), m["a"].$nextTick((function () {
              e.flashSaleSwiper(), e.getCountdown(), window.statInit && window.statInit()
            }))
          }
        }, g = v, b = (a("af8b"), a("2877")), y = Object(b["a"])(g, h, f, !1, null, null, null), w = y.exports,
        x = function () {
          var e = this, t = e.$createElement, a = e._self._c || t;
          return e.videoData.body ? a("div", {staticClass: "home-video-box xm-plain-box"}, [a("div", {staticClass: "box-hd"}, [a("h2", {staticClass: "title"}, [e._v(e._s(e.videoData.body.floor_name))]), a("div", {staticClass: "more"}, [a("a", {
            staticClass: "more-link",
            attrs: {
              href: e.videoData.body.action.path,
              "data-log_code": e.videoData.body.action.log_code,
              target: "_blank"
            }
          }, [e._v(e._s(e.videoData.body.more_text)), a("i", {staticClass: "iconfont iconfont-arrow-right-big"})])])]), a("div", {staticClass: "box-bd clearfix"}, [e.videoData.body.items ? a("ul", {staticClass: "video-list clearfix"}, e._l(e.videoData.body.items, (function (t, i) {
            return a("li", {key: i, staticClass: "video-item "}, [a("a", {
              attrs: {
                href: "javascript: void(0);",
                "data-log_code": "",
                title: "点击播放视频"
              }, on: {
                click: function (a) {
                  return e.playVideo(t)
                }
              }
            }, [a("div", {staticClass: "figure figure-img"}, [a("img", {
              directives: [{
                name: "lazy",
                rawName: "v-lazy",
                value: e.formatImageSize(t.img_url, 296, 180),
                expression: "formatImageSize(videoItem.img_url, 296,180)"
              }], attrs: {width: "296", height: "180", alt: t.title}
            }), e._m(0, !0)]), a("h3", {staticClass: "title"}, [e._v("\n                        " + e._s(t.title) + "\n                    ")]), a("p", {staticClass: "desc"}, [e._v("\n                        " + e._s(t.subtitle) + "\n                    ")])])])
          })), 0) : e._e()])]) : e._e()
        }, S = [function () {
          var e = this, t = e.$createElement, a = e._self._c || t;
          return a("span", {staticClass: "play"}, [a("i", {staticClass: "iconfont-play"})])
        }], C = a("6446"), E = {
          name: "video-list", props: ["videoData"], data: function () {
            return {}
          }, methods: {
            playVideo: function (e) {
              m["a"].$dialog({
                title: e.title,
                width: "880px",
                dialogClass: "home-video-dialog",
                contentData: {
                  src: e.video_url, poster: e.img_url, autoplay: !0, onEnd: function () {
                  }
                },
                components: {MiPlayer: C["a"]},
                content: '<mi-player :src="contentData.src" :autoplay="contentData.autoplay" :poster="contentData.poster" v-on:onEnd="contentData.onEnd"></mi-player>'
              })
            }
          }
        }, T = E, k = (a("a4ff"), Object(b["a"])(T, x, S, !1, null, null, null)), M = k.exports, $ = {
          name: "goods-floor", props: ["floorData"], data: function () {
            return {flashSaleData: null, showFlashSale: !1, tabFloor: {}}
          }, methods: {
            changeTab: function (e, t) {
              this.floorData[e] && this.floorData[e].body.tab_content && this.floorData[e].body.tab_content.forEach((function (e, a) {
                a === t ? m["a"].$set(e, "isActive", !0) : m["a"].$set(e, "isActive", !1)
              }))
            }, getFlashSaleData: function () {
              var e = this;
              this.flashSaleData = null, p.getFlashSale({}, {}).then((function (t) {
                t && 200 === t.code ? t.data.list.list && t.data.list.list.length && (e.showFlashSale = !0, e.flashSaleData = t.data.list) : e.showFlashSale = !1
              })).catch((function (e) {
              }))
            }
          }, mounted: function () {
            var e = !1;
            this.floorData && this.floorData.forEach((function (t, a) {
              "list_eight_product_tab" === t.view_type && t.body.tab_content && t.body.tab_content.forEach((function (e, t) {
                0 == t ? m["a"].$set(e, "isActive", !0) : m["a"].$set(e, "isActive", !1)
              })), "flash_purchase" === t.view_type && (e = !0)
            })), e && this.getFlashSaleData(), m["a"].$nextTick((function () {
              window.statInit && window.statInit()
            }))
          }, components: {FlashSale: w, VideoList: M}
        }, _ = $, D = (a("eb3b"), Object(b["a"])(_, l, d, !1, null, null, null)), L = D.exports, I = function () {
          var e = this, t = e.$createElement, a = e._self._c || t;
          return a("div", {class: "home-tool-bar home-tool-bar-" + e.windowType}, [e._l(e.barData, (function (t, i) {
            return [a("a", {
              key: i,
              class: "item " + ("image" === t.type ? "item-image" : ""),
              attrs: {"data-log_code": "bid=" + t.block_id},
              on: {
                click: function (a) {
                  return e.handleJumpType(t.jump_type, t.jump_url)
                }
              }
            }, [a("div", {staticClass: "icon"}, [a("img", {
              staticClass: "static",
              attrs: {src: t.button_img}
            }), a("img", {
              staticClass: "hover",
              attrs: {src: t.button_hover_img}
            })]), a("span", {staticClass: "text"}, [e._v("\n                " + e._s(t.button_title)), "small" === e.windowType && "cart" === t.type ? a("i", [e._v("（" + e._s(e.cartNum) + "）")]) : e._e()]), "image" === t.type && t.qrcode_img ? a("div", {staticClass: "pop-content"}, [a("img", {attrs: {src: t.qrcode_img}}), a("span", {staticClass: "desc"}, [e._v("\n                    " + e._s(t.qrcode_title) + "\n                ")])]) : e._e(), "cart" === t.type && e.cartNum > 0 ? a("span", {
              staticClass: "cart-num",
              attrs: {id: "J_homeToolBarCartNum"}
            }, [e._v(e._s(e.cartNum))]) : e._e()])]
          })), a("a", {
            ref: "J_homeBackTop",
            class: "item backtop " + (e.showBackTop ? "active" : ""),
            attrs: {href: "javascript:void(0);", "data-log_code": "bid=3212729"}
          }, [e._m(0), a("span", {staticClass: "text"}, [e._v("回顶部")])])], 2)
        }, P = [function () {
          var e = this, t = e.$createElement, a = e._self._c || t;
          return a("div", {staticClass: "icon"}, [a("img", {
            staticClass: "static",
            attrs: {src: "//i1.mifile.cn/f/i/2018/home/totop.png"}
          }), a("img", {staticClass: "hover", attrs: {src: "//i1.mifile.cn/f/i/2018/home/totop_hover.png"}})])
        }], z = a("91bf"), A = a("2ec8"), O = {
          name: "tool-bar", props: ["barData"], data: function () {
            return {windowType: "large", cartNum: 0, windowHeight: 0, showBackTop: !1}
          }, methods: {
            checkWindow: function () {
              var e = document.body.clientWidth, t = window.screen.height;
              this.windowType = e <= 1280 ? "small mini" : e <= 1440 ? "small" : "large", this.windowHeight = t
            }, checkWindowScroll: function () {
              var e = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
              this.showBackTop = e > this.windowHeight
            }, getCartNum: function () {
              var e = Object(A["a"])("xm_user_www_num");
              e && Number(e) > 0 ? this.cartNum = e : this.cartNum = 0
            }, backTop: function () {
              window.scrollTo ? window.scrollTo(0, 0) : window.scroll ? window.scroll(0, 0) : document.querySelector("html").scrollTop = 0
            }, handleJumpType: function (e, t) {
              if (!t) return !1;
              if (1 == e) window.open(t); else if (2 == e) {
                var a = "", i = 360, n = 790, s = (window.screen.availHeight - n) / 2,
                    r = (window.screen.availWidth - i) / 2;
                window.open(t, a, "top=".concat(s, ",left=").concat(r, ",height=").concat(n, ",width=").concat(i, ",status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no,ullscreen=no"))
              } else 3 == e && (window.location.href = t)
            }
          }, mounted: function () {
            z["a"].addEvt(window, "resize", this.checkWindow), z["a"].addEvt(window, "scroll", this.checkWindowScroll), z["a"].addEvt(this.$refs.J_homeBackTop, "click", this.backTop), this.checkWindow(), m["a"].$on("updateToolBarCartNum", this.getCartNum)
          }
        }, N = O, j = (a("8c41"), Object(b["a"])(N, I, P, !1, null, "46eb6e70", null)), H = j.exports;

    function F(e) {
      return G(e) || V(e) || B()
    }

    function B() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }

    function V(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }

    function G(e) {
      if (Array.isArray(e)) {
        for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
        return a
      }
    }

    new i["a"]({
      data: function () {
        return {$swiper: null, goodsFloorData: {}, toolBarData: []}
      }, methods: {
        swiperInit: function () {
          var e = this, t = this, a = document.querySelector("#J_homeSwiper").querySelectorAll("img");
          F(a).length && (a.forEach((function (t, a) {
            if (!(a <= 0)) {
              var i = t.getAttribute("data-src"), n = e.formatImageSize(i, 1226, 460);
              t.setAttribute("data-src", n)
            }
          })), this.$swiper = new o.a("#J_homeSwiper", {
            effect: "fade",
            loop: !0,
            speed: 800,
            autoplay: {delay: 5e3},
            fadeEffect: !0,
            pagination: {el: ".swiper-pagination", clickable: !0, bulletElement: "a"},
            navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
            preloadImages: !1,
            lazy: {loadPrevNext: !0, loadPrevNextAmount: 1}
          }), this.$swiper.el.onmouseover = function () {
            t.$swiper.autoplay.stop()
          }, this.$swiper.el.onmouseout = function () {
            t.$swiper.autoplay.start()
          })
        }, promoInit: function () {
          var e = this, t = document.querySelector("#J_homePromoList").querySelectorAll("img");
          F(t).length && F(t).forEach((function (t) {
            var a = t.getAttribute("data-src"), i = e.formatImageSize(a, 316, 170);
            t.setAttribute("src", i), t.removeAttribute("data-src")
          }))
        }
      }, created: function () {
        this.goodsFloorData = $GLOBAL_HOME.goodsFloorData, this.toolBarData = $GLOBAL_HOME.toolBarData
      }, mounted: function () {
        this.header = Object(n["default"])(this, this.$refs.J_siteHeader), this.footer = Object(s["default"])(this, this.$refs.J_siteFooter), this.swiperInit(), $GLOBAL_HOME.doodleData && $GLOBAL_HOME.doodleData.img_url && (document.querySelector("#J_doodleWrapper").innerHTML = '<div class="doodle"><a class="link-block" style="background-image:url(' + $GLOBAL_HOME.doodleData.img_url + ')" href="' + $GLOBAL_HOME.doodleData.action.path + '" data-log_code="' + $GLOBAL_HOME.doodleData.action.log_code + '"  target="_blank" ></a></div>'), $GLOBAL_HOME.topbarBannerData && $GLOBAL_HOME.topbarBannerData.img_url && (document.querySelector("#J_topbarBannerWrapper").innerHTML = '<div class="site-bn-bar"><a class="link-block" style="background-image:url(' + this.formatImageSize($GLOBAL_HOME.topbarBannerData.img_url, 2560, 120) + ')" href="' + $GLOBAL_HOME.topbarBannerData.action.path + '" data-log_code="' + $GLOBAL_HOME.topbarBannerData.action.log_code + '"  target="_blank" ></a></div>')
      }, components: {GoodsFloor: L, ToolBar: H}, destroyed: function () {
        this.header.destroy(), this.footer.destroy()
      }
    }).$mount("#app")
  }, "28e0": function (e, t, a) {
    "use strict";
    var i = a("68d3"), n = a.n(i);
    n.a
  }, "2b96": function (e, t, a) {
  }, "2ec8": function (e, t, a) {
    "use strict";

    function i(e, t, a) {
      if (arguments.length > 1 && "[object Object]" !== String(t)) {
        if (a = Object.assign({}, a), null !== t && void 0 !== t || (a.expires = -1), "number" === typeof a.expires) {
          var i = a.expires, n = a.expires = new Date;
          n.setDate(n.getDate() + i)
        }
        return t = String(t), document.cookie = [encodeURIComponent(e), "=", a.raw ? t : encodeURIComponent(t), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
      }
      var s;
      a = t || {};
      var r = a.raw ? function (e) {
        return e
      } : decodeURIComponent;
      return (s = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? r(s[1]) : null
    }

    t["a"] = i
  }, "2f0b": function (e, t, a) {
    "use strict";
    var i = a("1bbb"), n = a.n(i);
    n.a
  }, "314b": function (e, t, a) {
    "use strict";
    var i = function (e) {
      var t, a, i = /[^<>]+|<(\/?)([A-Za-z0-9]+)([^<>]*)>/g, n = [];
      while (t = i.exec(e)) {
        var s = [];
        for (a = 0; a < t.length; a += 1) s.push(t[a]);
        n.push(s)
      }
      return n
    };

    function n(e) {
      return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, n(e)
    }

    var s = /([a-z\d-]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^\s]+)))?/gi, r = /^on([a-z\d-]*)$/i,
        o = /&#(x?)([a-z\d]*);?/gi, l = /(javascript|vbscript|expression|applet)/i,
        d = /^(audio|video|html|object|embed|param|body|head|form|script|iframe|expression|applet|meta|xml|blink|style|frame|frameset|ilayer|layer|bgsound|title|base)$/i,
        c = function (e) {
          return e.replace(s, (function (e, t, a) {
            var i = e.replace(o, (function () {
              var e = arguments[1], t = arguments[2];
              return String.fromCharCode(e ? parseInt(t, 16) : t)
            })).replace(/(\s|%20)/g, "");
            return l.test(i) || r.test(t) ? "" : e
          }))
        }, u = function (e) {
          var t = e[0], a = e[1], i = e[2], n = e[3];
          return d.test(i) ? "" : i && n ? a ? ["</", i, ">"].join("") : ["<", i, " ", c(n), ">"].join("") : t
        }, p = function (e, t) {
          for (var a = [], i = 0, n = e.length; i < n; i += 1) {
            var s = t(e[i], i);
            if (!1 === s) break;
            null !== s && (a[i] = s)
          }
          return a
        }, m = function (e, t) {
          var a = {};
          for (var i in e) {
            var n = t(e[i], i);
            if (!1 === n) break;
            null !== n && (a[i] = n)
          }
          return a
        }, h = function (e, t) {
          return Array.isArray(e) || e.length && void 0 !== e[0] ? p(e, t) : "object" === n(e) ? m(e, t) : null
        };
    t["a"] = function (e) {
      var t = i(e);
      return t = h(t, u), t.join("")
    }
  }, "31bc": function (e, t, a) {
    "use strict";
    a.r(t);
    a("0999");
    var i = a("91bf");
    a("18e1");

    function n(e) {
      return o(e) || r(e) || s()
    }

    function s() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }

    function r(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }

    function o(e) {
      if (Array.isArray(e)) {
        for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
        return a
      }
    }

    t["default"] = function (e, t) {
      var a = {
        Dom: {}, objs: {}, domEvtFuns: {
          weixinDialog: function () {
            e.$dialog({
              title: "小米手机官方微信二维码",
              width: "720px",
              dialogClass: "site-weixin-dia",
              content: '<img alt="" src="//i1.mifile.cn/f/i/17/site/weixin.jpg" width="680" height="340">'
            })
          }
        }
      }, s = function () {
        if (!t) throw"args el is needed."
      }, r = function () {
        a.Dom.$weixin = t.querySelector("#J_siteWeixinCode"), a.Dom.$weixinSub = document.querySelectorAll('[data-show-weixin="true"]')
      }, o = function () {
      }, l = function () {
        i["a"].addEvt(a.Dom.$weixin, "click", a.domEvtFuns.weixinDialog), n(a.Dom.$weixinSub).length && n(a.Dom.$weixinSub).forEach((function (e) {
          i["a"].addEvt(e, "click", a.domEvtFuns.weixinDialog)
        }))
      }, d = function () {
        if (a) {
          for (var e in a.objs) {
            var t = a.objs[e];
            t && t.destroy && t.destroy()
          }
          a = null
        }
      }, c = function () {
        s(), r(), o(), l()
      };
      return c(), {destroy: d}
    }
  }, "341d": function (e, t, a) {
  }, "3bf3": function (e, t, a) {
  }, "3c4d": function (e, t, a) {
  }, "4de9": function (e, t, a) {
  }, 6056: function (e, t, a) {
  }, 6446: function (e, t, a) {
    "use strict";
    var i = function () {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("div", {staticClass: "mi-video-player"}, [a("div", {
        ref: "miPlayerVideoWrapper",
        staticClass: "mi-video-wrapper",
        attrs: {id: "miPlayerVideoWrapper"}
      }, [a("div", {staticClass: "mi-video-box"}, [a("video", {
        ref: "miPlayerVideo",
        style: e.setVideoStyle(),
        attrs: {id: "miPlayerVideo", poster: e.poster, src: e.src, preload: "none", width: e.width, height: e.height}
      })]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.state.loading,
          expression: "state.loading"
        }], staticClass: "mi-video-loading"
      }, [a("img", {
        attrs: {
          src: "//hd.mi.com/x/03021d/img/loading.gif",
          alt: "正在加载..."
        }
      })]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.state.playing,
          expression: "!state.playing"
        }], staticClass: "mi-video-play-btn", on: {click: e.play}
      }), a("div", {
        staticClass: "mi-video-control clearfix",
        class: e.state.contrlShow ? "active" : ""
      }, [a("div", {
        ref: "miPlayerVideoProgress",
        staticClass: "video-progress",
        attrs: {id: "miPlayerVideoProgress"}
      }, [a("div", {
        staticClass: "video-progress-loaded",
        style: "width:" + e.video.loaded + "%"
      }), a("div", {
        staticClass: "video-progress-played",
        style: "width:" + e.video.played + "%"
      }), a("div", {
        ref: "miPlayerVideoPointer",
        staticClass: "video-progress-pointer",
        style: "left:" + e.video.played + "%",
        attrs: {id: "miPlayerVideoPointer"}
      })]), a("div", {staticClass: "control-item control-btns"}, [a("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.state.playing,
          expression: "!state.playing"
        }], staticClass: "control-btn play", on: {click: e.play}
      }), a("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.state.playing,
          expression: "state.playing"
        }], staticClass: "control-btn pause", on: {click: e.pause}
      })]), a("div", {staticClass: "control-item control-times"}, [a("span", {staticClass: "cur"}, [e._v(e._s(e.video.curTime))]), a("em", {staticClass: "sep"}, [e._v("/")]), a("span", {staticClass: "dur"}, [e._v(e._s(e.video.durTime))])]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.supportFullScreen,
          expression: "supportFullScreen"
        }], staticClass: "control-item control-full-screen"
      }, [a("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.state.fullScreen,
          expression: "!state.fullScreen"
        }], staticClass: "control-btn full", on: {click: e.fullScreen}
      }), a("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.state.fullScreen,
          expression: "state.fullScreen"
        }], staticClass: "control-btn reset", on: {click: e.fullScreen}
      })]), a("div", {staticClass: "control-item control-volume"}, [a("span", {
        ref: "miPlayerVolume",
        class: e.state.mute ? "control-btn  mute" : "control-btn",
        attrs: {id: "miPlayerVolume"},
        on: {click: e.toggleMute}
      }), a("div", {
        ref: "miPlayerVolumeProgress",
        staticClass: "volume-progress",
        attrs: {id: "miPlayerVolumeProgress"}
      }, [a("div", {
        staticClass: "volume-progress-current",
        style: "width:" + +e.video.volume + "%"
      }), a("div", {
        ref: "miPlayerVolumePointer",
        staticClass: "volume-pointer",
        style: "left:" + e.video.volume + "px",
        attrs: {id: "miPlayerVolumePointer"}
      })])])])])])
    }, n = [], s = (a("986e"), a("91bf")), r = function (e) {
      return e = Math.floor(e), e < 10 ? "0" + e : e + ""
    }, o = function (e) {
      var t = 0;
      return t = Math.floor(e / 60), e -= 60 * t, r(t) + ":" + r(e)
    }, l = {
      name: "mi-player",
      props: {
        width: {type: Number},
        height: {type: Number},
        src: {type: String, default: ""},
        poster: {type: String, default: ""},
        autoplay: {type: Boolean, default: !1}
      },
      watch: {},
      data: function () {
        return {
          $video: null,
          $videoPointer: null,
          $videoProgress: null,
          $volumeProgress: null,
          $volumePointer: null,
          progressDragging: !1,
          volumeDragging: !1,
          supportFullScreen: null,
          supportCancelFullScreen: null,
          isSafari: !1,
          state: {playing: !1, ended: !1, loading: !1, contrlShow: !1, error: !1, mute: !1},
          video: {played: 0, loaded: 0, volume: 50, defVolume: 50, curTime: "00:00", durTime: "00:00", autoplay: !1},
          pos: {}
        }
      },
      methods: {
        setVideoStyle: function () {
          return {maxWidth: "".concat(this.width, "px "), maxHeight: "".concat(this.height, "px ")}
        }, play: function () {
          this.state.playing = !0, this.state.ended = !1, this.$video && this.state.playing && (this.state.loaded || this.$video.load(), this.$video.play(), this.setVolume())
        }, pause: function () {
          this.state.playing = !1, this.$video && (this.state.loading = !1, this.$video.pause())
        }, timelineUpdate: function (e) {
          var t = this.$video.currentTime / this.$video.duration * 100;
          this.video.curTime = o(this.$video.currentTime), this.progressDragging || (this.video.played = t)
        }, playEnd: function () {
          this.state.playing = !1, this.state.ended = !0, this.state.loading = !1, this.$video.currentTime = 0, this.$video.ended || this.$video.pause(), this.$emit("onEnd")
        }, fullScreen: function () {
          this.state.fullScreen ? (this.state.fullScreen = !1, this.supportCancelFullScreen && this.supportCancelFullScreen.call(document)) : (this.state.fullScreen = !0, this.supportFullScreen && this.supportFullScreen.call(this.$video))
        }, bindVideoEvent: function () {
          var e = this;
          s["a"].addEvt(e.$video, "error", (function (t) {
            e.state.error = !0
          })), s["a"].addEvt(e.$video, "loadstart", (function (t) {
            e.state.loaded = !0
          })), s["a"].addEvt(e.$video, "waiting", (function (t) {
            e.state.playing && (e.state.loading = !0)
          })), s["a"].addEvt(e.$video, "seeked", (function (t) {
            e.state.loading = !1
          })), s["a"].addEvt(e.$video, "playing", (function (t) {
            e.state.loading = !1
          })), s["a"].addEvt(e.$video, "play", (function (t) {
            e.state.loading = !1, e.state.playing = !0
          })), s["a"].addEvt(e.$video, "pause", (function (t) {
            e.state.loading = !1
          })), s["a"].addEvt(e.$video, "canplay", (function (t) {
            e.state.loading = !1
          })), s["a"].addEvt(e.$video, "durationchange", (function (t) {
            e.video.len = e.$video.duration, e.video.durTime = o(e.$video.duration)
          })), s["a"].addEvt(e.$video, "progress", (function (t) {
            e.$video.buffered.length && (e.video.loaded = e.$video.buffered.end(0) / e.$video.duration * 100)
          })), s["a"].addEvt(e.$video, "timeupdate", e.timelineUpdate), s["a"].addEvt(e.$video, "ended", e.playEnd)
        }, toggleContrlShow: function () {
          this.state.contrlShow = !this.state.contrlShow
        }, toggleMute: function () {
          this.state.mute = !this.state.mute, this.state.mute ? (this.$video.muted = !0, this.video.volume > 0 && (this.video.volume = 0, this.setVolume())) : (this.$video.muted = !1, this.video.volume <= 0 && (this.video.volume = this.video.defVolume, this.setVolume()))
        }, setVolume: function () {
          this.$video.volume = this.video.volume / 100, (this.video.volume <= 1 && !this.state.mute || this.state.mute && this.video.volume > 0) && this.toggleMute()
        }, progressMoveStartHandler: function (e) {
          e.preventDefault(), this.progressDragging = !0, this.pos.start = e.pageX, this.pos.width = this.$videoProgress.getBoundingClientRect().width, this.pos.pointerWidth = this.$videoPointer.getBoundingClientRect().width
        }, volumeMoveStartHandler: function (e) {
          e.preventDefault(), this.volumeDragging = !0, this.pos.start = e.pageX, this.pos.width = this.$volumeProgress.getBoundingClientRect().width, this.pos.pointerWidth = this.$volumePointer.getBoundingClientRect().width
        }, volumeClickHandler: function (e) {
          e.preventDefault(), this.pos.pointerWidth = this.$volumePointer.getBoundingClientRect().width;
          var t = e.pageX, a = this.$volumeProgress.getBoundingClientRect().left, i = t - a - this.pos.pointerWidth / 2;
          i = i >= 100 ? 100 : i <= 0 ? 0 : i, this.video.volume = i, this.setVolume()
        }, mouseMoveHandler: function (e) {
          (this.progressDragging || this.volumeDragging) && (e.preventDefault(), this.pos.end = e.pageX, this.countMovePos())
        }, mouseMoveEndHandler: function (e) {
          this.pos.width = 0, this.pos.start = 0, this.pos.end = 0, this.pos.pointerWidth = 0, this.progressDragging && (this.progressDragging = !1, this.$video.currentTime = this.video.played / 100 * this.video.len, this.timelineUpdate(), this.state.playing || this.play()), this.volumeDragging && (this.volumeDragging = !1)
        }, countMovePos: function () {
          var e = 0, t = 0;
          if (this.progressDragging) e = (this.pos.end - this.pos.start) / this.pos.width * 100, t = 100 - this.pos.pointerWidth / this.pos.width * 100, this.video.played += e, this.video.played > t ? this.video.played = t : this.video.played < 0 && (this.video.played = 0); else if (this.volumeDragging) {
            if (e = (this.pos.end - this.pos.start) / this.pos.width * 100, t = 100 - this.pos.pointerWidth / this.pos.width * 100, this.video.volume += e, this.video.volume > t) return void (this.video.volume = t);
            if (this.video.volume < 0) return void (this.video.volume = 0);
            this.setVolume()
          }
          this.pos.start = this.pos.end
        }, clickProgressHandler: function (e) {
          var t = this.$videoProgress.getBoundingClientRect().left,
              a = this.$videoProgress.getBoundingClientRect().width, i = e.pageX, n = (i - t) / a;
          this.$video.currentTime = this.video.len * n, this.timelineUpdate()
        }, clickVideoHandler: function () {
          this.state.playing ? this.pause() : this.play()
        }
      },
      mounted: function () {
        var e = this;
        if (this.$video = this.$refs.miPlayerVideo, this.$videoPointer = this.$refs.miPlayerVideoPointer, this.$videoProgress = this.$refs.miPlayerVideoProgress, this.$volumeProgress = this.$refs.miPlayerVolumeProgress, this.$volumePointer = this.$refs.miPlayerVolumePointer, this.$videoWrapper = this.$refs.miPlayerVideoWrapper, this.supportFullScreen = this.$video.requestFullscreen || this.$video.webkitRequestFullscreen || this.$video.msRequestFullscreen, this.supportCancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.exitFullScreen, this.isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent), this.bindVideoEvent(), s["a"].addEvt(this.$videoPointer, "mousedown", this.progressMoveStartHandler), s["a"].addEvt(this.$volumePointer, "mousedown", this.volumeMoveStartHandler), s["a"].addEvt(this.$volumeProgress, "click", this.volumeClickHandler), s["a"].addEvt(this.$videoProgress, "click", this.clickProgressHandler), s["a"].addEvt(document, "mousemove", this.mouseMoveHandler), s["a"].addEvt(document, "mouseup", this.mouseMoveEndHandler), s["a"].addEvt(this.$video, "click", this.clickVideoHandler), s["a"].addEvt(this.$videoWrapper, "mouseenter", this.toggleContrlShow), s["a"].addEvt(this.$videoWrapper, "mouseleave", this.toggleContrlShow), this.autoplay && !this.isSafari) {
          var t = this.$video.play();
          void 0 !== t && t.then((function (t) {
            e.play()
          })).catch((function (e) {
          }))
        }
      },
      beforeDestroy: function () {
        s["a"].removeEvt(this.$videoPointer, "mousedown", this.progressMoveStartHandler), s["a"].removeEvt(this.$volumePointer, "mousedown", this.volumeMoveStartHandler), s["a"].removeEvt(this.$videoProgress, "click", this.clickProgressHandler), s["a"].removeEvt(this.$volumeProgress, "click", this.volumeClickHandler), s["a"].removeEvt(document, "mousemove", this.mouseMoveHandler), s["a"].removeEvt(document, "mouseup", this.mouseMoveEndHandler), s["a"].removeEvt(this.$video, "click", this.clickVideoHandler), s["a"].removeEvt(this.$videoWrapper, "mouseenter", this.toggleContrlShow), s["a"].removeEvt(this.$videoWrapper, "mouseleave", this.toggleContrlShow)
      }
    }, d = l, c = (a("28e0"), a("2877")), u = Object(c["a"])(d, i, n, !1, null, "e073abaa", null);
    t["a"] = u.exports
  }, "663a": function (e, t, a) {
  }, "68d3": function (e, t, a) {
  }, "7ec4": function (e, t, a) {
  }, "7f19": function (e, t, a) {
    "use strict";
    a.d(t, "a", (function () {
      return r
    }));
    var i = a("f2e8"), n = a.n(i), s = a("efd9");

    function r(e, t, a) {
      e += (e.indexOf("?") < 0 ? "?" : "&") + o(t);
      var i = {needLogin: !0};
      return i = Object.assign({}, i, a), new Promise((function (t, a) {
        n()(e, i, (function (e, n) {
          e ? a(e) : n && -1e4 === n.code && i.needLogin ? s["a"].goOrderLogin() : t(n)
        }))
      }))
    }

    function o(e) {
      var t = "";
      for (var a in e) {
        var i = void 0 !== e[a] ? e[a] : "";
        t += "&" + a + "=" + encodeURIComponent(i)
      }
      return t ? t.substring(1) : ""
    }
  }, 8241: function (e, t, a) {
  }, 8440: function (e, t, a) {
  }, 8854: function (e, t, a) {
    "use strict";
    a("0542");
    var i = a("91bf"), n = a("a417"), s = a("fe6a"), r = a("2ec8"), o = (a("c474"), function () {
      var e = {
        loopSpeed: 8e3,
        initDelay: 3e3,
        loopTimer: null,
        login: !1,
        messageTotal: 0,
        loopCount: 0,
        uid: "",
        popShow: !1,
        Dom: {},
        objs: {},
        domEvtFuns: {},
        msgInit: function (t) {
          var a = document.querySelector(".site-mini-header");
          e.login = t, e.uid = Object(r["a"])("axmuid") ? Object(r["a"])("axmuid") : Object(r["a"])("userId"), a || (e.updateDom(), e.uid && setTimeout((function () {
            e.getMessage()
          }), e.initDelay))
        },
        updateDom: function () {
          var t = n["a"].host.wwwSite + "/user/message",
              a = '<span class="sep">|</span><span class="message"><a rel="nofollow" href="javascript:void(0);" data-href="' + t + '" class="J_needAgreement" data-login="true" data-agreement="true">消息通知<i class="J_miMessageTotal"></i></a></span>';
          e.Dom.$userInfo && (e.login ? e.Dom.$userInfo.querySelector(".user").insertAdjacentHTML("afterend", a) : e.Dom.$userInfo.insertAdjacentHTML("beforeend", a))
        },
        updateMessageNum: function () {
          e.messageTotal > 0 ? document.querySelector(".J_miMessageTotal").textContent = "（" + e.messageTotal + "）" : document.querySelector(".J_miMessageTotal").textContent = ""
        },
        stopLoop: function () {
          e.loopTimer && clearTimeout(e.loopTimer), e.loopSpeed = 8e3, e.loopCount = 0
        },
        creatPopDom: function (e) {
          var t = document.createElement("div"), a = document.createElement("div");
          t.id = "J_miMessagePop", t.className = "message-pop-wrapper", a.className = "message-pop-content";
          var i = document.createElement("a");
          if (i.className = "close", i.href = "javascript: void(0);", i.innerHTML = '<i class="iconfont-close"></i>', e.autoClose) {
            var n = document.createElement("div");
            n.className = "message-countdown", n.innerHTML = '<em id="J_messagePopCdTime">5</em> 秒后自动关闭', a.appendChild(n)
          }
          var s = document.createElement("a");
          return s.className = "message-link", s.href = e.link, s.onclick = "_msq.push(['trackEvent', '" + e.id + "', '" + e.link + "', 'pcpid']);", s.style.backgroundImage = "url(" + e.image + ")", a.appendChild(i), a.appendChild(s), t.appendChild(a), t
        },
        getMessage: function () {
          e.loopCount > 0 && e.loopCount % 5 === 0 && e.loopSpeed <= 3e4 && (e.loopSpeed = 2 * e.loopSpeed), e.loopCount += 1, s["a"].getMessage({vpage: location.href}, {
            param: "jsonpcallback",
            name: "mi_message_callback",
            needLogin: !1,
            timeout: 1e4
          }).then((function (t) {
            if (t && 200 === t.code && (e.messageTotal = t.data.count, e.updateMessageNum(), 1 === t.data.loop ? (e.loopTimer && clearTimeout(e.loopTimer), e.loopTimer = setTimeout((function () {
              e.getMessage()
            }), e.loopSpeed)) : e.stopLoop(), 1 === t.data.hasPop && !e.popShow)) {
              var a = e.getPopDom({
                id: t.data.popmsg.batch_id,
                image: t.data.popmsg.adv_img_url,
                link: t.data.popmsg.target,
                autoClose: t.data.popmsg.adv_auto_close
              });
              if (document.body.appendChild(a), i["a"].addEvt(a.querySelector(".close"), "click", (function () {
                a.classList.add = "hide", setTimeout((function () {
                  a.parentNode.removeChild(a)
                }), 100)
              })), a.classList.add = "active", e.popShow = !0, 1 === t.data.popmsg.adv_auto_close) var n = document.querySelector("#J_messagePopCdTime"),
                  s = 5, r = setInterval((function () {
                    s <= 0 && clearInterval(r), n.textContent = s, s -= 1
                  }), 1e3)
            }
          }))
        }
      }, t = function () {
      }, a = function () {
        e.Dom.$userInfo = document.querySelector("#J_siteUserInfo")
      }, o = function () {
      }, l = function () {
      }, d = function () {
        if (e) {
          for (var t in e.objs) {
            var a = e.objs[t];
            a && a.destroy && a.destroy()
          }
          e = null
        }
      }, c = function () {
        t(), a(), o(), l()
      };
      return c(), {destroy: d, init: e.msgInit}
    }), l = (a("3bf3"), a("986e")), d = function (e) {
      var t = {
        Dom: {},
        needAgreeCookie: !1,
        source: "",
        nextUrl: "",
        agrContent: {title: "", desc: "", con: "", iframeData: ""},
        objs: {},
        domEvtFuns: {
          clickCheck: function (e) {
            var a = e.target, i = "", n = "", s = "";
            a.getAttribute("data-agreement") && (i = a.getAttribute("data-href") || "", n = a.getAttribute("data-login") || "", n ? s = "login" : a.getAttribute("data-register") && (s = "register"), t.checkAgreementStatus({
              url: i,
              login: n,
              action: s
            }))
          }, switchAgreeTab: function (e) {
            var a = e.target;
            a.classList.contains("agree-tab") && t.getPageContent(a.getAttribute("data-href"))
          }
        },
        checkAgreementStatus: function (e) {
          if (e && e.url) {
            t.nextUrl = e.url;
            var a = /^(dev.test|mock|pc.test|www|item|list|order|cart|order|static|search|mall.10046|huanxin|recharge.10046|).*(mi.com$)/;
            a.test(window.location.host) ? "1" === Object(r["a"])("XM_agreement_sure") && e.login ? window.location.href = e.url : (t.needAgreeCookie = !0, t.getAgreementInfo({action: e.action}).then((function (a) {
              a.data.info.agree_info.length > 0 && (e.login || !e.login && !a.data.has_login) ? t.formateAgreement(a.data.info) : window.location.href = e.url
            })).catch((function (t) {
              window.location.href = e.url
            }))) : window.location.href = e.url
          }
        },
        getAgreementInfo: function (e) {
          return new Promise((function (t, a) {
            if (!e) ;
            s["a"].getAgreementInfo(e, {param: "jsonpcallback", name: "agreement_info"}).then((function (e) {
              e && 200 == e.code && e.data ? t(e) : a(err)
            }), (function (e) {
              a(e)
            }))
          }))
        },
        formateAgreement: function (e) {
          var a = '<div class="desc J_agreeTabs">';
          e.agree_info.map((function (t, i) {
            a += '<span class="agree-tab" data-href="' + t.link + '">' + t.name + "</span>", i < e.agree_info.length - 1 && (a += "、")
          })), a += e.desc, t.agrContent.desc = a + "</div>", t.agrContent.title = e.title, t.getPageContent(e.agree_info[0].link)
        },
        getPageContent: function (e) {
          var a = '<div class="con">', i = function () {
            t.agrContent.con = t.agrContent.desc + a + "</div>", t.Dom.$contentWrapper ? t.agrContent.iframeData ? (t.Dom.$contentWrapper.innerHTML = t.agrContent.con, t.updateIframeContent()) : t.Dom.$contentWrapper.innerHTML = t.agrContent.con : t.dialogShow()
          };
          /www\.mi\.com/.test(e) ? s["a"].getPageContent({page_url: e}, {param: "jsonpcallback"}).then((function (e) {
            e && 1 == e.code && e.data && (t.agrContent.iframeData = e.data, a += '<iframe id="J_agreementContentIframe" width="100%" height="300px" frameborder="0"></iframe>', i())
          }), (function (e) {
          })) : (t.agrContent.iframeData = "", a += '<iframe src="' + e + '" width="100%" height="300px" frameborder="0"></iframe>', i())
        },
        updateContent: function () {
          var e = document.querySelector(".J_siteAgreementDialog");
          t.Dom.$contentWrapper = e.querySelector("#J_siteAgreementContent"), e.querySelector(".mi-dialog__title").textContent = t.agrContent.title || "协议声明", t.Dom.$contentWrapper.innerHTML = t.agrContent.con, t.updateIframeContent(), i["a"].addEvt(t.Dom.$contentWrapper, "click", t.domEvtFuns.switchAgreeTab)
        },
        updateIframeContent: function () {
          if (t.agrContent.iframeData) {
            var e = t.Dom.$contentWrapper.querySelector("#J_agreementContentIframe");
            e && ("undefined" === typeof e.srcdoc ? (e.contentWindow.document.open(), e.contentWindow.document.write(t.agrContent.iframeData), e.contentWindow.document.close()) : e.srcdoc = t.agrContent.iframeData)
          }
        },
        sureAgreement: function () {
          return new Promise((function (e, a) {
            s["a"].sureAgreement({}, {param: "jsonpcallback", name: "agreement_sign"}).then((function (i) {
              i && 200 == i.code ? (Object(r["a"])("XM_agreement", "0", {
                expires: 7,
                path: "/",
                domain: "mi.com"
              }), e(i)) : a(), t.objs.$dialog && t.objs.$dialog.hide()
            }), (function (e) {
              a(), t.objs.$dialog && t.objs.$dialog.hide()
            }))
          }))
        },
        agreeCallback: function () {
          t.needAgreeCookie && (Object(r["a"])("XM_agreement", "1", {
            expires: 7,
            path: "/",
            domain: "mi.com"
          }), t.needAgreeCookie = !1), "home" == t.source ? t.sureAgreement().then((function (e) {
          })).catch((function (e) {
          })) : "checkout" == t.source ? t.sureAgreement().then((function (e) {
            t.sureCallback && t.sureCallback()
          })).catch((function (e) {
          })) : (Object(r["a"])("XM_agreement_sure", "1", {
            expires: 36500,
            path: "/",
            domain: "mi.com"
          }), window.location.href = t.nextUrl)
        },
        initCallback: function (e, a) {
          if (t.source = e || "", t.sureCallback = a || "", "agreement" !== e) return new Promise((function (i, n) {
            t.getAgreementInfo().then((function (s) {
              s.data.has_login || "home" !== e ? (s.data.info.agree_info.length > 0 ? t.formateAgreement(s.data.info) : "checkout" === e && a && a(), "home" === e && i()) : (n(), t.source = "")
            })).catch((function (t) {
              "home" === e ? i() : "checkout" === e && a && a()
            }))
          }));
          t.sureAgreement().then((function (e) {
          })).catch((function (e) {
          }))
        },
        dialogShow: function () {
          t.objs.$dialog = l["a"].$dialog({
            type: "confirm",
            title: "协议声明",
            dialogClass: "dialog-site-agreement J_siteAgreementDialog",
            contentData: "contentData",
            content: '<div id="J_siteAgreementContent"><div class="loading"><div class="loader"></div></div></div>',
            okText: "同意",
            cancelText: "不同意",
            opened: function () {
              t.updateContent()
            },
            closed: function () {
              i["a"].removeEvt(t.Dom.$contentWrapper, "click", t.domEvtFuns.switchAgreeTab), t.Dom.$contentWrapper = null, t.objs.$dialog = null
            },
            ok: function () {
              t.agreeCallback()
            }
          })
        }
      }, a = function () {
        if (!e) throw"args el is needed."
      }, n = function () {
      }, o = function () {
      }, d = function () {
        i["a"].addEvt(e, "click", t.domEvtFuns.clickCheck), l["a"].$on("checkAgreementStatus", t.checkAgreementStatus), l["a"].$on("checkoutAgreement", (function (e) {
          t.initCallback("checkout", e)
        }))
      }, c = function () {
        if (t) {
          for (var e in t.objs) {
            var a = t.objs[e];
            a && a.destroy && a.destroy()
          }
          t = null
        }
      }, u = function () {
        a(), n(), o(), d()
      };
      return u(), {destroy: c, initCallback: t.initCallback}
    }, c = a("e3d1");
    t["a"] = function () {
      var e = {
        Dom: {},
        objs: {},
        domEvtFuns: {
          userMenuShow: function () {
            e.timeoutUserMenu && clearTimeout(e.timeoutUserMenu), this.classList.add("user-active"), this.querySelector("#J_userMenuWrapper").style.height = this.querySelector("#J_userMenuWrapper").scrollHeight + "px"
          }, userMenuHide: function () {
            var t = this;
            e.timeoutUserMenu = setTimeout((function () {
              t.classList.remove("user-active"), t.querySelector("#J_userMenuWrapper").style.height = 0
            }), 200)
          }, logout: function () {
            sessionStorage.removeItem(e.proxyFlag)
          }
        },
        miid: Number(Object(r["a"])("userId")),
        miidLink: Object(r["a"])("xm_link_history"),
        userName: "",
        timeoutUserMenu: null,
        proxyFlag: "proxy_" + window.location.host,
        setProxy: function (e) {
          var t = document.createElement("iframe"), a = null;
          t.name = "MiPROXY_" + e.type, t.style.cssText = "width:0px;height:0px;border:0px;overflow:hidden;position:absolute;top:-1000px", t.onload = t.onerror = function () {
            t.onerror = t.onload = null, clearTimeout(a), e.callback && "function" == typeof e.callback && e.callback(), t.parentNode.removeChild(t)
          }, a = setTimeout((function () {
            e.callback && "function" == typeof e.callback && e.callback()
          }), 5e3), t.src = e.url, document.body.appendChild(t)
        },
        getUserName: function () {
          s["a"].getUserName({userId: "0"}, {name: "setLoginInfo_getAccountInfo"}).then((function (t) {
            if (t.userId) {
              var a = t.miliaoInfo.nickName ? t.miliaoInfo.nickName : t.userId, i = {path: "/", domain: ".mi.com"};
              Object(r["a"])("XM_" + t.userId + "_UN", a, i), e.loginCheckCb(t.userId, a)
            }
          })).catch((function (e) {
          }))
        },
        uuidCookie: function () {
          var e = ("xmguest-" + c.v1()).toUpperCase(), t = Object(r["a"])("xmuuid");
          if (!t) {
            var a = {path: "/", domain: ".mi.com", expires: 18250};
            Object(r["a"])("xmuuid", e, a)
          }
        },
        escape: function (e) {
          return String(e).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        },
        updateDom: function () {
          var t = e.userName || e.miid;
          "1" !== sessionStorage.getItem(e.proxyFlag) && (e.setProxy({
            type: "order",
            url: n["a"].host.orderSite + "/user/proxy/stop/1"
          }), e.setProxy({
            type: "hd",
            url: n["a"].host.hdiSite + "/user/proxy/stop/1"
          }), sessionStorage.setItem(e.proxyFlag, "1"));
          var a = '<div id="J_userMenuWrapper" class="user-menu-wrapper"><ul class="user-menu"><li><a rel="nofollow"  href="' + n["a"].host.wwwSite + '/user/portal" target="_blank">个人中心</a></li><li><a rel="nofollow" href="' + n["a"].host.wwwSite + '/user/comment" target="_blank">评价晒单</a></li><li><a rel="nofollow" href="' + n["a"].host.wwwSite + '/user/favorite" target="_blank">我的喜欢</a></li><li><a rel="nofollow" href="' + n["a"].host.accountSite + '" target="_blank">小米账户</a></li><li><a rel="nofollow" id="J_userLogout" href="' + n["a"].host.orderSite + '/site/logout">退出登录</a></li></ul></div>',
              s = '<span class="user"><a rel="nofollow" class="user-name" href="' + n["a"].host.wwwSite + '/user/portal" target="_blank"><span class="name">' + e.escape(t) + '</span><i class="iconfont-arrow-down-mini"></i></a>' + a + '</span><span class="sep">|</span><a rel="nofollow" class="link link-order" href="' + n["a"].host.staticSite + '/order/" target="_blank">我的订单</a>';
          e.Dom.$userInfo.innerHTML = s, e.Dom.$userTrigger = e.Dom.$userInfo.querySelector(".user"), e.Dom.$userLogout = document.querySelector("#J_userLogout"), e.objs.message.init(!0), i["a"].addEvt(e.Dom.$userTrigger, "mouseenter", e.domEvtFuns.userMenuShow), i["a"].addEvt(e.Dom.$userTrigger, "mouseleave", e.domEvtFuns.userMenuHide), i["a"].addEvt(e.Dom.$userLogout, "click", e.domEvtFuns.logout)
        },
        loginCheckCb: function (t, a) {
          if (t) {
            e.miid = t, e.userName = a || "";
            var i = Object(r["a"])("XM_agreement");
            setTimeout((function () {
              if (i && "1" === i) e.updateDom(), e.objs.siteAgreement.initCallback("agreement"); else if ("/" === location.pathname || "/index.html" === location.pathname) {
                var t = /^www.mi.com|pc.test.mi.com|dev.test.mi.com/;
                t.test(window.location.host) ? e.objs.siteAgreement.initCallback("home").then((function (t) {
                  e.updateDom()
                })).catch((function (e) {
                  Object(r["a"])("cUserId", null), Object(r["a"])("userId", null), Object(r["a"])("serviceToken", null)
                })) : e.updateDom()
              } else e.updateDom()
            }), 700)
          }
        },
        loginInit: function () {
          if (e.uuidCookie(), e.miid && e.miidLink) {
            var t = e.miid ? Object(r["a"])("XM_" + e.miid + "_UN") : "";
            t ? e.loginCheckCb(e.miid, t) : e.getUserName()
          } else s["a"].loginInit({}, {parmas: "jsonpcallback", name: "userLogincallback"}).then((function (t) {
            if (e.getUserName(), !t.cUserId) {
              Object(r["a"])("XM_agreement", "0", {expires: 7, path: "/", domain: "mi.com"});
              var a = n["a"].host.orderSite + "/site/login?redirectUrl=" + encodeURI(location.href),
                  i = e.Dom.$userInfo.querySelector(".link[data-login='true']"),
                  s = e.Dom.$userInfo.querySelector(".link[data-register='true']");
              i.setAttribute("data-href", a), i.setAttribute("href", "javascript:void(0);"), s.setAttribute("data-href", s.getAttribute("href")), s.setAttribute("href", "javascript:void(0);"), e.objs.message.init(!1)
            }
          })).catch((function (e) {
          }))
        }
      }, t = function () {
      }, a = function () {
        e.Dom.$userInfo = document.querySelector("#J_siteUserInfo")
      }, l = function () {
        e.objs.siteAgreement = d(e.Dom.$userInfo), e.objs.message = o(), e.loginInit()
      }, u = function () {
      }, p = function () {
        if (e) {
          for (var t in e.objs) {
            var a = e.objs[t];
            a && a.destroy && a.destroy()
          }
          e = null
        }
      }, m = function () {
        t(), a(), l(), u()
      };
      return m(), {destroy: p}
    }
  }, "8c21": function (e, t, a) {
  }, "8c41": function (e, t, a) {
    "use strict";
    var i = a("8440"), n = a.n(i);
    n.a
  }, "90f5": function (e, t, a) {
  }, "91bf": function (e, t, a) {
    "use strict";
    var i = a("bc47");

    function n(e) {
      e.target = e.target || e.srcElement
    }

    var s = n;

    function r(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    var o = r, l = document.addEventListener, d = l ? function (e, t, a) {
      e.removeEventListener(t, a, !1)
    } : function (e, t, a) {
      e.detachEvent("on" + t, a)
    }, c = d;
    t["a"] = {addEvt: i["a"], evtFix: s, preventDefault: o, removeEvt: c}
  }, "986e": function (e, t, a) {
    "use strict";
    var i = a("a026");
    t["a"] = new i["a"]
  }, a417: function (e, t, a) {
    "use strict";
    var i = {
          orderSite: "//order.mi.com",
          orderApiSite: "//api.order.mi.com",
          cnOrderApi: "//cn.orderapi.mi.com",
          wwwSite: "//www.mi.com",
          cartSite: "//cart.mi.com",
          itemSite: "//item.mi.com",
          assetsSite: "//s01.mifile.cn",
          listSite: "//list.mi.com",
          searchSite: "//search.mi.com",
          mySite: "//my.mi.com",
          damiaoSite: "//tp.hd.mi.com/",
          logoutUrl: "//order.mi.com/site/logout",
          staticSite: "//static.mi.com",
          hdiSite: "//i.huodong.mi.com",
          hdiProxy: "//i.huodong.mi.com/user/proxy/stop/1",
          hdaSite: "//a.huodong.mi.com",
          hdiLogin: "//i.huodong.mi.com/site/login?redirectUrl=" + location.href,
          orderProxy: "//order.mi.com/user/proxy/stop/1",
          orderLogin: "//order.mi.com/site/login?redirectUrl=" + location.href,
          quickLoginUrl: "https://account.xiaomi.com/pass/static/login.html",
          accountSite: "//account.xiaomi.com",
          searchApiSite: "//api.search.mi.com",
          hdInfo: "//tp.hd.mi.com/hdinfo/cn",
          hdGet: "//tp.hd.mi.com/hdget/cn",
          orderApi: "//api2.order.mi.com",
          serviceApi: "//api2.service.order.mi.com",
          serviceUrl: "//service.order.mi.com"
        }, n = {
          orderSite: "//order.mi.com",
          orderApiSite: "//api.order.mi.com",
          cnOrderApi: "//cn.orderapi.mi.com",
          wwwSite: "//www.mi.com",
          cartSite: "//cart.mi.com",
          itemSite: "//item.mi.com",
          assetsSite: "//s01.mifile.cn",
          listSite: "//list.mi.com",
          searchSite: "//search.mi.com",
          mySite: "//my.mi.com",
          damiaoSite: "//tp.hd.mi.com/",
          logoutUrl: "//order.mi.com/site/logout",
          staticSite: "//static.mi.com",
          hdiSite: "//i.huodong.mi.com",
          hdiProxy: "//i.huodong.mi.com/user/proxy/stop/1",
          hdaSite: "//a.huodong.mi.com",
          hdiLogin: "//i.huodong.mi.com/site/login?redirectUrl=" + location.href,
          orderProxy: "//order.mi.com/user/proxy/stop/1",
          orderLogin: "//order.mi.com/site/login?redirectUrl=" + location.href,
          quickLoginUrl: "https://account.xiaomi.com/pass/static/login.html",
          accountSite: "//account.xiaomi.com",
          searchApiSite: "//api.search.mi.com",
          hdInfo: "//tp.hd.mi.com/hdinfo/cn",
          hdGet: "//tp.hd.mi.com/hdget/cn",
          orderApi: "//pc.order.pre.order.mi.com",
          serviceApi: "//pc.service.pre.order.mi.com",
          serviceUrl: "//service.order.mi.com"
        }, s = {
          orderSite: "//order.test.mi.com",
          orderApiSite: "//api-order.test.mi.com",
          cnOrderApi: "//cn-orderapi.test.mi.com",
          wwwSite: "//pc.test.mi.com",
          cartSite: "//cart.test.mi.com",
          itemSite: "//item.test.mi.com",
          assetsSite: "//assets.test.mi.com",
          listSite: "//list.test.mi.com",
          searchSite: "//search.test.mi.com",
          mySite: "//my.test.mi.com",
          damiaoSite: "//tp-hd.test.mi.com",
          logoutUrl: "//order.test.mi.com/site/logout",
          staticSite: "//static.test.mi.com",
          hdiSite: "//i-huodong.test.mi.com",
          hdiProxy: "//i-huodong.test.mi.com/user/proxy/stop/1",
          hdaSite: "//a-huodong.test.mi.com",
          hdiLogin: "//i-huodong.test.mi.com/site/login?redirectUrl=" + location.href,
          orderProxy: "//order.test.mi.com/user/proxy/stop/1",
          orderLogin: "//order.test.mi.com/site/login?redirectUrl=" + location.href,
          quickLoginUrl: "https://account.xiaomi.com/pass/static/login.html",
          accountSite: "//account.preview.n.xiaomi.net",
          searchApiSite: "//api-search.test.mi.com",
          hdInfo: "//tp-hd.test.mi.com/hdinfo/cn",
          hdGet: "//tp-hd.test.mi.com/hdget/cn",
          orderApi: "//pc.order.test.mi.com",
          serviceApi: "//pc.service.test.mi.com",
          serviceUrl: "//service.order.test.mi.com"
        }, r = /test\.mi\.com/.test(window.location.host), o = /pre\.mi\.com/.test(window.location.host),
        l = /^mock\./.test(window.location.host), d = {};
    if (l) for (var c in s) d[c] = "http://mock.be.mi.com/mock/502";
    var u = {host: l ? d : r ? s : o ? n : i, time: "//time.hd.mi.com/gettimestamp"};
    t["a"] = u
  }, a4ff: function (e, t, a) {
    "use strict";
    var i = a("d4b0"), n = a.n(i);
    n.a
  }, af8b: function (e, t, a) {
    "use strict";
    var i = a("663a"), n = a.n(i);
    n.a
  }, bc47: function (e, t, a) {
    "use strict";
    var i = document.addEventListener, n = function (e, t, a, i) {
      e && e.addEventListener(t, a, void 0 !== i && i)
    }, s = function (e, t, a) {
      e && e.attachEvent("on" + t, a)
    };
    t["a"] = i ? n : s
  }, c474: function (e, t, a) {
  }, c7c4: function (e, t, a) {
    var i, n;

    function s(e) {
      return s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, s(e)
    }

    (function (r, o) {
      "object" === s(t) && "undefined" !== typeof e ? e.exports = o() : (i = o, n = "function" === typeof i ? i.call(t, a, t, e) : i, void 0 === n || (e.exports = n))
    })(0, (function () {
      "use strict";
      var e = "undefined" === typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
          blur: function () {
          }, nodeName: ""
        }, querySelector: function () {
          return null
        }, querySelectorAll: function () {
          return []
        }, getElementById: function () {
          return null
        }, createEvent: function () {
          return {
            initEvent: function () {
            }
          }
        }, createElement: function () {
          return {
            children: [], childNodes: [], style: {}, setAttribute: function () {
            }, getElementsByTagName: function () {
              return []
            }
          }
        }, location: {hash: ""}
      } : document, t = "undefined" === typeof window ? {
        document: e,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
          return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return ""
            }
          }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
      } : window, a = function (e) {
        for (var t = this, a = 0; a < e.length; a += 1) t[a] = e[a];
        return t.length = e.length, this
      };

      function i(i, n) {
        var s = [], r = 0;
        if (i && !n && i instanceof a) return i;
        if (i) if ("string" === typeof i) {
          var o, l, d = i.trim();
          if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
            var c = "div";
            for (0 === d.indexOf("<li") && (c = "ul"), 0 === d.indexOf("<tr") && (c = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (c = "tr"), 0 === d.indexOf("<tbody") && (c = "table"), 0 === d.indexOf("<option") && (c = "select"), l = e.createElement(c), l.innerHTML = d, r = 0; r < l.childNodes.length; r += 1) s.push(l.childNodes[r])
          } else for (o = n || "#" !== i[0] || i.match(/[ .<>:~]/) ? (n || e).querySelectorAll(i.trim()) : [e.getElementById(i.trim().split("#")[1])], r = 0; r < o.length; r += 1) o[r] && s.push(o[r])
        } else if (i.nodeType || i === t || i === e) s.push(i); else if (i.length > 0 && i[0].nodeType) for (r = 0; r < i.length; r += 1) s.push(i[r]);
        return new a(s)
      }

      function n(e) {
        for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
      }

      function r(e) {
        if ("undefined" === typeof e) return this;
        for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) "undefined" !== typeof this[i] && "undefined" !== typeof this[i].classList && this[i].classList.add(t[a]);
        return this
      }

      function o(e) {
        for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) "undefined" !== typeof this[i] && "undefined" !== typeof this[i].classList && this[i].classList.remove(t[a]);
        return this
      }

      function l(e) {
        return !!this[0] && this[0].classList.contains(e)
      }

      function d(e) {
        for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) "undefined" !== typeof this[i] && "undefined" !== typeof this[i].classList && this[i].classList.toggle(t[a]);
        return this
      }

      function c(e, t) {
        var a = arguments;
        if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (var i = 0; i < this.length; i += 1) if (2 === a.length) this[i].setAttribute(e, t); else for (var n in e) this[i][n] = e[n], this[i].setAttribute(n, e[n]);
        return this
      }

      function u(e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this
      }

      function p(e, t) {
        var a;
        if ("undefined" !== typeof t) {
          for (var i = 0; i < this.length; i += 1) a = this[i], a.dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
          return this
        }
        if (a = this[0], a) {
          if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
          var n = a.getAttribute("data-" + e);
          return n || void 0
        }
      }

      function m(e) {
        for (var t = 0; t < this.length; t += 1) {
          var a = this[t].style;
          a.webkitTransform = e, a.transform = e
        }
        return this
      }

      function h(e) {
        "string" !== typeof e && (e += "ms");
        for (var t = 0; t < this.length; t += 1) {
          var a = this[t].style;
          a.webkitTransitionDuration = e, a.transitionDuration = e
        }
        return this
      }

      function f() {
        var e, t = [], a = arguments.length;
        while (a--) t[a] = arguments[a];
        var n = t[0], s = t[1], r = t[2], o = t[3];

        function l(e) {
          var t = e.target;
          if (t) {
            var a = e.target.dom7EventData || [];
            if (a.indexOf(e) < 0 && a.unshift(e), i(t).is(s)) r.apply(t, a); else for (var n = i(t).parents(), o = 0; o < n.length; o += 1) i(n[o]).is(s) && r.apply(n[o], a)
          }
        }

        function d(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
        }

        "function" === typeof t[1] && (e = t, n = e[0], r = e[1], o = e[2], s = void 0), o || (o = !1);
        for (var c, u = n.split(" "), p = 0; p < this.length; p += 1) {
          var m = this[p];
          if (s) for (c = 0; c < u.length; c += 1) {
            var h = u[c];
            m.dom7LiveListeners || (m.dom7LiveListeners = {}), m.dom7LiveListeners[h] || (m.dom7LiveListeners[h] = []), m.dom7LiveListeners[h].push({
              listener: r,
              proxyListener: l
            }), m.addEventListener(h, l, o)
          } else for (c = 0; c < u.length; c += 1) {
            var f = u[c];
            m.dom7Listeners || (m.dom7Listeners = {}), m.dom7Listeners[f] || (m.dom7Listeners[f] = []), m.dom7Listeners[f].push({
              listener: r,
              proxyListener: d
            }), m.addEventListener(f, d, o)
          }
        }
        return this
      }

      function v() {
        var e, t = [], a = arguments.length;
        while (a--) t[a] = arguments[a];
        var i = t[0], n = t[1], s = t[2], r = t[3];
        "function" === typeof t[1] && (e = t, i = e[0], s = e[1], r = e[2], n = void 0), r || (r = !1);
        for (var o = i.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], c = 0; c < this.length; c += 1) {
          var u = this[c], p = void 0;
          if (!n && u.dom7Listeners ? p = u.dom7Listeners[d] : n && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length) for (var m = p.length - 1; m >= 0; m -= 1) {
            var h = p[m];
            s && h.listener === s ? (u.removeEventListener(d, h.proxyListener, r), p.splice(m, 1)) : s && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === s ? (u.removeEventListener(d, h.proxyListener, r), p.splice(m, 1)) : s || (u.removeEventListener(d, h.proxyListener, r), p.splice(m, 1))
          }
        }
        return this
      }

      function g() {
        var a = [], i = arguments.length;
        while (i--) a[i] = arguments[i];
        for (var n = a[0].split(" "), s = a[1], r = 0; r < n.length; r += 1) for (var o = n[r], l = 0; l < this.length; l += 1) {
          var d = this[l], c = void 0;
          try {
            c = new t.CustomEvent(o, {detail: s, bubbles: !0, cancelable: !0})
          } catch (u) {
            c = e.createEvent("Event"), c.initEvent(o, !0, !0), c.detail = s
          }
          d.dom7EventData = a.filter((function (e, t) {
            return t > 0
          })), d.dispatchEvent(c), d.dom7EventData = [], delete d.dom7EventData
        }
        return this
      }

      function b(e) {
        var t, a = ["webkitTransitionEnd", "transitionend"], i = this;

        function n(s) {
          if (s.target === this) for (e.call(this, s), t = 0; t < a.length; t += 1) i.off(a[t], n)
        }

        if (e) for (t = 0; t < a.length; t += 1) i.on(a[t], n);
        return this
      }

      function y(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
          }
          return this[0].offsetWidth
        }
        return null
      }

      function w(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
          }
          return this[0].offsetHeight
        }
        return null
      }

      function x() {
        if (this.length > 0) {
          var a = this[0], i = a.getBoundingClientRect(), n = e.body, s = a.clientTop || n.clientTop || 0,
              r = a.clientLeft || n.clientLeft || 0, o = a === t ? t.scrollY : a.scrollTop,
              l = a === t ? t.scrollX : a.scrollLeft;
          return {top: i.top + o - s, left: i.left + l - r}
        }
        return null
      }

      function S() {
        return this[0] ? t.getComputedStyle(this[0], null) : {}
      }

      function C(e, a) {
        var i;
        if (1 === arguments.length) {
          if ("string" !== typeof e) {
            for (i = 0; i < this.length; i += 1) for (var n in e) this[i].style[n] = e[n];
            return this
          }
          if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" === typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = a;
          return this
        }
        return this
      }

      function E(e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
        return this
      }

      function T(e) {
        if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : void 0;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this
      }

      function k(e) {
        if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this
      }

      function M(n) {
        var s, r, o = this[0];
        if (!o || "undefined" === typeof n) return !1;
        if ("string" === typeof n) {
          if (o.matches) return o.matches(n);
          if (o.webkitMatchesSelector) return o.webkitMatchesSelector(n);
          if (o.msMatchesSelector) return o.msMatchesSelector(n);
          for (s = i(n), r = 0; r < s.length; r += 1) if (s[r] === o) return !0;
          return !1
        }
        if (n === e) return o === e;
        if (n === t) return o === t;
        if (n.nodeType || n instanceof a) {
          for (s = n.nodeType ? [n] : n, r = 0; r < s.length; r += 1) if (s[r] === o) return !0;
          return !1
        }
        return !1
      }

      function $() {
        var e, t = this[0];
        if (t) {
          e = 0;
          while (null !== (t = t.previousSibling)) 1 === t.nodeType && (e += 1);
          return e
        }
      }

      function _(e) {
        if ("undefined" === typeof e) return this;
        var t, i = this.length;
        return e > i - 1 ? new a([]) : e < 0 ? (t = i + e, new a(t < 0 ? [] : [this[t]])) : new a([this[e]])
      }

      function D() {
        var t, i = [], n = arguments.length;
        while (n--) i[n] = arguments[n];
        for (var s = 0; s < i.length; s += 1) {
          t = i[s];
          for (var r = 0; r < this.length; r += 1) if ("string" === typeof t) {
            var o = e.createElement("div");
            o.innerHTML = t;
            while (o.firstChild) this[r].appendChild(o.firstChild)
          } else if (t instanceof a) for (var l = 0; l < t.length; l += 1) this[r].appendChild(t[l]); else this[r].appendChild(t)
        }
        return this
      }

      function L(t) {
        var i, n;
        for (i = 0; i < this.length; i += 1) if ("string" === typeof t) {
          var s = e.createElement("div");
          for (s.innerHTML = t, n = s.childNodes.length - 1; n >= 0; n -= 1) this[i].insertBefore(s.childNodes[n], this[i].childNodes[0])
        } else if (t instanceof a) for (n = 0; n < t.length; n += 1) this[i].insertBefore(t[n], this[i].childNodes[0]); else this[i].insertBefore(t, this[i].childNodes[0]);
        return this
      }

      function I(e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && i(this[0].nextElementSibling).is(e) ? new a([this[0].nextElementSibling]) : new a([]) : this[0].nextElementSibling ? new a([this[0].nextElementSibling]) : new a([]) : new a([])
      }

      function P(e) {
        var t = [], n = this[0];
        if (!n) return new a([]);
        while (n.nextElementSibling) {
          var s = n.nextElementSibling;
          e ? i(s).is(e) && t.push(s) : t.push(s), n = s
        }
        return new a(t)
      }

      function z(e) {
        if (this.length > 0) {
          var t = this[0];
          return e ? t.previousElementSibling && i(t.previousElementSibling).is(e) ? new a([t.previousElementSibling]) : new a([]) : t.previousElementSibling ? new a([t.previousElementSibling]) : new a([])
        }
        return new a([])
      }

      function A(e) {
        var t = [], n = this[0];
        if (!n) return new a([]);
        while (n.previousElementSibling) {
          var s = n.previousElementSibling;
          e ? i(s).is(e) && t.push(s) : t.push(s), n = s
        }
        return new a(t)
      }

      function O(e) {
        for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? i(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
        return i(n(t))
      }

      function N(e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          var s = this[a].parentNode;
          while (s) e ? i(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
        }
        return i(n(t))
      }

      function j(e) {
        var t = this;
        return "undefined" === typeof e ? new a([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
      }

      function H(e) {
        for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].querySelectorAll(e), s = 0; s < n.length; s += 1) t.push(n[s]);
        return new a(t)
      }

      function F(e) {
        for (var t = [], s = 0; s < this.length; s += 1) for (var r = this[s].childNodes, o = 0; o < r.length; o += 1) e ? 1 === r[o].nodeType && i(r[o]).is(e) && t.push(r[o]) : 1 === r[o].nodeType && t.push(r[o]);
        return new a(n(t))
      }

      function B() {
        for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this
      }

      function V() {
        var e = [], t = arguments.length;
        while (t--) e[t] = arguments[t];
        var a, n, s = this;
        for (a = 0; a < e.length; a += 1) {
          var r = i(e[a]);
          for (n = 0; n < r.length; n += 1) s[s.length] = r[n], s.length += 1
        }
        return s
      }

      i.fn = a.prototype, i.Class = a, i.Dom7 = a;
      var G = {
        addClass: r,
        removeClass: o,
        hasClass: l,
        toggleClass: d,
        attr: c,
        removeAttr: u,
        data: p,
        transform: m,
        transition: h,
        on: f,
        off: v,
        trigger: g,
        transitionEnd: b,
        outerWidth: y,
        outerHeight: w,
        offset: x,
        css: C,
        each: E,
        html: T,
        text: k,
        is: M,
        index: $,
        eq: _,
        append: D,
        prepend: L,
        next: I,
        nextAll: P,
        prev: z,
        prevAll: A,
        parent: O,
        parents: N,
        closest: j,
        find: H,
        children: F,
        remove: B,
        add: V,
        styles: S
      };
      Object.keys(G).forEach((function (e) {
        i.fn[e] = G[e]
      }));
      var q = {
        deleteProps: function (e) {
          var t = e;
          Object.keys(t).forEach((function (e) {
            try {
              t[e] = null
            } catch (a) {
            }
            try {
              delete t[e]
            } catch (a) {
            }
          }))
        }, nextTick: function (e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
          return Date.now()
        }, getTranslate: function (e, a) {
          var i, n, s;
          void 0 === a && (a = "x");
          var r = t.getComputedStyle(e, null);
          return t.WebKitCSSMatrix ? (n = r.transform || r.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((function (e) {
            return e.replace(",", ".")
          })).join(", ")), s = new t.WebKitCSSMatrix("none" === n ? "" : n)) : (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = s.toString().split(",")), "x" === a && (n = t.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === a && (n = t.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
        }, parseUrlQuery: function (e) {
          var a, i, n, s, r = {}, o = e || t.location.href;
          if ("string" === typeof o && o.length) for (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "", i = o.split("&").filter((function (e) {
            return "" !== e
          })), s = i.length, a = 0; a < s; a += 1) n = i[a].replace(/#\S+/g, "").split("="), r[decodeURIComponent(n[0])] = "undefined" === typeof n[1] ? void 0 : decodeURIComponent(n[1]) || "";
          return r
        }, isObject: function (e) {
          return "object" === s(e) && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
          var e = [], t = arguments.length;
          while (t--) e[t] = arguments[t];
          for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
            var n = e[i];
            if (void 0 !== n && null !== n) for (var s = Object.keys(Object(n)), r = 0, o = s.length; r < o; r += 1) {
              var l = s[r], d = Object.getOwnPropertyDescriptor(n, l);
              void 0 !== d && d.enumerable && (q.isObject(a[l]) && q.isObject(n[l]) ? q.extend(a[l], n[l]) : !q.isObject(a[l]) && q.isObject(n[l]) ? (a[l] = {}, q.extend(a[l], n[l])) : a[l] = n[l])
            }
          }
          return a
        }
      }, R = function () {
        var a = e.createElement("div");
        return {
          touch: t.Modernizr && !0 === t.Modernizr.touch || function () {
            return !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
          }(),
          pointerEvents: !!(t.navigator.pointerEnabled || t.PointerEvent || "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0),
          prefixedPointerEvents: !!t.navigator.msPointerEnabled,
          transition: function () {
            var e = a.style;
            return "transition" in e || "webkitTransition" in e || "MozTransition" in e
          }(),
          transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || function () {
            var e = a.style;
            return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
          }(),
          flexbox: function () {
            for (var e = a.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1) if (t[i] in e) return !0;
            return !1
          }(),
          observer: function () {
            return "MutationObserver" in t || "WebkitMutationObserver" in t
          }(),
          passiveListener: function () {
            var e = !1;
            try {
              var a = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0
                }
              });
              t.addEventListener("testPassiveListener", null, a)
            } catch (i) {
            }
            return e
          }(),
          gestures: function () {
            return "ongesturestart" in t
          }()
        }
      }(), Y = function () {
        function e() {
          var e = t.navigator.userAgent.toLowerCase();
          return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }

        return {
          isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
          isEdge: !!t.navigator.userAgent.match(/Edge/g),
          isSafari: e(),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        }
      }(), X = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function (e) {
          t.on(e, t.params.on[e])
        }))
      }, W = {components: {configurable: !0}};

      function U() {
        var e, t, a = this, i = a.$el;
        e = "undefined" !== typeof a.params.width ? a.params.width : i[0].clientWidth, t = "undefined" !== typeof a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), q.extend(a, {
          width: e,
          height: t,
          size: a.isHorizontal() ? e : t
        }))
      }

      function J() {
        var e = this, a = e.params, i = e.$wrapperEl, n = e.size, s = e.rtlTranslate, r = e.wrongRTL,
            o = e.virtual && a.virtual.enabled, l = o ? e.virtual.slides.length : e.slides.length,
            d = i.children("." + e.params.slideClass), c = o ? e.virtual.slides.length : d.length, u = [], p = [],
            m = [], h = a.slidesOffsetBefore;
        "function" === typeof h && (h = a.slidesOffsetBefore.call(e));
        var f = a.slidesOffsetAfter;
        "function" === typeof f && (f = a.slidesOffsetAfter.call(e));
        var v = e.snapGrid.length, g = e.snapGrid.length, b = a.spaceBetween, y = -h, w = 0, x = 0;
        if ("undefined" !== typeof n) {
          var S, C;
          "string" === typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * n), e.virtualSize = -b, s ? d.css({
            marginLeft: "",
            marginTop: ""
          }) : d.css({
            marginRight: "",
            marginBottom: ""
          }), a.slidesPerColumn > 1 && (S = Math.floor(c / a.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / a.slidesPerColumn) * a.slidesPerColumn, "auto" !== a.slidesPerView && "row" === a.slidesPerColumnFill && (S = Math.max(S, a.slidesPerView * a.slidesPerColumn)));
          for (var E, T = a.slidesPerColumn, k = S / T, M = Math.floor(c / a.slidesPerColumn), $ = 0; $ < c; $ += 1) {
            C = 0;
            var _ = d.eq($);
            if (a.slidesPerColumn > 1) {
              var D = void 0, L = void 0, I = void 0;
              "column" === a.slidesPerColumnFill ? (L = Math.floor($ / T), I = $ - L * T, (L > M || L === M && I === T - 1) && (I += 1, I >= T && (I = 0, L += 1)), D = L + I * S / T, _.css({
                "-webkit-box-ordinal-group": D,
                "-moz-box-ordinal-group": D,
                "-ms-flex-order": D,
                "-webkit-order": D,
                order: D
              })) : (I = Math.floor($ / k), L = $ - I * k), _.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && a.spaceBetween && a.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", I)
            }
            if ("none" !== _.css("display")) {
              if ("auto" === a.slidesPerView) {
                var P = t.getComputedStyle(_[0], null), z = _[0].style.transform, A = _[0].style.webkitTransform;
                if (z && (_[0].style.transform = "none"), A && (_[0].style.webkitTransform = "none"), a.roundLengths) C = e.isHorizontal() ? _.outerWidth(!0) : _.outerHeight(!0); else if (e.isHorizontal()) {
                  var O = parseFloat(P.getPropertyValue("width")), N = parseFloat(P.getPropertyValue("padding-left")),
                      j = parseFloat(P.getPropertyValue("padding-right")),
                      H = parseFloat(P.getPropertyValue("margin-left")),
                      F = parseFloat(P.getPropertyValue("margin-right")), B = P.getPropertyValue("box-sizing");
                  C = B && "border-box" === B ? O + H + F : O + N + j + H + F
                } else {
                  var V = parseFloat(P.getPropertyValue("height")), G = parseFloat(P.getPropertyValue("padding-top")),
                      Y = parseFloat(P.getPropertyValue("padding-bottom")),
                      X = parseFloat(P.getPropertyValue("margin-top")),
                      W = parseFloat(P.getPropertyValue("margin-bottom")), U = P.getPropertyValue("box-sizing");
                  C = U && "border-box" === U ? V + X + W : V + G + Y + X + W
                }
                z && (_[0].style.transform = z), A && (_[0].style.webkitTransform = A), a.roundLengths && (C = Math.floor(C))
              } else C = (n - (a.slidesPerView - 1) * b) / a.slidesPerView, a.roundLengths && (C = Math.floor(C)), d[$] && (e.isHorizontal() ? d[$].style.width = C + "px" : d[$].style.height = C + "px");
              d[$] && (d[$].swiperSlideSize = C), m.push(C), a.centeredSlides ? (y = y + C / 2 + w / 2 + b, 0 === w && 0 !== $ && (y = y - n / 2 - b), 0 === $ && (y = y - n / 2 - b), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), x % a.slidesPerGroup === 0 && u.push(y), p.push(y)) : (a.roundLengths && (y = Math.floor(y)), x % a.slidesPerGroup === 0 && u.push(y), p.push(y), y = y + C + b), e.virtualSize += C + b, w = C, x += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, n) + f, s && r && ("slide" === a.effect || "coverflow" === a.effect) && i.css({width: e.virtualSize + a.spaceBetween + "px"}), R.flexbox && !a.setWrapperSize || (e.isHorizontal() ? i.css({width: e.virtualSize + a.spaceBetween + "px"}) : i.css({height: e.virtualSize + a.spaceBetween + "px"})), a.slidesPerColumn > 1 && (e.virtualSize = (C + a.spaceBetween) * S, e.virtualSize = Math.ceil(e.virtualSize / a.slidesPerColumn) - a.spaceBetween, e.isHorizontal() ? i.css({width: e.virtualSize + a.spaceBetween + "px"}) : i.css({height: e.virtualSize + a.spaceBetween + "px"}), a.centeredSlides)) {
            E = [];
            for (var J = 0; J < u.length; J += 1) {
              var K = u[J];
              a.roundLengths && (K = Math.floor(K)), u[J] < e.virtualSize + u[0] && E.push(K)
            }
            u = E
          }
          if (!a.centeredSlides) {
            E = [];
            for (var Z = 0; Z < u.length; Z += 1) {
              var Q = u[Z];
              a.roundLengths && (Q = Math.floor(Q)), u[Z] <= e.virtualSize - n && E.push(Q)
            }
            u = E, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n)
          }
          if (0 === u.length && (u = [0]), 0 !== a.spaceBetween && (e.isHorizontal() ? s ? d.css({marginLeft: b + "px"}) : d.css({marginRight: b + "px"}) : d.css({marginBottom: b + "px"})), a.centerInsufficientSlides) {
            var ee = 0;
            if (m.forEach((function (e) {
              ee += e + (a.spaceBetween ? a.spaceBetween : 0)
            })), ee -= a.spaceBetween, ee < n) {
              var te = (n - ee) / 2;
              u.forEach((function (e, t) {
                u[t] = e - te
              })), p.forEach((function (e, t) {
                p[t] = e + te
              }))
            }
          }
          q.extend(e, {
            slides: d,
            snapGrid: u,
            slidesGrid: p,
            slidesSizesGrid: m
          }), c !== l && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== g && e.emit("slidesGridLengthChange"), (a.watchSlidesProgress || a.watchSlidesVisibility) && e.updateSlidesOffset()
        }
      }

      function K(e) {
        var t, a = this, i = [], n = 0;
        if ("number" === typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
          var s = a.activeIndex + t;
          if (s > a.slides.length) break;
          i.push(a.slides.eq(s)[0])
        } else i.push(a.slides.eq(a.activeIndex)[0]);
        for (t = 0; t < i.length; t += 1) if ("undefined" !== typeof i[t]) {
          var r = i[t].offsetHeight;
          n = r > n ? r : n
        }
        n && a.$wrapperEl.css("height", n + "px")
      }

      function Z() {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop
      }

      function Q(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this, a = t.params, n = t.slides, s = t.rtlTranslate;
        if (0 !== n.length) {
          "undefined" === typeof n[0].swiperSlideOffset && t.updateSlidesOffset();
          var r = -e;
          s && (r = e), n.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          for (var o = 0; o < n.length; o += 1) {
            var l = n[o],
                d = (r + (a.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);
            if (a.watchSlidesVisibility) {
              var c = -(r - l.swiperSlideOffset), u = c + t.slidesSizesGrid[o],
                  p = c >= 0 && c < t.size || u > 0 && u <= t.size || c <= 0 && u >= t.size;
              p && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(o), n.eq(o).addClass(a.slideVisibleClass))
            }
            l.progress = s ? -d : d
          }
          t.visibleSlides = i(t.visibleSlides)
        }
      }

      function ee(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this, a = t.params, i = t.maxTranslate() - t.minTranslate(), n = t.progress, s = t.isBeginning,
            r = t.isEnd, o = s, l = r;
        0 === i ? (n = 0, s = !0, r = !0) : (n = (e - t.minTranslate()) / i, s = n <= 0, r = n >= 1), q.extend(t, {
          progress: n,
          isBeginning: s,
          isEnd: r
        }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), s && !o && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (o && !s || l && !r) && t.emit("fromEdge"), t.emit("progress", n)
      }

      function te() {
        var e, t = this, a = t.slides, i = t.params, n = t.$wrapperEl, s = t.activeIndex, r = t.realIndex,
            o = t.virtual && i.virtual.enabled;
        a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : a.eq(s), e.addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
        var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === l.length && (l = a.eq(0), l.addClass(i.slideNextClass));
        var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === d.length && (d = a.eq(-1), d.addClass(i.slidePrevClass)), i.loop && (l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
      }

      function ae(e) {
        var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, n = a.slidesGrid, s = a.snapGrid,
            r = a.params, o = a.activeIndex, l = a.realIndex, d = a.snapIndex, c = e;
        if ("undefined" === typeof c) {
          for (var u = 0; u < n.length; u += 1) "undefined" !== typeof n[u + 1] ? i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2 ? c = u : i >= n[u] && i < n[u + 1] && (c = u + 1) : i >= n[u] && (c = u);
          r.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
        }
        if (t = s.indexOf(i) >= 0 ? s.indexOf(i) : Math.floor(c / r.slidesPerGroup), t >= s.length && (t = s.length - 1), c !== o) {
          var p = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
          q.extend(a, {
            snapIndex: t,
            realIndex: p,
            previousIndex: o,
            activeIndex: c
          }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== p && a.emit("realIndexChange"), a.emit("slideChange")
        } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
      }

      function ie(e) {
        var t = this, a = t.params, n = i(e.target).closest("." + a.slideClass)[0], s = !1;
        if (n) for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === n && (s = !0);
        if (!n || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
        t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(i(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i(n).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
      }

      X.prototype.on = function (e, t, a) {
        var i = this;
        if ("function" !== typeof t) return i;
        var n = a ? "unshift" : "push";
        return e.split(" ").forEach((function (e) {
          i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t)
        })), i
      }, X.prototype.once = function (e, t, a) {
        var i = this;
        if ("function" !== typeof t) return i;

        function n() {
          var a = [], s = arguments.length;
          while (s--) a[s] = arguments[s];
          t.apply(i, a), i.off(e, n), n.f7proxy && delete n.f7proxy
        }

        return n.f7proxy = t, i.on(e, n, a)
      }, X.prototype.off = function (e, t) {
        var a = this;
        return a.eventsListeners ? (e.split(" ").forEach((function (e) {
          "undefined" === typeof t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].length && a.eventsListeners[e].forEach((function (i, n) {
            (i === t || i.f7proxy && i.f7proxy === t) && a.eventsListeners[e].splice(n, 1)
          }))
        })), a) : a
      }, X.prototype.emit = function () {
        var e = [], t = arguments.length;
        while (t--) e[t] = arguments[t];
        var a, i, n, s = this;
        if (!s.eventsListeners) return s;
        "string" === typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), n = s) : (a = e[0].events, i = e[0].data, n = e[0].context || s);
        var r = Array.isArray(a) ? a : a.split(" ");
        return r.forEach((function (e) {
          if (s.eventsListeners && s.eventsListeners[e]) {
            var t = [];
            s.eventsListeners[e].forEach((function (e) {
              t.push(e)
            })), t.forEach((function (e) {
              e.apply(n, i)
            }))
          }
        })), s
      }, X.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (a) {
          var i = t.modules[a];
          i.params && q.extend(e, i.params)
        }))
      }, X.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (a) {
          var i = t.modules[a], n = e[a] || {};
          i.instance && Object.keys(i.instance).forEach((function (e) {
            var a = i.instance[e];
            t[e] = "function" === typeof a ? a.bind(t) : a
          })), i.on && t.on && Object.keys(i.on).forEach((function (e) {
            t.on(e, i.on[e])
          })), i.create && i.create.bind(t)(n)
        }))
      }, W.components.set = function (e) {
        var t = this;
        t.use && t.use(e)
      }, X.installModule = function (e) {
        var t = [], a = arguments.length - 1;
        while (a-- > 0) t[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var n = e.name || Object.keys(i.prototype.modules).length + "_" + q.now();
        return i.prototype.modules[n] = e, e.proto && Object.keys(e.proto).forEach((function (t) {
          i.prototype[t] = e.proto[t]
        })), e.static && Object.keys(e.static).forEach((function (t) {
          i[t] = e.static[t]
        })), e.install && e.install.apply(i, t), i
      }, X.use = function (e) {
        var t = [], a = arguments.length - 1;
        while (a-- > 0) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach((function (e) {
          return i.installModule(e)
        })), i) : i.installModule.apply(i, [e].concat(t))
      }, Object.defineProperties(X, W);
      var ne = {
        updateSize: U,
        updateSlides: J,
        updateAutoHeight: K,
        updateSlidesOffset: Z,
        updateSlidesProgress: Q,
        updateProgress: ee,
        updateSlidesClasses: te,
        updateActiveIndex: ae,
        updateClickedSlide: ie
      };

      function se(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this, a = t.params, i = t.rtlTranslate, n = t.translate, s = t.$wrapperEl;
        if (a.virtualTranslate) return i ? -n : n;
        var r = q.getTranslate(s[0], e);
        return i && (r = -r), r || 0
      }

      function re(e, t) {
        var a, i = this, n = i.rtlTranslate, s = i.params, r = i.$wrapperEl, o = i.progress, l = 0, d = 0, c = 0;
        i.isHorizontal() ? l = n ? -e : e : d = e, s.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.virtualTranslate || (R.transforms3d ? r.transform("translate3d(" + l + "px, " + d + "px, " + c + "px)") : r.transform("translate(" + l + "px, " + d + "px)")), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : d;
        var u = i.maxTranslate() - i.minTranslate();
        a = 0 === u ? 0 : (e - i.minTranslate()) / u, a !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
      }

      function oe() {
        return -this.snapGrid[0]
      }

      function le() {
        return -this.snapGrid[this.snapGrid.length - 1]
      }

      var de = {getTranslate: se, setTranslate: re, minTranslate: oe, maxTranslate: le};

      function ce(e, t) {
        var a = this;
        a.$wrapperEl.transition(e), a.emit("setTransition", e, t)
      }

      function ue(e, t) {
        void 0 === e && (e = !0);
        var a = this, i = a.activeIndex, n = a.params, s = a.previousIndex;
        n.autoHeight && a.updateAutoHeight();
        var r = t;
        if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), a.emit("transitionStart"), e && i !== s) {
          if ("reset" === r) return void a.emit("slideResetTransitionStart");
          a.emit("slideChangeTransitionStart"), "next" === r ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
        }
      }

      function pe(e, t) {
        void 0 === e && (e = !0);
        var a = this, i = a.activeIndex, n = a.previousIndex;
        a.animating = !1, a.setTransition(0);
        var s = t;
        if (s || (s = i > n ? "next" : i < n ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== n) {
          if ("reset" === s) return void a.emit("slideResetTransitionEnd");
          a.emit("slideChangeTransitionEnd"), "next" === s ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
        }
      }

      var me = {setTransition: ce, transitionStart: ue, transitionEnd: pe};

      function he(e, t, a, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
        var n = this, s = e;
        s < 0 && (s = 0);
        var r = n.params, o = n.snapGrid, l = n.slidesGrid, d = n.previousIndex, c = n.activeIndex, u = n.rtlTranslate;
        if (n.animating && r.preventInteractionOnTransition) return !1;
        var p = Math.floor(s / r.slidesPerGroup);
        p >= o.length && (p = o.length - 1), (c || r.initialSlide || 0) === (d || 0) && a && n.emit("beforeSlideChangeStart");
        var m, h = -o[p];
        if (n.updateProgress(h), r.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * h) >= Math.floor(100 * l[f]) && (s = f);
        if (n.initialized && s !== c) {
          if (!n.allowSlideNext && h < n.translate && h < n.minTranslate()) return !1;
          if (!n.allowSlidePrev && h > n.translate && h > n.maxTranslate() && (c || 0) !== s) return !1
        }
        return m = s > c ? "next" : s < c ? "prev" : "reset", u && -h === n.translate || !u && h === n.translate ? (n.updateActiveIndex(s), r.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== r.effect && n.setTranslate(h), "reset" !== m && (n.transitionStart(a, m), n.transitionEnd(a, m)), !1) : (0 !== t && R.transition ? (n.setTransition(t), n.setTranslate(h), n.updateActiveIndex(s), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, m), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
          n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(a, m))
        }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))) : (n.setTransition(0), n.setTranslate(h), n.updateActiveIndex(s), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, m), n.transitionEnd(a, m)), !0)
      }

      function fe(e, t, a, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
        var n = this, s = e;
        return n.params.loop && (s += n.loopedSlides), n.slideTo(s, t, a, i)
      }

      function ve(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this, n = i.params, s = i.animating;
        return n.loop ? !s && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + n.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + n.slidesPerGroup, e, t, a)
      }

      function ge(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this, n = i.params, s = i.animating, r = i.snapGrid, o = i.slidesGrid, l = i.rtlTranslate;
        if (n.loop) {
          if (s) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
        }
        var d = l ? i.translate : -i.translate;

        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
        }

        var u, p = c(d), m = r.map((function (e) {
          return c(e)
        })), h = (o.map((function (e) {
          return c(e)
        })), r[m.indexOf(p)], r[m.indexOf(p) - 1]);
        return "undefined" !== typeof h && (u = o.indexOf(h), u < 0 && (u = i.activeIndex - 1)), i.slideTo(u, e, t, a)
      }

      function be(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this;
        return i.slideTo(i.activeIndex, e, t, a)
      }

      function ye(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this, n = i.activeIndex, s = Math.floor(n / i.params.slidesPerGroup);
        if (s < i.snapGrid.length - 1) {
          var r = i.rtlTranslate ? i.translate : -i.translate, o = i.snapGrid[s], l = i.snapGrid[s + 1];
          r - o > (l - o) / 2 && (n = i.params.slidesPerGroup)
        }
        return i.slideTo(n, e, t, a)
      }

      function we() {
        var e, t = this, a = t.params, n = t.$wrapperEl,
            s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex;
        if (a.loop) {
          if (t.animating) return;
          e = parseInt(i(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = n.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), q.nextTick((function () {
            t.slideTo(r)
          }))) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = n.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), q.nextTick((function () {
            t.slideTo(r)
          }))) : t.slideTo(r)
        } else t.slideTo(r)
      }

      var xe = {
        slideTo: he,
        slideToLoop: fe,
        slideNext: ve,
        slidePrev: ge,
        slideReset: be,
        slideToClosest: ye,
        slideToClickedSlide: we
      };

      function Se() {
        var t = this, a = t.params, n = t.$wrapperEl;
        n.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
        var s = n.children("." + a.slideClass);
        if (a.loopFillGroupWithBlank) {
          var r = a.slidesPerGroup - s.length % a.slidesPerGroup;
          if (r !== a.slidesPerGroup) {
            for (var o = 0; o < r; o += 1) {
              var l = i(e.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
              n.append(l)
            }
            s = n.children("." + a.slideClass)
          }
        }
        "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10), t.loopedSlides += a.loopAdditionalSlides, t.loopedSlides > s.length && (t.loopedSlides = s.length);
        var d = [], c = [];
        s.each((function (e, a) {
          var n = i(a);
          e < t.loopedSlides && c.push(a), e < s.length && e >= s.length - t.loopedSlides && d.push(a), n.attr("data-swiper-slide-index", e)
        }));
        for (var u = 0; u < c.length; u += 1) n.append(i(c[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
        for (var p = d.length - 1; p >= 0; p -= 1) n.prepend(i(d[p].cloneNode(!0)).addClass(a.slideDuplicateClass))
      }

      function Ce() {
        var e, t = this, a = t.params, i = t.activeIndex, n = t.slides, s = t.loopedSlides, r = t.allowSlidePrev,
            o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
        t.allowSlidePrev = !0, t.allowSlideNext = !0;
        var c = -l[i], u = c - t.getTranslate();
        if (i < s) {
          e = n.length - 3 * s + i, e += s;
          var p = t.slideTo(e, 0, !1, !0);
          p && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)
        } else if ("auto" === a.slidesPerView && i >= 2 * s || i >= n.length - s) {
          e = -n.length + i + s, e += s;
          var m = t.slideTo(e, 0, !1, !0);
          m && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)
        }
        t.allowSlidePrev = r, t.allowSlideNext = o
      }

      function Ee() {
        var e = this, t = e.$wrapperEl, a = e.params, i = e.slides;
        t.children("." + a.slideClass + "." + a.slideDuplicateClass + ",." + a.slideClass + "." + a.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
      }

      var Te = {loopCreate: Se, loopFix: Ce, loopDestroy: Ee};

      function ke(e) {
        var t = this;
        if (!(R.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked)) {
          var a = t.el;
          a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab"
        }
      }

      function Me() {
        var e = this;
        R.touch || e.params.watchOverflow && e.isLocked || (e.el.style.cursor = "")
      }

      var $e = {setGrabCursor: ke, unsetGrabCursor: Me};

      function _e(e) {
        var t = this, a = t.$wrapperEl, i = t.params;
        if (i.loop && t.loopDestroy(), "object" === s(e) && "length" in e) for (var n = 0; n < e.length; n += 1) e[n] && a.append(e[n]); else a.append(e);
        i.loop && t.loopCreate(), i.observer && R.observer || t.update()
      }

      function De(e) {
        var t = this, a = t.params, i = t.$wrapperEl, n = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = n + 1;
        if ("object" === s(e) && "length" in e) {
          for (var o = 0; o < e.length; o += 1) e[o] && i.prepend(e[o]);
          r = n + e.length
        } else i.prepend(e);
        a.loop && t.loopCreate(), a.observer && R.observer || t.update(), t.slideTo(r, 0, !1)
      }

      function Le(e, t) {
        var a = this, i = a.$wrapperEl, n = a.params, r = a.activeIndex, o = r;
        n.loop && (o -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + n.slideClass));
        var l = a.slides.length;
        if (e <= 0) a.prependSlide(t); else if (e >= l) a.appendSlide(t); else {
          for (var d = o > e ? o + 1 : o, c = [], u = l - 1; u >= e; u -= 1) {
            var p = a.slides.eq(u);
            p.remove(), c.unshift(p)
          }
          if ("object" === s(t) && "length" in t) {
            for (var m = 0; m < t.length; m += 1) t[m] && i.append(t[m]);
            d = o > e ? o + t.length : o
          } else i.append(t);
          for (var h = 0; h < c.length; h += 1) i.append(c[h]);
          n.loop && a.loopCreate(), n.observer && R.observer || a.update(), n.loop ? a.slideTo(d + a.loopedSlides, 0, !1) : a.slideTo(d, 0, !1)
        }
      }

      function Ie(e) {
        var t = this, a = t.params, i = t.$wrapperEl, n = t.activeIndex, r = n;
        a.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
        var o, l = r;
        if ("object" === s(e) && "length" in e) {
          for (var d = 0; d < e.length; d += 1) o = e[d], t.slides[o] && t.slides.eq(o).remove(), o < l && (l -= 1);
          l = Math.max(l, 0)
        } else o = e, t.slides[o] && t.slides.eq(o).remove(), o < l && (l -= 1), l = Math.max(l, 0);
        a.loop && t.loopCreate(), a.observer && R.observer || t.update(), a.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
      }

      function Pe() {
        for (var e = this, t = [], a = 0; a < e.slides.length; a += 1) t.push(a);
        e.removeSlide(t)
      }

      var ze = {appendSlide: _e, prependSlide: De, addSlide: Le, removeSlide: Ie, removeAllSlides: Pe},
          Ae = function () {
            var a = t.navigator.userAgent, i = {
                  ios: !1,
                  android: !1,
                  androidChrome: !1,
                  desktop: !1,
                  windows: !1,
                  iphone: !1,
                  ipod: !1,
                  ipad: !1,
                  cordova: t.cordova || t.phonegap,
                  phonegap: t.cordova || t.phonegap
                }, n = a.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), s = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = a.match(/(iPad).*OS\s([\d_]+)/), o = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !r && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (n && (i.os = "windows", i.osVersion = n[2], i.windows = !0), s && !n && (i.os = "android", i.osVersion = s[2], i.android = !0, i.androidChrome = a.toLowerCase().indexOf("chrome") >= 0), (r || l || o) && (i.os = "ios", i.ios = !0), l && !o && (i.osVersion = l[2].replace(/_/g, "."), i.iphone = !0), r && (i.osVersion = r[2].replace(/_/g, "."), i.ipad = !0), o && (i.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, i.iphone = !0), i.ios && i.osVersion && a.indexOf("Version/") >= 0 && "10" === i.osVersion.split(".")[0] && (i.osVersion = a.toLowerCase().split("version/")[1].split(" ")[0]), i.desktop = !(i.os || i.android || i.webView), i.webView = (l || r || o) && a.match(/.*AppleWebKit(?!.*Safari)/i), i.os && "ios" === i.os) {
              var d = i.osVersion.split("."), c = e.querySelector('meta[name="viewport"]');
              i.minimalUi = !i.webView && (o || l) && (1 * d[0] === 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && c && c.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return i.pixelRatio = t.devicePixelRatio || 1, i
          }();

      function Oe(a) {
        var n = this, s = n.touchEventsData, r = n.params, o = n.touches;
        if (!n.animating || !r.preventInteractionOnTransition) {
          var l = a;
          if (l.originalEvent && (l = l.originalEvent), s.isTouchEvent = "touchstart" === l.type, (s.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!s.isTouchEvent && "button" in l && l.button > 0) && (!s.isTouched || !s.isMoved)) if (r.noSwiping && i(l.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) n.allowClick = !0; else if (!r.swipeHandler || i(l).closest(r.swipeHandler)[0]) {
            o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
            var d = o.currentX, c = o.currentY, u = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                p = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
            if (!u || !(d <= p || d >= t.screen.width - p)) {
              if (q.extend(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
              }), o.startX = d, o.startY = c, s.touchStartTime = q.now(), n.allowClick = !0, n.updateSize(), n.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== l.type) {
                var m = !0;
                i(l.target).is(s.formElements) && (m = !1), e.activeElement && i(e.activeElement).is(s.formElements) && e.activeElement !== l.target && e.activeElement.blur();
                var h = m && n.allowTouchMove && r.touchStartPreventDefault;
                (r.touchStartForcePreventDefault || h) && l.preventDefault()
              }
              n.emit("touchStart", l)
            }
          }
        }
      }

      function Ne(t) {
        var a = this, n = a.touchEventsData, s = a.params, r = a.touches, o = a.rtlTranslate, l = t;
        if (l.originalEvent && (l = l.originalEvent), n.isTouched) {
          if (!n.isTouchEvent || "mousemove" !== l.type) {
            var d = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                c = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
            if (l.preventedByNestedSwiper) return r.startX = d, void (r.startY = c);
            if (!a.allowTouchMove) return a.allowClick = !1, void (n.isTouched && (q.extend(r, {
              startX: d,
              startY: c,
              currentX: d,
              currentY: c
            }), n.touchStartTime = q.now()));
            if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (a.isVertical()) {
              if (c < r.startY && a.translate <= a.maxTranslate() || c > r.startY && a.translate >= a.minTranslate()) return n.isTouched = !1, void (n.isMoved = !1)
            } else if (d < r.startX && a.translate <= a.maxTranslate() || d > r.startX && a.translate >= a.minTranslate()) return;
            if (n.isTouchEvent && e.activeElement && l.target === e.activeElement && i(l.target).is(n.formElements)) return n.isMoved = !0, void (a.allowClick = !1);
            if (n.allowTouchCallbacks && a.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
              r.currentX = d, r.currentY = c;
              var u = r.currentX - r.startX, p = r.currentY - r.startY;
              if (!(a.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(p, 2)) < a.params.threshold)) {
                var m;
                if ("undefined" === typeof n.isScrolling) a.isHorizontal() && r.currentY === r.startY || a.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : u * u + p * p >= 25 && (m = 180 * Math.atan2(Math.abs(p), Math.abs(u)) / Math.PI, n.isScrolling = a.isHorizontal() ? m > s.touchAngle : 90 - m > s.touchAngle);
                if (n.isScrolling && a.emit("touchMoveOpposite", l), "undefined" === typeof n.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (n.startMoving = !0)), n.isScrolling) n.isTouched = !1; else if (n.startMoving) {
                  a.allowClick = !1, l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), n.isMoved || (s.loop && a.loopFix(), n.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", l)), a.emit("sliderMove", l), n.isMoved = !0;
                  var h = a.isHorizontal() ? u : p;
                  r.diff = h, h *= s.touchRatio, o && (h = -h), a.swipeDirection = h > 0 ? "prev" : "next", n.currentTranslate = h + n.startTranslate;
                  var f = !0, v = s.resistanceRatio;
                  if (s.touchReleaseOnEdges && (v = 0), h > 0 && n.currentTranslate > a.minTranslate() ? (f = !1, s.resistance && (n.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + n.startTranslate + h, v))) : h < 0 && n.currentTranslate < a.maxTranslate() && (f = !1, s.resistance && (n.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - n.startTranslate - h, v))), f && (l.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), s.threshold > 0) {
                    if (!(Math.abs(h) > s.threshold || n.allowThresholdMove)) return void (n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, n.currentTranslate = n.startTranslate, void (r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                  }
                  s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === n.velocities.length && n.velocities.push({
                    position: r[a.isHorizontal() ? "startX" : "startY"],
                    time: n.touchStartTime
                  }), n.velocities.push({
                    position: r[a.isHorizontal() ? "currentX" : "currentY"],
                    time: q.now()
                  })), a.updateProgress(n.currentTranslate), a.setTranslate(n.currentTranslate))
                }
              }
            }
          }
        } else n.startMoving && n.isScrolling && a.emit("touchMoveOpposite", l)
      }

      function je(e) {
        var t = this, a = t.touchEventsData, i = t.params, n = t.touches, s = t.rtlTranslate, r = t.$wrapperEl,
            o = t.slidesGrid, l = t.snapGrid, d = e;
        if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
        i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var c, u = q.now(), p = u - a.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), p < 300 && u - a.lastClickTime > 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = q.nextTick((function () {
          t && !t.destroyed && t.emit("click", d)
        }), 300)), p < 300 && u - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = q.now(), q.nextTick((function () {
          t.destroyed || (t.allowClick = !0)
        })), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === n.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
        if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, c = i.followFinger ? s ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
          if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (c > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
          if (i.freeModeMomentum) {
            if (a.velocities.length > 1) {
              var m = a.velocities.pop(), h = a.velocities.pop(), f = m.position - h.position, v = m.time - h.time;
              t.velocity = f / v, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (v > 150 || q.now() - m.time > 300) && (t.velocity = 0)
            } else t.velocity = 0;
            t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
            var g = 1e3 * i.freeModeMomentumRatio, b = t.velocity * g, y = t.translate + b;
            s && (y = -y);
            var w, x, S = !1, C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -C && (y = t.maxTranslate() - C), w = t.maxTranslate(), S = !0, a.allowMomentumBounce = !0) : y = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0); else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > C && (y = t.minTranslate() + C), w = t.minTranslate(), S = !0, a.allowMomentumBounce = !0) : y = t.minTranslate(), i.loop && i.centeredSlides && (x = !0); else if (i.freeModeSticky) {
              for (var E, T = 0; T < l.length; T += 1) if (l[T] > -y) {
                E = T;
                break
              }
              y = Math.abs(l[E] - y) < Math.abs(l[E - 1] - y) || "next" === t.swipeDirection ? l[E] : l[E - 1], y = -y
            }
            if (x && t.once("transitionEnd", (function () {
              t.loopFix()
            })), 0 !== t.velocity) g = s ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity); else if (i.freeModeSticky) return void t.slideToClosest();
            i.freeModeMomentumBounce && S ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd((function () {
              t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(w), r.transitionEnd((function () {
                t && !t.destroyed && t.transitionEnd()
              })))
            }))) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd((function () {
              t && !t.destroyed && t.transitionEnd()
            })))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
          } else if (i.freeModeSticky) return void t.slideToClosest();
          (!i.freeModeMomentum || p >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        } else {
          for (var k = 0, M = t.slidesSizesGrid[0], $ = 0; $ < o.length; $ += i.slidesPerGroup) "undefined" !== typeof o[$ + i.slidesPerGroup] ? c >= o[$] && c < o[$ + i.slidesPerGroup] && (k = $, M = o[$ + i.slidesPerGroup] - o[$]) : c >= o[$] && (k = $, M = o[o.length - 1] - o[o.length - 2]);
          var _ = (c - o[k]) / M;
          if (p > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (_ >= i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (_ > 1 - i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k))
          } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(k + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k)
          }
        }
      }

      function He() {
        var e = this, t = e.params, a = e.el;
        if (!a || 0 !== a.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var i = e.allowSlideNext, n = e.allowSlidePrev, s = e.snapGrid;
          if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
            var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
          } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
          e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }
      }

      function Fe(e) {
        var t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
      }

      function Be() {
        var t = this, a = t.params, i = t.touchEvents, n = t.el, s = t.wrapperEl;
        t.onTouchStart = Oe.bind(t), t.onTouchMove = Ne.bind(t), t.onTouchEnd = je.bind(t), t.onClick = Fe.bind(t);
        var r = "container" === a.touchEventsTarget ? n : s, o = !!a.nested;
        if (R.touch || !R.pointerEvents && !R.prefixedPointerEvents) {
          if (R.touch) {
            var l = !("touchstart" !== i.start || !R.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r.addEventListener(i.start, t.onTouchStart, l), r.addEventListener(i.move, t.onTouchMove, R.passiveListener ? {
              passive: !1,
              capture: o
            } : o), r.addEventListener(i.end, t.onTouchEnd, l)
          }
          (a.simulateTouch && !Ae.ios && !Ae.android || a.simulateTouch && !R.touch && Ae.ios) && (r.addEventListener("mousedown", t.onTouchStart, !1), e.addEventListener("mousemove", t.onTouchMove, o), e.addEventListener("mouseup", t.onTouchEnd, !1))
        } else r.addEventListener(i.start, t.onTouchStart, !1), e.addEventListener(i.move, t.onTouchMove, o), e.addEventListener(i.end, t.onTouchEnd, !1);
        (a.preventClicks || a.preventClicksPropagation) && r.addEventListener("click", t.onClick, !0), t.on(Ae.ios || Ae.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", He, !0)
      }

      function Ve() {
        var t = this, a = t.params, i = t.touchEvents, n = t.el, s = t.wrapperEl,
            r = "container" === a.touchEventsTarget ? n : s, o = !!a.nested;
        if (R.touch || !R.pointerEvents && !R.prefixedPointerEvents) {
          if (R.touch) {
            var l = !("onTouchStart" !== i.start || !R.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r.removeEventListener(i.start, t.onTouchStart, l), r.removeEventListener(i.move, t.onTouchMove, o), r.removeEventListener(i.end, t.onTouchEnd, l)
          }
          (a.simulateTouch && !Ae.ios && !Ae.android || a.simulateTouch && !R.touch && Ae.ios) && (r.removeEventListener("mousedown", t.onTouchStart, !1), e.removeEventListener("mousemove", t.onTouchMove, o), e.removeEventListener("mouseup", t.onTouchEnd, !1))
        } else r.removeEventListener(i.start, t.onTouchStart, !1), e.removeEventListener(i.move, t.onTouchMove, o), e.removeEventListener(i.end, t.onTouchEnd, !1);
        (a.preventClicks || a.preventClicksPropagation) && r.removeEventListener("click", t.onClick, !0), t.off(Ae.ios || Ae.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", He)
      }

      var Ge = {attachEvents: Be, detachEvents: Ve};

      function qe() {
        var e = this, t = e.activeIndex, a = e.initialized, i = e.loopedSlides;
        void 0 === i && (i = 0);
        var n = e.params, s = n.breakpoints;
        if (s && (!s || 0 !== Object.keys(s).length)) {
          var r = e.getBreakpoint(s);
          if (r && e.currentBreakpoint !== r) {
            var o = r in s ? s[r] : void 0;
            o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach((function (e) {
              var t = o[e];
              "undefined" !== typeof t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
            }));
            var l = o || e.originalParams, d = l.direction && l.direction !== n.direction,
                c = n.loop && (l.slidesPerView !== n.slidesPerView || d);
            d && a && e.changeDirection(), q.extend(e.params, l), q.extend(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev
            }), e.currentBreakpoint = r, c && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
          }
        }
      }

      function Re(e) {
        var a = this;
        if (e) {
          var i = !1, n = [];
          Object.keys(e).forEach((function (e) {
            n.push(e)
          })), n.sort((function (e, t) {
            return parseInt(e, 10) - parseInt(t, 10)
          }));
          for (var s = 0; s < n.length; s += 1) {
            var r = n[s];
            a.params.breakpointsInverse ? r <= t.innerWidth && (i = r) : r >= t.innerWidth && !i && (i = r)
          }
          return i || "max"
        }
      }

      var Ye = {setBreakpoint: qe, getBreakpoint: Re};

      function Xe() {
        var e = this, t = e.classNames, a = e.params, i = e.rtl, n = e.$el, s = [];
        s.push("initialized"), s.push(a.direction), a.freeMode && s.push("free-mode"), R.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), i && s.push("rtl"), a.slidesPerColumn > 1 && s.push("multirow"), Ae.android && s.push("android"), Ae.ios && s.push("ios"), (Y.isIE || Y.isEdge) && (R.pointerEvents || R.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach((function (e) {
          t.push(a.containerModifierClass + e)
        })), n.addClass(t.join(" "))
      }

      function We() {
        var e = this, t = e.$el, a = e.classNames;
        t.removeClass(a.join(" "))
      }

      var Ue = {addClasses: Xe, removeClasses: We};

      function Je(e, a, i, n, s, r) {
        var o;

        function l() {
          r && r()
        }

        e.complete && s ? l() : a ? (o = new t.Image, o.onload = l, o.onerror = l, n && (o.sizes = n), i && (o.srcset = i), a && (o.src = a)) : l()
      }

      function Ke() {
        var e = this;

        function t() {
          "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
        }

        e.imagesToLoad = e.$el.find("img");
        for (var a = 0; a < e.imagesToLoad.length; a += 1) {
          var i = e.imagesToLoad[a];
          e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
        }
      }

      var Ze = {loadImage: Je, preloadImages: Ke};

      function Qe() {
        var e = this, t = e.isLocked;
        e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
      }

      var et = {checkOverflow: Qe}, tt = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
          }, at = {
            update: ne,
            translate: de,
            transition: me,
            slide: xe,
            loop: Te,
            grabCursor: $e,
            manipulation: ze,
            events: Ge,
            breakpoints: Ye,
            checkOverflow: et,
            classes: Ue,
            images: Ze
          }, it = {}, nt = function (e) {
            function t() {
              var a, n, r, o = [], l = arguments.length;
              while (l--) o[l] = arguments[l];
              1 === o.length && o[0].constructor && o[0].constructor === Object ? r = o[0] : (a = o, n = a[0], r = a[1]), r || (r = {}), r = q.extend({}, r), n && !r.el && (r.el = n), e.call(this, r), Object.keys(at).forEach((function (e) {
                Object.keys(at[e]).forEach((function (a) {
                  t.prototype[a] || (t.prototype[a] = at[e][a])
                }))
              }));
              var d = this;
              "undefined" === typeof d.modules && (d.modules = {}), Object.keys(d.modules).forEach((function (e) {
                var t = d.modules[e];
                if (t.params) {
                  var a = Object.keys(t.params)[0], i = t.params[a];
                  if ("object" !== s(i) || null === i) return;
                  if (!(a in r && "enabled" in i)) return;
                  !0 === r[a] && (r[a] = {enabled: !0}), "object" !== s(r[a]) || "enabled" in r[a] || (r[a].enabled = !0), r[a] || (r[a] = {enabled: !1})
                }
              }));
              var c = q.extend({}, tt);
              d.useModulesParams(c), d.params = q.extend({}, c, it, r), d.originalParams = q.extend({}, d.params), d.passedParams = q.extend({}, r), d.$ = i;
              var u = i(d.params.el);
              if (n = u[0], n) {
                if (u.length > 1) {
                  var p = [];
                  return u.each((function (e, a) {
                    var i = q.extend({}, r, {el: a});
                    p.push(new t(i))
                  })), p
                }
                n.swiper = d, u.data("swiper", d);
                var m = u.children("." + d.params.wrapperClass);
                return q.extend(d, {
                  $el: u,
                  el: n,
                  $wrapperEl: m,
                  wrapperEl: m[0],
                  classNames: [],
                  slides: i(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: function () {
                    return "horizontal" === d.params.direction
                  },
                  isVertical: function () {
                    return "vertical" === d.params.direction
                  },
                  rtl: "rtl" === n.dir.toLowerCase() || "rtl" === u.css("direction"),
                  rtlTranslate: "horizontal" === d.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === u.css("direction")),
                  wrongRTL: "-webkit-box" === m.css("display"),
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: d.params.allowSlideNext,
                  allowSlidePrev: d.params.allowSlidePrev,
                  touchEvents: function () {
                    var e = ["touchstart", "touchmove", "touchend"], t = ["mousedown", "mousemove", "mouseup"];
                    return R.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : R.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), d.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2]
                    }, d.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2]
                    }, R.touch || !d.params.simulateTouch ? d.touchEventsTouch : d.touchEventsDesktop
                  }(),
                  touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video",
                    lastClickTime: q.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                  },
                  allowClick: !0,
                  allowTouchMove: d.params.allowTouchMove,
                  touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                  imagesToLoad: [],
                  imagesLoaded: 0
                }), d.useModules(), d.params.init && d.init(), d
              }
            }

            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var a = {
              extendedDefaults: {configurable: !0},
              defaults: {configurable: !0},
              Class: {configurable: !0},
              $: {configurable: !0}
            };
            return t.prototype.slidesPerViewDynamic = function () {
              var e = this, t = e.params, a = e.slides, i = e.slidesGrid, n = e.size, s = e.activeIndex, r = 1;
              if (t.centeredSlides) {
                for (var o, l = a[s].swiperSlideSize, d = s + 1; d < a.length; d += 1) a[d] && !o && (l += a[d].swiperSlideSize, r += 1, l > n && (o = !0));
                for (var c = s - 1; c >= 0; c -= 1) a[c] && !o && (l += a[c].swiperSlideSize, r += 1, l > n && (o = !0))
              } else for (var u = s + 1; u < a.length; u += 1) i[u] - i[s] < n && (r += 1);
              return r
            }, t.prototype.update = function () {
              var e = this;
              if (e && !e.destroyed) {
                var t, a = e.snapGrid, i = e.params;
                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (t = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), t || n()), i.watchOverflow && a !== e.snapGrid && e.checkOverflow(), e.emit("update")
              }

              function n() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses()
              }
            }, t.prototype.changeDirection = function (e, t) {
              void 0 === t && (t = !0);
              var a = this, i = a.params.direction;
              return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? a : ("vertical" === i && (a.$el.removeClass(a.params.containerModifierClass + "vertical wp8-vertical").addClass("" + a.params.containerModifierClass + e), (Y.isIE || Y.isEdge) && (R.pointerEvents || R.prefixedPointerEvents) && a.$el.addClass(a.params.containerModifierClass + "wp8-" + e)), "horizontal" === i && (a.$el.removeClass(a.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + a.params.containerModifierClass + e), (Y.isIE || Y.isEdge) && (R.pointerEvents || R.prefixedPointerEvents) && a.$el.addClass(a.params.containerModifierClass + "wp8-" + e)), a.params.direction = e, a.slides.each((function (t, a) {
                "vertical" === e ? a.style.width = "" : a.style.height = ""
              })), a.emit("changeDirection"), t && a.update(), a)
            }, t.prototype.init = function () {
              var e = this;
              e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, t.prototype.destroy = function (e, t) {
              void 0 === e && (e = !0), void 0 === t && (t = !0);
              var a = this, i = a.params, n = a.$el, s = a.$wrapperEl, r = a.slides;
              return "undefined" === typeof a.params || a.destroyed ? null : (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), n.removeAttr("style"), s.removeAttr("style"), r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach((function (e) {
                a.off(e)
              })), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), q.deleteProps(a)), a.destroyed = !0, null)
            }, t.extendDefaults = function (e) {
              q.extend(it, e)
            }, a.extendedDefaults.get = function () {
              return it
            }, a.defaults.get = function () {
              return tt
            }, a.Class.get = function () {
              return e
            }, a.$.get = function () {
              return i
            }, Object.defineProperties(t, a), t
          }(X), st = {name: "device", proto: {device: Ae}, static: {device: Ae}},
          rt = {name: "support", proto: {support: R}, static: {support: R}},
          ot = {name: "browser", proto: {browser: Y}, static: {browser: Y}}, lt = {
            name: "resize", create: function () {
              var e = this;
              q.extend(e, {
                resize: {
                  resizeHandler: function () {
                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                  }, orientationChangeHandler: function () {
                    e && !e.destroyed && e.initialized && e.emit("orientationchange")
                  }
                }
              })
            }, on: {
              init: function () {
                var e = this;
                t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler)
              }, destroy: function () {
                var e = this;
                t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
              }
            }
          }, dt = {
            func: t.MutationObserver || t.WebkitMutationObserver, attach: function (e, a) {
              void 0 === a && (a = {});
              var i = this, n = dt.func, s = new n((function (e) {
                if (1 !== e.length) {
                  var a = function () {
                    i.emit("observerUpdate", e[0])
                  };
                  t.requestAnimationFrame ? t.requestAnimationFrame(a) : t.setTimeout(a, 0)
                } else i.emit("observerUpdate", e[0])
              }));
              s.observe(e, {
                attributes: "undefined" === typeof a.attributes || a.attributes,
                childList: "undefined" === typeof a.childList || a.childList,
                characterData: "undefined" === typeof a.characterData || a.characterData
              }), i.observer.observers.push(s)
            }, init: function () {
              var e = this;
              if (R.observer && e.params.observer) {
                if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                e.observer.attach(e.$el[0], {childList: e.params.observeSlideChildren}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
              }
            }, destroy: function () {
              var e = this;
              e.observer.observers.forEach((function (e) {
                e.disconnect()
              })), e.observer.observers = []
            }
          }, ct = {
            name: "observer",
            params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
            create: function () {
              var e = this;
              q.extend(e, {
                observer: {
                  init: dt.init.bind(e),
                  attach: dt.attach.bind(e),
                  destroy: dt.destroy.bind(e),
                  observers: []
                }
              })
            },
            on: {
              init: function () {
                var e = this;
                e.observer.init()
              }, destroy: function () {
                var e = this;
                e.observer.destroy()
              }
            }
          }, ut = {
            update: function (e) {
              var t = this, a = t.params, i = a.slidesPerView, n = a.slidesPerGroup, s = a.centeredSlides,
                  r = t.params.virtual, o = r.addSlidesBefore, l = r.addSlidesAfter, d = t.virtual, c = d.from, u = d.to,
                  p = d.slides, m = d.slidesGrid, h = d.renderSlide, f = d.offset;
              t.updateActiveIndex();
              var v, g, b, y = t.activeIndex || 0;
              v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", s ? (g = Math.floor(i / 2) + n + o, b = Math.floor(i / 2) + n + l) : (g = i + (n - 1) + o, b = n + l);
              var w = Math.max((y || 0) - b, 0), x = Math.min((y || 0) + g, p.length - 1),
                  S = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

              function C() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
              }

              if (q.extend(t.virtual, {
                from: w,
                to: x,
                offset: S,
                slidesGrid: t.slidesGrid
              }), c === w && u === x && !e) return t.slidesGrid !== m && S !== f && t.slides.css(v, S + "px"), void t.updateProgress();
              if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: S,
                from: w,
                to: x,
                slides: function () {
                  for (var e = [], t = w; t <= x; t += 1) e.push(p[t]);
                  return e
                }()
              }), void C();
              var E = [], T = [];
              if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var k = c; k <= u; k += 1) (k < w || k > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
              for (var M = 0; M < p.length; M += 1) M >= w && M <= x && ("undefined" === typeof u || e ? T.push(M) : (M > u && T.push(M), M < c && E.push(M)));
              T.forEach((function (e) {
                t.$wrapperEl.append(h(p[e], e))
              })), E.sort((function (e, t) {
                return t - e
              })).forEach((function (e) {
                t.$wrapperEl.prepend(h(p[e], e))
              })), t.$wrapperEl.children(".swiper-slide").css(v, S + "px"), C()
            }, renderSlide: function (e, t) {
              var a = this, n = a.params.virtual;
              if (n.cache && a.virtual.cache[t]) return a.virtual.cache[t];
              var s = n.renderSlide ? i(n.renderSlide.call(a, e, t)) : i('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
              return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), n.cache && (a.virtual.cache[t] = s), s
            }, appendSlide: function (e) {
              var t = this;
              if ("object" === s(e) && "length" in e) for (var a = 0; a < e.length; a += 1) e[a] && t.virtual.slides.push(e[a]); else t.virtual.slides.push(e);
              t.virtual.update(!0)
            }, prependSlide: function (e) {
              var t = this, a = t.activeIndex, i = a + 1, n = 1;
              if (Array.isArray(e)) {
                for (var s = 0; s < e.length; s += 1) e[s] && t.virtual.slides.unshift(e[s]);
                i = a + e.length, n = e.length
              } else t.virtual.slides.unshift(e);
              if (t.params.virtual.cache) {
                var r = t.virtual.cache, o = {};
                Object.keys(r).forEach((function (e) {
                  o[parseInt(e, 10) + n] = r[e]
                })), t.virtual.cache = o
              }
              t.virtual.update(!0), t.slideTo(i, 0)
            }, removeSlide: function (e) {
              var t = this;
              if ("undefined" !== typeof e && null !== e) {
                var a = t.activeIndex;
                if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0); else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
                t.virtual.update(!0), t.slideTo(a, 0)
              }
            }, removeAllSlides: function () {
              var e = this;
              e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
            }
          }, pt = {
            name: "virtual",
            params: {
              virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
              }
            },
            create: function () {
              var e = this;
              q.extend(e, {
                virtual: {
                  update: ut.update.bind(e),
                  appendSlide: ut.appendSlide.bind(e),
                  prependSlide: ut.prependSlide.bind(e),
                  removeSlide: ut.removeSlide.bind(e),
                  removeAllSlides: ut.removeAllSlides.bind(e),
                  renderSlide: ut.renderSlide.bind(e),
                  slides: e.params.virtual.slides,
                  cache: {}
                }
              })
            },
            on: {
              beforeInit: function () {
                var e = this;
                if (e.params.virtual.enabled) {
                  e.classNames.push(e.params.containerModifierClass + "virtual");
                  var t = {watchSlidesProgress: !0};
                  q.extend(e.params, t), q.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                }
              }, setTranslate: function () {
                var e = this;
                e.params.virtual.enabled && e.virtual.update()
              }
            }
          }, mt = {
            handle: function (a) {
              var i = this, n = i.rtlTranslate, s = a;
              s.originalEvent && (s = s.originalEvent);
              var r = s.keyCode || s.charCode;
              if (!i.allowSlideNext && (i.isHorizontal() && 39 === r || i.isVertical() && 40 === r)) return !1;
              if (!i.allowSlidePrev && (i.isHorizontal() && 37 === r || i.isVertical() && 38 === r)) return !1;
              if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey) && (!e.activeElement || !e.activeElement.nodeName || "input" !== e.activeElement.nodeName.toLowerCase() && "textarea" !== e.activeElement.nodeName.toLowerCase())) {
                if (i.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                  var o = !1;
                  if (i.$el.parents("." + i.params.slideClass).length > 0 && 0 === i.$el.parents("." + i.params.slideActiveClass).length) return;
                  var l = t.innerWidth, d = t.innerHeight, c = i.$el.offset();
                  n && (c.left -= i.$el[0].scrollLeft);
                  for (var u = [[c.left, c.top], [c.left + i.width, c.top], [c.left, c.top + i.height], [c.left + i.width, c.top + i.height]], p = 0; p < u.length; p += 1) {
                    var m = u[p];
                    m[0] >= 0 && m[0] <= l && m[1] >= 0 && m[1] <= d && (o = !0)
                  }
                  if (!o) return
                }
                i.isHorizontal() ? (37 !== r && 39 !== r || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (39 === r && !n || 37 === r && n) && i.slideNext(), (37 === r && !n || 39 === r && n) && i.slidePrev()) : (38 !== r && 40 !== r || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), 40 === r && i.slideNext(), 38 === r && i.slidePrev()), i.emit("keyPress", r)
              }
            }, enable: function () {
              var t = this;
              t.keyboard.enabled || (i(e).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0)
            }, disable: function () {
              var t = this;
              t.keyboard.enabled && (i(e).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1)
            }
          }, ht = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
              var e = this;
              q.extend(e, {
                keyboard: {
                  enabled: !1,
                  enable: mt.enable.bind(e),
                  disable: mt.disable.bind(e),
                  handle: mt.handle.bind(e)
                }
              })
            }, on: {
              init: function () {
                var e = this;
                e.params.keyboard.enabled && e.keyboard.enable()
              }, destroy: function () {
                var e = this;
                e.keyboard.enabled && e.keyboard.disable()
              }
            }
          };

      function ft() {
        var t = "onwheel", a = t in e;
        if (!a) {
          var i = e.createElement("div");
          i.setAttribute(t, "return;"), a = "function" === typeof i[t]
        }
        return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a
      }

      var vt = {
        lastScrollTime: q.now(), event: function () {
          return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : ft() ? "wheel" : "mousewheel"
        }(), normalize: function (e) {
          var t = 10, a = 40, i = 800, n = 0, s = 0, r = 0, o = 0;
          return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (n = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (n = s, s = 0), r = n * t, o = s * t, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || o) && e.deltaMode && (1 === e.deltaMode ? (r *= a, o *= a) : (r *= i, o *= i)), r && !n && (n = r < 1 ? -1 : 1), o && !s && (s = o < 1 ? -1 : 1), {
            spinX: n,
            spinY: s,
            pixelX: r,
            pixelY: o
          }
        }, handleMouseEnter: function () {
          var e = this;
          e.mouseEntered = !0
        }, handleMouseLeave: function () {
          var e = this;
          e.mouseEntered = !1
        }, handle: function (e) {
          var a = e, i = this, n = i.params.mousewheel;
          if (!i.mouseEntered && !n.releaseOnEdges) return !0;
          a.originalEvent && (a = a.originalEvent);
          var s = 0, r = i.rtlTranslate ? -1 : 1, o = vt.normalize(a);
          if (n.forceToAxis) if (i.isHorizontal()) {
            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
            s = o.pixelX * r
          } else {
            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
            s = o.pixelY
          } else s = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
          if (0 === s) return !0;
          if (n.invert && (s = -s), i.params.freeMode) {
            i.params.loop && i.loopFix();
            var l = i.getTranslate() + s * n.sensitivity, d = i.isBeginning, c = i.isEnd;
            if (l >= i.minTranslate() && (l = i.minTranslate()), l <= i.maxTranslate() && (l = i.maxTranslate()), i.setTransition(0), i.setTranslate(l), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!d && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = q.nextTick((function () {
              i.slideToClosest()
            }), 300)), i.emit("scroll", a), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), l === i.minTranslate() || l === i.maxTranslate()) return !0
          } else {
            if (q.now() - i.mousewheel.lastScrollTime > 60) if (s < 0) if (i.isEnd && !i.params.loop || i.animating) {
              if (n.releaseOnEdges) return !0
            } else i.slideNext(), i.emit("scroll", a); else if (i.isBeginning && !i.params.loop || i.animating) {
              if (n.releaseOnEdges) return !0
            } else i.slidePrev(), i.emit("scroll", a);
            i.mousewheel.lastScrollTime = (new t.Date).getTime()
          }
          return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
        }, enable: function () {
          var e = this;
          if (!vt.event) return !1;
          if (e.mousewheel.enabled) return !1;
          var t = e.$el;
          return "container" !== e.params.mousewheel.eventsTarged && (t = i(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(vt.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
        }, disable: function () {
          var e = this;
          if (!vt.event) return !1;
          if (!e.mousewheel.enabled) return !1;
          var t = e.$el;
          return "container" !== e.params.mousewheel.eventsTarged && (t = i(e.params.mousewheel.eventsTarged)), t.off(vt.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
        }
      }, gt = {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container"
          }
        },
        create: function () {
          var e = this;
          q.extend(e, {
            mousewheel: {
              enabled: !1,
              enable: vt.enable.bind(e),
              disable: vt.disable.bind(e),
              handle: vt.handle.bind(e),
              handleMouseEnter: vt.handleMouseEnter.bind(e),
              handleMouseLeave: vt.handleMouseLeave.bind(e),
              lastScrollTime: q.now()
            }
          })
        },
        on: {
          init: function () {
            var e = this;
            e.params.mousewheel.enabled && e.mousewheel.enable()
          }, destroy: function () {
            var e = this;
            e.mousewheel.enabled && e.mousewheel.disable()
          }
        }
      }, bt = {
        update: function () {
          var e = this, t = e.params.navigation;
          if (!e.params.loop) {
            var a = e.navigation, i = a.$nextEl, n = a.$prevEl;
            n && n.length > 0 && (e.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
          }
        }, onPrevClick: function (e) {
          var t = this;
          e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
        }, onNextClick: function (e) {
          var t = this;
          e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
        }, init: function () {
          var e, t, a = this, n = a.params.navigation;
          (n.nextEl || n.prevEl) && (n.nextEl && (e = i(n.nextEl), a.params.uniqueNavElements && "string" === typeof n.nextEl && e.length > 1 && 1 === a.$el.find(n.nextEl).length && (e = a.$el.find(n.nextEl))), n.prevEl && (t = i(n.prevEl), a.params.uniqueNavElements && "string" === typeof n.prevEl && t.length > 1 && 1 === a.$el.find(n.prevEl).length && (t = a.$el.find(n.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), q.extend(a.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0]
          }))
        }, destroy: function () {
          var e = this, t = e.navigation, a = t.$nextEl, i = t.$prevEl;
          a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
        }
      }, yt = {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        },
        create: function () {
          var e = this;
          q.extend(e, {
            navigation: {
              init: bt.init.bind(e),
              update: bt.update.bind(e),
              destroy: bt.destroy.bind(e),
              onNextClick: bt.onNextClick.bind(e),
              onPrevClick: bt.onPrevClick.bind(e)
            }
          })
        },
        on: {
          init: function () {
            var e = this;
            e.navigation.init(), e.navigation.update()
          }, toEdge: function () {
            var e = this;
            e.navigation.update()
          }, fromEdge: function () {
            var e = this;
            e.navigation.update()
          }, destroy: function () {
            var e = this;
            e.navigation.destroy()
          }, click: function (e) {
            var t, a = this, n = a.navigation, s = n.$nextEl, r = n.$prevEl;
            !a.params.navigation.hideOnClick || i(e.target).is(r) || i(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)), !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a), s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass))
          }
        }
      }, wt = {
        update: function () {
          var e = this, t = e.rtl, a = e.params.pagination;
          if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var n, s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                r = e.pagination.$el,
                o = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), n > s - 1 - 2 * e.loopedSlides && (n -= s - 2 * e.loopedSlides), n > o - 1 && (n -= o), n < 0 && "bullets" !== e.params.paginationType && (n = o + n)) : n = "undefined" !== typeof e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
              var l, d, c, u = e.pagination.bullets;
              if (a.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += n - e.previousIndex, e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = n - e.pagination.dynamicBulletIndex, d = l + (Math.min(u.length, a.dynamicMainBullets) - 1), c = (d + l) / 2), u.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), r.length > 1) u.each((function (e, t) {
                var s = i(t), r = s.index();
                r === n && s.addClass(a.bulletActiveClass), a.dynamicBullets && (r >= l && r <= d && s.addClass(a.bulletActiveClass + "-main"), r === l && s.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), r === d && s.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"))
              })); else {
                var p = u.eq(n);
                if (p.addClass(a.bulletActiveClass), a.dynamicBullets) {
                  for (var m = u.eq(l), h = u.eq(d), f = l; f <= d; f += 1) u.eq(f).addClass(a.bulletActiveClass + "-main");
                  m.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), h.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next")
                }
              }
              if (a.dynamicBullets) {
                var v = Math.min(u.length, a.dynamicMainBullets + 4),
                    g = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
                    b = t ? "right" : "left";
                u.css(e.isHorizontal() ? b : "top", g + "px")
              }
            }
            if ("fraction" === a.type && (r.find("." + a.currentClass).text(a.formatFractionCurrent(n + 1)), r.find("." + a.totalClass).text(a.formatFractionTotal(o))), "progressbar" === a.type) {
              var y;
              y = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
              var w = (n + 1) / o, x = 1, S = 1;
              "horizontal" === y ? x = w : S = w, r.find("." + a.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + S + ")").transition(e.params.speed)
            }
            "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, n + 1, o)), e.emit("paginationRender", e, r[0])) : e.emit("paginationUpdate", e, r[0]), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](a.lockClass)
          }
        }, render: function () {
          var e = this, t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                i = e.pagination.$el, n = "";
            if ("bullets" === t.type) {
              for (var s = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, r = 0; r < s; r += 1) t.renderBullet ? n += t.renderBullet.call(e, r, t.bulletClass) : n += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
              i.html(n), e.pagination.bullets = i.find("." + t.bulletClass)
            }
            "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(n)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
          }
        }, init: function () {
          var e = this, t = e.params.pagination;
          if (t.el) {
            var a = i(t.el);
            0 !== a.length && (e.params.uniqueNavElements && "string" === typeof t.el && a.length > 1 && 1 === e.$el.find(t.el).length && (a = e.$el.find(t.el)), "bullets" === t.type && t.clickable && a.addClass(t.clickableClass), a.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (a.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && a.addClass(t.progressbarOppositeClass), t.clickable && a.on("click", "." + t.bulletClass, (function (t) {
              t.preventDefault();
              var a = i(this).index() * e.params.slidesPerGroup;
              e.params.loop && (a += e.loopedSlides), e.slideTo(a)
            })), q.extend(e.pagination, {$el: a, el: a[0]}))
          }
        }, destroy: function () {
          var e = this, t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var a = e.pagination.$el;
            a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
          }
        }
      }, xt = {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e
            },
            formatFractionTotal: function (e) {
              return e
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create: function () {
          var e = this;
          q.extend(e, {
            pagination: {
              init: wt.init.bind(e),
              render: wt.render.bind(e),
              update: wt.update.bind(e),
              destroy: wt.destroy.bind(e),
              dynamicBulletIndex: 0
            }
          })
        },
        on: {
          init: function () {
            var e = this;
            e.pagination.init(), e.pagination.render(), e.pagination.update()
          }, activeIndexChange: function () {
            var e = this;
            e.params.loop ? e.pagination.update() : "undefined" === typeof e.snapIndex && e.pagination.update()
          }, snapIndexChange: function () {
            var e = this;
            e.params.loop || e.pagination.update()
          }, slidesLengthChange: function () {
            var e = this;
            e.params.loop && (e.pagination.render(), e.pagination.update())
          }, snapGridLengthChange: function () {
            var e = this;
            e.params.loop || (e.pagination.render(), e.pagination.update())
          }, destroy: function () {
            var e = this;
            e.pagination.destroy()
          }, click: function (e) {
            var t = this;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !i(e.target).hasClass(t.params.pagination.bulletClass)) {
              var a = t.pagination.$el.hasClass(t.params.pagination.hiddenClass);
              !0 === a ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
            }
          }
        }
      }, St = {
        setTranslate: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar, a = e.rtlTranslate, i = e.progress, n = t.dragSize, s = t.trackSize, r = t.$dragEl,
                o = t.$el, l = e.params.scrollbar, d = n, c = (s - n) * i;
            a ? (c = -c, c > 0 ? (d = n - c, c = 0) : -c + n > s && (d = s + c)) : c < 0 ? (d = n + c, c = 0) : c + n > s && (d = s - c), e.isHorizontal() ? (R.transforms3d ? r.transform("translate3d(" + c + "px, 0, 0)") : r.transform("translateX(" + c + "px)"), r[0].style.width = d + "px") : (R.transforms3d ? r.transform("translate3d(0px, " + c + "px, 0)") : r.transform("translateY(" + c + "px)"), r[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((function () {
              o[0].style.opacity = 0, o.transition(400)
            }), 1e3))
          }
        }, setTransition: function (e) {
          var t = this;
          t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar, a = t.$dragEl, i = t.$el;
            a[0].style.width = "", a[0].style.height = "";
            var n, s = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = e.size / e.virtualSize,
                o = r * (s / e.size);
            n = "auto" === e.params.scrollbar.dragSize ? s * r : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = n + "px" : a[0].style.height = n + "px", i[0].style.display = r >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), q.extend(t, {
              trackSize: s,
              divider: r,
              moveDivider: o,
              dragSize: n
            }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
          }
        }, setDragPosition: function (e) {
          var t, a, i = this, n = i.scrollbar, s = i.rtlTranslate, r = n.$el, o = n.dragSize, l = n.trackSize;
          t = i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY, a = (t - r.offset()[i.isHorizontal() ? "left" : "top"] - o / 2) / (l - o), a = Math.max(Math.min(a, 1), 0), s && (a = 1 - a);
          var d = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * a;
          i.updateProgress(d), i.setTranslate(d), i.updateActiveIndex(), i.updateSlidesClasses()
        }, onDragStart: function (e) {
          var t = this, a = t.params.scrollbar, i = t.scrollbar, n = t.$wrapperEl, s = i.$el, r = i.$dragEl;
          t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), n.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), s.transition(0), a.hide && s.css("opacity", 1), t.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
          var t = this, a = t.scrollbar, i = t.$wrapperEl, n = a.$el, s = a.$dragEl;
          t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), t.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
          var t = this, a = t.params.scrollbar, i = t.scrollbar, n = i.$el;
          t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = q.nextTick((function () {
            n.css("opacity", 0), n.transition(400)
          }), 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
        }, enableDraggable: function () {
          var t = this;
          if (t.params.scrollbar.el) {
            var a = t.scrollbar, i = t.touchEventsTouch, n = t.touchEventsDesktop, s = t.params, r = a.$el, o = r[0],
                l = !(!R.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                d = !(!R.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
            R.touch ? (o.addEventListener(i.start, t.scrollbar.onDragStart, l), o.addEventListener(i.move, t.scrollbar.onDragMove, l), o.addEventListener(i.end, t.scrollbar.onDragEnd, d)) : (o.addEventListener(n.start, t.scrollbar.onDragStart, l), e.addEventListener(n.move, t.scrollbar.onDragMove, l), e.addEventListener(n.end, t.scrollbar.onDragEnd, d))
          }
        }, disableDraggable: function () {
          var t = this;
          if (t.params.scrollbar.el) {
            var a = t.scrollbar, i = t.touchEventsTouch, n = t.touchEventsDesktop, s = t.params, r = a.$el, o = r[0],
                l = !(!R.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                d = !(!R.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
            R.touch ? (o.removeEventListener(i.start, t.scrollbar.onDragStart, l), o.removeEventListener(i.move, t.scrollbar.onDragMove, l), o.removeEventListener(i.end, t.scrollbar.onDragEnd, d)) : (o.removeEventListener(n.start, t.scrollbar.onDragStart, l), e.removeEventListener(n.move, t.scrollbar.onDragMove, l), e.removeEventListener(n.end, t.scrollbar.onDragEnd, d))
          }
        }, init: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar, a = e.$el, n = e.params.scrollbar, s = i(n.el);
            e.params.uniqueNavElements && "string" === typeof n.el && s.length > 1 && 1 === a.find(n.el).length && (s = a.find(n.el));
            var r = s.find("." + e.params.scrollbar.dragClass);
            0 === r.length && (r = i('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), q.extend(t, {
              $el: s,
              el: s[0],
              $dragEl: r,
              dragEl: r[0]
            }), n.draggable && t.enableDraggable()
          }
        }, destroy: function () {
          var e = this;
          e.scrollbar.disableDraggable()
        }
      }, Ct = {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create: function () {
          var e = this;
          q.extend(e, {
            scrollbar: {
              init: St.init.bind(e),
              destroy: St.destroy.bind(e),
              updateSize: St.updateSize.bind(e),
              setTranslate: St.setTranslate.bind(e),
              setTransition: St.setTransition.bind(e),
              enableDraggable: St.enableDraggable.bind(e),
              disableDraggable: St.disableDraggable.bind(e),
              setDragPosition: St.setDragPosition.bind(e),
              onDragStart: St.onDragStart.bind(e),
              onDragMove: St.onDragMove.bind(e),
              onDragEnd: St.onDragEnd.bind(e),
              isTouched: !1,
              timeout: null,
              dragTimeout: null
            }
          })
        },
        on: {
          init: function () {
            var e = this;
            e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
          }, update: function () {
            var e = this;
            e.scrollbar.updateSize()
          }, resize: function () {
            var e = this;
            e.scrollbar.updateSize()
          }, observerUpdate: function () {
            var e = this;
            e.scrollbar.updateSize()
          }, setTranslate: function () {
            var e = this;
            e.scrollbar.setTranslate()
          }, setTransition: function (e) {
            var t = this;
            t.scrollbar.setTransition(e)
          }, destroy: function () {
            var e = this;
            e.scrollbar.destroy()
          }
        }
      }, Et = {
        setTransform: function (e, t) {
          var a = this, n = a.rtl, s = i(e), r = n ? -1 : 1, o = s.attr("data-swiper-parallax") || "0",
              l = s.attr("data-swiper-parallax-x"), d = s.attr("data-swiper-parallax-y"),
              c = s.attr("data-swiper-parallax-scale"), u = s.attr("data-swiper-parallax-opacity");
          if (l || d ? (l = l || "0", d = d || "0") : a.isHorizontal() ? (l = o, d = "0") : (d = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t * r + "%" : l * t * r + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * t + "%" : d * t + "px", "undefined" !== typeof u && null !== u) {
            var p = u - (u - 1) * (1 - Math.abs(t));
            s[0].style.opacity = p
          }
          if ("undefined" === typeof c || null === c) s.transform("translate3d(" + l + ", " + d + ", 0px)"); else {
            var m = c - (c - 1) * (1 - Math.abs(t));
            s.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + m + ")")
          }
        }, setTranslate: function () {
          var e = this, t = e.$el, a = e.slides, n = e.progress, s = e.snapGrid;
          t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function (t, a) {
            e.parallax.setTransform(a, n)
          })), a.each((function (t, a) {
            var r = a.progress;
            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - n * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), i(a).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function (t, a) {
              e.parallax.setTransform(a, r)
            }))
          }))
        }, setTransition: function (e) {
          void 0 === e && (e = this.params.speed);
          var t = this, a = t.$el;
          a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function (t, a) {
            var n = i(a), s = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (s = 0), n.transition(s)
          }))
        }
      }, Tt = {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
          var e = this;
          q.extend(e, {
            parallax: {
              setTransform: Et.setTransform.bind(e),
              setTranslate: Et.setTranslate.bind(e),
              setTransition: Et.setTransition.bind(e)
            }
          })
        }, on: {
          beforeInit: function () {
            var e = this;
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
          }, init: function () {
            var e = this;
            e.params.parallax.enabled && e.parallax.setTranslate()
          }, setTranslate: function () {
            var e = this;
            e.params.parallax.enabled && e.parallax.setTranslate()
          }, setTransition: function (e) {
            var t = this;
            t.params.parallax.enabled && t.parallax.setTransition(e)
          }
        }
      }, kt = {
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX, a = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX,
              n = e.targetTouches[1].pageY, s = Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - a, 2));
          return s
        }, onGestureStart: function (e) {
          var t = this, a = t.params.zoom, n = t.zoom, s = n.gesture;
          if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !R.gestures) {
            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
            n.fakeGestureTouched = !0, s.scaleStart = kt.getDistanceBetweenTouches(e)
          }
          s.$slideEl && s.$slideEl.length || (s.$slideEl = i(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
        }, onGestureChange: function (e) {
          var t = this, a = t.params.zoom, i = t.zoom, n = i.gesture;
          if (!R.gestures) {
            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
            i.fakeGestureMoved = !0, n.scaleMove = kt.getDistanceBetweenTouches(e)
          }
          n.$imageEl && 0 !== n.$imageEl.length && (R.gestures ? i.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        }, onGestureEnd: function (e) {
          var t = this, a = t.params.zoom, i = t.zoom, n = i.gesture;
          if (!R.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
            if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !Ae.android) return;
            i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
          }
          n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), a.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
        }, onTouchStart: function (e) {
          var t = this, a = t.zoom, i = a.gesture, n = a.image;
          i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (Ae.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
          var t = this, a = t.zoom, i = a.gesture, n = a.image, s = a.velocity;
          if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, n.isTouched && i.$slideEl)) {
            n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = q.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = q.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (n.startX = -n.startX, n.startY = -n.startY));
            var r = n.width * a.scale, o = n.height * a.scale;
            if (!(r < i.slideWidth && o < i.slideHeight)) {
              if (n.minX = Math.min(i.slideWidth / 2 - r / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - o / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !a.isScaling) {
                if (t.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void (n.isTouched = !1);
                if (!t.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void (n.isTouched = !1)
              }
              e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (n.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (n.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = n.touchesCurrent.x, s.prevPositionY = n.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
            }
          }
        }, onTouchEnd: function () {
          var e = this, t = e.zoom, a = t.gesture, i = t.image, n = t.velocity;
          if (a.$imageEl && 0 !== a.$imageEl.length) {
            if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
            i.isTouched = !1, i.isMoved = !1;
            var s = 300, r = 300, o = n.x * s, l = i.currentX + o, d = n.y * r, c = i.currentY + d;
            0 !== n.x && (s = Math.abs((l - i.currentX) / n.x)), 0 !== n.y && (r = Math.abs((c - i.currentY) / n.y));
            var u = Math.max(s, r);
            i.currentX = l, i.currentY = c;
            var p = i.width * t.scale, m = i.height * t.scale;
            i.minX = Math.min(a.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(a.slideHeight / 2 - m / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), a.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
          }
        }, onTransitionEnd: function () {
          var e = this, t = e.zoom, a = t.gesture;
          a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0)
        }, toggle: function (e) {
          var t = this, a = t.zoom;
          a.scale && 1 !== a.scale ? a.out() : a.in(e)
        }, in: function (e) {
          var t, a, n, s, r, o, l, d, c, u, p, m, h, f, v, g, b, y, w = this, x = w.zoom, S = w.params.zoom,
              C = x.gesture, E = x.image;
          (C.$slideEl || (C.$slideEl = w.clickedSlide ? i(w.clickedSlide) : w.slides.eq(w.activeIndex), C.$imageEl = C.$slideEl.find("img, svg, canvas"), C.$imageWrapEl = C.$imageEl.parent("." + S.containerClass)), C.$imageEl && 0 !== C.$imageEl.length) && (C.$slideEl.addClass("" + S.zoomedSlideClass), "undefined" === typeof E.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = E.touchesStart.x, a = E.touchesStart.y), x.scale = C.$imageWrapEl.attr("data-swiper-zoom") || S.maxRatio, x.currentScale = C.$imageWrapEl.attr("data-swiper-zoom") || S.maxRatio, e ? (b = C.$slideEl[0].offsetWidth, y = C.$slideEl[0].offsetHeight, n = C.$slideEl.offset().left, s = C.$slideEl.offset().top, r = n + b / 2 - t, o = s + y / 2 - a, c = C.$imageEl[0].offsetWidth, u = C.$imageEl[0].offsetHeight, p = c * x.scale, m = u * x.scale, h = Math.min(b / 2 - p / 2, 0), f = Math.min(y / 2 - m / 2, 0), v = -h, g = -f, l = r * x.scale, d = o * x.scale, l < h && (l = h), l > v && (l = v), d < f && (d = f), d > g && (d = g)) : (l = 0, d = 0), C.$imageWrapEl.transition(300).transform("translate3d(" + l + "px, " + d + "px,0)"), C.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + x.scale + ")"))
        }, out: function () {
          var e = this, t = e.zoom, a = e.params.zoom, n = t.gesture;
          n.$slideEl || (n.$slideEl = e.clickedSlide ? i(e.clickedSlide) : e.slides.eq(e.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + a.containerClass)), n.$imageEl && 0 !== n.$imageEl.length && (t.scale = 1, t.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + a.zoomedSlideClass), n.$slideEl = void 0)
        }, enable: function () {
          var e = this, t = e.zoom;
          if (!t.enabled) {
            t.enabled = !0;
            var a = !("touchstart" !== e.touchEvents.start || !R.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            R.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
          }
        }, disable: function () {
          var e = this, t = e.zoom;
          if (t.enabled) {
            e.zoom.enabled = !1;
            var a = !("touchstart" !== e.touchEvents.start || !R.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            R.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
          }
        }
      }, Mt = {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create: function () {
          var e = this, t = {
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
          };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function (a) {
            t[a] = kt[a].bind(e)
          })), q.extend(e, {zoom: t});
          var a = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function () {
              return a
            }, set: function (t) {
              if (a !== t) {
                var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                    n = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                e.emit("zoomChange", t, i, n)
              }
              a = t
            }
          })
        },
        on: {
          init: function () {
            var e = this;
            e.params.zoom.enabled && e.zoom.enable()
          }, destroy: function () {
            var e = this;
            e.zoom.disable()
          }, touchStart: function (e) {
            var t = this;
            t.zoom.enabled && t.zoom.onTouchStart(e)
          }, touchEnd: function (e) {
            var t = this;
            t.zoom.enabled && t.zoom.onTouchEnd(e)
          }, doubleTap: function (e) {
            var t = this;
            t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
          }, transitionEnd: function () {
            var e = this;
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
          }
        }
      }, $t = {
        loadInSlide: function (e, t) {
          void 0 === t && (t = !0);
          var a = this, n = a.params.lazy;
          if ("undefined" !== typeof e && 0 !== a.slides.length) {
            var s = a.virtual && a.params.virtual.enabled,
                r = s ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : a.slides.eq(e),
                o = r.find("." + n.elementClass + ":not(." + n.loadedClass + "):not(." + n.loadingClass + ")");
            !r.hasClass(n.elementClass) || r.hasClass(n.loadedClass) || r.hasClass(n.loadingClass) || (o = o.add(r[0])), 0 !== o.length && o.each((function (e, s) {
              var o = i(s);
              o.addClass(n.loadingClass);
              var l = o.attr("data-background"), d = o.attr("data-src"), c = o.attr("data-srcset"),
                  u = o.attr("data-sizes");
              a.loadImage(o[0], d || l, c, u, !1, (function () {
                if ("undefined" !== typeof a && null !== a && a && (!a || a.params) && !a.destroyed) {
                  if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), u && (o.attr("sizes", u), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(n.loadedClass).removeClass(n.loadingClass), r.find("." + n.preloaderClass).remove(), a.params.loop && t) {
                    var e = r.attr("data-swiper-slide-index");
                    if (r.hasClass(a.params.slideDuplicateClass)) {
                      var i = a.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + a.params.slideDuplicateClass + ")");
                      a.lazy.loadInSlide(i.index(), !1)
                    } else {
                      var s = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                      a.lazy.loadInSlide(s.index(), !1)
                    }
                  }
                  a.emit("lazyImageReady", r[0], o[0])
                }
              })), a.emit("lazyImageLoad", r[0], o[0])
            }))
          }
        }, load: function () {
          var e = this, t = e.$wrapperEl, a = e.params, n = e.slides, s = e.activeIndex,
              r = e.virtual && a.virtual.enabled, o = a.lazy, l = a.slidesPerView;

          function d(e) {
            if (r) {
              if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
            } else if (n[e]) return !0;
            return !1
          }

          function c(e) {
            return r ? i(e).attr("data-swiper-slide-index") : i(e).index()
          }

          if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each((function (t, a) {
            var n = r ? i(a).attr("data-swiper-slide-index") : i(a).index();
            e.lazy.loadInSlide(n)
          })); else if (l > 1) for (var u = s; u < s + l; u += 1) d(u) && e.lazy.loadInSlide(u); else e.lazy.loadInSlide(s);
          if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
            for (var p = o.loadPrevNextAmount, m = l, h = Math.min(s + m + Math.max(p, m), n.length), f = Math.max(s - Math.max(m, p), 0), v = s + l; v < h; v += 1) d(v) && e.lazy.loadInSlide(v);
            for (var g = f; g < s; g += 1) d(g) && e.lazy.loadInSlide(g)
          } else {
            var b = t.children("." + a.slideNextClass);
            b.length > 0 && e.lazy.loadInSlide(c(b));
            var y = t.children("." + a.slidePrevClass);
            y.length > 0 && e.lazy.loadInSlide(c(y))
          }
        }
      }, _t = {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        },
        create: function () {
          var e = this;
          q.extend(e, {lazy: {initialImageLoaded: !1, load: $t.load.bind(e), loadInSlide: $t.loadInSlide.bind(e)}})
        },
        on: {
          beforeInit: function () {
            var e = this;
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
          }, init: function () {
            var e = this;
            e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
          }, scroll: function () {
            var e = this;
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
          }, resize: function () {
            var e = this;
            e.params.lazy.enabled && e.lazy.load()
          }, scrollbarDragMove: function () {
            var e = this;
            e.params.lazy.enabled && e.lazy.load()
          }, transitionStart: function () {
            var e = this;
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
          }, transitionEnd: function () {
            var e = this;
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
          }
        }
      }, Dt = {
        LinearSpline: function (e, t) {
          var a, i, n = function () {
            var e, t, a;
            return function (i, n) {
              t = -1, e = i.length;
              while (e - t > 1) a = e + t >> 1, i[a] <= n ? t = a : e = a;
              return e
            }
          }();
          return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
            return e ? (i = n(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
          }, this
        }, getInterpolateFunction: function (e) {
          var t = this;
          t.controller.spline || (t.controller.spline = t.params.loop ? new Dt.LinearSpline(t.slidesGrid, e.slidesGrid) : new Dt.LinearSpline(t.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
          var a, i, n = this, s = n.controller.control;

          function r(e) {
            var t = n.rtlTranslate ? -n.translate : n.translate;
            "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(e), i = -n.controller.spline.interpolate(-t)), i && "container" !== n.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (n.maxTranslate() - n.minTranslate()), i = (t - n.minTranslate()) * a + e.minTranslate()), n.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, n), e.updateActiveIndex(), e.updateSlidesClasses()
          }

          if (Array.isArray(s)) for (var o = 0; o < s.length; o += 1) s[o] !== t && s[o] instanceof nt && r(s[o]); else s instanceof nt && t !== s && r(s)
        }, setTransition: function (e, t) {
          var a, i = this, n = i.controller.control;

          function s(t) {
            t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && q.nextTick((function () {
              t.updateAutoHeight()
            })), t.$wrapperEl.transitionEnd((function () {
              n && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd())
            })))
          }

          if (Array.isArray(n)) for (a = 0; a < n.length; a += 1) n[a] !== t && n[a] instanceof nt && s(n[a]); else n instanceof nt && t !== n && s(n)
        }
      }, Lt = {
        name: "controller",
        params: {controller: {control: void 0, inverse: !1, by: "slide"}},
        create: function () {
          var e = this;
          q.extend(e, {
            controller: {
              control: e.params.controller.control,
              getInterpolateFunction: Dt.getInterpolateFunction.bind(e),
              setTranslate: Dt.setTranslate.bind(e),
              setTransition: Dt.setTransition.bind(e)
            }
          })
        },
        on: {
          update: function () {
            var e = this;
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
          }, resize: function () {
            var e = this;
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
          }, observerUpdate: function () {
            var e = this;
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
          }, setTranslate: function (e, t) {
            var a = this;
            a.controller.control && a.controller.setTranslate(e, t)
          }, setTransition: function (e, t) {
            var a = this;
            a.controller.control && a.controller.setTransition(e, t)
          }
        }
      }, It = {
        makeElFocusable: function (e) {
          return e.attr("tabIndex", "0"), e
        }, addElRole: function (e, t) {
          return e.attr("role", t), e
        }, addElLabel: function (e, t) {
          return e.attr("aria-label", t), e
        }, disableEl: function (e) {
          return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
          return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
          var t = this, a = t.params.a11y;
          if (13 === e.keyCode) {
            var n = i(e.target);
            t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && n.is("." + t.params.pagination.bulletClass) && n[0].click()
          }
        }, notify: function (e) {
          var t = this, a = t.a11y.liveRegion;
          0 !== a.length && (a.html(""), a.html(e))
        }, updateNavigation: function () {
          var e = this;
          if (!e.params.loop) {
            var t = e.navigation, a = t.$nextEl, i = t.$prevEl;
            i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
          }
        }, updatePagination: function () {
          var e = this, t = e.params.a11y;
          e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (a, n) {
            var s = i(n);
            e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/{{index}}/, s.index() + 1))
          }))
        }, init: function () {
          var e = this;
          e.$el.append(e.a11y.liveRegion);
          var t, a, i = e.params.a11y;
          e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        }, destroy: function () {
          var e, t, a = this;
          a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
        }
      }, Pt = {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}"
          }
        },
        create: function () {
          var e = this;
          q.extend(e, {a11y: {liveRegion: i('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(It).forEach((function (t) {
            e.a11y[t] = It[t].bind(e)
          }))
        },
        on: {
          init: function () {
            var e = this;
            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
          }, toEdge: function () {
            var e = this;
            e.params.a11y.enabled && e.a11y.updateNavigation()
          }, fromEdge: function () {
            var e = this;
            e.params.a11y.enabled && e.a11y.updateNavigation()
          }, paginationUpdate: function () {
            var e = this;
            e.params.a11y.enabled && e.a11y.updatePagination()
          }, destroy: function () {
            var e = this;
            e.params.a11y.enabled && e.a11y.destroy()
          }
        }
      }, zt = {
        init: function () {
          var e = this;
          if (e.params.history) {
            if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
            var a = e.history;
            a.initialized = !0, a.paths = zt.getPathValues(), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
          }
        }, destroy: function () {
          var e = this;
          e.params.history.replaceState || t.removeEventListener("popstate", e.history.setHistoryPopState)
        }, setHistoryPopState: function () {
          var e = this;
          e.history.paths = zt.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
        }, getPathValues: function () {
          var e = t.location.pathname.slice(1).split("/").filter((function (e) {
            return "" !== e
          })), a = e.length, i = e[a - 2], n = e[a - 1];
          return {key: i, value: n}
        }, setHistory: function (e, a) {
          var i = this;
          if (i.history.initialized && i.params.history.enabled) {
            var n = i.slides.eq(a), s = zt.slugify(n.attr("data-history"));
            t.location.pathname.includes(e) || (s = e + "/" + s);
            var r = t.history.state;
            r && r.value === s || (i.params.history.replaceState ? t.history.replaceState({value: s}, null, s) : t.history.pushState({value: s}, null, s))
          }
        }, slugify: function (e) {
          return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, a) {
          var i = this;
          if (t) for (var n = 0, s = i.slides.length; n < s; n += 1) {
            var r = i.slides.eq(n), o = zt.slugify(r.attr("data-history"));
            if (o === t && !r.hasClass(i.params.slideDuplicateClass)) {
              var l = r.index();
              i.slideTo(l, e, a)
            }
          } else i.slideTo(0, e, a)
        }
      }, At = {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
          var e = this;
          q.extend(e, {
            history: {
              init: zt.init.bind(e),
              setHistory: zt.setHistory.bind(e),
              setHistoryPopState: zt.setHistoryPopState.bind(e),
              scrollToSlide: zt.scrollToSlide.bind(e),
              destroy: zt.destroy.bind(e)
            }
          })
        }, on: {
          init: function () {
            var e = this;
            e.params.history.enabled && e.history.init()
          }, destroy: function () {
            var e = this;
            e.params.history.enabled && e.history.destroy()
          }, transitionEnd: function () {
            var e = this;
            e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
          }
        }
      }, Ot = {
        onHashCange: function () {
          var t = this, a = e.location.hash.replace("#", ""), i = t.slides.eq(t.activeIndex).attr("data-hash");
          if (a !== i) {
            var n = t.$wrapperEl.children("." + t.params.slideClass + '[data-hash="' + a + '"]').index();
            if ("undefined" === typeof n) return;
            t.slideTo(n)
          }
        }, setHash: function () {
          var a = this;
          if (a.hashNavigation.initialized && a.params.hashNavigation.enabled) if (a.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + a.slides.eq(a.activeIndex).attr("data-hash") || !1); else {
            var i = a.slides.eq(a.activeIndex), n = i.attr("data-hash") || i.attr("data-history");
            e.location.hash = n || ""
          }
        }, init: function () {
          var a = this;
          if (!(!a.params.hashNavigation.enabled || a.params.history && a.params.history.enabled)) {
            a.hashNavigation.initialized = !0;
            var n = e.location.hash.replace("#", "");
            if (n) for (var s = 0, r = 0, o = a.slides.length; r < o; r += 1) {
              var l = a.slides.eq(r), d = l.attr("data-hash") || l.attr("data-history");
              if (d === n && !l.hasClass(a.params.slideDuplicateClass)) {
                var c = l.index();
                a.slideTo(c, s, a.params.runCallbacksOnInit, !0)
              }
            }
            a.params.hashNavigation.watchState && i(t).on("hashchange", a.hashNavigation.onHashCange)
          }
        }, destroy: function () {
          var e = this;
          e.params.hashNavigation.watchState && i(t).off("hashchange", e.hashNavigation.onHashCange)
        }
      }, Nt = {
        name: "hash-navigation",
        params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
        create: function () {
          var e = this;
          q.extend(e, {
            hashNavigation: {
              initialized: !1,
              init: Ot.init.bind(e),
              destroy: Ot.destroy.bind(e),
              setHash: Ot.setHash.bind(e),
              onHashCange: Ot.onHashCange.bind(e)
            }
          })
        },
        on: {
          init: function () {
            var e = this;
            e.params.hashNavigation.enabled && e.hashNavigation.init()
          }, destroy: function () {
            var e = this;
            e.params.hashNavigation.enabled && e.hashNavigation.destroy()
          }, transitionEnd: function () {
            var e = this;
            e.hashNavigation.initialized && e.hashNavigation.setHash()
          }
        }
      }, jt = {
        run: function () {
          var e = this, t = e.slides.eq(e.activeIndex), a = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = q.nextTick((function () {
            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
          }), a)
        }, start: function () {
          var e = this;
          return "undefined" === typeof e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
        }, stop: function () {
          var e = this;
          return !!e.autoplay.running && ("undefined" !== typeof e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
        }, pause: function (e) {
          var t = this;
          t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
      }, Ht = {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1
          }
        },
        create: function () {
          var e = this;
          q.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: jt.run.bind(e),
              start: jt.start.bind(e),
              stop: jt.stop.bind(e),
              pause: jt.pause.bind(e),
              onTransitionEnd: function (t) {
                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
              }
            }
          })
        },
        on: {
          init: function () {
            var e = this;
            e.params.autoplay.enabled && e.autoplay.start()
          }, beforeTransitionStart: function (e, t) {
            var a = this;
            a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop())
          }, sliderFirstMove: function () {
            var e = this;
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
          }, destroy: function () {
            var e = this;
            e.autoplay.running && e.autoplay.stop()
          }
        }
      }, Ft = {
        setTranslate: function () {
          for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
            var i = e.slides.eq(a), n = i[0].swiperSlideOffset, s = -n;
            e.params.virtualTranslate || (s -= e.translate);
            var r = 0;
            e.isHorizontal() || (r = s, s = 0);
            var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
            i.css({opacity: o}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
          }
        }, setTransition: function (e) {
          var t = this, a = t.slides, i = t.$wrapperEl;
          if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
            var n = !1;
            a.transitionEnd((function () {
              if (!n && t && !t.destroyed) {
                n = !0, t.animating = !1;
                for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a])
              }
            }))
          }
        }
      }, Bt = {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
          var e = this;
          q.extend(e, {fadeEffect: {setTranslate: Ft.setTranslate.bind(e), setTransition: Ft.setTransition.bind(e)}})
        }, on: {
          beforeInit: function () {
            var e = this;
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              q.extend(e.params, t), q.extend(e.originalParams, t)
            }
          }, setTranslate: function () {
            var e = this;
            "fade" === e.params.effect && e.fadeEffect.setTranslate()
          }, setTransition: function (e) {
            var t = this;
            "fade" === t.params.effect && t.fadeEffect.setTransition(e)
          }
        }
      }, Vt = {
        setTranslate: function () {
          var e, t = this, a = t.$el, n = t.$wrapperEl, s = t.slides, r = t.width, o = t.height, l = t.rtlTranslate,
              d = t.size, c = t.params.cubeEffect, u = t.isHorizontal(), p = t.virtual && t.params.virtual.enabled,
              m = 0;
          c.shadow && (u ? (e = n.find(".swiper-cube-shadow"), 0 === e.length && (e = i('<div class="swiper-cube-shadow"></div>'), n.append(e)), e.css({height: r + "px"})) : (e = a.find(".swiper-cube-shadow"), 0 === e.length && (e = i('<div class="swiper-cube-shadow"></div>'), a.append(e))));
          for (var h = 0; h < s.length; h += 1) {
            var f = s.eq(h), v = h;
            p && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
            var g = 90 * v, b = Math.floor(g / 360);
            l && (g = -g, b = Math.floor(-g / 360));
            var y = Math.max(Math.min(f[0].progress, 1), -1), w = 0, x = 0, S = 0;
            v % 4 === 0 ? (w = 4 * -b * d, S = 0) : (v - 1) % 4 === 0 ? (w = 0, S = 4 * -b * d) : (v - 2) % 4 === 0 ? (w = d + 4 * b * d, S = d) : (v - 3) % 4 === 0 && (w = -d, S = 3 * d + 4 * d * b), l && (w = -w), u || (x = w, w = 0);
            var C = "rotateX(" + (u ? 0 : -g) + "deg) rotateY(" + (u ? g : 0) + "deg) translate3d(" + w + "px, " + x + "px, " + S + "px)";
            if (y <= 1 && y > -1 && (m = 90 * v + 90 * y, l && (m = 90 * -v - 90 * y)), f.transform(C), c.slideShadows) {
              var E = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                  T = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
              0 === E.length && (E = i('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(E)), 0 === T.length && (T = i('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(T)), E.length && (E[0].style.opacity = Math.max(-y, 0)), T.length && (T[0].style.opacity = Math.max(y, 0))
            }
          }
          if (n.css({
            "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
            "transform-origin": "50% 50% -" + d / 2 + "px"
          }), c.shadow) if (u) e.transform("translate3d(0px, " + (r / 2 + c.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")"); else {
            var k = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                M = 1.5 - (Math.sin(2 * k * Math.PI / 360) / 2 + Math.cos(2 * k * Math.PI / 360) / 2),
                $ = c.shadowScale, _ = c.shadowScale / M, D = c.shadowOffset;
            e.transform("scale3d(" + $ + ", 1, " + _ + ") translate3d(0px, " + (o / 2 + D) + "px, " + -o / 2 / _ + "px) rotateX(-90deg)")
          }
          var L = Y.isSafari || Y.isUiWebView ? -d / 2 : 0;
          n.transform("translate3d(0px,0," + L + "px) rotateX(" + (t.isHorizontal() ? 0 : m) + "deg) rotateY(" + (t.isHorizontal() ? -m : 0) + "deg)")
        }, setTransition: function (e) {
          var t = this, a = t.$el, i = t.slides;
          i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e)
        }
      }, Gt = {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create: function () {
          var e = this;
          q.extend(e, {cubeEffect: {setTranslate: Vt.setTranslate.bind(e), setTransition: Vt.setTransition.bind(e)}})
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ("cube" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
              };
              q.extend(e.params, t), q.extend(e.originalParams, t)
            }
          }, setTranslate: function () {
            var e = this;
            "cube" === e.params.effect && e.cubeEffect.setTranslate()
          }, setTransition: function (e) {
            var t = this;
            "cube" === t.params.effect && t.cubeEffect.setTransition(e)
          }
        }
      }, qt = {
        setTranslate: function () {
          for (var e = this, t = e.slides, a = e.rtlTranslate, n = 0; n < t.length; n += 1) {
            var s = t.eq(n), r = s[0].progress;
            e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
            var o = s[0].swiperSlideOffset, l = -180 * r, d = l, c = 0, u = -o, p = 0;
            if (e.isHorizontal() ? a && (d = -d) : (p = u, u = 0, c = -d, d = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
              var m = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                  h = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
              0 === m.length && (m = i('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(m)), 0 === h.length && (h = i('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), m.length && (m[0].style.opacity = Math.max(-r, 0)), h.length && (h[0].style.opacity = Math.max(r, 0))
            }
            s.transform("translate3d(" + u + "px, " + p + "px, 0px) rotateX(" + c + "deg) rotateY(" + d + "deg)")
          }
        }, setTransition: function (e) {
          var t = this, a = t.slides, i = t.activeIndex, n = t.$wrapperEl;
          if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
            var s = !1;
            a.eq(i).transitionEnd((function () {
              if (!s && t && !t.destroyed) {
                s = !0, t.animating = !1;
                for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) n.trigger(e[a])
              }
            }))
          }
        }
      }, Rt = {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
          var e = this;
          q.extend(e, {flipEffect: {setTranslate: qt.setTranslate.bind(e), setTransition: qt.setTransition.bind(e)}})
        }, on: {
          beforeInit: function () {
            var e = this;
            if ("flip" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              q.extend(e.params, t), q.extend(e.originalParams, t)
            }
          }, setTranslate: function () {
            var e = this;
            "flip" === e.params.effect && e.flipEffect.setTranslate()
          }, setTransition: function (e) {
            var t = this;
            "flip" === t.params.effect && t.flipEffect.setTransition(e)
          }
        }
      }, Yt = {
        setTranslate: function () {
          for (var e = this, t = e.width, a = e.height, n = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, o = e.params.coverflowEffect, l = e.isHorizontal(), d = e.translate, c = l ? t / 2 - d : a / 2 - d, u = l ? o.rotate : -o.rotate, p = o.depth, m = 0, h = n.length; m < h; m += 1) {
            var f = n.eq(m), v = r[m], g = f[0].swiperSlideOffset, b = (c - g - v / 2) / v * o.modifier,
                y = l ? u * b : 0, w = l ? 0 : u * b, x = -p * Math.abs(b), S = l ? 0 : o.stretch * b,
                C = l ? o.stretch * b : 0;
            Math.abs(C) < .001 && (C = 0), Math.abs(S) < .001 && (S = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0);
            var E = "translate3d(" + C + "px," + S + "px," + x + "px)  rotateX(" + w + "deg) rotateY(" + y + "deg)";
            if (f.transform(E), f[0].style.zIndex = 1 - Math.abs(Math.round(b)), o.slideShadows) {
              var T = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                  k = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
              0 === T.length && (T = i('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(T)), 0 === k.length && (k = i('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(k)), T.length && (T[0].style.opacity = b > 0 ? b : 0), k.length && (k[0].style.opacity = -b > 0 ? -b : 0)
            }
          }
          if (R.pointerEvents || R.prefixedPointerEvents) {
            var M = s[0].style;
            M.perspectiveOrigin = c + "px 50%"
          }
        }, setTransition: function (e) {
          var t = this;
          t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
      }, Xt = {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
        create: function () {
          var e = this;
          q.extend(e, {
            coverflowEffect: {
              setTranslate: Yt.setTranslate.bind(e),
              setTransition: Yt.setTransition.bind(e)
            }
          })
        },
        on: {
          beforeInit: function () {
            var e = this;
            "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
          }, setTranslate: function () {
            var e = this;
            "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
          }, setTransition: function (e) {
            var t = this;
            "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
          }
        }
      }, Wt = {
        init: function () {
          var e = this, t = e.params, a = t.thumbs, i = e.constructor;
          a.swiper instanceof i ? (e.thumbs.swiper = a.swiper, q.extend(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), q.extend(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          })) : q.isObject(a.swiper) && (e.thumbs.swiper = new i(q.extend({}, a.swiper, {
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        }, onThumbClick: function () {
          var e = this, t = e.thumbs.swiper;
          if (t) {
            var a = t.clickedIndex, n = t.clickedSlide;
            if ((!n || !i(n).hasClass(e.params.thumbs.slideThumbActiveClass)) && "undefined" !== typeof a && null !== a) {
              var s;
              if (s = t.params.loop ? parseInt(i(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
                var r = e.activeIndex;
                e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
                var o = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                    l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                s = "undefined" === typeof o ? l : "undefined" === typeof l ? o : l - r < r - o ? l : o
              }
              e.slideTo(s)
            }
          }
        }, update: function (e) {
          var t = this, a = t.thumbs.swiper;
          if (a) {
            var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
            if (t.realIndex !== a.realIndex) {
              var n, s = a.activeIndex;
              if (a.params.loop) {
                a.slides.eq(s).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, s = a.activeIndex);
                var r = a.slides.eq(s).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                    o = a.slides.eq(s).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                n = "undefined" === typeof r ? o : "undefined" === typeof o ? r : o - s === s - r ? s : o - s < s - r ? o : r
              } else n = t.realIndex;
              a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > s ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > s && (n = n - i + 1), a.slideTo(n, e ? 0 : void 0))
            }
            var l = 1, d = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) for (var c = 0; c < l; c += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(d); else for (var u = 0; u < l; u += 1) a.slides.eq(t.realIndex + u).addClass(d)
          }
        }
      }, Ut = {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs"
          }
        },
        create: function () {
          var e = this;
          q.extend(e, {
            thumbs: {
              swiper: null,
              init: Wt.init.bind(e),
              update: Wt.update.bind(e),
              onThumbClick: Wt.onThumbClick.bind(e)
            }
          })
        },
        on: {
          beforeInit: function () {
            var e = this, t = e.params, a = t.thumbs;
            a && a.swiper && (e.thumbs.init(), e.thumbs.update(!0))
          }, slideChange: function () {
            var e = this;
            e.thumbs.swiper && e.thumbs.update()
          }, update: function () {
            var e = this;
            e.thumbs.swiper && e.thumbs.update()
          }, resize: function () {
            var e = this;
            e.thumbs.swiper && e.thumbs.update()
          }, observerUpdate: function () {
            var e = this;
            e.thumbs.swiper && e.thumbs.update()
          }, setTransition: function (e) {
            var t = this, a = t.thumbs.swiper;
            a && a.setTransition(e)
          }, beforeDestroy: function () {
            var e = this, t = e.thumbs.swiper;
            t && e.thumbs.swiperCreated && t && t.destroy()
          }
        }
      }, Jt = [st, rt, ot, lt, ct, pt, ht, gt, yt, xt, Ct, Tt, Mt, _t, Lt, Pt, At, Nt, Ht, Bt, Gt, Rt, Xt, Ut];
      return "undefined" === typeof nt.use && (nt.use = nt.Class.use, nt.installModule = nt.Class.installModule), nt.use(Jt), nt
    }))
  }, d4b0: function (e, t, a) {
  }, d4c3: function (e, t, a) {
    "use strict";
    var i = a("8c21"), n = a.n(i);
    n.a
  }, e3d1: function (e, t, a) {
    (function (i) {
      var n;
      (function () {
        var s, r = this;
        if (!s && r.crypto && crypto.getRandomValues) {
          var o = new Uint8Array(16);
          s = function () {
            return crypto.getRandomValues(o), o
          }
        }
        if (!s) {
          var l = new Array(16);
          s = function () {
            for (var e, t = 0; t < 16; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), l[t] = e >>> ((3 & t) << 3) & 255;
            return l
          }
        }
        for (var d = "function" === typeof i ? i : Array, c = [], u = {}, p = 0; p < 256; p++) c[p] = (p + 256).toString(16).substr(1), u[c[p]] = p;

        function m(e, t, a) {
          var i = t && a || 0, n = 0;
          t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, (function (e) {
            n < 16 && (t[i + n++] = u[e])
          }));
          while (n < 16) t[i + n++] = 0;
          return t
        }

        function h(e, t) {
          var a = t || 0, i = c;
          return i[e[a++]] + i[e[a++]] + i[e[a++]] + i[e[a++]] + "-" + i[e[a++]] + i[e[a++]] + "-" + i[e[a++]] + i[e[a++]] + "-" + i[e[a++]] + i[e[a++]] + "-" + i[e[a++]] + i[e[a++]] + i[e[a++]] + i[e[a++]] + i[e[a++]] + i[e[a++]]
        }

        var f = s(), v = [1 | f[0], f[1], f[2], f[3], f[4], f[5]], g = 16383 & (f[6] << 8 | f[7]), b = 0, y = 0;

        function w(e, t, a) {
          var i = t && a || 0, n = t || [];
          e = e || {};
          var s = null != e.clockseq ? e.clockseq : g, r = null != e.msecs ? e.msecs : (new Date).getTime(),
              o = null != e.nsecs ? e.nsecs : y + 1, l = r - b + (o - y) / 1e4;
          if (l < 0 && null == e.clockseq && (s = s + 1 & 16383), (l < 0 || r > b) && null == e.nsecs && (o = 0), o >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          b = r, y = o, g = s, r += 122192928e5;
          var d = (1e4 * (268435455 & r) + o) % 4294967296;
          n[i++] = d >>> 24 & 255, n[i++] = d >>> 16 & 255, n[i++] = d >>> 8 & 255, n[i++] = 255 & d;
          var c = r / 4294967296 * 1e4 & 268435455;
          n[i++] = c >>> 8 & 255, n[i++] = 255 & c, n[i++] = c >>> 24 & 15 | 16, n[i++] = c >>> 16 & 255, n[i++] = s >>> 8 | 128, n[i++] = 255 & s;
          for (var u = e.node || v, p = 0; p < 6; p++) n[i + p] = u[p];
          return t || h(n)
        }

        function x(e, t, a) {
          var i = t && a || 0;
          "string" === typeof e && (t = "binary" === e ? new d(16) : null, e = null), e = e || {};
          var n = e.random || (e.rng || s)();
          if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) for (var r = 0; r < 16; r++) t[i + r] = n[r];
          return t || h(n)
        }

        var S = x;
        if (S.v1 = w, S.v4 = x, S.parse = m, S.unparse = h, S.BufferClass = d, r.define && a("3c35")) n = function () {
          return S
        }.call(t, a, t, e), void 0 === n || (e.exports = n); else if (e.exports) e.exports = S; else {
          var C = r.uuid;
          S.noConflict = function () {
            return r.uuid = C, S
          }, r.uuid = S
        }
      }).call(window)
    }).call(this, a("b639").Buffer)
  }, e851: function (e, t, a) {
  }, eb3b: function (e, t, a) {
    "use strict";
    var i = a("2b96"), n = a.n(i);
    n.a
  }, eef6: function (e, t, a) {
    "use strict";

    function i(e) {
      return i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, i(e)
    }

    function n(e) {
      var t = document.documentElement, a = {top: 0, left: 0};
      return i(e.getBoundingClientRect) !== void 0 + "" && (a = e.getBoundingClientRect()), {
        top: a.top + (window.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: a.left + (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }
    }

    t["a"] = n
  }, efd9: function (e, t, a) {
    "use strict";
    var i = a("2ec8"), n = a("986e"), s = a("a417");

    function r(e) {
      return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, r(e)
    }

    var o = 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp");
    t["a"] = {
      goOrderLogin: function (e) {
        location.href = s["a"].host.orderSite + "/site/login?redirectUrl=" + encodeURI(e || location.href)
      }, getActionUrl: function (e) {
        if (!e || !e.type) return "";
        var t = "", a = e.path;
        switch (e.type) {
          case"product":
          case"plugin":
            t = "".concat(s["a"].host.itemSite, "/product/").concat(a, ".html");
            break;
          case"url":
          case"activity":
            t = 0 == a.indexOf("#") ? "#J_nav_".concat(a.substring(1)) : a;
            break;
          case"pc_activity":
            t = "".concat(s["a"].host.wwwSite, "/a/h/").concat(a, ".html");
            break;
          case"pc_channel":
            t = "".concat(s["a"].host.wwwSite, "/p/").concat(a, ".html");
            break;
          case"homepage":
            t = "".concat(s["a"].host.wwwSite, "/index.html");
            break;
          case"seckill":
            t = "".concat(s["a"].host.wwwSite, "/seckill/");
            break;
          case"keyword":
            t = "".concat(s["a"].host.searchSite, "/search_").concat(encodeURIComponent(a));
            break
        }
        return t
      }, formatImageHttp: function (e) {
        return e ? e.replace(/^http(s?):/i, "") : e
      }, alertTip: function (e) {
        if (e) {
          var t = {
            msg: "", isHideFoot: !1, okText: "确定", customClass: "", width: "480px", onShow: function () {
            }, onHide: function () {
            }
          };
          "string" == typeof e ? t.msg = e : "object" == r(e) && (t = Object.assign({}, t, e));
          var a = n["a"].$dialog({
            type: e.isHideFoot ? "plain" : "alert",
            isHideHeader: !0,
            width: t.width,
            dialogClass: "mi-dialog-alert " + t.customClass,
            content: '<div class="alert-msg">'.concat(t.msg, "</div>"),
            okText: t.okText,
            ok: function () {
            },
            opened: function () {
              t.onShow && t.onShow()
            },
            closed: function () {
              t.onHide && t.onHide()
            }
          });
          return a
        }
      }, confirmTip: function (e) {
        var t = {
          title: "",
          msg: "",
          width: "480px",
          customClass: "",
          okText: "确定",
          cancelText: "取消",
          hideModal: !0,
          onOk: function () {
          },
          onCancel: function () {
          }
        };
        t = Object.assign({}, t, e);
        var a = n["a"].$dialog({
          type: "confirm",
          isHideHeader: !0,
          width: t.width,
          dialogClass: "mi-dialog-alert " + t.customClass,
          content: '<div class="confirm-msg"><h3>'.concat(t.title, "</h3><div>").concat(t.msg, "</div></div>"),
          okText: t.okText,
          cancelText: t.cancelText,
          ok: function () {
            t.hideModal && a.hide(), t.onOk && t.onOk()
          },
          cancel: function () {
            t.onCancel && t.onCancel()
          }
        });
        return a
      }, checkLoginStatus: function () {
        return !(!Object(i["a"])("cUserId") && !Object(i["a"])("userId"))
      }, setProxy: function (e) {
        var t, a = document.createElement("iframe");
        a.name = "Mi" + (e.name || "_iframe"), a.style.cssText = "width:0px;height:0px;border:0px;overflow:hidden;position:absolute;top:-1000px", a.onload = a.onerror = function () {
          a.onerror = a.onload = null, window.clearTimeout(t), e.callback && e.callback(), a.parentNode.removeChild(a)
        }, t = setTimeout((function () {
          e.callback && e.callback()
        }), 5e3), a.src = e.url, document.body.appendChild(a)
      }, colorRgb: function (e, t) {
        var a = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/, i = e.toLowerCase();
        if (i && a.test(i)) {
          if (4 === i.length) {
            for (var n = "#", s = 1; s < 4; s += 1) n += i.slice(s, s + 1).concat(i.slice(s, s + 1));
            i = n
          }
          var r = [];
          for (s = 1; s < 7; s += 2) r.push(parseInt("0x" + i.slice(s, s + 2)));
          return "rgba(" + r.join(",") + ", " + t + ")"
        }
        return i
      }, formatImageSize: function (e, t, a) {
        if (e && t && a) {
          var i = window.devicePixelRatio || 0, n = /mi\-img\.com/.test(e), s = /mifile\.cn/.test(e),
              r = /cdn\.cnbj1\.fds\.api\.mi\-img\.com/.test(e);
          if (i && i <= 1.3) {
            var l = e.split("?")[0], d = "", c = Math.round(t * i), u = Math.round(a * i);
            if (n) d = "".concat(l, "?thumb=1&w=").concat(c, "&h=").concat(u); else if (s) {
              var p = l.substr(l.lastIndexOf(".") + 1), m = l.substr(0, l.lastIndexOf("."));
              d = "".concat(m, "!").concat(c, "x").concat(u, ".").concat(p)
            } else d = e;
            return o && r && (d += "&f=webp&q=90"), d
          }
          return e
        }
      }
    }
  }, 
  
  
  f644: function (e, t, a) {
    "use strict";
    a.r(t);
    a("341d");
    var i = a("91bf"), n = a("8854"), s = (a("6056"), a("a417")), r = a("2166"), o = a("2ec8"), l = a("986e"),
        d = function (e, t) {
          var a = {
            Dom: {}, objs: {}, timeoutHideCart: null, timeoutShowCart: null, domEvtFuns: {
              showMiniCartList: function () {
                a.timeoutHideCart && clearTimeout(a.timeoutHideCart);
                var e = a.Dom.$miniCartTrigger.classList.contains("topbar-cart-active");
                e || (a.Dom.$miniCartTrigger.classList.add("topbar-cart-active"), a.Dom.$miniCartMenu.style.height = a.Dom.$miniCartMenu.scrollHeight + "px", a.timeoutShowCart = setTimeout((function () {
                  a.getCartGoods()
                }), 300))
              }, hideMiniCartList: function () {
                a.timeoutShowCart && clearTimeout(a.timeoutShowCart), a.Dom.$miniCartMenu.style.height = a.Dom.$miniCartMenu.scrollHeight + "px", a.timeoutHideCart = setTimeout((function () {
                  a.Dom.$miniCartMenu.style.height = 0, setTimeout((function () {
                    a.Dom.$miniCartTrigger.classList.remove("topbar-cart-active"), a.Dom.$miniCartList.classList.add("hide"), a.Dom.$miniCartListTotal.classList.add("hide"), a.Dom.$miniCartMenu.querySelector(".msg-error").textContent = "", a.Dom.$miniCartMenu.querySelector(".msg-error").classList.add("hide"), a.Dom.$miniCartMenu.querySelector(".msg-empty").classList.add("hide"), a.Dom.$miniCartMenu.querySelector(".loading").classList.remove("hide")
                  }), 300)
                }), 200)
              }, checkDeleteGoods: function (t) {
                var i = t.target.parentNode;
                if (i.classList.contains("J_delItem")) {
                  var n = i.getAttribute("data-gid"), s = i.getAttribute("data-isbigtap");
                  n && ("true" !== s ? a.deleteGoods(n) : e.confirmTip({
                    title: "您正在删除开放购买活动商品!",
                    msg: "删除后您失去本次开放购买资格，无法下单购买此商品。<br>确认删除此商品吗？",
                    onOk: function () {
                      a.deleteGoods(n)
                    }
                  }))
                }
              }
            }, updateMiniCartNum: function () {
              Object(o["a"])("xm_user_cart_num"), Object(o["a"])("userId");
              var e = Object(o["a"])("xm_user_www_num");
              Number(e) > 0 ? (a.Dom.$cartNum.textContent = "（" + e + "）", a.Dom.$miniCartTrigger.classList.add("topbar-cart-filled"), a.Dom.$miniCartTrigger.querySelector(".iconfont-cart-full").classList.remove("hide"), a.Dom.$miniCartTrigger.querySelector(".iconfont-cart").classList.add("hide")) : (a.Dom.$cartNum.textContent = "（0）", a.Dom.$miniCartTrigger.classList.remove("topbar-cart-filled"), a.Dom.$miniCartTrigger.querySelector(".iconfont-cart-full").classList.add("hide"), a.Dom.$miniCartTrigger.querySelector(".iconfont-cart").classList.remove("hide")), l["a"].$emit("updateToolBarCartNum")
            }, getCartGoods: function () {
              r["a"].getMiniCartList({}, {param: "jsonpcallback"}).then((function (e) {
                if (a.Dom.$miniCartMenu.querySelector(".loading").classList.add("hide"), a.Dom.$miniCartListTotal.classList.add("hide"), a.Dom.$miniCartList.classList.add("hide"), 200 === e.code) {
                  if (e.data.totalItem > 0) {
                    var t = "", i = "", n = "", r = "", l = "", d = 81, c = s["a"].host.staticSite || "//static.mi.com";
                    e.data.totalItem > 5 ? (a.Dom.$miniCartList.style = "overflow-x:hidden; overflow-y:scroll;", a.Dom.$miniCartList.style.height = 5 * d + d / 2 + "px") : a.Dom.$miniCartList.style.height = "auto", e.data.items.forEach((function (e, a) {
                      i = e.imageUrl ? '<img alt="" src="' + e.imageUrl.replace(/^http(s?):/i, "") + '?width=60&height=60">' : '<img alt="" src="//i1.mifile.cn/f/i/2014/cn/placeholder-80.png">', e.isCos ? (n = " is-cos", r = "暂时缺货") : (n = "", r = e.salePrice + "元 × " + e.num), 0 === a && (n += " first"), l = 0 !== e.noLink ? "javascript:void(0);" : s["a"].host.itemSite + "/product/" + e.productId + ".html", e.typeName && (e.productName = '<span class="tag">【' + e.typeName + "】</span>" + e.productName), t += '<li><div class="cart-item clearfix' + n + '"><a class="thumb" href="' + l + '">' + i + '</a><a class="name" href="' + l + '">' + e.productName + '</a><span class="price">' + r + '</span><a class="btn-del J_delItem" href="javascript: void(0);" data-gid="' + e.itemId + '" data-isBigtap="' + e.isBigtap + '"><em class="iconfont-close"></em></a></div></li>'
                    })), a.Dom.$miniCartListTotal && (a.Dom.$miniCartListTotal.innerHTML = '<span class="total">共 <em>' + e.data.total + '</em> 件商品<span class="price"><em>' + e.data.totalPrice + '</em>元</span></span><a href="' + c + '/cart/" class="btn btn-primary btn-cart">去购物车结算</a>', a.Dom.$miniCartListTotal.classList.remove("hide")), a.Dom.$miniCartMenu.style.height = "auto", a.Dom.$miniCartList.innerHTML = t, a.Dom.$miniCartList.classList.remove("hide")
                  } else a.Dom.$miniCartMenu.querySelector(".msg-empty").classList.remove("hide");
                  Object(o["a"])("xm_user_www_num", e.data.total, {domain: "mi.com"}), a.updateMiniCartNum()
                } else a.Dom.$miniCartMenu.querySelector(".msg-error").textContent = e.msg, a.Dom.$miniCartMenu.querySelector(".msg-error").classList.remove("hide")
              })), a.updateMiniCartNum()
            }, deleteGoods: function (t) {
              r["a"].delete({gid: t}, {param: "jsonpcallback"}).then((function (t) {
                200 === t.code ? a.getCartGoods() : e.alertTip(t.msg)
              }))
            }
          }, n = function () {
          }, d = function () {
            a.Dom.$cartNum = document.querySelector(".J_cartNum"), a.Dom.$miniCartTrigger = document.querySelector("#J_miniCartTrigger"), a.Dom.$miniCartMenu = document.querySelector("#J_miniCartMenu"), a.Dom.$miniCartList = a.Dom.$miniCartMenu.querySelector("#J_miniCartList"), a.Dom.$miniCartListTotal = a.Dom.$miniCartMenu.querySelector("#J_miniCartListTotal")
          }, c = function () {
          }, u = function () {
            i["a"].addEvt(a.Dom.$miniCartTrigger, "mouseenter", a.domEvtFuns.showMiniCartList), i["a"].addEvt(a.Dom.$miniCartTrigger, "mouseleave", a.domEvtFuns.hideMiniCartList), i["a"].addEvt(a.Dom.$miniCartList, "click", a.domEvtFuns.checkDeleteGoods), a.updateMiniCartNum()
          }, p = function () {
            if (a) {
              for (var e in a.objs) {
                var t = a.objs[e];
                t && t.destroy && t.destroy()
              }
              a = null
            }
          }, m = function () {
            n(), d(), c(), u()
          };
          return m(), {destroy: p}
        }, c = (a("4de9"), a("eef6")), u = a("bc47");

    function p(e) {
      var t, a, 
      i, n = null, 
      s = [], r = null,
       o = null, l = 3,
        d = 300, 
        p = function () {
      };
      if (a = {
        menuElm: null,
        rowSelector: "li.category-item",
        submenuSelector: "*",
        submenuDirection: "right",
        tolerance: 75,
        enter: p,
        exit: p,
        activate: p,
        deactivate: p,
        exitMenu: p
      }, 
      i = Object.assign({}, a, e),
     t = i.menuElm, !t) throw"no menu element";

      function m(e) {
        s.push({x: e.pageX, y: e.pageY}), s.length > l && s.shift()
      }

      function h() {
        o && clearTimeout(o), i.exitMenu(this) && (n && i.deactivate(n), n = null)
      }

      function f() {
        o && clearTimeout(o), i.enter(this), b(this)
      }

      function v() {
        i.exit(this)
      }

      function g(e) {
        e !== n && (n && i.deactivate(n), i.activate(e), n = e)
      }

      function b(e) {
        var t = y();
        t ? o = setTimeout((function () {
          b(e)
        }), t) : g(e)
      }

      function y() {
        if (!n || !n.matches(i.submenuSelector)) return 0;
        var e = Object(c["a"])(t), a = {width: t.offsetWidth, height: t.offsetHeight},
            o = {x: e.left, y: e.top - i.tolerance}, l = {x: e.left + a.width, y: o.y},
            u = {x: e.left, y: e.top + a.height + i.tolerance}, p = {x: e.left + a.width, y: u.y}, m = s[s.length - 1],
            h = s[0];
        if (!m) return 0;
        if (h || (h = m), h.x < e.left || h.x > p.x || h.y < e.top || h.y > p.y) return 0;
        if (r && m.x === r.x && m.y === r.y) return 0;

        function f(e, t) {
          return (t.y - e.y) / (t.x - e.x)
        }

        var v = l, g = p;
        "left" === i.submenuDirection ? (v = u, g = o) : "below" === i.submenuDirection ? (v = p, g = u) : "above" === i.submenuDirection && (v = o, g = l);
        var b = f(m, v), y = f(m, g), w = f(h, v), x = f(h, g);
        return b < w && y > x ? (r = m, d) : (r = null, 0)
      }

      var w = t.querySelectorAll(i.rowSelector);
      Object(u["a"])(t, "mouseleave", h), w && w.length && w.forEach((function (e) {
        Object(u["a"])(e, "mouseenter", f), Object(u["a"])(e, "mouseleave", v), Object(u["a"])(e, "click", (function (e) {
          g(e.target.parentNode)
        }))
      })), Object(u["a"])(document, "mousemove", m)
    }

    var m = p, 
    h = function (e, t) {
      var a = {
        Dom: {},
        objs: {},
        timeoutNav: null,
        timeoutNavShow: null,
        timeoutMiniCart: null,
        domEvtFuns: {
          menuEvent: {
            mouseenter: function () {
              a.Dom.$navCategory.classList.add("nav-category-active"), a.Dom.$homeMenu.parentNode.style.display = "block"
            }, mouseleave: function () {
              a.Dom.$navCategory.classList.remove("nav-category-active"), a.Dom.$homeMenu.parentNode.style.display = "none"
            }
          }
        }
      }, 
      n = function () {
      },
      
      s = function () {
        a.Dom.$homeMenu = document.querySelector("#J_categoryList"), a.Dom.$homeMenu && (a.Dom.$navCategory = document.querySelector("#J_navCategory"), a.Dom.$homeMenuItems = a.Dom.$homeMenu.querySelectorAll("li.category-item"))
      }, 
      
      r = function () {
        a.Dom.$homeMenuItems && a.Dom.$homeMenuItems.forEach((function (e) {
          var t, a = e.querySelector(".children"), i = a && e.querySelector(".children-list") || null,
              n = i && i.querySelectorAll("li") || [];
          a && (a.classList.add("children-col-" + Math.ceil(n.length / 6)), n.length > 6 && (t = document.createDocumentFragment(), n.forEach((function (e, a) {
            if (a % 6 === 0) {
              var i = document.createElement("ul");
              i.className = "children-list children-list-col children-list-col-" + Math.ceil((a + 1) / 6), t.appendChild(i)
            }
            t.querySelector(".children-list-col-" + Math.ceil((a + 1) / 6)).appendChild(e)
          })), a.innerHTML = "", a.appendChild(t)))
        })),
        
        m({
          menuElm: a.Dom.$homeMenu, activate: function (t) {
            if (t) {
              t.classList.add("category-item-active");
              var a = t.querySelectorAll("img");
              a.forEach((function (t) {
                if (t.getAttribute("data-src")) {
                  var a = t.getAttribute("data-src").replace(/^http(s?):/i, ""), i = e.formatImageSize(a, 40, 40);
                  t.setAttribute("src", i), t.removeAttribute("data-src")
                }
              }))
            }
          }, deactivate: function (e) {
            e.classList.remove("category-item-active")
          }, exitMenu: function () {
            return !0
          }
        })
      },
      
      o = function () {
        "undefined" !== typeof IsCategoryToggled && "toggled" === IsCategoryToggled ? (a.Dom.$homeMenu.parentNode.style.display = "block", a.Dom.$homeMenu.classList.add("site-category-list-custom")) : (i["a"].addEvt(a.Dom.$navCategory, "mouseenter", a.domEvtFuns.menuEvent.mouseenter), i["a"].addEvt(a.Dom.$navCategory, "mouseleave", a.domEvtFuns.menuEvent.mouseleave))
      }, 
      
      l = function () {
        if (a) {
          for (var e in a.objs) {
            var t = a.objs[e];
            t && t.destroy && t.destroy()
          }
          a = null
        }
      },
      
      d = function () {
        n(), s(), r(), o()
      };


      return d(), {destroy: l}
    },
     f = (a("3c4d"),function (e, t) {
      var a = {
        Dom: {},
        objs: {},
        timeoutNav: null,
        timeoutNavShow: null,
        domEvtFuns: {
          slideUp: function (e, t) {
            e.classList.remove("slide-down"), e.classList.add("slide-up"), i["a"].addEvt(e, "transitionend", (function () {
              e.classList.contains("slide-up") && (e.style.display = "none", "function" == typeof t && t())
            }))
          },
          slideDown: function (e, t) {
            e.style.display = "block", setTimeout((function () {
              e.classList.remove("slide-up"), e.classList.add("slide-down")
            }), 50)
          },
          navMenuEvent: {
            mouseenter: function () {
              a.timeoutNav && (clearTimeout(a.timeoutNav), a.timeoutNav = null)
            }, 
            mouseleave: function () {
              a.timeoutNav = setTimeout((function () {
                a.Dom.$navMainList.getAttribute("data-toggled") || a.domEvtFuns.slideUp(a.Dom.$navMenu)
              }), 200)
            }
          },
          avMenuItemEvent: {
            mouseenter: function (t) {
              var i = t.target;
              if (i.classList.contains("nav-item")) if (a.timeoutNav && (clearTimeout(a.timeoutNav), a.timeoutNav = null), a.Dom.$navMainList.setAttribute("data-toggled", "true"), i.classList.add("nav-item-active"), i.querySelectorAll(".children-list").length) {
                i.querySelector(".children-list").querySelectorAll("img").forEach((function (t) {
                  if (t.getAttribute("data-src")) {
                    var a = t.getAttribute("data-src").replace(/^http(s?):/i, ""), i = e.formatImageSize(a, 160, 110);
                    t.setAttribute("src", i), t.removeAttribute("data-src")
                  }
                }));
                var n = "", s = i.querySelector(".children-list");
                n = s.cloneNode(!0), a.Dom.$navMenuContainer.innerHTML = "", a.Dom.$navMenuContainer.appendChild(n), a.Dom.$navMainList.getAttribute("data-toggled") && (a.timeoutNavShow = setTimeout((function () {
                  a.domEvtFuns.slideDown(a.Dom.$navMenu), a.Dom.$navMenu.classList.add("header-nav-menu-active")
                }), 200))
              } else a.domEvtFuns.slideUp(a.Dom.$navMenu, (function () {
                a.Dom.$navMenu.classList.remove("header-nav-menu-active")
              }))
            }, 
            mouseleave: function (e) {
              var t = e.target;
              t.classList.contains("nav-item") && (a.timeoutNavShow && (clearTimeout(a.timeoutNavShow), a.timeoutNavShow = null), a.Dom.$navMainList.removeAttribute("data-toggled"), t.classList.remove("nav-item-active"), a.timeoutNav = setTimeout((function () {
                a.Dom.$navMainList.getAttribute("data-toggled") || a.domEvtFuns.slideUp(a.Dom.$navMenu)
              }), 200))
            }
          }
        }
      },
       n = function () {
      }, 
      s = function () {
        a.Dom.$navMainList = document.querySelector(".J_navMainList"), a.Dom.$navMainListItem = a.Dom.$navMainList.querySelectorAll("li.nav-item"), a.Dom.$navMenu = document.querySelector("#J_navMenu"), a.Dom.$navMenuContainer = a.Dom.$navMenu.querySelector(".container")
      },
       r = function () {
      },
       o = function () {
        i["a"].addEvt(a.Dom.$navMenu, "mouseenter", a.domEvtFuns.navMenuEvent.mouseenter), i["a"].addEvt(a.Dom.$navMenu, "mouseleave", a.domEvtFuns.navMenuEvent.mouseleave), a.Dom.$navMainListItem.forEach((function (e) {
          i["a"].addEvt(e, "mouseenter", a.domEvtFuns.navMenuItemEvent.mouseenter), i["a"].addEvt(e, "mouseleave", a.domEvtFuns.navMenuItemEvent.mouseleave)
        }))
      },
       l = function () {
        if (a) {
          for (var e in a.objs) {
            var t = a.objs[e];
            t && t.destroy && t.destroy()
          }
          a = null
        }
      }, 
      d = function () {
        n(), s(), r(), o()
      };
      return d(), {destroy: l}
    }),
    
    
    v = (a("8241"), a("fe6a")), g = a("314b"), b = function (e, t) {
      var a = {
        Dom: {}, objs: {}, timeoutSearch: null, timeoutSearchTip: null, domEvtFuns: {
          fadeOut: function (e) {
            e.classList.remove("fade-in"), e.classList.add("fade-out"), i["a"].addEvt(e, "transitionend", (function () {
              e.classList.contains("fade-out") && (e.style.display = "none")
            }))
          }, fadeIn: function (e) {
            e.style.display = "block", setTimeout((function () {
              e.classList.remove("fade-out"), e.classList.add("fade-in")
            }), 10)
          }, focusMove: function (e) {
            var t = a.Dom.$keywordList.querySelectorAll("li"), i = -1, n = t.length - 1;
            if (t.forEach((function (e, t) {
              e.classList.contains("active") && (i = t)
            })), 38 === e) {
              if (i -= 1, i < 0) return i = 0, !1
            } else if (40 === e && (i += 1, i > n)) return i = n, !1;
            i < 0 || (t.forEach((function (e, t) {
              t === i ? e.classList.add("active") : e.classList.remove("active")
            })), a.Dom.$searchInput.value = t[i].getAttribute("data-key"))
          }, searchFormSubmit: function (e) {
            e.preventDefault();
            var t = a.Dom.$searchInput.value.trim();
            return t && "" !== t && (t = Object(g["a"])(t), window.location.href = s["a"].host.searchSite + "/search_" + encodeURIComponent(t)), !1
          }, searchInputEvent: {
            focus: function () {
              a.timeoutSearch && clearTimeout(a.timeoutSearch);
              var e = a.Dom.$searchInput.value.trim();
              if (a.domEvtFuns.fadeOut(a.Dom.$searchHotWords), a.Dom.$searchForm.classList.add("search-form-focus"), !e) {
                var t = a.getSearchDefaultConfig();
                t.length && a.formatKeywordList(t)
              }
            }, blur: function () {
              var e = a.Dom.$searchInput.value.trim();
              e || a.domEvtFuns.fadeIn(a.Dom.$searchHotWords), a.timeoutSearch = setTimeout((function () {
                a.Dom.$searchForm.classList.remove("search-form-focus"), a.Dom.$keywordList.classList.add("hide")
              }), 200)
            }, keyup: function (e) {
              var t = a.Dom.$searchInput.value.trim();
              if (a.timeoutSearchTip && clearTimeout(a.timeoutSearchTip), !t) {
                var i = a.getSearchDefaultConfig();
                i.length && a.formatKeywordList(i)
              }
              13 != e.which && (40 !== e.which && 38 !== e.which && t ? a.timeoutSearchTip = setTimeout((function () {
                a.getSearchTip(t)
              }), 200) : a.domEvtFuns.focusMove(e.which))
            }
          }
        }, getSearchDefaultConfig: function () {
          var e = a.Dom.$searchInput.getAttribute("data-search-config").replace(/'/g, '"'),
              t = e ? JSON.parse(e).defaultWords : [];
          return t || []
        }, getSearchTip: function (e) {
          e && v["a"].getSearchTip({query: e, page_index: 1}, {
            param: "jsonpcallback",
            name: "xmsearch"
          }).then((function (e) {
            if (200 === e.code) if (e.data && e.data.list && e.data.list.length > 0) {
              var t = [];
              e.data.list.forEach((function (e) {
                t.push({word: e.title})
              })), a.formatKeywordList(t)
            } else a.Dom.$keywordList.classList.add("hide"), a.Dom.$keywordList.querySelector(".result-list").innerHTML = ""
          }))
        }, formatKeywordList: function (e) {
          var t = "", i = "", n = a.Dom.$searchInput.value.trim();
          e.forEach((function (e) {
            i = e.word.replace(n, '<span class="keyword">' + n + "</span> "), t += '<li data-key="' + e.word + '"><a href="' + s["a"].host.searchSite + "/search_" + encodeURIComponent(e.word) + '">' + i + "</a></li>"
          })), a.Dom.$keywordList.classList.remove("hide"), a.Dom.$keywordList.querySelector(".result-list").innerHTML = t
        }
      }, n = function () {
      }, r = function () {
        a.Dom.$searchForm = document.querySelector("#J_searchForm"), a.Dom.$keywordList = document.querySelector("#J_keywordList"), a.Dom.$searchInput = a.Dom.$searchForm.querySelector("#search"), a.Dom.$searchHotWords = a.Dom.$searchForm.querySelector(".search-hot-words")
      }, o = function () {
      }, l = function () {
        i["a"].addEvt(a.Dom.$searchForm, "submit", a.domEvtFuns.searchFormSubmit), i["a"].addEvt(a.Dom.$searchInput, "focus", a.domEvtFuns.searchInputEvent.focus), i["a"].addEvt(a.Dom.$searchInput, "blur", a.domEvtFuns.searchInputEvent.blur), i["a"].addEvt(a.Dom.$searchInput, "keyup", a.domEvtFuns.searchInputEvent.keyup)
      }, d = function () {
        if (a) {
          for (var e in a.objs) {
            var t = a.objs[e];
            t && t.destroy && t.destroy()
          }
          a = null
        }
      }, c = function () {
        n(), r(), o(), l()
      };
      return c(), {destroy: d}
    };
    t["default"] = function (e, t) {
      var a = {
        Dom: {},
        objs: {},
        timeoutNav: null,
        timeoutNavShow: null,
        timeoutMiniCart: null,
        domEvtFuns: {
          globalSiteDialog: function () {
            var t = document.querySelector("#J_globalSiteLinks").innerHTML,
                a = '<div><h3>Welcome to Mi.com</h3><p class="tips">Please select location or language</p><div class="links clearfix">' + t + "</div></div>";
            e.$dialog({
              title: "Select location or language",
              width: "840px",
              dialogClass: "site-select-regions",
              contentData: "contentData",
              content: a
            })
          }, downloadApp: {
            mouseenter: function () {
              a.Dom.$downLoadApp.classList.add("active")
            }, mouseleave: function () {
              a.Dom.$downLoadApp.classList.remove("active")
            }
          }
        }
      }, s = function () {
        if (!t) throw"args el is needed."
      }, r = function () {
        a.Dom.$globalRegion = document.querySelectorAll(".J_siteGlobalRegion"), a.Dom.$downLoadApp = document.querySelector("#J_siteDownloadApp")
      }, o = function () {
        a.objs.setLoginInfo = Object(n["a"])(), a.objs.miniCart = d(e), a.objs.category = h(e), a.objs.nav = f(e), a.objs.search = b()
      }, l = function () {
        a.Dom.$globalRegion.forEach((function (e) {
          i["a"].addEvt(e, "click", a.domEvtFuns.globalSiteDialog)
        })), i["a"].addEvt(a.Dom.$downLoadApp, "mouseenter", a.domEvtFuns.downloadApp.mouseenter), i["a"].addEvt(a.Dom.$downLoadApp, "mouseleave", a.domEvtFuns.downloadApp.mouseleave)
      }, c = function () {
        if (a) {
          for (var e in a.objs) {
            var t = a.objs[e];
            t && t.destroy && t.destroy()
          }
          a = null
        }
      }, u = function () {
        s(), r(), o(), l()
      };
      return u(), {destroy: c}
    }
  }, 
  fe6a: function (e, t, a) {
    "use strict";
    var i = a("7f19"), n = a("a417");
    t["a"] = {
      getSearchTip: function (e, t) {
        return Object(i["a"])(n["a"].host.orderApi + "/search/query", e, t)
      }, getMessage: function (e, t) {
        return Object(i["a"])(n["a"].host.serviceApi + "/msg/pick", e, t)
      }, loginInit: function (e, t) {
        return Object(i["a"])("//userid.xiaomi.com/userId", e, t)
      }, getAgreementInfo: function (e, t) {
        var a = n["a"].host.serviceApi, s = ["login", "register"];
        return e && e.action && s.includes(e.action) ? a += "/agreement/actioninfo" : a += "/agreement/info", Object(i["a"])(a, e, t)
      }, getPageContent: function (e, t) {
        return Object(i["a"])(n["a"].host.orderSite + "/api/getPageContent.php", e, t)
      }, sureAgreement: function (e, t) {
        return Object(i["a"])(n["a"].host.serviceApi + "/agreement/sign", e, t)
      }, getUserName: function (e, t) {
        return Object(i["a"])(n["a"].host.accountSite + "/pass/userInfoJsonP", e, t)
      }
    }
  }
});