// Chat state management
let conversationHistory = [];
let isProcessing = false;

// DOM elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const loadingIndicator = document.getElementById('loadingIndicator');

// Initialize the chat
function init() {
    setupEventListeners();
    adjustTextareaHeight();
}

// Setup event listeners
function setupEventListeners() {
    sendButton.addEventListener('click', handleSendMessage);

    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    });

    userInput.addEventListener('input', adjustTextareaHeight);
}

// Adjust textarea height based on content
function adjustTextareaHeight() {
    userInput.style.height = 'auto';
    userInput.style.height = Math.min(userInput.scrollHeight, 120) + 'px';
}

// Handle sending a message
async function handleSendMessage() {
    const message = userInput.value.trim();

    if (!message || isProcessing) {
        return;
    }

    // Add user message to UI
    addMessageToUI(message, 'user');

    // Add to conversation history
    conversationHistory.push({
        role: 'user',
        content: message
    });

    // Clear input
    userInput.value = '';
    adjustTextareaHeight();

    // Show loading state
    setProcessingState(true);

    try {
        // Call the serverless function
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: conversationHistory
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Add assistant response to conversation history
        conversationHistory.push({
            role: 'assistant',
            content: data.response
        });

        // Add assistant message to UI
        addMessageToUI(data.response, 'celeste');

    } catch (error) {
        console.error('Error:', error);
        addMessageToUI(
            'I apologize, beloved seeker. The cosmic channels seem disrupted at the moment. Please try again in a few moments. 🌙',
            'celeste'
        );
    } finally {
        setProcessingState(false);
    }
}

// Add message to UI
function addMessageToUI(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender === 'user' ? 'user-message' : 'celeste-message'}`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'user' ? '◆' : '✦';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'message-name';
    nameDiv.textContent = sender === 'user' ? 'You' : 'Céleste';

    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';

    // Format the text (preserve line breaks)
    textDiv.innerHTML = formatMessage(text);

    contentDiv.appendChild(nameDiv);
    contentDiv.appendChild(textDiv);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);

    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    scrollToBottom();
}

// Format message text
function formatMessage(text) {
    // Convert line breaks to <br> tags
    let formatted = text.replace(/\n/g, '<br>');

    // Make text between ** bold
    formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Make text between * italic
    formatted = formatted.replace(/\*(.+?)\*/g, '<em>$1</em>');

    return formatted;
}

// Scroll chat to bottom
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Set processing state
function setProcessingState(processing) {
    isProcessing = processing;
    sendButton.disabled = processing;

    if (processing) {
        loadingIndicator.classList.add('active');
    } else {
        loadingIndicator.classList.remove('active');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
