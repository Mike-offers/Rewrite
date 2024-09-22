/*************************************

>「 脚本名称 」         iTunes集合脚本
>「 作者 」             M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-21
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/itunes.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/

var ddgksf2013 = JSON.parse($response.body);

var productidmap = {
  'default': ['https://t.me/TrollStoreKios', 0],
  'com.sugarmo.ScrollClip': ['com.sugarmo.ScrollClip.pro', 1],
  // Add more mappings here
  'mobi.musicparadise.VoiceTunerPerfectSong': ['anyu_y', 1],
  'com.CalculatorForiPad.InternetRocks': ['co.airapps.calculator.year', 1];
}

var mapid=ddgksf2013.receipt.bundle_id,mapping=productidmap[mapid]||productidmap.default,inapp={product_id:mapping[0],quantity:"1",expires_date:"2099-12-18 23:59:59 Etc/GMT",expires_date_pst:"2099-12-18 23:59:59 America/Los_Angeles",expires_date_ms:"4101292799000",is_in_intro_offer_period:"false",transaction_id:"100000000000000",is_trial_period:"false",original_transaction_id:"100000000000000",purchase_date_ms:"1701705599000",purchase_date:"2023-12-04 23:59:59 Etc/GMT",purchase_date_pst:"2023-12-04 23:59:59 America/Los_Angeles",original_purchase_date:"2023-12-04 23:59:59 Etc/GMT",original_purchase_date_pst:"2023-12-04 23:59:59 America/Los_Angeles",original_purchase_date_ms:"1701705599000",in_app_ownership_type:"PURCHASED",web_order_line_item_id:"100000000000000"},renew={product_id:mapping[0],original_transaction_id:"100000000000000",auto_renew_product_id:mapping[0],auto_renew_status:"1"};mapping[1]?(delete inapp.expires_date,delete inapp.expires_date_ms,delete inapp.expires_date_pst):(ddgksf2013.latest_receipt_info=[inapp],ddgksf2013.latest_receipt="https://t.me/ddgksf2021",ddgksf2013.pending_renewal_info=[renew]),ddgksf2013.receipt.in_app=[inapp],console.log('操作成功🎉🎉🎉\nCuttlefishの自留地: https://t.me/ddgksf2021'),$done({body:JSON.stringify(ddgksf2013)});
