<template>
  <div class="relative h-screen flex justify-center items-center p-4 sm:p-6">
    <main
      class="relative z-10 w-full max-w-11/12 h-full flex flex-col justify-start items-start border-2 border-black sm:p-0 sm:m-3 overflow-hidden"
    >
      <div class="relative w-full h-full flex flex-col">
        <img
          :src="backgroundImage"
          alt="Background"
          class="w-full h-auto max-h-full object-cover flex-grow"
        />
        <section
          class="absolute top-0 left-0 w-full p-4 sm:p-8 flex flex-col items-center sm:items-start gap-4"
        >
          <h1 class="text-2xl sm:text-3xl text-center sm:text-left">
            Gabriel Kassarp
          </h1>
          <h3 class="text-base sm:text-lg text-center sm:text-left">
            Fullstack Developer
          </h3>
          <ul
            class="mt-10 sm:mt-40 space-y-3 sm:space-y-5 flex flex-col items-center sm:items-start"
          >
            <NuxtLink
              v-for="(link, i) in links"
              :key="i"
              :to="link.path"
              class="font-bold p-2 rounded-lg opacity-75"
              :class="
                isActive(link.path) ? 'bg-black text-white' : 'hover:bg-white'
              "
            >
              {{ link.name }}
            </NuxtLink>
          </ul>
        </section>
        <slot />
        <!-- This is where the page content goes -->
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import Background from "@/public/PORTFOLIO.gif";

const route = useRoute();

const backgroundImage = Background;
const links = [
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "About Me", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const isActive = (path) => route.path === path;
</script>
