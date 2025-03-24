import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import TaskThreeView from './TaskThreeView.vue';
import axios from 'axios';

vi.mock('axios');

describe('TaskThreeView.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(TaskThreeView);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(wrapper.text()).toContain('The current time is: Loading...');
  });

  it('fetchTime method updates the serverTime property', async () => {
    const mockTime = '12:34:56';
    axios.get = vi.fn().mockResolvedValue({ data: { time: mockTime } });

    await wrapper.vm.fetchTime();
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain(`The current time is: ${mockTime}`);
  });
});
