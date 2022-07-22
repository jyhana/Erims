<template>
  <div id="drawp-panel">
    <div id='loadingbar' class="spinner">
      <div class="spinner-container container1">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
      <div class="spinner-container container2">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
      <div class="spinner-container container3">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
      </div>
    </div>
    <div style="position:absolute;left:5px;top:5px;">
      <select id="entityOptions" class="selectpicker show-tick form-control">
        <option selected value="1">绘制点</option>
        <option value="2">绘制线</option>
        <option value="3">绘制面</option>
        <option value="4">绘制栅格线</option>
        <option value="5">绘制栅格面</option>
        <option value="6">添加地标</option>
      </select>
    </div>
  </div>
</template>
<script>
import { _drawP } from '../utils/drawP.js'
export default {
  name: 'drawP',
  data() {
    return {
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // var viewer = window.viewer;
      // var scene = window.viewer.scene;
      _drawP();
    },
  }
}
</script>
<style>
#drawp-panel {
position: absolute;
  top: 15vh;
  left: 2vw;
  width: 35vh;
  height: 35vh;
  /* background: #c4c4c483; */
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  cursor: pointer;
}
</style>
