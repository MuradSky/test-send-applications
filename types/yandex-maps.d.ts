// types/yandex-maps.d.ts
export {};

declare global {
  interface Window {
    ymaps3: typeof ymaps3;
  }

  const ymaps3: typeof import('@yandex/ymaps3-types');
}
