const $=s=>document.querySelector(s);
const pal=[["#8B5A33","#17120E"],["#56734A","#1d2a1a"],["#F0A53A","#6b3d12"],["#3b2f27","#8B5A33"],["#2c3f2a","#F0A53A"]];
const catName=s=>(CATEGORIES.find(c=>c.slug===s)||{}).name||s;

function media(w,i,full){
  if(w.src){
    if(w.type==="video"){
      const v=document.createElement("video");
      v.src=w.src;v.muted=!full;v.loop=true;v.playsInline=true;v.preload="metadata";if(w.poster)v.poster=w.poster;
      if(full){v.controls=true;v.autoplay=true}else{v.className="media";if(w.autoplay){v.muted=true;v.autoplay=true}}
      return v;
    }
    const m=document.createElement("img");m.src=w.src;m.alt=w.title+(w.brand?" — "+w.brand:"");m.loading="lazy";if(!full)m.className="media";return m;
  }
  const d=document.createElement("div"),c=pal[i%pal.length];
  d.className=(full?"":"media ")+"ph";d.style.setProperty("--c1",c[0]);d.style.setProperty("--c2",c[1]);d.textContent=w.type==="video"?"▶":"A";
  return d;
}
function card(w){
  const i=WORK.indexOf(w),b=document.createElement("button");
  b.className="card";b.style.setProperty("--ar",w.ratio||"4/5");b.setAttribute("aria-label","Open "+w.title);
  const m=media(w,i);b.append(m);
  const c=document.createElement("div");c.className="cap";
  c.innerHTML="<div><strong></strong><span></span></div><em class='badge'></em>";
  c.querySelector("strong").textContent=w.title;
  c.querySelector("span").textContent=(w.brand?w.brand+" · ":"")+catName(w.category);
  c.querySelector(".badge").textContent=w.type==="video"?"Video":"Photo";
  b.append(c);
  if(m.tagName==="VIDEO"){b.onmouseenter=()=>m.play().catch(()=>{});b.onmouseleave=()=>m.pause()}
  b.onclick=()=>{
    $("#stage").replaceChildren(media(w,i,true));
    $("#mt").textContent=w.title;$("#ms").textContent=(w.brand?w.brand+" · ":"")+catName(w.category);
    $("#box").showModal();
  };
  return b;
}
document.body.insertAdjacentHTML("beforeend",'<dialog id="box" aria-label="Project viewer"><button class="x" id="close" aria-label="Close">✕</button><div class="stage" id="stage"></div><div class="meta"><div><strong id="mt"></strong><br><span id="ms" style="color:#b9ac9a"></span></div></div></dialog>');
const box=$("#box"),shut=()=>box.close();
$("#close").onclick=shut;
box.addEventListener("click",e=>{if(e.target===box)shut()});
box.addEventListener("close",()=>$("#stage").replaceChildren());
$("#yr").textContent=new Date().getFullYear();
