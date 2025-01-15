/*************************************

>「 脚本名称 」         智能助手解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-12-18
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local] 
^https?:\/\/(www\.kaolahome\.com\/xunnews|cat-revenuecat-qscqkotbrh\.cn-hongkong\.fcapp\.run)\/.+\/(receipts$|subscribers\/?(.*?)*$|product_entitlement_mapping|offers$) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/ZNZS.js
^https?:\/\/(www\.kaolahome\.com\/xunnews|cat-revenuecat-qscqkotbrh\.cn-hongkong\.fcapp\.run)\/.+\/(receipts$|subscribers\/?(.*?)*$|product_entitlement_mapping|offers$) url script-response-header https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/ZNZS.js

[mitm]
hostname = www.kaolahome.com, cat-revenuecat-qscqkotbrh.cn-hongkong.fcapp.run

*************************************/

const TrollStoreKios = {};
const TrollstoreMios = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "vip";
const appid = "sageapp_777_1y";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  TrollStoreKios.headers = $request.headers;
} else if (TrollstoreMios && TrollstoreMios.subscriber) {
    TrollstoreMios.subscriber.subscriptions = TrollstoreMios.subscriber.subscriptions || {};
    TrollstoreMios.subscriber.entitlements = TrollstoreMios.subscriber.entitlements || {};
    const data = {
      "product_identifier": (appid),
      "expires_date": "2099-09-09T09:09:09Z",
      "purchase_date": "2022-09-09T09:09:09Z"
    };
    TrollstoreMios.subscriber.entitlements[(name)] = (data);
    TrollstoreMios.subscriber.subscriptions[(appid)] = {  ...data,	"Author": "Mike",	"Telegram": "TrollStoreKios",	"warning": "仅供学习，禁止转载或售卖",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
    TrollStoreKios.body = JSON.stringify(TrollstoreMios);
}

$done(TrollStoreKios);
