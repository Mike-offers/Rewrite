
/*************************************

项目名称：小乖记账-解锁会员
下载地址：
更新日期：2024-10-11
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaoguaijizhang.js

[mitm]
hostname = tcbff.xiaoguaijizhang.cn

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";
hyy["data"]["vip"] = 3;
hyy["data"]["isVip"] = true;
hyy["data"]["membership_type"] = 3;

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
