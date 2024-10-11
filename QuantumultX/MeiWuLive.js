/*************************************

>「 脚本名称 」         魅舞解锁付费直播房间
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-29
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/.+(member\/detail|user_video_async|lottery-ns) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/MeiWuLive.js

[mitm]
hostname = qq.baiduan*.com , *wensan*com , ws.wensangq.com , 45.117.11.*

*************************************/

var Mike = JSON.parse($response.body);

Mike.[nickname] = "Tg@TrollStoreKios";
Mike.[vip] = 1;
Mike.[status] = 1;
