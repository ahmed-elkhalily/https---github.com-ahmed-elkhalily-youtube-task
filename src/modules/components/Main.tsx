import image1 from "../../assets/images/image1.png";
import FilterIcon from "../../assets/images/filter.svg";
import { MainProps } from "../types";
import moment from "moment";
import Skeleton from "react-loading-skeleton";

function Main({ isLoading, data }: MainProps) {
  const loadingSchema = Array(5).fill(null);

  return (
    <main className="main">
      <div className="container">
        {/* filter */}
        <div className="main__filter">
          <div className="filter__views">
            {isLoading ? (
              <Skeleton width={200} height={"1rem"} />
            ) : (
              <div>{data?.pageInfo?.totalResults} total.</div>
            )}
          </div>
          <div className="filter__filter">
            {isLoading ? (
              <Skeleton width={120} height={"1rem"} />
            ) : (
              <>
                <img src={FilterIcon} alt="" />
                <div>Filter</div>
              </>
            )}
          </div>
        </div>

        {/* isLoading */}
        {isLoading ? (
          <>
            {loadingSchema.map((item) => (
              <div className="main__list">
                <div className="item video">
                  <figure className="video__figure">
                    <Skeleton height={200} width={"100%"} enableAnimation />
                  </figure>
                  <div className="video__details-wrapper">
                    <h4 className="video__header">
                      <Skeleton enableAnimation />
                    </h4>
                    <div className="video__details">
                      <div className="views">
                        <Skeleton
                          height={"1rem"}
                          width={"5rem"}
                          enableAnimation
                        />
                      </div>
                      <span className="dot" />
                      <div className="created-at">
                        <Skeleton
                          height={"1rem"}
                          width={"5rem"}
                          enableAnimation
                        />
                      </div>
                    </div>
                    <div className="video__maker">
                      <Skeleton width={30} height={30} circle enableAnimation />
                      <span className="maker-name" role="button">
                        <Skeleton enableAnimation />
                      </span>
                    </div>
                    <div className="video__desc">
                      <Skeleton count={3} enableAnimation />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="main__list">
            {data?.items?.map((item) => {
              if (item.id.channelId) {
                return (
                  <div className="item channel" key={item.id.channelId}>
                    <div className="channel__fig-wrapper">
                      <figure className="channel__fig">
                        <img
                          src={item.snippet.thumbnails.high.url}
                          alt="code-garden channel"
                        />
                      </figure>
                    </div>

                    <div className="channel__detials-wrapper">
                      <div className="channel__name">{item.snippet.title}</div>
                      <div className="channel__detials">
                        <div>@{item.snippet.channelTitle}</div>
                        <span className="dot" />
                        <div>175k subscribers</div>
                      </div>
                      <div className="channel__desc">
                        {item.snippet.description}
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={item.id.videoId} className="item video">
                    <figure className="video__figure">
                      <img src={item.snippet.thumbnails.high.url} alt="" />
                      <div className="time">02:37</div>
                    </figure>
                    <div className="video__details-wrapper">
                      <h4 className="video__header">{item.snippet.title}</h4>
                      <div className="video__details">
                        <div className="views">18k views</div>
                        <span className="dot" />
                        <div className="created-at">
                          {moment(item.snippet.publishedAt).fromNow()}
                        </div>
                      </div>
                      <div className="video__maker">
                        <img src={image1} alt="userName" role="button" />
                        <span className="maker-name" role="button">
                          {item.snippet.channelTitle}
                        </span>
                      </div>
                      <div className="video__desc">
                        {item.snippet.description}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
