<template>
  <div class="indexpage">
    <p class="error">404</p>
    <p class="info">This page was lost at sea<a href="/"><br>返回首页</a></p>
  </div>
</template>

<script>

export default {
  name: 'error',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.indexpage{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  color: #fff;
  background-image: url(https://i.loli.net/2017/12/18/5a37bc8e02965.jpg);
  background-size: 100% 100%; 
  .error{
    font-family: "华文细黑", "Microsoft YaHei", "微软雅黑";
    font-size: 200px;
    margin: 100px auto;
  }
  .info{
    font-family: "华文细黑", "Microsoft YaHei", "微软雅黑";
    font-size: 30px;
  }
}
</style>