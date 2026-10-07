import{i as e}from"./search.BhF0JXIH.js";var t=document.getElementById(`theme-explorer`);if(t){let n=JSON.parse(t.dataset.themes??`[]`),r=e(n),i=document.getElementById(`theme-search`),a=document.getElementById(`theme-grid`),o=document.getElementById(`theme-empty`);function s(e){let t=e.colors;return`
        <div class="code-ltr font-mono text-[11px] leading-5 p-3" dir="ltr" style="background:${t.background};color:${t.foreground}">
          <div><span style="color:${t.comment}">-- ${e.name}</span></div>
          <div><span style="color:${t.keyword}">local</span> <span style="color:${t.function}">setup</span> = <span style="color:${t.accent}">true</span></div>
          <div><span style="color:${t.string}">"Neovim.ir"</span></div>
        </div>`}function c(){let e=i.value.trim(),t=e?r.search(e).map(e=>e.item):n;o.classList.toggle(`hidden`,t.length>0),a.innerHTML=t.map(e=>`
        <a href="/themes/${e.slug}" class="overflow-hidden rounded-lg border border-border transition hover:border-accent/50">
          ${s(e)}
          <div class="border-t border-border bg-bg-elevated p-4">
            <h2 class="font-mono text-sm font-semibold">${e.name}</h2>
            <p class="mt-2 line-clamp-2 text-sm text-fg-muted">${e.description}</p>
            <div class="mt-3 flex gap-1">
              ${[e.colors.background,e.colors.foreground,e.colors.accent].map(e=>`<span class="h-4 w-4 rounded-sm border border-border" style="background:${e}"></span>`).join(``)}
            </div>
          </div>
        </a>`).join(``)}i.addEventListener(`input`,c),document.addEventListener(`keydown`,e=>{e.key===`/`&&document.activeElement?.tagName!==`INPUT`&&(e.preventDefault(),i.focus())}),c()}