/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import { Post } from '../../types/Post';
import { getPosts } from '../../util/getPosts';
import AppLayout, { AppLayoutProps } from '../../components/AppLayout';
import { getAppLayoutProps } from '../../util/getAppLayoutProps';

interface PageProps extends AppLayoutProps {
  post: Post
}

// eslint-disable-next-line react/function-component-definition
const Page: NextPage<PageProps> = function ({ post, recentPosts, topTags }: PageProps) {
  return (
    <AppLayout recentPosts={recentPosts} topTags={topTags}>
      <div className="s-content content">
        <main className="row content__page">

          <article className="column large-full entry format-standard">

            <div className="media-wrap entry__media">
              <div className="entry__post-thumb">
                <img
                  src="/images/thumbs/single/standard/standard-1000.jpg"
                  //  srcset="images/thumbs/single/standard/standard-2000.jpg 2000w,
                  //          images/thumbs/single/standard/standard-1000.jpg 1000w,
                  //          images/thumbs/single/standard/standard-500.jpg 500w"
                  //           sizes="(max-width: 2000px) 100vw, 2000px"
                  alt=""
                />
              </div>
            </div>

            <div className="content__page-header entry__header">
              <h1 className="display-1 entry__title">
                {post.title}
              </h1>
              <ul className="entry__header-meta">
                <li className="author">
                  By
                  {' '}
                  <a href="#0">Jonathan Doe</a>
                </li>
                <li className="date">April 30, 2019</li>
                <li className="cat-links">
                  <a href="#0">Marketing</a>
                  <a href="#0">Management</a>
                </li>
              </ul>
            </div>

            <div className="entry__content">

              <p className="lead drop-cap">
                Duis ex ad cupidatat tempor Excepteur cillum cupidatat
                fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
                incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
                dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui
                labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua
                ea nisi sint.
              </p>

              <p>
                Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat
                dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit
                id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit
                nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam
                consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut
                dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim
                veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim
                aliqua laborum mollit quis nostrud sed sed.
              </p>

              <p>
                <img
                  src="/images/wheel-1000.jpg"
                  //  srcset="images/wheel-2000.jpg 2000w,
                  //          images/wheel-1000.jpg 1000w,
                  //          images/wheel-500.jpg 500w"
                  //          sizes="(max-width: 2000px) 100vw, 2000px"
                  alt=""
                />
              </p>

              <h2>Large Heading</h2>

              <p>
                Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                soluta nobis est eligendi optio cumque nihil impedit quo minus
                <a href="http://#">omnis voluptas assumenda est</a>
                {' '}
                id quod maxime placeat
                facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut
                officiis debitis aut rerum necessitatibus saepe eveniet ut et.
              </p>

              <blockquote>
                <p>
                  For God so loved the world, that he gave his only Son, that whoever believes in
                  him should not perish but have eternal life. For God did not send his Son into
                  the world to condemn the world, but in order that the world might be
                  saved through him.
                </p>
                <cite>John 3:16-17 ESV</cite>
              </blockquote>

              <p>
                Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim
                cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing
                in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
              </p>

              <h3>Smaller Heading</h3>

              <p>
                Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim
                cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing
                in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
              </p>

              <p>
                Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim
                cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing
                in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
              </p>

              <ul>
                <li>
                  Donec nulla non metus auctor fringilla.
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </li>
                <li>Donec nulla non metus auctor fringilla.</li>
                <li>Donec nulla non metus auctor fringilla.</li>
              </ul>

              <p>
                Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim
                cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing
                in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
              </p>

              <p className="entry__tags">
                <span>Post Tags</span>

                <span className="entry__tag-list">
                  <a href="#0">orci</a>
                  <a href="#0">lectus</a>
                  <a href="#0">varius</a>
                  <a href="#0">turpis</a>
                </span>

              </p>
            </div>

            <div className="entry__pagenav">
              <div className="entry__nav">
                <div className="entry__prev">
                  <a href="#0" rel="prev">
                    <span>Previous Post</span>
                    Tips on Minimalist Design
                  </a>
                </div>
                <div className="entry__next">
                  <a href="#0" rel="next">
                    <span>Next Post</span>
                    Less Is More
                  </a>
                </div>
              </div>
            </div>

            <div className="entry__related">
              <h3 className="h2">Related Articles</h3>

              <ul className="related">
                <li className="related__item">
                  <a href="single-standard.html" className="related__link">
                    <img src="/images/thumbs/masonry/walk-600.jpg" alt="" />
                  </a>
                  <h5 className="related__post-title">Using Repetition and Patterns in Photography.</h5>
                </li>
                <li className="related__item">
                  <a href="single-standard.html" className="related__link">
                    <img src="/images/thumbs/masonry/dew-600.jpg" alt="" />
                  </a>
                  <h5 className="related__post-title">Health Benefits Of Morning Dew.</h5>
                </li>
                <li className="related__item">
                  <a href="single-standard.html" className="related__link">
                    <img src="/images/thumbs/masonry/rucksack-600.jpg" alt="" />
                  </a>
                  <h5 className="related__post-title">The Art Of Visual Storytelling.</h5>
                </li>
              </ul>
            </div>

          </article>

        </main>

      </div>
    </AppLayout>
  );
};

export default Page;

export const getStaticPaths = async () => {
  const posts: Array<Post> = getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IGetStaticProps {
  params: {
    slug: string,
  }
}

export const getStaticProps = ({ params: { slug } }: IGetStaticProps) => {
  const posts: Array<Post> = getPosts();
  const post = posts.find((p) => p.slug === slug);
  const appLayoutProps = getAppLayoutProps(posts);

  return {
    props: {
      ...appLayoutProps,
      post,
    },
  };
};