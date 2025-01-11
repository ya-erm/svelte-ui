<script lang="ts">
  import '../app.css';

  import { theme } from './theme';
  import Switch from '$lib/ui/Switch.svelte';

  import Buttons from './Buttons.svelte';
  import Colors from './Colors.svelte';
  import Inputs from './Inputs.svelte';
  import Modals from './Modals.svelte';
  import Spoilers from './Spoilers.svelte';
  import Switches from './Switches.svelte';
  import Tags from './Tags.svelte';
  import Toasts from './Toasts.svelte';
</script>

<div class="p-1">
  <h1>Theme</h1>
  <label class="flex gap-1 items-center">
    <Switch checked={$theme === 'dark'} onChange={(value) => theme.set(value ? 'dark' : 'light')} />
    <span>Dark mode</span>
  </label>
  <Colors />

  <h1>Components</h1>
  <Buttons />
  <Inputs />
  <Toasts />
  <Modals />
  <Spoilers />
  <Switches />
  <Tags />
</div>
