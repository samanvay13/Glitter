document.getElementById('modeToggle').addEventListener('change', function () {
    const mode = this.checked ? 'dark' : 'light';
    chrome.storage.sync.set({ themeMode: mode }, function () {
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});
