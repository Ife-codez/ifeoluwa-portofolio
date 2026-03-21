export const handleScroll = (e, id) => {
  const element = document.getElementById(id);
  if (element) {
    e.preventDefault(); // This stops the "href" from triggering a reload
    const offset = 80; 
    const elementPosition = element.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  } else {
    // If the element doesn't exist, we let the normal link behavior happen 
    // or log an error to find the typo
    console.warn(`Element with id "${id}" not found.`);
  }
};