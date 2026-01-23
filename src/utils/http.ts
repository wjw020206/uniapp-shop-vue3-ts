import { useMemeberStore } from '@/store'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

/** 拦截器配置 */
const httpInterceptor = {
  /** 请求发出前触发 */
  invoke(options: UniApp.RequestOptions) {
    // 非 http 开头的请求需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }

    // 配置请求超时时间，默认是 60 秒，调整为 10 秒
    options.timeout = 10 * 1000

    // 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }

    // 添加 token
    const memberStore = useMemeberStore()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const token = (memberStore.profile as any)?.token

    if (token) {
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}

/** 请求函数，支持泛型 */
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      /** 响应成功 */
      success(result) {
        if (result.statusCode >= 200 && result.statusCode < 300) {
          // 获取数据成功，调用 resolve 返回数据
          resolve(result.data as Data<T>)
        } else if (result.statusCode === 401) {
          // 401 错误，清理用户信息
          const memberStore = useMemeberStore()
          memberStore.clearProfile()
          // 跳转到登录页面
          uni.navigateTo({ url: '/pages/login/login' })
          reject(result)
        } else {
          // 处理其它错误
          uni.showToast({
            icon: 'none',
            title: (result.data as Data<T>).msg || '请求错误',
          })
          reject(result)
        }
      },
      /** 响应失败 */
      fail(error) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(error)
      },
    })
  })
}
