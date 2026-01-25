import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  /** 选中的地址 */
  const selectedAddress = ref<AddressItem | null>(null)

  /** 改变选中的地址 */
  const changeSelectedAddress = (value: AddressItem) => {
    selectedAddress.value = value
  }

  /** 重置选中的地址 */
  const reset = () => {
    selectedAddress.value = null
  }

  return {
    selectedAddress,
    changeSelectedAddress,
    reset,
  }
})
