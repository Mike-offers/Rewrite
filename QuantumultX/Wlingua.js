/*************************************

>「 脚本名称 」         Wlingua解锁Premium
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-10-05
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/api\.wlingua\.io\/v\d+\/user\/\d+\/meta-course\/\d+\/get$ url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/Wlingua.js

[mitm]
hostname = api.wlingua.io

*************************************/

var Mike = JSON.parse($response.body);

Mike.config.sentenceExType.writeDictation = true;
Mike.config.sentenceExType.write = true;
Mike.config.sentenceExType.speak = true;
Mike.config.sentenceExType.speakPronunciation = true;
Mike.config.autoContinueEnabled = true;
Mike.config.vocExType.flashcard = true;

Mike.subscription.premiumEndTime = 4092599349;
Mike.premiumEndTime = 4092599349;

$done({JSON.stringify(Mike)});
