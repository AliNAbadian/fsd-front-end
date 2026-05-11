/** Public, build-time safe constants (no secrets). */
export const FAKE_STORE_API_ORIGIN = 'https://fakestoreapi.com'

/**
 * Product catalog uses local fixtures unless you set `VITE_USE_FAKESTORE_API=true`
 * (see `.env` / environment for Vite).
 */
export const USE_MOCK_PRODUCT_API = import.meta.env.VITE_USE_FAKESTORE_API !== 'true'
