/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0e4578e1bde16ec0cc3baf170ec8b04e"],["/about/index.html","dc7ed0a12b1bb534ba5419f6a78d2ad8"],["/archives/2020/03/index.html","3d40642644528694b44100d68cfc7cba"],["/archives/2020/04/index.html","630dadf1edb6711ebb1dcac677e830bc"],["/archives/2020/05/index.html","728f0521cc6607486642b202e9d68a45"],["/archives/2020/index.html","a0eb56669b3d7a93c80ae8c4d8dcefa3"],["/archives/2021/01/index.html","949d6f150eebd11e05501ad028da8a48"],["/archives/2021/02/index.html","6d2279fe0c61aa42f3938f6b4e385e80"],["/archives/2021/04/index.html","88d26fd1db90c779f001d5c4fa767862"],["/archives/2021/05/index.html","dd7c9371657089be6470a59ab4493340"],["/archives/2021/08/index.html","298d24a43572e39183462d601586ff3e"],["/archives/2021/index.html","6bbf59e39733843511c50b7cbeba2021"],["/archives/index.html","fd57d1a82be0aebaf85f34fffa838f0f"],["/archives/page/2/index.html","c1ad91692f7b614bea663fc02414c96e"],["/baidusitemap.xml","66d901fdf10ad190eb80adaa9e509bc7"],["/categories/JAVA/index.html","6742e541815f5ef6f0103e33009c3b4f"],["/categories/Jetbrains/index.html","b6c8f9fd89c29918f4cc7a6fc2f559e8"],["/categories/MySQL/index.html","5dd7e1ee20274df41e1b0f4d57f12d8c"],["/categories/Python教程/index.html","a1f2a2e65e12629ef007633ad4f5ea27"],["/categories/Python案例/index.html","e509bbca349d87e74661cdbe32382557"],["/categories/index.html","d6a752fc83e197cbf0280a1bfc042c1c"],["/categories/jQuery/index.html","7ad017c4aff5c249d212bd6f98fcf11b"],["/categories/娱乐/index.html","73bb56c2136033a2c65045d3b00d8742"],["/categories/经验教程/index.html","93417d1a1ddf013e9fe760816e1583bd"],["/charts/index.html","4a3ea7c2cba55367a4b5e4ea6ab5d87c"],["/css/index.css","471c0a09e28b76a0f16c8d8b8d6c0be4"],["/css/tx.css","14acb0f7039ca569dede86ff9228621c"],["/css/var.css","b61d1b8770d1869fe8a8064744abde4d"],["/fan/index.html","de8421bfc379353e321a65aa21fcbfdc"],["/go.html","7243c73675193081cf01de8e54d1252f"],["/images/20150404H5648_ZuzhL.gif","d9fba22ae7869d89a1a8be45b2e4fdb7"],["/images/20200530181856.gif","6cd74bae87b2025e3d671a23dbf4b3ca"],["/images/H3342af90d24b4d62b9bbfec9688ccc25M.gif","8db5efdbe3f36746b18f7779c04b2d58"],["/images/UnblockNeteaseMusic(1).png","296229bfbc19b029db1afdcd08e19905"],["/images/UnblockNeteaseMusic(2).png","7c6cb7deaa433971dbefa87c3f0d0221"],["/images/e92eef6d3d32097f37c9da214a6203e4.png","0224244afde590f074aebc82a1056ef5"],["/images/footer-background.jpg","ff6f7f886887d35b1611fd91db122440"],["/images/gezi.svg","c7cc2cffd5713c7fafa4dfddedf95d0c"],["/images/head-background.jpg","edd6a02fa9212f5311440ded085c74f3"],["/images/heart3.gif","b362272bbd9fb8ff8bbb6cb0fce899cf"],["/images/java-study1.png","d737f4087abb79eccbe53f068534c9cf"],["/images/java-study10.png","39507c1e38e6caa2a2bad3e6d2d7af0e"],["/images/java-study11.png","dbf0f981521f4b9e062875e04213b5a0"],["/images/java-study12.png","226a04642e01a2440d582307162c11c2"],["/images/java-study13.png","824ce9f59e3854de907f83035f81161f"],["/images/java-study2.png","07164decd52ca450d4484432fcd0f5f9"],["/images/java-study3.png","21422406c4e7ce94f485a46a61f01f8e"],["/images/java-study4.png","be515103c121d569daae56bd46d08d0e"],["/images/java-study5.png","7a26c2f4446782a10b06816370db00d4"],["/images/java-study6.png","b060fcbb833945d8045157782ac9252b"],["/images/java-study7.png","9cef4b5264e9f7f957d0fed87587eaf2"],["/images/java-study8.png","672231bb52618ed8b37ed573d4b89f2b"],["/images/java-study9.png","cafaf6a53d6b4144079d09365128d134"],["/images/java.png","e39d6807d3fa208f6e869184dd27289c"],["/images/love.png","0a168d12a584049ea65075e2b2140b33"],["/images/love2.png","6813552845c604227f37f7507dda0cd0"],["/images/music1.png","39223e0c0de69572750599bcfec64ec1"],["/images/music2.png","458ea7a04c5efa42c15463e4a280e5e9"],["/images/music3.png","7de1ed00ae142b3edb0bec22fad15832"],["/images/music4.png","af84894df1a25391ce4cdaa79e026947"],["/images/music5.png","2bb4b5604b347bce4b603a597a7a0fd3"],["/images/pronhub.png","cc06f72692c52d255dcad2e546c387b9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Archives-background.jpg","b9bc0d9829ca13c4a261ed37c78c6139"],["/img/Categories-background.jpg","1cdce39f3d70e396b120f0825b404e98"],["/img/Tags-background.jpg","607770eb50f9aa9955fb634c7069da25"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.png","4d82cc6d7d6f240974853a0d01b8acca"],["/img/background.jpg","73c827cd2522e0a5d428536caa495466"],["/img/bklogo.png","bdffdb8d3ea62d8584e1454c4a8cfeab"],["/img/favicon.png","451c55b63ba577a45adc317e5f0adeea"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/jdgx.png","ce74d446dfc6af9ed86c6b8410f3e14d"],["/img/loading.gif","b586218ce4be647b6976115c5a992d64"],["/img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/img/shubiao1.png","423c33c9347506c3b04b0a47d1924ffe"],["/img/shubiao2.png","ba02ccded589512bf7a4df6c3a0d067d"],["/img/siteicon/README.html","a014f3e0b6c11ca63b1ec93f8f9604be"],["/img/siteicon/android-chrome-144x144.png","ad3316a4e928b8f6255121893e1e989b"],["/img/siteicon/android-chrome-192x192.png","a474532fe2a4403a66e7bebbfd9e532c"],["/img/siteicon/android-chrome-36x36.png","020f34a4b3dbb0ebe2e45de06754ac18"],["/img/siteicon/android-chrome-48x48.png","43620043fdeb1c6626f494d10f0ec5fe"],["/img/siteicon/android-chrome-72x72.png","90569ecbf1501e67ae6adbdf7710a9f2"],["/img/siteicon/android-chrome-96x96.png","79487ad677e9723c804d3db356153ad8"],["/img/siteicon/apple-touch-icon.png","dfb9435b3da59354b0991b35c1cf129c"],["/img/siteicon/browserconfig.xml","1aaa5e6dc22f775d20b92737d28e83f6"],["/img/siteicon/favicon-16x16.png","fc88330cea740a08cedfa5c7461b2c9a"],["/img/siteicon/favicon-32x32.png","2750e660003c99d804bcee97dd895bdc"],["/img/siteicon/mstile-150x150.png","02c4c596b132046f4df0d5c81535ed18"],["/img/siteicon/safari-pinned-tab.svg","cd63146a8c436a460623b70099f96341"],["/img/wechat-gzh.png","cd6a4562845cdd3edef26287deb679a0"],["/img/wechatpay.png","e867b359eb03b49110b08e1411ea06c6"],["/index.html","c908607978b170d1ed0aa3dfa2a5ea2c"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/new.js","27d305103a9efc8f572cb20d29aea23c"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/video.js","026bd8f66ca6a0e146dd62da11cfa925"],["/kernel.html","19906ffb347d8442ed24117300a92c8f"],["/link/index.html","52d0d446bf4696b6a1851ee4e85b70c8"],["/love/index.html","0664e7879646d8252c0aba2b63a066bd"],["/love/photos/index.html","89b9af0d239058d849cdadbacf4e5c4b"],["/love/todo/index.html","0504fc160dadab849784021bfdd3927c"],["/page/2/index.html","906d7f0cc23cc0bf2c17e26d765f8706"],["/page/3/index.html","db710619b92aac70d53b2541f2b478b2"],["/photo/index.html","64d027825d718a03d50a47cb8b391912"],["/post/Jetbrains-eval-resetter/index.html","f2807113316391cca9ffcafe2e452a25"],["/post/PCUnblockNeteaseMusic/index.html","0b469ca7dbef718f729f0bdb397892c3"],["/post/UnblockNeteaseMusic/index.html","58f1eabb5d1c34c62b778fa673b6886f"],["/post/dailiip/index.html","72f1edc047f041215ca85170eabf468e"],["/post/helloword/index.html","b866994c9cdc42cef83868d99c34b8b5"],["/post/imgvideoapi/index.html","ac9eeecda066f79cfe387ce8c622c1c1"],["/post/java-study/index.html","987ac0a9a2966d91aeba19fa63a92410"],["/post/leetcode-1/index.html","e04de967a1df0f7b8d660cfddbd71371"],["/post/leetcode-2/index.html","019b9569f504dc3b07e6585cf749e82e"],["/post/study_jquery_one/index.html","97f2e0fd5974030e28001d17c0c544b4"],["/post/study_jquery_two/index.html","855397ff82b0627417c6b69b9fc38783"],["/post/study_mysql_one/index.html","0400864ca2917293d0ebac3762205a32"],["/post/study_mysql_two/index.html","9aac507c51197d36273be61ab27ecda5"],["/post/wzryphoto/index.html","7976a7d55e93baf771737cfd8e1b2933"],["/post/xiaojiejie/index.html","46ca03d487456d268401418737534af4"],["/post/xiaojiejiebizhi/index.html","c9d62e30962b7c00a75cc73bdb2aca14"],["/post/xpath-use/index.html","76185967a7cf7a4faa94eec1171da1f1"],["/random.eat/index.html","f194bf17b20efdb2f9724aa8705e02d9"],["/random.eat/static/css/layui.css","90d344917205350471a9e1f4a62f6b88"],["/random.eat/static/css/style.min.css","ee266e4c3ed2eae321e06feb1ecc945a"],["/random.eat/static/fonts/iconfont.eot","fdbe35e060901bd964d6247422c675dd"],["/random.eat/static/fonts/iconfont.svg","fdbe35e060901bd964d6247422c675dd"],["/random.eat/static/fonts/iconfont.ttf","fdbe35e060901bd964d6247422c675dd"],["/random.eat/static/fonts/iconfont.woff","fdbe35e060901bd964d6247422c675dd"],["/random.eat/static/images/bg.jpg","33e643b23393fda828a3a79951dce115"],["/random.eat/static/js/app.min.js","39a4e80b221340e393287fe94e3b33df"],["/random.eat/static/js/layui.js","9ce1e72061667a94713bfd959ca48e63"],["/random.eat/static/js/wb.js","2f265ed0b097bf7bb16bfcebcec0218b"],["/random.eat/static/js/zepto.min.js","afd4c64c304f42ae18809f55f4725625"],["/random.eat/static/picture/wx.png","67d0e40299a9e546b1d2861d1aaa25fc"],["/search.xml","9ba7cc92a02be1629018ada643c5bce0"],["/sitemap.xml","cdbc5168c5d8179f256600b5edab9b60"],["/sw-register.js","4d6b51fb06bdfc4dd3e84e8974e16835"],["/tags/API/index.html","b6000aeb14debf159c2f03312e8fb24f"],["/tags/JAVA/index.html","31cc89f9051728b403fc50268ff17d0e"],["/tags/Jetbrains/index.html","dd7768cba0bffad8cfd1775cf735cc53"],["/tags/MySQL/index.html","08275bb28817e85b4a9b4c94013fe122"],["/tags/PHP/index.html","da7a636eeb0a2b9859b304db679fba34"],["/tags/github/index.html","b9bf6b6bd274b3b6349f9d12a08bdcea"],["/tags/index.html","3f7216d11b642bc909c61700a7dab3e7"],["/tags/jQuery/index.html","ff5d905735dc30c098ba6ee5f71043d8"],["/tags/python/index.html","61ac9b1dcdc7e6872cda820d27d8527e"],["/tags/xpath/index.html","9a16002f3fe55980e8269ec7604452ba"],["/tags/代理IP/index.html","22bcc5c3fe54df16eee4266459195eae"],["/tags/代码/index.html","993d42d36d93599493391ff6ed6960b5"],["/tags/做题笔记/index.html","ec30eb019790ea8905db142645c5bd37"],["/tags/力扣/index.html","78a219eacf09e3e097e998a247b9897f"],["/tags/图片/index.html","a1d080e89812bd96d1489527eb3d3c2a"],["/tags/壁纸/index.html","066b4ef152563ad02b590c9d50d4a7be"],["/tags/学习路线/index.html","b81c21df945a313e64148f7c624501bc"],["/tags/宝塔/index.html","e54788b7a8f1ea282323a35371484b7c"],["/tags/小姐姐/index.html","37ba0face19f02ae8be6e7fffe12889f"],["/tags/教程/index.html","ec2967ff8accf3ce5fe78923f7b7081a"],["/tags/数组/index.html","905332edbf1f8504923d235e35bde534"],["/tags/爬虫/index.html","8bbe91ea693014a32c4ea6d1467ce24e"],["/tags/王者荣耀/index.html","950207bae3b8c14d18ddcfa3257b5e7f"],["/tags/笔记/index.html","b2efb764e05279804d853f3c4bc8400e"],["/tags/随机图片/index.html","717fedc992db941dbd069c2680ac2880"],["/tags/音乐/index.html","7fd4b6a0e2a6f9613429cb45b2a87d5e"],["/talk/index.html","0feea430f818a93617ab6f09f7708a6b"]];
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
