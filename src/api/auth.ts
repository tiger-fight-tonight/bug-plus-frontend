import axios from '@/utils/axios';
import { APIResponse } from '@/api';

//登录
export async function login(
  code: string,
  agentId: number,
  debug?: string
): APIResponse<{ token: string }> {
  const data = { code, agentId, debug };
  const res = await axios.post('/api/login', data);
  return res.data;
}

export interface AuthorizedUser {
  uid?: number;
  username?: string;
  avatar?: string;
}
//获取用户信息
export async function getAuthorizedUserInfo(): APIResponse<AuthorizedUser> {
  const res = await axios.get('/api/user/info');
  return res && res.data;
}

//登出
export async function logout(): APIResponse<boolean> {
  const res = await axios.post('/api/user/log_out');
  return res && res.data;
}
