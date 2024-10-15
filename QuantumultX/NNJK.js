/*************************************

>「 脚本名称 」         拿捏驾考解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-06
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/nanie\.flyingeffect\.com\/api\/me\/info url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/NNJK.js

[mitm]
hostname = nanie.flyingeffect.com

*************************************/

var Mike = JSON.parse($response.body);

Mike.data.vip_end_time = "2099-09-09 09:09:09"; 
Mike.data.is_experience_vip = false;
Mike.data.is_vip = true;
Mike.data.nickname = "Tg频道@TrollStoreKios";
Mike.data.experience_vip_end_time = 32493834549000;
Mike.data.is_permanent_vip = 1;
Mike.data.vip_type = 1;

$done({JSON.stringify(Mike) }); 
