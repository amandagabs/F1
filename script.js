document.addEventListener('DOMContentLoaded', function() {
    const cars = document.querySelectorAll('.car');
    const startRaceBtn = document.getElementById('startRace');
    const placeBetBtn = document.getElementById('placeBet');
    const betAmountInput = document.getElementById('betAmount');
    const driverSelect = document.getElementById('driver');
    const balanceDisplay = document.getElementById('balance');
    const resultDisplay = document.getElementById('result');

    let raceInProgress = false;
    let raceInterval;

    let balance = 100;
    let betAmount;
    let selectedDriver;

    startRaceBtn.addEventListener('click', startRace);
    placeBetBtn.addEventListener('click', placeBet);

    function startRace() {
        if (!raceInProgress) {
            resultDisplay.textContent = '';
            raceInProgress = true;
            resetCars();
            raceInterval = setInterval(moveCars, 50);
        }
    }

    function moveCars() {
        cars.forEach(car => {
            const currentMarginLeft = parseInt(car.style.marginLeft || 0);
            const randomDistance = Math.random() * 10;
            car.style.marginLeft = (currentMarginLeft + randomDistance) + 'px';
            if (currentMarginLeft >= 800) {
                raceInProgress = false;
                clearInterval(raceInterval);
                announceResult(car);
            }
        });
    }

    function resetCars() {
        cars.forEach(car => {
            car.style.marginLeft = '0px';
        });
    }

    function placeBet() {
        betAmount = parseInt(betAmountInput.value);
        selectedDriver = parseInt(driverSelect.value);
        if (isNaN(betAmount) || betAmount < 5 || betAmount > balance) {
            alert('Valor de aposta inválido! O valor mínimo é R$5 e o saldo disponível é R$' + balance);
            return;
        }
        balance -= betAmount;
        balanceDisplay.textContent = 'R$' + balance;
        startRaceBtn.disabled = false;
    }

    function announceResult(winningCar) {
        const winningDriver = Array.from(cars).indexOf(winningCar) + 1;
        if (winningDriver === selectedDriver) {
            balance += betAmount * 2;
            resultDisplay.textContent = 'Você Ganhou! Seu saldo agora é de R$' + balance;
        } else {
            resultDisplay.textContent = 'Você perdeu! Seu saldo agora é de R$' + balance;
        }
        balanceDisplay.textContent = 'R$' + balance;
        betAmountInput.value = '';
        startRaceBtn.disabled = true;
    }
    document.addEventListener('DOMContentLoaded', function() {
        const cars = document.querySelectorAll('.car');
        const startRaceBtn = document.getElementById('startRace');
        const placeBetBtn = document.getElementById('placeBet');
        const betAmountInput = document.getElementById('betAmount');
        const driverSelect = document.getElementById('driver');
        const balanceDisplay = document.getElementById('balance');
        const resultDisplay = document.getElementById('result');
    
        let raceInProgress = false;
        let raceInterval;
    
        let balance = 100;
        let betAmount;
        let selectedDriver;
    
        startRaceBtn.addEventListener('click', startRace);
        placeBetBtn.addEventListener('click', placeBet);
    
        function startRace() {
            if (!raceInProgress) {
                resultDisplay.textContent = '';
                raceInProgress = true;
                resetCars();
                raceInterval = setInterval(moveCars, 50);
            }
        }
    
        function moveCars() {
            cars.forEach(car => {
                const currentMarginLeft = parseInt(car.style.marginLeft || 0);
                const randomDistance = Math.random() * 10;
                car.style.marginLeft = (currentMarginLeft + randomDistance) + 'px';
                if (currentMarginLeft >= 800) {
                    raceInProgress = false;
                    clearInterval(raceInterval);
                    announceResult(car);
                }
            });
        }
    
        function resetCars() {
            cars.forEach(car => {
                car.style.marginLeft = '0px';
            });
        }
    
        function placeBet() {
            betAmount = parseInt(betAmountInput.value);
            selectedDriver = parseInt(driverSelect.value);
            if (isNaN(betAmount) || betAmount < 5 || betAmount > balance) {
                alert('Valor de aposta inválido! O valor mínimo é R$5 e o saldo disponível é R$' + balance);
                return;
            }
            balance -= betAmount;
            balanceDisplay.textContent = 'R$' + balance;
            startRaceBtn.disabled = false;
        }
    
        function announceResult(winningCar) {
            const winningDriver = Array.from(cars).indexOf(winningCar) + 1;
            if (winningDriver === selectedDriver) {
                balance += betAmount * 2;
                resultDisplay.textContent = 'Você Ganhou! Seu saldo agora é de R$' + balance;
            } else {
                resultDisplay.textContent = 'Você perdeu! Seu saldo agora é de R$' + balance;
            }
            balanceDisplay.textContent = 'R$' + balance;
            betAmountInput.value = '';
            startRaceBtn.disabled = true;
        }
    });
    
});
