
const currentUrl = window.location.href;
const siteUrl = "https://eneszengin.github.io";
let updatedUrl = currentUrl.replace("https://eneszengin.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("en".length > 0) {
  updatedUrl = updatedUrl.replace("/en", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/en/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications grouped by type, in reverse chronological order.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "projects I have led or contributed to, most recent first.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "courses I teach.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en/teaching/";
          },
        },{id: "nav-gallery",
          title: "gallery",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en/gallery/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "education, academic and administrative experience.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en/cv/";
          },
        },{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%6E%65%73%7A%65%6E%67%69%6E@%69%74%75.%65%64%75.%74%72", "_blank");
        },
      },{
          id: 'lang-tr',
          title: 'tr',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
