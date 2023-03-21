import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import Carousel from '@/components/Carousel.vue'

describe('Carousel', () => {
  const projects = [
    {
      picture: 'visualClub.webp',
      alt: 'VisualClub',
      title: 'visualclub-studio.com',
      link: 'https://www.visualclub-studio.com/',
    },
    {
      picture: 'portfollio_alex.webp',
      alt: 'bananamisu',
      title: 'bananamisu.fr',
      link: 'http://gallery.visualclub-studio.com/',
    },
    // Add more projects here...
  ]
  it('renders correctly', () => {
    const wrapper = mount(Carousel)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the correct number of slides', () => {
    const wrapper = mount(Carousel, {
      global: {
        mocks: {
          carouselData: {
            projects,
          },
        },
      },
    })
    const slides = wrapper.findAll('.swiper-slide')
    expect(slides.length).toBe(projects.length)
  })

  it('each slide has an image and a link', () => {
    const wrapper = mount(Carousel)
    const slides = wrapper.findAll('.swiper-slide')
    slides.forEach((slide, index) => {
      const img = slide.find('.carousel__picture')
      const link = slide.find('.carousel__link')
      expect(img.exists()).toBe(true)
      expect(link.exists()).toBe(true)
      expect(link.attributes('href')).toBe(projects[index].link)
    })
  })
})
