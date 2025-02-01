<script lang="ts">
  export let checked: boolean = false;
  export let onChange: ((checked: boolean) => void) | null = null;

  const handleChange = (e: Event) => {
    checked = (e.target as HTMLInputElement).checked;
    onChange?.(checked);
  };
</script>

<label class="switch" class:active={checked}>
  <input class="checkbox" type="checkbox" {checked} on:change={handleChange} />
  <div class="indicator"></div>
  <div class="outline"></div>
</label>

<style>
  .switch {
    position: relative;
    width: 42px;
    height: 28px;
    background-color: var(--border-color);
    border-radius: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 2px;
  }
  .switch.active {
    background-color: var(--active-color);
  }
  input.checkbox {
    position: absolute;
    width: 0;
    height: 0;
  }
  input.checkbox:checked + .indicator {
    transform: translate(14px);
  }
  input:focus-visible + * + .outline {
    outline: 2px solid var(--active-color);
    outline-offset: 2px;
  }
  .indicator {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--white-color);
    transition: all 0.25s ease-in-out;
  }
  .outline {
    position: absolute;
    border-radius: 14px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
</style>
