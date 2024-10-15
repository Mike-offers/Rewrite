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

body = $response.body.replace(/vip_end_time":".*?"/g,'vip_end_time":"2099-08-16 09:13:47"')
.replace(/is_permanent_vip":\d/g,'is_permanent_vip":1')
.replace(/vip_type":\d/g,'vip_type":1')
.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/is_experience_vip":\w+/g,'is_experience_vip":true')
.replace(/nickname":".*?"/g,'nickname":"Tg频道@TrollStoreKios"')
.replace(/avatar":".*?"/g,'avatar":"https://star7-1301731293.cos.ap-shanghai.myqcloud.com/user_avatar/1721058054.416775.png"')
$done({ body });

$done({JSON.stringify(Mike) }); 
