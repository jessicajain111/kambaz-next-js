export default function Float() {
  const lorem =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic recusandae consequuntur ratione magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic recusandae consequuntur ratione magnam.";
  const imgUrl =
    "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";

  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img
          className="wd-float-right"
          src={imgUrl}
          alt="Starship"
        />
        {lorem} {lorem}
        <img className="wd-float-left" src={imgUrl} alt="Starship" />
        {lorem} {lorem}
        <img className="wd-float-right" src={imgUrl} alt="Starship" />
        {lorem} {lorem}
        <img className="wd-float-left" src={imgUrl} alt="Starship" />
        {lorem} {lorem}
        <div className="wd-float-done"></div>
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={imgUrl} alt="Starship" />
        <div className="wd-float-done"></div>
      </div>
    </div>
  );
}
