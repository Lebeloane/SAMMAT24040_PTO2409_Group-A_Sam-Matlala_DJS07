import { useState, useEffect } from 'react';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])


  useEffect(() => {
     async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
     }
    getMemes()
  }, [])

  const getMemeImage = ()  => {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    console.log(url)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
   }


    const handleChange = (event) => {
      const {name, value} = event.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
      }))
    }

  return (
    <main>
      <div className='form'>
        <div>
              <input
                  name="topText"
                  type="text"
                  placeholder="Top text"
                  className="form--input"
                  value={meme.topText}
                  onChange={handleChange}
              />
        </div>
        
        <div>
            <input
                name="bottomText"
                type="text"
                placeholder="Bottom text"
                className="form--input"
                value={meme.bottomText}
                onChange={handleChange}
            />
        </div>
        
        <button 
            className='form--button'
            onClick={getMemeImage}
        >
            Get a new meme image 🖼
        </button>
      </div>

      <div className='meme'>
        <img src={meme.randomImage} className='meme--image'/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
      
    </main>
  )
}

export default Meme;
