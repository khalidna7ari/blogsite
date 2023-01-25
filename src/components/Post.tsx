import Image from "next/image";

type Props = {
  date: Date,
  title: string,
  description: string,
  image: string
}

const Post = ({ date, title, description, image }: Props) => (
  <div>
    <Image src={image} width={400} alt="cat" />
    <small>{date.toString()}</small>
    <h3>{title}</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto fugiat ipsum provident beatae magnam harum modi fuga, necessitatibus neque tenetur perferendis eaque corrupti itaque quos. Iure nesciunt quibusdam officiis.</p>
  </div>
);

export default Post;