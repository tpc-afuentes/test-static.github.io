<!-- filepath: c:\Users\afuentes\Documents\GITHUB ------------------------ ENTERPRISE\-------- CLOUD\v2\static-site\test\test-static.github.io\components\CarouselBadges.vue -->
<template>
  <div class="carousel-container">
    <ClientOnly>
      <div id="carousel-badges" class="splide" ref="splideRef">
        <div class="splide__track">
          <ul class="splide__list">
            <li v-for="badge in badges" :key="badge.id" class="splide__slide">
              <div class="badge-item">
                <div class="badge-icon">{{ badge.icon }}</div>
                <p class="badge-name">{{ badge.name }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <template #fallback>
        <div class="fallback-grid">
          <div v-for="badge in badges" :key="badge.id" class="badge-item">
            <div class="badge-icon">{{ badge.icon }}</div>
            <p class="badge-name">{{ badge.name }}</p>
          </div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const splideRef = ref(null)
let splideInstance = null

const badges = ref([
  { id: 1, name: 'HTML5', icon: '🌐', image: '/images/badges/html5.png' },
  { id: 2, name: 'CSS3', icon: '🎨', image: '/images/badges/css3.png' },
  { id: 3, name: 'JavaScript', icon: '⚡', image: '/images/badges/javascript.png' },
  { id: 4, name: 'Vue.js', icon: '💚', image: '/images/badges/vuejs.png' },
  { id: 5, name: 'Nuxt.js', icon: '🚀', image: '/images/badges/nuxtjs.png' },
  { id: 6, name: 'Node.js', icon: '🟢', image: '/images/badges/nodejs.png' },
  { id: 7, name: 'Bootstrap', icon: '🅱️', image: '/images/badges/bootstrap.png' },
  { id: 8, name: 'Git', icon: '📝', image: '/images/badges/git.png' }
])

onMounted(async () => {
  if (process.client) {
    try {
      console.log('Iniciando carga de Splide...')
      
      const { Splide } = await import('@splidejs/splide')
      await import('@splidejs/splide/css')
      
      await nextTick()
      
      if (splideRef.value) {
        console.log('Montando Splide...')
        splideInstance = new Splide(splideRef.value, {
          type: 'loop',
          perPage: 4,
          perMove: 1,
          gap: '1rem',
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: true,
          pagination: false,
          classes: {
            arrows: 'splide__arrows your-class-arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev your-class-prev',
            next  : 'splide__arrow--next your-class-next',
          },
          breakpoints: {
            1024: { perPage: 3 },
            768: { perPage: 2 },
            480: { perPage: 1 }
          }
        })
        
        splideInstance.mount()
        console.log('Splide montado exitosamente')
      }
    } catch (error) {
      console.error('Error loading Splide:', error)
    }
  }
})

onUnmounted(() => {
  if (splideInstance) {
    splideInstance.destroy()
  }
})
</script>

<style scoped>
.carousel-container {
  width: 100%;
  margin: 2rem 0;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.badge-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
}

.badge-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.badge-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 0.5rem;
  display: none; /* Ocultar imágenes temporalmente */
}

.badge-name {
  font-size: 0.9rem;
  margin: 0;
  color: #333;
}

.fallback-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

:deep(.splide__arrow) {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
}

:deep(.splide__arrow:hover) {
  background: rgba(0, 0, 0, 0.8);
}
</style>