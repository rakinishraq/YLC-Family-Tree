document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskId = this.getAttribute('data-id');
            const state = this.checked ? 'checked' : 'unchecked';
            console.log(`Task ID: ${taskId}, State: ${state}`);
            if (this.checked) {
                this.parentElement.classList.add('completed');
            } else {
                this.parentElement.classList.remove('completed');
            }
        });
    });
});