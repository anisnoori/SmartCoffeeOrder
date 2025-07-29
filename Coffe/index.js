function start() {
  // مرحله ۱: ورود کاربر
  let username = prompt("نام کاربری خود را وارد کنید (admin یا user):");
  let password = prompt("رمز عبور را وارد کنید:");

  let role;
  let securityLevel;

  if ((username === "admin" || username === "user") && password === "1234") {
    if (username === "admin") {
      role = "مدیر";
      securityLevel = "بالا";
    } else {
      role = "کاربر عادی";
      securityLevel = "پایین";
    }
  } else {
    alert("نام کاربری یا رمز عبور اشتباه است! دسترسی رد شد.");
    return;
  }

  // مرحله ۲: سفارش قهوه
  let name = prompt("نام شما چیست؟");
  let age = parseInt(prompt("سن شما چند است؟"));
  let coffeeType = prompt(
    "چه نوع قهوه‌ای می‌خواهید؟ (espresso, latte, cappuccino)"
  );
  let quantity = parseInt(prompt("چند فنجان می‌خواهید؟"));

  let prices = {
    espresso: 2.5,
    latte: 3.5,
    cappuccino: 4.0,
  };

  coffeeType = coffeeType.toLowerCase();

  if (!prices[coffeeType]) {
    alert("نوع قهوه نامعتبر است!");
    return;
  }

  let pricePerCup = prices[coffeeType];
  let originalTotal = pricePerCup * quantity;

  let discount = 0;
  if (age < 18 || age > 60) {
    discount = originalTotal * 0.1;
  }

  let finalTotal = originalTotal - discount;

  // مرحله ۳: تقسیم صورتحساب و انعام
  let split = parseInt(
    prompt("صورتحساب بین چند نفر تقسیم می‌شود؟ (1, 2 یا 3)")
  );
  let tipPercent = parseInt(prompt("چند درصد انعام می‌دهید؟ (0, 5, 10 یا 15)"));

  if (![1, 2, 3].includes(split) || ![0, 5, 10, 15].includes(tipPercent)) {
    alert("ورودی نامعتبر برای تقسیم یا انعام.");
    return;
  }

  let tipAmount = (finalTotal * tipPercent) / 100;
  let totalWithTip = finalTotal + tipAmount;
  let perPerson = totalWithTip / split;

  // نمایش نتیجه نهایی
  alert(`سلام ${name}!
شما ${quantity} ${coffeeType} سفارش دادید.
مبلغ اولیه: $${originalTotal.toFixed(2)}
تخفیف: $${discount.toFixed(2)}
انعام: $${tipAmount.toFixed(2)}
مبلغ نهایی با انعام: $${totalWithTip.toFixed(2)}
سهم هر نفر از ${split} نفر: $${perPerson.toFixed(2)}
  `);
}
