import { AuthorizedUser } from '@/api/auth';
export interface State {
  authorization: string;
  userinfo: AuthorizedUser;
  logout: boolean;
}

const state: State = {
  authorization: 'initialValue',
  userinfo: {
    uid: 0,
    username: '未登录',
    avatar: ''
  },
  logout: false
};

export default state;
