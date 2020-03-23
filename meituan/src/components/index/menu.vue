<template>
  <div class="m-menu">
    <!-- 左侧导航条 -->
    <dl class="nav" @mouseleave="menuleave">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuenter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <!-- 导航条内详情 -->
    <div class="detail" v-if="currendetail" @mouseenter="detailEnter()" @mouseleave="detailLeave">
      <template v-for="(item,index) in currendetail.children">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v,i) in item.children" :key="i + '_'+ v ">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currendetail: null,
      menuList: [
        {
          name: "美食",
          type: "food",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "代金券",
                "代金券",
                "代金券",
                "代金券",
                "代金券",
                "代金券",
                "代金券"
              ]
            }
          ]
        },
        {
          name: "外卖",
          type: "takeout",
          children: [
            {
              title: "外卖",
              children: [
                "代金外卖券",
                "外卖",
                "代金外卖券",
                "外卖",
                "代金券",
                "外卖",
                "代金券",
                "代金券"
              ]
            }
          ]
        },
        {
          name: "酒店",
          type: "hotel",
          children: [
            {
              title: "酒店",
              children: [
                "代金券",
                "酒店",
                "酒店",
                "代金券",
                "代金券",
                "酒店",
                "代金券",
                "代金券"
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    menuenter(i) {
      this.currendetail = i;
    },
    menuleave() {
      this.timer = setTimeout(() => {
        this.currendetail = null;
      }, 30);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.currendetail = null;
    }
  }
};
</script>

<style>
</style>