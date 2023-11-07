import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '@/app/store/index.d';
import { State } from './state';
import { Mutations } from './mutations';
import { LeadsActionTypes } from './action-types';

import checkStatus from '@/shared/api/checkStatus';
import { getUsersNames, getUserInfo } from '@/shared/api/users/getUsersNames';
import { LeadsMutationsTypes } from './mutations-type';
import { UserNames, Rights, UserInfo } from '../types';



type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  [LeadsActionTypes.getUsers]({ commit, state }: AugmentedActionContext): void;
  [LeadsActionTypes.getUserInfo]({ commit, state}: AugmentedActionContext, right: keyof Rights): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [LeadsActionTypes.getUsers]({commit, state}) {
    if(!Object.keys(state.userNames).length){
      let responce = await getUsersNames();
      if(checkStatus(responce)){
          commit(LeadsMutationsTypes.setUsersName, responce.data as {[key: string]: UserNames});
      } else {
          console.error('Error leads load');
      }
    }
  },
  async [LeadsActionTypes.getUserInfo]({commit,state}, right){
    if(state.userRights[right as keyof Rights] === undefined || !Object.keys(state.userInfo).length){
      let responce = await getUserInfo(right);
      if(checkStatus(responce)){
        commit(LeadsMutationsTypes.setUserInfo, responce.data);
        //@ts-ignore
        commit(LeadsMutationsTypes.setUserRight, {[right as keyof Rights]: (responce.data as UserInfo).isRight});
      }
    }
  }
};
