import type { XtxGuessInstance } from '@/types/components'
import { ref } from 'vue'

/** 猜你喜欢下拉加载相关逻辑 */
export const useGuessList = () => {
  /** 猜你喜欢组件实例 */
  const guessRef = ref<XtxGuessInstance>()
  /** 滚动触底回调 */
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrolltolower,
  }
}
