import SliderComp from '@/components/SliderComp.vue'
import { mount, shallowMount } from '@vue/test-utils'

describe('SliderComp', ()=> {
    it('Test call function by click',  () => {
        // Заглушка для функции
        const showPrevious = jest.fn();
        const showNext = jest.fn();
        const wrapper = shallowMount(SliderComp);
        wrapper.vm.showPreviousSlide = showPrevious;
        wrapper.vm.showNextSlide = showNext;
        wrapper.find('.prev-button').trigger('click');        
        expect(showPrevious).toBeCalled();
        wrapper.find('.next-button').trigger('click');
        expect(showNext).toBeCalled();       
    })
})