// 全局变量，用于存储随机数
var Guess_number_random_number;
Guess_number_random_number = "No_init";
console.log("[INFO] 试试 Guess_number(n) 吗？")

// 创建一个函数，生成指定范围内的随机整数
function Guess_number_init(min, max) {
  Guess_number_random_number = Math.floor(Math.random() * (max - min + 1)) + min;
}

// 游戏函数 - 猜数字
function Guess_number(n) {

  var numberToGuess = Guess_number_random_number; // 使用全局变量中存储的随机数

  // 判断猜测结果
  if (n < numberToGuess) {
    return '太小了，请继续猜测！';
  } else if (n > numberToGuess) {
    return '太大了，请继续猜测！';
  } else if (Guess_number_random_number === "No_init") {
    console.warn("[Game\\Guess Number] 请先使用 Guess_number_init(最小数, 最大数) 来初始化游戏！");
  } else {
    Guess_number_random_number = "No_init";
    return '恭喜，您猜对了！';
  }
}
