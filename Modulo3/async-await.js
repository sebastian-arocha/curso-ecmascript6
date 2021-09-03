const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("Hello World!"), 3000)
      : reject(new Error("Test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();

const makingBurgers = (money) => {
  return new Promise((resolve, reject) => {
    if (money === 1) {
      console.log("We are preparing your burger");
      setTimeout(() => resolve("Here's your order"), 5000);
    } else if (money === 2) {
      console.log("We are preparing two burgers for u and ur gf.");
      setTimeout(() => resolve("Here's your order, enjoy it!"), 10000);
    } else {
      reject("Sorry! Come back soon!");
    }
  });
};

const burgersOrder = async (money) => {
  try {
    const result = await makingBurgers(money);
    console.log(result);
  } catch (reject) {
    console.log(reject);
  }
};

burgersOrder(0);
