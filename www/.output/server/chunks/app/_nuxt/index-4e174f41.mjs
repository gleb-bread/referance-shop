import { o as defineStore } from '../server.mjs';

const State = {
  menuShow: false,
  subcategoriesShow: false,
  currectCategory: false,
  currectSubcategory: false,
  pageNow: "",
  menuTitle: ""
};
const getters = {
  getMenuShow(state) {
    return state.menuShow;
  },
  getMenuTitle(state) {
    return state.menuTitle;
  },
  getPageType(state) {
    return state.pageNow;
  },
  getSubcategoriesShow(state) {
    return state.subcategoriesShow;
  },
  getCurrectSubcategory(state) {
    return state.currectSubcategory;
  },
  getCurrectCategory(state) {
    return state.currectCategory;
  }
};
const actions = {
  setMenuShow(context, flag) {
    context.menuShow = flag;
  },
  setMenuTitle(context, str) {
    context.menuTitle = str;
  },
  setSubcategoriesShow(context, flag) {
    context.subcategoriesShow = flag;
  },
  setCurrectCategory(context, str, flag) {
    context.currectCategory = str;
    if (flag) {
      context.subcategoriesShow = true;
    }
  },
  setCurrectSubcategory(context, strOrFlag) {
    context.currectSubcategory = strOrFlag;
  }
};
const useMenuStore = defineStore("menu", {
  state: () => {
    return State;
  },
  getters,
  actions
});

export { useMenuStore as u };
//# sourceMappingURL=index-4e174f41.mjs.map
