<template>
  <div class="header">   
    <b-navbar toggleable="lg" type="dark" variant="dark" class="px-5">
      <b-link class="navbar-brand pl-5" to="/"> Akshay Kumar </b-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/blog" tag="b-nav-item"> Blog </b-nav-item>
          <b-nav-item href="https://www.linkedin.com/in/dhupamakshay/" target="_blank">LinkedIn</b-nav-item>
          <b-nav-item href="https://github.com/akshaydk" target="_blank" class="pr-5">Github</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> 
  </div>
</template>