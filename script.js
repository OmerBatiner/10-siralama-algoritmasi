// HTML dosyasında yer alan düzenlemeler
const body = document.body;
const settingsButton = document.getElementById('settingsButton');
const settingsPanel = document.getElementById('settingsPanel');
const themeSelect = document.getElementById('themeSelect');
const languageSelect = document.getElementById('languageSelect');
const sortButtons = document.querySelectorAll('.top-panel button');

// Ayarlar panelini gösterme/gizleme işlevi
settingsButton.addEventListener('click', () => {
    if (settingsPanel.style.display === 'block') {
        settingsPanel.style.display = 'none';
    } else {
        settingsPanel.style.display = 'block';
    }
});

// Tema seçimi işlevi
themeSelect.addEventListener('change', () => {
    if (themeSelect.value === 'dark') {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        settingsPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Siyah arka plan
        sortButtons.forEach(button => {
            button.classList.add('theme-dark');
        });
    } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        settingsPanel.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Beyaz arka plan
        sortButtons.forEach(button => {
            button.classList.remove('theme-dark');
        });
    }
});

// Dil seçimi işlevi (örnek)
languageSelect.addEventListener('change', () => {
    if (languageSelect.value === 'tr') {
        // Türkçe diline geçiş yapılacak işlemler burada yapılabilir
        alert('Dil Türkçe olarak değiştirildi.');
    } else {
        // İngilizce diline geçiş yapılacak işlemler burada yapılabilir
        alert('Language changed to English.');
    }
});

// Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    let steps = []; // Adım adım işlemleri saklamak için dizi

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // Adımı kaydet
                steps.push(`Swap ${arr[j]} and ${arr[j + 1]}`);
            }
        }
    }

    return steps;
}

// UI Elements
const bubbleSortBtn = document.getElementById('bubbleSortBtn');
const arrayInput = document.getElementById('arrayInput');
const sortButtonElement = document.getElementById('sortButton');
const sortedArray = document.getElementById('sortedArray');
const selectionSteps = document.querySelector('.selectionSteps');
const bubbleSteps = document.querySelector('.bubbleSteps');

// Event Listeners
bubbleSortBtn.addEventListener('click', function() {
    // Show algorithm description and steps
    document.getElementById('bubbleSort').style.display = 'flex';
    algorithmSteps.innerHTML = ''; // Önceki adımları temizle
});

sortButtonElement.addEventListener('click', function() {
    let inputArray = arrayInput.value.split(',').map(num => parseInt(num));
    
    let bubbleArray = [...inputArray];
    let selectionArray = [...inputArray];

    // Perform Bubble Sort
    let bubbleSteps2 = bubbleSort(bubbleArray);
    
    // Perform Selection Sort
    let selectionResult = selectionSort(selectionArray);
    let selectionSteps2 = selectionResult.steps;
    console.log(selectionSteps2, bubbleSteps2);

    // Display sorted array
    // sortedArray.textContent = `Bubble Sort Result: ${bubbleArray.join(', ')} | Selection Sort Result: ${selectionResult.sortedArray.join(', ')}`;

    // Display steps
    displaySteps(bubbleSteps2, selectionSteps2);
});

// Function to display steps for both algorithms
function displaySteps(bubbleSteps2, selectionSteps2) {
    bubbleSteps.innerHTML = ''; // Clear previous steps
    selectionSteps.innerHTML = ''; // Clear previous steps
    
    bubbleSteps2.forEach((step, index) => {
        let p = document.createElement('p');
        p.textContent = `Step ${index + 1}: ${step}`;
        bubbleSteps.appendChild(p);
    });

    selectionSteps2.forEach((step, index) => {
        let p = document.createElement('p');
        p.textContent = `Step ${index + 1}: ${step}`;
        selectionSteps.appendChild(p);
    });

    // Scroll to the bottom of the steps
    bubbleSteps.scrollTop = bubbleSteps.scrollHeight;
    selectionSteps.scrollTop = selectionSteps.scrollHeight;

    // Clear input field
    arrayInput.value = '';

    // Focus on input field
    arrayInput.focus();
}

// Selection Sort algoritması
function selectionSort(arr) {
    const len = arr.length;
    let steps = []; // Adım adım işlemleri saklamak için dizi

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap arr[i] and arr[minIndex]
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;

            // Adımı kaydet
            steps.push(`Swap ${arr[i]} and ${arr[minIndex]}`);
        }
    }

    // Sonucu döndür
    return { sortedArray: arr, steps: steps };
}

// UI Elements
const selectionSortBtn = document.getElementById('selectionSortBtn');
const algorithmStepsSelection = document.querySelector('.algorithm-steps-selection');

// Selection Sort butonuna tıklama işlevi
selectionSortBtn.addEventListener('click', function() {
    // Gösterilecek algoritma adı ve adım adım açıklama
    document.getElementById('selectionSort').style.display = 'flex';
    algorithmStepsSelection.innerHTML = ''; // Önceki adımları temizle

    // Girdi dizisi al
    let inputArray = arrayInput.value.split(',').map(num => parseInt(num));
    let arrayCopy = [...inputArray];

    // Selection Sort'u uygula
    let { sortedArray, steps } = selectionSort(arrayCopy);

    // Sıralanmış diziyi göster
    sortedArray.textContent = arrayCopy.join(', ');

    // Adımları göster
    console.log(steps, algorithmStepsSelection);
    displaySteps(steps, algorithmStepsSelection);
});


document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const settingsButton = document.getElementById('settingsButton');
    const settingsPanel = document.getElementById('settingsPanel');
    const themeSelect = document.getElementById('themeSelect');
    const languageSelect = document.getElementById('languageSelect');
    const sortButtons = document.querySelectorAll('.top-panel button');
    const algorithmContainers = document.querySelectorAll('.algorithm-container');

    // Ayarlar panelini gösterme/gizleme işlevi
    settingsButton.addEventListener('click', () => {
        if (settingsPanel.style.display === 'block') {
            settingsPanel.style.display = 'none';
        } else {
            settingsPanel.style.display = 'block';
        }
    });

    // Tema seçimi işlevi
    themeSelect.addEventListener('change', () => {
        if (themeSelect.value === 'dark') {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            settingsPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Siyah arka plan
            sortButtons.forEach(button => {
                button.classList.add('theme-dark');
            });
        } else {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            settingsPanel.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Beyaz arka plan
            sortButtons.forEach(button => {
                button.classList.remove('theme-dark');
            });
        }
    });

    // Dil seçimi işlevi (örnek)
    languageSelect.addEventListener('change', () => {
        if (languageSelect.value === 'tr') {
            // Türkçe diline geçiş yapılacak işlemler burada yapılabilir
            alert('Dil Türkçe olarak değiştirildi.');
        } else {
            // İngilizce diline geçiş yapılacak işlemler burada yapılabilir
            alert('Language changed to English.');
        }
    });

    // Sıralama butonlarına tıklama işlevleri
    sortButtons.forEach(button => {
        button.addEventListener('click', () => {
            const algorithmId = button.id.replace('Btn', ''); // Algoritma ID'sini al

            // Diğer algoritma konteynerlarını gizle
            algorithmContainers.forEach(container => {
                container.style.display = 'none';
            });

            // İlgili algoritma konteynerını göster
            const algorithmContainer = document.getElementById(algorithmId);
            algorithmContainer.style.display = 'flex';
        });
    });

    // Initial Setup
    const welcomeScreen = document.querySelector('.welcome-screen');
    setTimeout(function() {
        welcomeScreen.style.display = 'none'; // 3 saniye sonra welcome ekranını kaldır
    }, 3000);

    // Set default theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.className = currentTheme;
    themeSelect.value = currentTheme;

    // Theme Switcher
    themeSelect.addEventListener('change', function() {
        const selectedTheme = themeSelect.value;
        document.body.className = selectedTheme;
        localStorage.setItem('theme', selectedTheme);
    });
});
