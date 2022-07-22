<template>
  <div id="viewDiv">
    <div id="cesiumContainer"></div>
<!--    <Menue />-->
   <Slider />
   <DrawP />
  </div>
</template>
<script>
// import SmViewer from '@vue-cesium-supermap/components/cesium/viewer.vue'
import Menue from './Menue.vue'
import Slider from './Slider.vue'
import DrawP from './DrawP.vue'
import { _addModel } from '../utils/AddModel.js'

export default {
  name: "App",
  props: {
    msg: String
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      _addModel();
    },
  },
  components: {
    // SmViewer,
    Menue,
    Slider,
    DrawP,
  },
}

</script>
<style scoped>
#viewDiv {
  position: absolute;
  width: 100%;
  height: 100%;
}
#cesiumContainer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
}
#toolbar input {
  /* position: absolute; */
  vertical-align: middle;
  padding-top: 2px;
  padding-bottom: 2px;
  margin: 10px 0px;
  width:150px;;
}
</style>
