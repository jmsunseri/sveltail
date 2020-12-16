<script lang="ts">
  import HeaderStyler from '@comp/Header/HeaderStyler.svelte';
  import Card from './Components/Card/Card.svelte';
  import Viewer from './Viewer.svelte';
  import ButtonStyler from './Components/Button/ButtonStyler.svelte';
  import {
    primaryButtonStyles,
    secondaryButtonStyles,
    headerStyles,
  } from './store';

  let cardStyles = [
    'p-4',
    'm-2',
    'rounded-lg',
    'shadow-md',
    'border-2',
    'border-grey-100',
    'flex',
  ];
  let cardContainerStyles = ['flex', 'flex-grow', 'flex-col', 'gap-4'];
</script>

<!--  -->
<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<main class="flex flex-col items-center  m-0 h-screen">
  <div
    class="bg-red-400 text-white font-bold shadow-md w-full h-12 px-4 py-2 flex items-center">
    Sveltail
  </div>
  <div class="max-w-screen-xl flex flex-row gap-1 w-full h-full">
    <Card styles={cardStyles} containerStyles={cardContainerStyles}>
      Header
      <HeaderStyler bind:value={$headerStyles} />
      Primary Button:
      <ButtonStyler bind:value={$primaryButtonStyles} />
      Secondary Button:
      <ButtonStyler bind:value={$secondaryButtonStyles} />
    </Card>
    <Viewer />
  </div>
</main>
