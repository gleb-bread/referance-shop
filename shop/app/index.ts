import { createStore } from 'vuex';
import { RootState, Store } from './index.d';
import { store as analPrModule } from './analPR';
import { store as  leadsModule, NAMESPACE as nameLeadsModule } from './leads';
import { store as  usersModule, NAMESPACE as nameUserModule } from './usersCRM';
import { store as priceModule, NAMESPACE as namePriceModule} from './price';
import { store as brandModule, NAMESPACE as nameBrandModule} from './brand';
import { store as ABCAnalyticModule, NAMESPACE as nameABCAnalytic} from './ABCAnalytic';

export const store = createStore<RootState>({
  modules: {
    analPr: analPrModule,
    [nameLeadsModule]: leadsModule,
    [nameUserModule]: usersModule,
    [namePriceModule]: priceModule,
    [nameBrandModule]: brandModule,
    [nameABCAnalytic]: ABCAnalyticModule,
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