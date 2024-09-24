
/*************************************

>「 脚本名称 」         疯狂背单词解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-23
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，可能会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

**************************************

[rewrite_local]
https:\/\/api.fengkuangapp.com\/account\/grant\/detail\/info url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/FKBDC.js

[mitm]
hostname = api.fengkuangapp.com

*************************************/

var Mike = JSON.parse($response.body);

Mike.data.vip_info = {
      "auto_buy": 1,
      "status": 1,
      "finish_date": "9999-10-18 16:56:11",
      "finish_date_ios": "2023.10.18",
      "pre_date": "2023-10-15 16:56:12",
      "buy_status": 1,
      "vip_type": 2,
      "last_buy_date": "2023-10-15 16:56:12",
      "pre_status": 0,
      "days": 999999
    }
$done({ body: JSON.stringify(Mike) });
