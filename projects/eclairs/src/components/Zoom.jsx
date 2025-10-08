import {useState, useRef, useEffect} from 'react'; 

const Zoom = () => {
    const ZOOMLEVEL = 10, MAXZOOM = 400, MINZOOM = 200; 
    const [size, setSize] = useState(MINZOOM);
    const zoomRef = useRef(null); 


    function zoomIn(){
        if(size < MAXZOOM) 
            setSize(size+ZOOMLEVEL);  
    }

    function zoomOut(){
        if(size > MINZOOM) 
            setSize(size-ZOOMLEVEL); 
    }

    const handleMouseWheelZoomEvent = (event) => {
        const deltaY = event.deltaY;
        event.stopPropagation();
        event.preventDefault();
        
        if (deltaY < 0){
            // wheel up
            zoomIn();
        }
        else{
            // wheel down
            zoomOut();
        }
    }


    useEffect(()=>{
        const node = zoomRef.current; 
        if(!node) return; 

        node.addEventListener('wheel', handleMouseWheelZoomEvent, { passive: false });

        return () => {
            node.removeEventListener('wheel', handleMouseWheelZoomEvent, { passive: false });
        };


    }, [size]); 


    return (
        <div style={{
            padding: 28,
        }}>
            <div ref={zoomRef} style={{
                width: size,
                height: size,
                backgroundColor: "dodgerblue",
                borderRadius: "8px",
                transitionDuration: "300ms",
            }}>

            </div>

            <button onClick={zoomIn}>ZoomIn - {size}</button>
            <button onClick={zoomOut}>ZoomOut - {size}</button>
            <button onClick={()=>setSize(MINZOOM)}>Reset</button>
        </div>
    )
}

export default Zoom; 