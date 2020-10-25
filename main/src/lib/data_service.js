export const addEXP = (amt) => {
  if (window.experiencePoints <= 980) {
    window.experiencePoints += amt;
  } else {
    console.warn("okay, buddy, settle down there");
  }
};

export const init = () => {
  window.experiencePoints = 0;
};

export const hasEnough = () => {
  return window.experiencePoints >= 100;
};

export const currentEXP = () => {
  return window.experiencePoints;
};
