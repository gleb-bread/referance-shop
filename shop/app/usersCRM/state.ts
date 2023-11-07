import { UserNames, UserInfo, Rights } from '../types';

export type State = {
  userNames: {[key: string]: UserNames};
  userInfo:  UserInfo;
  userRights:  Rights
}

export const state: State = {
  userNames: {} as {[key: string]: UserNames},
  userInfo: {} as UserInfo,
  userRights: {} as Rights
};
