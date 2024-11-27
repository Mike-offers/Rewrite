/*************************************

>「 脚本名称 」         Revenuecat类软件单个解锁模版
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-26
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         product_identifier填的内容相同且和subscriptions下方的内容相同，entitlements下方的内容与前面内容可一致可不一致，且当有多个entitlements下方内容时，product_identifier需分别和entitlements下方内容一致，subscriptions下方的内容为主要内容，non_subscriptions和other_purchases为次要内容
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https:\/\/(api\.revenuecat|isi.csan.goodnotes)\.com\/.+\/(receipts$|subscribers\/[^\/]+$|offers$) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/ItunesDemo.js

[mitm]
hostname = api.revenuecat.com , isi.csan.goodnotes.com

*************************************/

var objc = {
  "request_date_ms" : 1718758756026,
  "request_date" : "2024-06-19T00:59:16Z",
  "subscriber" : {
    "non_subscriptions" : {
      "" : [//这里替换成你要解锁的产品id
        {
          "id" : "759cb6d043",
          "is_sandbox" : true,
          "purchase_date" : "2024-06-18T12:56:47Z",
          "original_purchase_date" : "2024-06-18T12:56:47Z",
          "store" : "app_store",
          "store_transaction_id" : "2000000631701733"
        }
      ]
    },
    "first_seen" : "2024-06-18T12:50:41Z",
    "original_application_version" : "22",
    "other_purchases" : {
      "" : {//这里替换成你要解锁的产品id
        "purchase_date" : "2024-06-18T12:56:47Z"
      }
    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "" : {//这里替换成你要解锁的产品id
        "unsubscribe_detected_at" : null,
        "expires_date" : "9999-06-19T01:58:35Z",
        "is_sandbox" : true,
        "refunded_at" : null,
        "auto_resume_date" : null,
        "original_purchase_date" : "2024-06-19T00:58:36Z",
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2024-06-19T00:58:35Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "store_transaction_id" : "2000000632175257"
      }
    },
    "entitlements" : {
      "" : {//这里替换成你要解锁的entitlements下方值
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-06-18T12:56:47Z",
        "product_identifier" : "",//这里替换成你要解锁的产品id
        "expires_date" : null
      },
      "" : {//这里替换成你要解锁的entitlements下方值
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-06-19T00:58:35Z",
        "product_identifier" : "",//这里替换成你要解锁的产品id
        "expires_date" : "9999-06-19T01:58:35Z"
      }  //多个entitlements内容
    },
    "original_purchase_date" : "2023-07-15T01:54:59Z",
    "original_app_user_id" : "$RCAnonymousID:89794ec53aab4acc97794063f592e251",
    "last_seen" : "2024-06-18T12:50:41Z"
  }
}

$done({body : JSON.stringify(objc)});
