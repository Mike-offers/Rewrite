/*************************************

>「 脚本名称 」         滴答清单解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-25
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/ticktick\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/TickTick.js

[mitm]
hostname = ticktick.com

*************************************/

let Mike = JSON.parse($response.body); 

Mike.proEndDate = "2099-09-09T00:00:00.000+0000";  
Mike.pro = true;
Mike.teamPro = true;
Mike.activeTeamUser =  true;
Mike.teamUser = true;
Mike.freetrail = true;
  
$done({body: JSON.stringify(Mike)});
