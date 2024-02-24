
<template>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <NuxtLink to="/" class="nav-link">Jeff</NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about" class="nav-link">About</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/info" class="nav-link">Info</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <NuxtPage />
      </main>
</template>
