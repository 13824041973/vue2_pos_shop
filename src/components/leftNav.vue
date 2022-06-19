<template>
  <div class="left-nav">
      <ul>
          <li>
              <i class="iconfont icon-goumai"></i>
              <div>收银</div>
          </li>
          <li>
              <i class="iconfont icon-dianpu"></i>
              <div>店铺</div>
          </li>
          <li>
              <i class="iconfont icon-hanbao"></i>
              <div>商品</div>
          </li>
          <li>
              <i class="iconfont icon-huiyuanqia"></i>
              <div>会员</div>
          </li>
          <li>
              <i class="iconfont icon-huiyuanzuanshi"></i>
              <div>统计</div>
          </li>
          <li>
              <i class="iconfont icon-gongnengjianyi"></i>
              <div>设置</div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'leftNav',
}
</script>

<style scoped lang="scss">
.left-nav {
    color: #fff;
    font-size: 10px;
    height: 100%;
    background-color: #1d8cd0;
    float: left;
    width: 5%;

    ul {
        padding: 0;
        margin: 0;

        li {
            list-style: none;
            text-align: center;
            border-bottom: 1px solid #20a0ff;
            padding: 10px;
        }
    }
}
.iconfont {
    font-size: 24px;
}
</style>