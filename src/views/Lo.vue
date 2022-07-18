<template>
  <div class="container">
    <div id="cesiumContainer">
      <sm-viewer :animation="animation" :camera="camera"></sm-viewer>
      <Menu />
    </div>
  </div>
</template>

<script>
var viewer, camera;
// import SmViewer from '@vue-cesium-supermap/components/cesium/viewer.vue'
import Menu from './Menu.vue'
export default {
  data() {
    return {
      // cesiumPath: 'YOUR_CESIUM_LIB_PATH'
      camera: {
        position: {
          longitude: 121.50109,
          latitude: 31.23691,
          height: 2000000
        },
        heading: 360,
        pitch: -90,
        roll: 0
      },
      animation: false
    }
  },
  components: {
    Menu
  },
  mounted() {
    // viewer = this.$refs.viewer.viewer;
    // camera = viewer.camera;
    this.init();
  },
  methods: {
    init() {
      window.viewer = new Cesium.viewer("cesiumContainer");
      let scene = viewer.scene;
      scene.debugShowFramesPerSecond = true;

      // viewer = new Cesium.Viewer("cesiumContainer",{});
      // var layer = viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
      //   url: "http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer",
      // }));
      // // 初始化场景位置
      // viewer.scene.camera.flyTo({
      //   // 初始化相机经纬度
      //   destination: new Cesium.Cartesian3.fromDegrees(121.54035, 38.92146, 2000),
      //   orientation: {
      //     heading: Cesium.Math.toRadians(0.0),
      //     pitch: Cesium.Math.toRadians(-25.0),
      //     //从上往下看为-90
      //     roll: 0,
      //   },
      // });
    },
  }
}
</script>

<style>
.container {
  background-color: #f9f9f9;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
