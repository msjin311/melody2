import Link from "next/link";
import EditPlaylist from './editplaylist/page';


const PlaylistLayout = () => {
    return (
        <div>
            <h1>playlist page layout</h1>
            <Link href='/playlist/editplaylist'>제발 되어라</Link>

        </div>

    )
}

export default PlaylistLayout