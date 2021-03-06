import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ven-tor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="content">
          <Link href="/animation-main-page">
            <a className="animation_page">
              <div className="amim-page_btn">animation-main-page</div>
            </a>
          </Link>
          <Link href="/minimal-page">
            <a className="minimal_page">
              <div className="min-page_btn">minimal-main-page</div>
            </a>
          </Link>
        </div>

      </main>

      <style jsx global>{`
      
#container.visible > a{
  opacity: 0 !important; 
  bottom: -100%;
  right: -100%;
  display: none!important;
}
      .main {
        width: 100%;
        font-family: 'lacart';
      }
      .animation_page,
      .minimal_page {
        font-family: 'lacart';
        width: 100%;
        height: 50vh;
        position: relative;
        font-size: 36px;
        color: #000;
      }
      .animation_page > div,
      .minimal_page > div {
        transform: translate(-50%, -50%);
        position: absolute;
        left: 50%;
        padding: 30px 50px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 10%;
      }
      .animation_page div {
        top: 50%;
      }
      .minimal_page div {
        bottom: 50%;
      }
      div a {
        display: block;
      }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: lacart.ttf;

        }

        * {
          box-sizing: border-box;
        }
        
      @media screen and (max-width: 760px){
        .animation_page,
        .minimal_page {
          font-size: 22px;
          // padding: 0;
        }
        .animation_page > div,
      .minimal_page > div{
        padding: 10px;
      }
        .amim-page_btn, .min-page_btn{
          width: 300px;
          text-align: center;
          // padding: 0;
        }
}
      `}</style>
    </div>
  );
}
