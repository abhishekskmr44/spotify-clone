import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetArtistDetailsQuery, useGetArtistRelatedQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
     const dispatch = useDispatch()
     const {id: artistId} = useParams()
     const {activeSong, isPlaying } = useSelector((state)=>state.player);



     if(isFetchingArtistDetails ) return
     <Loader title="Loading artist details"/>

     if(error) return <Error/>

    return(
       <div className="flex flex-col">
       <DetailsHeader 
       artistId   = {artistId} 
       artistData = {songData}
       />
       
        <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        />
        </div>
    
   );
};

export default ArtistDetails;
