<template>
	<div class="px-4 py-5 bg-black">
		<h1 class="text-yellow-500 text-2xl font-extrabold">New</h1>

		<div class="mt-4">
			<div v-for="item in newlist" class="mb-9 last-of-type:border-b border-grey-400">
 				<h2 class="text-white font-bold">{{ item.title }}</h2>
				<p class="text-gray-400 text-xs mt-2">{{ item.desc }}</p>
 			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const newlist = [
	{
		title: "Hydrogen VS Electric Cars",
		desc: "Will hydrogen-fueled cars ever catch up to Evs?",
	},
	{
		title: "Hydrogen VS Electric Cars",
		desc: "Will hydrogen-fueled cars ever catch up to Evs?",
	},
	{
		title: "Hydrogen VS Electric Cars",
		desc: "Will hydrogen-fueled cars ever catch up to Evs?",
	},
];
</script>

<style lang="scss" scoped></style>
