function _addModel() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNjQ2ODg2OC1kNDI4LTQwNWEtYTAwMS0yZDc3ZjBlYmFhZmUiLCJpZCI6ODk3MjQsImlhdCI6MTY0OTkwNDAzOX0.8lYcWg4IAykZDLRpaW9BD48m8Hyc3FlghTLe7o9N_2k';
    // 初始化viewer部件
    window.viewer = new Cesium.Viewer('cesiumContainer', {
        infoBox: false,
    });
    var scene = viewer.scene;
    try {
        var promise = scene.open('http://localhost:9090/iserver/services/3D-Idata/rest/realspace');
        Cesium.when(promise, function(layer) {
            var layer = scene.layers.find('Combine');
            sceneLayer = layer;
            // 确定位置
            // scene.camera.setView({
            scene.camera.flyTo({
                //将经度、纬度、高度的坐标转换为笛卡尔坐标
                // destination: new Cesium.Cartesian3.fromDegrees(116.4, 39.9, 5000),
                destination: new Cesium.Cartesian3.fromDegrees(99.43299977350938, 27.90548404745893, 5000),
                orientation: {
                    heading: 4.7793869967010565,
                    pitch: -0.5899023527373464,
                    roll: 8.539835505416704e-12
                }
            });
        }, function() {
            var title = "加载SCP失败，请检查网络连接状态或者url地址是否正确";
            widget.showErrorPanel(title, undefined, e);
        });
    } catch (e) {
        if (widget._showErrorPanel) {
            var title = "渲染时发生错误，已停止渲染!";
            widget.showErrorPanel(title, undefined, e);
        }
    }
}
export { _addModel };