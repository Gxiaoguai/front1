<template>
  <div style="background-image:'../../src/assets/404_cloud">
    <p>我收藏的需求：</p>
    <el-collapse v-model="activeNames" @change="handleChange" style="margin:20px 0 0px 50px">
      <el-collapse-item  v-for="(list, index) of lists"  :title="'TITLE:'+list.title" :key="index" style="color:red">
        <div style="margin:40px">{{list.contents}}
          <el-button type="success" icon="el-icon-right" circle></el-button>
        </div>
      </el-collapse-item>
  </el-collapse>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        lists:[
          {
            title:'肖生客的救赎',
            contents:'这是一本英文书，我希望可以翻译为中文，重点翻译前面两章就可以了，人物名字不用翻译，地点也不要翻译，希望翻译能够饱含感情，翻译人员英语六级要五百分以上，名牌大学毕业或者从事与翻译工作的人员'
          },{
            title:'fefrferfrefrefre',
            contents:'dsdferfefeffffdecdc'
          },
          {
            title:'fefrferfrefrefre',
            contents:'dsdferfefeffffdecdc'
          },
          {
            title:'fefrferfrefrefre',
            contents:'dsdferfefeffffdecdc'
          },
          {
            title:'fefrferfrefrefre',
            contents:'dsdferfefeffffdecdc'
          },
          {
            title:'fefrferfrefrefre',
            contents:'dsdferfefeffffdecdc'
          },
          {
            title:'fefrferfrefrefre',
            contents:'dsdferfefeffffdecdc'
          },
          {
            title:'fefrferfrefrefre',
            contents:'dsdferfefeffffdecdc'
          },

        ]
      }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>