<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    class="scroll-view"
    scroll-y
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    @refresherrefresh="onRefresherrefresh"
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<script lang="ts" setup>
import {
  getHomeBannerAPI,
  getHomeCategoryAPI,
  getHomeHotAPI,
} from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/components'
import PageSkeleton from './components/PageSkeleton.vue'

/** 轮播图数据 */
const bannerList = ref<BannerItem[]>([])
/** 获取轮播图数据 */
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

/** 前台分类数据 */
const categoryList = ref<CategoryItem[]>([])
/** 获取前台分类数据 */
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

/** 热门推荐数据 */
const hotList = ref<HotItem[]>([])
/** 获取热门推荐数据 */
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

/** 是否加载中 */
const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
  ])
  isLoading.value = false
})

/** 获取猜你喜欢组件实例 */
const guessRef = ref<XtxGuessInstance>()
/** 滚动触底回调 */
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
/** 下拉刷新状态 */
const isTriggered = ref(false)
/** 下拉刷新回调 */
const onRefresherrefresh = async () => {
  isTriggered.value = true
  // 重置猜你喜欢组件的数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  isTriggered.value = false
}
</script>

<style lang="scss">
page {
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  height: 100%;
}

.scroll-view {
  flex: 1;
}
</style>
