<template>
  <div class="m-navigation">
    <nav class="m-nav">
      <div class="title">美团导航</div>
      <dl class="b-n-content" v-for="(item,index) in navigationList" :key="index">
        <div class="b-n-classification">
          <dt class="b-n-subtitle">{{item.title}}</dt>
          <div class="city-list">
            <dd class="city-list-item" v-for="i in item.children" :key="i">
              <a href="#" title="i">{{i}}</a>
            </dd>
          </div>
        </div>
      </dl>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["navigationList"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index/navigation.scss";
</style>