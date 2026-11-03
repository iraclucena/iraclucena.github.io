(function(){
  var root=document.documentElement;
  function setLang(l){
    root.setAttribute("data-lang",l);
    root.setAttribute("lang",l==="pt"?"pt-BR":"en");
    try{localStorage.setItem("lang",l)}catch(e){}
  }
  setLang(root.getAttribute("data-lang")||"pt");
  document.querySelectorAll(".lang-btn").forEach(function(b){
    b.addEventListener("click",function(){setLang(root.getAttribute("data-lang")==="pt"?"en":"pt")});
  });

  // menu no celular
  var mb=document.querySelector(".menu-btn"),nav=document.querySelector(".nav");
  if(mb)mb.addEventListener("click",function(){var o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)});

  // e-mail protegido contra robôs
  document.querySelectorAll(".email").forEach(function(s){
    var a=s.dataset.u+"@"+s.dataset.d,l=document.createElement("a");
    l.href="mailto:"+a;l.textContent=a;s.replaceWith(l);
  });

  // busca e filtro de publicações
  var q=document.getElementById("pub-search");
  if(q){
    var filter="all",chips=document.querySelectorAll(".chip");
    function apply(){
      var term=q.value.trim().toLowerCase(),any=false;
      document.querySelectorAll(".year-group").forEach(function(g){
        var vis=0;
        g.querySelectorAll(".pub").forEach(function(p){
          var ok=(filter==="all"||p.dataset.type===filter)&&p.textContent.toLowerCase().indexOf(term)>-1;
          p.hidden=!ok;if(ok)vis++;
        });
        g.hidden=!vis;if(vis)any=true;
      });
      document.getElementById("pub-empty").hidden=any;
    }
    q.addEventListener("input",apply);
    chips.forEach(function(c){c.addEventListener("click",function(){
      chips.forEach(function(x){x.classList.remove("on")});c.classList.add("on");filter=c.dataset.filter;apply();
    })});
  }
})();
