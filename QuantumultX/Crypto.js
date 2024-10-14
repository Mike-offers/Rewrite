/*************************************

>「 脚本名称 」         Crypto解锁Pro
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-04
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/api\.cryptopro\.app\/verify.php url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/Crypto.js

[mitm]
hostname = api.cryptopro.app

*************************************/

$done({
  body: JSON.stringify({
    o: 1,
    h: 1,
    p: 1,
    a: 1,
    i: 1,
    x: 1,
    b: 1,
    r: 1,
    k: 1,
    s: 1,
    d: 1,
    t: 1,
    e: 1,
    m: 1,
    v: true,
    g: 1
  })
});
