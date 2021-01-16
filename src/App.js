import React , {useState ,useEffect} from 'react'
import Searchedvideo from './components/Searchedvideo'
import Nav from './components/Nav'
import './styles/App.scss'
function App() {
  const[searchedVideos , setSearchedVideos] = useState([]);
  const [title , setTitle] = useState([]);
  const[input,setInput] = useState('');
  const [isLoaded,setIsLoaded] = useState(false)
  useEffect(() => {
    //https://www.googleapis.com/youtube/v3/search?key=AIzaSyB2bTFb1RgVoxkUb9bWlVmXd1QBFxQt3gw&part=snippet&q=Carry Minati
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDTafrtwK_zQHlS18sfKFbTBJHRtce87D4&part=snippet&maxResults=12&regionCode=IN&type=video&q=${input}`)
    .then( res => res.json())
    .then(data => {
      let videoData = data.items.map(data => `https://www.youtube.com/embed/${data.id.videoId}`)
      let titleData = data.items.map(data => data.snippet.title)
      setTitle(titleData)
      setIsLoaded(true);
      setSearchedVideos(videoData)
    },[input])
    .catch((er) => alert(`please try after some time ${er}`))
  },[input])
  
  return (
    <div className="App">
       <Nav setInput = {setInput}/>
       <div className = 'video'>
       {searchedVideos.map((video ,i) => {
        return(
          <Searchedvideo isLoaded = {isLoaded} video = {video} key = {i} title={title[i]}/>
        )
      })}
       </div>
    </div>
  );
}

export default App;
