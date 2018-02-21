const STORE_KEY = "todo_store";
export default {
  fetch: function() {
    return JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]');
  },
  save: function(todos) {
    window.localStorage.setItem(STORE_KEY, JSON.stringify(todos));
  },
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