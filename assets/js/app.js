
// Shared helpers
export function $(sel, ctx=document){ return ctx.querySelector(sel); }
export function $all(sel, ctx=document){ return Array.from(ctx.querySelectorAll(sel)); }
export function save(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
export function load(key, fallback=null){ try{ return JSON.parse(localStorage.getItem(key)) ?? fallback; }catch{ return fallback; } }
export function nav(url){ window.location.href = url; }
export function fmtMoney(n){ return new Intl.NumberFormat(undefined,{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n); }
