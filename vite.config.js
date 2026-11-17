import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { readFileSync, readdirSync, existsSync } from 'node:fs'

// SEO: saytın tam ünvanı (məs. https://arzumakademiya.az) .env.production faylında VITE_SITE_URL ilə verilir.
// Verilibsə: canonical / og:url / og:image yazılır, sitemap.xml və robots.txt yaradılır.
// Verilməyibsə: ünvana bağlı teqlər çıxarılır (səhv canonical Google-a zərər verər).
// Buraxılışdan əvvəl unudula biləcək şeylər haqqında `npm run build` zamanı xəbərdarlıq verir.
function launchChecks(site) {
  const read = (f) => (existsSync(f) ? readFileSync(f, 'utf8') : '')
  return {
    name: 'launch-checks',
    buildStart() {
      if (!site) this.warn('VITE_SITE_URL boşdur: canonical, sitemap.xml və sosial önizləmə yaranmır (.env.production yaradın, bax .env.example).')
      if (/name: ''/.test(read('src/data/staff.js'))) this.warn("src/data/staff.js: kollektivdə hələ boş ad (name: '') var, real ad və şəkillərlə doldurun.")
      if (read('src/data/contact.js').includes('// TODO: dəqiq ünvanla əvəz edin')) this.warn('src/data/contact.js: mapQuery dəqiq ünvanla əvəz olunmayıb (xəritə və yol göstərişi buna baxır).')
      const gallery = 'src/assets/gallery'
      const hasMedia = existsSync(gallery) && readdirSync(gallery, { recursive: true }).some((f) => /\.(jpe?g|png|webp|avif|gif|mp4|webm|mov|m4v)$/i.test(f))
      if (!hasMedia) this.warn('Qalereya boşdur: src/assets/gallery/<albom>/ qovluqlarına şəkil və video əlavə edin.')
    },
  }
}

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
    plugins: [react(), seoPlugin(site), launchChecks(site)],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
  }
})
