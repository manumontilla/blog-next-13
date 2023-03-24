import "./Tags.css";

const Tags = ({ tags }: string[]) => {
  return (
    <div className="card_tags">
      {tags.map((tag: string) => (
        <span className={"tag tag-" + tag.toLowerCase()}>{tag}</span>
      ))}
    </div>
  );
};
export default Tags;
