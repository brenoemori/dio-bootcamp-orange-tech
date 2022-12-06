import { useState, useEffect } from 'react';


const Teste = () => {

    const [name, setName] = useState('Breno');


    const handleChangeNAme = () => {
        setName(prev => prev == 'Pablo' ? 'José' : 'Pablo')
    }

    const changeUser = () => {
        handleChangeNAme()
    }



    useEffect(() => {
        changeUser();
    },[]);

    return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeNAme}>Alterar</button>
        </div>
  )
}

export { Teste };
