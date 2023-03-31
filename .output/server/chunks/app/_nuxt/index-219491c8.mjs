import { useSSRContext, reactive, defineComponent, ref, mergeProps, resolveComponent, withCtx, createVNode, unref, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, Transition } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { $fetch } from 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import '../../nitro/firebase.mjs';
import 'node-fetch-native/polyfill';
import 'firebase-functions';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';

const _sfc_main$9 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_v_img = resolveComponent("v-img");
  _push(ssrRenderComponent(_component_v_sheet, mergeProps({ class: "flex-column justify-center ma-10 bg-transparent" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_img, {
          class: "mx-auto align-center",
          width: 400,
          src: "https://i.postimg.cc/YSHwbFQk/logo1.png"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_img, {
            class: "mx-auto align-center",
            width: 400,
            src: "https://i.postimg.cc/YSHwbFQk/logo1.png"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_card, { class: ["flat d-flex flex-column align-center justify-center bg-transparent", `elevation-${0}`] }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="align-center text-h3 text-white my-2 font-weight-bold"${_scopeId}> Which waifu has more likes ? </p>`);
      } else {
        return [
          createVNode("p", { class: "align-center text-h3 text-white my-2 font-weight-bold" }, " Which waifu has more likes ? ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_card, { class: ["flat d-flex flex-column align-center justify-center bg-transparent", `elevation-${0}`] }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-white align-center mt-5 justify-center font-weight-bold"${_scopeId}> A game where you guess if a waifu has higher or lower likes than other waifu based <br${_scopeId}> on anime list data we collected </p>`);
      } else {
        return [
          createVNode("p", { class: "text-white align-center mt-5 justify-center font-weight-bold" }, [
            createTextVNode(" A game where you guess if a waifu has higher or lower likes than other waifu based "),
            createVNode("br"),
            createTextVNode(" on anime list data we collected ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/description.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_card = resolveComponent("v-card");
  _push(ssrRenderComponent(_component_v_sheet, mergeProps({ class: "align-center ma-12 bg-transparent" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, {
          rounded: "pill",
          variant: "flat",
          color: "success",
          size: "x-large",
          onClick: ($event) => _ctx.$emit("play")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p class="text-button font-weight-bold"${_scopeId2}> Play Game </p>`);
            } else {
              return [
                createVNode("p", { class: "text-button font-weight-bold" }, " Play Game ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_btn, {
            rounded: "pill",
            variant: "flat",
            color: "success",
            size: "x-large",
            onClick: ($event) => _ctx.$emit("play")
          }, {
            default: withCtx(() => [
              createVNode("p", { class: "text-button font-weight-bold" }, " Play Game ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_v_card)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/play_button.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_logo = __nuxt_component_0;
      const _component_description = __nuxt_component_1$2;
      const _component_play_button = __nuxt_component_2$2;
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        fluid: "",
        "fill-height": "",
        class: "justify-center mt-16 bg-transparent"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_sheet, { class: "d-flex flex-column align-center bg-transparent" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_logo, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_description, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_play_button, {
                    onPlay: ($event) => _ctx.$emit("play")
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_logo),
                    createVNode(_component_description),
                    createVNode(_component_play_button, {
                      onPlay: ($event) => _ctx.$emit("play")
                    }, null, 8, ["onPlay"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_sheet, { class: "d-flex flex-column align-center bg-transparent" }, {
                default: withCtx(() => [
                  createVNode(_component_logo),
                  createVNode(_component_description),
                  createVNode(_component_play_button, {
                    onPlay: ($event) => _ctx.$emit("play")
                  }, null, 8, ["onPlay"])
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
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const store = reactive({
  score: 0,
  increment() {
    this.score++;
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "score",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`${ssrInterpolate(unref(store).score)}`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/score.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "end_page",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_Score = _sfc_main$5;
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        flat: "",
        class: "bg-transparent d-flex align-center justify-center text-white fill-height"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="game-end" data-v-8316c4f7${_scopeId}><div class="game-end__wrapper" data-v-8316c4f7${_scopeId}><div class="game-end-score-wrapper" data-v-8316c4f7${_scopeId}><p class="game-end-score" data-v-8316c4f7${_scopeId}>You scored: <span class="game-end-score__score" data-v-8316c4f7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Score, null, null, _parent2, _scopeId));
            _push2(`</span></p></div>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              onClick: ($event) => _ctx.$emit("homepage"),
              class: "game-end-button",
              rounded: "pill",
              variant: "flat",
              color: "orange",
              size: "x-large"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-button font-weight-bold text-white" data-v-8316c4f7${_scopeId2}>Back to menu</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-button font-weight-bold text-white" }, "Back to menu")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              onClick: ($event) => _ctx.$emit("play"),
              class: "mx-5 my-5 game-end-button",
              rounded: "pill",
              variant: "flat",
              color: "success",
              size: "x-large"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-button font-weight-bold" data-v-8316c4f7${_scopeId2}>Play again</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-button font-weight-bold" }, "Play again")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "game-end" }, [
                createVNode("div", { class: "game-end__wrapper" }, [
                  createVNode("div", { class: "game-end-score-wrapper" }, [
                    createVNode("p", { class: "game-end-score" }, [
                      createTextVNode("You scored: "),
                      createVNode("span", { class: "game-end-score__score" }, [
                        createVNode(_component_Score)
                      ])
                    ])
                  ]),
                  createVNode(_component_v_btn, {
                    onClick: ($event) => _ctx.$emit("homepage"),
                    class: "game-end-button",
                    rounded: "pill",
                    variant: "flat",
                    color: "orange",
                    size: "x-large"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-button font-weight-bold text-white" }, "Back to menu")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_v_btn, {
                    onClick: ($event) => _ctx.$emit("play"),
                    class: "mx-5 my-5 game-end-button",
                    rounded: "pill",
                    variant: "flat",
                    color: "success",
                    size: "x-large"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-button font-weight-bold" }, "Play again")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/end_page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8316c4f7"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  _push(ssrRenderComponent(_component_v_btn, mergeProps({
    rounded: "pill",
    variant: "flat",
    color: "success",
    size: "x-large",
    class: "mt-5",
    onClick: ($event) => _ctx.$emit("guess", "higher")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-button font-weight-bold"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_icon, { icon: "mdi-menu-up" }, null, _parent2, _scopeId));
        _push2(`Higher </p>`);
      } else {
        return [
          createVNode("p", { class: "text-button font-weight-bold" }, [
            createVNode(_component_v_icon, { icon: "mdi-menu-up" }),
            createTextVNode("Higher ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/higher_button.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  _push(ssrRenderComponent(_component_v_btn, mergeProps({
    rounded: "pill",
    variant: "flat",
    color: "error",
    size: "x-large",
    class: "mt-5",
    onClick: ($event) => _ctx.$emit("guess", "lower")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-button font-weight-bold"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_icon, { icon: "mdi-menu-down" }, null, _parent2, _scopeId));
        _push2(` Lower </p>`);
      } else {
        return [
          createVNode("p", { class: "text-button font-weight-bold" }, [
            createVNode(_component_v_icon, { icon: "mdi-menu-down" }),
            createTextVNode(" Lower ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lower_button.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "play_page",
  __ssrInlineRender: true,
  emits: ["end"],
  setup(__props, { emit }) {
    const guessedState = ref(0);
    const correctGuess = ref(0);
    const backgroundState = ref(0);
    const show = ref(true);
    const didLose = ref(false);
    const waifu1 = ref({
      name: "",
      likes: 0,
      url: ""
    });
    const waifu2 = ref({
      name: "",
      likes: 0,
      url: ""
    });
    const waifu3 = ref({
      name: "",
      likes: 0,
      url: ""
    });
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    function incrementScore() {
      store.score++;
    }
    const onAfterLeave = () => {
      transitionNewWaifu();
      show.value = true;
    };
    function generateRandomWaifu() {
      return $fetch("/api/random_waifu");
    }
    async function transitionNewWaifu() {
      waifu1.value.name = waifu2.value.name;
      waifu1.value.likes = waifu2.value.likes;
      waifu1.value.url = waifu2.value.url;
      waifu2.value.name = waifu3.value.name;
      waifu2.value.likes = waifu3.value.likes;
      waifu2.value.url = waifu3.value.url;
      const newWaifu = await generateRandomWaifu();
      waifu3.value.name = newWaifu.name;
      waifu3.value.likes = newWaifu.likes;
      waifu3.value.url = newWaifu.image_url;
    }
    async function winGame() {
      console.log("correct");
      correctGuess.value = 1;
      backgroundState.value = 1;
      console.log("Stop Begins");
      await sleep(500);
      console.log("Stop Done");
      incrementScore();
      show.value = !show.value;
      guessedState.value = 0;
    }
    async function loseGame() {
      console.log("wrong");
      correctGuess.value = 0;
      didLose.value = true;
      await sleep(1900);
      emit("end");
    }
    async function guess(guessState) {
      guessedState.value = 1;
      console.log(guessState);
      if (guessState === "higher" && waifu2.value.likes >= waifu1.value.likes || guessState === "lower" && waifu2.value.likes < waifu1.value.likes) {
        await winGame();
      } else {
        await loseGame();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_Score = _sfc_main$5;
      const _component_higher_button = __nuxt_component_1;
      const _component_lower_button = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        "bg-transparent": "",
        class: "ma-0 pa-0 fill-height",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (backgroundState.value === 1) {
              _push2(`<span class="bg2" data-v-361ee38b${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_v_row, { class: "ma-0 pa-0 fill-height" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (show.value) {
                    _push3(ssrRenderComponent(_component_v_col, {
                      xs12: "",
                      md6: "",
                      cols: "12",
                      xs: "12",
                      md: "6",
                      class: "ma-0 pa-0 bg1",
                      style: { "background-image": "url(" + waifu1.value.url + ")" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            class: [didLose.value ? "loseGameLeft flat d-flex flex-column align-center justify-center bg-transparent" : "flat d-flex flex-column align-center justify-center bg-transparent", `elevation-${0}`],
                            height: "100%"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  flat: "",
                                  class: "bg-transparent justify-center d-flex flex-column fill-height"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<p class="text-white text-h2 font-weight-bold mt-1" data-v-361ee38b${_scopeId5}>&quot;${ssrInterpolate(waifu1.value.name)}&quot;</p><p class="text-white" data-v-361ee38b${_scopeId5}> has </p><p class="text-yellow-accent-3 text-h3 font-weight-bold mt-1" data-v-361ee38b${_scopeId5}>${ssrInterpolate(waifu1.value.likes)}</p><p class="text-white" data-v-361ee38b${_scopeId5}> likes </p>`);
                                    } else {
                                      return [
                                        createVNode("p", { class: "text-white text-h2 font-weight-bold mt-1" }, '"' + toDisplayString(waifu1.value.name) + '"', 1),
                                        createVNode("p", { class: "text-white" }, " has "),
                                        createVNode("p", { class: "text-yellow-accent-3 text-h3 font-weight-bold mt-1" }, toDisplayString(waifu1.value.likes), 1),
                                        createVNode("p", { class: "text-white" }, " likes ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_card, {
                                  flat: "",
                                  class: "bg-transparent d-flex align-xl-start mt-auto"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<p class="text-white font-weight-bold" data-v-361ee38b${_scopeId5}>Score: `);
                                      _push6(ssrRenderComponent(_component_Score, null, null, _parent6, _scopeId5));
                                      _push6(`</p>`);
                                    } else {
                                      return [
                                        createVNode("p", { class: "text-white font-weight-bold" }, [
                                          createTextVNode("Score: "),
                                          createVNode(_component_Score)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_card, {
                                    flat: "",
                                    class: "bg-transparent justify-center d-flex flex-column fill-height"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-white text-h2 font-weight-bold mt-1" }, '"' + toDisplayString(waifu1.value.name) + '"', 1),
                                      createVNode("p", { class: "text-white" }, " has "),
                                      createVNode("p", { class: "text-yellow-accent-3 text-h3 font-weight-bold mt-1" }, toDisplayString(waifu1.value.likes), 1),
                                      createVNode("p", { class: "text-white" }, " likes ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card, {
                                    flat: "",
                                    class: "bg-transparent d-flex align-xl-start mt-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-white font-weight-bold" }, [
                                        createTextVNode("Score: "),
                                        createVNode(_component_Score)
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
                            createVNode(_component_v_card, {
                              class: [didLose.value ? "loseGameLeft flat d-flex flex-column align-center justify-center bg-transparent" : "flat d-flex flex-column align-center justify-center bg-transparent", `elevation-${0}`],
                              height: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  flat: "",
                                  class: "bg-transparent justify-center d-flex flex-column fill-height"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-white text-h2 font-weight-bold mt-1" }, '"' + toDisplayString(waifu1.value.name) + '"', 1),
                                    createVNode("p", { class: "text-white" }, " has "),
                                    createVNode("p", { class: "text-yellow-accent-3 text-h3 font-weight-bold mt-1" }, toDisplayString(waifu1.value.likes), 1),
                                    createVNode("p", { class: "text-white" }, " likes ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card, {
                                  flat: "",
                                  class: "bg-transparent d-flex align-xl-start mt-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-white font-weight-bold" }, [
                                      createTextVNode("Score: "),
                                      createVNode(_component_Score)
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(``);
                  if (show.value) {
                    _push3(ssrRenderComponent(_component_v_col, {
                      xs12: "",
                      md6: "",
                      cols: "12",
                      xs: "12",
                      md: "6",
                      class: "ma-0 pa-0 bg1",
                      style: { "background-image": "url(" + waifu2.value.url + ")" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            class: [didLose.value ? "loseGameRight flat d-flex flex-column align-center justify-center bg-transparent" : "flat d-flex flex-column align-center justify-center bg-transparent", `elevation-${0}`],
                            height: "100%"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-white text-h2 font-weight-bold mt-2" data-v-361ee38b${_scopeId4}>&quot;${ssrInterpolate(waifu2.value.name)}&quot;</p>`);
                                if (guessedState.value === 0) {
                                  _push5(ssrRenderComponent(_component_higher_button, { onGuess: guess }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (guessedState.value === 0) {
                                  _push5(ssrRenderComponent(_component_lower_button, { onGuess: guess }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (guessedState.value === 1) {
                                  _push5(`<p class="text-white" data-v-361ee38b${_scopeId4}> has </p>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (guessedState.value === 1) {
                                  _push5(`<p class="text-yellow-accent-3 text-h3 font-weight-bold mt-1" data-v-361ee38b${_scopeId4}>${ssrInterpolate(waifu2.value.likes)}</p>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (guessedState.value === 1) {
                                  _push5(`<p class="text-white" data-v-361ee38b${_scopeId4}> likes </p>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode("p", { class: "text-white text-h2 font-weight-bold mt-2" }, '"' + toDisplayString(waifu2.value.name) + '"', 1),
                                  guessedState.value === 0 ? (openBlock(), createBlock(_component_higher_button, {
                                    key: 0,
                                    onGuess: guess
                                  })) : createCommentVNode("", true),
                                  guessedState.value === 0 ? (openBlock(), createBlock(_component_lower_button, {
                                    key: 1,
                                    onGuess: guess
                                  })) : createCommentVNode("", true),
                                  guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                    key: 2,
                                    class: "text-white"
                                  }, " has ")) : createCommentVNode("", true),
                                  guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                    key: 3,
                                    class: "text-yellow-accent-3 text-h3 font-weight-bold mt-1"
                                  }, toDisplayString(waifu2.value.likes), 1)) : createCommentVNode("", true),
                                  guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                    key: 4,
                                    class: "text-white"
                                  }, " likes ")) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, {
                              class: [didLose.value ? "loseGameRight flat d-flex flex-column align-center justify-center bg-transparent" : "flat d-flex flex-column align-center justify-center bg-transparent", `elevation-${0}`],
                              height: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-white text-h2 font-weight-bold mt-2" }, '"' + toDisplayString(waifu2.value.name) + '"', 1),
                                guessedState.value === 0 ? (openBlock(), createBlock(_component_higher_button, {
                                  key: 0,
                                  onGuess: guess
                                })) : createCommentVNode("", true),
                                guessedState.value === 0 ? (openBlock(), createBlock(_component_lower_button, {
                                  key: 1,
                                  onGuess: guess
                                })) : createCommentVNode("", true),
                                guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                  key: 2,
                                  class: "text-white"
                                }, " has ")) : createCommentVNode("", true),
                                guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                  key: 3,
                                  class: "text-yellow-accent-3 text-h3 font-weight-bold mt-1"
                                }, toDisplayString(waifu2.value.likes), 1)) : createCommentVNode("", true),
                                guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                  key: 4,
                                  class: "text-white"
                                }, " likes ")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, {
                      name: "slide-left",
                      onAfterLeave
                    }, {
                      default: withCtx(() => [
                        show.value ? (openBlock(), createBlock(_component_v_col, {
                          key: 0,
                          xs12: "",
                          md6: "",
                          cols: "12",
                          xs: "12",
                          md: "6",
                          class: "ma-0 pa-0 bg1",
                          style: { "background-image": "url(" + waifu1.value.url + ")" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              class: [didLose.value ? "loseGameLeft flat d-flex flex-column align-center justify-center bg-transparent" : "flat d-flex flex-column align-center justify-center bg-transparent", `elevation-${0}`],
                              height: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  flat: "",
                                  class: "bg-transparent justify-center d-flex flex-column fill-height"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-white text-h2 font-weight-bold mt-1" }, '"' + toDisplayString(waifu1.value.name) + '"', 1),
                                    createVNode("p", { class: "text-white" }, " has "),
                                    createVNode("p", { class: "text-yellow-accent-3 text-h3 font-weight-bold mt-1" }, toDisplayString(waifu1.value.likes), 1),
                                    createVNode("p", { class: "text-white" }, " likes ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card, {
                                  flat: "",
                                  class: "bg-transparent d-flex align-xl-start mt-auto"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-white font-weight-bold" }, [
                                      createTextVNode("Score: "),
                                      createVNode(_component_Score)
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        }, 8, ["style"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(Transition, { name: "slide-right" }, {
                      default: withCtx(() => [
                        show.value ? (openBlock(), createBlock(_component_v_col, {
                          key: 0,
                          xs12: "",
                          md6: "",
                          cols: "12",
                          xs: "12",
                          md: "6",
                          class: "ma-0 pa-0 bg1",
                          style: { "background-image": "url(" + waifu2.value.url + ")" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              class: [didLose.value ? "loseGameRight flat d-flex flex-column align-center justify-center bg-transparent" : "flat d-flex flex-column align-center justify-center bg-transparent", `elevation-${0}`],
                              height: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-white text-h2 font-weight-bold mt-2" }, '"' + toDisplayString(waifu2.value.name) + '"', 1),
                                guessedState.value === 0 ? (openBlock(), createBlock(_component_higher_button, {
                                  key: 0,
                                  onGuess: guess
                                })) : createCommentVNode("", true),
                                guessedState.value === 0 ? (openBlock(), createBlock(_component_lower_button, {
                                  key: 1,
                                  onGuess: guess
                                })) : createCommentVNode("", true),
                                guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                  key: 2,
                                  class: "text-white"
                                }, " has ")) : createCommentVNode("", true),
                                guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                  key: 3,
                                  class: "text-yellow-accent-3 text-h3 font-weight-bold mt-1"
                                }, toDisplayString(waifu2.value.likes), 1)) : createCommentVNode("", true),
                                guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                  key: 4,
                                  class: "text-white"
                                }, " likes ")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ]),
                          _: 1
                        }, 8, ["style"])) : createCommentVNode("", true)
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
              backgroundState.value === 1 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "bg2"
              })) : createCommentVNode("", true),
              createVNode(_component_v_row, { class: "ma-0 pa-0 fill-height" }, {
                default: withCtx(() => [
                  createVNode(Transition, {
                    name: "slide-left",
                    onAfterLeave
                  }, {
                    default: withCtx(() => [
                      show.value ? (openBlock(), createBlock(_component_v_col, {
                        key: 0,
                        xs12: "",
                        md6: "",
                        cols: "12",
                        xs: "12",
                        md: "6",
                        class: "ma-0 pa-0 bg1",
                        style: { "background-image": "url(" + waifu1.value.url + ")" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: [didLose.value ? "loseGameLeft flat d-flex flex-column align-center justify-center bg-transparent" : "flat d-flex flex-column align-center justify-center bg-transparent", `elevation-${0}`],
                            height: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                flat: "",
                                class: "bg-transparent justify-center d-flex flex-column fill-height"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-white text-h2 font-weight-bold mt-1" }, '"' + toDisplayString(waifu1.value.name) + '"', 1),
                                  createVNode("p", { class: "text-white" }, " has "),
                                  createVNode("p", { class: "text-yellow-accent-3 text-h3 font-weight-bold mt-1" }, toDisplayString(waifu1.value.likes), 1),
                                  createVNode("p", { class: "text-white" }, " likes ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card, {
                                flat: "",
                                class: "bg-transparent d-flex align-xl-start mt-auto"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-white font-weight-bold" }, [
                                    createTextVNode("Score: "),
                                    createVNode(_component_Score)
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ]),
                        _: 1
                      }, 8, ["style"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(Transition, { name: "slide-right" }, {
                    default: withCtx(() => [
                      show.value ? (openBlock(), createBlock(_component_v_col, {
                        key: 0,
                        xs12: "",
                        md6: "",
                        cols: "12",
                        xs: "12",
                        md: "6",
                        class: "ma-0 pa-0 bg1",
                        style: { "background-image": "url(" + waifu2.value.url + ")" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: [didLose.value ? "loseGameRight flat d-flex flex-column align-center justify-center bg-transparent" : "flat d-flex flex-column align-center justify-center bg-transparent", `elevation-${0}`],
                            height: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-white text-h2 font-weight-bold mt-2" }, '"' + toDisplayString(waifu2.value.name) + '"', 1),
                              guessedState.value === 0 ? (openBlock(), createBlock(_component_higher_button, {
                                key: 0,
                                onGuess: guess
                              })) : createCommentVNode("", true),
                              guessedState.value === 0 ? (openBlock(), createBlock(_component_lower_button, {
                                key: 1,
                                onGuess: guess
                              })) : createCommentVNode("", true),
                              guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                key: 2,
                                class: "text-white"
                              }, " has ")) : createCommentVNode("", true),
                              guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                key: 3,
                                class: "text-yellow-accent-3 text-h3 font-weight-bold mt-1"
                              }, toDisplayString(waifu2.value.likes), 1)) : createCommentVNode("", true),
                              guessedState.value === 1 ? (openBlock(), createBlock("p", {
                                key: 4,
                                class: "text-white"
                              }, " likes ")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ]),
                        _: 1
                      }, 8, ["style"])) : createCommentVNode("", true)
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
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/play_page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-361ee38b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const playState = ref(0);
    function homepage() {
      playState.value = 0;
    }
    function play() {
      playState.value = 1;
    }
    function end() {
      playState.value = 2;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_home = _sfc_main$6;
      const _component_end_page = __nuxt_component_1$1;
      const _component_play_page = __nuxt_component_2;
      if (playState.value === 0) {
        _push(ssrRenderComponent(_component_home, mergeProps({ onPlay: play }, _attrs), null, _parent));
      } else if (playState.value === 2) {
        _push(ssrRenderComponent(_component_end_page, mergeProps({
          onPlay: play,
          onHomepage: homepage
        }, _attrs), null, _parent));
      } else {
        _push(ssrRenderComponent(_component_play_page, mergeProps({ onEnd: end }, _attrs), null, _parent));
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

export { _sfc_main as default };
//# sourceMappingURL=index-219491c8.mjs.map
