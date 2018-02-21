const STORE_KEY = "todo_store";
export default {
  // 从localStorage中获取存储的数据
  fetch: function() {
    return JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]');
  },
  // 将数据保存到localStorage中
  save: function(todos) {
    window.localStorage.setItem(STORE_KEY, JSON.stringify(todos));
  },
  // 获取id初始值，避免id重复，影响删除逻辑
  getBaseId: function() {
    var data = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]');
    var temp = 0;
    if (data === undefined || data.length === 0) {
      return 0;
    } else {
      for (var todo in data) {
        if (todo > temp) {
          temp = todo;
        }
      }
      temp++;
      return temp;
    }
  }
}