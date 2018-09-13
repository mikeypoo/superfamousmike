<template>
  <div class="photoGallery">
    <div class="photoGallery-description">
      {{ images[currentIndex].description }}
    </div>
    <div class="photoGallery-main">
      <div 
        @click="reduceIndex"
        class="photoGallery-arrow--desktop">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
      <div class="photoGallery-photos">
        <img :src="images[currentIndex].path">
      </div>
      <div 
        @click="advanceIndex"
        class="photoGallery-arrow--desktop">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
    <div class="photoGallery-arrow--mobile">
      <div @click="reduceIndex">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
      <div @click="advanceIndex">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  data: () => {
    return {
      images: [
        { path: "images/mike_agt_stage.png", description: "Who let Super Famous Mike be on America's Got Talent?" },
        { path: "images/mike_guitar.jpg", description: "Awww, look at him try to be all serious and junk." },
        { path: "images/mike_britney.jpg", description: "Oh, sweet mercy. #itsbritneybitch" },
        { path: "images/mike_lights.png", description: "Mike and his uke are the bestest of homies!" },
        { path: "images/mike_hair.jpg", description: "Good hair days are few and far between." }
      ],
      currentIndex: 0
    };
  },
  methods: {
    advanceIndex: function () {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },

    reduceIndex: function () {
      this.currentIndex = ((this.currentIndex - 1) + this.images.length) % this.images.length;
    }

  }
}
</script>

<style scoped>
  @import "../global.css";

  .photoGallery {
    padding: 32px 0;
    background: var(--super-famous-black);
    color: var(--super-famous-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .photoGallery-description {
    text-align: center;
    margin-bottom: 16px;
    font-size: 24px;
    padding: 8px 32px;
  }

  .photoGallery-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    fill: var(--super-famous-white);
    height: 128px;
    width: 128px;
    cursor: pointer;
  }

  svg:hover {
    fill: var(--super-famous-green);
  }

  img { 
    width: 100%; 
    max-height: 400px;
    object-fit: contain;
  }

  @media(max-width: 1001px) {
    .photoGallery-arrow--desktop { display: none; }
    .photoGallery-arrow--mobile {
      display: flex;
      justify-content: center;
    }
  }

  @media(min-width: 1000px) {
    .photoGallery-arrow--desktop { display: block; }
    .photoGallery-arrow--mobile { display: none; }
  }

</style>
