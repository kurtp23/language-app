import Translate from './spanish';

function AudioSearch (word) {
  try{
    Translate.search(word).then((data) => {
      console.log('data is', data.data);
      if (typeof(data.data[0]) === 'string') {
        return ('');
      } 

      if (!data.data[0].hwi.prs) {
        return ('');
      }
        
      if (!data.data[0].hwi.prs[0].sound) {
        return ('');
      }

      if (data.data[0].hwi.prs[0].sound.audio) {
        console.log((`https://media.merriam-webster.com/audio/prons/es/me/mp3/${data.data[0].hwi.prs[0].sound.audio.charAt(0)}/${data.data[0].hwi.prs[0].sound.audio}.mp3`));
        return (`https://media.merriam-webster.com/audio/prons/es/me/mp3/${data.data[0].hwi.prs[0].sound.audio.charAt(0)}/${data.data[0].hwi.prs[0].sound.audio}.mp3`);
      }

      else {
        return ('');
      }
    });
  }
  catch(err) {console.log(err);}
}

export default AudioSearch;