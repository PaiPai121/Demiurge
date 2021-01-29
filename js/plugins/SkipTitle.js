//=============================================================================
// SkipTitle.js
//=============================================================================
 
/*:
 * @plugindesc 跳过RPG MAKER MV 的默认标题
 * @author DiMoo
 * @help 欸嘿嘿，是本废物亲手写的插件，可是实在是没啥帮助好写了
 *  
 */
 

// 为什么要用一个匿名函数呢？
// 防止污染命名空间
// 但是后面我们肯定不会再调用它了
// 所以一个匿名就完事了


void function(){
    // var parameters = PluginManager.parameters('SkipTitle');
    Scene_Title.prototype.start = function(){ // 这里把start的直接换成了goto Scene_Map，所以Scene_Map就永远的取代了title，也就是start
        // 但是这样有一个问题，就是在游戏中退出游戏，
        // 回到标题就直接回到了第一个地图，虽然乍一看好像没问题，
        // 就是回到事件标题页了嘛，
        // 可是内容没有清空，带着之前的钱财物品就来了。
        DataManager.setupNewGame(); // 所以要有这么一句设置新游戏
        $gamePlayer.requestMapReload(); // 这个Reload我也不知道是干嘛的，函数原型在rog_objects里面
        Stage.prototype.initialize.call(this);
        SceneManager.clearStack();
        SceneManager.goto(Scene_Map);
    };
}();

