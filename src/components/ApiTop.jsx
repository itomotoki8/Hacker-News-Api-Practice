import React from 'react'

const ApiTop = () => {

  const topURL = "https://hacker-news.firebaseio.com/v0/newstories.json";
  const itemURL = "https://hacker-news.firebaseio.com/v0/item/";//${a[0]}.json?print=pretty


  const itemFetch = async (array) => {
    // 配列をそのままfetch
    const res = await fetch(array);
    const data = await res.json();
    console.log(data);
  };
  // 配列を展開してfetch　
  //   const res = await array.map(e => {
  //     return fetch({e});
  //   })
  //   console.log(res);
  // };

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const topArray = await data.slice(0,20);
    const topData = await topArray.map(v => {
     return `${itemURL}${v}.json?print=pretty`
    });
    await itemFetch(topData);
  };

  fetchData(topURL);


  return (
    <div>
    </div>
  )
}

export default ApiTop
