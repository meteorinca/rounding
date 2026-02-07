function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundToPlace(value, place) {
  if (place >= 1) return Math.round(value / place) * place;
  const factor = 1 / place;
  return Math.round(value * factor) / factor;
}

function formatNumber(value, place) {
  const isDecimal = place < 1;
  if (!isDecimal) return String(value);
  const decimals = Math.round(Math.log10(1 / place));
  return value.toFixed(decimals);
}

function parseNumber(text) {
  const t = String(text).trim();
  if (!/^[-+]?\d*(\.\d+)?$/.test(t) || t === "" || t === ".") return null;
  return Number(t);
}

const PLACES = {
  ten: { label: "Nearest ten", place: 10 },
  hundred: { label: "Nearest hundred", place: 100 },
  thousand: { label: "Nearest thousand", place: 1000 },
  tenth: { label: "Nearest tenth", place: 0.1 },
  hundredth: { label: "Nearest hundredth", place: 0.01 },
  thousandth: { label: "Nearest thousandth", place: 0.001 }
};

function makeNumberForPlace(place) {
  if (place >= 1) {
    const max = place * randInt(3, 12);
    const min = place * randInt(1, 5);
    return randInt(min, max) + randInt(1, place - 1);
  }
  // decimals
  const whole = randInt(1, 999);
  const decimals = Math.round(Math.log10(1 / place)) + 1; // extra digit to decide rounding
  const frac = randInt(0, Math.pow(10, decimals) - 1)
    .toString()
    .padStart(decimals, "0");
  return Number(`${whole}.${frac}`);
}

function buildProblem(index, placeKey) {
  const info = PLACES[placeKey];
  const value = makeNumberForPlace(info.place);
  const expected = roundToPlace(value, info.place);

  const wrapper = document.createElement("div");
  wrapper.className = "problem";
  wrapper.dataset.expected = String(expected);
  wrapper.dataset.place = String(info.place);

  const top = document.createElement("div");
  top.className = "problem-top";

  const qnum = document.createElement("div");
  qnum.className = "qnum";
  qnum.textContent = `${index}.`;

  const prompt = document.createElement("div");
  prompt.className = "prompt";
  prompt.textContent = `Round ${formatNumber(value, info.place)} to the ${info.label.toLowerCase()}.`;

  top.appendChild(qnum);
  top.appendChild(prompt);

  const main = document.createElement("div");
  main.className = "problem-main";

  const panel = document.createElement("div");
  panel.className = "panel";

  const label = document.createElement("h3");
  label.textContent = "Your Answer";

  const answerRow = document.createElement("div");
  answerRow.className = "answerRow";

  const input = document.createElement("input");
  input.type = "text";
  input.inputMode = "decimal";
  input.placeholder = "rounded value";

  const btnHint = document.createElement("button");
  btnHint.type = "button";
  btnHint.className = "smallBtn";
  btnHint.textContent = "Hint";

  const qfb = document.createElement("div");
  qfb.className = "qfeedback";

  const clearMarks = () => {
    input.classList.remove("correct", "wrong");
    qfb.textContent = "";
    qfb.style.color = "";
  };

  input.addEventListener("input", clearMarks);

  btnHint.addEventListener("click", () => {
    qfb.textContent = `Look at the digit to the right of the ${info.label.toLowerCase().replace("nearest ", "")}.`;
    qfb.style.color = "#6b7280";
  });

  answerRow.appendChild(input);
  answerRow.appendChild(btnHint);

  panel.appendChild(label);
  panel.appendChild(answerRow);
  panel.appendChild(qfb);

  main.appendChild(panel);

  wrapper.appendChild(top);
  wrapper.appendChild(main);

  return wrapper;
}

function newSet() {
  const quiz = document.getElementById("quiz");
  const globalFeedback = document.getElementById("globalFeedback");
  quiz.innerHTML = "";
  globalFeedback.textContent = "";
  globalFeedback.style.color = "";

  const count = parseInt(document.getElementById("count").value, 10);
  const place = document.getElementById("place").value;
  const keys = Object.keys(PLACES);

  for (let i = 1; i <= count; i++) {
    const key = place === "mixed" ? keys[randInt(0, keys.length - 1)] : place;
    quiz.appendChild(buildProblem(i, key));
  }
}

function checkAll() {
  const rows = document.querySelectorAll(".problem");
  const globalFeedback = document.getElementById("globalFeedback");
  let allCorrect = true;

  rows.forEach(row => {
    const expected = Number(row.dataset.expected);
    const place = Number(row.dataset.place);
    const input = row.querySelector("input");
    const qfb = row.querySelector(".qfeedback");
    const user = parseNumber(input.value);

    if (user === null) {
      input.classList.add("wrong");
      qfb.textContent = "Enter a number";
      qfb.style.color = "#e74c3c";
      allCorrect = false;
      return;
    }

    const formattedExpected = Number(formatNumber(expected, place));
    const ok = Math.abs(user - formattedExpected) < 1e-9;

    if (ok) {
      input.classList.remove("wrong");
      input.classList.add("correct");
      qfb.textContent = "✅ Correct";
      qfb.style.color = "#27ae60";
    } else {
      input.classList.remove("correct");
      input.classList.add("wrong");
      qfb.textContent = `Not quite. Rounded value is ${formatNumber(expected, place)}.`;
      qfb.style.color = "#e74c3c";
      allCorrect = false;
    }
  });

  if (allCorrect) {
    globalFeedback.textContent = "🌟 Nailed it. Every answer is correct.";
    globalFeedback.style.color = "#27ae60";
  } else {
    globalFeedback.textContent = "Some are off. Fix the red ones and check again.";
    globalFeedback.style.color = "#e74c3c";
  }
}

function setupMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const infoPanel = document.getElementById("infoPanel");
  const closeBtn = document.getElementById("closeBtn");

  const open = () => {
    infoPanel.classList.add("open");
    infoPanel.setAttribute("aria-hidden", "false");
  };

  const close = () => {
    infoPanel.classList.remove("open");
    infoPanel.setAttribute("aria-hidden", "true");
  };

  menuBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

document.getElementById("btnNew").addEventListener("click", newSet);
document.getElementById("btnCheck").addEventListener("click", checkAll);

setupMenu();
newSet();
