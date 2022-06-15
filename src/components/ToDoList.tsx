import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

// [
//   {
//       "text": "5",
//       "id": 1655294781298,
//       "category": "TO_DO"
//   },
//   {
//       "text": "4",
//       "id": 1655294780290,
//       "category": "TO_DO"
//   },
//   {
//       "text": "3",
//       "id": 1655294779978,
//       "category": "TO_DO"
//   },
//   {
//       "text": "2",
//       "id": 1655294779610,
//       "category": "TO_DO"
//   },
//   {
//       "text": "1",
//       "id": 1655294342387,
//       "category": "TO_DO"
//   },
//   {
//       "text": "11",
//       "id": 1655294116771,
//       "category": "TO_DO"
//   }
// ]

// 1) find to do based on id [2]

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
