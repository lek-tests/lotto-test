export const generateLottoCard = () => {
    const card = Array.from({ length: 3 }, () => Array(9).fill(null));

    const usedNumbers = new Set<number>();
    const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const rowStructures = Array.from({ length: 3 }, () => {
        return Array.from({ length: 9 }, (_, i) => i)
            .sort(() => Math.random() - 0.5)
            .slice(0, 5)
            .sort((a, b) => a - b);
    });

    for (let col = 0; col < 9; col++) {

        const min = col === 0 ? 1 : col * 10;
        const max = col === 8 ? 90 : (col + 1) * 10 - 1;

        const rows = rowStructures.map((cols, row) => (cols.includes(col) ? row : -1)).filter(row => row !== -1);

        const numbers = new Set();
        while (numbers.size < rows.length) {
            const num = getRandomNumber(min, max);
            if (!usedNumbers.has(num)) {
                numbers.add(num);
                usedNumbers.add(num);
            }
        }

        [...numbers].forEach((num, i) => {
            card[rows[i]][col] = num;
        });
    }

    return card;
};
