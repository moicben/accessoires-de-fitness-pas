(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[638],{3282:(e,s,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/suivre-mon-colis",function(){return r(2622)}])},2622:(e,s,r)=>{"use strict";r.r(s),r.d(s,{__N_SSG:()=>l,default:()=>c});var n=r(4848),i=r(6540),t=r(3368),o=r.n(t),a=r(4793),u=r(7515),l=!0;let c=e=>{let{site:s}=e,[r,t]=(0,i.useState)(""),[l,c]=(0,i.useState)(null),[d,h]=(0,i.useState)(""),m=async()=>{try{let e=await fetch("/api/track?number=".concat(r)),s=await e.json();s&&s.status?(c(s),h("")):(c(null),h("Code de suivi non-trouv\xe9"))}catch(e){c(null),h("Erreur : code de suivi non-trouv\xe9 dans la base de donn\xe9es")}};return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Suivre mon colis - ".concat(s.shopName)}),(0,n.jsx)("meta",{name:"description",content:"Suivez votre commande en temps r\xe9el"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(a.A,{shopName:s.shopName,keywordPlurial:s.keywordPlurial}),(0,n.jsx)("main",{children:(0,n.jsxs)("div",{className:"track-order-container",children:[(0,n.jsx)("h1",{children:"Suivre mon colis"}),(0,n.jsx)("p",{children:"Entrez votre num\xe9ro de suivi ci-dessous pour obtenir les informations les plus r\xe9centes sur votre commande. Nous nous engageons \xe0 vous fournir des mises \xe0 jour en temps r\xe9el pour que vous puissiez suivre votre colis en toute tranquillit\xe9."}),(0,n.jsxs)("div",{className:"track-order-form",children:[(0,n.jsx)("input",{type:"text",placeholder:"Entrez votre num\xe9ro de suivi",value:r,onChange:e=>t(e.target.value)}),(0,n.jsx)("button",{onClick:m,children:"Suivre"})]}),d&&(0,n.jsx)("div",{className:"error-message",children:d}),l&&(0,n.jsxs)("div",{className:"tracking-info",children:[(0,n.jsx)("h2",{children:"Informations de suivi"}),(0,n.jsxs)("p",{children:["Status: ",l.status]}),(0,n.jsxs)("p",{children:["Derni\xe8re mise \xe0 jour: ",l.lastUpdate]}),(0,n.jsxs)("p",{children:["Lieu actuel: ",l.currentLocation]})]})]})}),(0,n.jsx)(u.A,{shopName:s.shopName,footerText:s.footerText})]},s.id)}}},e=>{var s=s=>e(e.s=s);e.O(0,[563,742,503,636,593,792],()=>s(3282)),_N_E=e.O()}]);