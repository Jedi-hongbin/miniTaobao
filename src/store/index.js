import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabBarAction: true,
    goodsList: [],
    allC: 2,
    control: false
  },
  mutations: {
    // 删除卡片
    removeGoods(state,index){
      state.goodsList.splice(index,1);
      this.commit('setLocalStorage')
    },
    //卡片管理，可删除
    cardControl(state){
      state.control = !state.control;
    },
    // 设置localStorage
    setLocalStorage(state){
      localStorage.setItem('goodsList', JSON.stringify(state.goodsList))
    },
    getLocalStorage(state){
      let Lists = localStorage.getItem('goodsList') || '[]';
      let List = JSON.parse(Lists);
      state.goodsList = List;
    },
    // 全选
    allChecked(state){
      for (const goods of state.goodsList) {
        goods.checked = state.allC % 2 == 0 ? true : false
      }
      state.allC++
      this.commit('setLocalStorage')
    },
    // 选中商品
    selected(state,action){
      state.goodsList[action].checked = !state.goodsList[action].checked;
      this.commit('setLocalStorage')
    },
    addGoods(state,action){
      //检查是否是同一件商品
      let index = -1;
      let check = state.goodsList.some((goods,i) => {
        if ( goods.id == action.id ){
          index = i;
          return true;
        }else {
          return false;
        }
      });
      //是同一件商品，比较选择的参数
      if (check) {
        if (state.goodsList[index].option.toString() == action.option.toString()) {
          state.goodsList[index].count += action.count;
        }else {
          state.goodsList.push(action)  
        }
      }else {
        state.goodsList.push(action)
      }
      this.commit('setLocalStorage')
    },
    showTabBar(state,action){
      state.tabBarAction = action;
    }
  },
  actions: {},
  getters: {
    // 选中商品的数量
    selectedSum(state){
      let sum = 0;
      state.goodsList.forEach(x => {
        sum +=  x.checked 
      })
      return sum
    },
    // 选中商品总价
    selectedPrice(state){
      let sum = 0;
      state.goodsList.forEach(x => {
        x.checked && (sum +=  x.count * x.price)
      })
      return sum.toFixed(2)
    }
  }
})