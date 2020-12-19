<script lang="ts">
  import { ButtonStyles } from '../Button/Models/ButtonStyles';
  import ColorSelect from '../../TailwindControls/Color/ColorSelect.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import BorderSelect from '../../TailwindControls/Border/BorderSelect.svelte';
  import BoxShadowSelect from '../../TailwindControls/Effects/BoxShadowSelect.svelte';
  import SizingSelect from '../../TailwindControls/Sizing/SizingSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from './StyleGroup.svelte';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import ColorMenu from '../../TailwindControls/Color/ColorMenu.svelte';
  import type { borderRadiusOptions } from '../../TailwindControls/Border/BorderRadius/borderRadius';

  let accordion: Accordion;
  export let init: ButtonStyles;
  export let value: ButtonStyles = init || new ButtonStyles();
</script>

<StyleGroup on:closed header="Button Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Color">
      <ColorMenu prefix="bg" bind:value={value.color} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={value.font} />
    </AccordionItem>
    <AccordionItem id={3} {accordion} headerText="Border">
      <BorderSelect bind:value={value.border} />
    </AccordionItem>
    <AccordionItem id={5} {accordion} headerText="Effects">
      <BoxShadowSelect bind:value={value.effects.boxShadow} />
    </AccordionItem>
    <AccordionItem id={6} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={value.spacing} />
    </AccordionItem>
    <AccordionItem isLast id={7} {accordion} headerText="Icon">
      <div class="flex-col flex gap-1">
        <SizingSelect bind:value={value.icon.size} />
        <ColorMenu prefix="text" bind:value={value.icon.color} />
      </div>
    </AccordionItem>
  </Accordion>
</StyleGroup>
