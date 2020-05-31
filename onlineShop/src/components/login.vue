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
<!--    <div class="container">-->
<!--      <span>管理员登录</span>-->
<!--      <div class="item">-->
<!--        <span>账户</span>-->
<!--        <el-input v-model="userName"></el-input>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        <span>密码</span>-->
<!--        <el-input type="password" v-model="psw"></el-input>-->
<!--      </div>-->
<!--      <div class="item">-->
<!--        <el-button  @click="onSubmit">登陆</el-button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { reqAdminLogin } from './../api/index'
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
      const userName = this.userName
      const psw = this.psw
      // 便于测试，成功后可将47行删除
      await this.$router.push({ path: '/SelectNext' })
      const result = await reqAdminLogin({userName, psw})
      if (result) {
        this.$message({
          message: '登陆成功',
          type: 'success'
        })
        await this.$router.push({ path: '/SelectNext' })
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
