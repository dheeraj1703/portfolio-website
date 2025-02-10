function showProjectDetails(projectName) {
    alert("Details about " + projectName);
}

function toggleChatbot() {
    var chatbotBox = document.getElementById('chatbot-box');
    chatbotBox.style.display = chatbotBox.style.display === 'none' ? 'block' : 'none';
}
