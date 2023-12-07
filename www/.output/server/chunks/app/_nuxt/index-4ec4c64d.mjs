import { u as useMenuStore } from './index-4e174f41.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { j as VProgressCircular, _ as _export_sfc, i as useRuntimeConfig } from '../server.mjs';
import { V as VAlert, S as StructHelper, a as VVirtualScroll, b as VCard, c as VCardTitle, d as VCardText } from './structHelper-59729a41.mjs';
import { u as useParserProductsStore, V as VImg } from './index-d67365aa.mjs';
import { V as VRow, a as VCol } from './VRow-d0c4c1c8.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    categoryImg: {
      type: String,
      required: true
    },
    categoryTitle: {
      type: String,
      required: true
    }
  },
  emits: {},
  computed: {},
  data() {
    return {
      isHover: false,
      menuStore: useMenuStore()
    };
  },
  methods: {
    handlerClickCategory(category) {
      this.menuStore.setCurrectCategory(this.menuStore, category, true);
    },
    handlerDbClickCategory(category) {
      this.menuStore.setCurrectCategory(this.menuStore, category, false);
    }
  },
  components: {}
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VCard, mergeProps({
    onClick: ($event) => _ctx.handlerClickCategory(_ctx.categoryTitle),
    onMouseover: ($event) => _ctx.isHover = true,
    onMouseleave: ($event) => _ctx.isHover = false,
    class: "pa-0 h-100 d-flex flex-column",
    color: "#FFF"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, {
          class: { "pa-0": _ctx.categoryImg }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (!_ctx.categoryImg) {
                _push3(`<!--[-->${ssrInterpolate(_ctx.categoryTitle)}<!--]-->`);
              } else {
                _push3(ssrRenderComponent(VImg, {
                  height: 250,
                  width: "auto",
                  cover: "",
                  "aspect-ratio": "28/1",
                  src: _ctx.categoryImg
                }, null, _parent3, _scopeId2));
              }
            } else {
              return [
                !_ctx.categoryImg ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(_ctx.categoryTitle), 1)
                ], 64)) : (openBlock(), createBlock(VImg, {
                  key: 1,
                  height: 250,
                  width: "auto",
                  cover: "",
                  "aspect-ratio": "28/1",
                  src: _ctx.categoryImg
                }, null, 8, ["src"]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, { class: "pt-2" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h2 class="${ssrRenderClass([{
                "text-secondary": !_ctx.isHover,
                "text-primary": _ctx.isHover
              }, "pt-10 text-h5 d-block text-center font-weight-medium h-100 w-100 filter hovering"])}" data-v-351b7c92${_scopeId2}>${ssrInterpolate(_ctx.categoryTitle ? _ctx.categoryTitle : "\u0414\u0440\u0443\u0433\u043E\u0435")}</h2>`);
            } else {
              return [
                createVNode("h2", {
                  class: ["pt-10 text-h5 d-block text-center font-weight-medium h-100 w-100 filter hovering", {
                    "text-secondary": !_ctx.isHover,
                    "text-primary": _ctx.isHover
                  }]
                }, toDisplayString(_ctx.categoryTitle ? _ctx.categoryTitle : "\u0414\u0440\u0443\u0433\u043E\u0435"), 3)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, {
            class: { "pa-0": _ctx.categoryImg }
          }, {
            default: withCtx(() => [
              !_ctx.categoryImg ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.categoryTitle), 1)
              ], 64)) : (openBlock(), createBlock(VImg, {
                key: 1,
                height: 250,
                width: "auto",
                cover: "",
                "aspect-ratio": "28/1",
                src: _ctx.categoryImg
              }, null, 8, ["src"]))
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(VCardText, { class: "pt-2" }, {
            default: withCtx(() => [
              createVNode("h2", {
                class: ["pt-10 text-h5 d-block text-center font-weight-medium h-100 w-100 filter hovering", {
                  "text-secondary": !_ctx.isHover,
                  "text-primary": _ctx.isHover
                }]
              }, toDisplayString(_ctx.categoryTitle ? _ctx.categoryTitle : "\u0414\u0440\u0443\u0433\u043E\u0435"), 3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/categoryItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-351b7c92"]]);
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
    getImageCategories() {
      return this.ParserProducts.getParserImageCategories;
    }
  },
  data() {
    return {
      runtimeConfig: /* @__PURE__ */ useRuntimeConfig(),
      ParserProducts: useParserProductsStore(),
      StructHelper
    };
  },
  methods: {},
  components: {}
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_category_item = __nuxt_component_0$1;
  _push(ssrRenderComponent(VVirtualScroll, mergeProps({
    class: "pa-10",
    height: _ctx.runtimeConfig.public.heightWindow,
    items: _ctx.StructHelper.chunk(Object.keys(_ctx.getImageCategories), _ctx.currectCell.cells)
  }, _attrs), {
    default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(item, (categoryKey) => {
                _push3(ssrRenderComponent(VCol, {
                  cols: _ctx.currectCell.size
                }, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_category_item, {
                        onClick: ($event) => _ctx.$nuxt.$router.replace({ path: "/category" }),
                        "category-img": _ctx.getImageCategories[categoryKey],
                        "category-title": categoryKey
                      }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_category_item, {
                          onClick: withModifiers(($event) => _ctx.$nuxt.$router.replace({ path: "/category" }), ["stop"]),
                          "category-img": _ctx.getImageCategories[categoryKey],
                          "category-title": categoryKey
                        }, null, 8, ["onClick", "category-img", "category-title"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(item, (categoryKey) => {
                  return openBlock(), createBlock(VCol, {
                    cols: _ctx.currectCell.size
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_category_item, {
                        onClick: withModifiers(($event) => _ctx.$nuxt.$router.replace({ path: "/category" }), ["stop"]),
                        "category-img": _ctx.getImageCategories[categoryKey],
                        "category-title": categoryKey
                      }, null, 8, ["onClick", "category-img", "category-title"])
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
              (openBlock(true), createBlock(Fragment, null, renderList(item, (categoryKey) => {
                return openBlock(), createBlock(VCol, {
                  cols: _ctx.currectCell.size
                }, {
                  default: withCtx(() => [
                    createVNode(_component_category_item, {
                      onClick: withModifiers(($event) => _ctx.$nuxt.$router.replace({ path: "/category" }), ["stop"]),
                      "category-img": _ctx.getImageCategories[categoryKey],
                      "category-title": categoryKey
                    }, null, 8, ["onClick", "category-img", "category-title"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/indexComponents/categories.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = /* @__PURE__ */ defineComponent({
  props: {},
  emits: {},
  computed: {
    getCategories() {
      return this.parsingProducts.getParserCategories;
    },
    getImagesCategories() {
      return this.parsingProducts.getParserImageCategories;
    },
    getTitle() {
      return this.getCurrectCategory(this.menuStore.getCurrectCategory) || "\u041A\u0430\u0442\u0430\u043B\u043E\u0433";
    }
  },
  data() {
    return {
      currectTab: "",
      menuStore: useMenuStore(),
      parsingProducts: useParserProductsStore()
    };
  },
  methods: {
    getCurrectCategory(category) {
      if (typeof category != "boolean") {
        return category ? category : "\u0414\u0440\u0443\u0433\u043E\u0435";
      } else {
        return category;
      }
    }
  },
  components: {},
  created() {
    this.parsingProducts.setParserCategories(this.parsingProducts);
    this.parsingProducts.setImgOnCategory(this.parsingProducts);
  },
  mounted() {
    this.menuStore.setMenuTitle(this.menuStore, this.getTitle);
  },
  watch: {
    getTitle: function(newVal) {
      this.menuStore.setMenuTitle(this.menuStore, newVal);
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_index_components_categories = __nuxt_component_0;
      if (_ctx.parsingProducts.getLoading || _ctx.parsingProducts.getError) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["h-screen w-screen d-flex justify-center", { "align-center": !_ctx.parsingProducts.getError }]
        }, _attrs))} data-v-36870dd9>`);
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
        _push(ssrRenderComponent(_component_index_components_categories, _attrs, null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-36870dd9"]]);

export { index as default };
//# sourceMappingURL=index-4ec4c64d.mjs.map
