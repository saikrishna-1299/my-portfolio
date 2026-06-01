const blogs = [
  {
    title: "When AI Meets the Cloud",
    desc: "How Artificial Intelligence Is Making Cloud Computing Smarter, Faster, and More Efficient",
    link: "https://medium.com/@emailuvsk/when-ai-meets-the-cloud-e50f466356eb",
  },
  // {
  //   title: "Introduction to Transactional Data Lakes",
  //   desc: "An article discussing transactional data lakes and the benefits of using them.",
  //   link: "https://medium.com/@yourusername/blog-2",
  // },
  // {
  //   title: "Comparison of Data Lake Formats: Apache Iceberg, Hudi, and Delta Lake",
  //   desc: "A comparison of different data lake formats, their advantages and disadvantages.",
  //   link: "https://medium.com/@yourusername/blog-3",
  // },
];

function Blog() {
  return (
    <section id="blog" className="section modern-blog-section">
       <p className="section-subtitle">READ</p>
      <h2 className="section-title">MY BLOG</h2>

      <div className="modern-blog-grid">
        {blogs.map((blog) => (
          <a
            href={blog.link}
            className="modern-blog-card"
            target="_blank"
            rel="noreferrer"
            key={blog.title}
          >
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <span>Read on Medium →</span>
          </a>
        ))}
      </div>

      <a
        href="https://medium.com/@emailuvsk"
        className="medium-load-more-btn"
        target="_blank"
        rel="noreferrer"
      >
        Load More on Medium →
      </a>
    </section>
  );
}

export default Blog;