<script>
	import { PortableText } from '@portabletext/svelte';

	export let data;

	const post = data.post[0];
</script>

<div class="lg:mx-80 my-8">
	<a href="/">Back to home</a>

	<div>
		<h2 class="text-sky-800 text-3xl font-medium mb-4">{post?.title}</h2>

		<span class="bg-sky-200 px-4 py-1 rounded-full text-sm">{post.tag}</span>
		<span class="px-2 font-medium text-gray-400"
			>{new Date(post._createdAt).toISOString().split('T')[0]}</span
		>

		<article class="my-4">
			<PortableText value={post.content} components={{}} />
		</article>
	</div>
</div>
