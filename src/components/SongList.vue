<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Song List
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div v-for="(song, index) in songs" :key="index" class="group relative">
          <div
            @click="$emit('handlePlay', song)"
            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
          >
            <img
              :src="song.thumb"
              :alt="song.title"
              class="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                {{ song.name }}
              </h3>
            </div>
            <p
              class="text-sm font-medium text-gray-900"
              @click="$emit('handleDelete', song)"
            >
              <FontAwesomeIcon icon="trash" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "song-list",
  props: ["songs", "currentSong"],
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped></style>
