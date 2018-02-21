<template>
  <div :class="['todo-item', todo.finish?'finished':'']">
    <input
      type="checkbox"
      v-model="todo.finish"
      class="toggle"
    />
    <label>{{todo.thing}}</label>
    <button 
      class="destory"
      @click="deleteItem">
    </button>
  </div>
</template>

<script>
export default {
  props:{
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteItem: function() {
      this.$emit('delete', this.todo.id);
    }
  }
}
</script>

<style scoped>
/* .todo-item {
  background-color: white;
  font-size: 20px;
  padding: 10px 15px;
  border-top: #999 0.5px solid;
} */

.todo-item {
  position:relative;
  background-color: #fff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.todo-item:hover .destory:after{
  content: '×';
}

.todo-item label{
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}

.finished label{
  color: #d9d9d9;
  text-decoration: line-through;
}

.toggle{
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  outline: none;
  appearance: none;
}

.toggle:after{
  content: url('../assets/images/round.svg');
}

.toggle:checked:after{
  content: url('../assets/images/done.svg');
}
.destory{
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
  outline: none;
}
</style>