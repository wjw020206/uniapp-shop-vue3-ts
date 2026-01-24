import type { LoginResult } from '@/types/member'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMemeberStore = defineStore(
  'member',
  () => {
    /** 会员信息 */
    const profile = ref<LoginResult | null>(null)

    /** 保存会员信息
     * @param value 会员信息
     */
    const setProfile = (value: LoginResult) => {
      profile.value = value
    }

    /** 清空会员信息 */
    const clearProfile = () => {
      profile.value = null
    }

    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  {
    // 小程序端持久化存储配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
