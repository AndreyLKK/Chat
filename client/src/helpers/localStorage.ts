export const saveToLocalStorage = (key: string, data: string) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string): string | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
