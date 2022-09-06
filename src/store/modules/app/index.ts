import type { Commit } from 'vuex'
import { ActionTypes_APP, GetterTypes_APP, MutationTypes_APP } from './types'

const app = {
  state: {
    counter: 0,
    language: sessionStorage.getItem('language') || 'zh-CN',
    collapse: false,
    username: '',
  },
  mutations: {
    [MutationTypes_APP.SET_LANGUAGE]: (state: any, language: string) => {
      state.language = language
      sessionStorage.setItem('language', language)
    },
    [MutationTypes_APP.SET_COUNTER]: (state: any, n: number) => {
      state.counter += n
    },
    [MutationTypes_APP.SET_COLLAPSE]: (state: any, collapse: boolean) => {
      state.collapse = collapse
    },
    [MutationTypes_APP.SET_USERNAME]: (state: any, username: string) => {
      state.username = username
    },
  },
  actions: {
    [ActionTypes_APP.SET_LANGUAGE](context: { commit: Commit }, language: string) {
      context.commit(ActionTypes_APP.SET_LANGUAGE, language)
    },
  },
  getters: {
    [GetterTypes_APP.COUNTER](state: any): number {
      return state.counter
    },
    [GetterTypes_APP.LANGUAGE](state: any): string {
      return state.language
    },
    [GetterTypes_APP.COLLAPSE](state: any): string {
      return state.collapse
    },
    [GetterTypes_APP.USERNAME](state: any): string {
      return state.username
    },
  },
}

export default app
