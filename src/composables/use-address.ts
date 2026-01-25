import { getMemberAddressAPI } from '@/services/address'
import type { AddressItem } from '@/types/address'
import { ref } from 'vue'

/** 收货地址相关逻辑 */
export const useAddress = () => {
  /** 收货地址列表数据 */
  const addressList = ref<AddressItem[]>([])

  /** 获取收货地址列表数据 */
  const getMemberAddressData = async () => {
    const res = await getMemberAddressAPI()
    addressList.value = res.result
  }

  return {
    getMemberAddressData,
    addressList,
  }
}
