

const jobname = 'shuqi'
const $ = Env(jobname)


!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    //nodejs运行
    await dailysign();
    await $.wait(1000);
    //await vedioreward();
    //await $.wait(1000);
    //await vediorewarddraw();
    //await $.wait(1000);
    //await drawreward();
    //await $.wait(1000);
    //await read();
    //await $.wait(1000);
    await share();
    //await $.wait(1000);
    //await receive();
    //await $.wait(1000);
    //await jsdailysign();
    //await $.wait(1000);
    //await jsvedioreward20();
    //await $.wait(1000);
    //await  jsvedioreward10();
    //await $.wait(1000);
    //await  jsshucheng();
    //await $.wait(1000);
    //await jsshare();
    //await $.wait(1000);
    //await jsread()
}


function receive() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.0.0) 1125x2436 Winding(WV_6) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw&skinColor=23B383&platform=iOS&ver=210107&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
    "Content-Length": "1229",
    "Accept-Language": "zh-cn"
};
         const body = "src=204&userId=2916901745&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1629068787&sqSv=1.0&sign=2c2acb044b04498358f5e430d7289311&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  



function share() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.0.0) 1125x2436 Winding(WV_6) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw&skinColor=23B383&platform=iOS&ver=210107&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
    "Content-Length": "1867",
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=304&wua=HIVW_rFCYW%2F75f%2F0UT9GG2FnV2A2NMl18v8cypDXyPzwHoXpHvM9Sj8x9Xaer90X3Ex3xEFnbWBSmpOTP0HMTLFIlOqL8ieZCImaGK6ml%2BdD%2BrnCif2BwON5qd0r0wK9ilMbf3dRIP20XdiGR09pEgcnz%2BIBdBfSFQi1Yvro3jk7%2BC4KEmYX5z%2F97AsNcqlLU3lbM9S54BUslgjjZAbo99vwMihUQ2nNMBBv68WbHgIfoHNVk%2BG78VXGWVe0AirKtUZr7et0fx5yAgBCbHY9AJr4eqTprqzc12xdF8ABdk1%2FjvdmEXlG5gsSyAzKD5FYRCCVDwcXHbYOmVwGSzLFJNaYwDw%3D%3D&ua=&miniWua=HHnB_do1QttZtzGDlGXrbYgiv%2Bq4BdvuNZTvRZZIUolmgFDFfhGjvF0uVJRSdZ4fSZ5inFjxFosy%2BqkiMhmAwQb%2BxaXBLMMQqgMV2PjQgIZeQQAlPUHAcmu0yucFW%2FaxKWHc2&userId=2916901745&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1629068621&sqSv=1.0&sign=51d6207fa28759325222146e2be4a0a3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function jsread() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.6&ustatus=1&umidtoken=wGRLAd1LOjxByTV7SSyOvpA4qSfDtolT&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
         const headers = {
    "Cookie": "isg=BLy8y1cg8VYBisUd1W4whMJzh15utWDf1ibuiJY9WafvYRzrvsWNbVLBRw8ZMpg3; cna=BXqeGVTd73sCAatTLPUxYOJB",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
    "Content-Length": "603",
    "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
};
         const body = "actId=355&miniWua=HHnB_c/ctO11SSNODDkG3RkNbzMkUI8EWCg/PA5SjzH7YwOUBhR9NOI3WOKepUeKY0UGAtKwawndI2MzObr1L3XdWOjNF4k155i8%2BWcrsTNbqHkk2sy3bYyrPU7hMMDK/zgMd&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1629066304&userId=2916901745&wua=ktgi_aLfYfZH9LUibJBQjBTegTnJOd903oB6hZUaJ4lDIQTGmCCNaidE7Q0abSs8D8/SI%2BT/LHAdRQ8Nn6hCo6VExvP4aQk1kDqIzMdFbDOE22TOz6zs9w2cjgkzQ/wKQYdBscVMMkuP7zWnx5ZpyqzZAlr5gTRHxaKKKU5IRNMPzatgeT/erhUaZkwt%2BwOBr9ng4MQJ2SWybvKd3M9Dw0riw3coH0UR6BVLPMf0UgW1cxM9kYzRb7ddDyleCp%2BRoXmczfn1DvsRSJaRFwnAAu8NcgK9iXFaEFsw6f3LUG7nZGVGr67Pe0uDsLt1c%2BiaER7JV";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await jsread();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function read() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BDIyVn-9h1VRsrtp7nV3yEDjiXwUwzZdhviC__wLa-Xtj_aJ5FO0byale60z5K71; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A/p%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzMDkxMCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMjUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.XflxZv-XcfSRCM8xOPe9cTov51UPtAsEGN8uNnu59Gl-GykDa9PiD6hLSmBft0gUKXmJZ-jUuql5wFtceuB8zw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=707&key=sq_app_ad&miniWua=HHnB_U3vcrUclZBGI8xgdUJ8toyc%2Bcu3V7L6584b4LJIqAo9rKD4xOidudtaDEkcZkA34sDtTnXBwQcsP06dfIT%2BwJny1aqZ4O0U9X4YOywUGltpZN1pnlmCAZT/aayksQ%2BsR&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D68E7080F23E0123C177D2F090C22836&timestamp=1629014445&userId=2916901745&wua=HIVW_5GYaKaLjxLSXInwlxv92LU3UYSySyk5Zb1vIqiSKppZ3k/5ybmHegQJtI6SFnGMca6CRW8KEDuZTBpJG3oWo9wQTHmeBIvTt1/3VesMgxwl/6ump9ia7jvKwqSpZjY7Hq5JON%2Bzk/QhpAfitngKoSxhPKHLDAzpbRZTU06Vs7egZTirraGpMjB9685eeUXqfQt%2BAo%2BaRqFym8u40CdVOPOALEMLGQGGCmQFS9VolpMGFfhS4Iw4vELFzXblrumStKtxJZPnJw7EJ7px/sw9POkjSsxGRc2IEwjcocqaYJ2ueMxvhZzim/Cvk8v2wOFKbIewXvqnvtCG/mnPdf8grdg%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await read();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function timeupload() {
    return new Promise((resolve, reject) => {
        const url = "https://jcollection.shuqireader.com/collection/iosapi/reading/upload";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BBgYkueLzeNc6OFnwPftXvbB40KqAXyLn_CVz1IJV9MG7Y7X-hHiGkGHIaNdZjRj; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "jcollection.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%253D999%2526idfa%253D00000000-0000-0000-0000-000000000000%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%2526user_id%253D2916901745%2526sn%253D9FFC2945934B0127160C769D23FE8D9606CB0FAE%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%2526skinVersionPrefix%253D1%2526appVer%253D4.3.0.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzNDc2MiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxNjM2Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.pQFbLw8WrDYjlNnOeO7kfBHqW7-LZyZjZ-Mwk03SWaYrfQ2QspcF26DKI4wsmDChqyHv3SJ_GxVlhObZu1Yvsw%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210107%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1125x2436%2526soft_id%253D21%2526utdid%253DXblVsgqHUiwDAN7BcQnm2A%252Fp%2526utype%253Dvip%2526sdk%253D14.6&key=and_log&readingList=%5B%7B%22startTime%22%3A1629016791%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227370011%22%2C%22readChapterId%22%3A938736%2C%22readingLen%22%3A6%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=67E3DB2C6F946BEF9D018989F4B3AEFC&timestamp=1629016797&user_id=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsshare() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "1802",
            "Accept-Language": "zh-cn"
        };
        const body = "actTaskId=327&wua=ktgi_3Tz5Q%2FQuk9FImWbBSzUm%2FN%2Bk4wjoUc%2B%2Bg1Aj6lUFVL4lg3uSd%2FFuCjVsuYudoADGIvP9utkK8wQV%2BSY%2FQypkIEXr8KOinM0h8%2BeI2NF8dXcFW0t5WNRr1YiNpqryTfNciZIeB4IJ3KjlIMxZo7eKxxIbJcAkJ3k6bIiLp0cknSAZrNfPzAOkdHsAojTkuy2LdZKlH2A%2FDactl2%2FpOAJ%2BGNKuJ9rpztz9vudqBp%2FRntPQGQtY3D8iXwr8hf2wAQLUPDq6JiL61j1hOpkWTNlVMnxPvdUN%2Fe342gejaSHVv5zf8cb9Nwn5kyeWB24%2FCSL1b%2Bc8sX%2FUJMphr1cVo%2BQkqA%3D%3D&ua=&miniWua=HHnB_7DYrUuJn7%2BnkozmoMtJTDJ9slmM%2BjM1PYHVyaLHA7ICaKM0PxVvZBwHm7AMjlluCye8qqlxYykLPLjpzWyFR3%2BvBeJc3%2BcAY%2BMqUnpglCzESxBZZ0QEXM0ikiHUP3cuv&userId=2916901745&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629016036&sqSv=1.0&sign=5c6651e003dcf4d7104c01a870581bce&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.6%26ustatus%3D1%26umidtoken%3DCJFLLxhLOp%252Bu3zV7QyKs806Y%252BvW9YrOA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function jsshucheng() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
        const headers = {
            "Cookie": "isg=BOHh2SrJJKggsYjKICUFi094-qn7jlWAS31jv0O28ennqgp8i999UQGgCFgsee24; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Content-Length": "100",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function jsvedioreward10() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BMHBbsFARAgBa6gqAIVl62-Y2gnb7jXga-9oWCMW0EiKCsXcaz76sNhA6PhMGc0Y; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=897&key=sq_app_ad&miniWua=HHnB_3SMWpVcrf%2BGigHsqHAbaMwFZjmFYm/nSWDLJ5MCjNLvVFtYMwQJEaFFm5sFGqFQ0hCqOXKk1d1MBbmEzQRNjNAGg/HPQe%2B6SZQCZa%2BgRylsfQ7NHm//jwtWr%2BOe89EbQ&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=A1C6AC2353277A8E0CD35370A39ADDC8&timestamp=1629015720&userId=2916901745&user_id=2916901745&wua=ktgi_KWcfFAwrcl4kSYsk%2BqAf/XvZ/3UoOoaWSR4pkDOU%2BdxQ06K5q11k4BjdoLwZrrwIoEXsz66a/JsDq8xM%2Bgr2YNlBWtoiubDDvcF2Y//B0d9uYQ7ATL88qSRS46doPR8iY7rBdy6084VMi5wrcgNAocBn%2BAJCaKjZASokU4TZf5WgBWpdN/0ln4keyqPUnrOPOUDPWqxXO2lBuVr0BkGEBrGhBBWDrFw945P93o62quEBP/nvJLLX8/6g9kQHOIQLh1FWqxgUGfXYgQrQ/3en%2B9mDDgySVVXu48iTcTAg93zZ03Nz3/KdAP1/nUcR6b4O";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await jsvedioreward10();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsvedioreward20() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
          'Cookie' : `isg=BDs775L23lmTOeN8hvwuwYoXwBulkE-SRA9aPy34MTp_jFxutWHQ4BSOoqrCt6eK; cna=95WOGVcAHHsCAdoaNlnYWmkk`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `shuqifast/1.0.5 (iPhone; iOS 14.0.1; Scale/3.00)`,
'Accept-Language' : `zh-Hans-CN;q=1`
        };
        const body = "_public=idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3D2IhLDEZLOryCXzV7TEBwOVEpGRHO8vi7%26placeid%3D111111%26user_id%3D2924069247%26sn%3D83319A9114DB9C88B754508D9A51F689639B124B%26msv%3D10.0.0%26brand%3DApple%26imei%3D98F9E87966D25F87CB378699F83BAA52F8406791%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTI0MDY5MjQ3IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85OEY5RTg3OTY2RDI1Rjg3Q0IzNzg2OTlGODNCQUE1MkY4NDA2NzkxIiwic24iOiJmYXN0XzgzMzE5QTkxMTREQjlDODhCNzU0NTA4RDlBNTFGNjg5NjM5QjEyNEIiLCJleHAiOjE2Mjk2MzQyNTgsInVzZXJJZCI6IjI5MjQwNjkyNDciLCJpYXQiOjE2MjkxMTU4NTgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.IgCtWGo0MCH-fSTkCPHZWI-htu0ZX3lSA9p5RQUCvQrMrAq6wL3J7_FPwv_5unh8o1olMAsGRbcGZnSLpR_ZJQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXMAX%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYFHxHI7aGywDACetI8Soa4Ej%26sdk%3D14.0.1&deliveryId=980&key=sq_app_ad&miniWua=HHnB_JpT5OFMgx6udO0VlfF5lYpYs4qeaVJ2nhCzFc%2Bv3Z2DeRfKTOzkvJXJ2%2BP6uV16YUuZxvTcYQpOD5O2GpllRVsa5dYXNtx3czHe4f59DBuLElUqWasjST/BxbU%2BbhOT/C5I37cMuuh8N9L3BZJ/R8w%3D%3D&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=A913ADA5C0E60EFFB89660AEC1222033&timestamp=1629203211&userId=2924069247&user_id=2924069247&wua=ktgi_mD0l86Kv3al4%2BDieshF9w%2BhWGJigEunei5%2B1lJeu5A9iqbnsW/k18SZE4ElUZoZMt%2BNkLwZYF5ZBJTSN16UjmZ5emU3n8WpbqPZ2KHU4ZudSbR%2BOyHBjw6JzMCB2PAChuppVW%2BoOxAXcjJG1fBpXhTOq8KOAS/h2BQdhldKxXkGXa6Rarp2yqYCJQsWpYJ5/%2BdyvkuzVHnPWz4wlCz71ei1uwDD3PDjPHmrJlfrU3jDT1m1E5Sxu3RBozdqUUcVadlvtKSgbVc4smC9Hwd7d%2BGLpmDa3AfUNIhB5OGHbkvHdOGtOWOwvGL7y2IUc8r1dnoChKsT5E00eJxzw78EIZ9AbY9CQ68/FkyNAuJKw/g9wokn45jEscapuV%2B6gqr3K8925IJA4RQYwdADyhL6bJg%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await jsvedioreward20();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}






function jsdailysign() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,6__shuqi__v1.0.5.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.0.1&ustatus=1&umidtoken=og1LnX5LOjLTlzV7U42P3Ar%2BbqjD%2BxZl&net_env=2g&placeid=111111&user_id=2924069247&sn=83319A9114DB9C88B754508D9A51F689639B124B&msv=10.0.0&brand=Apple&imei=98F9E87966D25F87CB378699F83BAA52F8406791&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTI0MDY5MjQ3IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85OEY5RTg3OTY2RDI1Rjg3Q0IzNzg2OTlGODNCQUE1MkY4NDA2NzkxIiwic24iOiJmYXN0XzgzMzE5QTkxMTREQjlDODhCNzU0NTA4RDlBNTFGNjg5NjM5QjEyNEIiLCJleHAiOjE2Mjk2MzQyNTgsInVzZXJJZCI6IjI5MjQwNjkyNDciLCJpYXQiOjE2MjkxMTU4NTgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.IgCtWGo0MCH-fSTkCPHZWI-htu0ZX3lSA9p5RQUCvQrMrAq6wL3J7_FPwv_5unh8o1olMAsGRbcGZnSLpR_ZJQ&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YFHxHI7aGywDACetI8Soa4Ej&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn"
        };
        const body = "clientTimestamp=1629250998&position=601&signInType=1&wua=ktgi_8DhFxP93%2F%2B%2FRezgSkq%2BjqL%2FXKFRKpBxDK%2BN2po3w3dLA1t6%2F%2FInvG78ZUKdKHXNfqyl7IP5YhqoozePYCiBUdPBYhGG7QQVqJfL2BqNoEgjccuCQjm%2BFxNXrMsfafwi7RO45%2F8WprqtDkL%2F6OU%2Bcwgd%2BgSXwv40aOGAAweR2X9ZPNQsEvRyQdr3Nd0KHGq3QfqHyLag2hiqtg9Fn3n9uhYAPgIXyZ42b0D7KKYH5YK3E%2FSe8133PfQeD7THa%2BnRTc2NbOiTPK4DMc0Yl%2BwFAtJ2EyXZuiv%2BIKUo2axCnWVXFo0cmIvYcTOZG6sGpBs4cMWG5CBDwuhBmemQQq7HCU7jctmOQcGgG7Lds%2FSuPVMs3d2xIBsvDoR0k7nhElfutXmX2AbRfGAynbwJWXZMrBg%3D%3D&ua=&miniWua=HHnB_WQiKhQSlXkhnu0H1mghykjtAr0Tll8ZefhTM3bSayt7E4ZMwdMlZbIofNEoBefUJBKhHSCSPo%2BkXrzN1DCUImLTKYf86Zaxv81a%2BnPSD11cVwYSLvtvCLCnr7y2SykyKL%2BuDsETa2%2FT71Mp0KSOABA%3D%3D&userId=2924069247&umidtoken=og1LnX5LOjLTlzV7U42P3Ar%252BbqjD%252BxZl&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629250998&sqSv=1.0&sign=b88e7bfe488ce2c2414a34066fd18d38&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.0.1%26ustatus%3D1%26umidtoken%3Dog1LnX5LOjLTlzV7U42P3Ar%25252BbqjD%25252BxZl%26net_env%3D2g%26placeid%3D111111%26user_id%3D2924069247%26sn%3D83319A9114DB9C88B754508D9A51F689639B124B%26msv%3D10.0.0%26brand%3DApple%26imei%3D98F9E87966D25F87CB378699F83BAA52F8406791%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTI0MDY5MjQ3IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85OEY5RTg3OTY2RDI1Rjg3Q0IzNzg2OTlGODNCQUE1MkY4NDA2NzkxIiwic24iOiJmYXN0XzgzMzE5QTkxMTREQjlDODhCNzU0NTA4RDlBNTFGNjg5NjM5QjEyNEIiLCJleHAiOjE2Mjk2MzQyNTgsInVzZXJJZCI6IjI5MjQwNjkyNDciLCJpYXQiOjE2MjkxMTU4NTgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.IgCtWGo0MCH-fSTkCPHZWI-htu0ZX3lSA9p5RQUCvQrMrAq6wL3J7_FPwv_5unh8o1olMAsGRbcGZnSLpR_ZJQ%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXMAX%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYFHxHI7aGywDACetI8Soa4Ej%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}





function dailysign() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.1.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2038268844&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=0W9LQQNLOiq%2ByjV7Vyfw4qXcGjitXJk%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM4MjY4ODQ0IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc3NTA5OSwidXNlcklkIjoiMjAzODI2ODg0NCIsImlhdCI6MTYyOTI1NjY5OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.XrAWc9aaQlh_z_vbu9UNHWfuEUFa1dho_ITgAI8ZM2tBJIoDmA71KxZLwKDdr56X0CmHtF6L77JDDPX6Nvqofg&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn
//157
Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.1.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2080945227&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=0W9LQQNLOiq%2ByjV7Vyfw4qXcGjitXJk%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgwOTQ1MjI3IiwidXRkaWQiOiJZRkh2a1NkbGE1VURBTzB5Z0dJNkRNMy8iLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc3NjE1NywidXNlcklkIjoiMjA4MDk0NTIyNyIsImlhdCI6MTYyOTI1Nzc1Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.p5MQ8HhcbApriJ-H0NM0qZblgjMnASnEbckZxMm9aNoYbECuN4bwqGSSv8cTLoDQy3Vkyx5eotHXZGq_BnDS5Q&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn
//1911565
Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.1.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2077919054&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=0W9LQQNLOiq%2ByjV7Vyfw4qXcGjitXJk%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDc3OTE5MDU0IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4Mjk3MCwidXNlcklkIjoiMjA3NzkxOTA1NCIsImlhdCI6MTYyOTI2NDU3MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.R5iOhzW3afLGH0Fbl67podY2Y7vZXfT1OWsQU7W6VauKpqn5lYRKqAaEgrsvGEwYzcAGpxvfeaFXGCL2F-8Z7g&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn
//1911567393
Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.1.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2111665808&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=0W9LQQNLOiq%2ByjV7Vyfw4qXcGjitXJk%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiJZRkh2a1NkbGE1VURBTzB5Z0dJNkRNMy8iLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4NTc1OCwidXNlcklkIjoiMjExMTY2NTgwOCIsImlhdCI6MTYyOTI2NzM1OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.5E0oVwaTeDjZ3ro-3H7x13ozaPckdhB2R20sxXV_e5Izw36J1mSo3YVfwC_EFQQfFlAdMuUYGLJdPaytuD0JHQ&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn
//134
Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.1.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2082571962&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=0W9LQQNLOiq%2ByjV7Vyfw4qXcGjitXJk%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyNTcxOTYyIiwidXRkaWQiOiJZRkh2a1NkbGE1VURBTzB5Z0dJNkRNMy8iLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4NjQ3MywidXNlcklkIjoiMjA4MjU3MTk2MiIsImlhdCI6MTYyOTI2ODA3Mywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.-_iB4RL1DvM3a3fcOxcXk7UYqCm1Rm41OEr6cSiygRAuU-KnGxXvI-Y0FP4cJZOXRnBS643h6SOgl-PDPM7z_Q&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn
//1313507
Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.1.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2080014247&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=0W9LQQNLOiq%2ByjV7Vyfw4qXcGjitXJk%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgwMDE0MjQ3IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4NzA5NiwidXNlcklkIjoiMjA4MDAxNDI0NyIsImlhdCI6MTYyOTI2ODY5Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.emeWSCMnVQPt9GFksiOgH4-HK8dFTIKUOKlPo-kb1UI-e-Lmv8DWgo5YSUJD3zaLAiZesM-08b_BpvRJvoMzTw&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn
//1873422
Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.1.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2032300094&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=0W9LQQNLOiq%2ByjV7Vyfw4qXcGjitXJk%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyMzAwMDk0IiwidXRkaWQiOiJZRkh2a1NkbGE1VURBTzB5Z0dJNkRNMy8iLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4NzUxNCwidXNlcklkIjoiMjAzMjMwMDA5NCIsImlhdCI6MTYyOTI2OTExNCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.6eNmzDbCEXGJ9cf52IJoBMJz3nv8x8f8nwB3_JDo91JFPAj_L-JmGx0OlDWpyEFRjt67_UNDWNHwn0rjnQOEoA&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn
//1911630886
Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.1.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2901940403&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=0W9LQQNLOiq%2ByjV7Vyfw4qXcGjitXJk%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTAxOTQwNDAzIiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4ODIwNywidXNlcklkIjoiMjkwMTk0MDQwMyIsImlhdCI6MTYyOTI2OTgwNywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.diiJ4Qc9O0j-mCAdhCfRKvV52L-ggku-GuMJGC2ix31w-OsSFjbX5r-4lArJBS3ykZjsZthAdqAYmY0_-R2Fbg&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn
//1911636208
Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.1.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20368&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2919812832&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=0W9LQQNLOiq%2ByjV7Vyfw4qXcGjitXJk%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE5ODEyODMyIiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4ODUxMCwidXNlcklkIjoiMjkxOTgxMjgzMiIsImlhdCI6MTYyOTI3MDExMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.OgvZG0-d6ooyiJkAxRWFM6oVHZZCJHWMkIsz8dDMGsedKGca8jHXBmvVoBsvuNAuybn2WyZ2oG6ApjSVFAFWiQ&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn
//1553624
Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.1.0) 1242x2688 Winding(WV_2) WK`,
'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2126083749&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=0W9LQQNLOiq%2ByjV7Vyfw4qXcGjitXJk%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2MDgzNzQ5IiwidXRkaWQiOiJZRkh2a1NkbGE1VURBTzB5Z0dJNkRNMy8iLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4ODg0NSwidXNlcklkIjoiMjEyNjA4Mzc0OSIsImlhdCI6MTYyOTI3MDQ0NSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.VYdSy5Sx57qVAmfXDfMN6VTwkS1OeHP80ny0AEN_T3XFWvEHLW9NRm5pjJ95JUPMqfXCTVIAtlputm8mwDYKow&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn"
        };
        const body = "clientTimestamp=1629256821&position=501&signInType=1&wua=HIVW_9XCmi7PVUNcRfHpE9S0xGLVx58P8VWePIX1OB9kqdUmX1KbaMrDOUh%2BYxHklaG8Lbz68j6OuyvqshwUil2hteHi%2Bd1NuiUDBpQ46U8IpuFsUaAgL1%2Bu48UM0Ec4F5rVCu7XKWnMaXer2XfPebRf8aGG2dCIm4q4bigLjFliERShk1KGN%2BnNEkvYd%2FNuPnMnPaqOaLFNqEEB537eN%2F46O98Zla0agESCm%2BjkEl8r9S46rCU2rJh3MNgFUZ6e%2FB0VUyMogVFRoPQUz0%2ByAefa1A8964UGHi4DOI5yJH73CLey7dUpalfS8HgXWevO1rLEF6V8QmGnmIBejuGyezTnCu2dadzkY8WjBl2gTUeLsdOu5qrKpYC8NdAMDL8Meo7ln0VZmn4jVMLSFLXs%2F%2BerfcQ%3D%3D&ua=&miniWua=HHnB_91ejplrRaZSVNhFzbVHkIfFUQtRn3ikuruEXr0EwdPYaaP4vFbOG6yZ5W1oZZTRHL48R320%2Fcf%2BOhswNPcVVb4t2cUvUvZkUhEXowKOs2Th9CzNsZma73tYhmIbVb%2F4rj4AQzW%2BfYDh5t4RnYXru0Q%3D%3D&userId=2038268844&umidtoken=0W9LQQNLOiq%252ByjV7Vyfw4qXcGjitXJk%252F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629256821&sqSv=1.0&sign=bd8406deb3c845335ec508edcdbe0857&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2038268844%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D0W9LQQNLOiq%25252ByjV7Vyfw4qXcGjitXJk%25252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM4MjY4ODQ0IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc3NTA5OSwidXNlcklkIjoiMjAzODI2ODg0NCIsImlhdCI6MTYyOTI1NjY5OSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.XrAWc9aaQlh_z_vbu9UNHWfuEUFa1dho_ITgAI8ZM2tBJIoDmA71KxZLwKDdr56X0CmHtF6L77JDDPX6Nvqofg%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733
//157
clientTimestamp=1629257774&position=501&signInType=1&wua=HIVW_XGjt347MoOvb0nPEf4FTdJX6kWUsXmASBfzSCmy9tbZ1MbAnZekwup4VaOjmRqkvHfuWQFss5I1xK%2Fe5x5tKWMF%2B4zNgU8B7ETXzjZYTQRVzfyKgO0pyvoCurbtvp5sau61kRhAdXytXN9uNr8SHRD8PW%2F09pjNGe2zT%2B3xVlzJdtz7Laym9X%2F4Kphvgtir6Xd4Fmukt3VE%2B4BUyID3iCiHdx3MNa58r9HCzASyq5jro9XyF0GHyP%2BABfJOXopJnMPwfqH5sO5oODnQt9e0325NosEH9TupSI6LV9ath4vXrbt%2Fx%2BBftUb6lMEiNGcDuuZvetSCfcqIVtUst0sxNlqXHROaevID%2FV5YsOdDXutwwjwJhaLmn4x1FYaspGvEXUI1LjyYbczi2psEYvnsXBQ%3D%3D&ua=&miniWua=HHnB_T1voZ7%2FfXVu92EQNDFAsr55tBg4CKhBgU%2BS%2F8nJPCFdmwTmtkpzBAoEjUIYDsLRFm%2BlqB1yIBKQ0R4%2BsgRw9woIExNuEtOl7IwUVDfacqhgeLa7K18gax1Nw3CLqNrCf99mGGTZqVsvf3mlyjYC88w%3D%3D&userId=2080945227&umidtoken=0W9LQQNLOiq%252ByjV7Vyfw4qXcGjitXJk%252F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629257774&sqSv=1.0&sign=480ca65a4244f09a7bf7faf95da0455b&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2080945227%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D0W9LQQNLOiq%25252ByjV7Vyfw4qXcGjitXJk%25252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgwOTQ1MjI3IiwidXRkaWQiOiJZRkh2a1NkbGE1VURBTzB5Z0dJNkRNMy8iLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc3NjE1NywidXNlcklkIjoiMjA4MDk0NTIyNyIsImlhdCI6MTYyOTI1Nzc1Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.p5MQ8HhcbApriJ-H0NM0qZblgjMnASnEbckZxMm9aNoYbECuN4bwqGSSv8cTLoDQy3Vkyx5eotHXZGq_BnDS5Q%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733
//1911565
clientTimestamp=1629264592&position=501&signInType=1&wua=HIVW_ll28m57rCZdo1oC%2FN2pgWpMiOqAOs6Y4XtaXc%2FvoMdnEaoAKR5Q1UfUDcXGujJaaWcnH9DqaZh7M0XAvQCSzCkPcqYQxoBAL4VIm3R83U88kM7IS7iOu4Oo9er%2BlnRajPRum2AZTFzFmPgnrC1EyzX5pdk7V0rHqszT7KSPuuvzwi0BKeCII3MBg5aM53eyLEBqczUFck207TfOtVs0vr8381jhn70o4kcfEQ6OHelaKrcwwDl457tNhGiPmq%2B%2FPXYea66kg%2B0Apc9PRud5q8CH3gTU7aM378WexLszmT6OOlACc4axr8fjftJfffr0mpT9NU%2B1fNwP5jrqoG4aFlc1PVKCF5ZVWNg7Gl6VLygiTFaJ7OP6JQUhHE%2BBjt%2Buu1Q9LERaOiqwm%2FjipLb%2FYFA%3D%3D&ua=&miniWua=HHnB_Coz2Zwu0wuoWyEoWE1Peqxxy7k2moL%2Frb%2B8VyRm%2FBivxPRFGuTrHc%2FpYIEqTMvYrhn7TpRf3ZU4FlbZjnrvuHQKeiZHo%2FDZByX9IByg8t2zWbCNkl0KRWA%2FR10RzK00DNWEPIWOGUUTrCDXYi%2BHXRQ%3D%3D&userId=2077919054&umidtoken=0W9LQQNLOiq%252ByjV7Vyfw4qXcGjitXJk%252F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629264592&sqSv=1.0&sign=ea2e9b672aee863e25d65520b5cb34e2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2077919054%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D0W9LQQNLOiq%25252ByjV7Vyfw4qXcGjitXJk%25252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDc3OTE5MDU0IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4Mjk3MCwidXNlcklkIjoiMjA3NzkxOTA1NCIsImlhdCI6MTYyOTI2NDU3MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.R5iOhzW3afLGH0Fbl67podY2Y7vZXfT1OWsQU7W6VauKpqn5lYRKqAaEgrsvGEwYzcAGpxvfeaFXGCL2F-8Z7g%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733
//1911567393
clientTimestamp=1629267387&position=501&signInType=1&wua=HIVW_NiuoPR8HMBucaX5PzHOD85liHrLbdIXTr%2Fr%2B9LMcg2kbdHUL%2BIInj6%2F%2Fo6lBl44TR4zqejBnMMgaTnd5HtlE%2BiYRJk9C0Sh6DeZhAJQ31th3fj2mxp85GQqSAXsItiwUTuiW4A8xRJvFKih8pH4D7Wi4KTrInC0ghtC6sSrwUf1%2Fk1cuUND5wyLLS3jyJkoS8L9oiCnnNbllqmDIXTrjOgMIjmMOStcxS4%2BJ8XT48QmjQSoYXZZWF1p1RXeYsa8vgLsXmqmNZsa6iDYYiGU46GulQPhgJu74%2FYoIlQr0FZWkf5RkpQGOuOfsv%2FMtB2%2B1YoujVtEHRAPSOzqma2J%2FUSagLTn3%2Ff7ThHRE%2BdwoStA%2FiUyO2PfwQof5xv%2Fy1A8HgnhlmxVT%2FWUHAUVfHd1bVFtwIl9g69vZ93WEqmneM8k%3D&ua=&miniWua=HHnB_RO4Qy0nATjMROqlKVVxn%2B8XJipUTecw02z3GQDmgfKoMKyU0JC8KoW58Eecg3hFhIMNQn3IKqRqAq7fGQa182US69bBg89YhMR%2BZ8bvutE3J9s1dN4uFlWISp9S%2B%2BHvLmqftnkUYlpwkxAWn3Jj%2Biw%3D%3D&userId=2111665808&umidtoken=0W9LQQNLOiq%252ByjV7Vyfw4qXcGjitXJk%252F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629267387&sqSv=1.0&sign=fbaa7ac089cd498713862677d54571c1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2111665808%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D0W9LQQNLOiq%25252ByjV7Vyfw4qXcGjitXJk%25252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiJZRkh2a1NkbGE1VURBTzB5Z0dJNkRNMy8iLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4NTc1OCwidXNlcklkIjoiMjExMTY2NTgwOCIsImlhdCI6MTYyOTI2NzM1OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.5E0oVwaTeDjZ3ro-3H7x13ozaPckdhB2R20sxXV_e5Izw36J1mSo3YVfwC_EFQQfFlAdMuUYGLJdPaytuD0JHQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733
//134
clientTimestamp=1629268095&position=501&signInType=1&wua=HIVW_xN79%2Ftzbz9MUb6Bf97V1cXSydWr2YW5PRmLuluXyQ%2FF85KlhNRgDzmpU5xH%2B2PBPx4bpl%2FLoAGZKZyMV1qKE7Mg5wI39BRtNmalesizYR2uUCN%2BIy%2B9nVHVK2GnA636u48tR55Bjx1Sn283mGm1JXq3O2Vvy1RHlKNxq6B%2BtDbU1%2FhIKbvF%2Bl4SkAMiQGVLLgW800hPf4v%2FGStqPPoL4doPT%2FOzfMfKijjVztEVVN6tUYagjIWOtqfACt5ityx8fCWd3Dsuy1p7Ym7blf87px6kwL2G7OXzGKgdZVOtoGsUXWxOYnISAXSSozO2AHrgd%2BBhTRDQ8hoKXPEUiWmXKIBvzre%2F8csduq8yvy39sWNh2sgShExfkqWGNyD0F0PHgBDT9z3cfnYHAj%2B8tHT4FizHXnzEO7C0ThQf0XOt3DxA%3D&ua=&miniWua=HHnB_zALI23PdfdrnYgSoCW7l5SCNL3RoFPZFyl9Mr%2BExcP29K8kQ2RqN3%2BNvFy%2FdYcezF9eHzvh0i674c3KZCMhgfu5%2B%2FHt2TxncmSP1I5f8F3haSxWMFPrgoNK8CqBCyCoYXDaLwm2aKzvostO1HAKRpg%3D%3D&userId=2082571962&umidtoken=0W9LQQNLOiq%252ByjV7Vyfw4qXcGjitXJk%252F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629268095&sqSv=1.0&sign=7dbe8d9c9515bfa6831d8a0a0fb0f1f5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2082571962%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D0W9LQQNLOiq%25252ByjV7Vyfw4qXcGjitXJk%25252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyNTcxOTYyIiwidXRkaWQiOiJZRkh2a1NkbGE1VURBTzB5Z0dJNkRNMy8iLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4NjQ3MywidXNlcklkIjoiMjA4MjU3MTk2MiIsImlhdCI6MTYyOTI2ODA3Mywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.-_iB4RL1DvM3a3fcOxcXk7UYqCm1Rm41OEr6cSiygRAuU-KnGxXvI-Y0FP4cJZOXRnBS643h6SOgl-PDPM7z_Q%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733
//1313507
clientTimestamp=1629268714&position=501&signInType=1&wua=HIVW_0Te04wFu%2B9z083FYpXSuPj%2BiwvkUf2KdDrVxpBWbsC1wpw5U1yXCXNPCWiadIoTu1jZNJq4CGOR25iVLJBmT4fjQCunT4XagXkkX1vBl2q2bJ%2BlQZEsQ9A0GInGQ3r1bJ7rHcXTToVo4cjFero9JdoGj9JJ3F560eIv22M%2FpeSnGTBtR735JGZWem7xZq%2BILGr5WbF4LjPR7RJI9TRQpzYwaPIyhHwWReaEb5ginQq9z%2BfouWVIQyYlex%2FfFPtYtOB2OPngj%2BGARjLrOWNTEld8vbUvPcB1mYsqHNhGRnZkeest3M2QfMQOH5A75svyayE8bohJJmJdcJN4A3to2lZu9eQzzp%2FPGINwU%2BLOMNw%2FCfW0hXKYzdAgzZ0al2iMwKzPcBhXE1qchgMBJeRC9Zw%3D%3D&ua=&miniWua=HHnB_LvfpBZXQYAk9%2Bkw7tkZCkLtRCF2DZkWv9P4%2FUJbRzmE7Ijw5MlI5NbOEHEeDGm9gtObxq2S0M61Y5vFP8IYg9YR4%2Bz231L%2BQ5OzlHuCRdyxkr5EmOzJnq98GvyVYxJJ77YzyI3V%2B8LNnUszV3Q2DMw%3D%3D&userId=2080014247&umidtoken=0W9LQQNLOiq%252ByjV7Vyfw4qXcGjitXJk%252F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629268714&sqSv=1.0&sign=dcb88ce1e165abdf432c761102fde159&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2080014247%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D0W9LQQNLOiq%25252ByjV7Vyfw4qXcGjitXJk%25252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgwMDE0MjQ3IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4NzA5NiwidXNlcklkIjoiMjA4MDAxNDI0NyIsImlhdCI6MTYyOTI2ODY5Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.emeWSCMnVQPt9GFksiOgH4-HK8dFTIKUOKlPo-kb1UI-e-Lmv8DWgo5YSUJD3zaLAiZesM-08b_BpvRJvoMzTw%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733
//1873422
clientTimestamp=1629269132&position=501&signInType=1&wua=HIVW_1nysygcOSoJhLyQ3jyE2HHGzgv3hB%2BG7ow1HBJk7K3UtnIrgEFSI%2BxlbS4gjwPUj6EGtmosdPZolmkF4GYjekvmJdh5xGZRJaUkTkbyrtn8sI3KycFUbZeecuQDwHoVVB4d4FbPu6m1QpP5W3viINbHjSK0ai2fGtWcmy38kAYgfJxPbhh7U2nhrZF7b%2FNzGPVq0DN1XoPyp%2FvT8WPTFmR8M0kp76Ebx3WfxPp6Xu%2BwJdZTS%2BS%2F1QKrmXGRSEhjSVqg5ktYuYJcThlBWPGgB0pws%2BH5X2qRYI6GzjorymS%2BptIsQA7qSxDVXs60umt8ZqEOoMOOKhFrhjyudnqPKfQpocl25g%2BjqDzz2J%2F1mnQNZ%2BKIPPxfGvTHD3DcigIE4LQsAlgPPUPQ2xVZ%2FMGWUWCN9M4iDTGnXQGjsES57Yuk%3D&ua=&miniWua=HHnB_TYjwnPh32Kfqi%2BlFRZhKSztYDYcD0nzQ7Cqm%2FpgOychQX4PvNEw2b0H8LAzOxIOdukq7DKj2rPR1b7oLDcTGlFPfWwTgIqmfFDKqeP9FhyvBwB0hOtMrcTYZWjsWuBucuVdBmKQsHenIr2J3wqAq7g%3D%3D&userId=2032300094&umidtoken=0W9LQQNLOiq%252ByjV7Vyfw4qXcGjitXJk%252F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629269132&sqSv=1.0&sign=2fecbf6827d0ed2c0abbb34c49691ef5&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2032300094%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D0W9LQQNLOiq%25252ByjV7Vyfw4qXcGjitXJk%25252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDMyMzAwMDk0IiwidXRkaWQiOiJZRkh2a1NkbGE1VURBTzB5Z0dJNkRNMy8iLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4NzUxNCwidXNlcklkIjoiMjAzMjMwMDA5NCIsImlhdCI6MTYyOTI2OTExNCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.6eNmzDbCEXGJ9cf52IJoBMJz3nv8x8f8nwB3_JDo91JFPAj_L-JmGx0OlDWpyEFRjt67_UNDWNHwn0rjnQOEoA%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733
//1911630886
clientTimestamp=1629269842&position=501&signInType=1&wua=HIVW_fJh1NhsS6lGT%2FeI6%2BNvthfycydFd5EF6g4ozfG7mxQxM%2F%2Bm%2Fs84DXxsh18Lx3XRXjxbkOyh6FJz1Uq3UXaRu0lWGz%2Fccorq3Z5EvK9UKIOOoK%2F4pHerOqJiEZG4wXJRGcHRuxkYnG8vT%2FjEpGPGZcKc%2BFgfHRExHpQcegPqogLID%2BFtsB3g251ggr0MBZtZwF3iIVj86N5XdQLbkb%2BkA6nmaOyKDH%2B9FOgshrpvEWkmbn1gq43rzSkx0A3DpgWOp5MMEeWviSTYAxsfnW8jqG3fnfwbQmaNQQGVY3hrBwXRafbr0uPGkLTLP4soyeEJ34Bj1kCqvTT06Nb4b3d%2FIPKSWMafPT8KnO7xvh%2FqmyNEzgowe%2FfH2iFntfQVwzagJvss5W3anusa78KNOikr9srxl3Bk8WJWnayccktmVXmY%3D&ua=&miniWua=HHnB_q33v0dkyaqY7AdBjfyjTSGZy%2BeWoZdBHaqmv%2BAFdfMGlks2sbwb5t%2B9TOqTjACwGmb9WMC5t1yWU4mXjtlEGjjQwPw8N4mfJjQSiKvLv8Hk4ixjIJvb1RUU98KY9HJ9TJF4kfDbbCFSkQT5uZALizw%3D%3D&userId=2901940403&umidtoken=0W9LQQNLOiq%252ByjV7Vyfw4qXcGjitXJk%252F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629269842&sqSv=1.0&sign=b6ca226c38fb7417831340d50b209d12&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2901940403%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D0W9LQQNLOiq%25252ByjV7Vyfw4qXcGjitXJk%25252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTAxOTQwNDAzIiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4ODIwNywidXNlcklkIjoiMjkwMTk0MDQwMyIsImlhdCI6MTYyOTI2OTgwNywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.diiJ4Qc9O0j-mCAdhCfRKvV52L-ggku-GuMJGC2ix31w-OsSFjbX5r-4lArJBS3ykZjsZthAdqAYmY0_-R2Fbg%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733
//1911636208
clientTimestamp=1629270142&position=501&signInType=1&wua=HIVW_QlC5HK6Hhn4tm3RxJyHA5L69VNbCevtd2LsdOWYoa3awsl%2F8TXB2zFC5R2NPlA1TFgaflIexcBf%2BHnpr02ZW1PsrH17Y9va2QbZK8lgpwXq4%2FuqdlGj3DYkpWQqOgUjTBykxZbLHlcnvD06sB%2F5pKQVLePRIzEiDl3JCVcRQMmMf0ifDwGVSV7A0Z1LB3Y%2Bdsur%2BQ4eRP37ZN6eiMvYUmQlmdNUfdPrrZKd1NifWlJkxV0KcIl7CJsQTGO9jDJ0pKXGYnrvUj4%2BcLaMFmv9xPY4aLPp5wcxkkidi%2B5lHQSBkzTrGZm2vHGVS8dUEgkMuMPLpccPdMb5YBpJLYR7HorvyBnj6TIjDIIdHqQUUsmiSHCnS6d4zMHODPy%2Bk5VZCzN5Z%2FcCdjEPe4rCP%2BsFbtQIab10oXQCSIc%2FGyMPT9AU%3D&ua=&miniWua=HHnB_wQgRAkOv7o%2Fpafo57kAfiYCCBRc%2F4klbtDSpparFBS3Ta6v%2Bvf1Vc8jhMOLHMnmxzqEiPR2s1HpmytfDuMzCpvtbm8yog4JoQdF%2BUTQ6RkkZORG0NLh%2FrWuipNwOlUOT515D7vDB2E14b3qaATq2IA%3D%3D&userId=2919812832&umidtoken=0W9LQQNLOiq%252ByjV7Vyfw4qXcGjitXJk%252F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629270142&sqSv=1.0&sign=f43d371cc187000cdc96cef12b610757&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20368%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2919812832%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D0W9LQQNLOiq%25252ByjV7Vyfw4qXcGjitXJk%25252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE5ODEyODMyIiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4ODUxMCwidXNlcklkIjoiMjkxOTgxMjgzMiIsImlhdCI6MTYyOTI3MDExMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.OgvZG0-d6ooyiJkAxRWFM6oVHZZCJHWMkIsz8dDMGsedKGca8jHXBmvVoBsvuNAuybn2WyZ2oG6ApjSVFAFWiQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733
//1553624
clientTimestamp=1629270468&position=501&signInType=1&wua=HIVW_eURXTyeSWCMo6MYBnIzLhqpB9JOgMHpuSIoo0GR7GhvXGrYcEKjmbg5iDUPThLKrKT5UdwVAWPc0AavQjb999CZwrTuKbRm7zrgRSo5C1ENM1xJw6mrQzu0bIS4de1hMYRP5XQosRb7iH7uZ0rqha01JxF5eOKCB8OZtOqrtug1aCvSEBiuF%2BPo2kkyr0IL6zBFzXmAHbmqNHjeGu%2FlJWEVIJFk259waP1P2Opj3HRnJ0w4%2BzYKibzjpinsdMMD3gWiziTD1BGvOlBYtn84e5cj76c0rFRryEgOx136Puiosq1nqVN7QiGGoQWfWO%2BVPA01Q9S8LgidHgH48wCEHFgLi8xyuQNjph%2FiBy4%2Bp497O8srZPQqPQnPYWhS8B0uCCe8MT4xVyAtyZfQ61s0MEw%3D%3D&ua=&miniWua=HHnB_ndEF1VNZg55b8nxk2FKqhB3CAqRskPFVTvNqCeILhP%2BT%2BwvMiJdeDC3Ye5p%2BkdYMElstGJsPv%2BUh%2BIhdM26FkDAbTn49Jwg%2Fa%2FEdI%2BkzcWbuHB%2BQABxWk3U4WGOWsP%2Bz%2BCSbHw6jMhCncnVbyjGq%2FQ%3D%3D&userId=2126083749&umidtoken=0W9LQQNLOiq%252ByjV7Vyfw4qXcGjitXJk%252F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629270468&sqSv=1.0&sign=2792bb7d85c555e8566561375fddbdb4&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2126083749%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D0W9LQQNLOiq%25252ByjV7Vyfw4qXcGjitXJk%25252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTI2MDgzNzQ5IiwidXRkaWQiOiJZRkh2a1NkbGE1VURBTzB5Z0dJNkRNMy8iLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyOTc4ODg0NSwidXNlcklkIjoiMjEyNjA4Mzc0OSIsImlhdCI6MTYyOTI3MDQ0NSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.VYdSy5Sx57qVAmfXDfMN6VTwkS1OeHP80ny0AEN_T3XFWvEHLW9NRm5pjJ95JUPMqfXCTVIAtlputm8mwDYKow%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function vedioreward() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Cookie": "isg=BM3NNdD9kLRAWDSP2IG93I_O1u1HqgF8r-4-zw9SJGTVBvi41_ozTCLcdBxg3Rk0; cna=gpWWGVA23WQCAatTLPVfwY5n",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.4.8 (iPhone; iOS 14.6; Scale/3.00)",
            "Content-Length": "1866",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g%26skinColor%3D23B383%26platform%3DiOS%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=807&isTeenMode=0&key=sq_app_gateway&miniWua=HHnB_qLYPGXagNcq2Y6prgdCFXZx3WOUBwdwg%2BXl%2Bnda6Ds%2BocSlJLNJ50d/XU4VRgBpwxyboqHzX52kFtUQy6LxFvNVfobQISPqyYf9Jh25XEgcKT641beUfHeCBi%2B0DS2wjq4PMG1w/qgcDgG6Az/2rAgUGNMw%2B/RLnpNGTqqACvwE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=DAAF009A5B3344A9BCACFD16017DC9BF&sqSv=1.0&timestamp=1629011002&userId=2916901745&user_id=2916901745&wua=HIVW_rmcpb1k/uoNgnVkVFAntsRHoZtMkzGdCdkFglEWO7Vx/RvXhndHGP3tSBMRueSV7F94HNEOydfsSbO7J7ODMj2NbO/yUSPsNXSCiaP8SqKMrgfdTyWPjs2t%2BtchkC3R5QLUw80z1eACA7sNE7AKQ2eOM5Fxa/J9Zh14l9FMfpY7mPxSrhAZguaeHVpHUtO13rqsD9yuPlipWbC9/7gFNeFiqqiYuUvIBsWHdPD0cj71qKMBPMkO3tmwErIz2y7fwFFVrEXHoFMPhUx5uQRay/ylOCkc5iJXWdD%2BPi3cxmMk%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await vedioreward();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function vediorewarddraw() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BH19CiJtwISVr2R_CPHtzL9eht13GrFs2C5WmD_CulQDdp6oB2vsPZBkJCwwbckk; cna=gpWWGVA23WQCAatTLPVfwY5n",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.4.8 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg%26skinColor%3D23B383%26platform%3DiOS%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=711&isTeenMode=0&key=sq_app_gateway&miniWua=HHnB_bBxn8d7NWxOVNOSvYo7gGzkJxardjOvcGILDwj8BBWVMYmPB70uOeoYigaWwwn0HU%2B2za9N6zrn/OGDuPKkFCJl2KZOQ6ORF4RgevIiPl3%2B74zDQGieveM9M71Yya1nzQX%2B5/MSjgXWi/%2BWeq1Igum%2BzNhpF/oQjfTMV/sRPOA0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F023D1069E5FC39A612549DA0F33F90D&sqSv=1.0&timestamp=1629011566&userId=2916901745&user_id=2916901745&wua=HIVW_G/y9maGmZVNRTVU%2B5Ide1U21mXtTEMdAqWMYlz3l38qPuvmmqeRLpRdKTPjiIu/sJULHtAZbn0/wX6y1QcBz/fgisruR5X2IreAtjpClpiGpaDJygMpCQWs1H%2BVyPQZzRM8eixNAzZNkjfRt3O/Z56y7H6FAjf6N/7WfLfYnTH6HfbX7uZaAJA5m6gDvgtyGBvlvz9tlsWWqcs4VcgAIJP0WCNQQNx/rKOjwwsPwO7V%2Bd81ZLT/EwKv8P1QgzsbwbZY%2BiCLL1rlTzO5hugrYwiMEPB%2BfCWj93xzeTuOJGNI%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await vediorewarddraw();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function drawreward() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Leto(JSBridgeVersion/3.0) AliApp(shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_29) WK",
            "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.8.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&mod=iPhoneXS&ver=210802&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=44.000000&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Accept-Language": "zh-cn"
        };
        const body = "wua=HIVW_TB8cyKJuhWjB2xlQurypI5kuvo%2F9AD711q3jpJQCWsJNv4fq7zpFB1wtzj5oyVV06fN7qncBgRyAiZ%2Bq34MNU1q2hO6Ybas%2BaH9laokU2sLg6itc9c%2BB642cbshDYUOQTvv1JosGC2scvgd0Q30DR3N3ZvTRx2M9AbfWcTGz%2Fa6BNhLrDakmYc%2FleyEDs838jt1OCA3PNoJJvfgt9tYlmu94wFjuoKdwAzIGlJU7ksaPbA%2Fyz7BLv%2FLxJS5pikvxr0Q4qrGqJFD85O3XCnupN0D1%2BE54zVXC%2Fgg6Pe5bIQs%3D&ua=&userId=2916901745&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629011857&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b3243867382bdca486cef64931b847b8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%252Bz6if%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.availableNum > 0)
                    {
                         await drawreward();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}







function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
