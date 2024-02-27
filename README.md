# Nuxt 3 Minimal Starter

## Build and Deploy on cloud provider

Change build command from `nuxt build` to `npx prisma generate && nuxt build`

## Development Server

Different types of dev server:

```bash
# simple dev server
bun dev

# dev server available on your local network
bun host

# dev server with local tunnel
bun tunnel
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Performance

```vue
<NuxtLazyHydrate when-idle>
  <AppComp>Runs when the main thread work is done and the browser goes idle. Not supported in Safari.</AppComp>
</NuxtLazyHydrate>

<NuxtLazyHydrate :on-interaction="['click', 'touchstart']">
  <AppComp>Runs only after interacts with a component in a certain way.</AppComp>
</NuxtLazyHydrate>

<NuxtLazyHydrate when-triggered="triggerHydration">
  <AppComp>Allows to bind a custom function that returns a boolean reactive value.</AppComp>
</NuxtLazyHydrate>

<NuxtLazyHydrate when-visible>
  <AppComp>Hydrates the component when it appears in the viewport.</AppComp>
</NuxtLazyHydrate>

<NuxtLazyHydrate>
  <AppComp>For never hydrate.</AppComp>
</NuxtLazyHydrate>

<NuxtLazyHydrate>
  <AppComp>For never hydrate</AppComp>
</NuxtLazyHydrate>
```
