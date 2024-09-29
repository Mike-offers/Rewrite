/*************************************

>「 脚本名称 」         小熊油耗解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-26
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/www\.xiaoxiongyouhao\.com\/api\/vip\/index.php url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/XXYH.js

[mitm]
hostname = www.xiaoxiongyouhao.com

*************************************/


var Mike = $response.body.replace(/vip_state":\d/g,'vip_state":2')
.replace(/membership_days":\d+/g,'membership_days":888')
$done({ Mike });
