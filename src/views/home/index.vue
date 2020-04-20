
<template>
  <div class="hone-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData" />


    <el-row class="home-part1" :gutter="0">
      <el-col :span="12">
        <div class="near-six-month">
          <div class="title">
            <p class="title-value">平台近6个月的情况</p>
          </div>
          <div class="content" ref="near-six-month-chart">
            <near-six-month width="100%" height="100%"></near-six-month>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="detail-item-wrapper">
        <div class="home-detail-item"  v-for="(item, index) of homeDetailItem">
          <div class="name">{{item.name}}</div>
          <div class="value">
            <span class="num">{{(item.value / 10000).toFixed(2)}}</span>万
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="rank">
          <div class="title">
            <p class="title-value">翻译红人榜</p>
          </div>
          <div class="content" ref="rankContent">
            <ul class="wrapper-user">
                <li v-for="item of rankList" class="user-item">
                  <img class="avatar" :src="item.avatar" width="35" height="35" loading="lazy" alt="">
                  <router-link  :to="`/others/${item.id}`" class="user-info">
                    <p class="name">{{item.name}}</p>
                    <p class="value">{{item.value}}</p>
                  </router-link>
                </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="8" style="margin-top: 35px">
      <el-col :span="12" style="height: 560px ;overflow: auto">
        <div class="title">
          <p class="title-value">商品榜</p>
        </div>
        <transaction-table />
      </el-col>
      <el-col :span="12" style="height: 560px ;overflow: auto">
        <div class="title">
          <p class="title-value">商品榜</p>
        </div>
        <transaction-table />
      </el-col>
    </el-row>

  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'

import TransactionTable from './components/TransactionTable'

import NearSixMonth from './components/near-six-month'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    NearSixMonth,
    PanelGroup,
    TransactionTable
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      homeDetailItem:[
        {
          name:'注册用户数',
          value:123344,
          color:'red'
        },
        {
          name:'注册用户数',
          value:123344
        },
        {
          name:'注册用户数',
          value:123344
        },
        {
          name:'注册用户数',
          value:123344
        }
      ],
      rankList:[
        {
          id:'111',
          avatar:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1208538952,1443328523&fm=26&gp=0.jpg',
          name:'小红',
          value:'3.5'
        },
        {
          id:'222',
          avatar:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3386247472,87720242&fm=26&gp=0.jpg',
          name:'娇气缺却路人',
          value:'35'
        },
        {
          avatar:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1208538952,1443328523&fm=26&gp=0.jpg',
          name:'小红',
          value:'3.5'
        },
        {
          avatar:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1208538952,1443328523&fm=26&gp=0.jpg',
          name:'小红',
          value:'3.5'
        },
        {
          avatar:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1208538952,1443328523&fm=26&gp=0.jpg',
          name:'小红',
          value:'3.5'
        }
      ]
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style scoped >
  .hone-container{
    min-width: 800px;

      margin-left: 5px;
  }
  .home-part1 {
    margin: 0 !important;}
    .near-six-month {
      border: 1px solid #eee;
      height: 300px;
      }
          .title-value:before {
            display: inline-block;
            content: '';
            width: 4px;
            height: 16px;
            background: purple;
            margin-right: 4px;
            border-radius: 4px;
            vertical-align: middle;
          }
      .near-six-month.content {
        width: 600px;
        height: 260px;
      }

    .detail-item-wrapper {
      display: flex;
      height: 300px;
      overflow: hidden;
      flex-wrap: wrap;
      flex-flow: row wrap;
      justify-content: space-around;
      align-content: space-around;
      padding: 0 10px;
      color: #fff;}
      .home-detail-item {
        flex: 0 0 48%;
        height: 145px;
        background-color: #ff4136;
        border: 1px solid #eee;
        background-image :linear-gradient(rgba(255, 255, 255, .1), rgba(255, 255, 255, .3)) !important;
        cursor :pointer;
      }
      .home-detail-item:hover {
        background-image :none !important
      }
      .home-detail-item:nth-child(3), .home-detail-item:nth-child(4) {
        margin-top: 10px;
      }
        .home-detail-item .name {
          padding: 30px 0 10px 0;
          text-align: center;
          font-size: 20px;
        }
        .home-detail-item .value {
          text-align: center;}
          .home-detail-item .num {
            font-size: 28px;
          }
       .title {
        background: #dde3ef;
        padding: 10px 0;
        height:40px}
        .title-value {
          margin-left: 4px;
          margin-top:2px
        }

       .content {
         position: relative;
        width: 100%;
        height: 260px;
       overflow-x: hidden;}
        .wrapper-user {
          margin: 0;
          list-style: none;
          padding-left: 0;}
          .user-item {
            height: 50px;
            padding: 5px;}
            .user-item .avatar {
              border: 1px solid #888;
              border-radius: 100px;
              vertical-align: top;
            }
            .user-info {
              display: inline-block;
              padding-left: 5px;}
              .user-info .name {
                color: #999;
                margin-top: 3px;
                font-size: 14px;
              }
              .user-info .value {
                color: red;
                margin-top: -10px;
              }
</style>
