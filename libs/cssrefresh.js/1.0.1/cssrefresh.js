/*! cssrefresh v1.0.1 | cssrefresh.frebsite.nl */
(function(){var c=1000;var b={array_filter:function(d,f){var g={};for(var e in d){if(f(d[e])){g[e]=d[e]}}return g},filemtime:function(d){var e=this.get_headers(d,1);return(e&&e["Last-Modified"]&&Date.parse(e["Last-Modified"])/1000)||false},get_headers:function(d,n){var m=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(!m){throw new Error("XMLHttpRequest not supported.")}var k,e,g,l,h=0;try{m.open("HEAD",d,false);m.send(null);if(m.readyState<3){return false}k=m.getAllResponseHeaders();k=k.split("\n");k=this.array_filter(k,function(i){return i.toString().substring(1)!==""});e=n?{}:[];for(l in k){if(n){g=k[l].toString().split(":");e[g.splice(0,1)]=g.join(":").substring(1)}else{e[h++]=k[l]}}return e}catch(f){return false}}};var a=function(){this.reloadFile=function(m){for(var k=0,j=m.length;k<j;k++){var o=m[k],n=b.filemtime(this.getRandom(o.href));if(o.last){if(o.last!=n){o.elem.setAttribute("href",this.getRandom(this.getHref(o.elem)))}}o.last=n}setTimeout(function(){this.reloadFile(m)},c)};this.getHref=function(j){return j.getAttribute("href").split("?")[0]};this.getRandom=function(j){return j+"?x="+Math.random()};var i=document.getElementsByTagName("link"),g=[];for(var f=0,e=i.length;f<e;f++){var h=i[f],d=h.rel;if(typeof d!="string"||d.length==0||d=="stylesheet"){if(this.getHref(h).search("googleapis")=="-1"&&this.getHref(h).search("w3schools")=="-1"&&this.getHref(h).search("domain3")=="-1"){g.push({elem:h,href:this.getHref(h),last:false})}}}this.reloadFile(g)};a()})();
