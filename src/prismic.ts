import type { HomepageDocument } from "@/prismicio-types";
import { createClient } from "@prismicio/client";
import type {
	// PrismicDocumentWithoutUID,
	// PrismicDocumentWithUID,
	PrismicDocument,
} from "@prismicio/types";

export const client = createClient(
	"https://astro-prismic-slicemachine.cdn.prismic.io/api/v2"
);

export type PrismicSingle = PrismicDocument<
	Record<string, any>,
	string,
	string
>;

export type PrismicSingleDocument = HomepageDocument;
// export type PrismicSingle = "homepage";

export const getSingle = async (documentType: "homepage") => {
	try {
		const { data } = await client.getSingle(documentType);

		return data;
	} catch (error) {
		return console.log(`Error fetching data: ${error}`);
	}
};

// export const getByType = async (
// 	documentType: PrismicDocumentWithoutUID,
// 	params
// ) => {
// 	try {
// 		const { data } = await client.getByType<AllDocumentTypes, PrismicDocument>(
// 			documentType,
// 			params
// 		);
// 		return data;
// 	} catch (error) {
// 		return console.log(`Error fetching data: ${error}`);
// 	}
// };

// export const getById = async (documentId: string, params) => {
// 	try {
// 		const { data } = await client.getByID(documentId, params);
// 		return data;
// 	} catch (error) {
// 		return console.log(`Error fetching data: ${error}`);
// 	}
// };
