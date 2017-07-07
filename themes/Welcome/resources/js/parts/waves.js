export default class Waves {
    constructor()
    {
        this.setConfig();
        this.getElements();
        this.initWaves();
    }

    setConfig()
    {
        this.config = {
            waveCanvas: 'wave',
            waveContainer: 'wave-container',
            canvas: 'canvas'
        };

        this.waves = [
            { x: 0, duration: 100, opacity: 0.04, amplitude: 0.2, offset: { x: 0, y: 30 } },
            { x: 0, duration: 45, opacity: 0.03, amplitude: 0.15, offset: { x: 0, y: 60 } },
        ];
    }

    getElements()
    {
        this.waveContainer = document.querySelector('.' + this.config.waveContainer);
    }

    initWaves()
    {   
        for(var i = 0; i < this.waves.length; i++) {
            this.drawWave(this.waves[i]);
        }
    }

    drawWave(wave)
    {   
        wave.svg = this.createSvg(wave); 
        wave.svg.appendChild(this.createPath(wave));
        this.waveContainer.appendChild(wave.svg);
    }

    createSvg(wave)
    {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '400');
        svg.setAttribute('height', '100');
        svg.setAttribute('viewBox', '0 0 400 100');
        svg.classList.add(this.config.waveCanvas);
        svg.style.opacity = wave.opacity;
        svg.style.transform = 'translateX(' + -wave.offset.x + 'px)';
        svg.style.top = wave.offset.y + '%';
        svg.style.animation = 'wave '+ wave.duration +'s linear infinite';
        return svg;
    }

    createPath(wave)
    {
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        var height = 100 * wave.amplitude;
        path.setAttribute('d', `M 0 ${height} C 50 ${height}, 50 0, 100 0 C 150 0, 150 ${height}, 200 ${height} C 250 ${height}, 250 0, 300 0 C 350 0, 350 ${height}, 400 ${height}, V 800 H 0`);
        path.setAttribute('transform', 'translate(0 -55)');
        path.setAttribute('fill', 'white');
        return path;
    }

}
