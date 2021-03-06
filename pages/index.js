import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [isHover, setHover] = useState(false)

  const handleToggleHover = () => {
    if (isHover) {
      setHover(false)
    } else {
      setHover(true)
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Timi Tejumola</title>
      </Head>
      <div className="mailme"><p>Get in Touch <span role="img" aria-describedby="my-email-address">👉 </span><Link href="mailto:tejumoladavid@gmail.com" target="_blank" rel="noopener noreferrer"><a>HERE</a></Link></p></div>
    <main>
        <div className="section-one">
          <h1 onMouseEnter={handleToggleHover} onMouseLeave={handleToggleHover} className="hello">Hello! <span className="emoji wave-hand" role="img" aria-describedby="wave-emoji">&nbsp;</span></h1>
          <p className="description" >
            I'm <span role="img" aria-describedby="my-name">Timi Tejumola</span>, a design-minded software engineer<br/> focused on building beautiful interfaces & experiences across<br/> mobile & web platforms. 🚀
          </p>
        </div>
        <hr/>
        <div className="section-two">
          <div className="empty-div"/>
          <div className="links">
            <Link
              href="https://docs.google.com/document/d/1B3m6d2JoUdv5Zb-TwwVKVTotKpSLIXKIAWtu9iyO7lA/edit"
            ><a
              className="resume-link"
              target="_blank"
              rel="noopener noreferrer">RESUME</a></Link>
            <ul>
              <li><Link href="https://www.github.com/timi-codes" target="_blank" rel="noopener noreferrer"><a><img src="/images/github.svg" alt="Link to my Github Profile"/></a></Link></li>
              <li><Link href="https://www.linkedin.com/in/timi-tejumola" target="_blank" rel="noopener noreferrer"><a><img src="/images/linkedin.svg" alt="Link to my LinkedIn Profile"/></a></Link></li>
              <li><Link href="https://www.twitter.com/timicodes" target="_blank" rel="noopener noreferrer"><a><img src="/images/twitter.svg" alt="Link to my Twitter Profile" /></a></Link></li>
              <li><Link href="https://medium.com/@tejumoladavid_91868" target="_blank" rel="noopener noreferrer"><a><img src="/images/medium.svg" alt="Link to my Medium Profile"/></a></Link></li>
            </ul>
          </div>
          <div className="avatar">
            <img src="/images/avatarr.webp" alt="Timi Tejumola"/>
          </div>
        </div>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: -8rem;
        }
        main {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
        }
        .mailme {
            position: fixed;
            top: 0;
            background-color: #E25252;
            width: 100%;
            text-align:  center;
            color: white;
            font-weight: 14px;
        }

        .mailme p {
            opacity: 0.8;
            margin: 13px 0;
        }

        .mailme span{
            margin: 0 0.5rem
        }

        .mailme a {
            color: white;
            font-weight: 400
            box-shadow: 1px 0 0 0 black;
            opacity: 100%;
        }
        .emoji {
          width: 40px;
          height: 40px;
        }
        .emoji {
          display: inline-block;
          vertical-align: text-top;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        .wave-hand {
          background-image: url('/images/emoji/wave.png');
          margin-left: 9px;
          cursor: pointer;
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-name: wave;
          animation-name: wave;
        }
        @-webkit-keyframes wave {
          from {
            -webkit-transform: none;
            transform: none;
          }

          15% {
            -webkit-transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
            transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
          }

          30% {
            -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
          }

          45% {
            -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
          }

          60% {
            -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
          }

          75% {
            -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes wave {
          from {
            -webkit-transform: none;
            transform: none;
          }

          15% {
            -webkit-transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
            transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
          }

          30% {
            -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
          }

          45% {
            -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
          }

          60% {
            -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
          }

          75% {
            -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        .hello,
        .description {
          text-align: center;
          margin: 0;
          font-weight: 300;
          line-height: 3rem;
        }
        .description {
          font-size: 2rem;
          margin: 0;
          margin-top: 6rem;
        }
        .description span {
          font-weight: 800;
        }
        .section-one {
          padding: 0 8rem;
        }

        .section-two {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          justify-content: space-between;
          align-items: end;
          padding: 0 8rem;
        }
        .section-two .links {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .resume-link {
          padding: 0.8rem 3rem;
          border: 2px solid #000000;
          border-radius: 5px;
          margin: 3rem 0 1.6rem 0;
          font-weight: 800;
          font-size: 0.8rem;
        }
        .avatar {
          justify-self: end;
          margin-top: 4rem;
          margin-bottom: -5rem;
        }
        .avatar img {
          width: 19rem;
        }
        footer h1 {
          font-size: 13rem;
          margin: 0;
          color: #787878;
          opacity: 0.1;
        }

        @media only screen and (max-width: 600px) {

          .section-one {
            padding: 0 1.1rem;
          }

          .section-two {
            padding: 0 1.1rem;
            grid-template-columns: 1fr;
          }
          .hello {
            font-size: 1.6rem;
            margin-top: 4rem;
          }
          .description {
            font-size: 1.1rem;
            line-height: 150%
            margin-top: 1.8rem;
            text-align: center;
          }
          .avatar {
            margin-top: 0rem;
          }
          .avatar img {
            width: 7.5rem;
            margin-right: 2rem
            margin-top: 2rem
          }
          .resume-link {
            padding: 0.6rem 2rem;
            border: 2px solid #000000;
            border-radius: 5px;
            margin: 2rem 0 1.6rem 0;
            font-weight: 800;
            font-size: 0.8rem;
          }
          .emoji {
            width: 32px;
            height: 32px;
          }
          li {
            padding: 1.4rem
          }
        }

      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, "Helvetica Neue",
            sans-serif;
          background-image: url('/images/dots.svg'), url('/images/tt-text.svg');
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: 100% 20%, 50% 100%;
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: #000000;
          cursor: pointer
        }
        ul {
          display: flex;
          padding: 0px;
        }
        li {
          list-style: none;
          padding: 1.5rem;
          cursor: pointer
        }
      `}</style>
    </div>
  )
}
