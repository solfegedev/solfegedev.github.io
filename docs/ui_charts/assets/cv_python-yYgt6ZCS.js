import{j as e,c}from"./client-B8KsQLkO.js";import d from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{p as a}from"./index-DOpnoZj2.js";import{B as u}from"./Button-Dbum-Du3.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";const n={fullname:"Sebastien N. Scarwell",jobTitle:"Python Developer / SDET",address:"Hitchin, SG4 9UJ",email:"seb.scarwell@gmail.com",phone:"+44 (0)7413928068",nationality:"French/EU national with UK ILR",profileLines:["Senior Software Engineer with extensive experience in <b>Python</b>","Previous roles as <b>Developer</b> and <b>SDET</b> (Developer in Test)","MSc in Telecoms & Digital Signal Processing (DSP)"],skills:{Development:"extensive use of <b>Python</b>, <b>C#</b>, <b>C/C++</b>. Use of <b>TypeScript</b>/JavaScript",Scripting:"extensive use of Python, shell scripting (bash), Perl, Make…","Version Control":"extensive use of <b>GIT</b>, Subversion (SVN)","Devops CI/CD":"<b>Docker</b>, <b>Ansible</b>, Fabric (python/shell over SSH), Jenkins, Bamboo, Gitlab",Backend:"FastAPI, SQLAlchemy, MongoDB, Kafka, Celery, RabbitMQ, MQTT, Scrapy","Web UI":"<b>React</b>, Bootstrap, Chart.js",Tests:"Pytest, Behave, Robot Framework, Selenium, Playwright"},jobs:[{jobTitle:"SDET",company:"Vodafone",location:"Newbury, UK",sector:"Telecoms",date:"1.5y contracts: Jan 2023 - Jun 2024",content:`
Part of the Middleware team, with BDD Test Framework using Python <b>Behave</b>,
running on kubernetes clusters on AWS. Tasks included:
<ul>

  <li>Development of Test Automation Framework features: implemented our REST API client
(handling all requests to our AWS Cognito OAuth server for required JWT/scopes), improved
our API validation by using <b>Pydantic</b> models (auto-generated from OpenAPI definitions),
optimised our Protobuf/JSON Kafka client, implemented logger using Behave formatters for
consistent error reporting (later used by other teams/projects), integrated Behavex to run
multiple instances of Behave in parallel...</li>

  <li>Setup pytest unit tests (for our <b>FastAPI</b> based stub microservice) with mocked external
services (API / Kafka / MongoDB), Pydantic validation, code coverage and Allure reports.</li>

  <li>Development of automated tests: part of a scrum team, developing backend / API automated
tests for new features. Also bug-fixing issues with our regression tests and Gitlab CI/CD
pipelines.</li>

</ul>`},{jobTitle:"QA Automation Engineer",company:"Citrix R&D",location:"Cambridge, UK",sector:"Hypervisor",date:"3m contract: Oct 2022 - Dec 2022",content:`
Part of the QA team in the Xen Hypervisor department. Tasks included:
<ul>

  <li>Improving our Python test automation framework: added OCR functionality to extract and
compare text from screenshots, updated Docker images used by Jenkins, fixed mypy python
typing issues...</li>

  <li>Developing automated end to end tests using Python.</li>

</ul>`},{jobTitle:"Senior SDET",company:"WorkDay",location:"London, UK",sector:"HR/Workforce Analytics",date:"1y contracts: Sep 2021 - Sep 2022",content:`
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

</ul>`},{jobTitle:"Senior Test Engineer",company:"Sky",location:"London, UK",sector:"Set-Top Boxes",date:"contracts: May 2021 - Sep 2021",content:`
Part of a scrum team with 4 developers and 3 QA. Developed automated tests using Python and PyTest/Allure for:
<ul>

  <li>our Product Analytic REST API (tracking user interaction with the box).</li>

  <li>our QT based UI (which also involved recording/mocking data from multiple REST APIs).</li>

</ul>`},{jobTitle:"SDET / Automation",company:"Entrust",location:"Cambridge, UK",sector:"Security",date:"5.5y contracts: Aug14-Jul16 May17-Dec19 Jul20-Apr21",content:`
Formerly Thales e-Security, and nCipher Security, now Entrust (Data Protection Solutions division).
Was part of the Verification/Validation and CI/CD team, working on
nCipher HSM (Hardware Security Module). Tasks included:
<ul>

  <li><u>Development of automated tests for certifications</u>: developed security related functional tests (on
Common Criteria certification for the eIDAS EU regulation, as well as FIPS 140-2 Level 3). The
tests logs generated had to meet the standard requested by the external evaluators. Also
developed acceptance tests, fuzz tests and performance tests for cloud elasticity. Most tests
were developed in <b>C#</b> (with Linq) using our .NET test framework, as well as <b>Python</b> or <b>C++</b>
on remote Linux/Windows test servers. Other tests used <b>PyTest</b> directly on test servers.
Ported the Python part of our framework and tests from Python 2 to Python 3, in order to use
the nCipher Python 3 API. Tests implemented exercised nCipher Python and C++ API as well
as OpenSSL CHIL engine (Cryptographic Hardware Interface Library) and nCipher C/C++
Secure Execution Environment in a multi-process/multi-threading environment. Developed
Cryptographic Algorithms to validate our HSMs using python/OpenSSL (for encryption,
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

</ul>`},{jobTitle:"Python Developer",company:"Audio Analytic",location:"Cambridge, UK",sector:"Audio detection",date:"7m contracts: Nov 2016 - May 2017",content:`
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

</ul>`},{jobTitle:"DSP Software Engineer",company:"Aeroflex",location:"Stevenage, UK",sector:"Telecoms",date:"3y contracts: Mar 2011 - Apr 2014",content:`Implemented RF performance algorithms for PC-based equipment. Libraries were implemented in <b>C++</b>. Tasks included:
<ul>

  <li>Matlab/Python: Designed algorithms for a general QAM demodulator with Phase + Frequency
offset, Phase+Timing error, IQ imbalance measurements.</li>

  <li>Development and bug-fixing using <b>C++</b> for: Bluetooth, WLAN, TDSCDMA, UMTS, LTE.</li>

  <li>Added IPP (Intel Performance Primitives), MKL (Math Kernel Library) and Intel intrinsics to
our time critical C++ implementation for faster matrix/vector operations. Performance
profiling was done using Visual Studio.</li>

  <li>Test framework: Designed and implemented a new test framework using Matlab Object Oriented,
generating impaired input data to exercise Agilent VSA and our own DLLs.</li>

</ul>`}],workExtra:`
Similar DSP development work upon request:
Ericsson (Sweden), Texas Instruments (France), Toshiba.
`,education:[{jobTitle:"5yr-MSc Telecoms & Digital Signal Processing",company:"ESIEE-Paris",location:"France",date:"1999",content:"equivalent"},{jobTitle:"MSc Telecoms",company:"King's College London",location:"UK",date:"1998",content:"non-award exchange student"},{jobTitle:"Postgraduate Diploma in Management Studies",location:"bcuc.ac.uk",date:"2002",content:"part-time"}]},m=()=>{const t=n.fullname.split(" ").at(-1);return document.title=`CV_${t}_Python`,e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"x-no-print",children:[e.jsx(u,{variant:"primary",onClick:()=>window.print(),style:{padding:"0 0.4rem"},children:"Print"}),e.jsxs("p",{children:["Note: Click ",e.jsx("strong",{children:"Print"}),", ",e.jsx("strong",{children:"Save as PDF"}),", then expand"," ",e.jsx("strong",{children:"More settings"}),", set ",e.jsx("strong",{children:"Margins = Custom"})," (adjust 20mm each side), and tick ",e.jsx("strong",{children:"Background graphics"}),"."]})]}),e.jsxs("main",{children:[e.jsx("p",{className:"x-colored",style:{fontSize:"1.4rem"},children:n.fullname}),e.jsx("p",{className:"x-colored",style:{margin:"0.4rem auto"},children:n.jobTitle}),e.jsx("p",{children:[n.address,n.email,n.phone,n.nationality].join(" ♦ ")}),e.jsx(r,{children:"Profile"}),e.jsx("ul",{children:n.profileLines.map((i,o)=>e.jsx("li",{children:a(i)},o))}),e.jsx(r,{children:"Skills"}),e.jsx("ul",{children:Object.entries(n.skills).map((i,o)=>{const[s,l]=i;return e.jsxs("li",{children:[e.jsx("u",{children:s}),": ",a(l)]},o)})}),e.jsx(r,{children:"Work Experience"}),n.jobs.map((i,o)=>e.jsx(p,{item:i},o)),e.jsx("p",{style:{textAlign:"left",marginTop:"0.6rem"},children:n.workExtra}),e.jsx(r,{children:"Education"}),n.education.map((i,o)=>e.jsx(h,{item:i},o))]})]})},r=t=>e.jsx("p",{className:"x-section",children:t.children}),p=({item:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{textAlign:"left",marginTop:"0.6rem"},children:[e.jsx("span",{className:"x-title",children:t.jobTitle}),"."," ",e.jsx("span",{className:"x-company",children:t.company}),", ",t.location,". (",t.sector,")",e.jsx("span",{className:"x-date",children:t.date})]}),e.jsx("div",{style:{textAlign:"justify"},children:a(t.content)})]}),h=({item:t})=>e.jsxs("div",{style:{textAlign:"left",marginTop:"0.2rem"},children:[e.jsx("span",{className:"x-title",children:t.jobTitle})," ",t.content,"."," ",t.company&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"x-company",children:t.company}),","," "]}),t.location,".",e.jsx("span",{className:"x-date",children:t.date})]});c.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(m,{})}));
