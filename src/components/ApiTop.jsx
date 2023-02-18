import React, { useEffect, useState } from 'react'

const ApiTop = () => {

  const newsApi = `https://hacker-news.firebaseio.com/v0/newstories.json`;



  const [news,setNews] = useState([]);

  useEffect(() => {
    fetch(newsApi)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setNews(data)
    })
  },[]);


  const a = news.map( value => {
    return `https://hacker-news.firebaseio.com/v0/item/${value}.json`
  });
  const k = a.slice(0,20)




  const [api, setApi] = useState([]);

  useEffect(()=> {
    k.map(data => {
    fetch(data)
    .then(res=> {
      return res.json();
    })
    .then(data2 => {
    //  console.log(data2);
     setApi(data2);
    })
  });
  },[news]);

  console.log(api);



  return (
    <div>
    </div>
  )
}

export default ApiTop
