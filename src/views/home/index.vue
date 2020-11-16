<template>
  <div class="home">
	  <div class="timeline">
		  <h2>Home</h2> 
		<CustomText>Componentlerrrr</CustomText>
		<CustomText tag="p">Componentlerrrr</CustomText>
		<CustomText tag="b" size="xsmall">Componentlerrrr</CustomText>
		<img src="../../assets/logo.png" width="100" height="100" alt="">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum corporis fugit ab non in iusto, exercitationem mollitia dolore at atque molestiae quod molestias eum deleniti maiores cupiditate consectetur. Obcaecati.

		</p>
	  </div>
	  <div class="sidebar">
		  <p>
			  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia numquam laboriosam dolorum expedita praesentium sint omnis autem. Unde blanditiis, omnis nesciunt quam voluptate voluptatem quod dolor optio quasi ducimus itaque!
		  </p>
	  </div>
	
  </div>
</template>

<script>
// @ is an alias to /src
import CustomText from "@/components/CustomText"
export default {
  name: "Home",
  components: {
	  CustomText,
  }
};
</script>

<style lang="scss">
.home{
	
	max-width: 605px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 876px){
		max-width: none;
		display: grid;
		grid-template-columns: 1fr 295px;
		grid-gap: 30px;
	}

	.sidebar{
		display: none;

		@media screen and (min-width: 876px) {
			display: block;
		}
	}
	
}
</style>