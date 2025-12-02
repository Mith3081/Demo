document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const tasksView = document.getElementById('tasks-view');
    const tasksTile = document.getElementById('tasks-tile');
    const backButton = document.getElementById('back-to-landing');

    const projectDetailsContent = document.getElementById('project-details-content');
    const toggleDetailsBtn = document.getElementById('toggle-details-btn');
    const projectSummaryBar = document.getElementById('project-summary-bar');

    // --- Navigation ---
    // Show Tasks View when tile is clicked
    tasksTile.addEventListener('click', () => {
        landingPage.classList.add('hidden');
        tasksView.classList.remove('hidden');
        window.scrollTo(0, 0); // Scroll to top of new view
    });

    // Go back to Landing Page
    backButton.addEventListener('click', () => {
        tasksView.classList.add('hidden');
        landingPage.classList.remove('hidden');
    });

    // --- 2. Project Details Section Enhancement ---
    const toggleProjectDetails = () => {
        const isExpanded = toggleDetailsBtn.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            // Collapse
            projectDetailsContent.classList.add('collapsed');
            toggleDetailsBtn.classList.add('collapsed');
            toggleDetailsBtn.setAttribute('aria-expanded', 'false');
        } else {
            // Expand
            projectDetailsContent.classList.remove('collapsed');
            toggleDetailsBtn.classList.remove('collapsed');
            toggleDetailsBtn.setAttribute('aria-expanded', 'true');
        }
    };

    projectSummaryBar.addEventListener('click', toggleProjectDetails);

    // --- Add data-label attributes for responsive view ---
    // This helps provide context on smaller screens where the table becomes a list
    document.querySelectorAll('.task-item').forEach(item => {
        item.querySelector('.task-name').setAttribute('data-label', 'Task');
        item.querySelector('.timeline').setAttribute('data-label', 'Timeline & Responsibility');
        item.querySelector('.status').setAttribute('data-label', 'Status & Progress');
        item.querySelector('.notifications').setAttribute('data-label', 'Notifications');
    });

});