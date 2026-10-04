const input = document.querySelector('#gorev-input');
const ekleBtn = document.querySelector('#ekle-btn');
const liste = document.querySelector('#liste');

function gorevEkle() {
    if (input.value) {
        const yeniGorev = document.createElement('li');
        yeniGorev.textContent = input.value;
        yeniGorev.classList.add('gorev');

        const silBtn = document.createElement('button');
        silBtn.textContent = 'Sil';
        silBtn.classList.add('sil-btn');

        silBtn.addEventListener('click', function() {
            yeniGorev.remove();
        });

        const duzenleBtn = document.createElement('button');
        duzenleBtn.textContent = 'Düzenle';
        duzenleBtn.classList.add('duzenle-btn');

        duzenleBtn.addEventListener('click', function() {
            const yeniMetin = prompt('Görevi düzenle:', yeniGorev.firstChild.textContent);
            if (yeniMetin) {
                yeniGorev.firstChild.textContent = yeniMetin;
            }
        });

        yeniGorev.appendChild(silBtn);
        yeniGorev.appendChild(duzenleBtn);

        liste.appendChild(yeniGorev);
        input.value = '';
    }
}

ekleBtn.addEventListener('click', gorevEkle);

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        gorevEkle();
    }
});