import FuterComp from "@/components/FuterComp.vue";
import App from "@/App.vue";
import ServicesComp from "@/views/ServicesComp.vue";
import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import router from "@/router/index.js";

const store = createStore({
  state() {
    // Заглушка для vuex
    return {
      linkArr: [],
    };
  },
});

describe("Router in FuterComp mount in App Services.comp", () => {
  it("Rendering component with routing", async () => {
    router.push("/services");
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, store],
      },
    });
    expect(wrapper.findComponent(ServicesComp).exists()).toBe(true);
  });
  it("Test 'to' atribute from router-link", () => {
    const wrapper = mount(FuterComp, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.find(".footer__contacts-link").attributes().to).toEqual(
      "/contacts"
    );
  });
});
