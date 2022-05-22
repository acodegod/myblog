/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6f04792d88020d0c799c5cd37809b242"],["/about/index.html","80bc3d769bbca95a54a65001b4eb01ad"],["/archives/2020/03/index.html","f123a8a174c74d881858c14d313bf36f"],["/archives/2020/04/index.html","7f8442fa2e57c4f2a1f351345640c426"],["/archives/2020/05/index.html","c5bbfa62a952ab1a911db391016c0ea6"],["/archives/2020/index.html","7aebb2f07daf93cca09c51f958a62fc2"],["/archives/2021/01/index.html","e0ac8199b9ba414a53222e4147073d08"],["/archives/2021/02/index.html","57c1cbdd8333b8486b650a6e96f80c6e"],["/archives/2021/04/index.html","400b87f650ea01ccba2a1f0f9f132b2e"],["/archives/2021/05/index.html","e1b2e73517c892e272db1ca7bc7cf17e"],["/archives/2021/index.html","ab89976bde847ba43e2405523d1f09c9"],["/archives/2022/03/index.html","befec5128cadb2045f6d41454ec16d8c"],["/archives/2022/05/index.html","6b408726ab07014f1d2c0505f86758f1"],["/archives/2022/index.html","e5c11d1e1d5dc798583bb696b2ac830a"],["/archives/index.html","00492d0a5efaa06436c84ad1a53e02f3"],["/archives/page/2/index.html","3641f917a7ac12994d61f832bae9fa00"],["/baidusitemap.xml","f1560e1f4ad6be3e621f7ecba5120785"],["/categories/JAVA/index.html","04242693b495b419b2513948b8816440"],["/categories/Jetbrains/index.html","99e52b02bf091d90bd85c17f3dab7718"],["/categories/MySQL/index.html","2e7d1b591d3771d430bc6a1d3682f514"],["/categories/Python教程/index.html","0029cc5724a79dc97390a5f5ff21a3e8"],["/categories/Python案例/index.html","f77d65327c1a677006917feb8c7352df"],["/categories/index.html","6ca7372874d82163cb6bc02ccc0a4ec0"],["/categories/jQuery/index.html","23c961d48644fa91f3d1f4c2d2d02a32"],["/categories/系统优化/index.html","a47126e040997da7647d59dd3105c9d7"],["/categories/经验教程/index.html","553ddc3b2b8233443683bc4d7080e803"],["/charts/index.html","e689683b600d4936ced00dfb1ae66be9"],["/css/index.css","26973c852b4e27dedc0154cc239eec35"],["/css/tx.css","1980baef947fefb0b4661d1eaa10ef85"],["/css/var.css","acac7c70c6cf678e0d998e0d549f54b9"],["/fan/index.html","d79801c00d6d709e99ddbbb877b66df1"],["/go.html","5fde82567c67aae5a59daefc8c4a460e"],["/images/20150404H5648_ZuzhL.gif","d9fba22ae7869d89a1a8be45b2e4fdb7"],["/images/20200530181856.gif","6cd74bae87b2025e3d671a23dbf4b3ca"],["/images/H3342af90d24b4d62b9bbfec9688ccc25M.gif","8db5efdbe3f36746b18f7779c04b2d58"],["/images/UnblockNeteaseMusic(1).png","296229bfbc19b029db1afdcd08e19905"],["/images/UnblockNeteaseMusic(2).png","7c6cb7deaa433971dbefa87c3f0d0221"],["/images/e92eef6d3d32097f37c9da214a6203e4.png","0224244afde590f074aebc82a1056ef5"],["/images/footer-background.jpg","ff6f7f886887d35b1611fd91db122440"],["/images/gezi.svg","c7cc2cffd5713c7fafa4dfddedf95d0c"],["/images/head-background.jpg","edd6a02fa9212f5311440ded085c74f3"],["/images/heart3.gif","b362272bbd9fb8ff8bbb6cb0fce899cf"],["/images/java-study1.png","d737f4087abb79eccbe53f068534c9cf"],["/images/java-study10.png","39507c1e38e6caa2a2bad3e6d2d7af0e"],["/images/java-study11.png","dbf0f981521f4b9e062875e04213b5a0"],["/images/java-study12.png","226a04642e01a2440d582307162c11c2"],["/images/java-study13.png","824ce9f59e3854de907f83035f81161f"],["/images/java-study2.png","07164decd52ca450d4484432fcd0f5f9"],["/images/java-study3.png","21422406c4e7ce94f485a46a61f01f8e"],["/images/java-study4.png","be515103c121d569daae56bd46d08d0e"],["/images/java-study5.png","7a26c2f4446782a10b06816370db00d4"],["/images/java-study6.png","b060fcbb833945d8045157782ac9252b"],["/images/java-study7.png","9cef4b5264e9f7f957d0fed87587eaf2"],["/images/java-study8.png","672231bb52618ed8b37ed573d4b89f2b"],["/images/java-study9.png","cafaf6a53d6b4144079d09365128d134"],["/images/java.png","e39d6807d3fa208f6e869184dd27289c"],["/images/love.png","0a168d12a584049ea65075e2b2140b33"],["/images/love2.png","6813552845c604227f37f7507dda0cd0"],["/images/music1.png","39223e0c0de69572750599bcfec64ec1"],["/images/music2.png","458ea7a04c5efa42c15463e4a280e5e9"],["/images/music3.png","7de1ed00ae142b3edb0bec22fad15832"],["/images/music4.png","af84894df1a25391ce4cdaa79e026947"],["/images/music5.png","2bb4b5604b347bce4b603a597a7a0fd3"],["/images/pronhub.png","cc06f72692c52d255dcad2e546c387b9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Archives-background.jpg","b9bc0d9829ca13c4a261ed37c78c6139"],["/img/Categories-background.jpg","1cdce39f3d70e396b120f0825b404e98"],["/img/Tags-background.jpg","607770eb50f9aa9955fb634c7069da25"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.png","4d82cc6d7d6f240974853a0d01b8acca"],["/img/background.jpg","73c827cd2522e0a5d428536caa495466"],["/img/bklogo.png","bdffdb8d3ea62d8584e1454c4a8cfeab"],["/img/favicon.png","451c55b63ba577a45adc317e5f0adeea"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/jdgx.png","ce74d446dfc6af9ed86c6b8410f3e14d"],["/img/loading.gif","b586218ce4be647b6976115c5a992d64"],["/img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/img/shubiao1.png","423c33c9347506c3b04b0a47d1924ffe"],["/img/shubiao2.png","ba02ccded589512bf7a4df6c3a0d067d"],["/img/siteicon/README.html","fce391e9b00c589b2a5c718dec12f9a6"],["/img/siteicon/android-chrome-144x144.png","ad3316a4e928b8f6255121893e1e989b"],["/img/siteicon/android-chrome-192x192.png","a474532fe2a4403a66e7bebbfd9e532c"],["/img/siteicon/android-chrome-36x36.png","020f34a4b3dbb0ebe2e45de06754ac18"],["/img/siteicon/android-chrome-48x48.png","43620043fdeb1c6626f494d10f0ec5fe"],["/img/siteicon/android-chrome-72x72.png","90569ecbf1501e67ae6adbdf7710a9f2"],["/img/siteicon/android-chrome-96x96.png","79487ad677e9723c804d3db356153ad8"],["/img/siteicon/apple-touch-icon.png","dfb9435b3da59354b0991b35c1cf129c"],["/img/siteicon/browserconfig.xml","1aaa5e6dc22f775d20b92737d28e83f6"],["/img/siteicon/favicon-16x16.png","fc88330cea740a08cedfa5c7461b2c9a"],["/img/siteicon/favicon-32x32.png","2750e660003c99d804bcee97dd895bdc"],["/img/siteicon/mstile-150x150.png","02c4c596b132046f4df0d5c81535ed18"],["/img/siteicon/safari-pinned-tab.svg","cd63146a8c436a460623b70099f96341"],["/img/wechat-gzh.png","cd6a4562845cdd3edef26287deb679a0"],["/img/wechatpay.png","e867b359eb03b49110b08e1411ea06c6"],["/index.html","bbb201b544646e179c73d2e6ca4e448d"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/new.js","27d305103a9efc8f572cb20d29aea23c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/video.js","026bd8f66ca6a0e146dd62da11cfa925"],["/kernel.html","19906ffb347d8442ed24117300a92c8f"],["/link/index.html","cdcd295119aab7bb0c31a8d557fabc3b"],["/love/index.html","b6a194e6d1b882ac1c8fdebe6cab1bc2"],["/love/photos/index.html","c90869fa1657b9f8274d481968bee530"],["/love/todo/index.html","ab5d8c466629af750c53f8bd33f0266f"],["/page/2/index.html","89c95c5f82dfa09e91eae0ce0cecf228"],["/page/3/index.html","135308f96678b909483f7c7d5ec49de3"],["/photo/index.html","8715f8178a0f5aeff94b4153bcf1eaa4"],["/post/Jetbrains-eval-resetter/index.html","cca03b2a897509a2935fa4d68287b960"],["/post/PCUnblockNeteaseMusic/index.html","a231eeba15f8d38949285003a7bffc54"],["/post/Spring-stduy/index.html","10bfde1885ce21bdb10faaff9d068d76"],["/post/UnblockNeteaseMusic/index.html","ea4f80c59262b2be2f9abe18a12eb11c"],["/post/dailiip/index.html","c2bf0346168a81da1b90a7a341d95e4a"],["/post/good-win11/index.html","ea060873db57af3a2a6cb2e104b2053d"],["/post/helloword/index.html","68827af9c38b361fdfded6ae206236c3"],["/post/imgvideoapi/index.html","d63b64cacfbe96156d3af960eeabb2c5"],["/post/java-study/index.html","d798e41c86620d7065661a56c38dc60e"],["/post/leetcode-1/index.html","aa698a8f3090844f320114ac900cd834"],["/post/leetcode-2/index.html","0a88889d371b35340457f408d6afa316"],["/post/study_jquery_one/index.html","809e1881721b2645bf86eb81198fd5d0"],["/post/study_jquery_two/index.html","01cf4a7d56aeaa2d5cc4723a245e3d4d"],["/post/study_mysql_one/index.html","8cb1c5a5234c8ce0e892a662cd40bd76"],["/post/study_mysql_two/index.html","dd31a68a7c66d2984f1105901fbede0c"],["/post/wzryphoto/index.html","60e3074350b9410b27d97ced8f324aa5"],["/post/xiaojiejiebizhi/index.html","dc90511c3090a511aac2e93b3c94d5c7"],["/post/xpath-use/index.html","f36c191a1a52ae1b5560d5a841162199"],["/random.eat/index.html","f194bf17b20efdb2f9724aa8705e02d9"],["/random.eat/static/css/layui.css","bad41f7a929cb47722612e9c754cb844"],["/random.eat/static/css/style.min.css","ee266e4c3ed2eae321e06feb1ecc945a"],["/random.eat/static/fonts/iconfont.eot","fdbe35e060901bd964d6247422c675dd"],["/random.eat/static/fonts/iconfont.svg","fdbe35e060901bd964d6247422c675dd"],["/random.eat/static/fonts/iconfont.ttf","fdbe35e060901bd964d6247422c675dd"],["/random.eat/static/fonts/iconfont.woff","fdbe35e060901bd964d6247422c675dd"],["/random.eat/static/images/bg.jpg","33e643b23393fda828a3a79951dce115"],["/random.eat/static/js/app.min.js","39a4e80b221340e393287fe94e3b33df"],["/random.eat/static/js/layui.js","9ce1e72061667a94713bfd959ca48e63"],["/random.eat/static/js/wb.js","2f265ed0b097bf7bb16bfcebcec0218b"],["/random.eat/static/js/zepto.min.js","afd4c64c304f42ae18809f55f4725625"],["/random.eat/static/picture/wx.png","67d0e40299a9e546b1d2861d1aaa25fc"],["/search.xml","40e0c70e7e8dc99156238c471f595588"],["/sitemap.xml","cca61edfb0431f38de7a474d773025de"],["/sw-register.js","e01ae49f84f281039636275376b1c345"],["/tags/API/index.html","6d0feb2fdf96fd4d260d0adaddb6b867"],["/tags/JAVA/index.html","d9e6f85bccbcaab0fced84c3c24a0433"],["/tags/Jetbrains/index.html","2cec620666ba059eb289875e3a297540"],["/tags/MySQL/index.html","451cb2efe7cb7c232557dbef81f4061f"],["/tags/OS/index.html","c0d110d1360fb13bdcc208e717c75a29"],["/tags/PHP/index.html","59838ad8d4283d99aafc305028f65d28"],["/tags/Spring/index.html","2da2a41078426e0ed034354ac14b80af"],["/tags/github/index.html","3f8e4017f5acdd5d2c84b03dbd38aa02"],["/tags/index.html","af182a665eefb2797425ee8d7e0f0b64"],["/tags/jQuery/index.html","6a863f6fee4f694db5db670c1537a0c5"],["/tags/python/index.html","6d34d9b06e2317cc739af0f0abe13add"],["/tags/xpath/index.html","cb26f810c752514e3a2c92bd1f73b3ab"],["/tags/代理IP/index.html","24ccd6ac25b24b1d28fc55bef5c8d604"],["/tags/代码/index.html","a06a9921ab85abb056d2da87479e9c46"],["/tags/做题笔记/index.html","a77be2f31be37f8187a23e019953ae89"],["/tags/力扣/index.html","222b7b6c986d89db23894192c5c2567d"],["/tags/图片/index.html","d65283b5a8c7ba8d4cb07e1ad75c81d8"],["/tags/壁纸/index.html","c0f626b1691bd5e7d7dea4a1cc0742df"],["/tags/学习路线/index.html","bcfdd6b79554be90577b682e9a781417"],["/tags/宝塔/index.html","2fe5808ed49f95b3f60d4fd4ecd40b11"],["/tags/教程/index.html","d9058f006ec7a93a44966221b0773aaa"],["/tags/数组/index.html","7c1072313a2ca50caf02909a47ff802c"],["/tags/爬虫/index.html","031ac79a3acdbe7980e2c0b515cfdce7"],["/tags/王者荣耀/index.html","a3660dda220328302b842bfe159d3ec4"],["/tags/笔记/index.html","958344e9d7eed37cf1a25afb7ebc1454"],["/tags/随机图片/index.html","92e6bfc38180282f561dc67c6d4bf991"],["/tags/音乐/index.html","31f631806d9c517d381e6f177922197c"],["/talk/index.html","cabe11245257277cf46ef0cc96616e67"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcdn.net"});





/* eslint-enable */
