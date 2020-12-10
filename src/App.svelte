<script lang="ts">
  import type { FontWeight, FontSize } from './Font/font';
  import Button from './Components/Button/Button.svelte';
  import Card from './Components/Card/Card.svelte';
  import BorderRadiusSelect from './Border/BorderRadius/BorderRadiusSelect.svelte';
  import ColorSelect from './Color/ColorSelect.svelte';
  import BorderStyleSelect from './Border/BorderStyleSelect.svelte';
  import BorderWidthSelect from './Border/BorderWidth/BorderWidthSelect.svelte';
  import BoxShadowSelect from './Effects/BoxShadowSelect.svelte';

  const fontWeights: FontWeight[] = [
    'bold',
    'semibold',
    'thin',
    'extralight',
    'light',
    'normal',
    'medium',
    'extrabold',
    'black',
  ];
  const fontSizes: FontSize[] = [
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    '9xl',
  ];
  let fontWeight: FontWeight;
  let fontSize: FontSize;
  let borderRadius: string = 'rounded-lg';
  let backgroundColor: string = 'bg-blue-500';
  let borderStyle: string = 'border-solid';
  let borderWidth: string = 'border-2';
  let shadowStyle: string = 'shadow-lg';
  let textColor: string = 'text-white';
  let borderColor: string = 'border-blue-900';

  let selectButtonStyles = [
    'py-1 px-4',
    'text-black',
    'border-2',
    'rounded-lg',
    'border-green-900',
    'hover:border-green-700',
    'min-w-max',
  ];

  let selectMenuStyles = [
    'text-black',
    'rounded-lg',
    'shadow-lg',
    'bg-white',
    'borde-2',
    'border-grey-50',
  ];

  let selectMenuItemStyles = [
    'cursor-pointer',
    'p-2',
    'text-black',
    'hover:bg-green-50',
  ];
  let cardStyles = [
    'p-4',
    'm-2',
    'rounded-lg',
    'shadow-lg',
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
  <div class="bg-grey-50 shadow-lg w-full h-12 px-4 py-2 flex items-center">
    Sveltail
  </div>
  <div class="max-w-screen-xl flex flex-row gap-1 w-full">
    <Card styles={cardStyles} containerStyles={cardContainerStyles}>
      <h3>Button Styles</h3>
      <div class="flex flex-row items-center gap-2">
        Background:
        <ColorSelect
          prefix="bg"
          bind:value={backgroundColor}
          buttonStyles={selectButtonStyles}
          menuStyles={selectMenuStyles}
          menuItemStyles={selectMenuItemStyles} />
      </div>
      <div class="flex flex-row items-center gap-2">
        Font Color:
        <ColorSelect
          prefix="text"
          bind:value={textColor}
          buttonStyles={selectButtonStyles}
          menuStyles={selectMenuStyles}
          menuItemStyles={selectMenuItemStyles} />
      </div>

      <div class="flex flex-row items-center gap-2">
        Font Weight:
        <select bind:value={fontWeight}>
          {#each fontWeights as f}
            <option value={f}>{f}</option>
          {/each}
        </select>
      </div>
      <div class="flex flex-row items-center gap-2">
        Font Size:
        <select bind:value={fontSize}>
          {#each fontSizes as f}
            <option value={f}>{f}</option>
          {/each}
        </select>
      </div>
      <div class="flex flex-row items-center gap-2">
        Border Radius:
        <BorderRadiusSelect bind:value={borderRadius} />
      </div>
      <div class="flex flex-row items-center gap-2">
        Border Style:
        <BorderStyleSelect bind:value={borderStyle} />
      </div>
      <div class="flex flex-row items-center gap-2">
        Border Width:
        <BorderWidthSelect bind:value={borderWidth} />
      </div>
      <div class="flex flex-row items-center gap-2">
        Border Color:
        <ColorSelect prefix="border" bind:value={borderColor} />
      </div>
      <div class="flex flex-row items-center gap-2">
        Box Shadow:
        <BoxShadowSelect bind:value={shadowStyle} />
      </div>
    </Card>

    <Card styles={cardStyles} containerStyles={cardContainerStyles}>
      <div>
        <Button
          styles={[backgroundColor, borderRadius, borderWidth, borderStyle, shadowStyle, textColor, borderColor]}
          text="Some Button Text"
          {fontWeight}
          {fontSize} />
      </div>
    </Card>
  </div>
  <div class="w-full">
    Button Style:
    <pre>{[backgroundColor, borderRadius, borderWidth, borderStyle, shadowStyle, textColor, borderColor].join(' ')}
    </pre>
  </div>
</main>
