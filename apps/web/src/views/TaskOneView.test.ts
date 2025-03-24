import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TaskOneView from '@/views/TaskOneView.vue'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

const mockAxios = new AxiosMockAdapter(axios)

describe('TaskOneView.vue', () => {
  beforeEach(() => {
    mockAxios.reset() // Reset mock before each test
  })

  it('renders the loading message initially', () => {
    const wrapper = mount(TaskOneView)
    expect(wrapper.text()).toContain('Loading...')
  })

  it('fetches and displays people data correctly', async () => {
    const mockData = [
      { name: 'Alice', age: 25, email: 'alice@example.com' },
      { name: 'Bob', age: 30, email: 'bob@example.com' }
    ]
    mockAxios.onGet('http://localhost:8080/people').reply(200, mockData)

    const wrapper = mount(TaskOneView)

    await new Promise(resolve => setTimeout(resolve, 100))

    expect(wrapper.find('table').exists()).toBe(true)

    const tableText = wrapper.text()
    expect(tableText).toContain('Alice')
    expect(tableText).toContain('Bob')
    expect(tableText).toContain('25')
    expect(tableText).toContain('30')
  })

  it('calls fetchPeople method on mount', async () => {
    const fetchPeopleSpy = vi.spyOn(TaskOneView.methods, 'fetchPeople')

    mount(TaskOneView)

    expect(fetchPeopleSpy).toHaveBeenCalled()
  })
})
