import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";
import Form from "./components/Form";
import FetchRandomUser from "./components/FetchRandomUser";
import TodoList from "./components/TodoList";

const Body = (props) => {
  return (
    <p>
      Edit <code>src/App.js</code> and save to reload.
      {props.num}
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <header>
        state management
        <ImageSlider />
        <br />
        form validation
        <Form />
        <br />
        fetching user data through API
        <br />
        <FetchRandomUser />
        <br />
        todo list APP
        <br />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
