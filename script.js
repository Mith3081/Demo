document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('certificate-file');
    const previewContent = document.getElementById('preview-content');
    const statusDisplay = document.getElementById('status-display');
    const modal = document.getElementById('fallback-modal');
    const form = document.getElementById('certificate-form');
    const submitBtn = document.getElementById('submit-btn');
    const closeModal = document.getElementById('close-modal');
    const notification = document.getElementById('notification');

    // File upload handling
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            previewContent.textContent = `File: ${file.name}\nType: ${file.type}\nSize: ${file.size} bytes`;
            statusDisplay.textContent = 'Processing with AI...';
            // Simulated AI service call with 5-second timeout (for demo)
            setTimeout(() => {
                statusDisplay.textContent = 'AI processing failed/timeout. Switching to fallback.';
                showModal();
            }, 5000);
        }
    });

    // Show modal with pre-filled data
    function showModal() {
        // Pre-fill dummy certificate details
        document.getElementById('subject').value = 'CN=example.com';
        document.getElementById('issuer').value = 'CN=Example CA';
        document.getElementById('valid-from').value = '2023-01-01';
        document.getElementById('serial-number').value = '123456789';
        modal.classList.remove('hidden');
    }

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const expiryDate = document.getElementById('expiry-date').value;
        if (!expiryDate) {
            showNotification('Expiry date is mandatory.', 'error');
            return;
        }
        // Simulate submission
        statusDisplay.textContent = 'Responded';
        showNotification('Certificate details submitted successfully. Status set to Responded.');
        modal.classList.add('hidden');
        form.reset();
    });

    // Notification display
    function showNotification(message, type = 'success') {
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 5000);
    }
});