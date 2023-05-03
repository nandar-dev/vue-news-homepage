<template>
	<nav>
		<div class="flex justify-between px-5 py-3 items-center">
			<div class="logo text-5xl cursor-pointer">W.</div>

			<div class="sm:block hidden">
				<div class="flex gap-10">
					<a class="nav-link" href="#">Home</a>
					<a class="nav-link" href="#">New</a>
					<a class="nav-link" href="#">Popular</a>
					<a class="nav-link" href="#">Trending</a>
					<a class="nav-link" href="#">Categories</a>
				</div>
			</div>
 				<div class="flex flex-col gap-1 cursor-pointer sm:hidden block">
					<div class="w-9 h-1 bg-black"></div>
					<div class="w-9 h-1 bg-black"></div>
					<div class="w-9 h-1 bg-black"></div>
				</div>
			</div>
 	</nav>
</template>

<style lang="scss" scoped>
.logo {
	font-family: Inter-ExtraBold;
}
</style>
