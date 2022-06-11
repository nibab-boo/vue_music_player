<template>
  <div class="bg-gray-700">
    <nav-bar :navigation="navigation" />
    <current-song :song="currentSong" v-if="currentSong" />
    <song-list
      :songs="songList"
      :currentSong="currentSong"
      @handlePlay="handlePlay"
      @handleDelete="handleDelete"
    />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import CurrentSong from "./components/CurrentSong";
import SongList from "./components/SongList";
import { mapState } from "vuex";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
export default {
  name: "App",
  data() {
    return {
      navigation: navigation,
      audioElement: null,
    };
  },
  computed: {
    ...mapState(["songList", "currentSong"]),
  },
  methods: {
    handlePlay: function (payload) {
      if (this.audioElement === null) {
        this.audioElement = new Audio(payload.music_url);
        this.audioElement.play();
      } else {
        if (payload === this.currentSong) {
          if (this.audioElement.paused) {
            this.audioElement.play();
          } else {
            console.log("pause");
            this.audioElement.pause();
          }
        } else {
          this.audioElement.src = payload.music_url;
          this.audioElement.play();
        }
      }
      // this.currentSong = payload;
      this.$store.dispatch("changeSong", payload);
      this.audioElement.addEventListener("ended", () => {
        this.currentSong = null;
        this.audioElement = null;
      });
    },
    handleDelete: function (payload) {
      this.$store.dispatch("deleteSong", payload);
    },
  },
  created() {
    this.$store.dispatch("fetchSongs");
  },
  components: {
    // FontAwesomeIcon,
    NavBar,
    CurrentSong,
    SongList,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
