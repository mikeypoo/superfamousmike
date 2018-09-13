<template>
  <div class="socialMedia">
    <div
      class="socialMedia-card"
      :key="platform.id"
      @click="goToPlatform(platform.url)"
      v-for="platform in platforms">
      <div class="socialMedia-cardInfo">
        <h4>{{ platform.name }}</h4>
        <svg xmlns="http://www.w3.org/2000/svg" v-if="platform.id === 1" role="img" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" v-if="platform.id === 2" role="img" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" v-if="platform.id === 3" role="img" viewBox="0 0 24 24"><path class="a" d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" v-if="platform.id === 4" role="img" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </div>
      <div class="socialMedia-cardTag">
        {{ platform.tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  data: () => {
    return {
      platforms: [
        { id: 1, name: "Instagram", tag: "I sing sad songs and fart music from my hands - normal stuff", url: "https://www.instagram.com/superfamousmike" },
        { id: 2, name: "Facebook", tag: "We can be friends! I mean, I'd like to think we already are...", url: "https://www.facebook.com/superfamousmike" },
        { id: 3, name: "YouTube", tag: "Watch me try my very best to be entertaining on the Internet!", url: "https://www.youtube.com/user/manualistmike" },
        { id: 4, name: "LinkedIn", tag: "Settle down, Mike. Let's keep this relationship strictly professional.", url: "https://www.linkedin.com/in/mikedmcgowan" }
      ]
    }
  },
  methods: {
    goToPlatform: function (url) {
      window.location.assign(url);
    }
  }
}
</script>

<style scoped>
  @import "../global.css";

  .socialMedia {
    padding: 32px 0;
    background: var(--super-famous-black);
    color: var(--super-famous-white);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .socialMedia-card {
    background: var(--super-famous-white);
    color: var(--super-famous-black);
    border-radius: 2px;
    margin: 32px;
    padding: 16px;
    display: flex;
    cursor: pointer;
    max-width: 400px;
  }

  .socialMedia-card:hover {
    box-shadow: 0 0 6px 4px var(--super-famous-green);
  }

  .socialMedia-cardInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .socialMedia-cardTag {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 16px;
  }

  svg {
    height: 48px;
    width: 48px;
  }

  h4 {
    margin: 0;
    margin-bottom: 8px;
  }
</style>

