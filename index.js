import{S as p,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="47379272-a961c7172d29abe92af06f616",c=new URLSearchParams({key:h,q:"yellow+flower"}),d=`https://pixabay.com/api/?${c}`;function y(n=d){return fetch(n).then(r=>{if(!r.ok)throw new Error("Sorry, no results found for your query. Please try another search term.");return r.json()})}function g(n){return n.map(({id:r,webformatURL:i,tags:s,likes:e,views:t,comments:o,downloads:m,largeImageURL:f})=>`
        <li data-id="${r}" class="list__item">
          <a class="gallery-link" href="${f}">                          
            <img class="item-img" src="${i}" alt="${s}"/>                  
          </a>
          <ul class="item-container-list">
              <li class="container-list">
                <h3 class="item-title">Likes</h3>
                <p class="item-content">${e}</p>
              </li>
              <li class="container-list">
                <h3 class="item-title">Views</h3>
                <p class="item-content">${t}</p>
              </li>
              <li class="container-list">
                <h3 class="item-title">Comments</h3>
                <p class="item-content">${o}</p>
              </li>
              <li class="container-list">
                <h3 class="item-title">Downloads</h3>
                <p class="item-content">${m}</p>
              </li>
            </ul>          
        </li>
    `).join("")}const L=new p(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".form-input"),w=document.querySelector(".btn-js"),a=document.querySelector(".gallery");w.addEventListener("click",b);function b(n){n.preventDefault();const r=l.value.trim();if(a.innerHTML='<span class="loader"></span>',!l.value.trim()){u.show({message:"Input cannot be empty. Please enter a search term!"});return}c.set("q",r);const i=`https://pixabay.com/api/?${c}`;y(i).then(s=>{if(s.hits.length===0)throw a.innerHTML='<span class="loader"></span>',new Error("Sorry, no results found for your query. Please try another search term.");a.innerHTML=g(s.hits),L.refresh()}).catch(s=>{u.show({message:`${s.message}`}),a.innerHTML=""}).finally(()=>{l.value=""})}
//# sourceMappingURL=index.js.map
