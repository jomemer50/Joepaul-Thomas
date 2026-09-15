const PROJECTS = [
  {slug:"signal-board", title:"Signal Board", blurb:"Minimal realtime dashboard for incident triage. WebSockets, sparklines, keyboard-first.", tags:["TypeScript","Next.js","WebSockets"], year:"2025", img:"https://picsum.photos/seed/signal/800/450", github:"#", live:"#", problem:"On-call teams drown in noisy alerts across tools.", solution:"One quiet board: deduped signals, severity sparklines, one-key acknowledge. P95 update <200ms.", stack:["Next.js","TypeScript","Tailwind","ws"]},
  {slug:"porter", title:"Porter", blurb:"CLI that ports env + secrets safely between preview deploys.", tags:["Go","CLI","DX"], year:"2024", img:"https://picsum.photos/seed/porter/800/450", github:"#", live:"#", problem:"Preview envs drift; copying .env is error-prone.", solution:"Diff, encrypt, and sync with audit log. 3 commands to parity.", stack:["Go","Age encryption","GitHub Actions"]},
  {slug:"fieldnotes", title:"Fieldnotes API", blurb:"Offline-first notes sync with CRDT merge.", tags:["Node","SQLite","CRDT"], year:"2024", img:"https://picsum.photos/seed/notes/800/450", github:"#", live:"#", problem:"Notes conflict across phone + laptop offline.", solution:"Local-first SQLite + automerge-style merge, tiny sync server.", stack:["Node","SQLite","Yjs"]},
  {slug:"mono-ui", title:"Mono UI", blurb:"Tiny accessible component kit. 6kb, no deps.", tags:["React","a11y","CSS"], year:"2023", img:"https://picsum.photos/seed/mono/800/450", github:"#", live:"#", problem:"Design systems bloat portfolios.", solution:"12 components, strict tokens, full keyboard + screen-reader support.", stack:["React","CSS Variables","Vitest"]},
];
const ALBUMS = [
  {slug:"coast", title:"Quiet Coast", location:"Kerala → Lisbon", count:8, cover:"https://picsum.photos/seed/coast1/600/750", photos:[
    {src:"https://picsum.photos/seed/coast1/1200/800", cap:"Morning haze, Varkala", exif:"35mm · f/2.8 · 1/500"},
    {src:"https://picsum.photos/seed/coast2/800/1000", cap:"Fishing boats", exif:"50mm · f/4 · 1/250"},
    {src:"https://picsum.photos/seed/coast3/1200/800", cap:"Salt air", exif:"28mm · f/8 · 1/125"},
    {src:"https://picsum.photos/seed/coast4/800/1000", cap:"Low tide lines", exif:"35mm · f/5.6 · 1/320"},
    {src:"https://picsum.photos/seed/coast5/1200/800", cap:"Cliff walk", exif:"35mm · f/8 · 1/500"},
    {src:"https://picsum.photos/seed/coast6/1200/800", cap:"Evening ferry", exif:"50mm · f/2 · 1/125"},
  ]},
  {slug:"city", title:"Concrete Poems", location:"Bangalore / Berlin", count:6, cover:"https://picsum.photos/seed/city1/600/750", photos:[
    {src:"https://picsum.photos/seed/city1/800/1000", cap:"Metro geometry", exif:"28mm · f/8 · 1/250"},
    {src:"https://picsum.photos/seed/city2/1200/800", cap:"Rain windows", exif:"35mm · f/2 · 1/60"},
    {src:"https://picsum.photos/seed/city3/1200/800", cap:"Night bus", exif:"35mm · f/1.8 · 1/125"},
    {src:"https://picsum.photos/seed/city4/800/1000", cap:"Stairwell", exif:"24mm · f/4 · 1/200"},
  ]},
  {slug:"people", title:"Strangers, Kindly", location:"Various", count:5, cover:"https://picsum.photos/seed/port1/600/750", photos:[
    {src:"https://picsum.photos/seed/port1/800/1000", cap:"Tea stall", exif:"50mm · f/2 · 1/250"},
    {src:"https://picsum.photos/seed/port2/800/1000", cap:"Platform wait", exif:"50mm · f/2.8 · 1/320"},
    {src:"https://picsum.photos/seed/port3/1200/800", cap:"Market smile", exif:"35mm · f/2.8 · 1/500"},
  ]},
];
function qs(k){return new URLSearchParams(location.search).get(k)}
function tagPills(tags){return tags.map(t=>`<span class="pill">${t}</span>`).join("")}
function renderProjects(el){ if(!el) return; el.innerHTML = PROJECTS.map(p=>`
  <a class="card" href="project.html?slug=${p.slug}">
    <div class="thumb"><img loading="lazy" src="${p.img}" alt="${p.title}"></div>
    <div class="body"><div class="eyebrow">${p.year} — Software</div><h3>${p.title}</h3>
    <div class="meta">${p.blurb}</div><div class="tags">${tagPills(p.tags)}</div>
    <div class="row"><span>Case study →</span></div></div></a>`).join("")}
function renderProjectDetail(el){ if(!el) return; const p = PROJECTS.find(x=>x.slug===qs("slug"))||PROJECTS[0];
  el.innerHTML = `<a class="eyebrow" href="engineer.html">← All projects</a><h1>${p.title}</h1>
  <p class="sub">${p.blurb}</p><div class="tags">${tagPills(p.tags)}</div>
  <div class="thumb" style="border:1px solid var(--line);border-radius:6px;overflow:hidden;margin:18px 0"><img src="${p.img}" style="width:100%;display:block" alt=""></div>
  <div class="two"><div class="panel"><div class="eyebrow">Problem</div><p>${p.problem}</p></div>
  <div class="panel"><div class="eyebrow">Solution</div><p>${p.solution}</p></div></div>
  <div class="eyebrow">Stack</div><div class="tags">${tagPills(p.stack)}</div>
  <pre>// ${p.slug}\ngit clone + npm i\nnpm run dev  // p95 &lt; 200ms</pre>
  <div class="row"><a href="${p.github}">GitHub</a><a href="${p.live}">Live demo</a></div>`}
function renderAlbums(el){ if(!el) return; el.innerHTML = ALBUMS.map(a=>`
  <a class="album-cover" href="album.html?album=${a.slug}">
    <img loading="lazy" src="${a.cover}" alt="${a.title}"><div class="body">
    <div class="eyebrow">${a.location} · ${a.photos.length} photos</div><h3 style="margin:.3em 0;font-family:var(--head)">${a.title}</h3></div></a>`).join("")}
function renderAlbum(el){ if(!el) return; const a = ALBUMS.find(x=>x.slug===qs("album"))||ALBUMS[0];
  document.getElementById("album-title").innerHTML = `<a class="eyebrow" href="frames.html">← All albums</a><h1>${a.title}</h1><p class="sub">${a.location} · ${a.photos.length} frames</p>`;
  el.innerHTML = a.photos.map((p,i)=>`<img loading="lazy" src="${p.src}" data-i="${i}" alt="${p.cap}">`).join("");
  const lb = document.getElementById("lightbox");
  el.onclick = e=>{ if(e.target.tagName!=="IMG")return; const ph=a.photos[+e.target.dataset.i];
    lb.innerHTML=`<figure><img src="${ph.src}"><figcaption>${ph.cap} — ${ph.exif}</figcaption></figure>`; lb.classList.add("open")};
  lb.onclick=()=>lb.classList.remove("open"); addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("open")});}
document.addEventListener("DOMContentLoaded",()=>{
  renderProjects(document.getElementById("projects"));
  renderProjectDetail(document.getElementById("project-detail"));
  renderAlbums(document.getElementById("albums"));
  renderAlbum(document.getElementById("masonry"));
});
