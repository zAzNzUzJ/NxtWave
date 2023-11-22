import { useState } from "react";

const HomePage = ({
  id,
  title,
  icon_url,
  link,
  description,
  category,
  tag,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-card">
      <img src={icon_url} alt={title} className="img" />
      <div className="item_info">
        <h3>{title}</h3>
        <span className="cat_info">{category}</span>
        <a href={link}>{link}</a>
        <p>
          {readMore ? description : `${description.substring(0, 50)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
      </div>
    </article>
  );
};

export default HomePage;
