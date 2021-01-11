const hmr = (toBeSet) => {
  if (import.meta.hot) {
    import.meta.hot.accept(({ module }) => {
      toBeSet.set(get(module.themeProviders));
    });
  }
};

export { hmr };
