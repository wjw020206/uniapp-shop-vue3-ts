<template>
  <view class="login">
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
    <button @tap="getData" size="mini" type="primary" plain>测试请求</button>
  </view>
</template>

<script lang="ts" setup>
import { useMemeberStore } from '@/store'
import { http } from '@/utils/http'

const memeberStore = useMemeberStore()

const getData = async () => {
  const result = await http<string[]>({
    method: 'GET',
    url: '/member/profile',
  })

  console.log('请求成功的结果', result)
}
</script>

<style lang="scss" scoped></style>
