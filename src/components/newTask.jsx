import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from 'uuid' 

const NewTask = ({ onAddTask, inputValue, setInputValue }) => {
  const v4uuid = () => {
    return uuid();
  }

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks === null) {
    tasks = [];
  }

  let exampleTask = [
    "do the groceries",
    "sweep the house",
    "wash the dishes",
    "check email inboxes",
    "walk the dog",
    "water the plants",
    "exercise",
    "study for exams",
    "take out the trash",
    "eat a nice meal!",
  ];


  return (
    <div className="newTask">
      <p class="subtitle">Create a new to-do</p>
      <form
        className="input-cont</div>ainer"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={
            "e.g " + exampleTask[Math.floor(Math.random() * exampleTask.length)]
          }
          className="taskInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          type="submit"
          disabled={inputValue.trim() === ""}
          onClick={() => {
            let newTask = {
              id: v4uuid(),
              text: inputValue,
              completed: false,
              grouping: "all",
            };
            onAddTask(newTask);
            setInputValue("");
          }}
        >
          <FontAwesomeIcon icon={faFeather} />
        </button>
      </form>
      <p className="msg">what would you like to achieve today?</p>
    </div>
  );
};

export default NewTask;
