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
      <div class="about-me-fluid">
        <div class="about-me-wrapper">
          <img src="../assets/profile.jpg" style="width: 300px; float:left; border: 3px solid white;">
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
      </div>
    </div>
    <div class="skills-container" id="skills-container">
      <div class="skills-fluid">
        <div class="skills-wrapper">
        <div class="tech-skills cell-child">
          <v-icon x-large>build</v-icon>
          <div class="tech-skills-title">
            <h2>Software Development</h2>
          </div>
          <div class="tech-skills-content">
            <p>
              My tech stack, for programming languages are back-end [Node.js, Golang] front-end [Vue.js, React.js] (Both on junior level though XD). DevOps [Docker, Jenkins].
              Cloud Services [AWS, GCP]. Blockchain [Solidity(Dapp), Ethereum, Hyperledger Fabric]
            </p>
          </div>
        </div>
        <div class="goal cell-child">
          <v-icon x-large>assignment</v-icon>
          <div class="goal-title">
            <h2>Goal</h2>
          </div>
          <div class="goal-content">
            <p>
              These goals that i set are the main goals that i should achieve for these 2 - 3 years. 
              First is participating and finish the blockchain applications project in the work right now, 
              then improve my english for my future master study's plan either on Europe or U.S. To achieve that,
              my first step will be read more books. 
            </p>
          </div>
        </div>
        <div class="hobby cell-child">
          <v-icon x-large>fitness_center</v-icon>
          <div class="hobby-title">
            <h2>Leisure Time</h2>
          </div>
          <div class="hobby-content">
            <p>
              I usually go to gym twice a week after work, other than that i watch some videos on youtube
              or movies. After i finish my book which is "The subtle art of not giving a f word", i realized why successful people read books.
              So i told myself to develop a reading habit, finish 1 book per month.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="book-list">
      <div class="book-list-container">

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
.main-text, .about-me {
  width: 100%;
  position: relative;
}
.main-text {
  min-height: 100vh;
  color: white;
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
}
.main-text::after {
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
#quotes {
  font-size: 1.2em;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.about-me, .skills-container, .book-list  {
  width: 100%;
  height: 500px;
  position: relative;
}
.about-me {
  background-color: #e0ebe8;
}
.skills-container {
  background-color: #fdf5e6;
}
.book-list {
  background-color: #b2cefe;
}
.persp-container {
  /* display: inline-block; */
  float: right;
  width: 400px;
  height: 250px;
  /* background-color: white; */
  text-align: left;
}
.skills-container::after {
  content: "";
  background: url("../assets/park.jpg"); 
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
.skills-container .cell-child {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 33%;
}
.skills-container .cell-child ul {
  text-align: left;
  margin-block-start: 10px;
  padding-inline-start: 20px;
}
.skills-fluid, .about-me-fluid {
  height: inherit;
  width: 900px;
  margin: 0 auto;
}
.skills-wrapper, .about-me-wrapper {
  height: inherit;
  width: inherit;
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
