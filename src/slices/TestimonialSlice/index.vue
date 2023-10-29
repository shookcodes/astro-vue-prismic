<script setup lang="ts">
	import { sliceVariants } from "./variants";
	import type { TestimonialsSliceComponentVariant } from "./variants";

	interface Props {
		slice: TestimonialsSliceComponentVariant;
		index: number;
		className?: string;
	}

	const props = defineProps<Props>();

	const { slice, index } = props;

	const variantTitle: string =
		slice.variation.charAt(0).toUpperCase() + slice.variation.slice(1) || "";

	const SliceComponent: TestimonialsSliceComponentVariant =
		sliceVariants[variantTitle];
</script>

<template v-if="variantTitle">
	<component
		:is="SliceComponent"
		:slice="slice"
		:index="index"
		:class="className"
		>NADA</component
	>
</template>
