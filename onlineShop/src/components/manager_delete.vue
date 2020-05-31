<template>
  <div class="pic_item">
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
      this.$axios({
        method: 'post',
        url: '/deleteApp',
        contentType: 'application/x-www-form-urlencoded',
        data: {id},
      }).then(res => {
        let message = res.data.msg;
        alert(message);
        this.getData();
      }).catch(e => {
        console.log(e);
      })
    },
    getData () {
      this.$axios.get('/getList').then(res => {
        let data = res.data
        data.forEach(item => {
          this.storelist.push(item)
        })
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/style.css';
</style>
