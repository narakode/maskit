import { mount } from "@vue/test-utils"
import { test, expect } from "vitest"
import Alert from "../components/Alert.vue"

test('render text alert', () => {
    const wrapper = mount(Alert, {
        slots: {
            default: 'Test'
        }
    })

    expect(wrapper.text()).toBe('Test')
})