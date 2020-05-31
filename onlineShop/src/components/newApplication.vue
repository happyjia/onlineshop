<template>
  <div class="container">
    <el-form :inline="true" :model="storelist" class="demo-form-inline">
      <el-form-item label="应用名称">
        <el-input v-model="storelist.name" placeholder="应用名称"></el-input>
      </el-form-item>
      <el-form-item label="版本">
        <el-input v-model="storelist.version" placeholder="版本"></el-input>
      </el-form-item>
      <el-form-item label="上传图片">
        <el-upload
          class="upload-demo"
          drag
          action="/addApp"
          v-model="storelist.icon"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传文件">
        <el-upload
          action="/addApp"
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
// import {reqAddApp} from './../api/index'
export default {
  data () {
    return {
      storelist:
        {
          name: '',
          version: ''
          // icon: '',
          // finder: ''
        }
    }
  },
  methods: {
    // async handleNewApp () {
    //   // 防止通信失败兜底
    //   this.$message({message: '添加成功', type: 'success'})
    //   // 解决this指向问题
    //   const appName = this.storelist.name
    //   const appVersion = this.storelist.version
    //   const icon = this.storelist.icon
    //   const finder = this.storelist.finder
    //   // 上传数据，返回result,请求逻辑封装在./../api中
    //   const result = await reqAddApp({appName, appVersion, icon, finder})
    //   this.$message({message: result.msg, type: 'success'})
    // }
    handleNewApp (param) {
      console.log(param)
      let form = new FormData()
      let icon = ''
      let file = ''
      // {name, version, icon, app}
      form.append('name', this.storelist.name)
      form.append('version', this.storelist.version)
      // 文件自动上传，不需要这两个参数
      form.append('icon', icon)
      form.append('app', file)
      this.$axios({
        methods: 'post',
        url: '/admin/addApp',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: form
      }).then(res => {
        if (res.code === 200) {
          this.$message({message: res.msg, type: 'success'})
        } else {
          this.$message({message: res.msg, type: 'error'})
        }
      })
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
