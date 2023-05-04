<template>
	<div v-show="props.show">
		<div class="fixed right-0 top-0 h-full w-full bg-black bg-opacity-50 z-10" @click.self="onClose">
			<div class="absolute right-0 h-full z-20 bg-white opacity-100 w-8/12">
				<div class="absolute right-12 top-8">
					<div class="w-20 h-14 relative cursor-pointer mt-10" @click="onClose">
						<div class="absolute w-full h-2 bg-black origin-center transition-transform duration-300 ease-in-out rotate-45"></div>
						<div class="absolute w-full h-2 bg-black origin-center transition-transform duration-300 ease-in-out -rotate-45"></div>
					</div>
				</div>

				<div class="flex flex-col gap-14 text-4xl font-extrabold mt-60 pl-10">
					<a href="#">Home</a>
					<a href="#">New</a>
					<a href="#">Popular</a>
					<a href="#">Trending</a>
					<a href="#">Categories</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
	show: Boolean,
});

const emits = defineEmits(["closed"]);

const onClose = () => {
	emits("closed");
};
</script>
