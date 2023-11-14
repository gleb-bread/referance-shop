import { UserStore, State as userState, NAMESPACE as userNamespace } from './usersCRM/index';

export type RootState = {
  [userNamespace]: userState,
};

export type Store = 
  UserStore<Pick<RootState, 'usersCRM'>> 