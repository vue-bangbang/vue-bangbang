<template>
  <div>
    <div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
          <img :src="item.src" :alt="index">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-content">
      <div class="home-contents">
        <div class="home-contents_one">
          <label>
            <i class="el-icon-connection"></i>
            <label>实战演练</label>
            <i class="el-icon-connection"></i>
          </label>
          <div class="home-contents_ones">
            <div class="home-contents_onesL">
            </div>
            <div class="home-contents-oneR">
              <p>VUE后台管理项目</p>
              <p>技术栈： xx</p>
              <p>代练价格：10/元练一次</p>
              <p>代练时间：晚上8点开始练完为止</p>
              <p>
                <el-button type="danger" round>查看详情</el-button>
              </p>
            </div>
          </div>
        </div>
        <div class="block home-contents_two">
          <div class="demonstration">帮帮团学习日程表</div>
<!--          <el-calendar v-model="value">-->
<!--          </el-calendar>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MIndex",
    data() {
      return {
        carouselImg: [
          {'src': 'http://pic37.nipic.com/20140113/8800276_184927469000_2.png'},
          {'src': 'http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg'},
          {'src': 'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg'},
          {'src': 'http://pic24.nipic.com/20120922/10898738_143746326185_2.jpg'}
        ],
        value: new Date()
      };
    }
  }
</script>

<style scoped lang="less">
  .el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 350px;
    margin: 0;
    border: solid 1px #333;
    width: 100%;
    height: 100%;
  }
  .home-content {
    display: flex;
    flex: 6;

    .home-contents {
      display: flex;
      width: 100%;
      height: 300px;
      border: solid 1px #000;

      .home-contents_one {
        margin: 0 60px;
        padding: 20px 0;
        flex: 4;
        border: solid 1px #000;
        background: linear-gradient(top, #fff, #dbdbdb);
        .home-contents_ones {
          margin: 0 15px;
          padding: 10px 0;
          display: flex;
          width: auto;
          height: 90%;
          background: #fff;
          box-shadow: -6px 4px 3px #c6c6c6;
          align-items: center;
          .home-contents_onesL{
            margin: 10px 30px;
            width: 180px;
            height: 180px;
            align-items: center;
            border: solid 1px #000;
          }
          .home-contents-oneR{
            align-items: center;
            text-align: left;
            padding: 0 50px;
            p:first-child{
              padding-bottom: 30px;
            }
            p:last-child{
              .el-button--danger {
                color: #FFF;
                background-color: #ff7d4b;
                border-color: #ff7d4b;
              }
              text-align: right;
              .is-round{
                padding: 8px 50px;
              }
            }
          }
        }
      }
      .home-contents_two{
        margin: 0 60px;
        padding: 0 30px;
        flex: 1;
        border: solid 1px #000;
        box-shadow: 2px 2px 3px #dbdbdb;
        .demonstration{
          margin-top: 5px;
          color: #FFF;
          background-color: #ff7d4b;
          border-color: #ff7d4b;
          border-radius: 5px 5px 0 0;
        }
      }
    }
  }
  .el-calendar{
    border: solid 1px #000;
    .el-calendar__header{
      padding-left: 0;
      .el-calendar__button-group{
        display: none;
        .el-button-group{
          display: none;
        }
      }
    }
    .el-calendar__body{
      padding: 0;
    }
  }
</style>
