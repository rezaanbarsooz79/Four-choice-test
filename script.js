document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const resultDiv = document.getElementById("result");
    const correctAnswersSpan = document.getElementById("correct-answers");
    const wrongAnswersSpan = document.getElementById("wrong-answers");

    submitButton.addEventListener("click", function () {
        // تعداد سوالات
        const totalQuestions = document.querySelectorAll(".question").length;
        let correctCount = 0;
        let wrongCount = 0;

        // بررسی هر سوال و پاسخ‌ها
        for (let i = 1; i <= totalQuestions; i++) {
            const questionName = "q" + i;
            const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);

            if (selectedOption) {
                const selectedValue = selectedOption.value;
                if (selectedValue === "correct") {
                    correctCount++;
                } else {
                    wrongCount++;
                }
            }
        }

        // تغییر رنگ گزینه‌ها
        const allOptions = document.querySelectorAll("input[type='radio']");
        allOptions.forEach(function (option) {
            if (option.value === "correct") {
                option.parentElement.style.color = "green";
            } else {
                option.parentElement.style.color = "red";
            }
        });

        // نمایش نتایج
        correctAnswersSpan.textContent = correctCount;
        wrongAnswersSpan.textContent = wrongCount;
        resultDiv.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const resultDiv = document.getElementById("result");
    const correctAnswersSpan = document.getElementById("correct-answers");
    const wrongAnswersSpan = document.getElementById("wrong-answers");
    const quizForm = document.getElementById("quiz-form");

    submitButton.addEventListener("click", function () {
        // تعداد سوالات
        const totalQuestions = document.querySelectorAll(".question").length;
        let correctCount = 0;
        let wrongCount = 0;

        // غیرفعال کردن تمام گزینه‌ها
        const allOptions = document.querySelectorAll("input[type='radio']");
        allOptions.forEach(function (option) {
            option.disabled = true;
        });

        // بررسی هر سوال و پاسخ‌ها
        for (let i = 1; i <= totalQuestions; i++) {
            const questionName = "q" + i;
            const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);

            if (selectedOption) {
                const selectedValue = selectedOption.value;
                if (selectedValue === "correct") {
                    correctCount++;
                } else {
                    wrongCount++;
                }
            }
        }

        // تغییر رنگ گزینه‌ها
        allOptions.forEach(function (option) {
            if (option.value === "correct") {
                option.parentElement.style.color = " #007510";
            } else {
                option.parentElement.style.color = "red";
            }
        });

        // نمایش نتایج
        correctAnswersSpan.textContent = correctCount;
        wrongAnswersSpan.textContent = wrongCount;
        resultDiv.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const questionContainers = document.querySelectorAll(".question");

    questionContainers.forEach(function (container) {
        const continerItems = Array.from(container.querySelectorAll('.continer-item'));
        shuffleArray(continerItems); // تابعی برای تصادفی کردن آرایه

        continerItems.forEach(function (item) {
            container.appendChild(item); // انتقال continer-item ها به مکان‌های تصادفی درون کانتینر سوال
        });
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // تعویض دو عنصر به صورت تصادفی
        }
    }
});

// انتخاب دکمه
const submitButton = document.getElementById('submit-button');

// تابعی برای غیرفعال کردن دکمه و تغییر رنگ به خاکستری
function disableButton() {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'gray'; // تغییر رنگ به خاکستری
}

// تنظیم تایمر برای فراخوانی تابع غیرفعال کردن دکمه بعد از یک دقیقه
setTimeout(disableButton, 13000); // 60000 میلی‌ثانیه معادل یک دقیقه است

// تایمر
let hours = 0; // تعداد ساعت‌ها
let minutes = 1; // تعداد دقیقه‌ها
let seconds = 30; // تعداد ثانیه‌ها

const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');

function updateTimer() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
    } else {
        // زمان به پایان رسیده است
        clearInterval(timerInterval);
        alert('تایمر به پایان رسید.');
    }

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    hoursSpan.textContent = formattedHours;
    minutesSpan.textContent = formattedMinutes;
    secondsSpan.textContent = formattedSeconds;
}

// تابع setInterval برای شروع تایمر
const timerInterval = setInterval(updateTimer, 1500);


