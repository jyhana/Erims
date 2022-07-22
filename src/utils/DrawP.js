function _drawP() {
    // var viewer = window.viewer;
    // var scene = this.viewer.scene;
    window.viewer.scene.shadowMap.darkness = 1.275; //设置第二重烘焙纹理的效果（明暗程度）
    window.viewer.scene.skyAtmosphere.brightnessShift = 0.4; //修改大气的亮度
    window.viewer.scene.debugShowFramesPerSecond = true;
    window.viewer.scene.hdrEnabled = false;
    window.viewer.scene.sun.show = true;
    // 01设置环境光的强度-新处理CBD场景
    window.viewer.scene.lightSource.ambientLightColor = new Cesium.Color(0.65, 0.65, 0.65, 1);
    // 添加光源
    var position1 = new Cesium.Cartesian3.fromDegrees(116.261209157595, 39.3042238956531, 480);
    //光源方向点

    var targetPosition1 = new Cesium.Cartesian3.fromDegrees(116.261209157595, 39.3042238956531, 430);
    var dirLightOptions = {
        targetPosition: targetPosition1,
        color: new Cesium.Color(1.0, 1.0, 1.0, 1),
        intensity: 0.55
    };
    directionalLight_1 = new Cesium.DirectionalLight(position1, dirLightOptions);
    window.viewer.scene.addLightSource(directionalLight_1);
    var handler;
    var handlerPoint = new Cesium.DrawHandler(window.viewer, Cesium.DrawMode.Point);
    handlerPoint.activeEvt.addEventListener(function(isActive) {
        if (isActive == true) {
            window.viewer.enableCursorStyle = false;
            window.viewer._element.style.cursor = '';
            $('body').removeClass('drawCur').addClass('drawCur');
        } else {
            window.viewer.enableCursorStyle = true;
            $('body').removeClass('drawCur');
        }
    });
    handlerPoint.movingEvt.addEventListener(function(windowPosition) {
        tooltip.showAt(windowPosition, '<p>点击绘制点</p>');
    });
    handlerPoint.drawEvt.addEventListener(function(result) {
        tooltip.setVisible(false);
    });
    handlerPoint.activate();
    var chooseMode = {
        "1": Cesium.DrawMode.Point,
        "2": Cesium.DrawMode.Line,
        "3": Cesium.DrawMode.Polygon,
        "4": "Cesium.RasterGeometryType.POLYLINE",
        "5": "Cesium.RasterGeometryType.POLYGON",
        "6": Cesium.DrawMode.Marker
    };
    var DrawMode = ["点", "线", "面", "地标"];
    $("#entityOptions").change(function() {
        handlerPoint.deactivate();
        handlerPoint.clear();
        if (handler !== undefined) {
            handler.deactivate();
            handler.clear();
        }
        window.viewer.scene.rasterVectorCollection.removeAll();
        var value = $(this).val();
        var chooseDrawMode = chooseMode[value];
        if (value !== "5" && value !== "4") {
            entityHandler(chooseDrawMode, window.viewer);
        } else {
            rasterVectorEntityHandler(chooseDrawMode);
        }
    });

    function entityHandler(chooseDrawMode, viewer) {
        var clampMode = 0;
        if (chooseDrawMode === 1) {
            handler = new Cesium.DrawHandler(window.viewer, chooseDrawMode, clampMode);
        } else {
            handler = new Cesium.DrawHandler(window.viewer, chooseDrawMode);
        }
        handler.activeEvt.addEventListener(function(isActive) {
            if (isActive == true) {
                window.viewer.enableCursorStyle = false;
                window.viewer._element.style.cursor = '';
                $('body').removeClass('drawCur').addClass('drawCur');
            } else {
                window.viewer.enableCursorStyle = true;
                $('body').removeClass('drawCur');
            }
        });
        handler.movingEvt.addEventListener(function(windowPosition) {
            tooltip.showAt(windowPosition, '<p>点击绘制' + DrawMode[chooseDrawMode] + ',右击绘制结束</p>');
        });
        handler.drawEvt.addEventListener(function(result) {
            tooltip.setVisible(false);
        });
        handler.activate();
    };
    var ps = [];

    function rasterVectorEntityHandler(chooseDrawMode) {
        window.viewer.enableCursorStyle = false;
        window.viewer._element.style.cursor = '';
        $('body').removeClass('drawCur').addClass('drawCur');
        var rasterVectorMode = {
            "Cesium.RasterGeometryType.POLYLINE": Cesium.RasterGeometryType.POLYLINE,
            "Cesium.RasterGeometryType.POLYGON": Cesium.RasterGeometryType.POLYGON
        }
        window.viewer.scene.rasterVectorCollection.removeAll();
        var handler = new Cesium.ScreenSpaceEventHandler(window.viewer.scene.canvas);
        handler.setInputAction(function(e) {
            //获取鼠标屏幕坐标,并将其转化成笛卡尔坐标
            var position = e.position;
            var last = window.viewer.scene.pickPosition(position);
            // 将鼠标当前点坐标转化成经纬度
            var cartographic = Cesium.Cartographic.fromCartesian(last);
            var longitude = Cesium.Math.toDegrees(cartographic.longitude);
            var latitude = Cesium.Math.toDegrees(cartographic.latitude);
            var height = cartographic.height;
            ps.push(Cesium.Cartographic.fromDegrees(longitude, latitude, height));
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        handler.setInputAction(function(e) {
            tooltip.showAt(e.endPosition, '<p>单击选择下一处,右击结束绘制</p>');
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        handler.setInputAction(function(e) {
            window.viewer.scene.rasterVectorCollection.add({
                name: "myname",
                positions: ps,
                lineColor: new Cesium.Color(1.0, 0, 1, 1),
                lineWidth: 40,
                geometryType: rasterVectorMode[chooseDrawMode]
            });
            //鼠标右键结束事件
            handler.destroy();
            handler = null;
            ps = [];
            window.viewer.enableCursorStyle = true;
            tooltip.setVisible(false);
            $('body').removeClass('drawCur');
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    };
    $("#toolbar").show();
    $("#loadingbar").remove();
}
export { _drawP };