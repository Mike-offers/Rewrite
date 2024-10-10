/*************************************

>「 脚本名称 」         虫虫吉他解锁VIP
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-27
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^http[s]?:\/\/cc\.lzjoy\.com url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/CCJT.js

[mitm]
hostname = cc.lzjoy.com

*************************************/

var body = $response.body.replace(/vip":"0"/g,'vip": "1"')
.replace(/expire_date":""/g,'expire_date": "2099-09-09"')
.replace(/buy":"0"/g,'buy": "1"')
.replace(/nickname":".*?"/g,'nickname":"Tg@TrollStoreKios提供"')
$done({ body });
