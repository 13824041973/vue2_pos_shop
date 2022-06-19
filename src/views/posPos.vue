<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称">
              </el-table-column>
              <el-table-column prop="price" label="量" width="50">
              </el-table-column>
              <el-table-column prop="count" label="金额" width="70">
              </el-table-column>
              <el-table-column label="操作" fixed="right">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small"
                    @click="delSingleGoods(scope.row)"
                    >删除</el-button
                  >
                  <el-button
                    type="text"
                    size="small"
                    @click="addOrderList(scope.row)"
                    >增加</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div>
              <small>数量：</small>{{ totalNumber }} <small>金额：</small>￥{{
                totalPrice
              }}
            </div>

            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="title">常用商品</div>
        <div class="oftenGoods">
          <li
            v-for="goods in oftenGoods"
            :key="goods.goodsId"
            @click="addOrderList(goods)"
            class="oftenGoodsitem"
          >
            {{ goods.goodsName }}<span>￥{{ goods.price }}元</span>
          </li>
        </div>

        <el-tabs class="selectGoods">
          <el-tab-pane label="汉堡">
            <div
              class="selectGoodsItem"
              v-for="i in typeGoods"
              :key="i.goodsId"
              @click="addOrderList(i)"
            >
              <img :src="i.goodsImg" />
              <span
                ><p class="goodName">{{ i.goodsName }}</p>
                <p>￥{{ i.price }}元</p></span
              >
            </div>
          </el-tab-pane>
          <el-tab-pane label="小食">
            <div
              class="selectGoodsItem"
              v-for="i in typeGoods"
              :key="i.goodsId"
              @click="addOrderList(i)"
            >
              <img :src="i.goodsImg" />
              <span
                ><p class="goodName">{{ i.goodsName }}</p>
                <p>￥{{ i.price }}元</p></span
              >
            </div>
          </el-tab-pane>
          <el-tab-pane label="饮料"
            ><div
              class="selectGoodsItem"
              v-for="i in typeGoods"
              :key="i.goodsId"
              @click="addOrderList(i)"
            >
              <img :src="i.goodsImg" />
              <span
                ><p class="goodName">{{ i.goodsName }}</p>
                <p>￥{{ i.price }}元</p></span
              >
            </div></el-tab-pane
          >
          <el-tab-pane label="套餐"
            ><div
              class="selectGoodsItem"
              v-for="i in typeGoods"
              :key="i.goodsId"
              @click="addOrderList(i)"
            >
              <img :src="i.goodsImg" />
              <span
                ><p class="goodName">{{ i.goodsName }}</p>
                <p>￥{{ i.price }}元</p></span
              >
            </div></el-tab-pane
          >
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "posPos",
  data() {
    return {
      tableData: [],
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 18,
        },
        {
          goodsId: 2,
          goodsName: "田园鸡腿堡",
          price: 15,
        },
        {
          goodsId: 3,
          goodsName: "和风汉堡",
          price: 15,
        },
        {
          goodsId: 4,
          goodsName: "快乐全家桶",
          price: 80,
        },
        {
          goodsId: 5,
          goodsName: "脆皮炸鸡腿",
          price: 10,
        },
        {
          goodsId: 6,
          goodsName: "魔法鸡块",
          price: 20,
        },
        {
          goodsId: 7,
          goodsName: "可乐大杯",
          price: 10,
        },
        {
          goodsId: 8,
          goodsName: "雪顶咖啡",
          price: 18,
        },
        {
          goodsId: 9,
          goodsName: "大块鸡米花",
          price: 15,
        },
        {
          goodsId: 20,
          goodsName: "香脆鸡柳",
          price: 17,
        },
      ],
      typeGoods: [
        {
          goodsId: 1,
          goodsImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180326%2F26541660_165849624036_2.jpg&refer=http%3A%2F%2Fpic159.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658213135&t=43f08f12f64b8ea5a1cdb5060d2413b1",
          goodsName: "香辣鸡腿堡",
          price: 18,
        },
        {
          goodsId: 2,
          goodsImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180326%2F26541660_165849624036_2.jpg&refer=http%3A%2F%2Fpic159.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658213135&t=43f08f12f64b8ea5a1cdb5060d2413b1",
          goodsName: "田园鸡腿堡",
          price: 15,
        },
        {
          goodsId: 3,
          goodsImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180326%2F26541660_165849624036_2.jpg&refer=http%3A%2F%2Fpic159.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658213135&t=43f08f12f64b8ea5a1cdb5060d2413b1",
          goodsName: "和风汉堡",
          price: 15,
        },
        {
          goodsId: 4,
          goodsImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180326%2F26541660_165849624036_2.jpg&refer=http%3A%2F%2Fpic159.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658213135&t=43f08f12f64b8ea5a1cdb5060d2413b1",
          goodsName: "快乐全家桶",
          price: 80,
        },
        {
          goodsId: 5,
          goodsImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180326%2F26541660_165849624036_2.jpg&refer=http%3A%2F%2Fpic159.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658213135&t=43f08f12f64b8ea5a1cdb5060d2413b1",
          goodsName: "脆皮炸鸡腿",
          price: 10,
        },
        {
          goodsId: 6,
          goodsImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180326%2F26541660_165849624036_2.jpg&refer=http%3A%2F%2Fpic159.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658213135&t=43f08f12f64b8ea5a1cdb5060d2413b1",
          goodsName: "魔法鸡块",
          price: 20,
        },
        {
          goodsId: 7,
          goodsImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180326%2F26541660_165849624036_2.jpg&refer=http%3A%2F%2Fpic159.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658213135&t=43f08f12f64b8ea5a1cdb5060d2413b1",
          goodsName: "可乐大杯",
          price: 10,
        },
        {
          goodsId: 8,
          goodsImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180326%2F26541660_165849624036_2.jpg&refer=http%3A%2F%2Fpic159.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658213135&t=43f08f12f64b8ea5a1cdb5060d2413b1",
          goodsName: "雪顶咖啡",
          price: 18,
        },
        {
          goodsId: 9,
          goodsImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180326%2F26541660_165849624036_2.jpg&refer=http%3A%2F%2Fpic159.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658213135&t=43f08f12f64b8ea5a1cdb5060d2413b1",
          goodsName: "大块鸡米花",
          price: 15,
        },
        {
          goodsId: 20,
          goodsImg:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic159.nipic.com%2Ffile%2F20180326%2F26541660_165849624036_2.jpg&refer=http%3A%2F%2Fpic159.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658213135&t=43f08f12f64b8ea5a1cdb5060d2413b1",
          goodsName: "香脆鸡柳",
          price: 17,
        },
      ],
      totalNumber: 0,
      totalPrice: 0,
    };
  },
  methods: {
    addOrderList(goods) {
      let isHave = false;
      // 判断tableList里是否有我要添加的商品
      for (let i of this.tableData) {
        // 如果有该商品的话，单纯加count数量即可
        if (i.goodsId === goods.goodsId) {
          isHave = true;
          i.count++;
        }
      }
      // 没有相同商品时
      if (!isHave) {
        let newGoods = Object.assign({}, goods, { count: 1 });
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    // 单独删除某个商品
    delSingleGoods(goods) {
      this.tableData.forEach((i, index) => {
        if (i.goodsId === goods.goodsId) {
          this.tableData.splice(index, 1);
        }
      });
      this.getAllMoney();
    },
    // 删除全部商品
    delAllGoods() {
      this.tableData = [];
      this.getAllMoney()
    },
    // 计算商品总数和总金额
    getAllMoney() {
      this.totalNumber = 0;
      this.totalPrice = 0;
      this.tableData.forEach((i) => {
        this.totalNumber += i.count;
        this.totalPrice += i.count * i.price;
      });
    },
  },
  mounted() {
    let orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
};
</script>

<style lang="scss" scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}

.div-btn {
  margin-top: 10px;
}

.title {
  background-color: #fff;
  height: 35px;
  border-bottom: 3px solid #fff;
  color: skyblue;
  text-align: center;
  font-size: 30px;
}

.oftenGoods {
  li {
    list-style: none;
    float: left;
    background-color: #fff;
    padding: 20px;
    margin: 10px;
    text-align: center;
    cursor: pointer;

    span {
      color: steelblue;
    }
  }
}

.selectGoods {
  clear: both;
  cursor: pointer;

  .selectGoodsItem {
    float: left;
    display: flex;
    flex-wrap: wrap;
    width: 170px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    margin: 10px;

    img {
      width: 80px;
    }

    .goodName {
      color: saddlebrown;
    }
  }
}
</style>