<template>
	<div class="app">
		<MasterHeader/>
		<main>
			<Container>
  				<router-view /> 	
			</Container>
		</main>
	</div>
	
</template>

<script>
import MasterHeader from "@/components/Header"
import Container from "@/components/Container"
export default {
	name:"App",
	components:{
		MasterHeader,
		Container
	}
}
</script>

<style>
body{
	padding-top: 60px;
}

.main{
	padding-top: 40px;
}
</style>
