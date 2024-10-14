
    const button = document.getElementById('theme-toggle-btn');
    let isLightTheme = true;

    button.addEventListener('click', () => {
        if (isLightTheme) {
            // Switch to dark theme
            document.documentElement.style.setProperty('--light-themeBG', '#121212');
            document.documentElement.style.setProperty('--light-themeOffBG', '#121212');
            document.documentElement.style.setProperty('--light-themeText', 'white'); // Change text color to white
        } else {
            // Switch back to light theme
            document.documentElement.style.setProperty('--light-themeBG', 'white');
            document.documentElement.style.setProperty('--light-themeOffBG', '#f5f5f5');
            document.documentElement.style.setProperty('--light-themeText', 'black'); // Change text color to black
        }
        isLightTheme = !isLightTheme;
    });

