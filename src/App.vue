<template>
	<div class="container mx-auto">
		<!-- <div class="px-36"> -->
			<Nav />
			<main class="mt-5">
				<div class="flex gap-8">
					<div>
						<Main />	
					</div>
					<!-- <img class="col-span-1 sm:col-span-2 w-full h-72" src="./assets/images/image-web-3-desktop.jpg" alt="" /> -->
					<Topic />
				</div>
			</main>
		</div>
	<!-- </div> -->
</template>

<script setup lang="ts">
import Nav from "./components/Nav.vue";
import Topic from "./components/Topic.vue";
import Main from "./components/Main.vue";
</script>

<style scoped></style>
