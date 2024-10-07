/*************************************

>「 脚本名称 」         山丘阅读解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-28
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/(((m|i)\.815616\.xyz)|175\.178\.52\.149:88)\/api\/v\d\/myinfo url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/SQYD.js

[mitm]
hostname = m.815616.xyz , i.815616.xyz , %APPEND% 175.178.52.149

*************************************/



var Mike = JSON.parse($response.body);

Mike.data[0].type = "9";
Mike.data[0].vipto = "2099-09-09 09:09:09";

$done({body : JSON.stringify(Mike)});
