<template>
  <div>
    我是第二页
    <div class="apping">
      <p class="appin">{{$store.state.obj.aaa}}</p>
      <p>{{$store.state.obj.bbb}}</p>
      <div>{{$store.state.contin}}</div>
    </div>
    
  </div>
</template>

<script>
export default {
name:"About",
mounted(){
  console.log(this.$store.state.obj)
}
}
</script>

<style scoped>
  .apping{
    border:1px solid red;
  }
</style>