import { GetterTree } from 'vuex';
import type { UserNames, UserInfo, Rights } from '@/app/store/types';
import { RootState } from '@/app/store/index.d';
import { State } from './state';

export type Getters = {
  getUsersName(state: State): {[key: string]: UserNames};
  getAllRight(state: State): Rights;
  getUserInfo(state: State): UserInfo;
}

export const getters: GetterTree<State, RootState> & Getters = {
  getUsersName: function(state) { return state.userNames},
  getAllRight: function(state) {return state.userRights},
  getUserInfo: function(state){return state.userInfo},
};
