import { u as useHead } from './index-0ac4f71f.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { u as useMenuStore } from './index-4e174f41.mjs';
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
import 'vue/server-renderer';
import 'crypto';

const __default__ = /* @__PURE__ */ defineComponent({
  props: {},
  emits: {},
  computed: {},
  data() {
    return {
      menuStore: useMenuStore(),
      title: "\u041B\u043E\u0433\u0438"
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
  __name: "logs",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u041B\u043E\u0433\u0438"
    });
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/logs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=logs-ca5a4c8b.mjs.map
