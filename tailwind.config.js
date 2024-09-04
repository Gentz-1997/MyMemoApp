//tailwind.config.js 
//FreeBSD-licensed CSS animation by Animista 
module.exports = {
  theme: {
      extend: {
          animation: {
              "text-blur-out": "text-blur-out 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
          },
          keyframes: {
              "text-blur-out": {
                  "0%": {
                      filter: "blur(.01)"
                  },
                  to: {
                      filter: "blur(12px) opacity(0%)"
                  }
              }
          }
      }
  }
}