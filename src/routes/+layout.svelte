<script lang="ts">
  import { theme } from './theme';
  import ThemeProvider from '$lib/ui/ThemeProvider.svelte';
</script>

<ThemeProvider theme={$theme}>
  <slot />
</ThemeProvider>
