import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'

/** 获取首页轮播图
 * @param distributionSite 广告区域展示位置（1 为首页，2 为分类商品页）
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
