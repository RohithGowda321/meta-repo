// meta.js
const metaTags = [
    { name: "description", content: "This app provides end-to-end information about the Global Coffee Industry" },
    { property: "og:title", content: "www.coffeeweb.com" },
    { property: "og:description", content: "This app provides end-to-end information about the Global Coffee Industry" },
    { property: "og:url", content: "www.coffeeweb.com" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeeweb_menu_icons/CoffeeWeb_Logo_White_Background_Blue_Text.png" }
  ];
  
  metaTags.forEach(tag => {
    const meta = document.createElement('meta');
    Object.keys(tag).forEach(key => meta.setAttribute(key, tag[key]));
    document.head.appendChild(meta);
  });
  
