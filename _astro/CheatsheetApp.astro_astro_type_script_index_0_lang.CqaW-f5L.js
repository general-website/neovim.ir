import{t as e}from"./search.BhF0JXIH.js";import{t}from"./download.CC7rfkLk.js";import{i as n,u as r}from"./storage.CUr_SR9U.js";import{t as i}from"./fa.EU3vQQgM.js";var a=document.getElementById(`cheatsheet-app`);if(a){let o=JSON.parse(a.dataset.entries??`[]`),s=e(o),c=document.getElementById(`cheat-search`),l=document.getElementById(`cheat-list`),u=document.getElementById(`cheat-empty`),d=`all`;function f(){let e=c.value.trim(),a=e?s.search(e).map(e=>e.item):[...o];d!==`all`&&(a=a.filter(e=>e.category===d)),u.classList.toggle(`hidden`,a.length>0),l.innerHTML=a.map(e=>{let t=n(`cheatsheet`,e.id);return`
          <div class="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-bg-elevated/30 px-4 py-3">
            <div class="min-w-0 flex-1">
              <kbd class="rounded border border-border bg-bg px-2 py-1 font-mono text-sm text-accent">${e.keys}</kbd>
              <p class="mt-2 text-sm text-fg-muted">${e.description}</p>
              ${e.example?`<p class="mt-1 font-mono text-xs text-fg-muted">${e.example}</p>`:``}
            </div>
            <div class="flex gap-2">
              <button type="button" class="cheat-fav rounded border border-border px-2 py-1 text-xs ${t?`border-accent text-accent`:`text-fg-muted`}" data-id="${e.id}">
                ${t?i.common.favorited:i.common.favorite}
              </button>
              <button type="button" class="cheat-copy rounded border border-border px-2 py-1 text-xs text-fg-muted" data-copy="${e.keys}">
                ${i.common.copy}
              </button>
            </div>
          </div>`}).join(``),l.querySelectorAll(`.cheat-copy`).forEach(e=>{e.addEventListener(`click`,async()=>{e.textContent=await t(e.dataset.copy??``)?i.common.copied:i.common.copy,setTimeout(()=>{e.textContent=i.common.copy},1200)})}),l.querySelectorAll(`.cheat-fav`).forEach(e=>{e.addEventListener(`click`,()=>{r(`cheatsheet`,e.dataset.id??``),f()})})}c.addEventListener(`input`,f),document.querySelectorAll(`.cheat-cat`).forEach(e=>{e.addEventListener(`click`,()=>{d=e.dataset.category??`all`,document.querySelectorAll(`.cheat-cat`).forEach(e=>{e.classList.remove(`border-accent`,`bg-accent/10`,`text-accent`),e.classList.add(`border-border`,`text-fg-muted`)}),e.classList.add(`border-accent`,`bg-accent/10`,`text-accent`),e.classList.remove(`border-border`,`text-fg-muted`),f()})}),document.addEventListener(`keydown`,e=>{e.key===`/`&&document.activeElement?.tagName!==`INPUT`&&(e.preventDefault(),c.focus())}),f()}