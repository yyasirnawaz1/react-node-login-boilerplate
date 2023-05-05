export const get = (key: string) => {
  try {
    return window?.localStorage?.getItem(key);
  } catch (err) {
    const error = err as Error | string;
    console.error(error);
    return null;
  }
};

export const set = (key: string, value: string) => {
  try {
    window?.localStorage?.setItem(key, value);
  } catch (err) {
    const error = err as Error | string;
    console.error(error);
  }
};

export const remove = (key: string) => {
  try {
    window?.localStorage?.removeItem(key);
  } catch (err) {
    const error = err as Error | string;
    console.error(error);
  }
};
