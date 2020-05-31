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
          <!--                    <button @click="load(item)" v-if="item.willload">下载</button>-->
          <button @click="load(item.downloadUrl)">下载</button>
          <!--                    <button disabled="disabled" v-else>已下载</button>-->
        </p>
      </div>
      <!--            <p class="name">{{item.name}}</p>-->

    </div>
  </div>

</template>

<script>
export default {
  name: 'pic-item',
  data () {
    return {
      storelist: []
    }
  },
  mounted () {
    this.$axios.get('/getList').then(res => {
      let data = res.data.data
      data.forEach(item => {
        this.storelist.push(item)
      })
    }).catch(e => {
      console.log(e)
    })
  },
  methods: {
    load (url) {
      window.location.href = url
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/style.css';
</style>
