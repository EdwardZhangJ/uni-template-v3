<template>
  <view class="content center flex-col">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="text-red text-4">wwww</view>

    <van-button type="primary">Button</van-button>
  </view>
</template>

<script setup lang="ts">
const title = ref('Hello')
</script>

<style>
.logo {
  width: 200rpx;
  height: 200rpx;
  margin: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
