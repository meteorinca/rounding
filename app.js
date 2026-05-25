/**
 * 🎯 ROUNDING TOOLKIT - CORE LOGIC
 * Multi-step rounding word problems for 3rd/4th grade
 */

// --- State ---
let problems = [];
let sessionCorrect = 0;
let sessionTotal = 0;

// --- Utilities ---
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// --- Problem Generation ---
function generateProblems(difficulty, count) {
  const pool = PROBLEM_DATA[difficulty];
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// --- Rendering ---
function renderQuiz() {
  const quiz = document.getElementById('quiz');
  quiz.innerHTML = '';

  problems.forEach((prob, index) => {
    const card = document.createElement('div');
    card.className = 'problem';
    card.style.animationDelay = `${index * 0.05}s`;
    card.id = `problem-${index}`;

    if (prob.type === 'round') {
      card.innerHTML = renderSimpleProblem(prob, index);
    } else {
      card.innerHTML = renderWordProblem(prob, index);
    }

    quiz.appendChild(card);

    // Attach hint toggle listeners
    const hintToggle = card.querySelector('.hint-toggle');
    if (hintToggle) {
      hintToggle.addEventListener('click', () => toggleHint(index));
    }
  });
}

function renderSimpleProblem(prob, index) {
  return `
    <div class="problem-header">
      <div class="qnum">${index + 1}</div>
      <div class="problem-text">
        <p class="question-text">${prob.question}</p>
      </div>
    </div>
    <div class="answer-section">
      <label>Your Answer:</label>
      <input type="number" class="answer-input" id="answer-${index}" placeholder="?" data-index="${index}">
    </div>
    <div class="problem-feedback" id="feedback-${index}"></div>
    <div class="hint-section">
      <button class="hint-toggle" id="hint-btn-${index}">💡 Show Hint</button>
      <div class="hint-content" id="hint-content-${index}">
        ${prob.steps.map((step, i) => `<p><strong>Hint ${i + 1}:</strong> ${step.hint}</p>`).join('')}
      </div>
    </div>
  `;
}

function renderWordProblem(prob, index) {
  return `
    <div class="problem-header">
      <div class="qnum">${index + 1}</div>
      <div class="problem-text">
        <span class="scenario-tag">📋 ${prob.scenario}</span>
        <p class="question-text">${prob.question}</p>
      </div>
    </div>
    <div class="answer-section">
      <label>Your Answer:</label>
      <input type="number" class="answer-input" id="answer-${index}" placeholder="?" data-index="${index}">
    </div>
    <div class="problem-feedback" id="feedback-${index}"></div>
    <div class="hint-section">
      <button class="hint-toggle" id="hint-btn-${index}">💡 Show Hint</button>
      <div class="hint-content" id="hint-content-${index}">
        ${prob.steps.map((step, i) => `<p><strong>Step ${i + 1}:</strong> ${step.hint}</p>`).join('')}
      </div>
    </div>
  `;
}

function toggleHint(index) {
  const content = document.getElementById(`hint-content-${index}`);
  const btn = document.getElementById(`hint-btn-${index}`);
  if (content.classList.contains('visible')) {
    content.classList.remove('visible');
    btn.textContent = '💡 Show Hint';
  } else {
    content.classList.add('visible');
    btn.textContent = '🔽 Hide Hint';
  }
}

// --- Validation ---
function checkAll() {
  let allCorrect = true;
  let correctCount = 0;

  problems.forEach((prob, index) => {
    const input = document.getElementById(`answer-${index}`);
    const feedback = document.getElementById(`feedback-${index}`);
    const userVal = parseInt(input.value);

    input.classList.remove('correct', 'wrong');

    if (isNaN(userVal) || input.value.trim() === '') {
      feedback.textContent = '⚠️ Please enter your answer.';
      feedback.style.color = 'var(--error)';
      input.classList.add('wrong');
      allCorrect = false;
      return;
    }

    if (userVal === prob.answer) {
      input.classList.add('correct');
      feedback.textContent = `✅ Correct! ${prob.explanation}`;
      feedback.style.color = 'var(--success)';
      correctCount++;
    } else {
      input.classList.add('wrong');
      // Provide targeted feedback without revealing answer
      if (userVal < prob.answer) {
        feedback.textContent = 'Your answer is too low. Did you round down when you should have rounded up? Check the digits carefully!';
      } else {
        feedback.textContent = 'Your answer is too high. Did you round up when you should have stayed the same? Check the digits carefully!';
      }
      feedback.style.color = 'var(--error)';
      allCorrect = false;
    }
  });

  sessionTotal += problems.length;
  sessionCorrect += correctCount;
  updateProgress();

  if (allCorrect) {
    showFireworks();
  } else {
    const gf = document.getElementById('globalFeedback');
    gf.textContent = `${correctCount} of ${problems.length} correct. Keep going!`;
    gf.style.color = correctCount > 0 ? 'var(--warning)' : 'var(--error)';
    gf.style.border = `2px dashed ${correctCount > 0 ? 'var(--warning)' : 'var(--error)'}`;
  }
}

// --- Progress ---
function updateProgress() {
  const pct = sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0;
  document.getElementById('progressText').textContent = `Session Score: ${sessionCorrect} / ${sessionTotal} (${pct}%)`;
  document.getElementById('progressBarFill').style.width = `${pct}%`;
}

// --- Fireworks ---
function showFireworks() {
  const overlay = document.getElementById('fireworksOverlay');
  overlay.style.display = 'flex';
  document.getElementById('fireworksMessage').textContent = '🎯 ROUNDING CHAMPION! 🎯';
  startFireworksAnimation();
}

function startFireworksAnimation() {
  const canvas = document.getElementById('fireworksCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  const colors = ['#8b5cf6', '#6366f1', '#f59e0b', '#10b981', '#ef4444',
                  '#ec4899', '#14b8a6', '#f97316', '#3b82f6', '#fbbf24'];

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.velocity = {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10
      };
      this.alpha = 1;
      this.friction = 0.94;
      this.size = Math.random() * 3 + 1;
    }
    draw() {
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    update() {
      this.velocity.x *= this.friction;
      this.velocity.y *= this.friction;
      this.velocity.y += 0.05;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.alpha -= 0.008;
    }
  }

  const overlay = document.getElementById('fireworksOverlay');

  function animate() {
    if (overlay.style.display === 'none') return;
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.12) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.6;
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 40; i++) {
        particles.push(new Particle(x, y, color));
      }
    }

    particles.forEach((p, i) => {
      if (p.alpha <= 0) {
        particles.splice(i, 1);
      } else {
        p.update();
        p.draw();
      }
    });
  }
  animate();
}

// --- New Set ---
function newSet() {
  const count = parseInt(document.getElementById('count').value);
  const difficulty = document.getElementById('difficulty').value;
  problems = generateProblems(difficulty, count);
  renderQuiz();
  document.getElementById('globalFeedback').textContent = '';
  document.getElementById('globalFeedback').style.border = '2px dashed var(--gray-300)';
  document.getElementById('globalFeedback').style.color = 'var(--gray-600)';
}

// --- Keyboard Support ---
function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      checkAll();
    }
  });
}

// --- Initialization ---
document.getElementById('btnNew').onclick = newSet;
document.getElementById('btnCheck').onclick = checkAll;

const overlay = document.getElementById('fireworksOverlay');
document.getElementById('fireworksClose').onclick = () => {
  overlay.style.display = 'none';
  newSet();
};

setupKeyboard();
updateProgress();
newSet();
