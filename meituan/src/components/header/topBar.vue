<template>
    <el-row class="m-header-topbar m-header">
      <el-col :span="10">
        <!-- 地理位置 -->
         <geo />
      </el-col>
      <el-col :span="14">
        <my-nav />
      </el-col>
    </el-row>
</template>

<script>
import Geo from './geo'
import MyNav from './nav'

export default {
  components: {
    Geo,
    MyNav
  }
}
</script>

<style lang="scss" >
@import "@/assets/css/public/header/topbar.scss";
</style>
