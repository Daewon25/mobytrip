<template>
  <div>
    <SubHeader/>
    <div class="container">
      <div class="mobile-image-section">
        <vueper-slides fade autoplay fixed-height="400px" infinite>
          <template #arrow-left>
            <img src="@/assets/arrow-left-slider.svg" alt="">
          </template>
          <template #arrow-right>
            <img src="@/assets/arrow-right-slider.svg" alt="">
          </template>
          <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :image="slide.image"
              :link="slide.link"
          />
        </vueper-slides>
      </div>
      <div class="main-section">
        <div class="left">
          <div class="general-info">
            <div class="rating-and-category">
              <Badge title="Hotel" background class="badge"/>
              <RatingStars count="5"/>
              <div class="price">
                $ 253.00
                <div class="duration">
                  Per night
                </div>
              </div>
            </div>
            <div class="hotel-name">
              <div class="name">
                Hilton Austin
              </div>
            </div>
            <div class="hotel-address">
              500 E 4th St, Austin, TX 78701, United States
            </div>
            <Rating />
            <div class="hotel-category">
              <Badge v-for="badge in badges" :key="badge.id" :title="badge.name" outlined class="category-badge"/>
            </div>
            <Button title="Choose Room" color="blue" size="xl"/>
            <div class="item">
              <div class="title">
                Property Description
              </div>
              <div class="text">
                <ReadMore
                    limit="155"
                    body="Boasting a skylit indoor pool and 2 on-site dining options, this hotel is located across the street from Union Station. The eco-friendly property is adjacent from an airport express train to Toronto Pearson International Airport, 18 mi away. Lorem ipsum adem. Boasting a skylit indoor pool and 2 on-site dining options, this hotel is located across the street from Union Station. The eco-friendly property is adjacent from an airport express train to Toronto Pearson International Airport, 18 mi away. Lorem ipsum adem."/>
              </div>
            </div>
            <div class="map">
              <div class="map-title">Location</div>
              <div class="address">
                500 E 4th St, Austin, TX 78701, United States
              </div>
              <GmapMap
                  :center="{lat:3, lng:101}"
                  :zoom="7"
                  map-type-id="terrain"
                  style="height: 300px"
              >
                <GmapMarker
                    :position="markerPosition"
                />
              </GmapMap>
            </div>
            <div class="progress-bars-section">
              <span class="bar-title">Ratings</span>
              <div class="ratings">
                <div class="title">
                  <div class="rating">
                    4.8
                  </div>
                  <div class="text">
                    Very good
                  </div>
                  <div class="count">
                    936 ratings
                  </div>
                </div>
              </div>
              <div v-for="item in progressBarArr">
              <span>
                {{ item.title }}
              </span>
                <div class="bar">
                  <ProgressBar :val="item.value"/>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="title">
                The Neighborhood
              </div>
              <div class="text">
                <p class="pseudo">Waller Creek District → 271.4 yards (248.1 m)</p>
                <p class="pseudo">Downtown Austin → ß587.8 yards (537.5 m)</p>
              </div>
            </div>
            <div class="item">
              <div class="title">
                Points of Interest
              </div>
              <div class="text">
                <p class="pseudo">Austin Visitor Center → 135.1 yards (123.5 m)</p>
                <p class="pseudo">O. Henry House Museum → 164.7 yards (150.6 m)</p>
              </div>
            </div>
            <div class="item">
              <div class="title">
                Nearby Airports
              </div>
              <div class="text">
                <p class="pseudo">AUS: Austin, TX (AUS-Austin-Bergstrom Intl.) → 6.1 miles (9.7 km)</p>
              </div>
            </div>
            <div class="facilities">
              <div class="title">
                Facilities
              </div>
              <span>Top facilities</span>
              <div class="items">
                <div class="facility" v-for="item in facilities" :key="item.icon">
                  <img :src="require('@/assets/'+item.icon+'.svg')"/> {{ item.name }}
                </div>
              </div>
              <div class="more-button" @click="showMore">
                {{ !showMoreFacilities ? "Show" : "Hide" }} all facilities and services <img
                  src="@/assets/arrow_down.svg" :class="{'arrow-up': showMoreFacilities}"/>
              </div>
              <div class="more-facilities" v-if="showMoreFacilities">
                <div class="items">
                  <div class="facility" v-for="item in facilities" :key="item.icon">
                    <img :src="require('@/assets/'+item.icon+'.svg')"/> {{ item.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="issues">
        <span>Issues</span>
        <div>
          <div class="text">
            COVID: Due to the pandemic, many accommodation and service providers may implement processes and policies to
            help protect the safety of all of us. This may result in the unavailability or changes in certain services
            and amenities that are normally available from them. More info here
            <a href="https://cutt.ly/MT8BJcv">https://cutt.ly/MT8BJcv</a>
          </div>
          <div class="text">
            USACANADA: Starting Dec. 6th travelers 2 and older are required to show negative test results within 1 day
            of the flight‘s departure to the US before boarding.
          </div>
        </div>
      </div>
      <div class="last-search">
        <span>Nearby Hotels</span>
        <div>
          <Card
              class="hotel-card"
              v-for="hotel in hotelsCards"
              :image="hotel.image"
              :address="hotel.address"
              :name="hotel.name"
              :info-price="hotel.infoPrice"
              :rating="hotel.rating"
              :price="hotel.price"
              :price-with-taxes="hotel.priceWithTaxes"
              :key="hotel.image"
          />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import 'viewerjs/dist/viewer.css'
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Button from "@/components/UI/Button";

export default {
  name: 'IndexPageMobile',
  components: {
    Button,
    'Badge': () => import('@/components/UI/Badge'),
    'RatingStars': () => import('@/components/UI/RatingStars'),
    'ReadMore': () => import('@/components/UI/ReadMore'),
    'ProgressBar': () => import('@/components/UI/ProgressBar'),
    'SubHeader': () => import('@/components/SubHeader'),
    'Card': () => import('@/components/MobileCard'),
    'Rating': () => import('@/components/UI/Rating'),
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      showMoreFacilities: false,
      items: [
        {
          id: 1,
          name: 'Home'
        },
        {
          id: 2,
          name: 'Texas'
        },
        {
          id: 3,
          name: 'Austin'
        },
        {
          id: 4,
          name: 'Hilton Austin'
        }
      ],
      images: [
        {
          id: 1,
          name: 'image_right_1.png'
        },
        {
          id: 2,
          name: 'image_right_2.png'
        },
        {
          id: 3,
          name: 'image_right_3.png'
        },
        {
          id: 4,
          name: 'image_right_4.png'
        }
      ],
      badges: [
        {
          id: 1,
          name: 'Hotels with spa'
        },
        {
          id: 2,
          name: 'Green Hotel'
        },
        {
          id: 3,
          name: 'Bussines hotels'
        },
        {
          id: 4,
          name: 'Sport hotels'
        },
        {
          id: 5,
          name: 'Waller Creek District'
        },
        {
          id: 6,
          name: 'Downtown Austin'
        }
      ],
      facilities: [
        {
          icon: 'wifi',
          name: 'Wi-fi'
        },
        {
          icon: 'parking',
          name: 'Car park'
        },
        {
          icon: 'reception',
          name: '24-hour reception'
        },
        {
          icon: 'whellchair',
          name: 'Wheelchair-accessible'
        },
        {
          icon: 'no-smoking',
          name: 'Non-smoking establishment'
        },
        {
          icon: 'pets',
          name: 'Large pets allowed (over 5 kg)'
        },
        {
          icon: 'breakfast',
          name: 'Breakfast'
        }
      ],
      galleryImages: [
        "https://images.voordeeluitjes.nl/images/medium/164587_d7d7942eaa2840be3c4e16ecf323d551.jpg",
        "https://blog.bilderberg.nl/wp-content/uploads/2018/12/speulderbos-f.jpg",
        "https://wallpaperaccess.com/full/2690549.jpg",
        "https://thumbs.dreamstime.com/b/luxury-hotel-4480742.jpg",
        "https://3.bp.blogspot.com/-QRZjgZ2_fd4/V4jGAej3VnI/AAAAAAAABMk/q8-n-s5znLEkTXQaOXBAWKckmk2PVU-qQCEw/s1600/sonevajani-1880.jpg",
        "https://www.steigenberger.com/cache/images/028_SHR_Koeln_exteri_5305a036d3b62425e57b24a-1-1-1-1-1.jpg",
        "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      ],
      slides: [
        {
          image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8&w=1000&q=80'
        },
        {
          image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80'
        },
        {
          image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        },
        {
          image: 'https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'
        },
      ],
      progressBarArr: [
        {
          title: 'Amenities',
          rating: "4.2",
          value: '80'
        },
        {
          title: 'Cleanliness',
          rating: "4.4",
          value: '90'
        },
        {
          title: 'Comfort',
          rating: "4.4",
          value: '90'
        },
        {
          title: 'Condition',
          rating: "4.4",
          value: '90'
        },
        {
          title: 'Neighborhood',
          rating: "4.6",
          value: '95'
        },
        {
          title: 'Overall',
          rating: "4.2",
          value: '80'
        },
        {
          title: 'Service',
          rating: "4.3",
          value: '85'
        }
      ],
      hotelsCards: [
        {
          image: 'hotel_1.png',
          name: 'Shangri-La Toronto',
          rating: '5',
          price: '$ 354,00',
          infoPrice: '$305.91',
          address: '500 E 4th St, Austin, TX 78701, United States',
          priceWithTaxes: '$ 429,00'
        },
        {
          image: 'hotel_2.png',
          name: 'Shangri-La Toronto',
          rating: '4',
          price: '$ 354,00',
          infoPrice: '$305.91',
          address: '500 E 4th St, Austin, TX 78701, United States',
          priceWithTaxes: '$ 429,00'
        },
        {
          image: 'hotel_4.png',
          name: 'Shangri-La Toronto',
          rating: '5',
          price: '$ 354,00',
          infoPrice: '$305.91',
          address: '500 E 4th St, Austin, TX 78701, United States',
          priceWithTaxes: '$ 429,00'
        },
        {
          image: 'hotel_1.png',
          name: 'Shangri-La Toronto',
          rating: '2',
          price: '$ 354,00',
          infoPrice: '$305.91',
          address: '500 E 4th St, Austin, TX 78701, United States',
          priceWithTaxes: '$ 429,00'
        }
      ],
      markerPosition: {lat: 3, lng: 101}
    }
  },
  methods: {
    showMore() {
      this.showMoreFacilities = !this.showMoreFacilities
    },
    showGallery() {
      this.$viewerApi({
        images: this.galleryImages,
        options: {
          title: false,
          navbar: false,
          transition: false,
          movable: false,
          toolbar: {
            zoomIn: 0,
            zoomOut: 0,
            oneToOne: 0,
            reset: 0,
            prev: 4,
            play: {
              show: 0,
              size: 'large',
            },
            next: 4,
            rotateLeft: 0,
            rotateRight: 0,
            flipHorizontal: 0,
            flipVertical: 0,
          }
        }
      })
    },
  }
}
</script>

<style lang="scss">
@import "src/styles/mobile";
</style>
