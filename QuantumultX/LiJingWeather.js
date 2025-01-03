/*************************************

>「 脚本名称 」         莉景天气解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-11-29
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/ljwapi\.baichuan\.tech\/(VIP\/GetState|Login\/Device|User\/GetPrivateUsers|Vip\/GetVipType) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/LiJingWeather.js

[mitm]
hostname = ljwapi.baichuan.tech

*************************************/

var body = $response.body.replace(/vipType":0/g, 'vipType":2').replace(/isVIP":false/g, 'isVIP":true')
$done({ body });
