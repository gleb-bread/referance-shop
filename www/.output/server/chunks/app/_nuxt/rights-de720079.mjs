import { u as useHead } from './index-0ac4f71f.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useMenuStore } from './index-4e174f41.mjs';
import { V as VContainer } from './VContainer-9d9fd019.mjs';
import '../server.mjs';
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

const __default__ = /* @__PURE__ */ defineComponent({
  props: {},
  emits: {},
  computed: {},
  data() {
    return {
      menuStore: useMenuStore(),
      title: "\u041F\u0440\u0430\u0432\u0430"
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
  __name: "rights",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u041F\u0440\u0430\u0432\u0430"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/rights.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rights-de720079.mjs.map
