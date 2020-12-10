interface BorderRadiusOption {
  display: string;
  value: string;
  css: string;
}

export const borderRadiusOptions: BorderRadiusOption[] = [
  { display: 'None', value: 'rounded-none', css: 'border-radius: 0px;' },
  {
    display: 'Small',
    value: 'rounded-sm',
    css: 'border-radius: 0.125rem;',
  },
  { display: 'Rounded', value: 'rounded', css: 'border-radius: 0.25rem;' },
  {
    display: 'Medium',
    value: 'rounded-md',
    css: 'border-radius: 0.375rem;',
  },
  { display: 'Large', value: 'rounded-lg', css: 'border-radius: 0.5rem;' },
  {
    display: 'Extra Large',
    value: 'rounded-xl',
    css: 'border-radius: 0.75rem;',
  },
  {
    display: 'Two Extra Large',
    value: 'rounded-2xl',
    css: 'border-radius: 1rem;',
  },
  {
    display: 'Three Extra Large',
    value: 'rounded-3xl',
    css: 'border-radius: 1.5rem;',
  },
  {
    display: 'Full',
    value: 'rounded-full',
    css: 'border-radius: 9999px;',
  },
  {
    display: 'Top None',
    value: 'rounded-t-none',
    css: 'border-top-left-radius: 0px; border-top-right-radius: 0px;',
  },
  {
    display: 'Right None',
    value: 'rounded-r-none',
    css: 'border-top-right-radius: 0px; border-bottom-right-radius: 0px;',
  },
  {
    display: 'Bottom None',
    value: 'rounded-b-none',
    css: 'border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;',
  },
  {
    display: 'Left None',
    value: 'rounded-l-none',
    css: 'border-top-left-radius: 0px; border-bottom-left-radius: 0px;',
  },
  {
    display: 'Top Small',
    value: 'rounded-t-sm',
    css: 'border-top-left-radius: 0.125rem; border-top-right-radius: 0.125rem;',
  },
  {
    display: 'Right Small',
    value: 'rounded-r-sm',
    css:
      'border-top-right-radius: 0.125rem; border-bottom-right-radius: 0.125rem;',
  },
  {
    display: 'Bottom Small',
    value: 'rounded-b-sm',
    css:
      'border-bottom-right-radius: 0.125rem; border-bottom-left-radius: 0.125rem;',
  },
  {
    display: 'Left Small',
    value: 'rounded-l-sm',
    css:
      'border-top-left-radius: 0.125rem; border-bottom-left-radius: 0.125rem;',
  },
  {
    display: 'Top',
    value: 'rounded-t',
    css: 'border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem;',
  },
  {
    display: 'Right',
    value: 'rounded-r',
    css:
      'border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem;',
  },
  {
    display: 'Bottom',
    value: 'rounded-b',
    css:
      'border-bottom-right-radius: 0.25rem; border-bottom-left-radius: 0.25rem;',
  },
  {
    display: 'Left',
    value: 'rounded-l',
    css: 'border-top-left-radius: 0.25rem; border-bottom-left-radius: 0.25rem;',
  },
  {
    display: 'Top Medium',
    value: 'rounded-t-md',
    css: 'border-top-left-radius: 0.375rem; border-top-right-radius: 0.375rem;',
  },
  {
    display: 'Right Medium',
    value: 'rounded-r-md',
    css:
      'border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;',
  },
  {
    display: 'Bottom Medium',
    value: 'rounded-b-md',
    css:
      'border-bottom-right-radius: 0.375rem; border-bottom-left-radius: 0.375rem;',
  },
  {
    display: 'Left Medium',
    value: 'rounded-l-md',
    css:
      'border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;',
  },
  {
    display: 'Top Large',
    value: 'rounded-t-lg',
    css: 'border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;',
  },
  {
    display: 'Right Large',
    value: 'rounded-r-lg',
    css: 'border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;',
  },
  {
    display: 'Bottom Large',
    value: 'rounded-b-lg',
    css:
      'border-bottom-right-radius: 0.5rem; border-bottom-left-radius: 0.5rem;',
  },
  {
    display: 'Left Large',
    value: 'rounded-l-lg',
    css: 'border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;',
  },
  {
    display: 'Top Extra Large',
    value: 'rounded-t-xl',
    css: 'border-top-left-radius: 0.75rem; border-top-right-radius: 0.75rem;',
  },
  {
    display: 'Right Extra Large',
    value: 'rounded-r-xl',
    css:
      'border-top-right-radius: 0.75rem; border-bottom-right-radius: 0.75rem;',
  },
  {
    display: 'Bottom Extra Large',
    value: 'rounded-b-xl',
    css:
      'border-bottom-right-radius: 0.75rem; border-bottom-left-radius: 0.75rem;',
  },
  {
    display: 'Left Extra Large',
    value: 'rounded-l-xl',
    css: 'border-top-left-radius: 0.75rem; border-bottom-left-radius: 0.75rem;',
  },
  {
    display: 'Top Two Extra Large',
    value: 'rounded-t-2xl',
    css: 'border-top-left-radius: 1rem; border-top-right-radius: 1rem;',
  },
  {
    display: 'Right Two Extra Large',
    value: 'rounded-r-2xl',
    css: 'border-top-right-radius: 1rem; border-bottom-right-radius: 1rem;',
  },
  {
    display: 'Bottom Two Extra Large',
    value: 'rounded-b-2xl',
    css: 'border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;',
  },
  {
    display: 'Left Two Extra Large',
    value: 'rounded-l-2xl',
    css: 'border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;',
  },
  {
    display: 'Top Three Extra Large',
    value: 'rounded-t-3xl',
    css: 'border-top-left-radius: 1.5rem; border-top-right-radius: 1.5rem;',
  },
  {
    display: 'Right Three Extra Large',
    value: 'rounded-r-3xl',
    css: 'border-top-right-radius: 1.5rem; border-bottom-right-radius: 1.5rem;',
  },
  {
    display: 'Bottom Three Extra Large',
    value: 'rounded-b-3xl',
    css:
      'border-bottom-right-radius: 1.5rem; border-bottom-left-radius: 1.5rem;',
  },
  {
    display: 'Left Three Extra Large',
    value: 'rounded-l-3xl',
    css: 'border-top-left-radius: 1.5rem; border-bottom-left-radius: 1.5rem;',
  },
  {
    display: 'Top Full',
    value: 'rounded-t-full',
    css: 'border-top-left-radius: 9999px; border-top-right-radius: 9999px;',
  },
  {
    display: 'Right Full',
    value: 'rounded-r-full',
    css: 'border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;',
  },
  {
    display: 'Bottom Full',
    value: 'rounded-b-full',
    css:
      'border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;',
  },
  {
    display: 'Left Full',
    value: 'rounded-l-full',
    css: 'border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;',
  },
  {
    display: 'Top Left None',
    value: 'rounded-tl-none',
    css: 'border-top-left-radius: 0px;',
  },
  {
    display: 'Top Right None',
    value: 'rounded-tr-none',
    css: 'border-top-right-radius: 0px;',
  },
  {
    display: 'Bottom Right None',
    value: 'rounded-br-none',
    css: 'border-bottom-right-radius: 0px;',
  },
  {
    display: 'Bottom Left None',
    value: 'rounded-bl-none',
    css: 'border-bottom-left-radius: 0px;',
  },
  {
    display: 'Top Left Small',
    value: 'rounded-tl-sm',
    css: 'border-top-left-radius: 0.125rem;',
  },
  {
    display: 'Top Right Small',
    value: 'rounded-tr-sm',
    css: 'border-top-right-radius: 0.125rem;',
  },
  {
    display: 'Bottom Right Small',
    value: 'rounded-br-sm',
    css: 'border-bottom-right-radius: 0.125rem;',
  },
  {
    display: 'Bottom Left Small',
    value: 'rounded-bl-sm',
    css: 'border-bottom-left-radius: 0.125rem;',
  },
  {
    display: 'Top Left',
    value: 'rounded-tl',
    css: 'border-top-left-radius: 0.25rem;',
  },
  {
    display: 'Top Right',
    value: 'rounded-tr',
    css: 'border-top-right-radius: 0.25rem;',
  },
  {
    display: 'Bottom Right',
    value: 'rounded-br',
    css: 'border-bottom-right-radius: 0.25rem;',
  },
  {
    display: 'Bottom Left',
    value: 'rounded-bl',
    css: 'border-bottom-left-radius: 0.25rem;',
  },
  {
    display: 'Top Left Medium',
    value: 'rounded-tl-md',
    css: 'border-top-left-radius: 0.375rem;',
  },
  {
    display: 'Top Right Medium',
    value: 'rounded-tr-md',
    css: 'border-top-right-radius: 0.375rem;',
  },
  {
    display: 'Bottom Right Medium',
    value: 'rounded-br-md',
    css: 'border-bottom-right-radius: 0.375rem;',
  },
  {
    display: 'Bottom Left Medium',
    value: 'rounded-bl-md',
    css: 'border-bottom-left-radius: 0.375rem;',
  },
  {
    display: 'Top Left Large',
    value: 'rounded-tl-lg',
    css: 'border-top-left-radius: 0.5rem;',
  },
  {
    display: 'Top Right Large',
    value: 'rounded-tr-lg',
    css: 'border-top-right-radius: 0.5rem;',
  },
  {
    display: 'Bottom Right Large',
    value: 'rounded-br-lg',
    css: 'border-bottom-right-radius: 0.5rem;',
  },
  {
    display: 'Bottom Left Large',
    value: 'rounded-bl-lg',
    css: 'border-bottom-left-radius: 0.5rem;',
  },
  {
    display: 'Top Left Extra Large',
    value: 'rounded-tl-xl',
    css: 'border-top-left-radius: 0.75rem;',
  },
  {
    display: 'Top Right Extra Large',
    value: 'rounded-tr-xl',
    css: 'border-top-right-radius: 0.75rem;',
  },
  {
    display: 'Bottom Right Extra Large',
    value: 'rounded-br-xl',
    css: 'border-bottom-right-radius: 0.75rem;',
  },
  {
    display: 'Bottom Left Extra Large',
    value: 'rounded-bl-xl',
    css: 'border-bottom-left-radius: 0.75rem;',
  },
  {
    display: 'Top Left Two Extra Large',
    value: 'rounded-tl-2xl',
    css: 'border-top-left-radius: 1rem;',
  },
  {
    display: 'Top Right Two Extra Large',
    value: 'rounded-tr-2xl',
    css: 'border-top-right-radius: 1rem;',
  },
  {
    display: 'Bottom Right Two Extra Large',
    value: 'rounded-br-2xl',
    css: 'border-bottom-right-radius: 1rem;',
  },
  {
    display: 'Bottom Left Two Extra Large',
    value: 'rounded-bl-2xl',
    css: 'border-bottom-left-radius: 1rem;',
  },
  {
    display: 'Top Left Three Extra Large',
    value: 'rounded-tl-3xl',
    css: 'border-top-left-radius: 1.5rem;',
  },
  {
    display: 'Top Right Three Extra Large',
    value: 'rounded-tr-3xl',
    css: 'border-top-right-radius: 1.5rem;',
  },
  {
    display: 'Bottom Right Three Extra Large',
    value: 'rounded-br-3xl',
    css: 'border-bottom-right-radius: 1.5rem;',
  },
  {
    display: 'Bottom Left Three Extra Large',
    value: 'rounded-bl-3xl',
    css: 'border-bottom-left-radius: 1.5rem;',
  },
  {
    display: 'Top Left Full',
    value: 'rounded-tl-full',
    css: 'border-top-left-radius: 9999px;',
  },
  {
    display: 'Top Right Full',
    value: 'rounded-tr-full',
    css: 'border-top-right-radius: 9999px;',
  },
  {
    display: 'Bottom Right Full',
    value: 'rounded-br-full',
    css: 'border-bottom-right-radius: 9999px;',
  },
  {
    display: 'Bottom Left Full',
    value: 'rounded-bl-full',
    css: 'border-bottom-left-radius: 9999px;',
  },
];
