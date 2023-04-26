export default function Checkbox({checked = false, onClick}) {
    return (
      <div  onClick={onClick}>
        {!checked ? (
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