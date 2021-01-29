//=============================================================================
// MenuRedefine.js
//=============================================================================
// Create Time:
// 2021 . 01 . 19 , 星期二
// Time:
// 17:05:32
/*:
 * @plugindesc Change Options menu
 * @author Jumpingknight
 *
 */

// options menu
TextManager.fullScreen = "全屏幕";
const _Window_Options_prototype_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function(){
    _Window_Options_prototype_addGeneralOptions.call(this);
    this.addCommand(TextManager.fullScreen,'fullScreen');
}

ConfigManager.fullScreen = false;

const _Game_Player_prototype_update = Game_Player.prototype.update;
Game_Player.prototype.update = function(sceneActive){
    _Game_Player_prototype_update.call(this,sceneActive);
    if (Graphics._isFullScreen() == ConfigManager.fullScreen){
        Graphics._switchFullScreen();
    }
}

// gameend menu
Scene_GameEnd.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_GameEnd();
    this._commandWindow.setHandler('toTitle',  this.commandToTitle.bind(this));
    this._commandWindow.setHandler('exit',   this.commandToExit.bind(this));
    this._commandWindow.setHandler('cancel',   this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_GameEnd.prototype.commandToExit = function(){
    this.fadeOutAll();
    window.close();
};

_Window_GameEnd_prototype_makeCommandList = Window_GameEnd.prototype.makeCommandList;
Window_GameEnd.prototype.makeCommandList = function(){
    _Window_GameEnd_prototype_makeCommandList.call(this);
    this.addCommand("退出游戏", 'exit');
}