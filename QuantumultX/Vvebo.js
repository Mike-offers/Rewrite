/************************************

>「 脚本名称 」         修复Vvebo用户主页的显示
>「 脚本作者 」         bin64 
>「 更新时间 」         2024-05-29
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https:\/\/api\.weibo\.cn\/2\/(users\/show|statuses\/user_timeline|profile\/statuses\/tab)\? url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/JibJab.js

[mitm]
hostname = api.weibo.cn

*************************************/

let url = $request.url;
let hasUid = (url) => url.includes("uid");
let getUid = (url) => (hasUid(url) ? url.match(/uid=(\d+)/)[1] : undefined);

if (url.includes("users/show")) {
  $prefs.setValueForKey(getUid(url), "weibouid");
  $done({});
} else if (url.includes("profile/statuses/tab")) {
  try {
    let data = JSON.parse($response.body);
    let statuses = data.cards
      .map((card) => (card.card_group ? card.card_group : card))
      .flat()
      .filter((card) => card.card_type === 9)
      .map((card) => card.mblog)
      .map((status) =>
        status.isTop
          ? {
              ...status,
              label: "置顶",
            }
          : status
      );
    let sinceId = data.cardlistInfo.since_id;
    $done({
      body: JSON.stringify({
        statuses,
        since_id: sinceId,
        total_number: 100,
      }),
    });
  } catch {
    console.log("修正失败，请联系GitHub：bin64 ");
  }
} else if (url.includes("statuses/user_timeline")) {
  let uid = getUid(url) || $prefs.valueForKey("weibouid");
  url = url
    .replace("statuses/user_timeline", "profile/statuses/tab")
    .replace("max_id", "since_id");
  url = url + `&containerid=230413${uid}_-_WEIBO_SECOND_PROFILE_WEIBO`;
  $done({
    url,
  });
} else {
  $done({});
}
