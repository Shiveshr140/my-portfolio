


function progress(percentage,cls){
    return `
    <div class="outer">
        <div class="inner">
            <div class="number">${percentage}%</div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <defs>
            <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
        </defs>
        <circle class="${cls}" cx="80" cy="80" r="70" stroke-linecap="round" />
    </svg>
    
    `
}


const js = document.querySelector(".graph-js")
js.innerHTML = progress(80, 'cicle-js')

const hc = document.querySelector(".graph-htmlcss")
hc.innerHTML = progress(85, 'circle-hc')

const rt = document.querySelector(".graph-react")
rt.innerHTML = progress(80, "cicle-react")

const nd = document.querySelector(".graph-node")
nd.innerHTML = progress(85, 'cicle-node')

const fs = document.querySelector(".graph-flask")
fs.innerHTML = progress(80, "cicle-flask")

const py = document.querySelector(".graph-python")
py.innerHTML = progress(80, "cicle-python")


function stroke(num, cls) {
    const circle = document.querySelector(cls);
    const length = circle.getTotalLength();
    circle.style.strokeDasharray = length;
    
    return circle.style.strokeDashoffset = num * length;
}

stroke(0.15, '.circle-hc' );
stroke(0.20, '.cicle-js' );
stroke(0.50, '.cicle-react' );
stroke(0.15, '.cicle-node' );
stroke(0.20, '.cicle-flask' );
stroke(0.20, '.cicle-python' );
