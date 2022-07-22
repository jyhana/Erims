// import Slider from '../views/Slider';
//定义一个函数
function _slider() {
    $("#toolbar").show();
    // The viewModel tracks the state of our mini application.
    var viewModel = {
        brightness: 1,
        contrast: 1,
        hue: 0,
        saturation: 1,
        gamma: 1
    };
    // Convert the viewModel members into knockout observables.
    Cesium.knockout.track(viewModel);
    // Bind the viewModel to the DOM elements of the UI that call for it.
    var toolbar = document.getElementById('toolbar');
    Cesium.knockout.applyBindings(viewModel, toolbar);

    // Make the active imagery layer a subscriber of the viewModel.
    function subscribeLayerParameter(name) {
        Cesium.knockout.getObservable(viewModel, name).subscribe(
            function(newValue) {
                var sceneLayer = window.viewer.scene.layers.find('Combine');
                var layer = sceneLayer;
                layer[name] = parseFloat(newValue);
                //sceneLayers[0].refresh();
            }
        );
    }
    subscribeLayerParameter('brightness');
    subscribeLayerParameter('contrast');
    subscribeLayerParameter('hue');
    subscribeLayerParameter('saturation');
    subscribeLayerParameter('gamma');
}
export { _slider };