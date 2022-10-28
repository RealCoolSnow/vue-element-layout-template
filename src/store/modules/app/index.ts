import type { Commit } from 'vuex'
import { ActionTypes_APP, GetterTypes_APP, MutationTypes_APP } from './types.d'

export interface AppState {
  counter: number
  language: string
  collapse: boolean
  username: string
}

const app = {
  state: {
    counter: 0,
    language: sessionStorage.getItem('language') || 'zh-CN',
    collapse: false,
    username: '',
  } as AppState,
  mutations: {
    [MutationTypes_APP.SET_LANGUAGE]: (state: AppState, language: string) => {
      state.language = language
      sessionStorage.setItem('language', language)
    },
    [MutationTypes_APP.SET_COUNTER]: (state: AppState, n: number) => {
      state.counter += n
    },
    [MutationTypes_APP.SET_COLLAPSE]: (state: AppState, collapse: boolean) => {
      state.collapse = collapse
    },
    [MutationTypes_APP.SET_USERNAME]: (state: AppState, username: string) => {
      state.username = username
    },
  },
  actions: {
    [ActionTypes_APP.SET_LANGUAGE](
      context: { commit: Commit },
      language: string,
    ) {
      context.commit(ActionTypes_APP.SET_LANGUAGE, language)
    },
  },
  getters: {
    [GetterTypes_APP.COUNTER](state: AppState): number {
      return state.counter
    },
    [GetterTypes_APP.LANGUAGE](state: AppState): string {
      return state.language
    },
    [GetterTypes_APP.COLLAPSE](state: AppState): boolean {
      return state.collapse
    },
    [GetterTypes_APP.USERNAME](state: AppState): string {
      return state.username
    },
  },
}

export default app
