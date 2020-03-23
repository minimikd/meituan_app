<template>
  <div class="m-istyle">
    <!-- 商品标题 -->
    <dl @mouseover="over" :class="navList.class">
      <dt>{{navList.title}}</dt>
      <dd
        v-for="(item,index) in navList.list"
        :key="index"
        :class="{active: type == item.kind}"
        :data-type="item.kind"
      >{{item.name}}</dd>
      <!-- <dd :class="{active:kind=='1'}" data-kind="1">约会聚餐</dd>
      <dd :class="{active:kind=='2'}" data-kind="2">丽人SPA</dd>-->
    </dl>
    <!-- 商品展示列表 -->
    <ul class="ibody">
      <li v-for="(item,index) in foodList" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img
            :src= item.url
            class="image"
          />
          <div class="cbody">
            <div class="title">{{item.name}}</div>
            <div class="sub-title">{{item.sub}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.prePrice}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["navList"],
  data() {
    return {
      type: "all",
      foodList:[
        {
          url:'https://p0.meituan.net/deal/5b60279105ba369b02944761053a9e2a101046.jpg@368w_208h_1e_1c',
          name:'好再来西饼屋',
          sub:'十英寸一个蛋糕，很实惠',
          price:190,
          prePrice:230,
          address:'北京'
        },
         {
          url:'https://p1.meituan.net/mogu/9b049b136dc991bd4a5af6cb2dd32b70163295.jpg@368w_208h_1e_1c',
          name:'榴芒e族',
          sub:'很酸很甜很好吃',
          price:190,
          prePrice:230,
          address:'武汉'
        },
         {
          url:'https://p0.meituan.net/deal/fc3c663962d4d0cdedcd951d5a6c0a211675235.jpg@368w_208h_1e_1c',
          name:'希恩西北',
          sub:'十英寸一个蛋糕，很实惠',
          price:10,
          prePrice:30,
          address:'上海'
        },
         {
          url:'https://p0.meituan.net/scarlett/0938786f28888cfcebdf59de23f87dd394965.png@368w_208h_1e_1c',
          name:'COSTA COFFEE（大湖花园天地店',
          sub:'[18元早餐]',
          price:110,
          prePrice:130,
          address:'山就'
        },
         {
          url:'https://p0.meituan.net/deal/5b60279105ba369b02944761053a9e2a101046.jpg@368w_208h_1e_1c',
          name:'好再来西饼屋',
          sub:'十英寸一个蛋糕，很实惠',
          price:190,
          prePrice:230,
          address:'长沙'
        },
         {
          url:'https://p0.meituan.net/deal/5b60279105ba369b02944761053a9e2a101046.jpg@368w_208h_1e_1c',
          name:'好再来西饼屋',
          sub:'十英寸一个蛋糕，很实惠',
          price:190,
          prePrice:230,
          address:'北京'
        },
      ]
    };
  },
  methods: {
    // 冒泡方法，获取到dd
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      // console.log(tagName);
      if (tagName != "dd") {
        return false;
      }
      this.type = dom.getAttribute("data-type");
      // 请求数据
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>