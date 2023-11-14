import { type MutationTree } from "vuex";
import { MutationsTypes } from "./mutations-type";
import { type State } from "./state";

export type Mutations<S = State> = {
};

export const mutations: MutationTree<State> & Mutations = {
};
