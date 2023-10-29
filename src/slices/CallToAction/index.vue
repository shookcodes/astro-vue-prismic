<script setup lang="ts">
	import { sliceVariants } from "./variants";
	import type { CTASliceComponentVariant } from "./variants";

	interface Props {
		slice: CTASliceComponentVariant;
		index: number;
		className?: string;
	}

	const props = defineProps<Props>();

	const { slice, index } = props;

	const variantTitle: string =
		slice.variation.charAt(0).toUpperCase() + slice.variation.slice(1) || "";

	const SliceComponent: CTASliceComponentVariant = sliceVariants[variantTitle];
</script>

<template v-if="SliceComponent">
	<component
		:is="SliceComponent"
		:slice="slice"
		:index="index"
		:class="className" />
</template>
