import { shallowMount } from '@vue/test-utils'
import FuterComp from '@/components/FuterComp.vue'
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            linkArr: []
        }
    }
});

describe('FuterComp.vue', () => {
  it('Rule render component Futer', () => {   
    const wrapper = shallowMount(FuterComp, {
        global: {
            stubs: [
                'router-link'
            ],
            plugins: [store]            
        },
        
    });
    // Убеждаемся в корректной отрисовке компонента
    console.log(wrapper.html());
  }) 
  
})
