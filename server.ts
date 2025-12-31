import {createStorefrontClient} from '@shopify/hydrogen';
import {CacheShort} from '@shopify/hydrogen';

export async function getLoadContext() {
  const storefrontToken = process.env.SHOPIFY_STOREFRONT_TOKEN;
  const storefrontId = process.env.SHOPIFY_STOREFRONT_ID;

  if (!storefrontToken || !storefrontId) {
    throw new Error(
      'Missing Shopify credentials. Please set SHOPIFY_STOREFRONT_TOKEN and SHOPIFY_STOREFRONT_ID',
    );
  }

  const storefront = createStorefrontClient({
    storefrontId,
    storefrontToken,
    cache: CacheShort(),
    waitUntil: () => {},
    i18n: {
      language: 'es',
      country: 'MX',
    },
  });

  return {
    storefront,
  };
}
