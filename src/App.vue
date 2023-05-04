<template>
	<div class="container mx-auto px-10">
		<!-- <div class="px-36"> -->
		<Nav />
		<main class="mt-5">
			<div class="md:flex justify-between gap-8">
				<div>
					<Main />
				</div>
				<div>
					<Topic />
				</div>
			</div>
		</main>

		<SubTopic />

		<!-- </div> -->
	</div>
</template>

<script setup lang="ts">
import Nav from "./components/Nav.vue";
import Topic from "./components/Topic.vue";
import Main from "./components/Main.vue";
import SubTopic from "./components/SubTopic.vue";
</script>

<style scoped></style>
