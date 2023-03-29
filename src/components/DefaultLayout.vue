<template>
  <div class="flex flex-col w-screen h-screen justify-center items-center">
    <img
      src="https://cdn.pixabay.com/photo/2017/08/06/06/18/rain-2589417_960_720.jpg"
      class="absolute h-screen w-full"
    />
    <div class="flex justify-center items-center lg:w-4/12 mobile:w-7/12 absolute">
      <div class="h-[38rem] w-full absolute rounded-md flex flex-col items-center z-50 music-player p-8">
        <div class="border-2 border-black-600 w-full h-full rounded-md flex flex-col justify-center items-center p-8 gap-8">    
            <img :src="album.albumImage" class="h-80 w-90  music-player rounded-md bg-cover">
          <div class="flex flex-col text-center text-white font-normal">
            <h1 class="font-semibold">{{ album.albumName }}</h1>
            <h1>{{ album.albumAuthor }}</h1>
          </div>
          <div class="flex flex-row justify-center items-center gap-10 text-transparent">
            <font-awesome-icon :icon="['fas', 'heart']" class="h-6 w-6"/>
            <font-awesome-icon :icon="['fas', 'backward-step']" class="cursor-pointer h-7"  />
              <div class="w-10 h-10 flex justify-center items-center rounded-full p-7 music-player">
                <font-awesome-icon :icon="['fas', 'play']" class="cursor-pointer h-7" />
              </div>
              <font-awesome-icon :icon="['fas', 'forward-step']" class="cursor-pointer h-7" />
            <font-awesome-icon :icon="['fas', 'rotate-left']" class="h-6 w-6" />
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    const musicList = [
      {albumName: "Tides and Dreams", albumAuthor: "Elliot Middleton", albumImage: "https://images.pexels.com/photos/15663475/pexels-photo-15663475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {albumName: "Happy Happy Fun Joy", albumAuthor: "GG rings",  albumImage: "https://images.pexels.com/photos/15975880/pexels-photo-15975880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {albumName: "Design for Life", albumAuthor: "Young Presidents",  albumImage: "https://images.pexels.com/photos/12172082/pexels-photo-12172082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
      {albumName: "Epic flight", albumAuthor: "Immersive Music",  albumImage: "https://images.pexels.com/photos/7336640/pexels-photo-7336640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
      {albumName: "Green Fever", albumAuthor: "Flash Fluharty",  albumImage: "https://images.pexels.com/photos/13918246/pexels-photo-13918246.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    ]
    const album = musicList[Math.floor(Math.random() * musicList.length)]

    return {
      isOpen: false,
      isEye: false,
      album
    };
  },
  methods: {},
};
</script>

<style>
.music-player {
  background-color: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}
</style>
