/*************************************

>「 脚本名称 」         灵感足迹解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-02
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/footprint-api\.quthing\.com\/vip\/state url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/LGZJ.js

[mitm]
hostname = footprint-api.quthing.com

*************************************/

var Mike = JSON.parse($response.body);

Mike.data.trialPeriod = false;
Mike.data.vipType = 7;
Mike.data.validVip = true;
Mike.data.expireTime = 4102372800000;
Mike.data.vipCount = 99999999999;

$done({ body: JSON.stringify(Mike) });
