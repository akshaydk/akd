<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-link class="navbar-brand" to="/">Akshay Kumar</b-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/blog" tag="b-nav-item">Blog</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
