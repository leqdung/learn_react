import './App.css';
import YoutubeList from './components/youtube/YoutubeList';
function App() {
  const name = 'leqdung';
  return (
    <div>
      <YoutubeList>
        {name}
        {/* childrend props là những element, component,text, variable nằm giữa component */}
      </YoutubeList>
    </div>
  );
}

export default App;
