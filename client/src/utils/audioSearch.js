import Translate from './spanish';

async function AudioSearch(word) {
  try {
    const data = await Translate.search(word);

    if (data.data[0]?.hwi?.prs[0]?.sound?.audio) {
      return (`https://media.merriam-webster.com/audio/prons/es/me/mp3/${data.data[0].hwi.prs[0].sound.audio.charAt(0)}/${data.data[0].hwi.prs[0].sound.audio}.mp3`);
    }

    else {
      return ('');
    }
  }
  catch (err) { console.log(err); }
}

export default AudioSearch;