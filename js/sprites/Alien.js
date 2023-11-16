class Alien {
    constructor(id) {
        this.element = document.getElementById(id);
        this.element.onclick = () => {
            if (time > 0) {
                let val = parseInt(document.querySelector("#input-score").value);
                document.querySelector("#input-score").value = val + 1;
                this.move();
            }
        }

        this.move();
    }

    move() {
        this.element.style.left = 100 + Math.random() * (window.innerWidth - 200) + "px";
        this.element.style.top = 400 + "px";
    }

    tick() {
        if (time > 0) {
            let top = this.element.offsetTop;
            this.element.style.top = top - 2 + "px";
        }
    }
}