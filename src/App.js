import './App.css';
import PostsForm from './components/postForm/PostsForm';
import PostsList from './components/postList/PostsList';
function App() {
  return (
    <div className="App">
      
      <PostsForm/>
      <PostsList/>
    </div>
  );
}

export default App;
