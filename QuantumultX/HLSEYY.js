/*************************************

>「 脚本名称 」         呼啦少儿英语解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-24
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，可能会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

**************************************

[rewrite_local]
^https?:\/\/apiv2\.hula123\.com\/api\/v1\/me url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/HLSEYY.js

[mitm]
hostname = apiv2.hula123.com

*************************************/

var Mike = JSON.parse($response.body);

Mike.data.vip_expire_at = "2099-09-09";
Mike.data.vip_expire_data = "2099-09-09";
Mike.data.show_free_vip_dialog = true;
Mike.data.is_free_vip = true;
Mike.data.is_vip = true;
Mike.data.level = "4";
Mike.data.nick_name = "Tg频道@TrollStoreKios";
Mike.data.avatar = "https://star7-1301731293.cos.ap-shanghai.myqcloud.com/user_avatar/1721058054.416775.png";

$done({ body: JSON.stringify(Mike)});
