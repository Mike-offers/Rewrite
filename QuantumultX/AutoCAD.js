/*************************************

>「 脚本名称 」         AutoCAD解锁Pro
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-25
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https:\/\/app\.autocad360\.com\/entitlements\/v2\/me\/status url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/AutoCAD.js

[mitm]
hostname = app.autocad360.com

*************************************/

var Mike = JSON.parse($response.body);

Mike = {
  "status": "ADSK_GRANTED_USERS_AUTODESK_EDUCATION_BUNDLE",
  "is_legacy_subscriber": true,
  "features": [
    "MyDesignStorage",
    "svc0000020",
    "svc0000087",
    "svc0000089",
    "svc0002664",
    "svc0003000"
  ],
  "is_trial": false,
  "is_authorized": true,
  "type": "ADSK_GRANTED_USERS_AUTODESK_EDUCATION_BUNDLE",
  "start_sec": 1709105997,
  "subscribed": true,
  "is_mobile_store_subscriber": true,
  "subscriptions": [],
  "expiry_sec": 4080428400,
  "is_edu_account": true,
  "recheck_sec": 1709218539
};

$done({ body: JSON.stringify(Mike) });
