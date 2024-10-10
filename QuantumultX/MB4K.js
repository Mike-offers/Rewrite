/*************************************

>「 脚本名称 」         淼播4K解锁VIP视频功能
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-27
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
http:\/\/101\.34\.60\.156\:6543\/sk-api\/(vod\/one|user\/get_user_info) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/MB4K.js

[mitm]
hostname = %APPEND% 101.34.60.156

*************************************/
var body = $response.body;
var url = $request.url;
if(/sk-api\/vod\/one/.test(url)){
body = body.replace(/vod_trysee":\d/g,'vod_trysee":1')
.replace(/vod_level":\d/g,'vod_level":1')
.replace(/vod_lock":\d/g,'vod_lock":1')
.replace(/vod_time_make":\d+/g,'vod_time_make":999999')
}
if(/sk-api\/user\/get_user_info/.test(url)){
body = body.replace(/user_nickname":\w+/g,'user_nickname":"Tg@TrollStoreKios"')
.replace(/user_points":\d+/g,'user_points":999999')
}
$done({"body": body});
