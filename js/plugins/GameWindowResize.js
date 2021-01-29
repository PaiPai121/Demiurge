//=============================================================================
// GameWindowResize.js
//=============================================================================
// Create Time:
// 2021 . 01 . 19 , 星期二
// Time:
// 15:44:34
/*:
 * @plugindesc 设置游戏窗口大小
 * @author Jumpingknight
 *
 * @param width
 * @desc screen width
 * @default 1296
 * 
 * @param height
 * @desc screen height
 * @default 720
 * 
 * @help
 * Version: 0.0.1
 * 
 * 
 * Plugin Command:
 *   GameWindowResize command              # command description

 * 
 * Log:

 */

void function() {
    var parameters = PluginManager.parameters('GameWindowResize'); // 获取参数 
    SceneManager._screenWidth       = parseInt(parameters['width']);
    SceneManager._screenHeight      = parseInt(parameters['height']);
    SceneManager._boxWidth          = parseInt(parameters['width']);
    SceneManager._boxHeight         = parseInt(parameters['height']);
    // 还需要修改package.json

}();

