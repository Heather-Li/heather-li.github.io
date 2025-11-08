System.register("chunks:///_virtual/en.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"193a1Wym8FFd7oNJi2y73b/","en",void 0);var r=window,o=e("languages",{gameInfo:{name:"Fantasy Tower Defense",footerText:"fantasy tower defense"},loading:{text:"Loading game resources...{0}%"},home:{startText:"Press to Start",levelText:"Level {0}",upgradeText:"Upgrade"},ui:{failed:"Failed",failedText:"Sorry!",failedText2:"Level Failed",win:"You Win!",winText:"Congratulations!",winText2:"Level Completed",settings:"Settings",levels:"Levels",upgrade:"Upgrade",upTips:"Click to upgrade Tower and Buff levels, up to a maximum of Level 3.",resetTips:"select a tower to reset,click the reset button again to cancel",resetTower:"Reset Tower",resume:"Resume Game",restart:"Restart Game",back:"Back to Menu",lastLevelTip:"There is no next level!"},action:{dismantle:"dismantle",upgrade:"upgrade",build:"build"},settings:{language:"Language",sound:"Sound",music:"Music",reset:"Reset",resetData:"Reset game data"},dialog:{confirm:"Confirm",cancel:"Cancel",upgradeText:"This operation will consume {0} Star. Confirm to level up the {1}?",upgradeText2:"This operation will consume {0} Star. Confirm to unlock {1}?",upgradeError:"Insufficient Stars to complete this action!",upgradeError2:"This tower has reached maximum level!",nextLevelError:"Failed to load level data!",resetDataText:"Confirm game data reset? All levels and stars will be erased.",resetTowerText:"Select a Tower to Reset,Resetting will refund up to 50% of the upgrade stars,Level 1 towers cannot be reset.",resetTowerText2:"Reset {0} to L1 and refund {1} stars?",resetErrText:"Level 1 tower cannot be reset",resetErrText2:"Unlock tower cannot be reset"},tower:{tower1:"Earthstone Tower",tower2:"Ironstone Tower",tower3:"Pyric Tower",tower4:"Meteoric Tower",tower5:"Archer Tower",tower6:"Ranger Tower",tower7:"Crossbow Tower",tower8:"Ballista Tower",tower9:"Photon Tower",tower10:"Lightning Tower",tower11:"Frostfire Tower",tower12:"Inferno Tower"},buff:{buff1:"Fire Ball",buff2:"Freezing",buff3:"Lightning",buff4:"Acid Rain"}});r.languages||(r.languages={}),r.languages.en=o,t._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./en.ts","./zh.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/zh.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"384039r7ehMsrlb16mI5aF2","zh",void 0);var r=window,a=e("languages",{gameInfo:{name:"奇幻塔防",footerText:"奇幻塔防"},loading:{text:"游戏资源加载中...{0}%"},home:{startText:"点击按钮开始游戏",levelText:"第{0}关",upgradeText:"升级"},ui:{failed:"失败",failedText:"很遗憾!",failedText2:"通关失败",win:"获胜!",winText:"恭喜你!",winText2:"通关成功",settings:"设置",levels:"关卡",upgrade:"升级",upTips:"点击可提升防御塔与Buff等级，最高可升至3级",resetTips:"选择需要重置的防御塔，再次点击重置按钮可退出操作",resetTower:"重置防御塔",resume:"继续游戏",restart:"重新开始",back:"返回菜单",lastLevelTip:"没有下一关啦！"},action:{dismantle:"拆除",upgrade:"升级",build:"建造"},settings:{language:"语言",sound:"音效",music:"音乐",reset:"重置",resetData:"重置游戏数据"},dialog:{confirm:"确定",cancel:"取消",upgradeText:"本次操作将消耗{0}颗星星，确定要提升{1}的等级吗？",upgradeText2:"本次操作将消耗{0}颗星星，确定要解锁{1}吗？",upgradeError:"当前星星数量不足，无法完成本次操作！",upgradeError2:"当前防御塔已是最高级！",nextLevelError:"获取关卡数据失败！",resetDataText:"确定要重置游戏数据吗？此操作将重置关卡数据和星星数量，请谨慎操作！",resetDataText2:"重置{0}等级为L1将返还{1}颗星星，确定要重置吗",resetTowerText:"请选择需要重置的防御塔，重置后最多可返还升级所需的一半星星，L1 无法重置",resetErrText:"无法重置L1的防御塔",resetErrText2:"无法重置没有解锁的防御塔"},tower:{tower1:"土石塔",tower2:"铁石塔",tower3:"火石塔",tower4:"陨石塔",tower5:"弓箭塔",tower6:"利箭塔",tower7:"弩箭塔",tower8:"弩炮塔",tower9:"光电塔",tower10:"雷电塔",tower11:"冰焰塔",tower12:"炎爆塔"},buff:{buff1:"火球",buff2:"冰冻",buff3:"闪电",buff4:"酸雨"}});r.languages||(r.languages={}),r.languages.zh=a,t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});