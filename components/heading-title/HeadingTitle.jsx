const HeadingTitle = ({title}) => {
    return ( 
        <div style={divStyles}>
            <h2 style ={h2Styles}>{title}</h2>
        </div>
     );
}
 
const divStyles = {
    padding: "50px 900px",
    background: "linear-gradient(90deg, rgba(155,146,231,1) 16%, rgba(0,212,255,1) 96%, rgba(0,212,255,1) 98%, rgba(0,212,255,1) 100%)",
  };
  
  const h2Styles = {
    color: "black",
    fontSize: "35px",
    fontWeight: "600",
    borderBottom: "2px solid #1976d2",
    width: "max-content",
    paddingBottom: "5px",
  };

export default HeadingTitle;