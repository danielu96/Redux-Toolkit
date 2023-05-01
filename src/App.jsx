import { useState,useEffect} from 'react'
import './App.css'
import ToDo from './ToDo'
import SingleItem from './SingleItem'
import { useSelector,useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate';
import { clearTasks } from './Slices/taskReducer'


function App() {
    const  tasks  = useSelector((state) => state.task.tasks);
   const dispatch= useDispatch()
   const [currentItems, setCurrentItems] = useState([]);  
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(tasks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tasks.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,
    tasks
  ]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) %
      tasks.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  // const updateTaskDone=(id, newDone) =>{
  //   setTasks(prev => {
  //     const newTasks = [...prev];
  //     newTasks[id].done = newDone;
  //     return newTasks;
  //       });
       
  // }
 
 
  // const handleSubmit =(e) => {
  //   e.preventDefault();
  //   if(inputRef.current.value.trim()){
  //     dispatch(AddTask({
  //       id:Math.random()* 1000 ,
  //       content: inputRef.current.value,
  //     }))
  //     console.log(inputRef.current.value);
  //   }
  //   inputRef.current.value=""
  // }

  
  return (
    <div className="App">    
     <h1>Redux-Toolkit</h1>   
     <div>{tasks.length} task {tasks.completed}</div>  
   <ToDo /> 
   <div  style={{height:'220px' }}>
      { currentItems.map((task,id) => (
        <SingleItem
         key={id} 
        {...task} 
        // handleSubmit ={(id) => handleSubmit (id)}
       
        // onToggle={done => updateTaskDone(id, done)} 
              // Rename={newName => renameTask(id,newName)}
              // removeHandler={(id) => removeHandler(id)}
              // onToggle={done => updateTaskDone(id, done)} 
              
              />
         ))} 
     {/* <button onClick={()=> clearItems()}>clear all</button> */}
</div>
<button onClick={()=>
  dispatch(clearTasks())}>clear all</button>
{/* <button className='btn-clear' onClick={() =>
                            dispatch(openModal())}>Clear Cart</button> */}
<div style={{top:'1rem'}}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        pageLinkClassName={"page-num"}
        previousLinkClassName={"page-num"}
        nextLinkClassName={"page-num"}
        disabledClassName={"disabled"}
        activeClassName={"active"}

      />
      </div>
    </div>
  )
}

export default App
