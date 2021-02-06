export const getRandomNumber = () => {
  return Math.random();
};

export const checkErrors = (form) => {
  console.log('entrou');
  let keys = [];
  Object.keys(form).map((key) => {
    if (!form[key].length > 0) keys.push(key);
  });
  return keys;
};

export const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const brDate = (isoDate) => {
  let date = new Date(isoDate);
  let text = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  return text;
};
