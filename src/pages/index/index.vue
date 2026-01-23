<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CategoryPanel :list="categoryList" />
  <!-- 热门推荐 -->
  <HotPanel :list="hotList" />
  <view class="index"></view>
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

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
