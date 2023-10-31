<script setup lang="ts">
	import {
		SliceZone,
		type SliceZoneComponents,
		type SliceLike,
	} from "@prismicio/vue";
	interface Props {
		slices: SliceLike<string>[] | [];
		components: SliceZoneComponents;
	}

	defineProps<Props>();
</script>
<template>
	<SliceZone :slices="slices" :components="components" />
</template>
