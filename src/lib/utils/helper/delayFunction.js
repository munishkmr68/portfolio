export const delayFunction = (data) => {
  if (data % 4 === 1) {
    return 0.5;
  } else if (data % 4 == 2) {
    return 0.65;
  } else if (data % 4 == 3) {
    return 0.8;
  } else if (data % 4 == 0) {
    return 0.95;
  }
};

export const delayFunction2 = (data) => {
  if (data % 3 === 1) {
    return 0;
  } else if (data % 3 == 2) {
    return 0.65;
  } else if (data % 3 == 0) {
    return 0.8;
  }
};
