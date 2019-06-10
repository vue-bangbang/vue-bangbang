<template>
  <div style="margin: 0 auto">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <img src="../../assets/img/BBTlogo.jpg"/>
      <el-menu-item v-for="(item,index) of navs" :key="index" :index="item.number + ''">
        <router-link :to="{path: item.path}">
            {{item.name}}
        </router-link>
      </el-menu-item>
      <div class="el-logins">
        <i class="el-icon-user"></i>
      </div>
      <i class="el-icon-arrow-down el-left"></i>
      <el-button size="mini" round>超小按钮</el-button>
      <span class="el-left el-layout">[退出]</span>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'headerAll',
  data () {
    return {
      navs: [
        {number: 1, name: '首页', path: '/'},
        {number: 2, name: '组队CP', path: '/CpGroup'},
        {number: 3, name: '学习日记', path: '/LearningDiary'},
        {number: 4, name: '打卡记录', path: '/ClockIn'},
        {number: 5, name: '练习项目', path: '/PracticeProject'},
        {number: 6, name: '就业模式', path: '/EmploymentPattern'},
        {number: 7, name: '代练模块', path: '/CodeModules'}
      ],
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  .el-menu-demo{
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
    }
    img {
      margin-right: 20px;
      width: 5%;
      height: 5%;
    }
    i{
      display: flex;
      align-items: center;
      .el-left{
        margin-left: 5px;
      }
    }
    .el-logins{
      margin: 20px 5px 20px 50px;
      display: flex;
      width:20px;
      height: 20px;
      border:solid 1px #909399;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
    }
    .el-button{
      padding: 10px;
      height: 30px;
      margin: 15px;
    }
    .el-layout{
      padding: 20px 0;
    }
  }
</style>
