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

var formattedPercentage = 0;

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const resultDiv = document.getElementById("result");
    const correctAnswersSpan = document.getElementById("correct-answers");
    const wrongAnswersSpan = document.getElementById("wrong-answers");
    const unansweredSpan = document.getElementById("unanswered-answers");
    const percentageScoredSpan = document.getElementById("percentageScore-answers");
    const quizForm = document.getElementById("quiz-form");

    submitButton.addEventListener("click", function () {
        // تعداد سوالات
        const totalQuestions = document.querySelectorAll(".question").length;
        let anwersCount = 35;
        let correctCount = 0;
        let wrongCount = 0;
        let unanswered = 0;

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

        // محاسبه درصد نهایی
        let correct = correctCount
        let wrong = wrongCount
        unanswered = 35 - (correct + wrong);
        let finalScore = correct - Math.floor(wrong / 3); // هر سه جواب غلط یک امتیاز منفی دارد
        let percentageScore = (finalScore / (anwersCount)) * 100;
        formattedPercentage = percentageScore.toFixed(2);
        // نمایش نتایج
        correctAnswersSpan.textContent = correctCount;
        wrongAnswersSpan.textContent = wrongCount;
        unansweredSpan.textContent = unanswered;
        percentageScoredSpan.textContent = formattedPercentage;
        resultDiv.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const drawChartButton = document.getElementById("submit-button");
    const myChart = document.getElementById("myChart");
    let chart = null;
    // formattedPercentage = 30

    drawChartButton.addEventListener("click", function () {
        // مقدار متغیر formattedPercentage

        if (chart) {
            chart.destroy(); // حذف نمودار قبلی (اگر وجود داشته باشد)
        }

        myChart.style.display = "block"; // نمایش نمودار

        const color = formattedPercentage < 0 ? "red" : "#673ab7"; // رنگ میله‌ها
        const data = [formattedPercentage];

        chart = new Chart(myChart, {
            type: "bar", // نوع نمودار (میله‌ای)
            data: {
                labels: ["درصد"],
                datasets: [
                    {
                        label: "مقدار درصد",
                        data: data,
                        backgroundColor: color,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMin: -100, // حد پایین برای مقدار منفی
                        suggestedMax: 100, // حد بالا برای مقدار مثبت
                    },
                },
            },
        });
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

// تایمر
let hours = 0; // تعداد ساعت‌ها
let minutes = 21; // تعداد دقیقه‌ها
let seconds = 0; // تعداد ثانیه‌ها
let timeOut = (seconds * 1000) + (minutes * 60 * 1000) + (hours * 60 * 60 * 1000)
setTimeout(disableButton, timeOut); // 60000 میلی‌ثانیه معادل یک دقیقه است

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
        alert('آزمون به پایان رسید موفق باشید');
    }

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    hoursSpan.textContent = formattedHours;
    minutesSpan.textContent = formattedMinutes;
    secondsSpan.textContent = formattedSeconds;
}

// تابع setInterval برای شروع تایمر
const timerInterval = setInterval(updateTimer, 1000);


//فعال شدن دکمه قبل از تموم شدن ازمون
let timeOut1 = timeOut - 500
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var button = document.getElementById("submit-button");
        button.click();
    }, timeOut1);
});


// تابع اسکرول به انتهای صفحه
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

// اضافه کردن event listener برای پایان تایمر
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var button = document.getElementById("submit-button");
        button.click();
        scrollToBottom(); // اسکرول به انتهای صفحه
    }, timeOut);
    // همچنین، اگر تایمر به پایان برسد:
    // clearInterval(timerInterval); // توقف تایمر
    // scrollToBottom(); // اسکرول به انتهای صفحه
});

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function () {
        // اسکرول به انتهای صفحه
        window.scrollTo(0, document.body.scrollHeight);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function () {
        // تغییر رنگ دکمه به خاکستری
        submitButton.style.backgroundColor = 'gray';
        submitButton.disabled = true; // غیرفعال کردن دکمه
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function () {
        // تغییر مقدار تایمر به صفر
        hours = 0;
        minutes = 0;
        seconds = 0;

        // به روز رسانی عناصر HTML برای نمایش تایمر
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        hoursSpan.textContent = formattedHours;
        minutesSpan.textContent = formattedMinutes;
        secondsSpan.textContent = formattedSeconds;

        // غیرفعال کردن دکمه
        submitButton.style.backgroundColor = 'gray';
        submitButton.disabled = true;
    });
});
//امنیت
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // جلوگیری از نمایش منوی مرورگر
});

document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault(); // جلوگیری از اجرای کلید "F12"
    }
});

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.shiftKey || e.altKey || (e.key && e.key.toLowerCase() === "u")) {
        e.preventDefault(); // جلوگیری از کارکرد کلیدهای میانبر مرورگر (Ctrl+U، Shift+U، Alt+U)
    }
});

document.getElementById('submit-button').addEventListener('click', function () {
    // غیرفعال کردن هاور دکمه
    var button = document.getElementById('submit-button');
    button.style.pointerEvents = 'none';
    setTimeout(function () {
        button.style.pointerEvents = 'auto';
    }, 2000000);
});
