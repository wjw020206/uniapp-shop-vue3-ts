<template>
  <view class="my">
    <view>会员信息：{{ memeberStore.profile }}</view>
    <button
      @tap="
        memeberStore.setProfile({
          nickname: 'CodePencili',
        })
      "
      size="mini"
      type="primary"
      plain
    >
      保存用户信息
    </button>
    <button @tap="memeberStore.clearProfile" size="mini" type="primary" plain>
      清理用户信息
    </button>
  </view>
</template>

<script lang="ts" setup>
import { useMemeberStore } from '@/store'

const memeberStore = useMemeberStore()
</script>

<style lang="scss" scoped></style>
