<template>
  <div class="layout-default">
    <el-container>
      <el-header height="100%">
        <!-- 头部导航栏 -->
        <my-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="100%">
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/header/index";
import MyFooter from "@/components/footer/index";

export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/public/layout.scss";
</style>
