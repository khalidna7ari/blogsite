import moment from 'moment';
import Post from "./Post";

interface Posts {
  
}

type Props = {
  posts: Posts[]
}

const Posts = ({ posts }: Props) => (
  <div>
    <Post />
  </div>
)

export default Posts;