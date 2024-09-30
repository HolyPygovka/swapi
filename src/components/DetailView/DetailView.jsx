import { IMG_BASE_URL } from "./enum";

export const DetailView = ({ detailInfo, activeSection, id }) => {

    return(
        <div className='DetailView'>
            <h3>Detail info</h3>
            <div>
                <h4>{`Name: ${detailInfo.name}`}</h4>
                <img src={`${IMG_BASE_URL}${activeSection}/${id}.jpg`} alt="" />
                <p>{`Eye color: ${detailInfo.eyeColor}`}</p>
                <p>{`Weight: ${detailInfo.mass}`}</p>
            </div>
        </div>
    );
}