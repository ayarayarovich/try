export class Hover3D
{
    constructor(id)
    {
        this.id = id;
        this.xOffset = 8;
        this.yOffset = 8;
        this.attack = 0.1;
        this.release = 0.5;
        this.perspective = 500;
        this.create();
    }

    create()
    {
        document.querySelectorAll(this.id).forEach(element =>
        {
            const perspective = "perspective(" + this.perspective + "px)";
            element.style.setProperty("transform-style", "preserve-3d");

            element.addEventListener("mouseenter", e =>
            {
                element.style.setProperty("transition", "transform " + this.attack + "s");
            })

            element.addEventListener("mousemove", e =>
            {
                let dy = e.clientY - element.getBoundingClientRect().top;
                let dx = e.clientX - element.getBoundingClientRect().left;
                let xRot = this.map(dx, 0, element.getBoundingClientRect().width, -this.xOffset, this.xOffset);
                let yRot = this.map(dy, 0, element.getBoundingClientRect().height, this.yOffset, -this.yOffset);
                let propXRot = "rotateX(" + yRot + "deg)";
                let propYRot = "rotateY(" + xRot + "deg)";

                element.style.setProperty("transform", `${perspective} ${propXRot} ${propYRot}`);
            })

            element.addEventListener("mouseleave", e =>
            {
                element.style.setProperty("transition", "transform " + this.release + "s");
                element.style.setProperty("transform", perspective + "rotateX(0deg) rotateY(0deg)");
            })
        })
    }
    // p5.js map() function
    map(value, istart, istop, ostart, ostop)
    {
        return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }
}
