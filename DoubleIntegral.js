const observer = new MutationObserver(() => {
  const list = [
    ...document
      .querySelector(".nextInner section")
      ?.querySelectorAll("ul > li[class]"),
  ];
  if (list.length != 0) {
    list.forEach((e) => {
      const el = e.querySelectorAll("div > div")[1];
      const text = el.innerText;
      const color = text.match(/\((#[0-9a-fA-F]{6})\)/);

      if (color) {
        el.style.color = color[1];
        el.innerText = text.replace(/\((#[0-9a-fA-F]{6})\)/, "");
      }
    });
  }
});

observer.observe(document.querySelector("body"), {
  childList: true,
  subtree: true,
});
