import React from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [Buttonaction, setButtonAction] = React.useState(false);
  const handleClick = () => {
    setButtonAction(true);
    // Fetch data from https://reqres.in/api/users?page=1
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        //  console.log(isDateLoaded);
        setUserData(res.data);
        setInterval(() => {
          setLoading(true);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* Navbar Start */}
      <section>
        <nav className="navdiv">
          <div>
            <h1 className="title">LetsGrowMore</h1>
          </div>
          <div>
            <ul>
              <button className="titlebts" onClick={handleClick}>
                Get Users
              </button>
            </ul>
          </div>
        </nav>
        {/* Navbar End */}

        <div className="bodytextflex">
          <div className="mainflex">
            {Buttonaction ? (
              loading ? (
                <Box userData={userData} />
              ) : (
                <div className="loader"></div>
              )
            ) : (
              <div>
                <p className="bodytext">
                  Click on Get Users button to get users data
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
