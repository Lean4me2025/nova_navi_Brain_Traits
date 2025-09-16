
import { $, fmtMoney, load } from './app.js';

const chosen = load('chosen_traits', []);
const out = $('#chosenList');
if (out) {
  out.innerHTML = chosen.map(t=>`<span class="trait active">${{t}}</span>`).join('');
}

// naive "matches" suggestion based on presence of a few trait keywords
const suggestions = [];
const cset = new Set(chosen.map(s=>s.toLowerCase()));
function has(...keys){ return keys.some(k=>cset.has(k.toLowerCase())); }

if (has('Analytical','Data-Driven','Research','Systems Thinking')) suggestions.push({ title:'Data Analyst', low:78000, high:125000 });
if (has('Leadership','Project Management','Operational Excellence')) suggestions.push({ title:'Operations Manager', low:90000, high:145000 });
if (has('Creative','Design Sense','Product Thinking','Marketing Sense')) suggestions.push({ title:'Product Designer', low:85000, high:140000 });
if (has('Security Minded','Risk Awareness','Compliance')) suggestions.push({ title:'Security Analyst', low:95000, high:155000 });
if (suggestions.length===0) suggestions.push({ title:'Business Generalist', low:70000, high:120000 });

const list = $('#matchList');
list.innerHTML = suggestions.map(s=>`
  <div class="card">
    <h3>${{s.title}}</h3>
    <div class="small">Estimated salary band: ${{fmtMoney(s.low)}} – ${{fmtMoney(s.high)}}</div>
  </div>
`).join('');

$('#download').addEventListener('click', ()=>{
  window.print();
});
