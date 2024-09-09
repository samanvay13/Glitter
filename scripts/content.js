document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const notesText = document.getElementById('notesText');

    const buttons = [
        document.getElementById('grammarBtn'),
        document.getElementById('sincereBtn'),
        document.getElementById('professionalBtn'),
        document.getElementById('playfulBtn')
    ];

    function toggleButtonsState() {
        const isDisabled = inputText.value.trim() === '';
        buttons.forEach(button => {
            button.disabled = isDisabled;
        });
    }

    inputText.addEventListener('input', toggleButtonsState);

    chrome.storage.sync.get('themeMode', function (data) {
        if (data.themeMode === 'dark') {
            document.body.classList.add('dark-mode');
            document.getElementById('modeToggle').checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            document.getElementById('modeToggle').checked = false;
        }
    });

    function sendEnhanceTextRequest(option) {
        const text = inputText.value;
        const notes = notesText.value;

        chrome.runtime.sendMessage({
            action: 'enhanceText',
            inputText: text,
            option: option,
            notes: notes
        }, function (response) {
            if (response.status === 'success') {
                outputText.value = response.enhancedText;
            } else {
                outputText.value = `Error: ${response.message}`;
                console.log(response);
            }
        });
    }

    document.getElementById('grammarBtn').addEventListener('click', function () {
        sendEnhanceTextRequest('Check grammar');
    });

    document.getElementById('sincereBtn').addEventListener('click', function () {
        sendEnhanceTextRequest('Make tone sincere');
    });

    document.getElementById('professionalBtn').addEventListener('click', function () {
        sendEnhanceTextRequest('Make tone professional');
    });

    document.getElementById('playfulBtn').addEventListener('click', function () {
        sendEnhanceTextRequest('Make tone playful and add emojis');
    });

    toggleButtonsState();
});
