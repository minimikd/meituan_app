<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <!-- 商品区 -->
    <!-- 有格调 -->
    <el-row>
      <el-col :span="24">
        <m-container :navList="iStyleList" />
      </el-col>
    </el-row>
    <!-- 猫眼电影 -->
    <el-row>
      <el-col :span="24">
        <m-container :navList="iSMove" />
      </el-col>
    </el-row>
    <!-- 推荐民宿 -->
    <el-row>
      <el-col :span="24">
        <m-container :navList="iSRoom" />
      </el-col>
    </el-row>
    <!-- 猜你喜欢 -->
    <el-row>
      <el-col :span="24">
        <m-container :navList="iSLike" />
      </el-col>
    </el-row>

    <!-- 美团导航 -->
    <el-row>
      <el-col :span="24">
        <m-navigation :navigationList="navigationList" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu";
import MLife from "@/components/index/life";
import MContainer from "@/components/index/container";
import MNavigation from "@/components/index/navigation";

export default {
  components: {
    MMenu,
    MLife,
    MContainer,
    MNavigation
  },
  data() {
    return {
      iStyleList: {
        class: "istyle",
        title: "有格调",
        list: [
          {
            kind: "all",
            name: "全部"
          }
          // {
          //   kind: "1",
          //   name: "约会聚餐"
          // },
          // {
          //   kind: "2",
          //   name: "丽人SPA"
          // }
        ]
      },
      iSMove: {
        class: "imove",
        title: "猫眼电影",
        list: [
          {
            kind: "all",
            name: "全部"
          },
          {
            kind: "1",
            name: "正在热映"
          },
          {
            kind: "2",
            name: "即将上线"
          }
        ]
      },
      iSRoom: {
        class: "iroom",
        title: "推荐名宿",
        list: [
          {
            kind: "all",
            name: "北京"
          },
          {
            kind: "1",
            name: "天津"
          },
          {
            kind: "2",
            name: "广州"
          },
          {
            kind: "3",
            name: "上海"
          },
          {
            kind: "4",
            name: "武汉"
          },
          {
            kind: "5",
            name: "贵阳"
          },
          {
            kind: "6",
            name: "哈尔冰"
          }
        ]
      },
      iSLike: {
        class: "ilike",
        title: "猜你喜欢",
        list: [
          {
            kind: "all",
            name: "为你甄选最合适的"
          }
        ]
      },
      // 美团导航
      navigationList: [
        {
          title: "热门城市",
          children: [
            "温州",
            "北京",
            "济南",
            "重庆",
            "常州",
            "东莞",
            "太原",
            "合肥",
            "西安",
            "武汉",
            "沈阳",
            "福州",
            "佛山",
            "贵阳",
            "南宁",
            "大连",
            "石家庄",
            "成都",
            "长春",
            "宁波"
          ]
        },
        {
          title: "热门分类",
          children: [
            "酒店",
            "美食",
            "休闲娱乐",
            "运动健身",
            "生活服务",
            "上门服务",
            "购物",
            "时尚购",
            "本地购物",
            "结婚",
            "摄影写真",
            "宴会",
            "丽人",
            "母婴亲子",
            "学习培训",
            "家装",
            "汽车服务",
            "医疗",
            "宠物"
          ]
        },
        {
          title: "周边热门",
          children: [
            " 芜湖酒店",
            "含山美食",
            "含山休闲娱乐",
            "含山运动健身",
            "马鞍山生活服务",
            "含山上门服务",
            "含山购物",
            "芜湖时尚购",
            "马鞍山本地购物",
            "含山结婚",
            "芜湖摄影写真",
            "马鞍山宴会",
            "马鞍山丽人",
            "含山母婴亲子",
            "芜湖学习培训",
            "马鞍山家装",
            "马鞍山汽车服务",
            "芜湖医疗",
            "马鞍山宠物"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>