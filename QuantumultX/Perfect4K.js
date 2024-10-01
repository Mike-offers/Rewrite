/*************************************

>「 脚本名称 」         完美4K解锁会员视频
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-27
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/111\.229\.140\.167\:8762\/apptov5\/v1\/(vod\/getVod|user\/getUserInfo) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/Perfect4K.js

[mitm]
hostname = %APPEND% 111.229.140.167

*************************************/

var body = $response.body;
var url = $request.url;
if (/v1\/vod\/getVod/.test(url)){
    body = body.replace(/is_free":\w+/g,'is_free":true')
    .replace(/concurrent":\w+/g,'concurrent":true')
}
if (/v1\/user\/getUserInfo/.test(url)) {
    body = body.replace(/username":".*?"/g,'username":"Tg频道@TrollStoreKios"')
}
$done({ body });
