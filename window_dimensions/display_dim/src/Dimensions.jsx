import { useState,useEffect } from "react";



function Dimensions(){


    const [width,setWidth]= useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);


    useEffect(() => {
        function handleResize() {
          setHeight(window.innerHeight);
          setWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


      return (
          <p>Dimensions: {height} X {width}</p>
      )
};

export default Dimensions;
