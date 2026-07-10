import "./App.css";

function Sun() {
  return (
    <div className="sun" aria-hidden="true">
      <span className="sun-ray ray-1" />
      <span className="sun-ray ray-2" />
      <span className="sun-ray ray-3" />
      <span className="sun-ray ray-4" />
      <span className="sun-ray ray-5" />
      <span className="sun-ray ray-6" />

      <div className="sun-face">
        <span className="sun-eye left-eye" />
        <span className="sun-eye right-eye" />
        <span className="sun-smile" />
      </div>
    </div>
  );
}

function Cloud({ className = "" }) {
  return (
    <div className={`cloud ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

function Flower({ className = "" }) {
  return (
    <div className={`flower ${className}`} aria-hidden="true">
      <div className="flower-head">
        <span className="petal petal-1" />
        <span className="petal petal-2" />
        <span className="petal petal-3" />
        <span className="petal petal-4" />
        <span className="petal petal-5" />
        <span className="flower-middle" />
      </div>

      <span className="flower-stem" />
      <span className="flower-leaf" />
    </div>
  );
}

export default function App() {
  const handleClick = () => {
    alert("Hello from the badly drawn world!");
  };

  return (
    <main className="drawing-page">
      <div className="paper-texture" />

      <Sun />
      <Cloud className="cloud-one" />
      <Cloud className="cloud-two" />

      <div className="scribble scribble-one" />
      <div className="scribble scribble-two" />

      <section className="hero">
        <div className="small-note">I made a website!</div>

        <h1>
          <span className="hello-word">
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>O</span>
            <span>W</span>
          </span>

          <span className="world-word">
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>L</span>
            <span>D</span>
          </span>
        </h1>

        <p>
          This is my very important website.
          <br />
          Please be nice to it.
        </p>

        <button type="button" onClick={handleClick}>
          <span>press me!</span>
        </button>
      </section>

      <div className="ground">
        <div className="grass grass-one" />
        <div className="grass grass-two" />
        <div className="grass grass-three" />
        <div className="grass grass-four" />
        <div className="grass grass-five" />
      </div>

      <Flower className="flower-one" />
      <Flower className="flower-two" />
      <Flower className="flower-three" />

      <div className="little-house" aria-hidden="true">
        <div className="roof" />
        <div className="house-body">
          <div className="window">
            <span />
          </div>
          <div className="door">
            <span />
          </div>
        </div>

        <div className="smoke smoke-one" />
        <div className="smoke smoke-two" />
        <div className="smoke smoke-three" />
      </div>

      <div className="footer-note">
        made with crayons and maybe react
      </div>
    </main>
  );
}