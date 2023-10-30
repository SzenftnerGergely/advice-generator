import axios from "axios";
import { useEffect, useState } from "react"

type Advice = {
  id: number,
  advice: string,
}

function App() {
  const [advice, setAdvice] = useState<Advice>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const getAdvice = () => {
    setLoading(true);

    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        setAdvice(response.data.slip)        
      })
      .catch(error => {
        console.log(error);
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      });
  };

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {error ?
      (<div className="text-[#cee3e9] text-3xl">Oooops... something went wrong!</div>) :
      (<div
        className="max-w-[540px] flex flex-col items-center 
        relative bg-[#313a49] p-10 rounded-lg"
      >
        <p className="text-[#3fdd8e] font-semibold 
         text-lg uppercase tracking-[0.3rem]"
        >
          Advice #{advice.id}
        </p>
        {loading ?
          <span className="loading loading-dots loading-lg"></span> :
          <p className="text-[#cee3e9] text-3xl text-center 
            my-6 font-semibold leading-10"
          >
            "{advice.advice}"
          </p>}
        <img src="/pattern-divider-desktop.svg" alt="divider" className="mt-6 mb-8" />
        <div
          className="bg-[#52ffa8] absolute -bottom-8 w-16 h-16 p-3.5 
          flex items-center justify-center rounded-full
          active:scale-95 cursor-pointer translate-all
          hover:shadow-[0px_0px_45px_6px_rgba(74,222,128,0.7)]
          "
          onClick={getAdvice}
        >
          <img src="/icon-dice.svg" alt="dive icon" />
        </div>
      </div>)}
    </div>
  )
}

export default App
