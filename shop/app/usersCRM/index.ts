import {
    Store as VuexStore,
    DispatchOptions,
    CommitOptions,
    Module,
  } from 'vuex';
  
  import { RootState } from '@/app/store/index.d';
  
  import { state }  from './state';
  import { actions, Actions } from './actions';
  import { getters, Getters } from './getters';
  import { mutations, Mutations } from './mutations';
  
  import type { State } from './state';
  
  
  type Namespaced<T, N extends string> = {
    [P in keyof T & string as `${N}/${P}`]: T[P];
  };
  type NamespacedGetters = Namespaced<Getters, "usersCRM">;
  type NamespacedMutations = Namespaced<Mutations, "usersCRM">;
  type NamespacedActions = Namespaced<Actions, "usersCRM">;
  
  export const store: Module<State, RootState> = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
  };
  export type UserStore<S = State> = Omit<
    VuexStore<S>,
    "getters" | "commit" | "dispatch"
  > & {
    getters: {
      [K in keyof NamespacedGetters]: ReturnType<NamespacedGetters[K]>;
    };
  } & {
    commit<K extends keyof NamespacedMutations>(
      key: K,
      payload: Parameters<NamespacedMutations[K]>[1],
      options?: CommitOptions
    ): ReturnType<NamespacedMutations[K]>;
  } & {
    dispatch<K extends keyof NamespacedActions>(
      key: K,
      payload: Parameters<NamespacedActions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<NamespacedActions[K]>;
  };

export { State };
export const NAMESPACE = 'usersCRM'