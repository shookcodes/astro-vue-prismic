import Default from "./Default.vue";

export type TestimonialsSliceComponentVariant = typeof Default;

// Define an interface for sliceVariants
interface SliceVariants {
	Default: TestimonialsSliceComponentVariant;
}

export type { SliceVariants };

export const sliceVariants: Record<string, typeof Default> = { Default };
