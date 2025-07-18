import React,{ useState ,useCallback ,useEffect , useRef } from 'react'
import './App.css'
import UseCurrencyInfo from "./hooks/useCurrencyInfo"
import InputBox from './components/InputBox'


function App() {
  
  const [amount,setAmount]=useState(4)
  const [from,setfrom]=useState('usd')
  const [to,setto]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)

  const CurrencyInfo=UseCurrencyInfo(from)
//   console.log(CurrencyInfo);
  
  const keys=Object.keys(CurrencyInfo)

  const swap=()=>{
    setfrom(to)
    setto(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)

  }

  const convert= ()=> setConvertedAmount(amount*CurrencyInfo[to])

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://www.pexels.com/photo/traditional-swedish-house-with-vintage-charm-31762655/')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                Amount={amount}
                                currencyOptions={keys}
                                selectCurrency={from}
                                OnAmountChange={(amount)=> setAmount(amount)}
                                onCurrencyChange={(currency)=>setfrom(currency)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                Amount={convertedAmount}
                                currencyOptions={keys}
                                onCurrencyChange={(currency)=> setto(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
