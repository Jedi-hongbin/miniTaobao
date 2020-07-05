<template>
  <div style="height:100%;">
    <keep-alive>
      <transition name="fadeMove">
        <router-view v-if="$route.meta.keepAlive" />
      </transition>
    </keep-alive>
    <transition name="fadeMove">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
    <TabBar />
  </div>
</template>

<script>
import TabBar from '@v/App/components/TabBar';
export default {
  data (){
    return {
     
    }
  },
  components: {
    TabBar
  }
}
</script>

<style lang="scss">
@import '@/styles/main';
</style>
