import{n as e}from"./search.BhF0JXIH.js";var t=document.getElementById(`config-explorer`);if(t){let n=JSON.parse(t.dataset.configs??`[]`),r=e(n),i=document.getElementById(`config-search`),a=document.getElementById(`config-grid`),o=document.getElementById(`config-empty`);function s(){let e=i.value.trim(),t=e?r.search(e).map(e=>e.item):n;o.classList.toggle(`hidden`,t.length>0),a.innerHTML=t.map(e=>`
        <a href="/configs/${e.slug}" class="rounded-lg border border-border bg-bg-elevated/40 p-5 transition hover:border-accent/50">
          <h2 class="text-lg font-semibold">${e.name}</h2>
          <p class="mt-2 line-clamp-2 text-sm text-fg-muted">${e.description}</p>
          <p class="mt-3 text-xs text-fg-muted">${e.targetUser}</p>
          <div class="mt-4 flex flex-wrap gap-1">
            ${(e.features??[]).slice(0,4).map(e=>`<span class="rounded bg-bg-muted px-1.5 py-0.5 text-[10px] text-fg-muted">${e}</span>`).join(``)}
          </div>
        </a>`).join(``)}i.addEventListener(`input`,s),document.addEventListener(`keydown`,e=>{e.key===`/`&&document.activeElement?.tagName!==`INPUT`&&(e.preventDefault(),i.focus())}),s()}