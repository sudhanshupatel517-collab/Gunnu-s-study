// State management
let state = {
  currentTheme: 'light',
  currentSubjectId: 'political_science',
  currentBookId: null,
  currentChapterId: null,
  completedChapters: [], // Array of chapter IDs
  flashcardIndex: 0,
  quizQuestionIndex: 0,
  quizScore: 0,
  quizAnswers: [], // To track user answers per question
  isQuizAnswered: false,
  // Timer states
  timerSecondsLeft: 25 * 60,
  timerInterval: null,
  timerMode: 'focus', // 'focus' or 'break'
  isTimerRunning: false
};

const elements = {
  // Theme Toggle
  themeToggle: document.getElementById('theme-toggle'),
  themeIcon: document.querySelector('#theme-toggle i'),
  
  // Navigation Links
  logo: document.getElementById('nav-logo'),
  navDashboardLink: document.getElementById('nav-dashboard-link'),
  navPolSciLink: document.getElementById('nav-polsci-link'),
  
  // Views
  viewDashboard: document.getElementById('view-dashboard'),
  viewSubject: document.getElementById('view-subject'),
  viewChapter: document.getElementById('view-chapter'),
  
  // Dashboard & Search
  dashboardSearch: document.getElementById('dashboard-search'),
  subjectCardPolsci: document.getElementById('subject-card-polsci'),
  dashboardPolsciProgress: document.getElementById('dashboard-polsci-progress'),
  
  // Subject Detail View
  btnBackToDashboard: document.getElementById('btn-back-to-dashboard'),
  subjectViewTitle: document.getElementById('subject-view-title'),
  subjectViewDesc: document.getElementById('subject-view-desc'),
  book1Chapters: document.getElementById('book1-chapters'),
  book2Chapters: document.getElementById('book2-chapters'),
  subjectProgressBar: document.getElementById('subject-progress-bar'),
  subjectProgressText: document.getElementById('subject-progress-text'),
  
  // Study Panel Detail View
  btnBackToSubject: document.getElementById('btn-back-to-subject'),
  sidebarChaptersList: document.getElementById('sidebar-chapters-list'),
  studyChapterNumber: document.getElementById('study-chapter-number'),
  studyChapterTitle: document.getElementById('study-chapter-title'),
  btnToggleComplete: document.getElementById('btn-toggle-complete'),
  completeIcon: document.getElementById('complete-icon'),
  completeText: document.getElementById('complete-text'),
  tabButtons: document.querySelectorAll('.tab-btn'),
  studyContentPanels: document.querySelectorAll('.study-content-panel'),
  
  // Notes
  notesContent: document.getElementById('notes-content'),
  
  // Flashcards
  flashcardElement: document.getElementById('flashcard-element'),
  flashcardQuestion: document.getElementById('flashcard-question'),
  flashcardAnswer: document.getElementById('flashcard-answer'),
  btnPrevCard: document.getElementById('btn-prev-card'),
  btnNextCard: document.getElementById('btn-next-card'),
  flashcardCounterText: document.getElementById('flashcard-counter-text'),
  
  // Quiz
  quizQuestionView: document.getElementById('quiz-question-view'),
  quizResultsView: document.getElementById('quiz-results-view'),
  quizProgressFill: document.getElementById('quiz-progress-fill'),
  quizQuestionText: document.getElementById('quiz-question-text'),
  quizOptionsList: document.getElementById('quiz-options-list'),
  quizFeedbackBox: document.getElementById('quiz-feedback-box'),
  quizFeedbackTitle: document.getElementById('quiz-feedback-title'),
  quizFeedbackExplanation: document.getElementById('quiz-feedback-explanation'),
  btnNextQuestion: document.getElementById('btn-next-question'),
  resultsScoreText: document.getElementById('results-score-text'),
  resultsTotalText: document.getElementById('results-total-text'),
  resultsHeadline: document.getElementById('results-headline'),
  resultsMessage: document.getElementById('results-message'),
  btnResetQuiz: document.getElementById('btn-reset-quiz'),
  
  // Efficiency Additions
  btnReadAloud: document.getElementById('btn-read-aloud'),
  btnToggleTimer: document.getElementById('btn-toggle-timer'),
  pomodoroWidget: document.getElementById('pomodoro-widget'),
  timerDisplay: document.getElementById('timer-display'),
  btnTimerPlay: document.getElementById('btn-timer-play'),
  btnTimerPause: document.getElementById('btn-timer-pause'),
  btnTimerReset: document.getElementById('btn-timer-reset'),
  timerModeText: document.getElementById('timer-mode'),
  btnPrintPdf: document.getElementById('btn-print-pdf')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLocalStorage();
  renderDashboardProgress();
  setupEventListeners();
  setupSearch();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
}

function setTheme(theme) {
  state.currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  if (theme === 'dark') {
    elements.themeIcon.className = 'fa-solid fa-sun';
  } else {
    elements.themeIcon.className = 'fa-solid fa-moon';
  }
}

// Local Storage for Progress tracking
function initLocalStorage() {
  const savedProgress = localStorage.getItem('completed_chapters');
  if (savedProgress) {
    state.completedChapters = JSON.parse(savedProgress);
  } else {
    state.completedChapters = [];
    localStorage.setItem('completed_chapters', JSON.stringify([]));
  }
}

function toggleChapterCompletion(chapterId) {
  const index = state.completedChapters.indexOf(chapterId);
  if (index === -1) {
    state.completedChapters.push(chapterId);
  } else {
    state.completedChapters.splice(index, 1);
  }
  localStorage.setItem('completed_chapters', JSON.stringify(state.completedChapters));
  
  // Refresh UI
  renderDashboardProgress();
  updateSubjectProgress();
  updateChapterCompleteButton(chapterId);
  
  // If we are in the subject view, re-render the list of chapters to update the checkmarks
  if (elements.viewSubject.style.display !== 'none') {
    renderSubjectChapters();
  }
  
  // Re-render sidebar in chapter view if active
  if (elements.viewChapter.style.display !== 'none' && state.currentBookId) {
    const subject = STUDY_DATA.subjects[state.currentSubjectId];
    const book = subject.books.find(b => b.id === state.currentBookId);
    if (book) {
      renderSidebarMenu(book, state.currentChapterId);
    }
  }
}


function renderDashboardProgress() {
  const subject = STUDY_DATA.subjects[state.currentSubjectId];
  let totalChapters = 0;
  subject.books.forEach(book => {
    totalChapters += book.chapters.length;
  });
  
  let completedCount = 0;
  subject.books.forEach(book => {
    book.chapters.forEach(ch => {
      if (state.completedChapters.includes(ch.id)) {
        completedCount++;
      }
    });
  });
  
  const percentage = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;
  elements.dashboardPolsciProgress.innerHTML = `<i class="fa-solid ${percentage === 100 ? 'fa-circle-check' : 'fa-circle-notch'}"></i> ${percentage}% Completed`;
  if (percentage === 100) {
    elements.dashboardPolsciProgress.className = 'completion-status status-completed';
  } else {
    elements.dashboardPolsciProgress.className = 'completion-status status-unread';
  }
}

function updateSubjectProgress() {
  const subject = STUDY_DATA.subjects[state.currentSubjectId];
  let totalChapters = 0;
  let completedCount = 0;
  
  subject.books.forEach(book => {
    totalChapters += book.chapters.length;
    book.chapters.forEach(ch => {
      if (state.completedChapters.includes(ch.id)) {
        completedCount++;
      }
    });
  });
  
  const percentage = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;
  elements.subjectProgressBar.style.width = `${percentage}%`;
  elements.subjectProgressText.textContent = `${completedCount}/${totalChapters} Chapters (${percentage}%)`;
}

function updateChapterCompleteButton(chapterId) {
  const isCompleted = state.completedChapters.includes(chapterId);
  if (isCompleted) {
    elements.btnToggleComplete.classList.add('completed');
    elements.completeIcon.className = 'fa-solid fa-square-check';
    elements.completeText.textContent = 'Completed';
  } else {
    elements.btnToggleComplete.classList.remove('completed');
    elements.completeIcon.className = 'fa-regular fa-square';
    elements.completeText.textContent = 'Mark Completed';
  }
}

// Router/View Swapper
function showView(viewId) {
  elements.viewDashboard.style.display = 'none';
  elements.viewSubject.style.display = 'none';
  elements.viewChapter.style.display = 'none';
  
  elements.navDashboardLink.classList.remove('active');
  elements.navPolSciLink.classList.remove('active');
  
  // Manage text-to-speech cancel
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    if (elements.btnReadAloud) {
      elements.btnReadAloud.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      elements.btnReadAloud.classList.remove('active');
    }
  }
  
  if (viewId === 'dashboard') {
    elements.viewDashboard.style.display = 'block';
    elements.navDashboardLink.classList.add('active');
    renderDashboardProgress();
    if (elements.btnReadAloud) elements.btnReadAloud.style.display = 'none';
  } else if (viewId === 'subject') {
    elements.viewSubject.style.display = 'block';
    elements.navPolSciLink.classList.add('active');
    updateSubjectProgress();
    renderSubjectChapters();
    if (elements.btnReadAloud) elements.btnReadAloud.style.display = 'none';
  } else if (viewId === 'chapter') {
    elements.viewChapter.style.display = 'block';
    if (elements.btnReadAloud) {
      const activeTab = document.querySelector('.tab-btn.active');
      if (activeTab && activeTab.dataset.tab === 'notes') {
        elements.btnReadAloud.style.display = 'inline-flex';
      } else {
        elements.btnReadAloud.style.display = 'none';
      }
    }
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners Setup
function setupEventListeners() {
  // Theme Toggle
  elements.themeToggle.addEventListener('click', () => {
    const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });
  
  // Navbar navigation
  elements.logo.addEventListener('click', (e) => {
    e.preventDefault();
    showView('dashboard');
  });
  elements.navDashboardLink.addEventListener('click', (e) => {
    e.preventDefault();
    showView('dashboard');
  });
  elements.navPolSciLink.addEventListener('click', (e) => {
    e.preventDefault();
    showView('subject');
  });
  
  // Dashboard Interactions
  elements.subjectCardPolsci.addEventListener('click', () => {
    showView('subject');
  });
  
  // Subject Detail Navigation
  elements.btnBackToDashboard.addEventListener('click', () => {
    showView('dashboard');
  });
  elements.btnBackToSubject.addEventListener('click', () => {
    showView('subject');
  });
  
  // Toggle complete within Study Workspace
  elements.btnToggleComplete.addEventListener('click', () => {
    if (state.currentChapterId) {
      toggleChapterCompletion(state.currentChapterId);
    }
  });
  
  // Study Modes Tabs Toggle
  elements.tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      // Toggle active tab buttons
      elements.tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Toggle active content panel
      elements.studyContentPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `panel-${targetTab}`) {
          panel.classList.add('active');
        }
      });
      
      // Specific tab switch events
      if (targetTab === 'flashcards') {
        resetFlashcardMode();
      } else if (targetTab === 'quiz') {
        resetQuizMode();
      }
      
      if (elements.btnReadAloud) {
        if (targetTab === 'notes') {
          elements.btnReadAloud.style.display = 'inline-flex';
        } else {
          elements.btnReadAloud.style.display = 'none';
          if (window.speechSynthesis && window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            elements.btnReadAloud.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            elements.btnReadAloud.classList.remove('active');
          }
        }
      }});
  });
  
  // Flashcard interactions
  elements.flashcardElement.addEventListener('click', () => {
    elements.flashcardElement.classList.toggle('flipped');
  });
  
  elements.btnPrevCard.addEventListener('click', (e) => {
    e.stopPropagation(); // Avoid flipping the card when clicking control button
    if (state.flashcardIndex > 0) {
      state.flashcardIndex--;
      renderFlashcard();
    }
  });
  
  elements.btnNextCard.addEventListener('click', (e) => {
    e.stopPropagation(); // Avoid flipping the card when clicking control button
    const chapter = getCurrentChapter();
    if (state.flashcardIndex < chapter.flashcards.length - 1) {
      state.flashcardIndex++;
      renderFlashcard();
    }
  });
  
  // Quiz interactions
  elements.btnNextQuestion.addEventListener('click', () => {
    const chapter = getCurrentChapter();
    if (state.quizQuestionIndex < chapter.quiz.length - 1) {
      state.quizQuestionIndex++;
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  });
  
  elements.btnResetQuiz.addEventListener('click', () => {
    resetQuizMode();
  });

  // Read Aloud, Timer, PDF bindings
  if (elements.btnReadAloud) {
    elements.btnReadAloud.addEventListener('click', toggleReadAloud);
  }
  if (elements.btnToggleTimer) {
    elements.btnToggleTimer.addEventListener('click', toggleTimerWidget);
    elements.btnTimerPlay.addEventListener('click', startTimer);
    elements.btnTimerPause.addEventListener('click', pauseTimer);
    elements.btnTimerReset.addEventListener('click', resetTimer);
  }
  if (elements.btnPrintPdf) {
    elements.btnPrintPdf.addEventListener('click', printNotes);
  }

}

// Subject View Renderer
function renderSubjectChapters() {
  const subject = STUDY_DATA.subjects[state.currentSubjectId];
  elements.subjectViewTitle.textContent = subject.title;
  elements.subjectViewDesc.textContent = subject.description;
  
  // Empty chapters list container
  elements.book1Chapters.innerHTML = '';
  elements.book2Chapters.innerHTML = '';
  
  subject.books.forEach(book => {
    const container = book.id === 'book_1' ? elements.book1Chapters : elements.book2Chapters;
    
    book.chapters.forEach((chapter, index) => {
      const isCompleted = state.completedChapters.includes(chapter.id);
      
      const chapterCard = document.createElement('div');
      chapterCard.className = 'chapter-card glass';
      chapterCard.innerHTML = `
        <div>
          <div class="chapter-number">Chapter ${index + 1}</div>
          <h4>${chapter.title}</h4>
          <p>${chapter.summary}</p>
        </div>
        <div class="chapter-card-footer">
          <span class="completion-status ${isCompleted ? 'status-completed' : 'status-unread'}">
            <i class="fa-solid ${isCompleted ? 'fa-circle-check' : 'fa-circle-dot'}"></i>
            ${isCompleted ? 'Completed' : 'Not Read'}
          </span>
          <div class="chapter-tools">
            <span class="tool-tag"><i class="fa-solid fa-file-invoice"></i> Notes</span>
            <span class="tool-tag"><i class="fa-solid fa-clone"></i> Cards</span>
            <span class="tool-tag"><i class="fa-solid fa-circle-question"></i> Quiz</span>
          </div>
        </div>
      `;
      
      chapterCard.addEventListener('click', () => {
        loadChapter(book.id, chapter.id);
      });
      
      container.appendChild(chapterCard);
    });
  });
}

// Load a specific chapter
function loadChapter(bookId, chapterId) {
  state.currentBookId = bookId;
  state.currentChapterId = chapterId;
  
  const chapter = getCurrentChapter();
  const book = STUDY_DATA.subjects[state.currentSubjectId].books.find(b => b.id === bookId);
  const chapterIndex = book.chapters.findIndex(c => c.id === chapterId);
  
  // Set details
  elements.studyChapterNumber.textContent = `Chapter ${chapterIndex + 1}`;
  elements.studyChapterTitle.textContent = chapter.title;
  
  // Mark read button check
  updateChapterCompleteButton(chapterId);
  
  // Notes tab load
  elements.notesContent.innerHTML = chapter.notes;
  
  // Reset tabs to Notes view on entry
  elements.tabButtons.forEach(btn => btn.classList.remove('active'));
  elements.tabButtons[0].classList.add('active'); // Notes tab
  elements.studyContentPanels.forEach(panel => panel.classList.remove('active'));
  document.getElementById('panel-notes').classList.add('active');
  
  // Populate Sidebar in Chapter View
  renderSidebarMenu(book, chapterId);
  
  showView('chapter');
}

// Sidebar Render
function renderSidebarMenu(book, activeChapterId) {
  elements.sidebarChaptersList.innerHTML = '';
  
  book.chapters.forEach((chapter, index) => {
    const item = document.createElement('li');
    item.className = `sidebar-menu-item ${chapter.id === activeChapterId ? 'active' : ''}`;
    
    const isCompleted = state.completedChapters.includes(chapter.id);
    item.innerHTML = `
      <i class="fa-solid ${isCompleted ? 'fa-circle-check' : 'fa-circle-notch'}" style="${isCompleted ? 'color: var(--success-color);' : ''}"></i>
      <span>Ch ${index + 1}: ${chapter.title}</span>
    `;
    
    item.addEventListener('click', () => {
      loadChapter(book.id, chapter.id);
    });
    
    elements.sidebarChaptersList.appendChild(item);
  });
}

// Helper: Get Current Chapter object
function getCurrentChapter() {
  const subject = STUDY_DATA.subjects[state.currentSubjectId];
  const book = subject.books.find(b => b.id === state.currentBookId);
  return book.chapters.find(c => c.id === state.currentChapterId);
}

// Flashcard Mode Logic
function resetFlashcardMode() {
  state.flashcardIndex = 0;
  elements.flashcardElement.classList.remove('flipped');
  renderFlashcard();
}

function renderFlashcard() {
  const chapter = getCurrentChapter();
  const flashcard = chapter.flashcards[state.flashcardIndex];
  
  // We want a smooth flip back transition before changing texts if it was flipped
  if (elements.flashcardElement.classList.contains('flipped')) {
    elements.flashcardElement.classList.remove('flipped');
    // Change content after flip anim finishes
    setTimeout(() => {
      updateFlashcardText(flashcard, chapter.flashcards.length);
    }, 150);
  } else {
    updateFlashcardText(flashcard, chapter.flashcards.length);
  }
}

function updateFlashcardText(flashcard, totalCards) {
  elements.flashcardQuestion.textContent = flashcard.question;
  elements.flashcardAnswer.textContent = flashcard.answer;
  
  elements.flashcardCounterText.textContent = `${state.flashcardIndex + 1} / ${totalCards}`;
  
  elements.btnPrevCard.disabled = state.flashcardIndex === 0;
  elements.btnNextCard.disabled = state.flashcardIndex === totalCards - 1;
}

// Quiz Mode Logic
function resetQuizMode() {
  state.quizQuestionIndex = 0;
  state.quizScore = 0;
  state.isQuizAnswered = false;
  
  elements.quizQuestionView.style.display = 'block';
  elements.quizResultsView.style.display = 'none';
  
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const chapter = getCurrentChapter();
  const quiz = chapter.quiz;
  const question = quiz[state.quizQuestionIndex];
  
  state.isQuizAnswered = false;
  
  // Update progress fill
  const progressPercent = ((state.quizQuestionIndex) / quiz.length) * 100;
  elements.quizProgressFill.style.width = `${progressPercent}%`;
  
  // Set question text
  elements.quizQuestionText.innerHTML = `
    <span style="color: var(--accent-color); font-weight:600;">Question ${state.quizQuestionIndex + 1} of ${quiz.length}:</span><br>${question.question}
  `;
  
  // Render option buttons
  elements.quizOptionsList.innerHTML = '';
  elements.quizFeedbackBox.style.display = 'none';
  elements.btnNextQuestion.style.display = 'none';
  
  question.options.forEach((option, idx) => {
    const optButton = document.createElement('button');
    optButton.className = 'quiz-option';
    optButton.innerHTML = `
      <span>${option}</span>
      <i class="fa-regular fa-circle"></i>
    `;
    
    optButton.addEventListener('click', () => {
      if (!state.isQuizAnswered) {
        evaluateQuizAnswer(idx, optButton);
      }
    });
    
    elements.quizOptionsList.appendChild(optButton);
  });
}

function evaluateQuizAnswer(selectedIndex, selectedButton) {
  state.isQuizAnswered = true;
  const chapter = getCurrentChapter();
  const question = chapter.quiz[state.quizQuestionIndex];
  const correctIdx = question.answerIndex;
  
  const optionButtons = elements.quizOptionsList.querySelectorAll('.quiz-option');
  
  // Lock all options
  optionButtons.forEach(btn => btn.classList.add('disabled'));
  
  // Check if correct
  if (selectedIndex === correctIdx) {
    state.quizScore++;
    selectedButton.classList.add('correct');
    selectedButton.querySelector('i').className = 'fa-solid fa-circle-check';
    
    // Show Feedback Box (Correct)
    elements.quizFeedbackBox.className = 'quiz-feedback correct-feedback';
    elements.quizFeedbackTitle.innerHTML = '<i class="fa-solid fa-circle-check"></i> Correct!';
  } else {
    selectedButton.classList.add('incorrect');
    selectedButton.querySelector('i').className = 'fa-solid fa-circle-xmark';
    
    // Highlight correct answer
    optionButtons[correctIdx].classList.add('correct');
    optionButtons[correctIdx].querySelector('i').className = 'fa-solid fa-circle-check';
    
    // Show Feedback Box (Incorrect)
    elements.quizFeedbackBox.className = 'quiz-feedback incorrect-feedback';
    elements.quizFeedbackTitle.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Incorrect';
  }
  
  // Set explanation text and display
  elements.quizFeedbackExplanation.textContent = question.explanation;
  elements.quizFeedbackBox.style.display = 'block';
  
  // Show Next Question button
  elements.btnNextQuestion.style.display = 'inline-flex';
  
  // Update progress fill to indicate current finished question
  const progressPercent = ((state.quizQuestionIndex + 1) / chapter.quiz.length) * 100;
  elements.quizProgressFill.style.width = `${progressPercent}%`;
}

function showQuizResults() {
  const chapter = getCurrentChapter();
  const total = chapter.quiz.length;
  
  elements.quizQuestionView.style.display = 'none';
  elements.quizResultsView.style.display = 'block';
  
  elements.resultsScoreText.textContent = state.quizScore;
  elements.resultsTotalText.textContent = ` / ${total}`;
  
  // Headline feedback
  const scorePercent = (state.quizScore / total) * 100;
  if (scorePercent === 100) {
    elements.resultsHeadline.textContent = 'Perfect Score!';
    elements.resultsMessage.textContent = 'Extraordinary! You completely understand this chapter.';
  } else if (scorePercent >= 70) {
    elements.resultsHeadline.textContent = 'Great Job!';
    elements.resultsMessage.textContent = 'Excellent grasp on the material. Keep it up!';
  } else {
    elements.resultsHeadline.textContent = 'Keep Practicing!';
    elements.resultsMessage.textContent = 'Review the summary notes and try again to improve your score.';
  }
}

// Search Logic
function setupSearch() {
  // We will build a beautiful float autocomplete search dropdown under the search input
  const searchInput = elements.dashboardSearch;
  const heroContent = document.querySelector('.hero-content');
  
  // Create search results box
  const searchResultsDropdown = document.createElement('div');
  searchResultsDropdown.className = 'glass';
  searchResultsDropdown.style.cssText = `
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 500px;
    max-height: 250px;
    overflow-y: auto;
    border-radius: var(--border-radius-md);
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    z-index: 10;
    display: none;
    text-align: left;
    background: var(--bg-card);
  `;
  
  // Append to search container
  document.querySelector('.search-box').appendChild(searchResultsDropdown);
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchResultsDropdown.style.display = 'none';
      return;
    }
    
    // Search in political science chapters
    const results = [];
    const polSci = STUDY_DATA.subjects.political_science;
    
    polSci.books.forEach(book => {
      book.chapters.forEach(chapter => {
        const inTitle = chapter.title.toLowerCase().includes(query);
        const inSummary = chapter.summary.toLowerCase().includes(query);
        const inNotes = chapter.notes.toLowerCase().includes(query);
        
        if (inTitle || inSummary || inNotes) {
          results.push({
            bookId: book.id,
            bookTitle: book.title,
            chapterId: chapter.id,
            chapterTitle: chapter.title
          });
        }
      });
    });
    
    if (results.length === 0) {
      searchResultsDropdown.innerHTML = `
        <div style="padding: 1rem; color: var(--text-secondary); text-align: center; font-size: 0.9rem;">
          <i class="fa-solid fa-triangle-exclamation"></i> No matches found
        </div>
      `;
    } else {
      searchResultsDropdown.innerHTML = '';
      results.forEach(result => {
        const item = document.createElement('div');
        item.style.cssText = `
          padding: 0.85rem 1.25rem;
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
          transition: background-color var(--transition-fast);
        `;
        item.innerHTML = `
          <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-primary);">${result.chapterTitle}</div>
          <div style="font-size: 0.75rem; color: var(--accent-color); margin-top: 0.2rem;">
            <i class="fa-solid fa-book"></i> ${result.bookTitle}
          </div>
        `;
        
        item.addEventListener('mouseenter', () => {
          item.style.backgroundColor = 'rgba(217, 173, 79, 0.08)';
        });
        item.addEventListener('mouseleave', () => {
          item.style.backgroundColor = 'transparent';
        });
        
        item.addEventListener('click', () => {
          searchInput.value = '';
          searchResultsDropdown.style.display = 'none';
          loadChapter(result.bookId, result.chapterId);
        });
        
        searchResultsDropdown.appendChild(item);
      });
    }
    
    searchResultsDropdown.style.display = 'block';
  });
  
  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
      searchResultsDropdown.style.display = 'none';
    }
  });
}


// ---------- EFFICIENCY OPTIONS IMPLEMENTATION ----------

// Text-to-Speech (Read Aloud)
let currentSpeechUtterance = null;
function toggleReadAloud() {
  if (!window.speechSynthesis) {
    alert("Text-to-Speech is not supported in this browser.");
    return;
  }
  
  const synth = window.speechSynthesis;
  
  if (synth.speaking) {
    synth.cancel();
    elements.btnReadAloud.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    elements.btnReadAloud.classList.remove('active');
  } else {
    // Get notes container content (clean text representation)
    const textToRead = elements.notesContent.innerText;
    if (!textToRead || textToRead.trim() === "") {
      return;
    }
    
    currentSpeechUtterance = new SpeechSynthesisUtterance(textToRead);
    currentSpeechUtterance.rate = 1.0;
    
    currentSpeechUtterance.onend = () => {
      elements.btnReadAloud.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      elements.btnReadAloud.classList.remove('active');
    };
    
    currentSpeechUtterance.onerror = () => {
      elements.btnReadAloud.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      elements.btnReadAloud.classList.remove('active');
    };
    
    elements.btnReadAloud.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    elements.btnReadAloud.classList.add('active');
    
    synth.speak(currentSpeechUtterance);
  }
}

// Pomodoro Study Timer
function toggleTimerWidget() {
  const displayStyle = elements.pomodoroWidget.style.display;
  if (displayStyle === 'none' || displayStyle === '') {
    elements.pomodoroWidget.style.display = 'block';
    elements.btnToggleTimer.classList.add('active');
  } else {
    elements.pomodoroWidget.style.display = 'none';
    elements.btnToggleTimer.classList.remove('active');
  }
}

function startTimer() {
  if (state.isTimerRunning) return;
  
  state.isTimerRunning = true;
  elements.btnTimerPlay.style.display = 'none';
  elements.btnTimerPause.style.display = 'inline-flex';
  
  state.timerInterval = setInterval(() => {
    if (state.timerSecondsLeft > 0) {
      state.timerSecondsLeft--;
      updateTimerDisplay();
    } else {
      // Timer finished!
      playTimerChime();
      clearInterval(state.timerInterval);
      state.isTimerRunning = false;
      
      // Switch modes
      if (state.timerMode === 'focus') {
        state.timerMode = 'break';
        state.timerSecondsLeft = 5 * 60; // 5 minute break
        elements.timerModeText.textContent = "Break Time";
        elements.timerModeText.style.color = "var(--success-color)";
      } else {
        state.timerMode = 'focus';
        state.timerSecondsLeft = 25 * 60; // 25 minute study focus
        elements.timerModeText.textContent = "Focus Session";
        elements.timerModeText.style.color = "var(--text-secondary)";
      }
      
      updateTimerDisplay();
      elements.btnTimerPlay.style.display = 'inline-flex';
      elements.btnTimerPause.style.display = 'none';
    }
  }, 1000);
}

function pauseTimer() {
  if (!state.isTimerRunning) return;
  
  clearInterval(state.timerInterval);
  state.isTimerRunning = false;
  
  elements.btnTimerPlay.style.display = 'inline-flex';
  elements.btnTimerPause.style.display = 'none';
}

function resetTimer() {
  clearInterval(state.timerInterval);
  state.isTimerRunning = false;
  
  if (state.timerMode === 'focus') {
    state.timerSecondsLeft = 25 * 60;
  } else {
    state.timerSecondsLeft = 5 * 60;
  }
  
  updateTimerDisplay();
  elements.btnTimerPlay.style.display = 'inline-flex';
  elements.btnTimerPause.style.display = 'none';
}

function updateTimerDisplay() {
  const minutes = Math.floor(state.timerSecondsLeft / 60);
  const seconds = state.timerSecondsLeft % 60;
  
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  
  elements.timerDisplay.textContent = formattedMinutes + ':' + formattedSeconds;
}

function playTimerChime() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5 Note
    
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.8);
  } catch (e) {
    console.log("AudioContext chime failed:", e);
  }
}

// Print / PDF Export
function printNotes() {
  // Cancel speech narration before printing
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    if (elements.btnReadAloud) {
      elements.btnReadAloud.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      elements.btnReadAloud.classList.remove('active');
    }
  }
  
  // Temporarily expand all collapsible concept notes (<details>) so they print fully
  const detailsElements = document.querySelectorAll('details.concept');
  const originalStates = [];
  
  detailsElements.forEach((d, idx) => {
    originalStates[idx] = d.open;
    d.open = true;
  });
  
  // Trigger browser print window
  window.print();
  
  // Restore original details collapse states immediately after
  setTimeout(() => {
    detailsElements.forEach((d, idx) => {
      d.open = originalStates[idx];
    });
  }, 100);
}
