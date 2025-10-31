<template>
  <div class="projects">

    <!--This is copied-->
    <h1>Projects</h1>
<table id="toc">
<!-- <thead>
<tr>
<th></th>
<th></th>
</tr>
</thead> -->
<tbody>
<tr>
<td><a href="#1-Diceroller">1. DiceRoller Website</a></td>
<td><a href="#6-os-design">6. OS Design</a></td>
</tr>
<tr>
<td><a href="#2-basics">2. Basics</a></td>
<td><a href="#7-co-op-webpage">7. Co-op Webpage</a></td>
</tr>
<tr>
<td><a href="#3-scenic">3. Scenic</a></td>
<td><a href="#8-restoapp">8. RestoApp</a></td>
</tr>
<tr>
<td><a href="#4-database-cli">4. Database CLI</a></td>
<td><a href="#9-robot-shooter">9. Robot Shooter</a></td>
</tr>
<tr>
<td><a href="#5-network-design">5. Network Design</a></td>
<!-- <td><a href="#9-left-right">9. Left-Right</a></td> -->
 </tr>
</tbody>
</table>

<Trail header="1. Diceroller Website" id="1-Diceroller" href="https://github.com/Harehn/Basics"/>
<div class="description">
<p><em>A fullstack website to make dice rolls by parsing WOTC style formatted rolls</em></p>

<p>The app features a Flask backend and a Vue frontend. Presets (accessed through the NavBar), which are sets of dice, are saved and the roll history can be viewed and cleared.</p>

<strong>Languages:</strong> Python, HTML, JavaScript <br>
<strong>Technologies:</strong> Vue JS, Flask, Render(deployment), gunicorn, npm <br>
<strong>Link:</strong> <a href="https://github.com/Harehn/DiceRoller"> https://github.com/Harehn/DiceRoller </a>

</div>

<!-- <h3 id="1-basics">1. <a href="https://github.com/Harehn/Basics">Basics</a></h3> -->
<Trail header="2. Basics" id="2-basics" href="https://github.com/Harehn/Basics"/>
<div class="description">
<p><em>A personal project that demonstrates the basics of a programming language</em></p>
<p>This project is for practice and easy reference of the basics The basics include (not limited to) OOP, Typing, Arrays, Logic Flow, (File) IO, Randomness and (Higher Order) Functions.</p>
<p><br><b>Languages(So Far):</b> Python, Java, Ocaml, C, C++, JavaScript<br>
<strong>Link:</strong> <a href="https://github.com/Harehn/Basics">https://github.com/Harehn/Basics</a> </p>
<!-- <p><br><b>Languages(So Far):</b> Python, Java, Ocaml, C, JavaScript<br>
<strong>Link:</strong> <a href="https://github.com/Harehn/Basics">https://github.com/Harehn/Basics</a> </p> -->
</div>

<!-- <h3 id="2-scenic">2. <a href="https://github.com/ArenBabikian/Scenic/tree/master">Scenic</a></h3> -->
<Trail header="3. Scenic" id="3-scenic"/>
<div class="description">
<p><em>Capstone group project – Creating test cases for autonomous driving cars</em></p>
<p>This was my final year project for Bachelor of Software Engineering. 
The project was initially forked by our supervisor from <a href="https://github.com/BerkeleyLearnVerify/Scenic">BerkeleyLearnVerify</a>.
Several iterations have been made on the project since. The project&#39;s goal is to create a simulation for autonomous vehicles
and to create test cases so that we can be more rigorous in software testing of autonomous vehicles.</p>
<p>Our group focused on the optimisation of SAT solving and NSGA creation of test cases. </p>
<p><strong>Supervisor:</strong> <a href="https://github.com/ArenBabikian">Aren Babikian</a> <br>
<strong>Team Members:</strong> <a href="https://github.com/zhekai-jiang">Zhekai Jiang</a>, <a href="https://github.com/JryHL">Jerry Hou-Liu</a>, Oliver Huang<br>
<strong>Language:</strong> Python, Bash, markdown, Json <br>
<strong>Technologies:</strong> pytest, NSGA, pymoo, Poetry, Toml, Docker, Server integration(ssh, scp, etc), Json data extraction and compilation <br>
<strong>Link:</strong> <a href="https://github.com/ArenBabikian/Scenic/tree/master">github.com/ArenBabikian/Scenic/tree/master</a></p>
</div>

<!-- <h3 id="3-database-cli">3. <a href="https://github.com/Harehn/COMP421">Database CLI</a></h3> -->
<Trail header="4. Database CLI" id="4-database-cli"/>
<div class="description">
<p><em>Group Project to make an interactive CLI to communicate with a remote database</em></p>
<p>The goal of the project was to create a simple CLI to communicate with a remote DB2 database and perform
simple insert, select and delete operations. We took necessary steps to handle SQL exceptions. 
The initial table creations and initial insertion of data was done directly using sql files on the server side.</p>
<p><strong>Team Member:</strong> <a href="https://github.com/davidham96">David Hamaoui</a><br>
<strong>Languages:</strong> Java, SQL(DB2) <br>
<strong>Technologies:</strong> Server integration(ssh, scp, etc.), relational databases<br>
<strong>Link:</strong> <a href="https://github.com/Harehn/COMP421">https://github.com/Harehn/COMP421</a></p>
</div>

<!-- <h3 id="4-network-design">4. <a href="https://github.com/Kai-Cheng-WU/ECSE422">Network Design</a></h3> -->
<Trail header="5. Network Design" id="5-network-design"/>
<div class="description">
<p><em>Group project to use different methods to calculate the reliability of a network</em></p>
<p>Given an input of all possible network connections(cost and reliability), we are to find the best network given the cost.
We do this two different way with the first method being the brute method and the second being a more optimum one.
Our approach is to store intermediate values and thus reducing computing time.</p>
<p><strong>Team Member:</strong> <a href="https://github.com/Kai-Cheng-WU">Kaicheng Wu</a>, <a href="https://github.com/andrei-sandor">Andrei Sador</a><br>
<strong>Languages:</strong> Python<br>
<strong>Link:</strong> <a href="https://github.com/Kai-Cheng-WU/ECSE422">https://github.com/Kai-Cheng-WU/ECSE422</a></p>
</div>

<!-- <h3 id="5-os-design">5. <a href="https://github.com/Harehn/COMP310-WINTER2024">OS Design</a></h3> -->
<Trail header="6. OS Design" id="6-os-design"/>
<div class="description">
<p><em>Group Project to simulate the basic functions of an OS</em></p>
<p>We simulated and debugged several functionalities of an OS such as the interpreter and shell memories. 
We also implemented program scheduling with their pcb and ready queue. 
Finally, we implemented the file system with local files acting as disks.</p>
<p><strong>Team Member:</strong> <a href="https://github.com/dluo6">Danlin Luo</a><br>
<strong>Languages:</strong> C <br>
<strong>Technologies:</strong> Docker, MultiThreading <br>
<strong>Link:</strong> <a href="https://github.com/Harehn/COMP310-WINTER2024">https://github.com/Harehn/COMP310-WINTER2024</a></p>
</div>

<!-- <h3 id="6-co-op-webpage">6. <a href="https://github.com/Harehn/Cooperator">Co-op Webpage</a></h3> -->
<Trail header="7. Co-op Webpage" id="7-co-op-webpage"/>
<div class="description">
<p><em>A group project to make an online application website for students to register for co-ops</em></p>
<p>The goal of the project is to create a landing page to coordinate students&#39; coops.
We made a full stack project using continuous integration(Travis CI), a backend using Java and JavaSpring Restful Services.
Our front end was made using Node.js, HTML and CSS(Using Bootstrap). We made tests using Mockito and followed Test driven development.
We sued ZenHub and Github wiki(deprecated) for documentation and to follow agile methodology. 
We used PostgreSQL and Heroku to deploy our project. </p>
<p><em>The original code is not accessible and a mirror containing most of the code is given here.</em></p>
<p><strong>Language:</strong> SQL, Java, Markdown <br>
<strong>Technologies:</strong> Agile methodology, Zenhub, Github, Restful Services, Gradle, Travis CI, Heroku, Postgresql, JUnit, Mockito<br>
<strong>Link:</strong> <a href="https://github.com/Harehn/Cooperator">https://github.com/Harehn/Cooperator</a></p>
</div>

<!-- <h3 id="7-restoapp">7. <a href="https://github.com/Harehn/RestoApp">RestoApp</a></h3> -->
<Trail header="8. RestoApp" id="8-restoapp"/>
<div class="description">
<p><em>Group project to create an app for restaurant reservations</em></p>
<p>A group project to help a restaurant with making reservations and walk-ins. The project was made with JavaFX and UML.
A visual of the layout of the restaurant is made and the tables and seats can be selected to make reservations and assign orders.</p>
<p><em>The original code is not accessible and a mirror containing most of the code is given here.</em></p>
<p><strong>Language:</strong> Java (JavaFX), UML<br>
<strong>Technologies:</strong> Github, MVC architecture, state diagrams, sequences diagrams<br>
<strong>Link:</strong> <a href="https://github.com/Harehn/RestoApp">https://github.com/Harehn/RestoApp</a></p>
</div>

<!-- <h3 id="8-robot-shooter">8. Robot Shooter</h3> -->
<Trail header="9. Robot Shooter" id="9-robot-shooter"/>
<div class="description">
<p><em>Group project to make an autonomous robot car to shoot towards target goals</em></p>
<p>The goal of the project was to build and program a lego robot so that it can navigate a varied terrain and shoot a ping pong ball into a goal.
We tested the various sensors and analysed test data. We used A* algorithm to navigate the terrain. The code was gone in Java with the Lejos library.</p>
<p><strong>Language:</strong> Java, UML<br>
<strong>Technologies:</strong> Github, Object Oriented paradigm, Lejos Library, Lego robot Sensors</p>
</div>

<!-- REMOVED LEFT-RIGHT-->
<!-- <h3 id="9-left-right">9. <a href="https://harehn.github.io/Testpage/">Left-Right</a></h3> -->
<!--
<Trail header="9. Left-Right" id="9-left-right"/>
<div class="description">
<p><em>Online interactive exercise to train left-right coordination</em></p>
<p>A simple webpage made using JavaScript to train left-right coordination.</p>
<p><strong>Language:</strong> HTML, Javascript <br>
<strong>Technologies:</strong> Github, Object Oriented paradigm, Github Pages <br>
<strong>Link:</strong> <a href="https://harehn.github.io/Testpage/">https://harehn.github.io/Testpage/</a></p>
</div>
-->
</div>

  
</template>

<script>
// @ is an alias to /src
import Trail from '@/components/Trail.vue';
export default {
  name: 'Projects',
  components :{
    Trail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects{
  /* padding:20px; */
}

h1 {
  text-align:center;
}

.description {
  margin-left: 7%;
  margin-right: 7%;
  /* display: flex;
  flex-wrap:wrap; */

  padding-left: 1%;
  padding-right: 1%;
  padding-top:0.5%;
  padding-bottom: 0.5%;

  border: 2px solid #ddd;
  border-radius: 20px;
  transition: 0.2s;
}

.description:hover{
  padding-left: 1.05%;
  padding-right: 1.05%;
  padding-top:0.55%;
  padding-bottom: 0.55%;
  /* box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5); */
  border-color: #7c788f;
}

/* #toc {
  margin-left: auto;
  margin-right: auto;
} */
 #toc {
  /* font-family: Arial, Helvetica, sans-serif; */
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 4px;
  margin-bottom: 4px;
  /* padding: 0px; */
  padding-left:1%;
  padding-right:1%;
}

#toc td, #preset_table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#toc tr:nth-child(even){background-color: #f2f2f2;}

#toc td:hover {background-color: #ddd;}


p {
  /* display:block; */
  /* text-align: left; */
  
}


</style>