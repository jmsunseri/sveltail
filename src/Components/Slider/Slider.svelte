<script lang="ts">
  export let min: number = 0;
  export let max: number = 100;
  export let step: number = 1;
  export let value: number = 0;
  export let label: string = '';
  export let units: string = '';
</script>

<div class="flex gap-2 items-center">
  <div>{label}</div>
  <input
    class="appearance-none h-px border-gray-300 border-dashed border-2 focus:outline-none rounded-full flex-1"
    type="range"
    on:input
    {step}
    {min}
    {max}
    bind:value />
  <div>{`${value}${units}`}</div>
</div>
