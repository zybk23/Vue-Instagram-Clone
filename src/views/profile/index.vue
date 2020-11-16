<template>
  <div class="home">
	<h2>Profile</h2> 
	<div id="nav">
		<router-link to="/profile">Post</router-link> |
		<router-link to="/profile/igtv">IGTV</router-link> |
		<router-link to="/profile/save">Save</router-link> |
		<router-link to="/profile/tag">tag</router-link> |
  	</div>

	<router-view />

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Profile",
  components: {
  }
};
</script>

<style lang="scss">

</style>