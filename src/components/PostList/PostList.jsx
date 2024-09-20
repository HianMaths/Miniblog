import { PostItem } from "../PostItem/PostItem";
import {ListContainer} from "./StyledPostList";

export function PostList({ posts, setPosts }) {
    const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  };
  
    return (
      <ListContainer>
         {posts.map((post) => (
          <PostItem
          key={post.id} 
          post={post}
          onDelete={handleDelete} 
          />
        ))}
      </ListContainer>
    );
  }