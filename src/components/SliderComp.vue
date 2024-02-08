<template>
  <div class="slider-container">
    <div class="slider" v-for="(item, index) in slides" :key="index">
      <img v-if="index == slideIndex" class="slide-img" :src="item" alt="photo" />
    </div>

    <button class="prev-button" @click="showPreviousSlide">&lt;</button>
    <button class="next-button" @click="showNextSlide">&gt</button>
    <div class="buttons" >
      <div v-for="(item, index) in btnArr" :key="index" class="btn-dot" :class="[index === 0 ? 'active' : '']" @click="pastActiveClassForDot(index, $event)"></div>    
    </div>
  </div>
</template>
<script>
import img1 from "@/assets/images/slide1.jpg";
import img2 from "@/assets/images/slide2.jpg";
import img3 from "@/assets/images/slide3.jpg";

export default {
  data() {
    return {
      slideIndex: 0,
      sliderWidth: 0,
      slides: [img1, img2, img3],
      btnArr: new Array(3),
      slideCount: 3,
      // slider: document.querySelector(".slider"),
    };
  },
  methods: {
    removeActiveClass() {
  const activeEls = document.querySelectorAll(".active");
  activeEls.forEach((activeEl) => activeEl.classList.remove("active"));
},
    // Функция клика по точке
pastActiveClassForDot(index, $event) {
  this.slideIndex = index;
  const activeEl = document.querySelector(".active");
    if (activeEl) {
      activeEl.classList.remove("active");
    }
  if ($event.target.tagName === "DIV") {
    $event.target.classList.add("active");
    } 
    this.updateSlider();
},
    showPreviousSlide() {
      this.slideIndex =
        (this.slideIndex - 1 + this.slideCount) % this.slideCount;
      this.removeActiveClass();
      const btns = document.querySelectorAll(".btn-dot");
      btns[this.slideIndex].classList.add("active");
      this.updateSlider();
    },
    showNextSlide() {     
      this.slideIndex = (this.slideIndex + 1) % this.slideCount;
      this.removeActiveClass();
      const btns = document.querySelectorAll(".btn-dot");
      btns[this.slideIndex].classList.add("active");
      this.updateSlider();
      },     
    
// Функция для обновления отображения слайдера

    updateSlider() {
  return this.slides[this.slideIndex];
},

  },
      computed: {


    }
};

// //     computed: {
// //         adaptiveSlider() {
// //   // offsetWidth - числовое значене ширины без пиксилей
// //   this.sliderWidth = document.querySelector(".slider-container").offsetWidth;
// //   this.slider.style.width = this.sliderWidth * this.slides.length + "px";
// //   this.slides.forEach((slideImg) => (slideImg.style.width = this.sliderWidth + "px"));
// //   updateSlider();
// // },
// //     },

// // }

// // // Адаптивность
// // window.addEventListener("resize", this.adaptiveSlider);
// // prevButton.addEventListener("click", showPreviousSlide);
// // nextButton.addEventListener("click", showNextSlide);

// // // Инициализация слайдера
// // adaptiveSlider();

// // // Автопролистывание
// // setInterval(() => {
// //   showNextSlide();
// // }, 3000);
</script>
