import React from 'react'
import { useEffect,useState } from 'react'
import { Form, Link } from 'react-router-dom'
import { Chart } from "react-google-charts";  

import {Line,LineChart,CartesianGrid,XAxis, YAxis, Tooltip, Legend} from "recharts"
export default function Anasayfa() {

  const [users, setUsers] = useState([])
  const [searchTerm, setSearcnTerm] = useState("")
  

  useEffect(() => {
    fetch('https://localhost:7119/api/Products')
    .then(res => res.json())
    .then(data =>setUsers(data))
    .catch(err => console.log(err))
  }, [])
  return (
    
    <div>
      <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">Gelen Zamlar</span>
                </a>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <button class="mr-5 hover:text-gray-900"><Link to="/">Anasayfa</Link></button>
                    <button class="mr-5 hover:text-gray-900"><Link to="/hakkımda">Hakkımda</Link></button>
                    <input type="text" className='ml-28 outline-none w-80 p-1.5 border border-gray-300 text-gray-900 rounded-xl placeholder:text-sm' placeholder='Aramak istediğiniz ürünü giriniz..' onChange={e=>setSearcnTerm(e.target.value)}/>
                </nav>
                
            </div>
        </header>
      <div className='grid grid-cols-4 pl-10 pt-5 gap-y-4 max-w-8xl'>
        
      {
        users && users.filter((val)=>{
          if(searchTerm==""){
              return val
          }else if(val.urunAd.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
              return val
          }}).map(user=>
            
          <div className='pb-6'>
      <div className='w-[270px] h-92 border-2 border-gray-400 rounded-xl shadow-lg'>
        <div className='flex flex-col p-3 gap-y-2'>
          <div className='font-light text-lg'>
            {user.urunAd}
          </div>
          <div className=''>
          {user.urunBilgisi}
          </div>
          <div className='text-3xl font-semibold'>
          {user.urunGuncelFiyat} ₺
          </div>
          <div class=" text-gray-500 pb-3  border-b border-gray-200 leading-none ">Geçmiş Fiyatlar</div>
          <div>
            2021:  {user.urun2021Fiyat} ₺
          </div>
          <div>
            2020:  {user.urun2020Fiyat} ₺
          </div>
          <div>
            2019:  {user.urun2019Fiyat} ₺
          </div>
          <div>
            2018:  {user.urun2018Fiyat} ₺
          </div>
          <div>
            2017:  {user.urun2017Fiyat} ₺
          </div>
          <div>
            2016:  {user.urun2016Fiyat} ₺
          </div>
          <div>
            2015:  {user.urun2015Fiyat} ₺

          </div>
          
        </div>
      </div>
      <div className='mr-36'>
      <Chart
  chartType="ColumnChart"
  data={[["Güncel", "Weight"], ["Güncel", parseInt(user.urunGuncelFiyat)], ["2021", parseInt(user.urun2021Fiyat)],["2020", parseInt(user.urun2020Fiyat)],["2019", parseInt(user.urun2019Fiyat)],["2018", parseInt(user.urun2018Fiyat)],["2017", parseInt(user.urun2017Fiyat)],["2016", parseInt(user.urun2016Fiyat)],["2015", parseInt(user.urun2015Fiyat)]]}
  width="100%"
  height="400px"
  legendToggle
/></div>
      </div>
                )
      }
   
    
   </div>
      

        
   </div>
  )
}















































// import { data } from 'autoprefixer'
// import React from 'react'
// import { useEffect,useState } from 'react'

// export default function Anasayfa() {
//   const [users, setUsers] = useState(false)

//   function veriCekme(){
//     fetch("https://localhost:7119/api/Products")
//     .then(response=>response.json())
//     .then(data=>{
//       console.log(data)
//     }
//       )
// }
  

//   useEffect(() => {

//   veriCekme()
//    }, [])
  
//  function setUsers(data){
// return (
//     <ul>
//       {
//         users && users.map((data)=>{
//           <li key={data.urunID}>
//             {data.urunAD}
//           </li>
//         }
        
//           )
//       }
//     </ul>
//   )
//  }
// }
