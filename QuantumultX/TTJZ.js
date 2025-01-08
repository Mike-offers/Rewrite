/************************************

>「 脚本名称 」         团团记账解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-12-04
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/gs\.gateway\.gameley\.cn\/np-book-user\/(open\/list|user\/refresh\/token) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/TTJZ.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/TTJZ.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/TTJZ.js

[mitm]
hostname = gs.gateway.gameley.cn , api.revenuecat.com

*************************************/

let obj = {};
let body;

var _0xod4='\x6a\x73\x6a\x69\x61\x6d\x69\x2e\x63\x6f\x6d\x2e\x76\x37';function _0x4511(_0x55c670,_0x10db12){var _0x25859f=_0x2585();return _0x4511=function(_0x45110f,_0x21b597){_0x45110f=_0x45110f-0x1bc;var _0x24927c=_0x25859f[_0x45110f];if(_0x4511['lcSWne']===undefined){var _0x2e5b6c=function(_0x4ac03e){var _0x2947be='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x137c7c='',_0x2eb1be='';for(var _0x8fe43f=0x0,_0x1c544c,_0x175190,_0x31ed7d=0x0;_0x175190=_0x4ac03e['charAt'](_0x31ed7d++);~_0x175190&&(_0x1c544c=_0x8fe43f%0x4?_0x1c544c*0x40+_0x175190:_0x175190,_0x8fe43f++%0x4)?_0x137c7c+=String['fromCharCode'](0xff&_0x1c544c>>(-0x2*_0x8fe43f&0x6)):0x0){_0x175190=_0x2947be['indexOf'](_0x175190);}for(var _0x5a33c2=0x0,_0x516254=_0x137c7c['length'];_0x5a33c2<_0x516254;_0x5a33c2++){_0x2eb1be+='%'+('00'+_0x137c7c['charCodeAt'](_0x5a33c2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2eb1be);};var _0x3cbf77=function(_0x5088b7,_0x15a4ac){var _0x27b96b=[],_0x91ef85=0x0,_0x60b0d9,_0xe05c8c='';_0x5088b7=_0x2e5b6c(_0x5088b7);var _0x537e51;for(_0x537e51=0x0;_0x537e51<0x100;_0x537e51++){_0x27b96b[_0x537e51]=_0x537e51;}for(_0x537e51=0x0;_0x537e51<0x100;_0x537e51++){_0x91ef85=(_0x91ef85+_0x27b96b[_0x537e51]+_0x15a4ac['charCodeAt'](_0x537e51%_0x15a4ac['length']))%0x100,_0x60b0d9=_0x27b96b[_0x537e51],_0x27b96b[_0x537e51]=_0x27b96b[_0x91ef85],_0x27b96b[_0x91ef85]=_0x60b0d9;}_0x537e51=0x0,_0x91ef85=0x0;for(var _0x33b61d=0x0;_0x33b61d<_0x5088b7['length'];_0x33b61d++){_0x537e51=(_0x537e51+0x1)%0x100,_0x91ef85=(_0x91ef85+_0x27b96b[_0x537e51])%0x100,_0x60b0d9=_0x27b96b[_0x537e51],_0x27b96b[_0x537e51]=_0x27b96b[_0x91ef85],_0x27b96b[_0x91ef85]=_0x60b0d9,_0xe05c8c+=String['fromCharCode'](_0x5088b7['charCodeAt'](_0x33b61d)^_0x27b96b[(_0x27b96b[_0x537e51]+_0x27b96b[_0x91ef85])%0x100]);}return _0xe05c8c;};_0x4511['yYCdgk']=_0x3cbf77,_0x55c670=arguments,_0x4511['lcSWne']=!![];}var _0x339394=_0x25859f[0x0],_0x218896=_0x45110f+_0x339394,_0x248696=_0x55c670[_0x218896];return!_0x248696?(_0x4511['hlErXr']===undefined&&(_0x4511['hlErXr']=!![]),_0x24927c=_0x4511['yYCdgk'](_0x24927c,_0x21b597),_0x55c670[_0x218896]=_0x24927c):_0x24927c=_0x248696,_0x24927c;},_0x4511(_0x55c670,_0x10db12);}function _0x2585(){var _0x876b68=(function(){return[_0xod4,'WXXjsjiKMaeNmqMip.hcOWoWVEmdM.grUvY7yFRQ==','WOW5uaOCtHNdOG','kZJdVmobWQfaWQHjdqlcRIS6','W5/cHGudWQFcGwRdN2mfka','WRRcVahcSa','WRvcjSkP','W4VcJI4t','lCoJW55p','W65lW5DTWR19WR9J','W64cWOGHWPKBWPhcO8oyWR15fG'].concat((function(){return['W4dcJYWf','WOqEDcO','FMxdJSkLkfpdI3pcN8oCW5pdIvG','BM3cTSke','W5jlW40','jSoIW5Xz','W7RdOuFcQsddR0FdQ8oN','WOhdO8kqW5CYeWNdLMO','W6HVW7/cRmoWWPytqgddGhb+','WQO+WRRdQSkM','lCo3q0BdUmkTWPbwW7RcIWZcU8k7'].concat((function(){return['WRePoHPCWOZdLCouWRH1EGhdJG','nuyIWODytYhdJSomqmo+gmkHAq','WQ8SWQ3dQW','W6SYW7f4WQ1eWQS','W5icW6VdRG','W6TTW7VcQCo6WPzhlhxdJNzYs8oA','WQXtW41NW48','WQ0VDSkCDCouW4KRWPy','W6OaWOyLWPHjWQhcO8o4WQnV','W69RxSkVwSoyW7CG'];}()));}()));}());_0x2585=function(){return _0x876b68;};return _0x2585();};var _0x2dc29e=_0x4511;if(function(_0xf2a5f8,_0x4fe465,_0x417df8,_0x2a75cb,_0x5f5878,_0x4cf710,_0x51234e){return _0xf2a5f8=_0xf2a5f8>>0x5,_0x4cf710='hs',_0x51234e='hs',function(_0x4dbffa,_0x34df33,_0x19c3b8,_0x1c9511,_0x237418){var _0x322b35=_0x4511;_0x1c9511='tfi',_0x4cf710=_0x1c9511+_0x4cf710,_0x237418='up',_0x51234e+=_0x237418,_0x4cf710=_0x19c3b8(_0x4cf710),_0x51234e=_0x19c3b8(_0x51234e),_0x19c3b8=0x0;var _0x52f799=_0x4dbffa();while(!![]&&--_0x2a75cb+_0x34df33){try{_0x1c9511=parseInt(_0x322b35(0x1d2,'j#W@'))/0x1*(-parseInt(_0x322b35(0x1d8,'veOc'))/0x2)+-parseInt(_0x322b35(0x1c2,'NxE0'))/0x3+-parseInt(_0x322b35(0x1bf,'2scI'))/0x4*(-parseInt(_0x322b35(0x1d0,'2Ot)'))/0x5)+-parseInt(_0x322b35(0x1c8,'veOc'))/0x6*(parseInt(_0x322b35(0x1d5,'%rQN'))/0x7)+-parseInt(_0x322b35(0x1d6,'&4nj'))/0x8+parseInt(_0x322b35(0x1bc,'j#W@'))/0x9+parseInt(_0x322b35(0x1c1,'wHSV'))/0xa*(parseInt(_0x322b35(0x1d4,'6xJA'))/0xb);}catch(_0x51d4c6){_0x1c9511=_0x19c3b8;}finally{_0x237418=_0x52f799[_0x4cf710]();if(_0xf2a5f8<=_0x2a75cb)_0x19c3b8?_0x5f5878?_0x1c9511=_0x237418:_0x5f5878=_0x237418:_0x19c3b8=_0x237418;else{if(_0x19c3b8==_0x5f5878['replace'](/[OygRMqKrNEdUFeYpXWhVQ=]/g,'')){if(_0x1c9511===_0x34df33){_0x52f799['un'+_0x4cf710](_0x237418);break;}_0x52f799[_0x51234e](_0x237418);}}}}}(_0x417df8,_0x4fe465,function(_0x62493e,_0x4abfff,_0x45da30,_0x1c142f,_0x38d336,_0xec304a,_0x3fa02c){return _0x4abfff='\x73\x70\x6c\x69\x74',_0x62493e=arguments[0x0],_0x62493e=_0x62493e[_0x4abfff](''),_0x45da30='\x72\x65\x76\x65\x72\x73\x65',_0x62493e=_0x62493e[_0x45da30]('\x76'),_0x1c142f='\x6a\x6f\x69\x6e',(0x1936d9,_0x62493e[_0x1c142f](''));});}(0x17a0,0xbc433,_0x2585,0xbf),_0x2585){}if(/user\/refresh\/token/[_0x2dc29e(0x1cd,'NxE0')]($request['url']))body=JSON[_0x2dc29e(0x1bd,'2scI')]($response[_0x2dc29e(0x1cb,'M98e')]),body[_0x2dc29e(0x1cf,'@prx')][_0x2dc29e(0x1d9,'l8a!')]={...body['info'][_0x2dc29e(0x1d7,'j#W@')],'visitVipForever':!![],'visitVipBoolean':!![],'normalVipBoolean':!![],'normalVipForever':!![],'adVipBoolean':!![],'adVipForever':!![]},obj[_0x2dc29e(0x1c7,'@prx')]=JSON[_0x2dc29e(0x1be,'WrCb')](body);else/open\/list\/token/[_0x2dc29e(0x1c4,'2Ot)')]($request[_0x2dc29e(0x1ce,'K(0Y')])&&(body=JSON[_0x2dc29e(0x1d3,'j#W@')]($response[_0x2dc29e(0x1c5,'[e(@')]),body[_0x2dc29e(0x1c6,'lU*(')]['openVos']=[],obj[_0x2dc29e(0x1ca,'lU*(')]=JSON[_0x2dc29e(0x1d1,'pjrY')](body));var version_ = '\x6a\x73\x6a\x69\x61\x6d\x69\x2e\x63\x6f\x6d\x2e\x76\x37';
else{
   if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {
    const product_id = "all";
    const entitlements = ['com.ziheng.totowallet.onetimepurchase',
        "com.ziheng.totowallet.yearly"];
    let data = {"expires_date": "2999-09-09T09:09:09Z","original_purchase_date":"2021-01-01T00:00:00Z","purchase_date": "2021-01-01T00:00:00Z","ownership_type": "PURCHASED","store": "app_store"};
    let subscriber = body.subscriber;
    subscriber.subscriptions[(product_id)] = data;

    for (let entitlement of entitlements) {
       subscriber.entitlements[(entitlement)] = data;        
       subscriber.entitlements[(entitlement)].product_identifier = product_id;   
    }

    obj.body = JSON.stringify(body);
  } 
}
}
$done(obj);
