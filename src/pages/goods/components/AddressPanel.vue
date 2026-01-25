<template>
  <view class="address-panel">
    <!-- 关闭按钮 -->
    <text class="close icon-close" @tap="emit('close')"></text>
    <!-- 标题 -->
    <view class="title">配送至</view>
    <!-- 内容 -->
    <view class="content">
      <view
        class="item"
        v-for="item in addressList"
        :key="item.id"
        @tap="selectedAddress = item"
      >
        <view class="user">{{ item.receiver }} {{ item.contact }}</view>
        <view class="address">{{ item.fullLocation }}{{ item.address }}</view>
        <text
          class="icon"
          :class="{
            'icon-checked': selectedAddress?.id === item.id,
          }"
        ></text>
      </view>
    </view>
    <view class="footer">
      <navigator
        hover-class="none"
        class="button secondary"
        url="/pagesMember/address-form/address-form"
        >新建地址</navigator
      >
      <view
        v-if="addressList.length > 0"
        class="button primary"
        @tap="onConfirmAddress"
        >确定</view
      >
    </view>
  </view>
</template>

<script setup lang="ts">
import { useAddress } from '@/composables/use-address'
import { useAddressStore } from '@/store/modules/address'
import type { AddressItem } from '@/types/address'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const emit = defineEmits<{
  (event: 'close'): void
}>()

const addressStore = useAddressStore()
/** 选择的地址 */
const selectedAddress = ref<AddressItem | null>(null)
/** 确定选择的地址 */
const onConfirmAddress = () => {
  if (!selectedAddress.value) {
    uni.showToast({
      icon: 'none',
      title: '请选择地址',
    })
    return
  }
  addressStore.changeSelectedAddress(selectedAddress.value)
  emit('close')
}

const { addressList, getMemberAddressData } = useAddress()

/** 初始化选中的地址 */
const initSelectAddress = async () => {
  await getMemberAddressData()
  // 默认选择默认地址，如果没有默认地址就不选择
  selectedAddress.value = addressStore.selectedAddress
    ? addressStore.selectedAddress
    : addressList.value.find((item) => item.isDefault) || null
}
onMounted(async () => {
  await initSelectAddress()
  uni.$on('updateAddress', initSelectAddress)
})
onBeforeUnmount(() => {
  uni.$off('updateAddress', initSelectAddress)
})
</script>

<style lang="scss">
.address-panel {
  padding: 0 30rpx;
  border-radius: 10rpx 10rpx 0 0;
  position: relative;
  background-color: #fff;
}

.title {
  line-height: 1;
  padding: 40rpx 0;
  text-align: center;
  font-size: 32rpx;
  font-weight: normal;
  border-bottom: 1rpx solid #ddd;
  color: #444;
}

.close {
  position: absolute;
  right: 24rpx;
  top: 24rpx;
}

.content {
  min-height: 300rpx;
  max-height: 540rpx;
  overflow: auto;
  padding: 20rpx;
  .item {
    padding: 30rpx 50rpx 30rpx 60rpx;
    background-size: 40rpx;
    background-repeat: no-repeat;
    background-position: 0 center;
    background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/locate.png);
    position: relative;
  }
  .icon {
    color: #999;
    font-size: 40rpx;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 0;
  }
  .icon-checked {
    color: #27ba9b;
  }
  .icon-ring {
    color: #444;
  }
  .user {
    font-size: 28rpx;
    color: #444;
    font-weight: 500;
  }
  .address {
    font-size: 26rpx;
    color: #666;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0 40rpx;
  font-size: 28rpx;
  color: #444;

  .button {
    flex: 1;
    height: 72rpx;
    text-align: center;
    line-height: 72rpx;
    margin: 0 20rpx;
    color: #fff;
    border-radius: 72rpx;
  }

  .primary {
    color: #fff;
    background-color: #27ba9b;
  }

  .secondary {
    background-color: #ffa868;
  }
}
</style>
