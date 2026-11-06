// Этот скрипт ищет параметр ?q= в адресе страницы и подсвечивает его
document.addEventListener('DOMContentLoaded', function() {
    // Получаем слово из адреса (например, ?q=Паршуков)
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('q');

    // Если слово есть, начинаем подсветку
    if (keyword) {
        // Находим контейнер, где лежит текст статьи
        const content = document.querySelector('.post-content');
        if (content) {
            // Создаем экземпляр библиотеки mark.js
            const markInstance = new Mark(content);
            
            // Подсвечиваем слово
            markInstance.mark(keyword, {
                "separateWordSearch": true,
                "accuracy": "partially",
                "diacritics": true,
                "synonyms": {},
                "iframes": false,
                "iframesTimeout": 5000,
                "className": "search-highlight" // Класс для стилизации подсветки
            });
        }
    }
});
