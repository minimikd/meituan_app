<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot  />
    </el-row>
    <el-row>
      <hot />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/province.vue";
import hot from "@/components/changecity/hot.vue";
import Category from "@/components/changeCity/category.vue";
export default {
  components: {
    Province,
    hot,
    Category
  }
};
</script>

<style>
</style>