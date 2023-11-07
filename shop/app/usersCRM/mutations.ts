import { MutationTree } from "vuex";
import { LeadsMutationsTypes } from "./mutations-type";
import { UserNames, Rights, UserInfo } from '../types';
import { State } from "./state";

export type Mutations<S = State> = {
  [LeadsMutationsTypes.setUsersName](state: S, params: {[key: string]: UserNames}): void;
  [LeadsMutationsTypes.setUserInfo](state: S, params: UserInfo): void;
  [LeadsMutationsTypes.setUserRight](state: S, params: Rights): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [LeadsMutationsTypes.setUsersName](state, params) {
    state.userNames = params;
  },

  [LeadsMutationsTypes.setUserInfo](state, params){
    state.userInfo = params;
  },

  [LeadsMutationsTypes.setUserRight](state, params){
    state.userRights = {...state.userRights, ...params};
  }
};
