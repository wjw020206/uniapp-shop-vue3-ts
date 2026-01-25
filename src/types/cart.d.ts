/** 购物车请求参数 */
export type CartParams = {
  /** skuId */
  skuId: string
  /** 数量 */
  count: number
}

/** 删除/清空购物车请求参数 */
export type DeleteCartParams = {
  /** 购物车的SKU ID数组 */
  ids: string[]
}

/** 修改购物车请求参数 */
export type PutCartParams = {
  /** 选中状态 */
  selected?: boolean
  /** 购物车数量 */
  count?: number
}

/** 购物车类型 */
export type CartItem = {
  /** 商品 ID */
  id: string
  /** SKU ID */
  skuId: string
  /** 商品名称 */
  name: string
  /** 图片 */
  picture: string
  /** 数量 */
  count: number
  /** 加入时价格 */
  price: string
  /** 当前的价格 */
  nowPrice: string
  /** 库存 */
  stock: number
  /** 是否选中 */
  selected: boolean
  /** 属性文字 */
  attrsText: string
  /** 是否为有效商品 */
  isEffective: boolean
}
