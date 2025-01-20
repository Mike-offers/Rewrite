/*************************************

>「 脚本名称 」         Lightricks作者全应用解锁Pro
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-11-15
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/(.+api)\.lightricks\.com\/store\/v\d\/validateReceipt url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/Lightricks.js

[mitm]
hostname = (.+api).lightricks.com

*************************************/

var Mike = JSON.parse($response.body);

var productidarrays={ 	
'RStarsShare':['Mike','https://t.me/TrollStoreKios'], 	
'com.lightricks.Facetune2':['Facetune','com.lightricks.Facetune2.V3.PricingJul22D.NT.OneTimePayment'],
'com.lightricks.Enlight-Video':['Videoleap','com.lightricks.EnlightVideo_V2.PQ.OTP.SA_OTP.SA'],
'com.lightricks.Enlight-Phoenix_V2.PB.OTP.SA_OTP.SA':['Motionleap','com.lightricks.EnlightPhoenix_V2.PB.OTP.SA_OTP.SA'],
'com.lightricks.Enlight-Photos':['Lightleap','com.lightricks.EnlightPhotos_V2.PA.OTP.SA_OTP.SA'],
'com.lightricks.Lightwave.':['Beatleap','com.lightricks.Lightwave_V5.PB_OTP.SA'],
'com.lightricks.Enlight-Quickart':['Artleap','com.lightricks.Quickart_V5.PA_OTP.SA'],
'com.lightricks.Antares':['Boosted','com.lightricks.Antares_V2.PB.OTP.SA_OTP.SA'],
'com.lightricks.Bambi':['Seen','com.lightricks.Bambi_V5.PB_OTP.SA']
};

var arraysid = Mike.receipt.bundle;
var array = productidarrays[arraysid] || productidarrays.RStarsShare;

var commonProperties = {
    "originalPurchaseDateTime" : 4137027600000,
    "originalTransactionId" : "260002076430152",
    "productId" : array[1],
    "transactionId" : "260002076430152"
};

Mike.receipt.subscription = {
    ...commonProperties,
    "expired" : false,
    "isFraud" : false,
    "pendingRenewalInfo" : {
        "expectedRenewalProductId" : array[1],
        "willAutoRenew" : true
    },
    "lastPurchaseDateTime" : 1734332074000,
    "expiresDateTime" : 4137027600000
};

Mike.receipt.transactions = {
    ...commonProperties,
    "originalPurchaseDateTime" : 1734332075000,
    "isTrialPeriod" : false,
    "purchaseDateTime" : 4137027600000,
    "quantity" : 1,
    "isIntroOfferPeriod" : false,
    "expiresDateTime" : 4137027600000
};

Mike.receipt = {
    "environment" : "production",
    "originalPurchaseDateTime" : 1696562094000,
    "receiptType" : "Production",
    ...Mike.receipt.subscription,
    ...Mike.receipt.transactions
};

Mike.valid = true;

$done({body : JSON.stringify(Mike)});

/*
{
  "receipt" : {
    "environment" : "production",
    "originalPurchaseDateTime" : 1696562094000,
    "receiptType" : "Production",
    "subscription" : {
      "expired" : false,
      "isFraud" : false,
      "originalPurchaseDateTime" : 1734332075000,
      "originalTransactionId" : "260002076430152",
      "pendingRenewalInfo" : {
        "expectedRenewalProductId" : "com.lightricks.Facetune2.V3.PricingAug22M10Trial.1WTrial.Yearly",
        "willAutoRenew" : true
      },
      "productId" : "com.lightricks.Facetune2.V3.PricingAug22M10Trial.1WTrial.Yearly",
      "lastPurchaseDateTime" : 1734332074000,
      "transactionId" : "260002076430152",
      "expiresDateTime" : 1734936874000
    },
    "transactions" : [
      {
        "originalPurchaseDateTime" : 1734332075000,
        "isTrialPeriod" : true,
        "originalTransactionId" : "260002076430152",
        "productId" : "com.lightricks.Facetune2.V3.PricingAug22M10Trial.1WTrial.Yearly",
        "purchaseDateTime" : 1734332074000,
        "quantity" : 1,
        "isIntroOfferPeriod" : true,
        "transactionId" : "260002076430152",
        "expiresDateTime" : 1734936874000
      }
    ]
  },
  "bundle" : "com.lightricks.Facetune2",
  "originalPurchaseDateTime" : 1696562094000,
  "requestId" : "c1f8b0ea-ad6f-472c-9f94-271ce216fe36",
  "currentDateTime" : 1734332078005,
  "valid" : true
}

https://oregon-api.lightricks.com/store/v1/validateReceipt
*/
