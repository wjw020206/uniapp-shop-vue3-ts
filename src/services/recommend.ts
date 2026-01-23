import type { PageParams } from '@/types/global'
import type { RecommandResult } from '@/types/recommend'
import { http } from '@/utils/http'

type HotParams = PageParams & { subType?: string }

/** 通用的热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<RecommandResult>({
    method: 'GET',
    url,
    data,
  })
}
