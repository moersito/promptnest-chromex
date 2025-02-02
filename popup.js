document.getElementById('menu-icon').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'block';
  });
  
  document.getElementById('login-btn').addEventListener('click', () => {
    // Handle Google Login for Premium Version
    alert('Login with Google functionality goes here!');
  });
  
  // Detect which AI platform is active
  function detectActivePlatform() {
    // Example logic for detecting active platform, replace with real detection logic
    const currentUrl = window.location.href;
  
    if (currentUrl.includes('chat.openai.com')) {
      document.getElementById('chatgpt-logo').classList.add('on');
      document.getElementById('status-message').textContent = 'ChatGPT is On';
    } else {
      document.getElementById('chatgpt-logo').classList.remove('on');
    }
  }
  
  // Update statistics (e.g., total prompts)
  function updateStatistics() {
    document.getElementById('prompts-count').textContent = '100';
    document.getElementById('categories-count').textContent = '5';
    document.getElementById('platforms-count').textContent = '3';
  }
  
  // Load initial state
  function loadInitialState() {
    detectActivePlatform();
    updateStatistics();
  }
  
  window.onload = loadInitialState;
  