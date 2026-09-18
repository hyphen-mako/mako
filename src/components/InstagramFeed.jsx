"use client";

import { m } from "framer-motion";
import { useEffect, useState } from "react";

export default function InstagramFeed() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/instagram-feed")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && data?.ok && Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!posts) return null;

  return (
    <section id="instagram" className="ig-section" aria-label="인스타그램 게시물">
      <div className="ig-inner">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="ig-label">INSTAGRAM</p>
          <h2 className="ig-title">인스타그램에서 만나는 MAKO</h2>
          <p className="keep-all ig-desc">
            MAKO가 만든 카드뉴스와 마케팅 소식을 인스타그램에서 가장 먼저 확인하세요
          </p>
        </m.div>

        <div className="ig-grid">
          {posts.map((post, index) => (
            <m.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-card"
              aria-label={post.caption ? `인스타그램 게시물: ${post.caption}` : "인스타그램 게시물"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
            >
              <img src={post.image} alt={post.caption || "MAKO 인스타그램 게시물"} loading="lazy" className="ig-card-image" />
              {post.isVideo ? <i className="ri-play-fill ig-card-badge" aria-hidden="true" /> : null}
              <span className="ig-card-overlay">
                <i className="ri-instagram-line" aria-hidden="true" />
                {post.caption ? <span className="ig-card-caption">{post.caption}</span> : null}
              </span>
            </m.a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.instagram.com/mako_platform"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-follow"
          >
            <i className="ri-instagram-line text-[18px]" aria-hidden="true" />
            @mako_platform 팔로우
          </a>
        </div>
      </div>
    </section>
  );
}
