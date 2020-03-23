<template>
  <div class="m-geo">
    <!-- 位置 -->
    <div class="position">
      <i class="el-icon-location" />
      北京
      [
      <a href>佛山</a>
      <a href>顺德</a>
      <a href>南沙</a>
      ]
      <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
    </div>
    <!-- 登录/注册 -->
    <div class="m-user">
      <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
      <router-link class="resgister" :to="{name: 'register'}">注册</router-link>
    </div>
  </div>
</template>
