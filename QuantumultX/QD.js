
var body = $response.body;
var obj = JSON.parse(body);

obj.data.level = 1;
obj.data.nickName = "Tg频道@TrollStoreKios";
obj.data.valiEndTime = "2099-09-09 09:09:09";
obj.data.menberType = "VIP_MENBER";
obj.data.payType = 1;

body = JSON.stringify(obj);

$done({body});
