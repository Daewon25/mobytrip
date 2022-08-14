<template>
  <div>
    <SubHeader />
    <div class="container">
      <Breadcrumbs :items="items"/>
      <div class="images-section">
        <div class="left">
          <img src="@/assets/img/image_1.jpg" alt="apartment image">
        </div>
        <div class="right">
          <div v-for="img in images" :key="img.id">
            <img :src="require('@/assets/img/'+img.name)" alt="apartment image">
          </div>
          <div class="gallery-button" @click="showGallery">
            <img src="@/assets/gallery.svg" alt=""> 104+
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
                    limit="200"
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
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import Badge from "@/components/UI/Badge";
import RatingStars from "@/components/UI/RatingStars";
import ReadMore from "@/components/UI/ReadMore";
import ProgressBar from "@/components/UI/ProgressBar";
import Card from "@/components/Card";
import SubHeader from "@/components/SubHeader";
import 'viewerjs/dist/viewer.css'
import {component as Viewer} from "v-viewer"

export default {
  name: 'IndexPage',
  components: {
    Breadcrumbs,
    Badge,
    RatingStars,
    ReadMore,
    ProgressBar,
    SubHeader,
    Viewer,
    Card
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
          icon: 'wifi',
          name: 'Wi-fi'
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
        "https://www.steigenberger.com/cache/images/028_SHR_Koeln_exteri_5305a036d3b62425e57b24a-1-1-1-1-1.jpg",
        "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
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
          value: '95'
        },
        {
          title: 'Neighborhood',
          rating: "4.6",
          value: '90'
        },
        {
          title: 'Overall',
          rating: "4.2",
          value: '80'
        },
        {
          title: 'Service',
          rating: "4.3",
          value: '90'
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
      markerPosition: { lat: 3, lng: 101 }
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
          title: false
        }
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/_colors.scss";

.container {
  padding: 0 100px;

  .images-section {
    margin-bottom: 45px;
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 5px;

    .right {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 5px;

      .gallery-button {
        position: absolute;
        display: flex;
        align-items: center;
        font-weight: 800;
        font-size: 14px;
        background: rgba(255, 255, 255, 0.85);
        border-radius: 5px;
        backdrop-filter: blur(4px);
        cursor: pointer;
        padding: 4px 8px;
        bottom: 10px;
        right: 10px;
        transition: all .7s ease;
        &:hover {
          transform: scale(1.1);
        }

        img {
          margin-right: 5px;
        }
      }
    }
  }

  .main-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;

    .general-info {
      .rating-and-category {
        display: flex;
        align-items: center;

        .badge {
          margin-right: 8px;
        }
      }

      .hotel-name {
        font-weight: 800;
        font-size: 32px;
        display: flex;
        align-items: center;

        .price {
          color: $green;
          font-size: 36px;
          font-weight: 800;
          margin-left: 40%;

          .duration {
            font-size: 16px;
            font-weight: 400;
            color: $gray;
            text-align: right;
          }
        }
      }

      .hotel-address {
        font-size: 16px;
        margin-bottom: 20px;
        color: $gray;
      }

      .hotel-category {
        width: 40%;

        .category-badge {
          margin-right: 8px;
          margin-bottom: 5px;
        }
      }

      .item {
        margin-top: 40px;

        .title {
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: 800;
          font-size: 18px;
          color: $black;
        }

        .text {
          color: $gray;
        }

        .pseudo {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;

          &:before {
            width: 3px;
            height: 3px;
            background: $gray;
            border-radius: 50%;
            display: block;
            content: '';
            margin-left: 1em;
            margin-right: 10px;
          }
        }
      }

      .facilities {
        margin-top: 40px;

        .title {
          color: $black;
          font-weight: 800;
          font-size: 18px;
        }

        span {
          font-weight: 500;
          font-size: 14px;
          display: inline-block;
          margin-bottom: 20px;
        }

        .facility {
          cursor: pointer;
          display: flex;
          align-items: center;
          color: $gray;
          margin-top: 5px;

          img {
            margin-right: 8px;
          }
        }

        .items {
          margin-left: 1em;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(4, 1fr);
        }

        .more-button {
          cursor: pointer;
          margin-top: 20px;
          color: $primary-blue;
          font-size: 16px;
          display: inline-block;

          img {
            margin-left: 8px;
          }

          .arrow-up {
            transform: rotate(180deg);
          }
        }

        .more-facilities {
          margin-top: 20px;
        }
      }
    }

    .right-section {
      display: flex;
      flex-direction: column;

      .map {
        img {
          width: 100%;
        }
      }

      .ratings {
        margin-top: 50px;

        .title {
          display: flex;
          align-items: center;
          margin-bottom: 24px;

          .rating {
            width: 42px;
            height: 42px;
            background: $primary-blue;
            border-radius: 5px;
            color: #FFFFFF;
            font-weight: 800;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
          }

          .text {
            font-weight: 700;
            font-size: 16px;
            color: $black;
            margin-right: 15px;
          }

          .count {
            font-size: 14px;
            color: $gray;
          }
        }

        .progress-bars-section {
          width: 80%;

          .bar {
            margin-bottom: 10px;
          }

          span {
            font-size: 14px;
          }
        }
      }
    }
  }

  .issues {
    margin-top: 20px;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 40px 100px;

    span {
      display: inline-block;
      margin-bottom: 20px;
      color: $black;
      font-weight: 800;
      font-size: 18px;
    }

    > div {
      display: flex;
    }

    .text {
      color: $gray;
      width: 50%;

      a {
        color: black;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .last-search {
    span {
      display: inline-block;
      margin: 60px 0 20px 0;
      font-weight: 800;
      font-size: 26px;
      color: $black;
    }
    > div {
      display: flex;
    }
    .hotel-card {
      margin-right: 20px;
    }
  }
}
</style>
