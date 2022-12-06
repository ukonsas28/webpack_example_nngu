export const createElement = (params, childrenParams) => {
  try {
    if (params && typeof params === "object") {
      const { elementName, event, ...restParams } = params;

      const element = document.createElement(elementName);

      Object.entries(restParams).forEach(
        ([key, value]) => (element[key] = value)
      );

      if (childrenParams && typeof childrenParams === "object") {
        try {
          const { children, position = "append" } = childrenParams;

          children.forEach((el) => element[position](el));
        } catch (e) {
          throw e;
        }
      }

      if (event && typeof event === "object") {
        element.addEventListener(event.type, event.handler);
      }

      return element;
    }
  } catch (e) {
    throw e;
  }
};

const getUsersData = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await result.json();

    return userData;
  } catch (e) {
    throw e;
  }
};

export const updateUserList = async function () {
  const list = document.getElementById("list");
  const userData = await getUsersData();

  userData.forEach((el) => {
    list.append(
      createElement(
        {
          elementName: "li",
          className: "list_item",
        },
        {
          children: [
            createElement({
              elementName: "span",
              textContent: el.name,
            }),
            createElement({
              elementName: "p",
              textContent: el.email,
            }),
          ],
        }
      )
    );
  });

  this.disabled = true;
};
