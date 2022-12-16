<template>
	<div
		class="loader d-flex flex-column align-items-center justify-content-center text-light">
		<h2 class="fw-bold mb-5">Getting the films...</h2>
		<div class="spinner-border" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.loader {
	height: 60vh;
}
</style>
