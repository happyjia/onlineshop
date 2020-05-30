<template>
  <div class="container">
    <el-form :inline="true" :model="storelist" class="demo-form-inline">
      <el-form-item label="应用名称">
        <el-input v-model="storelist.name" placeholder="应用名称"></el-input>
      </el-form-item>
      <el-form-item label="应用版本">
        <el-input v-model="storelist.version" placeholder="应用版本"></el-input>
      </el-form-item>
      <el-form-item label="应用大小">
        <el-input v-model="storelist.size" placeholder="应用大小"></el-input>
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input v-model="storelist.time" placeholder="更新时间"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleNewApp">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      storelist:
        {
          name: '',
          version: '',
          size: '',
          time: '',
          willload: true
        }
    }
  },
  methods: {
    handleNewApp (index, row) {
      console.log(index, row)
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
