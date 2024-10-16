/*************************************

>「 脚本名称 」         ChatOn解锁Premium
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-06
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/billing\.chaton\.ai\/v1\/subscriptions url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/ChatOn.js

[mitm]
hostname = billing.chaton.ai

*************************************/

var Mike = JSON.parse($response.body);
Mike = {
    "subscriptions": [
      {
        "id": "696969696969696969",
        "provider": "apple",
        "status": "active",
        "periodEnd": 4102444800,
        "createdAt": 1728922317
      }
    ]
}; 	
 
$done({JSON.stringify(Mike)}); 
