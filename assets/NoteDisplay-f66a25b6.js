import{d as c,i as d,a as u,f as n,E as s,g as r,t as a,o as i,_ as m}from"./index-1a872a93.js";const k=["innerHTML"],f=["textContent"],v=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return d(u),(e,t)=>e.noteHtml?(i(),n("div",{key:0,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=l=>e.$emit("click")),innerHTML:e.noteHtml},null,10,k)):e.note?(i(),n("div",{key:1,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=l=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,f)],2)):(i(),n("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=l=>e.$emit("click"))},[r("p",{textContent:a(o.placeholder||"No notes.")},null,8,v)],2))}}),_=m(y,[["__file","/home/runner/work/what_is_docker/what_is_docker/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{_ as N};
