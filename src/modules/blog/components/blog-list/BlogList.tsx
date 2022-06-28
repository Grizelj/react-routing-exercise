/** @jsxImportSource @emotion/react */

import { blogPosts } from 'data';
import { wrapper } from './BlogList.styles';

interface BlogListProps {
  title: string;
  description: string;
  onReadBlog: () => void;
}

export const BlogList: React.FC<BlogListProps> = ({
    title,
    description,
    onReadBlog,
  }) => {
    return (
        <div css={wrapper}>
        <ul>
            {blogPosts.map((blogPost) => (
            <li key={blogPost.id}>
                <BlogList
                title={blogPost.title}
                description={blogPost.description}
                onReadBlog={() => onReadBlog(blogPost)}
                />
            </li>
            ))}
        </ul>
        </div>;
    );
  };
