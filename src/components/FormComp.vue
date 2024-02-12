<template>
  <form @submit.prevent="formSend" class="form center" id="form">
    <h2 class="form__title">Форма обратной связи</h2>
    <label class="form__lable"
      >Ваше имя <input type="text" v-model.lazy="data.userName"
    /></label>
    <!-- {{ v$.userName.$errors[0].$message }} -->
    <small v-if="v$.userName.$error && v$.userName.$dirty" class="invalid"
      >Поле должно быть заполнено
    </small>
    <label class="form__lable"
      >Ваш номер телефона
      <input
        type="tel"
        placeholder="В виде 900 000 00 00"
        v-model.lazy="data.userTel"
        v-imask="phoneNumberMask"
    /></label>
    <!-- {{ v$.userTel.$errors[0].$message }} -->
    <small v-if="v$.userTel.$error && v$.userName.$dirty" class="invalid"
      >Поле должно быть заполнено
    </small>

    <label class="form__lable"
      >Ваше сообщение
      <textarea
        v-model.lazy="data.userMsg"
        placeholder="Поле не обязательно к заполнению. Если оно будет пустым, мы просто Вам перезвоним"
        class="form__textarea"
      ></textarea>
    </label>
    <div class="agreement">
      <input type="checkbox" :value="data.flag" @click="checkFlag" id="check" />
      <label for="check"
        >Даю своё согласие на обработку персональных данных</label
      >
    </div>

    <button :disabled="!data.flag" class="form__btn" type="submit">
      Отправить
    </button>
    <small class="form__lable"
      >Если форма отправилась удачно, вы увидите сообщение об отправке</small
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
    const data = reactive({
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
    const v$ = useVuelidate(rules, data);
    return { data, v$ };
  },

  data() {
    return {
      phoneNumberMask: {
        mask: "+{7}(000) 000 00 00",
        lazy: true,
      },
    };
  },
  directives: {
    imask: IMaskDirective,
  },

  methods: {
    checkFlag() {
      const btnSend = document.querySelector(".form__btn");
      this.data.flag = !this.data.flag;
      btnSend.disabled = `${this.data.flag}`;
    },
    async formSend() {
      this.v$.$validate();
      if (this.v$.$invalid) {
        // this.v$.$touch()
        alert("Неверно заполненные поля!");
        return;
      } else {
        let msg = `<b>Заявка с сайта</b>\n
      <b>Отправитель: ${this.data.userName}</b>\n
      <b>Номер тел: ${this.data.userTel}</b>\n
      <b>Сообщение: ${this.data.userMsg}</b>\n`;

        const response = await this.$axios
          .post(CHAT_ID.URI_API, {
            chat_id: CHAT_ID.CHAT_ID,
            parse_mode: "html",
            text: msg,
          })
          .then((res) => {
            this.data.userName = "";
            this.data.userTel = "";
            this.data.userMsg = "";
            this.data.flag = false;
            this.unCorrectSend = false;

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
<style lang="scss" scoped></style>
