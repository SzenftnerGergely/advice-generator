import axios from "axios";
import { useEffect, useState } from "react"
import Generator from "./component/Generator";

type Advice = {
  id: number,
  advice: string,
}

function App() {
  const [advice, setAdvice] = useState<Advice>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const getAdvice = async () => {
    setLoading(true);

    await axios
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
    <>
      <Generator
        advice={advice}
        loading={loading}
        error={error}
        getAdvice={getAdvice}
      />
    </>
  )
}

export default App
