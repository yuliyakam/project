import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import MapComp from '@/components/MapComp.vue'

describe('MapComp.vue', () => {
  it('Rule render component Map', () => {   
    const wrapper = shallowMount(MapComp);
    // Убеждаемся в корректной отрисовке компонента
    console.log(wrapper.html());
  })
  
  // test('Zoom parametr correct', async () => {
  //   const wrapper = shallowMount(MapComp);
  //   await wrapper.setData({
  //     zoom: 5
  //   })
  //   expect(wrapper.vm.z).toBe(5);
  // })
})

