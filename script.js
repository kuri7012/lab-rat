document.getElementById('article-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('article-title').value;
    const content = document.getElementById('article-content').value;

    const articlesList = document.getElementById('articles-list');

    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');
    articleDiv.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    
    articlesList.appendChild(articleDiv);

    // Clear the form
    document.getElementById('article-title').value = '';
    document.getElementById('article-content').value = '';
});
