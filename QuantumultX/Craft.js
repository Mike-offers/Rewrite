/*************************************

>「 脚本名称 」         Craft解锁Premium
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-05
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本


[rewrite_local]
^https?:\/\/(api|docs)\.craft\.do\/(api\/)?(auth\/v\d\/profile|subscription\/(receipt|teams\/get-subscriptions))  url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/Craft.js

[mitm]
hostname = api.craft.do , docs.craft.do

*************************************/

var Mike = JSON.parse($response.body);

if (/auth\/v\d\/profile/.test($request.url)) {
  Mike.teams = Mike.teams || [{}];
  Mike.spaces = Mike.spaces || [{}];
  Mike.teams.forEach(team => {
    team.tier = "V2_Team";
    team.subscriptionInfo = {
      "autoRenewStatus": true,
      "provider": "AppStore",
      "rawType": "AppStore",
      "subscriptionId": "55555555-8888-1023-8888-999999999999",
      "expirationTime": 4092599349000,
      "renewPeriod": "Yearly"
    };
  });
  Mike.spaces.forEach(space => {
    space.tier = "V2_Team";
  });
}


if (/subscription\/receipt/.test($request.url)) {
  Mike.subscription = {
    "expirationDate": 4092599349000,
    "subscriptionActive": true,
    "subscriptionId": "55555555-8888-1023-8888-999999999999",
    "productId": "com.lukilabs.lukiapp.v2_team_2.sub.yearly_test",
    "tier": "Pro",
    "subscriptionType": "appStoreV2TeamYearly",
    "rawSubscriptionType": "AppStore",
    "autoRenewStatus": true
  };
}

if (/subscription\/teams\/get-subscriptions/.test($request.url)) {
  Mike.subscriptions = Mike.subscriptions || [{}];
  Mike.tier = "V2_Team";
  Mike.subscriptions.push({
    "isPrimary": true,
    "provider": "AppStore",
    "subscriptionId": "55555555-8888-1023-8888-999999999999",
    "renewPeriod": "Yearly",
    "rawType": "AppStore",
    "tier": "V2_Team",
    "expirationTime": 4092599349000,
    "isActive": true
  });
}

$done({ body: JSON.stringify(Mike) });
