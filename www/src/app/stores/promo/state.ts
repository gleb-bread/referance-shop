import { PromoType, PromoLoadingType } from "../types";
import { ObserverRequest } from "@/app/core/requestObserver";

export interface Store {
    promos: PromoType[],
    observerRequest: ObserverRequest<PromoLoadingType>,
}

export const State: Store = {
    promos: [] as PromoType[],
    observerRequest: new ObserverRequest<PromoLoadingType>(),
}
