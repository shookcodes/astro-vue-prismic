import { createClient } from "@prismicio/client";

export const client = createClient(
	"https://astro-prismic-slicemachine.cdn.prismic.io/api/v2"
);

// Update with other Single type string names as new Single pages are created.
export type DocumentType = "homepage";

export const getSingle = async (documentType: DocumentType) => {
	try {
		const { data } = await client.getSingle(documentType);

		return data;
	} catch (error) {
		return console.log(`Error fetching data: ${error}`);
	}
};

export const getByRef = async (ref: string) => {
	try {
		const { data } = await client.getFirst({ ref });
		return data;
	} catch (error) {
		return console.log(`Error fetching data: ${error}`);
	}
};

export const getByID = async (documentId: string) => {
	try {
		const { data } = await client.getByID(documentId);

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
