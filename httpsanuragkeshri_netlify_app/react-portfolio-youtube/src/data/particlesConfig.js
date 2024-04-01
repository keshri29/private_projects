export default {
  fullScreen: false,
  background: {
    color: {
      value: "#fffff",
    },
  },
  fpsLimit: 220,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        quantity: 14,
      },
      repulse: {
        distance: 200,
        duration: 0.7,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 200,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 400,
      },
      value: 100,
    },
    opacity: {
      value: 5,
    },
    shape: {
      type: "circle",

    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
}