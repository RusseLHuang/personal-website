<template>
  <div class="home-container">
    <scrollactive class="navigation" active-class="active">
      <a href="#intro" class="scrollactive-item">
        <span></span>
      </a>
      <a href="#about-me" class="scrollactive-item">
        <span></span>
      </a>
      <a href="#skills-container" class="scrollactive-item">
        <span></span>
      </a>
      <a href="#posts-list" class="scrollactive-item">
        <span></span>
      </a>
    </scrollactive>
    <div class="steez-line"></div>
    <div class="main-text" id="intro">
      <section id="quotes">
        <h1>"I'm awesome and the rest of you suck, so i deserve special treatment.</h1>
        <h1>I suck and the rest of you are all awesome, so i deserve special treatment."</h1>
        <h5>
          <i>Mark Manson</i> : "The Subtle Art of Not Giving a F*ck" on
        </h5>
        <h5>People's sense of entitlement nowadays.</h5>
      </section>
    </div>
    <div class="about-me" id="about-me">
      <div class="about-me-fluid">
        <div class="about-me-wrapper">
          <img src="../assets/profile.jpg">
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
              <h2>Technical</h2>
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
                So I told myself to finish one book a month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="posts-list" id="posts-list">
      <div class="posts-list-fluid">
        <div class="posts-list-wrapper">
          <div class="posts-list-title">
            <h2>Medium Posts</h2>
          </div>
          <div class="posts-list-line"></div>
          <div class="lds-heart" v-if="this.posts.length < 1"><div></div></div>
          <div class="posts-list-cards" v-else>
            <div v-for="post in posts" v-bind:key="post.title" class="post-element">
              <a v-bind:href="post.link" target="_blank">
                <div class="text-wrapper" style="display: inline-block;">
                  <h2>{{ post.title }}</h2>
                  <p>{{ post.sub }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="link-icon">
        <a href="https://github.com/RusseLHuang" target="_blank"><section id="github"></section></a>
        <a href="https://www.linkedin.com/in/russel-huang-b67373153/" target="_blank"><section id="linkedin"></section></a>
        <a href="https://medium.com/@russelhuang94" target="_blank"><section id="medium"></section></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Api from '../api/index';
import { MediumPost, MediumPosts } from '../dto/medium-post.dto';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class Homepage extends Vue {
  private posts = [] as MediumPost[];
  private async mounted(): Promise<any> {
    const api = new Api();
    const {post}: MediumPosts = await api.getMediumPost();
    this.posts = [...post];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.lds-heart {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  transform-origin: 32px 32px;
}
.lds-heart div {
  top: 23px;
  left: 19px;
  position: absolute;
  width: 26px;
  height: 26px;
  background: #cef;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 26px;
  height: 26px;
  background: #cef;
}
.lds-heart div:before {
  left: -17px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -17px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}


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
  border: 2px solid rgba(255, 255, 255, 0);
  transition: all 0.6s;
  margin-bottom: 5px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.navigation a.active {
  border: 2px solid rgba(255, 255, 255, 0.7);
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
.main-text,
.about-me {
  width: 100%;
  position: relative;
}
.main-text {
  height: 100vh;
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
.about-me,
.skills-container,
.posts-list,
.footer {
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
.posts-list {
  height: initial !important;
}
.posts-list-line {
  height: 1px;
  width: 100%;
  background-color: rgba(0, 0, 0, .2);
  margin-bottom: 40px;
}
.persp-container {
  float: right;
  width: 400px;
  height: 250px;
  text-align: left;
}
.skills-container .cell-child {
  margin-top:35px;
  margin-right: 3%;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 30%;
}
.hobby-content,
.goal-content,
.tech-skills-content {
  text-align: left;
}
.skills-container .cell-child ul {
  text-align: left;
  margin-block-start: 10px;
  padding-inline-start: 20px;
}
.skills-fluid,
.about-me-fluid,
.posts-list-fluid {
  padding-top: 35px;
  padding-bottom: 35px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: inherit;
  width: 100%;
  margin: 0 auto;
}
.posts-list-fluid {
  margin-bottom: 170px;
}
.skills-wrapper,
.about-me-wrapper,
.posts-list-wrapper {
  margin: 0 auto;
  height: inherit;
  width: 70%;
  display: table;
  vertical-align: middle;
}
.about-me-wrapper img {
  width: 300px; 
  float: left; 
  border: 3px 
  solid white
}
.posts-list-title {
  margin-top: 60px;
  margin-bottom: 50px;
}
.posts-list h2 {
  margin-block-end: 0;
  margin-block-start: 0;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.post-element {
  text-align: left;
  padding: 5px;
  margin: 0 auto 15px auto;
  width: 100%;
}
.post-element .img-wrapper {
  display: inline-block;
  width: 20%;
}
.post-element .text-wrapper {
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  width: 80%;
  color: #2c3e50 !important;
}
.post-element h3 {
  margin-top: 0px;
}
.post-element img {
  vertical-align: middle;
  height: 100%;
}
.footer {
  width: 100%;
  height: 65px !important;
  background-color: lightgray;
  padding: 15px;
  box-sizing: border-box;
}
.footer #github::before,
.footer #medium::before,
.footer #linkedin::before {
  content: "";
  width: 32px;
  height: 32px;
  position: absolute;
  right: 16px;
}
.footer #github::before {
  background: url("../assets/github.png");
}
.footer #linkedin::before {
  background: url("../assets/linkedin.png");
}
.footer #medium::before {
  background: url("../assets/medium.svg");
}
.footer div section {
  width: 32px;
  height: 32px;
  display: inline-block;
  margin-left: 15px;
  position: relative;
}
.footer .info span {
  display: block;
  margin: 10px;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
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

@media only screen and (max-width: 1025px) {
  * {
    font-size: 97%;
  }
  #quotes {
    font-size: 95%;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .main-text::after {
    background-attachment: scroll;
  }
  .skills-container .cell-child {
    margin-right: 0;
  }
  .about-me {
    height: 600px;
  }
  .about-me-wrapper img {
    width: 50%;
    float: none;
  }
  .persp-container {
    width: 80%;
    margin: 0 auto;
    float: none;
  }
  .steez-line, .scrollactive-nav {
    display: none;
  }
  .hobby-content,
  .goal-content,
  .tech-skills-content {
    overflow-y: scroll;
    height: 200px;
  }
  .skills-wrapper,
  .about-me-wrapper,
  .posts-list-wrapper {
    width: 80%;
  }
}

@media only screen and (max-width: 400px) {
  .skills-wrapper,
  .about-me-wrapper {
    width: 100%;
  }

  .posts-list-wrapper {
    width: 80%;
  }
}

</style>
