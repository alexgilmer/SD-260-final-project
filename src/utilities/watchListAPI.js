export const getList = () => {
  return JSON.parse(localStorage.getItem('watchList')) ?? [];
};

export const setList = (list) => {
  localStorage.setItem('watchList', JSON.stringify(list));
};
