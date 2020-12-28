<script lang="ts">
  import FontSelect from '../../TailwindControls/Font/FontSelect.svelte';
  import SpacingSelect from '../../TailwindControls/Spacing/SpacingSelect.svelte';
  import StyleGroup from '../../Components/Styles/StyleGroup.svelte';
  import Accordion from '../../Components/Accordion/Accordion.svelte';
  import AccordionItem from '../../Components/Accordion/AccordionItem.svelte';
  import TransformSelect from '../../TailwindControls/Transform/TransformSelect.svelte';
  import TransitionSelect from '../../TailwindControls/Transition/TransitionSelect.svelte';
  import { cardStyles } from '../../store';

  let accordion: Accordion;
</script>

<StyleGroup on:closed header="Body Styles">
  <Accordion bind:this={accordion}>
    <AccordionItem isFirst id={9} {accordion} headerText="Font">
      <FontSelect bind:value={$cardStyles.container.font} />
    </AccordionItem>
    <AccordionItem id={10} {accordion} headerText="Spacing">
      <SpacingSelect bind:value={$cardStyles.container.spacing} />
    </AccordionItem>
    <AccordionItem id={11} {accordion} headerText="Transform">
      <TransformSelect bind:value={$cardStyles.container.transform} />
    </AccordionItem>
    <AccordionItem isLast id={12} {accordion} headerText="Transition">
      <TransitionSelect bind:value={$cardStyles.container.transition} />
    </AccordionItem>
  </Accordion>
</StyleGroup>
