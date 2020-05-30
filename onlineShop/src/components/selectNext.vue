<template>
  <div class="container">
    <div class="item">
      <el-button type="primary" @click="onAdd">新增应用</el-button>
      <el-button type="primary" @click="onDelete">删除应用</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select',
  methods: {
    onAdd () {
      this.$router.push({ path: '/newApplication' })
    },
    onDelete () {
      this.$router.push({ path: '/managerDelete' })
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    align-items:center;
    justify-content:center;
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
