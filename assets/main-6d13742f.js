(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();console.log("Hello world!");new Swiper(".Articleswiper",{loop:!0,slidesPerView:1,spaceBetween:24,breakpoints:{992:{slidesPerView:2,spaceBetween:24}},pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next-new",prevEl:".swiper-button-prev-new"}});new Swiper(".myFocusswiper",{loop:!0,slidesPerView:1,pagination:{el:".swiper-paginationFocus",clickable:!0,renderBullet:function(o,t){return`<li class="${t}">${["酒精路跑地圖","台北拉麵圖鑑","海島自由行","短天數出國推薦","週末露營趣"][o]}</li>`}}});new Swiper(".ThemeArticleSwiper",{loop:!0,breakpoints:{320:{slidesPerView:1,direction:"horizontal"},768:{slidesPerView:3,direction:"vertical"}}});new Swiper(".PropSwiper",{loop:!0,slidesPerView:1,spaceBetween:24,breakpoints:{992:{slidesPerView:2,spaceBetween:24}}});
