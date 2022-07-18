<template>
  <div id="viewDiv">
    <div id="cesiumContainer"></div>
    <!-- <sm-viewer>
      <sm3d-measure></sm3d-measure>
    </sm-viewer> -->
    <!-- <sm-viewer>
    </sm-viewer> -->
    <Menue />
    <Slider />
  </div>
</template>
<script>
// import SmViewer from '@vue-cesium-supermap/components/cesium/viewer.vue'
import Menue from './Menue.vue'
import Slider from './Slider.vue'

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
      Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNjQ2ODg2OC1kNDI4LTQwNWEtYTAwMS0yZDc3ZjBlYmFhZmUiLCJpZCI6ODk3MjQsImlhdCI6MTY0OTkwNDAzOX0.8lYcWg4IAykZDLRpaW9BD48m8Hyc3FlghTLe7o9N_2k';
      /* eslint-disable */
      var viewer = new Cesium.Viewer("cesiumContainer", {
        infoBox: false,
      });
      viewer.imageryLayers.addImageryProvider(new Cesium.BingMapsImageryProvider({
        url: 'https://dev.virtualearth.net',
        mapStyle: Cesium.BingMapsStyle.AERIAL,
        key: URL_CONFIG.BING_MAP_KEY
      }));

      // // viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
      // //   url: "http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer",
      // // }));
      var scene = viewer.scene;
      var widget = viewer.cesiumWidget;
      var sceneLayer;

      try {
        var promise = scene.open(URL_CONFIG.SCENE_SUOFEIYA);
        Cesium.when(promise, function (layers) {
          var layer = scene.layers.find('Config');
          sceneLayer = layer;
          //设置相机位置，定位至模型
          scene.camera.setView({
            //将经度、纬度、高度的坐标转换为笛卡尔坐标
            destination: new Cesium.Cartesian3(-2653915.6463913363, 3571045.726807149, 4570293.566342328),
            orientation: {
              heading: 2.1953426301495345,
              pitch: -0.33632707158103625,
              roll: 6.283185307179586
            }
          });
        }, function () {
          var title = '加载SCP失败，请检查网络连接状态或者url地址是否正确？';
          widget.showErrorPanel(title, undefined, e);
        });
      }
      catch (e) {
        if (widget._showRenderLoopErrors) {
          var title = '渲染时发生错误，已停止渲染。';
          widget.showErrorPanel(title, undefined, e);
        }
      }
      /* eslint-disable */
    }

  },
  components: {
    // SmViewer,
    Menue,
    Slider,
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
    /* overflow: hidden;
    padding: 0;
    font-family: sans-serif; */
}

#toolbar input {
  position: absolute;
  vertical-align: middle;
  padding-top: 2px;
  padding-bottom: 2px;
  margin: 10px 0px;
  width: 150px;
  ;
}
</style>
