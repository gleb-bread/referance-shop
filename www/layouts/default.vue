<template>
	<v-app>
		<header-app>
		</header-app>
		<v-main>
			<header-menu>
			</header-menu>
			<header-subtitles>
			</header-subtitles>
			<slot></slot>
		</v-main>
	</v-app>
</template>

<script lang='ts'>
	
import { defineComponent } from 'vue';
import { PropType } from 'vue';
	
export default defineComponent({
	props: {
		
	},
	
	emits: {
		
	},
	
	computed: {
		
	},
	
	data() {
		return {
			
		};
	},
	
	methods: {
		
	},
	
	components: {
	},
});
</script>
	
<style scoped lang='scss'>
</style>
