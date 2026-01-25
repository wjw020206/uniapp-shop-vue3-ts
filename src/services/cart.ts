import type { CartParams } from '@/types/cart'
import { http } from '@/utils/http'

/** 加入购物车
 * @param data 请求体参数
 */
export const postMemberCartAPI = (data: CartParams) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}
