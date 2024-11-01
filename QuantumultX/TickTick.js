/*************************************

>「 脚本名称 」         滴答清单解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-25
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/TickTick.js

[mitm]
hostname = dida365.com , ticktick.com

*************************************/


let obj = JSON.parse($response.body); 
obj = {
  "timeStamp" : 1727699058617,
  "proEndDate" : "2099-09-09T00:00:00.000+0000",
  "needSubscribe" : true,
  "pro" : true,
  "teamPro" : true,
  "inboxId" : "inbox1023464027",
  "userId" : "1023464027",
  "username" : "Tg@TrollStoreKios",
  "freeTrial" : true,
  "userCode" : "7c6f0430636a48af85d5bd73ca000c63",
  "activeTeamUser" : true,
  "teamUser" : true,
  "ds" : false
};
  
$done({body: JSON.stringify(obj)});
