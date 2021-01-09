<script lang="ts">
  import { onMount, tick } from 'svelte';
  import type { IBreadcrumb, IBreadcrumbEvent } from './Breadcrumb';
  import BreadcrumbNavigator from './BreadcrumbNavigator.svelte';

  export let component: any;
  export let text: string;
  export let props: any;

  let breadcrumbs: IBreadcrumb[] = [];

  onMount(async () => {
    await tick();
    if (component && text) {
      breadcrumbs = [{ component, text }];
    }
  });

  const navigate = ({
    detail: { breadcrumbs: bc, component: comp },
  }: CustomEvent<IBreadcrumbEvent>) => {
    breadcrumbs = bc;
    component = comp;
  };

  const componentNavigate = ({
    detail: { text, component: comp, props: p },
  }: CustomEvent<IBreadcrumbEvent>) => {
    breadcrumbs = [...breadcrumbs, { text, component: comp }];
    component = comp;
    props = p;
  };
</script>

<div class="lg:sticky lg:top-0 lg:bg-white z-40 lg:shadow-sm pt-2 mb-2">
  <BreadcrumbNavigator on:navigate={navigate} {breadcrumbs} />
</div>

<svelte:component this={component} on:navigate={componentNavigate} {...props} />
