const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.stopBtn.setAttribute("disabled",""),t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=e,t.startBtn.setAttribute("disabled",""),t.stopBtn.removeAttribute("disabled")}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.stopBtn.setAttribute("disabled",""),t.startBtn.removeAttribute("disabled")}));let e=null;
//# sourceMappingURL=01-color-switcher.765be7e8.js.map