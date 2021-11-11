import { createStore } from 'vuex'

export default createStore({
  state: {
    content:0 ,
    obj:{}
  },
  //只有mutations 中定义的函数，才有权利修改state中的数据
  mutations: {
    add(state){
      state.content-- 
    },
    addN(state,step){
      state.content+=step
    },
    sub(state){
      state.content--
    },
    subN(state,step){
      state.content-=step
    },
    hand(state,obj){
      state.obj=obj
    },
    handone(state,contin){
      state.contin=contin
    }
  },
  actions: {
    addAsync(context){
      setTimeout(()=>{
        //在actions中不能直接修改state中的数据必须通过context.commit()触发某个mutation 才行 
        context.commit('add')
      },1000)
    },
    subAsync(context){
      setTimeout(()=>{
        context.commit('sub')
      },1000)
    },
    subAsyncN(context,step){
      setTimeout(()=>{
        context.commit('subN',step)
      },1000)
    },
    hand({commit},obj){
      commit('hand',obj)
    },
    handone({commit},contin){
      commit('handone',contin)
    }
  },
  modules: { 
  }
})
