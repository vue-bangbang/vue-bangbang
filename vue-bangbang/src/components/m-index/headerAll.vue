<template>
  <div style="margin: 0 auto">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <template v-for="(item) of navs">
        <el-menu-item :index="item.number + ''">{{item.name}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "headerAll",
    data() {
      return {
        navs:[
          {number:1,name:'首页'},
          {number:2,name:'组队CP'},
          {number:3,name:'学习日记'},
          {number:4,name:'打卡记录'},
          {number:5,name:'练习项目'},
          {number:6,name:'就业模式'},
          {number:7,name:'代练模块'}
        ],
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {

    }
  }
</script>

<style scoped>
  .el-menu-demo{
    display: flex;
    justify-content: center;
  }
</style>
