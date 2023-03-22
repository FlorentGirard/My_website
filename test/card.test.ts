import { shallowMount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import Card from '@/components/Card.vue'

describe('Card', () => {
  it('toggles content when clicked', async () => {
    const wrapper = shallowMount(Card, {
      props: {
        title: 'Card title',
        paragraph: 'Card content paragraph',
      },
    })

    const card = wrapper.find('.card')
    expect(card.classes('card--active')).toBe(false)

    await card.trigger('click')
    expect(card.classes('card--active')).toBe(true)

    await card.trigger('click')
    expect(card.classes('card--active')).toBe(false)
  })
})
