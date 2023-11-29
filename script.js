
        function binomialDistribution(n, p) {
            const result = Array.from({ length: n + 1 }, () => 0);
            for (let i = 0; i < n; i++) {
                let successes = 0;
                for (let j = 0; j < n; j++) {
                    if (Math.random() < p) {
                        successes++;
                    }
                }
                result[successes]++;
            }
            return result;
        }

        function runSimulation() {
            const trials = parseInt(document.getElementById('trials').value);
            const probability = parseFloat(document.getElementById('probability').value);
            const board = document.getElementById('galton-board');
            board.innerHTML = '';

            const distribution = binomialDistribution(trials, probability);

            for (let i = 0; i < distribution.length; i++) {
                const column = document.createElement('div');
                for (let j = 0; j < distribution[i]; j++) {
                    const peg = document.createElement('div');
                    peg.className = 'peg';
                    column.appendChild(peg);
                }
                board.appendChild(column);
            }
        }
