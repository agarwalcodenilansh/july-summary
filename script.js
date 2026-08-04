/* ═══ MVIKAS LOGISTICS DASHBOARD — July 31, 2026 Final ═══ */

// Chart defaults
const CD = Chart.defaults;
CD.color='#475569';CD.font.family='Inter,system-ui,sans-serif';CD.font.size=12;
CD.plugins.tooltip.backgroundColor='#0c1e4a';CD.plugins.tooltip.borderColor='#1e40af';
CD.plugins.tooltip.borderWidth=1;CD.plugins.tooltip.padding=12;CD.plugins.tooltip.cornerRadius=10;
CD.scale.grid.color='#dbeafe';CD.scale.ticks.color='#475569';

// ─── Particles ───
(function(){
  const c=document.getElementById('particleCanvas');if(!c)return;
  const x=c.getContext('2d');let ps=[];
  function resize(){c.width=innerWidth;c.height=innerHeight}resize();addEventListener('resize',resize);
  class P{constructor(){this.r()}r(){this.x=Math.random()*c.width;this.y=Math.random()*c.height;this.s=Math.random()*2.5+.5;this.dx=(Math.random()-.5)*.3;this.dy=(Math.random()-.5)*.3;this.o=Math.random()*.15+.03}u(){this.x+=this.dx;this.y+=this.dy;if(this.x<0||this.x>c.width)this.dx*=-1;if(this.y<0||this.y>c.height)this.dy*=-1}d(){x.beginPath();x.arc(this.x,this.y,this.s,0,Math.PI*2);x.fillStyle=`rgba(0,77,245,${this.o})`;x.fill()}}
  for(let i=0;i<30;i++)ps.push(new P());
  function loop(){x.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.u();p.d()});
    for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){const d=Math.hypot(ps[i].x-ps[j].x,ps[i].y-ps[j].y);if(d<150){x.beginPath();x.strokeStyle=`rgba(0,77,245,${.03*(1-d/150)})`;x.lineWidth=.5;x.moveTo(ps[i].x,ps[i].y);x.lineTo(ps[j].x,ps[j].y);x.stroke()}}
    requestAnimationFrame(loop)}loop();
})();

// ─── Counter Animation ───
function animateCounters(){document.querySelectorAll('.counter').forEach(el=>{const t=+el.dataset.target,dur=1800,st=performance.now();(function tick(now){const p=Math.min((now-st)/dur,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(tick)})(st)})}

// ─── Observer ───
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.anim-up,.anim-card').forEach(el=>obs.observe(el));

// ─── Tabs ───
function switchTab(id,btn){document.querySelectorAll('.tab').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));document.getElementById('tab-'+id).classList.add('active');btn.classList.add('active');btn.setAttribute('aria-selected','true')}
window.switchTab=switchTab;

// ─── Helper ───
const $=id=>document.getElementById(id);
const fR=v=>'₹'+v.toLocaleString('en-IN',{maximumFractionDigits:0});
const fK=v=>v.toLocaleString('en-IN',{maximumFractionDigits:0});

// ─── Client Data (July 31, 2026 Final) ───
const clients=[
  {name:'Carrier Refrigeration',person:'Sangeet Dhasmana',target:293072.82,achieved:297984.65,activeDays:31},
  {name:'Bombax',person:'Sangeet Dhasmana',target:97357.44,achieved:115424.32,activeDays:31},
  {name:'Carrier CTD',person:'Deepak Sharma',target:29784.07,achieved:110496.5,activeDays:31},
  {name:'Haier CCR',person:'Deepak Sharma',target:0,achieved:4013.05,activeDays:31},
  {name:'Loom Solar Pvt Ltd',person:'Deepak Sharma',target:14457.83,achieved:15523.0,activeDays:31},
  {name:'Kumar Services',person:'Deepak Sharma',target:13725.49,achieved:14705.76,activeDays:31},
  {name:'Sukuga Technologies Pvt Ltd',person:'Deepak Sharma',target:10141.99,achieved:19069.03,activeDays:31},
  {name:'Cosmos Pumps Pvt Ltd',person:'Deepak Sharma',target:11398.18,achieved:7152.8,activeDays:31},
  {name:'Oneiric Appliances Pvt Ltd',person:'Deepak Sharma',target:15232.29,achieved:10595.36,activeDays:31},
  {name:'Paramount Surgimed Ltd',person:'Deepak Sharma',target:12038.52,achieved:5811.71,activeDays:31},
  {name:'Medical Science',person:'Sangeet Dhasmana',target:6013.75,achieved:5806.06,activeDays:31},
  {name:'Mitras Technocrafts Pvt Ltd',person:'Deepak Sharma',target:13501.35,achieved:4085.4,activeDays:31},
  {name:'Vaidrishi Laboratories Pvt Ltd',person:'Sangeet Dhasmana',target:0,achieved:2889.87,activeDays:31},
  {name:'Frick India',person:'Deepak Sharma',target:0,achieved:0,activeDays:31},
  {name:'Indu Sports',person:'Sangeet Dhasmana',target:0,achieved:0,activeDays:31},
  {name:'Stockarea',person:'Deepak Sharma',target:0,achieved:0,activeDays:31},
  {name:'Edusoft Healthcare Ltd',person:'Deepak Sharma',target:3631.08,achieved:0,activeDays:31},
  {name:'GCPA',person:'Shiva',target:0,achieved:0,activeDays:31},
  {name:'Pangea',person:'Deepak Sharma',target:9090.91,achieved:0,activeDays:31},
  {name:'RSR',person:'Deepak Sharma',target:5000,achieved:0,activeDays:31,isNew:true},
  {name:'Epson',person:'Sangeet Dhasmana',target:10000,achieved:3291.96,activeDays:31,isNew:true},
  {name:'KRF',person:'Not Alloted',target:0,achieved:0,activeDays:31,isNew:true},
  {name:'Conficore',person:'Sangeet Dhasmana',target:5000,achieved:445.0,activeDays:31,isNew:true},
  {name:'KTB',person:'Sangeet Dhasmana',target:0,achieved:1014.03,activeDays:31},
  {name:'MV-Zenotel',person:'Sangeet Dhasmana',target:0,achieved:80.0,activeDays:31},
];

clients.forEach(c=>{
  c.pct=c.target>0?Math.round(c.achieved/c.target*100):(c.achieved>0?999:0);
  c.avgDay=c.activeDays>0?Math.round(c.achieved/c.activeDays):0;
  c.remaining=Math.max((c.target||0)-c.achieved,0);
  c.daysNeeded=c.avgDay>0&&c.remaining>0?+(c.remaining/c.avgDay).toFixed(1):(c.remaining===0?0:999);
});

// ─── Period Data ───
const pT={'Carrier Refrigeration':{first10:92317.94,mid10:87921.85,last10:114298.4},'Carrier CTD':{first10:11466.87,mid10:10126.58,last10:8339.538},'Mitras Technocrafts Pvt Ltd':{first10:4117.912,mid10:4927.993,last10:4387.939},'Paramount Surgimed Ltd':{first10:1083.467,mid10:2166.934,last10:8788.122},'Bombax':{first10:30180.81,mid10:37482.61,last10:29207.23},'Kumar Services':{first10:4598.039,mid10:5421.569,last10:3637.255},'Edusoft Healthcare Ltd':{first10:2904.866,mid10:726.2164,last10:0},'Oneiric Appliances Pvt Ltd':{first10:6626.047,mid10:4112.719,last10:4493.526},'Sukuga Technologies Pvt Ltd':{first10:1470.588,mid10:4665.314,last10:4006.085},'Cosmos Pumps Pvt Ltd':{first10:3647.416,mid10:4331.307,last10:3362.462},'Loom Solar Pvt Ltd':{first10:4192.771,mid10:4481.928,last10:5783.133},'Pangea':{first10:3030.303,mid10:3030.303,last10:3030.303},'RSR':{first10:1666.667,mid10:1666.667,last10:1666.667},'Medical Science':{first10:0,mid10:1924.399,last10:4089.347},'Epson':{first10:3333.333,mid10:3333.333,last10:3333.333},'Conficore':{first10:1666.667,mid10:1666.667,last10:1666.667}};

const pA={'Carrier Refrigeration':{first10:56904,mid10:73480.32,last10:167599.4},'Carrier CTD':{first10:26677.05,mid10:36193.39,last10:47625.02},'Mitras Technocrafts Pvt Ltd':{first10:935.01,mid10:522,last10:2628.39},'Paramount Surgimed Ltd':{first10:null,mid10:1333,last10:4478.71},'Haier CCR':{first10:3033,mid10:null,last10:979},'Bombax':{first10:37481.48,mid10:36134.29,last10:41807.62},'Kumar Services':{first10:4114.98,mid10:4523.15,last10:6067.56},'Oneiric Appliances Pvt Ltd':{first10:5429.2,mid10:1042.2,last10:4123.96},'Vaidrishi Laboratories Pvt Ltd':{first10:750,mid10:981.95,last10:1157.59},'Sukuga Technologies Pvt Ltd':{first10:4604.3,mid10:3659.01,last10:10803.87},'Cosmos Pumps Pvt Ltd':{first10:4249.9,mid10:860,last10:2042.9},'Loom Solar Pvt Ltd':{first10:900,mid10:8533,last10:6090},'Medical Science':{first10:null,mid10:120,last10:5686.06},'Epson':{first10:1584.8,mid10:1260.04,last10:447.08},'Conficore':{first10:445,mid10:null,last10:null},'KTB':{first10:1014.03,mid10:null,last10:null},'MV-Zenotel':{first10:80,mid10:null,last10:null}};

clients.forEach(c=>{
  const t=pT[c.name],a=pA[c.name];
  c.periods={first10:{target:t?t.first10:null,achieved:a?a.first10:null},mid10:{target:t?t.mid10:null,achieved:a?a.mid10:null},last10:{target:t?t.last10:null,achieved:a?a.last10:null}};
});

// ─── EDD Data ───
const eddData=[{name:'Bombax',count:44},{name:'Carrier Refrigeration',count:22},{name:'Haier CCR',count:6},{name:'Stockarea',count:4},{name:'Sukuga',count:3},{name:'MVIKAS Tech',count:3},{name:'Carrier - CTD',count:3},{name:'Kumar Services',count:2},{name:'Indu Sports',count:1},{name:'MITRAS',count:1},{name:'Epson India',count:1},{name:'Loom Solar',count:1},{name:'Medical Science',count:1},{name:'Oneric Appliances',count:1}];
const eddTotal=eddData.reduce((a,b)=>a+b.count,0);

const eddDetail=[
  {id:"MVS/26-27/1304",name:"Bombax",transporter:"EKART",edd:"28 Apr 2026",reason:null},
  {id:"MVS/26-27/2003",name:"Bombax",transporter:"EKART",edd:"08 May 2026",reason:null},
  {id:"MVS/26-27/2679",name:"Bombax",transporter:"EKART",edd:"17 May 2026",reason:null},
  {id:"MVS/26-27/2680",name:"Bombax",transporter:"EKART",edd:"19 May 2026",reason:null},
  {id:"MVS/26-27/2684",name:"Bombax",transporter:"EKART",edd:"17 May 2026",reason:null},
  {id:"MVS/26-27/2692",name:"Bombax",transporter:"EKART",edd:"19 May 2026",reason:null},
  {id:"MVS/26-27/2694",name:"Bombax",transporter:"EKART",edd:"19 May 2026",reason:null},
  {id:"MVS/26-27/2698",name:"Bombax",transporter:"EKART",edd:"19 May 2026",reason:null},
  {id:"MVS/26-27/2764",name:"Bombax",transporter:"EKART",edd:"20 May 2026",reason:null},
  {id:"MVS/26-27/2874",name:"Bombax",transporter:"EKART",edd:"24 May 2026",reason:null},
  {id:"MVS/26-27/2900",name:"Bombax",transporter:"EKART",edd:"22 May 2026",reason:null},
  {id:"MVS/26-27/3032",name:"Bombax",transporter:"EKART",edd:"23 May 2026",reason:null},
  {id:"MVS/26-27/4080",name:"Carrier Refrigeration",transporter:"XP INDIA",edd:"02 Jun 2026",reason:null},
  {id:"MVS/26-27/4323",name:"Carrier Refrigeration",transporter:"EKART",edd:"04 Jun 2026",reason:null},
  {id:"MVS/26-27/4353",name:"Carrier Refrigeration",transporter:"XP INDIA",edd:"05 Jun 2026",reason:null},
  {id:"MVS/26-27/4385",name:"Sukuga",transporter:"EKARTD",edd:"08 Jun 2026",reason:null},
  {id:"MVS/26-27/4843",name:"Stockarea",transporter:null,edd:"06 Jun 2026",reason:null},
  {id:"MVS/26-27/5042",name:"Bombax",transporter:"EKART",edd:"13 Jun 2026",reason:null},
  {id:"MVS/26-27/5362",name:"Carrier Refrigeration",transporter:"EKART",edd:"18 Jun 2026",reason:null},
  {id:"MVS/26-27/5438",name:"Carrier Refrigeration",transporter:"EKART",edd:"19 Jun 2026",reason:null},
  {id:"MVS/26-27/5489",name:"MVIKAS Tech",transporter:null,edd:"22 Jun 2026",reason:null},
  {id:"MVS/26-27/5676",name:"Stockarea",transporter:null,edd:"19 Jun 2026",reason:null},
  {id:"MVS/26-27/5677",name:"Stockarea",transporter:null,edd:"19 Jun 2026",reason:null},
  {id:"MVS/26-27/5678",name:"Stockarea",transporter:null,edd:"19 Jun 2026",reason:null},
  {id:"MVS/26-27/6257",name:"Indu Sports",transporter:"EKART",edd:"30 Jun 2026",reason:null},
  {id:"MVS/26-27/6258",name:"Carrier Refrigeration",transporter:"EKART",edd:"27 Jun 2026",reason:null},
  {id:"MVS/26-27/6259",name:"Bombax",transporter:"EKART",edd:"01 Jul 2026",reason:null},
  {id:"MVS/26-27/6260",name:"Bombax",transporter:"EKART",edd:"30 Jun 2026",reason:null},
  {id:"MVS/26-27/6261",name:"Bombax",transporter:"EKART",edd:"02 Jul 2026",reason:null},
  {id:"MVS/26-27/6262",name:"Bombax",transporter:"EKART",edd:"01 Jul 2026",reason:null},
  {id:"MVS/26-27/6263",name:"Bombax",transporter:"EKART",edd:"01 Jul 2026",reason:null},
  {id:"MVS/26-27/6264",name:"Bombax",transporter:"EKART",edd:"30 Jun 2026",reason:null},
  {id:"MVS/26-27/6265",name:"Bombax",transporter:"EKART",edd:"02 Jul 2026",reason:null},
  {id:"MVS/26-27/6266",name:"Bombax",transporter:"EKART",edd:"03 Jul 2026",reason:null},
  {id:"MVS/26-27/6267",name:"Bombax",transporter:"EKART",edd:"01 Jul 2026",reason:null},
  {id:"MVS/26-27/6268",name:"Bombax",transporter:"EKART",edd:"29 Jun 2026",reason:null},
  {id:"MVS/26-27/6269",name:"Bombax",transporter:"EKART",edd:"03 Jul 2026",reason:null},
  {id:"MVS/26-27/6270",name:"Bombax",transporter:"EKART",edd:"29 Jun 2026",reason:null},
  {id:"MVS/26-27/6271",name:"Bombax",transporter:"EKART",edd:"29 Jun 2026",reason:null},
  {id:"MVS/26-27/6272",name:"Bombax",transporter:"EKART",edd:"03 Jul 2026",reason:null},
  {id:"MVS/26-27/6273",name:"Bombax",transporter:"EKART",edd:"29 Jun 2026",reason:null},
  {id:"MVS/26-27/6274",name:"Haier CCR",transporter:"EKART",edd:"29 Jun 2026",reason:null},
  {id:"MVS/26-27/6275",name:"Haier CCR",transporter:"EKART",edd:"29 Jun 2026",reason:null},
  {id:"MVS/26-27/6276",name:"Haier CCR",transporter:"EKART",edd:"27 Jun 2026",reason:null},
  {id:"MVS/26-27/6277",name:"Haier CCR",transporter:"EKART",edd:"27 Jun 2026",reason:null},
  {id:"MVS/26-27/6278",name:"Haier CCR",transporter:"EKART",edd:"27 Jun 2026",reason:null},
  {id:"MVS/26-27/6279",name:"Haier CCR",transporter:"EKART",edd:"27 Jun 2026",reason:null},
  {id:"MVS/26-27/6589",name:"Bombax",transporter:"EKART",edd:"03 Jul 2026",reason:null},
  {id:"MVS/26-27/6675",name:"Bombax",transporter:"EKART",edd:"06 Jul 2026",reason:null},
  {id:"MVS/26-27/6780",name:"MITRAS",transporter:"DELHIVERY",edd:"04 Jul 2026",reason:null},
  {id:"MVS/26-27/6865",name:"Bombax",transporter:"DP WORLD",edd:"10 Jul 2026",reason:null},
  {id:"MVS/26-27/7103",name:"Bombax",transporter:"EKART",edd:"11 Jul 2026",reason:null},
  {id:"MVS/26-27/7198",name:"MVIKAS Tech",transporter:null,edd:"10 Jul 2026",reason:null},
  {id:"MVS/26-27/7283",name:"Carrier Refrigeration",transporter:"XP INDIA",edd:"13 Jul 2026",reason:null},
  {id:"MVS/26-27/7333",name:"Bombax",transporter:"DP WORLD",edd:"13 Jul 2026",reason:null},
  {id:"MVS/26-27/7450",name:"Bombax",transporter:"DP WORLD",edd:"12 Jul 2026",reason:null},
  {id:"MVS/26-27/7560",name:"Bombax",transporter:"EKART",edd:"17 Jul 2026",reason:null},
  {id:"MVS/26-27/7866",name:"Bombax",transporter:"EKART",edd:"20 Jul 2026",reason:null},
  {id:"MVS/26-27/7909",name:"Epson India",transporter:"EKART",edd:"17 Jul 2026",reason:null},
  {id:"MVS/26-27/8104",name:"Bombax",transporter:"EKART",edd:"22 Jul 2026",reason:null},
  {id:"MVS/26-27/8153",name:"Bombax",transporter:"EKART",edd:"23 Jul 2026",reason:null},
  {id:"MVS/26-27/8159",name:"Carrier Refrigeration",transporter:"XP INDIA",edd:"22 Jul 2026",reason:null},
  {id:"MVS/26-27/8250",name:"Loom Solar",transporter:"EKART",edd:"20 Jul 2026",reason:null},
  {id:"MVS/26-27/8464",name:"Carrier Refrigeration",transporter:"EKART / REVERSE",edd:"19 Jul 2026",reason:null},
  {id:"MVS/26-27/8643",name:"Bombax",transporter:"EKART",edd:"27 Jul 2026",reason:null},
  {id:"MVS/26-27/8812",name:"Bombax",transporter:"EKART",edd:"28 Jul 2026",reason:null},
  {id:"MVS/26-27/8818",name:"Sukuga",transporter:"DP WORLD",edd:"27 Jul 2026",reason:null},
  {id:"MVS/26-27/8838",name:"Bombax",transporter:"DP WORLD",edd:"28 Jul 2026",reason:null},
  {id:"MVS/26-27/8864",name:"Bombax",transporter:"EKART",edd:"26 Jul 2026",reason:null},
  {id:"MVS/26-27/8876",name:"Bombax",transporter:"EKART",edd:"29 Jul 2026",reason:null},
  {id:"MVS/26-27/8913",name:"Carrier Refrigeration",transporter:"XP INDIA",edd:"30 Jul 2026",reason:null},
  {id:"MVS/26-27/9008",name:"Sukuga",transporter:"GATI",edd:"28 Jul 2026",reason:null},
  {id:"MVS/26-27/9017",name:"Medical Science",transporter:"LAST MILE",edd:"27 Jul 2026",reason:null},
  {id:"MVS/26-27/9039",name:"Carrier Refrigeration",transporter:"DP WORLD",edd:"28 Jul 2026",reason:null},
  {id:"MVS/26-27/9052",name:"Carrier Refrigeration",transporter:"DP WORLD",edd:"29 Jul 2026",reason:null},
  {id:"MVS/26-27/9073",name:"Carrier Refrigeration",transporter:"DP WORLD",edd:"30 Jul 2026",reason:null},
  {id:"MVS/26-27/9141",name:"Bombax",transporter:"EKART",edd:"29 Jul 2026",reason:null},
  {id:"MVS/26-27/9181",name:"Carrier Refrigeration",transporter:"XP INDIA",edd:"29 Jul 2026",reason:null},
  {id:"MVS/26-27/9195",name:"Carrier Refrigeration",transporter:"XP INDIA",edd:"30 Jul 2026",reason:null},
  {id:"MVS/26-27/9230",name:"Carrier - CTD",transporter:"DP WORLD",edd:"30 Jul 2026",reason:null},
  {id:"MVS/26-27/9244",name:"Kumar Services",transporter:"EKARTD",edd:"29 Jul 2026",reason:null},
  {id:"MVS/26-27/9260",name:"Carrier - CTD",transporter:"DP WORLD",edd:"30 Jul 2026",reason:null},
  {id:"MVS/26-27/9261",name:"Carrier - CTD",transporter:"DP WORLD",edd:"30 Jul 2026",reason:null},
  {id:"MVS/26-27/9297",name:"Carrier Refrigeration",transporter:"EKART",edd:"29 Jul 2026",reason:null},
  {id:"MVS/26-27/9298",name:"Carrier Refrigeration",transporter:"EKART",edd:"30 Jul 2026",reason:null},
  {id:"MVS/26-27/9306",name:"Carrier Refrigeration",transporter:"EKART",edd:"30 Jul 2026",reason:null},
  {id:"MVS/26-27/9323",name:"Carrier Refrigeration",transporter:"EKART",edd:"29 Jul 2026",reason:null},
  {id:"MVS/26-27/9325",name:"Carrier Refrigeration",transporter:"EKART",edd:"27 Jul 2026",reason:null},
  {id:"MVS/26-27/9341",name:"Carrier Refrigeration",transporter:"XP INDIA",edd:"30 Jul 2026",reason:null},
  {id:"MVS/26-27/9343",name:"Carrier Refrigeration",transporter:"XP INDIA",edd:"29 Jul 2026",reason:null},
  {id:"MVS/26-27/9349",name:"Oneric Appliances",transporter:"GATI",edd:"29 Jul 2026",reason:null},
  {id:"MVS/26-27/9416",name:"Kumar Services",transporter:"DP WORLD",edd:"30 Jul 2026",reason:null},
  {id:"MVS/26-27/9420",name:"MVIKAS Tech",transporter:"XP INDIA",edd:"23 Jul 2026",reason:null},
];

// ─── Open / Due / Booked ───
const openData=[{name:'Carrier Refrigeration',count:368},{name:'Bombax',count:269},{name:'Carrier - CTD',count:69},{name:'Sukuga',count:26},{name:'Medical Science',count:22},{name:'Oneric Appliances',count:11},{name:'Kumar Services',count:6},{name:'MITRAS',count:5},{name:'Loom Solar',count:5},{name:'Cosmos Pumps Pvt. Ltd.',count:5},{name:'Stockarea',count:4},{name:'MVIKAS Tech',count:3},{name:'Vaidrishi Laboratories',count:3},{name:'Haier CCR',count:2},{name:'Epson India',count:1},{name:'Paramount Surgimed Ltd',count:1},{name:'Aurinko Healthcare',count:1},{name:'Indu Sports',count:1},{name:'Conficore',count:1}];
const openTotal=openData.reduce((a,b)=>a+b.count,0);

const dueData=[{name:'Carrier Refrigeration',count:21},{name:'Carrier - CTD',count:5},{name:'Bombax',count:2},{name:'Oneric Appliances',count:1},{name:'Medical Science',count:1},{name:'Cosmos Pumps Pvt. Ltd.',count:1},{name:'Sukuga',count:1},{name:'Haier CCR',count:1}];
const dueTotal=dueData.reduce((a,b)=>a+b.count,0);

const bookedData=[{name:'Carrier Refrigeration',count:100},{name:'Carrier - CTD',count:32},{name:'Bombax',count:16},{name:'Medical Science',count:12},{name:'Sukuga',count:9},{name:'Oneric Appliances',count:5},{name:'MITRAS',count:2},{name:'Vaidrishi Laboratories',count:2},{name:'Cosmos Pumps Pvt. Ltd.',count:2},{name:'Indu Sports',count:2},{name:'Haier CCR',count:2},{name:'Kumar Services',count:2},{name:'Aurinko Healthcare',count:1}];
const bookedTotal=bookedData.reduce((a,b)=>a+b.count,0);

const dailyTonnageData=[{name:'Carrier Refrigeration',kg:20162},{name:'Carrier - CTD',kg:3980.85},{name:'Medical Science',kg:1990},{name:'MITRAS',kg:1537.01},{name:'Bombax',kg:1417.13},{name:'Oneric Appliances',kg:1411.96},{name:'Sukuga',kg:1009},{name:'Kumar Services',kg:492.96},{name:'Haier CCR',kg:255.01},{name:'Vaidrishi Laboratories',kg:229.33},{name:'Cosmos Pumps Pvt. Ltd.',kg:116}];
const dailyTotal=dailyTonnageData.reduce((a,b)=>a+b.kg,0);

const monthlyTotal=clients.reduce((a,c)=>a+c.achieved,0);
const activeDays=31;
const dailyAverage=monthlyTotal/activeDays;

// ─── Rates & Revenue ───
const RATES={'Bombax':14.38,'Carrier Refrigeration':11.26,'Carrier CTD':13.43,'Cosmos Pumps Pvt Ltd':13.16,'Edusoft Healthcare Ltd':13.77,'Frick India':33.52,'Haier CCR':16.53,'Kumar Services':10.20,'Loom Solar Pvt Ltd':20.75,'Medical Science':11.64,'Mitras Technocrafts Pvt Ltd':11.11,'Oneiric Appliances Pvt Ltd':13.13,'SCJ COLOURS NEW':8,'Sukuga Technologies Pvt Ltd':14.79,'Vaidrishi Laboratories Pvt Ltd':12.73};
const DR=10;
const rate=n=>RATES[n]||DR;

// ★ FIXED TARGET: ₹74,00,000 (74 Lakhs)
const FIXED_TARGET=7400000;
const totalSalesMoney=clients.reduce((s,c)=>s+(c.achieved||0)*rate(c.name),0);
const achievementPct=Math.round(totalSalesMoney/FIXED_TARGET*100);

// ─── Populate KPIs ───
$('kpi-open').textContent=openTotal;
$('kpi-edd').textContent=eddTotal;
$('kpi-edd-pct').textContent=Math.round(eddTotal/openTotal*100)+'% of open';
$('kpi-due').textContent=dueTotal;
$('kpi-booked').textContent=bookedTotal;
$('kpi-daily-ton').innerHTML=dailyTotal.toLocaleString('en-IN',{maximumFractionDigits:2})+' <span style="font-size:.82rem;font-weight:700">kg</span>';
$('kpi-month-ton').innerHTML=monthlyTotal.toLocaleString('en-IN',{maximumFractionDigits:2})+' <span style="font-size:.82rem;font-weight:700">kg</span>';
$('kpi-daily-avg').innerHTML=dailyAverage.toLocaleString('en-IN',{maximumFractionDigits:0})+' <span style="font-size:.82rem;font-weight:700">kg/day</span>';
$('kpi-target-money').textContent=fR(FIXED_TARGET);
$('kpi-sales-money').textContent=fR(totalSalesMoney);

// Strip & donut legend
['strip-edd','dl-edd'].forEach(id=>{const e=$(id);if(e)e.textContent=eddTotal});
['strip-transit','dl-transit'].forEach(id=>{const e=$(id);if(e)e.textContent=openTotal-eddTotal});
['strip-due','dl-due'].forEach(id=>{const e=$(id);if(e)e.textContent=dueTotal});
['strip-booked','dl-booked'].forEach(id=>{const e=$(id);if(e)e.textContent=bookedTotal});
const eb=$('tab-edd-badge');if(eb)eb.textContent=eddTotal;

// ─── Open Table ───
const otb=$('open-table-body');
if(otb)openData.forEach((d,i)=>{
  const ec=(eddData.find(e=>e.name===d.name)||{}).count||0;
  const dc=(dueData.find(e=>e.name===d.name)||{}).count||0;
  const pct=Math.round(ec/d.count*100);
  const risk=pct>=70?['Critical','delayed']:pct>=40?['High','delayed']:pct>=20?['Medium','open']:['Low','due'];
  otb.innerHTML+=`<tr><td style="color:#94a3b8;font-size:.78rem">${i+1}</td><td><strong>${d.name}</strong></td><td>${d.count}</td><td style="color:#dc2626;font-weight:700">${ec}</td><td style="color:#d97706;font-weight:600">${dc}</td><td style="color:${pct>=50?'#dc2626':'#d97706'};font-weight:700">${pct}%</td><td><span class="badge ${risk[1]}">${risk[0]}</span></td></tr>`;
});

// ─── EDD KPIs & Detail ───
function renderEddKpis(list){
  if(!list||!list.length)return;
  const total=list.length;$('edd-total-count').textContent=total;
  // Top customer
  const cc={};list.forEach(item=>{cc[item.name]=(cc[item.name]||0)+1});
  const sc=Object.entries(cc).sort((a,b)=>b[1]-a[1]);
  if(sc[0]){$('edd-top-customer').textContent=sc[0][0];$('edd-top-customer-pct').textContent=sc[0][1]+' delayed ('+Math.round(sc[0][1]/total*100)+'%)'}
  // Top transporter
  const tc={};list.forEach(item=>{const t=item.transporter||'Unassigned';tc[t]=(tc[t]||0)+1});
  const st=Object.entries(tc).sort((a,b)=>b[1]-a[1]);
  if(st[0]){$('edd-worst-carrier').textContent=st[0][0];$('edd-worst-carrier-count').textContent=st[0][1]+' delayed'}
  // Bars — top customers
  const bars=$('edd-reason-bars');
  if(bars)bars.innerHTML=sc.slice(0,4).map(([r,c])=>{const p=Math.round(c/total*100);return`<div class="reason-bar-item"><div class="reason-bar-header"><span class="reason-label" title="${r}">${r}</span><span class="reason-val">${p}% (${c})</span></div><div class="reason-progress-bg"><div class="reason-progress-fill" style="width:${p}%"></div></div></div>`}).join('');
}

function renderEddDetail(filter){
  const tbody=$('edd-detail-body'),cnt=$('edd-detail-count');if(!tbody)return;
  const q=(filter||'').trim().toLowerCase();
  const rows=q?eddDetail.filter(r=>r.name.toLowerCase().includes(q)||r.id.toLowerCase().includes(q)||(r.transporter||'').toLowerCase().includes(q)):eddDetail;
  if(cnt)cnt.textContent=rows.length+' of '+eddDetail.length+' orders';
  if(!rows.length){tbody.innerHTML='<tr><td colspan="5" style="text-align:center;color:#94a3b8;padding:24px">No matching orders.</td></tr>';return}
  tbody.innerHTML=rows.map(r=>`<tr><td style="font-weight:700;font-size:.78rem;color:#004df5">${r.id}</td><td><strong>${r.name}</strong></td><td>${r.transporter||'—'}</td><td style="color:#dc2626;font-weight:700">${r.edd||'—'}</td></tr>`).join('');
  renderEddKpis(rows);
}
window.renderEddDetail=renderEddDetail;

function goToEddDetail(){const btn=$('tab-btn-edd');if(btn)switchTab('edd',btn);$('tab-edd')?.scrollIntoView({behavior:'smooth'})}
window.goToEddDetail=goToEddDetail;

// ─── Charts ───
const CF={size:11,weight:'500'};

new Chart($('statusDonut'),{type:'doughnut',data:{labels:['EDD Crossed','In Transit','Due Tomorrow','Booked Yesterday'],datasets:[{data:[eddTotal,openTotal-eddTotal,dueTotal,bookedTotal],backgroundColor:['#ef4444','#3b82f6','#f59e0b','#10b981'],borderWidth:3,borderColor:'#fff',hoverOffset:10}]},options:{responsive:true,maintainAspectRatio:false,cutout:'72%',animation:{animateRotate:true,animateScale:true,duration:1200,easing:'easeOutQuart'},plugins:{legend:{display:false}}}});

new Chart($('eddBarChart'),{type:'bar',data:{labels:eddData.map(d=>d.name),datasets:[{label:'EDD Crossed',data:eddData.map(d=>d.count),backgroundColor:'rgba(239,68,68,.12)',borderColor:'#ef4444',borderWidth:1.5,borderRadius:6}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,animation:{duration:1000},plugins:{legend:{display:false}},scales:{x:{beginAtZero:true,ticks:{font:CF}},y:{ticks:{font:CF},grid:{display:false}}}}});

new Chart($('dueTmrChart'),{type:'bar',data:{labels:dueData.map(d=>d.name),datasets:[{label:'Due',data:dueData.map(d=>d.count),backgroundColor:'rgba(245,158,11,.12)',borderColor:'#f59e0b',borderWidth:1.5,borderRadius:6}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:1000},plugins:{legend:{display:false}},scales:{x:{ticks:{autoSkip:false,maxRotation:30,font:CF},grid:{display:false}},y:{beginAtZero:true}}}});

new Chart($('bookedChart'),{type:'bar',data:{labels:bookedData.map(d=>d.name),datasets:[{label:'Booked',data:bookedData.map(d=>d.count),backgroundColor:'rgba(16,185,129,.12)',borderColor:'#10b981',borderWidth:1.5,borderRadius:6}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:1000},plugins:{legend:{display:false}},scales:{x:{ticks:{autoSkip:false,maxRotation:30,font:CF},grid:{display:false}},y:{beginAtZero:true}}}});

// ─── Tonnage ───
function bucketColor(pct){if(pct===null||pct===undefined)return'#94a3b8';if(pct>=100)return'#004df5';if(pct>=90)return'#059669';if(pct>=80)return'#10b981';if(pct>=70)return'#34d399';if(pct>=60)return'#84cc16';if(pct>=50)return'#a3e635';if(pct>=40)return'#eab308';if(pct>=30)return'#f59e0b';if(pct>=20)return'#fb923c';if(pct>=10)return'#f87171';return'#ef4444'}

const PL={full:'Tonnage — % Completion (Full Month)',first10:'First 10 Days',mid10:'Mid 10 Days',last10:'Last 10 Days'};
const PS={full:'Full Month',first10:'First 10 Days',mid10:'Mid 10 Days',last10:'Last 10 Days'};
let curPeriod='full';

function getPStats(c,p){if(p==='full')return{achieved:c.achieved,target:c.target};const d=c.periods&&c.periods[p];return{achieved:d?d.achieved:null,target:d?d.target:null}}

function setTonnagePeriod(p){curPeriod=p;renderTonnageBars();renderTonnageCharts();renderKamSummary()}
window.setTonnagePeriod=setTonnagePeriod;

function renderTonnageBars(){
  const el=$('tonnage-bars');if(!el)return;
  const ti=$('tonnage-panel-title');if(ti)ti.textContent=PL[curPeriod];
  const wd=clients.map(c=>{const{achieved,target}=getPStats(c,curPeriod);return{c,achieved,target}}).filter(r=>(r.achieved!==null&&r.achieved>0)||(r.target!==null&&r.target>0));
  wd.sort((a,b)=>(b.achieved||b.target||0)-(a.achieved||a.target||0));
  if(!wd.length){el.innerHTML='<div class="tonnage-empty">No data for this period.</div>';return}
  el.innerHTML=wd.map(({c,achieved,target})=>{
    const ht=target!==null&&target>0,ha=achieved!==null&&achieved>0;
    const pct=(ht&&ha)?Math.round(achieved/target*100):null;
    const dp=pct!==null?Math.min(pct,100):(ht&&!ha?100:null);
    const bw=dp!==null?dp+'%':'100%';
    const bc=(ht&&!ha)?'#cbd5e1':bucketColor(pct);
    const pl=pct!==null?pct+'%':'—';
    const nt=c.isNew?'<span class="new-tag">New</span>':'';
    let ta;
    if(ht&&ha)ta=fK(achieved)+' / '+fK(target)+' <span style="color:#94a3b8">kg</span>';
    else if(ht&&!ha)ta='— / '+fK(target)+' <span style="color:#94a3b8">kg</span>';
    else ta=fK(achieved)+' <span style="color:#94a3b8">kg</span>';
    const r=rate(c.name);
    const vl=ha?`<div class="value-badge"><span class="value-amount">${fR(achieved*r)}</span><span class="value-rate">@₹${r}/kg</span></div>`:'';
    return`<div class="client-row"><div class="client-name" title="${c.name}"><span class="client-name-text">${c.name}</span>${nt}</div><div class="client-person">${c.person}</div><div class="prog-bar-wrap"><div class="prog-bar" style="width:${bw};background:${bc}"></div></div><div class="pct-text" style="color:${bc}">${pl}</div><div class="client-tonnage"><div>${ta}</div>${vl}</div></div>`;
  }).join('');
}

const tl=$('tonnage-legend');
if(tl)tl.innerHTML=[['0–40%','#f59e0b'],['40–70%','#a3e635'],['70–100%','#10b981'],['100%+','#004df5']].map(([l,c])=>`<span><span class="legend-dot" style="background:${c}"></span>${l}</span>`).join('')+'<span><span class="new-tag" style="margin-left:0">New</span> recently onboarded</span>';

let tci=null,aci=null;
function renderTonnageCharts(){
  const top=clients.map(c=>{const{achieved,target}=getPStats(c,curPeriod);return{name:c.name,achieved:achieved||0,target:target||0}}).filter(r=>r.achieved>0||r.target>0).sort((a,b)=>(b.achieved||b.target)-(a.achieved||a.target)).slice(0,8);
  if(tci)tci.destroy();
  tci=new Chart($('targetChart'),{type:'bar',data:{labels:top.map(r=>r.name),datasets:[{label:'Target',data:top.map(r=>r.target),backgroundColor:'rgba(0,77,245,.1)',borderColor:'#004df5',borderWidth:1.5,borderRadius:6},{label:'Achieved',data:top.map(r=>r.achieved),backgroundColor:'rgba(16,185,129,.2)',borderColor:'#10b981',borderWidth:1.5,borderRadius:6}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,animation:{duration:1000},plugins:{legend:{position:'bottom',labels:{boxWidth:12,padding:14,font:CF}},title:{display:true,text:'Target vs Achieved — '+PS[curPeriod],font:{size:11},color:'#94a3b8'}},scales:{x:{beginAtZero:true,ticks:{callback:v=>(v/1000).toFixed(0)+'k',font:CF}},y:{ticks:{font:CF},grid:{display:false}}}}});

  // Top by % completion
  const topPct=clients.map(c=>{const{achieved,target}=getPStats(c,curPeriod);return{name:c.name,achieved:achieved||0,target:target||0}}).filter(r=>r.target>0&&r.achieved>0);
  topPct.forEach(r=>{r.pct=r.achieved/r.target*100});
  topPct.sort((a,b)=>b.pct-a.pct);
  const t8=topPct.slice(0,8);
  if(aci)aci.destroy();
  if(t8.length){
    aci=new Chart($('achChart'),{type:'bar',data:{labels:t8.map(r=>r.name),datasets:[{label:'Target',data:t8.map(r=>r.target),backgroundColor:'rgba(0,77,245,.1)',borderColor:'#004df5',borderWidth:1.5,borderRadius:6},{label:'Achieved',data:t8.map(r=>r.achieved),backgroundColor:'rgba(16,185,129,.2)',borderColor:'#10b981',borderWidth:1.5,borderRadius:6}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,animation:{duration:1000},plugins:{legend:{position:'bottom',labels:{boxWidth:12,padding:14,font:CF}},title:{display:true,text:'Top 8 by % completion — '+PS[curPeriod],font:{size:11},color:'#94a3b8'},tooltip:{callbacks:{afterBody:ctx=>{const r=t8[ctx[0].dataIndex];return r?Math.round(r.pct)+'% of target':''}}}},scales:{x:{beginAtZero:true,ticks:{callback:v=>(v/1000).toFixed(0)+'k',font:CF}},y:{ticks:{font:CF},grid:{display:false}}}}});
  }
}

// ─── Daily Table ───
const dtb=$('daily-table-body');
if(dtb)clients.filter(c=>c.achieved>0).forEach(c=>{
  const pct=c.target>0?Math.round(c.achieved/c.target*100)+'%':'—';
  const pc=c.target>0?(c.achieved>=c.target?'#10b981':'#004df5'):'#94a3b8';
  const rem=c.target>0?Math.max(c.target-c.achieved,0).toLocaleString('en-IN'):'—';
  const df=c.target>0&&c.avgDay>0&&c.remaining>0?+(c.remaining/c.avgDay).toFixed(1)+' days':(c.target>0&&c.remaining===0?'✓ Done':'—');
  const dfc=c.remaining===0?'#10b981':'#ef4444';
  dtb.innerHTML+=`<tr><td style="font-weight:600">${c.name}</td><td style="font-size:.78rem;color:#64748b">${c.person}</td><td>${c.target>0?c.target.toLocaleString('en-IN'):'—'}</td><td>${c.achieved.toLocaleString('en-IN')}</td><td style="color:${pc};font-weight:700">${pct}</td><td>${c.activeDays}</td><td>${c.avgDay.toLocaleString('en-IN')}</td><td style="color:#f59e0b">${rem}</td><td style="color:${dfc};font-weight:700">${df}</td></tr>`;
});

// Avg/Day chart
const topAvg=clients.filter(c=>c.avgDay>0).sort((a,b)=>b.avgDay-a.avgDay).slice(0,10);
new Chart($('avgDayChart'),{type:'bar',data:{labels:topAvg.map(c=>c.name),datasets:[{label:'Avg kg/day',data:topAvg.map(c=>c.avgDay),backgroundColor:'rgba(99,102,241,.12)',borderColor:'#6366f1',borderWidth:1.5,borderRadius:6}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,animation:{duration:1000},plugins:{legend:{display:false}},scales:{x:{beginAtZero:true,ticks:{callback:v=>v.toLocaleString('en-IN'),font:CF}},y:{ticks:{font:CF},grid:{display:false}}}}});

// Days chart
const dc=$('daysChart');
if(dc){const dd=clients.filter(c=>c.target>0&&c.avgDay>0&&c.remaining>0).sort((a,b)=>b.daysNeeded-a.daysNeeded).slice(0,10);
if(dd.length)new Chart(dc,{type:'bar',data:{labels:dd.map(c=>c.name),datasets:[{label:'Days',data:dd.map(c=>c.daysNeeded),backgroundColor:dd.map(c=>c.daysNeeded>10?'rgba(239,68,68,.18)':c.daysNeeded>4?'rgba(245,158,11,.18)':'rgba(16,185,129,.18)'),borderColor:dd.map(c=>c.daysNeeded>10?'#ef4444':c.daysNeeded>4?'#f59e0b':'#10b981'),borderWidth:1.5,borderRadius:6}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,animation:{duration:1000},plugins:{legend:{display:false},title:{display:true,text:'Days to finish at current pace',font:{size:11},color:'#94a3b8'}},scales:{x:{beginAtZero:true,ticks:{font:CF}},y:{ticks:{font:CF},grid:{display:false}}}}})}

// ─── KAM Summary ───
function renderKamSummary(){
  const body=$('kam-summary-body');if(!body)return;
  const km={};clients.forEach(c=>{const{achieved,target}=getPStats(c,curPeriod);if(!achieved&&!target)return;if(!km[c.person])km[c.person]={person:c.person,tt:0,ta:0};km[c.person].tt+=(target||0);km[c.person].ta+=(achieved||0)});
  const kl=Object.values(km).sort((a,b)=>b.ta-a.ta);
  if(!kl.length){body.innerHTML='<tr><td colspan="4" style="text-align:center;color:#94a3b8;padding:20px">No data.</td></tr>';return}
  body.innerHTML=kl.map(k=>{const p=k.tt>0?Math.round(k.ta/k.tt*100):null;const pc=p===null?'#94a3b8':bucketColor(p);return`<tr><td style="font-weight:700">${k.person}</td><td>${k.tt>0?fK(k.tt):'—'}</td><td>${fK(k.ta)}</td><td style="color:${pc};font-weight:700">${p!==null?p+'%':'—'}</td></tr>`}).join('');
}

// ─── Revenue Forecast (Fixed Target: ₹74L) ───
function renderForecast(){
  $('forecast-target-money').textContent=fR(FIXED_TARGET);
  $('forecast-sales-money').textContent=fR(totalSalesMoney);
  $('forecast-pct-money').textContent=achievementPct+'%';

  const badge=$('forecast-badge'),vt=$('forecast-verdict-text');
  if(achievementPct>=100){
    badge.textContent='TARGET MET';badge.className='fbadge good';
    vt.textContent=`July achieved ${achievementPct}% of ₹74L target — surplus of ${fR(totalSalesMoney-FIXED_TARGET)}.`;
  }else if(achievementPct>=90){
    badge.textContent='NEAR TARGET';badge.className='fbadge warn';
    vt.textContent=`July reached ${achievementPct}% — shortfall of ${fR(FIXED_TARGET-totalSalesMoney)}.`;
  }else{
    badge.textContent='BELOW TARGET';badge.className='fbadge bad';
    vt.textContent=`July reached ${achievementPct}% — shortfall of ${fR(FIXED_TARGET-totalSalesMoney)}.`;
  }

  const max=Math.max(FIXED_TARGET,totalSalesMoney,1);
  $('forecast-bar-fill').style.width=Math.min(totalSalesMoney/max*100,100)+'%';
  $('forecast-bar-target-marker').style.left=Math.min(FIXED_TARGET/max*100,100)+'%';
  $('forecast-bar-target-label').textContent='Target: '+fR(FIXED_TARGET);
  $('forecast-explain').innerHTML='<strong>Method:</strong> Total Sales = Σ(client achieved kg × per-kg rate). Target is fixed at ₹74,00,000. Uses ₹'+DR+'/kg for unlisted clients.';
}

// ─── Init ───
renderEddDetail('');
renderTonnageBars();
renderTonnageCharts();
renderKamSummary();
renderForecast();
animateCounters();