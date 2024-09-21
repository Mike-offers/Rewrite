> 脚本名称          iTunes集合脚本
> 作者              M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
> 电报频道          https://t.me/TrollStoreKios 
> 更新时间          2024-09-21
> 注意事项          如需引用请注明出处，谢谢合作！
> 注意事项          使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
[rewrite_local]
  
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body 
https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/itunes.js

[mitm]

hostname = buy.itunes.apple.com

var Mike = JSON.parse($response.body);

var productidmap = {
  'default': ['https://t.me/TrollStoreKios', 0],
  'mobi.musicparadise.VoiceTunerPerfectSong': ['anyu_y', 1];
  'com.CalculatorForiPad.InternetRocks': ['co.airapps.calculator.year', 0];
};

var bundleid = Mike.receipt.bundle_id;
var mapping = productidmap[bundleid] || productidmap.default;

var inapp = {
  product_id: mapping[0],
  quantity: "1",
  expires_date: "2099-09-09 23:59:59 Etc/GMT",
  expires_date_pst: "2099-09-09 23:59:59 America/Los_Angeles",
  expires_date_ms: "4101292799000",
  is_in_intro_offer_period: "false",
  transaction_id: "100000000000000",
  is_trial_period: "false",
  original_transaction_id: "100000000000000",
  purchase_date_ms: "1701705599000",
  purchase_date: "2021-12-21 23:59:59 Etc/GMT",
  purchase_date_pst: "2021-12-21 23:59:59 America/Los_Angeles",
  original_purchase_date: "2021-12-21 23:59:59 Etc/GMT",
  original_purchase_date_pst: "2021-12-21 23:59:59 America/Los_Angeles",
  original_purchase_date_ms: "1701705599000",
  in_app_ownership_type: "PURCHASED",
  web_order_line_item_id: "100000000000000"
};

var renew = {
  product_id: mapping[0],
  original_transaction_id: "100000000000000",
  auto_renew_product_id: mapping[0],
  auto_renew_status: "1"
};

if (mapping[1]) {
  delete inapp.expires_date;  
delete inapp.expires_date_ms;
  delete inapp.expires_date_pst;
} else {
  Mike.latest_receipt_info = [inapp];
  Mike.latest_receipt = "https://t.me/TrollStoreKios";
  Mike.pending_renewal_info = [renew];
}

Mike.receipt.in_app = [inapp];

console.log('成功🌹🌹🌹');
console.log('Tg频道: https://t.me/TrollStoreKios');

$done({ body: JSON.stringify(Mike) });
