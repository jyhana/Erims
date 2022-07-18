<!--
 * @Author: jyhana
 * @Date: 2022-07-11 10:33:56
 * @LastEditors: jyhana
 * @LastEditTime: 2022-07-14 13:00:35
 * @FilePath: \erims\src\views\Menu.vue
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
-->
<template>
  <div id="draw-panel">
    <ul>
      <li><a href="#institution">单位导航</a></li>
      <li><a href="#buildings">楼栋导航</a></li>
      <li><a href="#rooms">房间查询</a></li>
      <li style="float:right"><a class="active" href="#about">关于</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'drawpanel',
  methods: {
  }
}
</script>
<style scoped>
#draw-panel {
  position: absolute;
  top: 0vh;
  left: 4vw;
  width: 50vh;
  height: 50vh;
  background: #c4c4c483;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  cursor: pointer;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>
