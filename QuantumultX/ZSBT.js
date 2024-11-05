﻿/*************************************

>「 脚本名称 」         掌上碑帖解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-24
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/w\.liupinyike\.com\/tablet\/api\/vipIndex url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/ZSBT.js

[mitm]
hostname = w.liupinyike.com

*************************************/

let Mike=JSON.parse($response.body);
Mike = {
  "status" : 0,
  "msg" : "获取成功",
  "data" : {
    "is_vip" : 0,
    "is_long_vip" : 0,
    "vip_list" : [
      {
        "end_time" : null,
        "vip_type" : 0,
        "id" : 1,
        "price" : "19.00",
        "title" : "连续包月卡",
        "start_time" : null,
        "preferential_price" : "6.00",
        "is_open" : 1,
        "is_selected" : 2
      },
      {
        "end_time" : "2024-06-21 23:59:59",
        "vip_type" : 1,
        "id" : 2,
        "price" : "25.00",
        "title" : "1个月·会员",
        "start_time" : "2024-06-18 00:00:00",
        "preferential_price" : "20.00",
        "is_open" : 2,
        "is_selected" : 2
      },
      {
        "end_time" : "2024-06-21 23:59:59",
        "vip_type" : 2,
        "id" : 3,
        "price" : "60.00",
        "title" : "3个月·会员",
        "start_time" : "2024-06-18 00:00:00",
        "preferential_price" : "48.00",
        "is_open" : 2,
        "is_selected" : 2
      },
      {
        "end_time" : "2024-06-21 23:59:59",
        "vip_type" : 3,
        "id" : 4,
        "price" : "198.00",
        "title" : "1年·会员",
        "start_time" : "2024-06-18 00:00:00",
        "preferential_price" : "158.00",
        "is_open" : 2,
        "is_selected" : 1
      },
      {
        "end_time" : "2024-06-21 23:59:59",
        "vip_type" : 100,
        "id" : 6,
        "price" : "698.00",
        "title" : "永久·会员",
        "start_time" : "2024-06-18 00:00:00",
        "preferential_price" : "598.00",
        "is_open" : 1,
        "is_selected" : 2
      },
      {
        "end_time" : "2024-06-21 23:59:59",
        "vip_type" : 4,
        "id" : 5,
        "price" : "388.00",
        "title" : "3年·会员",
        "start_time" : "2024-06-18 00:00:00",
        "preferential_price" : "328.00",
        "is_open" : 2,
        "is_selected" : 2
      }
    ],
    "member_day" : 0,
    "is_month" : 0,
    "first_buy_vip" : 0,
    "member_time" : 0
  }
};
$done({body:JSON.stringify(Mike)});
