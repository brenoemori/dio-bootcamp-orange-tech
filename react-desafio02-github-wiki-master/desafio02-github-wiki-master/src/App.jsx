
import { useEffect, useState } from 'react';
import './App.css';
import GitHub from './components/icons/github';
import api from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Repo = ({ data, remove }) => {
  return <div className="repo text-white flex flex-col border-y px-1" key={data.id}>
    <h2 className='font-bold text-4xl'>{data.name}</h2>
    <span >{data.full_name}</span>
    <a className='text-xs' target={"_blank"} href={data.html_url}>ir para repositório</a>

    <button className='w-fit text-red-400' onClick={() => { remove(data.id) }}>Remover</button>
  </div>
}


function App() {

  const [search, setSearch] = useState("")
  const [repos, setRepos] = useState([])

  const searchRepo = async () => {
    try {
      const repo = await api.get(search)
      if (repos.find(curr => curr.id === repo.data.id)) {
        toast("Repositório já adicionado!", { type: "error", position: "top-right" })
        return
      }
      setRepos(old => [...old, repo.data])
    } catch (error) {
      toast("Erro ao obter repositório!", { type: "error", position: "top-right" })
    }

  }

  const removeRepoById = (id) => {
    setRepos(old => { return old.filter(curr => curr.id !== id) })
  }

  useEffect(() => {
    console.log(repos)
  }, [repos])

  return (
    <div className="App">
      <ToastContainer />
      <div className="content flex flex-col items-center justify-center w-screen h-screen">
        <GitHub />
        <div className="search mt-1">
          <input type="text" name="search" id="search" className='bg-transparent border rounded-md px-1 text-white font-bold' value={search} onChange={e => setSearch(e.target.value)} />
          <button className='bg-white px-1 rounded-md mx-1 border border-black hover:bg-gray-400' onClick={_ => { searchRepo() }}>Procurar</button>
        </div>
        <div className="repositories h-80  my-2 overflow-y-scroll w-72">
          {repos.map(curr => { return <Repo remove={removeRepoById} data={curr} /> })}
        </div>
      </div>
    </div>
  );
}

export default App;
