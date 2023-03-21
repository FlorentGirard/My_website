import { shallowMount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import Banner from '@/components/Banner.vue'

describe('Banner', () => {
  it('renders text array prop', () => {
    const textArray = ['Hello', 'world', 'test']
    const wrapper = shallowMount(Banner, {
      props: { textArray },
    })
    const bannerItems = wrapper.findAll('.banner__item')
    expect(bannerItems).toHaveLength(textArray.length * 3)
  })
})
