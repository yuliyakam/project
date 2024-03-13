<template>
  <form @submit.prevent="formSend" class="form" id="form">
    <h2 class="form__title">Форма обратной связи</h2>
    <label class="form__lable"
      >Ваше имя <input type="text" v-model.lazy="formData.userName"
    /></label>

    <small v-if="v$.userName.$error && v$.userName.$dirty" class="invalid"
      >Поле должно быть заполнено
    </small>
    <label class="form__lable"
      >Ваш номер телефона
      <input
        type="tel"
        placeholder="В виде 900 000 00 00"
        v-model.lazy="formData.userTel"
        v-imask="phoneNumberMask"
    /></label>

    <small v-if="v$.userTel.$error && v$.userName.$dirty" class="invalid"
      >Поле должно быть заполнено
    </small>

    <label class="form__lable"
      >Ваше сообщение
      <textarea
        v-model.lazy="formData.userMsg"
        placeholder="Поле не обязательно к заполнению. Если оно будет пустым, мы просто Вам перезвоним"
        class="form__textarea"
      ></textarea>
    </label>
    <div class="agreement">
      <input
        type="checkbox"
        :value="formData.flag"
        @click="checkFlag"
        id="check"
      />
      <label for="check"
        >Даю своё согласие на обработку персональных данных</label
      >
    </div>
    <router-link class="footer__link" :to="'/privacyPolicy'" rel="nofollow"
      >Политика конфиденциальности</router-link
    >
    <button :disabled="!formData.flag" class="form__btn" type="submit">
      Отправить
    </button>
    <small class="form__lable"
      >Если данные будут успешно отправлены, Вы увидите сообщение об этом</small
    >
  </form>
</template>

<script>
import { computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { IMaskComponent, IMaskDirective } from "vue-imask";
import CHAT_ID from "@/configBot";

export default {
  setup() {
    const formData = reactive({
      userName: "",
      userTel: "",
      userMsg: "",
      flag: false,
    });
    const rules = computed(() => {
      return {
        userName: { required },
        userTel: { required },
      };
    });
    const v$ = useVuelidate(rules, formData);
    return { formData, v$ };
  },

  data() {
    return {
      phoneNumberMask: {
        mask: "+{7}(000) 000 00 00",
        lazy: true,
      },
      successfulSendMsg: "",
    };
  },
  directives: {
    imask: IMaskDirective,
  },

  methods: {
    checkFlag() {
      const btnSend = document.querySelector(".form__btn");
      this.formData.flag = !this.formData.flag;
      btnSend.disabled = `${this.formData.flag}`;
    },
    async formSend() {
      this.v$.$validate();
      if (this.v$.$invalid) {
        alert("Неверно заполненные поля!");
        return;
      } else {
        let msg = `<b>Заявка с сайта</b>\n
      <b>Отправитель: ${this.formData.userName}</b>\n
      <b>Номер тел: ${this.formData.userTel}</b>\n
      <b>Сообщение: ${this.formData.userMsg}</b>\n`;
  // const response = await this.$axios
        //   .post(process.env.VUE_APP_URI_API, {
        //     chat_id: process.env.VUE_APP_CHAT_ID,
        //     parse_mode: "html",
        //     text: msg,
        //   })
        const response = await this.$axios
          .post(CHAT_ID.URI_API, {
            chat_id: CHAT_ID.CHAT_ID,
            parse_mode: "html",
            text: msg,
          })      
          .then((res) => {
            this.formData.userName = "";
            this.formData.userTel = "";
            this.formData.userMsg = "";
            this.formData.flag = false;

            document.getElementById("check").checked = false;
            alert("Сообщение отправлено");
          })
          .catch((error) => {
            alert("Произошла ошибка " + error);
          });
      }
    },
  },
};
</script>
