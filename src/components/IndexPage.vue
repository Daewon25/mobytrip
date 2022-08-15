<template>
  <div>
    <SubHeader />
    <div class="container">
      <Breadcrumbs :items="items"/>
      <div class="images-section">
        <div class="left">
          <img src="@/assets/img/image_1.jpeg" alt="apartment image">
        </div>
        <div class="right">
          <div v-for="img in images" :key="img.id">
            <img :src="require('@/assets/img/'+img.name)" alt="apartment image">
          </div>
          <div class="gallery-button">
            <img class="g-button" src="@/assets/gallery.svg" alt=""> {{galleryImages.length}}
          </div>
          <viewer :images="galleryImages" ref="viewer"/>
        </div>
      </div>
      <div class="main-section">
        <div class="left">
          <div class="general-info">
            <div class="rating-and-category">
              <Badge title="Hotel" background class="badge"/>
              <RatingStars count="5"/>
            </div>
            <div class="hotel-name">
              Hilton Austin
              <div class="price">
                $ 253.00
                <div class="duration">
                  Per night
                </div>
              </div>
            </div>
            <div class="hotel-address">
              500 E 4th St, Austin, TX 78701, United States
            </div>
            <div class="hotel-category">
              <Badge v-for="badge in badges" :key="badge.id" :title="badge.name" outlined class="category-badge"/>
            </div>
            <div class="item">
              <div class="title">
                Property Description
              </div>
              <div class="text">
                <ReadMore
                    limit="158"
                    body="Boasting a skylit indoor pool and 2 on-site dining options, this hotel is located across the street from Union Station. The eco-friendly property is adjacent from an airport express train to Toronto Pearson International Airport, 18 mi away. Lorem ipsum adem. Boasting a skylit indoor pool and 2 on-site dining options, this hotel is located across the street from Union Station. The eco-friendly property is adjacent from an airport express train to Toronto Pearson International Airport, 18 mi away. Lorem ipsum adem."/>
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
        <div class="right-section">
          <div class="map">
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
          <div class="ratings">
           <Rating :rating="hotelRating.rating" :text="hotelRating.text" :count="hotelRating.count"/>
            <div class="progress-bars-section">
              <div v-for="item in progressBarArr">
              <span>
                {{ item.title }}
              </span>
                <div class="bar">
                  <ProgressBar :val="item.value"/>
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
            • COVID: Due to the pandemic, many accommodation and service providers may implement processes and policies to
            help protect the safety of all of us. This may result in the unavailability or changes in certain services
            and amenities that are normally available from them. More info here
            <a href="https://cutt.ly/MT8BJcv">https://cutt.ly/MT8BJcv</a>
          </div>
          <div class="text">
            • USACANADA: Starting Dec. 6th travelers 2 and older are required to show negative test results within 1 day
            of the flight‘s departure to the US before boarding.
          </div>
        </div>
      </div>
      <div class="last-search">
        <span>Your search</span>
        <div>
          <Card
              class="hotel-card"
              v-for="hotel in hotelsCards"
              :image="hotel.image"
              :address="hotel.address"
              :name="hotel.name"
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
import {component as Viewer} from "v-viewer"
import Rating from "@/components/UI/Rating";

export default {
  name: 'IndexPage',
  components: {
    Rating,
    'Breadcrumbs': () => import('@/components/UI/Breadcrumbs'),
    'Badge': () => import('@/components/UI/Badge'),
    'RatingStars': () => import('@/components/UI/RatingStars'),
    'ReadMore' : () => import('@/components/UI/ReadMore'),
    'ProgressBar' : () => import('@/components/UI/ProgressBar'),
    'SubHeader': () => import('@/components/SubHeader'),
    'Card': () => import('@/components/Card'),
    Viewer,
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
          name: 'image_right_11.jpeg'
        },
        {
          id: 2,
          name: 'image_right_2.jpeg'
        },
        {
          id: 3,
          name: 'hotel_right_3.jpeg'
        },
        {
          id: 4,
          name: 'right_image_4.jpeg'
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
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('@/assets/img/hotel_1.png')
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('@/assets/img/hotel_1.png')
        },
        {
          title: 'El Teide Volcano, Spain',
          content: 'Photo by Max Rive',
          // You can also provide a URL for the image.
          image: require('@/assets/img/hotel_1.png')
        },
        // Other slides.
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
          address: '500 E 4th St, Austin, TX 78701, United States',
          priceWithTaxes: '$ 429,00'
        },
        {
          image: 'hotel_2.png',
          name: 'Shangri-La Toronto',
          rating: '4',
          price: '$ 354,00',
          address: '500 E 4th St, Austin, TX 78701, United States',
          priceWithTaxes: '$ 429,00'
        },
        {
          image: 'hotel_4.png',
          name: 'Shangri-La Toronto',
          rating: '5',
          price: '$ 354,00',
          address: '500 E 4th St, Austin, TX 78701, United States',
          priceWithTaxes: '$ 429,00'
        },
        {
          image: 'hotel_1.png',
          name: 'Shangri-La Toronto',
          rating: '2',
          price: '$ 354,00',
          address: '500 E 4th St, Austin, TX 78701, United States',
          priceWithTaxes: '$ 429,00'
        }
      ],
      markerPosition: { lat: 3, lng: 101 },
      hotelRating: {
        rating: '4.5',
        text: 'Very good',
        count: '936 ratings'
      }
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
            reset:0,
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

<style scoped lang="scss">
@import "@/styles/desktop.scss";
</style>
