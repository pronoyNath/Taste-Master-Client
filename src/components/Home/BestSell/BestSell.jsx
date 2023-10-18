import PhotoAlbum from "react-photo-album";

const photos = [
  {
    src: "https://i.ibb.co/Z8kBkCK/red3.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "https://i.ibb.co/Vghzzvf/Starbucks1.jpg", width: 400, height: 300 },
      { src: "https://i.ibb.co/Z8kBkCK/red3.jpg", width: 200, height: 150 },
    ],
  },
  {
    src: "https://i.ibb.co/R6H2t6T/mac2.jpg",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "https://i.ibb.co/6vVxcbd/NL47423.webp", width: 800, height: 450 },
      { src: "https://i.ibb.co/PYpzwWt/81-DDsme-SGd-L-AC-UF1000-1000-QL80.jpg", width: 400, height: 225 },
    ],
  }
];

export default function BestSell() {
  return <div className="py-10">
    <h3 className='py-7 mb-5 text-2xl md:text-4xl font-bold text-yellow-900 text-center font-garamond'>Best Selling Products Of The Month</h3>
    <PhotoAlbum layout="rows" photos={photos} />
  </div>
}