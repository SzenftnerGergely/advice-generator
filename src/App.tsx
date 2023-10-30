
function App() {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-xl flex flex-col items-center relative bg-[#313a49] p-8 rounded-lg">
        <p className="text-[#3fdd8e] font-medium text-xl uppercase tracking-widest">Advice #117</p>
        <p className="text-[#cee3e9] text-3xl text-center my-6">"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>
        <img src="/pattern-divider-desktop.svg" alt="divider" className="mt-6 mb-8" />
        <div 
          className="bg-[#52ffa8] absolute -bottom-8 w-16 h-16 p-3.5 
          flex items-center justify-center rounded-full
          active:scale-95 cursor-pointer translate-all
          hover:shadow-[0px_0px_45px_6px_rgba(74,222,128,0.7)]
          "
        >
          <img src="/icon-dice.svg" alt="dive icon" />
        </div>
      </div>
    </div>
  )
}

export default App
