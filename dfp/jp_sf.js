
(function(){var e="https://tracking.stage.justpremium.com/tracking.gif?",n=+new Date,a,c,d,s,r=false;function u(t){if(r){return}const e={type:"jp_buster"};var n=window.top.document.querySelector("iframe[src='"+t+"']");if(n&&-1!==n){n.contentWindow.postMessage(JSON.stringify(e),n.src);return}m('"adTag" iframe not found.')}function o(){return top.document.location.protocol+"//"+top.document.location.host.replace(":8082","")+""+top.document.location.pathname+(typeof top.document.location.search!=="undefined"?top.document.location.search:"")}function i(t){var e={rid:d,sid:"",uid:"",vr:"",ru:o(),tt:n,siw:0,sh:"",sw:"",wh:"",ww:"",an:"",vn:"",sd:"",_c:Math.floor(Math.random()*Math.pow(2,32)+1).toString(),et:"",aid:"",said:"",ei:"",fc:c,sp:"",at:"",cid:a,ist:"",mg:"BUSTER_EXECUTION_FAILD",dl:"",dlt:"",ev:"",vt:"",zid:s,dr:+new Date-n,di:"",pr:"",cw:"",ch:"",nt:"",st:"",jp:"",ty:t};return e}function p(t){return e+g(t)}function f(t){var e=new RegExp("^https?:\\/\\/cdn.justpremium.com\\/\\\\?[;&a-z\\\\d%_.~+=-]*\\/.*-adTag.js","i");if(!!e.test(t)){return true}m('Invalid "adTag" url address.')}function w(t){var e=document.createElement("script");e.setAttribute("type","text/javascript");e.setAttribute("src",t);e.onerror=v;document.body.appendChild(e)}function l(t){var e=document.createElement("script");e.setAttribute("type","text/javascript");e.innerText=`var cw;try{var loc=window.top.location.href;cw=window.top}catch(e){console.warn(e);cw=window}cw.jp_creative_vars=window.jp_creative_vars = ${JSON.stringify(t)};`;e.onerror=v;document.body.appendChild(e)}function v(t){r=true;console.error(t);m(t)}function m(t){console.warn(t);var e=i("eerr");e.st=t;h(p(e))}function g(t){var e="";for(var n in t){if(e!==""){e+="&"}e+=n+"="+encodeURIComponent(t[n])}return e}function t(t){try{var e=t.origin||t.originalEvent.origin;if(origin!==e){var n=JSON.parse(t.data);var r=n.type;var o=n.url;if(r!=="jp_ad"||!f(o)){return}var i=n.frameSrc;a=n.cid;d=n.rid;c=n.fc;s=n.zid;y();l(n.creative);w(o);u(i)}}catch(t){}}function h(t){var e=window.document.createElement("img");e.style.position="fixed";e.style.left="-9999px";e.style.top="-9999px";e.style.width="1px";e.style.height="1px";e.src=t;window.document.body.appendChild(e)}function y(){window.removeEventListener("message",t,false)}if(window.addEventListener){window.addEventListener("message",t,false)}})();
