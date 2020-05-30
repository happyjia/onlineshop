<template>
  <div class="index">
    <div class="title">
      <p>在线软件商店</p>
    </div>
    <div class="manage">
      <button class="manage-btn" @click="gotoManager">管理</button>
    </div>
    <PicItem></PicItem>
  </div>
</template>

<script>
import PicItem from './pic-item.vue'
export default {
  name: 'index',
  components: {
    PicItem
  },
  methods: {
    gotoManager () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .index{
    padding: 20px 0;
  }
  .title{
    background: palegoldenrod;
    font-size: 28px;
    width: 200px;
    margin: 0 auto;
  }
  .manage{
    width: 60px;
    height: 30px;
    margin: 20px;
    margin-left: 85%;
  }
  .manage-btn{
    width: 150px;
    height: 30px;
  }
</style>
