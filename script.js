const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".section,.stats,.skill-grid article,.tool-grid div,.research-grid article,.project-feature,.lab-grid .terminal-card,.contact-grid a").forEach(x=>{x.classList.add("reveal");obs.observe(x)});
