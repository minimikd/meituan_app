<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <!-- logo -->
      <el-col :span="3" class="left">
        <router-link to="/index">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
        </router-link>
      </el-col>
      <!-- 搜索区 -->
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" @focus="focus" @blur="blur" placeholder="请输入内容"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <!-- 搜索框内推荐 -->
          <!-- 聚焦 -->
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门热搜</dt>
            <dd v-for="(item,index ) in hotPlaceList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>

          <!-- 搜索展示  -->
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index)  in searchList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <!-- 底部推荐 -->
        <p class="suggest">
          <a href v-for="item in suggests" :key="item">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
      // isHotPlace: false,
      // isSearchList: false,
      isFocus: false, //input中自带的属性
      hotPlaceList: [
        "上海",
        "北京八达岭",
        "世纪公园",
        "田景国际",
        "中海公园",
        "世纪城"
      ],
      searchList: ["火锅", "东山口", "珠江公园", "长山椒", "动物园", "先导"],
      suggests: [
        "好利来",
        "星空影城",
        "自助餐",
        "好利",
        "星空",
        "自助",
        "兵力汽车",
        "飞侠"
      ]
    };
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 30);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>
