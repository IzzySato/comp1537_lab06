const validatedStars = (val, options = {}) => {
  const {
    maxStars = 5,
    defaultValue = 0,
  } = options;

  if (typeof val === 'number' && val > 0) {
    return (val > maxStars) ? maxStars : val;
  }
  return defaultValue;
};
const isNullOrEmpty = (text) => (text === null || text === '');

const validatedName = (name, defaultName = 'Jane Doe') => (isNullOrEmpty(name)) ? defaultName : name;

const today = new Date().toLocaleDateString();

const validatedDate = (date) => (isNullOrEmpty(date)) ? today : date;

const validatedText = (text, defaultComment = 'no comments') => (isNullOrEmpty(text)) ? defaultComment : text;

export {
  validatedStars, validatedName, validatedDate, validatedText
};
