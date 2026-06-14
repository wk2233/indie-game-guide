import DefaultTheme from 'vitepress/theme'
import './style.css'
import GameRankingTable from '../components/GameRankingTable.vue'
import GameDataCard from '../components/GameDataCard.vue'
import StepChecklist from '../components/StepChecklist.vue'

// =========== 粒子背景 ===========
function initParticles() {
  if (typeof document === 'undefined') return
  const canvas = document.createElement('canvas')
  canvas.id = 'particles-canvas'
  document.body.prepend(canvas)

  const ctx = canvas.getContext('2d')
  const particles = []
  const PARTICLE_COUNT = 50

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  class Particle {
    constructor() { this.reset() }
    reset() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 0.35
      this.vy = (Math.random() - 0.5) * 0.35
      this.radius = Math.random() * 2.2 + 1
      this.opacity = Math.random() * 0.35 + 0.1
      // 几何形状 0=圆 1=三角 2=方块
      this.shape = Math.floor(Math.random() * 3)
      this.rotation = Math.random() * Math.PI * 2
      this.rotSpeed = (Math.random() - 0.5) * 0.02
    }
    update() {
      this.x += this.vx
      this.y += this.vy
      this.rotation += this.rotSpeed
      if (this.x < -30 || this.x > canvas.width + 30 ||
          this.y < -30 || this.y > canvas.height + 30) { this.reset() }
    }
    draw() {
      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.rotate(this.rotation)
      ctx.fillStyle = `rgba(99,102,241,${this.opacity})`
      ctx.strokeStyle = `rgba(168,85,247,${this.opacity * 0.6})`
      ctx.lineWidth = 0.5
      if (this.shape === 0) {
        ctx.beginPath(); ctx.arc(0, 0, this.radius, 0, Math.PI * 2); ctx.fill()
      } else if (this.shape === 1) {
        const s = this.radius * 2
        ctx.beginPath()
        ctx.moveTo(0, -s); ctx.lineTo(s * 0.87, s * 0.5); ctx.lineTo(-s * 0.87, s * 0.5); ctx.closePath()
        ctx.stroke()
      } else {
        const s = this.radius * 1.5
        ctx.strokeRect(-s / 2, -s / 2, s, s)
      }
      ctx.restore()
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle())

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const p of particles) { p.update(); p.draw() }
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 140) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(99,102,241,${0.05 * (1 - dist / 140)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
    requestAnimationFrame(animate)
  }
  animate()
}

// =========== 鼠标追踪光效 ===========
function initMouseGlow() {
  if (typeof window === 'undefined' || window.innerWidth < 768) return
  const glow = document.createElement('div')
  glow.id = 'mouse-glow'
  document.body.appendChild(glow)

  let mx = -200, my = -200
  let cx = -200, cy = -200

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY
  })

  function follow() {
    cx += (mx - cx) * 0.08
    cy += (my - cy) * 0.08
    glow.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`
    requestAnimationFrame(follow)
  }
  follow()
}

// =========== 滚动揭示动画 ===========
function initScrollReveal() {
  if (typeof window === 'undefined') return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

  // 延迟一下等 DOM 渲染完
  setTimeout(() => {
    document.querySelectorAll('.data-card, .ranking-table, .platform-card, .step-list li, h1, h2, .VPHero')
      .forEach(el => {
        el.classList.add('reveal-hidden')
        observer.observe(el)
      })
  }, 300)
}

// =========== 数字跳动效果 ===========
function animateCounters() {
  if (typeof window === 'undefined') return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const target = parseInt(el.dataset.target || el.textContent.replace(/[^0-9]/g, ''))
        if (!target || isNaN(target)) return
        const suffix = el.textContent.replace(/[0-9]/g, '').trim()
        const duration = 1500
        const start = performance.now()

        function tick(now) {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          // easeOutExpo
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
          const current = Math.floor(eased * target)
          el.textContent = target >= 10000 ? (current / 10000).toFixed(1) + '万' + suffix : current + suffix
          if (progress < 1) requestAnimationFrame(tick)
          else el.textContent = target >= 100000000 ? (target / 100000000).toFixed(1) + '亿' + suffix
            : target >= 10000 ? (target / 10000).toFixed(0) + '万' + suffix
            : target + suffix
        }
        requestAnimationFrame(tick)
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.5 })

  setTimeout(() => {
    document.querySelectorAll('.data-card-item .value, .animated-number')
      .forEach(el => observer.observe(el))
  }, 500)
}

// =========== 启动所有效果 ===========
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GameRankingTable', GameRankingTable)
    app.component('GameDataCard', GameDataCard)
    app.component('StepChecklist', StepChecklist)
  },
  setup() {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        initParticles()
        initMouseGlow()
        initScrollReveal()
        animateCounters()
      }, 100)
    }
  }
}
