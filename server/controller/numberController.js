export const postNumber = async (req, res) => {
  try {
    let { num1, num2 } = req.body;

    function isNumeric(value) {
      return /^\d+$/.test(value);
    }

    // validation
    if (!isNumeric(num1) || !isNumeric(num2))
      return res.send({ message: "Enter Valid Number" });
    if (!num1) return res.send({ message: "First Number is not given" });
    if (!num2) return res.send({ message: "Second Number is not given" });

    let temp;
    if (num1 < num2) {
      temp = num2;
      num2 = num1;
      num1 = temp;
    }

    const result = [];

    let carryString = "_";
    let carryNum = 0;
    let sumString = "";

    while (num1 + num2) {
      sumString = (((num1 % 10) + (num2 % 10) + carryNum) % 10) + sumString;
      carryNum = +((num1 % 10) + (num2 % 10) + carryNum > 9);
      if (num2 / 10 < 1) {
        if (carryNum) {
          sumString = carryNum + Math.floor(num1 / 10) + sumString;
        }
        result.push({ carryString: carryString, sumString: sumString });
        break;
      }
      carryString = carryNum + carryString;

      num1 = (num1 / 10) | 0;
      num2 = (num2 / 10) | 0;

      result.push({ carryString: carryString, sumString: sumString });
    }

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
