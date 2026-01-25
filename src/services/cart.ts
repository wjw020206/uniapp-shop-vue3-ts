import type {
  CartItem,
  CartParams,
  DeleteCartParams,
  PutCartParams,
} from '@/types/cart'
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

/** 获取购物车列表
 */
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

/** 删除/清空购物车单品
 * @param data 请求体参数
 */
export const deleteMemberCartAPI = (data: DeleteCartParams) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}

/** 删除/清空购物车单品
 * @param skuId SKU id
 * @param data 请求体参数
 */
export const putMemberCartBySkuIdAPI = (skuId: string, data: PutCartParams) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

/** 购物车全选/取消全选
 * @param selected 是否全选
 */
export const putMemberCartSelectedAPI = (selected: boolean) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data: {
      selected,
    },
  })
}
