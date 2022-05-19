export const schuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
