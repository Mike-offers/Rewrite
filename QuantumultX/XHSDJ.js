/*************************************

>「 脚本名称 」         西红柿短剧解锁付费剧场
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-05
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/api.jycds.cn\/(app-api\/v1\/skitsLists\/frontCheck\?fileName|login\/detail) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/XHSDJ.js

[mitm]
hostname = api.jycds.cn

*************************************/

var Mike = JSON.parse($response.body);
var url = $request.url;
if(/app-api\/v1\/skitsLists\/frontCheck\?fileName/.test(url)){
  Mike.data.onOroff = 1;
}
  
if(/login\/detail/.test(url)){
  Mike = {
  "msg" : "",
  "data" : {
    "vipEndTime" : null,
    "vip" : 1,
    "loginName" : "https://t.me/GieGie777",
    "taskBear" : 0,
    "youngType" : 0,
    "nick" : "https://t.me/GieGie777",
    "pic" : "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg",
    "diamonds" : 999880,
    "userId" : 49068,
    "type" : 7,
    "totalBear" : null,
    "vipText" : "2999-09-09会员到期",
    "passwordType" : 0,
    "watchVip" : 1,
    "litterBear" : 0,
    "unlockSingleEpisode" : 0,
    "videoBear" : 0
  },
  "code" : 0
  }
}

$done({ body: JSON.stringify(Mike) });
