<script lang="ts">
  import Button from './Components/Button/Button.svelte';
  import Card from './Components/Card/Card.svelte';
  import ColorSelect from './Color/ColorSelect.svelte';
  import BorderSelect from './Border/BorderSelect.svelte';
  import BoxShadowSelect from './Effects/BoxShadowSelect.svelte';
  import FontSelect from './Font/FontSelect.svelte';

  let fontStyles: string;
  let borderStyles: string;
  let backgroundColor: string = 'bg-blue-500';
  let shadowStyle: string = 'shadow-md';

  let cardStyles = [
    'p-4',
    'm-2',
    'rounded-lg',
    'shadow-md',
    'border-2',
    'border-grey-100',
    'flex',
    'flex-grow',
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
  <div class="max-w-screen-xl flex flex-row gap-1 w-full">
    <Card styles={cardStyles} containerStyles={cardContainerStyles}>
      <div class="flex flex-row items-center gap-2">
        Button:
        <ColorSelect prefix="bg" bind:value={backgroundColor} />
        <FontSelect bind:value={fontStyles} />
        <BorderSelect bind:value={borderStyles} />
        <BoxShadowSelect bind:value={shadowStyle} />
      </div>
    </Card>

    <Card styles={cardStyles} containerStyles={cardContainerStyles}>
      <div>
        <Button
          styles={[backgroundColor, borderStyles, shadowStyle, fontStyles]}
          text="Some Button Text" />
      </div>
    </Card>
  </div>
  <div class="w-full">
    Button Style:
    <pre>{[backgroundColor, borderStyles, shadowStyle, fontStyles].join(' ')}
    </pre>
  </div>
</main>
