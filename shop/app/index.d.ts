import { analPrStore, State as analPrState } from './analPR/index';
import { LeadStore, State as leadState } from './leads/index';
import { UserStore, State as userState } from './usersCRM/index';
import { PriceStore, State as priceState } from './price/index';
import { BrandStore, State as brandState } from './brand/index';
import { ABCAnalyticStore, State as ABCAnalyticState } from './ABCAnalytic/index';

export type RootState = {
  analPR: analPrState,
  leads: leadState,
  users: userState,
  price: priceState,
  brand: brandState,
  ABCAnalytic: ABCAnalyticState,
};

export type Store = analPrStore<Pick<RootState, 'analPR'>> &
  LeadStore<Pick<RootState, 'leads'>> & 
  UserStore<Pick<RootState, 'usersCRM'>> & 
  PriceStore<Pick<RootState, 'price'>> &
  BrandStore<Pick<RootState, 'brand'>> &
  ABCAnalyticStore<Pick<RootState, 'ABCAnalytic'>>