/*
    The class representing a wall.

    Implements draw().
*/
class Wall {
    constructor(id, name, x, y, size, color) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

export { Wall };
