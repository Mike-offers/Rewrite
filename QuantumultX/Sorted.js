/*************************************

>「 脚本名称 」         iTunes集合脚本
>「 脚本作者 」            M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-25
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

**************************************

[rewrite_local]
^https?:\/\/api\.sortedapp\.com\/receipt$ url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/Sorted.js

[mitm]
hostname = api.sortedapp.com

*************************************/

var data = {
  "status" : 0,
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1306893526,
    "receipt_creation_date" : "2022-09-21 11:40:33 Etc/GMT",
    "bundle_id" : "com.staysorted.Sorted",
    "original_purchase_date" : "2020-08-12 00:06:22 Etc/GMT",
    "in_app" : [

    ],
    "adam_id" : 1306893526,
    "receipt_creation_date_pst" : "2022-09-21 04:40:33 America/Los_Angeles",
    "request_date" : "2022-09-21 11:40:35 Etc/GMT",
    "request_date_pst" : "2022-09-21 04:40:35 America/Los_Angeles",
    "version_external_identifier" : 852189251,
    "request_date_ms" : "1663760435501",
    "original_purchase_date_pst" : "2020-08-11 17:06:22 America/Los_Angeles",
    "application_version" : "358",
    "original_purchase_date_ms" : "1597190782000",
    "receipt_creation_date_ms" : "1663760433000",
    "original_application_version" : "185",
    "download_id" : 83070431858296
  },
  "isPro" : true,
  "environment" : "Production",
  "flagged" : false,
  "isBundleEnabled" : true,
  "isCustomer" : false
}; var Mike = JSON.parse($response.body); const vip = '/verify'; if ($request.url.indexOf(vip) != -1) { Mike = data; 	body = JSON.stringify(Mike); } $done({body}); 

