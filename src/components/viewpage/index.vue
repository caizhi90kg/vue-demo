<template>
  <div id="indexpage">
    <div class="mask"></div>
    <p class="error">珠海市政务数据资产普查系统</p>  
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
#indexpage{
  width: 100%;
  position: absolute;
  left: 0;
  text-align: center;
  color: #fff;
  overflow: hidden;
  .mask{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-size: 100% 100%;
    filter: blur(10px);
    -webkit-filter: blur(10px);
    z-index: 0;
  }
  
  .error{
    font-family: "华文细黑", "Microsoft YaHei", "微软雅黑";
    font-size: 50px;
    position: relative;
    margin: 200px auto;
    z-index: 100;
    color:#323232;
  }


}
</style>