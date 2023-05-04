<template>
	<div class="md:flex md:mt-20  mt-10 justify-between mb-20">
		<div v-for="(item, i) in subTopic">
			<div class="flex gap-5 mb-10">
				<img class="h-24" :src="item.img" alt="" />
				<div>
					<h1 class="text-gray-300 text-3xl">01</h1>
					<h1 class="text-md mt-2">{{ item.title }}</h1>
					<p class="mt-2 text-sm text-gray-400">{{ item.desc }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const subTopic = [
	{
		img: new URL("./../assets/images/image-retro-pcs.jpg", import.meta.url).href,
		title: "Reviving Retro PCs",
		desc: "What happens when old PCs are given modern upgrades?",
	},
	{
		img: new URL("./../assets/images/image-top-laptops.jpg", import.meta.url).href,
		title: "Reviving Retro PCs",
		desc: "What happens when old PCs are given modern upgrades?",
	},
	{
		img: new URL("./../assets/images/image-gaming-growth.jpg", import.meta.url).href,
		title: "Reviving Retro PCs",
		desc: "What happens when old PCs are given modern upgrades?",
	},
];
</script>
