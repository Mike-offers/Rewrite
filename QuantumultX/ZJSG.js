/*************************************

>「 脚本名称 」         指尖时光解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-03
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/integral2\.(dasyibalang|zhijiantime)\.com\/.+\/User url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/ZJSG.js

[mitm]
hostname = integral2.*.com

*************************************/

var chxm1023 = JSON.parse($response.body);

Mike.data.VIP = 3;  
Mike.data.MembersBeginDateMs = 1666666677766; 
Mike.data.MembersEndDateMs = 4092599349000;  

$done({body : JSON.stringify(Mike)});
