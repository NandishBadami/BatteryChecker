navigator.getBattery().then((battery) => {
            const h1 = document.querySelector('h1');
            const p = document.querySelector('p');
            h1.textContent = parseInt(battery.level * 100) + '%';
            if(battery.level * 100 <= 20) h1.style.backgroundColor = 'red';
            if(battery.charging){
                h1.style.backgroundColor = 'lawngreen';
                p.textContent = 'Charging Time: ' + battery.chargingTime;
            } else {
                if(battery.dischargingTime == 'Infinity') p.textContent = 'Discharging Time: ' + battery.dischargingTime;
                else p.textContent = 'Discharging Time: ' + parseInt(battery.dischargingTime/100) + "min left";
            }
            battery.addEventListener('levelchange', () => {
                h1.textContent = parseInt(battery.level * 100) + '%';
                if(battery.level * 100 <= 20) h1.style.backgroundColor = 'red';
            });
            battery.addEventListener('chargingchange', function() {
                if(battery.charging == true){
                    h1.style.backgroundColor = 'lawngreen';
                    p.textContent = 'Charging Time: ' + battery.chargingTime;
                } else {
                    h1.style.backgroundColor = 'white';
                    if(battery.level * 100 <= 20) h1.style.backgroundColor = 'red';
                    if(battery.dischargingTime == 'Infinity') p.textContent = 'Discharging Time: ' + battery.dischargingTime;
                    else p.textContent = 'Discharging Time: ' + parseInt(battery.dischargingTime/100) + "min left";
                }
            });
            battery.addEventListener('dischargingtimechange', () => {
                if(battery.dischargingTime == 'Infinity') p.textContent = 'Discharging Time: ' + battery.dischargingTime;
                else p.textContent = 'Discharging Time: ' + parseInt(battery.dischargingTime/100) + "min left";
            });
            battery.addEventListener('chargingtimechange', () => {
                p.textContent = 'Charging Time: ' + battery.chargingTime;
            });
        });