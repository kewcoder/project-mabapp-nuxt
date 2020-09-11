
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  pwa: {
    meta: {
      title: 'Aplikasi Maba - Sosial Media Mahasiswa Baru',
      author: 'Ari Bahtiar',
    },
    manifest: {
      name: 'Maba - Sosial Media',
      lang: 'id',
      theme_color: '#EDF2F7',
      start_url: "/",
      description: "Aplikasi Sosial Media Mahasiswa Baru, Mahasiswa Aktif Maupun Alumni, dengan berbagai fitur yang menarik"
    }
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Aplikasi Maba - Sosial Media Mahasiswa Baru',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Aplikasi Maba - Sosial Media Mahasiswa Baru, Mahasiswa Aktif Maupun Alumni, dengan berbagai fitur yang menarik" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/v-touch',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        locales: ['en','id','sd'],
        defaultLocale: 'id',
        vueI18n: {
          fallbackLocale: 'id',
          messages: {
            en: {
              welcome: 'Welcome College students!',
              loginwith: 'Login With',
              tos: 'Terms of Service and Privacy Policy',
              selectLang: 'Select Leanguage',
              primaryColor: 'Primary Color',
              BackgroundTheme: 'Background Theme',
              Done: 'Done',
              Settings: 'Settings',
              light: 'Light',
              blue: 'Blue',
              dark: 'Dark',
              Home: 'Home',
              search: 'search',
              Group: 'Group',
              Notif: 'Notif',
              Profile: 'Profile',
              Explore: 'Explore',
            },
            id: {
              welcome: 'Selamat Datang Mahasiswa!',
              loginwith: 'Masuk dengan',
              tos: 'Ketentuan Layanan dan Kebijakan Privasi',
              selectLang: 'Pilih Bahasa',
              primaryColor: 'Warna Primer',
              BackgroundTheme: 'Tema Latar Belakang',
              Done: 'Selesai',
              Settings: 'Pengaturan',
              light: 'Terang',
              blue: 'Biru',
              dark: 'Gelap',
              Home: 'Beranda',
              search: 'Cari',
              Group: 'Group',
              Notif: 'Notif',
              Profile: 'Profile',
              Explore: 'Jelajahi',

            },
            sd: {
              welcome: 'Wilujeng Sumping Mahasiswa!',
              loginwith: 'Login Kalayan',
              tos: 'Sarat Service jeung Sarat jeung Kaayaan Pamakéan',
              selectLang: 'Pilih Bahasa',
              primaryColor: 'Warna Primér',
              BackgroundTheme: 'Téma latar',
              Done: 'Rengse',
              Settings: 'Setélan',
              light: 'Caang',
              blue: 'Biru',
              dark: 'Poek',
              Home: 'Beranda',
              search: 'Cari',
              Group: 'Group',
              Notif: 'Notif',
              Profile: 'Profile',
              Explore: 'Jelajah',
              
            }
          }
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
 axios: {
    baseURL: process.env.BASE_URL,
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    storageUrl: process.env.STORAGE_URL
  }
}
