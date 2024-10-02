/*************************************

>「 脚本名称 」         DreamFace解锁Pro
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-26
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/dreamfaceapp\.com\/df-server\/user\/save_user_login url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/DreamFace.js

[mitm]
hostname = dreamfaceapp.com

*************************************/


var Mike = JSON.parse($response.body);
var Data = {
      "renewal" : false,
      "vip_type" : "TRY_YEAR_PACKAGE",
      "vip_label" : true,
      "vip_remainder_day" : 99999999,
      "expires_date" : 33403938000000,
      "have_trial" : false,
      "expires_date_format" : "2099-09-09 00:00:00.000",
      "vip_product_id" : "96"
    },
Mike["data"]["rights"] = Data
$done({body : JSON.stringify(Mike)});
