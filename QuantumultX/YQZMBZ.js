/*************************************

>「 脚本名称 」         元气桌面壁纸解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-29
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/mobile-ios-wallpaper-api\.zhhainiao\.com\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/YQZMBZ.js

[mitm]
hostname = mobile-ios-wallpaper-api.zhhainiao.com

*************************************/

var Mike =  JSON.parse($response.body);
var vipInfo = {
  "vip_ex_date" : 32503338000,
  "vip_type" : "13"
};
Mike.user_info.nickname = "Tg频道@TrollStoreKios";
Mike.user_info.avatar = "https://star7-1301731293.cos.ap-shanghai.myqcloud.com/user_avatar/1721058054.416775.png";
Mike.user_info.permission_vip_info = [vipInfo], obj.permission_vip_info = [vipInfo];
$done(JSON.stringify(Mike));
