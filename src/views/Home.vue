<template>
<div class="home has-background-white">
  <TopNav />
  <section class="hero is-light has-shadow">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <!-- <TopNav />-->
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body intro-block bg-color-main">
      <div class="container has-text-centered">
        <h1 class="title is-fullwidth is-size-1">
          Be part of God's plan for Him to be loved by every people
        </h1>
        <h2 class="subtitle is-italic">
          Declare His glory among the nations, His marvelous works among all the peoples! (Psalm 96:3)
        </h2> </div>
    </div>
    <!-- Hero footer: will stick at the bottom -->
    <!-- <div class="hero-foot"> </div> -->
  </section>
  <section class="section">
    <div class="container">
      <div class="level">
        <img src="https://www.perspectives.org/Assets/img/made-for-more/banner1.jpg" width="100%">
      </div>
      <div class="columns">
        <div class="column is-7">
          <div class="content">
            <h2 class="is-underlined">Why Perspectives?</h2>
            <p>God has a "world-sized" role for every Christian in His global purpose. Whether people go to distant countries or stay at home is a secondary issue. The primary issue is what most people are hungry to discover: vision to live a life of purpose.
              Discovering that vision makes this course valuable, and perhaps crucial, for any Christian.
            </p>
            <h2 class="is-underlined">What is Perspectives?</h2>
            <p>Perspectives is a fifteen week course designed around four vantage points or "perspectives" — Biblical, Historical, Cultural and Strategic. Each one highlights different aspects of God's global purpose.</p>
            <p>The <strong>Biblical</strong> and <strong>Historical</strong> sections reveal why our confidence is based on the historic fact of God's relentless work from the dawn of history until this day.</p>
            <p>The <strong>Cultural</strong> and <strong>Strategic</strong> sections underscore that we are in the midst of a costly, but very "do-able" task, confirming the Biblical and Historical hope.</p>
            <h2 class="is-underlined">Who is Perspectives USA?</h2>
            <p>Perspectives USA is a ministry of Frontier Ventures and is responsible for the Perspectives movement in the United States. Perspectives USA is comprised of thousands of passionate volunteers. These workers are served and led by 14 regional
              directors, a national headquarters staff and by a team of executive leaders. Click the following links to learn more about our organization and our movement:</p>
            <ul>
              <li><a href="https://www.perspectives.org/html/content/Perspectives_VMV.pdf">Vision, Mission and Values of Perspectives USA</a></li>
              <li><a href="https://www.perspectives.org/About#/HTML/our_history_and_ministry_vision.htm">More about our history, organizational affiliations and beliefs</a></li>
            </ul>
          </div>
          <hr>
          <div class="buttons is-right">
            <a class="button is-info">
              <span class="icon">
                <i class="fa fa-info-circle"></i>
              </span>
              <span>More info</span>
            </a>
            <a class="button is-primary">
              <span class="icon">
                <i class="fa fa-search"></i>
              </span>
              <span>Find a class near you</span>
            </a>
          </div>
        </div>
        <div class="column is-5">
        </div>
      </div>

    </div>

  </section>
</div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
export default {
  name: "home",
  components: {
    TopNav
  }
};
</script>

<style scoped>
</style>
