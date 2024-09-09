# Glitter - AI Text Enhancer

Glitter is a Chrome extension designed to enhance text sendouts by providing users with the ability to check grammar and adjust the tone of their text (sincere, professional, playful with emojis). This extension is compatible with text messages, emails, detailed memos, and letters.

## Features

- **Grammar Check**: Enhance your text by checking and correcting grammar.
- **Tone Adjustment**: Modify the tone of your text to be sincere, professional, or playful.
- **Emoji Addition**: Add emojis to make your text more playful.
- **Notes for AI**: Include additional notes for the AI to better understand the context.

## User Interface

The user interface consists of:

- Two horizontal text boxes: one for input and one for output.
- Buttons for different text enhancement options: Grammar, Sincere, Professional, Playful (with Emojis).
- A small text box for additional notes for the AI agent.

## Installation

1. Clone the repository or download the ZIP file.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory containing the extension files.

## Usage

1. Click on the Glitter icon in the Chrome toolbar to open the popup.
2. Enter your text in the left input text box.
3. Choose the desired enhancement option by clicking the corresponding button.
4. View the enhanced text in the right output text box.
5. Optionally, add additional notes for the AI in the provided text box.

## Storing OpenAI API Key

To use the AI features, you need to store your OpenAI API key:

1. Open the extension popup.
2. Enter your OpenAI API key in the provided input field.
3. The key will be securely stored using Chrome's sync storage.

## Development

### Files and Directories

- `manifest.json`: Configuration file for the Chrome extension.
- `popup.html`: HTML file for the popup interface.
- `scripts/popup.js`: JavaScript file for handling UI interactions and API calls.
- `background.js`: JavaScript file for background processes.
- `styles/popup.css`: CSS file for styling the popup.

### Setting Up the Project

1. Ensure you have Node.js and npm installed.
2. Install any dependencies if required.
3. Follow the installation steps to load the unpacked extension into Chrome.

### API Integration

The extension uses the OpenAI API to enhance the text. Ensure you have an API key from OpenAI and store it securely using the provided input field in the extension popup.

### Testing

Test the extension by:

- Checking the grammar of various text inputs.
- Adjusting the tone of text messages, emails, memos, and letters.
- Ensuring the UI is responsive and user-friendly.
- Verifying that the API calls are functioning correctly.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure you follow best practices and write clean, maintainable code.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements

- [OpenAI](https://www.openai.com/) for their powerful API.
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/mv3/) for guidance on building Chrome extensions.

## Contact

For any questions or feedback, please reach out to [Samanvaya Tripathi](mailto:tripathisamanvay13@gmail.com).

