import socialMediaAuth from "./service/auth";

function App() {
  const handleOnclick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
      <div className="log-div">
            <h1>Hostel Allocation</h1>
            <p>Please Sign in:</p>
            <button id="logBtn" onClick={() => handleOnclick(googleProvider)}><span><i className="fab fa-google"></i></span>Sign in with Google</button>
            <button id="logBtn" onClick={() => handleOnclick(mailProvider)}><span><i className="fab fa-google"></i></span>Sign in with Email</button>
      </div>
  );
}

export default App;
