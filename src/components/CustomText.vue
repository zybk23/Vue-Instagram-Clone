<template>
	<component :is="tag" :class="size">
		<slot />
	</component>
</template>

<script>
export default {
	name:"Text"	,
	props:{
		tag:{
			type:String,
			default:"span"
		},
		size:{
			type:String,
			default:"normal", //normal :14, small:12, xsmall:11, xxsmall:10
			validator:function(){
				return ["normal","small","xsmall","xxsmall"].indexOf!==-1
			}
		}
	}
}
</script >

<style lang="scss">
.normal{

}
.small{
font-size: 12px;
}

.xsmall{
font-size: 11px;
}

.xxsmall{
font-size: 10px;
}
</style>