import DefaultTheme from 'vitepress/theme'
import './style.css'
import GameRankingTable from '../components/GameRankingTable.vue'
import GameDataCard from '../components/GameDataCard.vue'
import StepChecklist from '../components/StepChecklist.vue'

/** 粒子背景 — 连接线 + 浮动光点 */
function initParticles() {
  if (typeof document === 'undefined') return
  const canvas = document.createElement('canvas')
  canvas.id = 'particles-canvas'
  document.body.prepend(canvas)

  const ctx = canvas.getContext('2d')
  const particles = []
  const PARTICLE_COUNT = 60

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  class Particle {
    constructor() {
      this.reset()
    }
    reset() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 0.4
      this.vy = (Math.random() - 0.5) * 0.4
      this.radius = Math.random() * 2 + 1
      this.opacity = Math.random() * 0.4 + 0.1
    }
    update() {
      this.x += this.vx
      this.y += this.vy
      if (this.x < -20 || this.x > canvas.width + 20 || this.y < -20 || this.y > canvas.height + 20) {
        this.reset()
      }
    }
    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(99,102,241,${this.opacity})`
      ctx.fill()
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle())
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // Update & draw
    for (const p of particles) { p.update(); p.draw() }
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(99,102,241,${0.06 * (1 - dist / 120)})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }
    }
    requestAnimationFrame(animate)
  }
  animate()
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GameRankingTable', GameRankingTable)
    app.component('GameDataCard', GameDataCard)
    app.component('StepChecklist', StepChecklist)
  },
  setup() {
    if (typeof window !== 'undefined') {
      setTimeout(initParticles, 100)
    }
  }
}
