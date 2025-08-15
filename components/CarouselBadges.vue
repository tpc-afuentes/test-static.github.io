<!-- filepath: c:\Users\afuentes\Documents\GITHUB ------------------------ ENTERPRISE\-------- CLOUD\v2\static-site\test\test-static.github.io\components\CarouselBadges.vue -->
<template>
  <div class="carousel-container">
    <div id="carousel-badges" class="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <li v-for="badge in badges" :key="badge.id" class="splide__slide">
            <div class="badge-item">
              <img :src="badge.image" :alt="badge.name" class="badge-image">
              <p class="badge-name">{{ badge.name }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselBadges',
  data() {
    return {
      badges: [
        { id: 1, name: 'HTML5', image: '/images/badges/html5.png' },
        { id: 2, name: 'CSS3', image: '/images/badges/css3.png' },
        { id: 3, name: 'JavaScript', image: '/images/badges/javascript.png' },
        { id: 4, name: 'Vue.js', image: '/images/badges/vuejs.png' },
        { id: 5, name: 'Nuxt.js', image: '/images/badges/nuxtjs.png' },
        { id: 6, name: 'Node.js', image: '/images/badges/nodejs.png' },
        { id: 7, name: 'Bootstrap', image: '/images/badges/bootstrap.png' },
        { id: 8, name: 'Git', image: '/images/badges/git.png' }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (typeof window !== 'undefined' && window.Splide) {
        const splide = new window.Splide('#carousel-badges', {
          type: 'loop',
          perPage: 4,
          perMove: 1,
          gap: '1rem',
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: true,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            }
          }
        });
        splide.mount();
      }
    });
  }
}
</script>

<style scoped>
.carousel-container {
  width: 100%;
  margin: 2rem 0;
}

.badge-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
}

.badge-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.badge-name {
  font-size: 0.9rem;
  margin: 0;
  color: #333;
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