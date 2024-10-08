import Image from "next/image";

const BlogSection = () => {
  return (
    <div className="pb-7 text-white" style={{ backgroundColor: "#180905 " }}>
      <div className="lg:top-14 lg:relative max-sm:relative max-sm:top-10">
        <p className="text-center shop text-red-500 font-bold text-2xl">
          Latest News
        </p>
        <h1 className="text-center our text-4xl font-bold">
          Latest News Update
        </h1>
        <div className="text-center mx-auto lg:relative lg:-top-10 max-sm:relative max-sm:-top-8">
          <Image
            src="https://i.ibb.co/bQQcFnd/153827712-butcher-logo-meat-restaurant-chef-symbol-removebg-preview.png"
            alt="Butcher Logo"
            width={128}
            height={128}
            className="w-32 mx-auto"
          />
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {[
            {
              date: "13 Jul 2020",
              title: "Hamburg Meat is Animal Flesh Food",
              imgSrc:
                "https://themegenix.net/html/bemet/assets/img/blog/blog_post01.jpg",
              likes: "7.4K",
              comments: "81",
              link: "/shop-blog/38642",
            },
            {
              date: "4 Nov 2020",
              title: "Good Source of Iron And Flesh Food",
              imgSrc:
                "https://themegenix.net/html/bemet/assets/img/blog/blog_post02.jpg",
              likes: "7.4K",
              comments: "81",
              link: "/shop-blog/38642",
            },
            {
              date: "28 Dec 2020",
              title: "Chicken Sausage For Sale Humanely Raised",
              imgSrc:
                "https://themegenix.net/html/bemet/assets/img/blog/blog_post03.jpg",
              likes: "7.4K",
              comments: "81",
              link: "/shop-blog/38642",
            },
          ].map((post, index) => (
            <div
              key={index}
              style={{ background: "#441f16" }}
              className="overflow-hidden transition-shadow duration-300 rounded-xl p-4"
            >
              <a href={post.link} aria-label="Article">
                <Image
                  src={post.imgSrc}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 rounded"
                />
              </a>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-white uppercase">
                  {post.date}
                </p>
                <a
                  href={post.link}
                  aria-label="Article"
                  className="inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">{post.title}</p>
                </a>
                <p className="mb-4 text-white">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <div className="flex space-x-4">
                  <a
                    href={post.link}
                    aria-label="Likes"
                    className="flex items-start text-white transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 text-white transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">{post.likes}</p>
                  </a>
                  <a
                    href={post.link}
                    aria-label="Comments"
                    className="flex items-start text-white transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-white transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="23 5 23 18 19 18 19 22 13 18 12 18"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <polygon
                          points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">{post.comments}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
