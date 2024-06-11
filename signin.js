document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signin-form');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Hide the username and password fields
        usernameField.style.display = 'none';
        passwordField.style.display = 'none';

        // Optionally, create and display a loading state
        const loadingText = document.createElement('p');
        loadingText.textContent = 'Logging in...';
        form.appendChild(loadingText);

        // Simulate a delay to show the loading state (optional)
        setTimeout(() => {
            // Remove the loading text (optional)
            form.removeChild(loadingText);

            // Optionally, reset the form
            form.reset();
            
            // Show a success message or handle further actions (optional)
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Successfully logged in!';
            form.appendChild(successMessage);
        }, 2000); // Example delay of 2 seconds
    });
});
