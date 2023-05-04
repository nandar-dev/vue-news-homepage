<template>
	<nav>
		<div class="flex justify-between pt-10 pb-5 items-center">
			<div class="logo text-5xl cursor-pointer">W.</div>

			<div class="md:block hidden">
				<div class="flex gap-10">
					<a class="nav-link" href="#">Home</a>
					<a class="nav-link" href="#">New</a>
					<a class="nav-link" href="#">Popular</a>
					<a class="nav-link" href="#">Trending</a>
					<a class="nav-link" href="#">Categories</a>
				</div>
			</div>
			<div class="flex flex-col gap-1 cursor-pointer md:hidden block" @click="sliderShow = true">
				<div class="w-9 h-1 bg-black"></div>
				<div class="w-9 h-1 bg-black"></div>
				<div class="w-9 h-1 bg-black"></div>
			</div>
		</div>
	</nav>
 		<Slider :show="sliderShow" @closed="sliderShow = false" />
 </template>

<script lang="ts" setup>
import { ref } from "vue";
import Slider from "./../components/Slider.vue";

const sliderShow = ref(false);
</script>

<style lang="scss" scoped>
.logo {
	font-family: Inter-ExtraBold;
}
</style>
