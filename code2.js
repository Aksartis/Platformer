gdjs._1060_1080_1085_1072_1083Code = {};
gdjs._1060_1080_1085_1072_1083Code.localVariables = [];
gdjs._1060_1080_1085_1072_1083Code.idToCallbackMap = new Map();
gdjs._1060_1080_1085_1072_1083Code.GDNewTextObjects1= [];
gdjs._1060_1080_1085_1072_1083Code.GDNewTextObjects2= [];
gdjs._1060_1080_1085_1072_1083Code.GDPlayerObjects1= [];
gdjs._1060_1080_1085_1072_1083Code.GDPlayerObjects2= [];
gdjs._1060_1080_1085_1072_1083Code.GDPixel_9595Platformer_959518x18Objects1= [];
gdjs._1060_1080_1085_1072_1083Code.GDPixel_9595Platformer_959518x18Objects2= [];
gdjs._1060_1080_1085_1072_1083Code.GDFadeObjects1= [];
gdjs._1060_1080_1085_1072_1083Code.GDFadeObjects2= [];


gdjs._1060_1080_1085_1072_1083Code.asyncCallback12648084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1060_1080_1085_1072_1083Code.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
gdjs._1060_1080_1085_1072_1083Code.localVariables.length = 0;
}
gdjs._1060_1080_1085_1072_1083Code.idToCallbackMap.set(12648084, gdjs._1060_1080_1085_1072_1083Code.asyncCallback12648084);
gdjs._1060_1080_1085_1072_1083Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1060_1080_1085_1072_1083Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(20), (runtimeScene) => (gdjs._1060_1080_1085_1072_1083Code.asyncCallback12648084(runtimeScene, asyncObjectsList)), 12648084, asyncObjectsList);
}
}

}


};gdjs._1060_1080_1085_1072_1083Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "3c3e01bd9abb195e473c32fb0822939512a1ae09c65a9f128cac144b726d3741_Circus of Freaks.aac", false, 100, 1);
}

{ //Subevents
gdjs._1060_1080_1085_1072_1083Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._1060_1080_1085_1072_1083Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1060_1080_1085_1072_1083Code.GDNewTextObjects1.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDNewTextObjects2.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDPlayerObjects1.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDPlayerObjects2.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDPixel_9595Platformer_959518x18Objects1.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDPixel_9595Platformer_959518x18Objects2.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDFadeObjects1.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDFadeObjects2.length = 0;

gdjs._1060_1080_1085_1072_1083Code.eventsList1(runtimeScene);
gdjs._1060_1080_1085_1072_1083Code.GDNewTextObjects1.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDNewTextObjects2.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDPlayerObjects1.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDPlayerObjects2.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDPixel_9595Platformer_959518x18Objects1.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDPixel_9595Platformer_959518x18Objects2.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDFadeObjects1.length = 0;
gdjs._1060_1080_1085_1072_1083Code.GDFadeObjects2.length = 0;


return;

}

gdjs['_1060_1080_1085_1072_1083Code'] = gdjs._1060_1080_1085_1072_1083Code;
