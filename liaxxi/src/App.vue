<template>
  <div>
    <HelloWorld />
    <P>-------------------</P>
    <Hellowo />
    <br>
    <br>
    <hr>
    <br>
    <router-link to="/">我是第一页1111111111111111111111111111</router-link> |

    <router-link to="/about">我是第二页22222222</router-link> |

    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' 
import Hellowo from './components/Hellowo.vue'
export default {
  name:"App",
  data () {
    return {
      
    }
  },
  components: {
    HelloWorld,Hellowo
  }
}
</script>

<style>

</style>