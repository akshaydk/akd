<template>
  <div id="header">   
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="mb-0" href="#">Akshay Kumar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            
            <nuxt-link to="/blog" tag="b-nav-item"> Blog </nuxt-link>
          
          <b-nav-item href="https://www.linkedin.com/in/dhupamakshay/" target="_blank">LinkedIn</b-nav-item>
          <b-nav-item href="https://github.com/akshaydk" target="_blank">Github</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> 
  </div>
</template>