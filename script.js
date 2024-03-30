document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    if (link.href && link.href.startsWith("http")) {
      const faviconUrl = new URL(`/favicon.png`, link.href).toString();
      const img = document.createElement("img");
      img.src = faviconUrl;
      img.width = 16;
      img.height = 16;

      const space = document.createTextNode(" ");

      link.insertBefore(img, link.firstChild);
      link.insertBefore(space, img.nextSibling);
    }
  });
});
