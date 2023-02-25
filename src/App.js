import react from 'react';
import Card from './Card';
import Data from './Data';

function App() {

  return (
    <>

      <Card
        imgsrc={Data[0].imgsrc}
        title={Data[0].title}
        desc={Data[0].sname}
        sname={Data[0].link}
        demo1={Data[0].demo1}
        demo2={Data[0].demo2}
        demo3={Data[0].demo3}
        demo4={Data[0].demo4}
        demo5={Data[0].demo5}
      />

      <Card
        imgsrc={Data[1].imgsrc}
        title={Data[1].title}
        desc={Data[1].sname}
        sname={Data[1].link}
        demo1={Data[1].demo1}
        demo2={Data[1].demo2}
        demo3={Data[1].demo3}
        demo4={Data[1].demo4}
        demo5={Data[1].demo5}
      />

      <Card
        imgsrc={Data[2].imgsrc}
        title={Data[2].title}
        desc={Data[2].sname}
        sname={Data[2].link}
        demo1={Data[2].demo1}
        demo2={Data[2].demo2}
        demo3={Data[2].demo3}
        demo4={Data[2].demo4}
        demo5={Data[2].demo5}
      />

      <Card
        imgsrc={Data[3].imgsrc}
        title={Data[3].title}
        desc={Data[3].sname}
        sname={Data[3].link}
        demo1={Data[3].demo3}
        demo2={Data[3].demo2}
        demo3={Data[3].demo3}
        demo4={Data[3].demo4}
        demo5={Data[3].demo5}
      />

      <Card
        imgsrc={Data[4].imgsrc}
        title={Data[4].title}
        desc={Data[4].sname}
        sname={Data[4].link}
        demo1={Data[4].demo4}
        demo2={Data[4].demo2}
        demo3={Data[4].demo3}
        demo4={Data[4].demo4}
        demo5={Data[4].demo5}
      />

      <Card
        imgsrc={Data[5].imgsrc}
        title={Data[5].title}
        desc={Data[5].sname}
        sname={Data[5].link}
        demo1={Data[5].demo5}
        demo2={Data[5].demo2}
        demo3={Data[5].demo3}
        demo4={Data[5].demo4}
        demo5={Data[5].demo5}
      />

      <Card
        imgsrc={Data[6].imgsrc}
        title={Data[6].title}
        desc={Data[6].sname}
        sname={Data[6].link}
        demo1={Data[6].demo6}
        demo2={Data[6].demo2}
        demo3={Data[6].demo3}
        demo4={Data[6].demo4}
        demo5={Data[6].demo5}
      />

      <Card
        imgsrc={Data[7].imgsrc}
        title={Data[7].title}
        desc={Data[7].sname}
        sname={Data[7].link}
        demo1={Data[7].demo7}
        demo2={Data[7].demo2}
        demo3={Data[7].demo3}
        demo4={Data[7].demo4}
        demo5={Data[7].demo5}
      />

    </>

  );
}

export default App;