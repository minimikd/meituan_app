<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      class="province"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      class="city"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select.vue";
export default {
  data() {
    return {
      searchWord: "",
      provinceList: ["北京", "上海", "湖北", "安徽", "广东"],
      cityList: ["城区", "五道口", "", "安徽", "广东"],
      provinceActive: false,
      cityActive: false,
      province: "省份",
      city: "城市",
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      loading: false,
      cityDisabled: true
    };
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      console.log(flag, "as");
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changeCity(item) {
      this.city = item.name;
      // this.$store.dispatch("setPosition", item);
      // this.$router.push({ name: "index" });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
