import { type ActionTree, type ActionContext } from 'vuex';
import { type RootState } from '@/app/index.d';
import { type State } from './state';
import { type Mutations } from './mutations';
import { LeadsActionTypes } from './action-types';

import { type MutationsTypes } from './mutations-type';



type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
}

export const actions: ActionTree<State, RootState> & Actions = {
  
};
