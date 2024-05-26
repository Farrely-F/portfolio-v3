export const removeHash = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  const href = event.currentTarget.href;
  const hashIndex = href.indexOf("#");

  if (hashIndex !== -1) {
    const id = href.slice(hashIndex + 1);
    const element = document.getElementById(id);

    element && element.scrollIntoView({ behavior: "smooth" });
  }
};
