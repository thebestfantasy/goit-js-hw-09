const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e;t.stopBtn.setAttribute("disabled",""),t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=e,t.startBtn.setAttribute("disabled",""),t.stopBtn.removeAttribute("disabled")}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.stopBtn.setAttribute("disabled",""),t.startBtn.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.2bdd1a3a.js.map
