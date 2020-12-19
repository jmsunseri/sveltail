<script lang="ts">
  import Button from './Components/Button/Button.svelte';
  import FaRegSave from 'svelte-icons/fa/FaRegSave.svelte';
  // "bg-blue-400 text-white font-bold shadow-md w-full h-12 px-4 py-2 flex items-center mb-4"
  import {
    headerStyles,
    primaryButtonStyles,
    secondaryButtonStyles,
  } from './store';
  import Header from './Components/Header/Header.svelte';
</script>

<div
  class="flex-grow p-4 border-l-2 border-dashed border-gray-300 flex flex-col">
  <Header styles={$headerStyles}>My Classy App Header</Header>
  <div class="flex justify-end">
    <div>
      <Button styles={$primaryButtonStyles}>
        Primary Button
        <span slot="icon">
          <FaRegSave />
        </span>
      </Button>
      <Button styles={$secondaryButtonStyles}>
        Secondary Button
        <span slot="trailingIcon">
          <FaRegSave />
        </span>
      </Button>
    </div>
  </div>
</div>
