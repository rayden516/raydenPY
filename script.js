// Actualizar el estado en línea de forma aleatoria
function updateOnlineStatus() {
    const status = document.querySelector('.status');
    const indicator = document.querySelector('.status-indicator');
    
    if (Math.random() > 0.5) {
        status.innerHTML = `
            <span class="status-indicator"></span>
            Online
        `;
        indicator.style.backgroundColor = '#4ade80';
    } else {
        status.innerHTML = `
            <span class="status-indicator"></span>
            Offline
        `;
        indicator.style.backgroundColor = '#888';
    }
}

// Actualizar estado cada 30 segundos
setInterval(updateOnlineStatus, 30000);
