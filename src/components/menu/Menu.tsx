import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <div key={item.id} className="item">
            <span className="title">{item.title.toUpperCase()}</span>
            {item.listItems &&
              item.listItems.map((listItem) => {
                return (
                  <Link key={listItem.id} to={listItem.url} className="listItem">
                    <img src={listItem.icon} alt="" />
                    <span className="listItemTitle">{listItem.title}</span>
                  </Link>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
