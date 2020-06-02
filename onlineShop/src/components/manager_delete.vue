<template>
  <div class="pic_item">
    <el-button type="primary" @click="backIndex" class="back">返回首页</el-button>
    <div class="item" v-for="(item,index) in storelist" :key="index">
      <img class="pic" :src='item.iconUrl'>
      <div class="word">
        <p class="line">
          <span class="name">{{item.name}}</span>
        </p>
        <p class="line">
          <span class="version">版本 {{item.version}}</span>
          <span class="size">大小 {{item.size}}</span>
        </p>
        <p class="line">
          <span class="time">更新时间 {{item.time}}</span>
        </p>
        <p class="line">
          <button @click="deleteItem(item.id)">删除</button>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'manager_delete',
  data () {
    return {
      storelist: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    deleteItem (id) {
      // setTimeout(() => {
      //     alert(item.name + '删除成功');
      //     this.storelist = this.storelist.filter(i => {
      //         return i.name != item.name;
      //     });
      // },2000)
      this.$axios({
        method: 'post',
        url: `/admin/deleteApp/${id}`,
        contentType: 'application/x-www-form-urlencoded',
        // data: {id},
      }).then(res => {
        let message = res.data.msg;
        alert(message);
        this.getData();
      }).catch(e => {
        console.log(e);
      })
    },
    backIndex () {
      this.$router.push({ path: '/' })
    },
    getData () {
      if(this.storelist.length != 0){
        this.storelist.splice(0, this.storelist.length);
      }
      this.$axios.get('/getList').then(res => {
        let data = res.data.data;
        data.forEach(item => {
          this.storelist.push(item);
        })
      }).catch(e => {
        console.log(e);
      })
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/style.css';
  .back{
    position: absolute;
    right: 20px;
    top: 10px;
  }
</style>
