<template>
  <div class="login-main">
    <div class="login-content">
      <span><img src="../../assets/img/BBTlogo.jpg" height="70" width="150"/></span>
      <div class="login-contents">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane>
            <span slot="label">登录</span>
            登录
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">注册</span>
            注册
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loginIn",
    data() {
      return {
        activeName: 'login'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped lang="less">
  .login-main {
    background: #f8fbfd;
    .login-content {
      margin-right: 150px;
      width: 352px;
      float: right;
      .login-contents {
        width: 350px;
        height: 400px;
        border: solid 1px #ccc;
        box-shadow: -4px 4px 3px #dbdbdb;
        background-color: #fff;
        .el-tabs{
          padding: 0 36%;
          .el-tabs__header{
            padding: 0 36%;
          }
          .el-tabs__nav-wrap:after{
            background-color: #fff;
          }
        }
      }
    }
  }
</style>
