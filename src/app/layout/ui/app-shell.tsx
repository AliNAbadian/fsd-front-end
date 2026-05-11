import { SiteHeader } from '@/widgets/site-header'
import { Outlet } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="flex min-h-svh flex-col text-left">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
