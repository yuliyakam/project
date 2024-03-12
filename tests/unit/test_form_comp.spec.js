import FormComp from '@/components/FormComp.vue'
import { mount } from '@vue/test-utils'

describe('FormComp', ()=> {
    it('Test call function by click', async () => {
        // Заглушка для функции
        const formSendStub = jest.fn();        
        const wrapper = mount(FormComp);
        wrapper.vm.formSend = formSendStub;
        //await wrapper.vm.$nextTick() ожидание обнавления DOM
        await wrapper.find('.form').trigger("submit.prevent");        
        expect(formSendStub).toBeCalled();              
    })

    it('Test call function by check checkbox', async () => {   
        const checkStub = jest.fn();     
        const wrapper = mount(FormComp);
        wrapper.vm.checkFlag = checkStub;
        await wrapper.find('#check').trigger('click');        
        expect(checkStub).toBeCalled();
      });
})