<template>
  <div class="home-container">
    <scrollactive class="navigation" active-class="active">
      <a href="#intro" class="scrollactive-item"><span></span></a>
      <a href="#about-me" class="scrollactive-item"><span></span></a>
      <a href="#skills-container" class="scrollactive-item"><span></span></a>
    </scrollactive>
    <div class="steez-line"></div>
    <div class="main-text" id="intro">
      <section id="quotes">
        <h1>"I'm awesome and the rest of you suck, so i deserve special treatment.</h1>
        <h1>I suck and the rest of you are all awesome, so i deserve special treatment."</h1>
        <h3>People's sense of entitlement</h3>
      </section>
    </div>
    <div class="about-me" id="about-me">
      <!-- <img src="../assets/profile.jpg" style="width: 100%; border-radius: 3%"> -->
      <div class="persp-container">
        <div class="persp-container-title">
          <h2>About Me</h2>
        </div>
        <div class="persp-container-content">
          <p>
          Hi everyone, my name is Russel. I'm a Chinese-Indonesian who currently stay and work in Taiwan as a Software Engineer.
          I have a passion for Blockchain related technologies and backend infrastructure.
          Since i recently started to read books and fall in love with it,
          i want to integrate my personal website with book review which everybody can share their experiences and recommend good books too.
          Hope you guys like it :)
          </p>
        </div>
      </div>
    </div>
    <div class="skills-container" id="skills-container">
      <div class="skills-wrapper">
        <div class="tech-skills cell-child">
          <div class="tech-skills-title">
            <h2>Software Development</h2>
          </div>
          <div class="tech-skills-content">
            <ul>
              <li>Tech Stack: Node.js, Golang, Solidity</li>
              <li>Blockchain enthusiast, Backend developer, Front-end and Microservices learner</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="goal cell-child">
          <div class="goal-title">
            <h2>Goal</h2>
          </div>
          <div class="goal-content">
            <ul>
              <li>Create or participating on blockchain applications project</li>
              <li>Improve English</li>
              <li>Finish 1 book for every month</li>
              <li>Continue master degree on either Europe or U.S</li>
            </ul>
          </div>
        </div>
        <div class="hobby cell-child">
          <div class="hobby-title">
            <h2>Leisure Time</h2>
          </div>
          <div class="hobby-content">
            <ul>
              <li>Gym</li>
              <li>Playing Games</li>
              <li>Read Books</li>
              <li>Basketball</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.home-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}

.navigation {
  position: fixed;
  top: 340px;
  right: 28px;
  z-index: 100;
  width: 19px;
}
.navigation a {
  border-radius: 100%;
  display: block;
  width: 19px;
  height: 19px;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0);
  transition: all 0.6s;
  margin-bottom: 5px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.navigation a.active {
  border: 2px solid rgba(255,255,255,0.7);
}
.navigation span {
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background: #45b29a;
  display: block;
  opacity: 0.3;
}
.steez-line {
  width: 2px;
  height: 60%;
  background: #45b29a;
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 36px;
  opacity: 0.3;
  transform: translateY(-50%);
}
.main-text {
  height: 843px;
  width: 100%;
  background-color: #e0ebe8;
  position: relative;
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
}
#quotes {
  font-size: 1.2em;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.about-me {
  width: 100%;
  height: 843px;
  margin: 0 auto;
  position: relative;
  display: table;
}
.about-me::after {
  content: "";
  background: url("../assets/bridge.jpg"); 
  opacity: 0.8;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.about-me p {
  display: table-cell;
  vertical-align: middle;
}
.persp-container {
  position: absolute;
  padding: 25px;
  right: 150px;
  top: 100px;
  width: 400px;
  height: 250px;
  background-color: white;
  text-align: left;
}
.skills-container {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  position: relative;
  background-color: #fdf5e6;
  display: table;
}
.skills-container .cell-child {
  display: inline-block;
  text-align: left;
  width: 450px;
}
.skills-container .cell-child ul {
  margin-block-start: 10px;
  padding-inline-start: 20px;
}
.skills-wrapper {
  display: table-cell;
  vertical-align: middle;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
