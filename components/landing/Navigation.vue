<template>
  <nav class="page_nav">
    <ul class="mainmenu">
      <li class="lavel-1">
        <n-link to="/">
          <span>Home</span>
        </n-link>
      </li>

      <li class="lavel-1">
        <n-link to="/events">
          <span>Events</span>
        </n-link>
      </li>

      <!-- <li class="lavel-1">
        <n-link to="/artists">
          <span>Artists</span>
        </n-link>
      </li> -->

      <li class="lavel-1">
        <n-link to="/about">
          <span>About</span>
        </n-link>
      </li>
      <li class="lavel-1">
        <n-link to="/contact">
          <span>Contact</span>
        </n-link>
      </li>
      <!-- <li class="lavel-1">
        <n-link to="/support">
          <span>Support</span>
        </n-link>
      </li> -->
    </ul>
  </nav>
</template>

<style>

    .mainmenu-wrapper .page_nav ul.mainmenu li.lavel-1>a {
    color: #000;
  }
</style>

<style lang="scss">
    .mega__list {
        display: flex;
        li {
            flex-basis: 25%;
        }
    }
</style>