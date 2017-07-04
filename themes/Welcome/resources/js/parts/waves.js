export default class Waves {
    constructor()
    {
        this.setConfig();
        this.initCanvas();
        this.draw();
    }

    setConfig()
    {
        this.conf = {
            canvas: 'canvas',
            unit: 100,
            amplitude: 0.3,
            smoothing: 10
        };

        this.waves = [
            { x: 0, y: 0, speed: 0.007, opacity: 0.03, offset: { x: 0, y: 0.33 } },
            { x: 300, y: 0, speed: 0.015, opacity: 0.03, offset: { x: 0, y: 0.66 } },
        ];
    }

    initCanvas()
    {
        this.canvas = document.getElementById(this.conf.canvas);
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
        this.ctx = this.canvas.getContext('2d');
    }

    draw()
    {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawWaves();
        requestAnimationFrame(this.draw.bind(this));
    }

    drawWaves()
    {
        for(var i = 0; i < this.waves.length; i++) {
            this.ctx.beginPath();
            this.drawWave(this.waves[i]);
            this.ctx.closePath();
        }
    }

    drawWave(wave)
    {   
        wave.x = wave.x -= wave.speed;
        wave.y = Math.sin(wave.x);
        var x, y;
        for(var i = 0; i <= this.canvas.width + this.conf.smoothing; i += this.conf.smoothing) {
            x = wave.x + i / this.conf.unit;
            y = Math.sin(this.conf.amplitude * x);
            this.ctx.lineTo(i, (this.conf.unit * y) + (wave.offset.y * this.canvas.height));
        }
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height);
        this.ctx.fillStyle = 'rgba(255, 255, 255, '+ wave.opacity +')';
        this.ctx.fill();
    }


}
