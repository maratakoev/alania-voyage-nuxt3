export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt'
  ],
  app: {
    head: {
      title: 'Яблоко Нартов - туры под ключ, экскурсии, проживание в Осетии',
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Организуем отдых в Осетии: туры под ключ, экскурсии, проживание, трансфер и сопровождение. Индивидуальные и групповые маршруты.' },
        { name: 'keywords', content: 'Отдых, горы, Осетия, гид, экскурсии, Владикавказ, Осетины, Фиагдон, Дигория, Мамисон, Даргавс' },
        { name: 'author', content: 'Яблоко Нартов - туроператор' },
        { property: 'og:title', content: 'Яблоко Нартов — отдых в Осетии под ключ' },
        { property: 'og:description', content: 'Туры, экскурсии и проживание в Осетии. Индивидуальный подход и сопровождение.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:url', content: 'https://example.com' },
        { property: 'og:image', content: 'https://example.com/image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      script: [
        {
          src: 'https://mc.yandex.ru/metrika/tag.js',
          defer: true
        }
      ]
  
    }
  }
})
