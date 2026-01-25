import type {
  OrderCreateParams,
  OrderCreateResult,
  OrderPreNowParams,
  OrderPreResult,
} from '@/types/order'
import { http } from '@/utils/http'

/**
 * 填写订单-获取预付订单
 * @returns
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 * @returns
 */
export const getMemberOrderPreNowAPI = (data: OrderPreNowParams) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

/**
 * 提交订单
 * @returns
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<OrderCreateResult>({
    method: 'POST',
    url: '/member/order/',
    data,
  })
}
