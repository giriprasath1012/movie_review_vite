import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card';
import imgps from './imgps2.jpg';
import imggn from './imggn.jpg';
import imgmm from './imgmm.jpg';
import imgvs from './imgvs.jfif';
import imgmv from './imgmv.jpg';
import imgpt from './imgpt.webp';




function App() {
  const [movieDetails, setMovieDetails] = useState({
    name: '',
    img: '',
    dic: '',
    actor: '',
    actress: '',
    rating: '',
    
  });

 
  return (
    <>
    <div className='main'>
      <div className='side  rounded-xl'  >
        <ul className =  "items-center text-center justify-center">
          <h1 className=  "text-black font-sans font-semibold">Movie List</h1>
          <li className=  " p-10 text-black text-xl font-serif font-medium hover:text-cyan" onClick={f1}>Ponniyan Selvan 2</li>
          <li className=" p-10 text-black text-xl font-serif font-medium hover:text-cyan" onClick={f2}>Good Night</li>
          <li className=" p-10 text-black text-xl font-serif font-medium hover:text-cyan" onClick={f3}>Maamanan</li>
          <li className="p-10 text-black text-xl font-serif font-medium hover:text-cyan" onClick={f4}>Varisu</li>
          <li className="p-10 text-black text-xl font-serif font-medium hover:text-cyan" onClick={f5}>Maaveeran</li>
          <li className="p-10 text-black text-xl font-serif font-medium hover:text-cyan" onClick={f6}>Pathu Thala</li>
          
          

        </ul>

        
      </div>
      
      <div className="display rounded-xl items-center justify-center text-black ">

      <Card 
            name={movieDetails.name}
            img={movieDetails.img}
            dic={movieDetails.dic}
            actor={movieDetails.actor}
            actress={movieDetails.actress}
            rating={movieDetails.rating}
          
          />

       
      </div>
    </div> 
    </>
  )

  function f1() {
    
    
    setMovieDetails({
      name: "Ponniyan Selvan 2",
      img: imgps,
      dic: "Mani Ratnam",
      actor: "Jayam Ravi, Vikram, Karthi",
      actress: "Trisha, Aishwarya Rai",
      rating: "4.5",
      
      
    });
    
    
  }

  function f2() {
   
    setMovieDetails({
      name: "Good Night",
      img: imggn,
      dic: "Vinayak Chandrasekaran",
      actor: "K.Manikandan",
      actress: "Meetha Raghunath",
      rating: "3.5",
    });
  }

  function f3() {
    
    setMovieDetails({
      name: "Maamannan",
      img: imgmm,
      dic: "Mari Selvaraj",
      actor: "Udhayanidhi Stalin",
      actress: "Keerthy Suresh",
      rating: "4.1",
    });
  }

  function f4() {
    
    setMovieDetails({
      name: "Varisu",
      img: imgvs,
      dic: "Vamshi Paidipally",
      actor: "Vijay",
      actress: "Rasmika Mandanna",
      rating: "4.5",
    });
  }

  function f5() {
    
    setMovieDetails({
      name: "Maaveeran",
      img: imgmv,
      dic: "Madonne Ashwin",
      actor: "Sivakarthikeyan",
      actress: "Aditi Shankar",
      rating: "3.5",
    });
  }

  function f6() {
    
    setMovieDetails({
      name: "Pathu Thala",
      img: imgpt,
      dic: "Krishna",
      actor: "Silambarasan , Gautham Karthik",
      actress: "Priya Bhavani Shankar",
      rating: "4.5",
    });
  }


}

export default App
