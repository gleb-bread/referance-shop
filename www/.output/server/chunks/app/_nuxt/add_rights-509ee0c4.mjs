import { createVNode, useSSRContext, defineComponent, mergeProps, withCtx, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { p as propsFactory, m as makeComponentProps, a as makeDensityProps, b as makeTagProps, d as makeThemeProps, g as genericComponent, e as provideTheme, u as useDensity, f as useRender, h as convertToUnit, _ as _export_sfc, V as VBtn } from '../server.mjs';
import { u as useMenuStore } from './index-4e174f41.mjs';
import { u as useHead } from './index-0ac4f71f.mjs';
import { V as VContainer } from './VContainer-9d9fd019.mjs';
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

const makeVTableProps = propsFactory({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTable");
const VTable = genericComponent()({
  name: "VTable",
  props: makeVTableProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-table", {
        "v-table--fixed-height": !!props.height,
        "v-table--fixed-header": props.fixedHeader,
        "v-table--fixed-footer": props.fixedFooter,
        "v-table--has-top": !!slots.top,
        "v-table--has-bottom": !!slots.bottom,
        "v-table--hover": props.hover
      }, themeClasses.value, densityClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b, _c;
        return [(_a = slots.top) == null ? void 0 : _a.call(slots), slots.default ? createVNode("div", {
          "class": "v-table__wrapper",
          "style": {
            height: convertToUnit(props.height)
          }
        }, [createVNode("table", null, [slots.default()])]) : (_b = slots.wrapper) == null ? void 0 : _b.call(slots), (_c = slots.bottom) == null ? void 0 : _c.call(slots)];
      }
    }));
    return {};
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    titleCell: {
      type: String,
      required: true
    },
    valuesList: {
      type: Array,
      required: true
    },
    keyValue: {
      type: String,
      default: false
    }
  },
  emits: {},
  computed: {},
  data() {
    return {};
  },
  methods: {},
  components: {}
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VTable, mergeProps({
    class: "mr-2 rounded min-w-300px",
    height: "100%"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<thead data-v-43a5c043${_scopeId}><th class="pt-2" data-v-43a5c043${_scopeId}>${ssrInterpolate(_ctx.titleCell)}</th></thead><tbody data-v-43a5c043${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.valuesList, (item) => {
          _push2(`<tr data-v-43a5c043${_scopeId}><td data-v-43a5c043${_scopeId}>${ssrInterpolate(_ctx.keyValue ? item[_ctx.keyValue] : item)}</td></tr>`);
        });
        _push2(`<!--]--><td class="pa-5 d-flex justify-center" data-v-43a5c043${_scopeId}>`);
        _push2(ssrRenderComponent(VBtn, {
          icon: "mdi-plus",
          size: "30"
        }, null, _parent2, _scopeId));
        _push2(`</td></tbody>`);
      } else {
        return [
          createVNode("thead", null, [
            createVNode("th", { class: "pt-2" }, toDisplayString(_ctx.titleCell), 1)
          ]),
          createVNode("tbody", null, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.valuesList, (item) => {
              return openBlock(), createBlock("tr", null, [
                createVNode("td", null, toDisplayString(_ctx.keyValue ? item[_ctx.keyValue] : item), 1)
              ]);
            }), 256)),
            createVNode("td", { class: "pa-5 d-flex justify-center" }, [
              createVNode(VBtn, {
                icon: "mdi-plus",
                size: "30"
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rights/tableWidthSingleCell.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-43a5c043"]]);
const __default__ = /* @__PURE__ */ defineComponent({
  props: {},
  emits: {},
  computed: {},
  data() {
    return {
      menuStore: useMenuStore(),
      title: "C\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432"
    };
  },
  methods: {},
  components: {},
  mounted() {
    this.menuStore.setMenuTitle(this.menuStore, this.title);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "add_rights",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "C\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_rights_table_width_single_cell = __nuxt_component_0;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "h-100-vh w-100-wh" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-1-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_rights_table_width_single_cell, {
              "title-cell": "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B",
              "values-list": ["\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_rights_table_width_single_cell, {
              "title-cell": "\u041F\u0440\u0430\u0432\u0430",
              "values-list": ["\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430"]
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-1-1" }, [
                createVNode(_component_rights_table_width_single_cell, {
                  "title-cell": "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B",
                  "values-list": ["\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430"]
                }),
                createVNode(_component_rights_table_width_single_cell, {
                  "title-cell": "\u041F\u0440\u0430\u0432\u0430",
                  "values-list": ["\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430", "\u041F\u0438\u0437\u0434\u0430"]
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/add_rights.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add_rights-509ee0c4.mjs.map
