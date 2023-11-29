import { _ as __nuxt_component_0 } from './nuxt-link-07e96910.mjs';
import { ref, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode, withModifiers, useSSRContext } from 'vue';
import { V as VForm, a as VTextField, u as useFormRules } from './rules-47a7da5c.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VContainer, a as VRow, b as VCol } from './VRow-c9da2432.mjs';
import { K as VBtn } from '../server.mjs';
import { V as VImg } from './VImg-841993d2.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();
    const submit = async () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "fill-height"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              "no-gutters": "",
              align: "center",
              justify: "center",
              class: "fill-height"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    lg: "5",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          "no-gutters": "",
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1${_scopeId5}>Sign Up</h1><p class="text-medium-emphasis"${_scopeId5}>Enter your details to get started</p>`);
                                    _push6(ssrRenderComponent(VForm, {
                                      onSubmit: submit,
                                      class: "mt-7"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}><label class="label text-grey-darken-2" for="name"${_scopeId6}>Name</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            rules: [unref(ruleRequired)],
                                            modelValue: unref(name),
                                            "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                            "prepend-inner-icon": "fluent:person-24-regular",
                                            id: "name",
                                            name: "name"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="mt-1"${_scopeId6}><label class="label text-grey-darken-2" for="email"${_scopeId6}>Email</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            rules: [unref(ruleRequired), unref(ruleEmail)],
                                            modelValue: unref(email),
                                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                            type: "email",
                                            "prepend-inner-icon": "fluent:mail-24-regular",
                                            id: "email",
                                            name: "email"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="mt-1"${_scopeId6}><label class="label text-grey-darken-2" for="password"${_scopeId6}>Password</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            rules: [unref(ruleRequired), unref(rulePassLen)],
                                            type: "password",
                                            modelValue: unref(password),
                                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                            "prepend-inner-icon": "fluent:password-20-regular",
                                            id: "password",
                                            name: "password"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="mt-5"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VBtn, {
                                            type: "submit",
                                            block: "",
                                            "min-height": "45",
                                            class: "gradient primary"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Create Account`);
                                              } else {
                                                return [
                                                  createTextVNode("Create Account")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode("label", {
                                                class: "label text-grey-darken-2",
                                                for: "name"
                                              }, "Name"),
                                              createVNode(VTextField, {
                                                rules: [unref(ruleRequired)],
                                                modelValue: unref(name),
                                                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                                "prepend-inner-icon": "fluent:person-24-regular",
                                                id: "name",
                                                name: "name"
                                              }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "mt-1" }, [
                                              createVNode("label", {
                                                class: "label text-grey-darken-2",
                                                for: "email"
                                              }, "Email"),
                                              createVNode(VTextField, {
                                                rules: [unref(ruleRequired), unref(ruleEmail)],
                                                modelValue: unref(email),
                                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                type: "email",
                                                "prepend-inner-icon": "fluent:mail-24-regular",
                                                id: "email",
                                                name: "email"
                                              }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "mt-1" }, [
                                              createVNode("label", {
                                                class: "label text-grey-darken-2",
                                                for: "password"
                                              }, "Password"),
                                              createVNode(VTextField, {
                                                rules: [unref(ruleRequired), unref(rulePassLen)],
                                                type: "password",
                                                modelValue: unref(password),
                                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                "prepend-inner-icon": "fluent:password-20-regular",
                                                id: "password",
                                                name: "password"
                                              }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "mt-5" }, [
                                              createVNode(VBtn, {
                                                type: "submit",
                                                block: "",
                                                "min-height": "45",
                                                class: "gradient primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Create Account")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<p class="text-body-2 mt-10"${_scopeId5}><span${_scopeId5}>Already have an account? `);
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      to: "/",
                                      class: "font-weight-bold text-primary"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Sign In`);
                                        } else {
                                          return [
                                            createTextVNode("Sign In")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</span></p>`);
                                  } else {
                                    return [
                                      createVNode("h1", null, "Sign Up"),
                                      createVNode("p", { class: "text-medium-emphasis" }, "Enter your details to get started"),
                                      createVNode(VForm, {
                                        onSubmit: withModifiers(submit, ["prevent"]),
                                        class: "mt-7"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("label", {
                                              class: "label text-grey-darken-2",
                                              for: "name"
                                            }, "Name"),
                                            createVNode(VTextField, {
                                              rules: [unref(ruleRequired)],
                                              modelValue: unref(name),
                                              "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                              "prepend-inner-icon": "fluent:person-24-regular",
                                              id: "name",
                                              name: "name"
                                            }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "mt-1" }, [
                                            createVNode("label", {
                                              class: "label text-grey-darken-2",
                                              for: "email"
                                            }, "Email"),
                                            createVNode(VTextField, {
                                              rules: [unref(ruleRequired), unref(ruleEmail)],
                                              modelValue: unref(email),
                                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                              type: "email",
                                              "prepend-inner-icon": "fluent:mail-24-regular",
                                              id: "email",
                                              name: "email"
                                            }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "mt-1" }, [
                                            createVNode("label", {
                                              class: "label text-grey-darken-2",
                                              for: "password"
                                            }, "Password"),
                                            createVNode(VTextField, {
                                              rules: [unref(ruleRequired), unref(rulePassLen)],
                                              type: "password",
                                              modelValue: unref(password),
                                              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                              "prepend-inner-icon": "fluent:password-20-regular",
                                              id: "password",
                                              name: "password"
                                            }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "mt-5" }, [
                                            createVNode(VBtn, {
                                              type: "submit",
                                              block: "",
                                              "min-height": "45",
                                              class: "gradient primary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Create Account")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["onSubmit"]),
                                      createVNode("p", { class: "text-body-2 mt-10" }, [
                                        createVNode("span", null, [
                                          createTextVNode("Already have an account? "),
                                          createVNode(_component_NuxtLink, {
                                            to: "/",
                                            class: "font-weight-bold text-primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Sign In")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h1", null, "Sign Up"),
                                    createVNode("p", { class: "text-medium-emphasis" }, "Enter your details to get started"),
                                    createVNode(VForm, {
                                      onSubmit: withModifiers(submit, ["prevent"]),
                                      class: "mt-7"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("label", {
                                            class: "label text-grey-darken-2",
                                            for: "name"
                                          }, "Name"),
                                          createVNode(VTextField, {
                                            rules: [unref(ruleRequired)],
                                            modelValue: unref(name),
                                            "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                            "prepend-inner-icon": "fluent:person-24-regular",
                                            id: "name",
                                            name: "name"
                                          }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mt-1" }, [
                                          createVNode("label", {
                                            class: "label text-grey-darken-2",
                                            for: "email"
                                          }, "Email"),
                                          createVNode(VTextField, {
                                            rules: [unref(ruleRequired), unref(ruleEmail)],
                                            modelValue: unref(email),
                                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                            type: "email",
                                            "prepend-inner-icon": "fluent:mail-24-regular",
                                            id: "email",
                                            name: "email"
                                          }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mt-1" }, [
                                          createVNode("label", {
                                            class: "label text-grey-darken-2",
                                            for: "password"
                                          }, "Password"),
                                          createVNode(VTextField, {
                                            rules: [unref(ruleRequired), unref(rulePassLen)],
                                            type: "password",
                                            modelValue: unref(password),
                                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                            "prepend-inner-icon": "fluent:password-20-regular",
                                            id: "password",
                                            name: "password"
                                          }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mt-5" }, [
                                          createVNode(VBtn, {
                                            type: "submit",
                                            block: "",
                                            "min-height": "45",
                                            class: "gradient primary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Create Account")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["onSubmit"]),
                                    createVNode("p", { class: "text-body-2 mt-10" }, [
                                      createVNode("span", null, [
                                        createTextVNode("Already have an account? "),
                                        createVNode(_component_NuxtLink, {
                                          to: "/",
                                          class: "font-weight-bold text-primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Sign In")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
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
                          createVNode(VRow, {
                            "no-gutters": "",
                            align: "center",
                            justify: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h1", null, "Sign Up"),
                                  createVNode("p", { class: "text-medium-emphasis" }, "Enter your details to get started"),
                                  createVNode(VForm, {
                                    onSubmit: withModifiers(submit, ["prevent"]),
                                    class: "mt-7"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("label", {
                                          class: "label text-grey-darken-2",
                                          for: "name"
                                        }, "Name"),
                                        createVNode(VTextField, {
                                          rules: [unref(ruleRequired)],
                                          modelValue: unref(name),
                                          "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                          "prepend-inner-icon": "fluent:person-24-regular",
                                          id: "name",
                                          name: "name"
                                        }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mt-1" }, [
                                        createVNode("label", {
                                          class: "label text-grey-darken-2",
                                          for: "email"
                                        }, "Email"),
                                        createVNode(VTextField, {
                                          rules: [unref(ruleRequired), unref(ruleEmail)],
                                          modelValue: unref(email),
                                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                          type: "email",
                                          "prepend-inner-icon": "fluent:mail-24-regular",
                                          id: "email",
                                          name: "email"
                                        }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mt-1" }, [
                                        createVNode("label", {
                                          class: "label text-grey-darken-2",
                                          for: "password"
                                        }, "Password"),
                                        createVNode(VTextField, {
                                          rules: [unref(ruleRequired), unref(rulePassLen)],
                                          type: "password",
                                          modelValue: unref(password),
                                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                          "prepend-inner-icon": "fluent:password-20-regular",
                                          id: "password",
                                          name: "password"
                                        }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mt-5" }, [
                                        createVNode(VBtn, {
                                          type: "submit",
                                          block: "",
                                          "min-height": "45",
                                          class: "gradient primary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Create Account")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["onSubmit"]),
                                  createVNode("p", { class: "text-body-2 mt-10" }, [
                                    createVNode("span", null, [
                                      createTextVNode("Already have an account? "),
                                      createVNode(_component_NuxtLink, {
                                        to: "/",
                                        class: "font-weight-bold text-primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Sign In")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
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
                  _push3(ssrRenderComponent(VCol, {
                    class: "hidden-md-and-down fill-height",
                    md: "6",
                    lg: "7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VImg, {
                          src: "https://wallpaper.dog/large/5557744.jpg",
                          cover: "",
                          class: "h-100 rounded-xl d-flex align-center justify-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-center w-50 text-white mx-auto"${_scopeId4}><h2 class="mb-4"${_scopeId4}>Start your journey today</h2><p${_scopeId4}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore quia. Dolorum dolores ad ipsum voluptatum rem, hic placeat, odio, odit numquam quod veritatis accusantium assumenda! Sequi, provident in! Iure! </p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-center w-50 text-white mx-auto" }, [
                                  createVNode("h2", { class: "mb-4" }, "Start your journey today"),
                                  createVNode("p", null, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore quia. Dolorum dolores ad ipsum voluptatum rem, hic placeat, odio, odit numquam quod veritatis accusantium assumenda! Sequi, provident in! Iure! ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VImg, {
                            src: "https://wallpaper.dog/large/5557744.jpg",
                            cover: "",
                            class: "h-100 rounded-xl d-flex align-center justify-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-center w-50 text-white mx-auto" }, [
                                createVNode("h2", { class: "mb-4" }, "Start your journey today"),
                                createVNode("p", null, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore quia. Dolorum dolores ad ipsum voluptatum rem, hic placeat, odio, odit numquam quod veritatis accusantium assumenda! Sequi, provident in! Iure! ")
                              ])
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      lg: "5",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          "no-gutters": "",
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("h1", null, "Sign Up"),
                                createVNode("p", { class: "text-medium-emphasis" }, "Enter your details to get started"),
                                createVNode(VForm, {
                                  onSubmit: withModifiers(submit, ["prevent"]),
                                  class: "mt-7"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("label", {
                                        class: "label text-grey-darken-2",
                                        for: "name"
                                      }, "Name"),
                                      createVNode(VTextField, {
                                        rules: [unref(ruleRequired)],
                                        modelValue: unref(name),
                                        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                        "prepend-inner-icon": "fluent:person-24-regular",
                                        id: "name",
                                        name: "name"
                                      }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mt-1" }, [
                                      createVNode("label", {
                                        class: "label text-grey-darken-2",
                                        for: "email"
                                      }, "Email"),
                                      createVNode(VTextField, {
                                        rules: [unref(ruleRequired), unref(ruleEmail)],
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        type: "email",
                                        "prepend-inner-icon": "fluent:mail-24-regular",
                                        id: "email",
                                        name: "email"
                                      }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mt-1" }, [
                                      createVNode("label", {
                                        class: "label text-grey-darken-2",
                                        for: "password"
                                      }, "Password"),
                                      createVNode(VTextField, {
                                        rules: [unref(ruleRequired), unref(rulePassLen)],
                                        type: "password",
                                        modelValue: unref(password),
                                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                        "prepend-inner-icon": "fluent:password-20-regular",
                                        id: "password",
                                        name: "password"
                                      }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mt-5" }, [
                                      createVNode(VBtn, {
                                        type: "submit",
                                        block: "",
                                        "min-height": "45",
                                        class: "gradient primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Create Account")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"]),
                                createVNode("p", { class: "text-body-2 mt-10" }, [
                                  createVNode("span", null, [
                                    createTextVNode("Already have an account? "),
                                    createVNode(_component_NuxtLink, {
                                      to: "/",
                                      class: "font-weight-bold text-primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Sign In")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      class: "hidden-md-and-down fill-height",
                      md: "6",
                      lg: "7"
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: "https://wallpaper.dog/large/5557744.jpg",
                          cover: "",
                          class: "h-100 rounded-xl d-flex align-center justify-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-center w-50 text-white mx-auto" }, [
                              createVNode("h2", { class: "mb-4" }, "Start your journey today"),
                              createVNode("p", null, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore quia. Dolorum dolores ad ipsum voluptatum rem, hic placeat, odio, odit numquam quod veritatis accusantium assumenda! Sequi, provident in! Iure! ")
                            ])
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
          } else {
            return [
              createVNode(VRow, {
                "no-gutters": "",
                align: "center",
                justify: "center",
                class: "fill-height"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    lg: "5",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        "no-gutters": "",
                        align: "center",
                        justify: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("h1", null, "Sign Up"),
                              createVNode("p", { class: "text-medium-emphasis" }, "Enter your details to get started"),
                              createVNode(VForm, {
                                onSubmit: withModifiers(submit, ["prevent"]),
                                class: "mt-7"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("label", {
                                      class: "label text-grey-darken-2",
                                      for: "name"
                                    }, "Name"),
                                    createVNode(VTextField, {
                                      rules: [unref(ruleRequired)],
                                      modelValue: unref(name),
                                      "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                      "prepend-inner-icon": "fluent:person-24-regular",
                                      id: "name",
                                      name: "name"
                                    }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mt-1" }, [
                                    createVNode("label", {
                                      class: "label text-grey-darken-2",
                                      for: "email"
                                    }, "Email"),
                                    createVNode(VTextField, {
                                      rules: [unref(ruleRequired), unref(ruleEmail)],
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      type: "email",
                                      "prepend-inner-icon": "fluent:mail-24-regular",
                                      id: "email",
                                      name: "email"
                                    }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mt-1" }, [
                                    createVNode("label", {
                                      class: "label text-grey-darken-2",
                                      for: "password"
                                    }, "Password"),
                                    createVNode(VTextField, {
                                      rules: [unref(ruleRequired), unref(rulePassLen)],
                                      type: "password",
                                      modelValue: unref(password),
                                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                      "prepend-inner-icon": "fluent:password-20-regular",
                                      id: "password",
                                      name: "password"
                                    }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mt-5" }, [
                                    createVNode(VBtn, {
                                      type: "submit",
                                      block: "",
                                      "min-height": "45",
                                      class: "gradient primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Create Account")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }, 8, ["onSubmit"]),
                              createVNode("p", { class: "text-body-2 mt-10" }, [
                                createVNode("span", null, [
                                  createTextVNode("Already have an account? "),
                                  createVNode(_component_NuxtLink, {
                                    to: "/",
                                    class: "font-weight-bold text-primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Sign In")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    class: "hidden-md-and-down fill-height",
                    md: "6",
                    lg: "7"
                  }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: "https://wallpaper.dog/large/5557744.jpg",
                        cover: "",
                        class: "h-100 rounded-xl d-flex align-center justify-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-center w-50 text-white mx-auto" }, [
                            createVNode("h2", { class: "mb-4" }, "Start your journey today"),
                            createVNode("p", null, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore quia. Dolorum dolores ad ipsum voluptatum rem, hic placeat, odio, odit numquam quod veritatis accusantium assumenda! Sequi, provident in! Iure! ")
                          ])
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-d232bfbc.mjs.map
