<template>
  <section class="map-section">
    <div class="map-header">
      <h2 class="section-title">Основные ущелья на Яндекс картах</h2>
    </div>

    <div id="yandex-map" ref="mapContainer"></div>

    <div v-if="!selectedLocation" class="placeholder-info">
      <p>Выберите точку на карте, чтобы увидеть подробную информацию</p>
    </div>

    <transition name="fade">
      <div v-if="selectedLocation" class="location-info-container">
        <div class="location-image-wrapper">
          <img :src="selectedLocation.preview" :alt="selectedLocation.name" class="location-image">
        </div>
        <div class="location-details">
          <h3>{{ selectedLocation.name }}</h3>
          <p class="location-description">{{ selectedLocation.description }}</p>
          
          <div v-if="filteredTours.length > 0" class="tours-list">
            <div v-for="tour in filteredTours" :key="tour.id" class="tour-item">
              <div class="tour-info">
                <span class="tour-name">{{ tour.name }}</span>
                <span class="tour-duration">{{ tour.duration }}</span>
              </div>
              <div class="tour-price-block">
                <span class="tour-price">{{ tour.price }} ₽</span>
                <button @click="openBooking(tour)" class="book-button">Выбрать</button>
              </div>
            </div>
          </div>
          
          <button @click="scrollToMap" class="back-to-map">
            ← Вернуться к карте
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Данные для карты (ваши оригинальные точки)
const locations = ref([
  {
    id: 1,
    name: "Дарьяльское ущелье",
    coords: [42.841280, 44.631520],
    type: "village",
    preview: "/images/locations/Darial.webp",
    description: " 24км от Владикавказа, Ворота в Закавказье"
  },
  {
    id: 2,
    name: "Кармадон",
    coords: [42.862970, 44.518812],
    type: "village",
    preview: "/images/locations/Karmadon.webp",
    description: "30км от Владикавказа, В этом ущелье, после схода ледника Колка, пропала группа Сергея Бодрова"
  },
  {
    id: 3,
    name: "Даргавс",
    coords: [42.834115, 44.431108],
    type: "village",
    preview: "/images/locations/Dargavs.webp",
    description: "44 км от Владикавказа, Древний город мёртвых с каменными склепами"
  },
  {
    id: 4,
    name: "Фиагдон",
    coords: [42.859167, 44.312383],
    type: "village",
    preview: "/images/locations/Fiagdon.webp",
    description: "48км от Владикавказа, Самый крупный горный поселок Осетии"
  },
  {
    id: 5,
    name: "Мидагарабинские водопады",
    coords: [42.769626, 44.363269],
    type: "village",
    preview: "/images/locations/Midag.webp",
    description: "70 км от Владикавказа, Самый высокий водопад в Европе"
  },
  {
    id: 6,
    name: "Алагирское ущелье",
    coords: [42.875341, 44.152894],
    type: "village",
    preview: "/images/locations/Alagir.webp",
    description: "60 км от Владикавказа, Живописное ущелье идиально для фототуров"
  },
  {
    id: 7,
    name: "Мамисонское ущелье",
    coords: [42.666777, 43.853172],
    type: "village",
    preview: "/images/locations/Mamison.webp",
    description: "100км от Владиквказа, Горнолыжный курорт"
  },
  {
    id: 8,
    name: "Высокогорный Уаллагком",
    coords: [42.907886, 43.853208],
    type: "village",
    preview: "/images/locations/Zgid.webp",
    description: "116км от Владикавказа, Высокогорное село с руинами XIV в"
  },
  {
    id: 9,
    name: "Горная Дигория",
    coords: [42.910014, 43.554438],
    type: "village",
    preview: "/images/locations/vodopad.webp",
    description: " 128км от Владиккавказа, Самое живописное место по мнению большинства местных жителей"
  },
  {
    id: 10,
    name: "Беслан",
    coords: [43.193, 44.541],
    type: "history",
    preview: "/images/locations/Beslan.webp",
    description: " 30 км от Владикавказа, печально известный Беслан"
  },
  {
    id: 11,
    name: "Владикавказ",
    coords: [43.024, 44.681],
    type: "culture",
    preview: "/images/locations/Vld.webp",
    description: "Столица Республики Северная Осетия - Алания"
  },
]);

const tours = ref([
  {
    id: 101,
    locationId: 1,
    name: "Входит в маршрут Кольцо Осетии",
    type: "trekking",
    price: 14000,
    duration: "5 часов"
  },
  {
    id: 102,
    locationId: 2,
    name: "Входит в маршрут Кольцо Осетии",
    type: "history",
    price: 14000,
    duration: "5 часов"
  },
  {
    id: 103,
    locationId: 3,
    name: "Входит в маршрут Кольцо Осетии",
    type: "nature",
    price: 14000,
    duration: "5 часов"
  },
  {
    id: 104,
    locationId: 4,
    name: "Входит в маршрут Кольцо Осетии",
    type: "history",
    price: 14000,
    duration: "5 часов"
  },
  {
    id: 105,
    locationId: 5,
    name: "Кольцо Осетии + Мидаграбин",
    type: "trekking",
    price: 15000,
    duration: "10 часов"
  },
  {
    id: 106,
    locationId: 6,
    name: "Алагирское ущелье",
    type: "history",
    price: 14000,
    duration: "5 часов"
  },
  {
    id: 107,
    locationId: 7,
    name: "Мамисонское ущелье",
    type: "history",
    price: 15000,
    duration: "6 часов"
  },
  {
    id: 108,
    locationId: 8,
    name: "Уаллагком",
    type: "history",
    price: 16000,
    duration: "7 часов"
  },
  {
    id: 109,
    locationId: 9,
    name: "Горная Дигория",
    type: "history",
    price: 18000,
    duration: "12 часов"
  }
]);

const filters = ref([
  { type: "all", label: "Все", icon: "/icons/map/all.svg" },
  { type: "trekking", label: "Трекинг", icon: "/icons/map/trekking.svg" },
  { type: "history", label: "История", icon: "/icons/map/history.svg" },
  { type: "nature", label: "Природа", icon: "/icons/map/nature.svg" },
  { type: "village", label: "Сёла", icon: "/icons/map/village.svg" },
  { type: "culture", label: "Культура", icon: "/icons/map/culture.svg" },
  { type: "ski", label: "Горные лыжи", icon: "/icons/map/ski.svg" }
]);

const activeFilter = ref("all");
const selectedLocation = ref(null);
const mapContainer = ref(null);
let ymap = null;

const filteredTours = computed(() => {
  if (!selectedLocation.value) return [];
  return tours.value.filter(tour => 
    tour.locationId === selectedLocation.value.id &&
    (activeFilter.value === "all" || tour.type === activeFilter.value)
  );
});

const initMap = () => {
  ymaps.ready(() => {
    ymap = new ymaps.Map(mapContainer.value, {
      center: [42.921544, 44.3203],
      zoom: 8,
      type: 'yandex#hybrid',
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl'],
      behaviors: ['drag', 'scrollZoom', 'dblClickZoom', 'multiTouch'],

      minZoom: 7,  // Минимальный уровень приближения
      maxZoom: 12,
      restrictMapArea: [
        [42.1, 43.5], // Юго-западная граница (мин. широта, мин. долгота)
        [43.8, 44.8]  // Северо-восточная граница (макс. широта, макс. долгота)
      ]
    });

    // Добавляем ВСЕ ваши маркеры (10 точек)
    locations.value.forEach(loc => {
      const marker = new ymaps.Placemark(
        loc.coords,
        {
          hintContent: loc.name,
          balloonContent: "" // Отключаем балун
        },
        {
          preset: getPresetByType(loc.type),
          balloonCloseButton: false,
          hideIconOnBalloonOpen: false
        }
      );

      marker.events.add('click', () => {
        selectedLocation.value = loc;
        // Плавный скролл к информации
        setTimeout(() => {
          document.querySelector('.location-info-container')?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }, 100);
      });

      ymap.geoObjects.add(marker);
    });
  });
};

const getPresetByType = (type) => {
  const presets = {
    trekking: {
      preset: 'islands#greenHikingIcon',
      iconShape: { type: 'Circle', coordinates: [0,0], radius: 16 } // Круг
    },
    history: {
      preset:  'islands#redHistoricIcon'      ,
      iconColor: '#757575', 
      iconShape: { type: 'Rectangle', coordinates: [[-12,-12],[12,12]] } // Квадрат
    },
    nature: {
      preset: 'islands#blueEnvironmentIcon',
      iconShape: { type: 'Circle', coordinates: [0,0], radius: 16 } // Круг
    },
    village: {
      preset: 'islands#mountainIcon'   ,
      iconShape: { type: 'Diamond', coordinates: [[0,-12],[12,0],[0,12],[-12,0]] } // Ромб
    },
    culture: {
      preset: 'islands#darkBlueTheaterIcon',
      iconShape: { type: 'Circle', coordinates: [0,0], radius: 16 } // Круг
    },
    ski: {
      preset: 'islands#blueSkiingIcon',
      iconShape: { type: 'Rectangle', coordinates: [[-10,-16],[10,16]] } // Прямоугольник
    }
  };
  return presets[type] || { 
    preset: 'islands#blueIcon',
    iconShape: { type: 'Circle', coordinates: [0,0], radius: 16 }
  };
};

const setActiveFilter = (type) => {
  activeFilter.value = type;
};

const openBooking = (tour) => {
  router.push({
    path: '/booking',
    query: { 
      tour: tour.id,
      location: selectedLocation.value.id,
      name: tour.name,
      price: tour.price
    }
  });
};

const scrollToMap = () => {
  document.querySelector('#yandex-map')?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
};

onMounted(() => {
  if (window.ymaps) {
    initMap();
  } else {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_KEY&lang=ru_RU';
    script.onload = initMap;
    document.head.appendChild(script);
  }
});

onUnmounted(() => {
  if (ymap) {
    ymap.destroy();
  }
});
</script>

<style scoped>
/* Все ваши оригинальные стили */
.map-section {
  padding: 40px 0;
  background: #f5f7fa;
  max-height: 975px;
}

.map-header {
  max-width: 1200px;
  margin: 0 auto 20px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.section-title {
  font-size: 28px;
  color: #1a1a1a;
  margin: 0;
}

.map-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.map-filters button {
  padding: 8px 16px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.map-filters button.active {
  background: #1D68F0;
  color: white;
  border-color: #1D68F0;
}

.map-filters button img {
  width: 18px;
  height: 18px;
}

#yandex-map {
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.placeholder-info {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.placeholder-info p {
  color: #666;
  font-size: 18px;
  margin: 0;
}

.location-info-container {
  max-width: 1200px;
  margin: 20px auto;
  background: white;
  border-radius: 12px;
  /* overflow: hidden; */
  max-height: 300px; /* Фиксированная высота */
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  display: flex;
}

.location-image-wrapper {
  width: 40%;
}

.location-image {
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
}

.location-details {
  width: 60%;
  padding: 17px;
}

.location-details h3 {
  font-size: 24px;
  margin: 0 0 10px;
  color: #1a1a1a;
}

.location-description {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

.tours-list {
  margin: 25px 0;
}

.tour-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 15px 0; */
  border-bottom: 1px solid #f0f0f0;
}

.tour-info {
  display: flex;
  flex-direction: column;
}

.tour-name {
  font-weight: 500;
  margin-bottom: 5px;
}

.tour-duration {
  font-size: 14px;
  color: #888;
}

.tour-price {
  font-weight: bold;
  color: #1D68F0;
  font-size: 18px;
}

.book-button {
  padding: 8px 16px;
  background: #1D68F0;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
  margin-left: 10px;

}

.book-button:hover {
  background: #1557c0;
}

.back-to-map {
  margin-top: 15px;
  padding: 10px 15px;
  background: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;
}

.back-to-map:hover {
  background: #f5f5f5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 768px) {
  .map-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  #yandex-map {
    height: 400px;
  }
  
  .location-info-container {
    flex-direction: column;
    max-height: 536px;

  }
  
  .location-image-wrapper,
  .location-details {
    width: 100%;
  }
  
  .location-image {
    max-height: 250px;
  }
  
  .location-details {
    padding: 20px;
    max-width: 90%;
  }
}
</style>