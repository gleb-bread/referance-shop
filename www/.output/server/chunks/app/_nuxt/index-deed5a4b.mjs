import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { j as VProgressCircular, i as useRuntimeConfig, _ as _export_sfc, V as VBtn } from '../server.mjs';
import { V as VAlert, S as StructHelper, a as VVirtualScroll, b as VCard, c as VCardTitle, d as VCardText, e as VCardActions } from './structHelper-59729a41.mjs';
import { u as useParserProductsStore, V as VImg } from './index-d67365aa.mjs';
import { V as VList, a as VListItem } from './VList-9a3cdfe4.mjs';
import { V as VRow, a as VCol } from './VRow-d0c4c1c8.mjs';
import { u as useMenuStore } from './index-4e174f41.mjs';
import { u as useHead } from './index-0ac4f71f.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'crypto';
import './VAvatar-56df7969.mjs';

const convertMoneyType = function(value) {
  value = value && value != "null" && value != "undefined" ? value + "\u20BD" : "";
  value = value.replace(/ /g, "");
  return value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};
const convertMoneyTypeWithoutRuble = function(value) {
  value = value && value != "null" && value != "undefined" ? value : "";
  value = value.replace(/ /g, "");
  return value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};
const ShopHelper = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  convertMoneyType,
  convertMoneyTypeWithoutRuble
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    productItem: {
      type: Object,
      required: true
    }
  },
  emits: {},
  computed: {},
  data() {
    return {
      ShopHelper
    };
  },
  methods: {},
  components: {}
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VCard, mergeProps({
    class: "pa-0 h-100 d-flex flex-column",
    color: "#FFF"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, {
          class: { "pa-0": (_a = _ctx.productItem.images) == null ? void 0 : _a["img1"] }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            var _a2, _b2, _c, _d;
            if (_push3) {
              if (!((_a2 = _ctx.productItem.images) == null ? void 0 : _a2["img1"])) {
                _push3(`<!--[-->${ssrInterpolate(_ctx.productItem.title)}<!--]-->`);
              } else {
                _push3(ssrRenderComponent(VImg, {
                  height: 100,
                  width: "auto",
                  "aspect-ratio": "28/1",
                  cover: "",
                  src: (_b2 = _ctx.productItem.images) == null ? void 0 : _b2["img1"]
                }, null, _parent3, _scopeId2));
              }
            } else {
              return [
                !((_c = _ctx.productItem.images) == null ? void 0 : _c["img1"]) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(_ctx.productItem.title), 1)
                ], 64)) : (openBlock(), createBlock(VImg, {
                  key: 1,
                  height: 100,
                  width: "auto",
                  "aspect-ratio": "28/1",
                  cover: "",
                  src: (_d = _ctx.productItem.images) == null ? void 0 : _d["img1"]
                }, null, 8, ["src"]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, { class: "pt-2" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h1 class="text-subtitle-1"${_scopeId2}>${ssrInterpolate(_ctx.productItem.title)}</h1>`);
              _push3(ssrRenderComponent(VList, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VListItem, { class: "pl-0" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VRow, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCol, {
                                  class: "text-subtitle-1",
                                  cols: "6"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438:`);
                                    } else {
                                      return [
                                        createTextVNode("\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438:")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCol, { cols: "6" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`${ssrInterpolate(_ctx.productItem.stock)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(_ctx.productItem.stock), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCol, {
                                    class: "text-subtitle-1",
                                    cols: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438:")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.productItem.stock), 1)
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  class: "text-subtitle-1",
                                  cols: "6"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438:")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.productItem.stock), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VListItem, { class: "pl-0" }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                class: "text-subtitle-1",
                                cols: "6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438:")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.productItem.stock), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("h1", { class: "text-subtitle-1" }, toDisplayString(_ctx.productItem.title), 1),
                createVNode(VList, null, {
                  default: withCtx(() => [
                    createVNode(VListItem, { class: "pl-0" }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              class: "text-subtitle-1",
                              cols: "6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438:")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.productItem.stock), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardActions, { class: "d-flex justify-space-between" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div${_scopeId2}>`);
              _push3(ssrRenderComponent(VBtn, { color: "primary" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u041A\u0443\u043F\u0438\u0442\u044C`);
                  } else {
                    return [
                      createTextVNode("\u041A\u0443\u043F\u0438\u0442\u044C")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VBtn, { color: "secondary" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435`);
                  } else {
                    return [
                      createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="d-flex align-center justify-end text-end"${_scopeId2}><span class="text-error"${_scopeId2}>${ssrInterpolate(_ctx.ShopHelper.convertMoneyTypeWithoutRuble(String(_ctx.productItem.price)) + " \u0440\u0443\u0431.")}</span></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(VBtn, { color: "primary" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041A\u0443\u043F\u0438\u0442\u044C")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, { color: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "d-flex align-center justify-end text-end" }, [
                  createVNode("span", { class: "text-error" }, toDisplayString(_ctx.ShopHelper.convertMoneyTypeWithoutRuble(String(_ctx.productItem.price)) + " \u0440\u0443\u0431."), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, {
            class: { "pa-0": (_b = _ctx.productItem.images) == null ? void 0 : _b["img1"] }
          }, {
            default: withCtx(() => {
              var _a2, _b2;
              return [
                !((_a2 = _ctx.productItem.images) == null ? void 0 : _a2["img1"]) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(_ctx.productItem.title), 1)
                ], 64)) : (openBlock(), createBlock(VImg, {
                  key: 1,
                  height: 100,
                  width: "auto",
                  "aspect-ratio": "28/1",
                  cover: "",
                  src: (_b2 = _ctx.productItem.images) == null ? void 0 : _b2["img1"]
                }, null, 8, ["src"]))
              ];
            }),
            _: 1
          }, 8, ["class"]),
          createVNode(VCardText, { class: "pt-2" }, {
            default: withCtx(() => [
              createVNode("h1", { class: "text-subtitle-1" }, toDisplayString(_ctx.productItem.title), 1),
              createVNode(VList, null, {
                default: withCtx(() => [
                  createVNode(VListItem, { class: "pl-0" }, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            class: "text-subtitle-1",
                            cols: "6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438:")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.productItem.stock), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCardActions, { class: "d-flex justify-space-between" }, {
            default: withCtx(() => [
              createVNode("div", null, [
                createVNode(VBtn, { color: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode("\u041A\u0443\u043F\u0438\u0442\u044C")
                  ]),
                  _: 1
                }),
                createVNode(VBtn, { color: "secondary" }, {
                  default: withCtx(() => [
                    createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "d-flex align-center justify-end text-end" }, [
                createVNode("span", { class: "text-error" }, toDisplayString(_ctx.ShopHelper.convertMoneyTypeWithoutRuble(String(_ctx.productItem.price)) + " \u0440\u0443\u0431."), 1)
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shopItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: {},
  computed: {
    currectCell() {
      if (this.$vuetify.display.width > 2100) {
        return { cells: 6, size: 2 };
      } else if (this.$vuetify.display.width > 1800) {
        return { cells: 4, size: 3 };
      } else if (this.$vuetify.display.width > 1024) {
        return { cells: 3, size: 4 };
      } else if (this.$vuetify.display.width > 800) {
        return { cells: 2, size: 6 };
      } else if (this.$vuetify.display.width > 500) {
        return { cells: 1, size: 12 };
      }
      return { cells: 1, size: 12 };
    },
    getParsingProducts() {
      return this.ParserProducts.getParserProducts;
    }
  },
  data() {
    return {
      StructHelper,
      ParserProducts: useParserProductsStore(),
      runtimeConfig: /* @__PURE__ */ useRuntimeConfig(),
      values: [
        {
          img: "https://drive.google.com/uc?export=view&id=1txxr0YFoCnjr9nmpxpRFMCGiL2FtrBO9",
          title: "\u041A\u043E\u0444\u0435"
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1E0Nbjj4lkc7bYkIUrDotkIPei03vfUFy",
          title: "\u0412\u044B\u043F\u0435\u0447\u043A\u0430"
        }
      ]
    };
  },
  methods: {},
  components: {}
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_shop_item = __nuxt_component_0$1;
  _push(ssrRenderComponent(VVirtualScroll, mergeProps({
    class: "pa-10",
    height: _ctx.runtimeConfig.public.heightWindow,
    items: _ctx.StructHelper.chunk(_ctx.getParsingProducts, _ctx.currectCell.cells)
  }, _attrs), {
    default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(item, (itemProduct) => {
                _push3(ssrRenderComponent(VCol, {
                  cols: _ctx.currectCell.size
                }, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_shop_item, { "product-item": itemProduct }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_shop_item, { "product-item": itemProduct }, null, 8, ["product-item"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(item, (itemProduct) => {
                  return openBlock(), createBlock(VCol, {
                    cols: _ctx.currectCell.size
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_shop_item, { "product-item": itemProduct }, null, 8, ["product-item"])
                    ]),
                    _: 2
                  }, 1032, ["cols"]);
                }), 256))
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VRow, null, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(item, (itemProduct) => {
                return openBlock(), createBlock(VCol, {
                  cols: _ctx.currectCell.size
                }, {
                  default: withCtx(() => [
                    createVNode(_component_shop_item, { "product-item": itemProduct }, null, 8, ["product-item"])
                  ]),
                  _: 2
                }, 1032, ["cols"]);
              }), 256))
            ]),
            _: 2
          }, 1024)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/indexComponents/shopContainer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = /* @__PURE__ */ defineComponent({
  props: {},
  emits: {},
  computed: {},
  data() {
    return {
      currectTab: "",
      menuStore: useMenuStore(),
      parsingProducts: useParserProductsStore()
    };
  },
  methods: {},
  components: {},
  created() {
    if (!this.menuStore.getCurrectCategory) {
      this.$nuxt.$router.replace({ path: "/" });
    }
    this.parsingProducts.setParserProducts(this.parsingProducts, {
      page: 1,
      category: this.menuStore.getCurrectCategory
    });
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_index_components_shop_container = __nuxt_component_0;
      _push(`<!--[-->`);
      if (_ctx.parsingProducts.getLoading || _ctx.parsingProducts.getError) {
        _push(`<div class="${ssrRenderClass([{ "align-center": !_ctx.parsingProducts.getError }, "h-screen w-screen d-flex justify-center"])}">`);
        if (_ctx.parsingProducts.getLoading && !_ctx.parsingProducts.getError) {
          _push(ssrRenderComponent(VProgressCircular, {
            indeterminate: "",
            size: 58,
            width: 8,
            color: "primary"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.parsingProducts.getError) {
          _push(ssrRenderComponent(VAlert, {
            "max-height": "100px",
            type: "error",
            rounded: "0",
            title: "\u041E\u0448\u0438\u0431\u043A\u0430",
            text: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<template>`);
      _push(ssrRenderComponent(_component_index_components_shop_container, null, null, _parent));
      _push(`</template><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-deed5a4b.mjs.map
