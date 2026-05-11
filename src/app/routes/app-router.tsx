import { AppShell } from '@/app/layout'
import { CartPage } from '@/pages/cart'
import { CatalogPage } from '@/pages/catalog'
import { ProductDetailPage } from '@/pages/product-detail'
import { Navigate, Route, Routes } from 'react-router-dom'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<CatalogPage />} />
        <Route path="product/:productId" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
