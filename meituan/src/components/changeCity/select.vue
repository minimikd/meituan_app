<template>
  <div class="choose-wrap" @click="showWrapper">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class='mt-content'>
        <h2>{{title}}</h2>
        <div class="wrapper">  
          <div class="col">
            <span
            class="mt-item"
              v-for="(item, index) in listData"
              :key="index"
              @click="changeValue(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   showWrapperActive: true
    };
  },
  props: [
    "list",
    "title",
    "value",
    "showWrapperActive",
    "disabled",
    "className"
  ],
//   computed: {
//     renderList: function() {
//       let col = Math.ceil(this.list.length / 12);
//       let resultList = [];
//       for (var i = 0; i < col; i++) {
//         let data = this.list.slice(i * 12, i * 12 + 12);
//         resultList.push(data);
//       }
//       return resultList;
//     }
//   },
  methods: {
    showWrapper(e) {
    //   e.stopPropagation();
    //   if (!this.disabled) {
    //     this.$emit("change_active", true);
    //   }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
