/*************************************

>「 脚本名称 」         开练解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2025-01-30
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         此为引用脚本的解密脚本，请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/fitness-notes\.nanxiani\.cn\/api\/vip_package_list url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/KaiLian.js

[mitm]
hostname = fitness-notes\.nanxiani.cn

*************************************/

var Mike = JSON.parse($response.body);
Mike.data.lifetime_retention_info = {
      "activity_end_time" : null,
      "activity_start_time" : null,
      "vip_type" : "normal_permanent",
      "days" : 0,
      "is_preferred" : 1,
      "renewal_price" : "0.00",
      "subscript" : "限时优惠",
      "channel" : "",
      "txt_conversion_price_unit" : null,
      "txt_direct_reduction" : "67%",
      "name" : "终身会员",
      "delete_source_price" : null,
      "vip_uuid" : "ios_consumable_permanent_88",
      "type" : 6,
      "id" : 43,
      "automatic_renewal" : 0,
      "strategy" : "def",
      "activity_price" : "0.00",
      "original_price" : "298",
      "txt_source_price" : null,
      "daily_price" : "88",
      "price" : "88",
      "txt_conversion_price" : null,
      "description" : "仅需一次付费，永久享受VIP权益"
    };

Mike.data.lifetime_retention_original_info = {
      "activity_end_time" : null,
      "activity_start_time" : null,
      "vip_type" : "normal_permanent",
      "days" : 0,
      "is_preferred" : 1,
      "renewal_price" : "0.00",
      "subscript" : "限时优惠",
      "channel" : "",
      "txt_conversion_price_unit" : null,
      "txt_direct_reduction" : "67%",
      "name" : "终身会员",
      "delete_source_price" : null,
      "vip_uuid" : "ios_consumable_permanent_88",
      "type" : 6,
      "id" : 43,
      "automatic_renewal" : 0,
      "strategy" : "def",
      "activity_price" : "0.00",
      "original_price" : "298",
      "txt_source_price" : null,
      "daily_price" : "88",
      "price" : "88",
      "txt_conversion_price" : null,
      "description" : "仅需一次付费，永久享受VIP权益"
    };

$done({body:JSON.stringify(Mike)});
