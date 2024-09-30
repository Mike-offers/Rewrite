/*************************************

>「 脚本名称 」         悟饭乐享解锁Vip
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-26
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]

^https?:\/\/iosv2.cjapi.wufan88.com/user/ios_store_pay_edition/members_login/get_member_info url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/WFLX.js

[mitm]
hostname = iosv2.cjapi.wufan88.com

*************************************/

var Mike = JSON.parse($response.body);
Mike = {
  "error":0,
  "data":{
    "error_msg":"",
    "is_success":true,
    "user_info":{
      "is_vip":"9A0684792021D73BE42B71491469ADFA",
      "clean_id":"39E71CC1F4A8F59725C62BE3AAAD424E",
      "play_token":"F0ED6D6872782A1B0A67BBD1C3257C1618919DB32B116CF8F06D8E68815ED4A043AE5F26DE7B7F50872055FD71DD5635B07CC3EB0EEC3395553BE79B824CDCA3",
      "is_expired":0,
      "expired_time":1800000000
    },
    "error_code":"",
    "data_info":[]
  }
}
$done({body : JSON.stringify(Mike)});
