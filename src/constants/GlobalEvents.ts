enum GlobalEvents {
  ALERT = 'global:alert',

  //授权事件（完成新授权、加载本地缓存的授权信息）
  AUTHORIZED = 'global:authorized',

  //未授权事件（接口返回401异常）
  UNAUTHORIZED = 'global:unauthorized'
}

export default GlobalEvents;
