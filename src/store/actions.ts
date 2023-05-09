import { ActionTree } from 'vuex';
import { State } from './state';
import { MutationNames } from './mutations';

export enum ActionNames {
  SET_AUTHORIZATION = 'setAuthorization',
  SET_USERINFO = 'setUserinfo',
  LOGOUT = 'logout'
}

const actions: ActionTree<State, State> = {
  [ActionNames.SET_AUTHORIZATION]({ commit }, authInfo: string) {
    commit(MutationNames.SET_AUTHORIZATION, authInfo);
  },
  [ActionNames.SET_USERINFO]({ commit }, userinfo: object) {
    commit(MutationNames.SET_USERINFO, userinfo);
  },
  [ActionNames.LOGOUT]({ commit }, flag: boolean) {
    commit(MutationNames.LOGOUT, flag);
  }
};

export default actions;
