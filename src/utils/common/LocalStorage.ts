export const SaveToLoalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.log(err);
  }
};

export const LoadFromLocalStorage = (key: string): void => {
  try {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData === null) {
      return undefined;
    }
    return JSON.parse(localStorageData);
  } catch (err) {
    console.log(err);
  }
};
