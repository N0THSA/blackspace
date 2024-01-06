// aityping.js

const outputElement = document.getElementById('output');

// Define arrays of possible strings for each button
const button1Strings = [
    "The website is currently down due to an accidental deletion during server maintenance. We're working to resolve the issue promptly.",
    "Unfortunately, the website is temporarily unavailable due to a mistake during routine server maintenance. We appreciate your patience as we work to bring it back.",
    "The website is down temporarily due to an accidental deletion. We apologize for the inconvenience and are actively addressing the issue.",
    "We regret to inform you that the website is currently unavailable due to an accidental deletion. Our team is diligently working to restore it as soon as possible.",
    "The website is down temporarily due to an unexpected deletion during server maintenance. We apologize for any disruption and appreciate your understanding.",
    "Regrettably, the website is currently inaccessible due to an accidental deletion. We are aware of the issue and are working to rectify it promptly.",
    "The website is down temporarily due to an inadvertent deletion during routine server maintenance. We apologize for any inconvenience and appreciate your patience.",
    "Unfortunately, the website is currently unavailable due to an accidental deletion. We understand the importance of your access and are working diligently to resolve the issue."
];

const button2Strings = [
    "The website, a personal blog crafted by Nothsa, was unintentionally removed during routine cleanup targeting old and unused assets.",
    "Regrettably, the website was deleted as part of routine maintenance focused on removing old and unused assets.",
    "The accidental deletion of the website occurred during routine cleanup, specifically targeting old and unused assets.",
    "The website, a personal blog created by Nothsa, was unintentionally removed as part of routine server maintenance aimed at clearing out old assets.",
    "Unfortunately, the website was deleted during routine cleanup, which inadvertently included the removal of Nothsa's personal blog.",
    "The removal of the website was an unintended consequence of routine maintenance, with a focus on clearing out old and unused assets.",
    "The accidental deletion of the website was a result of routine cleanup, with a specific focus on removing old and unused assets.",
    "Regrettably, the website was deleted as part of routine server maintenance, targeting the removal of old and unused assets."
];

const button3Strings = [
    "We sincerely apologize for the inconvenience caused. Nothsa is actively working to restore the website, and we appreciate your understanding during this process.",
    "Unfortunately, there is no team involved. Nothsa is personally addressing the issue and working to restore the website as quickly as possible.",
    "Our apologies for the disruption. Nothsa is diligently working to address the issue and restore the website without the involvement of a team.",
    "We appreciate your patience as Nothsa personally works to resolve the issue and restore the website to its normal functionality.",
    "Regrettably, there is no team involved in the resolution process. Nothsa is actively working to address the issue and restore the website promptly.",
    "We understand the importance of the website to you. Nothsa is personally handling the issue and working to restore it as soon as possible.",
    "Our sincere apologies for the inconvenience. Nothsa is actively addressing the issue and working to restore the website without the involvement of a team.",
    "We appreciate your understanding as Nothsa works to resolve the issue personally and restore the website to normal operation."
];

function simulateTyping(event, buttonIndex) {
    // Fade out the existing text
    outputElement.style.opacity = 0;

    // Wait for the fade-out animation to complete
    outputElement.addEventListener('transitionend', function handleTransitionEnd() {
        // Remove the event listener to avoid multiple calls
        outputElement.removeEventListener('transitionend', handleTransitionEnd);

        // Clear the previous text
        outputElement.textContent = '';

        const strings = (buttonIndex === 1) ? button1Strings : (buttonIndex === 2) ? button2Strings : button3Strings;
        const randomIndex = Math.floor(Math.random() * strings.length);
        const text = strings[randomIndex];

        const tokens = text.split(' ');
        let index = 0;

        // Generate a random delay between 0.89 and 3.4 seconds
        const initialDelay = Math.random() * (3.4 - 0.89) + 0.89;

        setTimeout(() => {
            function typeNextToken() {
                if (index < tokens.length) {
                    const token = tokens[index];
                    outputElement.textContent += token + ' ';

                    // Adjust the typing speed as needed (milliseconds per word)
                    const typingSpeed = 500; // Change this value to adjust typing speed

                    index++;
                    setTimeout(typeNextToken, typingSpeed);
                }
            }

            // Start the typing simulation
            typeNextToken();
        }, initialDelay * 1000);

        // After a short delay, fade in the new text
        setTimeout(() => {
            outputElement.style.opacity = 1;
        }, initialDelay * 1000 + 500); // Adjust the delay as needed
    });
}
