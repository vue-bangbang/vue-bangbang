<template>
  <div class="block">
    <el-carousel height="350px">
      <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
        <img :src="item.src" :alt="index">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {
      carouselImg: [
        {'src': 'http://pic37.nipic.com/20140113/8800276_184927469000_2.png'},
        {'src': 'http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg'},
        {'src': 'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg'},
        {'src': 'http://pic24.nipic.com/20120922/10898738_143746326185_2.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
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
</style>
