/*************************************

>「 脚本名称 」         复盘盒子解锁SVIP
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-05
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?://www\.fupanhezi\.com/usercenter/v1/user/detail url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/FPHZ.js

[mitm]
hostname = www.fupanhezi.com

*************************************/

let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            } else {
                if (key === 'expireTime') {
                    obj[key] = "2099-09-09 09:09:09";
                }
                
            }
        }
    }
    
}

modifyObject(body);

$done({ body: JSON.stringify(body) });
