import { useState,useEffect} from 'react'
import './App.css'
import ToDo from './ToDo'
import SingleItem from './SingleItem'
import { useSelector,useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate';
import { clearTasks, setFilter } from './Slices/taskReducer'
import Filters from './Filters'
import Alert from './Alert'
import ModalFocusAfterClose from './Modal'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/Bs';
import { toggleMode } from './Slices/modeReducer'


function App() {
  const  filter = useSelector((state) => state.task.filter);
    const  tasks = useSelector((state) => state.task.tasks);
   const dispatch= useDispatch()
   const [currentItems, setCurrentItems] = useState([]);  
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;
  const [isLoading, setIsLoading]=useState(false);
  // const numberComplete = tasks.filter(t => t.completed).length;
  const numberStatus = tasks.filter(t => t.status==='done').length;
  const numberUndoneStatus = tasks.filter(t => t.status==='undone').length;
  const numberNotselected = tasks.filter(t => t.status==='select status').length;
  const [alert, setAlert] = useState({ show: false, msg: '', type: ''  });
   const showAlert = (show = false, type = '', msg = '' ) => {
         setAlert({ show,  type, msg  });
       };
// const[showModal,setShowModal]=useState(false)
const [open, setOpen] = useState(false);
const [focusAfterClose, setFocusAfterClose] = useState(true);
const [isDarkMode , setIsDarkMode]=useState();
const {mode} = useSelector((state)=>state.darkMode);

const toggleDarkMode = () => {
  const newDarkMode = !isDarkMode;
  setIsDarkMode(newDarkMode);
  // localStorage.setItem('darkTheme', newDarkTheme);
};
  //  const [data, setData] = useState([]);
  //   const apiGet = () => {
  //       fetch("../Data/data.json")
  //           .then((response) => response.json())
  //           .then((json) => {
  //               setData(json);
  //           });
  //   };
  //   useEffect(() => {
  //       apiGet();
  //   }, []);
  const deleteHandler=()=>{
    dispatch(clearTasks()),
    showAlert(true, 'danger', 'you just deleted all tasks')
  }

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
 

useEffect(()=>{
  showAlert(true, 'success', 'WELCOME')
  // showModal(true,"ok")
  //  setTimeout(<Alert/>,5000);
// setAlert(<Alert/>
  // {alert.show && <Alert {...alert} removeAlert={showAlert} tasks={task} />|| "WELCOME"}
  // )
dispatch(setFilter('All'));
// setTimeout(<p>load </p> ,5000);

},[])
// if(isLoading){
//   return   <div >  {alert.show && <Alert {...alert} removeAlert={showAlert} tasks={task} />|| "WELCOME"}</div>
//   // (<p>loading...</p>)
//   // return setTimeout(<p>load </p> ,5000);
// } 

  return (
    <div className="App" style={{background: mode? 'gray' : 'white'}}> 
    
      <div className='modeContainer'>
<button className='mode-btn' onClick={()=>dispatch(toggleMode())} 
// style={{padding:'1px',width:'2rem',
// height:'2rem',backgroundColor:'transparent',button:'focus-visible{border:none}'}}
> 
{mode? (
  <BsFillMoonFill style={{width:'1.2rem',height:'1.2rem'}}/>
):(
<BsFillSunFill style={{width:'1.2rem',height:'1.2rem'}}/>
)
}
</button>
       
        </div>
      {/* <button onClick= {()=>setOpen(true)}>modal</button>
      {open && <ModalFocusAfterClose/>} */}
    
     {numberStatus === tasks.length && numberStatus > "0"? <p style={{color:'green',fontWeight:'bold'}}>excelent everything done !!!  </p>  : <p style={{color:'blue',fontWeight:'bold'}}>Your Tasks</p>}
     <h3>
      {/* {numberComplete}  */}
     all tasks {tasks.length} / not selected {numberNotselected} / done {numberStatus} / undone {numberUndoneStatus}</h3>  
  {numberStatus < "1" ? <p style={{color:'red',fontWeight:'bold'}}>you done nothing</p>: <p style={{color:'blue',fontWeight:'bold'}}>Great You done {numberStatus} task{numberStatus>"1"? "s":''}</p>}
 
  <ToDo showAlert={showAlert}/> 
  <div style={{marginBottom:'1rem'}}> {alert.show && <Alert  {...alert} removeAlert={showAlert}  />|| "Redux-Toolkit"}</div>  
  {/* <div >  {alert.show && <Alert {...alert} removeAlert={showAlert}  />|| "YOU ARE HERE"}</div> */}
   <div  style={{marginBottom:'2rem' }}>
       { 
           currentItems.filter((task)=>{ 
          
                          if (filter === 'All'  ) {
                            return task;          
                          }
            else  {
              return task.status === filter;
            }
        
          })              
       .map((task,id) => (
        <SingleItem
         key={id} 
         showAlert={showAlert}
         id={task.id} time={task.time} title={task.title} status={task.status}
        {...task} 
    
      
       
        // handleSubmit ={(id) => handleSubmit (id)}
       
        // onToggle={done => updateTaskDone(id, done)} 
              // Rename={newName => renameTask(id,newName)}
              // removeHandler={(id) => removeHandler(id)}
              // onToggle={done => updateTaskDone(id, done)} 
              
              />
         ))} 
  
</div>
{tasks.length > "0" ? <button className='clear-btn' onClick={ 
  deleteHandler
  }>clear all tasks</button> : ''}

  <Filters/>

<div style={{paddingLeft:'0rem'}}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
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
