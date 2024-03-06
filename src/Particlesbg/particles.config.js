const particleConifg = {
    fullScreen: {
        enable: false,
        zIndex: -1,
    },
    background: {
        color: {
            value: "#1f1f38",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#2c2c6c",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 900,
            },
            value: 100,
        },
        opacity: {
            value: 0.8,
        },
        shape: {
            type: "triangle",
        },
        size: {
            value: { min: 1, max: 10 },
        },
    },
    detectRetina: true,
}


export default particleConifg