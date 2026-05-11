import { FAKE_STORE_API_ORIGIN } from '@/shared/config'

export async function requestJson<T>(input: string): Promise<T> {
  const res = await fetch(input)
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`)
  }
  return res.json() as Promise<T>
}

export function fakeStorePath(path: string) {
  const normalized = path.startsWith('/') ? path : ['/', path].join('')
  return new URL(normalized, `${FAKE_STORE_API_ORIGIN}/`).toString()
}
