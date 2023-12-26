<script>
	import { urlFor } from '$lib/sanityClient';

	export let data;

	console.log(data);
</script>

<div class="lg:mx-20">
	<h1>BLOG</h1>

	<ul class="lg:grid grid-cols-3 gap-8">
		{#each data.posts as post}
			<li class="my-6 p-4 border-2 border-sky-800">
				<a href={`/blog/${post.slug.current}`}>
					<img
						class="w-full h-40 object-cover"
						src={urlFor(post.featuredImage.asset._ref).url()}
						alt="img"
					/>
					<h2 class="text-sky-800 text-2xl font-medium">{post.title}</h2>
					<p class="line-clamp-3 pt-1">{post.excerpt}</p>
				</a>
			</li>
		{/each}
	</ul>
</div>
