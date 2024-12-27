import "./Card.css";

function Card() {
  return (
    <>
     <h1 style={{ textAlign: "center" }}>Our Feature Tour</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          omnis facilis officiis animi neque, perspiciatis quis numquam alias
          perferendis iure. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Fugiat repellat incidunt quam vitae molestias dolorum voluptates
          cumque qui at provident. Blanditiis, tenetur cumque. Eveniet labore
          nihil, aliquid, eligendi eum iste veniam iusto possimus aut, id
          consequuntur accusamus atque est earum?
        </p>
      <div className="container">
       

        <div className="row">
          <div className="col-lg-4" style={{ border: "1px solid black" }}>
            <img
              src="./public/download.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  $676
                </a>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4" style={{ border: "1px solid black" }}>
            <img
              src="./public/download.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  $676
                </a>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4" style={{ border: "1px solid black" }}>
            <img
              src="./public/download.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  $676
                </a>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
