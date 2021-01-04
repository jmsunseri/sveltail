<script lang="ts">
  export let options: { value: any; label: string }[] = [];
  export let value: any;
</script>

<div
  class="flex gap-1 rounded-full border-2 border-dashed border-gray-300 items-center m-1.5 text-sm">
  {#each options as option, index}
    <label
      on:click={() => (value = option.value)}
      class={`px-4 transform-gpu transition duration-500  rounded-full border-gray-300  border-dashed ${value === option.value ? 'shadow-md bg-white scale-125 text-blue-300 border-2 font-semibold py-0.5' : ''}`}
      for={`${index}`}>{option.label}</label>
    <input
      class="appearance-none"
      type="radio"
      name="radio"
      id={`${index}`}
      value={option.value}
      selected={value === option.value} />
  {/each}
</div>
