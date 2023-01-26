import moment from 'moment';
import Post from "./Post";
import { posts } from '@/data';

const Posts = () => (
  <div>
    <h2 className='text-4xl font-bold mb-6'>Recent Posts 👇</h2>
    <div className='grid grid-cols-3 gap-6'>
      {posts.slice(0, 6).map(post => (
        <Post key={post.id} date={moment().format('MMMM Do YYYY')} post={post} />
      ) )}
    </div>
  </div>
)

export default Posts;