import React, { useReducer, useRef } from "react";
import { Table } from "react-bootstrap";
import { todoState, todoReducer } from "../../reducers/TodoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, todoState);
  const itemRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      id: state.items.length + 1,
      name: itemRef.current.value,
    });
    e.target.reset();
  };
  console.log(state);
  return (
    <div className="container pt-5 lead d-flex flex-column min-vh-100">
      <h1 className="display-4 font-weight-bold text-monospace text-body">
        React Todo
      </h1>
      <h1 className="display-4">Total Item in List {state.items.length}</h1>
      <form onSubmit={handleOnSubmit}>
        <div style={{ width: "60%" }} className="form-row mx-auto">
          <div className="col-12">
            <div className="form-group d-flex">
              <input
                className="form-control border-right-0 rounded-0 col-8"
                placeholder="Enter Item"
                ref={itemRef}
                type="text"
                id=""
              />
              <input
                className="btn btn-primary rounded-0 col-4 lead"
                type="submit"
                id=""
              />
            </div>
          </div>
        </div>
      </form>
      {state.items.length !== 0 ? (
        <Table className="w-50 mx-auto" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.items.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td style={{ width: "10%" }}>
                  <button
                    className="btn btn-outline-danger border-0 mx-3"
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", id: item.id })
                    }
                  >
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div></div>
      )}
      <div className="row mt-auto pb-5">
        <div className="col-lg-12 col-sm-12 text-center">
          <div className="copyright lead">
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            Made with ❤ by
            <a
              className="text-danger"
              href="http://linkedin.com/in/ishahriaremon"
            >
              {" "}
              Shahriar Emon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
