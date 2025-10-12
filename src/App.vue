<script setup>
import Logo from './assets/vue.svg'
</script>

<template>
  <div class="p-20 space-y-6">
    <div class="flex items-center justify-between">
      <div class="space-y-4">
        <h1 class="font-bold text-5xl uppercase">Invoice</h1>
        <div>
          <p class="font-bold">East Repair Inc.</p>
          <p>1912 Harvest Lane</p>
          <p>New York, NY 12210</p>
        </div>
      </div>
      <img :src="Logo">
    </div>
    <div class="grid grid-cols-3">
      <div>
        <h2 class="font-bold text-xl uppercase">Bill To</h2>
        <p>Jhon Smith</p>
        <p>2 Court Square</p>
        <p>New York, NY 12210</p>
      </div>
      <div>
        <h2 class="font-bold text-xl uppercase">Ship To</h2>
        <p>Jhon Smith</p>
        <p>3787 Pineview Drive</p>
        <p>Cambridge, MA 12210</p>
      </div>
      <div>
        <dl>
          <div class="flex items-center justify-between">
            <dt class="font-bold text-lg uppercase">INVOICE #</dt>
            <dd>US-001</dd>
          </div>

          <div class="flex items-center justify-between">
            <dt class="font-bold text-lg uppercase">INVOICE DATE</dt>
            <dd>11/02/2019</dd>
          </div>

          <div class="flex items-center justify-between">
            <dt class="font-bold text-lg uppercase">PO.#</dt>
            <dd>2312/2019</dd>
          </div>

          <div class="flex items-center justify-between">
            <dt class="font-bold text-lg uppercase">DUE DATE</dt>
            <dd>26/02/2019</dd>
          </div>
        </dl>
      </div>
    </div>
    <div>
      <table class="w-full text-center">
        <tr class="border-y-2 border-y-red-600">
          <th class="py-2 ">QTY</th>
          <th class="py-2 ">DESCRIPTION</th>
          <th class="py-2 text-right">UNIT PRICE</th>
          <th class="py-2 text-right">AMOUNT</th>
        </tr>
        <tr>
          <td class="py-2 ">1</td>
          <td class="py-2 ">Front and rear brake cables</td>
          <td class="py-2 text-right">100.00</td>
          <td class="py-2 text-right">100.00</td>
        </tr>
        <tr>
          <td class="py-2 ">2</td>
          <td class="py-2 ">New set of pedal arms</td>
          <td class="py-2 text-right">15.00</td>
          <td class="py-2 text-right">30.00</td>
        </tr>
        <tr>
          <td class="py-2 ">1</td>
          <td class="py-2 ">Labor 3hrs</td>
          <td class="py-2 text-right">5.00</td>
          <td class="py-2 text-right">15.00</td>
        </tr>
        <tr>
          <td colspan="3" class="py-2 text-right">Subtotal</td>
          <td class="py-2 text-right">145.00</td>
        </tr>
        <tr>
          <td colspan="3" class="py-2 text-right">Sales Tax 6.25%</td>
          <td class="py-2 text-right">9.06</td>
        </tr>
        <tr>
          <td colspan="3" class="py-2 text-right uppercase text-xl font-bold">Total</td>
          <td class="py-2 text-right uppercase text-xl font-bold">$154.06</td>
        </tr>
      </table>
    </div>
  </div>
</template>