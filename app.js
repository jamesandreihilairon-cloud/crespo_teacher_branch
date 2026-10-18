const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const terms=["Term 1","Term 2"];
const students=[
{id:1,name:"Alyssa Mendoza",lrn:"124500110001",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[94,91]},
{id:2,name:"Joshua Reyes",lrn:"124500110002",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[87,84]},
{id:3,name:"Mikaela Santos",lrn:"124500110003",grade:11,strand:"ICT",section:"Programming 1",classification:"Irregular",enrollment:"Active",guardian:false,grades:[78,79]},
{id:4,name:"Ethan Dela Cruz",lrn:"124500110004",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[72,75]},
{id:5,name:"Sofia Garcia",lrn:"124500110005",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[82,85]},
{id:6,name:"Nathan Flores",lrn:"124500110006",grade:11,strand:"ICT",section:"Programming 1",classification:"Irregular",enrollment:"Active",guardian:true,grades:[null,76]},
{id:7,name:"Isabella Ramos",lrn:"124500110007",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[91,90]},
{id:8,name:"Gabriel Castillo",lrn:"124500110008",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:false,grades:[76,78]},
{id:9,name:"Chloe Villanueva",lrn:"124500110009",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[85,83]},
{id:10,name:"Daniel Bautista",lrn:"124500110010",grade:11,strand:"ICT",section:"Programming 1",classification:"Irregular",enrollment:"Active",guardian:true,grades:[69,74]},
{id:11,name:"Amara Lim",lrn:"124500110011",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[88,89]},
{id:12,name:"Miguel Torres",lrn:"124500110012",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[81,null]},
{id:13,name:"Leah Navarro",lrn:"124500110013",grade:11,strand:"ICT",section:"Programming 1",classification:"Irregular",enrollment:"Active",guardian:true,grades:[75,77]},
{id:14,name:"Adrian Cruz",lrn:"124500110014",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[96,94]},
{id:15,name:"Bianca Mercado",lrn:"124500110015",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[83,82]},
{id:16,name:"Kyle Fernandez",lrn:"124500110016",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[null,null]},
{id:17,name:"Zoe Aquino",lrn:"124500110017",grade:11,strand:"ICT",section:"Programming 1",classification:"Irregular",enrollment:"Active",guardian:false,grades:[73,76]},
{id:18,name:"Marco Dominguez",lrn:"124500110018",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[89,88]},
{id:19,name:"Trisha Valdez",lrn:"124500110019",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Transferred Out",grades:[80,82]},
{id:20,name:"Paolo Herrera",lrn:"124500110020",grade:11,strand:"ICT",section:"Programming 1",classification:"Irregular",enrollment:"Active",guardian:true,grades:[77,79]},
{id:21,name:"Rina Soriano",lrn:"124500110021",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[92,90]},
{id:22,name:"Jared Pascual",lrn:"124500110022",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[74,72]},
{id:23,name:"Celine Ong",lrn:"124500110023",grade:11,strand:"ICT",section:"Programming 1",classification:"Regular",enrollment:"Active",guardian:true,grades:[86,87]},
{id:24,name:"Luis Manalo",lrn:"124500110024",grade:11,strand:"ICT",section:"Programming 1",classification:"Irregular",enrollment:"Graduated",grades:[84,83]}
];
// Class memberships use the existing 24 student records; no student records are discarded.
const classGroups={advisory:[1,2,3,4,5,6,7,8],mil:[9,10,11,12,13,14],pr:[15,16,17,18,19],philosophy:[20,21,22,23,24]};
const classes=[
{id:"advisory",subject:"Grade 12 – TVL – Programming 1",grade:12,strand:"TVL",specialization:"Programming",section:"Programming 1",students:classGroups.advisory,advisory:true,subjectName:"Programming"},
{id:"mil",subject:"Grade 12 – STEM 4 – MIL",grade:12,strand:"STEM",section:"STEM 4",students:classGroups.mil,advisory:false,subjectName:"Media and Information Literacy"},
{id:"pr",subject:"Grade 12 – ABM 2 – PR",grade:12,strand:"ABM",section:"ABM 2",students:classGroups.pr,advisory:false,subjectName:"Practical Research"},
{id:"philosophy",subject:"Grade 11 – HUMSS 3 – Philosophy",grade:11,strand:"HUMSS",section:"HUMSS 3",students:classGroups.philosophy,advisory:false,subjectName:"Introduction to Philosophy"}
];
// Keep each student's existing name, LRN, grade history, classification, enrollment and guardian flag,
// while aligning their class metadata with the four classes shown in this demo.
students.forEach(s=>{
 const c=classes.find(cls=>cls.students.includes(s.id));
 if(c){s.grade=c.grade;s.strand=c.strand;s.section=c.section;s.specialization=c.specialization||"";}
});
// DEMO: Grade 12 - ABM 2 - PR starts with NO Practical Research grades in Term 1 (students keep their names, LRNs, classification, etc.),
// so the teacher can enter, save and submit them live. Only Term 1 of this class is cleared; other terms and subjects are untouched.
classGroups.pr.forEach(id=>{const st=students.find(x=>x.id===id);if(st)st.grades[0]=null});
// Teacher account record (sample environment). Role is NOT stored as a label: it is derived from the assignment types in `classes`.
// `position` may be set explicitly (e.g. "Advisory Teacher" or "Subject Teacher") by a future backend; when absent it is derived.
const teacher={id:null,name:"Teacher Account",email:null,contact:null,department:null,position:null,status:"Active",photo:null};
function teacherRoles(){
 const hasAdv=classes.some(c=>c.advisory),hasSub=classes.some(c=>!c.advisory);
 if(teacher.position){const p=String(teacher.position).toLowerCase(),r=[];if(p.includes("advis")||p.includes("adviser"))r.push("Advisory Teacher");if(p.includes("subject"))r.push("Subject Teacher");if(r.length)return r}
 const r=[];if(hasAdv)r.push("Advisory Teacher");if(hasSub)r.push("Subject Teacher");return r;
}
const teacherRoleLabel=()=>teacherRoles().join(" · ")||"Teacher";
const advisorySubjects=["Oral Communication","General Mathematics","Media and Information Literacy","Programming"];
const gradeBook={};
function studentStatus(s){if(s.enrollment==="Graduated")return "Graduated";if(s.enrollment==="Transferred Out"||s.enrollment==="Deactivated")return "Deactivated";return s.status||"Active";}
const baseGrade=(s,idx)=>s.grades[idx]??null;
// Sample grade a subject teacher would submit (pending submission data). It is NOT an approved grade.
function derivedGrade(s,subject,idx){const base=baseGrade(s,idx);if(base===null)return null;if(subject==="Programming")return base;const offsets={"Oral Communication":-2,"General Mathematics":-4,"Media and Information Literacy":-1,"Programming":0};return Math.max(0,Math.min(100,base+(offsets[subject]||0)));}
// DEMO: for the advisory class, the four advisory subjects in the demo term (Term 1) have NO approved grade until the advisory
// teacher confirms a submission. Approved grades live only in `gradeBook`. Other terms keep their existing sample grades.
const DEMO_TERM=0,DEMO_SUBJECTS=["Oral Communication","General Mathematics","Media and Information Literacy","Programming"],ADVISORY_IDS=[1,2,3,4,5,6,7,8];
function subjectGrade(s,subject,idx){const key=`${s.id}|${subject}|${idx}`;if(Object.prototype.hasOwnProperty.call(gradeBook,key))return gradeBook[key];
 if(idx===DEMO_TERM&&ADVISORY_IDS.includes(s.id)&&DEMO_SUBJECTS.includes(subject))return null;
 return derivedGrade(s,subject,idx)}
let tableLayout="horizontal",statusFilter="All Statuses";

const submissions=[
{id:3,subject:"Introduction to Philosophy",teacher:"Ms. Nina Ramos",section:"Grade 11 · HUMSS 3",term:0,date:"Oct 10, 2026",status:"Confirmed",classId:"philosophy",gradeIndex:0},
// Fictional placeholders: the four subject teachers' submissions for the ADVISORY class (students 1-8, Term 1). They stay pending until
// the advisory teacher confirms them. Subject teacher names (except Mr. Renato Villanueva / Ms. Carla Bautista / Mr. Paulo Cruz, taken from
// existing data) are placeholders. Each subject has its own submission id and its own pending grades.
{id:6,subject:"General Mathematics",teacher:"Mr. Renato Villanueva",section:"Grade 12 · TVL · Programming 1",term:0,date:"Oct 14, 2026",status:"Sent to Adviser",classId:"advisory",gradeIndex:0},
{id:7,subject:"Oral Communication",teacher:"Ms. Elena Navarro",section:"Grade 12 · TVL · Programming 1",term:0,date:"Oct 15, 2026",status:"Sent to Adviser",classId:"advisory",gradeIndex:0},
{id:8,subject:"Media and Information Literacy",teacher:"Ms. Carla Bautista",section:"Grade 12 · TVL · Programming 1",term:0,date:"Oct 13, 2026",status:"Sent to Adviser",classId:"advisory",gradeIndex:0},
{id:9,subject:"Programming",teacher:"Mr. Paulo Cruz",section:"Grade 12 · TVL · Programming 1",term:0,date:"Oct 16, 2026",status:"Sent to Adviser",classId:"advisory",gradeIndex:0}
];
// Teachers attached to each class. The subject teacher names come from the existing submission records.
// The ADVISER names of the three subject classes were not in the project data: they are fictional placeholders for this demo.
const classPeople={advisory:{teacher:"Mr. Paulo Cruz",adviser:"Teacher Account"},mil:{teacher:"Ms. Carla Bautista",adviser:"Ms. Rowena Santiago"},pr:{teacher:"Mr. Adrian Lim",adviser:"Mr. Daniel Aquino"},philosophy:{teacher:"Ms. Nina Ramos",adviser:"Ms. Lorna Dizon"}};
// Snapshot of the grades a submission carries: [{studentId, grade}] for the submission's class, subject and grading period.
// Grades only reach the class record when the advisory teacher confirms (applyConfirmedGrades).
const snapshotEntries=(classId,subject,idx)=>{const c=classes.find(x=>x.id===classId);return c.students.map(id=>{const st=students.find(x=>x.id===id);const c0=classes.find(x=>x.id===classId);return{studentId:id,grade:(c0.advisory?derivedGrade(st,subject,idx):subjectGrade(st,subject,idx))}})};
classes.forEach(c=>{c.subjectTeacher=classPeople[c.id].teacher;c.adviser=classPeople[c.id].adviser});
// Status wording. The subject teacher's list uses the exact descriptions requested for that view;
// everywhere else (advisory table tooltips, popups) "Returned for Correction" uses the advisory-side wording.
const STATUS_TEXT={"Sent to Adviser":"Grades have been submitted and are waiting for the advisory teacher to review them.","Confirmed":"The advisory teacher has checked and accepted the grades.","Returned for Correction":"The advisory teacher found errors or missing entries and sent the submission back."};
const STATUS_TEXT_ADVISORY={...STATUS_TEXT,"Returned for Correction":"The advisory teacher found missing or incorrect information and sent the submission back to the subject teacher for revision."};
// Advisory Review shows "Pending Review" for the stored status "Sent to Adviser". Stored data and Subject Review are unchanged.
const PENDING_TIP="The subject teacher has submitted the grades, but the advisory teacher has not started reviewing them.";
const statusLabel=(st,role)=>role==="advisory"&&st==="Sent to Adviser"?"Pending Review":st;
const statusTip=(st,role)=>role==="advisory"&&st==="Sent to Adviser"?PENDING_TIP:((role==="advisory"?STATUS_TEXT_ADVISORY:STATUS_TEXT)[st]||"");
const todayStr=()=>new Date().toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"});
// Review history keeps every return / resubmission of a submission (same record, same id).
const historyHtml=sub=>sub.history&&sub.history.length?`<div class="field-label">Review history</div><ul class="review-history">${sub.history.map(h=>`<li><b>${esc(h.type)}</b> · ${esc(h.date)}${h.note?` — ${esc(h.note)}`:""}</li>`).join("")}</ul>`:"";
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let reviewRole="advisory"; // "advisory" = Advisory Teacher Review, "subject" = Subject Teacher Review
let selectedClass="advisory",currentAlert="lowest",alertMode=false,search="",sentNotifications=new Set(),filters={enrollment:[],classification:[]};
const termIndex=()=>terms.indexOf($("#termSelect").value);
const getClass=()=>classes.find(c=>c.id===selectedClass)||classes[0];
const classStudents=()=>getClass().students.map(id=>students.find(s=>s.id===id)).filter(Boolean);
// Students of the advisory class: their term grade is the average of their recorded subject grades (rounded), so confirmed
// submissions flow into performance, alerts and progress. Other students keep their single recorded grade.
const gradeOf=(s,idx=termIndex())=>{if(classGroups.advisory.includes(s.id)){const a=termAverage(advisorySubjects.map(sub=>subjectGrade(s,sub,idx)));return a.value===null?null:Math.round(a.value)}return baseGrade(s,idx)};
const validGrades=(list,idx=termIndex())=>list.map(s=>({s,g:gradeOf(s,idx)})).filter(x=>Number.isFinite(x.g)&&x.g>=0&&x.g<=100);
const average=a=>a.length?a.reduce((sum,x)=>sum+x.g,0)/a.length:null;
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),3200)}
function statusClass(s){return "status-"+s.replaceAll(" ","")}
function renderProgress(){const idx=termIndex(),all=[...new Map(classes.flatMap(c=>c.students).map(id=>[id,students.find(s=>s.id===id)])).values()].filter(Boolean);let submitted=0,progress=0,notStarted=0;all.forEach(s=>{const g=gradeOf(s,idx);if(g===null){notStarted++}else if(s.id%4===0||s.id%5===0){progress++}else{submitted++}});const total=submitted+progress+notStarted||1,p1=submitted/total*100,p2=progress/total*100;$('#donut').style.background=`conic-gradient(var(--navy) 0 ${p1}%,var(--orange) ${p1}% ${p1+p2}%,var(--gray) ${p1+p2}% 100%)`;$('#progressPct').textContent=Math.round(p1)+'%';$('#progressTerm').textContent=terms[idx];syncTermButtons();const rows=[['Submitted',submitted,'var(--navy)'],['In Progress',progress,'var(--orange)'],['Not Started',notStarted,'var(--gray)']];$('#progressLegend').innerHTML=rows.map(([n,v,c])=>`<div class="legend-row"><span class="legend-dot" style="background:${c}"></span><span>${n}</span><strong>${v} <span style="font-weight:400;color:var(--muted)">(${Math.round(v/total*100)}%)</span></strong></div>`).join('');$('#totalRecords').textContent=`${all.length} student records`;$('#reviewedRecords').textContent=`${submitted} confirmed`}
function renderClasses(){const idx=termIndex();$("#classCards").innerHTML=classes.map(c=>{const list=c.students.map(id=>students.find(s=>s.id===id)).filter(Boolean),done=list.filter(s=>gradeOf(s,idx)!==null).length,pct=list.length?Math.round(done/list.length*100):0;return `<article class="class-card ${selectedClass===c.id?"selected":""}"><p class="subject">${c.subject}</p><div class="class-meta"><span class="class-category">${c.advisory?"Advisory Class":"Subject Class"}</span></div><div class="card-progress"><span><b>${done}/${list.length}</b> grades recorded</span><span class="pct">${pct}%</span></div><div class="mini-track"><span style="width:${pct}%"></span></div><button class="manage-btn ${selectedClass===c.id?"selected":""}" data-manage="${c.id}">${selectedClass===c.id?"Currently viewing":"Manage Grades"} →</button></article>`}).join("");$("#classCount").textContent=`${classes.length} assigned classes`}
function renderPerformance(){const list=classStudents(),vals=validGrades(list),nums=vals.map(x=>x.g),avg=average(vals);$("#performanceView").classList.toggle("hidden",alertMode);$("#alertView").classList.toggle("hidden",!alertMode);$$(".snapshot-tab").forEach(b=>b.classList.toggle("active",b.dataset.snapshot===(alertMode?"alert":"performance")));$("#performanceTitle").textContent=alertMode?"Performance Alert":"Class Performance";$("#highest").textContent?null:null;$("#highest").textContent=nums.length?Math.max(...nums):"—";$("#average").textContent=avg===null?"—":avg.toFixed(1);$("#lowest").textContent=nums.length?Math.min(...nums):"—";const ranges=[["90–100",90,100],["85–89",85,89],["80–84",80,84],["76–79",76,79],["75 and below",0,75]];const counts=ranges.map(([label,min,max])=>({label,count:nums.filter(n=>n>=min&&n<=max).length}));const maxCount=Math.max(1,...counts.map(x=>x.count));$("#distribution").innerHTML=counts.map(x=>`<div class="dist-row" title="${x.label}: ${x.count} student(s)"><span>${x.label}</span><div class="dist-track"><div class="dist-fill" style="width:${x.count/maxCount*100}%"></div></div><span class="dist-count">${x.count}</span></div>`).join("")||'<p class="muted">No recorded grades for this term.</p>';renderAlerts()}
// Notification permission = the student is enrolled in one of the teacher's ADVISORY classes (membership in classes[].students,
// the same enrollment data the grade table uses). Viewing alerts for subject classes is unaffected.
const NOTIFY_DENIED="Only students in your assigned advisory class can be notified through Performance Alert.";
// The advisory class is resolved from the teacher's assignment (classes[].advisory) and the enrollment roster (classes[].students) by student id,
// never from the class label shown on screen or from the class currently selected in the grade table.
const advisoryClassOf=s=>classes.find(c=>c.advisory&&c.students.includes(s.id))||null;
function notifyPermission(s){if(!s)return{ok:false,reason:"unknown"};if(!classes.some(c=>c.advisory))return{ok:false,reason:"no-advisory"};return advisoryClassOf(s)?{ok:true}:{ok:false,reason:"outside"}}
// One key per student + advisory class + term + alert category, independent of which class view triggered it, so a repeat can never re-send.
// Only call after notifyPermission(s).ok.
const notifyKey=s=>`${termIndex()}-${advisoryClassOf(s).id}-${currentAlert}-${s.id}`;
// Notify All is available only when at least one student in the current alert list is in the teacher's advisory class.
const canNotifyAll=()=>getClass().advisory&&classes.some(c=>c.advisory)||alertStudents().some(x=>notifyPermission(x.s).ok);
function notifyStudent(id){
 const s=students.find(x=>x.id===id);if(!s)return;
 if(!notifyPermission(s).ok){toast(NOTIFY_DENIED);return}
 if(!alertStudents().some(x=>x.s.id===id)){toast("This student is not in the current alert list.");return}
 const key=notifyKey(s);
 if(sentNotifications.has(key)){toast(`${s.name} was already notified for this alert.`);return}
 if(!s.guardian){toast(`${s.name} has no guardian contact on file, so no notification was sent.`);return}
 sentNotifications.add(key);renderAlerts();toast(`Simulated notification sent for ${s.name}. No real SMS or email is sent in this demo.`);
}
function alertStudents(){return validGrades(classStudents()).filter(x=>currentAlert==="lowest"?x.g<=75:x.g>=76&&x.g<=79).sort((a,b)=>a.g-b.g)}
function renderAlerts(){const lowest=validGrades(classStudents()).filter(x=>x.g<=75),risk=validGrades(classStudents()).filter(x=>x.g>=76&&x.g<=79);$("#lowestCount").textContent=lowest.length;$("#riskCount").textContent=risk.length;$("#alertDescription").textContent=currentAlert==="lowest"?"Students with recorded grades of 75 or below. Review these records for immediate academic support.":"At-risk students have recorded grades from 76 to 79, placing them close to the passing threshold of 75.";const rows=alertStudents();$("#alertList").innerHTML=rows.length?rows.map(({s,g})=>`<div class="alert-item${notifyPermission(s).ok?" has-notify":""}"><div><b>${esc(s.name)}</b><small class="alert-meta">LRN: ${esc(s.lrn)} | ${esc(s.classification)}</small><small>${s.guardian?"Guardian contact available":"Guardian contact missing"}</small></div><span class="grade-chip ${currentAlert==="risk"?"risk":""}">${g}</span>${notifyPermission(s).ok?(sentNotifications.has(notifyKey(s))?`<button type="button" class="notify-btn" disabled>Notified</button>`:`<button type="button" class="notify-btn" data-notify-student="${s.id}">Notify</button>`):""}</div>`).join(""):'<div class="empty-state muted" style="padding:18px 4px">No students match this category for the selected class and term.</div>';const canNotify=canNotifyAll();$("#notifyAll").disabled=!canNotify;$("#notifyAll").title=canNotify?"":NOTIFY_DENIED;$("#notifySummary").textContent=canNotify?"Demo mode · No real SMS or email will be sent.":"View only · "+NOTIFY_DENIED}
$("#alertList").addEventListener("click",e=>{const b=e.target.closest("[data-notify-student]");if(b)notifyStudent(Number(b.dataset.notifyStudent))});
// ---- Unsaved grade edits (Subject Classes) ----
// Each pending entry describes its own class / subject / term, so Save All can never touch unrelated records.
const pending=new Map(),invalid=new Set();let lastCounts={shown:0,total:0},lastTerm="Term 1";
const pendingList=()=>[...pending.values()];
function updatePendingUI(){const n=pending.size;$("#pendingBadge").textContent=n;$("#pendingBadge").classList.toggle("hidden",n===0);$("#saveAllBtn").classList.toggle("has-pending",n>0);$("#pendingNote").textContent=n?`${n} unsaved grade change${n===1?"":"s"}`:""}
function onGradeInput(input){
 const studentId=Number(input.dataset.student),subject=input.dataset.subject,idx=Number(input.dataset.term),key=`${studentId}|${subject}|${idx}`;
 const s=students.find(x=>x.id===studentId),saved=subjectGrade(s,subject,idx),raw=input.value.trim();
 invalid.delete(key);input.classList.remove("invalid");
 if(raw===String(saved??"")){pending.delete(key);input.classList.remove("dirty")}
 else{pending.set(key,{key,studentId,subject,idx,classId:selectedClass,raw});input.classList.add("dirty")}
 updatePendingUI();
}
const validGradeValue=raw=>{const v=Number(raw);return raw!==""&&Number.isFinite(v)&&Number.isInteger(v)&&v>=0&&v<=100?v:null};
function commitGrade(classId,studentId,subject,idx,value){
 const cls=classes.find(c=>c.id===classId),s=students.find(x=>x.id===studentId);
 if(!cls||!s||cls.advisory||!cls.students.includes(studentId)||subject!==cls.subjectName)return false;
 gradeBook[`${studentId}|${subject}|${idx}`]=value;
 s.grades[idx]=value; // keep the main grade record in sync for summaries and performance widgets
 return true;
}
// ---- Saving grades (Subject Classes) ----
// Saving only stores editable, UNSUBMITTED grades on the class record. It never creates or changes a submission:
// only "Submit to Adviser" does that. Both Save and Save All ask for confirmation first and commit all-or-nothing.
let saveBusy=false;
const SAVED_NOTE="They are saved but have not been submitted to the adviser yet. Choose Submit to Adviser when you are ready.";
function validateEntries(entries){const checked=entries.map(e=>({e,v:validGradeValue(String(e.raw).trim())}));return{checked,bad:checked.filter(x=>x.v===null)}}
const entryLabel=e=>{const st=students.find(x=>x.id===e.studentId);return`${st?st.name:"Unknown student"} (${e.subject})`};
function rejectInvalid(bad){
 invalid.clear();bad.forEach(x=>invalid.add(x.e.key));
 if(search&&bad.some(x=>{const st=students.find(y=>y.id===x.e.studentId);return st&&!matchesSearch(st,search)})){search="";$("#searchInput").value=""} // show the rows that need fixing
 renderTable();
 const first=document.querySelector(".grade-input.invalid");if(first)first.focus();
 const names=bad.slice(0,3).map(x=>entryLabel(x.e)).join(", ")+(bad.length>3?` and ${bad.length-3} more`:"");
 toast(`Nothing was saved: ${bad.length} entr${bad.length===1?"y is":"ies are"} empty or invalid — ${names}. Grades must be whole numbers from 0 to 100.`);
}
// Commits every entry or none. Returns the number saved, or -1 when nothing was saved.
function commitEntries(entries){
 const {checked,bad}=validateEntries(entries);
 if(bad.length){rejectInvalid(bad);return -1}
 const ineligible=checked.filter(x=>{const cls=classes.find(c=>c.id===x.e.classId),st=students.find(y=>y.id===x.e.studentId);return!cls||!st||cls.advisory||!cls.students.includes(x.e.studentId)||x.e.subject!==cls.subjectName});
 if(ineligible.length){toast("Some grades do not belong to the selected subject class, so nothing was saved. Please review and try again.");return -1}
 checked.forEach(x=>{commitGrade(x.e.classId,x.e.studentId,x.e.subject,x.e.idx,x.v);pending.delete(x.e.key);invalid.delete(x.e.key);notifyGradeSaved(x.e.studentId,x.e.subject,x.e.idx,x.v,x.e.classId)});
 renderProgress();renderClasses();renderPerformance();renderTable();renderSubmissions();
 return checked.length;
}
// Opens "Confirm Grade Changes" for the given pending entries. Cancel keeps every unsaved edit untouched.
function requestSave(entries){
 if(saveBusy||$("#modal").open)return;
 if(!entries.length){toast("There are no unsaved grade changes.");return}
 const {bad}=validateEntries(entries);
 if(bad.length){rejectInvalid(bad);return}
 const cls=classes.find(c=>c.id===entries[0].classId),term=terms[entries[0].idx],n=entries.length;
 $("#modalTitle").textContent="Confirm Grade Changes";
 $("#modalBody").innerHTML=`<p>Are you sure you want to save these grades? Please review the entries before continuing.</p><div class="modal-content-grid"><div class="detail-box"><small>Class</small><b>${cls.subject}</b></div><div class="detail-box"><small>Grading period</small><b>${term}</b></div><div class="detail-box"><small>Grade entries to save</small><b>${n}</b></div><div class="detail-box"><small>Adviser submission</small><b>Not submitted by saving</b></div></div><div class="table-scroll modal-table"><table><thead><tr><th>Student</th><th class="center">Current</th><th class="center">New grade</th></tr></thead><tbody>${entries.map(e=>{const st=students.find(x=>x.id===e.studentId),cur=subjectGrade(st,e.subject,e.idx);return`<tr><td>${esc(st.name)}</td><td class="center">${cur===null?"—":cur}</td><td class="center"><b>${esc(String(e.raw).trim())}</b></td></tr>`}).join("")}</tbody></table></div>`;
 $("#modalActions").innerHTML='<button class="outline close-action" id="saveCancel">Cancel</button><button class="primary" id="saveConfirm">Confirm Save</button>';
 $("#modal").showModal();wireClose();
 $("#saveConfirm").onclick=()=>{
  if(saveBusy)return;saveBusy=true;$("#saveConfirm").disabled=true;
  try{const saved=commitEntries(entries);$("#modal").close();if(saved>0)toast(`Saved ${saved} grade${saved===1?"":"s"} for ${cls.subject} · ${term}. ${SAVED_NOTE}`)}
  catch(err){console.error(err);$("#modal").close();toast("An error occurred while saving. Your edits are still on screen; please try again.")}
  finally{saveBusy=false}
 };
}
const requestSaveAll=()=>requestSave(pendingList());
// Used only by the unsaved-changes prompt ("Save all & continue"), which is itself an explicit confirmation.
function saveAll(){
 try{const entries=pendingList();if(!entries.length){toast("There are no unsaved grade changes.");return false}
  const n=commitEntries(entries);if(n<0)return false;
  const cls=classes.find(c=>c.id===entries[0].classId);toast(`Saved ${n} grade${n===1?"":"s"} for ${cls.subject} · ${terms[entries[0].idx]}. ${SAVED_NOTE}`);return true}
 catch(err){console.error(err);toast("An error occurred while saving. Your edits are still on screen; please try again.");return false}
}
// Asks before leaving a class / grading period that still has unsaved edits.
function guardUnsaved(proceed,cancel){
 if(!pending.size){proceed();return}
 const first=pendingList()[0],cls=classes.find(c=>c.id===first.classId),n=pending.size;let decided=false;
 $("#modalTitle").textContent="Unsaved grade changes";
 $("#modalBody").innerHTML=`<p>You have <b>${n} unsaved grade change${n===1?"":"s"}</b> in <b>${cls.subject}</b> · ${terms[first.idx]}. Leaving now would discard ${n===1?"it":"them"}.</p>`;
 $("#modalActions").innerHTML='<button class="outline" id="ugStay">Keep editing</button><button class="outline" id="ugDiscard">Discard changes</button><button class="primary" id="ugSave">Save all &amp; continue</button>';
 const finish=fn=>{decided=true;$("#modal").close();fn()};
 $("#ugStay").onclick=()=>finish(cancel);
 $("#ugDiscard").onclick=()=>finish(()=>{pending.clear();invalid.clear();proceed()});
 $("#ugSave").onclick=()=>finish(()=>{saveAll()?proceed():cancel()});
 $$(".close-modal").forEach(b=>b.onclick=()=>$("#modal").close());
 $("#modal").addEventListener("close",()=>{if(!decided)cancel()},{once:true});
 $("#modal").showModal();
}
// Column widths are defined once here and applied through a <colgroup>, so every subject-grade column is identical.
const COL_W={student:230,status:125,gap:24,subject:155,list:340,average:145,remark:115};
// The vertical layout is an Advisory Class feature only. It is decided by the class category, never by a class or subject name.
const effectiveLayout=()=>getClass().advisory?tableLayout:"horizontal";
// Term Average = mean of the recorded subject grades for the selected term. Missing grades are skipped, never counted as zero.
function termAverage(grades){const valid=grades.filter(g=>Number.isFinite(g)&&g>=0&&g<=100);return{value:valid.length?valid.reduce((a,b)=>a+b,0)/valid.length:null,count:valid.length,total:grades.length}}
const lowCls=g=>Number.isFinite(g)&&g<75?" grade-low":"";
// Subject-name tooltip (horizontal layout only). One floating element on <body>, so the scroll container never clips it.
let subjectTipEl=null;
function hideSubjectTip(){if(subjectTipEl)subjectTipEl.classList.remove("show")}
function showSubjectTip(el){
 if(!el||el.scrollWidth<=el.clientWidth+1){hideSubjectTip();return} // only truncated names get a tooltip
 if(!subjectTipEl){subjectTipEl=document.createElement("div");subjectTipEl.className="subject-tip";subjectTipEl.setAttribute("role","tooltip");document.body.appendChild(subjectTipEl)}
 subjectTipEl.textContent=el.dataset.full;subjectTipEl.classList.add("show");
 const r=el.getBoundingClientRect(),w=subjectTipEl.offsetWidth,h=subjectTipEl.offsetHeight;
 const left=Math.min(Math.max(8,r.left+r.width/2-w/2),window.innerWidth-w-8);let top=r.bottom+8;
 if(top+h>window.innerHeight-8)top=Math.max(8,r.top-h-8);
 subjectTipEl.style.left=left+"px";subjectTipEl.style.top=top+"px";
}
// Student search: matches name or LRN, ignoring case, accents, punctuation and extra spaces. Every typed word must match,
// so "Castillo, Gabriel" and "Dela  Cruz" work. A run of 4+ digits (even typed with spaces or dashes) is also matched against the LRN.
const normText=x=>String(x??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
function matchesSearch(s,query){
 const q=normText(query);if(!q)return true;
 const hay=normText(s.name)+" "+String(s.lrn).toLowerCase();
 if(q.split(" ").every(t=>hay.includes(t)))return true;
 const digits=q.replace(/\D/g,"");return digits.length>=4&&q.replace(/[0-9 ]/g,"")===""&&String(s.lrn).includes(digits);
}
// While printing, the search text is ignored so it can never drop students from the report (the status / classification filters, which the print header lists, still apply).
let printingNow=false;
function renderTable(){
 const c=getClass(),idx=termIndex(),layout=effectiveLayout(),horizontal=layout==="horizontal";let list=classStudents();
 if(search&&!printingNow)list=list.filter(s=>matchesSearch(s,search));
 if(statusFilter!=="All Statuses")list=list.filter(s=>studentStatus(s)===statusFilter);
 if(filters.classification.length)list=list.filter(s=>filters.classification.includes(s.classification));
 const subjects=c.advisory?advisorySubjects:[c.subjectName];
  // One <colgroup> drives the widths: Student | subject grade(s) | Term Average | Status | Remark.
 const subjectWidths=horizontal?subjects.map(()=>COL_W.subject):[COL_W.list];
 // Widths are proportional (they always sum to 100%) with a pixel minimum on the table, so the grid fills the card on wide
 // screens, scrolls as one unit on narrow screens, and scales down cleanly when printed.
 const widths=[COL_W.student,COL_W.status,COL_W.gap,...subjectWidths,COL_W.average,COL_W.remark],totalW=widths.reduce((a,b)=>a+b,0);
 $("#studentCols").innerHTML=widths.map(w=>`<col style="width:${(w/totalW*100).toFixed(3)}%">`).join("");
 $("#studentTable").style.minWidth=totalW+"px";
 // Horizontal: one-line header, ellipsis when too long (full name in a hover tooltip). Vertical: plain header, names never truncated.
 const subjectHeads=horizontal?subjects.map(x=>`<th class="center subject-th"><span class="subject-name" tabindex="0" data-full="${x}">${x}</span></th>`).join(""):`<th class="center">Subject grades</th>`;
 hideSubjectTip();
 $("#studentTableHead").innerHTML=`<tr><th>Student information</th><th class="center">Status</th><th class="spacer" aria-hidden="true"></th>${subjectHeads}<th class="center avg-th">${terms[idx]} Average</th><th class="center">Remark</th></tr>`;
 // The layout-cycle button exists only for Advisory Classes.
 const cycle=$("#layoutCycle");cycle.classList.toggle("hidden",!c.advisory);cycle.disabled=!c.advisory;
  cycle.setAttribute("aria-label",tableLayout==="horizontal"?"Layout: switch to vertical subject grade layout":"Layout: switch to horizontal subject grade layout");
 const returned=c.advisory?null:submissions.find(x=>x.classId===c.id&&x.term===idx&&x.status==="Returned for Correction");
 const editor=(s,subject,g)=>{const key=`${s.id}|${subject}|${idx}`,p=pending.get(key),shown=p?p.raw:(g===null?"":g);return `<div class="grade-edit screen-only"><input class="grade-input${p?" dirty":""}${invalid.has(key)?" invalid":""}${returned&&g===null&&!p?" needs-entry":""}" type="number" min="0" max="100" step="1" value="${shown}" placeholder="—" aria-label="${subject} grade for ${s.name}" data-student="${s.id}" data-subject="${subject}" data-term="${idx}"><button type="button" class="save-grade" data-save-grade="${s.id}" data-subject="${subject}" data-term="${idx}" title="Save grade">Save</button></div><span class="print-only grade-print">${g===null?"—":g}</span>`};
 const rows=list.map(s=>{
   const grades=subjects.map(subject=>subjectGrade(s,subject,idx));
   const remark=grades.some(g=>g===null)?"—":(grades.some(g=>g<75)?"Failed":"Passed");
   const status=studentStatus(s),avg=termAverage(grades);
   let gradeContent;
   if(horizontal){
     gradeContent=grades.map((g,i)=>c.advisory
       ?`<td class="center grade-value${lowCls(g)}">${g===null?'<span class="missing">Not recorded</span>':g}</td>`
       :`<td class="center">${editor(s,subjects[i],g)}</td>`).join("");
   }else{
     gradeContent=`<td><div class="vertical-subject-list">${subjects.map((subject,i)=>`<div class="vertical-grade-row"><span class="vertical-subject">${subject}</span><strong class="${lowCls(grades[i]).trim()}">${grades[i]===null?'<span class="missing">Not recorded</span>':grades[i]}</strong></div>`).join("")}</div></td>`;
   }
   const avgCell=`<td class="center average-cell" title="${terms[idx]} average of ${avg.count} recorded grade${avg.count===1?"":"s"}">${avg.value===null?'<span class="missing">—</span>':`<span class="avg-value">${avg.value.toFixed(1)}</span>`}${avg.value!==null&&avg.count<avg.total?`<small class="avg-note">${avg.count} of ${avg.total} recorded</small>`:""}</td>`;
   return `<tr data-student="${s.id}"><td><div class="student-cell"><span class="student-avatar">${s.name.split(" ").map(x=>x[0]).slice(0,2).join("")}</span><div><b>${s.name}</b><small>LRN: ${s.lrn}</small><span class="class-tag class-${s.classification}" title="Student classification">${s.classification}</span></div></div></td><td class="center"><span class="status-pill ${statusClass(status)}">${status}</span></td><td class="spacer" aria-hidden="true"></td>${gradeContent}${avgCell}<td class="center"><span class="status-pill ${remark==="Passed"?"remark-passed":remark==="Failed"?"remark-failed":"remark-pending"}">${remark}</span></td></tr>`;
 }).join("");
 const colCount=(horizontal?subjects.length:1)+5;lastCounts={shown:list.length,total:classStudents().length};
 $("#studentRows").innerHTML=rows||`<tr><td colspan="${colCount}" class="empty-table"><b>No students found</b><small style="display:block;margin-top:4px">Try a different name or LRN, or clear the search and filters.</small></td></tr>`;
 $("#rowCount").textContent=`${list.length} of ${classStudents().length} students · ${terms[idx]}`;
 $("#filterCount").textContent=(statusFilter!=="All Statuses"?1:0)+filters.classification.length;
 $("#classSelect").value=selectedClass;
 $("#saveAllBtn").classList.toggle("hidden",c.advisory);$("#submitBtn").classList.toggle("hidden",c.advisory);updatePendingUI();
 const banner=$("#returnBanner");banner.classList.toggle("hidden",!returned);
 if(returned)banner.innerHTML=`<b>Returned for Correction · ${c.subjectName} · ${terms[idx]}.</b> ${STATUS_TEXT["Returned for Correction"]}${returned.remark?` <span class="return-note">Adviser's note: “${esc(returned.remark)}”</span>`:""} Correct the entries below, choose Save All Grades, then Submit to Adviser.`;
}
function saveGrade(button){
 const studentId=Number(button.dataset.saveGrade),subject=button.dataset.subject,idx=Number(button.dataset.term),key=`${studentId}|${subject}|${idx}`;
 const input=$$(`.grade-input[data-student="${studentId}"][data-subject="${CSS.escape(subject)}"][data-term="${idx}"]`)[0];
 if(!input)return;
 const raw=input.value.trim(),saved=subjectGrade(students.find(x=>x.id===studentId),subject,idx);
 if(raw===String(saved??"")&&!pending.has(key)){toast("No changes to save for this grade.");return}
 // Same entry shape as the Save All list, so both buttons share one confirm / validate / commit path.
 pending.set(key,{key,studentId,subject,idx,classId:selectedClass,raw});input.classList.add("dirty");updatePendingUI();
 requestSave([pending.get(key)]);
}

const pillCls=s=>"status-pill "+statusClass(s);
function renderSubmissions(){
 const subject=reviewRole==="subject";
 // Subject Review lists the submissions of the subject classes only (never the advisory class list).
 // Advisory Review: submissions for THIS teacher's advisory class, limited to the four demo subjects (matched by class id + subject, never by name text).
 const visible=subject?submissions.filter(s=>{const c=classes.find(x=>x.id===s.classId);return c&&!c.advisory}):submissions.filter(s=>{const c=classes.find(x=>x.id===s.classId);return c&&(c.advisory?DEMO_SUBJECTS.includes(s.subject):s.handedOff===true)});
 $("#submissionCount").textContent=`${visible.length} submission${visible.length===1?"":"s"}`;
 $("#submissionsDesc").textContent=subject?"View grade submissions for your subject classes and track their review status":"Review grades sent by subject teachers and track their status.";
 $$(".role-tab").forEach(b=>{const on=b.dataset.role===reviewRole;b.classList.toggle("active",on);b.setAttribute("aria-pressed",on)});
 // The grading period is kept on every record (s.term) but is no longer shown as a column.
 const cols=subject?[["Subject",22],["Class / Section",19],["Advisory Teacher",19],["Submitted",14],["Status",14],["Action",12]]:[["Subject",27],["Subject teacher",23],["Submitted",16],["Status",18],["Action",16]];
 $("#subCols").innerHTML=cols.map(([,w])=>`<col style="width:${w}%">`).join("");
 $("#subHead").innerHTML="<tr>"+cols.map(([n])=>`<th>${n}</th>`).join("")+"</tr>";
 const none='<span class="missing">—</span>';
 const advisoryAction=s=>s.status==="Sent to Adviser"||s.status==="Returned for Correction"?`<button class="review-btn" data-review="${s.id}">Review</button>`:s.status==="Confirmed"?`<button class="review-btn" data-detail="${s.id}">View Details</button>`:none;
 const subjectAction=s=>s.status==="Sent to Adviser"?`<button class="review-btn" data-sview="${s.id}">View Submission</button>`:s.status==="Confirmed"?`<button class="review-btn" data-sgrades="${s.id}">View Grades</button>`:s.status==="Returned for Correction"?`<button class="review-btn revise" data-srevise="${s.id}">Revise Grades</button>`:none;
 // Status explanations appear only on hover / keyboard focus (title tooltip).
 const pill=(s,text)=>`<span class="${pillCls(s.status)}" tabindex="0" title="${esc(statusTip(s.status,text===STATUS_TEXT_ADVISORY?"advisory":"subject"))}">${statusLabel(s.status,text===STATUS_TEXT_ADVISORY?"advisory":"subject")}</span>`;
 $("#submissionRows").innerHTML=visible.map(s=>{
  const c=classes.find(x=>x.id===s.classId)||{};
  if(subject)return `<tr data-sub-id="${s.id}"><td><b>${s.subject}</b></td><td>${s.section}</td><td>${c.adviser||"—"}</td><td>${s.date}</td><td>${pill(s,STATUS_TEXT)}</td><td>${subjectAction(s)}</td></tr>`;
  return `<tr data-sub-id="${s.id}"><td><b>${s.subject}</b></td><td>${s.teacher}</td><td>${s.date}</td><td>${pill(s,STATUS_TEXT_ADVISORY)}</td><td>${advisoryAction(s)}</td></tr>`;
 }).join("")||`<tr><td colspan="${cols.length}" style="text-align:center;padding:24px">No submissions yet.</td></tr>`;
}
function renderAll(){renderProgress();renderClasses();renderPerformance();renderTable();renderSubmissions()}
function setClass(id){if(!classes.some(c=>c.id===id))return;if(id===selectedClass){$("#classSelect").value=selectedClass;return}guardUnsaved(()=>{selectedClass=id;renderClasses();renderPerformance();renderTable();toast(`Showing ${getClass().subject} records.`)},()=>{$("#classSelect").value=selectedClass})}
// Grade record shared by every popup. It shows the grades the submission CARRIES (its snapshot), not whatever is currently on the class record.
function gradeRecordHtml(sub){
 const entries=sub.entries||[];
 const nums=entries.map(e=>e.grade).filter(g=>Number.isFinite(g));
 return `<div class="review-stats"><div><span>Highest</span><strong>${nums.length?Math.max(...nums):"—"}</strong></div><div><span>Average</span><strong>${nums.length?(nums.reduce((a,b)=>a+b,0)/nums.length).toFixed(1):"—"}</strong></div><div><span>Lowest</span><strong>${nums.length?Math.min(...nums):"—"}</strong></div></div><p class="muted">Submitted: ${sub.date}</p><div class="table-scroll modal-table"><table><thead><tr><th>Student</th><th class="center">Grade</th><th class="center">Remark</th></tr></thead><tbody>${entries.map(e=>{const st=students.find(x=>x.id===e.studentId),g=e.grade,rm=g===null?null:(g<75?"Failed":"Passed");return `<tr><td>${st?st.name:"—"}</td><td class="center">${g===null?"—":g}</td><td class="center">${rm?`<span class="status-pill ${rm==="Passed"?"remark-passed":"remark-failed"}">${rm}</span>`:'<span class="missing">—</span>'}</td></tr>`}).join("")}</tbody></table></div>`;
}
// The status badge lives in the popup header, beside the "Submitted Grade Review" heading (one badge only).
function setModalStatus(sub,role){const b=$("#modalStatus");b.className=pillCls(sub.status);b.textContent=statusLabel(sub.status,role);b.title=statusTip(sub.status,role);b.tabIndex=0;b.hidden=false}
function clearModalStatus(){const b=$("#modalStatus");if(b){b.hidden=true;b.textContent="";b.title="";b.className="status-pill"}}
const wireClose=()=>$$(".close-action,.close-modal").forEach(b=>b.onclick=()=>$("#modal").close());
// Applies a CONFIRMED submission to the real class record. Matches by student id (must belong to the submission's class),
// subject (must belong to that class) and grading period. Only the keys of this submission are written: nothing else is touched,
// blank entries never overwrite an existing grade, and repeating the call cannot create duplicates (one key per student|subject|term).
function applyConfirmedGrades(sub){
 const fail=m=>({ok:false,message:m});
 if(sub.status!=="Sent to Adviser")return fail("Only a submission marked Sent to Adviser can be confirmed.");
 const c=classes.find(x=>x.id===sub.classId);if(!c)return fail("The class of this submission could not be found.");
 if(c.advisory?!advisorySubjects.includes(sub.subject):sub.subject!==c.subjectName)return fail(`${sub.subject} is not a subject of ${c.subject}.`);
 const entries=sub.entries||[],seen=new Set();
 for(const e of entries){
  if(!c.students.includes(e.studentId)||seen.has(e.studentId))return fail("The submission contains a student who does not belong to this class, or a duplicate entry. Nothing was applied.");
  seen.add(e.studentId);
  if(e.grade!==null&&!(Number.isInteger(e.grade)&&e.grade>=0&&e.grade<=100))return fail("The submission contains an invalid grade. Nothing was applied.");
 }
 let count=0;
 entries.forEach(e=>{
  if(e.grade===null)return;
  const st=students.find(x=>x.id===e.studentId);
  gradeBook[`${e.studentId}|${sub.subject}|${sub.term}`]=e.grade;
  if(!c.advisory)st.grades[sub.term]=e.grade; // subject classes keep one grade per term; advisory students derive theirs from their subject grades
  count++;
 });
 if(!count)return fail("This submission has no recorded grades to apply.");
 return{ok:true,count,cls:c};
}
// Advisory teacher: Review (Sent to Adviser = confirm / return, Returned for Correction = inspect only) and View Details (Confirmed).
function openSubmission(id,readOnly=false){
 const sub=submissions.find(s=>s.id===id);if(!sub)return;
 const actionable=!readOnly&&sub.status==="Sent to Adviser";
 $("#modalTitle").textContent="Submitted Grade Review";
 const note=actionable?`<label class="field-label" for="reviewRemark">Review notes (required when returning)</label><textarea id="reviewRemark" class="field" rows="3" placeholder="Add review notes or explain required corrections…"></textarea>`:(sub.remark?`<div class="field-label">Review notes</div><p class="review-note">${esc(sub.remark)}</p>`:"");
 $("#modalBody").innerHTML=`<div class="modal-content-grid three"><div class="detail-box"><small>Subject</small><b>${sub.subject}</b></div><div class="detail-box"><small>Subject teacher</small><b>${sub.teacher}</b></div><div class="detail-box"><small>Grading period</small><b>${terms[sub.term]}</b></div></div>${gradeRecordHtml(sub)}${note}${historyHtml(sub)}`;
 $("#modalActions").innerHTML=actionable?'<button class="outline close-action">Cancel</button><button class="outline" id="returnSubmission">Return for Correction</button><button class="primary" id="confirmSubmission">Confirm Grades</button>':'<button class="outline close-action">Close</button>';
 $("#modal").showModal();wireClose();setModalStatus(sub,"advisory");
 $("#confirmSubmission")?.addEventListener("click",()=>{
  const res=applyConfirmedGrades(sub);
  if(!res.ok){toast(res.message);return}
  sub.status="Confirmed";sub.applied=true;sub.remark=$("#reviewRemark").value.trim();syncSubNotif(sub);
  $("#modal").close();renderAll();
  toast(`Confirmed: ${res.count} ${sub.subject} grade${res.count===1?"":"s"} applied to ${res.cls.subject} · ${terms[sub.term]}.`);
 });
 $("#returnSubmission")?.addEventListener("click",()=>{
  const remark=$("#reviewRemark").value.trim();if(!remark){toast("Please add a correction remark before returning.");$("#reviewRemark").focus();return}
  // Returned: the snapshot is NOT applied to the class record.
  sub.status="Returned for Correction";sub.applied=false;sub.remark=remark;(sub.history=sub.history||[]).push({type:"Returned for Correction",date:todayStr(),note:remark});syncSubNotif(sub);$("#modal").close();renderAll();toast("Submission returned for correction. No grades were applied.");
 });
}
// Subject teacher: View Submission (Sent to Adviser) and View Grades (Confirmed). Read-only views of the same submission record.
function openSubjectRecord(id,mode){
 const sub=submissions.find(s=>s.id===id);if(!sub)return;const c=classes.find(x=>x.id===sub.classId)||{};
 $("#modalTitle").textContent="Submitted Grade Review";
 $("#modalBody").innerHTML=`<div class="modal-content-grid three"><div class="detail-box"><small>Subject</small><b>${sub.subject}</b></div><div class="detail-box"><small>Advisory Teacher</small><b>${c.adviser||"—"}</b></div><div class="detail-box"><small>Grading period</small><b>${terms[sub.term]}</b></div></div>${gradeRecordHtml(sub)}${sub.remark?`<div class="field-label">Review notes</div><p class="review-note">${esc(sub.remark)}</p>`:""}${historyHtml(sub)}`;
 $("#modalActions").innerHTML='<button class="outline close-action">Close</button>';$("#modal").showModal();wireClose();setModalStatus(sub,"subject");
}
// Subject teacher: Revise Grades opens that class + grading period in the existing Student Grade Table (existing editing + Save All Grades).
function reviseGrades(id){
 const sub=submissions.find(s=>s.id===id);if(!sub)return;
 goTo({classId:sub.classId,term:sub.term},()=>{$(".table-panel").scrollIntoView({behavior:"smooth",block:"start"});flash($(".table-panel"),"focus-panel");toast(`Revise ${sub.subject} · ${terms[sub.term]}, choose Save All Grades, then Submit to Adviser.`)});
}
// Subject teacher: formally submits the SAVED grades of the selected Subject Class + grading period to the adviser.
// All checks run before anything is changed, so a failed check never leaves a half-created or half-updated submission.
// A returned submission is re-sent under its original id; a second submission for the same class + term is never created.
let submitBusy=false;
function submitToAdviser(){
 if(submitBusy)return;
 const c=getClass(),idx=termIndex();
 if(c.advisory){toast("Grades for the advisory class are not submitted to an adviser.");return}
 if(!classes.includes(c)||!c.subjectName||!terms[idx]){toast("Select one of your assigned subject classes and a grading period first.");return}
 if(pending.size){toast(`You have ${pending.size} unsaved grade change${pending.size===1?"":"s"}. Save them first (Save All Grades), then Submit to Adviser.`);return}
 const roster=classStudents();if(!roster.length){toast("This class has no students to submit.");return}
 const active=roster.filter(s=>studentStatus(s)==="Active");
 const missing=active.filter(s=>subjectGrade(s,c.subjectName,idx)===null);
 if(missing.length){const names=missing.slice(0,3).map(s=>s.name).join(", ")+(missing.length>3?` and ${missing.length-3} more`:"");toast(`Not submitted: ${missing.length} active student${missing.length===1?" has":"s have"} no saved ${terms[idx]} grade (${names}). Enter and save every grade first.`);return}
 const badGrade=active.filter(s=>{const g=subjectGrade(s,c.subjectName,idx);return!(Number.isInteger(g)&&g>=0&&g<=100)});
 if(badGrade.length){toast(`Not submitted: ${badGrade[0].name} has a grade outside 0–100. Correct it and save first.`);return}
 let sub=submissions.find(s=>s.classId===c.id&&s.subject===c.subjectName&&s.term===idx);
 if(sub&&(sub.status==="Sent to Adviser"||sub.status==="Confirmed")){toast(sub.status==="Confirmed"?`${c.subjectName} · ${terms[idx]} has already been confirmed by the adviser.`:`${c.subjectName} · ${terms[idx]} was already sent to the adviser and is waiting for review.`);return}
 submitBusy=true;
 try{
  const entries=snapshotEntries(c.id,c.subjectName,idx),date=todayStr(),resubmit=!!sub;
  if(sub){sub.history=sub.history||[];sub.history.push({type:"Resubmitted",date,note:""});sub.status="Sent to Adviser";sub.date=date;delete sub.remark;sub.entries=entries;sub.applied=false}
  else{sub={id:Math.max(0,...submissions.map(x=>x.id))+1,subject:c.subjectName,teacher:c.subjectTeacher,section:`Grade ${c.grade} · ${c.section}`,term:idx,date,status:"Sent to Adviser",classId:c.id,gradeIndex:idx,entries,applied:false,history:[{type:"Sent to Adviser",date,note:""}]};submissions.push(sub)}
  sub.handedOff=true; // visible in Advisory Review (as Pending Review) and Subject Review (as Sent to Adviser): one shared record
  const n=submissionNotif(sub,false);n.ts=NOW_TS;n.time="Just now";upsertNotification(n);
  renderAll();toast(resubmit?`${c.subjectName} · ${terms[idx]} was resubmitted to the adviser. Status: Sent to Adviser.`:`${c.subjectName} · ${terms[idx]} was submitted to the adviser. Status: Sent to Adviser.`);
 }finally{submitBusy=false}
}
function notifyAll(){if(!canNotifyAll()){toast(NOTIFY_DENIED);return}const list=alertStudents().filter(x=>notifyPermission(x.s).ok);if(!list.length){toast("There are no students in this alert category.");return}const eligible=list.filter(x=>x.s.guardian&&!sentNotifications.has(notifyKey(x.s)));const missing=list.filter(x=>!x.s.guardian);const duplicate=list.filter(x=>x.s.guardian&&sentNotifications.has(notifyKey(x.s)));$("#modalTitle").textContent="Confirm guardian notifications";$("#modalBody").innerHTML=`<p>You are about to simulate notifications for <b>${currentAlert==="lowest"?"Lowest Grade":"At Risk"}</b> students in <b>${getClass().subject}</b>, ${terms[termIndex()]}.</p><div class="modal-content-grid"><div class="detail-box"><small>Ready to notify</small><b>${eligible.length} guardian(s)</b></div><div class="detail-box"><small>Missing contact</small><b>${missing.length} student(s)</b></div><div class="detail-box"><small>Already notified</small><b>${duplicate.length} student(s)</b></div><div class="detail-box"><small>Delivery mode</small><b>Simulation only</b></div></div><div class="risk-note" style="margin-top:12px">This project has no SMS/email backend. Confirming records simulated results only and will not contact real guardians.</div><div class="table-scroll modal-table"><table><thead><tr><th>Student / subject</th><th>Grade</th><th>Result</th></tr></thead><tbody>${list.map(({s,g})=>`<tr><td>${s.name}<small style="display:block;color:#7b8496">${getClass().subject}</small></td><td>${g}</td><td>${!s.guardian?"Contact missing":sentNotifications.has(notifyKey(s))?"Already notified":"Ready (simulation)"}</td></tr>`).join("")}</tbody></table></div>`;$("#modalActions").innerHTML='<button class="outline close-action">Cancel</button><button class="primary" id="confirmNotify">Confirm simulation</button>';$("#modal").showModal();$$(".close-action,.close-modal").forEach(b=>b.onclick=()=>$("#modal").close());$("#confirmNotify").onclick=()=>{let success=0,failed=0,missingCount=0;list.forEach(({s})=>{if(!notifyPermission(s).ok)return;const key=notifyKey(s);if(!s.guardian){missingCount++;failed++}else if(sentNotifications.has(key)){/* avoid duplicate sends */}else{sentNotifications.add(key);success++}});$("#modal").close();renderAlerts();$("#notifySummary").textContent=`Simulation results: ${success} successful · ${failed} failed · ${missingCount} missing contact`;toast(`Simulation complete: ${success} ready, ${failed} failed (${missingCount} missing guardian contact).`)}}
function printTable(){const c=getClass(),f=[];
 // Print every student of the class (honouring only the status / classification filters); put the search view back afterwards.
 printingNow=true;renderTable();const restore=()=>{if(!printingNow)return;printingNow=false;renderTable()};window.addEventListener("afterprint",restore,{once:true});if(statusFilter!=="All Statuses")f.push(`Student status: ${statusFilter}`);if(filters.classification.length)f.push(`Classification: ${filters.classification.join(", ")}`);let meta=document.querySelector(".print-meta");if(!meta){meta=document.createElement("div");meta.className="print-meta";$(".table-heading").append(meta)}const {shown,total}=lastCounts;meta.innerHTML=`<div class="pm-title">CRESPORT — Grade Management</div><div>${c.subject} · ${c.advisory?"Advisory Class":"Subject Class"}${c.specialization?" · Specialization: "+c.specialization:""}</div>${c.advisory?"":`<div>Subject: ${c.subjectName}</div>`}<div>Grading period: ${terms[termIndex()]}</div><div class="pm-count">Total students: ${shown}${shown!==total?` of ${total}`:""}</div>${f.length?`<div>${f.join(" · ")}</div>`:""}<div class="pm-date">Printed: ${new Date().toLocaleString()}</div>`;if(pending.size)toast("Printing saved grades only. Unsaved edits are not included.");window.print()}
$("#termSelect").addEventListener("change",()=>{const next=$("#termSelect").value;guardUnsaved(()=>{lastTerm=next;renderAll()},()=>{$("#termSelect").value=lastTerm;syncTermButtons()})});$("#studentRows").addEventListener("input",e=>{const i=e.target.closest(".grade-input");if(i)onGradeInput(i)});$("#saveAllBtn").onclick=requestSaveAll;window.addEventListener("beforeunload",e=>{if(pending.size){e.preventDefault();e.returnValue=""}});$("#classCards").addEventListener("click",e=>{const b=e.target.closest("[data-manage]");if(b)setClass(b.dataset.manage)});$("#classSelect").innerHTML=classes.map(c=>`<option value="${c.id}">${c.subject} (${c.advisory?"Advisory Class":"Subject Class"})</option>`).join("");$("#classSelect").addEventListener("change",e=>setClass(e.target.value));$("#searchInput").addEventListener("input",e=>{printingNow=false;search=e.target.value.trim();renderTable()});$("#filterBtn").onclick=()=>$("#filterPanel").classList.toggle("hidden");$("#studentStatusFilter").addEventListener("change",e=>{statusFilter=e.target.value;renderTable()});$$(".classFilter").forEach(el=>el.addEventListener("change",()=>{filters.classification=$$(".classFilter:checked").map(x=>x.value);renderTable()}));$("#clearFilters").onclick=()=>{$$(".classFilter").forEach(x=>x.checked=false);filters={enrollment:[],classification:[]};statusFilter="All Statuses";$("#studentStatusFilter").value=statusFilter;search="";$("#searchInput").value="";renderTable()};$("#studentRows").addEventListener("click",e=>{const b=e.target.closest("[data-save-grade]");if(b)saveGrade(b)});$("#printBtn").onclick=printTable;$$(".alert-tab").forEach(b=>b.addEventListener("click",()=>{currentAlert=b.dataset.alert;$$(".alert-tab").forEach(x=>x.classList.toggle("active",x===b));renderAlerts()}));$$(".snapshot-tab").forEach(b=>b.addEventListener("click",()=>{alertMode=b.dataset.snapshot==="alert";renderPerformance()}));$("#layoutCycle").addEventListener("click",()=>{if(!getClass().advisory)return;tableLayout=tableLayout==="horizontal"?"vertical":"horizontal";renderTable()});$("#notifyAll").onclick=notifyAll;$("#submissionRows").addEventListener("click",e=>{const g=a=>e.target.closest(`[data-${a}]`);const review=g("review"),detail=g("detail"),sview=g("sview"),sgrades=g("sgrades"),srevise=g("srevise");if(review)openSubmission(Number(review.dataset.review));else if(detail)openSubmission(Number(detail.dataset.detail),true);else if(sview)openSubjectRecord(Number(sview.dataset.sview),"view");else if(sgrades)openSubjectRecord(Number(sgrades.dataset.sgrades),"grades");else if(srevise)reviseGrades(Number(srevise.dataset.srevise))});
$$(".role-tab").forEach(b=>b.addEventListener("click",()=>{reviewRole=b.dataset.role;renderSubmissions()}));$("#submitBtn").onclick=submitToAdviser;
$("#studentTableHead").addEventListener("mouseover",e=>{const n=e.target.closest(".subject-name");if(n)showSubjectTip(n)});$("#studentTableHead").addEventListener("mouseout",e=>{if(e.target.closest(".subject-name"))hideSubjectTip()});$("#studentTableHead").addEventListener("focusin",e=>{const n=e.target.closest(".subject-name");if(n)showSubjectTip(n)});$("#studentTableHead").addEventListener("focusout",hideSubjectTip);window.addEventListener("scroll",hideSubjectTip,true);window.addEventListener("resize",hideSubjectTip);$("#planningTab").onclick=()=>toast("Class Planning & Reminders is outside this Grade Management demo.");$("#modal").addEventListener("click",e=>{if(e.target===$("#modal"))$("#modal").close()});
// Popup scrolling: lock the page behind any open popup and start every popup scrolled to the top.
(()=>{const m=$("#modal"),show=m.showModal.bind(m);
 m.showModal=()=>{clearModalStatus();show();document.documentElement.classList.add("modal-open");const b=$("#modalBody");if(b)b.scrollTop=0};
 m.addEventListener("close",()=>document.documentElement.classList.remove("modal-open"));})();

// ---- Term selection box (inside Grade Progress): buttons drive the hidden #termSelect, which still owns the term state ----
function syncTermButtons(){const v=$("#termSelect").value;$$(".term-btn").forEach(b=>{const on=b.dataset.term===v;b.classList.toggle("active",on);b.setAttribute("aria-pressed",on)})}
$$(".term-btn").forEach(b=>b.addEventListener("click",()=>{const s=$("#termSelect");if(s.value===b.dataset.term)return;s.value=b.dataset.term;s.dispatchEvent(new Event("change"))}));
// Moves to a class / term (asking about unsaved edits first), re-renders, then runs `after`.
function goTo({classId,term},after){guardUnsaved(()=>{if(classId)selectedClass=classId;if(term!=null){$("#termSelect").value=terms[term];lastTerm=terms[term]}renderAll();if(after)after()},()=>{})}
function flash(el,cls="focus-flash"){if(!el)return;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls);setTimeout(()=>el.classList.remove(cls),3200)}

// ---- Notifications (session only, like the rest of this demo: no backend) ----
const notifications=[];let notifSeq=0,notifId=0;const NOW_TS=Number.MAX_SAFE_INTEGER;
function upsertNotification(n){const i=notifications.findIndex(x=>x.key===n.key);if(i>=0){const o=notifications[i];Object.assign(o,n,{id:o.id,seq:++notifSeq})}else notifications.push({...n,id:++notifId,seq:++notifSeq});renderNotifications()}
function submissionNotif(sub,read){
 const c=classes.find(x=>x.id===sub.classId)||classes[0],term=terms[sub.term],hasDate=sub.date&&sub.date!=="—";
 const base={key:`sub-${sub.id}`,read,ts:hasDate?(Date.parse(sub.date)||0):0,time:hasDate?sub.date:"",target:{kind:"submission",id:sub.id}};
 if(sub.status==="Returned for Correction")return{...base,title:"Grades Returned for Correction",desc:`${sub.subject} (${term}) was returned to ${sub.teacher} for revision.`};
 if(sub.status==="Confirmed")return{...base,title:"Grades Confirmed",desc:`${sub.subject} (${term}) from ${sub.teacher} has been confirmed.`};
 return{...base,title:"Grade Review Required",desc:`${sub.subject} (${term}) from ${sub.teacher} is awaiting advisory review.`};
}
// Teacher confirmed / returned a submission: update its single notification (no duplicate) and keep it read.
function syncSubNotif(sub){const n=submissionNotif(sub,true);n.ts=NOW_TS;n.time="Just now";upsertNotification(n)}
function notifyGradeSaved(studentId,subject,idx,value,classId){const s=students.find(x=>x.id===studentId);if(!s)return;upsertNotification({key:`grade-${studentId}|${subject}|${idx}`,read:false,ts:NOW_TS,time:"Just now",title:"Student Grade Record Updated",desc:`${s.name}'s ${terms[idx]} ${subject} grade was saved as ${value}.`,target:{kind:"student",id:studentId,classId,term:idx}})}
function renderNotifications(){
 const list=[...notifications].sort((a,b)=>b.ts-a.ts||b.seq-a.seq),unread=list.filter(n=>!n.read).length,badge=$("#notifBadge");
 badge.textContent=unread>99?"99+":unread;badge.classList.toggle("hidden",unread===0);
 $("#bellBtn").setAttribute("aria-label",unread?`Notifications, ${unread} unread`:"Notifications");
 $("#notifSummary").textContent=unread?`${unread} unread`:"All caught up";
 $("#notifList").innerHTML=list.map(n=>`<button type="button" class="notif-item${n.read?"":" unread"}" data-notif="${n.id}"><span class="notif-dot" aria-hidden="true"></span><span class="notif-body"><b>${n.title}</b><span>${n.desc}</span>${n.time?`<small>${n.time}</small>`:""}</span></button>`).join("")||'<p class="notif-empty">No notifications.</p>';
}
function setNotifOpen(open){$("#notifPanel").classList.toggle("hidden",!open);$("#bellBtn").setAttribute("aria-expanded",open)}
function openNotification(n){
 n.read=true;renderNotifications();setNotifOpen(false);const t=n.target;
 if(t.kind==="submission"){
  const sub=submissions.find(s=>s.id===t.id);if(!sub)return;
  const row=document.querySelector(`#submissionRows [data-sub-id="${sub.id}"]`);
  if(row){row.scrollIntoView({block:"center"});flash(row)}
  openSubmission(sub.id,sub.status!=="Sent to Adviser");
 }else if(t.kind==="class"){
  goTo({classId:t.classId,term:t.term},()=>{const sub=getClass().subjectName;$(".table-panel").scrollIntoView({behavior:"smooth",block:"start"});flash($(".table-panel"),"focus-panel");const th=$$("#studentTableHead .subject-name").find(x=>x.dataset.full===sub);if(th)flash(th.closest("th"),"focus-col")});
 }else if(t.kind==="student"){
  goTo({classId:t.classId,term:t.term},()=>{
   let row=document.querySelector(`#studentRows tr[data-student="${t.id}"]`);
   if(!row){search="";$("#searchInput").value="";filters={enrollment:[],classification:[]};$$(".classFilter").forEach(x=>x.checked=false);statusFilter="All Statuses";$("#studentStatusFilter").value=statusFilter;renderTable();row=document.querySelector(`#studentRows tr[data-student="${t.id}"]`);toast("Filters were cleared so this student could be shown.")}
   if(row){row.scrollIntoView({behavior:"smooth",block:"center"});flash(row)}
  });
 }
}
submissions.forEach(sub=>upsertNotification(submissionNotif(sub,sub.status==="Confirmed")));
students.filter(s=>studentStatus(s)!=="Active").forEach(s=>{const c=classes.find(x=>x.students.includes(s.id));if(!c)return;upsertNotification({key:`student-${s.id}`,read:false,ts:0,time:"",title:"Student Record Updated",desc:`${s.name} (LRN ${s.lrn}) is marked ${studentStatus(s)} in ${c.subject}.`,target:{kind:"student",id:s.id,classId:c.id}})});
$("#bellBtn").addEventListener("click",e=>{e.stopPropagation();setNotifOpen($("#notifPanel").classList.contains("hidden"))});
$("#notifList").addEventListener("click",e=>{const b=e.target.closest("[data-notif]");if(!b)return;const n=notifications.find(x=>x.id===Number(b.dataset.notif));if(n)openNotification(n)});
document.addEventListener("click",e=>{if(!$("#notifPanel").classList.contains("hidden")&&!e.target.closest(".notif-wrap"))setNotifOpen(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#notifPanel").classList.contains("hidden")){setNotifOpen(false);$("#bellBtn").focus()}});
$("#settingsBtn").onclick=()=>toast("Settings is outside this Grade Management demo.");

// ---- Teacher profile: right-side sliding panel. Fields follow the reference list; only values that exist in the project are filled. ----
const DEFAULT_AVATAR='<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><circle cx="24" cy="18" r="8.5" fill="#9aa4bd"/><path d="M7 44c1.4-9.6 8.4-15 17-15s15.6 5.4 17 15z" fill="#9aa4bd"/></svg>';
const PHOTO_KEY="cresport.teacher.photo",PHOTO_MAX=2*1024*1024;let pendingPhoto=null;
try{teacher.photo=localStorage.getItem(PHOTO_KEY)||null}catch(e){}
// Every place the teacher's avatar appears (header + profile card) is painted from the same teacher.photo value.
function syncTeacherUI(){
 $$("[data-teacher-avatar]").forEach(el=>{el.innerHTML=teacher.photo?`<img src="${teacher.photo}" alt="">`:DEFAULT_AVATAR});
 $(".user-meta b").textContent=teacher.name;
 $("#userRole").textContent=teacherRoleLabel();
 const ch=$("#photoChoose");if(ch)ch.textContent=teacher.photo?"Change Photo":"Upload Photo";
}
function renderProfile(){
 const NP='<span class="not-provided">Not provided</span>',val=v=>v?esc(v):NP;
 const subjects=[...new Set(classes.map(c=>c.subjectName))];
 const rows=[["Teacher ID",val(teacher.id)],["Full Name",val(teacher.name)],["School Email",val(teacher.email)],["Contact Number",val(teacher.contact)],["Department",val(teacher.department)],
  ["Subject/s Taught",`<ul class="profile-items">${subjects.map(x=>`<li>${x}</li>`).join("")}</ul>`],
  ["Assigned Classes",`<ul class="profile-items">${classes.map(c=>`<li>${c.subject}<small>${c.advisory?"Advisory Class":"Subject Class"}</small></li>`).join("")}</ul>`],
  ["Position",teacherRoles().join(", ")||NP],
  ["Account Status",teacher.status?`<span class="status-pill status-${esc(teacher.status)}">${esc(teacher.status)}</span>`:NP]];
 $("#profileName").textContent=teacher.name;$("#profileRole").textContent=teacherRoleLabel();
 $("#profileList").innerHTML=rows.map(([k,v])=>`<div class="profile-row"><dt>${k}</dt><dd>${v}</dd></div>`).join("");
 syncTeacherUI();
}
// ---- Profile picture upload: validate -> preview -> Save / Cancel. Stored in this browser (localStorage); there is no server in this project. ----
function photoMessage(m){const e=$("#photoError");e.textContent=m||"";e.classList.toggle("hidden",!m)}
function clearPhotoPreview(){pendingPhoto=null;$("#photoPreviewBox").classList.add("hidden");$("#photoPreviewImg").removeAttribute("src");photoMessage("")}
function squareThumb(img,size=320){const c=document.createElement("canvas");c.width=c.height=size;const x=c.getContext("2d"),m=Math.min(img.width,img.height);x.fillStyle="#fff";x.fillRect(0,0,size,size);x.drawImage(img,(img.width-m)/2,(img.height-m)/2,m,m,0,0,size,size);return c.toDataURL("image/jpeg",.88)}
$("#photoChoose").addEventListener("click",()=>$("#photoInput").click());
$("#photoInput").addEventListener("change",e=>{
 const f=e.target.files[0];e.target.value="";if(!f)return;photoMessage("");
 if(!["image/jpeg","image/png"].includes(f.type)){clearPhotoPreview();photoMessage("Please choose a JPG, JPEG or PNG image.");return}
 if(f.size>PHOTO_MAX){clearPhotoPreview();photoMessage("That image is larger than 2 MB. Please choose a smaller one.");return}
 const r=new FileReader();
 r.onerror=()=>photoMessage("The image could not be read. Please try another file.");
 r.onload=()=>{const img=new Image();img.onerror=()=>photoMessage("That file is not a valid image.");img.onload=()=>{pendingPhoto=squareThumb(img);$("#photoPreviewImg").src=pendingPhoto;$("#photoPreviewBox").classList.remove("hidden")};img.src=r.result};
 r.readAsDataURL(f);
});
$("#photoCancel").addEventListener("click",clearPhotoPreview);
$("#photoSave").addEventListener("click",()=>{
 if(!pendingPhoto)return;teacher.photo=pendingPhoto;let stored=true;
 try{localStorage.setItem(PHOTO_KEY,teacher.photo)}catch(err){stored=false}
 clearPhotoPreview();syncTeacherUI();
 toast(stored?"Profile picture updated. It is saved in this browser only.":"Profile picture updated for this session only (browser storage is unavailable).");
});
function setProfileOpen(open){
 const p=$("#profilePanel");if(open){renderProfile();setNotifOpen(false)}else clearPhotoPreview();
 p.classList.toggle("open",open);$("#profileBackdrop").classList.toggle("open",open);p.setAttribute("aria-hidden",!open);$("#profileBtn").setAttribute("aria-expanded",open);document.documentElement.classList.toggle("panel-open",open);
 if(open)$("#profileClose").focus();else if(p.contains(document.activeElement))$("#profileBtn").focus();
}
$("#profileBtn").addEventListener("click",()=>setProfileOpen(!$("#profilePanel").classList.contains("open")));
$("#profileClose").onclick=$("#profileClose2").onclick=()=>setProfileOpen(false);
$("#profileBackdrop").addEventListener("click",()=>setProfileOpen(false));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#profilePanel").classList.contains("open"))setProfileOpen(false)});
(()=>{ // seed submission snapshots
 submissions.forEach(sub=>{
  sub.entries=snapshotEntries(sub.classId,sub.subject,sub.term);
  if(sub.id===6){const adj={1:1,3:2,8:-1};sub.entries=sub.entries.map(e=>e.studentId===6?{...e,grade:79}:(adj[e.studentId]!==undefined&&e.grade!==null?{...e,grade:e.grade+adj[e.studentId]}:e))}
  sub.applied=sub.status==="Confirmed";
  if(!sub.history)sub.history=sub.status==="Returned for Correction"&&sub.remark?[{type:"Returned for Correction",date:sub.date,note:sub.remark}]:[];
 });
})();
syncTeacherUI();renderAll();
