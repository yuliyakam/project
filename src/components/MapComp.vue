<template>
  <div class="map">
    <!-- <div class="changeIcon"></div> -->
    <div class="map__info">
      <h2>Наш адрес:</h2>
      <p class="map__info_text">
        г.Краснодар СНТ Авиатор 15км Ростовского шоссе Вишневая 74
      </p>

      <a
        href="tel:+79601039766"
        title="Позвонить на 8 960 103 97 66"
        class="map__info_text"
      >
        <svg
          class="map__info_icon"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            fill="#000000"
            d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
          /></svg>8 960 103 97 66</a
      >

      <a
        href="mailto:yulyakam85@mail.ru"
        class="map__info_text"
        title="Написать на email"
        ><svg class="map__info_icon"
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 512 512">
          <path
            fill="#000"
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          /></svg>yulyakam85@mail.ru</a>

      <div class="map__work-time">
        <span>Время работы:</span>
        <span> Пн-Сб: 09:00 - 21:00</span>
        <span>Без перерывов</span>
      </div>
    </div>
    <l-map ref="map" v-model:zoom="zoom" :center="[45.0448, 38.976]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="[45.164357, 39.074809]"></l-marker>
    </l-map>
  </div>
</template>

<script>
// import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";  

export default {
 
  components: {
    LMap,
    LTileLayer,
    LMarker,
  }, 
  
  data() {
    return {
      zoom: 10,
    };
  },

};
</script>
