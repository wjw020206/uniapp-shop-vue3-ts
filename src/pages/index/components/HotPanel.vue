<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator
        hover-class="none"
        :url="`/pages/recommend/recommend?type=${item.type}`"
        class="cards"
      >
        <image
          class="image"
          mode="aspectFit"
          v-for="src in item.pictures"
          :src="src"
          :key="src"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { HotItem } from '@/types/home'

defineProps<{
  list: HotItem[]
}>()
</script>

<style lang="scss" scoped>
@import '../styles/hot.scss';
</style>
