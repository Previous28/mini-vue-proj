<template>
    <div class="helper">
      <span class="left">还剩 {{numberOfTodos}} 项</span>
      <span class="tabs">
        <span
          v-for="state in states"
          :key="state"
          :class="[state, filter === state ? 'actived' : '']"
          @click="toggleFilter(state)"
        >
          {{state}}
        </span>
      </span>
      <span class="clear" @click="clearAllFinished">清除已完成</span>
    </div>
  </template>

<script>
export default {
  // 声明子组件需要从父组件得到的数据
  props: {
    todos: {
      type: Array,
      required: true
    },
    filter: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      states:['所有', '未完成', '已完成']
    }
  },
  methods: {
    toggleFilter: function(state) {
      this.$emit('toggle', state);
    },
    clearAllFinished: function() {
      // 调用父组件的clearAllFinishedTodos方法
      this.$emit('clearAllFinishedTodos');
    }
  },
  computed: {
    // 实时计算剩余代办事项的数量
    numberOfTodos: function() {
      return this.todos.filter(todo=>todo.finish === false).length;
    }
  }
}
</script>

<style scoped>
.helper{
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 30px;
  background-color: #fff;
  font-size: 14px;
}
.left, .clear, .tabs{
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.left, .clear{
  width: 150px;
}
.left{
  text-align: left;
}
.clear{
  text-align: right;
}
.tabs{
  width: 200px;
  display: flex;
  justify-content: space-around;
  
}
.tabs span {
  padding: 0 10px;
  display: inline-block;
}
.actived{
  border: 1px solid rgb(245, 154, 154);
  border-radius: 5px;
}
</style>