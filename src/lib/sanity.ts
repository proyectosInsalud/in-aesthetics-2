import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '38hfdkjh',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})
