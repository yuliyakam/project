import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import MapComp from '@/components/MapComp.vue'

describe('MapComp.vue', () => {
  it('Rule render component Map', () => {   
    const wrapper = shallowMount(MapComp);
    // Убеждаемся в корректной отрисовке компонента
    console.log(wrapper.html());
  })
  
  test('Zoom parametr correct props', async () => {
    const wrapper = shallowMount(MapComp);
    //Устанавливаем zoom с значением 5. Убеждаемся в наличае такого параметра в компоненте
    await wrapper.setData({
      zoom: 5
    })
    expect(wrapper.vm.zoom).toBe(5);
  })
})
