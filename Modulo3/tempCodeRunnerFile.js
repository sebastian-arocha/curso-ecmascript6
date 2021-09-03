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