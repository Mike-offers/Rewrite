/*

VideoLeap unlock Vip by 渤涵

[rewrite_local]
^https:\/\/api\.lightricks\.com\/subscription url script-response-body buehen0426/Scripts/videoleap/videoleap.js

[MITM]
hostname = api.lightricks.com

*/

var obj = JSON.parse($response.body);
obj.isExpired = false,
obj.latestExpirationDateMs = 1888888888000,
obj.latestProductId = "com.lightricks.EnlightVideo_V2.PJ.1Y.SA_1Y",
obj.nextProductId = "com.lightricks.EnlightVideo_V2.PJ.1Y.SA_1Y"

$done({body: JSON.stringify(obj)});