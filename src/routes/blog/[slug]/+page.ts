import { client } from '$lib/sanityClient.js';

export async function load({ params }) {
	const slug = params.slug;
	const data = await client.fetch(
		`*[_type == "post" && 
        slug.current == "${slug}"]`
	);

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
		post: data
	};
}
