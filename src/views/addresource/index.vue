<template>
  <div class="block">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
      <el-form-item label="上传资源" style="margin-top: 100px" prop="require_upload">
        <el-upload
          v-model="ruleForm.require_upload"
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          limit="1">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="封面图片" prop="require_image">
        <el-upload
          v-model="ruleForm.require_image"
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          auto-upload="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题" prop="resource_title">
        <el-input v-model="ruleForm.resource_title"></el-input>
      </el-form-item>
      <el-form-item label="中文标题" prop="resource_ctitle">
        <el-input v-model="ruleForm.resource_ctitle"></el-input>
      </el-form-item>
      <el-form-item label="原始语种" prop="resource_olanguages">
        <el-input v-model="ruleForm.resource_olanguages"></el-input>
      </el-form-item>
      <el-form-item label="资源语种" prop="resource_nlanguages">
        <el-input v-model="ruleForm.resource_nlanguages"></el-input>
      </el-form-item>
      <el-form-item label="资源标签" prop="resource_label">
        <el-input v-model="ruleForm.resource_label" placeholder="输入标签，多个标签请用逗号隔开"></el-input>
      </el-form-item>
      <el-form-item label="翻译者名字" prop="translator_name">
        <el-input v-model="ruleForm.translator_name"></el-input>
      </el-form-item>
      <el-form-item label="商品价钱" prop="purchase_number">
        <el-input v-model.number="ruleForm.purchase_number" placeholder="多个译者用逗号隔开"></el-input>
      </el-form-item>
      <el-form-item label="资源简介" prop="resource_contents">
        <el-input type="textarea"  :rows="8" v-model="ruleForm.resource_contents"></el-input>
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
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('价钱不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
              callback();
          }
        }, 1000);
      };
      return {
        ruleForm: {
          resource_title: '',
          resource_olanguages: '',
          resource_nlanguages: '',
          resource_contents: '',
          imageUrl:'',
        },
        rules: {
          resource_title: [
            { required: true, message: '请输入资源标题', trigger: 'blur' },
          ],
          translator_name: [
            { required: true, message: '请输入翻译者名字', trigger: 'blur' },
          ],
          resource_image: [
            { required: true, message: '请输入资源图片', trigger: 'blur' },
          ],

          resource_upload: [
            { required: true, message: '请上传资源', trigger: 'blur' },
          ],
          resource_olanguages: [
            { required: true, message: '请输入资源本身的语种', trigger: 'blur' },
          ],
          resource_label: [
            { required: true, message: '请输入标签', trigger: 'blur' },
          ],
          resource_nlanguages:[
            { required: true, message: '请输入资源待翻译语种', trigger: 'blur' },
          ],
          purchase_number:[
            { required: true, validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
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
