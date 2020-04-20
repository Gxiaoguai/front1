<template>
  <div class="block">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
      <!--<el-form-item label="上传资源" style="margin-top: 100px" prop="require_upload">-->
        <!--<el-upload-->
          <!--v-model="ruleForm.require_upload"-->
          <!--class="upload-demo"-->
          <!--drag-->
          <!--action="http://127.0.0.1:9000/api/addrequire"-->
          <!--limit="1"-->
          <!--:on-success="upFile"-->
          <!--:on-remove="handleRemove"-->
          <!--:on-exceed="handleExceed"-->
          <!--:auto-upload="false">-->
          <!--<i class="el-icon-upload"></i>-->
          <!--<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
        <!--</el-upload>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="封面图片" prop="require_image">-->
        <!--<el-upload-->
          <!--v-model="ruleForm.require_image"-->
          <!--class="avatar-uploader"-->
          <!--action=" http://127.0.0.1:9000/api/addrequire"-->
          <!--:show-file-list="false"-->
          <!--auto-upload="false"-->
          <!--:on-success="handleAvatarSuccess">-->
          <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
          <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
        <!--</el-upload>-->
      <!--</el-form-item>-->
      <el-form-item label="资源链接" prop="require_rel">
        <el-input v-model="ruleForm.require_rel"></el-input>
      </el-form-item>
      <el-form-item label="标题" prop="require_title">
        <el-input v-model="ruleForm.require_title"></el-input>
      </el-form-item>
      <el-form-item label="中文标题" prop="require_ctitle">
        <el-input v-model="ruleForm.require_ctitle"></el-input>
      </el-form-item>
      <el-form-item label="原始语种" prop="require_olanguages">
        <el-input v-model="ruleForm.require_olanguages"></el-input>
      </el-form-item>
      <el-form-item label="翻译成" prop="require_nlanguages">
        <el-input v-model="ruleForm.require_nlanguages"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="require_label">
        <el-input v-model="ruleForm.require_label" placeholder="输入标签，多个标签请用逗号隔开"></el-input>
      </el-form-item>
      <el-form-item label="要求简介" prop="require_contents">
        <el-input type="textarea"  :rows="8" v-model="ruleForm.require_contents"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          require_image:'',
          require_rel:'',
          require_upload:'',
          require_title: '',
          require_ctitle: '',
          require_olanguages: '',
          require_nlanguages: '',
          require_contents: '',
          require_label:'',
          imageUrl:''
        },
        imageUrl:'',
        rules: {
          require_title: [
            { required: true, message: '请输入资源标题', trigger: 'blur' },
          ],
          require_image: [
            { required: true, message: '请输入资源图片', trigger: 'blur' },
          ],
          require_label: [
            { required: true, message: '请输入标签', trigger: 'blur' },
          ],
          require_olanguages: [
            { required: true, message: '请输入资源本身的语种', trigger: 'blur' },
          ],
          require_nlanguages:[
            { required: true, message: '请输入资源待翻译语种', trigger: 'blur' },
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('http://127.0.0.1:8000/api/addrequire',this.ruleForm).then((res) => {
            console.log(res)
//            if(res.data.code == 100){
//              this.$router.push({name:"Home"})
//            } else {
//              this.resetForm(formName)
//              alert(res.data.msg)
//          }
          }).catch((res) => {
              console.log(res)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
//      beforeAvatarUpload(file) {
//        const isJPG = file.type === 'image/jpeg';
//        const isLt2M = file.size / 1024 / 1024 < 2;
//
//        if (!isJPG) {
//          this.$message.error('上传头像图片只能是 JPG 格式!');
//        }
//        if (!isLt2M) {
//          this.$message.error('上传头像图片大小不能超过 2MB!');
//        }
//        return isJPG && isLt2M;
//      }
    }
  }
</script>
<style>
  .block{
    width: 500px;
    margin: 100px auto;
  }
  .upload-demo{
    margin:-50px auto auto -100px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
