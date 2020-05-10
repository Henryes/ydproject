
<template>
  <section>
    <div class="lb">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><van-image
            width="375"
            height="180"
            fit="fill"
            lazy-load
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1733885750,3538948980&fm=26&gp=0.jpg" />
           </van-swipe-item>
        <van-swipe-item><van-image
            width="375"
            height="180"
            fit="fill"
            lazy-load
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2877563834,3919696056&fm=26&gp=0.jpg"
        /></van-swipe-item>
        <van-swipe-item><van-image
            width="375"
            height="180"
            fit="fill"
            lazy-load
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589112427050&di=b3b22e89d3cb08e88944184221e0c113&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20181007%2F16%2F1538902328-aSbPWXFQNh.jpg"
        /></van-swipe-item>
        <van-swipe-item><van-image
            width="377"
            height="180"
            fit="fill"
            lazy-load
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589112427049&di=b1985ca050300faa4b55607c0d3c64cd&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190530%2F11%2F1559186561-CrujemOyHp.jpg"
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
            ><div><a  @click="editRow(row)"  target="_blank">来看世界两大电网公司新战略 最后的博弈</a></div>
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
            ><div><a href="https://www.baidu.com/" target="_blank">来看世界两大电网公司新战略 最后的博弈</a></div>
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
            ><div><a href="https://www.baidu.com/" target="_blank">来看世界两大电网公司新战略 最后的博弈</a></div>
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
            ><div><a href="https://www.baidu.com/" target="_blank">来看世界两大电网公司新战略 最后的博弈</a></div>
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
            ><div><a href="https://www.baidu.com/" target="_blank">来看世界两大电网公司新战略 最后的博弈</a></div>
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
            ><div><a href="https://www.baidu.com/" target="_blank">来看世界两大电网公司新战略 最后的博弈</a></div>
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

    </van-tabs>            <button></button>

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
  },
  methods: {
    editRow (row) {
      this.$router.push({
        path: '/Journalism'
        // query: {
        //   id: row.id,
        //   name: 'name'
        // }
      })
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 0px;
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
