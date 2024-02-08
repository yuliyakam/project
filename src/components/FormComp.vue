<template>
  <form @submit.prevent="formSend" class="form center" id="form">
    <h2 class="form__title">Форма обратной связи</h2>
    <label class="form__lable"
      >Ваше имя <input required type="text" v-model.lazy="data.userName"
    /></label>
    <label class="form__lable"
      >Ваш номер телефона <input required type="tel" v-model.lazy="data.userTel"
    /></label>
    <label class="form__lable"
      >Ваше сообщение <textarea v-model.lazy="data.userMsg"></textarea>
    </label>
    <div class="agreement">
      <input type="checkbox" :value="data.flag" @click="checkFlag" id="check" />
      <label for="check"
        >Даю своё согласие на обработку персональных данных</label
      >
    </div>

    <button :disabled="!data.flag" class="form__btn">Отправить</button>
  </form>
</template>

<script>

import { reactive } from "vue";

import CHAT_ID from "@/configBot";


export default {
  setup() {
    const data = reactive({
      userName: "",
      userTel: "",
      userMsg: "",
      flag: false,
    });
    return { data };
  },
  data() {
    return {};
  },
  methods: {
    checkFlag() {
      const btnSend = document.querySelector(".form__btn");
      this.data.flag = !this.data.flag;
      btnSend.disabled = `${this.data.flag}`;      
    },
    async formSend() {
      
      let msg = `<b>Заявка с сайта</b>\n
      <b>Отправитель: ${this.data.userName}</b>\n
      <b>Номер тел: ${this.data.userTel}</b>\n
      <b>Сообщение: ${this.data.userMsg}</b>\n`;     

      const response = await this.$axios.post(CHAT_ID.URI_API, {
        chat_id: CHAT_ID.CHAT_ID,
        parse_mode: 'html',
        text: msg
      })
      .then((res) => {
        this.data.userName = "";
this.data.userTel = "";
this.data.userMsg = "";
this.data.flag = false;

document.getElementById('check').checked = false;

alert("Сообщение отправлено");
      })
      .catch((error) => {
        alert("Произошла ошибка " + error);
      });   
      
    },
  },
};
</script>
<style lang="scss" scoped></style>
