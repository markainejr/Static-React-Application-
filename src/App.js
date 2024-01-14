import React from 'react'
import Card from './components/Card';
import experiencesData from './data';
import Navbar from './components/Navbar'
import './components/style.css'
import Hero from './components/Hero';


function App() {
  const dataElements = experiencesData.map(function(item){
    
    return <Card
    key = {item.id} //key property uniquely identfies data  when using the mapping array
    item = {item} // passing objects as props or making our props shorter and neat and usable 
     // {...item} passing objects as props using spread syntax of object literals

    />

  })
  return (
   <div>
    <Navbar/>
    <Hero/>
    <section className="card--list">
    {dataElements}
   </section>
  
   </div>
  );
}

export default App;

/*
key = {item.id}
img = {item.coverImg}
  rating = {item.stats.rating}
  reviewCount = {item.stats.reviewCount}
  location = {item.location}
  title = {item.title}
  price = {item.price}
  openSpots = {item.openSpots}
  */
