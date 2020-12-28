<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import IoIosBrowsers from 'svelte-icons/io/IoIosBrowsers.svelte';
  import { slide } from 'svelte/transition';
  import type { IBreadcrumbEvent } from '../../Components/Breadcrumb/Breadcrumb';
  import StyleMenuButton from '../../StyleMenuButton.svelte';
  import ButtonStyler from './ButtonStyler.svelte';
  const dispatch = createEventDispatcher();

  const navigate = (text: string, component: any, isPrimary: boolean) => {
    dispatch('navigate', {
      text,
      component,
      props: { isPrimary },
    } as IBreadcrumbEvent);
  };
</script>

<div transition:slide class="grid gap-2 grid-cols-3">
  <StyleMenuButton
    text="Primary"
    on:click={() => navigate('Primary', ButtonStyler, true)}>
    <IoIosBrowsers />
  </StyleMenuButton>
  <StyleMenuButton
    text="Secondary"
    on:click={() => navigate('Secondary', ButtonStyler, false)}>
    <IoIosBrowsers />
  </StyleMenuButton>
</div>
