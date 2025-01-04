import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY, TOTAL_POSTS_QUERY } from "@/sanity/lib/queries";
import { Halaman } from "../components/pagination";

const POSTS_PER_PAGE = 5;
const options = { next: { revalidate: 60 } };

interface Post {
  _id: string;
  slug: { current: string };
  publishedAt: string;
  title: string;
}

interface PageProps {
  searchParams: Promise<{ page?: string; [key: string]: string | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
  // Resolve searchParams asynchronously
  const params = await searchParams;
  const page = parseInt(params?.page || "1", 10);

  // Validate page number
  const currentPage = isNaN(page) || page < 1 ? 1 : page;

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [posts, totalPosts] = await Promise.all([
    client.fetch<Post[]>(POSTS_QUERY, { start, end }, options),
    client.fetch<number>(TOTAL_POSTS_QUERY, {}, options),
  ]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Post Index</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              className="block p-4 hover:text-blue-500"
              href={`/posts/${post.slug.current}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Halaman currentPage={currentPage} totalPages={totalPages} />
      <Link href="/" className="text-blue-500 hover:underline">
        &larr; Return home
      </Link>
    </main>
  );
}
