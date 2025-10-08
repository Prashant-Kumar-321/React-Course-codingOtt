import {useEffect} from 'react'; 

const Download = () => {
    
    const downloadImage = ()=>{
        const a = document.createElement('a');
        a.href = '/background-wallpaper-hd.jpg';
        a.download = 'background-hd-wallpaper';
        a.click();
    }
    
    useEffect(downloadImage, []);

    return (
        <div>
            Thanks for downloading...

            <button onClick={downloadImage}>Download Image</button>
        </div>
    )
}

export default Download;
