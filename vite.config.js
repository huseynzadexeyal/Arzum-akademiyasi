import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// SEO: saytın tam ünvanı (məs. https://arzumakademiya.az) .env.production faylında VITE_SITE_URL ilə verilir.
// Verilibsə: canonical / og:url / og:image yazılır, sitemap.xml və robots.txt yaradılır.
// Verilməyibsə: ünvana bağlı teqlər çıxarılır (səhv canonical Google-a zərər verər).
function seoPlugin(site) {
  return {
    name: 'seo',
    transformIndexHtml(html) {
      if (site) return html.replaceAll('__SITE_URL__', site)
      return html.replace(/^.*__SITE_URL__.*\n/gm, '')
    },
    generateBundle() {
      const robots = `User-agent: *\nAllow: /\n${site ? `\nSitemap: ${site}/sitemap.xml\n` : ''}`
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      if (!site) return
      const day = new Date().toISOString().slice(0, 10)
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${site}/</loc><lastmod>${day}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>
`
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const site = (env.VITE_SITE_URL || '').trim().replace(/\/+$/, '')
  return {
    plugins: [react(), seoPlugin(site)],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
  }
})
