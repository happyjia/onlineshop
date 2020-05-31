<template>
  <div class="container">
    <el-form :inline="true" :model="storelist" class="demo-form-inline">
      <el-form-item label="应用名称">
        <el-input v-model="storelist.name" placeholder="应用名称"></el-input>
      </el-form-item>
      <el-form-item label="上传图片">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          v-model="storelist.icon"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传文件">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              src="./../assets/pic.png" alt=""
            >
            <span class="el-upload-list__item-actions">
      </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleNewApp">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {reqAddApp} from './../api/index'
export default {
  data () {
    return {
      storelist:
        {
          name: '',
          icon: '',
          finder: ''
        },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  methods: {
    async handleNewApp () {
      this.$message({message: '添加成功', type: 'success'})
      const result = await reqAddApp(this.storelist)
      this.$message({message: result.msg, type: 'success'})
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .item{
    width: 300px;
    height: 50px;
    margin-top: 15px;
  }
</style>
