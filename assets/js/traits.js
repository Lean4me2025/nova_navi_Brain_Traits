
import { $, $all, save, load, nav } from './app.js';

const TRAITS = ['Analytical', 'Creative', 'Leadership', 'Teamwork', 'Communication', 'Problem-Solving', 'Adaptability', 'Detail-Oriented', 'Strategic Thinking', 'Empathy', 'Resilience', 'Time Management', 'Initiative', 'Curiosity', 'Organization', 'Decision-Making', 'Collaboration', 'Mentoring', 'Customer Focus', 'Data-Driven', 'Innovation', 'Quality Focus', 'Process Improvement', 'Results-Oriented', 'Technical Aptitude', 'Project Management', 'Negotiation', 'Conflict Resolution', 'Writing', 'Presentation', 'Research', 'Design Sense', 'Systems Thinking', 'Financial Acumen', 'Risk Awareness', 'Compliance', 'Continuous Learning', 'Entrepreneurial', 'Service Minded', 'Coaching', 'Sales Acumen', 'Marketing Sense', 'Product Thinking', 'Operational Excellence', 'Safety Minded', 'Security Minded', 'Ethical Judgment', 'Cultural Awareness', 'Networking', 'Resourcefulness'];

const grid = document.querySelector('.traits');
const chosen = new Set(load('chosen_traits', []));

function render(){ 
  grid.innerHTML = '';
  TRAITS.forEach(t=>{ 
    const el = document.createElement('div'); 
    el.className = 'trait' + (chosen.has(t)?' active':'');
    el.textContent = t;
    el.onclick = ()=>{ 
      if (chosen.has(t)) chosen.delete(t); else chosen.add(t);
      save('chosen_traits', Array.from(chosen));
      render();
    };
    grid.appendChild(el);
  });
}

render();

document.getElementById('seeResults').addEventListener('click', ()=>{
  if (chosen.size === 0) alert('Pick at least 1 trait 🙂');
  else nav('/results.html');
});
