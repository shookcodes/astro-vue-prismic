import Default from "./Default.vue";
import WithImage from "./WithImage.vue";

export type CTASliceComponentVariant = typeof Default | typeof WithImage;

// Define an interface for sliceVariants
interface SliceVariants {
	Default: CTASliceComponentVariant;
	WithImage: CTASliceComponentVariant;
}

export type { SliceVariants };

export const sliceVariants: Record<string, typeof Default | typeof WithImage> =
	{ Default, WithImage };
