<template>
  <article class="flex items-center justify-center transition-all">
    <div class="relative left-[2rem] top-[0.5rem] cont2">
      <img :src="quotes" alt="quotes" class="absolute left-[3rem] top-[-1.5rem]"/>
      <div class="z-[3] relative ml-[1rem] divO">
        <p class="font-Light text-blue text-[30px] w-[37rem] text1">
          "{{ elDesc }}"
        </p>
        <p class="font-Med text-gray mt-[1.5rem] text2">
          <strong class="text-blue cursor-pointer hover:opacity-100 opacity-75 transition-all">{{ elTitleO }}</strong> {{ elTitleT }}
        </p>
      </div>
    </div>
    <div class="min-h-[657px] mt-[1rem] cont1">
      <img :src="bg" alt="background-image" class="absolute z-[-1] bottom-[22%] left-[48%] bg"/>
      <img :src="elImg" alt="tanya" class="relative rounded-[7px] tanya"/>
      <div class="absolute z-[2] left-[52.5%] bottom-[24%] flex gap-[0.5rem] rounded-[100px]  transition-all btn-container bg-white">
        <button class="p-[1rem] bg-white pl-[1.5rem] rounded-l-[100px] hover:bg-gray transition-all" @click="onClick">
          <img :src="prev" alt="previous"/>
        </button>
        <button class="p-[1rem] bg-white pr-[1.5rem] rounded-r-[100px] hover:bg-gray transition-all" @click="onClick">
          <img :src="next" alt="next"/>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
  // importing dependencies
  import bg from "../assets/pattern-bg.svg"
  import quotes from "../assets/pattern-quotes.svg"
  import next from "../assets/icon-next.svg"
  import prev from "../assets/icon-prev.svg"
  import { computed, ref } from "vue"

  // setting code for animation
  window.onload = function() {
    const el = document.querySelector(".tanya")
    if (el) {
      document.addEventListener("mousemove", (e) => {
        rotateEl(e, el)
      })
    } else {
      console.log("No <img> element found")
    }
  }
  function rotateEl (eventy, element) {
    const x = eventy.clientX
    const y = eventy.clientY
    
    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2
    
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;
    console.log(offsetX, offsetY)
    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", -1 * offsetY + "deg");
  }
  // setting logic
  let state = ref(true)
  const onClick = () => {
    state.value = !state.value
  }
  // setting props
  const props = defineProps({
    desc: String,
    titleO:String,
    titleT:String,
    pic:String,
    altDesc:String,
    altTitleO:String,
    altTitleT:String,
    altPic:String
  })

  const elDesc = computed(() => state.value ? props.desc : props.altDesc)
  const elTitleO = computed(() => state.value ? props.titleO : props.altTitleO)
  const elTitleT = computed(() => state.value ? props.titleT : props.altTitleT)
  const elImg = computed(() => state.value ? props.pic : props.altPic)

</script> 
<style>
  body{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  
  .tanya{
    /* variables to make effect */
    --rotateX:6deg;
    --rotateY:-21deg;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: 
      perspective(5000px)
      rotateX(var(--rotateX))
      rotateY(var(--rotateY));
    transition: all 1s ease;

  }

  .btn-container{
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    animation: slide 2s ease;
    animation-delay: 1s;
    visibility: hidden;
    animation-fill-mode: forwards;
  }
  .bg{
    animation: slide 2s ease;
    animation-delay: 3s;
    visibility: hidden;
    animation-fill-mode: forwards;
  }
  .cont1,.cont2{
    animation: slide 2s ease;
    transition: all 2s ease;
  }
  @keyframes slide{
    from{
      transform: translateY(500px);
       visibility: hidden;
    }
    to{
      transform: translateY(0px);
      visibility: visible;
    }
  }

  @keyframes sliderL {
    from{
      transform: translateX(-500px);

    }
    to{
      transform: translateX(0px);
    }
  }
  @keyframes sliderR {
    from{
      transform: translateX(500px);
      visibility: hidden;
    }
    to{
      transform: translateX(0px);
      visibility: visible;
    }
  }
  
</style>