<template>
  <div id="todo">
    <input 
      type="text"
      v-model="newItem"
      autofocus="autofocus"
      placeholder="新建待办事项"
      @keyup.enter="addItem"/>
    <Item 
      v-for="todo in filters"
      :todo="todo"
      :key="todo.id"
      @delete="deleteItem"
    >
    </Item>
    <Tabs 
      :todos="todos"
      :filter="filter"
      @toggle="toggleState"
      @clearAllFinishedTodos="clearFunc"
    />
  </div>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
import Store from './store.js'
var id = Store.getBaseId();

export default {
  data: function() {
    return {
      newItem: "",
      todos: Store.fetch(),
      filter: "所有"
    }
  },
  methods: {
    addItem: function() {
      this.todos.unshift({
        id: id++,
        thing: this.newItem.trim(),
        finish: false,
      });
      this.newItem = "";
    },
    deleteItem: function(id) {
      this.todos.splice(this.todos.findIndex(todo=>id === todo.id),1);
    },
    toggleState: function(state) {
      this.filter = state;
    },
    clearFunc: function() {
      this.todos = this.todos.filter(todo=>!todo.finish);
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filters: function() {
      if (this.filter === '未完成') {
        return this.todos.filter(todo=>!todo.finish);
      } else if (this.filter === '已完成') {
        return this.todos.filter(todo=>todo.finish);
      } else {
        return this.todos;
      }
    }
  },
  watch: {
    todos: {
      handler: function(val, oldVal) {
        Store.save(val);
      },
      deep: true
    }
  }
}
</script>

<style scoped>
#todo {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}
#todo input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  box-sizing: border-box;
  padding: 16px 16px 16px 60px;
  border: none;
}
::-webkit-input-placeholder {
    color: #999;
}
</style>