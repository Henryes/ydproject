/* eslint-disable vue/no-parsing-error */https://cloud-image

<template>
  <section>
    <div class="lb">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><van-image
            width="370"
            height="180"
            fit="fill"
            lazy-load
            src="https://img.yzcdn.cn/vant/leaf.jpg"
        /></van-swipe-item>
        <van-swipe-item><van-image
            width="370"
            height="180"
            fit="fill"
            lazy-load
            src="https://img.yzcdn.cn/vant/cat.jpeg"
        /></van-swipe-item>
        <van-swipe-item><van-image
            width="370"
            height="180"
            fit="fill"
            lazy-load
            src="https://img.yzcdn.cn/vant/leaf.jpg"
        /></van-swipe-item>
        <van-swipe-item><van-image
            width="370"
            height="180"
            fit="fill"
            lazy-load
            src="https://img.yzcdn.cn/vant/leaf.jpg"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <van-tabs v-model="activeName">
      <van-tab title="最新文章 " name="a">
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/ipad.jpeg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/leaf.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-1.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-2.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-3.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-4.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="无线专栏" name="b"
        ><van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/ipad.jpeg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-1.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-2.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-3.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-4.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row></van-tab
      >
      <van-tab title="政策法规 " name="c"><van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/ipad.jpeg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-1.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-2.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-3.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-4.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row></van-tab>
      <van-tab title="市场动态 " name="4"><van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/ipad.jpeg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-1.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-2.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-3.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10"
            ><van-image
              width="140"
              height="100"
              fit="fill"
              value="内容"
              src="https://img.yzcdn.cn/vant/apple-4.jpg"
          /></van-col>
          <van-col span="14"
            ><div>来看世界两大电网公司新战略 最后的博弈</div>
            <div class="time">2019-3-23</div>
          </van-col>
        </van-row></van-tab>
    </van-tabs>
  </section>
</template>

<script>
// export default {
//   data () {
//     return {
//       images: [
//         'https://img.yzcdn.cn/vant/apple-1.jpg',
//         'https://img.yzcdn.cn/vant/apple-4.jpg',
//         'https://img.yzcdn.cn/vant/apple-3.jpg',
//         'https://img.yzcdn.cn/vant/apple-2.jpg'
//       ]
//     }
//   }
// }
export default {
  data () {
    return {
      activeName: 'a'
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #39a9ed;
}
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
.time {
  display: flex;
  justify-content: flex-end;
  font-family: "Segoe UI";
  padding: 35px 5px 5px 0px;
}
</style>
