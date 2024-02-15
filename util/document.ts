export const scrollToSection = (id: string): void => {
  if (!window.document) return;
  const section: HTMLElement | null = window.document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
