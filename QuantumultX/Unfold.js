/*************************************

>「 脚本名称 」         香蕉短剧解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2025-01-26
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         此为引用脚本的解密脚本，请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/api\.(revenuecat|rc-backup)\.com\/v\d\/subscribers\/[a-f0-9\-]{36}$  url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/Unfold.js
^https?:\/\/api\.(revenuecat|rc-backup)\.com\/v\d\/subscribers\/[a-f0-9\-]{36}$  url script-response-header https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/Unfold.js

[mitm]
hostname = api.revenuecat.com, api.rc-backup.com

*************************************/

var Mike = JSON.parse($response.body);
    Mike = {
  "request_date_ms" : 1704954622267,
  "request_date" : "2024-01-11T06:30:22Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-01-11T06:28:01Z",
    "original_application_version" : "53942",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "UNFOLD_FOR_BRANDS_YEAR" : {
        "original_purchase_date" : "2024-01-11T06:28:38Z",
        "expires_date" : "2099-01-18T06:28:37Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "460001766854464",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2024-01-11T06:28:37Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "BIRTHDAY1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PRO" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS3_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RP1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS2_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RP1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "LOVE3_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "TUTORIAL1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS4_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "LOVE2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "JN1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS2_AN_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "LOVE1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RP2_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS3_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RP2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "TUTORIAL1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "DW1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PL1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "JN2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PRO_YEARLY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "SB1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "MOODBOARD_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RP3_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS4_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "DW2_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF2_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "LOVE3_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RED1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "SB1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "BESTDRESSED1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "ZD1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF3_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "JN1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PROMOTION1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "DW1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PRIDE1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "MOODBOARD1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "EFFECTS1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF3_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PL1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "JN2_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FS1_FONT" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "DW2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS1_AN_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PC1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      }
    },
    "original_purchase_date" : "2024-01-11T06:27:28Z",
    "original_app_user_id" : "$RCAnonymousID:c1dd56df4c71424fa3ba1963bd21899b",
    "last_seen" : "2024-01-11T06:28:01Z"
  }
}
$done({body : JSON.stringify(Mike)});
