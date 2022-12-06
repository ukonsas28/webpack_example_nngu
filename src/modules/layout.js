import {
  createPageWrapper,
  createPageHeader,
  createPageContent,
  createPageFooter,
} from "./components.js";

export const initLayout = () => {
  const pageWrapper = createPageWrapper();
  const header = createPageHeader();

  pageWrapper.prepend(header);
  pageWrapper.append(createPageFooter());
  header.after(createPageContent());
};
