# Meine Nächste Doku

Discover new documentary episodes from the ZDF Mediathek. Filter by category and genre to find your next watch.

## Tech Stack

Vue 3 · TypeScript · Vite · Tailwind CSS · Pinia · vue-i18n

## Setup

```sh
npm install
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server                    |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview production build            |
| `npm run lint`    | Lint and fix                        |

## Project Structure

The app is organized around stores as the central state layer. Views and components consume stores directly.

```
src/
├── components/       # Reusable Vue components
├── views/            # Page-level components
├── stores/           # Pinia state management
│   ├── episodes_store/   # Episode fetching and state
│   └── filterStore/      # Category/genre filter state
├── i18n/             # Internationalization
└── lib/              # Shared utilities
```

**Stores** hold reactive state and perform data fetching. Each store typically has:

- **State** — Typed reactive state (e.g. `EpisodesState`, `FilterState`)
- **Actions** — Mutations and async operations (e.g. `getNewEpisodes`, `updateSelectedCategories`)
- **Getters** — Derived values (e.g. `getSelectedGenres`)

Views and components use stores via `useEpisodesStore()` and `useFilterStore()`. There are no separate domain, data, or repository layers — stores encapsulate both state and API access.

## Data Handling

Episodes are fetched directly from the ZDF Mediathek. This is an unofficial, open-source project and not affiliated with ZDF.

## Vue Component Style Guide

### Component Documentation Block

For non-trivial components, add a `<script lang="ts">` block **before** `<script setup>` with a JSDoc comment describing the component's purpose. Use `export default {};` to satisfy Vue's single-root component requirement.

```vue
<script lang="ts">
/**
 * MyComponent
 *
 * Brief description of what the component does.
 *
 * Sections, responsibilities, or notable behavior can be
 * listed here as bullet points or paragraphs.
 */
export default {}
</script>

<script setup lang="ts">
// ...
</script>
```

### `<script setup>` Block Order

1. **Imports** — external libraries, `@/core/...`, `@/features/...`, then relative imports
2. **i18n** — `const { t } = i18n.global`
3. **Props and emits** — `defineProps`, `defineEmits`
4. **Store instantiation** — `const xStore = useXStore()`
5. **Reactive state and composables** — `ref`, `computed`, `reactive`, `useX()`
6. **Functions and event handlers**
7. **Top-level imperative logic** — initial data loads, `$subscribe` calls
8. **Lifecycle hooks** — `onMounted`, `onUnmounted`, etc.
