/** 登录参数 */
export type LoginParams = {
  /** code 通过 wx.login() 获取 */
  code: string
  /** 通过 getphonenumber 事件回调中获取 */
  encryptedData: string
  /** 通过 getphonenumber 事件回调中获取 */
  iv: string
}
