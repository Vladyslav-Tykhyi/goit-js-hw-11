import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",l="47362055-4c26e776b4d447c79837e3674";document.querySelector(".form");const f=document.querySelector(".btn-js"),s=document.querySelector(".form-input");f.addEventListener("click",m);function m(c){if(c.preventDefault(),!s.value.trim()){a.show({message:"Input cannot be empty. Please enter a search term!"});return}const o=new URLSearchParams({key:l,q:s.value});fetch(`${u}?${o}`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()}).then(t=>{if(t.hits.length===0)throw new Error("Sorry, no results found for your query. Please try another search term.");console.log(t)}).catch(t=>{a.show({message:`${t.message}`})}).finally(()=>{s.value=""})}
//# sourceMappingURL=index.js.map
