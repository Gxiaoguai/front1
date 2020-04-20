<template>
  <div>
    xianging{{id}}
    所有信息
    收藏
    评论
    下载
  </div>
</template>
<script>

export default {
  name: 'Login',
  data() {
    return {
      id:''
    }
  },
  methods: {

  },
  created:function(){
    this.id = this.$route.params.id
  }
}
</script>
