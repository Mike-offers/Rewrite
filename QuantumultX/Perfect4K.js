/*************************************

>「 脚本名称 」         完美4K解锁会员视频
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-27
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/111\.229\.140\.167\:8762\/apptov5\/v1\/(vod\/getVod|user\/getUserInfo) url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/Perfect4K.js

[mitm]
hostname = %APPEND% 111.229.140.167

*************************************/

var url = $request.url;
if (/v1\/vod\/getVod/.test(url)){
    var body = $response.body;
    body = body.replace(/is_free":\w+/g,'is_free":true')
    .replace(/concurrent":\w+/g,'concurrent":true')
    $done({ body });
}
if (/v1\/user\/getUserInfo/.test(url)) {
    var Mike = JSON.parse($response.body);
    Mike = {
  "code" : 1,
  "data" : {
    "user_points_froze" : 0,
    "user_last_login_time" : 1727754747,
    "user_portrait" : "",
    "user_email" : "",
    "user_end_time" : 0,
    "user_question" : "",
    "user_id" : 1280,
    "group_id" : 2,
    "gbook_num" : 0,
    "user_reg_time" : 1727234749,
    "user_last_login_ip" : "128.20.121.27",
    "group" : {
      "group_name" : "永久会员",
      "group_status" : 1,
      "group_id" : 2
    },
    "user_login_num" : 3,
    "promotion_next_desc" : "没有更多的奖励啦！",
    "user_points" : 0,
    "user_status" : 1,
    "user_answer" : "",
    "user_nick_name" : "",
    "promotion_num" : 0,
    "barrage_num" : 0,
    "user_name" : "Tg频道@TrollStoreKios"
  },
  "msg" : "ok",
  "ENCRYPTION" : 0
    }
   Mike = JSON.stringify(Mike);
   $done({ Mike });
}

