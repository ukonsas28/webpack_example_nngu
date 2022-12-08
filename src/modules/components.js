import { createElement, updateUserList } from "../helpers/index.js";

export const createPageWrapper = () => {
  const pageWrapper = createElement({
    elementName: "div",
    className: "wrapper",
  });

  document.body.append(pageWrapper);

  return pageWrapper;
};

export const createPageHeader = () => {
  const header = createElement(
    {
      elementName: "header",
      className: "header",
    },
    {
      children: [
        createElement({
          elementName: "img",
          src: "img/web_logo.png",
          alt: "web_logo",
        }),
        createElement({
          elementName: "h2",
          textContent: "PAGE HEADER",
        }),
      ],
    }
  );

  return header;
};

export const createPageFooter = () => {
  const header = createElement(
    {
      elementName: "footer",
      className: "footer",
    },
    {
      children: [
        createElement({
          elementName: "h2",
          textContent: "PAGE FOOTER",
        }),
      ],
    }
  );

  return header;
};

export const createPageContent = () => {
  const content = createElement(
    {
      elementName: "section",
      className: "container",
    },
    {
      children: [
        createElement(
          {
            elementName: "div",
            className: "content",
          },
          {
            children: [
              createElement({
                elementName: "h2",
                textContent: "Список пользователей",
              }),
              createElement({
                elementName: "ul",
                className: "list",
                id: "list",
              }),
              createElement({
                elementName: "button",
                type: "button",
                className: "btn",
                textContent: "Загрузить список пользователей",
                event: { type: "click", handler: updateUserList },
              }),
            ],
          }
        ),
      ],
    }
  );

  return content;
};
