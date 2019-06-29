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
        <br><br><br><br>
        <div style="display: flex;align-items: center">
          <textarea name="" id="" cols="100%" rows="10" placeholder="请输入评论"></textarea>
          <el-button>默认按钮</el-button>
        </div>
<!--   留言     -->
        <div class="clockIn-speak">
          <div class="clockIn-speak-icon">
          </div>
          <div class="clockIn-speaker">
            <div><span>名字</span><span>content</span></div>
            <div>2019-09-08 12:34:32</div>
          </div>
        </div>
        <div class="clockIn-speak">
          <div class="clockIn-speak-icon">
          </div>
          <div class="clockIn-speaker">
            <div><span>名字</span><span>content</span></div>
            <div>2019-09-08 12:34:32</div>
          </div>
        </div>
        <div class="clockIn-speak">
          <div class="clockIn-speak-icon">
          </div>
          <div class="clockIn-speaker">
            <div><span>名字</span><span>content</span></div>
            <div>2019-09-08 12:34:32</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ClockIn'
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
        textarea{
          margin: 30px;
        }
      }
      .clockIn-speak{
        margin: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        .clockIn-speak-icon{
          margin: 0 5px;
          width: 25px;
          height: 25px;
          border: solid 1px #000;
          border-radius: 50%;
        }
      }
      .clockIn-speaker{
        flex: 7;
        align-items: center;
        border: solid 1px #000;
      }
    }
  }
</style>
