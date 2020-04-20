<template>
  <div>
    <div class="top">

  xianging{{id}}
    所有信息
    收藏
    评论
    报名按钮
    已经完结按钮
    </div>
    <div class="bottom">
      <el-avatar class="header-img" :size="50" :src="myHeader"></el-avatar>
      <el-input
        type="textarea"
        class="reply-input"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <div class="reply-btn-box" >
          <el-button class="reply-btn" size="medium" @click="sendComment" type="primary">发表评论</el-button>
      </div>
    </div>
      <comment :comments="commentData"></comment>
    </div>
  </div>
</template>

<script>
  import * as CommentData from '../../components/comments/mockdata'
  import comment from '../../components/comments/index'

  export default {
    components: {
      comment
    },
    data() {
      return {
        commentData: [],
        textarea:'',
        myName:'Lana Del Rey',
        myHeader:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
      }
    },
    created() {
      this.commentData = CommentData.comment.data;
    },
  }
</script>
<style scoped>
  .my-reply{
    padding: 10px;
    background-color: #fafbfc}
    .header-img{
        display :inline-block;
        vertical-align: top}
    .reply-info    {
        display :inline-block;
        margin-left :5px;
        width :90%}
        .reply-input{
            min-height:22px;
            padding: 10px 10px;
            color: #ccc;
            background-color: #fff;
            border-radius :5px}
            .reply-input :empty:before{
                content :attr(placeholder)}
            .reply-input :focus:before{
                content: none}
            .reply-input :focus{
                padding :8px 8px;
                border: 2px solid blue;
                box-shadow :none;
                outline :none}
    .reply-btn-box{
        height :25px;
        margin :10px 0}
        .reply-btn{
            position :relative;
            float: right;
            margin-right :15px}
</style>
