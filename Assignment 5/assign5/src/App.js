import './App.css';
import Card from './components/CardComponent';
function App() {
  let data = [
    {
      topics: "ของคาว",
      name: "ข้าวผัด",
      detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imgSrc: "https://img-global.cpcdn.com/recipes/725b05b137e5b4c3/1200x630cq70/photo.jpg",
    },
    {
      topics: "ของหวาน",
      name: "บัวลอย",
      detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imgSrc: "https://s3.theasianparent.com/cdn-cgi/image/height=250/tap-assets-prod/wp-content/uploads/sites/25/2022/01/dumplings-in-coconut-cream.jpg",
    },
    {
      topics: "ของหวาน",
      name: "ข้าวเหนียวทุเรียน",
      detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imgSrc: "https://content.shopback.com/th/wp-content/uploads/2020/07/09114111/END1.jpg",
    },
  ];
  return (
    <div className="App">
      <h1>โหวตอาหาร</h1>
      <div className='Container'>
      {data.map((e)=><Card {...e}/>)}
      </div>
    </div>
  );
}

export default App;
