<template>
  <header class="header">
	  <Container class="header-inner">
		<router-link class="logo" to="/">Instagram</router-link>
		<form action="" class="search">
			<input type="text" placeholder="search">
		</form>
		<nav class="navigation">
			<router-link to="/">
				<img  v-if="$route.name ==='Home'" src="../icons/homefull.png" alt="">
				<img v-else src="../icons/home.png" alt="">
			</router-link>
			<router-link to="/direct">
				<img v-if="$route.name==='Direct'" src="../icons/sendfull.png" alt="">
				<img v-else  src="../icons/send.png" alt="">
			</router-link>
			<router-link to="/explore">
				<img v-if="$route.name==='Explore'"  src="../icons/explorefull.png" alt="">
				<img v-else  src="../icons/explore.png" alt="">
			</router-link>
			<router-link to="/profile">
				<img v-if="$route.name==='ProfilePost'"   src="../icons/likefull.png" alt="">
				<img v-else src="../icons/like.png" alt="">
			</router-link>
		</nav>
	  </Container>
	</header>
</template>

<script>
import Container from "@/components/Container"

export default {
	name:"MainHeader",
	components:{
		Container
	}

}
</script>

<style lang="scss">

.header{
	border-bottom: 1px solid rgb(219,219,219);
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 90;
	background: white;

	img{
		width: 24px;
		height: 24px;
	}

	.header-inner{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60px;

		@media screen and (min-width:876px){
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			align-items: center;
		}

		.logo{
			font-size: 28px;
			font-weight: bold;
			color: inherit;
			text-decoration: none;
		}

		.search{
			
			display: none;

			@media screen and (min-width:876px){
				text-align: center;
				display: block;

				input{
					width: 215px;
					height: 28px;
					border: 1px solid rgb(219,219,219);
					background: rgb(250,250,250);
					border-radius: 3px;
					padding: 0 20px;
				}
			}
		}

		.navigation{

			position: fixed;
			z-index: 90;
			left: 0;
			right: 0;
			bottom: 0;
			background: white;
			border-top: 1px solid rgb(219,219,219);
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: space-around;

			@media screen and (min-width:876px) {
				position: static;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				height: auto;
				border: 0;

				a{
					margin-left: 20px;
				}
			}
		}
	}

}

</style>