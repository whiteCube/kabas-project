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
            wave: 'wave',
            waveContainer: 'wave-container'
        };

        this.waves = [
            { x: 0, duration: 50, opacity: 0.04, amplitude: 0.12, offset: { y: 30 } },
            { x: 200, duration: 30, opacity: 0.03, amplitude: 0.085, offset: { y: 60 } },
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
        var width = this.getSvgWidth();
        var height = this.getSvgHeight(wave);
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
        svg.classList.add(this.config.wave);
        svg.style.opacity = wave.opacity;
        svg.style.top = wave.offset.y + '%';
        svg.style.height = height + 'px';
        svg.style.animation = 'wave '+ wave.duration +'s linear infinite';
        return svg;
    }

    createPath(wave)
    {
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        var svgHeight = this.getSvgHeight(wave);
        var width = this.getSvgWidth();
        var height = this.calculate(100, width) * wave.amplitude;
        path.setAttribute('d', `M 0 ${height} C ${this.calculate(50, width)} ${height}, ${this.calculate(50, width)} 0, ${this.calculate(100, width)} 0 C ${this.calculate(150, width)} 0, ${this.calculate(150, width)} ${height}, ${this.calculate(200, width)} ${height} C ${this.calculate(250, width)} ${height}, ${this.calculate(250, width)} 0, ${this.calculate(300, width)} 0 C ${this.calculate(350, width)} 0, ${this.calculate(350, width)} ${height}, ${this.calculate(400, width)} ${height} V ${svgHeight} H 0 Z`);
        path.setAttribute('fill', 'white');
        return path;
    }

    getSvgHeight(wave)
    {
        return window.innerHeight * ((100 - wave.offset.y) / 100);
    }

    getSvgWidth()
    {
        return window.innerWidth * 2;
    }

    calculate(number, width)
    {
        return (number * width) / 400;
    }

}
