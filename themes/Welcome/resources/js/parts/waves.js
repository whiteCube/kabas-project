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
            scale: 80,
            smoothing: 80
        };

        this.waves = [
            { x: 0, speed: 0.009, opacity: 0.03, amplitude: 0.3, offset: { x: 0, y: 0.33 } },
            { x: 200, speed: 0.015, opacity: 0.03, amplitude: 0.15, offset: { x: 0, y: 0.66 } },
        ];
    }

    initCanvas()
    {
        this.canvas = document.getElementById(this.conf.canvas);
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
        this.ctx = this.canvas.getContext('2d');
        this.drawLimit = this.canvas.width + this.conf.smoothing;
    }

    draw()
    {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawWaves();
        requestAnimationFrame(this.draw.bind(this));
    }

    drawWaves()
    {
        var i = 0;
        for(i; i < this.waves.length; i++) {
            this.ctx.beginPath();
            this.drawWave(this.waves[i]);
            this.ctx.closePath();
        }
    }

    drawWave(wave)
    {   
        var x, y, i = 0;
        wave.x -= wave.speed;
        for(i; i <= this.drawLimit; i += this.conf.smoothing) {
            x = wave.x + i / this.conf.scale;
            y = Math.sin(wave.amplitude * x);
            this.ctx.lineTo(i, Math.round((this.conf.scale * y) + (wave.offset.y * this.canvas.height)));
        }
        this.ctx.lineTo(this.canvas.width, this.canvas.height);
        this.ctx.lineTo(0, this.canvas.height);
        this.ctx.fillStyle = 'rgba(255, 255, 255, '+ wave.opacity +')';
        this.ctx.fill();
    }


}
