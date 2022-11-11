// Created with Motiva Layama v1.6 LITE https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Layama0002", a: "CineCameraActor_3", p: new BABYLON.Vector3(-1033.49, 140.42, -157.372), l: new BABYLON.Vector3(-1032.63, 140.42, -156.859)});
   layamaCameras.push({n: "Layama0009", a: "CineCameraActor_49", p: new BABYLON.Vector3(-244.671, 148.55, -153.887), l: new BABYLON.Vector3(-244.034, 148.55, -153.115)});
   layamaCameras.push({n: "Layama0016", a: "CineCameraActor_50", p: new BABYLON.Vector3(-1033.49, 140.42, 1972.19), l: new BABYLON.Vector3(-1032.61, 140.42, 1971.71)});
   layamaCameras.push({n: "Layama0023", a: "CineCameraActor_51", p: new BABYLON.Vector3(-244.671, 148.55, 1067.33), l: new BABYLON.Vector3(-243.696, 148.55, 1067.56)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

