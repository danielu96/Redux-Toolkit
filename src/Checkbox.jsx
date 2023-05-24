export default function Checkbox({
  checked = false,
  // status="undone",
   onClick}) {
    return (
      <div  onClick={onClick}>
        {
        !checked 
        // status="undone"
        ?  (
          <div className="undone">
            undone           
          </div>
        ):
         (
          <div className="completed">
            done          
          </div>
        )}
      </div>
    );
  }