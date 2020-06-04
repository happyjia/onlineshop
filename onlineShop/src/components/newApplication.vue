<template>
  <div class="container">
    <el-button type="primary" @click="backIndex" class="back">返回首页</el-button>
    <el-form  :model="storelist" class="demo-form-inline">
      <el-form-item label="应用名称">
        <el-input v-model="storelist.name" placeholder="应用名称"></el-input>
      </el-form-item>
      <el-form-item label="版本">
        <el-input v-model="storelist.version" placeholder="版本"></el-input>
      </el-form-item>
      <el-form-item label="上传图片">
        <el-upload
          drag
          action="/admin/addApp"
          :auto-upload="false"
          :on-change="iconChange"
          multiple>
          <i class="el-icon-upload"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传文件">
        <el-upload
          action="/admin/addApp/"
          :on-change="handlePreview"
          :auto-upload="false"
          multiple
          :limit="1">
          <el-button size="small" type="primary">点击上传文件</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleNewApp" style="width: 100%">添加</el-button>
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
          version: '',
          icon: '',
          finder: ''
        }
    }
  },
  methods: {
    iconChange (file) {
      this.storelist.icon = file.raw
      console.log(this.storelist.icon)
    },
    backIndex () {
      this.$router.push({ path: '/' })
    },
    handlePreview (file) {
      this.storelist.finder = file.raw
    },
    handleNewApp () {
      let form = new FormData()
      form.append('name', this.storelist.name)
      form.append('version', this.storelist.version)
      form.append('icon', this.storelist.icon)
      form.append('app', this.storelist.finder)
      this.$axios({
        method: 'post',
        url: '/admin/addApp',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: form
      }).then(res => {
        console.log(res)
        this.$message({message: '添加成功', type: 'success'})
      }).catch(err => {
        console.log(err)
        this.$message({message: '添加失败', type: 'error'})
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
  .back{
    position: absolute;
    right: 20px;
    top: 10px;
  }
  .item{
    width: 300px;
    height: 50px;
    margin-top: 15px;
  }
</style>
