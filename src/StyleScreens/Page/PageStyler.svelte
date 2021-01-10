<script lang="ts">
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import StyleGroup from '../StyleGroup.svelte';
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import ColorsSelects from '../../TailwindControls/Color/ColorsSelects.svelte';

  import { getNewInstance, pageStyles } from '../../store';

  const reset = () => ($pageStyles = $getNewInstance().viewer);

  let accordion: Accordion;
</script>

<StyleGroup on:closed header="Page Styles" bind:style={$pageStyles} {reset}>
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={0} {accordion} headerText="Background">
      <ColorsSelects prefix="bg" bind:value={$pageStyles.color} />
    </AccordionItem>
    <AccordionItem id={1} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$pageStyles.spacing} />
    </AccordionItem>
    <AccordionItem id={2} {accordion} headerText="Font">
      <FontSelect bind:value={$pageStyles.font} />
    </AccordionItem>
    <AccordionItem isLast id={3} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$pageStyles.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
