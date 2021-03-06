import React from "react";
import LazyLoad from "react-lazyload";
import { ListWrapper, ListItem, List } from "./style";
import { getCount } from "../../api/utils";
import { withRouter } from "react-router-dom";

const RecommendList = (props) => {
  const { recommendList } = props;

  const enterDetail = (id) => {
    props.history.push(`/recommend/${id}`);
  };

  return (
    <ListWrapper>
      <h1 className="title">Recommend List</h1>
      <List>
        {recommendList.map((item, index) => (
          <ListItem key={item.id + index} onClick={() => enterDetail(item.id)}>
            <div className="img_wrapper">
              <div className="decorate"></div>
              <LazyLoad placeholder={<span>loading..</span>}>
                <img
                  src={`${item.picUrl}?param=300x300`}
                  width="100%"
                  height="100%"
                  alt="music"
                />
              </LazyLoad>
              <div className="play_count">
                <i className="fa fa-headphones"></i>
                <span className="count">{getCount(item.playCount)}</span>
              </div>
            </div>
            <div className="desc">{item.name}</div>
          </ListItem>
        ))}
      </List>
    </ListWrapper>
  );
};

export default withRouter(React.memo(RecommendList));
