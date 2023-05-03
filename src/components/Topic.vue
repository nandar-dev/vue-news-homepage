<template>
	<!-- max-w-2xs -->
	<div class="px-5 py-7 bg-dark-blue h-full">
		<h1 class="text-gold-yellow text-4xl">New</h1>
		<div class="mt-6">
			<div v-for="(item, i) in newlist" class="mb-12 relative after:absolute after:inset-x-0 after:h-0.5 after:bg-gray-700 after:last:h-0 last:mb-0">
				<h2 class="text-white text-xl font-bold">{{ item.title }}</h2>
				<p class="text-dark-grey text-s mt-2" :class="i + 1 == newlist.length ? 'mb-0' : 'mb-6'">{{ item.desc }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const newlist = [
	{
		title: "Hydrogen VS Electric Cars",
		desc: "Will n-fueled cars ever catch up to Evs?",
	},
	{
		title: "The Downsides of AI Artistry",
		desc: "What are the possible adverse effects of on-demand AI image generation?",
	},
	{
		title: "Is VC funding Drying Up?",
		desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
	},
];
</script>

<style lang="scss" scoped></style>
hydroge
