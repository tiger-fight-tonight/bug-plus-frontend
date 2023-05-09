import { setCookie, removeCookie } from '@/utils/cookie';
import { State } from './state';
import axios from '@/utils/axios';
import { AuthorizedUser } from '@/api/auth';

export enum MutationNames {
  SET_AUTHORIZATION = 'setAuthorization',
  SET_USERINFO = 'setUserinfo',
  LOGOUT = 'logout'
}

const mutations = {
  [MutationNames.SET_AUTHORIZATION](state: State, value: string) {
    state.authorization = value;

    // Set authorization in cookie and axios global configuration
    if (value) {
      setCookie('authorization', value);
    } else {
      removeCookie('authorization');
    }
    axios.defaults.headers.common.Authorization = `Bearer ${value}`;
  },
  [MutationNames.SET_USERINFO](state: State, value: AuthorizedUser) {
    state.userinfo = value;
  },
  [MutationNames.LOGOUT](state: State, value: boolean) {
    state.logout = value;
    if (value) {
      removeCookie('token');
    }
  }
};

export default mutations;
