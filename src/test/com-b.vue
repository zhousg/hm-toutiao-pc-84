<template>
  <div class='com-b'>
    COM-B <button @click="fn">发送数据</button>
  </div>
</template>

<script>
import eventBus from '@/eventBus'
export default {
  data () {
    return {
      msg: '组件B的数据'
    }
  },
  methods: {
    fn () {
      eventBus.$emit('B2A', this.msg)
    }
  }
}
</script>

<style scoped lang='less'></style>
