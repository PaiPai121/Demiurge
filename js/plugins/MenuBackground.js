//=============================================================================
// MenuBackground.js
//=============================================================================
// Create Time:
// 2021 . 01 . 20 , 星期三
// Time:
// 18:00:30
/*:
 * @plugindesc 指定某一菜单的背景图
 * @author Jumpingknight
 *
 * @param menu
 * @desc 主菜单背景
 * @default 
 * 
 * @param skill
 * @desc 技能背景
 * @default 
 * 
 * @param item
 * @desc 物品背景
 * @default 
 * 
 * @param gameEnd
 * @desc 结束游戏背景
 * @default 
 * 
 * @param shop
 * @desc 商店背景
 * @default 
 * 
 * @param save
 * @desc 保存背景
 * @default
 *  
 * @param load
 * @desc 载入背景
 * @default 
 * 
 * @help
 * Version: 0.0.1
 * 图片必须放置在img/parallaxes 路径下
 * 
 * 
 * Plugin Command:
 *   MenuBG set/reset MenuName (picture) (blur)    # 设置或重置菜单的背景图片
 *   MenuBG set menu BlueSky                       # 设置主菜单背景图为BlueSky
 *   MenuBG reset menu                             # 重置主菜单背景图
 */



(function(){
    var parameters = PluginManager.parameters('MenuBackGround'); // 获取参数 

    var imageNameList = ['','','','','','','',''];
    imageNameList[0] = parameters['menu'];
    imageNameList[1] = parameters['skill'];
    imageNameList[2] = parameters['item'];
    imageNameList[3] = parameters['shop'];
    imageNameList[4] = parameters['gameEnd'];
    imageNameList[5] = parameters['save'];
    imageNameList[6] = parameters['load'];

    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    var temp;
    var bluredList = [false,false,false,false,false,false,false];
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'MenuBG') {
            if (args[0] === 'set'){
                temp = args[2];
            }
            else if (args[0] === 'reset'){
                temp = '';
            }
            switch (args[1]) {
                case 'menu':
                    imageNameList[0] = temp;
                    break;
                case 'skill':
                    imageNameList[1] = temp;
                    break;
                case 'item':
                    imageNameList[2] = temp;
                    break;
                case 'shop':
                    imageNameList[3] = temp;
                    break;
                case 'gameEnd':
                    imageNameList[4] = temp;
                    break;
                case 'save':
                    imageNameList[5] = temp;
                    break;
                case 'load':
                    imageNameList[6] = temp;
                    break;
                }
        }
    };

    
    Scene_MenuBase.prototype.createBackground = function(){
        this._backgroundSprite = new Sprite();
        var imageName;
        if(this instanceof Scene_Menu){
            // 替换主菜单
            imageName = imageNameList[0];
        }else if(this instanceof Scene_Skill){
            // 替换物品菜单背景
            imageName = imageNameList[1];

        }else if(this instanceof Scene_Item){
            // 技能菜单
            imageName = imageNameList[2];
        }else if(this instanceof Scene_Shop){
            // 技能菜单
            imageName = imageNameList[3];
        }else if(this instanceof Scene_GameEnd){
            // 技能菜单
            imageName = imageNameList[4];
        }else if(this instanceof Scene_Save){
            // 技能菜单
            imageName = imageNameList[5];
        }else if(this instanceof Scene_Load){
            // 技能菜单
            imageName = imageNameList[6];
        }
        else{
            this._backgroundBitmap = SceneManager.snap();
            this._backgroundBitmap.blur();
        }
        var bitmap;
        if (imageName){
            bitmap = ImageManager.loadParallax(imageName);
            bitmap.blur();
        }
        else{
            bitmap = SceneManager.backgroundBitmap();
        }
        this._backgroundSprite.bitmap = bitmap;
        this.addChild(this._backgroundSprite);
    }

})();
