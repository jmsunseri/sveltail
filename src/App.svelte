<script lang="ts">
  import FaRegSave from 'svelte-icons/fa/FaRegSave.svelte';
  import Button from './Components/Button/Button.svelte';
  import Card from './Components/Card/Card.svelte';
  import ColorSelect from './Color/ColorSelect.svelte';
  import BorderSelect from './Border/BorderSelect.svelte';
  import BoxShadowSelect from './Effects/BoxShadowSelect.svelte';
  import FontSelect from './Font/FontSelect.svelte';
  import SizingSelect from './Sizing/SizingSelect.svelte';

  let fontStyles: string;
  let borderStyles: string;
  let backgroundColor: string = 'bg-blue-500';
  let shadowStyle: string = 'shadow-md';
  let iconSizeStyles: string = 'w-5 h-5';

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
      <div class="flex flex-row items-center gap-2">
        Button:
        <ColorSelect prefix="bg" bind:value={backgroundColor} />
        <FontSelect bind:value={fontStyles} />
        <BorderSelect bind:value={borderStyles} />
        <BoxShadowSelect bind:value={shadowStyle} />
        Icon Size:
        <SizingSelect bind:value={iconSizeStyles} />
      </div>
    </Card>

    <!-- <Card styles={cardStyles} containerStyles={cardContainerStyles}> -->
    <div class="flex-grow p-4 border-l flex flex-col">
      Style Viewer
      <div
        class="bg-blue-400 text-white font-bold shadow-md w-full h-12 px-4 py-2 flex items-center mb-4">
        My Classy App Header
      </div>

      <div class="flex justify-end gap-2">
        <Button
          iconStyles={[iconSizeStyles]}
          styles={[backgroundColor, borderStyles, shadowStyle, fontStyles, 'px-2 py-1']}>
          Primary Button
          <span slot="icon">
            <FaRegSave />
          </span>
        </Button>
        <Button
          iconStyles={[iconSizeStyles]}
          styles={[backgroundColor, borderStyles, shadowStyle, fontStyles, 'px-2 py-1']}>
          Secondary Button
          <span slot="trailingIcon">
            <FaRegSave />
          </span>
        </Button>
      </div>
    </div>
    <!-- </Card> -->
  </div>
</main>
