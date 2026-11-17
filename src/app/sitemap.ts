import type { MetadataRoute } from 'next'
import { siteUrl } from './site'

// Single-page site, so the home page is the only entry
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, changeFrequency: 'monthly', priority: 1 }]
}
