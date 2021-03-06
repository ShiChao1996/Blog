/*
/!*
 * MIT License
 *
 * Copyright (c) 2017 SmartestEE Co,Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *!/

/!*
 * Revision History:
 *     Initial: 2017/08/17        Tang Xiaoji
 *!/

'use strict';

const TIMEOUT = 2 * 1000;

function promiseTimeout(ms, promise) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            console.error('errorrrrr');
            reject(new Error('request timeout!'))
        }, ms);
        promise.then((res) => {
                clearTimeout(timeoutId);
                resolve(res);
            }, (err) => {
                clearTimeout(timeoutId);
                reject(err);
            }
        );
    });
}

function requestByGet(url, token, onSucceed, onFailure) {
    console.log("Get " + url + " started.");
    let header;
    if(token){
        header = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }else{
        header = {
            "Content-Type": "application/json",
        }
    }

    promiseTimeout(TIMEOUT, fetch(url, { // eslint-disable-line no-undef
        method: "GET",
        headers: header,
        mode: "cors",
        // credentials: "include"
    })).then((resp) => resp.json())
        .then((json) => {
            //console.log("Get Succeed for " + url + ", response:" + JSON.stringify(json));
            onSucceed(json);
        })
        .catch((err) => {
            //console.error("[HTTP Exception] Get failed for " + url + ", error:" + err);
            if (onFailure) {
                onFailure(err);
            }
        })
}

function requestByPost(url, token, params, onSucceed, onFailure) {
    let header;
    if(token){
        header = {
            "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
        }
    }else{
        header = {
            "Content-Type": "application/json",
        }
    }
    promiseTimeout(TIMEOUT, fetch(url, {
        method: "POST",
        headers: header,
        mode: "cors",
        // credentials: "include",
        body: JSON.stringify(params)
    })).then((resp) => resp.json())
        .then((json) => {
            console.log("Post succeed for " + url); // + ", params:" + JSON.stringify(params) + ", response:" + JSON.stringify(json));
            onSucceed(json);
        })
        .catch((err) => {
            console.error("[HTTP Exception] Post failed for " + url + ", error:" + err);

            if (onFailure) {
                onFailure(err);
            }
        });
}

export const Http = {
    get: requestByGet,
    post: requestByPost
};*/


/*
 * MIT License
 *
 * Copyright (c) 2017 SmartestEE Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

"use strict";

function requestByGet(url, onSucceed, onFailure) {
  //console.log("Get " + url + " started.");

  fetch(url, { // eslint-disable-line no-undef
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  })
    .then((resp) => resp.json())
    .then((json) => {
      //console.log("Get Succeed for " + url + ", response:" + JSON.stringify(json));

      onSucceed(json);
    })
    .catch((err) => {
      //console.error("Get failed for " + url + ", error:" + err);

      onFailure(err);
    });
}

function requestByPost(url, params, onSucceed, onFailure) {
  fetch(url, { // eslint-disable-line no-undef
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params)
  })
    .then((resp) => resp.json())
    .then((json) => {
      //console.log("Post succeed for " + url + ", response:" + JSON.stringify(json));

      onSucceed && onSucceed(json);
    })
    .catch((err) => {
      // console.error("Post failed for " + url + ", error:" + err);

      onFailure && onFailure(err);
    });
}

export function getUrl(route) {
  return "http://api.littlechao.top/" + route;
  //return "http://127.0.0.1:7001/" + route;
}

export function picUrl(route) {
  return "http://image.littlechao.top/" + route;
}

const Http = {
  Get: requestByGet,
  Post: requestByPost,
  url: getUrl,
  picUrl
};

export default Http;