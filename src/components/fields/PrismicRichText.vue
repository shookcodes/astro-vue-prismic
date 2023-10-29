<script setup lang="ts">
	import { PrismicRichText, type PrismicRichTextProps } from "@prismicio/vue";
	// import { type RichTextField } from "@prismicio/types";
	// interface Props {
	// 	field: RichTextField | null | undefined;
	// }

	const props = defineProps<PrismicRichTextProps>();

	const { field } = props;

	console.log("PROP RT", props);
</script>

<template v-if="field">
	<PrismicRichText :field="field" {...props} />
</template>
