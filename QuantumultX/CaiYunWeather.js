/*************************************

>「 脚本名称 」         彩云天气解锁全课程全资料
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-12-07
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[filter_local]
# 禁用上传信息 - 来源: @苍井灰灰
host, gather.colorfulclouds.net ,reject

[rewrite_local]
# 广告净化/弹窗AD/去除亲友卡/去除悬浮模块
^https?:\/\/(ad|biz|wrapper|starplucker)\.cyapi\.cn\/.+\/((activity\?app_name|operation|config|req\?app_name=weather)|v\d\/(trial_card\/info|entries|friend_cards|token\/device)) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/CaiYunWeather.js
# VIP信息
^https?:\/\/(biz|wrapper|starplucker)\.cyapi\.cn\/(v\d\/user\?app_name|.+\/v\d\/(vip_info|user_detail)) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/CaiYunWeather.js
# SVIP地图-48小时预报
^https?:\/\/(api|wrapper)\.cyapi\.cn\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/CaiYunWeather.js

[mitm]
hostname = *.cyapi.cn

*************************************/

let Mike = {}, TrollStoreKios = JSON.parse(typeof $response != "undefined" && $response.body || null);
const url = $request.url;
const headers = Object.fromEntries(Object.entries($request.headers).map(([k, v]) => [k.toLowerCase(), v]));

if (typeof $response == "undefined") {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps';
  Mike.headers = { ...headers, 'device-token': token };
  if (headers['app-version'] > '7.19.0') { chxm1024.headers['authorization'] = `Bearer ${token}`; }
} else {
  const data = { "is_auto_renewal": true, "expires_time": 4092599349 };
  //净化广告
  if (/banners|entries|friend_cards|trial_card\/info|req\?app_name=weather|conditions/.test(url)) {
    TrollStoreKios = {};
  }
  //旧版数据
  if (/user\?app_name/.test(url)) {
    TrollStoreKios.result = { ...TrollStoreKios.result, "is_vip": true, "vip_expired_at": 4092599349, "svip_given": 1, "is_xy_vip": true, "xy_svip_expire": 4092599349, "wt": { ...TrollStoreKios.result.wt, "vip": { ...TrollStoreKios.result.wt.vip, "expired_at": 0, "enabled": true, "svip_apple_expired_at": 4092599349, "is_auto_renewal": true, "svip_expired_at": 4092599349 }, "svip_given": 1 }, "vip_take_effect": 1, "xy_vip_expire": 4092599349, "svip_expired_at": 4092599349, "svip_take_effect": 1, "vip_type": "s" };
  }
  //新版数据
  if (/user_detail/.test(url)) {
    TrollStoreKios.vip_info.show_upcoming_renewal = false;
    TrollStoreKios.vip_info.svip = data;
  }
  //VIP信息
  if (/vip_info/.test(url)) {
    TrollStoreKios.show_upcoming_renewal = false;
    TrollStoreKios.svip = data;
  }
  //添加一个R星
  if (/features|homefeatures/.test(url)) {
    Mike["data"] = [{  "badge_type" : "",  "title" : "R星免费分享",  "url" : "https://t.me/TrollStoreKios",  "feature_type" : "",  "avatar" : "https://star7-1301731293.cos.ap-shanghai.myqcloud.com/user_avatar/1721058054.416775.png"  },...TrollStoreKios.data];
  }
  Mike.body = JSON.stringify(TrollStoreKios);
}

//去除悬浮模块
if (/activity\?app_name/.test(url)) {
  Mike.body = headers['app-version'] < '7.20.0'  ? '{"status":"ok","activities":[{"items":[{}]}]}'  : '{"status":"ok","activities":[]}';
}

$done(Mike);
