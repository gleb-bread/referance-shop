<template>
	<div>
		<VApp>
			<VMain>
				<header-app>
				</header-app>
				<slot />
				
			</VMain>
		</VApp>
	</div>
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
