<template>
  <div class="home">
    <p>我是第一页</p>
    <div class="top">
      <p ref="one">{{obj.aaa}}</p>
      <p ref="two">{{obj.bbb}}</p>
      <button @click="passcont">点击看第二页</button>
    </div>
    <div class="one">
      <p>111111111</p>
      <button @click="one($event)">one</button>
    </div>
    <div class="one">
      <p>222222222</p>
      <button @click="two">two</button>
    </div>
    <div class="one">
      <p>333333333</p>
      <button @click="three">three</button>
    </div>
    <div class="one">
      <p>444444444</p>
      <button @click="four">four</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      obj:{
        aaa:"我是第一页的内容",
        bbb:"这是第二条内容"
      }
    }
  },
  methods: {
    passcont(){
      console.log(this.obj);
      // var one=this.$refs.one;
      this.$store.dispatch('hand',this.obj)
    },
    one(e){
      let contin=e.currentTarget.parentElement
      console.log(contin);
      this.$store.dispatch('handone',contin)
    },
    two(){

    },
    three(){

    },
    four(){

    }
  }
}
</script>
<style scoped>

</style>