<template>
  <div id="slider">
    <div id="toolbar" class="param-container tool-bar">
      <table>
        <tbody>
          <tr>
            <td>亮度</td>
            <td>
              <input type="range" min="0" max="2" step="0.02" data-bind="value:brightness,valueUpdate:'input'">
            </td>
          </tr>
          <tr>
            <td>对比度</td>
            <td>
              <input type="range" min="0" max="2" step="0.02" data-bind="value:contrast,valueUpdate:'input'">
            </td>
          </tr>
          <tr>
            <td>色调</td>
            <td>
              <input type="range" min="0" max="2" step="0.02" data-bind="value:hue,valueUpdate:'input'">
            </td>
          </tr>
          <tr>
            <td>饱和度</td>
            <td>
              <input type="range" min="0" max="2" step="0.02" data-bind="value:saturation,valueUpdate:'input'">
            </td>
          </tr>
          <tr>
            <td>伽马</td>
            <td>
              <input type="range" min="0" max="2" step="0.02" data-bind="value:gamma,valueUpdate:'input'">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
  </div>
</template>
<script>
import { _slider } from '../utils/Slider.js'
export default {
  name: 'slider',
  data() {
    return {
      brightness: 0,
      contrast: 0,
      hue: 0,
      saturation: 0,
      gamma: 0,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      _slider();
    },
  }
}
</script>
<style scoped>
#slider {
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: none; */
  position: absolute;
    top: 15vh;
    right: 2vw;
    width: 35vh;
    height: 35vh;
    /* background: #ffffff; */
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    cursor: pointer;
}
#toolbar input {
  vertical-align: middle;
  padding-top: 2px;
  padding-bottom: 2px;
  margin: 10px 0px;
  width: 150px;
}
</style>
