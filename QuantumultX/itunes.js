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

var Mike = JSON.parse($response.body);

// ========= 核心数据 ========= //
var productidmap={
	'default':['https://t.me/TrollStoreKios',0],
	'com.sugarmo.ScrollClip':['com.sugarmo.ScrollClip.pro',1],
	'com.zijayrate.analogcam':['com.zijayrate.analogcam.vipforever10',0],
	'com.loveyouchenapps.knockout':['com.knockout.7daysplus',0],
	'net.shinyfrog.bear-iOS':['net.shinyfrog.bear_iOS.pro_yearly_subscription_bis',0],
	'com.yengshine.proccd':['com.yengshine.proccd.year',0],
	'com.yumiteam.Kuki.ID':['com.yumiteam.Kuki.ID.4',1],
	'com.calc.iphone':['calc_Unlock_1',0],
	'me.imgbase.intolive':['me.imgbase.intolive.proSubYearly',0],
	'MVH6DNU2ZP.input':['com.logcg.loginput',1],
	'com.waterminder.waterminder':['waterminder.premiumYearly',0],
	'wtf.riedel.one-sec':['wtf.riedel.one_sec.pro.annual.individual',0],
	'com.aaaalab.nepacket':['com.li.blur.pro.month',0],
	'com.inturnex.Sticker-Maker':['com.inturnex.Sticker_Maker.full_access',1],
	'FuYuan.inkDiary':['FuYuan.inkDiary.YearB.Pro',0],
	'me.imgbase.imgplay':['me.imgbase.imgplay.subscriptionYearly',0],
	'com.mediaeditor.video':['yearautorenew',0],
	'com.anycasesolutions.SexTracker':['com.anycasesolutions.SexTracker.3mon',0],
	'com.jianili.pawff':['com.jianili.pawff.pro.monthly',0],
	'icar.ren.smk':['smoke19870727',0],
	'com.meditation.heartratehrv':['lifetimeusa',1],
	'livintis.com.wallpapermonster':['wallpaperworld.subscription.yearly.12.notrial',0],
	'com.tianlang.gifmaker':['com.tianlang.gifmaker.forever',1],
	'me.imgbase.videoday':['me.imgbase.videoday.profeaturesYearly',0],
	'com.icandiapps.nightsky':['com.icandiapps.ns4.annual',0],
	'com.lixkit.diary':['com.lixkit.diary.permanent_68',0],
	'com.touchbits.subscriptions':['com.touchbits.subscriptions.iap.pro.yearly',0],
	'dev.sanjin.WasteCat':['dev.sanjin.WasteCat.PermanentVip',1]
}

var mapid = Mike.receipt.bundle_id;
var mapping = productidmap[mapid] || productidmap.default;

var inapp = {
    product_id: mapping[0],
    quantity: "1",
    expires_date: "2099-09-09 09:09:09 Etc/GMT",
    expires_date_pst: "2099-09-09 09:09:09 America/Los_Angeles",
    expires_date_ms: "4101292799000",
    is_in_intro_offer_period: "true",
    transaction_id: "100000000000000",
    is_trial_period: "false",
    original_transaction_id: "100000000000000",
    purchase_date_ms: "1701705599000",
    purchase_date: "2009-09-09 09:09:09 Etc/GMT",
    purchase_date_pst: "2009-09-09 09:09:09 America/Los_Angeles",
    original_purchase_date: "2009-09-09 09:09:09 Etc/GMT",
    original_purchase_date_pst: "2009-09-09 09:09:09 America/Los_Angeles",
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

console.log('操作成功🎉🎉🎉\n我的电报频道：https://t.me/TrollStoreKios');

$done({ body: JSON.stringify(Mike) });
