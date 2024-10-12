/*************************************

>「 脚本名称 」         玛卡相机解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-01
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/.+xdplt.com\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/MKXJ.js

[mitm]
hostname = *xdplt.com

*************************************/
var body = $response.body.replace(/isVip":\d/g,'isVip":1')
.replace(/vipExpireTime":\w+/g,'vipExpireTime":8887064968000')
.replace(/isForeverVip":\d/g,'isForeverVip":1')
.replace(/diamond":\d+/g,'diamond":999999')
$done({ body });
