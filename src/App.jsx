import Layout from './components/Layout';
import Title from './components/Title';
import Controls from './components/Controls';
import TodoList from './components/TodoList';
import { ToDoProvider } from './context';
function App() {
  
  return (
    <ToDoProvider>
    <Layout>
      <Title/>
      <Controls />
      <TodoList />
      </Layout>
      </ToDoProvider>
  );
}

export default App;