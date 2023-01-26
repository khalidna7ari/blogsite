import { Moment } from "moment";

import { Post } from "@/types/Post";
import Image from "next/image";


type Props = {
  date: string,
  post: Post 
}

const Post = ({ date, post }: Props) => (
  <div>
    <Image className="rounded-md object-cover h-[400px] w-[400px]" src={post.imgSrc} width={400} height={400} alt="cat" />
    <small className="text-xs font-semibold mt-4 mb-2 block text-slate-500 tracking-widest">{date}</small>
    <h3 className="text-2xl my-4 font-medium">{post.title}</h3>
    <p className="font-light">{post.body}</p>
  </div>
);

export default Post;