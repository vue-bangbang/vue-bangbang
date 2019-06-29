<template>
  <div class="diary-Headers">
    <div class="diary-header">
      <img src="http://www.33lc.com/article/UploadPic/2012-10/2012101211292473234.jpg" alt="">
    </div>
    <div class="diary-header-content">
      <div class="diary-header-contents">
        <p>
          <span>*****************************</span>
          <span class="diary-header-contentsDate">2019-06-24 21:57:08</span>
        </p>
        <div>------------------------------</div>
        <p>
          <span>作者：**</span><span>课程：******</span>
        </p>
        <div class="diary-header-contentsCon">
          桃树，杏树，梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味；闭了眼，树上仿佛已经满是桃儿，杏儿，梨儿。花下成千成百的蜜蜂嗡嗡的闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里像眼睛像星星，还眨呀眨的。
          桃树，杏树，梨树，你不让我，我不让你，桃树，杏树，梨树，你不让我，我不让你，桃树，杏树，梨树，你不让我，我不让你，桃树，杏树，梨树，你不让我，我不让你，桃树，杏树，梨树，你不让我，我不让你，桃树，杏树，梨树，你不让我，我不让你，
          桃树，杏树，梨树，你不让我，我不让你，
        </div>
        <div>------------------------------</div>
        <div>
          <span><i class="el-icon-view"></i><span>121</span></span>
          <span><i class="el-icon-message"></i><span>121</span></span>
          <span><i class="el-icon-star-on"></i><span>121</span></span>
        </div>
      </div>
      <div class="diary-header-contents">
      </div>
      <div class="diary-header-contents">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LearningDiary'
  }
</script>

<style lang="less" scoped>
  .diary-Headers {
    .diary-header {
      img {
        width: 100%;
        height: 150px;
      }
    }

    .diary-header-content {
      position: relative;
      top: -50px;
      left: 23%;
      width: 70%;
      background: #fff;

      .diary-header-contents {
        text-align: left;
        margin-bottom: 30px;
        min-height: 300px;
        border: solid 1px #000;
        .diary-header-contentsDate{
          float: right;
          margin-right: 20px;
        }
        .diary-header-contentsCon{
            text-indent: 2em;
        }
      }
    }
  }
</style>
