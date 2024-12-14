/*************************************

>「 脚本名称 」         专业相机(-专业音视频录制工具)解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-11-13
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/ym\.dreamyin\.cn\/\/ym_user/IsVip\? url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/ZYXJ.js

[mitm]
hostname = ym.dreamyin.cn

*************************************/

if ($request.url.includes('/ym_user/IsVip?')) {
    let body = JSON.parse($response.body);
    Object.assign(body.data, {
        duedate: "2999-09-09",
        day: 9999,
    });
    $done({
        body: JSON.stringify(body)
    });
} 
