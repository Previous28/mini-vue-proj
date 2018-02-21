<template>
    <div id="footer">
      <span>Written by {{author}}</span>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      author: '办公室李主任'
    }
  }
}
</script>

<style scoped>
#footer{
  margin-top: 20px;
  text-align: center;
  color: white;
  font-size: 14px;
}
</style>
