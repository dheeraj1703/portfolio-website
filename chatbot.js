const chatbotResponses = {
    "skills": "My skills include Docker, Kubernetes, Terraform, Ansible, AWS, Jenkins, Git & GitHub.",
    "contact": "You can reach me at dheeraj.dev@example.com or call me at +91 9876543210.",
    "projects": "Some of my projects include 'Finance Me' and 'Pharmacy Management System'."
};

document.getElementById('chatbot-box').innerHTML = "<p>Ask me about my skills, projects, or contact details!</p>";

document.getElementById('chatbot').addEventListener('click', function() {
    let userQuestion = prompt("Ask me a question:");
    let response = chatbotResponses[userQuestion.toLowerCase()] || "I don't have an answer for that.";
    alert(response);
});
