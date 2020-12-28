import type { SvelteComponent } from 'svelte';

interface IBreadcrumb {
  text: string;
  component: SvelteComponent;
}

interface IBreadcrumbEvent {
  text: string;
  component: SvelteComponent;
  breadcrumbs?: IBreadcrumb[];
  props: any;
}

export type { IBreadcrumb, IBreadcrumbEvent };
