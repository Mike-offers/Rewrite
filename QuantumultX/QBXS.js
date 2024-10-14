/*************************************

>「 脚本名称 」         安心记加班解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-26
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/t(f|y)book.taoyuewenhua.net\/(auth\/account\?adid|auth\/task_account_ios.do\?|wx_register.do\?|auth\/try_wx_bind\?).*$ url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/QBXS.js

[mitm]
hostname = tfbook.taoyuewenhua.net,tybook.taoyuewenhua.net

*************************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/task_account_ios.do?';
const p2 = '/auth/account?adid';
const p3 = 'wx_';

//cion
if (url.indexOf(p1) != -1) {
    obj.data.money = 999999;
    obj.data.coins = 999999;
    body = JSON.stringify(obj);
}
//vip
if (url.indexOf(p2) != -1) {
    obj.data.paymentUser = true;
    obj.data.isVip = true;
    body = JSON.stringify(obj);
}
//Login
if (url.indexOf(p3) != -1) {
    obj.data.nickname = "Tg频道@TrollStoreKios提供会员";
    body = JSON.stringify(obj);
}


$done({
    body
});
