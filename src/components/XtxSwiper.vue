<template>
  <view class="carousel">
    <swiper
      :circular="true"
      :autoplay="false"
      :interval="3000"
      @change="onChange"
    >
      <swiper-item v-for="item in list" :key="item.id">
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{
          active: index === activeIndex,
        }"
      ></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

defineProps<{
  list: BannerItem[]
}>()

/** 当前展示轮播图的下标 */
const activeIndex = ref(0)

/** 轮播图切换回调 */
const onChange: UniHelper.SwiperOnChange = (event) => {
  activeIndex.value = event.detail.current
}
</script>

<style lang="scss" scoped>
@import './styles/XtxSwiper.scss';
</style>
