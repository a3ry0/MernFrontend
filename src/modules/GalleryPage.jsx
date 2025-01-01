import portland from '../assets/downtown-portland-oregon.jpeg';
import echopark from '../assets/echopark-lake.jpeg';
import matplotlib from '../assets/matplotlib-sort-algorithm.png';
import sort from '../assets/python-sort-algorithm-comparison.png';
import waterfall from '../assets/waterfall-multnomahfalls-oregon.jpg';

function GalleryPage(){
    const images = [portland, waterfall, matplotlib, sort, echopark]

    return (
        <>
            <h2>Gallery</h2>
            <p>On this page, you will see photos I have taken on trips and screenshots of past coding projects.</p>
            <article className = "gallery">
                {
                    images.map((image) => 
                        <figure>
                            <img src={image} alt="" title="" />
                        </figure>
                        )
                }
            </article>
        </>
    )
}
export default GalleryPage;