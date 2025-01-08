/************************************

>「 脚本名称 」         团团记账解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-12-04
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/gs\.gateway\.gameley\.cn\/np-book-user\/(open\/list|user\/refresh\/token) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/TTJZ.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/TTJZ.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/TTJZ.js

[mitm]
hostname = gs.gateway.gameley.cn , api.revenuecat.com

*************************************/

let obj = {};
let body;

if(/user\/refresh\/token/.test($request.url)){
  body = JSON.parse($response.body);
  body.info.user = {
    ...body.info.user,
    "visitVipForever": true,
    "visitVipBoolean": true,
    "normalVipBoolean": true,
    "normalVipForever": true,
    "adVipBoolean": true,
    "adVipForever": true,
  }
  obj.body = JSON.stringify(body);
}else if(/open\/list\/token/.test($request.url){
   body = JSON.parse($response.body);
   body.info.openVos = [];
   obj.body = JSON.stringify(body);
}else{
   if(typeof $response == "undefined") {
     delete $request.headers["x-revenuecat-etag"];
     delete $request.headers["X-RevenueCat-ETag"];
     obj.headers = $request.headers;
    }else {
       body = JSON.parse(typeof $response != "undefined" && $response.body || null);
       if(body && body.subscriber) {
          const product_id = "all";
          const entitlements = ["com.ziheng.totowallet.onetimepurchase",
                                "com.ziheng.totowallet.yearly"];
          let data = {"expires_date": "2099-09-09T09:09:09Z","original_purchase_date":"2021-01-01T00:00:00Z","purchase_date": "2021-01-01T00:00:00Z","ownership_type": "PURCHASED","store": "app_store"};
          let subscriber = body.subscriber;
          subscriber.subscriptions[(product_id)] = data;

          for (let entitlement of entitlements) {
              subscriber.entitlements[(entitlement)] = data;        
              subscriber.entitlements[(entitlement)].product_identifier = product_id;   
          }

           obj.body = JSON.stringify(body);
        } 
     }
   }

$done(obj);
