<script setup>
  import testimonialComponent from './components/testimonial-component.vue';
  import tanya from "./assets/image-tanya.jpg"
  import john from "./assets/image-john.jpg"
  const props = [
    {
      index:1,
      Desc:" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
      TitleO:"Tanya Sinclair",
      TitleT:" UX Engineer",
      Pic:tanya,
      altDesc:" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      altTitleO:"John Tarkpor",
      altTitleT:" Junior Front-end Developer",
      altPic:john
    }
  ]
</script>

<template>
  <header>
    
  </header>

  <main>
   <testimonialComponent v-for="{index, Desc, TitleO, TitleT, Pic, altDesc, altTitleO, altTitleT, altPic} in props" :key="index" :desc="Desc" :title-o="TitleO" :title-t="TitleT" :pic="Pic" :alt-desc="altDesc" :alt-title-o="altTitleO" :alt-title-t="altTitleT" :alt-pic="altPic"/>
  </main>
</template>

<style>
</style>
