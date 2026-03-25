import "./App2.css"
import Music from "../components/Music";


const songs = [
      {
            id: 1,
            img: "https://i.ytimg.com/vi/hYU4b-UnCQA/maxresdefault.jpg",
            name: "Panorama",
      },
      {
            id: 2,
            img: "https://images2.thanhnien.vn/528068263637045248/2023/10/12/bia-dia-co-su-gop-mat-cua-em-trai-obito-the-hien-cau-chuyen-ve-su-truong-thanh-anh-obito-16970846048781054579233.jpg",
            name: "Đánh đổi",
      },
      {
            id: 3,
            img: "https://i.ytimg.com/vi/-XjUWe7SrB8/maxresdefault.jpg",
            name: "Mây kín thành đô",
      },

];
export default function App2() {
      return (
            <div>
                  <div className="wrapper">
                        {songs.map((song) => (
                              <Music key={song.id} name={song.name} img={song.img} />
                        ))}
                  </div>
            </div>
      );
}
