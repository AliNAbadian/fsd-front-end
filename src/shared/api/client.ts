import axios, { isAxiosError } from 'axios'
import { FAKE_STORE_API_ORIGIN } from '@/shared/config'

/** Shared Axios instance (no baseURL — use {@link fakeStorePath} or absolute URLs). */
export const http = axios.create({
  headers: { Accept: 'application/json' },
  timeout: 15_000,
})

export async function requestJson<T>(url: string): Promise<T> {
  try {
    const { data } = await http.get<T>(url)
    return data
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      const status = e.response?.status
      throw new Error(status != null ? `Request failed (${status})` : e.message)
    }
    throw e
  }
}

export function fakeStorePath(path: string) {
  const normalized = path.startsWith('/') ? path : ['/', path].join('')
  return new URL(normalized, `${FAKE_STORE_API_ORIGIN}/`).toString()
}
