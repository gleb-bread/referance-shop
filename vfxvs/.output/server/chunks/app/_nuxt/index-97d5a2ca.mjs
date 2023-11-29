import { createVNode, computed, withDirectives, resolveDirective, useSSRContext, defineComponent, mergeProps, withCtx, capitalize, camelize, h, resolveComponent, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as propsFactory, I as IconValue, m as makeComponentProps, a as makeDensityProps, b as makeRoundedProps, d as makeSizeProps, e as makeTagProps, f as makeThemeProps, h as makeVariantProps, g as genericComponent, i as provideTheme, u as useVariant, j as useDensity, k as useRounded, l as useSize, n as useRender, V as VIcon, o as genOverlays, q as provideDefaults, r as VDefaultsProvider, s as makeBorderProps, t as makeDimensionProps, v as makeElevationProps, w as makeLoaderProps, x as makeLocationProps, y as makePositionProps, z as makeRouterProps, R as Ripple, A as useBorder, B as useDimension, C as useElevation, D as useLoader, E as useLocation, F as usePosition, G as useLink, L as LoaderSlot, H as useProxiedModel, _ as _export_sfc, J as VTab, K as VBtn } from '../server.mjs';
import { V as VImg, m as makeTransitionProps, I as Intersect$1, M as MaybeTransition } from './VImg-841993d2.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-c9da2432.mjs';
import { u as useHead } from './index-6292e783.mjs';
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

function createSimpleFunctional(klass) {
  let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
  let name = arguments.length > 2 ? arguments[2] : void 0;
  return genericComponent()({
    name: name != null ? name : capitalize(camelize(klass.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: tag
      },
      ...makeComponentProps()
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        var _a;
        return h(props.tag, {
          class: [klass, props.class],
          style: props.style
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAvatar");
const VAvatar = genericComponent()({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-avatar", {
        "v-avatar--start": props.start,
        "v-avatar--end": props.end
      }, themeClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
      "style": [colorStyles.value, sizeStyles.value, props.style]
    }, {
      default: () => {
        var _a;
        return [props.image ? createVNode(VImg, {
          "key": "image",
          "src": props.image,
          "alt": "",
          "cover": true
        }, null) : props.icon ? createVNode(VIcon, {
          "key": "icon",
          "icon": props.icon
        }, null) : (_a = slots.default) == null ? void 0 : _a.call(slots), genOverlays(false, "v-avatar")];
      }
    }));
    return {};
  }
});
const VCardActions = genericComponent()({
  name: "VCardActions",
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-card-actions", props.class],
        "style": props.style
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const VCardSubtitle = createSimpleFunctional("v-card-subtitle");
const VCardTitle = createSimpleFunctional("v-card-title");
const makeCardItemProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: String,
  title: String,
  ...makeComponentProps(),
  ...makeDensityProps()
}, "VCardItem");
const VCardItem = genericComponent()({
  name: "VCardItem",
  props: makeCardItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title || slots.title);
      const hasSubtitle = !!(props.subtitle || slots.subtitle);
      return createVNode("div", {
        "class": ["v-card-item", props.class],
        "style": props.style
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? hasPrependMedia && createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "icon": props.prependIcon,
        "image": props.prependAvatar
      }, null) : createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.prependIcon,
            image: props.prependAvatar
          }
        }
      }, slots.prepend)]), createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [(_a3 = (_a2 = slots.title) == null ? void 0 : _a2.call(slots)) != null ? _a3 : props.title];
        }
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [(_a3 = (_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots)) != null ? _a3 : props.subtitle];
        }
      }), (_a = slots.default) == null ? void 0 : _a.call(slots)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? hasAppendMedia && createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "icon": props.appendIcon,
        "image": props.appendAvatar
      }, null) : createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.appendIcon,
            image: props.appendAvatar
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});
const VCardText = createSimpleFunctional("v-card-text");
const makeVCardProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: String,
  text: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VCard");
const VCard = genericComponent()({
  name: "VCard",
  directives: {
    Ripple
  },
  props: makeVCardProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text);
      return withDirectives(createVNode(Tag, {
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "href": link.href.value,
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : void 0
      }, {
        default: () => {
          var _a;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-card__image"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "cover": true,
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                cover: true,
                src: props.image
              }
            }
          }, slots.image)]), createVNode(LoaderSlot, {
            "name": "v-card",
            "active": !!props.loading,
            "color": typeof props.loading === "boolean" ? void 0 : props.loading
          }, {
            default: slots.loader
          }), hasCardItem && createVNode(VCardItem, {
            "key": "item",
            "prependAvatar": props.prependAvatar,
            "prependIcon": props.prependIcon,
            "title": props.title,
            "subtitle": props.subtitle,
            "appendAvatar": props.appendAvatar,
            "appendIcon": props.appendIcon
          }, {
            default: slots.item,
            prepend: slots.prepend,
            title: slots.title,
            subtitle: slots.subtitle,
            append: slots.append
          }), hasText && createVNode(VCardText, {
            "key": "text"
          }, {
            default: () => {
              var _a3;
              var _a2;
              return [(_a3 = (_a2 = slots.text) == null ? void 0 : _a2.call(slots)) != null ? _a3 : props.text];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots), slots.actions && createVNode(VCardActions, null, {
            default: slots.actions
          }), genOverlays(isClickable.value, "v-card")];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});
const makeVLazyProps = propsFactory({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps(),
  ...makeTransitionProps({
    transition: "fade-transition"
  })
}, "VLazy");
const VLazy = genericComponent()({
  name: "VLazy",
  directives: {
    intersect: Intersect$1
  },
  props: makeVLazyProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const isActive = useProxiedModel(props, "modelValue");
    function onIntersect(isIntersecting) {
      if (isActive.value)
        return;
      isActive.value = isIntersecting;
    }
    useRender(() => withDirectives(createVNode(props.tag, {
      "class": ["v-lazy", props.class],
      "style": [dimensionStyles.value, props.style]
    }, {
      default: () => [isActive.value && createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      })]
    }), [[resolveDirective("intersect"), {
      handler: onIntersect,
      options: props.options
    }, null]]));
    return {};
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  emits: {
    "update:tab": (str) => true
  },
  computed: {
    getValue: {
      get() {
        return this.value;
      },
      set(str) {
        this.$emit("update:tab", str);
      }
    }
  },
  data() {
    return {
      value: "\u041A\u043E\u0444\u0435",
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_tabs_img = resolveComponent("v-tabs-img");
  _push(ssrRenderComponent(VLazy, mergeProps({ class: "w-100" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-10 w-100" data-v-0e2e56a9${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_tabs_img, {
          "model-value": _ctx.value,
          "onUpdate:modelValue": ($event) => _ctx.value = $event,
          color: "primary",
          "align-tabs": "center",
          "slider-color": "primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.values, (valueTitle) => {
                _push3(ssrRenderComponent(VTab, {
                  value: valueTitle.title,
                  class: "h-100 d-flex flex-column"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div data-v-0e2e56a9${_scopeId3}>`);
                      _push4(ssrRenderComponent(VRow, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(VCol, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VLazy, null, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<div data-v-0e2e56a9${_scopeId6}><img class="${ssrRenderClass({ "active-category-shop": _ctx.value === valueTitle.title })}"${ssrRenderAttr("src", valueTitle.img)} alt="" data-v-0e2e56a9${_scopeId6}></div>`);
                                      } else {
                                        return [
                                          createVNode("div", null, [
                                            createVNode("img", {
                                              class: { "active-category-shop": _ctx.value === valueTitle.title },
                                              src: valueTitle.img,
                                              alt: ""
                                            }, null, 10, ["src"])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(VLazy, null, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("img", {
                                            class: { "active-category-shop": _ctx.value === valueTitle.title },
                                            src: valueTitle.img,
                                            alt: ""
                                          }, null, 10, ["src"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VLazy, null, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("img", {
                                          class: { "active-category-shop": _ctx.value === valueTitle.title },
                                          src: valueTitle.img,
                                          alt: ""
                                        }, null, 10, ["src"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(VRow, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(VCol, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VLazy, null, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<div class="text-buity-title" data-v-0e2e56a9${_scopeId6}>${ssrInterpolate(valueTitle.title)}</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "text-buity-title" }, toDisplayString(valueTitle.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(VLazy, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-buity-title" }, toDisplayString(valueTitle.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VLazy, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-buity-title" }, toDisplayString(valueTitle.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(`</div>`);
                    } else {
                      return [
                        createVNode("div", null, [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VLazy, null, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("img", {
                                          class: { "active-category-shop": _ctx.value === valueTitle.title },
                                          src: valueTitle.img,
                                          alt: ""
                                        }, null, 10, ["src"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, null, {
                                default: withCtx(() => [
                                  createVNode(VLazy, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-buity-title" }, toDisplayString(valueTitle.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.values, (valueTitle) => {
                  return openBlock(), createBlock(VTab, {
                    value: valueTitle.title,
                    class: "h-100 d-flex flex-column"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VLazy, null, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        class: { "active-category-shop": _ctx.value === valueTitle.title },
                                        src: valueTitle.img,
                                        alt: ""
                                      }, null, 10, ["src"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VLazy, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-buity-title" }, toDisplayString(valueTitle.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-10 w-100" }, [
            createVNode(_component_v_tabs_img, {
              "model-value": _ctx.value,
              "onUpdate:modelValue": ($event) => _ctx.value = $event,
              color: "primary",
              "align-tabs": "center",
              "slider-color": "primary"
            }, {
              default: withCtx(() => [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.values, (valueTitle) => {
                  return openBlock(), createBlock(VTab, {
                    value: valueTitle.title,
                    class: "h-100 d-flex flex-column"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VLazy, null, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("img", {
                                        class: { "active-category-shop": _ctx.value === valueTitle.title },
                                        src: valueTitle.img,
                                        alt: ""
                                      }, null, 10, ["src"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VLazy, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-buity-title" }, toDisplayString(valueTitle.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 256))
              ]),
              _: 1
            }, 8, ["model-value", "onUpdate:modelValue"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/indexComponents/primaryTabs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-0e2e56a9"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {},
  emits: {},
  computed: {},
  data() {
    return {};
  },
  methods: {},
  components: {}
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VCard, mergeProps({ color: "#FFF" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { "primary-title": "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u041A\u043E\u0444\u0435 `);
            } else {
              return [
                createTextVNode(" \u041A\u043E\u0444\u0435 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` 123 `);
            } else {
              return [
                createTextVNode(" 123 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardActions, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
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
            } else {
              return [
                createVNode(VBtn, { color: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode("\u041A\u0443\u043F\u0438\u0442\u044C")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, { "primary-title": "" }, {
            default: withCtx(() => [
              createTextVNode(" \u041A\u043E\u0444\u0435 ")
            ]),
            _: 1
          }),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createTextVNode(" 123 ")
            ]),
            _: 1
          }),
          createVNode(VCardActions, null, {
            default: withCtx(() => [
              createVNode(VBtn, { color: "primary" }, {
                default: withCtx(() => [
                  createTextVNode("\u041A\u0443\u043F\u0438\u0442\u044C")
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
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shopItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    currectTab: {
      type: String,
      required: true
    }
  },
  emits: {},
  computed: {},
  data() {
    return {
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
  const _component_shop_item = __nuxt_component_0;
  _push(ssrRenderComponent(VRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_shop_item, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_shop_item)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCol, null, {
            default: withCtx(() => [
              createVNode(_component_shop_item)
            ]),
            _: 1
          })
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = /* @__PURE__ */ defineComponent({
  props: {},
  emits: {},
  computed: {},
  data() {
    return {
      currectTab: ""
    };
  },
  methods: {},
  components: {}
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
      const _component_index_components_primary_tabs = __nuxt_component_0$1;
      const _component_index_components_shop_container = __nuxt_component_1;
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "h-100-vh w-100-vw" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_index_components_primary_tabs, {
              "onUpdate:tab": ($event) => _ctx.currectTab = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_index_components_shop_container, { "currect-tab": _ctx.currectTab }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_index_components_primary_tabs, {
                "onUpdate:tab": ($event) => _ctx.currectTab = $event
              }, null, 8, ["onUpdate:tab"]),
              createVNode(_component_index_components_shop_container, { "currect-tab": _ctx.currectTab }, null, 8, ["currect-tab"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ce4e3a0f"]]);

export { index as default };
//# sourceMappingURL=index-97d5a2ca.mjs.map
