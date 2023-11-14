import { createStore } from 'vuex';
import { type RootState, type Store } from './index.d';
import { store as  usersModule, NAMESPACE as nameUserModule } from './usersCRM';

export const store = createStore<RootState>({
  modules: {
    [nameUserModule]: usersModule,
  },
});


// export const store = createStore<RootState>({
//   strict: !!isDevEnv,
//   modules: {
//       [NAMESPACE]: structure,
//       [PROJECT_NAMESPACE]: project,
//   },
// });
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
      $store: Store;
  }
}