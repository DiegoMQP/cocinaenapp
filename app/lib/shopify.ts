import {CacheSeconds, createStorefrontClient} from '@shopify/hydrogen';

export function createShopifyClient({
  storefrontToken,
  storefrontId,
}: {
  storefrontToken: string;
  storefrontId: string;
}) {
  return createStorefrontClient({
    cache: CacheSeconds(),
    waitUntil: () => {},
    i18n: {language: 'es', country: 'MX'},
    storefrontId,
    storefrontToken,
    publicStorefrontId: storefrontId,
  });
}
