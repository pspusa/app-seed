<template>
  <div>
    <TopNav/>
    <section class="hero is-light is-medium">
      <div class="hero-head">
      </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-4 is-offset-4">
                        <div class="box">
                              <h3 class="title has-text-primary2">Login</h3>
                                  <p class="subtitle has-text-grey">Please login to proceed.</p>
                                  <hr>
                            <form>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="email" placeholder="Your Email" autofocus="">
                                    </div>
                                </div>

                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="password" placeholder="Your Password">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="checkbox">
                                      <input type="checkbox">
                                      Remember me
                                    </label>
                                </div>

                                <button class="button is-block is-primary is-fullwidth">Login</button>
                            </form>
                        </div>
                        <p class="has-text-grey">
                            <a href="../">Reset Password</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="hero-foot"></div>
        </section>
    </div>
</template>
<script>

import TopNav from "@/components/TopNav.vue";

export default {
  name: 'login',
  components: {
    TopNav
  }
}

</script>
<style scoped>
.hero.is-success {
  background: #F2F6FA;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar i.psp-icon {
  padding-top: 6px;
  padding-left: 1px;
  font-size:75px;
  height:100px;
  width:100px;
  background: #fff;
  display:inline-block;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
input {
  font-weight: 300;
}
p.subtitle {
  padding-top: 1rem;
}
</style>
