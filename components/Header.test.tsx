import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { Tag } from '../types/Tag';
import { Post } from '../types/Post';

describe('Header', () => {
  const recentPosts: Array<Post> = [
    {
      title: 'Post Title E', date: new Date('2021-01-30'), slug: 'a', content: 'foo',
    },
    {
      title: 'Post Title D', date: new Date('2021-01-29'), slug: 'b', content: 'foo',
    },
    {
      title: 'Post Title C', date: new Date('2021-01-28'), slug: 'c', content: 'foo',
    },
    {
      title: 'Post Title B', date: new Date('2021-01-27'), slug: 'd', content: 'foo',
    },
    {
      title: 'Post Title A', date: new Date('2021-01-26'), slug: 'e', content: 'foo',
    },
  ];

  const topTags: Array<Tag> = [
    { name: 'foo', count: 10 },
    { name: 'bar', count: 8 },
    { name: 'baz', count: 6 },
  ];

  beforeEach(() => {
    render(<Header recentPosts={recentPosts} topTags={topTags} />);
  });

  it.each(recentPosts.map((post) => [post.title]))('renders recent post post "%s"', (postTitle) => {
    expect(
      screen.getByText(postTitle),
    ).toBeInTheDocument();
  });

  it.each(topTags.map((tag) => [tag.name]))('renders tag "%s"', (tagName) => {
    expect(
      screen.getByText(tagName),
    ).toBeInTheDocument();
  });
});
