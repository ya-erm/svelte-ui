import type { SvelteComponent, ComponentProps } from "svelte";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetTranslateKeys<Component extends SvelteComponent<{translate?: (key: string | any) => string | undefined}>> = Parameters<NonNullable<ComponentProps<Component>['translate']>>[0]