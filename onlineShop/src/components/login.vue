<template>
  <div class="box">
    <el-form class="container">
      <div class="admin">管理员登陆</div>
      <el-form-item label="账户">
        <el-input v-model="userName" placeholder="账户"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="psw" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { reqAdminLogin } from './../api/index'
import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      userName: '',
      psw: ''
    }
  },
  methods: {
    onSubmit () {
      let loginForm = new FormData()
      loginForm.append('username', this.userName)
      loginForm.append('password', this.psw)
      const username = this.userName
      const password = this.psw
      this.$axios({
        method: 'post',
        url: '/adminLogin',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {username, password}
      }).then(res => {
        let message = res.data.msg
        this.$message({
          message: message,
          type: 'success'
        })
        this.$router.push({ path: '/SelectNext' })
      }).catch(e => {
        console.log(e)
        this.$message.error('登陆失败')
      })
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
  width: 250px;
  height: 230px;
  border: 1px solid rgba(44, 62, 80, 0.1);
  padding: 10px;
}
.item{
  width: 300px;
  height: 50px;
  margin-top: 15px;
}
.admin{
  margin: 0 auto;
}
.el-form-item__label{
  padding-left: 50px;
}
.el-input{
  width: 180px;
  margin-left: 10px;
}
.el-button{
  width: 30%;
}
.admin{
  margin-bottom: 20px;
}
</style>
