// import { render, fireEvent } from "@testing-library/react";
// import App from "./App.js";
// import Box from "./Box.js";
// import BoxList from "./BoxList.js";
// import NewBoxForm from "./NewBoxForm.js";

// it("renders App without crashing", () => {
//   render(<App />);
// });

// it("matches App snapshot", () => {
//   const { asFragment } = render(<App />);
//   expect(asFragment()).toMatchSnapshot();
// });

// it("renders BoxList without crashing", () => {
//   render(<BoxList />);
// });

// it("matches BoxList snapshot", () => {
//   const { asFragment } = render(<BoxList />);
//   expect(asFragment()).toMatchSnapshot();
// });

// it("renders Box without crashing", () => {
//   render(
//     <Box
//       id="1"
//       width="100"
//       height="100"
//       backgroundColor="red"
//       removeBox={() => {}}
//     />
//   );
// });

// it("matches Box snapshot", () => {
//   const { asFragment } = render(
//     <Box
//       id="1"
//       width="100"
//       height="100"
//       backgroundColor="red"
//       removeBox={() => {}}
//     />
//   );

//   expect(asFragment()).toMatchSnapshot();
// });

// it("renders NewBoxForm without crashing", () => {
//   render(<NewBoxForm addBox={() => {}} />);
// });

// it("matches NewBoxForm snapshot", () => {
//   const { asFragment } = render(
//     <NewBoxForm addBox={() => {}} />
//   );

//   expect(asFragment()).toMatchSnapshot();
// });

// it("can add a new box", () => {
//   const { getByLabelText, getByText, getByTestId } =
//     render(<BoxList />);

//   fireEvent.change(getByLabelText("Width:"), {
//     target: { value: "100" }
//   });

//   fireEvent.change(getByLabelText("Height:"), {
//     target: { value: "100" }
//   });

//   fireEvent.change(getByLabelText("Color:"), {
//     target: { value: "red" }
//   });

//   fireEvent.click(getByText("Add Box"));

//   expect(getByTestId("box")).toBeInTheDocument();
// });

// it("can remove a box", () => {
//   const { getByLabelText, getByText, queryByTestId } =
//     render(<BoxList />);

//   fireEvent.change(getByLabelText("Width:"), {
//     target: { value: "100" }
//   });

//   fireEvent.change(getByLabelText("Height:"), {
//     target: { value: "100" }
//   });

//   fireEvent.change(getByLabelText("Color:"), {
//     target: { value: "blue" }
//   });

//   fireEvent.click(getByText("Add Box"));

//   expect(queryByTestId("box")).toBeInTheDocument();

//   fireEvent.click(getByText("X"));

//   expect(queryByTestId("box")).not.toBeInTheDocument();
// });



import { render, fireEvent } from "@testing-library/react";
import App from "./App.js";
import TodoList from "./TodoList.js";
import Todo from "./Todo.js";
import NewTodoForm from "./NewTodoForm.js";

it("renders App without crashing", () => {
  render(<App />);
});

it("matches App snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders TodoList without crashing", () => {
  render(<TodoList />);
});

it("matches TodoList snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders Todo without crashing", () => {
  render(
    <Todo
      id="1"
      task="Walk the dogs"
      removeTodo={() => {}}
    />
  );
});

it("matches Todo snapshot", () => {
  const { asFragment } = render(
    <Todo
      id="1"
      task="Walk the dogs"
      removeTodo={() => {}}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});

it("renders NewTodoForm without crashing", () => {
  render(<NewTodoForm addTodo={() => {}} />);
});

it("matches NewTodoForm snapshot", () => {
  const { asFragment } = render(
    <NewTodoForm addTodo={() => {}} />
  );

  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", () => {
  const { getByLabelText, getByText } = render(<TodoList />);

  fireEvent.change(getByLabelText("Task:"), {
    target: { value: "Study React" }
  });

  fireEvent.click(getByText("Add Todo"));

  expect(getByText("Study React")).toBeInTheDocument();
});

it("can remove a todo", () => {
  const { getByLabelText, getByText, queryByText } =
    render(<TodoList />);

  fireEvent.change(getByLabelText("Task:"), {
    target: { value: "Study React" }
  });

  fireEvent.click(getByText("Add Todo"));

  expect(getByText("Study React")).toBeInTheDocument();

  fireEvent.click(getByText("X"));

  expect(queryByText("Study React")).not.toBeInTheDocument();
});