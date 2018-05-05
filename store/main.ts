import Vue from 'vue'
import {
  ActionContext,
  ActionTree,
  MutationTree,
} from 'vuex'
import {
  RootState,
} from '.'
import {
  name as endpointStateName,
} from './endpoints'

export const name = 'main'

export const types = {
  UPDATE: 'update'
}

export type State = Object

export const state = (): State => ({})

export interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(context: ActionContext<S, R>): void
  fetchData(context: ActionContext<S, R>): void
}

export const actions: Actions<State, RootState> = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchData')
  },

  async fetchData({ commit, rootState }) {
    const endpoint = rootState[endpointStateName].main
    const response = await fetch(endpoint)
    const datas = await response.json()

    commit(types.UPDATE, datas)
  }
}

export const mutations: MutationTree<State> = {
  [types.UPDATE](state, datas) {
    Object.entries(datas).forEach(([key, value]) => (state[key] = value))
  }
}
