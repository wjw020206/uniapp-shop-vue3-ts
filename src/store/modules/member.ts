import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMemeberStore = defineStore(
  'member',
  () => {
    /** 会员信息 */
    const profile = ref(null)

    /** 保存会员信息 */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setProfile = (value: any) => {
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
