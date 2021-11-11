<template>
  <div class="hello">
    <h3>当前最新的content值111：{{content}} </h3>
    <button @click="btohand1">-1</button>
    <button @click="subN(3)">-n</button>
    <button @click="subAsync">-1 async</button>
    <button @click="subAsyncN(5)">-n async</button>
  </div>
</template>

<script>
import { mapState ,mapMutations,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return { 
      
    }
  },

  computed: {
    ...mapState(['content'])
  },
  methods: {
    ...mapMutations(['sub','subN']),
    ...mapActions(['subAsync','subAsyncN']),
    btohand1(){
          // this.$store.commit('add')
          this.sub()
    },
   
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
