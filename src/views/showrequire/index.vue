<template>
  <div class="wrap">
    <el-row class="left">
      <el-col :span="5.5" v-for="(list, index) in lists" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" class="el-cart">
          <router-link   :to="`/detailrequire/${list.id}`" >
            <img :src=list.src class="image">
          </router-link>
          <div>
            <p>{{list.ctitle}}</p>
            <p class="title">{{ list.title }}</p>
          </div>
        </el-card>
      </el-col>
  </el-row>
  <div class="right">
      <el-card class="box-card">
        <el-input
          placeholder="请输入搜索内容"
          v-model="input"
          clearable>
        </el-input>
        <div class="links">
          <p>热门标签</p>
          <el-link class="link" type="primary" v-for="item in items">{{item.message}}</el-link>
        </div>
      </el-card>
  </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      input:'',
      lists:[
        {
          id:1,
          src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'this is my first page',
          ctitle:'基于django的翻译协作共享开发平台'
        },
        {
          id:2,
          src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'hhhhhhhhh',
          ctitle:'我是笨猪'
        },
        {
          src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'hhhhhhhhh',
          ctitle:'我是笨猪'
        },
        {
          src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'hhhhhhhhh',
          ctitle:'我是笨猪'
        },
        {
          src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'hhhhhhhhh',
          ctitle:'我是笨猪'
        },
        {
          src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          title:'hhhhhhhhh',
          ctitle:'我是笨猪'
        }
      ],
      items:[
        { message: '英语' },
        { message: '德语' },
        { message: '日语' },
        { message: '俄语' },
        { message: '法语' },
        { message: '我是笨猪猪猪猪猪猪猪猪猪猪' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' }
      ]
    };
  }
}
</script>
<style>
  .wrap{
    display:flex;
    padding: 0;
    margin-top: -30px;
  }
  .left{
    width: 1100px;
    text-align: left;
  }
  .right{
    display: flex;
    flex: 1;
  }
  .el-cart{
    width: 210px;
    height: 350px;
    margin: 15px 0px 0 15px ;
  }
  .title {
    font-size: 15px;
    color: #999;
  }

  .image {
    width: 210px;
    height: 250px;
    display: block;
  }
  .box-card{
    width: 400px;
    padding-top: 20px;
  }
  .links{
    margin-top: 50px;
    text-align: left;
  }
  .link{
    margin-right: 30px;
    margin-bottom: 20px;
  }
</style>
