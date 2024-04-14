export const scrollSectionInView = (sectionName) => {
  setTimeout(() => {
    document
      .getElementById(sectionName)
      ?.scrollIntoView({ behavior: "smooth" });
  }, 400);
};
