// script.js

function showAlgorithm(algorithm) {
    document.getElementById('welcome-panel').style.display = 'none';
    const panels = document.getElementsByClassName('algorithm-panel');
    for (let panel of panels) {
        panel.classList.remove('active');
    }
    document.getElementById(algorithm).classList.add('active');
}

function sortBubble() {
    const input = document.getElementById('bubble-input').value.split(',').map(Number);
    const steps = [];
    let arr = [...input];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                steps.push([...arr]);
            }
        }
    }

    document.getElementById('bubble-steps').innerHTML = steps.map(step => `<div>${step.join(', ')}</div>`).join('');
    document.getElementById('bubble-result').innerHTML = arr.join(', ');
}

function clearBubble() {
    document.getElementById('bubble-input').value = '';
    document.getElementById('bubble-steps').innerHTML = '';
    document.getElementById('bubble-result').innerHTML = '';
}

function sortSelection() {
    const input = document.getElementById('selection-input').value.split(',').map(Number);
    const steps = [];
    let arr = [...input];

    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
            steps.push([...arr]);
        }
    }

    document.getElementById('selection-steps').innerHTML = steps.map(step => `<div>${step.join(', ')}</div>`).join('');
    document.getElementById('selection-result').innerHTML = arr.join(', ');
}

function clearSelection() {
    document.getElementById('selection-input').value = '';
    document.getElementById('selection-steps').innerHTML = '';
    document.getElementById('selection-result').innerHTML = '';
}

function sortInsertion() {
    const input = document.getElementById('insertion-input').value.split(',').map(Number);
    const steps = [];
    let arr = [...input];

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            steps.push([...arr]);
        }
        arr[j + 1] = key;
        steps.push([...arr]);
    }

    document.getElementById('insertion-steps').innerHTML = steps.map(step => `<div>${step.join(', ')}</div>`).join('');
    document.getElementById('insertion-result').innerHTML = arr.join(', ');
}

function clearInsertion() {
    document.getElementById('insertion-input').value = '';
    document.getElementById('insertion-steps').innerHTML = '';
    document.getElementById('insertion-result').innerHTML = '';
}

function sortMerge() {
    const input = document.getElementById('merge-input').value.split(',').map(Number);
    const steps = [];
    let arr = [...input];

    function mergeSort(arr) {
        if (arr.length < 2) {
            return arr;
        }
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        const result = [];
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
            steps.push([...result, ...left, ...right]);
        }
        return result.concat(left, right);
    }

    arr = mergeSort(arr);
    document.getElementById('merge-steps').innerHTML = steps.map(step => `<div>${step.join(', ')}</div>`).join('');
    document.getElementById('merge-result').innerHTML = arr.join(', ');
}

function clearMerge() {
    document.getElementById('merge-input').value = '';
    document.getElementById('merge-steps').innerHTML = '';
    document.getElementById('merge-result').innerHTML = '';
}

function sortQuick() {
    const input = document.getElementById('quick-input').value.split(',').map(Number);
    const steps = [];
    let arr = [...input];

    function quickSort(arr) {
        if (arr.length < 2) {
            return arr;
        }
        const pivot = arr[0];
        const left = arr.slice(1).filter(item => item <= pivot);
        const right = arr.slice(1).filter(item => item > pivot);
        steps.push([...left, pivot, ...right]);
        return [...quickSort(left), pivot, ...quickSort(right)];
    }

    arr = quickSort(arr);
    document.getElementById('quick-steps').innerHTML = steps.map(step => `<div>${step.join(', ')}</div>`).join('');
    document.getElementById('quick-result').innerHTML = arr.join(', ');
}

function clearQuick() {
    document.getElementById('quick-input').value = '';
    document.getElementById('quick-steps').innerHTML = '';
    document.getElementById('quick-result').innerHTML = '';
}

function sortHeap() {
    const input = document.getElementById('heap-input').value.split(',').map(Number);
    const steps = [];
    let arr = [...input];

    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest != i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            steps.push([...arr]);
            heapify(arr, n, largest);
        }
    }

    function heapSort(arr) {
        let n = arr.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            steps.push([...arr]);
            heapify(arr, i, 0);
        }
    }

    heapSort(arr);
    document.getElementById('heap-steps').innerHTML = steps.map(step => `<div>${step.join(', ')}</div>`).join('');
    document.getElementById('heap-result').innerHTML = arr.join(', ');
}

function clearHeap() {
    document.getElementById('heap-input').value = '';
    document.getElementById('heap-steps').innerHTML = '';
    document.getElementById('heap-result').innerHTML = '';
}

function sortCounting() {
    const input = document.getElementById('counting-input').value.split(',').map(Number);
    const steps = [];
    let arr = [...input];

    function countingSort(arr) {
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        const count = new Array(max - min + 1).fill(0);
        const output = new Array(arr.length).fill(0);

        for (let i = 0; i < arr.length; i++) {
            count[arr[i] - min]++;
            steps.push([...count]);
        }

        for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
            steps.push([...count]);
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            output[--count[arr[i] - min]] = arr[i];
            steps.push([...output]);
        }

        return output;
    }

    arr = countingSort(arr);
    document.getElementById('counting-steps').innerHTML = steps.map(step => `<div>${step.join(', ')}</div>`).join('');
    document.getElementById('counting-result').innerHTML = arr.join(', ');
}

function clearCounting() {
    document.getElementById('counting-input').value = '';
    document.getElementById('counting-steps').innerHTML = '';
    document.getElementById('counting-result').innerHTML = '';
}

function sortShell() {
    const input = document.getElementById('shell-input').value.split(',').map(Number);
    const steps = [];
    let arr = [...input];

    function shellSort(arr) {
        let n = arr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                    steps.push([...arr]);
                }
                arr[j] = temp;
                steps.push([...arr]);
            }
        }
        return arr;
    }

    arr = shellSort(arr);
    document.getElementById('shell-steps').innerHTML = steps.map(step => `<div>${step.join(', ')}</div>`).join('');
    document.getElementById('shell-result').innerHTML = arr.join(', ');
}

function clearShell() {
    document.getElementById('shell-input').value = '';
    document.getElementById('shell-steps').innerHTML = '';
    document.getElementById('shell-result').innerHTML = '';
}

function sortTim() {
    const input = document.getElementById('tim-input').value.split(',').map(Number);
    const steps = [];
    let arr = [...input];

    function insertionSort(arr, left, right) {
        for (let i = left + 1; i <= right; i++) {
            let temp = arr[i];
            let j = i - 1;
            while (j >= left && arr[j] > temp) {
                arr[j + 1] = arr[j];
                j--;
                steps.push([...arr]);
            }
            arr[j + 1] = temp;
            steps.push([...arr]);
        }
    }

    function merge(arr, l, m, r) {
        let len1 = m - l + 1;
        let len2 = r - m;
        let left = new Array(len1);
        let right = new Array(len2);
        for (let i = 0; i < len1; i++)
            left[i] = arr[l + i];
        for (let i = 0; i < len2; i++)
            right[i] = arr[m + 1 + i];

        let i = 0;
        let j = 0;
        let k = l;

        while (i < len1 && j < len2) {
            if (left[i] <= right[j]) {
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = right[j];
                j++;
            }
            k++;
            steps.push([...arr]);
        }

        while (i < len1) {
            arr[k] = left[i];
            k++;
            i++;
            steps.push([...arr]);
        }

        while (j < len2) {
            arr[k] = right[j];
            k++;
            j++;
            steps.push([...arr]);
        }
    }

    function timSort(arr, n) {
        let RUN = 32;
        for (let i = 0; i < n; i += RUN)
            insertionSort(arr, i, Math.min(i + RUN - 1, n - 1));

        for (let size = RUN; size < n; size = 2 * size) {
            for (let left = 0; left < n; left += 2 * size) {
                let mid = Math.min(left + size - 1, n - 1);
                let right = Math.min(left + 2 * size - 1, n - 1);
                if (mid < right)
                    merge(arr, left, mid, right);
            }
        }
        return arr;
    }

    arr = timSort(arr, arr.length);
    document.getElementById('tim-steps').innerHTML = steps.map(step => `<div>${step.join(', ')}</div>`).join('');
    document.getElementById('tim-result').innerHTML = arr.join(', ');
}

function clearTim() {
    document.getElementById('tim-input').value = '';
    document.getElementById('tim-steps').innerHTML = '';
    document.getElementById('tim-result').innerHTML = '';
}

function sortRadix() {
    const input = document.getElementById('radix-input').value.split(',').map(Number);
    const steps = [];
    let arr = [...input];

    function countingSort(arr, exp) {
        let n = arr.length;
        let output = new Array(n);
        let count = new Array(10).fill(0);

        for (let i = 0; i < n; i++)
            count[Math.floor(arr[i] / exp) % 10]++;

        for (let i = 1; i < 10; i++)
            count[i] += count[i - 1];

        for (let i = n - 1; i >= 0; i--) {
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
            steps.push([...output]);
        }

        for (let i = 0; i < n; i++)
            arr[i] = output[i];
    }

    function radixSort(arr) {
        let max = Math.max(...arr);
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10)
            countingSort(arr, exp);
        return arr;
    }

    arr = radixSort(arr);
    document.getElementById('radix-steps').innerHTML = steps.map(step => `<div>${step.join(', ')}</div>`).join('');
    document.getElementById('radix-result').innerHTML = arr.join(', ');
}

function clearRadix() {
    document.getElementById('radix-input').value = '';
    document.getElementById('radix-steps').innerHTML = '';
    document.getElementById('radix-result').innerHTML = '';
}
