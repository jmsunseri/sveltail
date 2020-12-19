<script lang="ts">
  import { HeaderStyle } from '../Header/HeaderStyle';
  import ColorMenu from '../../TailwindControls/Color/ColorMenu.svelte';
  import BorderStyleSelect from '../../TailwindControls/Border/BorderStyleSelect.svelte';
  import BorderWidthSelect from '../../TailwindControls/Border/BorderWidth/BorderWidthSelect.svelte';
  import BorderRadiusSelect from '../../TailwindControls/Border/BorderRadius/BorderRadiusSelect.svelte';
  import BoxShadowSelect from '../../TailwindControls/Effects/BoxShadowSelect.svelte';
  import FontSizeSelect from '../../TailwindControls/Font/FontSizeSelect.svelte';
  import FontWeightSelect from '../../TailwindControls/Font/FontWeightSelect.svelte';
  import Accordion from '../Accordion/Accordion.svelte';
  import AccordionItem from '../Accordion/AccordionItem.svelte';
  import StyleGroup from './StyleGroup.svelte';

  let accordion: Accordion;
  export let init: HeaderStyle;
  export let value: HeaderStyle = init || new HeaderStyle();
</script>

<StyleGroup on:closed header="Header Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Background">
      <ColorMenu prefix="bg" bind:value={value.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Border">
      <BorderStyleSelect bind:value={value.border.style} />
      <BorderWidthSelect bind:value={value.border.width} />
      <BorderRadiusSelect bind:value={value.border.radius} />
      <ColorMenu bind:value={value.border.color} prefix="border" />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSizeSelect bind:value={value.font.size} />
      <FontWeightSelect bind:value={value.font.weight} />
      <ColorMenu bind:value={value.font.color} prefix="text" />
    </AccordionItem>
    <AccordionItem isLast id={3} {accordion} headerText="Effects">
      <BoxShadowSelect bind:value={value.effects.boxShadow} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
