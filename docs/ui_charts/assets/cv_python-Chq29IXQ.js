import{j as e,c as m}from"./client-B8KsQLkO.js";import u from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{p as s}from"./index-DOpnoZj2.js";import{B as p}from"./Button-Dbum-Du3.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";const n={fullname:"Sebastien N. Scarwell",jobTitle:"Python Developer / SDET",address:"Hitchin, SG4 9SX",email:"seb.scarwell@gmail.com",phone:"+44 (0)7413928068",nationality:"French/EU national with UK ILR",profileLines:["Senior Software Engineer with extensive experience in <b>Python</b>","Previous roles as <b>Developer</b> and <b>SDET</b> (Developer in Test)","MSc in Telecoms & Digital Signal Processing (DSP)"],skills:{Development:"extensive use of <b>Python</b>, <b>C#</b>, <b>C/C++</b>. Use of <b>TypeScript</b>/JavaScript",Scripting:"extensive use of Python, shell scripting (bash), Make, Perl…","Version Control":"extensive use of <b>GIT</b>, Subversion (SVN)","Devops CI/CD":"<b>Docker</b>, <b>Ansible</b>, Fabric (python/shell over SSH), Jenkins, Bamboo, Gitlab","Back-end":"FastAPI, SQLAlchemy, MongoDB, Kafka, RabbitMQ","Front-end":"<b>React</b>, Bootstrap, Chart.js","Test Frameworks":"Pytest, Behave, Selenium, Playwright (TypeScript), Robot Framework"},jobs:[{jobTitle:"SDET",company:"Vodafone",location:"Newbury, UK",sector:"Telecoms",date:"1.5yr contracts: Jan 2023 - Jun 2024",content:`
Part of the Middleware team, with BDD Test Framework using Python <b>Behave</b>,
running on kubernetes clusters on AWS. Tasks included:
<ul>

  <li>Development of Test Automation Framework features: implemented our REST API client
(handling all requests to our AWS Cognito OAuth server for required JWT/scopes), improved
our API validation by using <b>Pydantic</b> models (auto-generated from OpenAPI definitions),
optimised our Protobuf/JSON Kafka client, implemented logger using Behave formatters for
consistent error reporting (later used by other teams/projects), integrated Behavex to run
multiple instances of Behave in parallel…</li>

  <li>Setup pytest unit tests (for our <b>FastAPI</b> based stub microservice) with mocked external
services (API / Kafka / MongoDB), Pydantic validation, code coverage and Allure reports.</li>

  <li>Development of automated tests: part of a scrum team, developing back-end / API automated
tests for new features. Also bug-fixing issues with our regression tests and Gitlab CI/CD
pipelines.</li>

</ul>`},{jobTitle:"QA Automation Engineer",company:"Citrix R&D",location:"Cambridge, UK",sector:"Hypervisor",date:"3m contract: Oct 2022 - Dec 2022",content:`
Part of the QA team in the Xen Hypervisor department. Tasks included:
<ul>

  <li>Improving our Python test automation framework: added OCR functionality to extract and
compare text from screenshots, updated Docker images used by Jenkins, fixed mypy python
typing issues…</li>

  <li>Developing automated end to end tests using Python.</li>

</ul>`},{jobTitle:"Senior SDET",company:"WorkDay",location:"London, UK",sector:"HR/Workforce Analytics",date:"1yr contracts: Sep 2021 - Sep 2022",content:`
Part of the SDET team in the Augmented Analytics department. Tasks included:
<ul>

  <li>Develop automated end to end tests for our new features, using <b>Python</b> and <b>Robot
Framework</b>. Half of the tests were UI related using <b>Selenium</b>, and half were REST API related.
Tests were integrated to our CI/CD using both Jenkins and Bamboo, and all Docker
containers required were tested in AWS EC2 instances.</li>

  <li>Analyse logs from Jenkins/Bamboo, Robot Framework, and docker containers. Then report
issues in JIRA or update our end to end tests accordingly.</li>

  <li>Release Manager (alternating weekly with other SDET team members): in charge of our
weekly release and patches going to customers.</li>

</ul>`},{jobTitle:"Senior Test Engineer",company:"Sky",location:"London, UK",sector:"Set-Top Boxes",date:"4m contracts: May 2021 - Sep 2021",content:`
Part of a scrum team with 4 developers and 3 QA. Developed automated tests using Python and PyTest/Allure for:
<ul>

  <li>our Product Analytic REST API (tracking user interaction with the box).</li>

  <li>our QT based UI (which also involved recording/mocking data from multiple REST APIs).</li>

</ul>`},{jobTitle:"SDET / Automation",company:"Entrust",location:"Cambridge, UK",sector:"Security",date:"5.5yr contracts: Aug14-Jul16, May17-Dec19, Jul20-Apr21",content:`
Formerly Thales e-Security, and nCipher Security, now Entrust (Data Protection Solutions division).
Was part of the Verification/Validation and CI/CD team, working on
nCipher HSM (Hardware Security Module). Tasks included:
<ul>

  <li><u>Development of automated tests for certifications</u>: developed security related functional tests (on
Common Criteria certification for eIDAS EU regulation, as well as FIPS 140-2 Level 3).
Generated test logs had to meet requirements from external evaluators. Also
developed acceptance tests, fuzz tests and performance tests for cloud elasticity. Most tests
were developed in <b>C#</b> (with Linq) using our .NET test framework, as well as <b>Python</b> or <b>C++</b>
on remote Linux/Windows test servers. Other tests used <b>PyTest</b> directly on test servers.
Tests implemented exercised nCipher Python and C++ API as well as
OpenSSL and nCipher C/C++ Secure Execution Environment in a multi-process/multi-threading environment.
Developed Cryptographic Algorithms to validate our HSMs using python/OpenSSL (for encryption,
signature, key exchange, certificate chain, HMAC…) as well python to implement several
algorithms (for key generation probabilistic primality tests…). Developed load tests using
<b>python Fabric</b>, creating thousands of Docker containers with unique IPs on a Docker MAC
VLAN network, simulating simultaneous client connections.</li>

  <li><u>Development of Test Automation Framework features</u>: Developed multiple REST API using
<b>python Flask-RESTPlus</b> as well as their corresponding <b>C#</b> (with Linq) clients: one API was
running on a Raspberry pi automating user input (simulating USB keyboard input, reading
display…), another API was creating remote file systems with our released software installed
in Docker containers with unique IPs. Developed front-end web UIs controlling those APIs
using <b>Bootstrap</b> and <b>JavaScript/jQuery</b>, as well as Server Sent Events to stream live data
(using Flask and JavaScript).</li>

  <li><u>CI/CD</u>: Created <b>Ansible</b> scripts automating the provisioning and deployment to remote test
servers (Linux and Windows). Developed multiple REST APIs allowing Jenkins as client to
generate certificates required by our servers, combine and simplify information from other
third-party APIs like Device42 (keeping track of servers' OS, IP…) and Artifactory (binary
repository).</li>

</ul>`},{jobTitle:"Python Developer",company:"Audio Analytic",location:"Cambridge, UK",sector:"AI based Audio detection",date:"7m contracts: Nov 2016 - May 2017",content:`
Start-up specialising in machine learning algorithms for sound recognition (targeting Smart Homes).
<ul>

  <li>Developed a RESTful API (using <b>Flask-RESTful</b>) with ZeroMQ communication to the algorithms
allowing control of algorithms and access to the detected events parameters.</li>

  <li>Integrated the algorithms with an SQLite database (using <b>SQLAlchemy</b>), Philips Hue wireless
lights, XMPP messages for phone/watch notifications…</li>

  <li>DevOps/deployment tools: Created <b>Ansible</b> scripts automating the deployment to multiple devices:
installing multiple systemd services (nginx, gunicorn, XMPP server…), setting up as a
WiFi access point, generating per-device licenses…</li>

  <li>Automation: Created python tools automating the scoring, the reduction of the non-target
dataset, as well as the selection of algorithm parameters (optimising the event detection
accuracy).</li>

  <li>Ported some python <b>numpy/scipy</b> functions to <b>C/C++</b>. Profiled using valgrind/kcachegrind.</li>

</ul>`},{jobTitle:"DSP Software Engineer",company:"Aeroflex",location:"Stevenage, UK",sector:"Telecoms",date:"3yr contracts: Mar 2011 - Apr 2014",content:`Implemented RF performance algorithms for PC-based RF equipment. Tasks included:
<ul>

  <li><b>C++</b> implementation and bug-fixing of various algorithms for Bluetooth, WLAN, TDSCDMA, UMTS, LTE.</li>

  <li>Matlab/Python algorithm design for a general QAM demodulator with Phase + Frequency
offset, Phase+Timing error, IQ imbalance measurements.</li>

  <li>Added IPP (Intel Performance Primitives), MKL (Math Kernel Library) and Intel intrinsics to
our time critical C++ implementation for faster matrix/vector operations. Performance
profiling was done using Visual Studio.</li>

  <li>Test framework: Designed and implemented a new test framework using Matlab Object Oriented,
generating impaired input data to exercise Agilent VSA (as reference) and our own DLLs.</li>

</ul>`}],workExtra:`
Similar <span className="x-title">DSP Software</span> development roles using C/C++ upon request:
<span className="x-company">Ericsson</span> (Sweden),
<span className="x-company">Texas Instruments</span> (France),
<span className="x-company">Toshiba</span>.
`,education:[{jobTitle:"5yr-MSc Telecoms & Digital Signal Processing",company:"ESIEE-Paris",location:"France",date:"1999",content:"equivalent"},{jobTitle:"MSc Telecoms",company:"King's College London",location:"UK",date:"1998",content:"non-award exchange student"},{jobTitle:"Postgraduate Diploma in Management Studies",location:"bucks.ac.uk",date:"2002",content:"part-time"}]},g=()=>{const t=n.fullname.split(" ").at(-1),l=new Date().toISOString().substring(0,10),r=`CV_${t}_Python_${l}`;return document.title=r,e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"x-no-print",children:[e.jsx(p,{variant:"primary",onClick:()=>window.print(),style:{padding:"0 0.4rem"},children:"Print as PDF"}),e.jsxs("p",{children:["To save as ",e.jsxs("code",{children:[r,".pdf"]}),", click ",e.jsx("strong",{children:"Print"}),","," ",e.jsx("strong",{children:"Save as PDF"}),", then expand ",e.jsx("strong",{children:"More settings"}),", set"," ",e.jsx("strong",{children:"Margins = Custom"})," (adjust 20mm each side), and tick"," ",e.jsx("strong",{children:"Background graphics"}),".",e.jsx("br",{}),"If needed, add ",e.jsx("code",{children:"break-before:page"})," in dev tools for manual page break."]})]}),e.jsxs("main",{children:[e.jsx("p",{className:"x-colored",style:{fontSize:"1.4rem"},children:n.fullname}),e.jsx("p",{className:"x-colored",style:{margin:"0.4rem auto"},children:n.jobTitle}),e.jsx("p",{children:[n.address,n.email,n.phone,n.nationality].join(" ♦ ")}),e.jsx(a,{children:"Profile"}),e.jsx("ul",{children:n.profileLines.map((o,i)=>e.jsx("li",{children:s(o)},i))}),e.jsx(a,{children:"Skills"}),e.jsx("ul",{children:Object.entries(n.skills).map((o,i)=>{const[c,d]=o;return e.jsxs("li",{children:[e.jsx("span",{className:"x-colored",children:c}),": ",s(d)]},i)})}),e.jsx(a,{children:"Work Experience"}),n.jobs.map((o,i)=>e.jsx(h,{item:o},i)),e.jsx("p",{style:{textAlign:"left",marginTop:"0.6rem"},children:s(n.workExtra)}),e.jsx(a,{children:"Education"}),n.education.map((o,i)=>e.jsx(b,{item:o},i))]})]})},a=t=>e.jsx("p",{className:"x-section",children:t.children}),h=({item:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"clearfix",style:{textAlign:"left",marginTop:"0.6rem"},children:[e.jsx("span",{className:"x-title",children:t.jobTitle}),"."," ",e.jsx("span",{className:"x-company",children:t.company}),", ",t.location,". (",t.sector,")",e.jsx("span",{className:"x-date",children:t.date})]}),e.jsx("div",{style:{textAlign:"justify"},children:s(t.content)})]}),b=({item:t})=>e.jsxs("div",{className:"clearfix",style:{textAlign:"left",marginTop:"0.2rem"},children:[e.jsx("span",{className:"x-title",children:t.jobTitle})," ",t.content,"."," ",t.company&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"x-company",children:t.company}),","," "]}),t.location,e.jsx("span",{className:"x-date",children:t.date})]});m.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(g,{})}));
