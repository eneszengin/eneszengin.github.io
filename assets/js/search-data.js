
const currentUrl = window.location.href;
const siteUrl = "https://eneszengin.github.io";
let updatedUrl = currentUrl.replace("https://eneszengin.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-hakkımda",
    title: "hakkımda",
    section: "Gezinme menüsü",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-yayınlar",
          title: "yayınlar",
          description: "yayınlar türüne göre, yeniden eskiye doğru sıralı.",
          section: "Gezinme menüsü",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projeler",
          title: "projeler",
          description: "yürütücü ve araştırmacı olarak yer aldığım projeler, yeniden eskiye doğru.",
          section: "Gezinme menüsü",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-dersler",
          title: "dersler",
          description: "verdiğim dersler.",
          section: "Gezinme menüsü",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-galeri",
          title: "galeri",
          description: "",
          section: "Gezinme menüsü",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "eğitim, akademik ve idari deneyim.",
          section: "Gezinme menüsü",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{
        id: 'social-email',
        title: 'E-posta gönder',
        section: 'Sosyal bağlantılar',
        handler: () => {
          window.open("mailto:%65%6E%65%73%7A%65%6E%67%69%6E@%69%74%75.%65%64%75.%74%72", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: 'Diller',
          handler: () => {
            window.location.href = "/en" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Açık temaya geç',
      description: 'Sitenin temasını açık olarak değiştir',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Koyu temaya geç',
      description: 'Sitenin temasını koyu olarak değiştir',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Sistem varsayılan temasını kullan',
      description: 'Sitenin temasını sistem varsayılanına ayarla',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
