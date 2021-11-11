<template>
  <div>
      <h3>当前最新的content值为：{{$store.state.content}}</h3>
      
      <button>+1</button>
    <button @click="btnhantwo">+n</button>
    <button @click="btnabc1">+1等一秒</button>
  </div>
</template>

<script>

export default {
    name:"Hellowo",
    data () {
        return {
            
        }
    },

 methods: {
    btnhantwo(){
      this.$store.commit('addN',3) 
    },
    btnabc1(){
        this.$store.dispatch('addAsync')
    }
  }
  ,

}
</script>

<style>

</style>