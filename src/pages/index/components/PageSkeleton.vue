<template name="skeleton">
  <view class="sk-container">
    <view>
      <view class="carousel XtxSwiper--carousel">
        <swiper circular :interval="3000" :current="0" :autoplay="false">
          <swiper-item
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              transform: translate(0%, 0px) translateZ(0px);
            "
          >
            <navigator
              class="navigator XtxSwiper--navigator"
              hover-class="none"
            >
              <image
                class="image XtxSwiper--image sk-image"
                mode="aspectFill"
              ></image>
            </navigator>
          </swiper-item>
        </swiper>
        <view class="indicator XtxSwiper--indicator">
          <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
        </view>
      </view>
    </view>
    <view>
      <view
        class="category CategoryPanel--category data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
      >
        <navigator
          class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          hover-class="none"
        >
          <image
            class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
          ></image>
          <text
            class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-766 sk-text"
            >居家</text
          >
        </navigator>
        <navigator
          class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          hover-class="none"
        >
          <image
            class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
          ></image>
          <text
            class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-634 sk-text"
            >锦鲤</text
          >
        </navigator>
        <navigator
          class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          hover-class="none"
        >
          <image
            class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
          ></image>
          <text
            class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-18 sk-text"
            >服饰</text
          >
        </navigator>
        <navigator
          class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          hover-class="none"
        >
          <image
            class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
          ></image>
          <text
            class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-756 sk-text"
            >母婴</text
          >
        </navigator>
        <navigator
          class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          hover-class="none"
        >
          <image
            class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
          ></image>
          <text
            class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-905 sk-text"
            >个护</text
          >
        </navigator>
        <navigator
          class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          hover-class="none"
        >
          <image
            class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
          ></image>
          <text
            class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-478 sk-text"
            >严选</text
          >
        </navigator>
        <navigator
          class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          hover-class="none"
        >
          <image
            class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
          ></image>
          <text
            class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-33 sk-text"
            >数码</text
          >
        </navigator>
        <navigator
          class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          hover-class="none"
        >
          <image
            class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
          ></image>
          <text
            class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-556 sk-text"
            >运动</text
          >
        </navigator>
        <navigator
          class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          hover-class="none"
        >
          <image
            class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
          ></image>
          <text
            class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-879 sk-text"
            >杂项</text
          >
        </navigator>
        <navigator
          class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          hover-class="none"
        >
          <image
            class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
          ></image>
          <text
            class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-764 sk-text"
            >品牌</text
          >
        </navigator>
      </view>
    </view>
    <view>
      <view
        class="panel HotPanel--panel hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a"
      >
        <view
          class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <view
            class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
          >
            <text
              class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-57 sk-text"
              >特惠推荐</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-124 sk-text"
              >精选全攻略</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view
          class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <view
            class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
          >
            <text
              class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-375 sk-text"
              >爆款推荐</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-339 sk-text"
              >最受欢迎</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view
          class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <view
            class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
          >
            <text
              class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-462 sk-text"
              >一站买全</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-329 sk-text"
              >精心优选</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view
          class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <view
            class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
          >
            <text
              class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-985 sk-text"
              >新鲜好物</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-387 sk-text"
              >生活加分项</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
      </view>
    </view>
    <view class="r r">
      <view
        class="caption XtxGuess--caption data-v-e94a02da XtxGuess--data-v-e94a02da"
      >
        <text
          class="text XtxGuess--text data-v-e94a02da XtxGuess--data-v-e94a02da sk-transparent sk-text-0-0000-274 sk-text sk-pseudo sk-pseudo-circle"
          >猜你喜欢</text
        >
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-7 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-449 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-766 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-634 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-18 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-756 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-905 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-478 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-33 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-556 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-879 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-764 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-57 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-124 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-375 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-339 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-462 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-329 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-985 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-387 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-274 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
