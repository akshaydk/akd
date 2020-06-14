<template>
  <div>
    <ul class="hero">
      <li>
        <img width="375" height="425" src="@/assets/akshay-white.jpg" />
      </li>
      <li class="hero-content">
        <vue-typed-js
          :strings="['Hello there!', 'I\'m Akshay Kumar.', 'Software Engineer']"
          :loop="true"
          :smartBackspace="true"
          :typeSpeed="120"
          :backSpeed="120"
          :backDelay="200"
        >
          <h2>
            <span class="typing"></span>
          </h2>
        </vue-typed-js>
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style-type: none;
}

.typing {
  font-family: "Tiempos Headline", Arial, sans-serif;
  color: #1446bd;
  font-weight: 300;
}

.hero {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr;
}

.hero-content {
  display: grid;
  align-items: center;
  justify-items: center;
}
@media only screen and (max-width: 768px) {
  .hero {
    display: grid;
    padding: 0;
    grid-template-columns: 1fr;
  }
  .hero-content {
    padding-top: 1rem;
  }
}
</style>