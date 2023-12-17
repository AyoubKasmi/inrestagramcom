export default function sitemap() {
    return [
      {
        url: 'https://www.inrestagram.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://www.inrestagram.com/#features',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.9,
      },
      {
        url: 'https://www.inrestagram.com/#about',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.9,
      },
      {
        url: 'https://www.inrestagram.com/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.9,
      },
    ]
  }