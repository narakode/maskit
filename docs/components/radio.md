---
title: Radio
---

<script setup>
import { ref } from 'vue'
import Radio from '../../src/components/radio/Radio.vue'
import Card from '../../src/components/card/Card.vue'

const text = ref('test')

const onInput = () => console.log('input')
const onInputDebounce = () => console.log('input debounce')
const onChange = () => {}
const onKeyup = () => {}
</script>

# Radio

Radio adalah komponen untuk membuat input radio.

## Contoh

```vue
<Radio name="sex" input-value="pria" label="Pria" />
<Radio name="sex" input-value="wanita" label="Wanita" />
```

::: raw
<Card>
<Radio name="sex" input-value="pria" label="Pria" />
<Radio name="sex" input-value="wanita" label="Wanita" />
</Card>
:::

## Disabled

```vue
<Radio name="sex" input-value="lainnya" label="Lainya" disabled />
```

::: raw
<Card>
<Radio name="sex" input-value="lainnya" label="Lainya" disabled />
</Card>
:::

## Props

| Nama          | Type      | Wajib? | Default   | Fungsi                     |
| ------------- | --------- | ------ | --------- | -------------------------- |
| `name`        | `string`  | :x:    | `''`      | Nama radio                 |
| `input-value` | `any`     | :x:    | `on`      | Nilai radio ketika dipilih |
| `label`       | `string`  | :x:    | `null`    | Menampilkan teks label     |
| `id`          | `string`  | :x:    | `useId()` | ID unik radio              |
| `disabled`    | `boolean` | :x:    | `false`   | Menonaktifkan radio        |

## Models

| Nama      | Type   | Fungsi                 |
| --------- | ------ | ---------------------- |
| `default` | `null` | Binding radio terpilih |

## Events

| Nama     | Payload | Kapan                           |
| -------- | ------- | ------------------------------- |
| `change` | -       | Ketika status terpilih berganti |
