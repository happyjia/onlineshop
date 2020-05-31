<template>
  <div class="box">
    <div class="container">
      <span>管理员登录</span>
      <div class="item">
        <span>账户</span>
        <el-input v-model="userName"></el-input>
      </div>
      <div class="item">
        <span>密码</span>
        <el-input type="password" v-model="psw"></el-input>
      </div>
      <div class="item">
        <el-button  @click="onSubmit">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import { reqAdminLogin } from './../api/index'
export default {
  name: 'index',
  data () {
    return {
      userName: '',
      psw: ''
    }
  },
  methods: {
    async onSubmit () {
      // 获取登陆信息
      // const result = await reqAdminLogin({userName,psw})
      if (this.userName === 'admin' && this.psw === '123456') {
        this.$message({
          message: '登陆成功',
          type: 'success'
        })
        this.$router.push({ path: '/SelectNext' })
      } else {
        this.$message.error('登陆失败')
      }
    }
  }
}
</script>

<style scoped>
.box{
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
  background:white;
}
.container{
  width: 300px;
  height: 230px;
  border: 1px solid rgba(44, 62, 80, 0.1);
  padding: 10px;
}
.item{
  width: 300px;
  height: 50px;
  margin-top: 15px;
}
.el-input{
  width: 180px;
  margin-left: 10px;
}
.el-button{
  width: 30%;
}
</style>
