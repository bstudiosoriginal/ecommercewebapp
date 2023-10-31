import {useState, useEffect} from 'react'


interface MediaQueryProps {
    max_width: number;
}

export const MediaQuery = ({max_width}: MediaQueryProps) => {
  const [matches, setMatches] = useState(false);
  
  useEffect(()=>{
    const query = `(min-width: ${max_width}px)`;
    const media = window.matchMedia(query);
    if (media.matches != matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return ()=>window.removeEventListener('resize', listener)
    }, [matches]);
  return matches
}