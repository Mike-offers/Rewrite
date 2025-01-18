/*************************************

>「 脚本名称 」         Purchasely类软件单个解锁模版
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-01-18
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/api\.purchasely\.io\/paab\/user_purchases url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/PurchaselyDemo.js

[mitm]
hostname = api.purchasely.io

*************************************/

var objc = JSON.parse($response.body);

objc = {
    "active_subscriptions": [
      {
        "id": "6faeb1c7-3280-44dc-99d8-8a534bf61d07",
        "public_id": "subs_dgzM9hRmYu2oRfIaXzsPuDEtImSrLy",
        "content_id": null,
        "environment": "PRODUCTION",
        "is_family_shared": false,
        "offer_identifier": null,
        "offer_type": "FREE_TRIAL",
        "plan_id": "908407a8-01cc-475f-9f56-0a04a0261768",
        "purchase_token": null,
        "purchased_at": "2024-03-12T21:32:26Z",
        "store_country": "US",
        "store_type": "APPLE_APP_STORE",
        "cancelled_at": null,
        "next_renewal_at": "2099-03-19T21:32:26Z",
        "original_purchased_at": "2024-03-12T21:32:27Z",
        "subscription_status": "AUTO_RENEWING"
      }
    ],
    "non_consumables": []
  }

$done({ body: JSON.stringify(objc) });
