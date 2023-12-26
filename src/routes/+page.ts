import { client } from '$lib/sanityClient.js';

export async function load() {
	const data = await client.fetch(`*[_type == "post"]`);

	// if (data) {
	// 	return {
	// 		posts: data
	// 	};
	// }
	// return {
	// 	status: 500,
	// 	body: new Error('Internal Server Error')
	// };

	return {
		posts: data
	};
}
