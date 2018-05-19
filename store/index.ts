import {
  ActionTree,
  ActionContext,
  GetterTree,
  mapGetters,
  mapState,
} from 'vuex';
import {
  name as EndpointName,
  State as EndpointState,
} from './endpoints'
import {
  name as I18nName,
  State as I18nState,
} from './i18n'
import {
  name as MainName,
  State as MainState,
} from './main'
import {
  name as SponsorsName,
  State as SponsorsState,
} from './sponsors'
import {
  name as StaffsName,
  State as StaffsState,
} from './staffs'
import {
  name as TransportName,
  State as TransportState,
} from './transportation'

export type RootState = {
  [EndpointName]: EndpointState
  [I18nName]: I18nState
  [MainName]: MainState
  [SponsorsName]: SponsorsState
  [StaffsName]: StaffsState
  [TransportName]: TransportState
}

export interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(context: ActionContext<S, R>): void
}

const modulesNeedToBeInit = [
  MainName,
  SponsorsName,
  StaffsName,
  TransportName,
]

export const actions: Actions<{}, RootState> = {
  async nuxtServerInit({ dispatch }) {
    // We should init Endpoints first
    await dispatch(`${EndpointName}/nuxtServerInit`, { root: true })
    // Then we can load all datas parallelly
    await Promise.all(modulesNeedToBeInit.map((namespace) => (
      dispatch(`${namespace}/nuxtServerInit`, { root: true })
    )))
  }
}