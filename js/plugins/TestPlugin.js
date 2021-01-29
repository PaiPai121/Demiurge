//=============================================================================
// TestPlugin.js
//=============================================================================
// Create Time:
// 2021 . 01 . 20 , 星期三
// Time:
// 11:27:19
/*:
 * @plugindesc your description
 * @author Jumpingknight
 *
 * @param your parameter
 * @desc write your description
 * @default 20
 * 
 * 
 * @help
 * Version: 0.0.3
 * 
 * 
 * Plugin Command:
 *   TestPlugin command              # command description

 * 
 * Log:
 your Log 
 */


//构造函数体
function Window_PlayerCount() {
    this.initialize.apply(this, arguments);
}
//继承自Window_Base
Window_PlayerCount.prototype = Object.create(Window_Base.prototype);
//设定构造函数
Window_PlayerCount.prototype.constructor = Window_PlayerCount;
//初始化
Window_PlayerCount.prototype.initialize = function(x,y) {
    var width = 240;
    var height = this.fittingHeight(1);
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.drawText('a Test message', 0, 0, 200);
};
//重写Scene_Menu，加入我们自定窗口
Scene_Menu.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    this.createGoldWindow();
    this.createStatusWindow();
    //加入我们自己的窗口
    var win = new Window_PlayerCount(0,this._commandWindow.height);
    this.addWindow(win);
};

// 如何显示一个带文本的窗口


function Window_MapStatus(){
    this.initialize.apply(this,arguments); // 此为何意
};

Window_MapStatus.prototype = Object.create(Window_Base.prototype);

Window_MapStatus.prototype.constructor = Window_MapStatus; // 为什么？

Window_MapStatus.prototype.initialize = function(x,y,width,height){
    Window_Base.prototype.initialize.call(this,x,y,width,height); // 初始化
    this.refresh();
}

Window_MapStatus.prototype.refresh = function(){
    // text String
    // 要绘制的文字
    // x Number
    // 文字左侧的 X 坐标
    // y Number
    // 文字顶部的 Y 坐标
    // maxWidth Number
    // 文字允许的最大宽度
    // lineHeight Number
    // 文字的行高(可省略)
    // align String
    // 文字的对齐方式（可省略）
    this.drawText($gameParty.members()[0]._name, 0, 0, this.Width);
    this.drawActorName($gameParty.members()[0], 0, 50);
}


var _Scene_Map_prototype_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;

Scene_Map.prototype.createDisplayObjects = function () {
    _Scene_Map_prototype_createDisplayObjects.call(this);
    this.createStatusWindow();
};

Scene_Map.prototype.createStatusWindow = function(){
    this._StatusWindow = new Window_MapStatus(0,0,410,216);
    this.addWindow(this._StatusWindow); // 把窗口添加到窗口层
}