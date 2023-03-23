import { shallowMount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
  it('display the corract date in the footer', () => {
    const wrapper = shallowMount(Footer)
    const dateCourante = new Date().getFullYear()

    expect(wrapper.find('.footer__copyright').text()).toMatch(
      `©${dateCourante}Florent Girard`
    )
  })
})
