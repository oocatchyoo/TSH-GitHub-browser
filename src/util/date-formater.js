export const formatDate = (date) => {
  const theDate = new Date(date);
  const dateOptions = {
    month: 'short', day: 'numeric', year: 'numeric',
  };
  const locale = 'en';
  // for browser locale settings, set 'locale = undefined'
  const formatedDate = theDate.toLocaleDateString(locale, dateOptions);
  return formatedDate;
};
