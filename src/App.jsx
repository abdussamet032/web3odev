import "./App.css";
import React from 'react' //state yi kllanmak için import ettik
function Arama({aramaMetni,onSearch}){

  function handleChange(event){
    //console.log(event);
    //console.log(event.target.value);
    props.onSearch(event);
  }


  return(
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni} />
      <p>

      </p>
    </div>
  )
}
function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
        <span>
          <a href={url}>{baslik}</a>,
        </span>
      <span><b>Yazar:</b> {yazar}, </span>
      <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
      <span><b>Puan:</b> {puan}</span>
    </li>
  )
}

function Liste(props){
  return(

    <ul>
      { props.yazilar.map(function(yazi){
        return(
          <Yazi key={yazi.id} {...yazi}/>
        );
      })}{""}

    </ul>
  )
}
function App() {
  const[aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "react");

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },    {
      baslik: "Vue Dersleri",
      url: "www.kablosuzkedi.com",
      yazar: "Gökan Kandemir",
      yorum_sayisi: 12,
      puan: 5,
      id: 2,
    },
    {
      baslik: "Adem ilter Css anlatıyor",
      url: "wwww.youtube.com.tr",
      yazar: "Adem İlter",
      yorum_sayisi: 442,
      puan: 5,
      id: 3,
    },    {
      baslik: "Prototürk ile JS Dersleri",
      url: "www.youtube.com.tr",
      yazar: "Tayfun Erbilen",
      yorum_sayisi: 300,
      puan: 4,
      id: 4,
    },
    {
      baslik: "Hakkı Alkan Teknolojik Gelişimler",
      url: "www.youtube.com.tr",
      yazar: "Hakkı Alkan",
      yorum_sayisi: 2,
      puan: 5,
      id: 5,
    },

  ];


  const arananYazilar=yaziListesi.filter(
    function(yazi){
      return yazi.baslik.toLocaleLowerCase().includes(aramaMetni.toLocaleLowerCase()) || yazi.yazar.toLocaleUpperCase().includes(aramaMetni.toLocaleUpperCase())
    }
  );


  function handleSearch(event) {
    setAramaMetni(event.target.value);

  }

  React.useEffect(() => {
    localStorage.setItem("aranan",aramaMetni)
  }, [aramaMetni])


  return (

    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni = {aramaMetni} onSearch = {handleSearch}/>
      <strong>
        {aramaMetni} aranıyor...
      </strong>
      <hr />
      <Liste yazilar={arananYazilar}/>

    </div>
  );
}
export default App;
