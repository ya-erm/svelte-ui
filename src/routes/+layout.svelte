<script lang="ts">
  import ThemeProvider from '$lib/ui/ThemeProvider.svelte';

  import { theme } from './theme';
</script>

<ThemeProvider theme={$theme}>
  <slot />
</ThemeProvider>
