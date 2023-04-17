import "./style.css";

const RoadmapSection = () => {
  return (
    <div className="roadmap">
      <div className="roadmap_title_wrapper">
        <div className="roadmap__title">Roadmap</div>
        <div className="roadmap__view">View</div>
      </div>

      <div className="roadmap_items_wrapper">
        <div className="item">
          <div className="item__planned">Planned</div>
          <div className="item_number">2</div>
        </div>
        <div className="item">
          <div className="item__progress">In-progress</div>
          <div className="item_number">3</div>
        </div>
        <div className="item">
          <div className="item__live">Live</div>
          <div className="item_number">1</div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
