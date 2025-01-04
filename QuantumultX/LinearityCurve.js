/*************************************

>「 脚本名称 」         LinearityCurve解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-12-01
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/proxy\.linearity\.io\/v\d/receipts url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/LinearityCurve.js

[mitm]
hostname = %APPEND% proxy.linearity.io

*************************************/

var objc = JSON.parse($response.body);

objc = {"request_date_ms":1735978464926,"request_date":"2025-01-04T08:14:24Z","subscriber":{"non_subscriptions":{},"first_seen":"2025-01-03T14:41:17Z","original_application_version":"20240916172656.558","other_purchases":{},"management_url":"https://apps.apple.com/account/subscriptions","subscriptions":{"Linearity_Curve_Pro_Yearly_2":{"original_purchase_date":"2024-09-23T07:19:31Z","expires_date":"2099-09-29T07:44:23Z","is_sandbox":false,"refunded_at":null,"store_transaction_id":"560001690334175","unsubscribe_detected_at":"2024-12-29T01:57:10Z","grace_period_expires_date":null,"period_type":"normal","purchase_date":"2024-10-03T07:44:23Z","billing_issues_detected_at":null,"ownership_type":"PURCHASED","store":"app_store","auto_resume_date":null}},"entitlements":{"pro":{"grace_period_expires_date":null,"purchase_date":"2024-10-03T07:44:23Z","product_identifier":"Linearity_Curve_Pro_Yearly_2","expires_date":"2099-09-09T07:44:23Z"}},"original_purchase_date":"2024-09-23T07:19:31Z","original_app_user_id":"CN_CB955D58-542C-43B0-AAED-EC66737D2194","last_seen":"2025-01-03T14:41:18Z"}}

$done({body : JSON.stringify(objc)})
