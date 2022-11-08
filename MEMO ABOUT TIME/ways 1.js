const lerp = (a, b, n) => (1 - n) * a + n * b;

class Cursor {
    constructor() {
        this.target = { x: 0.5, y: 0.5 };
        this.cursor = { x: 0.5, y: 0.5 };
        this.speed = 0.15;
        this.init();
    }
    bindAll() {
        ["onMouseMove", "render"].forEach(
            (fn) => (this[fn] = this[fn].bind(this))
        );
    }
    onMouseMove(e) {
        this.target.x = e.clientX / window.innerWidth;
        this.target.y = e.clientY / window.innerHeight;
        if (!this.raf) this.raf = requestAnimationFrame(this.render);
    }
    render() {
        this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
        this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
        document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
        document.documentElement.style.setProperty("--cursor-y", this.cursor.y);

        const delta = Math.sqrt(
            Math.pow(this.target.x - this.cursor.x, 2) +
                Math.pow(this.target.y - this.cursor.y, 2)
        );

        document.documentElement.style.setProperty(
            "--cursor-scale",
            1 + delta * 3
        );

        if (delta < 0.001) {
            cancelAnimationFrame(this.raf);
            this.raf = null;
            return;
        }

        this.raf = requestAnimationFrame(this.render);
    }
    init() {
        this.bindAll();
        window.addEventListener("mousemove", this.onMouseMove);
        this.raf = requestAnimationFrame(this.render);
    }
}

new Cursor();